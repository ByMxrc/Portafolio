<script setup lang="ts">
import { ref } from 'vue'
import type { CreateEstudiante } from '../types/Estudiante'

/**
 * COMPONENTE DE PRESENTACIÓN ("TONTO")
 * 
 * Este componente es responsable ÚNICAMENTE de:
 * 1. Renderizar el formulario de entrada
 * 2. Manejar su propio estado local (campos del estudiante)
 * 3. Emitir eventos cuando el usuario quiere agregar un estudiante
 * 
 * LO QUE NO HACE (y no debe hacer):
 * - No sabe qué hacer con el estudiante una vez creado
 * - No maneja la lista de estudiantes
 * - No tiene lógica de negocio
 * - No sabe cómo se almacenan los estudiantes
 */

// Estado local del componente: solo los campos del estudiante
const nombre = ref('')
const apellido = ref('')
const edad = ref('')
const correo = ref('')
const telefono = ref('')

/**
 * DEFINICIÓN DE EVENTOS QUE ESTE COMPONENTE PUEDE EMITIR
 * Este componente puede emitir un evento 'add-estudiante' con un objeto CreateEstudiante
 */
const emit = defineEmits<{
  'add-estudiante': [estudiante: CreateEstudiante]
}>()

/**
 * Maneja el envío del formulario
 * Valida que los campos no estén vacíos y emite el evento
 */
const handleSubmit = () => {
  if (
    !nombre.value.trim() ||
    !apellido.value.trim() ||
    !edad.value.trim() ||
    !correo.value.trim() ||
    !telefono.value.trim()
  ) {
    return
  }

  emit('add-estudiante', {
    nombre: nombre.value.trim(),
    apellido: apellido.value.trim(),
    edad: Number(edad.value),
    correo: correo.value.trim(),
    telefono: telefono.value.trim()
  })

  // Limpiar el formulario después de emitir el evento
  nombre.value = ''
  apellido.value = ''
  edad.value = ''
  correo.value = ''
  telefono.value = ''
}

/**
 * Maneja la tecla Enter en el input
 */
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSubmit()
  }
}
</script>

<template>
  <div class="add-estudiante-form">
    <h2>Agregar Nuevo Estudiante</h2>
    
    <div class="form-container">
      <input
        v-model.trim="nombre"
        type="text"
        placeholder="Nombre"
        class="estudiante-input"
        aria-label="Nombre"
      />
      <input
        v-model.trim="apellido"
        type="text"
        placeholder="Apellido"
        class="estudiante-input"
        aria-label="Apellido"
      />
      <input
        v-model.trim="edad"
        type="number"
        min="0"
        placeholder="Edad"
        class="estudiante-input"
        aria-label="Edad"
      />
      <input
        v-model.trim="correo"
        type="email"
        placeholder="Correo"
        class="estudiante-input"
        aria-label="Correo"
      />
      <input
        v-model.trim="telefono"
        type="text"
        placeholder="Teléfono"
        class="estudiante-input"
        aria-label="Teléfono"
        @keypress="handleKeyPress"
      />
      
      <button
        @click="handleSubmit"
        :disabled="
          !nombre.trim() ||
          !apellido.trim() ||
          !edad.trim() ||
          !correo.trim() ||
          !telefono.trim()
        "
        class="add-button"
        type="button"
      >
        ➕ Agregar
      </button>
    </div>
  </div>
</template>

<style scoped>
.add-estudiante-form {
  margin-bottom: 2rem;
}

.add-estudiante-form h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.form-container {
  display: flex;
  flex-direction: column; /* Cambiado para que los inputs estén uno debajo del otro */
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.estudiante-input {
  padding: 0.75rem;
  border: 2px solid #ecf0f1;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.estudiante-input:focus {
  outline: none;
  border-color: #3498db;
}

.estudiante-input::placeholder {
  color: #bdc3c7;
}

.add-button {
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-button:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-1px);
}

.add-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
  transform: none;
}

.hint {
  color: #7f8c8d;
  font-size: 0.85rem;
  margin: 0;
  font-style: italic;
}

/* Responsive design para pantallas pequeñas */
@media (max-width: 480px) {
  .form-container {
    flex-direction: column;
  }
  
  .add-button {
    width: 100%;
  }
}
</style>