<template>
  <div class="blog_creation">
    <v-card flat>
      <v-text-field :rules="headerRules" label="Header..." v-model="header" outlined counter="100" hint="Required."></v-text-field>
      <v-text-field :rules="blogpicRules" label="Blog Picture..." v-model="blog_pic" outlined counter="300" hint="Required."></v-text-field>
      <v-textarea label="Content..." v-model="content" outlined hint="Required."></v-textarea>
      <v-btn @click="create_blog_post" class="btn" color="blue">Post</v-btn>
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
            content: this.content,
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

  data() {
    return {
      headerRules: [(v) => v.length <= 100 || "Max 100 characters"],
      blogpicRules: [(v) => v.length <= 300 || "Max 300 characters"],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-top: 15px;
  width: 50%;
}
.blog_creation {
  display: grid;
  place-items: center;
  width: 100%;
}
.v-btn {
  justify-self: end;
}
</style>