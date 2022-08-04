<template>
    <div class="pa-2 resouce-item mr-3 mb-3" :class="'placehold-' + !resource.name">
        <template v-if="resource.name">
            <a :href="resource.website + '?ref=uiset'" target="blank">
                <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" height="180" cover></v-img>
            </a>
            <div class="mt-1">
                <div class="font-weight-bold">{{ resource.name }}</div>
                <div class="text-caption summary-box">{{ resource.summary }}</div>
            </div>
            <div class="d-flex align-center mt-2">
                <v-btn flat color="rgba(0,0,0,0.02)" size="x-small" class="edit-btn" :href="`https://github.com/uiset-com/uiset/tree/master/categorys/${resource.category}/${resource.value}`" target="blank">
                    <v-icon :icon="mdiPencil" size="16" color="#AAA"></v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                
                <v-btn v-if="resource.github" :href="resource.github" target="_blank" :block="false" flat color="rgba(0,0,0,0.02)" size="x-small" class="mr-1">
                    <v-icon :icon="mdiGithub" size="18" color="#888"></v-icon>
                    <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.6)">GitHub</span>
                </v-btn>
                
                <v-btn flat color="rgba(0,0,0,0.02)" size="x-small" :href="resource.website + '?ref=uiset'" target="blank" v-bind="attrs" v-on="on">
                    <v-icon :icon="mdiWeb" size="16" color="#888"></v-icon>
                    <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.6)">Website</span>
                </v-btn>
            </div>
        </template>
    </div>
</template>

<script>
import Icon from '../common/Icon.vue';
import { mdiGithub, mdiPencil, mdiWeb } from '@mdi/js'
export default {
    components: {
        Icon
    },
    data() {
        return {
            mdiGithub,
            mdiPencil,
            mdiWeb
        }
    },
    props: {
        resource: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.resouce-item {
    width: 270px;
    position: relative;
    &.placehold-false {
        border-radius: 2px;
        border: #DDD 1px solid;
        transition: all .3s;
        &:hover {
            border-color: #000;
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