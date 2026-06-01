<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import chatuMateImg from '@/assets/ChatUMate.png'

const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30, delay: 0.2 })
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 左文案+图片 与 右竖排三卡 -->
      <div ref="contentRef" class="flex flex-col md:flex-row items-stretch gap-6">
        <!-- 左侧：文案 + 图片 -->
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="text-center md:text-left mb-6">
            <span
              class="inline-block px-3 py-1 rounded-full bg-[#E6F5FB] text-[#2DB4E6] text-xs font-semibold mb-4"
            >
              专属操作系统
            </span>
            <h2 class="text-2xl md:text-3xl font-semibold text-ink-primary">
              ChatU Mate &middot; Agent 指挥中心
            </h2>
            <p class="mt-3 text-ink-secondary">
              一个人 + 一台设备 + 一套系统 = 完整工作闭环
            </p>
          </div>
          <div class="flex-1">
            <img
              :src="chatuMateImg"
              alt="ChatU Mate 系统界面"
              class="w-full h-full object-cover rounded-2xl border border-line/50"
            />
          </div>
        </div>

        <!-- 右侧竖排三卡 -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">Agent 双引擎</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              OpenClaw + Hermes Agent 原生内置
            </p>
            <p class="mt-1 text-sm text-ink-tertiary">一键启动，无需配置</p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">Skills 生态</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              自研 Skills 平台，杜绝外部技能入侵
            </p>
            <p class="mt-1 text-sm text-ink-tertiary">多模态技能统一调度</p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">平台互联</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              微信 &middot; 飞书 &middot; 钉钉 &middot; QQ 全打通
            </p>
            <p class="mt-1 text-sm text-ink-tertiary">移动端远程操作</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
