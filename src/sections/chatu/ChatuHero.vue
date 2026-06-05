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
          <!-- <Chip class="!bg-[#433487]/10 !text-[#433487]">SOFTWARE · AI AGENT OS</Chip> -->

          <h1
            class="mt-6 text-[48px] md:text-[64px] lg:text-[72px] font-semibold text-ink-primary leading-[1.08] tracking-[-0.03em]"
          >
            ChatU（才兔）<br />
            <span
              class="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink-primary"
            >
              企业级 AI Agent 操作系统
            </span>
          </h1>

          <p class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-xl">
            多引擎、多模态、多智能体，2023 年 3 月上线至今 服务近 3000
            家企业，覆盖 100+ 行业
          </p>

          <div class="flex flex-wrap gap-2 mt-6">
            <Chip variant="muted">多引擎调度</Chip>
            <Chip variant="muted">私有部署</Chip>
            <Chip variant="muted">Agent Store</Chip>
            <Chip variant="muted">合规备案</Chip>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton href="https://m.chatu.pro" target="_blank" class="!bg-none !bg-[#433487]">申请试用</BrandButton>
            <!-- <BrandButton variant="ghost" to="/contact" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              查看演示
            </BrandButton> -->
          </div>
        </div>

        <!-- 右侧 mockup -->
        <div ref="rightRef" class="relative">
          <div
            class="aspect-[16/10] rounded-2xl bg-surface-muted border border-line shadow-card overflow-hidden flex items-center justify-center"
          >
            <span class="text-ink-tertiary text-sm">
              TODO: ChatU 产品界面截图占位
            </span>
          </div>
          <!-- 网信算备徽章 -->
          <div
            class="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-surface-card border border-gold text-xs font-medium text-gold shadow-card"
          >
            网信算备
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
