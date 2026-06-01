<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'
import CasesHero from '../sections/cases/CasesHero.vue'
import CasesCTA from '../sections/cases/CasesCTA.vue'
import BrandButton from '../components/BrandButton.vue'

const clientLogosRow1 = [
  'bjyz.png', 'chjh.png', 'dyck.png', 'gzlgxy.png', 'hjcm.png',
  'jy.png', 'lseg.png', 'mbkj.png', 'mjtq.png', 'pkz.png',
]

const clientLogosRow2 = [
  'qhdx.png', 'qmzx.png', 'wksgj.png', 'xnsd.png', 'zgc.png',
  'zgdx.png', 'zglt.png', 'zgyd.png', 'zjxx.png', 'zjzy.png',
]

function getLogoUrl(name: string) {
  return new URL(`../assets/kh/${name}`, import.meta.url).href
}

interface Metric {
  label: string
  value: string
}

interface CaseItem {
  id: string
  title: string
  client: string
  pain: string[]
  solution: string[]
  result?: string
  tag: string
  category: string
  icon: string
  metrics: Metric[]
}

interface Category {
  id: string
  label: string
}

const categories: Category[] = [
  { id: 'all', label: '全部' },
  { id: 'enterprise', label: '企业服务' },
  { id: 'opc', label: 'OPC产业生态' },
  { id: 'training', label: '培训' },
  { id: 'other', label: '其他' },
]

