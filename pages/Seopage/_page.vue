<template>
  <div class="d-flex justify-center" style="width: 100%">
    <!-- <div>seopage {{ page }}</div> -->
    <!-- <div>{{ page.id }}</div> -->
    <div class="hidden-sm-and-down" style="height: 100px"></div>
    <div
      style="width: 100%; max-width: 2000px"
      class="d-flex justify-center flex-wrap"
    >
      <section class="d-flex justify-center flex-wrap">
        <div class="d-flex justify-center" style="font-size: 50px; width: 100%">
          <div>
            <strong> {{ seoeditpost.title }} </strong>
          </div>
        </div>
        <div>
          <img
            style="max-width: 500px"
            :src="'https://image.oneslot.bet/' + seoeditpost.seoimg"
          />
        </div>
        <div
          style="
            font-size: 20px;
            width: 100%;
            padding: 0px 5%;
            text-indent: 50px;
            text-align: justify;
          "
        >
          {{ seoeditpost.description }}
        </div>
        <div>By : {{ seoeditpost.author }}</div>
      </section>
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
          console.log(res);
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