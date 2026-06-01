<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import IndustryNav from '../components/IndustryNav.vue'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)
useScrollReveal(heroRef, { y: 30 })

interface Solution {
  id: string
  title: string
  subtitle: string
  tags: string[]
  scenes: string[]
  pain: string
  icon: string
  url?: string
}

const solutions: Solution[] = [
  {
    id: 'gov',
    title: '央企/国企/政务办公',
    subtitle: 'Government & Enterprise',
    tags: ['私有化部署', '三级权限管理', '多模型切换', 'Token 管控'],
    scenes: ['公文起草', '会议纪要生成', '跨部门文档翻译', '数据报表自动化', '内网知识库检索'],
    pain: '政务及大型企业对数据安全与合规性要求极高，跨部门协同效率低、重复性文书工作繁重。',
    icon: 'lucide:landmark',
    url:'@/assets/jjfa/yq.png',
  },
  {
    id: 'park',
    title: 'OPC科技园区/OPC 生态',
    subtitle: 'Tech Park & OPC',
    tags: ['算力中台', '模型管理平台', '全流程陪跑', '产业共建'],
    scenes: ['AI 基础设施建设', '入驻企业 AI 赋能', '创业者产品孵化', '行业场景共建'],
    pain: '初创企业想用 AI 但没算力、没技术、没场景，园区产业集群化升级周期长。',
    icon: 'lucide:building-2',
    url:'@/assets/jjfa/opc.png',
  },
  {
    id: 'edu',
    title: '高校与科研机构',
    subtitle: 'Education & Research',
    tags: ['多模态推理', '学术知识库', '论文润色', '24h 咨询'],
    scenes: ['学术资料检索', '科研论文润色', '校园生活咨询', '心理咨询初筛'],
    pain: '科研人员在资料搜集与初级分析上耗时巨大，高校咨询服务无法全天候覆盖、人力成本高。',
    icon: 'lucide:graduation-cap',
    url:'@/assets/jjfa/gx.png',
  },
  {
    id: 'training',
    title: '教育培训/在线教育',
    subtitle: 'Online Education',
    tags: ['教务智能管理', 'AI 语音助手', '多模态教案', '口语对练'],
    scenes: ['智能排课', 'AI 助教口语对练', '教案自动化编写', '少儿双语互动教学'],
    pain: '教务排课繁琐、教案更新迭代慢，在线教育场景下学员互动感与个性化学习体验不足。',
    icon: 'lucide:book-open',
    url:'@/assets/jjfa/px.png',
  },
  {
    id: 'media',
    title: '内容创作/自媒体',
    subtitle: 'Content Creation',
    tags: ['热点监控', '内容矩阵', '一键分发', '自动互动'],
    scenes: ['爆点选题筛选', '文章与脚本创作', '粉丝互动自动回复', '创作数据看板'],
    pain: '创作者灵感枯竭、内容产出频率低，多平台运营的人工分发与互动成本高昂。',
    icon: 'lucide:video',
    url:'@/assets/jjfa/nr.png',
  },
  {
    id: 'finance',
    title: '金融/保险/资产管理',
    subtitle: 'Finance & Insurance',
    tags: ['高精度 OCR', '风控建模', '单据自动化', '智能推荐'],
    scenes: ['票据与定损识别', '理赔风险评估', '金融数据实时预警', '个性化续保方案'],
    pain: '理赔流程中人工审核周期长、易出错，反欺诈能力与客户服务精准度有待提升。',
    icon: 'lucide:shield-check',
    url:'@/assets/jjfa/jr.png',
  },
  {
    id: 'health',
    title: '医疗健康',
    subtitle: 'Healthcare',
    tags: ['影像辅助分析', '病历摘要提取', '隐私脱敏', '导诊机器人'],
    scenes: ['检验单信息提取', '疑似病灶辅助标注', '住院/出院报告生成', '导诊机器人'],
    pain: '临床医生病历文书压力大，人为疏忽导致的漏诊风险与患者等待报告时间长。',
    icon: 'lucide:heart-pulse',
    url:'@/assets/jjfa/yl.png',
  },
  {
    id: 'ecommerce',
    title: '电商与零售',
    subtitle: 'E-commerce & Retail',
    tags: ['多轮对话', '情绪感知', '自动化售后', '智能导购'],
    scenes: ['智能售前咨询', '物流/退换货自动化', '负面情绪实时监测', '个性化补偿触发'],
    pain: '高峰期人工客服响应不及时、准确率低，人力运营成本居高不下。',
    icon: 'lucide:shopping-cart',
    url:'@/assets/jjfa/ds.png',
  },
]

const activeIndex = ref(0)
const containerRef = ref<HTMLElement | null>(null)
let triggers: ScrollTrigger[] = []

