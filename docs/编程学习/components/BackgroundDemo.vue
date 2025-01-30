<template>
    <div :class="dynamicClass">
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    }
})

// 根据 type 的值动态绑定 class
const dynamicClass = computed(() => {
    return {
        'flex-demo': props.type === 'flex',
        'position-demo': props.type === 'position',
        'background-demo': props.type === 'default',
        'easy-demo': props.type === 'easy'
    };
});
</script>

<style scoped>
.background-demo {
    width: 100%;
    height: 40vh;
    background: url('/images/hero-bg.png') no-repeat;
}

.background-demo::after {
    content: '';
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, transparent, var(--vp-c-bg-soft));
    display: block;
}

.flex-demo {
    width: 100%;
    height: 40vh;
    background: url('/images/hero-bg.png') no-repeat center/cover;
    /* 背景图片 */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

}

.flex-demo::after {
    content: '';
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, transparent, var(--vp-c-bg-soft));
}

.position-demo {
    height: 40vh;
    width: 100%;
    background-image: url('/images/hero-bg.png');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.position-demo::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    /*渐变区域高度*/
    background: linear-gradient(to bottom,
            transparent,
            var(--vp-c-bg-soft));
}

.easy-demo {
    width: 100%;
    height: 40vh;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),url(/images/hero-bg.png);
}
</style>