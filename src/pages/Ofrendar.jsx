import { Link } from 'react-router-dom';

const uses = [
  { icon: '📖', title: 'Predicación y Enseñanza', desc: 'Sostenemos a nuestros pastores y líderes que dedican su tiempo a preparar mensajes bíblicos y a discipular a la congregación.' },
  { icon: '🏛', title: 'Instalaciones', desc: 'Mantenimiento, mejoras y operación del templo y demás instalaciones para que sean un espacio digno para la adoración y el servicio.' },
  { icon: '👧', title: 'Ministerios de la Iglesia', desc: 'Financiamos los programas de niños, jóvenes, damas, varones y misiones para que cada ministerio pueda crecer y alcanzar más vidas.' },
  { icon: '🌍', title: 'Evangelismo y Misiones', desc: 'Apoyamos el alcance misionero local y el evangelismo en nuestra comunidad para llevar el evangelio a quienes aún no lo conocen.' },
  { icon: '❤️', title: 'Ministerio de Misericordia', desc: 'Servimos a familias necesitadas en nuestra comunidad, ofreciendo apoyo práctico en momentos de crisis y necesidad.' },
  { icon: '📡', title: 'Ministerio en Línea', desc: 'Transmisiones en vivo, producción de sermones y presencia digital para alcanzar a personas que no pueden asistir presencialmente.' },
];

const verses = [
  { text: '"Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."', ref: '2 Corintios 9:7' },
  { text: '"Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto..."', ref: 'Malaquías 3:10' },
  { text: '"Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo."', ref: 'Lucas 6:38' },
];

export default function Ofrendar() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Ofrendar</h1>
          <div className="section-divider" />
          <p>Su generosidad hace posible el ministerio de la Palabra de Dios en nuestra comunidad y más allá.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-off-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Nuestra Filosofía de Mayordomía</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, textAlign: 'center' }}>
              En Iglesia La Biblia Dice creemos que dar es un acto de adoración. Todo lo que tenemos pertenece a Dios, y dar generosamente es una expresión de nuestra gratitud, nuestra confianza en Él y nuestro compromiso con su obra en la tierra.
            </p>
            <p style={{ lineHeight: 1.8, textAlign: 'center' }}>
              Nunca ejercemos presión para que nadie dé. La ofrenda debe nacer de un corazón agradecido y dispuesto. Como dice la Palabra: "Dios ama al dador alegre" (2 Corintios 9:7).
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
            {verses.map((v, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                borderLeft: '4px solid #c8a830',
              }}>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.7, marginBottom: '0.5rem', color: '#1a2a4a' }}>
                  {v.text}
                </p>
                <p style={{ color: '#c8a830', fontWeight: 600, fontSize: '0.875rem', marginBottom: 0 }}>— {v.ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How your giving is used */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>¿Cómo Se Usa Su Ofrenda?</h2>
            <div className="section-divider" />
            <p>Administramos los recursos que Dios nos confía con transparencia, integridad y fidelidad.</p>
          </div>
          <div className="grid-3">
            {uses.map((item, i) => (
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

      {/* Ways to Give */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title">
            <h2>Formas de Dar</h2>
            <div className="section-divider" />
            <p>Puede contribuir al ministerio de la iglesia de las siguientes formas:</p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '🏛',
                title: 'En el Culto',
                desc: 'Recibimos ofrendas durante el culto dominical. Hay una caja de ofrendas en la entrada del templo disponible antes y después del servicio.',
                highlight: 'Domingos · 10:00 a.m.',
              },
              {
                icon: '🏦',
                title: 'Transferencia Bancaria',
                desc: 'Puede realizar una transferencia directa a la cuenta de la iglesia. Contáctenos para recibir los datos bancarios de forma segura.',
                highlight: 'Disponible 24/7',
              },
              {
                icon: '✉',
                title: 'Contacte la Oficina',
                desc: 'Para preguntas sobre mayordomía, diezmos u ofrendas especiales, no dude en comunicarse con nuestra administración.',
                highlight: 'info@labibliadicecr.org',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #f0efea',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.75rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{item.desc}</p>
                <span className="badge badge-gold">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0f1d35, #1a2a4a)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Transparencia y Confianza</h2>
          <div className="section-divider" />
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Nos comprometemos a administrar cada ofrenda con integridad, transparencia y fidelidad ante Dios y la congregación. Los estados financieros de la iglesia están disponibles para los miembros que los soliciten.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { val: '100%', label: 'Transparencia financiera' },
              { val: '0%', label: 'Presión para dar' },
              { val: '100%', label: 'Administración fiel' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#c8a830' }}>{s.val}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <Link to="/contacto" className="btn btn-primary">
            Contacte la Administración
          </Link>
        </div>
      </section>
    </div>
  );
}
