import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import PlanificaTuVisita from './pages/PlanificaTuVisita';
import Sermones from './pages/Sermones';
import Ministerios from './pages/Ministerios';
import Eventos from './pages/Eventos';
import Liderazgo from './pages/Liderazgo';
import Doctrinas from './pages/Doctrinas';
import Contacto from './pages/Contacto';
import Ofrendar from './pages/Ofrendar';

/** Watches for `.animate-on-scroll` elements and adds `is-visible` on viewport entry. */
function ScrollAnimationManager() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observeElements = () => {
      document
        .querySelectorAll('.animate-on-scroll:not(.is-visible)')
        .forEach((el) => observer.observe(el));
    };

    // Use rAF to ensure DOM is painted before observing
    const raf = requestAnimationFrame(observeElements);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAnimationManager />
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/planifica-tu-visita" element={<PlanificaTuVisita />} />
            <Route path="/sermones" element={<Sermones />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/liderazgo" element={<Liderazgo />} />
            <Route path="/doctrinas" element={<Doctrinas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ofrendar" element={<Ofrendar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