const cases: CaseItem[] = [
  {
    "id": "c1",
    "title": "认知增强心理智能体系统",
    "client": "清华大学 - AIRelief",
    "pain": [
      "心理咨询机构及非专业咨询师缺乏贴合工作流的AI助理方案"
    ],
    "solution": [
      "引入ChatU平台，打造AI认知增强心理智能体系统",
      "为心理咨询机构、个人准/非专业咨询师提供AI助理"
    ],
    "result": "构建面向个人来访者的心理智能体，提升心理咨询服务效率",
    "tag": "心理健康",
    "category": "enterprise",
    "icon": "lucide:brain",
    "metrics": [
      { "label": "服务对象", "value": "机构/非专业" },
      { "label": "核心功能", "value": "认知增强" }
    ]
  },
   {
    "id": "c6",
    "title": "社区级OPC生态模型",
    "client": "中关村AI北纬社区（北京·海淀）",
    "pain": [
      "社区缺乏统一的AI能力入口",
      "算力及AI工具使用门槛高",
      "单兵作战易形成信息孤岛"
    ],
    "solution": [
      "部署OPC Hub园区级AI能力系统",
      "提供统一AI能力入口，支撑多场AI主题沙龙与技术交流活动",
      "形成“社区 + 平台 + 企业”的轻量化OPC生态模型"
    ],
    "result": "验证了OPC在社区级载体中的可落地性",
    "tag": "产业园区",
    "category": "opc",
    "icon": "lucide:building2",
    "metrics": [
      { "label": "核心模式", "value": "社区+平台+企业" },
      { "label": "关键活动", "value": "AI沙龙/技术交流" }
    ]
  },
  {
    "id": "c7",
    "title": "产业园级OPC规模化落地",
    "client": "中关村（朝阳）AI Space产业园（北京·朝阳）",
    "pain": [
      "园区企业AI应用落地能力不足",
      "算力、平台、培训、活动缺乏闭环"
    ],
    "solution": [
      "支撑园区企业AI应用落地与能力提升",
      "打通“算力 + 平台 + 培训 + 活动”的完整闭环"
    ],
    "result": "显著提升园区在AI产业方向的承载能力，验证了OPC在产业园级别的规模化可行性",
    "tag": "产业园区",
    "category": "opc",
    "icon": "lucide:factory",
    "metrics": [
      { "label": "闭环要素", "value": "算力/平台/培训/活动" },
      { "label": "承载能力", "value": "显著提升" }
    ]
  },
  {
    "id": "c2",
    "title": "英语培训智能化问答",
    "client": "天天爱译",
    "pain": [
      "学员课后缺乏即时翻译、纠错、教学等互动服务"
    ],
    "solution": [
      "将ChatU配置到微信，为学员提供智能问答服务",
      "整合机器翻译、自然语言处理、语音合成与识别等技术"
    ],
    "result": "提供全面、准确、有趣的语言学习体验，提升教学响应效率",
    "tag": "教育",
    "category": "enterprise",
    "icon": "lucide:languages",
    "metrics": [
      { "label": "服务渠道", "value": "微信" },
      { "label": "功能覆盖", "value": "翻译/纠错/教学" }
    ]
  },
  {
    "id": "c3",
    "title": "AI科技博主全流程赋能",
    "client": "朋克周（AI前沿科技洞察者）",
    "pain": [
      "创作、优化、运营、互动等全流程效率有待提升"
    ],
    "solution": [
      "引入ChatU AI应用平台，覆盖创作、优化、运营、互动全流程"
    ],
    "result": "全面提升影响力与传播效果",
    "tag": "内容创作",
    "category": "enterprise",
    "icon": "lucide:sparkles",
    "metrics": [
      { "label": "赋能环节", "value": "全流程赋能" },
      { "label": "效果", "value": "提升传播" }
    ]
  },
  {
    "id": "c4",
    "title": "种业智能体平台",
    "client": "百奥云",
    "pain": [
      "育种研究中数据查询、特征分析、知识问答流程繁琐"
    ],
    "solution": [
      "基于ChatU智能体平台构建多个种业智能体",
      "包括：水稻品种表型-基因型查询智能体、玉米审定品种表型分析智能体、BAISeeds平台智能问答"
    ],
    "result": "实现数据查询到知识问答的全流程智能化支持，大幅提升育种研究效率，加速新品种研发进程",
    "tag": "农业科技",
    "category": "enterprise",
    "icon": "lucide:leaf",
    "metrics": [
      { "label": "覆盖场景", "value": "查询/分析/问答" },
      { "label": "育种效率", "value": "大幅提升" }
    ]
  },
  {
    "id": "c5",
    "title": "大型央企办公智能化升级",
    "client": "中移系统集成有限公司",
    "pain": [
      "标书撰写耗时费力、易出错",
      "文档制作重复性高、格式固定，成本高",
      "日常办公事务处理依赖人工，效率低"
    ],
    "solution": [
      "引入ChatU平台，通过语言处理能力和行业知识库快速生成标书",
      "智能制作重复性、格式固定的文档",
      "自动化处理任务分配、跟踪等日常办公事务"
    ],
    "result": "实现降本增效目标，标书撰写、文档制作、日常办公效率显著提升",
    "tag": "央企办公",
    "category": "enterprise",
    "icon": "lucide:building",
    "metrics": [
      { "label": "标书撰写", "value": "缩短周期" },
      { "label": "文档制作", "value": "成本降低" },
      { "label": "办公效率", "value": "效率提升" }
    ]
  },
   {
    "id": "c8",
    "title": "政务社群+AI智能体",
    "client": "上海虹桥企政通（覆盖6个街镇）",
    "pain": [
      "统一大市场后禁止税收返还招商，需转向营商环境与政策性服务",
      "政务服务触达路径长、用户学习成本高"
    ],
    "solution": [
      "基于微信与ChatU平台开发，AI智能体测试完成后10分钟部署上线",
      "入口置于微信首页，用户零学习成本使用",
      "获企微官方接口授权，安全稳定",
      "根据用户画像自动匹配智能体和社群，实现千人千面"
    ],
    "result": "已在上海虹桥6个街镇、北京大兴20个街镇等地落地",
    "tag": "政务服务",
    "category": "enterprise",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  },
   {
    "id": "c9",
    "title": "政务社群+AI智能体",
    "client": "亦庄企业",
    "pain": [
      "统一大市场后禁止税收返还招商，需转向营商环境与政策性服务",
      "政务服务触达路径长、用户学习成本高"
    ],
    "solution": [
      "基于微信与ChatU平台开发，AI智能体测试完成后10分钟部署上线",
      "入口置于微信首页，用户零学习成本使用",
      "获企微官方接口授权，安全稳定",
      "根据用户画像自动匹配智能体和社群，实现千人千面"
    ],
    "result": "已在上海虹桥6个街镇、北京大兴20个街镇等地落地",
    "tag": "政务服务",
    "category": "training",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  },
   {
    "id": "c9",
    "title": "政务社群+AI智能体",
    "client": "云南大学",
    "pain": [
      "统一大市场后禁止税收返还招商，需转向营商环境与政策性服务",
      "政务服务触达路径长、用户学习成本高"
    ],
    "solution": [
      "基于微信与ChatU平台开发，AI智能体测试完成后10分钟部署上线",
      "入口置于微信首页，用户零学习成本使用",
      "获企微官方接口授权，安全稳定",
      "根据用户画像自动匹配智能体和社群，实现千人千面"
    ],
    "result": "已在上海虹桥6个街镇、北京大兴20个街镇等地落地",
    "tag": "政务服务",
    "category": "training",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  },
  
   {
    "id": "c9",
    "title": "政务社群+AI智能体",
    "client": "路幅特",
    "pain": [
      "统一大市场后禁止税收返还招商，需转向营商环境与政策性服务",
      "政务服务触达路径长、用户学习成本高"
    ],
    "solution": [
      "基于微信与ChatU平台开发，AI智能体测试完成后10分钟部署上线",
      "入口置于微信首页，用户零学习成本使用",
      "获企微官方接口授权，安全稳定",
      "根据用户画像自动匹配智能体和社群，实现千人千面"
    ],
    "result": "已在上海虹桥6个街镇、北京大兴20个街镇等地落地",
    "tag": "政务服务",
    "category": "training",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  }
]

