<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const engines = [
  'AOAI GPT',
  'Claude',
  'Gemini',
  'Meta Llama',
  '腾讯混元',
  '阿里通义',
  '百度文心',
  '字节豆包',
  'KIMI',
  'MiniMax',
  'DeepSeek',
  'GLM',
  '火山引擎',
  'ChatLM3',
  '紫东太初',
  'More...',
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
          v-for="name in engines"
          :key="name"
          class="flex items-center justify-center h-16 md:h-20 rounded-xl bg-white border border-line/50 text-xs md:text-sm font-medium text-ink-tertiary grayscale hover:grayscale-0 hover:text-ink-primary hover:border-[#433487]/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          {{ name }}
        </div>
      </div>


    </div>
  </section>
</template>
