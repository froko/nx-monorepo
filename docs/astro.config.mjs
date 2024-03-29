import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

// https://astro.build/config
export default defineConfig({
  outDir: '../dist/docs',
  vite: { ssr: { noExternal: ['unist-util-visit'] } },
  markdown: {
    remarkPlugins: [simplePlantUML]
  },
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/froko/nx-monorepo'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' }
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
