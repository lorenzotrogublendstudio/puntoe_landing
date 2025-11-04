import './Process.css';

function Process({ steps }) {
  return (
    <section id="metodo" className="pe-process">
      <div className="pe-section-heading">
        <p>Metodo</p>
        <h2>Dalla strategia al supporto continuo</h2>
      </div>
      <ol className="pe-process__timeline">
        {steps.map((step, index) => (
          <li key={step.title}>
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