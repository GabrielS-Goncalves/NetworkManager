<script setup>
    import { ref } from 'vue';
    import { useSidebarStore } from '@/stores/useSidebarStore';
    import UserDropdown from './UserDropdown.vue';

    // Função que será chamada ao clicar no botão hamburguer
    // Váriavel para controlar a abertura/fechamento do menu
    const sidebarStore = useSidebarStore();
    function toggleMenu() {
        sidebarStore.toggleSidebar();
    }
    
    // Função para lógica básica da barra de pesquisa.
    const searchTerm = ref('');
    function search() {
        if (searchTerm.value) {
            console.log('Pesquisando por:', searchTerm.value);
        }
    }
</script>

<template>
    <nav class="CentralNavbar">
        <!--Divisão para Sidebar-->
        <div class="Navbar-Left">
            <button @click="toggleMenu" class="Menu-button">
                <span v-if="sidebarStore.isOpen" class="Close-icon">✖</span>
                <span v-else class="Open-icon">☰</span>
            </button>
        </div>

        <!--Divisão para Search bar-->
        <div class="Navbar-center">
            <div class="Search-Wrapper">
                <input type="text" v-model="searchTerm" placeholder="Search..." class="Search-input" @keyup.enter="search">
                <button @click="search" class="Search-button">🔍</button>
            </div>
        </div>

        <!--Divisão para User menu-->
        <div class="Navbar-right">
            <UserDropdown />
        </div>
    </nav>
</template>

<style scoped>
/* Flexbox para o Layout da Navbar */
.CentralNavbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #0d7233;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.Navbar-left {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.Navbar-right {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.Navbar-center {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin: 0 20px;
    min-width: 0;
}

.Search-Wrapper {
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
}

.Search-Wrapper:hover {
    border: 1px solid #ccc;
}

.Search-input {
    flex-grow: 1;
    padding: 8px 15px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: #212836;
    color: #ccc;
    height: 34px;
    box-sizing: border-box;
}

.Search-input::placeholder{
    color: #ccc;
}

.Search-button {
    background-color: #212836;
    color: white;
    border: none;
    border-left: 1px solid #ccc;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    height: 34px;
    box-sizing: border-box;
    transition: background-color 0.2s;
}

.Search-button:hover {
    background-color: #ccc;
}

.Menu-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0 4px;
    font-size: 1.2em;
    transform: opacity 0.2s;
}

.Menu-button:hover {
    opacity: 0.6;
}

.Open-icon, .Close-icon {
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
    transition: transform 0.3s ease, color 0.3s ease;
    height: 100%;
}

.Close-icon {
    transform: rotate(90deg);
    color: #e74c3c;
}

.Burguer-icon {
    display: inline-block;
    font-size: 1.5em;
    line-height: 1;
}

.Burguer-icon.is-active {
    color: #42b883;
}
</style>