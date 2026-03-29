const horarios = [
  { dia: 'Domingos', hora: '10:00 a.m.', evento: 'Servicio Principal (adultos y niños)' },
  { dia: 'Lunes', hora: '7:00 p.m.', evento: 'Hombres de Valor' },
  { dia: 'Martes', hora: '7:00 p.m.', evento: 'Mujer Valiosa' },
  { dia: 'Miércoles', hora: '9:00 a.m.', evento: 'Refugio de los Sabios' },
  { dia: 'Viernes', hora: '6:00 p.m.', evento: 'Conectados 24/7 (jóvenes)' },
  { dia: 'Sábados', hora: '9:00 a.m.', evento: 'BeeHive (niños) - cada 15 días' },
  { dia: 'Sábados', hora: '4:00 p.m.', evento: 'Casa2 (matrimonios) - bimestral' },
];

export default function PlanificaVisita() {
  return (
    <section id="visita" className="section visita">
      <div className="container">
        <h2 className="section__title reveal">Planifica tu Visita</h2>

        <div className="visita__grid">
          {/* Schedule */}
          <div className="visita__block card-3d reveal">
            <h3>&#128340; Horarios</h3>
            <div className="visita__table-scroll">
              <table className="visita__table">
                <thead>
                  <tr>
                    <th>Día</th>
                    <th>Hora</th>
                    <th>Evento</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((h, i) => (
                    <tr key={i}>
                      <td><strong>{h.dia}</strong></td>
                      <td>{h.hora}</td>
                      <td>{h.evento}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="visita__block card-3d reveal">
            <h3>&#128205; Ubicación</h3>
            <p>San Miguel de Santo Domingo, Heredia; 100 metros norte de la Escuela Ricardo Salas.</p>
            <a
              href="https://waze.com/ul/hd1u0z3ukr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--3d visita__waze"
            >
              Abrir en Waze
            </a>

            <h3 style={{ marginTop: '2rem' }}>&#128222; Contacto</h3>
            <ul className="visita__contact-list">
              <li>
                <a href="https://wa.me/50689815605">
                  WhatsApp: 8981-5605
                </a>
              </li>
              <li>
                <a href="tel:+50689815605">
                  Llamar: 8981-5605
                </a>
              </li>
              <li>
                <a href="mailto:info@labibliadicecr.org">
                  Correo: info@labibliadicecr.org
                </a>
              </li>
            </ul>
            <a
              href="https://chat.whatsapp.com/LMscywEb7Wo8sfoQvwaUOx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--3d"
            >
              Comunidad de WhatsApp
            </a>
          </div>
        </div>

        {/* Form CTA */}
        <div className="visita__form-cta reveal">
          <h3>Déjanos saber que vienes</h3>
          <p>Completa este formulario para que podamos prepararnos para recibirte.</p>
          <a
            href="https://forms.cloud.microsoft/r/EDFnR3KNnP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--3d"
          >
            Completar Formulario de Visita
          </a>
        </div>
      </div>
    </section>
  );
}
