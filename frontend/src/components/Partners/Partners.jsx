import { useRef, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import useReveal from '../../hooks/useReveal';
import './Partners.css';

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
  const sliderRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');  const isTablet = useMediaQuery('(max-width: 1024px)');  const isPortrait = useMediaQuery('(orientation: portrait)');

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const track = sliderRef.current;    if (!track) return;    
    const cards = Array.from(track.children || []);    if (!cards.length) return;    
    const viewportCenter = track.scrollLeft + track.clientWidth / 2;    let currentIndex = 0;    
    let minDist = Infinity;    cards.forEach((el, i) => {      const center = el.offsetLeft + el.clientWidth / 2;      
      const dist = Math.abs(center - viewportCenter);      
      if (dist < minDist) {        
        minDist = dist;        
        currentIndex = i;      
      }    
    });    
    const delta = (isMobile || (isTablet && isPortrait)) ? 1 : isTablet ? 2 : 3;    
    let targetIndex = currentIndex + delta * direction;    
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex > cards.length - 1) targetIndex = cards.length - 1;
    const target = cards[targetIndex];
    const targetLeft = target.offsetLeft - (track.clientWidth - target.clientWidth) / 2;
    track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
  };

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
            onClick={() => handleScroll(-1)}
            aria-label="Loghi precedenti"
          >
            ‹
          </button>

          <div className="pe-partners__track" ref={sliderRef}>
            {items.map((partner, index) => (
              <PartnerLogo key={partner.name} partner={partner} delay={0.12 * (index + 1)} />
            ))}
          </div>

          <button
            type="button"
            className="pe-partners__arrow pe-partners__arrow--next"
            onClick={() => handleScroll(1)}
            aria-label="Loghi successivi"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Partners;



