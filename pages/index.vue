<template>
  <div class="d-flex justify-center flex-wrap" id="app">
    <!-- <div class="d-flex justify-center" style="width: 100%">
      <AppBar />
    </div> -->
    <div class="d-flex justify-center" style="width: 100%">
      <Home />
    </div>
    <div class="d-flex justify-center" style="width: 100%">
      <Ufagame />
    </div>
    <div class="d-flex justify-center" style="width: 100%">
      <Ufapromotion />
    </div>
    <div class="d-flex justify-center" style="width: 100%">
      <Newufabet />
    </div>
    <div class="d-flex justify-center" style="width: 100%">
      <Aboutus />
    </div>

    <!-- <div v-for="i in cards" :key="i.id">
      <h1 v-html="i.title"></h1>
    </div> -->

    <!-- <h1 v-html="test"></h1> -->

    <!-- {{cards.title}} -->

    <section hidden>
      <article v-for="i in arr" :key="i.id">
        <strong>{{ i.title }}</strong>
        <p>{{ i.description }}</p>
      </article>
    </section>
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
      arr: "",
      test: "Welcome to <br/> Arrow GTP",
      cards: [
        {
          title: "Welcome to <br/> Arrow GTP",
        },
      ],
    };
  },
  components: {
    Logo,
    VuetifyLogo,
  },
  mounted() {
    this.seoselecte();
  },
  methods: {
    async seoselecte() {
      await this.$axios
        .$get(`/article`)
        .then((res) => {
          // console.log("data", res);
          this.arr = res;
          //   console.log("arr", this.arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
