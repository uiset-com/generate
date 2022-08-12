<template>
<div style="max-width: 800px; margin: 0 auto">
    <div v-if="resource" class="flex-grow-1 py-5">
        <div>
            <div class="d-flex flex-column flex-md-row ">
                <div class="thumbnail-box">
                    <v-img :src="`/resources/categorys/${resource.category}/${resource.value}/thumbnail.png`" width="330px" height="237px" cover></v-img>
                </div>
                <div class="ml-3 d-flex flex-column mt-3 mt-md-0" :style="this.$vuetify.breakpoint.md ? { height: '236px' } : {}">
                    <div class="text-h6 font-weight-bold">
                        {{ resource.name }}
                        <v-btn :block="false" class="ml-3 d-inline-flex text-decoration-none" depressed x-small :href="`https://github.com/uiset-com/uiset/tree/master/categorys/${resource.category}/${resource.value}`" target="_blank">
                            <span class="ml-1 font-weight-bold" style="color: rgba(0,0,0,0.4)">edit</span>
                        </v-btn>
                    </div>
                    <div class="mt-2 text-body-2">{{ resource.summary }}</div>
                    <v-spacer></v-spacer>
                    <div class="d-flex align-center mt-5">
                        <v-btn v-if="resource.license" depressed v-bind="resource.license.url ? { href: resource.license.url } : {}" target="_blank" :block="false" class="text-decoration-none mr-5" style="color: #555">
                            <LicenseIcon :size="16"></LicenseIcon>
                            <span v-if="resource.license.name" class="ml-1 font-weight-bold">{{ resource.license.name }}</span>
                        </v-btn>
                        <v-btn v-if="resource.github" depressed :href="resource.github" target="_blank" :block="false" class="mr-5 text-decoration-none" style="color: #555">
                            <v-icon size="20">{{ $icon.mdiGithub }}</v-icon>
                            <span class="ml-1 font-weight-bold">GitHub</span>
                        </v-btn>
                        
                         <v-btn depressed :href="resource.website + '?ref=uiset'" target="_blank" class="text-decoration-none" style="color: #555">
                            <v-icon size="18">{{ $icon.mdiWeb }}</v-icon>
                            <span class="ml-1 font-weight-bold">Website</span>
                        </v-btn>

                        <v-spacer></v-spacer>
                    </div>
                </div>
            </div>

            <!-- 关于说明 -->
            <div class="py-5 markdown-body">
                <!-- <article v-if="resource.readme" v-html="resource.readme"></article> -->
                 <nuxt-content v-if="resource.readme" :document="resource.readme" />

                <div v-else class="text-center" style="padding-top: 15vh">
                    暂无详细说明，<a :href="`https://github.com/uiset-com/uiset/tree/master/categorys/${resource.category}/${resource.value}`" target="_blank">可以前往</a>新增或编辑 <code>README.md</code> 文件
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            resource: null,
            title: ''
        }
    },

    head() {
        return {
            title: this.title
        }
    },

    async fetch() {
        const path = `categorys/${this.$route.params.category}/meta/${this.$route.params.resource}`;
        const resource = await this.$content(path).fetch()

        let readme = '';
        try {
            readme = await this.$content(`categorys/${this.$route.params.category}/readme/${this.$route.params.resource}`).fetch()
        } catch (e) {}
        this.resource = {
            ...resource,
            category: this.$route.params.category,
            value: resource.slug,
            readme
        }
        this.title = this.resource.name;
    },
    created() {
        console.log('====', this.$vuetify.breakpoint)
    }
}
</script>

<style lang="scss">
// github markdown style
// @import "@primer/css/color-modes/index.scss";
// @import "@primer/css/base/index.scss";
$spacer: 8px;
@import "@primer/css/markdown/index.scss";

.markdown-body {
    --color-canvas-subtle: #f6f8fa;
    --color-prettylights-syntax-comment: #6e7781;
    --color-prettylights-syntax-comment: #6e7781;
    pre {
        code {
            background-color: transparent!important;
        }
    }
    code {
            font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    }
    a {
        color: #0969da!important;
        text-decoration: none;
    }
    .pl-c {
        color: var(--color-prettylights-syntax-comment);
    }
}
</style>