/**
 * 统一处理本地图片路径，确保动态路径引用的图片也能被 Vite 构建时处理。
 *
 * 使用 import.meta.glob 在构建阶段收集所有图片资源，运行时按相对路径查找。
 * 调用方式：
 *   getImageUrl('hzqy/zyxt.webp')
 *   getImageUrl('@/assets/hzqy/zyxt.webp')
 */
const imageModules = import.meta.glob(
  '/src/assets/**/*.{webp,png,jpg,jpeg,gif,svg}',
  {
    eager: true,
    import: 'default',
  }
)

export function getImageUrl(path: string): string {
  const normalized = path
    .replace(/^@\/assets\//, '')
    .replace(/^\/assets\//, '')
    .replace(/^\//, '')

  const key = `/src/assets/${normalized}`
  const module = imageModules[key]

  if (module) {
    return module as string
  }

  // eslint-disable-next-line no-console
  console.warn(`[getImageUrl] 未找到图片: ${path}`)
  return ''
}
