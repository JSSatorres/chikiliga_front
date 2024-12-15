<template>
  <div class="team-page flex flex-col w-full max-w-4xl mx-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <!-- Nueva columna para el checkbox -->
          <TableHead>Seleccionar</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Posición</TableHead>
          <TableHead>Equipo</TableHead>
          <TableHead class="text-right">Partidos</TableHead>
          <TableHead class="text-right">Puntos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="player in market" :key="player.id">
          <!-- Checkbox para seleccionar al jugador -->
          <TableCell>
            <Checkbox
              v-model="player.selected"
              :aria-label="`Seleccionar ${player.nombre}`"
            />
          </TableCell>
          <TableCell>{{ player.nombre }}</TableCell>
          <TableCell>{{ player.posicion }}</TableCell>
          <TableCell>{{ player.equipo }}</TableCell>
          <TableCell>{{ player.partidos }}</TableCell>
          <TableCell>{{ player.puntos }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { fetchMarket } from './marketApi'
import type { Player } from '../team/teamTypes'
import Table from '@/components/ui/table/Table.vue'
import TableBody from '@/components/ui/table/Table.vue'
// import TableCaption from '@/components/ui/table/TableCaption.vue'
import TableHeader from '@/components/ui/table/TableHeader.vue'
import TableRow from '@/components/ui/table/TableRow.vue'
import TableHead from '@/components/ui/table/TableHead.vue'
import TableCell from '@/components/ui/table/TableCell.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

interface MarketPlayer extends Player {
  selected?: boolean // Agregamos la propiedad para manejar el estado del checkbox
}

const market = ref<MarketPlayer[]>([])

onMounted(async () => {
  market.value = (await fetchMarket()).map((player: Player) => ({
    ...player,
    selected: false, // Inicializamos el estado seleccionado como falso
  }))
  console.log('Datos del equipo:', market.value)
})
</script>
