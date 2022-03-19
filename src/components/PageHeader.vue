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
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Login</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" v-model="email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" v-model="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <medium>* Indicates required field</medium>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="loginUser">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red--text">
          <v-list-item>
            <v-list-item-title @click="redirect_to_profile">Profile</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="redirect_to_home">Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="redirect_to_apply">Apply to become a blogger!</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "page-header",

  methods: {
    loginUser: function () {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: `${process.env.VUE_APP_API_URL}/api/user_login`,
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          this.loginStatus = "Success";
          cookies.set("session", res.data.login_token);
          this.$router.push("/");
        })
        .catch((err) => {
          this.loginStatus = "Error.";
          console.log(err);
        });
    },

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
    dialog: false,
    email: "",
    password: "",
    loginStatus: "Start the login process",
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
.v-btn {
  margin-top: 6px;
}
</style>