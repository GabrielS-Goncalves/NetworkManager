<script setup>
  import { RouterView, RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import CentralNavbar from './components/CentralNavbar.vue';
  import ContadorButton from './components/ContadorButton.vue';
  import CentralSidebar from './components/CentralSidebar.vue';
  import { useSidebarStore } from '@/stores/useSidebarStore';

  const mensagem = ref('Olá, Mundo!')
  const sidebarStore = useSidebarStore()
</script>

<template>
  <div id="App-container">
    <CentralNavbar/>
    <CentralSidebar/>

    <main :class="['Main-content', {'Sidebar-active': sidebarStore.isOpen}]">
      <router-view/>
      <h1>Bem-vindo ao NetworkManager!</h1>
      <p>Barra de navegação pronta!</p>
      <p>Barra lateral em produção!</p>
      
      <!--Botão contador-->
      <div>
        <h1>{{mensagem}}</h1>
        <contador-button/>
      </div>
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
    position: relative;
    z-index: 1;
  }

  .Main-content.Sidebar-active {
    margin-left: 250px;
  }
</style>
