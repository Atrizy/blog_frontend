<template>
  <div>
    <page-header></page-header>
  <div class="blog_postings">
    <v-card width="30%" v-for="post in posts" :key="post[5]" @click="goto_blog(post[5])" flat>
      <v-row>
        <v-card-title class="title">{{ post[2] }}</v-card-title>
          <v-list-item>  
            <v-list-item-avatar size="50" absolute>
              <v-img :src="post[1]" alt="Bloggers Profile Picture" style="cursor: pointer" @click="go_to_profile(post[0])"/>
            </v-list-item-avatar>
            <v-img :src="post[6]" class="blog_pic" round/>
          </v-list-item>
        </v-row>
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
.blog_postings {
  display: grid;
  margin-top: 70px;
}
.blog_pic {
  width: 250px;
  height: 250px;
}
</style>
