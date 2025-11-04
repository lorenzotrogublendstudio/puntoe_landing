import './Process.css';
import useReveal from '../../hooks/useReveal';

function Process({ steps }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section id="metodo" ref={ref} className={`pe-process pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-section-heading pe-animate-child">
        <p>Metodo</p>
        <h2>Dalla strategia al supporto continuo</h2>
      </div>
      <ol className="pe-process__timeline">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="pe-process__item pe-animate-child"
            style={{ transitionDelay: `${0.12 * (index + 1)}s` }}
          >
            <span className="pe-process__badge">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Process;