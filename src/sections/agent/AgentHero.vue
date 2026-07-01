<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import BrandButton from '../../components/BrandButton.vue'
import AppImage from '../../components/AppImage.vue'

const openModal = inject<() => void>('agentStationOpenModal')

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

const heroImages = [
  { src: new URL('@/assets/zft/hero1.webp', import.meta.url).href, alt: '智方体 AgentStation' },
  { src: new URL('@/assets/zft/hero2.webp', import.meta.url).href, alt: '智方体 AgentStation' },
]

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function startCarousel() {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroImages.length
  }, 3000)
}

function stopCarousel() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(startCarousel)
onUnmounted(stopCarousel)
</script>

<template>
  <section
    class="relative overflow-hidden bg-surface-base pt-12 md:pt-20 pb-16 md:pb-24"
  >
    <!-- 右上绿色光晕 -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.18) 0%,
          transparent 70%
        );
        filter: blur(60px);
      "
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <!-- 左侧 -->
        <div ref="leftRef">
          <!-- <div class="flex flex-wrap gap-2">
            <Chip variant="gold">HARDWARE</Chip>
            <Chip class="!bg-[#E6F5FB] !text-[#1A8BC4]">AI WORKSTATION</Chip>
          </div> -->

          <h1
            class="mt-6 text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-ink-primary leading-[1.08] tracking-[-0.03em] whitespace-nowrap"
          >
            智方体 · AgentStation
          </h1>

          <p
            class="mt-4 text-[36px] md:text-[48px] font-semibold bg-gradient-to-br from-[#2DB4E6] to-[#1A8BC4] bg-clip-text text-transparent leading-tight"
          >
            智能工作 · 安全到家
          </p>

          <p class="mt-2 text-sm text-ink-tertiary tracking-wider uppercase">
            Work Smart · Stay Safe
          </p>

          <p
            class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-lg"
          >
            开箱即用的企业 AI 工作站 · 数据不出盒
          </p>

          <div
            class="flex flex-wrap items-center gap-3 mt-6 text-sm text-ink-tertiary"
          >
            <span>开箱即用</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>本地安全</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>预置智能体</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>高清触控可视屏</span>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton class="!bg-none !bg-[#2DB4E6]" @click="openModal">¥2999 起购</BrandButton>
            <BrandButton variant="ghost" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" arrow @click="openModal">
              查看所有版本
            </BrandButton>
          </div>
        </div>

        <!-- 右侧 -->
        <div ref="rightRef" class="flex justify-center">
          <div
            class="relative w-full max-w-md aspect-square rounded-2xl bg-surface-muted border border-line shadow-[0_20px_60px_rgba(15,31,23,0.12)] overflow-hidden"
          >
            <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <AppImage
                v-for="(img, i) in heroImages"
                :key="img.src"
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full flex-shrink-0 object-contain rounded-2xl"
                :priority="i === 0"
              />
            </div>
            <!-- Dots -->
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, idx) in heroImages"
                :key="idx"
                class="w-2 h-2 rounded-full transition-all"
                :class="idx === currentIndex ? 'bg-[#2DB4E6] w-4' : 'bg-white/60'"
                @click="currentIndex = idx; stopCarousel(); startCarousel();"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
