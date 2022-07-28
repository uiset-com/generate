<template>
    <v-card class="py-5">
        <NuxtLink v-for="item in categorys" :key="item.value" :to="'/category/' + item.value" :class="'category-item active-' + (category === item.value)" class="px-3 pr-6 py-2 d-flex align-center text-body-2 text-decoration-none">
            <Icon :name="item.icon"></Icon>
            <span class="ml-4 category-name">{{ item.name }}</span>
        </NuxtLink>
    </v-card>
</template>

<script>
import categorys from '../../data/category.json';
import Icon from '../common/Icon.vue';
export default {
    components: {
        Icon
    },
    props: {
        category: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            categorys
        }
    }
}
</script>

<style lang="scss">
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