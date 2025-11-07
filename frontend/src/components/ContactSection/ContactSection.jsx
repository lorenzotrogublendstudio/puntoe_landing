import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import './ContactSection.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
};

function ContactSection({ channels }) {
  const [ref, isVisible] = useReveal(0.2);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const { message } = await response.json().catch(() => ({ message: 'Errore inatteso' }));
        throw new Error(message || 'Richiesta non valida');
      }

      setStatus({
        type: 'success',
        message: 'Richiesta inviata correttamente. Ti ricontatteremo a breve!'
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message ??
          'Si è verificato un problema. Riprova tra qualche minuto o contattaci telefonicamente.'
      });
    }
  };

  return (
    <section
      id="contatti"
      ref={ref}
      className={`pe-contact pe-animate ${isVisible ? "is-visible" : ""}`}
    >
      <div className="pe-contact__layout">
        <div
          className="pe-contact__intro pe-animate-child"
          style={{ transitionDelay: "0.12s" }}
        >
          <p className="pe-contact__eyebrow">Pronti ad ascoltarti</p>
          <h2 className="pe-contact__headline">
            Contatta il nostro servizio di assistenza!
          </h2>
          <p className="pe-contact__copy">
            Prenderemo in carico la tua richiesta nel più breve tempo possibile.
          </p>
          <ul className="pe-contact__channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                {channel.type === "hours" ? (
                  <div className="pe-contact__hours">
                    {channel.value.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <strong>{channel.value}</strong>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="pe-contact__form-wrapper pe-animate-child"
          style={{ transitionDelay: "0.24s" }}
        >
          <form className="pe-contact__form" onSubmit={handleSubmit} noValidate>
            <div className="pe-contact__row">
              <label>
                Nome
                <input
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Cognome
                <input
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="pe-contact__row">
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Telefono
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className="pe-contact__textarea">
              Messaggio
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>

            {status.type !== "idle" && (
              <div
                className={`pe-contact__alert pe-contact__alert--${status.type}`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="pe-btn pe-btn--primary pe-contact__submit"
              disabled={status.type === "loading"}
            >
              {status.type === "loading"
                ? "Invio in corso…"
                : "Invia richiesta"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;