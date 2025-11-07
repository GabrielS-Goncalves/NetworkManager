<script setup>
    defineProps({
        title: String
    });
</script>

<template>
    <div class="Status-card">
        <div class="Card-header">
            <h3>{{ title }}</h3>
        </div>
        <div class="Card-body">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .Status-card {
        background-color: #38445c;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .Card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid #f0f0f0;
    }

    .Card-header h3 {
        margin: 0;
        font-size: 1.1em;
        color: white;
        font-weight: 600;
    }

    .Card-body{
        padding: 20px;
        flex-grow: 1;
    }
</style>