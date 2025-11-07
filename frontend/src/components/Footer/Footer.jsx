import useReveal from '../../hooks/useReveal';
import './Footer.css';
import galleryImage from '../../assets/images/img_footer_punto_e_piacenza.png';
function Footer() {
  const year = new Date().getFullYear();
  const [ref, isVisible] = useReveal(0.12);

  return (
    <footer ref={ref} className={`pe-footer pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-footer__content pe-animate-child">
        <div className="pe-footer__visual">
          <a href="#hero" aria-label="Punto-E home">
            <img src={galleryImage} alt="Punto-E" />
          </a>
        </div>

        <div className="pe-footer__contacts">
          <div>
            <span>Parla con noi</span>
            <a href="tel:0523606348">0523.606348</a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:info@punto-e.eu">info@punto-e.eu</a>
          </div>
          <div>
            <span>Sede</span>
            <p>Via Leonardo Da Vinci, 72, 29122 Piacenza PC</p>
          </div>
        </div>
      </div>

      <p className="pe-footer__credits pe-animate-child" style={{ transitionDelay: '0.15s' }}>
        © {year} Punto-E. Tutti i diritti riservati.
      </p>
    </footer>
  );
}

export default Footer;
