import type { Estudiantes } from "../types/Estudiante"; //renderizar el tipo Estudiante

export default function EstudianteCard({
  estudiante,
}: {
  estudiante: Estudiantes;
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${estudiante.nombre} ${estudiante.apellido}`}</h5>
        <p className="card-text">Edad: {estudiante.edad}</p>
        <p className="card-text">Correo: {estudiante.correo}</p>
        <p className="card-text">Teléfono: {estudiante.telefono}</p>
        <p className="card-text">
          Fecha de Nacimiento: {new Date(estudiante.fechaNacimiento).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}