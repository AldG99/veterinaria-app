import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/SolicitarCita.css';

function SolicitarCita() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede realizar alguna acción con los datos de la cita (por ejemplo, enviarlos a un servidor)
    // También se puede mostrar una confirmación al usuario, redirigirlo, etc.
    console.log('Datos de la cita:', ownerName, ownerEmail, ownerPhone, petName, petBreed, petAge, petWeight, comments);
  };

  return (
    <div className='cita-container'>
      <Helmet>
        <title>Solicitar Cita</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f2f2f2;
          }
        `}
      </style>
      <div>
        <h1>Solicitar Cita</h1>
        <p>Agenda una cita para tu mascota ahora mismo.</p>
        <form onSubmit={handleSubmit}>
          <h2>DATOS DEL PROPIETARIO</h2>
          <div className='form-group'>
            <label>Nombre:</label>
            <input
              type='text'
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='email'
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Teléfono:</label>
            <input
              type='tel'
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              required
            />
          </div>
          <br />
          <h2>DATOS DEL PACIENTE</h2>
          <div className='form-group'>
            <label>Nombre:</label>
            <input
              type='text'
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Raza:</label>
            <input
              type='text'
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Edad:</label>
            <input
              type='text'
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Peso:</label>
            <input
              type='text'
              value={petWeight}
              onChange={(e) => setPetWeight(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Comentarios:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <br />
          <button type='submit'>Solicitar Cita</button>
        </form>
      </div>
    </div>
  );
}

export default SolicitarCita;
