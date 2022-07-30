<template>
    <div class="pa-2 resouce-item mr-3 mb-3" :class="'placehold-' + !resource.name">
        <template v-if="resource.name">
            <a :href="resource.website" target="blank">
                <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" height="180" cover></v-img>
            </a>
            <div class="mt-1">
                <div class="font-weight-bold">{{ resource.name }}</div>
                <div class="text-caption">{{ resource.summary }}</div>
            </div>
            <div class="d-flex align-center mt-2">
                <v-btn v-if="resource.github" :href="resource.github" target="_blank" :block="false" flat color="rgba(0,0,0,0.03)">
                    <v-icon :icon="mdiGithub"></v-icon>
                    <span class="ml-1">GitHub</span>
                </v-btn>
            </div>
        </template>
    </div>
</template>

<script>
import Icon from '../common/Icon.vue';
import { mdiGithub } from '@mdi/js'
export default {
    components: {
        Icon
    },
    data() {
        return {
            mdiGithub
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

<style lang="scss">
.resouce-item {
    width: 270px;
    position: relative;
    &.placehold-false {
        border-radius: 2px;
        border: #DDD 1px solid;
        transition: all .3s;
        &:hover {
            border-color: #000;
        }
    }
}
</style>