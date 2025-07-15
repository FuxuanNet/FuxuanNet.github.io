<script setup>
import { data as pages } from "../utils/cad.data.mjs";

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};
</script>

<template>
    <div class="timeline-container">
        <h1 class="timeline-title">中望实习的学习笔记</h1>
        <el-timeline>
            <el-timeline-item v-for="item in pages" :key="item.url" :timestamp="formatDate(item.frontmatter.date)"
                placement="top" :hide-timestamp="false">
                <el-card class="timeline-card">
                    <template #header>
                        <div class="card-header">
                            <a :href="item.url" class="title-link">
                                <h3 class="title">{{ item.frontmatter.title }}</h3>
                            </a>
                            <span class="date">{{ formatDate(item.frontmatter.date) }}</span>
                        </div>
                    </template>
                    <div class="card-content">
                        <p class="details">{{ item.frontmatter.details }}</p>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<style scoped>
.timeline-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.timeline-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--vp-c-text-1);
    text-align: center;
}

.timeline-card {
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--vp-c-divider);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
    /* 减小内边距 */
}

.title-link {
    text-decoration: none;
    color: var(--vp-c-brand);
    cursor: pointer;
}

.title-link:hover {
    color: var(--vp-c-brand-dark);
}

.card-header .title {
    margin: 0;
    font-size: 1.1rem;
    /* 稍微减小字体 */
    font-weight: 500;
}

.card-header .date {
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
}

.card-content {
    padding: 4px 0;
    /* 减小内边距 */
}

.details {
    color: var(--vp-c-text-2);
    margin: 0;
    /* 移除底部间距 */
    font-size: 0.9rem;
    /* 稍微减小字体 */
    line-height: 1.4;
    /* 减小行高 */
}

:deep(.el-timeline-item__timestamp) {
    color: var(--vp-c-text-2);
    font-weight: 500;
}

:deep(.el-timeline-item__node) {
    background-color: var(--vp-c-brand);
}

:deep(.el-timeline-item__tail) {
    border-left-color: var(--vp-c-divider);
}

:deep(.el-card__header) {
    padding: 10px 15px;
    /* 减小卡片头部内边距 */
}

:deep(.el-card__body) {
    padding: 10px 15px;
    /* 减小卡片内容内边距 */
}

@media (max-width: 640px) {
    .timeline-container {
        padding: 0 0.5rem;
    }

    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        /* 减小间距 */
    }

    .card-header .date {
        font-size: 0.8rem;
    }
}
</style>