import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface CountUpOptions {
  duration?: number
  delay?: number
  start?: string
  decimals?: number
}

export function useCountUp(
  elRef: Ref<HTMLElement | null>,
  target: number,
  options: CountUpOptions = {}
) {
  const { duration = 2, delay = 0, start = 'top 85%', decimals = 0 } = options

  const displayValue = ref(0)
  let trigger: ScrollTrigger | null = null
  let tween: gsap.core.Tween | null = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    const obj = { value: 0 }

    trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        tween = gsap.to(obj, {
          value: target,
          duration,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            const factor = Math.pow(10, decimals)
            displayValue.value = Math.round(obj.value * factor) / factor
          },
        })
      },
    })
  })

  onUnmounted(() => {
    tween?.kill()
    trigger?.kill()
  })

  return { displayValue }
}
