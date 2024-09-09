// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

// https://astro.build/config
export default defineConfig({
  outDir: '../dist/docs',
  markdown: {
    remarkPlugins: [simplePlantUML]
  },
  integrations: [
    starlight({
      title: 'nx-monorepo',
      social: {
        github: 'https://github.com/froko/nx-monorepo'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ]
    })
  ]
});
