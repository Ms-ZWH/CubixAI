import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/products/chatu',
      name: 'Chatu',
      component: () => import('../views/ChatuView.vue'),
    },
    {
      path: '/products/agentstation',
      name: 'AgentStation',
      component: () => import('../views/AgentStationView.vue'),
    },
    {
      path: '/ai-insight',
      name: 'AIInsight',
      component: () => import('../views/AIInsightView.vue'),
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: () => import('../views/SolutionsView.vue'),
    },
    {
      path: '/ecosystem',
      name: 'Ecosystem',
      component: () => import('../views/EcosystemView.vue'),
    },
    {
      path: '/cases',
      name: 'Cases',
      component: () => import('../views/CasesView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/opc-hub',
      name: 'OPCHub',
      component: () => import('../views/OPCHubView.vue'),
    },
  ],
})

export default router
