export default function VisionMision() {
  return (
    <section className="section vision-mision">
      <div className="vision-mision__bg-img" />
      <div className="vision-mision__overlay" />
      <div className="container vision-mision__content">
        <div className="vm-cards">
          <div className="vm-card card-3d reveal">
            <div className="vm-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Visión</h3>
            <p>
              Ser una iglesia que forma discípulos maduros, comprometidos con la Palabra de Dios y capaces de impactar a futuras generaciones mediante una fe sólida, un testimonio auténtico y una vida transformada por el evangelio de nuestro Señor Jesucristo.
            </p>
          </div>
          <div className="vm-card card-3d reveal">
            <div className="vm-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
            </div>
            <h3>Misión</h3>
            <p>
              Establecer vidas en la Palabra de Dios, edificándola mediante la predicación y el proceso de discipulado bíblico, en el poder del Espíritu Santo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
