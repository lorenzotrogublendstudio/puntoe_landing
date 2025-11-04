import './About.css';
import useReveal from '../../hooks/useReveal';

function About({ content }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section id="servizi" ref={ref} className={`pe-about pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-about__inner">
        <div className="pe-about__text pe-animate-child" style={{ transitionDelay: '0.12s' }}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <ul className="pe-about__list pe-animate-child" style={{ transitionDelay: '0.24s' }}>
          {content.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;