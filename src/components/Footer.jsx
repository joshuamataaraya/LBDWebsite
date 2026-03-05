import { Link } from 'react-router-dom';

const pagesCol1 = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/planifica-tu-visita', label: 'Planifica tu Visita' },
  { to: '/sermones', label: 'Sermones' },
  { to: '/ministerios', label: 'Ministerios' },
];

const pagesCol2 = [
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

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand-name">Iglesia La Biblia Dice</div>
            <div className="footer-tagline">¡Más dulce que la miel!</div>
            <p className="footer-desc">
              Una iglesia cristiana no denominacional comprometida con la Palabra de Dios y el crecimiento espiritual de cada persona.
            </p>
            <div className="footer-social" aria-label="Redes sociales">
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

          <div className="footer-col">
            <h4>Páginas</h4>
            <nav className="footer-links" aria-label="Páginas principales">
              {pagesCol1.map(p => (
                <Link key={p.to} to={p.to}>› {p.label}</Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4>Más</h4>
            <nav className="footer-links" aria-label="Páginas secundarias">
              {pagesCol2.map(p => (
                <Link key={p.to} to={p.to}>› {p.label}</Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <div className="footer-contact-item">
              <span>📍</span>
              <span>San Miguel de Santo Domingo, Heredia. 100 m norte de la Escuela Ricardo Salas.</span>
            </div>
            <div className="footer-contact-item">
              <span>📞</span>
              <span>2236-0325 / 2244-4861</span>
            </div>
            <div className="footer-contact-item">
              <span>✉</span>
              <a href="mailto:info@labibliadicecr.org" style={{color:'rgba(255,255,255,0.65)'}}>
                info@labibliadicecr.org
              </a>
            </div>
            <div className="footer-contact-item">
              <span>🕐</span>
              <span>Domingos — 10:00 a.m.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {year} Iglesia La Biblia Dice (LBDcr) — San Miguel de Santo Domingo, Heredia, Costa Rica.
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
