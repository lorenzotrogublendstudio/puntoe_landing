import { useEffect, useMemo, useState } from 'react';
import useReveal from '../../hooks/useReveal';
import './Partners.css';
import useMediaQuery from '../../hooks/useMediaQuery';

function PartnerLogo({ partner, delay }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={`pe-partners__logo pe-animate-child ${failed ? 'is-fallback' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {!failed && (
        <img
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="pe-partners__fallback" aria-hidden="true">
          {partner.name}
        </span>
      )}
    </figure>
  );
}

function Partners({ items }) {
  const [ref, isVisible] = useReveal(0.2);
  const isMobile = useMediaQuery('(max-width: 640px)');

  const slides = useMemo(() => {
    const chunkSize = isMobile ? 1 : 2;
    const result = [];
    for (let index = 0; index < items.length; index += chunkSize) {
      result.push(items.slice(index, index + chunkSize));
    }
    return result;
  }, [items, isMobile]);

  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide((prev) => {
      if (!totalSlides) return 0;
      return Math.min(prev, totalSlides - 1);
    });
  }, [totalSlides]);

  const goToSlide = (nextIndex) => {
    if (!totalSlides) return;
    setCurrentSlide((nextIndex + totalSlides) % totalSlides);
  };

  const handlePrev = () => goToSlide(currentSlide - 1);
  const handleNext = () => goToSlide(currentSlide + 1);

  return (
    <section
      id="partner"
      ref={ref}
      className={`pe-partners pe-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="pe-partners__wrapper pe-animate-child" style={{ transitionDelay: '0.12s' }}>
        <h2 className="pe-partners__title">PARTNER CERTIFICATI</h2>

        <div className="pe-partners__slider">
          <button
            type="button"
            className="pe-partners__arrow pe-partners__arrow--prev"
            onClick={handlePrev}
            aria-label="Loghi precedenti"
          >
            ‹
          </button>

          <div className="pe-partners__viewport" aria-live="polite">
            <div
              className="pe-partners__slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((group, slideIndex) => (
                <div className="pe-partners__slide" key={`partners-slide-${slideIndex}`}>
                  {group.map((partner, index) => (
                    <PartnerLogo
                      key={`${partner.name}-${index}`}
                      partner={partner}
                      delay={0.12 * (slideIndex * 2 + index + 1)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="pe-partners__arrow pe-partners__arrow--next"
            onClick={handleNext}
            aria-label="Loghi successivi"
          >
            ›
          </button>
        </div>

        {totalSlides > 1 && (
          <div className="pe-partners__pagination" role="tablist" aria-label="Navigazione partner">
            {slides.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                role="tab"
                aria-label={`Mostra slide ${index + 1}`}
                aria-selected={index === currentSlide}
                className={`pe-partners__dot ${index === currentSlide ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Partners;



