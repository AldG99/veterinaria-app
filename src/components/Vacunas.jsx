import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Vacunas.css';

function Vacunas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vacunas = [
    {
      fecha: 'Próxima vacunación: 27 de mayo de 2023',
      tipo: 'Vacuna contra la rabia',
      horario: 'Horario de aplicación: 9:00 AM - 11:00 AM',
      descripcion: 'La vacuna contra la rabia es una de las más importantes para proteger a tu mascota y prevenir la propagación de esta enfermedad.'
    },
    {
      fecha: 'Próxima vacunación: 13 de mayo de 2023',
      tipo: 'Vacuna contra la rinotraqueítis felina',
      horario: 'Horario de aplicación: 11:00 AM - 1:00 PM',
      descripcion: 'La vacuna contra la rinotraqueítis felina protege a los gatos contra esta infección respiratoria altamente contagiosa.'
    },
    {
      fecha: 'Próxima vacunación: 6 de mayo de 2023',
      tipo: 'Vacuna polivalente',
      horario: 'Horario de aplicación: 10:00 AM - 12:00 PM',
      descripcion: 'La vacuna polivalente protege contra diversas enfermedades comunes en perros y gatos, como la parvovirosis, el moquillo, la leptospirosis, entre otras.'
    },
    {
      fecha: 'Próxima vacunación: 15 de abril de 2023',
      tipo: 'Vacuna contra la tos de las perreras',
      horario: 'Horario de aplicación: 11:00 AM - 1:00 PM',
      descripcion: 'Esta vacuna es recomendada especialmente para perros que pasan tiempo en lugares donde hay mayor riesgo de contagio de la tos de las perreras, como en paseos grupales o residencias caninas.'
    },
    {
      fecha: 'Próxima vacunación: 11 de abril de 2023',
      tipo: 'Vacuna contra la panleucopenia felina',
      horario: 'Horario de aplicación: 9:00 AM - 11:00 AM',
      descripcion: 'La vacuna contra la panleucopenia felina protege a los gatos contra esta enfermedad viral altamente contagiosa y potencialmente mortal.'
    },
    {
      fecha: 'Próxima vacunación: 25 de marzo de 2023',
      tipo: 'Vacuna contra la enfermedad de Newcastle',
      horario: 'Horario de aplicación: 10:00 AM - 12:00 PM',
      descripcion: 'La vacuna contra la enfermedad de Newcastle es esencial para prevenir esta enfermedad viral que afecta a las aves de corral.'
    },
  ];
  
  return (
    <div className='vacunas-container'>
      <Helmet>
        <title>Vacunas - PetCare</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f0f0e2;
          }
        `}
      </style>
      <div className='vacunas-veterinaria'>
        <h1>Vacunas</h1>
        <p>
          En esta sección encontrarás información sobre las vacunas recomendadas para tus mascotas.
        </p>
        {vacunas.map((vacuna, index) => (
          <div className='vacuna' key={index}>
            <h3>{vacuna.tipo}</h3>
            <p>{vacuna.fecha}</p>
            <p>{vacuna.horario}</p>
            <p>{vacuna.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vacunas;
