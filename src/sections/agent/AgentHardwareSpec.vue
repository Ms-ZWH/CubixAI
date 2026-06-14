<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import zft1 from '@/assets/zft/1.png'
import zft3 from '@/assets/zft/3.png'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const coreSpecs = [
  { name: '处理器', value: 'Intel(R) Celeron(R) N5100 @ 1.10GHz 1.10 GHz', highlight: '', suffix: '' },
  { name: '内存', value: '8GB / 16GB', highlight: '', suffix: ' LPDDR5' },
  { name: '存储', value: '128GB / 512GB', highlight: '', suffix: ' SSD' },
  { name: '显卡', value: 'Intel® UHD Graphics', highlight: '', suffix: '' },
  { name: '屏幕', value: '5.5英寸智能触控屏显', highlight: 'G + G5 多点触控', suffix: '分辨率 720×1280（IPS）' },
  { name: '电池', value: '2500mAh  续航约 ', highlight: '5', suffix: ' 小时' },
]

const ioSpecs = [
  { name: 'USB', value: '4×USB 3.0  +  1×USB-C', highlight: '', suffix: '' },
  { name: '视频', value: 'HDMI 2.1(', highlight: '4K', suffix: ')' },
  { name: '网络', value: '双千兆网口、Wi‑Fi 2.4G/5G、蓝牙 5.0/5.2', highlight: '', suffix: '' },
  { name: '机身', value: '全铝金属外壳 · 无风扇静音散热', highlight: '', suffix: '' },
  { name: '尺寸', value: '130×120×45mm  仅 ', highlight: '0.2KG', suffix: '' },
  { name: '认证', value: 'CE / FCC · 支持 PXE 预启动', highlight: '', suffix: '' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <!-- 左：多角度图占位 -->
        <div ref="leftRef" class="relative">
          <div
            class="aspect-square rounded-2xl bg-white border border-line shadow-card flex items-center justify-center"
          >
            <span class="text-ink-tertiary text-sm">
              TODO: 主视角渲染图
            </span>
          </div>
          <div class="grid grid-cols-3 gap-3 mt-4">
            <div
              class="aspect-square rounded-xl bg-white border border-line flex items-center justify-center overflow-hidden"
            >
              <img
                :src="zft1"
                alt="角度 1"
                class="w-full h-full object-contain"
              />
            </div>
            <div
              class="aspect-square rounded-xl bg-white border border-line flex items-center justify-center"
            >
              <span class="text-ink-tertiary text-xs">角度 2</span>
            </div>
            <div
              class="aspect-square rounded-xl bg-white border border-line flex items-center justify-center overflow-hidden"
            >
              <img
                :src="zft3"
                alt="角度 3"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <!-- 右：规格表 -->
        <div ref="rightRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight mb-10"
          >
            工业级硬件规格
          </h2>

          <div class="mb-8">
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
            >
              核心计算
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in coreSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="w-20 shrink-0 text-sm text-ink-tertiary">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-bold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
            >
              接口与工艺
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in ioSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="w-20 shrink-0 text-sm text-ink-tertiary">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-bold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
