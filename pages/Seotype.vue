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
        <div
          class="d-flex justify-center align-center"
          id="seotype"
          v-for="i in seotype"
          :key="i.id"
        >
          <div style="width: 100%; position: relative; top: 0">
            <div style="width: 100%; position: absolute">
              <img style="width: 100%; scale:10 10" :src="i.img" />
            </div>
            <div class="text-center" id="seotypetxt">
              <strong>{{ i.value }}</strong>
            </div>
          </div>
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
          value: "UFA",
          img: require("../assets/Webp/Seotype/logoufa.webp"),
        },
        {
          id: 2,
          value: "เว็บพนันออนไลน์",
          img: require("../assets/Webp/Seotype/logoufa.webp"),
        },
        {
          id: 3,
          value: "ฟุตบอล Football",
          img: require("../assets/Webp/Seotype/logoufa.webp"),
        },
        {
          id: 4,
          value: "คาสิโน Casino",
          img: require("../assets/Webp/Seotype/logoufa.webp"),
        },
        {
          id: 5,
          value: "อื่น ๆ",
          img: require("../assets/Webp/Seotype/logoufa.webp"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#seotypetxt {
  position: relative;
  color: black;
  font-size: 25px;
}
#seotype {
  width: 250px;
  height: 250px;
  margin: 1%;
  background: white;
}
</style>
