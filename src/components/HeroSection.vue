<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { src: new URL('@/assets/rjm_banana.png', import.meta.url).href, alt: '软积木' },
  { src: new URL('@/assets/ChatU_banana.png', import.meta.url).href, alt: 'ChatU' },
  { src: new URL('@/assets/zft_banana1.png', import.meta.url).href, alt: '智方体' },
]

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const go = (index: number) => {
  current.value = index
}

const next = () => {
  current.value = (current.value + 1) % slides.length
}

const prev = () => {
  current.value = (current.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  timer = setInterval(next, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="relative w-full max-w-[1920px] mx-auto overflow-hidden bg-surface-base">
    <div class="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <!-- Slides -->
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="w-full h-full object-cover"
        />
        <!-- 第一张图(rjm_banana)的文案 -->
        <div
          v-if="i === 0"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xZl font-bold text-[#55AD73] drop-shadow-lg tracking-widest">软积木</p>
              <p class="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">培训 · 平台 · 陪跑</p>
              <p class="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">打通企业AI落地最后三公里</p>
            </div>
          </div>
        </div>
        <!-- 第二张图(ChatU_banana)的文案 -->
        <div
          v-if="i === 1"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#433487] drop-shadow-lg tracking-widest">ChatU（才兔）</p>
              <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">企业 AI 操作系统</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">多引擎调度 · 多模态交互 · 多智能体协同</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">让每一家企业都拥有专属 AI 能力</p>
            </div>
          </div>
        </div>
        <!-- 第三张图(zft_banana1)的文案 -->
        <div
          v-if="i === 2"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A8BC4] drop-shadow-lg tracking-widest">智方体 · AgentStation</p>
              <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">智能工作 · 安全到家</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">开箱即用的企业 AI 工作站 · 数据不出盒</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">预置智能体 · 高清触控可视屏</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow Left -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
        @click="prev"
        aria-label="上一张"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Arrow Right -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
        @click="next"
        aria-label="下一张"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicators -->
      <div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="transition-all duration-300 rounded-full"
          :class="
            i === current
              ? 'w-6 md:w-8 h-2 md:h-2.5 bg-white'
              : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/50 hover:bg-white/70'
          "
          @click="go(i)"
          :aria-label="`切换到第 ${i + 1} 张`"
        />
      </div>
    </div>
  </section>
</template>
