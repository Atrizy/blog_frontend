<template>
  <v-app>
    <page-header></page-header>
    <v-card class="card" color="grey" dark max-width="400" v-for="post in posts" :key="post[5]" flat>
      <v-card-title>
        <span class="text-h6 font-weight-light">{{ post[2] }}</span>
      </v-card-title>
      <v-hover>
      <v-img :src="post[3]" class="blog_pic" @click="goto_blog(post[5])" style="cursor: pointer"/>
      </v-hover>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" alt="" :src="post[1]" style="cursor: pointer" @click="go_to_profile(post[0])" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title @click="goto_blog(post[5])" dark>{{ post[0] }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>{{ post[4] }}</v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-app>
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
.blog_postings {
  margin-top: 70px;
}
.blog_pic {
  width: 100%;
  height: 250px;
}
.card {
  margin-top: 10px;
  margin-left: 10px;
}
</style>