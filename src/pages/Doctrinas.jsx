const doctrines = [
  {
    number: '01',
    title: 'Las Sagradas Escrituras',
    summary: 'La Biblia es la Palabra inspirada, infalible e inerrante de Dios.',
    content: `Creemos que la Biblia, compuesta de los 66 libros del Antiguo y Nuevo Testamento, es la Palabra de Dios. Fue escrita por hombres elegidos por Dios, los cuales fueron movidos por el Espíritu Santo (2 Pedro 1:21). La Biblia es plenamente inspirada (2 Timoteo 3:16-17), infalible e inerrante en sus manuscritos originales. La Escritura es la autoridad suprema e infalible en toda materia de fe y conducta cristiana. Ninguna enseñanza humana, tradición eclesiástica ni experiencia personal puede ponerse por encima de la Palabra de Dios.`,
    refs: ['2 Timoteo 3:16-17', '2 Pedro 1:20-21', 'Salmos 119:105', 'Juan 17:17'],
  },
  {
    number: '02',
    title: 'La Trinidad',
    summary: 'Hay un solo Dios eternamente existente en tres personas: Padre, Hijo y Espíritu Santo.',
    content: `Creemos en un solo Dios, eterno, omnipotente, omnisciente y omnipresente, creador del universo y de todo lo que existe. Este único Dios existe eternamente en tres personas distintas: el Padre, el Hijo (Jesucristo) y el Espíritu Santo. Cada persona es totalmente Dios, sin embargo no hay tres dioses sino uno solo. Esta es la doctrina central y fundamental del cristianismo bíblico.`,
    refs: ['Deuteronomio 6:4', 'Mateo 28:19', '2 Corintios 13:14', 'Juan 10:30'],
  },
  {
    number: '03',
    title: 'Jesucristo',
    summary: 'Jesucristo es Dios encarnado — plenamente Dios y plenamente hombre.',
    content: `Creemos en Jesucristo, la segunda persona de la Trinidad, quien es plenamente Dios y plenamente hombre. Nació de una virgen (Mateo 1:23), vivió una vida sin pecado, murió en la cruz como sustituto nuestro, resucitó corporalmente al tercer día, ascendió al Padre y regresará en gloria. Su muerte expiatoria es el único fundamento de la salvación. Cristo es el único mediador entre Dios y los hombres (1 Timoteo 2:5).`,
    refs: ['Juan 1:1,14', 'Filipenses 2:5-11', 'Isaías 53', '1 Timoteo 2:5'],
  },
  {
    number: '04',
    title: 'El Espíritu Santo',
    summary: 'El Espíritu Santo es la tercera persona de la Trinidad, que habita en cada creyente.',
    content: `Creemos en el Espíritu Santo, la tercera persona de la Trinidad. El Espíritu Santo convence al mundo de pecado, justicia y juicio (Juan 16:8-11). En el momento de la salvación, el Espíritu Santo mora permanentemente en el creyente (1 Corintios 6:19-20), sella al creyente (Efesios 1:13-14), lo guía a toda verdad (Juan 16:13) y produce en él el fruto del Espíritu (Gálatas 5:22-23).`,
    refs: ['Juan 16:8-13', '1 Corintios 6:19', 'Efesios 1:13-14', 'Gálatas 5:22-23'],
  },
  {
    number: '05',
    title: 'La Salvación',
    summary: 'La salvación es por gracia sola, mediante la fe sola, en Cristo solo.',
    content: `Creemos que todos los seres humanos son pecadores por naturaleza y por acción (Romanos 3:23), y que el castigo del pecado es la muerte eterna (Romanos 6:23). La salvación es un regalo de Dios, recibido solamente por medio de la fe en Jesucristo y su obra expiatoria en la cruz (Efesios 2:8-9). No hay obras, méritos ni rituales humanos que puedan añadir nada a la obra perfecta de Cristo. La justificación es por la fe sola en Cristo solo.`,
    refs: ['Romanos 3:23', 'Efesios 2:8-9', 'Juan 3:16', 'Romanos 10:9-10'],
  },
  {
    number: '06',
    title: 'La Seguridad Eterna',
    summary: 'El creyente verdadero tiene seguridad eterna de su salvación.',
    content: `Creemos en la seguridad eterna del creyente genuino. El que ha puesto su fe en Jesucristo no perderá su salvación (Juan 10:28-29). Esta seguridad no se basa en el mérito humano sino en la fidelidad de Dios, en la obra perfecta de Cristo y en el sello del Espíritu Santo. Sin embargo, reconocemos que la perseverancia en la fe es evidencia de una salvación genuina, no la base de ella.`,
    refs: ['Juan 10:28-29', 'Romanos 8:38-39', 'Efesios 1:13-14', 'Filipenses 1:6'],
  },
  {
    number: '07',
    title: 'La Iglesia',
    summary: 'La iglesia local es una congregación de creyentes bautizados, reunidos bajo la autoridad de Cristo.',
    content: `Creemos que la iglesia local es una congregación de creyentes bautizados que se han unido voluntariamente bajo el señorío de Jesucristo. Las dos ordenanzas de la iglesia son el bautismo (por inmersión, solo de creyentes) y la Santa Cena. La iglesia local tiene dos oficios: pastores/ancianos y diáconos. La cabeza de la iglesia es Jesucristo, y su autoridad está expresada en la Palabra de Dios.`,
    refs: ['Mateo 16:18', 'Efesios 1:22-23', 'Mateo 28:19-20', 'Hechos 2:41-42'],
  },
  {
    number: '08',
    title: 'Las Últimas Cosas',
    summary: 'Jesús regresará en gloria para juzgar a vivos y muertos.',
    content: `Creemos en el regreso personal, corporal y visible de Jesucristo. Los muertos en Cristo resucitarán primero, y los creyentes vivos serán transformados. Habrá un juicio final en el que cada persona dará cuentas a Dios. Los creyentes recibirán vida eterna en la presencia de Dios; los incrédulos enfrentarán la condenación eterna (Juan 5:28-29). Esperamos con gozo la venida de nuestro Señor Jesucristo.`,
    refs: ['1 Tesalonicenses 4:13-18', 'Juan 5:28-29', 'Apocalipsis 20:11-15', 'Apocalipsis 21-22'],
  },
];

