
import { Link } from 'react-router-dom';

function Citas() {
  const listaCitas = [
    { id: 1, paciente: 'Juan Pérez', especialidad: 'Cardiología' },
    { id: 2, paciente: 'María Gómez', especialidad: 'Pediatría' },
    { id: 3, paciente: 'Carlos Ruiz', especialidad: 'Dermatología' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Lista de Citas Médicas </h2>
      <ul>
        {listaCitas.map((cita) => (
          <li key={cita.id} style={{ margin: '10px 0' }}>
            {cita.paciente} ({cita.especialidad}) {' '}
            <Link to={`/cita/${cita.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;