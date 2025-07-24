import { useState } from 'react';
import EstudiantePage from './pages/EstudiantePage';
import MateriaPage from './pages/MateriaPage';
import './App.css';

type Vista = 'estudiantes' | 'materias'; // Agrega más vistas si tienes más páginas

function App() {
  const [vista, setVista] = useState<Vista>('estudiantes');

  return (
    <div className="App">
      <h1>Gestión Académica</h1>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setVista('estudiantes')}>Estudiantes</button>
        <button onClick={() => setVista('materias')}>Materias</button>
      </div>
      {vista === 'estudiantes' && <EstudiantePage />}
      {vista === 'materias' && <MateriaPage />}
    </div>
  );
}

export default App;