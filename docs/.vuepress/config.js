module.exports = {
  title: 'Devang Patel',
  description: 'tech talent work',
  dest: './public',
  themeConfig: {
    repo: 'https://github.com/devang-p-patel/devang-p-patel.github.io.git',
    repoLabel: 'Repo',
    editLinks: true,
    docsDir: 'docs',
    displayAllHeaders: false,
    search: true,
    SearchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean,
    smoothscroll: true,


    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/devang-patel-5890378a/' },
    ],

    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
      ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
      ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],

    plugins: [
      '@vuepress/last-updated',
      'vuepress-plugin-reading-time',
      'vuepress-plugin-janitor',
      '@vuepress/medium-zoom',
      ['@vuepress/google-analytics', {
        ga: '' // UA-00000000-0}],
      }
      ]
    ],


    sidebar: {
      '/principles/': [
        'life',
        'business',
        'tech',
      ],
      '/blog/': [
        'augmented-reality',
        'blog-styling',
        'blog-posts-that-inspire-me',
        'my-first-post',
      ],
      '/knowledge/': [
        'thinking',
        'leadership',
        'people'
      ]
    }
  },






}
