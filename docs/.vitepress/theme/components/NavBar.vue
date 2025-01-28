<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { Icon } from '@iconify/vue'

const { theme, isDark } = useData()
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleDark = () => {
    isDark.value = !isDark.value
    document.documentElement.className = isDark.value ? 'dark' : ''
}
</script>

<template>
    <nav class="navbar">
        <div class="nav-content">
            <!-- 网站标题 -->
            <div class="nav-title">
                {{ theme.siteTitle }}
            </div>

            <!-- 桌面端导航 -->
            <div class="desktop-nav">
                <a v-for="item in theme.nav" :key="item.link" :href="item.link" class="nav-link">
                    {{ item.text }}
                </a>

                <button class="nav-icon-btn" @click="toggleDark">
                    <Icon :icon="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
                </button>

                <a v-if="theme.socialLinks?.[0]?.link" :href="theme.socialLinks[0].link" target="_blank"
                    class="nav-icon-btn">
                    <Icon icon="mdi:github" class="w-5 h-5" />
                </a>
            </div>

            <!-- 移动端菜单按钮 -->
            <button class="menu-button" @click="toggleMenu">
                <Icon :icon="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
            </button>
        </div>

        <!-- 移动端下拉菜单 -->
        <div class="mobile-menu" :class="{ 'show': isMenuOpen }">
            <div class="mobile-menu-content">
                <a v-for="item in theme.nav" :key="item.link" :href="item.link" class="mobile-nav-link"
                    @click="isMenuOpen = false">
                    {{ item.text }}
                </a>

                <div class="mobile-menu-footer">
                    <button class="mobile-menu-btn" @click="toggleDark">
                        <Icon :icon="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
                        {{ isDark ? '切换浅色模式' : '切换深色模式' }}
                    </button>

                    <a v-if="theme.socialLinks?.[0]?.link" :href="theme.socialLinks[0].link" target="_blank"
                        class="mobile-menu-btn">
                        <Icon icon="mdi:github" class="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    padding: 0.7rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-title {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    font-weight: 500;
    color: #fff;
    /* color: var(--vp-c-text-1); */
}

.desktop-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.nav-link {
    color: #fff;
    /* color: var(--vp-c-text-1); */
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
}

.nav-link:hover {
    color: var(--vp-c-brand);
}

.nav-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: #fff;
    /* color: var(--vp-c-text-1); */
    cursor: pointer;
    transition: background-color 0.2s;
}

.nav-icon-btn:hover {
    background: rgba(0, 0, 0, 0.05);
}

.menu-button {
    display: none;
    background: transparent;
    border: none;
    padding: 0.5rem;
    color: #fff;
    /* color: var(--vp-c-text-1); */
    cursor: pointer;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg);
    /* 浅色模式下纯白背景 */
    transform: translateY(-200%);
    transition: transform 0.3s ease;
}

.mobile-menu.show {
    display: block;
    transform: translateY(-1%);
}

.mobile-menu-content {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;

}


/* 移动端菜单项样式 */
.mobile-nav-link {
    padding: 0.8rem 1.5rem;
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 0.9rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu-footer {
    margin-top: 0.5rem;
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: var(--vp-c-text-1);
    cursor: pointer;
    transition: background-color 0.2s;
}

.mobile-menu-btn:hover {
    background: rgba(0, 0, 0, 0.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .nav-content {
        padding: 0.7rem 1.2rem;
    }

    .nav-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .desktop-nav {
        display: none;
    }

    .menu-button {
        display: block;
        margin-left: auto;
    }

    .mobile-menu {
        display: block;
    }
}
</style>