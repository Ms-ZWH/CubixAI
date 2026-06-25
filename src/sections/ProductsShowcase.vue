<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import GlassCard from '../components/GlassCard.vue'
import Chip from '../components/Chip.vue'
import BrandButton from '../components/BrandButton.vue'

const titleRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)
const card3Ref = ref<HTMLElement | null>(null)
const card4Ref = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(card1Ref, { y: 30, delay: 0.1 })
useScrollReveal(card2Ref, { y: 30, delay: 0.15 })
useScrollReveal(card3Ref, { y: 30, delay: 0.2 })
useScrollReveal(card4Ref, { y: 30, delay: 0.25 })
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          四大业务板块
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <!-- Card 1: 产品 -->
        <div ref="card1Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#433487]/10 !text-[#433487]">软件</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                ChatU（才兔）
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                AI Agent 操作系统，为企业客户提供一键式 AI 接入服务，助力企业轻松实现智能化转型；内置海量行业智能体，支持多模型调度与低代码编排，让企业快速构建专属 AI 工作流。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#433487]/8 !text-[#433487]">AI操作系统</Chip>
                <Chip class="!bg-[#433487]/8 !text-[#433487]">智能体平台</Chip>
                <Chip class="!bg-[#433487]/8 !text-[#433487]">企业级AI接入</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/products/chatu" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
                  了解详情
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
        

        <!-- Card 2: 产品 -->
        <div ref="card2Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#2DB4E6]/10 !text-[#2DB4E6]">硬件</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                智方体・AgentStation
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                专属智能硬件终端，以开箱即用的本地化部署保障数据安全，内置 ChatU Mate 系统与离线模型，提供从算力底座到交互终端的完整 AI 硬件解决方案，让企业拥有安全可控的本地 AI 能力。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">智能硬件</Chip>
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">本地化部署</Chip>
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">数据安全</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/products/agentstation" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" arrow>
                  了解详情
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <!-- Card 3: 园区 -->
        <div ref="card3Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#F04045]/10 !text-[#F04045]">生态</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                OPC Hub
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                面向超级个体与 AI 创业团队的园区级 AI 基础设施，提供共享算力、办公空间与生态服务，打造集算力、工具、培训、资本于一体的 AI 创业闭环，助力一人公司快速成长。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">园区AI中枢</Chip>
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">算力共享</Chip>
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">创业生态</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/opc-hub" class="hover:!border-[#F04045] hover:!text-[#F04045]" arrow>
                  了解详情
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
        <!-- Card 4: 咨询培训 -->
        <div ref="card4Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#F4AB38]/10 !text-[#F4AB38]">服务</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                软积木 · 咨询培训
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                以 AI Agent 实战为核心，提供从基础入门到行业落地的全栈培训课程，配套实战案例与认证体系，帮助个人与企业快速掌握 AI 落地能力，实现 AI 技能变现与业务提效。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">AI实战培训</Chip>
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">提示工程认证</Chip>
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">企业智能转型培训</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/training" class="hover:!border-[#F4AB38] hover:!text-[#F4AB38]" arrow>
                  了解详情
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

        

    </div>
  </section>
</template>
