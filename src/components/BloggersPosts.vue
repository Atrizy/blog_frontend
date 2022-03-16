<template>
  <div>
    <h2>{{ user.header }}</h2>
    <img :src="user.pfp" alt="" />
    <h3>{{ user.username }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bloggers-posts",

    methods: {
    get_bloggers_posts() {
      if (!this.$route.query.id) {
        this.$route.query.login_token = cookies.get("session");
      }
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users_posts`,
          method: "GET",
          params: {
            login_token: cookies.get("session"),
          },
        })
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          error;
        });
    },
  },
}
};
</script>

<style lang="scss" scoped>
</style>