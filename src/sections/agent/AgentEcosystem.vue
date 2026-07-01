<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import chatuMateImg from '@/assets/ChatUMate.png'

const platformIcons = [
  { name: '微信', src: new URL('@/assets/icon/wx.png', import.meta.url).href },
  { name: '飞书', src: new URL('@/assets/icon/fs.png', import.meta.url).href },
  { name: '钉钉', src: new URL('@/assets/icon/dd.png', import.meta.url).href },
  { name: '企业微信', src: new URL('@/assets/icon/qywx.png', import.meta.url).href },
  { name: 'QQ', src: new URL('@/assets/icon/QQ.png', import.meta.url).href },
  { name: 'ChatU', src: new URL('@/assets/icon/chatu2.png', import.meta.url).href },
  { name: '更多...', icon: 'lucide:plus', color: '#9CA3AF' },
]

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
              ChatU Mate
            </h2>
            <p class="mt-3 text-ink-secondary">
              一个人 + 一台设备 + 一套系统 = 完整工作闭环
            </p>
          </div>
          <div class="flex-1">
            <img
              :src="chatuMateImg"
              alt="ChatU Mate 系统界面"
              class="w-full h-full object-contain rounded-2xl border border-line/50"
            />
          </div>
        </div>

        <!-- 右侧竖排三卡 -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">多场景智能体</h3>
            <p class="mt-2 text-sm text-ink-secondary">
               OpenClaw + Hermes Agent 原生内置，可执行聊天、搜索、定时任务等操作，覆盖多智能体调度。
            </p>
            <p class="mt-1 text-sm text-ink-tertiary">内置丰富的智能体，一键调用</p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">全能 Skills</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              内置多场景技能统一调度模块，支持快速调用与灵活编排，持续扩展第三方能力，且统一计费。
            </p>
            <p class="mt-1 text-sm text-ink-tertiary">多模态、多技能统一调度中心</p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">主流社交平台接入</h3>
            <p class="mt-2 text-sm text-ink-secondary">
              <!-- 微信 &middot; 飞书 &middot; 钉钉 &middot; QQ 全打通 -->
              快速打通微信、飞书、钉钉、企业微信、QQ、Chatu...实现多端对话与任务下发。

            </p>
            <div class="mt-3 flex items-center gap-2 flex-wrap">
              <div
                v-for="p in platformIcons"
                :key="p.name"
                class="rounded-lg bg-white flex items-center justify-center"
                :class="p.name === 'ChatU' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-9 h-9 md:w-10 md:h-10'"
                :title="p.name"
              >
                <img
                  v-if="p.src"
                  :src="p.src"
                  :alt="p.name"
                  class="object-contain"
                  :class="p.name === 'ChatU' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-5 h-5 md:w-6 md:h-6'"
                />
                <span
                  v-else
                  class="text-[10px] md:text-xs font-medium text-ink-tertiary"
                >
                  {{ p.name }}
                </span>
              </div>
            </div>
            <p class="mt-2 text-sm text-ink-tertiary">移动端远程操作</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
