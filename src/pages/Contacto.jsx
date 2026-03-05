import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Contacto</h1>
          <div className="section-divider" />
          <p>Estamos aquí para servirle. No dude en comunicarse con nosotros.</p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="section-sm" style={{ background: '#c8a830' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '1rem' }}>
            {[
              { icon: '📞', label: 'Teléfonos', val: '2236-0325 / 2244-4861' },
              { icon: '✉', label: 'Correo', val: 'info@labibliadicecr.org' },
              { icon: '📍', label: 'Dirección', val: 'San Miguel, Santo Domingo, Heredia' },
              { icon: '🕐', label: 'Culto', val: 'Domingos 10:00 a.m.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f1d35', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.9rem', color: '#1a2a4a', fontWeight: 500 }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Envíenos un Mensaje</h2>
              <p style={{ marginBottom: '2rem' }}>
                Complete el formulario a continuación y nos comunicaremos con usted a la brevedad.
              </p>
              {submitted ? (
                <div style={{
                  background: '#f0fdf4', border: '2px solid #22c55e',
                  borderRadius: '1rem', padding: '2.5rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ marginBottom: '0.75rem', color: '#16a34a' }}>¡Mensaje Enviado!</h3>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Gracias por contactarnos. Hemos recibido su mensaje y nos comunicaremos con usted a la brevedad posible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' }); }}
                    className="btn btn-outline btn-sm"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="nombre">Nombre Completo *</label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        className="form-control"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Su nombre"
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Correo Electrónico *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="su@correo.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="telefono">Teléfono</label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        className="form-control"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="xxxx-xxxx"
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="asunto">Asunto *</label>
                      <select
                        id="asunto"
                        name="asunto"
                        className="form-control"
                        value={form.asunto}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione un asunto</option>
                        <option value="visita">Quiero visitar la iglesia</option>
                        <option value="oracion">Petición de oración</option>
                        <option value="ministerio">Información sobre ministerios</option>
                        <option value="consejeria">Consejería pastoral</option>
                        <option value="membresia">Membresía</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      className="form-control"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Escriba su mensaje aquí..."
                      rows={6}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Enviar Mensaje
                  </button>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.75rem', textAlign: 'center' }}>
                    También puede escribirnos directamente a{' '}
                    <a href="mailto:info@labibliadicecr.org" style={{ color: '#c8a830' }}>
                      info@labibliadicecr.org
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a2a4a, #253d6b)',
                borderRadius: '1rem', padding: '2rem',
              }}>
                <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Información de Contacto</h3>
                {[
                  { icon: '📍', title: 'Dirección', lines: ['San Miguel de Santo Domingo, Heredia', '100 metros norte de la Escuela Ricardo Salas', 'Costa Rica'] },
                  { icon: '📞', title: 'Teléfonos', lines: ['2236-0325', '2244-4861'] },
                  { icon: '✉', title: 'Correo Electrónico', lines: ['info@labibliadicecr.org'] },
                  { icon: '🕐', title: 'Culto Dominical', lines: ['Domingos a las 10:00 a.m.'] },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#c8a830', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{item.title}</div>
                      {item.lines.map((l, j) => (
                        <div key={j} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#f8f7f2', borderRadius: '1rem', padding: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Redes Sociales</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: '▶', label: 'YouTube', href: 'https://www.youtube.com/@LBDcr', handle: '@LBDcr' },
                    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/lbdcr', handle: '/lbdcr' },
                    { icon: '◉', label: 'Instagram', href: 'https://www.instagram.com/lbdcostarica/', handle: '@lbdcostarica' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.75rem 1rem', background: '#fff',
                        borderRadius: '0.5rem', transition: 'all 0.2s',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        color: '#1a2a4a',
                        textDecoration: 'none',
                      }}
                    >
                      <span style={{
                        width: '32px', height: '32px', background: '#1a2a4a',
                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#c8a830', fontSize: '0.875rem',
                        fontWeight: 700, flexShrink: 0,
                      }}>{s.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.label}</div>
                        <div style={{ fontSize: '0.8rem', color: '#999' }}>{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section>
        <div style={{
          background: 'linear-gradient(135deg, #1a2a4a, #253d6b)',
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem' }}>🗺</div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>San Miguel de Santo Domingo, Heredia</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>100 metros norte de la Escuela Ricardo Salas</p>
            <a
              href="https://maps.google.com/?q=San+Miguel+Santo+Domingo+Heredia+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
