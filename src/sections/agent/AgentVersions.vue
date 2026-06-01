<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const versions = [
  {
    name: 'Vision 版',
    price: '¥2999',
    badge: '直观交互 · 桌面陪伴',
    audience: '个人创作者 · 设计师 · 小团队',
    features: [
      '5.5" 触控屏 + 触控笔',
      '8GB 内存 + 128GB 存储',
      '内置 500 万 token(30 天)',
    ],
    cta: '立即购买',
    ctaVariant: 'primary' as const,
    to: '/contact',
  },
  {
    name: 'Vision Pro 版',
    price: '¥3999',
    badge: '交互与算力集大成',
    audience: '政府机构 · 大型企业 · 高端用户',
    features: [
      '顶级硬件 + 极致性能',
      '16GB 内存 + 256GB 存储',
      '内置 1000 万 token(30 天)',
    ],
    cta: '立即购买',
    ctaVariant: 'primary' as const,
    to: '/contact',
    recommended: true,
  },
  {
    name: 'One 算力版',
    price: '价格待定',
    badge: '超强算力 · 后台中枢',
    audience: 'B 端企业 · 开发团队',
    features: [
      '纯主机极简工业设计',
      '强大本地算力核心',
      '支持私有化模型部署',
    ],
    cta: '联系销售',
    ctaVariant: 'ghost' as const,
    to: '/contact',
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
          选择适合你的版本
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          一次投入 · 持续享受技术迭代红利
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div
          v-for="v in versions"
          :key="v.name"
          class="relative flex flex-col p-8 rounded-3xl bg-surface-card border border-line shadow-card"
          :class="
            v.recommended
              ? 'md:-mt-4 md:mb-4 border-[#2DB4E6] shadow-lg'
              : 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
          "
        >
          <!-- 推荐 badge -->
          <div
            v-if="v.recommended"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2DB4E6] text-white text-xs font-semibold"
          >
            最受欢迎
          </div>

          <span
            class="text-xs font-semibold text-[#2DB4E6] uppercase tracking-wider"
          >
            {{ v.name }}
          </span>
          <div class="mt-3 text-3xl font-bold text-ink-primary">
            {{ v.price }}
          </div>
          <p class="mt-2 text-sm font-medium text-ink-primary">
            {{ v.badge }}
          </p>
          <Chip variant="muted" class="mt-3 self-start">
            {{ v.audience }}
          </Chip>

          <ul class="mt-6 space-y-3 flex-1">
            <li
              v-for="f in v.features"
              :key="f"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#2DB4E6] shrink-0 mt-0.5" />
              {{ f }}
            </li>
          </ul>

          <div class="mt-8">
            <BrandButton
              :variant="v.ctaVariant"
              size="sm"
              :to="v.to"
              :class="[
                'w-full justify-center',
                v.ctaVariant === 'primary' ? '!bg-none !bg-[#2DB4E6]' : 'hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]',
              ]"
            >
              {{ v.cta }}
            </BrandButton>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-ink-tertiary">
        * 最终产品的软硬件配置及价格，以官方正式发布版本为准
      </p>
    </div>
  </section>
</template>
