<template>
<v-text-field v-model="keywords" hide-details flat solo dense color="primary" :height="height" :placeholder="placeholder" class="body-2" background-color="#F5F5F5" :readonly="searching" @keyup.enter="search">
    <template slot="prepend-inner">
        <v-icon size="20px">{{ $icon.mdiMagnify }}</v-icon>
    </template>

    <template slot="append">
            <v-progress-circular
            v-if="searching"
            indeterminate
            color="#AAA"
            size="18"
            width="3"
        ></v-progress-circular>
        <div v-else style="width: 18px"></div>
    </template>
</v-text-field>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '搜索资源'
        },
        height: {
            type: [String, Number],
            default: 30
        }
    },
    data() {
        return {
            keywords: '',
            searching: false
        }
    },
    computed: {
        urlKeywords() {
            return this.$route.query.keywords;
        }
    },
    watch: {
        urlKeywords: {
            handler() {
                this.keywords = this.urlKeywords;
            },
            immediate: true
        }
    },
    created() {
        this.EventBus.$on('SetSearching', this.setSearching);
    },
    beforeDestroy() {
        this.EventBus.$off('SetSearching', this.setSearching);
    },
    methods: {
        async search() {
            this.$router.push(`/search?keywords=${this.keywords}`);
        },
        setSearching(val) {
            this.searching = val;
        }
    }
}
</script>