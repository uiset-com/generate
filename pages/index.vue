<template>
  <div class="pt-5">
        <div class="pa-5 d-flex flex-column justify-center align-center">
            <div class="font-weight-bold" style="font-size: 35px"><span style="color: #E14C50">UI</span>SET</div>
            <div class="mt-3">收集免费优质的UI资源</div>
            <div style="width: 50%" class="mt-8">
                <SearchInput placeholder="搜索插图 / 图标 / 图案等"></SearchInput>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-space-around mt-8">
            <ResourceCard v-for="resource in latests" :key="resource.value" :resource="resource"></ResourceCard>
        </div>    
    </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue'
export default {
    data() {
        return {
            latests: {}
        };
    },
    async fetch() {
        this.latests = await this.$content("latests").fetch();
    },
    components: { SearchInput }
}
</script>
