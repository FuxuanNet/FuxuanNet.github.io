<template>
    <div class="after-demo">这是一个原始的测试盒子。</div>
</template>

<style scoped>
.after-demo {
    border: 1px solid rgb(36, 31, 31);
}

.after-demo::after {
    content: '这是追加的一个伪元素';
    color: #fff;
    background-color: red;
}
</style>