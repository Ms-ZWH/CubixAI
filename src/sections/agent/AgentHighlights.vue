<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const items = [
  {
    num: '01',
    image: new URL('../../assets/zft/ld1.png', import.meta.url).href,
    title: '开箱即用',
    desc: '内置专属系统ChatU Mate，预置丰富智能体，无需技术背景，开机即享强大能力。',
    tag: '节省时间 · 降低门槛',
  },
  {
    num: '02',
    image: new URL('../../assets/zft/ld2.png', import.meta.url).href,
    title: '本地安全',
    desc: '数据处理与模型运行均在本地完成，物理级隔离，真实保障隐私安全，满足政企要求。',
    tag: '数据主权 · 隐私无忧',
  },
  {
    num: '03',
    image: new URL('../../assets/zft/ld3.png', import.meta.url).href,
    title: '预置智能体',
    desc: '原生内置OpenClaw与Hermes Agent双引擎，提供高效稳定的运行环境，支持多智能体调度。',
    tag: '性能强大 · 稳定可靠',
  },
  {
    num: '04',
    image: new URL('../../assets/zft/ld4.png', import.meta.url).href,
    title: '高清触控可视屏',
    desc: 'AI执行全程留痕，可视化监控思考链路与执行日志，实现"黑盒变红盒"，对工作了如指掌。',
    tag: '黑盒变红盒 · 增强控制',
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="item in items"
          :key="item.num"
          class="flex flex-col p-6 md:p-8 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="mt-4 aspect-video rounded-xl overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm text-ink-secondary leading-relaxed flex-1">
            {{ item.desc }}
          </p>
          <Chip class="mt-4 self-start !bg-[#E6F5FB] !text-[#1A8BC4]">{{ item.tag }}</Chip>
        </div>
      </div>
    </div>
  </section>
</template>
