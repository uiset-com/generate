<template>
    <div class="d-flex py-4 align-center pr-2">
        <template v-if="searchMode">
            <span>共找到</span>
            <span class="font-weight-bold mx-1">{{ total }}</span>
            <span>个包含关键词<span class="font-weight-bold mx-1">图标</span>的资源</span>
        </template>
        <template v-else>
            <Icon :name="category.icon"></Icon>
            <span class="font-weight-bold ml-2">{{ category?.name }}</span>
            <span class=" mx-1">/</span>
            <span class="font-weight-bold mx-1">{{ total }}</span>
            <span>个资源</span>
        </template>
        <v-spacer></v-spacer>
        <div class="search-box d-flex align-center">
            <v-icon :icon="mdiMagnify" class="search-icon"></v-icon>
            <input type="text" v-model="keywords" placeholder="检索资源 回车" class="search-field px-2" @keyup.enter="search" />
        </div>
    </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import Icon from '../common/Icon.vue';
export default {
    components: {
        Icon
    },
    props: {
        searchMode: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0
        },
        category: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            mdiMagnify,
            keywords: ''
        }
    },
    computed: {
        urlkeywords() {
            return this.$route.query.keywords;
        }
    },
    watch: {
        urlkeywords: {
            handler() {
                if (this.searchMode) {
                    this.keywords = this.urlkeywords;
                }
            },
            immediate: true
        }
    },
    methods: {
        async search() {
            this.$router.push(`/search?keywords=${this.keywords}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box {
    border: #DDD 1px solid;
    border-radius: 100px;
    padding: 6px 20px;
    width: 300px;
    .search-field {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>