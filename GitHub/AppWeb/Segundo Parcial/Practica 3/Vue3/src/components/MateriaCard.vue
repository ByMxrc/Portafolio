<script setup lang="ts">
import type { Materia } from '../types/Materia'

/**
 * COMPONENTE DE PRESENTACIÓN ("TONTO")
 * 
 * Este componente es responsable ÚNICAMENTE de:
 * 1. Recibir UN estudiante vía props
 * 2. Mostrar la información de ese estudiante
 * 3. Emitir eventos cuando el usuario interactúa con el estudiante
 * 
 * LO QUE NO HACE (y no debe hacer):
 * - No modifica directamente el estudiante
 * - No conoce otros estudiantes
 * - No contiene lógica de negocio
 * - No sabe cómo se almacenan o manejan los estudiantes
 */

/**
 * PROPS QUE RECIBE ESTE COMPONENTE
 * Recibe un único estudiante desde la lista
 */
interface Props {
  materia: Materia
}

const props = defineProps<Props>()

/**
 * EVENTOS QUE ESTE COMPONENTE PUEDE EMITIR
 * Comunica las acciones del usuario al componente padre
 */
const emit = defineEmits<{
  'remove-materia': [MateriaId: number]
}>()

/**
 * MÉTODOS DE INTERACCIÓN
 * Estos métodos emiten eventos con el ID del estudiante
 */

/**
 * Maneja el clic en el botón de eliminar
 * Emite evento para eliminar el estudiante
 */
const handleRemove = () => {
  emit('remove-materia', props.materia.id)
}
</script>

<template>
  <div class="estudiante-card">
    <div class="estudiante-info">
      <strong>{{ props.materia.nombre }} {{ props.materia.descripcion }}</strong>
    </div>
    <button
      @click="handleRemove"
      class="remove-button"
      :aria-label="`Eliminar estudiante '${props.materia.nombre} ${props.materia.descripcion}'`"
      title="Eliminar estudiante"
    >
      🗑️
    </button>
  </div>
</template>

<style scoped>
.materia-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.materia-card:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.materia-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.remove-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.remove-button:hover {
  opacity: 1;
  background-color: #dc3545;
  transform: scale(1.1);
}

.remove-button:focus {
  outline: 2px solid #dc3545;
  outline-offset: 2px;
}

@media (max-width: 480px) {
  .materia-card {
    padding: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
  }
  .remove-button {
    font-size: 1rem;
    align-self: flex-end;
  }
}
</style>