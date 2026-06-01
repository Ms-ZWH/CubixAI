<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'


const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const versions = [
  {
    name: '旗舰版',
    icon: 'lucide:rocket',
    badge: '企业级 AI 操作系统',
    desc: '开箱即用，可大幅度降低企业的 AI 转型成本',
    target: '中型腰部企业',
    features: [
      '核心能力：多模型、灵活付费、一键接入',
      '无需下载安装，简单配置即可使用，支持灵活拓展',
    ],
  },
  {
    name: '教培版',
    icon: 'lucide:graduation-cap',
    badge: 'AI 教育实训平台',
    desc: '完善的培训服务与课程体系，培养 AI 全面人才',
    target: '学校或培训机构',
    features: [
      '核心角色：学员、教师、机构',
      '精准定位教育行业，提升整体教育管理水平',
    ],
  },
  {
    name: 'OPC 平台版',
    icon: 'lucide:layout-grid',
    badge: 'OPC 创业的 AI 基础设施',
    desc: '帮园区提高入驻企业成功率，帮 OPC 把一人公司真正跑起来',
    target: '产业园区与 OPC 创业者',
    features: [
      '核心能力：园区运营的智能中枢、OPC 能力的放大器、可落地的业务支撑平台',
    ],
  },
  {
    name: '物联网版',
    icon: 'lucide:cpu',
    badge: '从 "联网" 到 "智能协同"',
    desc: '让智能硬件 "真正聪明"，实现从 "自可控" 到 "自决策"',
    target: 'IoT 或智能硬件企业',
    features: [
      '核心能力：智能决策、智能硬件、多模态交互',
      '让每台设备都能拥有智能决策与多模态交互能力',
    ],
  },
  {
    name: '集团版',
    icon: 'lucide:building-2',
    badge: '总控 + 中控协同管理平台',
    desc: '优化本地算力资源，实现私有数据的高效整合与应用',
    target: '大型集团或科技园区',
    features: [
      '核心能力：系统部署、模型训练、数据训练',
      '有效管控下属多个子公司，统一指挥调度，为管理者提供实时决策支持',
    ],
  },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          5 大版本矩阵
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          覆盖企业、教育、集团、创业、物联网全场景
        </p>
      </div>

      <div
        ref="cardsRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="v in versions"
          :key="v.name"
          class="flex flex-col p-5 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[#433487]/10 flex items-center justify-center shrink-0">
              <Icon :icon="v.icon" class="w-4 h-4 text-[#433487]" />
            </div>
            <span class="text-sm font-bold text-[#433487]">
              {{ v.name }}
            </span>
          </div>
          <span class="mt-1 text-sm font-medium text-ink-primary">
            {{ v.badge }}
          </span>
          <span class="mt-1 text-xs text-ink-secondary leading-relaxed">{{ v.desc }}</span>

          <div class="mt-2 inline-flex self-start px-2 py-0.5 rounded-full bg-[#433487]/5 text-xs text-[#433487] font-medium">
            面向：{{ v.target }}
          </div>

          <ul class="mt-3 space-y-1.5 flex-1">
            <li
              v-for="f in v.features"
              :key="f"
              class="text-xs text-ink-secondary leading-relaxed flex items-start gap-1.5"
            >
              <span class="text-[#433487] shrink-0">·</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <!-- <div class="mt-4 pt-3 border-t border-line/50">
            <BrandButton variant="ghost" size="sm" to="/contact" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              了解详情
            </BrandButton>
          </div> -->
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-ink-secondary">
        全部版本均支持私有化部署
      </p>
    </div>
  </section>
</template>
