
const series = [
  {
    title: 'El Sermón del Monte',
    passage: 'Mateo 5–7',
    count: 12,
    desc: 'Un estudio profundo de las enseñanzas de Jesús en el Monte de los Olivos.',
    active: true,
  },
  {
    title: 'Gracia que Transforma',
    passage: 'Romanos 1–8',
    count: 16,
    desc: 'Explorando la doctrina de la gracia y la justificación por la fe en la carta de Pablo a los Romanos.',
    active: false,
  },
  {
    title: 'El Libro de los Salmos',
    passage: 'Salmos 1–41',
    count: 20,
    desc: 'Oraciones y poesía del corazón humano ante la presencia de Dios.',
    active: false,
  },
];

// NOTE: Replace the `youtubeUrl` values with actual video URLs from the
// church's YouTube channel: https://www.youtube.com/@LBDcr
const sermons = [
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'Las Bienaventuranzas: Fundamento de la Vida Cristiana',
    pastor: 'Pastor Principal',
    date: '15 de junio, 2025',
    passage: 'Mateo 5:1-12',
    series: 'El Sermón del Monte',
    duration: '48 min',
  },
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'Sal y Luz del Mundo',
    pastor: 'Pastor Principal',
    date: '8 de junio, 2025',
    passage: 'Mateo 5:13-16',
    series: 'El Sermón del Monte',
    duration: '52 min',
  },
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'Cristo y la Ley: Cumplimiento y Plenitud',
    pastor: 'Pastor Principal',
    date: '1 de junio, 2025',
    passage: 'Mateo 5:17-20',
    series: 'El Sermón del Monte',
    duration: '45 min',
  },
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'El Padre Nuestro: Cómo Orar',
    pastor: 'Pastor Asociado',
    date: '25 de mayo, 2025',
    passage: 'Mateo 6:9-13',
    series: 'El Sermón del Monte',
    duration: '55 min',
  },
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'No os Afanéis: La Paz que Sobrepasa',
    pastor: 'Pastor Principal',
    date: '18 de mayo, 2025',
    passage: 'Mateo 6:25-34',
    series: 'El Sermón del Monte',
    duration: '50 min',
  },
  {
    youtubeUrl: 'https://www.youtube.com/@LBDcr',
    title: 'Justificados por la Fe: La Doctrina Central',
    pastor: 'Pastor Principal',
    date: '11 de mayo, 2025',
    passage: 'Romanos 3:21-26',
    series: 'Gracia que Transforma',
    duration: '58 min',
  },
];

export default function Sermones() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Sermones</h1>
          <div className="section-divider" />
          <p>Acceda a mensajes recientes y series de predicación. Que la Palabra de Dios edifique su vida.</p>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title">
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Mensaje Reciente</span>
            <h2>Último Sermón</h2>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{
              background: '#fff', borderRadius: '1rem', overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            }}>
              {/* YouTube channel latest-video embed via channel playlist */}
              <div style={{
                position: 'relative', paddingBottom: '56.25%', height: 0,
                background: '#0f1d35',
              }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed?listType=user_uploads&list=LBDcr&rel=0"
                  title="Último sermón de Iglesia La Biblia Dice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-navy">El Sermón del Monte</span>
                  <span className="badge badge-outline">Mateo 5:1-12</span>
                  <span className="badge" style={{ background: '#f0efea', color: '#4a4a4a' }}>48 min</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Las Bienaventuranzas: Fundamento de la Vida Cristiana</h3>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Pastor Principal · 15 de junio, 2025
                </p>
                <p>
                  En este mensaje exploramos las ocho bienaventuranzas de Mateo 5:1-12, consideradas el corazón de la ética cristiana y el fundamento del verdadero discipulado. El Señor Jesucristo nos presenta el carácter que debe adornar al ciudadano del Reino de Dios.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.youtube.com/@LBDcr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Ver en YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Series de Predicación</h2>
            <div className="section-divider" />
            <p>Estudiamos la Biblia libro por libro y tema por tema de forma sistemática.</p>
          </div>
          <div className="grid-3">
            {series.map((s, i) => (
              <div key={i} className="card" style={{ border: s.active ? '2px solid #c8a830' : 'none', position: 'relative' }}>
                {s.active && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                  }}>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>En Curso</span>
                  </div>
                )}
                <div className="card-body">
                  <div style={{
                    width: '48px', height: '48px', background: s.active ? '#c8a830' : '#1a2a4a',
                    borderRadius: '0.5rem', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '1rem', fontSize: '1.25rem',
                  }}>📖</div>
                  <h4 style={{ marginBottom: '0.4rem' }}>{s.title}</h4>
                  <p style={{ color: '#c8a830', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>{s.passage}</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{s.desc}</p>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: 0 }}>{s.count} mensajes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons List */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title">
            <h2>Mensajes Recientes</h2>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sermons.map((s, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '0.75rem', padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  flexShrink: 0, width: '52px', height: '52px',
                  borderRadius: '50%', background: '#1a2a4a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#c8a830', fontSize: '1.1rem' }}>▶</span>
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h5 style={{ marginBottom: '0.3rem' }}>{s.title}</h5>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>{s.pastor}</span>
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>·</span>
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>{s.date}</span>
                    <span className="badge badge-outline" style={{ fontSize: '0.72rem' }}>{s.passage}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{s.duration}</span>
                  <a
                    href={s.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.youtube.com/@LBDcr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ▶ Ver todos los sermones en YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
