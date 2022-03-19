<template>
  <div class="blog_info">
    <v-card class="blog_post" tile flat relative>
      <v-card-title>
        <h1 class="header">{{ post[3] }}</h1>
      </v-card-title>
      <p class="blog_text">{{ post[4] }}</p>
      <v-list-item-avatar size="50">
        <v-img :src="post[1]" />
      </v-list-item-avatar>
      <v-list-item-content>Written by: "{{ post[0] }}"</v-list-item-content>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

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
        this.post = response.data;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style lang="scss" scoped>
.header {
  justify-self: start;
  word-break: normal;
}
.blog_info {
  display: grid;
}
.blog_post {
  width: 60%;
  margin-left: 2%;
  margin-top: 2%;
}
.blog_text {
  font-size: 24px;
  margin-top: 1%;
}
.blogger_panel {
  margin-left: 2%;
}
</style>