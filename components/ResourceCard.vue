<template>
    <div class="resouce-item mr-3 mb-8 ml-8" :class="'placehold-' + !resource.name">
        <template v-if="resource.name">
            <router-link :to="`/resource/${resource.category}/${resource.value}`">
                <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" height="201" cover></v-img>
            </router-link>
            <div class="mt-1 pa-2">
                <div>
                    <span class="font-weight-bold">{{ resource.name }}</span>
                    <v-btn v-if="resource.license" depressed v-bind="resource.license.url ? { href: resource.license.url } : {}" target="_blank" small :block="false" class="px-1 py-0 ml-1 text-decoration-none caption" color="rgba(0,0,0,0.06)" style="height: 22px; color: rgba(0, 0, 0, 0.6); min-width: 0">
                        <LicenseIcon :size="14"></LicenseIcon>
                        <span v-if="resource.license.name" class="ml-1 font-weight-bold">{{ resource.license.name }}</span>
                    </v-btn>
                </div>
                <div class="body-2 summary-box mt-1">{{ resource.summary }}</div>
            </div>
            <div class="d-flex align-center pa-2">
                <v-spacer></v-spacer>
                
                <v-btn v-if="resource.github" depressed :href="resource.github" target="_blank" :block="false" class="mr-1 text-decoration-none">
                    <v-icon size="20" color="#888">{{ $icon.mdiGithub }}</v-icon>
                    <span class="ml-1 font-weight-bold">GitHub</span>
                </v-btn>
                
                <v-btn depressed :href="resource.website + '?ref=uiset'" target="_blank" class="text-decoration-none">
                    <v-icon size="18" color="#888">{{ $icon.mdiWeb }}</v-icon>
                    <span class="ml-1 font-weight-bold">Website</span>
                </v-btn>
            </div>
        </template>
    </div>
</template>

<script>
import LicenseIcon from './LicenseIcon.vue';
export default {
    props: {
        resource: {
            type: Object,
            required: true
        }
    },
    components: { LicenseIcon }
}
</script>

<style lang="scss" scoped>
.resouce-item {
    width: 280px;
    position: relative;
    &.placehold-false {
        border-radius: 4px;
        overflow: hidden;
        // border: #DDD 1px solid;
        background: rgba(0, 0, 0, 0.023);
        transition: all .3s;
        &:hover {
            background: rgba(0, 0, 0, 0.03);
            .edit-btn {
                display: inline-block;
            }
        }
    }
}
.edit-btn {
    display: none;
}
.summary-box {
    height: 60px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>