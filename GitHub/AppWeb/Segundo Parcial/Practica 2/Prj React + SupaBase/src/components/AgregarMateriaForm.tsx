import { useState } from "react";
import type { CreateMateria } from "../types/Materia";

export default function AgregarMateriaForm({ onAgregar }: { onAgregar: (nuevaMateria: CreateMateria) => void }) {
  const [nuevaMateria, setNuevaMateria] = useState<CreateMateria>({
    nombre: "",
    descripcion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNuevaMateria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAgregar(nuevaMateria);
    setNuevaMateria({
      nombre: "",
      descripcion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="nombre"
          placeholder="Nombre de la materia"
          value={nuevaMateria.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="descripcion"
          placeholder="Descripción"
          value={nuevaMateria.descripcion}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar Materia
      </button>
    </form>
  );
}