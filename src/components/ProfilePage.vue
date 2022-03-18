<template>
  <div>
    <v-card
      class="profile"
      max-width="100%"
      v-if="user != undefined"
      tile
      flat
      relative
    >
      <v-img height="200" :src="user.profile_banner"></v-img>
      <v-row style="margin: 2.5%; top: 130px">
        <v-list-item>
          <v-list-item-avatar size="100" outline>
            <img :src="user.pfp" alt="John" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin-top: 20px">{{ user.username }}</v-list-item-title>
            <p>{{ user.bio }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-card>
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
    };
  },

  mounted() {
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
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 10%;
}
</style>