<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const activeRole = ref(0)
const roles = ['专家', '学者', '教师']

const features = [
  '24 小时不间断服务',
  '智能化交互与生成',
  '高度适配性与灵活性',
  '推动行业数字化转型',
]

const tags = ['构建智能对话', '文字互动问答', '语音互动问答']
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- 左：形象占位 + 切换 -->
        <div ref="leftRef">
          <div
            class="aspect-[3/4] max-w-sm mx-auto rounded-2xl bg-surface-muted border border-line shadow-card overflow-hidden flex items-center justify-center relative"
          >
            <span class="text-ink-tertiary text-sm">
              TODO: {{ roles[activeRole] }}数字人形象占位
            </span>
          </div>
          <!-- <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(role, i) in roles"
              :key="role"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
              :class="
                activeRole === i
                  ? 'bg-[#433487] text-white'
                  : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
              "
              @click="activeRole = i"
            >
              {{ role }}
            </button> </div> -->
        </div>

        <!-- 右：文字 -->
        <div ref="rightRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            虚拟数字人 · AI 世界的交互媒介
          </h2>
          <p class="mt-4 text-lg text-ink-secondary leading-relaxed">
            通过智能化交互与生成能力，优化生产要素组合。
          </p>

          <div class="grid grid-cols-2 gap-3 mt-8">
            <div
              v-for="f in features"
              :key="f"
              class="p-4 rounded-xl bg-surface-card border border-line/50"
            >
              <span class="text-sm font-medium text-ink-primary">{{ f }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-8">
            <Chip v-for="tag in tags" :key="tag" variant="muted">
              {{ tag }}
            </Chip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
