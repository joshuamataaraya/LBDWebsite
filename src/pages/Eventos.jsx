const events = [
  {
    category: 'Culto',
    color: '#1a2a4a',
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

import { useState } from 'react';

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
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  border: '2px solid',
                  borderColor: filter === cat ? '#1a2a4a' : '#d0cfc8',
                  background: filter === cat ? '#1a2a4a' : 'transparent',
                  color: filter === cat ? '#fff' : '#4a4a4a',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {filtered.map((event, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                border: '1px solid #f0efea',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ height: '6px', background: event.color }} />
                <div style={{ padding: '1.75rem', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                    <span className="badge" style={{ background: `${event.color}18`, color: event.color, fontSize: '0.75rem' }}>
                      {event.category}
                    </span>
                    {event.recurring && (
                      <span className="badge" style={{ background: '#f0efea', color: '#666', fontSize: '0.72rem' }}>
                        Recurrente
                      </span>
                    )}
                  </div>
                  <h4 style={{ marginBottom: '0.75rem' }}>{event.title}</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>{event.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[
                      { icon: '📅', val: event.date },
                      { icon: '🕐', val: event.time },
                      { icon: '📍', val: event.location },
                    ].map((info, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4a4a4a' }}>
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
            <div style={{ textAlign: 'center', padding: '4rem', color: '#999' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
              <p>No hay eventos en esta categoría por el momento.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-sm" style={{ background: '#1a2a4a', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>¿Preguntas sobre algún evento?</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>
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
