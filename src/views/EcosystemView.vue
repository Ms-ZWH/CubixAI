<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import StatNumber from '../components/StatNumber.vue'

/* ========================
   1. Hero
   ======================== */
const heroRef = ref<HTMLElement | null>(null)
useScrollReveal(heroRef, { y: 30 })

/* ========================
   2. PEC 数据成就
   ======================== */
const pecStatsRef = ref<HTMLElement | null>(null)
useScrollReveal(pecStatsRef, { y: 30, delay: 0.1 })

const bigStats = [
  { value: 2500000, suffix: '+', label: '系列活动累计覆盖人数' },
  { value: 260, suffix: '+', label: '全国合作 AI 社群' },
  { value: 200000, suffix: '+', label: '社区覆盖人数' },
]


/* ========================
   3. PEC 活动形式 + 服务
   ======================== */
const pecFormatsRef = ref<HTMLElement | null>(null)
const pecServicesRef = ref<HTMLElement | null>(null)
useScrollReveal(pecFormatsRef, { y: 30, delay: 0.1 })
useScrollReveal(pecServicesRef, { y: 30, delay: 0.1 })

const formats = [
  { image: new URL('@/assets/st/pec/fh.png', import.meta.url).href, title: '峰会', subtitle: 'Summit', time: "一年一次", gm: "1000人以上", desc: '顶级决策者的年度盛会' },
  { image: new URL('@/assets/st/pec/lt.png', import.meta.url).href, title: '论坛', subtitle: 'Forum', time: "一季度一次", gm: "200~300人", desc: '行业前沿的深度对话' },
  { image: new URL('@/assets/st/pec/sl.png', import.meta.url).href, title: '沙龙', subtitle: 'Salon', time: "不定期", gm: "线上或线下", desc: '一线开发者的思想碰撞' },
  { image: new URL('@/assets/st/pec/zt.png', import.meta.url).href, title: '座谈', subtitle: 'Symposium', time: "不定期", gm: "线上或线下", desc: '专家学者的闭门研讨' },
]

const services = [
  // { icon: 'lucide:graduation-cap', title: '培训', desc: 'PET 提示工程培训体系，理论 + 实战，提升企业员工 AI 应用能力。' },
  { icon: 'lucide:award', title: '认证', desc: '官方认证 + PEC 职业资格证书。', image: new URL('@/assets/pecBaner/pec.jpeg', import.meta.url).href },
  { icon: 'lucide:gamepad-2', title: '联盟', desc: '汇聚全球AI从业者，开放共享，颁发联盟授权认证。', image: new URL('@/assets/pecBaner/lm.png', import.meta.url).href },
]

/* ========================
   4. 企业 AI 服务生态圈
   ======================== */
const aiServiceRef = ref<HTMLElement | null>(null)
const advantagesRef = ref<HTMLElement | null>(null)
const matrixRef = ref<HTMLElement | null>(null)
useScrollReveal(aiServiceRef, { y: 30, delay: 0.1 })
useScrollReveal(advantagesRef, { y: 30, delay: 0.15 })
useScrollReveal(matrixRef, { y: 30, delay: 0.2 })

const advantages = [
  {
    image: new URL('@/assets/st/1.png', import.meta.url).href,
    title: '全方位与多层次',
    desc: '涵盖从技术咨询、解决方案设计、系统集成到专业培训、社群交流等多个方面和层次，为企业提供全流程支持。',
  },
  {
    image: new URL('@/assets/st/2.png', import.meta.url).href,
    title: '精准匹配需求',
    desc: '深入了解企业的具体业务场景和痛点，利用前沿的 AI 技术，为企业量身打造高效能的 AI 服务。',
  },
  {
    image: new URL('@/assets/st/3.png', import.meta.url).href,
    title: '生态共赢持续发展',
    desc: '加强企业间知识交流、技术合作与资源共享，激发创新活力，推动 AI 技术不断突破与应用拓展。',
  },
]

</script>

