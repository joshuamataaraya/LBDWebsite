import { useState } from 'react';

const Icon = ({ d, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

const ministerios = [
  {
    nombre: 'Refugio de los Sabios',
    subtitulo: 'Adultos mayores',
    desc: 'Espacio dirigido a personas mayores de 50 años que desean seguir creciendo espiritualmente y compartir la sabiduría de la vida cristiana. Este ministerio busca fortalecer la fe, cultivar la comunión y animarse mutuamente a vivir esta etapa con propósito, esperanza y servicio a Dios.',
    icon: <Icon d={<><path d="M12 6.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" fill="currentColor" opacity=".15"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87"/><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 14v7"/><path d="M9 18h6"/></>} />,
  },
  {
    nombre: 'Casa2',
    subtitulo: 'Matrimonios',
    desc: 'Ministerio para matrimonios de todas las edades que desean fortalecer su relación conforme a los principios bíblicos. El objetivo es edificar matrimonios sólidos que honren a Dios, promoviendo la comunicación, el compañerismo y el crecimiento espiritual en pareja.',
    icon: <Icon d={<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/><path d="M12 5.67v15.56" opacity=".3"/></>} />,
  },
  {
    nombre: 'Hombres de Valor',
    subtitulo: 'Hombres',
    desc: 'Grupo dirigido a hombres jóvenes y adultos que desean crecer como líderes espirituales en su hogar, iglesia y comunidad. El ministerio busca formar hombres de carácter, compromiso y fe, mediante el estudio de la Biblia, la oración y la rendición de cuentas entre hermanos.',
    icon: <Icon d={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4" /><path d="M12 16h.01"/></>} />,
  },
  {
    nombre: 'Mujer Valiosa',
    subtitulo: 'Mujeres',
    desc: 'Espacio para mujeres jóvenes y adultas que desean fortalecer su identidad en Cristo y desarrollar relaciones significativas con otras mujeres. El objetivo es animar, discipular y equipar a las mujeres para vivir una vida que refleje sabiduría, fe y servicio.',
    icon: <Icon d={<><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2Z"/></>} />,
  },
  {
    nombre: 'Conectados 24/7',
    subtitulo: 'Jóvenes',
    desc: 'Ministerio para jóvenes entre los 12 y 20 años que desean crecer en su relación con Dios mientras enfrentan los retos de su generación. Se busca formar jóvenes comprometidos con Cristo, que vivan su fe diariamente y desarrollen amistades sanas en un ambiente dinámico y relevante.',
    icon: <Icon d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  },
  {
    nombre: 'LBD Kids',
    subtitulo: 'Niños',
    desc: 'Programa dirigido a niños de 2 a 12 años durante los servicios dominicales. A través de enseñanzas bíblicas, actividades y dinámicas apropiadas para su edad, se busca ayudar a los niños a conocer a Dios, amar su Palabra y desarrollar una fe desde temprana edad.',
    icon: <Icon d={<><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>} />,
  },
  {
    nombre: 'BeeHive',
    subtitulo: 'Clubes de niños',
    desc: 'Club para niños en edad escolar que combina aprendizaje bíblico, actividades recreativas y formación en valores cristianos. El objetivo es formar niños con carácter, disciplina y amor por Dios, mientras desarrollan habilidades y amistades sanas.',
    icon: <Icon d={<><path d="M12 2l3.5 6h-7L12 2Z" fill="currentColor" opacity=".15"/><path d="M6 8h12l-2 6H8L6 8Z"/><path d="M8 14l-1 4h10l-1-4"/><path d="M10 18v3"/><path d="M14 18v3"/><path d="M12 2l3.5 6h-7L12 2Z"/></>} />,
  },
  {
    nombre: 'Adoradores',
    subtitulo: 'Alabanza',
    desc: 'Ministerio integrado por personas de todas las edades con dones musicales y de adoración, cuyo propósito es guiar a la congregación en la adoración a Dios a través de la música, fomentando un ambiente donde la iglesia pueda exaltar a Cristo con reverencia y gozo.',
    icon: <Icon d={<><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></>} />,
  },
  {
    nombre: 'Siembra y Cosecha',
    subtitulo: 'Ayuda social',
    desc: 'Este ministerio busca ayudar a personas y familias en necesidad, apoyando con la recolección y organización de alimentos donados.',
    icon: <Icon d={<><path d="M7 20.981a6.932 6.932 0 0 1-2.82-1.14"/><path d="M4.02 15.21A7.02 7.02 0 0 1 4 15c0-1.2.3-2.33.84-3.32"/><path d="M10.62 3.3A7 7 0 0 1 19 10c0 .68-.1 1.34-.28 1.96"/><path d="M12 19c0 .34-.03.67-.08 1"/><path d="M12 12v7"/><path d="M8 15c-1.66 0-3-1.34-3-3 0-1.3.84-2.4 2-2.82"/><path d="M16 15c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82"/></>} />,
  },
  {
    nombre: 'En Misión con Dios',
    subtitulo: 'Misiones',
    desc: 'Ministerio para todas las personas con carga por la obra misionera, interesadas en apoyar y participar en la expansión del evangelio. Su objetivo es movilizar a la iglesia para orar, apoyar y participar en misiones locales y transculturales.',
    icon: <Icon d={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></>} />,
  },
];

function MinisterioCard({ m, index }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="min-card reveal"
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={() => setActive(!active)}
      onKeyDown={(e) => e.key === 'Enter' && setActive(!active)}
      tabIndex={0}
      role="button"
      aria-label={`${m.nombre} - toca para más información`}
    >
      {active ? (
        <div className="min-card__back">
          <h4 className="min-card__name">{m.nombre}</h4>
          <p className="min-card__desc">{m.desc}</p>
          <span className="min-card__hint-back">Toca para volver</span>
        </div>
      ) : (
        <div className="min-card__front">
          <span className="min-card__icon">{m.icon}</span>
          <h4 className="min-card__name">{m.nombre}</h4>
          <p className="min-card__sub">{m.subtitulo}</p>
          <span className="min-card__hint">Toca para más info</span>
        </div>
      )}
    </div>
  );
}

export default function Ministerios() {
  return (
    <section id="ministerios" className="section ministerios">
      <div className="container">
        <h2 className="section__title reveal">Ministerios</h2>
        <div className="min-grid">
          {ministerios.map((m, i) => (
            <MinisterioCard key={m.nombre} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
