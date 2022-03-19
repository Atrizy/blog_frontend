<template>
  <div>
    <v-card class="blog_post" flat>
      <v-card-title>
        <h1>{{ post[2] }}</h1>
      </v-card-title>
      <p class="blog_text">{{ post[3] }}</p>
    </v-card>
    <page-footer></page-footer>
  </div>
</template>

<script>
import axios from "axios";
import PageFooter from '@/components/PageFooter.vue'


export default {
  name: "blog-page",

  components: {
    PageFooter,
  },

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
.blog_post {
  width: 60%;
  margin-left: 2%;
  margin-top: 2%;
}
.blog_text {
  font-size: 24px;
  margin-top: 1%;
}
</style>