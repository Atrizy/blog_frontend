<template>
  <div>
    <home-feed></home-feed>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';
import HomeFeed from '../components/HomeFeed.vue';

export default {
  name: "HomePage",

  components: {
    HomeFeed,
    PageFooter
  },
};
</script>

<style lang="sass" scoped>
</style>