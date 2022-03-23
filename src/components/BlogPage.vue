<template>
  <div class="blog_info">
    <v-card class="blog_post" tile flat relative>
      <v-card-title>
        <h1 class="header">{{ post[3] }}</h1>
      </v-card-title>
      <p>{{ post[4] }}</p>
      <v-list-item-avatar size="50">
        <v-img :src="post[1]" />
      </v-list-item-avatar>
      <v-list-item-content>Written by: "{{ post[0] }}"</v-list-item-content>
      <v-btn text icon color="blue lighten-2" @click="like_post">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "blog-page",

  data() {
    return {
      post: [],
    };
  },

  methods: {
    like_post() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/blog_likes`,
          method: "POST",
          data: {
            login_token: cookies.get('session'),
            blog_id: this.post[6]
          },
        })
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          error;
        });
    },
  },

  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/single_post`,
        method: "GET",
        params: {
          blog_id: this.$route.query.blog_id,
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
  word-break: normal;
}
.blog_info {
  display: grid;
}
.blog_post {
  width: 70%;
  align-content: center;
  justify-self: center;
}
p {
  margin-left: 2%;
  align-content: center;
  justify-self: center;
  font-size: 24px;
  width: 90%;
}
</style>