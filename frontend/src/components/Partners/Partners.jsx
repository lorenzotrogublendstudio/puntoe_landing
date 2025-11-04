import './Partners.css';
import useReveal from '../../hooks/useReveal';

function Partners({ items }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section ref={ref} className={`pe-partners pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-partners__inner pe-animate-child" style={{ transitionDelay: '0.12s' }}>
        <p>Partner certificati</p>
        <div className="pe-partners__logos">
          {items.map((partner, index) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="pe-animate-child"
              style={{ transitionDelay: `${0.12 * (index + 2)}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;