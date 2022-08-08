<template>
    <div class="pt-5">
        <div class="d-flex flex-wrap justify-space-around">
            <ResourceCard v-for="resource in resources" :key="resource.value" :resource="resource"></ResourceCard>
        </div>    
    </div>
</template>

<script>
import Categories from '@/data/category.json';
export default {
    data() {
        return {
            resources: [],
            title: 'UI集'
        };
    },
    head() {
        return {
            title: this.title
        }
    },
    async fetch() {
        const path = `categorys/${this.$route.params.category}/meta`;
        let items = (await this.$content(path).fetch()).map(item => {
            return {
                ...item,
                value: item.slug,
                category: this.$route.params.category
            }
        });
        const fillup = 3 - (items.length % 3 || 3);
        if (fillup > 0) {
            items = [
                ...items,
                ...new Array(fillup).fill({})
            ];
        }
        this.resources = items;
        this.title = Categories.find(item => item.value === this.$route.params.category)?.name;
    }
}
</script>