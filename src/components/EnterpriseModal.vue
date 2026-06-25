<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  emit('update:modelValue', false)
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    close()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        @click="onBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="modelValue"
            class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-4"
          >
            <!-- Content -->
            <div class="flex gap-4 items-stretch">
              <div class="w-28 shrink-0 rounded-xl overflow-hidden">
                <img
                  src="@/assets/kf.png"
                  alt="客服"
                  class="w-full h-40 object-cover"
                />
              </div>
              <div class="flex-1 flex flex-col gap-2 min-w-0">
                <p class="text-xs text-ink-secondary text-center leading-snug whitespace-nowrap">
                  有任何问题或需求，欢迎随时联系我们
                </p>
                <div class="rounded-xl overflow-hidden bg-surface-muted h-40 flex items-center justify-center">
                  <img
                    src="@/assets/lxwm.png"
                    alt="联系我们"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
