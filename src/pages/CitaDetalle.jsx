import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: <strong>{id}</strong></p>
    </div>
  );
}

export default CitaDetalle;