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

    <!-- Filter Bar (移动端) -->
    <section class="pb-6 md:hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-2 overflow-x-auto" style="scrollbar-width: none;">
          <button v-for="tab in tabs" :key="tab.value"
            class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
            :class="activeTab === tab.value ? 'bg-brand text-white' : 'bg-white text-ink-secondary shadow-sm'"
            @click="activeTab = tab.value">
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content: 3-col grid -->
    <section class="pb-20 md:pb-[120px]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="mainRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6">

          <!-- ===== 左侧：精选区 (30%) ===== -->
          <aside class="md:col-span-1 lg:col-span-3 space-y-5">
            <!-- 精选大卡片 -->
            <a v-if="featured" :href="featured.link" class="animate-item group block rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div class="aspect-[16/10] bg-surface-muted flex items-center justify-center">
                <span class="text-sm text-ink-tertiary">精选大图占位</span>
              </div>
              <div class="p-5">
                <span class="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold" :class="typeColor(featured.type)">
                  {{ typeLabel(featured.type) }}
                </span>
                <h3 class="mt-3 text-lg font-bold text-ink-primary group-hover:text-brand transition-colors leading-snug">
                  {{ featured.title }}
                </h3>
                <p class="mt-2 text-sm text-ink-secondary line-clamp-2 leading-relaxed">
                  {{ featured.summary }}
                </p>
                <div class="mt-4 flex items-center gap-2 text-xs text-ink-tertiary font-[Inter]">
                  <span>{{ formatDate(featured.date).mm }}/{{ formatDate(featured.date).dd }}</span>
                  <span>·</span>
                  <span class="text-[11px]">{{ formatDate(featured.date).yyyy }}</span>
                </div>
              </div>
            </a>

            <!-- 两个次要精选 -->
            <div class="space-y-4">
              <a v-for="item in subFeatured" :key="item.id" :href="item.link"
                class="animate-item group flex gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="w-20 h-20 rounded-lg bg-surface-muted shrink-0 flex items-center justify-center">
                  <span class="text-[10px] text-ink-tertiary">图</span>
                </div>
                <div class="min-w-0">
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-semibold" :class="typeColor(item.type)">
                    {{ typeLabel(item.type) }}
                  </span>
                  <h4 class="mt-1.5 text-sm font-bold text-ink-primary group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                    {{ item.title }}
                  </h4>
                  <p class="mt-1 text-xs text-ink-tertiary font-[Inter]">
                    {{ formatDate(item.date).mm }}/{{ formatDate(item.date).dd }}
                  </p>
                </div>
              </a>
            </div>
          </aside>

          <!-- ===== 中间：主列表区 (50%) ===== -->
          <main class="md:col-span-1 lg:col-span-5">
            <!-- 桌面端 Tab -->
            <div class="hidden md:flex gap-2 mb-6">
              <button v-for="tab in tabs" :key="tab.value"
                class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                :class="activeTab === tab.value ? 'bg-brand text-white' : 'bg-white text-ink-secondary shadow-sm hover:text-brand'"
                @click="activeTab = tab.value">
                {{ tab.label }}
              </button>
            </div>

            <!-- 文章列表 -->
            <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
              <a v-for="item in filteredArticles" :key="item.id" :href="item.link"
                class="animate-list-item group flex items-stretch border-b border-[#F0F0ED] last:border-b-0 hover:bg-[#FAFAF7] transition-colors">
                <!-- 日期 -->
                <div class="hidden sm:flex flex-col items-center justify-center w-20 shrink-0 py-5 px-2 text-center">
                  <span class="text-[10px] text-ink-tertiary font-[Inter] tracking-wider">{{ formatDate(item.date).yyyy }}</span>
                  <span class="text-xl font-light text-ink-primary font-[Inter] leading-none mt-1">
                    {{ formatDate(item.date).mm }}<span class="text-ink-tertiary">/</span>{{ formatDate(item.date).dd }}
                  </span>
                </div>

                <!-- 内容 -->
                <div class="flex-1 min-w-0 px-4 sm:px-5 py-5">
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold" :class="typeColor(item.type)">
                      {{ typeLabel(item.type) }}
                    </span>
                    <span class="sm:hidden text-xs text-ink-tertiary font-[Inter]">
                      {{ formatDate(item.date).mm }}/{{ formatDate(item.date).dd }}
                    </span>
                  </div>
                  <h3 class="text-base md:text-lg font-bold text-ink-primary group-hover:text-brand transition-colors leading-snug">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1.5 text-sm text-[#5C6B63] leading-relaxed line-clamp-2">
                    {{ item.summary }}
                  </p>
                </div>

                <!-- 箭头 -->
                <div class="hidden sm:flex items-center justify-center w-12 shrink-0">
                  <Icon icon="lucide:chevron-right"
                    class="w-4 h-4 text-ink-tertiary group-hover:text-brand group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              <div v-if="filteredArticles.length === 0" class="py-12 text-center text-ink-tertiary">
                该分类下暂无文章
              </div>
            </div>
          </main>

          <!-- ===== 右侧：排行区 (20%) ===== -->
          <aside class="hidden lg:block lg:col-span-2 space-y-6">
            <!-- 搜索框 -->
            <div class="animate-item bg-white rounded-xl shadow-sm p-3">
              <div class="relative">
                <Icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary" />
                <input v-model="searchQuery" type="text" placeholder="搜索文章..."
                  class="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-base text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </div>
            </div>

            <!-- 热门排行 -->
            <div class="animate-item bg-white rounded-xl shadow-sm p-5">
              <h3 class="text-sm font-bold text-ink-primary uppercase tracking-wider mb-4">热门排行</h3>
              <div class="space-y-4">
                <a v-for="(item, i) in hotList" :key="item.id" :href="item.link"
                  class="group flex items-start gap-3">
                  <span class="text-lg font-bold leading-none mt-0.5 shrink-0 w-5 text-center"
                    :class="i < 3 ? 'bg-brand-gradient bg-clip-text text-transparent' : 'text-ink-tertiary'">
                    {{ i + 1 }}
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm font-medium text-ink-primary group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                      {{ item.title }}
                    </p>
                    <span class="text-[11px] text-ink-tertiary">{{ (item.hot || 0).toLocaleString() }} 阅读</span>
                  </div>
                </a>
              </div>
            </div>
          </aside>
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
