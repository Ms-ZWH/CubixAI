<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })
</script>

<template>
  <section
    class="relative overflow-hidden bg-surface-base pt-12 md:pt-20 pb-16 md:pb-24"
  >
    <!-- 右上绿色光晕 -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.18) 0%,
          transparent 70%
        );
        filter: blur(60px);
      "
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- 左侧 -->
        <div ref="leftRef">
          <div class="flex flex-wrap gap-2">
            <Chip variant="gold">HARDWARE</Chip>
            <Chip class="!bg-[#E6F5FB] !text-[#1A8BC4]">AI WORKSTATION</Chip>
          </div>

          <h1
            class="mt-6 text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-ink-primary leading-[1.08] tracking-[-0.03em] whitespace-nowrap"
          >
            智方体 · AgentStation
          </h1>

          <p
            class="mt-4 text-[36px] md:text-[48px] font-semibold bg-gradient-to-br from-[#2DB4E6] to-[#1A8BC4] bg-clip-text text-transparent leading-tight"
          >
            智能工作 · 安全到家
          </p>

          <p class="mt-2 text-sm text-ink-tertiary tracking-wider uppercase">
            Work Smart · Stay Safe
          </p>

          <p
            class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-lg"
          >
            开箱即用的企业 AI 工作站 · 数据不出盒
          </p>

          <div
            class="flex flex-wrap items-center gap-3 mt-6 text-sm text-ink-tertiary"
          >
            <span>开箱即用</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>本地安全</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>双引擎架构</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>全程可视</span>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton to="/contact" class="!bg-none !bg-[#2DB4E6]">¥2999 起购</BrandButton>
            <BrandButton variant="ghost" to="/products/agentstation" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" arrow>
              查看所有版本
            </BrandButton>
          </div>
        </div>

        <!-- 右侧 -->
        <div ref="rightRef" class="flex justify-center">
          <div
            class="w-full max-w-md aspect-square rounded-2xl bg-surface-muted border border-line shadow-[0_20px_60px_rgba(15,31,23,0.12)] flex items-center justify-center transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
          >
            <span class="text-ink-tertiary text-sm">
              TODO: 硬件 3D 渲染图占位
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
