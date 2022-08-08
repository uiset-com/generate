<template>
    <div class="pt-5">
        <Loading v-if="loading" text="检索中..."></Loading>
        <div v-else class="d-flex flex-wrap justify-space-around">
            <ResourceCard v-for="resource in results" :key="resource.value" :resource="resource"></ResourceCard>
        </div>    
    </div>
</template>

<script>
import { searchFromAlgolia } from '@/lib/algolia';
export default {
    data() {
        return {
            results: [],
            total: 0,
            loading: true
        };
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
        },
        loading: {
            handler() {
                this.EventBus.$emit('SetSearching', this.loading);
            },
            immediate: true
        }
    },
    methods: {
        async search() {
            if (!this.keywords || !this.keywords.trim()) return;
            this.loading = true;
            let { hits, nbHits } = await searchFromAlgolia(this.keywords.trim());
            this.loading = false;
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