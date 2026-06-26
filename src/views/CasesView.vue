<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'
import CasesHero from '../sections/cases/CasesHero.vue'
import CasesCTA from '../sections/cases/CasesCTA.vue'
import BrandButton from '../components/BrandButton.vue'
import CaseDetailModal from '../components/CaseDetailModal.vue'
import { cases, categories } from '../data/cases'
import type { CaseItem } from '../data/cases'

const clientLogosRow1 = [
  'bjyz.png', 'chjh.png', 'dyck.png', 'gzlgxy.png', 'hjcm.png',
  'jy.png', 'lseg.png', 'mbkj.png', 'mjtq.png', 'pkz.png',
]

const clientLogosRow2 = [
  'qhdx.png', 'qmzx.png', 'wksgj.png', 'xnsd.png', 'zgc.png',
  'zgdx.png', 'zglt.png', 'zgyd.png', 'zjxx.png', 'zjzy.png',
]

function getLogoUrl(name: string) {
  return new URL(`../assets/kh/${name}`, import.meta.url).href
}
  

const activeCat = ref('all')
const selectedCase = ref<CaseItem | null>(null)
const isModalOpen = ref(false)

const filteredCases = computed(() => {
  if (activeCat.value === 'all') return cases
  return cases.filter((c) => c.category === activeCat.value)
})

function switchCategory(id: string) {
  activeCat.value = id
}

function openModal(c: CaseItem) {
  selectedCase.value = c
  isModalOpen.value = true
}

watch(filteredCases, () => {
  nextTick(() => {
    gsap.fromTo(
      '.case-card',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out' }
    )
  })
})

// 初始动画
nextTick(() => {
  gsap.fromTo(
    '.case-card',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
  )
})
</script>

<template>
  <div class="min-h-screen bg-surface-base">
    <CasesHero />

    <!-- Tab -->
    <div class="sticky top-16 md:top-20 z-40 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center gap-2 overflow-x-auto" style="scrollbar-width: none;">
          <button
            v-for="item in categories"
            :key="item.id"
            class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
            :class="activeCat === item.id ? 'bg-brand text-white shadow-sm' : 'bg-[#F3F5F2] text-ink-secondary hover:text-ink-primary'"
            @click="switchCategory(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Case Cards -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8">
          <div
            v-for="c in filteredCases"
            :key="c.id"
            class="case-card rounded-3xl overflow-hidden bg-white shadow-card border border-line/50 flex flex-col lg:flex-row"
          >
            <!-- Left: Text (60%) -->
            <div class="w-full lg:w-[60%] p-6 md:p-10 flex flex-col justify-center">
              <!-- Category Label -->
              <div class="mb-3">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === c.category)?.label }}
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-2xl md:text-[28px] font-bold text-ink-primary leading-tight"
              >
                {{ c.client }}
              </h2>

              <p v-if="c.subtitle" class="mt-2 text-base text-ink-secondary">
                {{ c.subtitle }}
              </p>

              <p
                v-if="c.location"
                class="mt-2 text-sm text-ink-secondary border-l-2 border-brand pl-3"
              >
                {{ c.location }}
              </p>

              <!-- Metrics -->
              <div class="flex flex-wrap gap-6 md:gap-10 mt-6">
                <div v-for="m in c.metrics" :key="m.label">
                  <div
                    class="text-2xl md:text-3xl font-bold text-brand tracking-tight"
                  >
                    {{ m.value }}
                  </div>
                  <div class="text-sm text-ink-secondary mt-1">
                    {{ m.label }}
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="mt-8">
                <BrandButton size="sm" @click="openModal(c)">
                  案例详情
                </BrandButton>
              </div>
            </div>

            <!-- Right: Visual (40%) with clip-path -->
            <div
              class="relative w-full lg:w-[40%] min-h-[200px] lg:min-h-[320px] overflow-hidden"
              :style="{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }"
              :class="
                'lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]'
              "
            >
              <template v-if="c.image">
                <template v-if="c.id === 'c9'">
                  <div class="absolute inset-0 bg-[#2563EB] flex items-center justify-center p-6">
                    <img
                      :src="c.image"
                      class="max-w-full max-h-full object-contain"
                      :alt="c.client"
                    />
                  </div>
                </template>
                <template v-else>
                  <img
                    :src="c.image"
                    class="absolute inset-0 w-full h-full object-cover"
                    :alt="c.client"
                  />
                </template>
              </template>
              <template v-else>
                <div
                  class="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-deep"
                />
                <div
                  class="absolute inset-0 opacity-20"
                  style="
                    background: radial-gradient(
                      circle at 30% 30%,
                      rgba(255, 255, 255, 0.3),
                      transparent 60%
                    );
                  "
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <Icon
                    :icon="c.icon"
                    class="w-24 h-24 text-white/25"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Modal -->
    <CaseDetailModal v-model="isModalOpen" :case-item="selectedCase" />

    <!-- 签约客户 -->
    <section class="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 md:mb-28">
          <h2 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">
            签约客户
          </h2>
          <p class="mt-3 text-base text-ink-secondary">
            他们都在使用我们的产品与服务
          </p>
        </div>
      </div>

      <!-- Marquee Row 1 -->
      <div class="relative w-full mb-16 md:mb-20">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track">
          <div
            v-for="logo in clientLogosRow1"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow1"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Marquee Row 2 (reverse) -->
      <div class="relative w-full">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track-reverse">
          <div
            v-for="logo in clientLogosRow2"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow2"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CasesCTA />
  </div>
</template>

<style scoped>
@keyframes cases-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes cases-marquee-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.cases-marquee-track {
  animation: cases-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cases-marquee-track-reverse {
  animation: cases-marquee-scroll-reverse 40s linear infinite;
  width: max-content;
}

.cases-marquee-track:hover,
.cases-marquee-track-reverse:hover {
  animation-play-state: paused;
}
</style>
