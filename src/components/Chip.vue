<script setup lang="ts">
interface Props {
  variant?: 'brand' | 'muted' | 'gold'
}

withDefaults(defineProps<Props>(), {
  variant: 'brand',
})
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
    :class="[
      variant === 'brand'
        ? 'bg-brand-soft text-brand-deep'
        : variant === 'gold'
        ? 'bg-gold/10 text-gold'
        : 'bg-surface-muted text-ink-secondary',
    ]"
  >
    <slot />
  </span>
</template>
