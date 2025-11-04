import useReveal from '../../hooks/useReveal';
import './Footer.css';

function Footer({ navLinks }) {
  const year = new Date().getFullYear();
  const [ref, isVisible] = useReveal(0.12);

  return (
    <footer ref={ref} className={`pe-footer pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-footer__top pe-animate-child">
        <a href="#hero" className="pe-footer__logo">
          Punto<span>•</span>E
        </a>
        <nav>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="pe-footer__bottom pe-animate-child" style={{ transitionDelay: '0.18s' }}>
        <p>© {year} Punto-E. Tutti i diritti riservati.</p>
        <div className="pe-footer__policies">
          <a href="/">Privacy</a>
          <a href="/">Cookie</a>
          <a href="/">Termini</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;