<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import BrandButton from '../../components/BrandButton.vue'

const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { y: 30 })
</script>

<template>
  <section class="relative overflow-hidden py-20 md:py-[120px] bg-white">
    <!-- 绿色辉光 -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.15) 0%,
          transparent 70%
        );
        filter: blur(80px);
      "
    />

    <div
      ref="contentRef"
      class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2
        class="text-3xl md:text-4xl lg:text-[48px] font-semibold text-ink-primary tracking-tight"
      >
        定制方案，成就您的行业范本
      </h2>
      <p class="mt-4 text-lg text-ink-secondary">
        告诉我们你的业务场景，共创属于你的 AI 落地故事
      </p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <BrandButton to="/contact" class="!bg-[#55AD73] !text-white hover:!bg-[#2E8B57]">申请合作</BrandButton>
        <BrandButton
          to="/solutions"
          arrow
          class="!bg-[#55AD73] !text-white hover:!bg-[#2E8B57]"
        >
          查看所有解决方案
        </BrandButton>
      </div>
    </div>
  </section>
</template>

