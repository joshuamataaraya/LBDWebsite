const cursos = [
  {
    code: 'MEM01',
    name: 'Descubriendo Mi Iglesia',
    desc: 'Un curso para conocer la visión, misión y fundamentos bíblicos de la iglesia y descubrir cómo cada creyente puede ser parte activa del cuerpo de Cristo.',
  },
  {
    code: 'MEM02',
    name: 'La Salvación',
    desc: 'Estudio Bíblico dirigido a comprender qué es la salvación, por qué la necesitamos y cómo Dios proveyó a Jesús como el único medio de nuestra redención.',
  },
  {
    code: 'MEM03',
    name: 'El Bautismo',
    desc: 'Estudio Bíblico dirigido a comprender el significado del bautismo, su importancia en la vida cristiana y el paso de obediencia que representa para quienes han decidido seguir a Jesús.',
  },
  {
    code: null,
    name: 'Discipulado',
    desc: 'Materiales y capacitación para creyentes que desean aprender a guiar espiritualmente a otros, siguiendo el modelo de discipulado que enseñó Jesús.',
  },
  {
    code: null,
    name: 'Discipulado Personal',
    desc: 'Acompañamiento Bíblico para quienes desean crecer en su relación con Dios, aprender a vivir su fe diariamente y caminar como discípulos de Jesús.',
  },
];

export default function Crecimiento() {
  return (
    <section className="section crecimiento">
      <div className="crecimiento__bg-img" />
      <div className="crecimiento__overlay" />
      <div className="container crecimiento__content">
        <h2 className="section__title section__title--light reveal">Crecimiento &amp; Capacitación</h2>
        <p className="crecimiento__intro reveal">
          Ministerio dirigido a personas de todas las edades que desean crecer en su conocimiento de Dios y en su vida cristiana. A través de la enseñanza de la Biblia y el acompañamiento espiritual, se busca formar discípulos que conozcan a Cristo, comprendan su fe y aprendan a vivir conforme a las enseñanzas de Jesús.
        </p>
        <div className="crec-grid">
          {cursos.map((c, i) => (
            <div key={i} className="crec-card card-3d reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              {c.code && <span className="crec-card__code">{c.code}</span>}
              <h4 className="crec-card__name">{c.name}</h4>
              <p className="crec-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
