import { useEffect, useState } from "react";
import type { Materia, CreateMateria } from "../types/Materia";
import { materiaService } from "../services/materiaService";
import MateriaList from "../components/MateriaList";
import AgregarMateriaForm from "../components/AgregarMateriaForm";

export default function MateriaPage() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    materiaService
      .getAllMaterias()
      .then(setMaterias)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async (nueva: CreateMateria) => {
    try {
      setLoading(true);
      const creada = await materiaService.createMateria(nueva);
      setMaterias((prev) => [...prev, creada]);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: number, actualizado: CreateMateria) => {
    try {
      setLoading(true);
      const actualizada = await materiaService.updateMateria(String(id), actualizado);
      setMaterias((prev) =>
        prev.map((m) => (m.id === id ? actualizada : m))
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
      await materiaService.deleteMateria(String(id));
      setMaterias((prev) => prev.filter((m) => m.id !== id));
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Materias</h2>
      {loading && <p>Cargando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <MateriaList materias={materias} onDelete={handleDelete} onUpdate={handleUpdate} />
      <AgregarMateriaForm onAgregar={handleCreate} />
    </div>
  );
}