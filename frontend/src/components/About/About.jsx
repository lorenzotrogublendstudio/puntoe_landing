import './About.css';

function About({ content }) {
  return (
    <section id="servizi" className="pe-about">
      <div className="pe-about__inner">
        <div className="pe-about__text">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <ul className="pe-about__list">
          {content.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;