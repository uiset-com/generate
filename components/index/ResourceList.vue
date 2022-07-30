<template>
    <div style="height: 100%;" class="d-flex flex-column">
        <ListBar v-if="!hidebar" :search-mode="searchMode" :total="total" :category="category"></ListBar>
        <div class="flex-grow-1 pr-3" style="overflow-y: auto; height: 0;">
            <div class="d-flex flex-wrap justify-space-between mb-8">
                <ResourceCard v-for="item in resources" :key="item.value" :resource="item"></ResourceCard>
            </div>
        </div>
    </div>
</template>
<script>
import ResourceCard from './ResourceCard.vue';
import ListBar from './ListBar.vue';

export default {
    components: {
        ResourceCard,
        ListBar
    },
    props: {
        resources: {
            type: Array,
            default: []
        },
        hidebar: {
            type: Boolean,
            default: false
        },
        searchMode: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0
        },
        category: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
        }
    }
}
</script>
