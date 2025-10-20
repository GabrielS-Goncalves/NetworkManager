<script setup>
    import { ref } from 'vue';
    const UserName = ref('');
    const PassWord = ref('');

    function login(){
        console.log(UserName.value, PassWord.value);
    }
</script>

<template>
    <form action="" @submit.prevent="login">
        <input type="text" name="" id="" placeholder="Username" v-model="UserName">
        <input type="password" name="" id="" placeholder="Password" v-model="PassWord">
        <button type="submit">Login</button>
    </form>
</template>

<style>
</style>