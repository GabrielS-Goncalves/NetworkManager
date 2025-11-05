import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Função para simular o formato da data de construção
const getBuildTime = () => new Date().toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// Dados simulados que viram da API/JSON.
// Eles representam o estado atual do seu monitoramento.
const initialMonitoringData = {
    // Status Geral de Dispositivos (Devices)
    devices: {
        total: 1250,
        online: 1190,
        offline: 60,
        vendors: {
            cisco: 350,
            Juniper: 210,
            Huawei: 150,
            Dell: 540,
        }
    },

    // Status IPAM
    ipam: {
        subnets_v4: 85,
        subnets_v6: 12,
        ips_used_v4: 2580,
        ips_free_v4: 75220,
        ips_used_v6: 258,
        ips_free_v6: 7522000,
        top_subnets: [
            {nome: 'Server-Subnet', usage: '92%', id: 1},
            {nome: 'Users-Subnet', usage: '85%', id: 2},
            {nome: 'Database-Subnet', usage: '65%', id: 3},
        ]
    },
    // Metadados
    lastUpdate: getBuildTime(),
};

export const useMonitorStore = defineStore('monitor', () => {
    // STATE (Onde os dados da API/JSON serão armazanados)
    const data = ref(initialMonitoringData);

    //GETTERS (Acesso otimizado e formatado ao STATE)
    //Exemplo: Retorna a contagem de dispositivos online
    const totalOnLineDevices = computed(() => data.value.devices.online);

    //Exemplo: Retorna o percentual de uso de IPs v4
    const ipV4UsagePercentual = computed(() => {
        const total = data.value.ipam.ips_used_v4 + data.value.ipam.ips_free_v4;
        return ((data.value.ipam.ips_used_v4 / total) * 100).toFixed(1);
    });

    //Exemplo: Retorna o percentual de uso de IPs v6
    const ipV6UsagePercentual = computed(() => {
        const total = data.value.ipam.ips_used_v6 + data.value.ipam.ips_free_v6;
        return ((data.value.ipam.ips_used_v6 / total) * 100).toFixed(1);
    });

    //ACTIONS (Funções que buscam ou modificam o STATE)
})