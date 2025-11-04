import './Projects.css';
import useReveal from '../../hooks/useReveal';

function Projects({ items }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section id="progetti" ref={ref} className={`pe-projects pe-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="pe-section-heading pe-animate-child">
        <p>Case study</p>
        <h2>Progetti che generano valore reale</h2>
      </div>
      <div className="pe-projects__grid">
        {items.map((project, index) => (
          <article
            key={project.title}
            className="pe-projects__card pe-animate-child"
            style={{ transitionDelay: `${0.12 * (index + 1)}s` }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="pe-projects__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <a
        className="pe-btn pe-btn--primary pe-projects__cta pe-animate-child"
        href="#contatti"
        style={{ transitionDelay: `${0.12 * (items.length + 1)}s` }}
      >
        Richiedi la tua consulenza
      </a>
    </section>
  );
}

export default Projects;