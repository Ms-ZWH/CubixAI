<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import BrandButton from '../components/BrandButton.vue'

const titleRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

const cases = [
  {
    icon: 'lucide:radio-tower',
    name: '电信运营商',
    scope: '智能运维平台',
    highlight: '故障响应效率提升 71%',
    desc: '每天面对 200 亿条日志，过去工程师平均要花 45 分钟才能揪出故障根源。现在借助智能分析，故障定位缩短到 13 分钟，运维工单减少了近七成，系统判断准确率达到 92%。',
    stats: [
      { value: '71%', label: '故障响应提速' },
      { value: '13min', label: '故障定位时间' },
      { value: '65%', label: '运维工单减少' },
      { value: '92%', label: '系统判断准确率' },
    ],
  },
  {
    icon: 'lucide:graduation-cap',
    name: '985 院校',
    scope: '科研智能助手平台',
    highlight: '文献综述效率提升 5 倍',
    desc: '研究团队每周要花费 15 小时在文献检索和数据比对上，占用了大量核心科研时间。现在借助智能助手，文献处理时间从 15 小时压缩到 2.5 小时，调研周期从 3 周缩短到 5 天，文献理解偏差也大幅降低。',
    stats: [
      { value: '5×', label: '文献处理效率提升' },
      { value: '2.5h', label: '文献处理耗时' },
      { value: '5天', label: '调研周期' },
      { value: '78%', label: '理解偏差降低' },
    ],
  },
  {
    icon: 'lucide:video',
    name: '自媒体',
    scope: '内容创作全流程助手',
    highlight: '内容生产效率提升 3 倍',
    desc: '过去做一条内容要 6 小时，追不上热点迭代的节奏。现在从热点捕捉、脚本撰写到成片输出，全流程都有助手辅助，还能自动回复评论、根据粉丝反馈持续优化风格。生产效率翻了 3 倍，粉丝互动增长 150%，累计产出超过 600 条作品。',
    stats: [
      { value: '300%', label: '生产效率提升' },
      { value: '150%', label: '粉丝互动增长' },
      { value: '600+', label: '累计作品数' },
    ],
  },
  {
    icon: 'lucide:building-2',
    name: '产业园区',
    scope: '园区 AI 能力中枢',
    highlight: '园区项目落地速度提升 40%',
    desc: '园区内不少企业想用 AI，却不知道从哪里入手、该选什么工具。我们为园区搭建了一套统一的能力平台，企业按需调用即可，无需自己从零搭建。创新产出提升 35%，项目落地周期缩短 40%，这套模式已在朝阳 AI Space、上海 KUPAS、苏州 CCF 等多个园区成功落地。',
    stats: [
      { value: '40%', label: '项目落地周期缩短' },
      { value: '35%', label: '创新产出提升' },
    ],
  },
]

const scroll = (direction: number) => {
  if (!scrollRef.value) return
  const card = scrollRef.value.children[0] as HTMLElement
  const gap = 24
  const step = (card?.offsetWidth || 380) + gap
  scrollRef.value.scrollBy({ left: direction * step, behavior: 'smooth' })
}
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

      <!-- Carousel -->
      <div class="relative">
        <!-- Scroll container -->
        <div
          ref="scrollRef"
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="item in cases"
            :key="item.name"
            class="snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div
              class="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-white border border-line/50 hover:shadow-card hover:border-brand/20 transition-all duration-300"
            >
              <!-- Icon + Name -->
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center shrink-0"
                >
                  <Icon :icon="item.icon" class="w-5 h-5 text-brand" />
                </div>
                <h3 class="text-lg font-semibold text-ink-primary">
                  {{ item.name }}
                </h3>
              </div>

              <!-- Scope -->
              <div class="mt-3 text-sm font-medium text-brand">
                {{ item.scope }}
              </div>

              <!-- Highlight -->
              <div class="mt-2 text-ink-primary font-semibold">
                {{ item.highlight }}
              </div>

              <!-- Description -->
              <p class="mt-4 text-sm text-ink-secondary leading-relaxed flex-1">
                {{ item.desc }}
              </p>

              <!-- Stats -->
              <div class="mt-6 grid grid-cols-2 gap-3">
                <div
                  v-for="s in item.stats"
                  :key="s.label"
                  class="rounded-xl bg-surface-muted border border-line/50 p-3"
                >
                  <div class="text-lg font-bold text-brand">{{ s.value }}</div>
                  <div class="text-xs text-ink-tertiary mt-0.5">{{ s.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Arrows (desktop only) -->
        <button
          class="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-ink-primary backdrop-blur-sm transition-colors z-10"
          @click="scroll(-1)"
          aria-label="向左滚动"
        >
          <Icon icon="lucide:chevron-left" class="w-5 h-5" />
        </button>
        <button
          class="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-ink-primary backdrop-blur-sm transition-colors z-10"
          @click="scroll(1)"
          aria-label="向右滚动"
        >
          <Icon icon="lucide:chevron-right" class="w-5 h-5" />
        </button>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <BrandButton variant="ghost" to="/solutions" arrow>
          了解更多……
        </BrandButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}
</style>
