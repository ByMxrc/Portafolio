<script setup lang="ts">
import { ref } from 'vue'
import type { CreateMateria } from '../types/Materia'


const nombre = ref('')
const descripcion = ref('')

const emit = defineEmits<{
  'add-materia': [materia: CreateMateria]
}>()

const handleSubmit = () => {
  if (
    !nombre.value.trim() ||
    !descripcion.value.trim()
  ) {
    return
  }

  emit('add-materia', {
    nombre: nombre.value.trim(),
    descripcion: descripcion.value.trim(),
  })
  nombre.value = ''
  descripcion.value = ''
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSubmit()
  }
}
</script>

<template>
  <div class="add-materia-form">
    <h2>Agregar Nuevo materia</h2>
    
    <div class="form-container">
      <input
        v-model.trim="nombre"
        type="text"
        placeholder="Nombre"
        class="materia-input"
        aria-label="Nombre"
      />
      <input
        v-model.trim="descripcion"
        type="text"
        placeholder="Descripcion"
        class="materia-input"
        aria-label="Descripcion"
        @keypress="handleKeyPress"
      />
      
      <button
        @click="handleSubmit"
        :disabled="
          !nombre.trim() ||
          !descripcion.trim()
        "
        class="add-button"
        type="button"
      >
        ➕ Agregar
      </button>
    </div>
    
    <p class="hint">
      💡 Completa todos los campos y haz clic en "Agregar" para crear la Materia
    </p>
  </div>
</template>

<style scoped>
.add-materia-form {
  margin-bottom: 2rem;
}

.add-materia-form h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.form-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.materia-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ecf0f1;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.materia-input:focus {
  outline: none;
  border-color: #3498db;
}

.materia-input::placeholder {
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