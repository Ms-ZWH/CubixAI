<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const plans = [
  {
    title: '点数充值',
    subtitle: '按需付费',
    items: ['100 万 · ¥59', '500 万 · ¥269', '1000 万 · ¥499', '5000 万 · ¥1999'],
    fit: '低频使用 · 小团队',
  },
  {
    title: '月度订阅',
    subtitle: '高频首选',
    items: [
      '首月 100 万 → ¥9.9',
      '常规 100 万 · ¥49/月',
      '500 万 · ¥199/月',
      '3000 万 · ¥999/月',
    ],
    fit: '短期项目 · 高频使用',
    badge: '首月 9.9 元',
    highlight: true,
  },
  {
    title: '年度订阅',
    subtitle: '最划算',
    items: ['100 万×12 · ¥499', '500 万×12 · ¥1999', '3000 万×12 · ¥9999'],
    fit: '长期企业用户',
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          灵活计费 · 按需付费
        </h2>
        <p class="mt-4 text-sm text-ink-tertiary">
          * 100 万点数 ≈ 70 万字上下文 / 100 张图片
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="relative flex flex-col p-8 rounded-3xl bg-surface-card border border-line shadow-card"
          :class="
            plan.highlight
              ? 'md:-mt-4 md:mb-4 border-gold shadow-lg'
              : 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
          "
        >
          <!-- badge -->
          <div
            v-if="plan.badge"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold"
          >
            {{ plan.badge }}
          </div>

          <span
            class="text-xs font-semibold text-[#2DB4E6] uppercase tracking-wider"
          >
            {{ plan.title }}
          </span>
          <p class="mt-1 text-sm text-ink-secondary">{{ plan.subtitle }}</p>

          <ul class="mt-6 space-y-3 flex-1">
            <li
              v-for="(item, i) in plan.items"
              :key="item"
              class="text-sm"
              :class="
                plan.highlight && i === 0
                  ? 'text-gold font-semibold'
                  : 'text-ink-primary'
              "
            >
              {{ item }}
            </li>
          </ul>

          <Chip variant="muted" class="mt-6 self-start">
            {{ plan.fit }}
          </Chip>
        </div>
      </div>
    </div>
  </section>
</template>
