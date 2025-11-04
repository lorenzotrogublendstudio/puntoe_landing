import { useState } from 'react';
import './Testimonials.css';

function Testimonials({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    if (index >= 0 && index < items.length) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="testimonianze" className="pe-testimonials">
      <div className="pe-section-heading">
        <p>Clienti</p>
        <h2>Le loro parole valgono più di ogni promessa</h2>
      </div>

      <div className="pe-testimonials__card">
        <p className="pe-testimonials__quote">“{items[activeIndex].quote}”</p>
        <div className="pe-testimonials__author">
          <span>{items[activeIndex].author}</span>
          <span>{items[activeIndex].role}</span>
        </div>
      </div>

      <div className="pe-testimonials__controls">
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