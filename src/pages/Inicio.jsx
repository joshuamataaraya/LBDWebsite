import { Link } from 'react-router-dom';

const quickLinks = [
  { icon: '🕐', title: 'Horario de Culto', desc: 'Domingos a las 10:00 a.m.' },
  { icon: '📍', title: 'Ubicación', desc: '100 m norte de la Escuela Ricardo Salas, San Miguel de Santo Domingo, Heredia' },
  { icon: '☎', title: 'Teléfono', desc: '2236-0325 / 2244-4861' },
  { icon: '✉', title: 'Correo', desc: 'info@labibliadicecr.org' },
];

const values = [
  { icon: '📖', title: 'La Palabra de Dios', desc: 'Creemos que la Biblia es la Palabra inspirada, infalible e inerrante de Dios — nuestra guía final para la fe y la vida.' },
  { icon: '✝', title: 'Salvación por Gracia', desc: 'La salvación es un regalo de Dios recibido por fe sola en Jesucristo, no por obras humanas (Efesios 2:8-9).' },
  { icon: '🤝', title: 'Comunidad', desc: 'Somos una familia unida por el amor de Cristo, comprometidos a crecer juntos y servirnos los unos a los otros.' },
  { icon: '🌍', title: 'Misión', desc: 'Proclamamos el evangelio de Jesucristo en nuestra comunidad y más allá, siguiendo la Gran Comisión.' },
];

const upcomingEvents = [
  { date: 'Domingos', time: '10:00 a.m.', title: 'Culto de Adoración', desc: 'Únase a nosotros para adoración, predicación y comunión.' },
  { date: 'Primer viernes del mes', time: '7:00 p.m.', title: 'Noche de Oración', desc: 'Un tiempo especial de oración e intercesión congregacional.' },
  { date: 'Sábados', time: '3:00 p.m.', title: 'Grupos de Discipulado', desc: 'Pequeños grupos temáticos para crecer en la fe y en comunidad.' },
];

const stats = [
  { num: '60+', label: 'Años sirviendo' },
  { num: '10+', label: 'Ministerios activos' },
  { num: '100+', label: 'Familias' },
  { num: '52', label: 'Cultos por año' },
];

