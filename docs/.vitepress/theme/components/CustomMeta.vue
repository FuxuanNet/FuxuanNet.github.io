<!-- .vitepress/theme/CustomMeta.vue -->
<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <div v-if="frontmatter.date || frontmatter.tags" class="custom-meta">
        <div v-if="frontmatter.date" class="date">
            发布日期: {{ frontmatter.date }}
        </div>
        <div v-if="frontmatter.tags" class="tags">
            标签:
            <span v-for="tag in frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
    </div>
</template>

<style scoped>
.custom-meta {
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
}

.date {
    margin-bottom: 10px;
}

.tags {
    display: flex;
    gap: 8px;
}

.tag {
    padding: 4px 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
}
</style>