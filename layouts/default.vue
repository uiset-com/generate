<template>
    <v-app>
        <v-app-bar fixed app elevation="0" height="64" style="background: #F9F9F9;">
            <nuxt-link to="/">
                <Logo></Logo>
            </nuxt-link>
            <div class="ml-6 d-none d-md-flex align-center">
                <NuxtLink v-for="item in categories" :key="item.value" :to="'/category/' + item.value" class="text-decoration-none menu-link ml-4">
                    <span>{{ item.name }}</span>
                </NuxtLink>
            </div>
            <v-spacer></v-spacer>
            <div>
                <SearchInput class="mr-3"></SearchInput>
            </div>
            <v-btn depressed class="d-none d-sm-block" href="https://github.com/uiset-com/uiset" target="_blank">
                <v-icon size="20px">{{ $icon.mdiGithub }}</v-icon>
                提交资源
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container>
                <CategoryBar></CategoryBar>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Categories from '../data/category.json';
export default {
    name: "DefaultLayout",
    data() {
        return {
            categories: Categories
        };
    }
}
</script>

<style lang="scss">
.menu-link {
    color: rgba(0, 0, 0, 0.2);
}
.menu-link.nuxt-link-active {
    font-weight: bold;
    color: #000;
}
</style>