export default function Inicio() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(145deg, #0b1727 0%, #152847 55%, #1e3a5f 100%)',
        color: '#fff',
        padding: '6rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 15% 60%, rgba(201,153,59,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(30,58,95,0.5) 0%, transparent 55%)',
        }} />
        {/* Subtle cross pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9993b' fill-rule='evenodd'%3E%3Crect x='18' y='8' width='4' height='24'/%3E%3Crect x='8' y='18' width='24' height='4'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(201,153,59,0.12)',
            border: '1px solid rgba(201,153,59,0.35)',
            borderRadius: '999px',
            padding: '0.45rem 1.4rem',
            fontSize: '0.8rem',
            color: '#e8bf6a',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1.75rem',
            animation: 'heroEntrance 0.7s 0.05s cubic-bezier(0.22,1,0.36,1) both',
          }}>
            ✦ Iglesia Cristiana No Denominacional · Heredia, Costa Rica
          </div>

          <h1 style={{
            color: '#fff',
            marginBottom: '1rem',
            lineHeight: 1.12,
            animation: 'heroEntrance 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both',
          }}>
            ¡Bienvenidos a<br />
            <span style={{
              background: 'linear-gradient(135deg, #c9993b 0%, #e8bf6a 50%, #c9993b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Iglesia La Biblia Dice
            </span>
            !
          </h1>

          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.82)',
            marginBottom: '0.5rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-heading)',
            animation: 'heroEntrance 0.8s 0.28s cubic-bezier(0.22,1,0.36,1) both',
          }}>
            "¡Más dulce que la miel!"
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.62)',
            maxWidth: '520px',
            margin: '0 auto 2.75rem',
            animation: 'heroEntrance 0.8s 0.38s cubic-bezier(0.22,1,0.36,1) both',
          }}>
            Un lugar donde la Palabra de Dios transforma vidas. Venga a adorar, a crecer y a pertenecer.
          </p>

          <div style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            animation: 'heroEntrance 0.8s 0.5s cubic-bezier(0.22,1,0.36,1) both',
          }}>
            <Link to="/planifica-tu-visita" className="btn btn-primary btn-lg">
              Planifica tu Visita
            </Link>
            <Link to="/sermones" className="btn btn-secondary btn-lg">
              Ver Sermones
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Info Bar ───────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #c9993b 0%, #e8bf6a 100%)',
        padding: '2rem 0',
      }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '1rem' }}>
            {quickLinks.map((item, i) => (
              <div
                key={i}
                className="animate-on-scroll"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  transitionDelay: `${i * 0.08}s` }}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#0b1727', fontSize: '0.85rem', marginBottom: '0.15rem' }}>{item.title}</div>
                  <div style={{ color: '#152847', fontSize: '0.82rem', lineHeight: 1.45 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Welcome Section ──────────────────────────────── */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-on-scroll slide-left">
              <span className="badge badge-outline" style={{ marginBottom: '1rem' }}>Quiénes Somos</span>
              <h2 style={{ marginBottom: '1rem' }}>Una Iglesia Fundada en la Palabra</h2>
              <div className="section-divider" style={{ margin: '0 0 1.5rem' }} />
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Iglesia La Biblia Dice es una congregación cristiana no denominacional ubicada en San Miguel de Santo Domingo, Heredia. Desde nuestra fundación, hemos sido una comunidad comprometida con el estudio serio y fiel de las Sagradas Escrituras.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Creemos que la Biblia es la Palabra de Dios — inspirada, infalible e inerrante — y que sus enseñanzas son el fundamento de toda fe y práctica cristiana. Nuestro nombre refleja ese compromiso: todo lo que enseñamos y creemos, la Biblia lo dice.
              </p>
              <Link to="/nosotros" className="btn btn-outline">
                Conoce más sobre nosotros
              </Link>
            </div>

            <div className="animate-on-scroll slide-right" style={{
              background: 'linear-gradient(145deg, #152847, #1e3a5f)',
              borderRadius: '1.25rem',
              padding: '3rem 2.5rem',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(21,40,71,0.35)',
            }}>
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '130px', height: '130px', borderRadius: '50%',
                background: 'rgba(201,153,59,0.12)',
              }} />
              <div style={{
                position: 'absolute', bottom: '-20px', left: '-20px',
                width: '90px', height: '90px', borderRadius: '50%',
                background: 'rgba(201,153,59,0.08)',
              }} />
              <blockquote style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
                color: 'rgba(255,255,255,0.95)',
                position: 'relative',
                zIndex: 1,
              }}>
                "¿Cuánto mejor es adquirir sabiduría que oro; y adquirir inteligencia vale más que la plata."
              </blockquote>
              <p style={{ color: '#e8bf6a', fontWeight: 600, marginBottom: 0 }}>— Proverbios 16:16</p>

              <div style={{
                marginTop: '2rem', paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {stats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '1.9rem', fontWeight: 700,
                        background: 'linear-gradient(135deg,#c9993b,#e8bf6a)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>{s.num}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-title animate-on-scroll fade-in">
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Nuestros Valores</span>
            <h2>Lo que Nos Define</h2>
            <div className="section-divider" />
            <p>Cuatro pilares que guían todo lo que hacemos como iglesia.</p>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className={`card animate-on-scroll delay-${(i + 1) * 100}`}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div className="card-icon">{v.icon}</div>
                  <h4 style={{ marginBottom: '0.75rem' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ──────────────────────────────── */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title animate-on-scroll fade-in">
            <span className="badge badge-outline" style={{ marginBottom: '0.75rem' }}>Calendario</span>
            <h2>Próximos Eventos</h2>
            <div className="section-divider" />
            <p>Le invitamos a participar en nuestras reuniones y actividades.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${(i + 1) * 100}`}
                style={{
                  background: '#fff',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.07)',
                  border: '1px solid rgba(15,23,42,0.06)',
                  borderLeft: '4px solid #c9993b',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(15,23,42,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,23,42,0.07)'; }}
              >
                <div style={{ flexShrink: 0, textAlign: 'center', minWidth: '90px' }}>
                  <div style={{
                    background: 'linear-gradient(145deg, #152847, #1e3a5f)',
                    color: '#fff', borderRadius: '0.65rem', padding: '0.6rem 0.75rem',
                  }}>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>📅</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600 }}>{event.date}</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#c9993b', fontWeight: 700, marginTop: '0.4rem' }}>{event.time}</div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.4rem' }}>{event.title}</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="animate-on-scroll">
            <Link to="/eventos" className="btn btn-outline">Ver todos los eventos</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section" style={{
        background: 'linear-gradient(145deg, #0b1727 0%, #152847 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(201,153,59,0.1) 0%, transparent 65%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="animate-on-scroll fade-in">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>¿Listo para visitarnos?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
              No importa dónde estés en tu camino espiritual, hay un lugar para ti en nuestra iglesia. ¡Le esperamos!
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            className="animate-on-scroll delay-200">
            <Link to="/planifica-tu-visita" className="btn btn-primary btn-lg">
              Planifica tu Visita
            </Link>
            <Link to="/contacto" className="btn btn-secondary btn-lg">
              Contáctenos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

