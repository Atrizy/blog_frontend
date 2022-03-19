<template>
  <div>
    <page-header></page-header>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from './PageFooter.vue';
import PageHeader from "./PageHeader.vue";
export default {
  name: "create-blog",

  components: {
    PageHeader,
    PageFooter
  },
};
</script>

<style lang="scss" scoped>
</style>