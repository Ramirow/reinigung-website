import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'

function sitemapPlugin(baseUrl: string) {
  return {
    name: 'sitemap',
    closeBundle() {
      const origin = baseUrl.replace(/\/$/, '')
      if (!origin) return

      const pages = ['/', '/impressum', '/datenschutz']
      const body = pages
        .map(
          (path) => `  <url>
    <loc>${origin}${path === '/' ? '/' : path}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
        )
        .join('\n')

      writeFileSync(
        resolve('dist/sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL ?? ''

  return {
    plugins: [react(), tailwindcss(), sitemapPlugin(siteUrl)],
  }
})
