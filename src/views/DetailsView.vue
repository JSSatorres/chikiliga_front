<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ item?.name }}</h1>
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// Importa los datos locales desde el archivo JSON
import localData from '../data.json'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
)

export default defineComponent({
  components: { LineChart: Line },
  props: { id: Number },
  setup(props) {
    const item = ref<{ id: number; name: string; data: number[] } | null>(null)
    const chartData = ref({
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Datos',
          data: [] as number[], // Especificamos que data es un array de números
          borderColor: 'blue',
        },
      ],
    })

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Gráfica de Elemento' },
      },
    }

    onMounted(() => {
      // Buscar el elemento por id en el archivo JSON local
      item.value = localData.find(dataItem => dataItem.id === props.id) ?? null
      if (item.value) {
        chartData.value.datasets[0].data = item.value.data as number[]
      }

      // Código con Axios comentado para futuras peticiones a la API
      // async function fetchItem() {
      //   try {
      //     const response = await axios.get(`https://tu-api.com/api/items/${props.id}`);
      //     item.value = response.data;
      //     chartData.value.datasets[0].data = item.value.data;
      //   } catch (error) {
      //     console.error("Error al cargar los datos desde la API:", error);
      //   }
      // }
      // fetchItem();
    })

    return { item, chartData, chartOptions }
  },
})
</script>

<style scoped>
/* Opcional: Estilos adicionales */
</style>
