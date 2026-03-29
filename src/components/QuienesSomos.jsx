import { useState, useEffect, useCallback, useRef } from 'react';

const galleryPhotos = [
  { src: '/photos/464A6690.jpg', alt: 'Comunidad de la iglesia reunida' },
  { src: '/photos/464A6679.jpg', alt: 'Congregación durante un servicio' },
  { src: '/photos/lbd-3.jpg', alt: 'Actividad de la iglesia' },
  { src: '/photos/464A6702.jpg', alt: 'Momento de adoración' },
  { src: '/photos/lbd-10.jpg', alt: 'Evento comunitario' },
  { src: '/photos/464A3137.jpg', alt: 'Servicio dominical' },
  { src: '/photos/lbd-17.jpg', alt: 'Comunión entre hermanos' },
  { src: '/photos/464A6728.jpg', alt: 'Vida de iglesia' },
  { src: '/photos/464A1696.jpg', alt: 'Momento especial en la iglesia' },
  { src: '/photos/464A3146.jpg', alt: 'Alabanza y adoración' },
  { src: '/photos/7G4A7899.jpg', alt: 'Actividad congregacional' },
  { src: '/photos/lbd-14.jpg', alt: 'Compañerismo cristiano' },
  { src: '/photos/464A6751.jpg', alt: 'Reunión de la iglesia' },
  { src: '/photos/464A1705.jpg', alt: 'Celebración de fe' },
  { src: '/photos/lbd-9.jpg', alt: 'Tiempo de oración' },
  { src: '/photos/7G4A7917.jpg', alt: 'Ministerio en acción' },
  { src: '/photos/464A6756.jpg', alt: 'Tiempo de alabanza' },
  { src: '/photos/lbd-20.jpg', alt: 'Comunidad en acción' },
];

function PhotoCarousel({ photos }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchRef = useRef(null);
  const total = photos.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const getSlideProps = (index) => {
    let off = index - current;
    if (off > total / 2) off -= total;
    if (off < -total / 2) off += total;
    const abs = Math.abs(off);

    if (abs > 3) return { style: { opacity: 0, pointerEvents: 'none' }, visible: false };

    return {
      style: {
        '--off': off,
        '--abs': abs,
        zIndex: 50 - abs,
        opacity: abs === 0 ? 1 : Math.max(0.25, 1 - abs * 0.25),
      },
      visible: true,
    };
  };

  const onTouchStart = (e) => { touchRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchRef.current;
    if (Math.abs(diff) > 40) { diff > 0 ? prev() : next(); }
    touchRef.current = null;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel__viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((p, i) => {
          const { style, visible } = getSlideProps(i);
          return (
            <div
              key={i}
              className={`carousel__slide${i === current ? ' carousel__slide--active' : ''}`}
              style={style}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={visible ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Foto anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Foto siguiente">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <div className="carousel__progress">
        <div
          className="carousel__progress-bar"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <p className="carousel__counter">{current + 1} / {total}</p>
    </div>
  );
}

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="section quienes">
      <div className="container">
        <div className="quienes__intro reveal">
          <h2 className="section__title">&#191;Quiénes Somos?</h2>
          <p className="quienes__description">
            Somos una iglesia no denominacional que enseña lo que la Biblia dice dentro de su contexto, a través de enseñanza dinámica y actual de la preciosa Palabra de Dios, que es &ldquo;más dulce que la miel&rdquo;. Así que si está buscando un lugar donde pueda caminar con Cristo Jesús diariamente, y tener una bella comunión con otros cristianos, éste es el lugar.
          </p>
          <div className="quienes__purpose card-3d">
            <h3>Nuestro Propósito</h3>
            <p>
              Buscamos glorificar a Dios a través de nuestras vidas, y como congregación, mediante lo que somos y hacemos, ya sea dentro o fuera de nuestro templo.
            </p>
          </div>
        </div>

        <PhotoCarousel photos={galleryPhotos} />
      </div>
    </section>
  );
}
