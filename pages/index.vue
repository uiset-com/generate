<template>
  <div class="pt-5">
        <div class="pa-5 d-flex flex-column justify-center align-center">
            <div class="font-weight-bold" style="font-size: 35px"><span style="color: #E14C50">UI</span>SET</div>
            <div class="mt-3">共收集 <span class="font-weight-bold">{{ summary.total_resources }}</span> 个免费优质的 UI 资源</div>
            <div style="width: 100%; max-width: 600px" class="mt-10">
                <SearchInput placeholder="搜索插图 / 图标 / 图案等" height="50"></SearchInput>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-space-around mt-10">
            <LatestCard v-for="resource in latests" :key="resource.value" :resource="resource"></LatestCard>
        </div>    
    </div>
</template>

<script>
import summary from '../data/summary.json';
export default {
    data() {
        return {
            summary,
            latests: {}
        };
    },
    async fetch() {
        this.latests = await this.$content("latests").fetch();
    }
}
</script>
