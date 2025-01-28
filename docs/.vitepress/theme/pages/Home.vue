<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import ArticleList from '../components/ArticleList.vue'

// 控制导航栏显示/隐藏的逻辑
const showNav = ref(true)
const lastScrollPosition = ref(0)

const handleScroll = () => {
    const currentScrollPosition = window.scrollY
    if (currentScrollPosition < 0) return

    // 向下滚动时隐藏,向上滚动时显示
    if (currentScrollPosition > lastScrollPosition.value) {
        showNav.value = false
    } else {
        showNav.value = true
    }
    lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="home">
        <!-- 英雄区域 -->
        <div class="hero-section">
            <div class="hero-content">
                <NavBar :class="{ 'nav-hidden': !showNav }" />
                <h1 class="hero-title">福轩的学习小屋</h1>
                <p class="hero-subtitle">记录记录记录一下</p>
            </div>

        </div>

        <!-- 文章列表区域 -->
        <div class="content-section">
            <ArticleList />
        </div>

        <!-- 页脚 -->
        <footer class="footer">
            <p>© 2024 福轩的学习小屋</p>
        </footer>
    </div>
</template>

<style scoped>
.home {
    background-color: var(--vp-c-bg-soft);
    min-height: 100vh;

    display: flex;
    flex-direction: column;
}

.hero-section {
    height: 60vh;
    width: 100%;
    background-image: url('/images/hero-bg.png');
    /* 需要替换为你的背景图片 */
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.hero-section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    /* 渐变区域高度 */
    background: linear-gradient(to bottom,
            transparent,
            var(--vp-c-bg-soft));
}



.hero-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
}

.hero-title {
    font-size: 30px;
    letter-spacing: 0.2rem;
    /* margin-bottom: 2rem; */
}

.hero-subtitle {
    font-size: 20px;
    letter-spacing: 0.3rem;
    margin-top: 2rem;
}

.content-section {

    flex: 1;
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    /* padding: 2rem 10rem; */
}

.footer {
    color: var(--vp-c-text-1);
    background-color: var(--vp-c-bg-alt);
    padding: 2rem;
    text-align: center;
}


/* 导航栏动画 */
.nav-hidden {
    transform: translateY(-100%);
}

/* 响应式调整 */
@media (max-width: 420px) {
    .home {
        width: 420px;
    }

    .hero-section {
        height: auto;
        /* 移除固定高度 */
        aspect-ratio: 934/700;
        /* 保持图片比例 */
    }

    .hero-title {
        font-size: 2rem;
        /* 调整移动端标题大小 */
    }

    .hero-subtitle {
        font-size: 1.2rem;
        /* 调整移动端副标题大小 */
    }
}

/* 更小屏幕的额外调整 */
@media (max-width: 320px) {


    .hero-title {
        font-size: 1.8rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}
</style>