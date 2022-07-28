<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu :category="category"></CategoryMenu>
        </div>
        <div class="flex-grow-1 ml-7">
            <!-- 统计 -->
            <ResourceList :category="category"></ResourceList>
        </div>
    </div>
</template>

<script>
import categorys from '../../data/category.json';
import CategoryMenu from '../../components/index/CategroyMenu.vue';
import ResourceList from '../../components/index/ResourceList.vue';
export default {
    components: {
        CategoryMenu,
        ResourceList
    },
    data() {
        return {
            categorys
        }
    },
    computed: {
        category() {
            const active = categorys.find(item => item.value === this.$route.params.type);
            return active ? active.value : null;
        }
    }
}
</script>