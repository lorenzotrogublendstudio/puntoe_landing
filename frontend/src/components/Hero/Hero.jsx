import { useEffect, useState } from 'react';
import { partners as partnersList } from '../../content';
import useReveal from '../../hooks/useReveal';
import './Hero.css';

function Hero({ content }) {
  const [ref, isVisible] = useReveal(0.3);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % partnersList.length);
  const prev = () => setCurrent((i) => (i - 1 + partnersList.length) % partnersList.length);

  const partner = partnersList[current];

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
          <div className="pe-hero__actions">
            <a className="pe-btn pe-btn--primary" href="#contatti">
              {content.ctaPrimary}
            </a>
            <a className="pe-btn pe-btn--ghost" href="#servizi">
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="pe-hero__slider pe-animate-child" style={{ transitionDelay: '0.22s' }}>
          <button type="button" className="pe-hero__arrow pe-hero__arrow--prev" onClick={prev} aria-label="Logo precedente">&lsaquo;</button>

          <div className="pe-hero__slide" key={partner.name}>
            <figure className="pe-hero__partner-card">
              <img src={partner.logo} alt={partner.name} className="pe-hero__partner-logo" />
              <figcaption className="pe-hero__partner-name">{partner.name}</figcaption>
            </figure>
          </div>

          <button type="button" className="pe-hero__arrow pe-hero__arrow--next" onClick={next} aria-label="Logo successivo">&rsaquo;</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
