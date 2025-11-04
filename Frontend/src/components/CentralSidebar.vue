<script setup>
    import { useSidebarStore } from '@/stores/useSidebarStore';
import { ref, watch } from 'vue';
    
    const sidebarStore = useSidebarStore();

    const menuItems = ref([
        {
            name: 'Dashboard', 
            icon: '🏠', 
            children: [
                {name: 'General Status', to: '/dashboard/status'},
                {name: 'IPAM Status', to: '/dashboard/ipam'},
                {name: 'Server Status', to: '/dashboard/server'},
            ]
        },
        {
            name: 'Network',
            icon: '🌐',
            children: [
                {name: 'IPAM', to: '/network/ipam'}
            ]
        },
        {
            name: 'Syslog',
            icon: '📑',
            to: '/syslog'
        },
        {
            name: 'Administration',
            icon: '⚙️',
            children: [
                {name: 'User access', icon: '👤', to: '/administration/user'},
                {name: 'Email Settings', icon: '📧', to: '/administration/email'}
            ]
        }
    ]);

    const openSubMenu = ref(null);

    function toggleSubMenu(itemName) {
        if (openSubMenu.value === itemName) {
            openSubMenu.value = null;
        } else {
            openSubMenu.value = itemName;
        }
    }

    watch(() => sidebarStore.isOpen, (isNowOpen) => {
        if (!isNowOpen) {
            openSubMenu.value = null
        }
    });
</script>

<template>
    <aside :class="['Sidebar', {'Is-open': sidebarStore.isOpen}]">
        <nav>
            <ul class="Menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link v-if="!item.children" :to="item.to" class="Menu-item" :data-tooltip="item.name">
                        <span class="Icon">{{ item.icon }}</span>
                        <span class="Text" v-if="sidebarStore.isOpen">{{ item.name }}</span>
                    </router-link>
                    <div v-else class="Menu-itemGroup">
                        <button @click="toggleSubMenu(item.name)" class="Menu-item Submenu-toggle" :data-tooltip="item.name">
                            <span class="Icon">{{ item.icon }}</span>
                            <span class="Text" v-if="sidebarStore.isOpen">{{ item.name }}</span>
                            <span v-if="sidebarStore.isOpen" :class="['Chevron', {'Is-open': openSubMenu === item.name}]">
                                &#9662;
                            </span>
                        </button>
                        <ul v-if="sidebarStore.isOpen && openSubMenu === item.name" class="Submenu">
                            <li v-for="child in item.children" :key="child.name">
                                <router-link :to="child.to" class="Menu-item Submenu-item">
                                    <span class="Text">{{ child.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
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

    .Menu-itemGroup {
        width: 100%;
    }

    .Submenu-toggle {
        display: flex;
        align-items: center;
        padding: 10px 14px;
        width: 100%;
        text-decoration: none;
        color: #ecf0f1;
        white-space: nowrap;
        transition: background-color 0.2s;
        background: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
    }

    .Submenu-toggle:hover {
        background-color: #3f556b;
    }

    .Chevron {
        margin-left: auto;
        font-size: 0.8em;
        transition: transform 0.3s ease;
    }

    .Chevron.Is-open {
        transform: rotate(180deg);
    }

    .Submenu {
        list-style: none;
        padding-left: 0;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .Submenu-item {
        padding-left: 55px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 0.9em;
    }

    .Submenu-item.Text {
        color: #bdc3c7;
    }

    .Submenu-item:hover .Text {
        color: white;
    }

    .Icon {
        font-size: 1.3em;
        margin-right: 15px;
    }

</style>