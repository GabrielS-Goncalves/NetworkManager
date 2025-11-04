<script setup>
  import { RouterView, RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import CentralNavbar from './components/CentralNavbar.vue';
  import CentralSidebar from './components/CentralSidebar.vue';
  import { useSidebarStore } from '@/stores/useSidebarStore';

  const sidebarStore = useSidebarStore()
</script>

<template>
  <div id="App-container">
    <CentralNavbar/>
    <CentralSidebar/>

    <main :class="['Main-content', {'Sidebar-active': sidebarStore.isOpen}]">
      <router-view/>
    </main>
  </div>


</template>

<style>
  body{
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #212836;
    color: #f4f4f4;
  }
  .Main-content {
    padding-top: 50px;
    margin-left: 60px;
    padding-left: 20px;
    transition: margin-left 0.3s ease;
    min-height: 100vh;
  }

  .Main-content.Sidebar-active {
    margin-left: 250px;
  }
</style>
