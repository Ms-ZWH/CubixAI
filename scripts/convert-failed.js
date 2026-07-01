import fs from 'fs/promises'
import sharp from 'sharp'

const files = [
  'src/assets/icon/xhs.png',
  'src/assets/hzqy/ttay.png',
  'src/assets/hzhb/zp.png'
]

async function main() {
  for (const file of files) {
    const webpFile = file.replace(/\.png$/i, '.webp')
    await sharp(file).webp({ quality: 80, effort: 4 }).toFile(webpFile)
    await fs.unlink(file)
    console.log('converted', file)
  }
}

main().catch(console.error)
