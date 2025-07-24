import { useEffect } from "react";
import { useState } from "react"
import type { Estudiante } from "../interfaces/Estudiante";
import EstudianteCard from "./EstudianteCard";
import AgregarEstudianteForm from "./AgregarEstudianteForm";

export default function EstudianteList() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  useEffect(() => {
    const datosSimulados: Estudiante[] = [
      {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        edad: 20,
        correo: "",
        telefono: "",
        fechaNacimiento: "2003-01-01",
      },
      {
        id: 2,
        nombre: "Ana",
        apellido: "Gómez",
        edad: 22,
        correo: "",
        telefono: "",
        fechaNacimiento: "2001-02-02",
      },
      {
        id: 3,
        nombre: "Luis",
        apellido: "Martínez",
        edad: 21,
        correo: "",
        telefono: "",
        fechaNacimiento: "2002-03-03",
      },
    ];
    setTimeout(() => {
      setEstudiantes(datosSimulados);
    }, 1500);
  }, []);

  return (
    <>
      <div className="row">
        {estudiantes.map((estudiante) => (
          <div className="col-md-4 mb-4" key={estudiante.id}>
            <EstudianteCard estudiante={estudiante} />
          </div>
        ))}
      </div>
      <AgregarEstudianteForm
        onAgregar={(nuevoEstudiante: Estudiante) => {
          setEstudiantes((prev) => [...prev, { ...nuevoEstudiante, id: prev.length + 1 }]);
        }}
      />
    </>
  );
}