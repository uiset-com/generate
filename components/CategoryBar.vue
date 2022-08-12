<template>
    <div class="align-center justify-space-around flex-wrap d-md-none d-sm-flex">
        <NuxtLink v-for="item in categories" :key="item.value" :to="'/category/' + item.value" class="text-decoration-none menu-link ml-4 my-2">
            <span>{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>

<script>
import Categories from '../data/category.json';
export default {
    data() {
        return {
            categories: Categories
        };
    }
}
</script>
