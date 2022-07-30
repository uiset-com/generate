<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu></CategoryMenu>
        </div>
        <div class="flex-grow-1 ml-7">
            <div style="height: 100vh" class="d-flex flex-column py-8 pt-3">
                <ResourceList :resources="results" search-mode :total="total"></ResourceList>
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
            results: [],
            total: 0
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
            let { hits, nbHits } = await searchFromAlgolia(this.keywords.trim());
            // 补全 3
            const fillup = 3 - (hits.length % 3 || 3);
            if (fillup > 0) {
                hits = [
                    ...hits,
                    ...new Array(fillup).fill({})
                ];
            }
            this.results = hits;
            this.total = nbHits;
        }
    }
}
</script>