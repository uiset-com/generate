<template>
<div style="height: 100vh" class="d-flex flex-column align-center justify-center">
    <div class="py-5 d-flex justify-center">
        <div class="search-box d-flex align-center">
            <Icon name="Search" color="#666" class="search-icon"></Icon>
            <input type="text" placeholder="检索资源" class="search-field px-2" />
        </div>
    </div>

    <div class="mt-8 text-body-2">最新收录</div>
    <div class="d-flex flex-wrap justify-space-between mt-3">
        <ResourceCard v-for="item in latests" :key="item.value" :resource="item"></ResourceCard>
    </div>
</div>
</template>

<script>
import Icon from '../common/Icon.vue';
import ResourceCard from './ResourceCard.vue';
import LatestData from '../../data/resources/latest.json';
export default {
    components: {
        Icon,
        ResourceCard
    },
    data() {
        return {
            latests: LatestData
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box {
    border: #DDD 2px solid;
    border-radius: 100px;
    padding: 10px 20px;
    width: 500px;
    .search-field {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>