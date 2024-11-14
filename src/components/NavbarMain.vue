<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

const navigationItems = [
  { name: 'Home', to: '/' },
  { name: 'Market', to: '/market' },
  { name: 'Team', to: '/team' },
  { name: 'Money', to: '/money' },
]
</script>

<template>
  <Menubar>
    <!-- <MenubarMenu>
      <MenubarTrigger>
        <RouterLink class="text-2xl" to="/">Home</RouterLink>
      </MenubarTrigger>
    </MenubarMenu> -->

    <MenubarMenu>
      {{ navigationItems }}
      <MenubarTrigger>
        <RouterLink class="text-2xl" to="/market">Market</RouterLink>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <RouterLink to="/market/view">View Market</RouterLink>
          <MenubarShortcut>⌘M</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <RouterLink to="/market/analysis">Market Analysis</RouterLink>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <RouterLink to="/market/trends">Trends</RouterLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <RouterLink to="/team">Team</RouterLink>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <RouterLink to="/team/view">View Team</RouterLink>
          <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <RouterLink to="/team/performance">Team Performance</RouterLink>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <RouterLink to="/team/manage">Manage Members</RouterLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <RouterLink to="/money">Money</RouterLink>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <RouterLink to="/money/view">View Finances</RouterLink>
          <MenubarShortcut>⌘F</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <RouterLink to="/money/transactions">Transactions</RouterLink>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <RouterLink to="/money/reports">Reports</RouterLink>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped></style>