const activeCat = ref('all')
const selectedCase = ref<CaseItem | null>(null)
const isModalOpen = ref(false)

const filteredCases = computed(() => {
  if (activeCat.value === 'all') return cases
  return cases.filter((c) => c.category === activeCat.value)
})

function switchCategory(id: string) {
  activeCat.value = id
}

function openModal(c: CaseItem) {
  selectedCase.value = c
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    gsap.fromTo(
      '.case-modal-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.2 }
    )
    gsap.fromTo(
      '.case-modal-content',
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, delay: 0.05, ease: 'power2.out' }
    )
  })
}

function closeModal() {
  gsap.to('.case-modal-content', {
    opacity: 0,
    scale: 0.95,
    y: 10,
    duration: 0.2,
    ease: 'power2.in',
  })
  gsap.to('.case-modal-overlay', {
    opacity: 0,
    duration: 0.25,
    delay: 0.1,
    onComplete: () => {
      isModalOpen.value = false
      selectedCase.value = null
      document.body.style.overflow = ''
    },
  })
}

watch(filteredCases, () => {
  nextTick(() => {
    gsap.fromTo(
      '.case-card',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out' }
    )
  })
})

// 初始动画
nextTick(() => {
  gsap.fromTo(
    '.case-card',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
  )
})
</script>

