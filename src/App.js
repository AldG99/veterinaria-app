import React, { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
import './App.css';
import Inicio from './components/Inicio';
import HistorialMedico from './components/HistorialMedico';
import Vacunas from './components/Vacunas';
import TiendaEnLinea from './components/TiendaEnLinea';
import GaleriaDeFotos from './components/GaleriaDeFotos';
import SolicitarCita from './components/SolicitarCita';

function App() {
  const pageRef = useRef(null);

  const handleHeaderClick = () => {
    pageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <Router>
        <div className='App' ref={pageRef}>
          <header>
            <nav style={{ userSelect: 'none' }}>
              <ul className='lista-veterinaria'>
                <li><Link to='/' onClick={handleHeaderClick}>
                  <img 
                    src={require('./images/logo.png')} 
                    alt='Logo' 
                    style={{ width: '30px', height: 'auto' }} 
                    onContextMenu={(e) => e.preventDefault()} 
                  />
                </Link></li>
                <li><Link to='/historial-medico' onClick={handleHeaderClick}>Historial Médico</Link></li>  
                <li><Link to='/vacunas' onClick={handleHeaderClick}>Vacunas</Link></li>
                <li><Link to='/tienda-en-linea' onClick={handleHeaderClick}>Tienda en Línea</Link></li>
                <li><Link to='/galeria-de-fotos' onClick={handleHeaderClick}>Galería de Fotos</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route exact path='/' element={<Inicio />} />
              <Route path='/historial-medico' element={<HistorialMedico />} />
              <Route path='/vacunas' element={<Vacunas />} />
              <Route path='/tienda-en-linea' element={<TiendaEnLinea />} />
              <Route path='/galeria-de-fotos' element={<GaleriaDeFotos />} />
              <Route path='/solicitar-cita' element={<SolicitarCita />} />
            </Routes>
          </main>
          <footer>
            <div className='footer-links'>
              <div className='container'>
                <div style={{ userSelect: 'none' }}>
                  <img
                    src={require('./images/logo.png')}
                    alt='Logo'
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
                <div className='direccion-cabos' style={{ userSelect: 'none' }}>
                  <p style={{ fontWeight: 'bold' }}>
                    Facultad de Medicina Veterinaria:
                  </p>
                  <p>
                    Tecamachalco - Cañada Morelos Km. 7.5, El Salado, 75460 Tecamachalco, Pue., México.
                  </p>
                  <br />
                  <p style={{ fontWeight: 'bold' }}>
                    Hospital Veterinario Para Pequeñas Especies:
                  </p>
                  <p>
                    Blvd. Capitán Carlos Camacho Espíritu s/n, Cd Universitaria, Cdad. Universitaria, 72059 Puebla, Pue., México.
                  </p>
                  <br />
                  <p style={{ fontWeight: 'bold' }}>
                    Horario de atención:
                  </p>
                  <p>
                    Lunes a Viernes: 9:00–17:00
                  </p>
                  <p>
                    Sábado: 9:00–14:00
                  </p>
                  <p>
                    Domingo: Cerrado
                  </p>
                </div>
                <div className='social-icons'>
                  <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <GrFacebook />
                  </a>
                  <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <GrInstagram />
                  </a>
                  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                    <GrTwitter />
                  </a>
                  <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                    <GrYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className='copyright'>
              © 2023 Alfredo García. Todos los derechos reservados.
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
