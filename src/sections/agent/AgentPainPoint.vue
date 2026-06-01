<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const transitionRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })
useScrollReveal(transitionRef, { y: 20, delay: 0.3 })

const leftPains = [
  '环境配置复杂，依赖项冲突不断',
  '缺乏代码基础，难题无从下手',
  '更新频繁，手动维护成本高',
]

const rightPains = [
  '数据上云，隐私泄露风险',
  '无专业支持，崩溃无法自救',
  '开源软件后门漏洞担忧',
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary tracking-tight"
        >
          <span class="text-[#2DB4E6]">"</span>不会装、不敢装<span class="text-[#2DB4E6]">"</span>
        </h2>
        <p class="mt-6 text-2xl md:text-[28px] text-ink-secondary italic">
          AI 不应是极客的专属玩具
        </p>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 左卡 · 不会装 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-red-500" />
            <span class="text-sm font-semibold text-red-500">不会装</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            技术门槛劝退
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in leftPains"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-red-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 右卡 · 不敢装 -->
        <div
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-orange-500" />
            <span class="text-sm font-semibold text-orange-500">不敢装</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            安全顾虑难消
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in rightPains"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>
      </div>

      <div ref="transitionRef" class="mt-12 text-center">
        <p class="text-xl md:text-2xl font-medium text-ink-primary">
          智方体，就是为了解决这两个问题而生
        </p>
      </div>
    </div>
  </section>
</template>
