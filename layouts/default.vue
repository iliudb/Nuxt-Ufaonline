<template>
  <v-app style="background: black; width: 100%">
    <div>
      <div class="d-flex justify-center" style="width: 100%">
        <AppBar />
      </div>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style lang="scss">
.v-application .primary--text {
  color: #4caf50 !important;
  caret-color: #4caf50 !important;
}
</style>