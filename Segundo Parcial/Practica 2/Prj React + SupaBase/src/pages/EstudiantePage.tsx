import { useEffect, useState } from "react";
import type { Estudiantes, CreateEstudiante } from "../types/Estudiante";
import { estudianteService } from "../services/estudianteService";
import EstudianteList from "../components/EstudianteList";
import AgregarEstudianteForm from "../components/AgregarEstudianteForm";

export default function EstudiantePage() {
  const [estudiantes, setEstudiantes] = useState<Estudiantes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    estudianteService
      .getAllEstudiantes()
      .then(setEstudiantes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async (nuevo: CreateEstudiante) => {
    try {
      setLoading(true);
      const creado = await estudianteService.createEstudiante(nuevo);
      setEstudiantes((prev) => [...prev, creado]);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: number, actualizado: CreateEstudiante) => {
    try {
      setLoading(true);
      const actualizadoEst = await estudianteService.updateEstudiante(String(id), actualizado);
      setEstudiantes((prev) =>
        prev.map((e) => (e.id === id ? actualizadoEst : e))
      );
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      await estudianteService.deleteEstudiante(String(id));
      setEstudiantes((prev) => prev.filter((e) => e.id !== id));
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Estudiantes</h2>
      {loading && <p>Cargando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <EstudianteList estudiantes={estudiantes} onDelete={handleDelete} onUpdate={handleUpdate} />
      <AgregarEstudianteForm onAgregar={handleCreate} />
    </div>
  );
}