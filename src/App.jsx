import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
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
