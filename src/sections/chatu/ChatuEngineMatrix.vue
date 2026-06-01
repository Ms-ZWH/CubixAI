<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const engines = [
  { name: 'AOAI GPT', icon: 'simple-icons:openai', color: '#412991' },
  { name: 'Claude', icon: 'simple-icons:anthropic', color: '#D4A574' },
  { name: 'Gemini', icon: 'simple-icons:google', color: '#4285F4' },
  { name: 'Meta Llama', icon: 'simple-icons:meta', color: '#0668E1' },
  { name: '腾讯混元', icon: 'simple-icons:tencentqq', color: '#12B7F5' },
  { name: '阿里通义', icon: 'simple-icons:alibabadotcom', color: '#FF6A00' },
  { name: '百度文心', icon: 'simple-icons:baidu', color: '#2932E1' },
  { name: '字节豆包', icon: 'simple-icons:bytedance', color: '#3C8CFF' },
  { name: 'KIMI', icon: 'lucide:sparkles', color: '#FF6B35' },
  { name: 'MiniMax', icon: 'lucide:bot', color: '#8B5CF6' },
  { name: 'DeepSeek', icon: 'simple-icons:deepseek', color: '#4D6BFA' },
  { name: 'GLM', icon: 'lucide:brain', color: '#10B981' },
  { name: '火山引擎', icon: 'lucide:flame', color: '#FF4500' },
  { name: 'ChatLM3', icon: 'lucide:message-square', color: '#6366F1' },
  { name: '紫东太初', icon: 'lucide:star', color: '#F59E0B' },
  { name: 'More...', icon: 'lucide:plus', color: '#9CA3AF' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          不站队，不绑死 · 任意模型随时切换
        </h2>
        <p
          class="mt-4 text-lg text-ink-secondary leading-relaxed max-w-3xl mx-auto"
        >
          对接全球 16+ 主流大模型，按场景自动路由最优引擎
        </p>
      </div>

      <div
        ref="gridRef"
        class="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4"
      >
        <div
          v-for="e in engines"
          :key="e.name"
          class="flex flex-col items-center justify-center gap-1.5 h-20 md:h-24 rounded-xl bg-white border border-line/50 text-xs md:text-sm font-medium text-ink-tertiary hover:text-ink-primary hover:border-[#433487]/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Icon :icon="e.icon" class="w-6 h-6" :style="{ color: e.color }" />
          <span>{{ e.name }}</span>
        </div>
      </div>


    </div>
  </section>
</template>
