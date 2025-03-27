<script setup>
import Navbar from "../components/Navbar.vue";

</script>
<template>
    <!-- container -->
    <div class="grid-template">
        <div class="dashboard-item">
            <h2>vlanDashboard</h2>
        </div>
        <div class="dashboard-item">
            <h2>SubnetDashboard</h2>
        </div>
        <div class="dashboard-item">
            <h2>DHCPDashboard</h2>
        </div>
    </div>
</template>

<style scoped>
.grid-template {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.dashboard-item {
    min-width: 300px;
    min-height: 300px;
    border-radius: 25px;
    padding: 1rem;
    border: 1px solid #c5cbd8;
}
</style>