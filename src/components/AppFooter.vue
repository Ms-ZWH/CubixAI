<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const route = useRoute()

const greenRoutes = ['/', '/solutions', '/cases', '/ai-insight', '/contact']
const isGreenBg = computed(() => greenRoutes.includes(route.path))
const showLogo2 = computed(() => ['/', '/products/agentstation', '/products/chatu', '/ecosystem', '/ai-insight', '/contact', '/cases', '/solutions', '/opc-hub'].includes(route.path))
</script>

<template>
  <footer :class="isGreenBg ? 'bg-[#55AD73] text-white/80' : 'bg-brand-ink text-white/80'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <template v-if="showLogo2">
            <img
              src="@/assets/logo2.png"
              alt="软积木"
              class="h-12 w-auto mb-4"
            />
          </template>
          <template v-else>
            <div class="flex items-center gap-2.5 mb-4">
              <div
                class="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center"
              >
                <Icon icon="lucide:hexagon" class="w-5 h-5 text-white" />
              </div>
              <span class="text-lg font-bold text-white tracking-tight">
                软积木
              </span>
            </div>
          </template><p class="text-sm text-white/60 leading-relaxed">
            AI 原生公司，以 ChatU 软件平台与智方体硬件终端，打通企业智能化的全链路。
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">产品</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                to="/products/chatu"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                ChatU
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/products/agentstation"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                智方体
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/opc-hub"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                OPC Hub
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                课程培训
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-white mb-4">公司</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                to="/contact"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                关于我们
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/cases"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                客户案例
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                联系我们
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-white mb-4">资源</h4>
          <ul class="space-y-2.5">
            <li>
              <RouterLink
                to="/solutions"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                解决方案
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/ecosystem"
                class="text-sm text-white/60 hover:text-white transition-colors"
              >
                生态系统
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm text-white/40">
          © 2025 软积木. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>





