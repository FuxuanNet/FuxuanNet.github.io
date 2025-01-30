import { defineConfig } from 'vitepress'
import { set_sidebar } from './gen_sidebar'

export default defineConfig({
  title: "福轩的学习小屋",
  description: "我的知识库。",
  base: '/',
  markdown: {
    math: true,
    toc: {
      level: [1, 2, 3, 4, 5], // 默认显示 h2 和 h3
    },
    image: {
      lazyLoading: true // 为所有图片启用懒加载。
    }
  },
  themeConfig: {
    siteTitle: '福轩的不学习小屋',
    outline: {
      level: [1, 2, 3, 4, 5], // 显示二级、三级、四级、五级标题...
      label: '目录' // 自定义目录标题
    },
    nav: [
      { text: '回到首页', link: '/' },
      { text: '编程学习', link: '/编程学习/' },
      { text: '大学物理', link: '/大学物理/' },
      { text: '电路基础', link: '/电路基础/' },
    ],
    sidebar: {
      '/编程学习': set_sidebar('/编程学习/'),
      '/大学物理': set_sidebar('/大学物理/'),
      '/电路基础': set_sidebar('/电路基础/'),
      '/数据结构' : set_sidebar('/数据结构/'),
      '/posts' : set_sidebar('/posts/'),
      '/': set_sidebar('/'),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FuxuanNet' }
    ]
  }
})
