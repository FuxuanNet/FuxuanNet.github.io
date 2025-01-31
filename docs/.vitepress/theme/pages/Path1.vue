<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useData } from 'vitepress';
import NavBar from '../components/NavBar.vue';  // 确保路径正确

const { frontmatter } = useData();
const activeStep = ref(0);
const sectionRefs = ref([]);
const showNav = ref(true);

// 初始化 refs 数组
onMounted(() => {
    sectionRefs.value = new Array(frontmatter.steps.length).fill(null);
});

// 观察器配置
const observer = ref(null);
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0
};

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Number(entry.target.dataset.index);
                if (!isNaN(index)) {
                    activeStep.value = index;
                }
            }
        });
    }, observerOptions);

    // 延迟观察以确保 refs 已经设置
    setTimeout(() => {
        sectionRefs.value.forEach((ref, index) => {
            if (ref) observer.value.observe(ref);
        });
    }, 100);
});

onUnmounted(() => {
    if (observer.value) {
        observer.value.disconnect();
    }
});

const scrollToSection = (index) => {
    sectionRefs.value[index]?.scrollIntoView({ behavior: 'smooth' });
};

const setRef = (el, index) => {
    if (el) {
        el.dataset.index = index;
        sectionRefs.value[index] = el;
    }
};
</script>

<template>
    <div class="learning-path">
        <!-- 英雄区域 -->
        <div class="hero-section">
            <div class="hero-content">
                <NavBar :class="{ 'nav-hidden': !showNav }" />
                <h1 class="hero-title">{{ frontmatter.title }}</h1>
                <p class="hero-subtitle">{{ frontmatter.details }}</p>

                <!-- 进度条 -->
                <div class="progress-bar">
                    <el-steps :active="activeStep" finish-status="success" :space="200">
                        <el-step v-for="(step, index) in frontmatter.steps" :key="index" :title="step.title"
                            @click="scrollToSection(index)" class="step-item" />
                    </el-steps>
                </div>

            </div>
            <!-- 主要内容区域 -->
            <div class="content">
                <!-- 学习步骤 -->
                <div class="steps-container">
                    <div v-for="(step, index) in frontmatter.steps" :key="index" :ref="el => setRef(el, index)"
                        class="step-section">
                        <div class="step-header">
                            <span class="step-number">Stage {{ index + 1 }}</span>
                            <h2>{{ step.title }}</h2>
                        </div>

                        <p class="step-description">{{ step.description }}</p>

                        <div class="articles-container">
                            <div v-for="(article, articleIndex) in step.articles" :key="articleIndex"
                                class="article-card">
                                <h3>
                                    <a :href="article.path" class="article-link">
                                        {{ article.title }}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.learning-path {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.hero-section {
    height: 100vh;
    width: 100%;
    background-image: url('/images/hero-bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* 背景图片固定 */
    position: relative;
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
    padding: 2rem;
}

.hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.progress-bar {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    width: 20rem;
    padding: 20px;
    border-radius: 12px;
    margin-top: 2rem;
}

.content {
    flex: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 24px;
    background-color: var(--vp-c-bg-soft);
}

.step-section {
    margin-bottom: 60px;
    padding: 40px;
    background: var(--vp-c-bg);
    border-radius: 12px;
    border: 1px solid var(--vp-c-divider);
    transition: transform 0.3s ease;
}

.step-section:hover {
    transform: translateY(-2px);
}

.step-header {
    margin-bottom: 24px;
}

.step-number {
    display: inline-block;
    padding: 4px 12px;
    background: var(--vp-c-brand);
    color: white;
    border-radius: 16px;
    font-size: 0.9rem;
    margin-bottom: 12px;
}

.step-description {
    color: var(--vp-c-text-2);
    margin-bottom: 32px;
    line-height: 1.6;
}

.articles-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.article-card {
    padding: 20px;
    background: var(--vp-c-bg);
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    transition: all 0.3s ease;
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-link {
    color: var(--vp-c-brand);
    text-decoration: none;
    font-weight: 500;
}

.article-link:hover {
    color: var(--vp-c-brand-dark);
}

.step-item {
    cursor: pointer;
}

@media (max-width: 768px) {
    .content {
        padding: 0 16px;
    }

    .path-header h1 {
        font-size: 2rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .progress-bar {
        padding: 10px;
        width: 100%;
        overflow-x: auto;
    }

    .content {
        padding: 1rem;
    }

    .step-section {
        padding: 24px;
    }

    .articles-container {
        grid-template-columns: 1fr;
    }
}
</style>