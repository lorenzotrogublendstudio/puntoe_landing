import { useEffect, useState } from 'react';
import useReveal from '../../hooks/useReveal';
import './Hero.css';

function Hero({ content }) {
  const [ref, isVisible] = useReveal(0.3);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className={`pe-hero pe-animate ${isVisible ? 'is-visible' : ''} ${isReady ? 'pe-hero--ready' : ''}`}
    >
      <div className="pe-hero__background" aria-hidden="true" />
      <div className="pe-hero__grid">
        <div className="pe-hero__copy pe-animate-child" style={{ transitionDelay: '0.1s' }}>
          <p className="pe-hero__eyebrow">{content.eyebrow}</p>
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

        <div className="pe-hero__highlights pe-animate-child" style={{ transitionDelay: '0.22s' }}>
          {content.highlights.map((item, index) => (
            <div
              key={item.label}
              className="pe-hero__highlight"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <span className="pe-hero__highlight-value">{item.value}</span>
              <span className="pe-hero__highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;