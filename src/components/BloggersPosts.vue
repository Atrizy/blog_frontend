<template>
  <div>
    <div class="blog_postings" v-for="post in posts" :key="post[0]">
      <v-card width="50%" style="margin-top: 20px">
        <v-row>
          <v-list-item>
            <v-card-title>{{ post[2] }}</v-card-title>
            <v-card-subtitle>{{ post[3] }}</v-card-subtitle>
          </v-list-item>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bloggers-posts",

  data() {
    return {
      user: undefined,
      posts: [],
    };
  },

  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/users_posts`,
        method: "GET",
        params: {
          username: this.$route.query.username
        }
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