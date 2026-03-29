export default function Liderazgo() {
  return (
    <section id="liderazgo" className="section liderazgo">
      <div className="container">
        <h2 className="section__title reveal">Liderazgo</h2>
        <p className="liderazgo__subtitle reveal">Nuestros pastores y sus esposas</p>

        <div className="liderazgo__photo reveal">
          <img
            src="/photos/Foto%20pastores.jpg"
            alt="Pastores de Iglesia La Biblia Dice con sus esposas"
            className="liderazgo__img"
          />
        </div>

        <div className="liderazgo__names reveal">
          <div className="liderazgo__name-item">
            <h4>Jonathan Mata</h4>
            <span>&amp; Francinie Araya</span>
          </div>
          <div className="liderazgo__divider" />
          <div className="liderazgo__name-item">
            <h4>Felipe Picado</h4>
            <span>&amp; Melissa Lang</span>
          </div>
        </div>
      </div>
    </section>
  );
}
