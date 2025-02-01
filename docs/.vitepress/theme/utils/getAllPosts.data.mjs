import { createContentLoader } from 'vitepress'

export default createContentLoader([
    '/posts/**/*.md',
    '/大学物理/**/*.md',
    '/电路基础/**/*.md',
    '/数据结构/**/*.md',
    '/编程学习/**/*.md',
    '/电路基础/**/*.md',
    '/深度学习/**/*.md'
], {
    includeSrc: false,
    render: false,
    excerpt: false,
    transform(rawData) {
        return rawData.map(page => ({
            title: page.frontmatter.title || page.url,
            details: page.frontmatter.details || '',
            // 确保使用文章本身的日期
            date: page.frontmatter.date ? new Date(page.frontmatter.date) : new Date(0),  // 为空时使用默认日期
            image: page.frontmatter.image || '',
            link: page.url,
            showInHome: page.frontmatter.showInHome || false
        }))
            .sort((a, b) => b.date - a.date);  // 按日期降序排序
    }



})