<template>
  <v-app>
      <NuxtPage />
  </v-app>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - UI集` : 'UI集 - 优质免费的UI资源仓库';
    },
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
        { name: 'description', content: '收集免费优质的插画,图标,颜色等UI资源集合' },
        { name: 'keywords', content: 'UI,插画,图标,颜色,图案,头像,占位图,mockup'}
    ]
})
</script>

<style lang="scss">
html {
  overflow: hidden!important;
  font-family: Inter, Menlo, Monaco, Consolas, "Helvetica Neue", Helvetica, "Courier New", 微软雅黑, monospace, Arial, sans-serif, 黑体!important;
}
div, .d-block, textarea {
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        color: transparent;
    }
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
}
</style>
