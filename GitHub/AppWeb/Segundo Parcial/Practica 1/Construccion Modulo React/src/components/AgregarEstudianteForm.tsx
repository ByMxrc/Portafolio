import { useState } from "react";
import type { Estudiante } from "../interfaces/Estudiante";

export default function AgregarEstudianteForm({ onAgregar }: { onAgregar: (nuevoEstudiante: Estudiante) => void }) {
  const [nuevoEstudiante, setNuevoEstudiante] = useState<Estudiante>({
    id: 0,
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    telefono: "",
    fechaNacimiento: "",
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
      id: 0,
      nombre: "",
      apellido: "",
      edad: 0,
      correo: "",
      telefono: "",
      fechaNacimiento: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
            name="fechaNacimiento"
            placeholder="Fecha de Nacimiento"
            value={nuevoEstudiante.fechaNacimiento}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Estudiante
        </button>
      </form>
  );
}