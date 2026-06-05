<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const bottomRef = ref<HTMLElement | null>(null)
useScrollReveal(bottomRef, { y: 30, delay: 0.15 })

const modes = [
  {
    icon: 'lucide:mouse',
    title: '鼠标键盘',
    desc: '桌面级操控',
    images: [new URL('@/assets/sb/jp.png', import.meta.url).href],
  },
  {
    icon: 'lucide:smartphone',
    title: '手机',
    desc: '便携互联',
    images: [new URL('@/assets/sb/sj.png', import.meta.url).href],
  },
  {
    icon: 'lucide:monitor',
    title: '显示器',
    desc: '大屏沉浸',
    images: [new URL('@/assets/sb/显示屏.png', import.meta.url).href],
  },
  {
    icon: 'lucide:pen-tool',
    title: '触控笔',
    desc: '一键直达',
    images: [
      // new URL('@/assets/sb/lxh.png', import.meta.url).href,
      new URL('@/assets/sb/触控笔.png', import.meta.url).href,
    ],
  },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="bottomRef">
        <p
          class="text-center text-lg md:text-xl font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
        >
          随时 · 随地 · 随心 · 随用
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="mode in modes"
            :key="mode.title"
            class="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Images -->
            <div
              class="w-full mb-4 rounded-xl overflow-hidden bg-white border border-line/30"
              :class="mode.images.length > 1 ? 'flex items-center justify-center p-2' : 'h-28 md:h-32'"
            >
              <img
                v-for="(img, idx) in mode.images"
                :key="img"
                :src="img"
                :alt="mode.title"
                class="object-contain"
                :class="[
                  mode.images.length > 1
                    ? 'w-1/2 h-24 md:h-28 rounded-lg bg-white'
                    : 'w-full h-full',
                  mode.images.length > 1 && idx === 1 ? '-ml-6 md:-ml-8' : '',
                  mode.title === '手机' ? 'max-h-20 md:max-h-24 mx-auto' : '',
                ]"
              />
            </div>

            <!-- <div
              class="w-12 h-12 rounded-xl bg-[#E6F5FB] flex items-center justify-center mb-3"
            >
              <Icon :icon="mode.icon" class="w-6 h-6 text-[#2DB4E6]" />
            </div> -->
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
