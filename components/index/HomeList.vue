<template>
<div class="d-flex flex-column align-center justify-center">
    <div class="text-center py-5">
        <h1 class="font-weight-bolder">UISET</h1>
        <p>发现免费优质的UI资源集合</p>
    </div>
    <div class="py-5 d-flex justify-center">
        <div class="search-box d-flex align-center">
            <Icon name="Search" color="#666" class="search-icon"></Icon>
            <input type="text" v-model="keywords" placeholder="检索图标/插图/图案/颜色...." class="search-field px-2" @keyup.enter="search" />
        </div>
    </div>
</div>
</template>

<script>
import Icon from '../common/Icon.vue';
import ResourceCard from './ResourceCard.vue';
import LatestData from '../../data/resources/latests.json';
export default {
    components: {
        Icon,
        ResourceCard
    },
    data() {
        return {
            latests: LatestData,
            keywords: ''
        }
    },
    methods: {
        async search() {
            this.$router.push(`/search?keywords=${this.keywords}`);
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