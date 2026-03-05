const leaders = [
  {
    name: 'Pastor Principal',
    role: 'Pastor Principal',
    ministry: 'Liderazgo General',
    bio: 'Graduado de seminario teológico con más de 25 años de ministerio pastoral. Comprometido con la predicación expositiva y el discipulado personal. Está casado y tiene tres hijos. Su pasión es ver vidas transformadas por el poder de la Palabra de Dios.',
    passion: 'Predicación expositiva y formación de líderes',
    verse: '"Predica la palabra; que instes a tiempo y fuera de tiempo." — 2 Timoteo 4:2',
  },
  {
    name: 'Pastor Asociado',
    role: 'Pastor Asociado',
    ministry: 'Discipulado y Grupos',
    bio: 'Servidor fiel del ministerio con formación en teología bíblica y consejería pastoral. Dirige el programa de grupos pequeños y el ministerio de discipulado integral de la iglesia. Su corazón está en ver a los creyentes madurar en la fe.',
    passion: 'Discipulado y crecimiento espiritual',
    verse: '"Lo que has oído de mí... esto encarga a hombres fieles." — 2 Timoteo 2:2',
  },
  {
    name: 'Director de Jóvenes',
    role: 'Director de Ministerio Juvenil',
    ministry: 'Jóvenes LBD',
    bio: 'Líder joven con visión y pasión por alcanzar a la próxima generación. Con formación en ministerio juvenil, lidera el grupo de jóvenes con creatividad, autenticidad y fidelidad a la Palabra de Dios.',
    passion: 'Alcanzar a los jóvenes para Cristo',
    verse: '"Ninguno tenga en poco tu juventud." — 1 Timoteo 4:12',
  },
  {
    name: 'Directora de Niños',
    role: 'Directora de LBD Kids',
    ministry: 'Ministerio de Niños',
    bio: 'Con años de experiencia en educación cristiana infantil, dirige el ministerio de niños con amor, creatividad y compromiso doctrinal. Cree firmemente en enseñar a los niños la Palabra de Dios desde su primera infancia.',
    passion: 'Enseñanza bíblica a la niñez',
    verse: '"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." — Proverbios 22:6',
  },
  {
    name: 'Director de Alabanza',
    role: 'Director del Ministerio de Alabanza',
    ministry: 'Ministerio de Adoración',
    bio: 'Músico comprometido con la adoración auténtica y centrada en Dios. Lidera el equipo de alabanza con excelencia musical y corazón pastoral, buscando siempre que la adoración glorifique a Dios y edifique a la congregación.',
    passion: 'Adoración en espíritu y en verdad',
    verse: '"Cantad al SEÑOR cántico nuevo." — Salmos 96:1',
  },
  {
    name: 'Coordinadora de Damas',
    role: 'Coordinadora del Ministerio de Mujeres',
    ministry: 'Mujeres de la Palabra',
    bio: 'Mujer de oración y de la Palabra que lidera el ministerio femenino de la iglesia con gracia y sabiduría. Organiza estudios bíblicos, retiros y actividades que fortalecen a las mujeres en su fe y en su rol en la familia y la iglesia.',
    passion: 'Fortalecer a las mujeres en la Palabra',
    verse: '"La mujer que teme al SEÑOR, esa será alabada." — Proverbios 31:30',
  },
];

export default function Liderazgo() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Liderazgo</h1>
          <div className="section-divider" />
          <p>Conozca a los siervos que Dios ha puesto para guiar y servir a nuestra congregación.</p>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#f8f7f2', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <blockquote style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#1a2a4a',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
          }}>
            "Apaciguad la grey de Dios que está entre vosotros, cuidando de ella, no por fuerza, sino voluntariamente... no como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey."
          </blockquote>
          <p style={{ color: '#c8a830', fontWeight: 600, marginBottom: 0 }}>— 1 Pedro 5:2-3</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Equipo de Liderazgo</h2>
            <div className="section-divider" />
            <p>Personas llamadas por Dios a servir a la iglesia con fidelidad, humildad y dedicación.</p>
          </div>
          <div className="grid-3">
            {leaders.map((leader, i) => (
              <div key={i} className="card">
                <div style={{
                  height: '140px',
                  background: `linear-gradient(135deg, #1a2a4a, #253d6b)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(200,168,48,0.2)',
                    border: '3px solid #c8a830',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}>
                    {i % 2 === 0 ? '👨‍💼' : '👩‍💼'}
                  </div>
                </div>
                <div className="card-body">
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ marginBottom: '0.25rem' }}>{leader.name}</h4>
                    <p style={{ color: '#c8a830', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>{leader.role}</p>
                    <span className="badge badge-navy" style={{ fontSize: '0.72rem' }}>{leader.ministry}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{leader.bio}</p>
                  <div style={{
                    borderTop: '1px solid #f0efea', paddingTop: '1rem',
                    marginTop: '0.5rem',
                  }}>
                    <p style={{
                      fontSize: '0.8rem', color: '#666', fontStyle: 'italic',
                      lineHeight: 1.6, marginBottom: 0,
                    }}>
                      {leader.verse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Gobierno Eclesiástico</h2>
              <div className="section-divider" style={{ margin: '0 0 1.5rem' }} />
              <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                Iglesia La Biblia Dice opera bajo un modelo de gobierno congregacional con liderazgo plural. Creemos que Cristo es la cabeza de la iglesia (Efesios 1:22-23) y que la congregación de creyentes bautizados tiene la autoridad final bajo la Palabra de Dios.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                El pastor principal, junto con un cuerpo de ancianos/diáconos, provee dirección espiritual y administrativa a la iglesia, siempre bajo la autoridad de las Sagradas Escrituras.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                {[
                  'Cristo como única cabeza de la Iglesia',
                  'La Biblia como autoridad suprema',
                  'Liderazgo plural de pastores y ancianos',
                  'Congregación de creyentes bautizados',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ color: '#c8a830', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: '#1a2a4a', borderRadius: '1rem', padding: '2.5rem',
            }}>
              <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Únase a la Familia</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Si desea conocer más sobre nuestra forma de gobierno, nuestros valores o cómo convertirse en miembro de la iglesia, no dude en comunicarse con nosotros.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Ofrecemos clases de membresía donde explicamos en detalle nuestras creencias, valores y expectativas de la vida de iglesia.
              </p>
              <a href="mailto:info@labibliadicecr.org" className="btn btn-primary">
                Preguntar sobre Membresía
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
