import './Projects.css';

function Projects({ items }) {
  return (
    <section id="progetti" className="pe-projects">
      <div className="pe-section-heading">
        <p>Case study</p>
        <h2>Progetti che generano valore reale</h2>
      </div>
      <div className="pe-projects__grid">
        {items.map((project) => (
          <article key={project.title} className="pe-projects__card">
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
      <a className="pe-projects__cta" href="#contatti">
        Richiedi la tua consulenza
      </a>
    </section>
  );
}

export default Projects;