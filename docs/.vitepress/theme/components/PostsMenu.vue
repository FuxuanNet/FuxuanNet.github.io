<script setup>
import { data as pages } from "../utils/posts.data.mjs";
</script>

<template>
    <div>
        目录页
        <div v-for="item in pages" :key="item.url" class="mg">
            <div>
                title: {{ item.frontmatter.title }}
            </div>
            <div>
                date: {{ item.frontmatter.date }}
            </div>
            <div>
                url: <a :href="item.url">{{ item.url }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mg {
    margin: 10px;
    padding: 2px;
    border: 1px solid #ccc;

}
</style>