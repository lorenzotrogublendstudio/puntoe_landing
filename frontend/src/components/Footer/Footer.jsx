import './Footer.css';

function Footer({ navLinks }) {
  const year = new Date().getFullYear();

  return (
    <footer className="pe-footer">
      <div className="pe-footer__top">
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
      <div className="pe-footer__bottom">
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