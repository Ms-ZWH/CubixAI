<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { src: new URL('@/assets/rjm_banana.png', import.meta.url).href, alt: '软积木' },
  { src: new URL('@/assets/ChatU_banana.png', import.meta.url).href, alt: 'ChatU' },
  { src: new URL('@/assets/zft_banana.png', import.meta.url).href, alt: '智方体' },
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
