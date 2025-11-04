import './Hero.css';

function Hero({ content }) {
  return (
    <section id="hero" className="pe-hero">
      <div className="pe-hero__background" aria-hidden="true" />
      <div className="pe-hero__grid">
        <div className="pe-hero__copy">
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

        <div className="pe-hero__highlights">
          {content.highlights.map((item) => (
            <div key={item.label} className="pe-hero__highlight">
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