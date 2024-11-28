<script setup lang="ts">
// import { ref, onMounted } from 'vue'

// Definir la URL de la API a través de una variable de entorno
// const apiUrl = import.meta.env.VITE_API_URL

// Función para obtener datos desde la API (opcional, comentada en este caso)
// const fetchTeam = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/team`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     return [] // Devuelve un array vacío si ocurre un error
//   }
// }

// Estado reactivo para almacenar los datos (comentar si no es necesario)
// const items = ref<any[]>([])

// Llamar a la API cuando el componente se monte (opcional, comentado aquí)
// onMounted(async () => {
//   items.value = await fetchTeam()
// })
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">
      Bienvenido a la casa de la eminencia Emildini
    </h1>
    <p class="text-lg text-gray-600 max-w-2xl text-center mb-8">
      Aquí encontrarás una fuente de conocimiento sobre fútbol, con una visión
      única y profunda de las estadísticas avanzadas del deporte. Emildini, una
      eminencia en el análisis futbolístico, te ofrece insights y datos
      avanzados para entender el juego de una forma completamente nueva. Desde
      estadísticas detalladas de jugadores y equipos hasta análisis
      estratégicos, aquí encontrarás todo lo que necesitas para llevar tu
      comprensión del fútbol al siguiente nivel.
    </p>
  </div>
</template>

<style scoped></style>
