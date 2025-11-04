import './Partners.css';

function Partners({ items }) {
  return (
    <section className="pe-partners">
      <div className="pe-partners__inner">
        <p>Partner certificati</p>
        <div className="pe-partners__logos">
          {items.map((partner) => (
            <img key={partner.name} src={partner.logo} alt={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;