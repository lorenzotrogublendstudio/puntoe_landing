import { useEffect, useRef, useState } from 'react';
import useReveal from '../../hooks/useReveal';
import './Gallery.css';

import photo1 from '../../assets/images/gallery/punto_e_1.jpg';
import photo2 from '../../assets/images/gallery/punto_e_2.jpg';
import photo3 from '../../assets/images/gallery/punto_e_3.jpg';
import photo4 from '../../assets/images/gallery/punto_e_4.jpg';
import photo5 from '../../assets/images/gallery/punto_e_5.jpg';
import photo6 from '../../assets/images/gallery/punto_e_6.jpg';

const slides = [
  {
    src: photo1,
    label: 'Showroom',
    description: 'Ingresso Punto-e con esposizione elettrodomestici'
  },
  {
    src: photo2,
    label: 'Ricambi immediati',
    description: 'Dettaglio banco ricambi sempre disponibili'
  },
  {
    src: photo3,
    label: 'Laboratorio tecnico',
    description: 'Postazioni di lavoro attrezzate per ogni brand'
  },
  {
    src: photo4,
    label: 'Interventi certificati',
    description: 'Tecnici specializzati su grandi elettrodomestici'
  },
  {
    src: photo5,
    label: 'Magazzino organizzato',
    description: 'Oltre 200 mq dedicati alla logistica ricambi'
  },
  {
    src: photo6,
    label: 'Furgoni a domicilio',
    description: 'Flotta pronta per l’assistenza sul territorio'
  }
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const animationTimeoutRef = useRef(null);
  const [ref, isVisible] = useReveal(0.1);
  const total = slides.length;

  const scheduleAnimationReset = () => {
    window.clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const goTo = (targetIndex, navDirection = 'next') => {
    let next = targetIndex;
    if (targetIndex < 0) {
      next = total - 1;
    } else if (targetIndex >= total) {
      next = 0;
    }

    setDirection(navDirection);
    setIsAnimating(true);
    setCurrent(next);
    scheduleAnimationReset();
  };

  const handlePrev = () => goTo(current - 1, 'prev');
  const handleNext = () => goTo(current + 1, 'next');

  useEffect(() => {
    const timer = window.setTimeout(() => goTo(current + 1, 'next'), 7000);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    return () => window.clearTimeout(animationTimeoutRef.current);
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      className={`pe-gallery-slider pe-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <div
        className={`pe-gallery-slider__image ${
          isAnimating ? `is-animating-${direction}` : ''
        }`}
        style={{ backgroundImage: `url(${slides[current].src})` }}
        role="img"
        aria-label={`${slides[current].label} – ${slides[current].description}`}
      />

      <div className="pe-gallery-slider__controls">
        <button
          type="button"
          className="pe-gallery-slider__arrow"
          onClick={handlePrev}
          aria-label="Slide precedente"
        >
          ‹
        </button>
        <button
          type="button"
          className="pe-gallery-slider__arrow"
          onClick={handleNext}
          aria-label="Slide successiva"
        >
          ›
        </button>
      </div>

      <div
        className={`pe-gallery-slider__bottom ${
          isAnimating ? 'is-animating' : ''
        } pe-animate-child`}
        style={{ transitionDelay: '0.1s' }}
      >
        <div className="pe-gallery-slider__text">
          <p className="pe-gallery-slider__eyebrow">Gallery</p>
          <h2 className="pe-gallery-slider__title">Dietro le quinte dell’assistenza Punto-e</h2>
          <p className="pe-gallery-slider__description">{slides[current].description}</p>
        </div>

        <div className="pe-gallery-slider__info">
          <div className="pe-gallery-slider__meta">
            <span className="pe-gallery-slider__badge">
              {current + 1} / {total}
            </span>
            <span className="pe-gallery-slider__tag">{slides[current].label}</span>
          </div>

          <div className="pe-gallery-slider__dots" role="tablist" aria-label="Seleziona slide galleria">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                className={`pe-gallery-slider__dot ${index === current ? 'is-active' : ''}`}
                onClick={() => goTo(index, index > current ? 'next' : 'prev')}
                aria-label={`Mostra ${slide.label}`}
                aria-selected={index === current}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;