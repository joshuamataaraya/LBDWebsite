const galleryPhotos = [
  { src: '/photos/464A6690.jpg', alt: 'Comunidad de la iglesia reunida' },
  { src: '/photos/464A6679.jpg', alt: 'Congregación durante un servicio' },
  { src: '/photos/lbd-3.jpg', alt: 'Actividad de la iglesia' },
  { src: '/photos/464A6702.jpg', alt: 'Momento de adoración' },
  { src: '/photos/lbd-10.jpg', alt: 'Evento comunitario' },
  { src: '/photos/464A3137.jpg', alt: 'Servicio dominical' },
  { src: '/photos/lbd-17.jpg', alt: 'Comunión entre hermanos' },
  { src: '/photos/464A6728.jpg', alt: 'Vida de iglesia' },
];

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

        <div className="quienes__gallery">
          {galleryPhotos.map((photo, i) => (
            <div key={i} className="quienes__gallery-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
