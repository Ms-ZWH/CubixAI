<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import StatNumber from '../components/StatNumber.vue'

/* ========================
   1. Hero
   ======================== */
const heroRef = ref<HTMLElement | null>(null)
const bannerUrl = new URL('@/assets/st.PNG', import.meta.url).href
useScrollReveal(heroRef, { y: 30 })

const ecosystemCards = [
  {
    icon: 'lucide:trophy',
    title: 'PEC · 提示工程大会',
    desc: '全球提示工程领域的标志性交流平台，覆盖 250 万+ AI 从业者',
  },
  {
    icon: 'lucide:cpu',
    title: '技术生态',
    desc: '16+ 主流大模型兼容，从操作系统到硬件终端的全链路产品矩阵',
  },
  {
    icon: 'lucide:landmark',
    title: '金融生态',
    desc: '联动投资机构与产业资本，搭建投融资对接网络，赋能 AI 项目成长',
  },
]

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
  { icon: 'lucide:trophy', title: '峰会', subtitle: 'Summit', time:"一年一次",gm:"1000人以上",desc: '顶级决策者的年度盛会' },
  { icon: 'lucide:users', title: '论坛', subtitle: 'Forum',  time:"一季度一次",gm:"200~300人",desc: '行业前沿的深度对话' },
  { icon: 'lucide:message-circle', title: '沙龙', subtitle: 'Salon',  time:"不定期",gm:"线上或线下",desc: '一线开发者的思想碰撞' },
  { icon: 'lucide:monitor-play', title: '座谈', subtitle: 'Symposium',  time:"不定期",gm:"线上或线下",desc: '专家学者的闭门研讨' },
]

const services = [
  { icon: 'lucide:graduation-cap', title: '培训', desc: 'PET 提示工程培训体系，理论 + 实战，提升企业员工 AI 应用能力。' },
  { icon: 'lucide:award', title: '认证', desc: '微软 Azure AI Fundamentals 官方认证 + PEC 职业资格证书。' },
  { icon: 'lucide:gamepad-2', title: '大赛', desc: '工信部工业文化发展中心主办，覆盖全国 270+ 院校。' },
]

/* ========================
   4. 技术生态
   ======================== */
const techRef = ref<HTMLElement | null>(null)
useScrollReveal(techRef, { y: 30, delay: 0.1 })

/* ========================
   5. 金融生态
   ======================== */
const finRef = ref<HTMLElement | null>(null)
useScrollReveal(finRef, { y: 30, delay: 0.1 })
</script>

