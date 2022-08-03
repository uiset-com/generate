<template>
    <div class="left-bar">
        <div class="d-flex align-center">
            <Logo size="34px"></Logo>
            <div class="d-flex flex-column ml-2">
                <div>
                    <span style="font-size: 16px; letter-spacing: 1px; font-family: Righteous;">iset</span>
                    <span class="text-caption">.com</span>
                </div>
                <div class="text-caption">免费优质UI资源库</div>
            </div>
        </div>
        <div class="left-inner py-5 d-flex flex-column mt-3">
            <div class="category-menu flex-grow-1" style="overflow-y: auto;">
                <NuxtLink v-for="item in categorys" :key="item.value" :to="'/category/' + item.value" :class="'category-item active-' + (category?.value === item.value)" class="px-5 pr-8 py-2 d-flex align-center text-body-2 text-decoration-none">
                    <Icon :name="item.icon"></Icon>
                    <span class="ml-4 category-name">{{ item.name }}</span>
                </NuxtLink>
            </div>
            <div class="d-flex flex-column align-center mt-2">
                <v-btn flat depressed href="https://github.com/uiset-com/resources" target="_blank">提交资源</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import categorys from '../../data/category.json';
import Icon from '../common/Icon.vue';
import Logo from '../common/Logo.vue';
export default {
    components: {
        Icon,
        Logo
    },
    props: {
        category: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            categorys
        }
    }
}
</script>

<style lang="scss" scoped>
.left-bar{
    height: 100vh;
    padding: 30px 0;
}
.left-inner {
    background: rgba(0, 0, 0, 0.025);
    border: 1px solid rgba(0, 0, 0, 0.03);
    height: 100%;
    width: 170px;
}
.category-menu  {
}
.category-item {
    color: #777;
    .category-name {
        transition: all 0.3s;
    }
    &.active-true {
        color: #000;
        font-weight: bold;
    }
    &:hover {
        .category-name {
            transform: translateX(2px);
        }
    }
}
</style>