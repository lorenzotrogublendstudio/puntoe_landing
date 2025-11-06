import './Map.css';

function MapSection() {
  const mapsIframeSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.3728820160034!2d9.718272115711977!3d45.06179247909896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b037d0b8f0b7%3A0x3f27a812d8771e5b!2sVia%20Leonardo%20Da%20Vinci%2C%2072%2C%2029122%20Piacenza%20PC!5e0!3m2!1sit!2sit!4v1699100000000!5m2!1sit!2sit';

  return (
    <section id="mappa" className="pe-map">
      <div className="pe-section-heading">
        <p>Dove siamo</p>
        <h2>Via Leonardo Da Vinci, 72, 29122 Piacenza PC</h2>
       
      </div>

      <div className="pe-map__frame">
        <iframe
          src={mapsIframeSrc}
          title="Mappa Punto-E"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default MapSection;