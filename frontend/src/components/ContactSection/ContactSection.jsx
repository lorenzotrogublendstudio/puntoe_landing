import './ContactSection.css';

function ContactSection({ channels }) {
  return (
    <section id="contatti" className="pe-contact">
      <div className="pe-contact__card">
        <div className="pe-contact__copy">
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
          {channels.map((channel) => (
            <li key={channel.value}>
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