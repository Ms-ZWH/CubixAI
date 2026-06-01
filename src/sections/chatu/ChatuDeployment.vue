<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const items = [
  { icon: 'lucide:code', title: '源码交付', desc: '完整安全的 ChatU 源码 + 详尽文档' },
  { icon: 'lucide:server', title: '私有部署', desc: '深入沟通业务与技术需求' },
  { icon: 'lucide:shield-check', title: '数据安全', desc: '本地部署 + 远程培训现场支持' },
  { icon: 'lucide:cloud', title: 'Cloud 原生', desc: '架构稳定 + 国内合规' },
  { icon: 'lucide:headphones', title: '技术支持', desc: '长期维护协议 + 持续服务' },
  { icon: 'lucide:puzzle', title: '灵活拓展', desc: '一站式解决方案' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          6 大部署保障
        </h2>
      </div>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-10 h-10 rounded-xl bg-[#433487]/10 flex items-center justify-center mb-4"
          >
            <Icon :icon="item.icon" class="w-5 h-5 text-[#433487]" />
          </div>
          <h3 class="text-base font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-1 text-sm text-ink-secondary">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
