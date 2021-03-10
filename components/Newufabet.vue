<template>
  <div class="justify-center">
    <div id="redline"></div>
    <!-- Desktop -->
    <div class="hidden-sm-and-down">
      <div class="d-flex flex-wrap" style="width: 100%; color: white; padding: 2.5%">
        <div class="d-flex justify-center flex-wrap" style="width: 40%;">
          <div style="width:100%;"><img style="width:100%" src="../assets/Webp/Newufabet/ufalogo.webp" /></div>
          <div style="width:100%"><img style="width:100%" src="../assets/Webp/Newufabet/mb2.webp" /></div>
        </div>
        <div style="width:10%"></div>
        <div style="width: 50%">
          <div id="Newufahaed">
            ฝาก-ถอน ออโต้ โปรแรงสุดในไทย อัพเกรดใหม่ New UFABET ระบบไวกว่าเดิม
          </div>
          <div class="d-flex flex-wrap">
            <div
              v-for="i in check"
              :key="i.id"
              style="margin: 0px 10px 10px 30px; width: 100%"
              class="d-flex align-center"
            >
              <div class="d-flex align-center">
                <img :src="i.src" />
              </div>
              <div id="checktext">{{ i.text }}</div>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-center" id="gamelogo">
            <div v-for="i in gamelog" :key="i.id">
              <img :src="i.src" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <div
        class="d-flex flex-wrap"
        style="width: 100%; color: white; padding: 0px"
      >
        <div style="width: 100%">
          <div id="mbNewufahaed">
            ฝาก-ถอน ออโต้ โปรแรงสุดในไทย อัพเกรดใหม่ New UFABET ระบบไวกว่าเดิม
          </div>
          <div class="d-flex justify-center flex-wrap">
            <div id="mbNewufadetail">
              <div
                v-for="i in check"
                :key="i.id"
                style="margin: 10px 0px; width: 100%"
                class="d-flex align-center"
              >
                <div style="width: 10%" class="d-flex align-center">
                  <img style="width: 100%" :src="i.src" />
                </div>
                <div style="width: 90%" id="checktext">{{ i.text }}</div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-center">
            <v-slide-group center-active>
              <v-slide-item
                v-for="i in gamelog"
                :key="i.id"
                v-slot="{ toggle }"
                style="width: 100px; margin: 0 0.5%"
              >
                <div color="transparent" style="width: 50px" @click="toggle">
                  <img style="width: 100%" :src="i.src" />
                </div>
              </v-slide-item>
            </v-slide-group>
          </div>
          <div
            style="width: 100%; margin-top: 20px"
            class="d-flex justify-center flex-wrap"
          >
            <img
              style="width: 100%; max-width: 400px"
              src="../assets/Webp/Newufabet/mb2.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    gamelog: [
      { id: 1, src: require("../assets/Webp/Newufabet/ufa.webp") },
      { id: 2, src: require("../assets/Webp/Newufabet/sa.webp") },
      { id: 3, src: require("../assets/Webp/Newufabet/sexy.webp") },
      { id: 4, src: require("../assets/Webp/Newufabet/joker.webp") },
      { id: 5, src: require("../assets/Webp/Newufabet/lotto.webp") },
      { id: 6, src: require("../assets/Webp/Newufabet/fishing.webp") },
    ],
    check: [
      {
        id: 1,
        src: require("../assets/Webp/Newufabet/ufcheck.webp"),
        text: "สมัครง่าย ไม่ต้องแอดไลน์",
      },
      {
        id: 2,
        src: require("../assets/Webp/Newufabet/ufcheck.webp"),
        text: "อยู่ในระบบตลอด ไม่ต้องล็อคอินทุกครั้งที่เล่น",
      },
      {
        id: 3,
        src: require("../assets/Webp/Newufabet/ufcheck.webp"),
        text: "การันตีการ ฝาก-ถอน ออโต้เจ้าแรก ที่ใช้ได้จริง",
      },
      {
        id: 4,
        src: require("../assets/Webp/Newufabet/ufcheck.webp"),
        text: "ฝ่ายบริการเป็นกันเองและดูแลอย่างมืออาชีพ 24 ชั่วโมง",
      },
      {
        id: 5,
        src: require("../assets/Webp/Newufabet/ufcheck.webp"),
        text: "เล่นหนักไม่ต้องกังวล ถอนได้ไม่อั้น ไม่จำกัดสูงสุดต่อวัน",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#gamelogo {
  width: 100%;
  margin: 40px 0px 0px 0px;
  div {
    margin: 0px 10px;
    img {
      width: 100px;
    }
  }
}
#mbNewufadetail {
  padding: 3%;
}
#mbNewufahaed {
  padding: 0px 10%;
  font-size: 25px;
  margin: 10px 0px 0px 0px;
  text-align: center;
}
#Newufahaed {
  font-size: 30px;
  margin-bottom: 20px;
}
#checktext {
  padding-left: 10px;
  text-align: start;
}
#redline {
  width: 100%;
  height: 3px;
  background: red;
  margin: 20px 0px;
}
</style>