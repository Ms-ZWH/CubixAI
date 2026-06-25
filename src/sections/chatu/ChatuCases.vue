<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'

const titleRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)
const card3Ref = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(card1Ref, { y: 30, delay: 0.1 })
useScrollReveal(card2Ref, { y: 30, delay: 0.2 })
useScrollReveal(card3Ref, { y: 30, delay: 0.3 })

function setCardRef(el: HTMLElement | null, idx: number) {
  if (idx === 0) card1Ref.value = el
  else if (idx === 1) card2Ref.value = el
  else card3Ref.value = el
}

const cases = [
  {
    image: new URL('@/assets/hzqy/qh.png', import.meta.url).href,
    chip: '心理健康',
    title: '清华大学',
    client: '认知增强心理智能体系统',
    desc: '构建面向个人来访者的心理智能体，提升心理咨询服务效率',
  },
  {
    image: new URL('@/assets/hzqy/pkz.png', import.meta.url).href,
    chip: '内容创作',
    title: '朋克周',
    client: 'AI 科技博主全流程赋能',
    desc: '在创作、优化、运营、互动全流程实现高效赋能，全面提升影响力与传播效果',
  },
  {
    image: new URL('@/assets/hzqy/zyxt.jpg', import.meta.url).href,
    chip: '央企办公',
    title: '中移系统集成有限公司',
    client: '大型央企办公智能化升级',
    desc: '实现降本增效目标，标书撰写、文档制作、日常办公效率显著提升',
  },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          客户案例精选
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(c, idx) in cases"
          :key="c.title"
          :ref="(el) => setCardRef(el as HTMLElement | null, idx)"
          class="group rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <!-- 图片区域 -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="c.image"
              :alt="c.client"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            />
          </div>

          <!-- 内容区域 -->
          <div class="p-6 md:p-8">
            <Chip variant="muted">{{ c.chip }}</Chip>
            <h3 class="mt-4 text-xl font-semibold text-ink-primary leading-tight">
              {{ c.title }}
            </h3>
            <p class="mt-1 text-sm font-medium text-brand">
              {{ c.client }}
            </p>
            <p class="mt-3 text-sm text-ink-secondary leading-relaxed">
              {{ c.desc }}
            </p>
            <div class="mt-6">
              <BrandButton variant="ghost" size="sm" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
                查看案例
              </BrandButton>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <BrandButton variant="ghost" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
          查看全部案例
        </BrandButton>
      </div>
    </div>
  </section>
</template>
