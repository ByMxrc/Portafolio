import { useState } from "react";
import type { CreateEstudiante } from "../types/Estudiante";

export default function AgregarEstudianteForm({ onAgregar }: { onAgregar: (nuevoEstudiante: CreateEstudiante) => void }) {
  const [nuevoEstudiante, setNuevoEstudiante] = useState<CreateEstudiante>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    telefono: "",
    fechanacimiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoEstudiante((prev) => ({
      ...prev,
      [name]: name === "edad" ? (value === "" ? 0 : parseInt(value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAgregar(nuevoEstudiante);
    setNuevoEstudiante({
      nombre: "",
      apellido: "",
      edad: 0,
      correo: "",
      telefono: "",
      fechanacimiento: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...inputs igual que antes... */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="nombre"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="apellido"
          placeholder="Apellido"
          value={nuevoEstudiante.apellido}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          name="edad"
          placeholder="Edad"
          value={nuevoEstudiante.edad}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="correo"
          placeholder="Correo Electrónico"
          value={nuevoEstudiante.correo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          name="telefono"
          placeholder="Teléfono"
          value={nuevoEstudiante.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          name="fechanacimiento"
          placeholder="Fecha de Nacimiento"
          value={nuevoEstudiante.fechanacimiento}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar Estudiante
      </button>
    </form>
  );
}