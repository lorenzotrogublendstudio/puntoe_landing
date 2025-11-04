import './ContactSection.css';
import useReveal from '../../hooks/useReveal';

function ContactSection({ channels }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section
      id="contatti"
      ref={ref}
      className={`pe-contact pe-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="pe-contact__card">
        <div className="pe-contact__copy pe-animate-child" style={{ transitionDelay: '0.12s' }}>
          <p>Pronti ad ascoltarti</p>
          <h2>Pianifichiamo insieme il prossimo passo</h2>
          <p>
            Raccontaci il tuo progetto: entro 24 ore ti contatterà un consulente specializzato
            nel tuo settore.
          </p>
          <a className="pe-btn pe-btn--light" href="mailto:contatto@punto-e.eu">
            Prenota una call
          </a>
        </div>

        <ul className="pe-contact__channels">
          {channels.map((channel, index) => (
            <li
              key={channel.value}
              className="pe-animate-child"
              style={{ transitionDelay: `${0.12 * (index + 2)}s` }}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContactSection;