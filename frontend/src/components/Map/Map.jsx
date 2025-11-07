import './Map.css';

function MapSection() {
const mapsIframeSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.2798471895026!2d9.6976668!3d45.0395427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780e809ffbbe443%3A0x2b5776829cf51343!2sPunto-e!5e0!3m2!1sit!2sit!4v1762509460655!5m2!1sit!2sit';
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