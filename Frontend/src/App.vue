<script setup>
  import { RouterView, RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import CentralNavbar from './components/CentralNavbar.vue';
  import ContadorButton from './components/ContadorButton.vue';

  const mensagem = ref('Olá, Mundo!')
</script>

<template>
  <div id="App-container">
    <central-navbar />

    <main class="Main-content">
      <h1>Bem-vindo ao NetworkManager!</h1>
      <p>Barra de navegação pronta!</p>
    </main>
  </div>

  <!--Botão contador-->
  <div>
    <h1>{{mensagem}}</h1>
    <contador-button />
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
    padding-top: 80px;
    padding-left: 20px;
  }
</style>
