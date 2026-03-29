import { useState, useEffect, useCallback } from 'react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#ministerios', label: 'Ministerios' },
  { href: '#liderazgo', label: 'Liderazgo' },
  { href: '#fe', label: 'Lo que Creemos' },
  { href: '#visita', label: 'Visítanos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const handleClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={(e) => handleClick(e, '#inicio')}>
          <img
            src={scrolled
              ? '/logo/Logo%20a%20color%20con%20fondo%20transparente.png'
              : '/logo/Logo%20blanco%20con%20fondo%20transparente.png'}
            alt="Iglesia La Biblia Dice - Inicio"
          />
        </a>

        <button
          className={`navbar__toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <div
          className={`navbar__backdrop${open ? ' navbar__backdrop--visible' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#visita" className="navbar__cta" onClick={(e) => handleClick(e, '#visita')}>
              Planifica tu Visita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
