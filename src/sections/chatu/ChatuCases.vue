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
        <!-- Card 1 -->
        <div
          ref="card1Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <Chip variant="muted">政企标杆</Chip>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            中移系统集成
          </h3>
          <p class="mt-2 text-ink-secondary">日常办公降本增效</p>
          <p class="mt-2 text-sm text-ink-tertiary">2023 年 3 月引入</p>
          <div class="mt-6">
            <BrandButton variant="ghost" size="sm" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              查看案例
            </BrandButton>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          ref="card2Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <Chip variant="muted">教育/科研</Chip>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            清华大学 AIRelief
          </h3>
          <p class="mt-2 text-ink-secondary">
            认知增强心理智能体系统
          </p>
          <div class="mt-6">
            <BrandButton variant="ghost" size="sm" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              查看案例
            </BrandButton>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          ref="card3Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <Chip variant="muted">个人 OPC</Chip>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            朋克周
          </h3>
          <p class="mt-2 text-ink-secondary">
            160 万粉丝 AI 科技博主
          </p>
          <p class="mt-2 text-sm text-ink-tertiary">
            公众号集成 ChatU
          </p>
          <div class="mt-6">
            <BrandButton variant="ghost" size="sm" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              查看案例
            </BrandButton>
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
