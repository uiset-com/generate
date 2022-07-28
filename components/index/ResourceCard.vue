<template>
    <div class="pa-2 resouce-item mr-3 mb-3" :class="'placehold-' + !resource.name">
        <template v-if="resource.name">
            <a :href="resource.website" target="blank">
                <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" height="150" cover></v-img>
            </a>
            <div class="mt-1">
                <div class="font-weight-bold">{{ resource.name }}</div>
                <div class="text-caption">{{ resource.summary }}</div>
            </div>
            <div class="mt-1 d-flex align-center">
                <Icon name="Github" color="#888"></Icon>
                <v-spacer></v-spacer>
                <div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Icon from '../common/Icon.vue';
export default {
    components: {
        Icon
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
    width: 210px;
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