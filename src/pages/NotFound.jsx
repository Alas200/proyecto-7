import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h2>404 - Página no encontrada </h2>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;