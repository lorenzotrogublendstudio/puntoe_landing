import './StatsStrip.css';
import useReveal from '../../hooks/useReveal';

function StatsStrip({ stats }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section ref={ref} className={`pe-stats pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-stats__inner">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className="pe-stats__item pe-animate-child"
            style={{ transitionDelay: `${0.12 * (index + 1)}s` }}
          >
            <h3>{item.value}</h3>
            <p>{item.label}</p>
            <span>{item.caption}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;