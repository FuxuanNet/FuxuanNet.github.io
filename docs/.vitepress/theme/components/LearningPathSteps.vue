<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    steps: {
        type: Array,
        required: true
    }
});

const activeStep = ref(0);
const sectionRefs = ref([]);
const isStepsVertical = ref(false);
const progressBarRef = ref(null);
const progressBarOffset = ref(0);

// 初始化 refs 数组
onMounted(() => {
    sectionRefs.value = new Array(props.steps.length).fill(null);
    progressBarOffset.value = progressBarRef.value?.offsetTop || 0;

    // 添加滚动监听
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    if (observer.value) {
        observer.value.disconnect();
    }
});

const handleScroll = () => {
    if (progressBarRef.value) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isStepsVertical.value = scrollTop > progressBarOffset.value;
    }
};

// Observer 配置
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

    setTimeout(() => {
        sectionRefs.value.forEach((ref, index) => {
            if (ref) observer.value.observe(ref);
        });
    }, 100);
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
    <div class="learning-path-content">
        <!-- 步骤条容器 -->
        <div ref="progressBarRef" class="progress-bar " :class="{ 'vertical': isStepsVertical }">
            <el-steps :active="activeStep" finish-status="success"
                :direction="isStepsVertical ? 'vertical' : 'horizontal'" align-center
                :space="isStepsVertical ? 50 : 200">
                <el-step v-for="(step, index) in steps" :key="index" :title="step.title" @click="scrollToSection(index)"
                    class="step-item" />
            </el-steps>
        </div>

        <!-- 内容区域 -->
        <div class="learning-steps-container" :class="{ 'with-vertical-steps': isStepsVertical }">
            <div class="steps-content">
                <div v-for="(step, index) in steps" :key="index" :ref="el => setRef(el, index)" class="step-section">
                    <div class="step-header">
                        <span class="step-number">第 {{ index + 1 }} 讲</span>
                        <h2>{{ step.title }}</h2>
                    </div>

                    <p class="step-description">{{ step.description }}</p>

                    <div class="articles-container">
                        <div v-for="(article, articleIndex) in step.articles" :key="articleIndex" class="article-card">
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
</template>

<style scoped>


.learning-path-content {
    width: 100%;
    position: relative;
}

.progress-bar {
    width: 100%;
    max-width: 1200px;
    margin: 20vh auto 40vh;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(40px);
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-bar.vertical {
    position: fixed;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    z-index: 100;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(20px);
    padding: 2rem 1rem;
}

.learning-steps-container {
    width: 100%;
    max-width: 900px;
    margin: 10vh auto;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.learning-steps-container.with-vertical-steps {
    margin-left: calc(300px + 4rem);
    width: calc(100% - 300px - 4rem);
}

.steps-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.step-section {

    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.step-section:hover {
    transform: translateY(-2px);
}

.step-header {
    margin-bottom: 1.5rem;
}

.step-item {

    cursor: pointer;
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
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.articles-container {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.article-card {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.article-card:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
}

.article-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.article-link:hover {
    color: var(--vp-c-brand);
}

@media (max-width: 1024px) {
    .progress-bar.vertical {
        left: 1rem;
        width: 250px;
    }

    .learning-steps-container.with-vertical-steps {
        margin-left: calc(250px + 2rem);
        width: calc(100% - 250px - 2rem);
    }
}

@media (max-width: 768px) {
    .progress-bar.vertical {
        position: fixed;
        top: auto;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        transform: none;
        border-radius: 12px 12px 0 0;
        max-height: 200px;
    }

    .learning-steps-container.with-vertical-steps {
        margin-left: auto;
        width: 100%;
        margin-bottom: 220px;
    }

    .step-section {
        padding: 1.5rem;
    }

    .articles-container {
        grid-template-columns: 1fr;
    }
}
</style>