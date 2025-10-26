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
                <span class="Burguer-icon" :class="{'Is-active': sidebarStore.isOpen}">☰</span>
            </button>
        </div>

        <!--Divisão para Search bar-->
        <div class="Navbar-center">
            <div class="Search-bar">
                <input type="text" v-model="searchTerm" placeholder="Search..." @keyup.enter="search">
                <button @click="search">🔍</button>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #0d7233;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.Navbar-left {
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
    text-align: center;
    margin: 0 30px;
    min-width: 0;
}

.Search-Bar {
    display: flex;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.Search-Bar input {
    flex-grow: 1;
    padding: 8px;
    border: none;
    outline: none;
    color: #333;
}

.Search-Bar button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.Search-Bar button:hover {
    background-color: #368d66;
}

.Menu-button, .User-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    font-size: 1.1em;
    transform: opacity 0.2s;
}

.Menu-button:hover, .User-button:hover {
    opacity: 0.8;
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