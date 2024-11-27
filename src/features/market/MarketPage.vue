<template>
  <!-- <div class="team-page flex flex-col w-full max-w-4xl mx-auto bg-gray-100 p-6"> -->
  <div class="team-page flex flex-col w-full max-w-4xl mx-auto">
    <!-- <h1 class="text-3xl font-semibold">Mercado de jugadores</h1> -->

    <Table>
      <!-- <TableCaption>Lista de jugadores del mercado</TableCaption> -->
      <TableHeader>
        <TableRow>
          <!-- <TableHead>ID</TableHead> -->
          <TableHead>Nombre</TableHead>
          <TableHead>Posición</TableHead>
          <TableHead>Equipo</TableHead>
          <TableHead class="text-right">Partidos</TableHead>
          <TableHead class="text-right">Puntos</TableHead>
          <!-- <TableHead class="text-right">Valor</TableHead> -->
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="player in market" :key="player.id">
          <!-- <TableCell>{{ player.id }}</TableCell> -->
          <TableCell>{{ player.nombre }}</TableCell>
          <TableCell>{{ player.posicion }}</TableCell>
          <TableCell>{{ player.equipo }}</TableCell>
          <TableCell>{{ player.partidos }}</TableCell>
          <TableCell>{{ player.puntos }}</TableCell>
          <!-- <TableCell class="text-right">{{
            player.valor | currency
          }}</TableCell> -->
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
import TableCaption from '@/components/ui/table/TableCaption.vue'
import TableHeader from '@/components/ui/table/TableHeader.vue'
import TableRow from '@/components/ui/table/TableRow.vue'
import TableHead from '@/components/ui/table/TableHead.vue'
import TableCell from '@/components/ui/table/TableCell.vue'

const market = ref<Player[]>([])

onMounted(async () => {
  market.value = await fetchMarket()
  console.log('Datos del equipo:', market.value)
})
</script>
