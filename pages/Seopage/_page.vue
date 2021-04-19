<template>
  <div class="d-flex justify-center flex-wrap" style="width: 100%">
    <!-- <div>seopage {{ page }}</div> -->
    <!-- <div>{{ page.id }}</div> -->
    <div class="hidden-sm-and-down" style="height: 100px; width: 100%"></div>

    <div
      style="width: 100%; max-width: 2000px"
      class="d-flex justify-center flex-wrap"
    >
      <section style="width: 100%" class="d-flex justify-center flex-wrap">
        <div style="width: 100%" class="d-flex justify-center">
          <h1
            class="text-center"
            style="font-size: 50px; width: 100%; color: white"
          >
            {{ seoeditpost.title }}
          </h1>
        </div>
        <div
          style="width: 100%; max-width: 500px"
          class="d-flex justify-center"
        >
          <img
            style="width: 100%"
            :src="'https://image.warpufa.bet/' + seoeditpost.seoimg"
          />
        </div>
        <p
          style="
            font-size: 20px;
            width: 100%;
            padding: 0px 5%;
            text-indent: 50px;
            white-space: pre-line;
          "
          v-html="seoeditpost.description"
        >
        </p>
        <div>By : {{ seoeditpost.author }}</div>
      </section>
      <div style="height: 50px; width:100%;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      page: "",
      seoeditpost: {
        id: "",
        title: "",
        author: "",
        description: "",
        seoimg: "",
        type: "",
      },
    };
  },
  mounted() {
    this.page = this.$route.params.page;
    this.seoselecteone(this.page);
  },
  methods: {
    async seoselecteone(id) {
      await this.$axios
        .$get(`/articleone/${id}`)
        .then((res) => {
          // console.log(res);
          this.seoeditpost.id = res.id;
          this.seoeditpost.title = res.title;
          this.seoeditpost.description = res.description;
          this.seoeditpost.author = res.author;
          this.seoeditpost.seoimg = res.img;
          this.seoeditpost.type = res.type;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>