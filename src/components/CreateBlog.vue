<template>
  <div class="blog_creation">
      <v-card >
        <v-col>
          <v-text-field label="Header..." v-model="header" outlined counter="100"></v-text-field>
          <v-text-field label="Blog Picture..." v-model="blog_pic" outlined counter="300" hint="Required."></v-text-field>
          <v-text-field label="Content..." v-model="content" outlined></v-text-field>
        </v-col>
        <v-btn @click="create_blog_post" color="blue">Post</v-btn>
      </v-card>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "create-blog",

  methods: {
    create_blog_post: function () {
      this.postStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: `${process.env.VUE_APP_API_URL}/api/post`,
          data: {
            login_token: cookies.get("session"),
            header: this.header,
            blog_pic: this.blog_pic,
            content: this.content
          },
        })
        .then((res) => {
          this.postStatus = "Success";
          res;
        })
        .catch((err) => {
          this.postStatus = "Error.";
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog_creation {
  display: grid;
  grid-auto-columns: 1fr;
  place-items: center;
  width: 100%;
}
</style>