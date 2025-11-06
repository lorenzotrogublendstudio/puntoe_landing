import { useEffect, useState } from 'react';
import './Header.css';
import logoUrl from '../../assets/images/logo_puntoe.jpg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`pe-header${isScrolled ? ' pe-header--scrolled' : ''}`}>
      <div className="pe-header__inner">
        <a href="#hero" className="pe-header__brand" aria-label="Punto-E home">
          <img className="pe-header__logo-img" src={logoUrl} alt="Punto-E" />
        </a>

        <div className="pe-header__tagline">ASSISTENZA ELETTRODOMESTICI</div>

        <a
          className="pe-btn pe-btn--primary pe-header__phone"
          href="tel:+390523606348"
          aria-label="Chiama 0523.606348"
        >
          0523.606348
        </a>
      </div>
    </header>
  );
}

export default Header;