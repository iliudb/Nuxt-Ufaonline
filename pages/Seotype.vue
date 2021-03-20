<template>
  <div
    class="d-flex justify-center flex-wrap"
    style="color: white; width: 100%"
  >
    <div style="width: 100%; max-width: 2000px">
      <!-- Desktop -->
      <div class="hidden-sm-and-down">
        <div style="height:100px" class="hidden-sm-and-down"></div>
        <h1 class="text-center" style="margin: 20px 0px; font-size: 70px">
          บทความ
        </h1>
        <section class="d-flex justify-center flex-wrap">
          <div style="width: auto; margin: 1%" v-for="i in seotype" :key="i.id">
            <!-- <a
            style="width: 100%; text-decoration: none"
            :href="'https://ufa-online.bet/seo/' + i.type"
          > -->
            <NuxtLink style="text-decoration: none" :to="'/seo/' + i.type">
              <div
                class="d-flex justify-center align-center flex-wrap"
                id="seotype"
              >
                <div
                  class="d-flex justify-center align-center"
                  style="height: 300px; width: 100%; overflow: hidden"
                >
                  <img style="height: 100%" :src="i.img" />
                </div>
                <div
                  class="d-flex justify-center align-center text-center"
                  id="seotypetxt"
                >
                  <strong>{{ i.value }}</strong>
                </div>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- Mobile -->
      <div class="hidden-md-and-up">
        <h1 class="text-center" style="margin: 20px 0px; font-size: 40px">
          บทความ
        </h1>
        <section style="margin: 1%" class="d-flex justify-center flex-wrap">
          <div style="width: 46%; margin: 2%" v-for="i in seotype" :key="i.id">
            <!-- <a
            style="width: 100%; text-decoration: none"
            :href="'https://ufa-online.bet/seo/' + i.type"
          > -->
            <NuxtLink
              style="text-decoration: none"
              :to="'/seo/' + i.type"
            >
              <div
                class="d-flex justify-center align-center flex-wrap"
                id="mbseotype"
              >
                <div
                  class="d-flex justify-center align-center"
                  style="height: 250px; width: 100%; overflow: hidden"
                >
                  <img style="height: 100%" :src="i.img" />
                </div>
                <div
                  class="d-flex justify-center align-center text-center"
                  id="mbseotypetxt"
                >
                  <strong>{{ i.value }}</strong>
                </div>
              </div>
            </NuxtLink>
          </div>
        </section>
        <div style="height: 100px" class="hidden-md-and-up"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      seotype: [
        {
          id: 1,
          type: "UFA",
          value: "UFA",
          img: require("../assets/Webp/Seotype/article01.webp"),
        },
        {
          id: 2,
          type: "Football",
          value: "ฟุตบอล Football",
          img: require("../assets/Webp/Seotype/article02.webp"),
        },
        {
          id: 3,
          type: "Casino",
          value: "คาสิโน Casino",
          img: require("../assets/Webp/Seotype/article03.webp"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#seotype {
  width: 300px;
  height: 350px;
  overflow: hidden;
}
#seotypetxt {
  color: black;
  font-size: 30px;
  background: red;
  width: 100%;
  height: 50px;
}
#mbseotype {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
#mbseotypetxt {
  color: black;
  font-size: 20px;
  background: red;
  width: 100%;
  height: 50px;
}
</style>
