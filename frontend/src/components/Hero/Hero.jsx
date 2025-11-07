import { useEffect, useState } from 'react';
import { partners as partnersList } from '../../content';
import useReveal from '../../hooks/useReveal';
import './Hero.css';

function Hero({ content }) {
  const [ref, isVisible] = useReveal(0.3);
  const [isReady, setIsReady] = useState(false);
  const [current, setCurrent] = useState(0);
  const totalPartners = partnersList.length;

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const next = () => setCurrent((index) => (index + 1) % totalPartners);
  const prev = () => setCurrent((index) => (index - 1 + totalPartners) % totalPartners);
  const goTo = (index) => setCurrent((index + totalPartners) % totalPartners);

  const partner = partnersList[current];
  const formatIndex = (value) => value.toString().padStart(2, '0');

  return (
    <section
      id="hero"
      ref={ref}
      className={`pe-hero pe-animate ${isVisible ? 'is-visible' : ''} ${isReady ? 'pe-hero--ready' : ''}`}
    >
      <div className="pe-hero__background" aria-hidden="true" />
      <div className="pe-hero__grid">
        <div className="pe-hero__copy pe-animate-child" style={{ transitionDelay: '0.1s' }}>
          <h1>{content.title}</h1>
          <p className="pe-hero__description">{content.description}</p>

          <div className="pe-hero__actions-grid" role="group" aria-label="Azioni principali">
            <a className="pe-btn pe-btn--primary" href="#contatti">
              {content.ctaPrimary}
            </a>
            <a className="pe-btn pe-btn--ghost" href="#servizi">
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="pe-hero__slider pe-animate-child" style={{ transitionDelay: '0.22s' }}>
          <div className="pe-hero__slider-header">
            <span className="pe-hero__slider-eyebrow">Partner certificati</span>
            <span className="pe-hero__slider-count">
              {formatIndex(current + 1)}
              <span className="pe-hero__slider-count-total">/{formatIndex(totalPartners)}</span>
            </span>
          </div>

          <div className="pe-hero__slider-body">
            <div className="pe-hero__slide" key={partner.name} aria-live="polite">
              <figure className="pe-hero__partner-card">
                <img src={partner.logo} alt={partner.name} className="pe-hero__partner-logo" />
                <figcaption className="pe-hero__partner-name">{partner.name}</figcaption>
              </figure>
            </div>

            <button
              type="button"
              className="pe-hero__arrow pe-hero__arrow--prev"
              onClick={prev}
              aria-label="Partner precedente"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              className="pe-hero__arrow pe-hero__arrow--next"
              onClick={next}
              aria-label="Partner successivo"
            >
              &rsaquo;
            </button>
          </div>

          <div className="pe-hero__slider-dots" role="tablist" aria-label="Partner">
            {partnersList.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`pe-hero__slider-dot ${index === current ? 'is-active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Mostra partner ${item.name}`}
                aria-current={index === current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;