<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import microsoftLogo from '@/assets/Microsoft.png'

const titleRef = ref<HTMLElement | null>(null)
const marqueeRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

function pauseMarquee() {
  marqueeRef.value?.classList.add('paused')
}

function resumeMarquee() {
  marqueeRef.value?.classList.remove('paused')
}

interface Partner {
  name: string
  icon: string
  color: string
  image?: string
}

const partners: Partner[] = [
  { name: 'Microsoft', icon: 'simple-icons:microsoft', color: '#737373', image: microsoftLogo },
  { name: 'OpenAI', icon: 'simple-icons:openai', color: '#412991' },
  { name: 'NVIDIA', icon: 'simple-icons:nvidia', color: '#76B900' },
  { name: 'Amazon', icon: 'simple-icons:amazon', color: '#FF9900' },
  { name: 'Oracle', icon: 'simple-icons:oracle', color: '#F80000' },
  { name: 'HUAWEI', icon: 'simple-icons:huawei', color: '#CF0A2C' },
  { name: '百度', icon: 'simple-icons:baidu', color: '#2932E1' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          合作伙伴
        </h2>
      </div>
    </div>

    <!-- Marquee -->
    <div
      ref="marqueeRef"
      class="relative w-full"
      @mouseenter="pauseMarquee"
      @mouseleave="resumeMarquee"
    >
      <!-- Gradient masks -->
      <div
        class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
        style="background: linear-gradient(to right, #FAFAF7, transparent);"
      />
      <div
        class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
        style="background: linear-gradient(to left, #FAFAF7, transparent);"
      />

      <div class="flex marquee-track">
        <!-- First set -->
        <div
          v-for="p in partners"
          :key="p.name"
          class="flex-shrink-0 flex items-center gap-3 px-6 md:px-8"
        >
          <div
            class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-surface-muted border border-line/50 transition-colors duration-300 hover:bg-white hover:shadow-sm group"
          >
            <img
              v-if="p.image"
              :src="p.image"
              :alt="p.name"
              class="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
            <Icon
              v-else
              :icon="p.icon"
              class="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
              :style="{ color: p.color }"
            />
          </div>
          <span
            class="text-sm md:text-base font-medium text-ink-secondary whitespace-nowrap transition-colors duration-300 hover:text-ink-primary cursor-default"
          >
            {{ p.name }}
          </span>
        </div>

        <!-- Duplicate set for seamless loop -->
        <div
          v-for="p in partners"
          :key="`${p.name}-dup`"
          class="flex-shrink-0 flex items-center gap-3 px-6 md:px-8"
        >
          <div
            class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-surface-muted border border-line/50 transition-colors duration-300 hover:bg-white hover:shadow-sm group"
          >
            <img
              v-if="p.image"
              :src="p.image"
              :alt="p.name"
              class="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
            <Icon
              v-else
              :icon="p.icon"
              class="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
              :style="{ color: p.color }"
            />
          </div>
          <span
            class="text-sm md:text-base font-medium text-ink-secondary whitespace-nowrap transition-colors duration-300 hover:text-ink-primary cursor-default"
          >
            {{ p.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  animation: marquee-scroll 30s linear infinite;
  width: max-content;
}

.paused .marquee-track {
  animation-play-state: paused;
}
</style>
