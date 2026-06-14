<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'

interface Article {
  id: string
  type: 'industry' | 'company' | 'product'
  title: string
  date: string
  summary: string
  link: string
  image?: string
  hot?: number
}

// ========================
// 文章数据
// ========================
const articles = ref<Article[]>([
  {
    id: '6', type: 'product', title: 'ChatU 3.0 发布：16 引擎调度与智能体市场',
    date: '2026-02-10',
    summary: '全新升级的 ChatU 支持 16+ 大模型一键切换，推出智能体市场，让企业按需搭建专属 AI 工作流。',
    link: '#', hot: 12800,
  },
  {
    id: '5', type: 'industry', title: '多模态 Agent 如何重塑内容生产工作流',
    date: '2026-03-22',
    summary: '从文本到图像、音频、视频，多模态大模型正在改变内容创作方式。本文拆解全自动内容生产链路的构建逻辑。',
    link: '#', hot: 9600,
  },
  {
    id: '4', type: 'company', title: 'PEC 2026 提示工程大会：议题与嘉宾阵容公布',
    date: '2025-12-08',
    summary: '第六届提示工程大会将于北京举办，汇聚微软、NVIDIA、OpenAI 等领域专家，探讨 Agent 时代的提示工程新范式。',
    link: '#', hot: 15400,
  },
  {
    id: '3', type: 'industry', title: '企业 AI 落地的最后一公里：从工具到生产力',
    date: '2026-04-18',
    summary: '探讨企业在引入 AI 过程中面临的真实困境，以及如何通过系统化的 Agent 平台打通从实验到规模化的完整链路。',
    link: '#', hot: 11200,
  },
  {
    id: '2', type: 'company', title: 'PET 认证体系升级：从提示词到 Agent 设计',
    date: '2025-11-20',
    summary: '提示工程培训课程全面改版，新增 Agent 设计、多轮对话管理、RAG 优化等实战模块。',
    link: '#', hot: 8300,
  },
  {
    id: '1', type: 'product', title: '从 45 分钟到 13 分钟：电信运营商的智能运维实践',
    date: '2026-01-15',
    summary: '深度复盘某头部电信运营商部署 AI 运维大脑的全过程，日志解析、根因分析、自然语言查询的技术实现细节。',
    link: '#', hot: 18700,
  },
])

const tabs = [
  { label: '全部', value: 'all' },
  { label: '行业热点', value: 'industry' },
  { label: '公司动态', value: 'company' },
  { label: '产品更新', value: 'product' },
]

const activeTab = ref('all')
const searchQuery = ref('')

const filteredArticles = computed(() => {
  let list = articles.value
  if (activeTab.value !== 'all') {
    list = list.filter((a) => a.type === activeTab.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (a) => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
    )
  }
  return list
})

const featured = computed(() => articles.value[0])
const subFeatured = computed(() => articles.value.slice(1, 3))
const hotList = computed(() => [...articles.value].sort((a, b) => (b.hot || 0) - (a.hot || 0)).slice(0, 5))

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yyyy = d.getFullYear()
  return { mm, dd, yyyy }
}

function typeLabel(type: string) {
  return type === 'industry' ? '行业热点' : type === 'company' ? '公司动态' : '产品更新'
}

function typeColor(type: string) {
  return type === 'industry' ? 'bg-[#E8F5EE] text-[#2E8B57]' : type === 'company' ? 'bg-[#FFF3E0] text-[#D97706]' : 'bg-[#EFF6FF] text-[#2563EB]'
}

// GSAP
const mainRef = ref<HTMLElement | null>(null)

function runAllEntrance() {
  nextTick(() => {
    const items = mainRef.value?.querySelectorAll('.animate-item')
    if (items?.length) {
      gsap.fromTo(items, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' })
    }
  })
}

function runListEntrance() {
  nextTick(() => {
    const items = mainRef.value?.querySelectorAll('.animate-list-item')
    if (items?.length) {
      gsap.fromTo(items, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' })
    }
  })
}

onMounted(runAllEntrance)
watch(filteredArticles, runListEntrance)
</script>

<template>
  <div class="min-h-screen bg-surface-base relative overflow-hidden">
    <!-- 装饰光晕 -->
    <div class="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.06) 0%, transparent 70%); filter: blur(80px);" />
    <div class="absolute top-[40%] -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.04) 0%, transparent 70%); filter: blur(80px);" />

    <!-- Hero -->
    <section class="relative pt-32 md:pt-40 pb-10 md:pb-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl lg:text-[44px] font-semibold text-ink-primary tracking-tight">
          AI 洞察 · 预见未来
        </h1>
        <p class="mt-3 text-lg text-ink-secondary">
          行业前沿、公司动态、产品进化
        </p>
      </div>
    </section>

    <!-- 订阅入口 -->
    <section class="relative pb-16 md:pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- ChatU -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4">
              <Icon icon="lucide:box" class="w-6 h-6 text-[#2563EB]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">ChatU 产品资讯</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              获取产品更新、功能亮点与最佳实践
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/chatU.jpg" alt="ChatU 公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，掌握产品动态</p>
          </div>

          <!-- PEC -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#E8F5EE] flex items-center justify-center mb-4">
              <Icon icon="lucide:flame" class="w-6 h-6 text-[#2E8B57]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">AI 行业热点</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              追踪前沿技术、行业趋势与深度解读
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/PEC.jpg" alt="PEC 公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，洞悉 AI 风向</p>
          </div>

          <!-- 软积木 -->
          <div class="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-[#FFF3E0] flex items-center justify-center mb-4">
              <Icon icon="lucide:building-2" class="w-6 h-6 text-[#D97706]" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary">公司动态</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed max-w-[240px]">
              了解企业新闻、活动资讯与成长故事
            </p>
            <div class="mt-5 w-[150px] h-[150px] rounded-xl bg-surface-muted overflow-hidden border border-line/50 flex items-center justify-center">
              <img src="@/assets/rjm.jpg" alt="软积木公众号" class="w-full h-full object-cover" />
            </div>
            <p class="mt-4 text-xs text-ink-tertiary">扫码关注，见证每一步成长</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
