<template>
  <div>
    <v-app-bar absolute dark height="75vh" class="logo" margin="0px" padding="0px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="logo">
        <img src="@/assets/logo.jpg" alt="xStandard site logo" />
      </div>
    </v-app-bar>
    <p class="test">Test</p>
  </div>
</template>

<script>
export default {
  name: "home-feed",
};
</script>

<style lang="scss" scoped>
.logo {
  display: grid;
  padding: 0;
  margin: 0;
}
.logo,
img {
  height: 7.5vh;
  align-content: center;
  justify-content: center;
}
</style>