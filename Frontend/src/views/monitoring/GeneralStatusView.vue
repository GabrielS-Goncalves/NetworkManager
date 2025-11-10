<script setup>
  import { useMonitorStore } from '@/stores/useMonitorStore';
  import { computed } from 'vue';
  import StatusCard from '@/components/monitoring/StatusCard.vue';

  // Conecta-se á Store do Pinia
  const monitorStore = useMonitorStore();

  // Configuração padrão do Tooltip
  const chartToolTip = {
    followCursor: true,
    theme: 'dark',
  };

  // Status dos Dispositivos (Donut Chart)
  const DeviceStatusSeries = computed(() => [
    monitorStore.data.devices.online,
    monitorStore.data.devices.offline
  ]);

  const DeviceStatusOptions = computed(() => ({
    chart: {type: 'donut'},
    labels: ['Online', 'Offline'],
    colors: ['#27ae00', '#e74c3c'],
    tooltip: chartToolTip,
    legend: {show: true, position: 'bottom'}
  }));

  

  // Chama a ação para buscar/atualizar os dados quando a página carrega.
  // monitorStore.fetchMonitoringData();
</script>

<template>
  <div class="Status-dashboard">
    <div class="Page-header">
      <h1>Global Dashboard</h1>
      <p class="Last-update">Last update: {{ monitorStore.data.lastUpdate }}</p>
    </div>

    <div class="Dashboard-grid">
      <StatusCard title="Device Status">
        <div class="Stat-group">
          <div class="Stat-item Online">
            <span class="Value">{{ monitorStore.data.devices.online }}</span>
            <span class="Label">Online</span>
          </div>
          <div class="Stat-item Offline">
            <span class="Value">{{ monitorStore.data.devices.offline }}</span>
            <span class="Label">Offline</span>
          </div>
          <div class="Stat-item Total">
            <span class="Value">{{ monitorStore.data.devices.total }}</span>
            <span class="Label">Total</span>
          </div>
        </div>
      </StatusCard>

      <StatusCard title="IPAM Status IPv4">
        <div class="Stat-group Ipam">
          <div class="Stat-item">
            <span class="Value">{{ monitorStore.data.ipam.ips_used_v4 }}</span>
            <span class="Label">Used</span>
          </div>
          <div class="Stat-item">
            <span class="Value">{{ monitorStore.data.ipam.ips_free_v4 }}</span>
            <span class="Label">Free</span>
          </div>
          <div class="Stat-item Highlight">
            <span class="Value">{{ monitorStore.ipV4UsagePercentual }}</span>
            <span class="Label">Utilization</span>
          </div>
        </div>
      </StatusCard>

      <StatusCard title="IPAM Status IPv6">
        <div class="Stat-group Ipam">
          <div class="Stat-item">
            <span class="Value">{{ monitorStore.data.ipam.ips_used_v6 }}</span>
            <span class="Label">Used</span>
          </div>
          <div class="Stat-item">
            <span class="Value">{{ monitorStore.data.ipam.ips_free_v6 }}</span>
            <span class="Label">Free</span>
          </div>
          <div class="Stat-item Highlight">
            <span class="Value">{{ monitorStore.ipV6UsagePercentual }}</span>
            <span class="Label">Utilization</span>
          </div>
        </div>
      </StatusCard>

      <StatusCard title="Greatnes Subnets (Top 3)">
        <ul class="Top-list">
          <li v-for="net in monitorStore.data.ipam.top_subnets" :key="net.id">
            <span class="List-name">{{ net.name }}</span>
            <span class="List-value">{{ net.usage }}</span>
          </li>
        </ul>
      </StatusCard>

      <StatusCard title="Devices for Vendors">
        <div class="Placeholder-chart">
          <ul class="Vendor-list">
            <li v-for="(count, vendor) in monitorStore.data.devices.vendors" :key="vendor">
              <span>{{ vendor }}</span>
              <span>{{ count }}</span>
            </li>
          </ul>
        </div>
      </StatusCard>
    </div>
  </div>
</template>

<style scoped>
  .Status-dashboard{
    padding: 20px;
  }

  .Page-header {
    margin-bottom: 20px;
  }

  .Page-header h1 {
    margin: 0;
  }

  .Last-updated {
    font-style: italic;
    color: #667;
    margin-top: 5px;
  }

  .Dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .Stat-group {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-top: 10px;
  }

  .Stat-item .Value {
    font-size: 2.8em;
    font-weight: 600;
    display: block;
  }

  .Stat-item .Label {
    font-size: 0.9em;
    color: white;
    text-transform: uppercase;
  }

  .Stat-item.Online .Value {
    color: #27ae60;
  }

  .Stat-item.Offline .Value {
    color: #e74c3c;
  }

  .Stat-item.Total .Value {
    color: #3498db;
  }

  .Stat-item.Highlight .Value {
    color: #f39c12;
  }

  .Top-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .Top-list li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .Top-list li:last-child {
    border-bottom: none;
  }

  .List-name {
    font-weight: 500;
  }

  .List-value {
    font-weight: 600;
    color: white;
  }

  .Vendor-list {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }

  .Vendor-list li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    font-size: 0.9em;
  }
</style>