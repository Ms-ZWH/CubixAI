<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const bottomRef = ref<HTMLElement | null>(null)
useScrollReveal(bottomRef, { y: 30, delay: 0.15 })

const modes = [
  { icon: 'lucide:mouse', title: '鼠标键盘', desc: '桌面级操控' },
  { icon: 'lucide:smartphone', title: '手机', desc: '便携互联' },
  { icon: 'lucide:monitor', title: '显示器', desc: '大屏沉浸' },
  { icon: 'lucide:pen-tool', title: '触控笔', desc: '一键直达' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="bottomRef">
        <p
          class="text-center text-sm font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
        >
          随时 · 随地 · 随心 · 随用
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="mode in modes"
            :key="mode.title"
            class="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-[#E6F5FB] flex items-center justify-center mb-4"
            >
              <Icon :icon="mode.icon" class="w-6 h-6 text-[#2DB4E6]" />
            </div>
            <h3 class="text-base font-semibold text-ink-primary">
              {{ mode.title }}
            </h3>
            <p class="mt-1 text-sm text-ink-secondary">{{ mode.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
