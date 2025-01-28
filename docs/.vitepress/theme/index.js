import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

import ElementPlus from 'element-plus';
import { useData } from 'vitepress'
import Home from './pages/Home.vue'
import Posts from './components/PostsMenu.vue'
import Physics from './components/PhysicsMenu.vue'
import ArticleList from './components/ArticleList.vue'
import NavBar from './components/NavBar.vue'
import CodeMenu from './components/CodeMenu.vue';
import CustomMeta from './components/CustomMeta.vue';

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    // 如果 frontmatter.layout 是 'home1'，则使用 Home.vue
    if (frontmatter.value.layout === 'home') {
      return h(Home)
    }

    // 否则，使用默认布局
    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件或插件
    app.component('Posts', Posts)
    app.component('Physics', Physics)
    app.component('ArticleList', ArticleList)
    app.component('NavBar', NavBar)
    app.component('CodeMenu', CodeMenu)
    app.component('CustomMeta', CustomMeta)
    app.use(ElementPlus);

  } 
}