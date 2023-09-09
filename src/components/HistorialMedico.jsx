import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/HistorialMedico.css';

function HistorialMedico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='historial-container'>
      <Helmet>
        <title>Historial Médico - PetCare</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f0f0e2;
          }
        `}
      </style>
      <div className='historial-medico'>
        <h1>Historial Médico</h1>
        <p>En esta sección encontrarás el historial médico de tus mascotas.</p>
        <ul>
          <li>
            <h3>Fecha: 6 de marzo de 2023</h3>
            <p>
              Descripción: Visita de control, vacunación anual y desparasitación.
            </p>
            <div className='medico-asignado'>
              <h4>Médico asignado: Dra. Amanda Montes</h4>
              <p>Consulta externa</p>
            </div>
            <div className='observaciones'>
              <h4>Observaciones:</h4>
              <p>
                Se detectaron signos leves de irritación en la piel. Se recomendó el uso de un champú especial para aliviar la irritación y se proporcionó una muestra. Se programó una próxima visita en 6 meses para el seguimiento de la condición.
              </p>
            </div>
          </li>
          <li>
            <h3>Fecha: 2 de marzo de 2023</h3>
            <p>
              Descripción: Cirugía de esterilización.
            </p>
            <div className='medico-asignado'>
              <h4>Médico asignado: Dr. Jorge Hernández</h4>
              <p>Consulta externa</p>
            </div>
            <div className='observaciones'>
              <h4>Observaciones:</h4>
              <p>
                La cirugía se realizó con éxito. Se proporcionaron instrucciones detalladas sobre el cuidado postoperatorio y se recetaron medicamentos para el alivio del dolor. Se programó una visita de seguimiento en 10 días para retirar los puntos de sutura.
              </p>
            </div>
          </li>
          <li>
            <h3>Fecha: 22 de febrero de 2023</h3>
            <p>
              Descripción: Tratamiento para infección de oído.
            </p>
            <div className='medico-asignado'>
              <h4>Médico asignado: Dr. Alejandro Rodríguez</h4>
              <p>Consulta externa</p>
            </div>
            <div className='observaciones'>
              <h4>Observaciones:</h4>
              <p>
                Se diagnosticó una infección de oído causada por levaduras. Se prescribió un tratamiento de gotas óticas y se proporcionaron instrucciones para la limpieza del oído. Se programó una revisión en 2 semanas para evaluar la mejoría.
              </p>
            </div>
          </li>
          <li>
            <h3>Fecha: 17 de febrero de 2023</h3>
            <p>
              Descripción: Cirugía de esterilización.
            </p>
            <div className='medico-asignado'>
             <h4>Médico asignado: Dra. María Gómez</h4>
             <p>Consulta externa</p>
            </div>
            <div className='observaciones'>
              <h4>Observaciones:</h4>
              <p>
                La cirugía se realizó sin complicaciones. Se proporcionaron instrucciones para el cuidado postoperatorio y se recetaron analgésicos para el alivio del dolor. Se programó una visita de seguimiento en 7 días para evaluar la cicatrización.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HistorialMedico;
