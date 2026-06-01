import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface ScrollRevealOptions {
  y?: number
  x?: number
  opacity?: number
  duration?: number
  delay?: number
  ease?: string
  start?: string
}

export function useScrollReveal(
  elRef: Ref<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const {
    y = 24,
    x = 0,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    ease = 'power2.out',
    start = 'top 85%',
  } = options

  let trigger: ScrollTrigger | null = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    gsap.set(el, { y, x, opacity })

    trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease,
        })
      },
    })
  })

  onUnmounted(() => {
    trigger?.kill()
  })
}
