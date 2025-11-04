import './StatsStrip.css';

function StatsStrip({ stats }) {
  return (
    <section className="pe-stats">
      <div className="pe-stats__inner">
        {stats.map((item) => (
          <article key={item.label} className="pe-stats__item">
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