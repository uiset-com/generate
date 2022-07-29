<template>
    <div>
        <!-- 搜索 -->
        <HomeList v-if="!category"></HomeList>
        <div style="height: 100vh" class="d-flex flex-column py-8">
            <div class="flex-grow-1 pr-3" style="overflow-y: auto; height: 0;">
                <!-- <ListBar></ListBar> -->
                <div class="d-flex flex-wrap justify-space-between mb-8">
                    <ResourceCard v-for="item in resources" :key="item.value" :resource="item"></ResourceCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from '../common/Icon.vue';
import HomeList from './HomeList.vue';
import ResourceCard from './ResourceCard.vue';
import ListBar from './ListBar.vue';
const modules = import.meta.globEager(`../../resources/categorys/**/meta.json`);

export default {
    components: {
        Icon,
        HomeList,
        ResourceCard,
        ListBar
    },
    props: {
        category: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
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
                items = this.allResoucrs.filter(item => item.category === this.category);
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
