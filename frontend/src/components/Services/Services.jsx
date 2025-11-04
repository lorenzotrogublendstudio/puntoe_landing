import './Services.css';
import useReveal from '../../hooks/useReveal';

function Services({ items }) {
  const [ref, isVisible] = useReveal(0.25);

  return (
    <section ref={ref} className={`pe-services pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-section-heading pe-animate-child">
        <p>Soluzioni modulari</p>
        <h2>Servizi calibrati sulle tue esigenze</h2>
      </div>
      <div className="pe-services__grid">
        {items.map((service, index) => (
          <article
            key={service.title}
            className="pe-services__card pe-animate-child"
            style={{ transitionDelay: `${0.12 * (index + 1)}s` }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;