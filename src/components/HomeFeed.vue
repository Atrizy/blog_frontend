<template>
  <div>
    <page-header></page-header>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import PageHeader from "./PageHeader.vue";

export default {
  name: "home-feed",

  components: {
    PageHeader,
  },

  methods: {
    go_to_profile(user_id) {
      this.$router.push({
        path: "/profile",
        query: { userId: user_id },
      });
    },
    get_blog_posts() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/post`,
          method: "GET",
          data: {},
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          error;
        });
    },
    submit_blog_post() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/post`,
          method: "POST",
          data: {
            loginToken: cookies.get("session").loginToken,
            content: this.content,
          },
        })
        .then((response) => {
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>