const distinctives = [
  { icon: '📖', title: 'Sola Scriptura', desc: 'La Biblia es nuestra única autoridad suprema en materia de fe y práctica. Ninguna tradición o magisterio humano está por encima de la Escritura.' },
  { icon: '✝', title: 'Solus Christus', desc: 'La salvación se encuentra únicamente en Jesucristo. Él es el único camino, la verdad y la vida (Juan 14:6).' },
  { icon: '🎁', title: 'Sola Gratia', desc: 'La salvación es enteramente un regalo de la gracia de Dios. No hay méritos humanos que puedan contribuir a ella.' },
  { icon: '🙌', title: 'Sola Fide', desc: 'La fe sola en Jesucristo es el medio por el cual recibimos la salvación. Las obras son el resultado de la salvación, no su causa.' },
  { icon: '👑', title: 'Soli Deo Gloria', desc: 'Todo lo que hacemos — predicación, adoración, servicio — debe ser para la gloria de Dios solamente.' },
  { icon: '🏛', title: 'No Denominacional', desc: 'Somos una iglesia independiente que reconoce a Cristo como cabeza y a la Biblia como constitución. No pertenecemos a ninguna denominación humana.' },
];

export default function Doctrinas() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Doctrinas</h1>
          <div className="section-divider" />
          <p>Lo que creemos y por qué lo creemos. Nuestras convicciones están arraigadas en las Sagradas Escrituras.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <div className="animate-on-scroll fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Declaración de Fe</h2>
            <div className="section-divider" />
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              Iglesia La Biblia Dice es una iglesia cristiana no denominacional. Nuestra base doctrinal es la Biblia — los 66 libros del Antiguo y Nuevo Testamento — como la Palabra inspirada, infalible e inerrante de Dios. A continuación presentamos las doctrinas fundamentales que guían nuestra fe y práctica.
            </p>
          </div>
        </div>
      </section>

      {/* Doctrines */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
            {doctrines.map((doc, i) => (
              <div key={i} className={`animate-on-scroll delay-${(i % 3 + 1) * 100}`} style={{
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(15,23,42,0.08)',
                border: '1px solid rgba(15,23,42,0.06)',
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
              }}>
                <div style={{
                  background: 'linear-gradient(145deg, #152847, #1e3a5f)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem 0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#e8bf6a',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}>
                    {doc.number}
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '0.4rem' }}>{doc.title}</h3>
                  <p style={{ color: '#c9993b', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
                    {doc.summary}
                  </p>
                  <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>{doc.content}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {doc.refs.map((ref, j) => (
                      <span key={j} className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
                        📖 {ref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctives */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-title animate-on-scroll fade-in">
            <h2>Distintivos Teológicos</h2>
            <div className="section-divider" />
            <p>Principios que nos identifican como iglesia no denominacional bíblica.</p>
          </div>
          <div className="grid-3">
            {distinctives.map((item, i) => (
              <div key={i} className={`card animate-on-scroll delay-${(i % 3 + 1) * 100}`}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div className="card-icon">{item.icon}</div>
                  <h4 style={{ marginBottom: '0.75rem', color: '#c9993b' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
