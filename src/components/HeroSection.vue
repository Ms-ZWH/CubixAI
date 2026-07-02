<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppImage from './AppImage.vue'
import rjmBanana from '@/assets/rjm_banana.webp'
import chatuBanana from '@/assets/ChatU_banana.webp'

const { t } = useI18n()

const slides = [
  { src: rjmBanana, alt: '软积木' },
  { src: chatuBanana, alt: 'ChatU' },
  // { src: zftBanana, alt: '智方体' },
]

const current = ref(0)
let autoTimer: ReturnType<typeof setInterval> | null = null
let manualDelayTimer: ReturnType<typeof setTimeout> | null = null
const AUTOPLAY_DELAY = 5000
const AUTOPLAY_INTERVAL = 5000

function startAutoplay() {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, AUTOPLAY_INTERVAL)
}

function stopAutoplay() {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

function scheduleAutoplayAfterInteraction() {
  if (manualDelayTimer) clearTimeout(manualDelayTimer)
  stopAutoplay()
  manualDelayTimer = setTimeout(() => {
    startAutoplay()
  }, AUTOPLAY_DELAY)
}

const go = (index: number) => {
  current.value = index
  scheduleAutoplayAfterInteraction()
}

const next = () => {
  current.value = (current.value + 1) % slides.length
  scheduleAutoplayAfterInteraction()
}

const prev = () => {
  current.value = (current.value - 1 + slides.length) % slides.length
  scheduleAutoplayAfterInteraction()
}

onUnmounted(() => {
  stopAutoplay()
  if (manualDelayTimer) clearTimeout(manualDelayTimer)
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
        <AppImage
          :src="slide.src"
          :alt="slide.alt"
          class="w-full h-full object-cover"
          :priority="i === 0"
        />
        <!-- Slide 1 (rjm_banana) text -->
        <!-- <div
          v-if="i === 0"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xZl font-bold text-[#55AD73] drop-shadow-lg tracking-widest">{{ t('home.hero.slide1Title') }}</p>
              <p class="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide1Sub') }}</p>
              <p class="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide1Desc') }}</p>
            </div>
          </div>
        </div> -->
        <!-- Slide 2 (ChatU_banana) text -->
        <div
          v-if="i === 1"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#433487] drop-shadow-lg tracking-widest">{{ t('home.hero.slide2Title') }}</p>
              <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide2Sub') }}</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">{{ t('home.hero.slide2Desc1') }}</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide2Desc2') }}</p>
            </div>
          </div>
        </div>
        <!-- Slide 3 (zft_banana1) text -->
        <!-- <div
          v-if="i === 2"
          class="absolute inset-0 flex items-center"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-xl">
              <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A8BC4] drop-shadow-lg tracking-widest">{{ t('home.hero.slide3Title') }}</p>
              <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide3Sub') }}</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc1') }}</p>
              <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc2') }}</p>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Arrow Left -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
        @click="prev"
        aria-label="Previous"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Arrow Right -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
        @click="next"
        aria-label="Next"
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
