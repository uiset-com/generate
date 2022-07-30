<template>
    <div style="height: 100vh" class="py-8">
        <ResourceList :resources="resources" :total="total" :category="category"></ResourceList>
    </div>
</template>
<script>
import ResourceList from './ResourceList.vue';
const modules = import.meta.globEager(`../../resources/categorys/**/meta.json`);

export default {
    components: {
        ResourceList
    },
    props: {
        category: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            total: 0
        }
    },
    computed: {
        allResoucrs() {
            let items = [];
            for(const path in modules) {
                const content = modules[path].default;
                const pathArr = path.split('/');
                pathArr.pop();
                const value = pathArr.pop();
                const category = pathArr.pop();
                items.push({
                    ...content,
                    category,
                    value
                });
             }
            return items;
        },
        resources() {
            let items = [];
            if (this.category) {
                items = this.allResoucrs.filter(item => item.category === this.category.value);
                this.total = items.length;
            } else {
                items = this.allResoucrs.slice(0, 3);
            }
            const fillup = 3 - (items.length % 3 || 3);
            if (fillup > 0) {
                items = [
                    ...items,
                    ...new Array(fillup).fill({})
                ];
            }
            return items;
        }
    }
}
</script>
