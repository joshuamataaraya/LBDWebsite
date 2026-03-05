import { useState } from 'react';

const events = [
  {
    category: 'Culto',
    color: '#152847',
    title: 'Culto Dominical',
    date: 'Todos los domingos',
    time: '10:00 a.m.',
    location: 'Templo Principal',
    desc: 'Nuestro culto semanal de adoración, predicación de la Palabra y comunión fraternal.',
    recurring: true,
  },
  {
    category: 'Oración',
    color: '#8b5cf6',
    title: 'Noche de Oración Congregacional',
    date: 'Primer viernes del mes',
    time: '7:00 p.m.',
    location: 'Templo Principal',
    desc: 'Un tiempo especial dedicado a la oración colectiva, la intercesión y la búsqueda de Dios.',
    recurring: true,
  },
  {
    category: 'Discipulado',
    color: '#10b981',
    title: 'Grupos de Discipulado',
    date: 'Sábados',
    time: '3:00 p.m.',
    location: 'Hogares de la congregación',
    desc: 'Pequeños grupos bíblicos para profundizar en la Palabra, orar juntos y crecer en comunidad.',
    recurring: true,
  },
  {
    category: 'Jóvenes',
    color: '#f59e0b',
    title: 'Reunión de Jóvenes',
    date: 'Viernes',
    time: '7:00 p.m.',
    location: 'Salón de Jóvenes',
    desc: 'Espacio semanal para que los jóvenes se reúnan, adoren a Dios y crezcan en la fe juntos.',
    recurring: true,
  },
  {
    category: 'Especial',
    color: '#ef4444',
    title: 'Retiro de Jóvenes 2025',
    date: '19–21 de septiembre, 2025',
    time: 'Todo el día',
    location: 'Centro de Retiros Los Pinos, Heredia',
    desc: 'Un fin de semana intenso de adoración, enseñanza bíblica y comunión para jóvenes de 13 a 25 años. Cupos limitados.',
    recurring: false,
  },
  {
    category: 'Especial',
    color: '#ef4444',
    title: 'Conferencia Anual de Mujeres',
    date: '11 de octubre, 2025',
    time: '8:00 a.m. – 5:00 p.m.',
    location: 'Templo Principal',
    desc: 'Un día especial de inspiración, adoración y enseñanza bíblica para las mujeres de nuestra congregación.',
    recurring: false,
  },
  {
    category: 'Evangelismo',
    color: '#14b8a6',
    title: 'Día de Alcance Comunitario',
    date: '4 de octubre, 2025',
    time: '9:00 a.m.',
    location: 'San Miguel de Santo Domingo',
    desc: 'Salimos a servir y compartir el evangelio en nuestra comunidad a través de actividades sociales y de evangelismo.',
    recurring: false,
  },
  {
    category: 'Educación',
    color: '#3b82f6',
    title: 'Seminario Bíblico Intensivo',
    date: 'Octubre 2025 (fechas por confirmar)',
    time: '6:30 p.m.',
    location: 'Salón de Educación',
    desc: 'Un seminario de cuatro semanas sobre hermenéutica bíblica y cómo estudiar la Biblia por su propia cuenta.',
    recurring: false,
  },
];

const categories = ['Todos', 'Culto', 'Oración', 'Discipulado', 'Jóvenes', 'Especial', 'Evangelismo', 'Educación'];

export default function Eventos() {
  const [filter, setFilter] = useState('Todos');

  const filtered = filter === 'Todos' ? events : events.filter(e => e.category === filter);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Eventos</h1>
          <div className="section-divider" />
          <p>Manténgase al tanto de todo lo que ocurre en Iglesia La Biblia Dice. ¡Le esperamos!</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="animate-on-scroll fade-in" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  border: '2px solid',
                  borderColor: filter === cat ? '#152847' : '#cbd5e1',
                  background: filter === cat ? 'linear-gradient(145deg, #152847, #1e3a5f)' : 'transparent',
                  color: filter === cat ? '#fff' : '#475569',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {filtered.map((event, i) => (
              <div key={i} className={`animate-on-scroll delay-${(i % 2 + 1) * 100}`} style={{
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 2px 14px rgba(15,23,42,0.08)',
                border: '1px solid rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(15,23,42,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 14px rgba(15,23,42,0.08)'; }}
              >
                <div style={{ height: '6px', background: event.color }} />
                <div style={{ padding: '1.75rem', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                    <span className="badge" style={{ background: `${event.color}18`, color: event.color, fontSize: '0.75rem' }}>
                      {event.category}
                    </span>
                    {event.recurring && (
                      <span className="badge" style={{ background: '#f1f5f9', color: '#64748b', fontSize: '0.72rem' }}>
                        Recurrente
                      </span>
                    )}
                  </div>
                  <h4 style={{ marginBottom: '0.75rem' }}>{event.title}</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.65 }}>{event.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[
                      { icon: '📅', val: event.date },
                      { icon: '🕐', val: event.time },
                      { icon: '📍', val: event.location },
                    ].map((info, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#475569' }}>
                        <span style={{ flexShrink: 0 }}>{info.icon}</span>
                        <span>{info.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
              <p>No hay eventos en esta categoría por el momento.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-sm" style={{
        background: 'linear-gradient(145deg, #152847, #1e3a5f)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(201,153,59,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>¿Preguntas sobre algún evento?</h3>
          <p style={{ color: 'rgba(255,255,255,0.68)', marginBottom: '1.5rem' }}>
            Contáctenos para más información sobre actividades específicas.
          </p>
          <a href="mailto:info@labibliadicecr.org" className="btn btn-primary">
            info@labibliadicecr.org
          </a>
        </div>
      </section>
    </div>
  );
}
