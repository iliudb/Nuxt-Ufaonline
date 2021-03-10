<template>
  <div>
    <div id="redlinethic"></div>

    <div class="justify-center" style="padding: 0px 0px">
      <!-- Desktop -->
      <div class="hidden-sm-and-down">
        <div style="position: fixed; right: 2.5%; top: 60%; z-index: 1">
          <img style="10%" src="../assets/Webp/Ufagame/linebunnyfix.webp" />
        </div>
        <div class="d-flex justify-center">
          <div
            style="width: 15%; margin: 0 1.5%"
            v-for="i in ugimg"
            :key="i.id"
          >
            <img style="width: 100%" :src="i.src" />
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="hidden-md-and-up">
        <div style="position: fixed; right: 2.5%; top: 75%; z-index: 1; height:100px; width:100px;">
          <img style="width:100%" src="../assets/Webp/Ufagame/linebunnyfix.webp" />
        </div>
        <div class="d-flex justify-center">
          <v-slide-group center-active>
            <v-slide-item
              v-for="i in ugimg"
              :key="i.id"
              v-slot="{ toggle }"
              style="width: 120px"
            >
              <div color="transparent" @click="toggle">
                <img style="width: 100%" :src="i.src" />
              </div>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>
    </div>
    <div id="redlinethic"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ugimg: [
      { id: 1, src: require("../assets/Webp/Ufagame/ug01.webp") },
      { id: 2, src: require("../assets/Webp/Ufagame/ug02.webp") },
      { id: 3, src: require("../assets/Webp/Ufagame/ug03.webp") },
      { id: 4, src: require("../assets/Webp/Ufagame/ug04.webp") },
      { id: 5, src: require("../assets/Webp/Ufagame/ug05.webp") },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#redlinethic {
  width: 100%;
  height: 5px;
  background: red;
  margin: 20px 0px;
}
</style>