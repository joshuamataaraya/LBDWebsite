import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/planifica-tu-visita', label: 'Planifica tu Visita' },
  { to: '/sermones', label: 'Sermones' },
  { to: '/ministerios', label: 'Ministerios' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/liderazgo', label: 'Liderazgo' },
  { to: '/doctrinas', label: 'Doctrinas' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/ofrendar', label: 'Ofrendar' },
];

const socialLinks = [
  { href: 'https://www.youtube.com/@LBDcr', label: 'YouTube', icon: '▶' },
  { href: 'https://www.facebook.com/lbdcr', label: 'Facebook', icon: 'f' },
  { href: 'https://www.instagram.com/lbdcostarica/', label: 'Instagram', icon: '◉' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand-name">Iglesia La Biblia Dice</span>
          <span className="navbar-brand-tagline">¡Más dulce que la miel!</span>
        </Link>

        <ul className="navbar-nav" role="list">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-social" aria-label="Redes sociales">
          {socialLinks.map(s => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-links" role="list">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar-mobile-social" aria-label="Redes sociales">
            {socialLinks.map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

