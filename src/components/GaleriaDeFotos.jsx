import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/GaleriaDeFotos.css';

function GaleriaDeFotos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='galeria-de-fotos-color'>
      <Helmet>
        <title>Galería de Fotos - PetCare</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f0f0e2;
          }
        `}
      </style>
      <div className='galeria-container'>
        <h1>Galería de Fotos</h1>
        <div className='galeria'>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-01.jpg')}
                alt='Amistad Canina en Flor'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Amistad Canina en Flor</h3>
          </div>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-02.jpg')}
                alt='Un Fiel Compañero'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Un Fiel Compañero</h3>
          </div>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-03.jpg')}
                alt='Mirada Canina'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Mirada Canina</h3>
          </div>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-04.jpg')}
                alt='Misterioso Compañero Felino'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Misterioso Compañero Felino</h3>
          </div>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-05.jpg')}
                alt='Amigo Unidos'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Amigo Unidos</h3>
          </div>
          <div className='foto'>
            <div style={{ userSelect: 'none' }}>
              <img
                src={require('../images/pet-06.jpg')}
                alt='Serenidad en el Campo'
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h3 style={{ userSelect: 'none' }}>Serenidad en el Campo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaDeFotos;
