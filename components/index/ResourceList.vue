<template>
    <div>
        <!-- 搜索 -->
        <HomeList v-if="!category"></HomeList>
        <div v-else class="d-flex flex-wrap justify-space-between mt-8">
            <ResourceCard v-for="item in resources" :key="item.value" :resource="item"></ResourceCard>
        </div>
    </div>
</template>
<script>
import IconData from '../../data/resources/icon.json';
import Illustration from '../../data/resources/illustration.json';
import Icon from '../common/Icon.vue';
import HomeList from './HomeList.vue';
import ResourceCard from './ResourceCard.vue';
export default {
    components: {
        Icon,
        HomeList,
        ResourceCard
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
            const datas = {
                icon: IconData,
                illustration: Illustration
            };
            let items = datas[this.category];
            // 否则显示最新视图
            if (!items) {
                items = [];
            };
            const fillup = 4 - (items.length % 4 || 4);
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
