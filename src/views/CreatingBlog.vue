<template>
  <div>
    <page-header></page-header>
    <create-blog></create-blog>
    <page-footer></page-footer>
  </div>
</template>

<script>
import CreateBlog from "@/components/CreateBlog.vue";
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "CreatingBlog",

  components: {
    CreateBlog,
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>