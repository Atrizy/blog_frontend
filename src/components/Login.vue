<template>
  <div class="login" ref="login">
    <div class="header">
      <img src="@/assets/logo.jpg" alt="xStandard site logo" />
    </div>
    <v-content class="login_info">
      <v-card width="500px">
        <v-text-field label="Email..." v-model="email"></v-text-field>
        <!-- <v-text-field
        label="Username.."
        v-model="username">
        </v-text-field>         -->
        <v-text-field
          label="Password..."
          type="password"
          v-model="password"
        ></v-text-field>
        <!-- <v-text-field 
          label="DOB (FORMAT: 2001-01-01)"
          v-model="dob">
        </v-text-field> -->
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
export default {
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
.header {
  display: grid;
  padding: 0;
  margin: 0;
  height: 7.5vh;
  background-color: black;
}

.header img {
  height: 7.5vh;
  align-items: center;
  place-self: center;
}

.login_info {
  display: grid;
  grid-template-rows: auto;

  padding-top: 25vh;
  align-items: center;
  justify-items: center;
}
</style>