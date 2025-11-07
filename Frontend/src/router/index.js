import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/status',
      name: 'home',
      component: () => import('../views/monitoring/GeneralStatusView.vue')
    },
    {
       path: '/dashboard/ipam',
       name: 'ipam-status',
       component: () => import('../views/monitoring/IpamStatusView.vue')
    },
    {
      path: '/dashboard/server',
      name: 'server-status',
      component: () => import('../views/monitoring/ServerStatusView.vue')
    },
    {
      path: '/network/ipam',
      name: 'ipam-config',
      component: () => import('../views/network/IpamConfigView.vue')
    },
    {
      path: '/syslog',
      name: 'syslog',
      component: () => import('../views/syslog/LogsView.vue')
    },
    {
      path: '/administration/user',
      name: 'user-config',
      component: () => import('../views/administration/UserAccessConfig.vue')
    },
    {
      path: '/administration/email',
      name: 'email-config',
      component: () => import('../views/administration/EmailConfig.vue')
    }
  ],
})

export default router

//     {
//       path: '/dashboard/status',
//       name: 'home',
//       component: () => import('../views/')
//     },