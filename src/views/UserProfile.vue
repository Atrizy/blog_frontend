<template>
  <div>
    <page-header></page-header>
    <profile-page></profile-page>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProfilePage from "../components/ProfilePage.vue";

export default {
  name: "UserProfile",

  components: {
    ProfilePage,
    PageHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>