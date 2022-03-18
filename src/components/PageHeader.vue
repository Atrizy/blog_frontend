<template>
  <div class="logo">
    <v-app-bar color="black accent-4" height="60px" width="100%" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        src="../assets/logo.jpg"
        class="header_img"
        @click="redirect_to_home"
      />
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-btn color="blue" elevation="2" class="login_button">Login</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red--text">
          <v-list-item>
            <v-list-item-title @click="redirect_to_profile"
              >Profile</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="redirect_to_home"
              >Home</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="redirect_to_apply"
              >Apply to become a blogger!</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "page-header",

  methods: {
    redirect_to_home: function () {
      this.$router.push("/");
    },

    redirect_to_profile: function () {
      this.$router.push("/profile");
    },

    redirect_to_apply: function () {
      this.$router.push("/apply");
    },
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header_img {
  margin-top: 0;
  width: 200px;
  height: 55px;
}
.login_button {
  margin-top: 6px;
}
</style>