import { Link } from 'react-router-dom';

const timeline = [
  { year: '1960s', desc: 'Fundación de la iglesia con un pequeño grupo de familias comprometidas con la Palabra de Dios en Santo Domingo de Heredia.' },
  { year: '1980s', desc: 'Crecimiento de la congregación y establecimiento formal de los ministerios de niños, jóvenes y mujeres.' },
  { year: '2000s', desc: 'Ampliación de las instalaciones y lanzamiento de programas de alcance comunitario y misiones locales.' },
  { year: '2010s', desc: 'Inicio del ministerio en línea con transmisiones en vivo y acceso a sermones para la comunidad global.' },
  { year: 'Hoy', desc: 'Seguimos creciendo en fe y comunidad, comprometidos con la Palabra de Dios y el servicio a nuestra comunidad.' },
];

const identityCards = [
  { icon: '📖', title: 'Bíblicos', desc: 'Todo lo que enseñamos y practicamos tiene como fundamento las Sagradas Escrituras. La Biblia es nuestra autoridad suprema en materia de fe y conducta.' },
  { icon: '🙏', title: 'Adoradores', desc: 'La adoración a Dios es el centro de nuestra vida congregacional. Cada domingo nos reunimos para elevar alabanza a nuestro Creador y Salvador.' },
  { icon: '❤️', title: 'Comunidad', desc: 'Somos una familia diversa unida en Cristo. Valoramos las relaciones auténticas, el apoyo mutuo y el crecimiento espiritual compartido.' },
  { icon: '🌱', title: 'Discipulado', desc: 'Creemos que el cristiano debe crecer continuamente en su fe. Ofrecemos múltiples recursos para el crecimiento espiritual en todas las etapas de la vida.' },
  { icon: '🌍', title: 'Evangelismo', desc: 'Compartimos el evangelio con nuestros vecinos y comunidades cercanas. Apoyamos activamente el trabajo misionero local y regional.' },
  { icon: '🤲', title: 'Servicio', desc: 'Seguimos el ejemplo de Jesús, quien vino a servir y no a ser servido. Buscamos oportunidades para impactar positivamente a quienes nos rodean.' },
];

export default function Nosotros() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Nosotros</h1>
          <div className="section-divider" />
          <p>Conozca nuestra historia, misión, visión y los valores que guían nuestra comunidad de fe.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            <div className="animate-on-scroll slide-left">
              <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Misión</span>
              <h2 style={{ marginBottom: '1rem' }}>¿Por qué existimos?</h2>
              <div className="section-divider" style={{ margin: '0 0 1.5rem' }} />
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Nuestra misión es <strong>hacer discípulos de Jesucristo</strong> mediante la predicación fiel de la Palabra de Dios, la adoración sincera, el compañerismo cristiano y el servicio a nuestra comunidad.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Seguimos el mandato de Mateo 28:19-20: "Por tanto, id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado."
              </p>
            </div>
            <div className="animate-on-scroll slide-right" style={{
              background: 'linear-gradient(145deg, #152847, #1e3a5f)',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              color: '#fff',
              boxShadow: '0 20px 60px rgba(21,40,71,0.3)',
            }}>
              <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Visión</span>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>¿Hacia dónde vamos?</h3>
              <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }}>
                Ser una iglesia que <strong style={{ color: '#e8bf6a' }}>glorifique a Dios</strong> en todo, que forme creyentes maduros en la fe, que alcance a los perdidos con el evangelio de gracia y que impacte positivamente a nuestra comunidad y nación con el amor de Cristo.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, marginTop: '1rem', marginBottom: 0 }}>
                Visualizamos una congregación que va más allá de los muros del edificio: familias transformadas, comunidades alcanzadas y vidas entregadas al servicio del Reino de Dios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title animate-on-scroll fade-in">
            <h2>¿Quiénes Somos?</h2>
            <div className="section-divider" />
            <p>Una familia de creyentes unidos por la gracia de Dios y el amor a su Palabra.</p>
          </div>
          <div className="grid-3">
            {identityCards.map((item, i) => (
              <div key={i} className={`card animate-on-scroll delay-${(i % 3 + 1) * 100}`}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div className="card-icon">{item.icon}</div>
                  <h4 style={{ marginBottom: '0.75rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-title animate-on-scroll fade-in">
            <h2>Nuestra Historia</h2>
            <div className="section-divider" />
            <p>Décadas de fidelidad a la Palabra de Dios y servicio a nuestra comunidad.</p>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '28px', top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #c9993b, #152847)',
            }} />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${(i + 1) * 100}`}
                style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}
              >
                <div style={{
                  flexShrink: 0, width: '58px', height: '58px',
                  borderRadius: '50%',
                  background: i === timeline.length - 1
                    ? 'linear-gradient(135deg, #c9993b, #e8bf6a)'
                    : 'linear-gradient(145deg, #152847, #1e3a5f)',
                  color: '#fff', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontWeight: 700, fontSize: '0.72rem',
                  textAlign: 'center', zIndex: 1,
                  border: '3px solid #fff',
                  boxShadow: '0 3px 12px rgba(15,23,42,0.18)',
                }}>
                  {item.year}
                </div>
                <div style={{
                  background: '#fff', borderRadius: '1rem', padding: '1.25rem 1.5rem',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.07)', flex: 1, marginTop: '0.5rem',
                  border: '1px solid rgba(15,23,42,0.06)',
                  borderLeft: `3px solid ${i === timeline.length - 1 ? '#c9993b' : '#152847'}`,
                }}>
                  <p style={{ marginBottom: 0, lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{
        background: 'linear-gradient(145deg, #0b1727, #152847)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(201,153,59,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>¿Quiere conocernos personalmente?</h3>
          <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '1.5rem' }}>
            Le invitamos a visitarnos este domingo a las 10:00 a.m. No necesita cita previa. ¡Venga como es!
          </p>
          <Link to="/planifica-tu-visita" className="btn btn-primary">Planifica tu Visita</Link>
        </div>
      </section>
    </div>
  );
}


