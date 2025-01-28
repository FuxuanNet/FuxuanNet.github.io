import { createContentLoader } from 'vitepress';

const pages = createContentLoader('/编程学习/*.md', {
    includeSrc: false,
    render: false,
    excerpt: false,
    transform(rawData) {
        return rawData.sort((a, b) => {
            const dateA = a.frontmatter.date ? new Date(a.frontmatter.date) : new Date(0);
            const dateB = b.frontmatter.date ? new Date(b.frontmatter.date) : new Date(0);
            return dateB - dateA;
        });
    },
});

export default pages;
