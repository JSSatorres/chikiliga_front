<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

const navigationItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Market',
    children: ['market', 'Masaddasdrket', 'Tdasdaseam', 'Modasdasdaney'],
  },
  { name: 'Team', to: '/team' },
  {
    name: 'Money',
    children: [
      'Homsadsade',
      'Marksadasdet',
      'Teamsadsadsa',
      'Masdsadasdasoney',
    ],
  },
]
</script>

<template>
  <Menubar class="w-3/4 flex items-center justify-center">
    <MenubarMenu v-for="(item, index) in navigationItems" :key="index">
      <template v-if="item.children">
        <MenubarTrigger class="text-2xl">{{ item.name }}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
          >
            <RouterLink :to="'/' + child">{{ child }}</RouterLink>
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </template>
      <template v-else>
        <MenubarTrigger>
          <RouterLink :to="item.to" class="text-2xl">{{
            item.name
          }}</RouterLink>
        </MenubarTrigger>
      </template>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped></style>
