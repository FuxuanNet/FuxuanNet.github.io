<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';
import NavBar from '../components/NavBar.vue';
import LearningPathSteps from '../components/LearningPathSteps.vue';

const { frontmatter } = useData();
const showNav = ref(true);
</script>

<template>
    <div class="learning-path">
        <div class="hero-section">
            <div class="hero-content">
                <NavBar :class="{ 'nav-hidden': !showNav }" />
                <div class ="hero-text">
                    <h1 class="hero-title">{{ frontmatter.title }}</h1>
                    <p class="hero-subtitle">{{ frontmatter.details }}</p>
                </div>
                <LearningPathSteps :steps="frontmatter.steps" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.learning-path {
    min-height: 100vh;
}

.hero-section {
    min-height: 100vh;
    width: 100%;
    background-image: url('/images/hero-bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
}

.hero-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2rem;
}

.hero-text{
    display: flex;
    flex-direction: column;
    height: 40vh;
    align-self: center;
    justify-content:end;
}

.hero-title {
    font-size: 30px;
    margin-bottom: 2rem;
    margin-top: 4rem;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
        margin-top: 3rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .hero-content {
        padding: 1rem;
    }
}
</style>