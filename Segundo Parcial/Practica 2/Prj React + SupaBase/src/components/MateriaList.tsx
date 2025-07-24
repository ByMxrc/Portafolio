import type { Materia, CreateMateria } from "../types/Materia";
import MateriaCard from "./MateriaCard";

interface MateriaListProps {
  materias: Materia[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, actualizado: CreateMateria) => void;
}

export default function MateriaList({ materias, onDelete }: MateriaListProps) {
  return (
    <div className="row">
      {materias.map((materia) => (
        <div className="col-md-4 mb-4" key={materia.id}>
          <MateriaCard materia={materia} />
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => onDelete(materia.id)}
          >
            Eliminar
          </button>
          {/* Aquí podrías agregar un botón para editar y llamar a onUpdate */}
        </div>
      ))}
    </div>
  );
}