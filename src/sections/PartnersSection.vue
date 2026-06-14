<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
useScrollReveal(titleRef, { y: 30 })

const partners = [
  { name: 'Microsoft', image: new URL('@/assets/hzhb/Microsoft-logo.webp', import.meta.url).href },
  { name: 'NVIDIA', image: new URL('@/assets/hzhb/nvidia.png', import.meta.url).href },
  { name: 'OpenAI', image: new URL('@/assets/hzhb/OpenAI.png', import.meta.url).href },
  { name: 'Google', image: new URL('@/assets/hzhb/Google.png', import.meta.url).href },
  { name: 'Amazon', image: new URL('@/assets/hzhb/amazon.png', import.meta.url).href },
  { name: 'Oracle', image: new URL('@/assets/hzhb/oracle.png', import.meta.url).href },
  { name: 'MiniMax', image: new URL('@/assets/hzhb/minimax.png', import.meta.url).href },
  { name: '阿里巴巴', image: new URL('@/assets/hzhb/almm.png', import.meta.url).href },
  { name: '月之暗面', image: new URL('@/assets/hzhb/yzam.png', import.meta.url).href },
  { name: '百度', image: new URL('@/assets/hzhb/baidu.png', import.meta.url).href },
  // { name: '百度智能云', image: new URL('@/assets/hzhb/baidu1.png', import.meta.url).href },
  { name: 'DeepSeek', image: new URL('@/assets/hzhb/deepseek.png', import.meta.url).href },
  // { name: '华为', image: new URL('@/assets/hzhb/huawei.png', import.meta.url).href },
  { name: '火山引擎', image: new URL('@/assets/hzhb/huoshan.png', import.meta.url).href },
  { name: '京东', image: new URL('@/assets/hzhb/jd.jpg', import.meta.url).href },
  { name: '字节跳动', image: new URL('@/assets/hzhb/zjtd.png', import.meta.url).href },
  { name: '智谱 AI', image: new URL('@/assets/hzhb/zp.png', import.meta.url).href },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-16 md:mb-24">
        <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
          合作伙伴
        </h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-14 md:gap-x-20 md:gap-y-16">
        <div
          v-for="p in partners"
          :key="p.name"
          class="w-28 h-14 md:w-36 md:h-16 lg:w-44 lg:h-20 flex items-center justify-center"
        >
          <img
            :src="p.image"
            :alt="p.name"
            class="max-w-full max-h-full object-contain opacity-100 transition-all duration-300"
            :class="(p.name === 'Amazon' || p.name === '京东') ? 'max-h-[70%]' : ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>
