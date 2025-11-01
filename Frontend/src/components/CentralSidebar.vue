<script setup>
    import { useSidebarStore } from '@/stores/useSidebarStore';

    const sidebarStore = useSidebarStore();

    const menuItems = [
        {name: 'Dashboard', icon: '🏠', to: '/'},
        {name: 'Network', icon: '🌐', to: '/network'},
        {name: 'Settings', icon: '⚙️', to: '/settings'},
        {name: 'Logs', icon: '📑', to: '/logs'},
    ];
</script>

<template>
    <aside :class="['Sidebar', {'Is-open': sidebarStore.isOpen}]">
        <nav>
            <ul class="Menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link :to="item.to" class="Menu-item" @click="sidebarStore.closeSidebar" :data-tooltip="item.name">
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
        transition: width 0.3s ease, left 0.3s ease;
        transform: translateZ(0);
        z-index: 1050;
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
        position: relative;
        padding: 10px 14px;
        text-decoration: none;
        color: #ecf0f1;
        white-space: nowrap;
        transition: background-color 0.2s;
    }

    .Menu-item:hover {
        background-color: #34495e;
    }

    .Menu-item.router-link-active {
        background-color: #0d7233;
        font-weight: bold;
    }

    .Menu-item::after {
        z-index: 1100;
        content: attr(data-tooltip);
        position: absolute;
        top: 50%;
        left: calc(100% + 8px);
        transform: translateY(-50%);
        white-space: nowrap;
        padding: 6px 10px;
        background-color: #333;
        color: white;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .Sidebar:not(.Is-open) .Menu-item:hover::after {
        opacity: 1;
    }

    .Sidebar:not(.Is-open) .Menu-item:hover {
         background-color: #4bc078; 
    }

    .Icon {
        font-size: 1.3em;
        margin-right: 15px;
    }

</style>