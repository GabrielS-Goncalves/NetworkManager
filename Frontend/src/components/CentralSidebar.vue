<script setup>
    import { useSidebarStore } from '@/stores/useSidebarStore';

    const sidebarStore = useSidebarStore();

    const menuItems = [
        {name: 'Dashboard', icon: '🏠', to: '/'},
        {name: 'IPAM', icon: '🌐', to: '/ipam'},
        {name: 'Settings', icon: '⚙️', to: '/Settings'},
        {name: 'Logs', icon: '📑', to: '/Logs'},
    ];
</script>

<template>
    <aside :class="['Sidebar', {'Is-open': sidebarStore.isOpen}]">
        <nav>
            <ul class="Menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link :to="item.to" class="Menu-item" @click="sidebarStore.closeSidebar">
                        <span class="Icon">{{ item.icon }}</span>
                        <span class="Text" v-if="sidebarStore.isOpen">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
    .Sidebar {
        position: fixed;
        left: 0;
        top: 50px;
        height: calc(100% - 50px);
        width: 55px;
        background-color: #2c3e50;
        color: #ecf0f1;
        overflow-x: hidden;
        transition: width 0.3s ease, left 0.3s ease;
        z-index: 999;
    }

    .Sidebar.Is-open {
        width: 250px;
    }

    .Menu-list {
        list-style: none;
        padding: 0;
        margin-top: 0px;
    }

    .Menu-item {
        display: flex;
        align-items: center;
        padding: 15px 10px;
        text-decoration: none;
        color: #ecf0f1;
        white-space: nowrap;
        transition: background-color 0.2s;
    }

    .Menu-item:hover {
        background-color: #34495e;
    }

    .Menu-item.router-link-active {
        background-color: #42b883;
        font-weight: bold;
    }

    .Icon {
        font-size: 1.5em;
        margin-right: 15px;
    }
</style>