<script setup>
    import { ref } from 'vue';

    const contador = ref(0)
    function incrementar() {
        contador.value++
    }
</script>

<template>
    <button @click="incrementar">Contador do componente: {{ contador }}</button>
</template>

<style scoped>
    button {
        padding: 8px 15px;
        background-color: #0d7233;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>