<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  name: "blog-page",

  data() {
    return {
      post: [],
    };
  },

  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/single_post`,
        method: "GET",
        params: {
          username: this.$route.query.username,
        },
      })
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>