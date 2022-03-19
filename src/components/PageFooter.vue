<template>
  <v-app id="inspire">
    <v-footer color="black" absolute>
      <v-row justify="center">
        <v-btn color="white" text rounded class="my-2" @click="redirect_to_home">
          Home
        </v-btn>
        <v-btn color="white" text rounded class="my-2">
          Contact Us
        </v-btn>
        <v-col class="black lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>xStandard</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "page-footer",

  methods: {
    redirect_to_home: function () {
      this.$router.push("/");
    },
  },

  data: () => ({
    links: ["Home", "Contact Us"],
  }),
};
</script>

<style lang="scss" scoped>
</style>