<template>
  <div>
    <!-- 顶部 Banner -->
    <section class="w-full">
      <img
        src="@/assets/st/pec_banner.png"
        alt="PEC Banner"
        class="w-full h-auto object-cover"
      />
    </section>

    <!-- ========================
         2. PEC — 数据成就 + 活动形式
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <!-- <div class="logo_imge" >
            <img src="@/assets/pecBaner/logo.png"
            />
          </div> -->
          <!-- <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">PEC 生态</span> -->
          <!-- <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight" style="margin: 20px auto">
            PEC · 提示工程大会
          </h2> -->
          <!-- <div class="aimge" >
            <img src="@/assets/pecBaner/a.png"
            />
          </div>
          <p class="mt-4 text-lg text-ink-secondary">
            全球提示工程领域的标志性交流平台 · 软积木担任亚洲地区官方运营主体
          </p> -->
        </div>

        <!-- 数据成就 -->
        <div ref="pecStatsRef" class="space-y-10 md:space-y-12 mb-20">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <StatNumber v-for="s in bigStats" :key="s.label" :value="s.value" :suffix="s.suffix" :label="s.label" />
          </div>
        </div>

        <!-- 活动形式 -->
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">活动形式</h3>
          <p class="mt-3 text-base text-ink-secondary">
            峰会 · 论坛 · 沙龙 · 座谈，覆盖从顶级决策者到一线开发者的完整生态链
          </p>
        </div>
        <div ref="pecFormatsRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="f in formats" :key="f.title"
            class="group p-6 md:p-8 rounded-3xl bg-surface-base border border-line/50 hover:shadow-card hover:border-brand/20 transition-all duration-300">
            <div class="aspect-video rounded-xl overflow-hidden mb-5">
              <img :src="f.image" :alt="f.title" class="w-full h-full object-cover" />
            </div>
            <h4 class="text-xl font-semibold text-ink-primary">{{ f.title }}</h4>
            <p class="text-sm text-ink-tertiary mt-1">{{ f.subtitle }}</p>
            <p class="text-sm text-ink-tertiary mt-1">时间周期：{{ f.time }}</p>
            <p class="text-sm text-ink-tertiary mt-1">规模：{{ f.gm }}</p>
            <p class="text-sm text-ink-secondary mt-3 leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         3. PEC — 生态服务 + CTA
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h3 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">生态服务</h3>
          <p class="mt-3 text-base text-ink-secondary">
            认证 · 联盟，构建提示工程人才全链路成长体系
          </p>
        </div>

        <div ref="pecServicesRef" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="svc in services" :key="svc.title"
            class="p-8 rounded-3xl bg-white border border-line/50 hover:shadow-card hover:border-brand/20 transition-all duration-300 flex flex-col">
            <!-- <div class="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center mb-6">
              <Icon :icon="svc.icon" class="w-7 h-7 text-white" />
            </div> -->
            <h4 class="text-2xl font-bold text-ink-primary">{{ svc.title }}</h4>
            <p class="mt-4 text-base text-ink-secondary leading-relaxed">{{ svc.desc }}</p>
            <div v-if="svc.image" class="mt-6 rounded-2xl overflow-hidden border border-line/30 bg-surface-muted">
              <img :src="svc.image" :alt="svc.title" class="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        <!-- 关注公众号 + CTA -->
        <div class="mt-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div class="w-[160px] h-[160px] rounded-2xl bg-white border-2 border-brand/20 shadow-card overflow-hidden">
            <img src="../assets/PEC.jpg" alt="PEC 公众号二维码" class="w-full h-full object-cover" />
          </div>
          <h3 class="mt-5 text-xl md:text-2xl font-semibold text-ink-primary tracking-tight">
            关注 PEC提示工程大会 公众号
          </h3>
          <p class="mt-2 text-sm text-ink-secondary max-w-xs">
            获取最新活动资讯、行业洞察与社区动态
          </p>
          <div class="mt-5">
            <a href="https://www.pec.asia" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep transition-colors shadow-lg">
              前往 PEC 官网查看详情
              <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         4. 软积木 · 企业 AI 服务生态圈
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 标题区 -->
        <div ref="aiServiceRef" class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            更多企业 AI 服务生态圈
          </h2>
          <p class="mt-5 text-base md:text-lg text-ink-secondary max-w-3xl mx-auto leading-relaxed">
            软积木通过整合前沿 AI 技术、个性化解决方案、专业培训与社群交流等多元化服务，
          </p>
          <p class="mt-5 text-base md:text-lg text-ink-secondary max-w-3xl mx-auto leading-relaxed">
            助力企业实现智能化升级与业务创新。
          </p>
        </div>

        <!-- 核心优势 -->
        <div ref="advantagesRef" class="mb-20 md:mb-24">
          <div class="text-center mb-10 md:mb-12">
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="item in advantages" :key="item.title"
              class="group p-8 rounded-3xl bg-surface-base border border-line/50 hover:shadow-card hover:border-brand/20 hover:-translate-y-1 transition-all duration-300">
              <div class="aspect-video rounded-2xl overflow-hidden mb-5">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
              </div>
              <h4 class="text-lg font-bold text-ink-primary mb-2">{{ item.title }}</h4>
              <p class="text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 服务矩阵 -->
        <div ref="matrixRef">
          <div class="text-center mb-10 md:mb-12">
            <h3 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">服务矩阵</h3>
            <p class="mt-3 text-base text-ink-secondary">围绕客户构建六大核心服务支撑</p>
            <div class="mt-6 max-w-6xl mx-auto rounded-2xl overflow-hidden">
              <img src="@/assets/st/yq.png" alt="服务矩阵" class="w-full h-auto object-contain" />
            </div>
          </div>
          <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div
              v-for="item in serviceMatrix"
              :key="item.title"
              class="group p-6 rounded-3xl bg-surface-base border border-line/50 hover:shadow-card hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div class="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                <Icon :icon="item.icon" class="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 class="text-lg font-bold text-ink-primary mb-1">{{ item.title }}</h4>
              <p class="text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </section>

  </div>
</template>
<style scoped>
.aimge {
  width: 50%;
   padding: 20px 0;
  text-align: center;
  margin: 0 auto;
}
.logo_imge{
  width: 20%;
  margin: 0 auto;
}
</style>
