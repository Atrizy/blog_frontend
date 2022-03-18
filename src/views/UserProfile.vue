<template>
  <div>
    <page-header></page-header>
    <profile-page></profile-page>
    <bloggers-posts></bloggers-posts>
  </div>
</template>

<script>
import BloggersPosts from '@/components/BloggersPosts.vue';
import PageHeader from "../components/PageHeader.vue";
import ProfilePage from "../components/ProfilePage.vue";

export default {
  name: "UserProfile",

  components: {
    ProfilePage,
    PageHeader,
    BloggersPosts,
  },
};
</script>

<style lang="scss" scoped>
</style>