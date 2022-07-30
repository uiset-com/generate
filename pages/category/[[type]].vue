<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu :category="category"></CategoryMenu>
        </div>
        <div class="flex-grow-1 ml-7">
            <CategoryResources :category="category"></CategoryResources>
        </div>
    </div>
</template>

<script>
import categorys from '../../data/category.json';
import CategoryMenu from '../../components/index/CategroyMenu.vue';
import CategoryResources from '~~/components/index/CategoryResources.vue';
export default {
    components: {
        CategoryMenu,
        CategoryResources
    },
    data() {
        return {
            categorys
        }
    },
    computed: {
        category() {
            return categorys.find(item => item.value === this.$route.params.type) || categorys[0];
        }
    }
}
</script>