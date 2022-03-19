<template>
  <div>
    <page-header></page-header>
    <blog-page></blog-page>
    <page-footer></page-footer>
  </div>
</template>

<script>
import BlogPage from "@/components/BlogPage.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from '@/components/PageFooter.vue';
export default {
  name: "BloggingPage",

  components: {
    BlogPage,
    PageHeader,
    PageFooter
  },
};
</script>

<style lang="scss" scoped>
</style>