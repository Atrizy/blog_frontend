<template>
  <div>
    <div
      class="user_profile"
      v-if="user != undefined"
    >
      <img :src="user.profile_banner" alt="" />
      <img :src="user.pfp" alt="" />
      <h3>{{ user.username }}</h3>
      <p>{{ user.bio }}</p>
      <h4>{{ user.dob }}</h4>
    </div>
    <div>
      <v-btn class="button" @click="get_profile_info">Load profile</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "profile-page",

  data() {
    return {
      user: undefined,
    }
  },

  methods: {
    get_profile_info() {
      if (!this.$route.query.id) {
        this.$route.query.login_token = cookies.get("session");
      }
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/user`,
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
</script>

<style lang="scss" scoped>
</style>