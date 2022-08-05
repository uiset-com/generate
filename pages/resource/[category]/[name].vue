<template>
    <div class="d-flex" style="max-width: 1100px; width: 100%; margin: 0 auto">
        <div class="flex-shrink-0">
            <CategoryMenu :category="category"></CategoryMenu>
        </div>
        <div class="flex-grow-1 pa-7 pb-5 d-flex flex-column">
            <div style="overflow-y: auto; height: 0;" class="flex-grow-1">
                <div class="d-flex pl-2 pt-2">
                    <div class="thumbnail-box">
                        <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" width="300px" height="216px" cover></v-img>
                    </div>
                    <div class="ml-3 d-flex flex-column" style="height: 236px">
                        <div class="text-h6 font-weight-bold">
                            {{ resource.name }}
                            <v-btn flat color="rgba(0,0,0,0.02)" :block="false" class="ml-3 d-inline-flex text-decoration-none" size="x-small" :href="`https://github.com/uiset-com/uiset/tree/master/categorys/${resource.category}/${resource.value}`" target="_blank">
                                <v-icon :icon="mdiPencil" color="rgba(0,0,0,0.2)" size="14px"></v-icon>
                                <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.2)">edit</span>
                            </v-btn>
                        </div>
                        <div class="mt-2 text-body-2">{{ resource.summary }}</div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center">
                            <v-btn v-if="resource.github" :href="resource.github" target="_blank" :block="false" flat color="rgba(0,0,0,0.03)" class="mr-3 text-decoration-none">
                                <v-icon :icon="mdiGithub" color="#888"></v-icon>
                                <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.6)">GitHub</span>
                            </v-btn>
                            
                            <v-btn flat color="rgba(0,0,0,0.03)" :block="false" class="text-decoration-none" :href="resource.website + '?ref=uiset'" target="_blank">
                                <v-icon :icon="mdiWeb" color="#888"></v-icon>
                                <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.6)">Website</span>
                            </v-btn>

                            <v-spacer></v-spacer>
                        </div>
                    </div>
                </div>

                <!-- 关于说明 -->
                <div class="py-5 markdown-body">
                    <article  v-if="resource.readme" v-html="resource.readme"></article>

                    <div v-else class="text-center" style="padding-top: 15vh">
                        暂无详细说明，<a :href="`https://github.com/uiset-com/uiset/tree/master/categorys/${resource.category}/${resource.value}`" target="_blank">可以前往</a>新增或编辑 <code>README.md</code> 文件
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoryMenu from '@/components/index/CategroyMenu.vue';
import { mdiGithub, mdiPencil, mdiWeb } from '@mdi/js'

const route = useRoute();
let resource = ref(null);

const data = await $fetch(`/api/resource`, {
    params: {
        category: route.params.category,
        resource: route.params.name
    }
});

resource = {
    ...data,
    value: route.params.name,
    category: route.params.category
}

useHead({
    title: resource.name,
    meta: [
        { name: 'description', content: resource.summary }
    ]
})
</script>

<style lang="scss" scoped>
.thumbnail-box {
    display: inline-block;
    padding: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px #DDD;
}
</style>