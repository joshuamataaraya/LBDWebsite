import { useEffect, useState } from 'react';

function AnimatedWords({ text, className, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`hero__word${visible ? ' hero__word--visible' : ''}`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const scrollTo = (e, selector) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Floating decorative orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content reveal">
        <h1 className="hero__title">
          <span className="hero__title-line"><AnimatedWords text="Iglesia" delay={300} /></span>
          <span className="hero__title-line"><AnimatedWords text="La Biblia Dice" delay={500} /></span>
        </h1>
        <p className="hero__tagline">&ldquo;Estableciendo su vida en la Palabra de Dios&rdquo;</p>
        <div className="hero__actions">
          <a href="#visita" className="btn btn--primary btn--3d" onClick={(e) => scrollTo(e, '#visita')}>
            Planifica tu Visita
          </a>
          <a href="#nosotros" className="btn btn--outline" onClick={(e) => scrollTo(e, '#nosotros')}>
            Conócenos
          </a>
        </div>
        <div className="hero__schedule">
          <span>Domingos 10:00 a.m.</span>
          <span className="hero__dot">&#x2022;</span>
          <span>San Miguel de Santo Domingo, Heredia</span>
        </div>
      </div>

      <div
        className="hero__scroll-hint"
        onClick={(e) => scrollTo(e, '#nosotros')}
        role="button"
        tabIndex={0}
        aria-label="Desplazar hacia abajo"
        onKeyDown={(e) => e.key === 'Enter' && scrollTo(e, '#nosotros')}
      >
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}
