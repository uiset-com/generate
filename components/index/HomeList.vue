<template>
<div class="d-flex flex-column pt-5">
    <!-- <div class="text-center py-5">
        <h1 class="font-weight-bolder">UISET</h1>
        <p>发现免费优质的UI资源集合</p>
    </div> -->
    <div class="py-5 d-flex justify-center" style="width: 100%">
        <div class="search-box d-flex align-center">
            <Icon name="Search" color="#666" class="search-icon"></Icon>
            <input type="text" v-model="keywords" placeholder="检索图标/插图/图案/颜色...." class="search-field px-2" @keyup.enter="search" />
        </div>
    </div>
    <div class="d-flex align-center">
        <div>共收录<span class="font-weight-bold mx-1">{{ summary.total_resources }}</span>个优质免费UI资源</div>
        <v-spacer></v-spacer>
        <v-btn depressed flat href="https://github.com/uiset-com/uiset" target="_blank">
            <v-icon :icon="mdiSourceMerge"></v-icon>提交资源</v-btn>
    </div>
</div>
</template>

<script>
import Icon from '../common/Icon.vue';
import ResourceCard from './ResourceCard.vue';
import LatestData from '../../data/latests.json';
import { mdiSourceMerge } from '@mdi/js';
import summary from '../../data/summary.json';
export default {
    components: {
        Icon,
        ResourceCard
    },
    data() {
        return {
            latests: LatestData,
            keywords: '',
            mdiSourceMerge,
            summary
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
    width: 100%;
    .search-field {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>