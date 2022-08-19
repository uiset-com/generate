<template>
    <div class="pt-5">
        <div class="d-flex flex-wrap justify-space-around">
            
            <template v-for="(resource, index) in resources">
                <div v-if="resource.ad" :key="index" style="width: 280px; height: 360px;" class="ml-8 mb-8">
                    <Adsense></Adsense>
                </div>
                <ResourceCard v-else :key="resource.value" :resource="resource"></ResourceCard>
            </template>
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
        let items = this.shuffle(await this.$content(path).fetch()).map(item => {
            return {
                ...item,
                value: item.slug,
                category: this.$route.params.category
            }
        });
        // 插入广告  在大于等于6之后
        if (items.length > 7) {
            const index = 6 + parseInt(Math.random() * (items.length - 6));
            items.splice(index, 0, {
                ad: true
            });
        }

        const fillup = 3 - (items.length % 3 || 3);
        if (fillup > 0) {
            items = [
                ...items,
                ...new Array(fillup).fill({})
            ];
        }
        this.resources = items;
        this.title = Categories.find(item => item.value === this.$route.params.category)?.name;
    },
    methods: {
        shuffle(arr) { // 乱序
            for (let i = arr.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
            }
            return arr;
        }
    }
}
</script>