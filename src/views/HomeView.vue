<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">Lista de Elementos</h1>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2">Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item?.id as number">
          <td class="border px-4 py-2">
            <router-link :to="{ name: 'Details', params: { id: item.id } }">{{
              item.name
            }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// Importa los datos locales desde el archivo JSON
import localData from '../data.json'

export default defineComponent({
  setup() {
    const items = ref([])

    onMounted(() => {
      // Cargar los datos del archivo JSON local
      items.value = localData

      // Código con Axios comentado para futuras peticiones a la API
      // async function fetchItems() {
      //   try {
      //     const response = await axios.get('https://tu-api.com/api/items');
      //     items.value = response.data;
      //   } catch (error) {
      //     console.error("Error al cargar los datos desde la API:", error);
      //   }
      // }
      // fetchItems();
    })

    return { items }
  },
})
</script>

<style scoped>
/* Opcional: Estilos adicionales */
</style>
