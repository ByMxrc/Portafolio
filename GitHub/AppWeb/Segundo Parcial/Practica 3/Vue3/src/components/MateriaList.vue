<script setup lang="ts">
import type { Materia } from '../types/Materia'
import MateriaCard from './MateriaCard.vue'

interface Props {
  materias: Materia[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'remove-materia': [materiaId: number]
}>()

const handleRemoveMateria = (materiaId: number) => {
  emit('remove-materia', materiaId)
}
</script>

<template>
  <div class="materia-list">
    <h2>Lista de Materias</h2>
    
    <div v-if="props.materias.length > 0" class="materias-container">
      <MateriaCard
        v-for="materia in props.materias"
        :key="materia.id"
        :materia="materia"
        @remove-materia="handleRemoveMateria"
      />
    </div>
    
    <div v-else class="empty-list">
      <p>No hay materias en la lista</p>
    </div>
  </div>
</template>

<style scoped>
.materia-list {
  margin-top: 1.5rem;
}

.materia-list h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.materias-container {
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