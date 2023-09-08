import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';

function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='veterinaria-container'>
      <Helmet>
        <title>Veterinaria</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f0f0e2;
          }
        `}
      </style>
      <div className='presentacion-container'>
        <div style={{ userSelect: 'none' }}>
          <img
            src={require('../images/presentacion-01.jpg')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <div className='texto-superpuesto-container'>
          <div className='texto-superpuesto'>
            <h2 style={{ userSelect: 'none' }}>Tu veterinaria de confianza</h2>
            <p style={{ userSelect: 'none' }}>Brindamos cuidado de calidad para tus mascotas</p>
            <Link to='/solicitar-cita'>
              <button className='boton-cita'>
                Solicitar Cita
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='inicio-container'>
        <div className='texto-izquierda'>
          <div className='bienvenido-veterinaria'>
            <h1>BIENVENIDOS A NUESTRA CLÍNICA VETERINARIA</h1>
            <div className='linea-ornament' />
            <p>
              <span className='texto-destacado'>¡Bienvenidos a nuestra veterinaria, donde el amor por los animales se encuentra con la excelencia en el cuidado veterinario!</span> Somos un equipo apasionado de profesionales comprometidos con la salud y el bienestar de tus mascotas. En nuestra clínica, brindamos servicios de atención médica integral, desde consultas de rutina hasta cirugías especializadas, siempre con un enfoque personalizado y compasivo.
            </p>
            <p>
              En nuestra veterinaria, entendemos que tus mascotas son parte de tu familia, por lo que nos esforzamos por ofrecerles la atención y el cariño que se merecen. Nuestro equipo altamente capacitado cuenta con una amplia experiencia en diversas áreas, incluyendo medicina preventiva, dermatología, odontología, nutrición y mucho más. Trabajamos en estrecha colaboración contigo para asegurarnos de que tus amigos peludos reciban el mejor cuidado posible en cada etapa de sus vidas.
            </p>
            <p>
              Además de nuestros servicios médicos de calidad, también nos enorgullece ofrecer una amplia gama de productos para el cuidado y el bienestar de tus mascotas. Desde alimentos especializados hasta juguetes y accesorios, encontrarás todo lo que necesitas en nuestra tienda en línea o en nuestras instalaciones.
            </p>
            <p>
              En nuestra veterinaria, la satisfacción de nuestros clientes y el bienestar de sus mascotas son nuestra máxima prioridad. Nos esforzamos por superar tus expectativas y brindar un ambiente cálido y acogedor para ti y tus queridos compañeros peludos.
            </p>
            <p>
              Te invitamos a que visites nuestra clínica y descubras por qué somos la elección preferida de muchos dueños de mascotas.{' '}
              <span className='texto-destacado'>¡Confía en nosotros para cuidar y proteger la salud de tus seres queridos de cuatro patas!</span>
            </p>
          </div>
          <div className='imagen-derecha'>
            <img src={require('../images/cat-01.jpg')} alt='Gato Sentado' />
          </div>
        </div>
      </div>
      <div className='programas-bienestar'>
        <h2>PROGRAMAS DE BIENESTAR ANIMAL</h2>
        <p>
          En nuestra clínica veterinaria, nos apasiona el bienestar de tus queridas mascotas. Nos enorgullece ofrecer una variedad de programas cuidadosamente diseñados para promover su salud y felicidad en cada etapa de sus vidas. Trabajamos incansablemente para brindarles el cuidado que se merecen y asegurarnos de que se sientan amados y protegidos.
        </p>
        <p>
          Nuestros programas abarcan una amplia gama de áreas importantes para el bienestar de tus mascotas. Desde programas de nutrición personalizada hasta estrategias de prevención y control de enfermedades, nos aseguramos de cubrir todos los aspectos esenciales de su salud. Además, ofrecemos programas de ejercicio y enriquecimiento ambiental para mantener a tus compañeros peludos activos y mentalmente estimulados.
        </p>
        <p>
          Ofrecemos una variedad de programas diseñados para promover su salud y felicidad. Algunos de nuestros programas incluyen:
        </p>
        <ul>
          <li>Terapia física para rehabilitación y fortalecimiento.</li>
          <li>Terapia de comportamiento para abordar problemas de conducta.</li>
          <li>Alimentación especializada para necesidades dietéticas específicas.</li>
          <li>Actividades recreativas para el ejercicio y la socialización.</li>
          <li>Programas de prevención como vacunación y chequeos de salud.</li>
        </ul>
        <p>
          Nuestros programas están cuidadosamente diseñados para mantener a tus mascotas en óptimas condiciones de salud, garantizando su felicidad y vitalidad. Sabemos lo importante que son para ti, por lo que nos esforzamos en ofrecerles el cuidado más completo y personalizado.
        </p>
        <p>
          Queremos que te sientas seguro y confiado al tomar decisiones sobre la salud y el bienestar de tus mascotas. Nuestro equipo está aquí para brindarte el apoyo necesario y ayudarte en cada paso del camino. Tu satisfacción y la felicidad de tus mascotas son nuestra máxima prioridad.
        </p>
      </div>
      <div className='personal-titulo'>
        <h2>CONOCER AL PERSONAL</h2>
        <div className='personal-container'>
          <div className='texto-personal'>
            <div>
              <h4>Amanda Montes</h4>
              <div className='linea-personal-ornament' />
              <p>
                Soy apasionada por cuidar y proteger la salud de los animales, brindándoles el amor y la atención que merecen. Mi compromiso es ofrecer una atención veterinaria de excelencia, utilizando mis conocimientos y experiencia para garantizar el bienestar de mis pacientes peludos. Trabajo de la mano con sus familias, brindándoles el apoyo necesario para que juntos podamos asegurar una vida feliz y saludable para cada mascota.
              </p>
            </div>
          </div>
          <div className='imagen-personal-izquierda'>
            <img src={require('../images/doc-01.jpg')} alt='Foto de Amanda Montes' />
          </div>
        </div>
        <div className='personal-container'>
          <div className='texto-personal'>
            <div>
              <h4>Jorge Hernández</h4>
              <div className='linea-personal-ornament' />
              <p>
                Como veterinario, mi pasión por los animales y mi compromiso con su bienestar me impulsan a brindarles la mejor atención posible. Mi misión es asegurarme de que cada mascota se sienta amada y cuidada durante su visita a nuestra clínica. Juntos, trabajaremos para garantizar la salud y la felicidad de tus adorables compañeros de vida.
              </p>
            </div>
          </div>
          <div className='imagen-personal-izquierda'>
            <img src={require('../images/doc-02.jpg')} alt='Foto de Jorge Hernández' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
