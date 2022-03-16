<template>
  <div class="login" ref="login">
    <page-header></page-header>
    <v-content class="login_info">
      <v-card width="500px">
        <v-text-field label="Email..." v-model="email"></v-text-field>
        <v-text-field
          label="Password..."
          type="password"
          v-model="password"
        ></v-text-field>
      </v-card>
      <v-card>
        <v-btn class="buttons" color="primary" width="5vw" @click="loginUser"
          >Login</v-btn
        >
        <v-btn class="buttons" color="secondary" width="7vw" to="/register"
          >Register</v-btn
        >
      </v-card>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import PageHeader from './PageHeader.vue';
export default {
  components: { PageHeader },
  name: "login-user",

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
  },
  data() {
    return {
      email: "",
      password: "",
      loginStatus: "Start the login process",
    };
  },
};
</script>

<style lang="scss" scoped>
.login_info {
  display: grid;
  grid-template-rows: auto;

  margin-top: 25vh;
  align-items: center;
  justify-items: center;
}
</style>