import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import en from './locales/en'
import ja from './locales/ja'
import ko from './locales/ko'

export type SupportedLocale = 'zh-CN' | 'en' | 'ja' | 'ko'

export const localeMap: Record<string, SupportedLocale> = {
  '中文': 'zh-CN',
  'English': 'en',
  '日本語': 'ja',
  '한국어': 'ko',
}

export const localeLabels: Record<SupportedLocale, string> = {
  'zh-CN': '中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
}

function getInitialLocale(): SupportedLocale {
  // 1. Check localStorage
  const stored = localStorage.getItem('locale')
  if (stored && ['zh-CN', 'en', 'ja', 'ko'].includes(stored)) {
    return stored as SupportedLocale
  }
  // 2. Check browser language
  const navLang = navigator.language
  if (navLang.startsWith('zh')) return 'zh-CN'
  if (navLang.startsWith('ja')) return 'ja'
  if (navLang.startsWith('ko')) return 'ko'
  if (navLang.startsWith('en')) return 'en'
  // 3. Default to Chinese
  return 'zh-CN'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    en,
    ja,
    ko,
  },
})

export default i18n
