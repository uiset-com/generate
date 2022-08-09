<template>
    <div class="resouce-item mr-3 mb-8 ml-8" :class="'placehold-' + !resource.name">
        <template v-if="resource.name">
            <router-link :to="`/resource/${resource.category.value}/${resource.value}`" class="cover-box text-decoration-none">
                <v-img :src="`/resources/categorys/${resource.category.value}/${resource.value}/thumbnail.png`" height="108" cover></v-img>
                <v-chip label color="primary" small class="caption px-2 catelabel">{{ resource.category.name }}</v-chip>
            </router-link>
            <div class="mt-1 pa-2">
                <div class="font-weight-bold body-2 title-line">{{ resource.name }}</div>
                <!-- <div class="body-2 summary-box">{{ resource.summary }}</div> -->
            </div>
        </template>
    </div>
</template>

<script>
export default {
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
    width: 150px;
    position: relative;
    &.placehold-false {
        overflow: hidden;
        transition: all .3s;
    }
}
.cover-box {
    border-radius: 4px;
    display: block;
    overflow: hidden;
}

.catelabel {
    position: absolute;
    top: 6px;
    right: 6px;
    opacity: 0.9;
}

.title-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>