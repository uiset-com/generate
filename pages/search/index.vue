<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu></CategoryMenu>
        </div>
        <div class="flex-grow-1 ml-7">
            <div style="height: 100vh" class="d-flex flex-column py-8">
                <ResourceList :resources="results" search-mode></ResourceList>
            </div>
        </div>
    </div>
</template>

<script>
import { searchFromAlgolia } from '../../lib/algolia';
import CategoryMenu from '../../components/index/CategroyMenu.vue';
import ResourceList from '~~/components/index/ResourceList.vue';
export default {
    components: {
        CategoryMenu,
        ResourceList
    },
    data() {
        return {
            results: []
        }
    },
    computed: {
        keywords() {
            return this.$route.query.keywords;
        }
    },
    watch: {
        keywords: {
            handler() {
                this.search();
            },
            immediate: true
        }
    },
    methods: {
        async search() {
            if (!this.keywords || !this.keywords.trim()) return;
            let datas = await searchFromAlgolia(this.keywords.trim());
            // 补全 3
            const fillup = 3 - (datas.length % 3 || 3);
            if (fillup > 0) {
                datas = [
                    ...datas,
                    ...new Array(fillup).fill({})
                ];
            }
            this.results = datas;
        }
    }
}
</script>