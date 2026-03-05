import { Link } from 'react-router-dom';

const faqs = [
  { q: '¿Tengo que ser cristiano para asistir?', a: 'No, absolutamente no. Personas en cualquier etapa de su camino espiritual son bienvenidas. Venga con sus preguntas y dudas, aquí encontrará un ambiente acogedor.' },
  { q: '¿Cómo debo vestirme?', a: 'Vestimos de forma casual a semi-formal. Lo más importante es que se sienta cómodo. No hay código de vestimenta estricto; ven como eres.' },
  { q: '¿Qué debo traer?', a: 'Solo su deseo de participar. Si tiene una Biblia puede traerla, pero no es necesario. Tenemos Biblias disponibles y proyectamos los textos durante el culto.' },
  { q: '¿Hay lugar para estacionar?', a: 'Contamos con estacionamiento limitado en las instalaciones y espacio adicional en la calle. Le recomendamos llegar unos minutos antes para encontrar lugar con facilidad.' },
  { q: '¿Cuánto dura el culto?', a: 'El culto principal tiene una duración aproximada de hora y media a dos horas, incluyendo tiempo de adoración, predicación y oración.' },
  { q: '¿Hay programas para niños?', a: 'Sí, contamos con un ministerio de niños (LBD Kids) que funciona durante el culto principal para niños de 3 a 12 años, con maestros capacitados y material bíblico apropiado para cada edad.' },
];

export default function PlanificaTuVisita() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Planifica tu Visita</h1>
          <div className="section-divider" />
          <p>Todo lo que necesita saber antes de visitarnos por primera vez.</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>¿Qué puede esperar?</h2>
            <div className="section-divider" />
            <p>Queremos que su primera visita sea una experiencia significativa y sin sorpresas.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🤗', title: 'Bienvenida Cálida', desc: 'Al llegar, nuestros ujieres le recibirán con alegría, le orientarán sobre las instalaciones y responderán sus preguntas.' },
              { icon: '🎵', title: 'Alabanza y Adoración', desc: 'Comenzamos con un tiempo de adoración musical que incluye himnos clásicos y cánticos contemporáneos de fe.' },
              { icon: '📖', title: 'Predicación Bíblica', desc: 'El pastor expone la Palabra de Dios con claridad y aplicación práctica para la vida cotidiana.' },
              { icon: '🙏', title: 'Oración Congregacional', desc: 'Dedicamos tiempo a la oración comunitaria, intercediendo unos por otros y presentando peticiones delante de Dios.' },
              { icon: '👨‍👩‍👧', title: 'Comunión Fraternal', desc: 'Después del culto, disfrutamos de tiempo de confraternización. Es un excelente momento para conocer a la familia de la iglesia.' },
              { icon: '🏠', title: 'Grupos Pequeños', desc: 'Le invitamos a unirse a uno de nuestros grupos de discipulado donde profundizará en la Palabra en un ambiente más íntimo.' },
            ].map((item, i) => (
              <div key={i} className="card">
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

      {/* Service Info */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Información del Culto</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: '🕐', label: 'Hora', val: 'Domingos a las 10:00 a.m.' },
                  { icon: '⏱', label: 'Duración', val: 'Aproximadamente 1.5 – 2 horas' },
                  { icon: '🎵', label: 'Música', val: 'Himnos clásicos y alabanzas contemporáneas' },
                  { icon: '📖', label: 'Predicación', val: 'Expositiva — texto por texto de la Biblia' },
                  { icon: '👗', label: 'Vestimenta', val: 'Casual a semi-formal. ¡Venga como es!' },
                  { icon: '🌐', label: 'Idioma', val: 'Español' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: '#fff', borderRadius: '0.5rem', padding: '1rem 1.25rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                      <div style={{ color: '#2c2c2c', fontWeight: 500 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Cómo Llegar</h2>
              <div style={{
                background: '#1a2a4a', borderRadius: '1rem', padding: '2rem',
                color: '#fff', marginBottom: '1.25rem',
              }}>
                <h4 style={{ color: '#c8a830', marginBottom: '1rem' }}>📍 Dirección</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: 0 }}>
                  San Miguel de Santo Domingo, Heredia<br />
                  100 metros norte de la Escuela Ricardo Salas
                </p>
              </div>
              <div style={{
                background: '#fff', borderRadius: '1rem', padding: '2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}>
                <h4 style={{ marginBottom: '1rem' }}>🗺 Indicaciones</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Desde San José: tome la ruta hacia Santo Domingo de Heredia.',
                    'Al llegar a San Miguel, busque la Escuela Ricardo Salas.',
                    'La iglesia se encuentra 100 metros al norte de la escuela.',
                    'Hay señales de la iglesia visibles desde la calle principal.',
                  ].map((step, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
                      <span style={{
                        flexShrink: 0, width: '22px', height: '22px',
                        background: '#c8a830', color: '#1a2a4a',
                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700,
                      }}>{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f0efea' }}>
                  <a
                    href="https://maps.google.com/?q=San+Miguel+Santo+Domingo+Heredia+Costa+Rica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #1a2a4a, #253d6b)', color: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>LBD Kids</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Sus Hijos Están en Buenas Manos</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Nuestro ministerio de niños ofrece clases bíblicas adaptadas a cada grupo de edad, con maestros capacitados y comprometidos con el bienestar de cada niño.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                El programa para niños funciona en paralelo con el culto principal, para que tanto padres como hijos tengan una experiencia significativa y apropiada para su edad.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Cuna (0–2 años)', 'Preescolares (3–5 años)', 'Primaria (6–9 años)', 'Pre-adolescentes (10–12 años)'].map((g, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#c8a830' }}>✓</span> {g}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '🔒', title: 'Seguridad', desc: 'Procedimientos de check-in y check-out para la seguridad de cada niño.' },
                { icon: '📚', title: 'Currículo Bíblico', desc: 'Material de enseñanza diseñado para cada etapa del desarrollo infantil.' },
                { icon: '🎨', title: 'Actividades', desc: 'Dinámicas, manualidades y actividades que hacen el aprendizaje divertido.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.08)', borderRadius: '0.75rem',
                  padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h5 style={{ color: '#c8a830', marginBottom: '0.25rem' }}>{item.title}</h5>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title">
            <h2>Preguntas Frecuentes</h2>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '0.75rem',
                padding: '1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              }}>
                <h5 style={{ marginBottom: '0.6rem', color: '#1a2a4a', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#c8a830', flexShrink: 0 }}>?</span>
                  {faq.q}
                </h5>
                <p style={{ marginBottom: 0, fontSize: '0.95rem', paddingLeft: '1.25rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>¿Tiene más preguntas? ¡Con gusto las respondemos!</p>
            <Link to="/contacto" className="btn btn-primary">Contáctenos</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
