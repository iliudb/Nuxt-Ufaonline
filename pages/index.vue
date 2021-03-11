<template>
  <div id="app">
    <AppBar />
    <Home />
    <Ufagame />
    <Ufapromotion />
    <Newufabet />
    <Aboutus />
    <!-- <div
      id="seoa"
      class="d-flex"
      style="background: transparent; height: 100px; width: 100%"
    >
      <div
        class="d-flex align-center justify-center"
        style="background: transparent; height: 100px; width: 80%"
      >
        <div style="width: 90%; margin: 0px auto">
          <v-text-field color="red" v-model="seopass"></v-text-field>
        </div>
      </div>
      <div
        class="d-flex align-center justify-center"
        style="background: transparent; height: 100px; width: 20%"
      >
        <v-btn
          @click="seocondis()"
          v-if="seopass != ''"
          style="height: 80%; width: 80%"
          >enter</v-btn
        >
      </div>
    </div> -->

    <!-- <div v-if="this.$store.getters.gseocon == true">
      <Seo />
    </div> -->
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  data: () => {
    return {
      seopass: "",
      seocf: "gkp",
    };
  },
  components: {
    Logo,
    VuetifyLogo,
  },
  methods: {
    seocondis() {
      if (this.seopass == this.seocf) {
        if (this.$store.getters.gseocon == false) {
          this.$store.dispatch("aseocon", true);
          this.seopass = "";
        } else {
          this.$store.dispatch("aseocon", false);
          this.seopass = "";
        }
      } else {
        return;
      }
    },
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: myKanit;
  src: url("../assets/Fonts/Kanit Medium.ttf");
}
#app {
  font-family: myKanit;
}
</style>
