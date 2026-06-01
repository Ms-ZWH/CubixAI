<script setup lang="ts">
interface Props {
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  hover: false,
})

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <div
    class="relative bg-surface-card/80 backdrop-blur-xl rounded-2xl shadow-card border border-line/50 overflow-hidden"
    :class="[paddingMap[padding], hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1']"
  >
    <slot />
  </div>
</template>