function scrollToSection(index: number) {
  const sections = containerRef.value?.querySelectorAll('.solution-screen')
  if (sections?.[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const sections = containerRef.value?.querySelectorAll('.solution-screen')
  if (!sections) return

  sections.forEach((section, i) => {
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => { activeIndex.value = i },
      onEnterBack: () => { activeIndex.value = i },
    })
    triggers.push(st)

    const textEl = section.querySelector('.anim-text')
    const imgEl = section.querySelector('.anim-img')

    if (textEl) {
      gsap.from(textEl, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    if (imgEl) {
      const xFrom = i % 2 === 0 ? 80 : -80
      gsap.from(imgEl, {
        x: xFrom,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  })
})

onUnmounted(() => {
  triggers.forEach((st) => st.kill())
  triggers = []
})
</script>

<template>
  <div ref="containerRef" class="relative">
    <!-- Hero -->
    <section id="solutions-hero" class="relative overflow-hidden bg-surface-base pt-32 md:pt-40 pb-8 md:pb-10">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);"
      />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary leading-tight tracking-tight">
          用 AI 重新定义行业标准
        </h1>
        <p class="mt-6 text-xl md:text-2xl text-ink-secondary">
          软积木为每一个行业、每一个团队、每一个人，构建极简的智能化未来。
        </p>
      </div>

      <!-- Scroll hint -->
      <div class="mt-8 md:mt-12 flex justify-center">
        <div class="animate-bounce">
          <Icon icon="lucide:chevron-down" class="w-6 h-6 text-ink-tertiary" />
        </div>
      </div>
    </section>

    <!-- Industry Nav -->
    <IndustryNav
      :items="[
        { id: 'gov', label: '政务办公' },
        { id: 'park', label: 'OPC科技园区' },
        { id: 'edu', label: '高校科研' },
        { id: 'training', label: '教育培训' },
        { id: 'media', label: '内容创作' },
        { id: 'finance', label: '金融保险' },
        { id: 'health', label: '医疗健康' },
        { id: 'ecommerce', label: '电商零售' },
      ]"
      :active-index="activeIndex"
      :sticky="true"
      @select="scrollToSection"
    />

    <!-- Dot Navigation -->
    <div class="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      <button
        v-for="(s, i) in solutions"
        :key="s.id"
        class="group relative flex items-center justify-end"
        @click="scrollToSection(i)"
      >
        <span
          class="mr-3 text-xs font-medium text-ink-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
        >
          {{ s.title }}
        </span>
        <div
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 border"
          :class="
            activeIndex === i
              ? 'bg-brand border-brand scale-125'
              : 'bg-transparent border-ink-tertiary hover:border-brand'
          "
        />
      </button>
    </div>

    <!-- Sections -->
    <section
      v-for="(s, i) in solutions"
      :id="s.id"
      :key="s.id"
      class="solution-screen relative min-h-[100dvh] flex items-center snap-start"
      :class="i % 2 === 0 ? 'bg-surface-base' : 'bg-white'"
    >
      <!-- 装饰光晕 -->
      <div
        class="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        :class="i % 2 === 0 ? 'opacity-20' : 'opacity-10'"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div
          class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Text Content -->
          <div class="anim-text w-full lg:w-1/2">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center">
                <Icon :icon="s.icon" class="w-6 h-6 text-brand" />
              </div>
              <span class="text-sm font-medium text-ink-tertiary tracking-wider uppercase">
                {{ s.subtitle }}
              </span>
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-[56px] font-semibold text-ink-primary tracking-tight leading-tight">
              {{ s.title }}
            </h2>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-6">
              <span
                v-for="tag in s.tags"
                :key="tag"
                class="px-3 py-1.5 rounded-full text-xs font-semibold border border-brand/40 text-brand bg-brand-soft"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Scenes -->
            <div class="mt-8">
              <h3 class="text-sm font-semibold text-ink-tertiary uppercase tracking-wider mb-3">适用场景</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="scene in s.scenes"
                  :key="scene"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted text-sm text-ink-secondary"
                >
                  <Icon icon="lucide:check-circle" class="w-3.5 h-3.5 text-brand" />
                  {{ scene }}
                </span>
              </div>
            </div>

            <!-- Pain Point -->
            <div class="mt-8 p-5 rounded-2xl bg-surface-muted/50 border border-line/50">
              <div class="flex items-start gap-3">
                <Icon icon="lucide:lightbulb" class="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-ink-primary mb-1">解决痛点</h3>
                  <p class="text-sm text-ink-secondary leading-relaxed">{{ s.pain }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image / Mockup -->
          <div class="anim-img w-full lg:w-1/2 flex items-center justify-center">
            <div
              class="w-full max-w-md aspect-[4/3] rounded-3xl flex items-center justify-center relative overflow-hidden"
              :class="i % 2 === 0 ? 'bg-surface-muted' : 'bg-white'"
            >
              <div
                class="absolute inset-0 opacity-30"
                style="background: radial-gradient(circle at 30% 30%, rgba(85, 173, 115, 0.15), transparent 60%);"
              />
              <div class="relative text-center p-8">
                <div
                  class="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-4"
                >
                  <Icon :icon="s.icon" class="w-10 h-10 text-white" />
                </div>
                <p class="text-lg font-semibold text-ink-primary">{{ s.title }}</p>
                <p class="mt-2 text-sm text-ink-tertiary">产品 Mockup 占位</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative overflow-hidden py-20 md:py-[120px] bg-white">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold text-ink-primary tracking-tight leading-tight whitespace-nowrap">
          咨询你的专属行业方案，获取一对一支持
        </h2>
        <p class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          无论身处哪个行业，软积木都能为你量身定制 AI 落地路径
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact#contact-bottom"
            class="inline-flex items-center px-6 py-3 rounded-full bg-[#55AD73] text-white font-semibold hover:bg-[#2E8B57] transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
