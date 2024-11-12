<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Definir la URL de la API a través de una variable de entorno
const apiUrl = import.meta.env.VITE_API_URL

// Función para obtener datos desde la API
const fetchTeam = async () => {
  try {
    const response = await fetch(`${apiUrl}/team`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return [] // Devuelve un array vacío si ocurre un error
  }
}

// Estado reactivo para almacenar los datos
const items = ref<any[]>([])

// Llamar a la API cuando el componente se monte
onMounted(async () => {
  items.value = await fetchTeam()
})
</script>

<template>
  <div>
    <h2>home</h2>
    <!-- Renderiza los datos obtenidos de la API -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
