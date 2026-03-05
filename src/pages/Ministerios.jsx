import { Link } from 'react-router-dom';

const ministerios = [
  {
    icon: '👧',
    title: 'LBD Kids — Ministerio de Niños',
    color: '#f59e0b',
    desc: 'Enseñamos a los niños los principios bíblicos desde temprana edad a través de lecciones interactivas, manualidades y actividades especiales.',
    details: ['Edades 0–12 años', 'Clases durante el culto principal', 'Maestros capacitados y voluntarios comprometidos', 'Currículo bíblico progresivo por edades'],
  },
  {
    icon: '🎯',
    title: 'Jóvenes LBD',
    color: '#10b981',
    desc: 'Un espacio para jóvenes de 13 a 25 años donde pueden crecer en fe, forjar amistades genuinas y descubrir su propósito en Dios.',
    details: ['Reuniones semanales los viernes por la noche', 'Retiros y campamentos anuales', 'Grupos de discipulado por género', 'Participación activa en el ministerio de la iglesia'],
  },
  {
    icon: '👨',
    title: 'Varones en la Palabra',
    color: '#3b82f6',
    desc: 'Un ministerio dedicado al fortalecimiento espiritual de los hombres como líderes en el hogar, la iglesia y la comunidad.',
    details: ['Desayunos de varones mensuales', 'Grupos de rendición de cuentas', 'Estudio bíblico específico para hombres', 'Actividades de compañerismo y servicio'],
  },
  {
    icon: '👩',
    title: 'Mujeres de la Palabra',
    color: '#ec4899',
    desc: 'Las mujeres de nuestra congregación se reúnen para crecer juntas en la fe, estudiar la Biblia y apoyarse mutuamente en la vida cotidiana.',
    details: ['Reuniones quincenales de estudio bíblico', 'Círculo de oración', 'Retiro anual de damas', 'Proyectos de servicio comunitario'],
  },
  {
    icon: '🎵',
    title: 'Ministerio de Alabanza',
    color: '#8b5cf6',
    desc: 'Nuestro equipo de adoración lidera a la congregación en la adoración a Dios a través de la música, con excelencia y corazón sincero.',
    details: ['Ensayos semanales', 'Músicos y cantantes comprometidos', 'Mezcla de himnos clásicos y alabanzas contemporáneas', 'Capacitación y crecimiento musical continuo'],
  },
  {
    icon: '🏠',
    title: 'Grupos Pequeños',
    color: '#f97316',
    desc: 'Los grupos de discipulado son el corazón del crecimiento espiritual de nuestra iglesia. Pequeñas comunidades que estudian la Biblia, oran y se apoyan.',
    details: ['Grupos por zona geográfica', 'Reuniones semanales en hogares', 'Estudio de la Biblia en profundidad', 'Comunidad auténtica e intercesión mutua'],
  },
  {
    icon: '🌍',
    title: 'Misiones',
    color: '#14b8a6',
    desc: 'Apoyamos activamente el evangelismo local y el trabajo misionero, respondiendo al llamado de Cristo de hacer discípulos de todas las naciones.',
    details: ['Evangelismo en la comunidad local', 'Apoyo a misioneros nacionales', 'Proyectos de alcance comunitario', 'Enseñanza sobre la gran comisión'],
  },
  {
    icon: '❤️',
    title: 'Ministerio de Misericordia',
    color: '#ef4444',
    desc: 'Expresamos el amor práctico de Cristo sirviendo a los necesitados de nuestra comunidad, respondiendo a necesidades físicas, emocionales y espirituales.',
    details: ['Visitas a personas enfermas y ancianos', 'Apoyo a familias en crisis', 'Distribución de alimentos y ropa', 'Consejería bíblica pastoral'],
  },
];

export default function Ministerios() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Ministerios</h1>
          <div className="section-divider" />
          <p>Hay un lugar para cada persona en la familia de Iglesia La Biblia Dice. Descubra cómo puede crecer y servir.</p>
        </div>
      </section>

      <section className="section-sm" style={{
        background: 'linear-gradient(135deg, #c9993b 0%, #e8bf6a 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{ color: '#0b1727', fontSize: '1.05rem', fontWeight: 500, marginBottom: 0 }}>
            "Dios ha dado a cada creyente un don espiritual para el beneficio del Cuerpo de Cristo (1 Corintios 12:4-7). ¡Descubra el suyo!"
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {ministerios.map((m, i) => (
              <div
                key={i}
                className={`card animate-on-scroll delay-${(i % 2 + 1) * 100}`}
                style={{ borderTop: `4px solid ${m.color}` }}
              >
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '52px', height: '52px', flexShrink: 0,
                      background: `${m.color}22`, borderRadius: '0.9rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}>
                      {m.icon}
                    </div>
                    <h4 style={{ marginTop: '0.3rem' }}>{m.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{m.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {m.details.map((d, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#475569' }}>
                        <span style={{ color: m.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section" style={{
        background: 'linear-gradient(145deg, #0b1727, #152847)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(201,153,59,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-on-scroll fade-in">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>¿Cómo Puedo Servir?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
              Creemos que cada creyente tiene un don y un llamado. Le invitamos a descubrir cómo Dios le quiere usar en el Cuerpo de Cristo.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            className="animate-on-scroll delay-200">
            <Link to="/contacto" className="btn btn-primary btn-lg">Quiero Servir</Link>
            <Link to="/planifica-tu-visita" className="btn btn-secondary btn-lg">Visítenos</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

