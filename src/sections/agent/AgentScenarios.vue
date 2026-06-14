<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const scenarios = [
  { image: new URL('../../assets/zft/cj1.png', import.meta.url).href, title: '邮件助理', desc: '自动识别、提炼、归类，告别邮件海洋' },
  { image: new URL('../../assets/zft/cj2.png', import.meta.url).href, title: '公众号助理', desc: '热点选题 + 自动撰写，内容创作提效 10 倍' },
  { image: new URL('../../assets/zft/cj3.png', import.meta.url).href, title: '新闻资讯抓取', desc: '全网热点智能聚合，要点自动提炼' },
  { image: new URL('../../assets/zft/cj4.png', import.meta.url).href, title: '企业信息监测', desc: '实时追踪竞品动态，决策数据支撑' },
  { image: new URL('../../assets/zft/cj5.png', import.meta.url).href, title: 'PPT 助理', desc: '一句话生成专业大纲，自动排版' },
  { image: new URL('../../assets/zft/cj6.png', import.meta.url).href, title: '小红书助理', desc: '拆解爆款基因，生成种草文案' },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          六大应用场景
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="s in scenarios"
          :key="s.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-4">
            <img
              :src="s.image"
              :alt="s.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg font-semibold text-ink-primary">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-ink-secondary flex-1">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