<template>
  <div>
    <!-- ========================
         1. Hero — 生态整体描述
         ======================== -->
    <section
      ref="heroRef"
      class="relative w-full overflow-hidden bg-cover bg-center"
      :style="{ minHeight: '520px', backgroundImage: `url(${bannerUrl})` }"
    >
      <!-- <div
        class="absolute inset-0"
        style="background: linear-gradient(135deg, rgba(11,79,108,0.7) 0%, rgba(27,67,50,0.6) 40%, rgba(85,173,115,0.5) 100%);"
      />
      <div
        class="absolute inset-0 opacity-20"
        style="background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%);"
      />

      <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center" style="min-height: 520px; padding-top: 80px; padding-bottom: 80px;">
        <h1 class="text-3xl sm:text-4xl lg:text-[52px] font-bold text-white leading-tight tracking-tight max-w-4xl">
          软积木生态体系
        </h1>
        <p class="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
          连接技术、资本与人才，共建开放共赢的 AI 产业生态
        </p>
      </div> -->
    </section>

    <!-- 三个生态概览卡片 -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="card in ecosystemCards"
            :key="card.title"
            class="group p-8 rounded-3xl bg-white border border-line/50 hover:shadow-card hover:border-brand/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div class="w-14 h-14 rounded-2xl bg-brand-soft flex items-center justify-center mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
              <Icon :icon="card.icon" class="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-ink-primary">{{ card.title }}</h3>
            <p class="mt-3 text-sm text-ink-secondary leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         2. PEC — 数据成就 + 活动形式
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">PEC 生态</span>
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            PEC · 提示工程大会
          </h2>
          <p class="mt-4 text-lg text-ink-secondary">
            全球提示工程领域的标志性交流平台 · 软积木担任亚洲地区官方运营主体
          </p>
        </div>

        <!-- 数据成就 -->
        <div ref="pecStatsRef" class="space-y-10 md:space-y-12 mb-20">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <StatNumber
              v-for="s in bigStats"
              :key="s.label"
              :value="s.value"
              :suffix="s.suffix"
              :label="s.label"
            />
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
          <div
            v-for="f in formats"
            :key="f.title"
            class="group p-6 md:p-8 rounded-3xl bg-surface-base border border-line/50 hover:shadow-card hover:border-brand/20 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center mb-5">
              <Icon :icon="f.icon" class="w-6 h-6 text-brand" />
            </div>
            <h4 class="text-xl font-semibold text-ink-primary">{{ f.title }}</h4>
            <p class="text-sm text-ink-tertiary mt-1">{{ f.subtitle }}</p>
            <p class="text-sm text-ink-tertiary mt-1">时间：{{f.time}}</p>
            <p class="text-sm text-ink-tertiary mt-1">规模：{{f.gm}}</p>
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
            培训 · 认证 · 大赛，构建提示工程人才全链路成长体系
          </p>
        </div>

        <div ref="pecServicesRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="svc in services"
            :key="svc.title"
            class="p-8 rounded-3xl bg-white border border-line/50 hover:shadow-card hover:border-brand/20 transition-all duration-300"
          >
            <div class="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center mb-6">
              <Icon :icon="svc.icon" class="w-7 h-7 text-white" />
            </div>
            <h4 class="text-2xl font-bold text-ink-primary">{{ svc.title }}</h4>
            <p class="mt-4 text-base text-ink-secondary leading-relaxed">{{ svc.desc }}</p>
          </div>
        </div>

        <!-- 关注公众号 + CTA -->
        <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-4xl mx-auto">
          <!-- Left: QR + Title + Subtitle -->
          <div class="flex flex-col items-center lg:items-end text-center lg:text-right">
            <div class="w-[160px] h-[160px] rounded-2xl bg-white border-2 border-brand/20 shadow-card overflow-hidden">
              <img
                src="../assets/PEC.jpg"
                alt="PEC 公众号二维码"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="mt-5 text-xl md:text-2xl font-semibold text-ink-primary tracking-tight">
              关注 PEC提示工程 公众号
            </h3>
            <p class="mt-2 text-sm text-ink-secondary max-w-xs">
              获取最新活动资讯、行业洞察与社区动态
            </p>
          </div>
          <!-- Right: CTA -->
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p class="text-lg md:text-xl text-ink-primary font-semibold">
              想了解更多关于PEC的内容？
            </p>
            <div class="mt-5">
              <a
                href="https://www.pec.asia"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep transition-colors shadow-lg"
              >
                前往 PEC 官网查看详情
                <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
              </a>
            </div>
            <p class="mt-3 text-sm font-semibold text-brand">www.pec.asia</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         4. 技术生态体系
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">技术生态</span>
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            技术生态体系
          </h2>
          <p class="mt-5 text-base md:text-lg text-ink-secondary max-w-4xl mx-auto leading-relaxed">
            软积木不仅是一家AI解决方案公司，更在开发者、技术社区与产业合作层面，构建了完整的人工智能技术生态。
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-10">
          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">百万级开发者技术基础</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                依托多年技术社区积累，软积木关联技术平台拥有超过 108万开发者用户，覆盖企业开发、软件工程、AI应用、系统架构等多个技术领域，具备强大的开发者连接能力与技术传播能力。
              </p>
            </div>
          </div>

          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">领先的AI技术社区与行业影响力</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                早在 2023 年，软积木便率先发起 AI 技术交流社群，持续聚集国内活跃的 AI 技术 KOL、开发者、布道者与行业实践者，围绕大模型、AI Agent、企业智能化等方向展开深度交流与实践，共同推动AI技术普及与产业落地。
              </p>
            </div>
          </div>

          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">完整的产业技术生态合作</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                软积木已与多家国内领先AI与云计算厂商建立技术合作关系，包括：微软、亚马逊、火山引擎、百度智能云等，围绕大模型能力、云基础设施、智能应用与企业服务等方向展开协同，共同打造开放、稳定、可持续发展的AI技术生态体系。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         5. 金融与产业生态
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-4">金融与产业生态</span>
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            金融与产业生态
          </h2>
          <p class="mt-5 text-base md:text-lg text-ink-secondary max-w-4xl mx-auto leading-relaxed">
            软积木持续构建"技术 + 资本 + 产业"协同生态，打通项目成长、产业落地与资本对接的关键链路，为AI创新企业与产业合作提供长期支撑。
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-10">
          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">广泛的投融资资源连接能力</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                软积木与众多银行、投资机构、产业资本及创新平台保持长期交流与合作，能够帮助优质项目快速对接资本资源，提升项目成长与产业化效率。
              </p>
            </div>
          </div>

          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">丰富的金融生态合作伙伴体系</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                围绕人工智能、大模型、产业数字化等方向，软积木已建立覆盖投资机构、产业伙伴、技术平台与创新服务机构的生态合作网络，形成多维度协同发展的产业生态。
              </p>
            </div>
          </div>

          <div class="flex gap-5">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-soft text-brand text-lg font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 class="text-xl font-bold text-ink-primary mb-3">地方产业基金与政府资源联动</h3>
              <p class="text-base text-ink-secondary leading-relaxed">
                具备对接地方政府产业基金、产业园区及区域创新平台的能力，可协助项目链接地方产业政策、专项资金与落地资源，推动AI项目与区域产业深度融合，实现技术、产业与资本的协同发展。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 金融生态 CTA -->
    <section>
      <div class="py-20 md:py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-ink-primary leading-relaxed">
            开放互联 · 合规稳健 · 数智赋能
          </h2>
          <p class="mt-6 text-base md:text-lg text-ink-secondary leading-relaxed">
            软积木以 AI 原生技术底座为根基，携手金融机构、产业伙伴与科技企业，共建开放包容、稳健可持续、多方共赢的金融科技新生态。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
