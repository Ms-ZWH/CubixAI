<script setup lang="ts">
import { ref } from 'vue'
import { useCountUp } from '../composables/useCountUp'

interface Props {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

const props = defineProps<Props>()
const el = ref<HTMLElement | null>(null)

const { displayValue } = useCountUp(el, props.value)
</script>

<template>
  <div ref="el" class="text-center">
    <div class="text-[36px] sm:text-[48px] md:text-[60px] font-bold leading-none tracking-tight whitespace-nowrap">
      <span v-if="prefix" class="text-ink-primary">{{ prefix }}</span>
      <span class="bg-brand-gradient bg-clip-text text-transparent">{{ displayValue.toLocaleString('en-US') }}</span>
      <span v-if="suffix" class="bg-brand-gradient bg-clip-text text-transparent">{{ suffix }}</span>
    </div>
    <div class="mt-3 text-base text-ink-secondary">{{ label }}</div>
  </div>
</template>
