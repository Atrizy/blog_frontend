<template>
  <div>
    <login-user></login-user>
    <page-footer></page-footer>
  </div>
</template>

<script>
import LoginUser from "@/components/LoginUser.vue";
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "LoginPage",
  components: {
    LoginUser,
    PageFooter,
  },
};
</script>

<style lang="sass" scoped>
</style>