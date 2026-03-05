import { useState } from 'react';

const contactItems = [
  { icon: '📞', label: 'Teléfonos', val: '2236-0325 / 2244-4861' },
  { icon: '✉', label: 'Correo', val: 'info@labibliadicecr.org' },
  { icon: '📍', label: 'Dirección', val: 'San Miguel, Santo Domingo, Heredia' },
  { icon: '🕐', label: 'Culto', val: 'Domingos 10:00 a.m.' },
];

const socialLinks = [
  { icon: '▶', label: 'YouTube', href: 'https://www.youtube.com/@LBDcr', handle: '@LBDcr' },
  { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/lbdcr', handle: '/lbdcr' },
  { icon: '◉', label: 'Instagram', href: 'https://www.instagram.com/lbdcostarica/', handle: '@lbdcostarica' },
];

const contactDetail = [
  { icon: '📍', title: 'Dirección', lines: ['San Miguel de Santo Domingo, Heredia', '100 metros norte de la Escuela Ricardo Salas', 'Costa Rica'] },
  { icon: '📞', title: 'Teléfonos', lines: ['2236-0325', '2244-4861'] },
  { icon: '✉', title: 'Correo Electrónico', lines: ['info@labibliadicecr.org'] },
  { icon: '🕐', title: 'Culto Dominical', lines: ['Domingos a las 10:00 a.m.'] },
];

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
      <section className="section-sm" style={{
        background: 'linear-gradient(135deg, #c9993b 0%, #e8bf6a 100%)',
      }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '1rem' }}>
            {contactItems.map((item, i) => (
              <div key={i} className="animate-on-scroll" style={{ textAlign: 'center', transitionDelay: `${i * 0.08}s` }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0b1727', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.875rem', color: '#152847', fontWeight: 500 }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Form */}
            <div className="animate-on-scroll slide-left">
              <h2 style={{ marginBottom: '0.5rem' }}>Envíenos un Mensaje</h2>
              <p style={{ marginBottom: '2rem' }}>
                Complete el formulario a continuación y nos comunicaremos con usted a la brevedad.
              </p>
              {submitted ? (
                <div style={{
                  background: '#f0fdf4', border: '2px solid #22c55e',
                  borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center',
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
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.75rem', textAlign: 'center' }}>
                    También puede escribirnos directamente a{' '}
                    <a href="mailto:info@labibliadicecr.org" style={{ color: '#c9993b' }}>
                      info@labibliadicecr.org
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="animate-on-scroll slide-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'linear-gradient(145deg, #152847, #1e3a5f)',
                borderRadius: '1.25rem', padding: '2rem',
                boxShadow: '0 16px 48px rgba(21,40,71,0.28)',
              }}>
                <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Información de Contacto</h3>
                {contactDetail.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#e8bf6a', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>{item.title}</div>
                      {item.lines.map((l, j) => (
                        <div key={j} style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--color-off-white)', borderRadius: '1.25rem', padding: '2rem', border: '1px solid rgba(15,23,42,0.06)' }}>
                <h4 style={{ marginBottom: '1rem' }}>Redes Sociales</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.75rem 1rem', background: '#fff',
                        borderRadius: '0.75rem',
                        boxShadow: '0 1px 6px rgba(15,23,42,0.08)',
                        color: '#152847',
                        textDecoration: 'none',
                        border: '1px solid rgba(15,23,42,0.06)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,23,42,0.12)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 6px rgba(15,23,42,0.08)'; }}
                    >
                      <span style={{
                        width: '34px', height: '34px',
                        background: 'linear-gradient(145deg, #152847, #1e3a5f)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#e8bf6a', fontSize: '0.875rem',
                        fontWeight: 700, flexShrink: 0,
                      }}>{s.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.label}</div>
                        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{s.handle}</div>
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
          background: 'linear-gradient(145deg, #152847, #1e3a5f)',
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(201,153,59,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: '3rem', position: 'relative' }}>🗺</div>
          <div style={{ position: 'relative' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>San Miguel de Santo Domingo, Heredia</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1rem' }}>100 metros norte de la Escuela Ricardo Salas</p>
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
