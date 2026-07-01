<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import jszcImg from '@/assets/jszc.jpg'
import lxhsqImg from '@/assets/lxwm.png'
import wjhImg from '@/assets/wjh.jpg'

const contentRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.2 })

const items = [
  {
    title: '加入社群',
    desc: '加入智方体用户社区，获取最新产品动态、实战教程与同行经验交流',
    link: '/ecosystem',
    image: lxhsqImg,
  },
  {
    title: '渠道合作',
    desc: '成为智方体授权合作伙伴，共享 AI 硬件终端市场红利，共创智能未来',
    link: '/contact',
    image: wjhImg,
  },
  {
    title: '技术支持',
    desc: '官方售后全链路服务，7×24 小时专家响应，为您的设备稳定运行保驾护航',
    link: '/contact',
    image: jszcImg,
  },
]
</script>

<template>
  <section class="relative overflow-hidden py-20 md:py-[120px] bg-white">
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="contentRef" class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary tracking-tight leading-tight"
        >
          智能工作 · 安全到家
        </h2>
        <p class="mt-4 text-xl text-ink-secondary">
          Work Smart · Stay Safe
        </p>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col items-center text-center rounded-2xl bg-surface-base border border-line overflow-hidden"
        >
          <!-- 图片 -->
          <div class="w-full aspect-square bg-white flex items-center justify-center overflow-hidden p-6">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-contain"
            />
            <span v-else class="text-sm text-ink-tertiary">{{ item.title }}图片占位</span>
          </div>

          <div class="p-6 flex flex-col items-center">
            <h3 class="text-lg font-semibold text-ink-primary">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
