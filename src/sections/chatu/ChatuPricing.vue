<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import GlassCard from '../../components/GlassCard.vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

const advantages = [
  '按需选择方案 · 无需高额一次性支付',
  '灵活控制成本 · 业务变化随时调整',
  '实时支出掌握 · 资源管理更高效',
  '无长期绑定 · 无超预算担忧',
]

const modes = [
  {
    title: '用户购买特定流量包',
    desc: '满足高并发 / 更低价 / 操作灵活',
  },
  {
    title: '定制充值卡',
    desc: '按需充值 / 长期有效',
  },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- 左 -->
        <div ref="leftRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            更灵活 · 更安全 · 更便捷
          </h2>

          <ul class="mt-8 space-y-4">
            <li
              v-for="a in advantages"
              :key="a"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-2 shrink-0" />
              {{ a }}
            </li>
          </ul>
        </div>

        <!-- 右 -->
        <div ref="rightRef" class="space-y-4">
          <GlassCard v-for="mode in modes" :key="mode.title" padding="lg">
            <template v-if="mode.title === '定制充值卡'">
              <img
                src="@/assets/czk.png"
                alt="定制充值卡"
                class="max-w-[260px] mx-auto object-contain rounded-xl mb-4"
              />
            </template>
            <h3 class="text-lg font-semibold text-ink-primary">
              {{ mode.title }}
            </h3>
            <p class="mt-2 text-ink-secondary">{{ mode.desc }}</p>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
