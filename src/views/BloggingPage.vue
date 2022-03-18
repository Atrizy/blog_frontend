<template>
    <div>
        <page-header></page-header>
        <blog-page></blog-page>
    </div>
</template>

<script>
import BlogPage from '@/components/BlogPage.vue'
import PageHeader from '@/components/PageHeader.vue'
    export default {
        name: "BloggingPage",

        components: {
            BlogPage,
            PageHeader,
        },
    }
</script>

<style lang="scss" scoped>

</style>