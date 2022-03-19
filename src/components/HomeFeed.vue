<template>
  <div>
    <page-header></page-header>
    <div class="blog_posts_headers">
      <h1>Blog Postings</h1>
    </div>
    <div class="blog_posts">
      <v-card class="card" color="grey" dark max-width="400" v-for="post in posts" :key="post[5]" flat>
        <v-card-title>
          <span class="text-h6 font-weight-light">{{ post[2] }}</span>
        </v-card-title>
        <v-img :src="post[6]" class="blog_pic" @click="goto_blog(post[5])" style="cursor: pointer"/>
        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img class="elevation-6" alt="" :src="post[1]" style="cursor: pointer" @click="go_to_profile(post[0])"/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title dark>{{ post[0] }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>{{ post[4] }}</v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageHeader from "./PageHeader.vue";

export default {
  name: "home-feed",

  components: {
    PageHeader,
  },

  methods: {
    go_to_profile(username) {
      this.$router.push({
        path: "/profile",
        query: { username: username },
      });
    },

    goto_blog(id) {
      this.$router.push({
        path: "/blog",
        query: { blog_id: id },
      });
    },
  },

  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/post`,
        method: "GET",
      })
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        error;
      });
  },

  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog_posts_heading {
  margin-left: 50%;
}
.blog_posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.25fr));
}
.blog_pic {
  width: 100%;
  height: 250px;
}
.card {
  margin-top: 1vw;
  margin-left: 1vw;
}
</style>
