<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
import { ElPagination } from 'element-plus'
import { data as posts } from '../utils/getAllPosts.data.mjs'


const { theme } = useData()

const currentPage = ref(1)
const pageSize = 3
// 过滤出需要在首页显示的文章
const allArticles = computed(() =>
    posts.filter(article => article.showInHome)
)

// 计算当前页显示的文章
const displayedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return allArticles.value.slice(start, end)
})

// 计算总文章数（用于分页）
const totalArticles = computed(() => allArticles.value.length)


// 日期格式化函数
const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // 月份补零
    const day = String(date.getDate()).padStart(2, '0') // 日期补零
    return `${year}-${month}-${day}`
}
</script>

<template>
    <div class="article-list">
        <div v-for="(article, index) in displayedArticles" :key="article.link" class="article-card"
            :class="{ 'image-right': index % 2 !== 0 }">

            <!-- 在非移动端显示图片 -->
            <div class="article-image hidden md:block">
                <img :src="article.image || '/images/default-article-image.png'" :alt="article.title">
            </div>

            <div class="article-content">
                <h2 class="article-title">
                    <a :href="article.link">{{ article.title }}</a>
                </h2>
                <p class="article-details">{{ article.details }}</p>
                <div class="article-date">{{ formatDate(article.date) }}</div>
            </div>
        </div>

        <el-pagination v-if="totalArticles > pageSize" v-model:current-page="currentPage" :page-size="pageSize"
            :total="totalArticles" layout="prev, pager, next" class="pagination dark" />
    </div>
</template>

<style scoped>
.article-list {
    width: 900px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.article-card {
    display: flex;
    background: linear-gradient(135deg, rgba(118, 126, 165, 0.5), rgba(81, 88, 124, 0.7));
    /* 渐变背景 */
    backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid var(--vp-c-border);
    overflow: hidden;
    font-family: Arial, sans-serif;
    /* 字体 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.article-card:hover {
    transform: translateY(-4px);
}

.article-image {
    flex: 0 0 40%;
}

.article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.article-content {
    flex: 1;
    padding: 1.5rem;
    color: white;
}

.article-title {
    font-size: 20px;

    margin: 0 0 1rem;
}

.article-title a {
    color: inherit;
    text-decoration: none;
}

.article-details {
    margin: 0 0 1rem;
    color: rgba(255, 255, 255, 0.8);
}

.article-date {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.image-right {
    flex-direction: row-reverse;
}

.pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

:deep(.el-pagination) {
    --el-pagination-bg-color: transparent;
    --el-pagination-text-color: white;
    --el-pagination-hover-color: var(--vp-c-brand);
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .article-list {
        width: 800px;
    }
}

@media (max-width: 800px) {
    .article-list {
        width: 600px;
    }
}


@media (max-width: 600px) {
    .article-list {
        width: 400px;
    }

    .article-card {
        flex-direction: column;
    }



    .article-content {
        padding: 1rem;
    }
}

@media (max-width: 468px) {
    .article-list {
        width: 350px;
        margin-top: 20px;
    }

    /* .article-image {
        display: none;
    } */
}
</style>