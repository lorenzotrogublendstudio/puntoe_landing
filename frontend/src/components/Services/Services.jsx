import './Services.css';

function Services({ items }) {
  return (
    <section className="pe-services">
      <div className="pe-section-heading">
        <p>Soluzioni modulari</p>
        <h2>Servizi calibrati sulle tue esigenze</h2>
      </div>
      <div className="pe-services__grid">
        {items.map((service) => (
          <article key={service.title} className="pe-services__card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;