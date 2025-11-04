import { useState } from 'react';
import './Testimonials.css';
import useReveal from '../../hooks/useReveal';

function Testimonials({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isVisible] = useReveal(0.25);

  const goTo = (index) => {
    if (index >= 0 && index < items.length) {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="testimonianze"
      ref={ref}
      className={`pe-testimonials pe-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="pe-section-heading pe-animate-child">
        <p>Clienti</p>
        <h2>Le loro parole valgono più di ogni promessa</h2>
      </div>

      <div className="pe-testimonials__card pe-animate-child" style={{ transitionDelay: '0.18s' }}>
        <p className="pe-testimonials__quote">“{items[activeIndex].quote}”</p>
        <div className="pe-testimonials__author">
          <span>{items[activeIndex].author}</span>
          <span>{items[activeIndex].role}</span>
        </div>
      </div>

      <div className="pe-testimonials__controls pe-animate-child" style={{ transitionDelay: '0.32s' }}>
        {items.map((item, index) => (
          <button
            key={item.author}
            type="button"
            className={index === activeIndex ? 'is-active' : ''}
            onClick={() => goTo(index)}
            aria-label={`Mostra testimonianza di ${item.author}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;