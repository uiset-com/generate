<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu></CategoryMenu>
        </div>
        <div class="flex-grow-1 ml-7">
            <!-- 统计 -->
            <HomeList></HomeList>
            <div style="height: 100vh" class="py-8">
                <ResourceList :resources="latests" hidebar></ResourceList>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryMenu from '../components/index/CategroyMenu.vue';
import HomeList from '../components/index/HomeList.vue';
import ResourceList from '~~/components/index/ResourceList.vue';
import LastestResources from '../data/resources/latest.json';
export default {
    components: {
        CategoryMenu,
        ResourceList,
        HomeList
    },
    data() {
        return {
            latests: LastestResources
        }
    }
}
</script>