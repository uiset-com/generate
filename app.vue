<template>
  <v-app>
      <!-- <v-app-bar>
            <v-app-bar-title class="font-weight-bold body-1">
                UISet
            </v-app-bar-title>
      </v-app-bar> -->
      <NuxtPage />
  </v-app>
</template>

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
