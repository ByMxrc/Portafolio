import type { Materia } from "../types/Materia";

export default function MateriaCard({ materia }: { materia: Materia }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{materia.nombre}</h5>
        <p className="card-text">{materia.descripcion}</p>
        <p className="card-text">
        </p>
      </div>
    </div>
  );
}