<script setup lang="ts">
import type { Estudiantes } from '../types/Estudiante'
import EstudianteCard from './EstudianteCard.vue'

interface Props {
  estudiantes: Estudiantes[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'remove-estudiante': [estudianteId: number]
}>()

const handleRemoveEstudiante = (estudianteId: number) => {
  emit('remove-estudiante', estudianteId)
}
</script>

<template>
  <div class="estudiante-list">
    <h2>Lista de estudiantes</h2>
    
    <div v-if="props.estudiantes.length > 0" class="estudiantes-container">
      <estudianteCard
        v-for="estudiante in props.estudiantes"
        :key="estudiante.id"
        :estudiante="estudiante"
        @remove-estudiante="handleRemoveEstudiante"
      />
    </div>
    
    <div v-else class="empty-list">
      <p>No hay estudiantes en la lista</p>
    </div>
  </div>
</template>

<style scoped>
.estudiante-list {
  margin-top: 1.5rem;
}

.estudiante-list h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.estudiantes-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.empty-list {
  text-align: center;
  color: #95a5a6;
  font-style: italic;
  padding: 2rem 0;
}

.empty-list p {
  margin: 0;
  font-size: 1rem;
}
</style>