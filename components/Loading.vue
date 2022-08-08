<template>
    <div class="loading-mask d-flex align-center justify-center flex-column" style="position: absolute; top: 0; right: 0; left: 0; bottom: 0; z-index: 100">
        <div style="width: 20%" class="text-center">
            <v-progress-linear
                indeterminate
                color="#CCC"
                :size="size"
                width="3"
            ></v-progress-linear>
            <div v-if="text" class="mt-5 caption text--secondary">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Number],
            default: 30
        },
        text: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped lang="scss">
.theme--light {
    .loading-mask {
        background: rgba(255, 255, 255, 1)
    }
}
.theme--dark {
    .loading-mask {
        background: rgba(0, 0, 0, 0.8)
    }
}
</style>
