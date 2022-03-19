<template>
  <div>
      <register-page></register-page>
      <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';
import RegisterPage from '../components/RegisterPage.vue';


export default {
  name: "PageRegister",
  components: {
    RegisterPage,
    PageFooter

  },
};
</script>

<style lang="sass" scoped>
</style>