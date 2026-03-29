const pastores = [
  { nombre: 'Jonathan Mata', esposa: 'Francinie Araya' },
  { nombre: 'Felipe Picado', esposa: 'Melissa Lang' },
];

export default function Liderazgo() {
  return (
    <section id="liderazgo" className="section liderazgo">
      <div className="container">
        <h2 className="section__title reveal">Liderazgo</h2>
        <p className="liderazgo__subtitle reveal">Nuestros pastores y sus esposas</p>
        <div className="liderazgo__grid">
          {pastores.map((p) => (
            <div key={p.nombre} className="pastor-card card-3d reveal">
              <div className="pastor-card__avatar">
                <span>{p.nombre.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h4 className="pastor-card__name">{p.nombre}</h4>
              <p className="pastor-card__spouse">&amp; {p.esposa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
