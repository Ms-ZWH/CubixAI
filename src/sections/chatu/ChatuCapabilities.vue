<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const items = [
  { icon: 'lucide:git-branch', title: '多智能体调度', desc: '跨模型协作' },
  { icon: 'lucide:file-text', title: '文本生成创作', desc: '方案/营销/代码/广告' },
  { icon: 'lucide:languages', title: '多语种互译', desc: '100+ 语种' },
  { icon: 'lucide:list-filter', title: '文本分类', desc: '摘要 · 改写' },
  { icon: 'lucide:image', title: '多模态交互', desc: '图/文/音/视频' },
  { icon: 'lucide:video', title: '文生视频/音乐', desc: 'AIGC 创作' },
  { icon: 'lucide:book-open', title: '阅读理解', desc: '文件分析' },
  { icon: 'lucide:brain', title: '逻辑推理', desc: '复杂任务分解' },
  { icon: 'lucide:database', title: '知识问答', desc: '企业知识库' },
  { icon: 'lucide:code-2', title: '语法分析', desc: '代码生成' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          10 大 AI 能力矩阵
        </h2>
      </div>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col items-center text-center p-5 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-10 h-10 rounded-xl bg-[#433487]/10 flex items-center justify-center mb-3"
          >
            <Icon :icon="item.icon" class="w-5 h-5 text-[#433487]" />
          </div>
          <span class="text-sm font-semibold text-ink-primary">{{ item.title }}</span>
          <span class="text-xs text-ink-secondary mt-1">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
