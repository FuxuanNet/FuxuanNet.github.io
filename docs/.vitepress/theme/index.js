import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

import ElementPlus from 'element-plus';
import { useData } from 'vitepress'
import Home from './pages/Home.vue'
import Path from './pages/Path.vue'
import Posts from './components/PostsMenu.vue'
import Physics from './components/PhysicsMenu.vue'
import ArticleList from './components/ArticleList.vue'
import NavBar from './components/NavBar.vue'
import CodeMenu from './components/CodeMenu.vue';
import CustomMeta from './components/CustomMeta.vue';
import DeepMenu from './components/DeepMenu.vue';
import MatrixMenu from './components/MatrixMenu.vue';
import LearningPathSteps from './components/LearningPathSteps.vue';
import LeetCodeMenu from './components/LeetCodeMenu.vue';
import CADMenu from './components/CADMenu.vue';
import OSMenu from './components/OSMenu.vue';

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    // 如果 frontmatter.layout 是 'home1'，则使用 Home.vue
    if (frontmatter.value.layout === 'home') {
      return h(Home)
    } else if (frontmatter.value.layout === 'LearningPath') {
      return h(Path)
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
    app.component('DeepMenu', DeepMenu)
    app.component('LeetCodeMenu', LeetCodeMenu)
    app.component('MatrixMenu', MatrixMenu)
    app.component('CustomMeta', CustomMeta)
    app.component('CADMenu', CADMenu)
    app.component('OSMenu', OSMenu)
    app.component('LearningPathSteps', LearningPathSteps)

    app.use(ElementPlus);

  }
}