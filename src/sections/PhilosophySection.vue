<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import BrandButton from '../components/BrandButton.vue'

const { t } = useI18n()
const titleRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

const cases = [
  {
    icon: 'lucide:server',
    name: '电信 / 运营商',
    tags: ['技术密集', '文档繁杂', '标书众多', '流程规范', '高合规要求'],
    pain: '缩短标书撰写周期，统一文档规范，释放技术人员行政事务压力。',
    cpsm: '基于ChatU快速生成技术标书、方案建议书和故障处理报告；与内部OA、项目管理工具打通，实现文档自动归集、版本比对和任务分发；为一线技术工程师提供知识库问答助手。',
  },
  {
    icon: 'lucide:building-2',
    name: 'OPC产业园区 / 孵化器',
    tags: ['园区数字化升级', 'AI算力降本', '轻资产创业', '一站式AI赋能'],
    pain: '帮助园区摆脱单一收租模式，解决企业与个人算力成本高、AI工具获取难、单兵信息孤岛与孤独感问题，整合政策资源构建差异化AI生态，降低企业及个人AI使用与创业门槛。',
    cpsm: 'OPC Hub面向产业园区、孵化器及个体创业者统一部署AI底座与算力调度，提供私有化部署、一站式AI工具链与社群运营协作网络，大幅降低园区企业、独立创作者及小微创业者的算力使用与AI创业门槛。',
  },
  {
    icon: 'lucide:building-2',
    name: '政府 / 央国企',
    tags: ['财务合规提效', '内部运营自动化', '国资安全合规', '数据本地化可控'],
    pain: '解决企业财务录入繁琐、办公运营低效、数据协同困难等问题，同时满足国企数据安全、国产化适配与合规审计要求，大幅降低人工成本、提升办公与决策效率。',
    cpsm: 'ChatU 面向通用企业，轻量化落地票据 OCR、财务审核、文档生成、多源数据分析；智方体 AgentStation 本地私有化部署服务国企涉密场景，适配国产化，实现公文、政策问答、报表、审计留痕，覆盖市场化提效与国资安全合规需求。',
  },
{
  "icon": "lucide:graduation-cap",
  "name": "高校 / 培训机构",
    tags: ['高校 AI 实训', '实战赋能就业','个性化教学', '效率提升'],
  "pain": "院校AI教学重理论缺实操，师资算力成本高；教师备课答疑重复工作量大，学生缺少全天候个性化辅导。",
  "cpsm": "依托ChatU搭建智能助教，自动生成教案习题、智能批改答疑，减轻教师负担；配套分层AI实战课程与企业项目实训，提供学员能力认证，提升就业竞争力。"
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
          {{ t('home.philosophy.title') }}
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
                {{ t('common.productScheme') }}
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.cpsm }}</p>
            </div>

            <!-- 解决痛点 -->
            <div class="mt-4 p-4 md:p-5 rounded-2xl bg-surface-muted/60 border border-line/50">
              <h4 class="text-sm font-semibold text-ink-primary mb-2 flex items-center gap-2">
                <Icon icon="lucide:lightbulb" class="w-4 h-4 text-brand" />
                {{ t('common.solvePainPoints') }}
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.pain }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <BrandButton variant="ghost" to="/solutions" arrow>
          {{ t('home.philosophy.cta') }}
        </BrandButton>
      </div>
    </div>
  </section>
</template>
