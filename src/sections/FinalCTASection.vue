<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import BrandButton from '../components/BrandButton.vue'

const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { y: 30 })
</script>

<template>
  <section class="relative overflow-hidden bg-surface-base">
    <div class="relative pt-20 md:pt-[120px] pb-10 md:pb-16">
      <div
        ref="contentRef"
        class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-[56px] font-semibold text-ink-primary tracking-tight leading-tight"
        >
          专为推动企业AI应用而生
        </h2>
        <p
          class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto"
        >
          解决企业AI落地最后三公里
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <BrandButton to="/contact">联系我们</BrandButton>
        </div>
      </div>
    </div>
  </section>
</template>
