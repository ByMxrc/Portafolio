<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Estudiantes, CreateEstudiante } from '../types/Estudiante'
import AgregarEstudianteForm from '../components/AgregarEstudianteForm.vue'
import EstudianteCard from '../components/EstudianteCard.vue'

const estudiantes = ref<Estudiantes[]>([
  { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 20, correo: 'juanperez@mail.com', telefono: '1234567890' },
  { id: 2, nombre: 'Ana', apellido: 'García', edad: 22, correo: 'anagarcia@mail.com', telefono: '0987654321' }
])

const nextId = ref(3)
const estudiantesCount = computed(() => estudiantes.value.length)

const addEstudiante = (nuevo: CreateEstudiante) => {
  const estudiante: Estudiantes = {
    id: nextId.value++,
    ...nuevo
  }
  estudiantes.value.push(estudiante)
}

const removeEstudiante = (estudianteId: number) => {
  const index = estudiantes.value.findIndex(e => e.id === estudianteId)
  if (index !== -1) {
    estudiantes.value.splice(index, 1)
  }
}

const showMaterias = ref(false)
const goToMaterias = () => {
  showMaterias.value = true
}
const goToEstudiantes = () => {
  showMaterias.value = false
}
</script>

<template>
  <div class="background">
    <div class="main-content">
      <header class="header">
        <h1>Lista de Estudiantes</h1>
        <button class="menu-button" @click="goToMaterias">
          Ir al menú de materias
        </button>
      </header>

      <div v-if="!showMaterias">
        <!-- Formulario y lista de estudiantes dentro del cuadro blanco -->
        <AgregarEstudianteForm @add-estudiante="addEstudiante" />

        <div class="estudiante-counter">
          <p v-if="estudiantesCount === 0" class="no-estudiantes">
            No hay estudiantes registrados.
          </p>
          <p v-else class="estudiantes-count">
            Hay {{ estudiantesCount }} estudiante{{ estudiantesCount !== 1 ? 's' : '' }} en la lista.
          </p>
        </div>

        <div v-if="estudiantes.length > 0" class="estudiantes-list">
          <EstudianteCard
            v-for="estudiante in estudiantes"
            :key="estudiante.id"
            :estudiante="estudiante"
            @remove-estudiante="removeEstudiante"
          />
        </div>
        <div v-else class="empty-state">
          <p>Agrega tu primer estudiante. 🚀</p>
        </div>
      </div>

      <div v-else class="materias-menu">
        <h2>Menú de Materias</h2>
        <p>Aquí iría el componente para añadir y listar materias.</p>
        <button class="menu-button" @click="goToEstudiantes">
          Volver a estudiantes
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;
}

.main-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.header {
  text-align: center;
  margin-bottom: 1rem;
}

.header h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.menu-button {
  background: #ffd200;
  color: #2c3e50;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
}
.menu-button:hover {
  background: #f7971e;
  color: white;
}

.estudiante-counter {
  margin: 1rem 0;
  text-align: center;
}

.no-estudiantes {
  color: #e74c3c;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
}

.estudiantes-count {
  color: #3498db;
  font-weight: 500;
  margin: 0;
}

.estudiantes-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.empty-state {
  text-align: center;
  color: #95a5a6;
  font-style: italic;
  margin-top: 2rem;
}

.empty-state p {
  margin: 0;
  font-size: 1.1rem;
}

.materias-menu {
  text-align: center;
  padding: 2rem 0;
}
</style>