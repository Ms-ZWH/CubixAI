<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import microsoftLogo from '@/assets/Microsoft.png'

const titleRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

interface Partner {
  name: string
  icon: string
  color: string
  image?: string
  bg?: string
}

const partners: Partner[] = [
  { name: 'Microsoft', icon: 'simple-icons:microsoft', color: '#737373', image: microsoftLogo },
  { name: 'OpenAI', icon: 'simple-icons:openai', color: '#FFFFFF', bg: '#000000' },
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

      <!-- 两行静态展示 -->
      <div class="space-y-4 md:space-y-6">
        <!-- 第一行 -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <div
            v-for="p in partners.slice(0, 4)"
            :key="p.name"
            class="w-[calc(50%-0.5rem)] md:w-52 flex flex-col items-center gap-3 px-4 py-5 md:py-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-line/50 transition-colors duration-300"
              :class="p.bg ? '' : 'bg-surface-muted'"
              :style="p.bg ? { backgroundColor: p.bg } : {}"
            >
              <img
                v-if="p.image"
                :src="p.image"
                :alt="p.name"
                class="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
              <Icon
                v-else
                :icon="p.icon"
                class="w-7 h-7 md:w-8 md:h-8"
                :style="{ color: p.color }"
              />
            </div>
            <span class="text-base md:text-lg font-medium text-ink-secondary">
              {{ p.name }}
            </span>
          </div>
        </div>

        <!-- 第二行 -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <div
            v-for="p in partners.slice(4)"
            :key="p.name"
            class="w-[calc(33.333%-0.75rem)] md:w-52 flex flex-col items-center gap-3 px-4 py-5 md:py-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-line/50 transition-colors duration-300"
              :class="p.bg ? '' : 'bg-surface-muted'"
              :style="p.bg ? { backgroundColor: p.bg } : {}"
            >
              <img
                v-if="p.image"
                :src="p.image"
                :alt="p.name"
                class="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
              <Icon
                v-else
                :icon="p.icon"
                class="w-7 h-7 md:w-8 md:h-8"
                :style="{ color: p.color }"
              />
            </div>
            <span class="text-base md:text-lg font-medium text-ink-secondary">
              {{ p.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
