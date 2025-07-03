import type { Estudiantes, CreateEstudiante } from "../types/Estudiante";
import EstudianteCard from "./EstudianteCard";

interface EstudianteListProps {
  estudiantes: Estudiantes[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, actualizado: CreateEstudiante) => void;
}

export default function EstudianteList({ estudiantes, onDelete }: EstudianteListProps) {
  return (
    <div className="row">
      {estudiantes.map((estudiante) => (
        <div className="col-md-4 mb-4" key={estudiante.id}>
          <EstudianteCard estudiante={estudiante} />
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => onDelete(estudiante.id)}
          >
            Eliminar
          </button>
          {/* Aquí podrías agregar un botón para editar y llamar a onUpdate */}
        </div>
      ))}
    </div>
  );
}