<template>
  <div class="team-page flex flex-row w-full max-w-md mx-auto">
    <!-- <h1 class="text-2xl font-bold mb-6">Equipo de Jugadores</h1> -->

    <!-- Zona de Equipo con Jugadores -->
    <!-- <ButtonUi variant="destructive"> Destructive </ButtonUi> -->
    <div
      class="team drop-zone w-full mb-6 p-4 border border-gray-300 rounded-md shadow bg-green-50"
      @drop="onDrop($event, 'team')"
      @dragover.prevent
      @dragenter.prevent
    >
      <h2 class="text-xl font-semibold mb-4 text-center">
        Equipo ({{ team.length }})
      </h2>
      <div
        v-for="player in team"
        :key="player.id"
        class="drag-el flex items-center justify-between p-3 mb-3 rounded-md shadow border bg-white"
        :class="getPlayerClass(player)"
        draggable="true"
        @dragstart="startDrag($event, player)"
      >
        <!-- Información del Jugador -->
        <div class="flex items-center space-x-3">
          <img
            :src="player?.photoUrl || '/default-image-url.jpg'"
            alt="Foto"
            class="w-10 h-10 rounded-full"
          />
          <div>
            <div class="font-semibold">{{ player.nombre }}</div>
            <div class="text-sm text-gray-500">{{ player.posicion }}</div>
          </div>
        </div>

        <!-- Valor del Jugador y Botón de Venta -->
        <div class="text-right">
          <div class="font-bold text-green-600">
            €{{ player.valor.toLocaleString() }}
          </div>
          <button
            class="mt-2 p-1 text-xs font-bold text-white bg-red-500 rounded-full hover:bg-red-600"
            @click="removePlayer(player)"
            :disabled="team.length <= 11"
          >
            Vender
          </button>
        </div>
      </div>
      <p class="text-lg font-semibold mt-4 text-center">
        Total Equipo: €{{ totalValue.toLocaleString() }}
      </p>
    </div>

    <!-- Zona de Ventas -->
    <div
      class="available-players drop-zone w-full p-4 border border-gray-300 rounded-md shadow bg-gray-50"
      @drop="onDrop($event, 'availablePlayers')"
      @dragover.prevent
      @dragenter.prevent
    >
      <h2 class="text-xl font-semibold mb-4 text-center">Zona de Ventas</h2>
      <div
        v-for="player in availablePlayers"
        :key="player.id"
        class="drag-el flex items-center justify-between p-3 mb-3 rounded-md shadow border bg-white"
        :class="getPlayerClass(player)"
        draggable="true"
        @dragstart="startDrag($event, player)"
      >
        <!-- Información del Jugador en la Zona de Ventas -->
        <div class="flex items-center space-x-3">
          <img
            :src="player.photoUrl || 'default-image-url.jpg'"
            alt="Foto"
            class="w-10 h-10 rounded-full"
          />
          <div>
            <div class="font-semibold">{{ player.nombre }}</div>
            <div class="text-sm text-gray-500">{{ player.posicion }}</div>
          </div>
        </div>
        <div class="text-right font-bold text-red-600">
          €{{ player.valor.toLocaleString() }}
        </div>
      </div>
      <p class="text-lg font-semibold mt-4 text-center">
        Total Ventas: €{{ totalSales.toLocaleString() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Player } from './teamTypes'
import { fetchTeam } from './teamApi'

const team = ref<Player[]>([]) // Lista de jugadores en el equipo
const availablePlayers = ref<Player[]>([]) // Zona de ventas
const totalSales = ref(1000000) // Total de ventas inicial (simulado)

onMounted(async () => {
  team.value = await fetchTeam()
  console.log('Datos del equipo:', team.value) // Verificar datos en consola
})

const draggedPlayer = ref<Player | null>(null)

// Maneja el inicio del arrastre y almacena el jugador arrastrado
const startDrag = (event: DragEvent, player: Player) => {
  draggedPlayer.value = player
  event.dataTransfer?.setData('text/plain', player.id.toString())
  event.dataTransfer!.effectAllowed = 'move'
}

// Maneja el evento de soltado y mueve el jugador a la lista de destino
const onDrop = (event: DragEvent, listName: 'availablePlayers' | 'team') => {
  event.preventDefault()
  const playerID = event.dataTransfer?.getData('text/plain')
  const player = draggedPlayer.value

  if (player && playerID && player.id.toString() === playerID) {
    if (listName === 'team' && !team.value.includes(player)) {
      team.value.push(player)
      availablePlayers.value = availablePlayers.value.filter(
        p => p.id !== player.id,
      )
    } else if (listName === 'availablePlayers' && team.value.length > 11) {
      availablePlayers.value.push(player)
      team.value = team.value.filter(p => p.id !== player.id)
      totalSales.value += player.valor // Incrementar total de ventas al vender el jugador
    }
  }
  draggedPlayer.value = null
}

// Devuelve una clase de estilo según la posición del jugador
const getPlayerClass = (player: Player) => {
  switch (player.posicion) {
    case 'Portero':
      return 'border-blue-500'
    case 'Defensa':
      return 'border-green-500'
    case 'Centrocampista':
      return 'border-yellow-500'
    case 'Delantero':
      return 'border-red-500'
    default:
      return ''
  }
}

// Elimina un jugador de la alineación y lo pasa a la zona de ventas si hay más de 11 jugadores
const removePlayer = (player: Player) => {
  if (team.value.length > 11) {
    availablePlayers.value.push(player)
    team.value = team.value.filter(p => p.id !== player.id)
    totalSales.value += player.valor // Incrementar total de ventas
  }
}

// Calcula el valor total de los jugadores en el equipo
const totalValue = computed(() => {
  return team.value.reduce((sum, player) => sum + player.valor, 0)
})
</script>

<style scoped>
.drop-zone {
  background-color: #f0f4f8;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  margin-bottom: 10px;
  padding: 5px;
}

.border-blue-500 {
  border-left: 4px solid #3b82f6; /* Azul para Portero */
}

.border-green-500 {
  border-left: 4px solid #10b981; /* Verde para Defensa */
}

.border-yellow-500 {
  border-left: 4px solid #f59e0b; /* Amarillo para Centrocampista */
}

.border-red-500 {
  border-left: 4px solid #ef4444; /* Rojo para Delantero */
}
</style>
