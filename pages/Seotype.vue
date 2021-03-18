<template>
  <div
    class="d-flex justify-center flex-wrap"
    style="color: white; width: 100%"
  >
    <div style="width: 100%; max-width: 2000px">
      <h1 class="text-center" style="margin: 20px 0px; font-size: 50px">
        บทความ
      </h1>
      <article class="d-flex justify-center flex-wrap">
        <div style="margin: 1%" v-for="i in seotype" :key="i.id">
          <!-- :href="'http://ufa-online.bet/seo/'+i.value" -->
          <a
            style="width: 100%; text-decoration: none"
            :href="'http://localhost:3000/seo?type=' + i.type"
          >
            <div class="d-flex justify-center align-center" id="seotype">
              <div style="">

              </div>
              <div
                class="d-flex justify-center align-center"
                style="
                  height: 100%;
                  width: 100%;
                  position: relative;
                  top: 0;
                  overflow: hidden;
                "
              >
                <div
                  class="d-flex justify-center align-center"
                  style="
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    overflow: hidden;
                  "
                >
                  <img style="height: 100%" :src="i.img" />
                </div>
                <div class="text-center" id="seotypetxt">
                  <strong>{{ i.value }}</strong>
                </div>
              </div>
            </div>
          </a>
        </div>
      </article>
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
          type:"UFA",
          value: "UFA",
          img: require("../assets/Webp/Seotype/article01.webp"),
        },
        {
          id: 2,
          type:"Football",
          value: "ฟุตบอล Football",
          img: require("../assets/Webp/Seotype/article02.webp"),
        },
        {
          id: 3,
          type:"Casino",
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
  width: 250px;
  height: 250px;
  background: white;
  #seotypetxt {
    position: relative;
    color: black;
    font-size: 25px;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 42.5% 0px;
    z-index: -1;
  }
}
#seotype:hover {
  #seotypetxt {
    background: white;
    opacity: 0.8;
    z-index: 1;
  }
}
</style>
