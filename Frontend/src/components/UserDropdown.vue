<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    // Função para controlar se o dropdown está aberto ou fechado
    // Variável para o estado reativo local
    const isUserMenuOpen = ref(false);
    const dropdownRef = ref(null);

    function toggleUserMenu() {
        isUserMenuOpen.value = !isUserMenuOpen.value;
    };

    // Função para verificar se o menu está aberto e se o clique não ocorreu dentro do botão/dropdown
    function handleClickOutside (event) {
        if (isUserMenuOpen.value && dropdownRef.value && !dropdownRef.value.contains(event.target)) {
            isUserMenuOpen.value = false;
        };
    };

    // Quando o componente é montado no DOM
    // Adiciona o listener de clique no documento inteiro
    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    // Quando o compnente é removido do DOM
    // Remove o listener para evitar vazamentos de memória
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });

    // Função para ação de troca de senha do usuário interno
    function changePassword() {
        console.log('Ação - Troca de senha');
        isUserMenuOpen.value = false;
    };

    // Função para ação de logoff de qualquer usuário
    function logoff() {
        console.log('Ação - Logoff');
        isUserMenuOpen.value = false;
    };
</script>

<template>
    <div class="UserDropdown" ref="dropdownRef">
        <button @click="toggleUserMenu" class="User-button">👤</button>
        <div v-if="isUserMenuOpen" class="User-dropdown">
            <div class="Dropdown-header App-name">
                NetworkManager
            </div>
            <div class="Dropdown-item App-version">
                Version: v0.5.0 (Build: 20251026)
            </div>
            <hr class="Dropdown-divider">
            <button @click="changePassword" class="Dropdown-item">Change Password</button>
            <button @click="logoff" class="Dropdown-item Logoff-button">Logoff</button>
        </div>
    </div>
</template>

<style scoped>
    .UserDropdown{
        position: relative;
    }

    .User-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 10px;
        font-size: 1.5em;
    }

    .User-dropdown {
        position: absolute;
        top: calc(100% + 5px);
        right: 0;
        width: 220px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        padding: 8px 0;
    }

    
</style>