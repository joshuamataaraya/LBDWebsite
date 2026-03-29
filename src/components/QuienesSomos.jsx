export default function QuienesSomos() {
  return (
    <section id="nosotros" className="section quienes">
      <div className="container">
        <div className="quienes__grid">
          <div className="quienes__images reveal">
            <div className="quienes__img-stack">
              <img src="/photos/464A6690.jpg" alt="Comunidad de la Iglesia La Biblia Dice en Heredia" className="quienes__img quienes__img--main tilt-card" />
              <img src="/photos/464A6679.jpg" alt="Congregación de la Iglesia La Biblia Dice durante un servicio" className="quienes__img quienes__img--accent tilt-card" />
            </div>
          </div>
          <div className="quienes__text reveal">
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
        </div>
      </div>
    </section>
  );
}
