<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const activeTab = ref(2)

const tabs = [
  {
    label: 'VS 普通 AI 工具',
    rows: [
      { dim: '运行依赖', us: '本地+云端混合，自带电池', them: '断网即失效' },
      { dim: '数据安全', us: '物理级隔离', them: '云端隐私风险' },
      { dim: '使用成本', us: '按量计费无捆绑', them: '年费捆绑不可控' },
      { dim: '执行过程', us: '实时可视化监控', them: '黑盒运行' },
    ],
  },
  {
    label: 'VS 同类 AI 盒子',
    rows: [
      { dim: '屏幕交互', us: '自带触控屏+触控笔', them: '通常无屏' },
      { dim: '操作系统', us: 'ChatU Mate 专属系统', them: '需自行刷写' },
      { dim: '软件生态', us: '预置原生 Agent+Skills', them: '需自行安装' },
      { dim: '上手体验', us: '开箱即用 · 小白友好', them: '极客专属' },
    ],
  },
  {
    label: 'VS 手动安装 OpenClaw',
    rows: [
      { dim: '安装耗时', us: '长按 2 秒开机', them: '数小时–数天' },
      { dim: '技术门槛', us: '0 基础', them: '需技术基础' },
      { dim: '维护成本', us: '自动无感升级', them: '手动频繁出错' },
      { dim: '数据安全', us: '本地物理隔离', them: '无防护有后门' },
      { dim: '使用体验', us: '可视化执行 · 可查可控', them: '黑盒无监控' },
      { dim: '技术支持', us: '官方售后全链路', them: '无官方支持' },
    ],
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          为什么选择智方体？
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          同价位、同需求下的对比
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="(tab, i) in tabs"
          :key="tab.label"
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          :class="
            activeTab === i
              ? 'bg-[#2DB4E6] text-white'
              : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
          "
          @click="activeTab = i"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Table -->
      <div
        class="rounded-2xl bg-surface-card border border-line shadow-card overflow-hidden"
      >
        <div
          v-for="(row, idx) in tabs[activeTab].rows"
          :key="row.dim"
          class="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] border-b border-line last:border-b-0"
          :class="idx % 2 === 0 ? 'bg-surface-card' : 'bg-surface-muted/50'"
        >
          <div class="px-6 py-4 flex items-center">
            <span
              class="px-3 py-1 rounded-full bg-[#E6F5FB] text-[#2DB4E6] text-xs font-semibold"
            >
              {{ row.dim }}
            </span>
          </div>
          <div
            class="px-6 py-4 flex items-center gap-2 text-sm font-semibold text-[#2DB4E6] border-l-2 border-[#2DB4E6]"
          >
            <Icon icon="lucide:check" class="w-4 h-4 shrink-0" />
            {{ row.us }}
          </div>
          <div
            class="px-6 py-4 flex items-center gap-2 text-sm text-ink-tertiary"
          >
            <Icon icon="lucide:x" class="w-4 h-4 shrink-0" />
            {{ row.them }}
          </div>
        </div>
      </div>

      <!-- 底部大字 -->
      <div class="mt-10 text-center">
        <p class="text-2xl md:text-[32px] font-semibold text-[#2DB4E6]">
          省心、省时、省力、安全 — 这就是智方体
        </p>
      </div>
    </div>
  </section>
</template>