<template>
  <div class="min-h-screen bg-surface-base">
    <CasesHero />

    <!-- Tab -->
    <div class="sticky top-16 md:top-20 z-40 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center gap-2 overflow-x-auto" style="scrollbar-width: none;">
          <button
            v-for="item in categories"
            :key="item.id"
            class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
            :class="activeCat === item.id ? 'bg-brand text-white shadow-sm' : 'bg-[#F3F5F2] text-ink-secondary hover:text-ink-primary'"
            @click="switchCategory(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Case Cards -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8">
          <div
            v-for="c in filteredCases"
            :key="c.id"
            class="case-card rounded-3xl overflow-hidden bg-white shadow-card border border-line/50 flex flex-col lg:flex-row"
          >
            <!-- Left: Text (60%) -->
            <div class="w-full lg:w-[60%] p-6 md:p-10 flex flex-col justify-center">
              <!-- Category Label -->
              <div class="mb-3">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === c.category)?.label }}
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-2xl md:text-[28px] font-bold text-ink-primary leading-tight"
              >
                {{ c.client }}
              </h2>

              <!-- Metrics -->
              <div class="flex flex-wrap gap-6 md:gap-10 mt-6">
                <div v-for="m in c.metrics" :key="m.label">
                  <div
                    class="text-2xl md:text-3xl font-bold text-brand tracking-tight"
                  >
                    {{ m.value }}
                  </div>
                  <div class="text-sm text-ink-secondary mt-1">
                    {{ m.label }}
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="mt-8">
                <BrandButton size="sm" @click="openModal(c)">
                  案例详情
                </BrandButton>
              </div>
            </div>

            <!-- Right: Visual (40%) with clip-path -->
            <div
              class="relative w-full lg:w-[40%] min-h-[200px] lg:min-h-[320px] overflow-hidden"
              :style="{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }"
              :class="
                'lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]'
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-deep"
              />
              <div
                class="absolute inset-0 opacity-20"
                style="
                  background: radial-gradient(
                    circle at 30% 30%,
                    rgba(255, 255, 255, 0.3),
                    transparent 60%
                  );
                "
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon
                  :icon="c.icon"
                  class="w-24 h-24 text-white/25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Modal -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="case-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        style="background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px)"
        @click.self="closeModal"
      >
        <div
          class="case-modal-content bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <!-- Header -->
          <div
            class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-line/50 px-6 md:px-8 py-5 flex items-start justify-between gap-4"
          >
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === selectedCase?.category)?.label }}
                </span>
                <span class="text-xs text-ink-tertiary">
                  {{ selectedCase?.client }}
                </span>
              </div>
              <h3
                class="text-xl md:text-2xl font-bold text-ink-primary leading-tight"
              >
                {{ selectedCase?.title }}
              </h3>
            </div>
            <button
              class="shrink-0 w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-surface-hover transition-colors"
              @click="closeModal"
            >
              <Icon icon="lucide:x" class="w-5 h-5" />
            </button>
          </div>

          <!-- Body -->
          <div class="px-6 md:px-8 py-6 space-y-6">
            <!-- 客户背景 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-bold text-ink-primary mb-3"
              >
                <Icon icon="lucide:building" class="w-4 h-4 text-brand" />
                客户背景
              </h4>
              <p class="text-base text-ink-secondary leading-relaxed">
                {{ selectedCase?.client }}
              </p>
            </div>

            <!-- 核心痛点 -->
            <div
              class="rounded-2xl bg-[#FEF2F2] border border-[#FECACA] p-5 md:p-6"
            >
              <h4
                class="flex items-center gap-2 text-sm font-bold text-[#991B1B] mb-4"
              >
                <Icon icon="lucide:alert-circle" class="w-4 h-4" />
                核心痛点
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(p, idx) in selectedCase?.pain"
                  :key="idx"
                  class="text-sm md:text-base text-[#7F1D1D] leading-relaxed flex items-start gap-2.5"
                >
                  <span
                    class="mt-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"
                  />
                  {{ p }}
                </li>
              </ul>
            </div>

            <!-- 方案细节 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-bold text-brand mb-4"
              >
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                方案细节
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(s, idx) in selectedCase?.solution"
                  :key="idx"
                  class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
                >
                  <Icon
                    icon="lucide:check"
                    class="w-5 h-5 text-brand shrink-0 mt-0.5"
                  />
                  {{ s }}
                </li>
              </ul>
            </div>

            <!-- 成效 -->
            <div
              v-if="selectedCase?.result"
              class="rounded-xl bg-brand-soft border border-brand/20 p-4 md:p-5"
            >
              <p class="text-sm md:text-base font-semibold text-brand">
                <span class="inline-flex items-center gap-2">
                  <Icon icon="lucide:trending-up" class="w-4 h-4" />
                  成效：
                </span>
                {{ selectedCase.result }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 签约客户 -->
    <section class="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">
            签约客户
          </h2>
          <p class="mt-3 text-base text-ink-secondary">
            他们都在使用软积木的产品与服务
          </p>
        </div>
      </div>

      <!-- Marquee Row 1 -->
      <div class="relative w-full mb-10 md:mb-12">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track">
          <div
            v-for="logo in clientLogosRow1"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="h-5 md:h-7 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow1"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="h-5 md:h-7 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Marquee Row 2 (reverse) -->
      <div class="relative w-full">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track-reverse">
          <div
            v-for="logo in clientLogosRow2"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="h-5 md:h-7 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow2"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="h-5 md:h-7 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CasesCTA />
  </div>
</template>

<style scoped>
@keyframes cases-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes cases-marquee-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.cases-marquee-track {
  animation: cases-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cases-marquee-track-reverse {
  animation: cases-marquee-scroll-reverse 40s linear infinite;
  width: max-content;
}

.cases-marquee-track:hover,
.cases-marquee-track-reverse:hover {
  animation-play-state: paused;
}
</style>
