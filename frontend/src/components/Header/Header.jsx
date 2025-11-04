import { useEffect, useState } from 'react';
import './Header.css';

function Header({ navLinks }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`pe-header ${isScrolled ? 'pe-header--scrolled' : ''}`}>
      <div className="pe-header__inner">
        <a href="#hero" className="pe-header__logo" aria-label="Punto-E home">
          <span>Punto</span>
          <span className="pe-header__logo-dot">•</span>
          <span>E</span>
        </a>

        <nav className={`pe-header__nav ${mobileOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="pe-header__cta" href="#contatti">
          Contattaci
        </a>

        <button
          className={`pe-header__burger ${mobileOpen ? 'is-open' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && <div className="pe-header__overlay" onClick={closeMenu} />}
    </header>
  );
}

export default Header;