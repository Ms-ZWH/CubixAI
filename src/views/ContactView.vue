<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import PartnersSection from '../sections/PartnersSection.vue'

onMounted(() => {
  const hash = window.location.hash
  if (hash === '#contact-bottom') {
    setTimeout(() => {
      const el = document.getElementById('contact-bottom')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }
})

/* ========================
   1. Hero
   ======================== */
const heroRef = ref<HTMLElement | null>(null)
useScrollReveal(heroRef, { y: 30 })

/* ========================
   2. 核心理念
   ======================== */
const missionRef = ref<HTMLElement | null>(null)
useScrollReveal(missionRef, { y: 30, delay: 0.1 })

const missions = [
  {
    icon: 'lucide:target',
    title: '使命 Mission',
    desc: '致力于成为全球企业信赖的 AI 服务伙伴，通过技术创新与专业化解决方案，赋能企业数智化转型',
  },
  {
    icon: 'lucide:eye',
    title: '愿景 Vision',
    desc: '憧憬一个由 AI 智能驱动的全球商业生态，为企业提供更优质的生产力工具，推动高效、可持续发展',
  },
  {
    icon: 'lucide:heart',
    title: '价值观 Values',
    desc: '客户至上 · 创新驱动 · 全球视野 · 合作共赢 · 诚信责任',
  },
]

/* ========================
   3. 发展历程
   ======================== */
const timelineRef = ref<HTMLElement | null>(null)
useScrollReveal(timelineRef, { y: 30, delay: 0.1 })

const milestones = [
  { year: '2023.03', title: 'ChatU 上线', desc: '企业级 AI Agent 操作系统' },
  { year: '2023.06', title: '公司成立', desc: '软积木（北京）科技有限公司正式成立' },
  { year: '2023.08', title: '签约客户达到 3000+', desc: '开拓日、韩、欧、美市场' },
  { year: '2025.01', title: '开拓国际业务', desc: 'PEC China 区引入「提示工程大会」国际品牌，启动亚洲市场运营' },
  { year: '2025.12', title: 'OPC Hub', desc: '上线 OPC Hub，布局 OPC 产业生态' },
  { year: '2026.05', title: '智方体 · AgentStation', desc: '正式推出硬件产品「方体 · AgentStation」' },
]

/* ========================
   4. 全球背书
   ======================== */
const globalRef = ref<HTMLElement | null>(null)
const cctvRef = ref<HTMLElement | null>(null)
useScrollReveal(globalRef, { y: 30, delay: 0.1 })
useScrollReveal(cctvRef, { y: 20, delay: 0.3 })

const events = [
  { name: '韩国 SOUTH SUMMIT', location: '首尔', desc: 'TODO: 活动说明占位', image: 'hg.png' },
  { name: '香港贸发局活动', location: '香港', desc: 'TODO: 活动说明占位', image: 'xg.png' },
  { name: 'SpaceX 活动', location: '哈灵顿', desc: 'TODO: 活动说明占位', image: 'hld.png' },
  { name: 'Microsoft 总部', location: '西雅图', desc: 'TODO: 活动说明占位', image: 'xyt.png' },
  { name: 'NVIDIA GTC', location: '硅谷', desc: 'TODO: 活动说明占位', image: 'ywd.png' },
  { name: '伦敦 PEC 国际', location: 'Everyman Canary Wharf', desc: 'TODO: 活动说明占位', image: 'ld.png' },
]

/* ========================
   5. 荣誉与伙伴
   ======================== */
const honorsRef = ref<HTMLElement | null>(null)
useScrollReveal(honorsRef, { y: 30 })

const honors = [
  { image: '2.png', title: '微软 Founder Hub 成员' },
  { image: '3.png', title: '微软人工智能合作伙伴' },
  { image: '4.png', title: '微软首批全球大客户' },
  { image: '5.png', title: '微软 Tier5 级别合作伙伴' },
  { image: '6.png', title: 'NVIDIA Inception Program' },
  { image: '7.png', title: 'AWS Bedrock 首批接入' },
  { image: '8.png', title: '华为云首批初始计划成员' },
  { image: '9.png', title: '百度 AI 应用市场合作伙伴' },
  { image: '10.png', title: '' },
  { image: '11.png', title: '' },
  { image: '12.png', title: '' },
  { image: '13.png', title: '' },
  { image: '14.png', title: '' },
  { image: '15.png', title: '' },
  { image: '16.png', title: '' },
  { image: '图片.png', title: '' },
]

function getHonorUrl(name: string) {
  // 处理图片文件名，确保相对路径正确
  return new URL(`../assets/qyry/${name}`, import.meta.url).href
}

function getQqUrl(name: string) {
  return new URL(`../assets/qq/${name}`, import.meta.url).href
}

function getAlUrl(name: string) {
  return new URL(`../assets/al/${name}`, import.meta.url).href
}

/* ========================
   6. 全球办公
   ======================== */
const locationsRef = ref<HTMLElement | null>(null)
useScrollReveal(locationsRef, { y: 30, delay: 0.1 })

const locations = [
  {
    city: '北京 · 中关村AI北纬社区',
    address: '北京市海淀区海淀大悦信息科技园 D2-D401',
    func: 'AI 产业生态合作、创新业务孵化、前沿技术交流',
    image: 'bwsq1.png',
  },
  {
    city: '北京 · 清华科技园',
    address: '中关村东路 1 号清华科技园 C 座 21 层',
    func: '战略决策、产品研发、品牌运营',
    image: 'wdk.jpeg',
  },
  {
    city: '无锡 · 锡山',
    address: '安镇街道丹山路 88 号锡东创融大厦 C 座 15-005',
    func: '华东客户交付、技术支持',
    image: 'wx.jpeg',
  },
  {
    city: '新加坡',
    address: '139 PASIR RIS GROVE, #05-43, D\'NEST',
    func: '国际市场拓展、海外客户服务',
    image: 'xjp.png',
  },
]

/* ========================
   7. 联系入口 (CTA)
   ======================== */
const ctaRef = ref<HTMLElement | null>(null)
useScrollReveal(ctaRef, { y: 30 })

/* ========================
   8. 联系矩阵
   ======================== */
const matrixRef = ref<HTMLElement | null>(null)
useScrollReveal(matrixRef, { y: 40, delay: 0.1 })
</script>

<template>
  <div>
    <!-- ========================
         1. Hero
         ======================== -->
    <section class="relative overflow-hidden bg-surface-base pt-32 md:pt-40 pb-16 md:pb-24">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);"
      />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary leading-tight tracking-tight">
          一家 AI 原生公司
        </h1>
        <p class="mt-6 text-xl md:text-2xl text-ink-secondary">
          为企业 AI 落地，搭好最后三公里
        </p>
      </div>
    </section>

    <!-- ========================
         2. 核心理念
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">核心理念</h2>
        </div>
        <div ref="missionRef" class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div
            v-for="item in missions"
            :key="item.title"
            class="flex flex-col p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center mb-5">
              <Icon :icon="item.icon" class="w-6 h-6 text-brand" />
            </div>
            <h3 class="text-xl font-semibold text-ink-primary">{{ item.title }}</h3>
            <p class="mt-3 text-ink-secondary leading-relaxed flex-1">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         3. 发展历程
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">发展历程</h2>
        </div>
        <div ref="timelineRef" class="relative">
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ink-primary/10 md:-translate-x-px" />
          <div
            v-for="(m, i) in milestones"
            :key="m.year"
            class="relative flex items-start md:items-center mb-10 last:mb-0"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand border-2 border-white md:-translate-x-1.5 z-10 mt-1.5 md:mt-0" />
            <div class="ml-10 md:ml-0 md:w-1/2" :class="i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'">
              <span class="text-2xl md:text-3xl font-bold text-brand">{{ m.year }}</span>
              <h3 class="mt-1 text-lg font-semibold text-ink-primary">{{ m.title }}</h3>
              <p class="mt-1 text-sm text-ink-secondary">{{ m.desc }}</p>
            </div>
            <div class="hidden md:block md:w-1/2" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         4. 全球背书
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="globalRef" class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            走向全球 · 受邀参与国际顶级科技盛会
          </h2>
          <p class="mt-4 text-lg text-ink-secondary">
            欧洲 · 美国 · 韩国 · 日本 · 新加坡等市场全面布局
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div
            v-for="e in events"
            :key="e.name"
            class="p-6 rounded-2xl bg-surface-base border border-line/50 hover:shadow-card transition-all duration-300"
          >
            <div class="aspect-video rounded-xl bg-surface-muted border border-line/50 overflow-hidden mb-4">
              <img v-if="e.image" :src="getQqUrl(e.image)" class="w-full h-full object-cover" alt="" />
              <span v-else class="flex items-center justify-center h-full text-xs text-ink-tertiary">场地图占位</span>
            </div>
            <h3 class="text-base font-semibold text-ink-primary">{{ e.name }}</h3>
            <p class="text-xs text-brand mt-1">{{ e.location }}</p>
            <!-- <p class="text-xs text-ink-tertiary mt-2">{{ e.desc }}</p> -->
          </div>
        </div>

        <!-- CCTV 背书 -->
        <div
          ref="cctvRef"
          class="max-w-2xl mx-auto p-6 rounded-2xl bg-surface-base border border-line/50 text-center"
        >
          <div class="flex items-center justify-center gap-3 mb-2">
            <Icon icon="lucide:tv" class="w-5 h-5 text-gold" />
            <span class="text-sm font-semibold text-ink-primary">
              CCTV-2《赢在 AI+》栏目
            </span>
          </div>
          <p class="text-sm text-ink-secondary">
            软积木 CTO 邹健 & ChatU 登上央视财经频道
          </p>
        </div>

        <p class="mt-8 text-center text-xs text-ink-tertiary">
          与多家海外企业构建牢固合作伙伴关系
        </p>
      </div>
    </section>

    <!-- ========================
         5. 企业荣誉
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="honorsRef">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
              企业荣誉
            </h2>
            <p class="mt-4 text-lg text-ink-secondary">
              权威认证 · 持续创新
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            <div
              v-for="(h, i) in honors"
              :key="h.image"
              class="group relative rounded-2xl bg-white border border-line shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <!-- 图片区 -->
              <div class="flex-1 min-h-0 aspect-[4/3] bg-gradient-to-b from-[#F9FAFB] to-white p-4 md:p-6 flex items-center justify-center">
                <img
                  :src="getHonorUrl(h.image)"
                  :alt="h.title || `荣誉资质 ${String(i + 1).padStart(2, '0')}`"
                  class="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <!-- 底部文案区 -->
              <div class="px-4 py-3 border-t border-line/50 flex items-center justify-center min-h-[48px]">
                <p
                  v-if="h.title"
                  class="text-xs md:text-sm font-medium text-ink-secondary text-center leading-snug"
                >
                  {{ h.title }}
                </p>
                <span
                  v-else
                  class="text-xs font-medium text-ink-tertiary text-center"
                >
                  荣誉资质 {{ String(i + 1).padStart(2, '0') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         6. 合作伙伴
         ======================== -->
    <PartnersSection />

    <!-- ========================
         7. 全球办公
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            全球办公 · 本地服务
          </h2>
        </div>
        <div ref="locationsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="loc in locations"
            :key="loc.city"
            class="flex flex-col p-6 md:p-8 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h3 class="text-xl font-semibold text-ink-primary">{{ loc.city }}</h3>
            <p class="mt-4 text-sm text-ink-secondary leading-relaxed">{{ loc.address }}</p>
            <p class="mt-1 text-xs text-ink-tertiary">{{ loc.func }}</p>
            <div class="mt-6 flex-1 min-h-[120px] rounded-xl bg-surface-muted border border-line/50 overflow-hidden">
              <img v-if="loc.image" :src="getAlUrl(loc.image)" class="w-full h-full object-cover" alt="" />
              <span v-else class="flex items-center justify-center h-full text-xs text-ink-tertiary">地图占位</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         8. 联系入口 + 联系矩阵
         ======================== -->
    <section id="contact-bottom" class="relative overflow-hidden bg-white">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <!-- 标题区 -->
      <div class="relative pt-20 md:pt-[120px] pb-10 md:pb-16">
        <div ref="ctaRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl lg:text-[56px] font-semibold text-ink-primary tracking-tight leading-tight">
            多种方式 · 随时联系
          </h2>
          <p class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto">
            无论是产品试用、商务合作，还是技术咨询，都在这里找到答案
          </p>
        </div>
      </div>

      <!-- 联系矩阵 -->
      <div class="relative pb-20 md:pb-[120px]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref="matrixRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 第一列：业务二维码 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">联系我们</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img
                  src="@/assets/lxwm.png"
                  alt="联系我们"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                扫码即刻开启企业智能化转型
              </p>
            </div>

            <!-- 第二列：微信公众号 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">关注我们</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img src="@/assets/rjm.jpg" alt="公众号二维码" class="w-full h-full object-cover" />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                了解公司动态，洞悉 AI 行业趋势
              </p>
            </div>

            <!-- 第三列：商务邮箱 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">商务洽谈</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center">
                  <Icon icon="lucide:mail" class="w-10 h-10 text-white" />
                </div>
              </div>
              <a
                href="mailto:bd@cubixai.com"
                class="mt-5 text-xl md:text-2xl font-medium text-ink-primary font-[Inter] hover:text-brand transition-colors"
              >
                bd@cubixai.com
              </a>
              <a
                href="mailto:bd@cubixai.com"
                class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#55AD73] text-white hover:bg-[#2E8B57] transition-colors"
              >
                发送邮件
                <Icon icon="lucide:arrow-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
