import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const assetsDir = path.join(rootDir, 'src', 'assets')
const srcDir = path.join(rootDir, 'src')

const imageExts = ['.png', '.jpg', '.jpeg']
const codeExts = ['.vue', '.ts', '.js', '.css', '.scss']

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true, recursive: true })
  const files = []
  for (const entry of entries) {
    if (entry.isFile()) {
      files.push(path.join(entry.parentPath ?? entry.path, entry.name))
    }
  }
  return files
}

async function main() {
  const allFiles = await walk(assetsDir)
  const imageFiles = allFiles.filter((f) =>
    imageExts.includes(path.extname(f).toLowerCase())
  )

  console.log(`Found ${imageFiles.length} images in src/assets`)

  const converted = []
  const failed = []

  for (const file of imageFiles) {
    const webpFile = file.replace(/\.(png|jpe?g)$/i, '.webp')
    try {
      await sharp(file)
        .webp({ quality: 80, effort: 4 })
        .toFile(webpFile)
      await fs.unlink(file)
      converted.push(path.relative(rootDir, file))
    } catch (err) {
      failed.push({ file: path.relative(rootDir, file), error: err.message })
      // cleanup partial output
      try {
        await fs.unlink(webpFile)
      } catch {}
    }
  }

  console.log(`Converted ${converted.length} images to .webp`)
  if (failed.length) {
    console.error(`Failed to convert ${failed.length} images:`)
    failed.forEach((f) => console.error(`  ${f.file}: ${f.error}`))
  }

  // Update source references
  const srcFiles = (await walk(srcDir)).filter((f) =>
    codeExts.includes(path.extname(f).toLowerCase())
  )

  const assetPathRegex =
    /(@\/assets\/|(?:\.\.\/)+assets\/|\\.\/assets\/|\/assets\/)([^'"\s)]+)\.(png|jpe?g)/gi

  let updatedFiles = 0
  for (const file of srcFiles) {
    const content = await fs.readFile(file, 'utf8')
    const newContent = content.replace(assetPathRegex, (_match, prefix, filename) => {
      return prefix + filename + '.webp'
    })
    if (newContent !== content) {
      await fs.writeFile(file, newContent, 'utf8')
      updatedFiles++
    }
  }

  console.log(`Updated ${updatedFiles} source files`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
