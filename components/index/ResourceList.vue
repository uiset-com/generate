<template>
    <div>
        <!-- 搜索 -->
        <HomeList v-if="!category"></HomeList>

        <div v-else class="mt-8">
            <!-- <ListBar></ListBar> -->
            <div class="d-flex flex-wrap justify-space-between mt-5">
                <ResourceCard v-for="item in resources" :key="item.value" :resource="item"></ResourceCard>
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
        resources() {
            let items = [];
             for(const path in modules) {
                const content = modules[path].default;
                const pathArr = path.split('/');
                pathArr.pop();
                const value = pathArr.pop();
                const category = pathArr.pop();
                if (category === this.category) {
                    items.push({
                        ...content,
                        category,
                        value
                    });
                }
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
