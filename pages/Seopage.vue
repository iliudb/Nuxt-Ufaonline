<template>
  <div class="d-flex justify-center" style="width: 100%;">
    <!-- <div>seopage {{ page }}</div> -->
    <!-- <div>{{ page.id }}</div> -->
    <div style="width: 100%; max-width:2000px;" class="d-flex justify-center flex-wrap">
      <article class="d-flex justify-center flex-wrap">
        <div class="d-flex justify-center" style="font-size: 50px; width: 100%">
          <div>
            <strong> {{ page.title }} </strong>
          </div>
        </div>
        <div>
          <img
            style="max-width: 500px"
            :src="'http://image.oneslot.bet/' + page.img"
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
          {{ page.description }}
        </div>
        <div>By : {{ page.author }}</div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      page: "",
    };
  },
  mounted() {
    this.page = this.$route.query.page;
  },
};
</script>

<style>
</style>