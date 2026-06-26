<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()
const route = useRoute()

const showProductMenu = ref(false)
const showLangMenu = ref(false)
const mobileOpen = ref(false)
const productMenuRef = ref<HTMLElement | null>(null)
const langMenuRef = ref<HTMLElement | null>(null)

const currentLang = ref('中文')
const langList = ['中文', 'English', '한국어', '日本語']

function selectLang(lang: string) {
  currentLang.value = lang
  showLangMenu.value = false
  mobileOpen.value = false
  if (lang === 'English') {
    router.push('/en/contact')
  } else if (lang === '日本語') {
    router.push('/jp/contact')
  } else if (lang === '한국어') {
    router.push('/hg/contact')
  } else if (lang === '中文') {
    router.push('/contact')
  }
}

const navItems = [
  { label: '解决方案', to: '/solutions' },
  { label: '案例', to: '/cases' },
]

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path || route.path.startsWith(path + '/')
}

function isProductActive(): boolean {
  return ['/products/chatu', '/products/agentstation', '/opc-hub', '/training'].includes(route.path)
}

function toggleProductMenu() {
  showProductMenu.value = !showProductMenu.value
}

function closeProductMenu() {
  showProductMenu.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (productMenuRef.value && !productMenuRef.value.contains(event.target as Node)) {
    showProductMenu.value = false
  }
  if (langMenuRef.value && !langMenuRef.value.contains(event.target as Node)) {
    showLangMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-surface-base/80 backdrop-blur-xl border-b border-line/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2.5">
          <img
            src="@/assets/logo.png"
            alt="软积木"
            class="h-[84px] w-[84px] md:h-[108px] md:w-[108px] rounded-2xl object-contain"
          />
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-0.5">
          <RouterLink
            to="/"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive('/') ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            首页
          </RouterLink>

          <!-- Products dropdown -->
          <div ref="productMenuRef" class="relative">
            <button
              class="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg"
              :class="isProductActive() ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
              @click.stop="toggleProductMenu"
            >
              产品
              <Icon
                icon="lucide:chevron-down"
                class="w-4 h-4 transition-transform"
                :class="showProductMenu && 'rotate-180'"
              />
            </button>
            <div
              v-show="showProductMenu"
              class="absolute top-full left-0 mt-1 w-80 bg-surface-card rounded-2xl shadow-card border border-line/50 p-2"
            >
              <RouterLink
                to="/products/chatu"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:message-square" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">ChatU（才兔）</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    企业 AI 操作系统
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/products/agentstation"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:cpu" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">智方体·AgentStation</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    AI 硬件终端
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/opc-hub"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:building-2" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">OPC Hub</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    赋能超级个体
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/training"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:book-open" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">咨询培训</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    软积木 AI 课程体系
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>

          <RouterLink
            v-for="item in [
              { label: '生态', to: '/ecosystem' },
              { label: 'AI洞察', to: '/ai-insight' },
              { label: '关于我们', to: '/contact' },
            ]"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Language Switcher -->
        <div ref="langMenuRef" class="hidden md:block relative">
          <button
            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors rounded-lg hover:bg-surface-muted"
            @click.stop="showLangMenu = !showLangMenu"
          >
            <Icon icon="lucide:globe" class="w-4 h-4" />
            <span>{{ currentLang }}</span>
            <Icon
              icon="lucide:chevron-down"
              class="w-3.5 h-3.5 transition-transform"
              :class="showLangMenu && 'rotate-180'"
            />
          </button>
          <div
            v-show="showLangMenu"
            class="absolute top-full right-0 mt-1 w-36 bg-surface-card rounded-2xl shadow-card border border-line/50 p-1.5"
          >
            <button
              v-for="l in langList"
              :key="l"
              class="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors"
              :class="currentLang === l ? 'bg-brand-soft text-brand font-medium' : 'text-ink-secondary hover:bg-surface-muted'"
              @click="selectLang(l)"
            >
              <span class="w-2 h-2 rounded-full" :class="currentLang === l ? 'bg-brand' : 'bg-line'"></span>
              {{ l }}
            </button>
          </div>
        </div>

        <!-- Mobile toggle -->
        <button class="md:hidden p-2 -mr-2" @click="mobileOpen = !mobileOpen">
          <Icon
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-6 h-6 text-ink-primary"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileOpen"
      class="md:hidden bg-surface-card border-t border-line/50 px-4 py-4 space-y-1"
    >
      <RouterLink
        to="/"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive('/') ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        首页
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wider">
        产品
      </div>
      <RouterLink
        v-for="item in [
          { label: 'ChatU', to: '/products/chatu' },
          { label: '智方体·AgentStation', to: '/products/agentstation' },
          { label: 'OPC Hub', to: '/opc-hub' },
          { label: '咨询培训', to: '/training' },
        ]"
        :key="item.to"
        :to="item.to"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <RouterLink
        v-for="item in [
          ...navItems,
          { label: '生态', to: '/ecosystem' },
          { label: 'AI洞察', to: '/ai-insight' },
          { label: '关于我们', to: '/contact' },
        ]"
        :key="item.to"
        :to="item.to"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wider">
        语言
      </div>
      <div class="flex gap-2 px-3 py-2">
        <button
          v-for="l in langList"
          :key="l"
          class="px-3 py-1.5 text-sm rounded-lg border transition-colors"
          :class="currentLang === l ? 'border-brand bg-brand-soft text-brand font-medium' : 'border-line text-ink-secondary hover:bg-surface-muted'"
          @click="selectLang(l)"
        >
          {{ l }}
        </button>
      </div>
    </div>
  </header>
</template>
