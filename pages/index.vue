<template>
  <div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },

    async fetch() {
        console.log('获取数据')
        const path = `categorys/${this.$route.params.category}/meta`;
        this.posts = await this.$content(path).fetch()
    }
}
</script>
