<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const items = [
  {
    title: '合规备案，符合规范',
    desc: '遵循国家网信办、工信部、以及互联网信息服务算法备案系统等管理规定。',
  },
  {
    title: '知识产权清晰、可追溯、可担责',
    desc: '最新关键词过滤算法，最大限度保证生产内容合法合规，图文审查与协议符合国家规范',
  },
  {
    title: '闭源不是 "封闭" 而是 "可控可用"',
    desc: '自主研发底层架构，符合国内规范要求，架构稳定，国内使用无限制',
  },
]

const certImages = [
  new URL('@/assets/zz/图片1.png', import.meta.url).href,
  new URL('@/assets/zz/图片2.png', import.meta.url).href,
  new URL('@/assets/zz/图片3.png', import.meta.url).href,
  new URL('@/assets/zz/图片4.png', import.meta.url).href,
  new URL('@/assets/zz/CubixAI大模型调度系统证书_01.png', import.meta.url).href,
  new URL('@/assets/zz/企业智能销售后台管理系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/企业智能销售管理系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/大模型调度管理系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/智能交互办公管理系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/智能体分发系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/智能体设计管理系统证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/证书_01.png', import.meta.url).href,
  // new URL('@/assets/zz/软积木智慧教学管理系统证书_01.png', import.meta.url).href,
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          权威合规资质・安全可信保障
        </h2>
        <p class="mt-4 text-sm text-ink-secondary">
          大模型生成合成调度整合算法备案号：网信算备110108947947801240011号
        </p>
      </div>

      <!-- 资质证书轮播 -->
      <div class="relative w-full mb-12 md:mb-16 overflow-hidden">
        <!-- 渐变遮罩 -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cert-marquee-track">
          <!-- 第一组 -->
          <div
            v-for="img in certImages"
            :key="img"
            class="flex-shrink-0 px-3 md:px-4"
          >
            <div class="w-64 md:w-80 h-48 md:h-60 rounded-xl overflow-hidden shadow-sm border border-line/50 bg-white flex items-center justify-center p-3">
              <img
                :src="img"
                alt="合规资质证书"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <!-- 复制一组实现无缝循环 -->
          <div
            v-for="img in certImages"
            :key="`${img}-dup`"
            class="flex-shrink-0 px-3 md:px-4"
          >
            <div class="w-64 md:w-80 h-48 md:h-60 rounded-xl overflow-hidden shadow-sm border border-line/50 bg-white flex items-center justify-center p-3">
              <img
                :src="img"
                alt="合规资质证书"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in items"
          :key="item.title"
          class="p-6 md:p-8 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#433487]/20 transition-all duration-300"
        >
          <h3 class="text-lg font-semibold text-ink-primary">{{ item.title }}</h3>
          <p class="mt-4 text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes cert-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.cert-marquee-track {
  animation: cert-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cert-marquee-track:hover {
  animation-play-state: paused;
}
</style>
