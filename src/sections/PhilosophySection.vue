<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import BrandButton from '../components/BrandButton.vue'

const titleRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

const cases = [
  {
    icon: 'lucide:server',
    name: '通信 / 运营商',
    tags: ['技术密集', '文档繁杂', '标书众多', '流程规范', '高合规要求'],
    pain: '缩短标书撰写周期，统一文档规范，释放技术人员行政事务压力。',
    cpsm: '基于ChatU快速生成技术标书、方案建议书和故障处理报告；与内部OA、项目管理工具打通，实现文档自动归集、版本比对和任务分发；为一线技术工程师提供知识库问答助手。',
  },
  {
    icon: 'lucide:building-2',
    name: '科创孵化',
    tags: ['空间载体依赖', '招商引资驱动', '政策资源整合', '企业服务密集', 'AI技术赋能需求强烈'],
    pain: '帮助园区摆脱单一收租模式，降低算力成本，构建差异化AI生态。',
    cpsm: 'OPC Hub为园区统一部署AI底座与算力调度，降低企业使用门槛，支持私有化部署与社群运营。',
  },
  {
    icon: 'lucide:landmark',
    name: '国有企业',
    tags: ['数据主权', '物理隔离', '国产化适配', '合规审计', '公文规范'],
    pain: '消除公有云 AI 的数据外泄风险，将公文、纪要等重复事务处理效率提升 80% 以上，确保全程合规可审计。',
    cpsm: '基于智方体·AgentStation 本地私有化部署，数据不出盒。内置智能体支持公文起草、纪要整理、政策问答；全程留痕可追溯，满足政务合规与国产化适配要求。',
  },
{
  "icon": "lucide:graduation-cap",
  "name": "企业培训",
  "tags": ["课程管理", "学习路径", "效果评估", "合规培训", "知识沉淀"],
  "pain": "消除培训资源分散、课程重复开发、学习效果难以量化等难题，将课程组织与学习评估效率提升80%以上。",
  "cpsm": "支持本地化或云端部署，数据安全可控。内置咨询培训引擎提供需求诊断、课程定制、培训实施与效果评估全流程支持；全程留痕可追溯，满足企业内训合规与个性化学习需求。"
}
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          解决方案
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div
          v-for="item in cases"
          :key="item.name"
          class="h-full"
        >
          <div
            class="h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white border border-line/50 shadow-card hover:shadow-lg hover:-translate-y-1 hover:border-brand/20 transition-all duration-300"
          >
            <!-- Icon + Name -->
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0"
              >
                <Icon :icon="item.icon" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="text-xl md:text-2xl font-semibold text-ink-primary">
                {{ item.name }}
              </h3>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-full text-xs font-medium border border-brand/25 text-brand bg-brand-soft/60"
              >
                {{ tag }}
              </span>
            </div>

            <!-- 产品方案 -->
            <div class="mt-6 p-4 md:p-5 rounded-2xl bg-brand-soft/40 border border-brand/10">
              <h4 class="text-sm font-semibold text-ink-primary mb-2 flex items-center gap-2">
                <Icon icon="lucide:briefcase" class="w-4 h-4 text-brand" />
                产品方案
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.cpsm }}</p>
            </div>

            <!-- 解决痛点 -->
            <div class="mt-4 p-4 md:p-5 rounded-2xl bg-surface-muted/60 border border-line/50">
              <h4 class="text-sm font-semibold text-ink-primary mb-2 flex items-center gap-2">
                <Icon icon="lucide:lightbulb" class="w-4 h-4 text-brand" />
                解决痛点
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.pain }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <BrandButton variant="ghost" to="/solutions" arrow>
          查看全部行业解决方案
        </BrandButton>
      </div>
    </div>
  </section>
</template>
