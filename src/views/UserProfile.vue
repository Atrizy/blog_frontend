<template>
  <div>
    <page-header></page-header>
    <profile-page></profile-page>
    <bloggers-posts></bloggers-posts>
    <page-footer></page-footer>
  </div>
</template>

<script>
import BloggersPosts from '@/components/BloggersPosts.vue';
import PageHeader from "../components/PageHeader.vue";
import ProfilePage from "../components/ProfilePage.vue";
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "UserProfile",

  components: {
    ProfilePage,
    PageHeader,
    BloggersPosts,
    PageFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>