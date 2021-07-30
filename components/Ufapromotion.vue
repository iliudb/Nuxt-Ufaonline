<template>
  <div style="width: 100%; max-width: 2000px">
    <!-- Desktop -->
    <div class="hidden-sm-and-down">
      <div style="color: white; text-align: center; font-size: 40px">
        โปรโมชั่น
      </div>
      <div class="d-flex justify-center" style="padding: 0px 0px 2.5% 0px">
        <img src="../assets/Webp/Ufapromotion/promotion.webp" />
      </div>
      <div class="d-flex justify-center" style="width: 100%;">
        <v-slide-group v-model="model" center-active mandatory>
          <v-slide-item v-for="n in proimg" :key="n.id" v-slot="{ toggle }">
            <v-card
              style="
                width: 400px;
                height: 400px;
                background: transparent;
                padding: 1%;
              "
              @click="toggle"
            >
              <img style="width: 100%; height: 100%" :src="n.src" />
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
      <!-- <div id="proloopimg" class="d-flex justify-center flex-wrap">
        <div class="d-flex justify-center" v-for="i in proimg" :key="i.id">
          <img :src="i.src" />
        </div>
      </div> -->
      <div class="d-flex">
        <div class="d-flex justify-center flex-wrap" style="width: 60%">
          <div style="width: 100%" class="d-flex justify-center">
            <img
              style="width: 100%; max-width: 800px; max-height: 150px"
              src="../assets/Webp/Ufapromotion/ufalogo.webp"
            />
          </div>
          <div id="ufaprohd">เว็บกีฬาออนไลน์ คาสิโนออนไลน์</div>
          <div style="width: 100%">
            <div id="redline"></div>
          </div>
          <div id="ufaprotx">
            UFAONLINE ครบทุกอย่างที่คุณต้องการ อันดับ 1 ของความมั่นคง
            และพร้อมให้บริการ UFAONLINE เว็บไซต์พนันออนไลน์ ที่สมบูรณ์แบบที่สุด
            และได้รับความนิยมในการใช้บริการสูงสุดในประเทศไทย และเอเซีย UFAONLINE
            ได้รับการแต่ตั้งจาก ยูฟ่าเบท เป็นที่แรก ที่เดียวเท่านั้น
            เว็บไซต์แทงบอลออนไลน์ แห่งนี้ได้รับการยกย่องให้เป็น
            เว็บไซต์พนันออนไลน์ ที่ดีที่สุด และมั่นคงที่สุด
            สมาชิกยกย่องให้เราเป็น เว็บไซต์รับเดิมพันออนไลน์ ที่ดีที่สุด
            จากการรีวิวตามสื่อโซเชียลต่างๆ และสมาชิกจำนวนไม่น้อย
            เลือกที่จะใช้บริการ พนันออนไลน์ กับเว็บไซต์ของเรา
            และแน่นอนจำนวนสมาชิกของ เว็บไซต์ พนันออนไลน์แห่งนี้
            เพิ่มขึ้นในอัตราที่สูงมาก ด้วยความใส่ใจในคุณภาพของเว็บไซต์
            ประสิทธิภาพ ของระบบ และการให้บริการ เราจึงเป็นอันดับ 1 ของ
            เว็บไซต์พนันบอลออนไลน์ และ คาสิโนออนไลน์ ด้วยการสะสมประสบการณ์
            ในการให้บริการรับเดิมพันออนไลน์มามากกว่า 10 ปี ทำให้เราเข้าใจ
            และสามารถดำเนินการ และบริหารงานได้อย่างมีคุณภาพ และประสิทธิภาพสูงสุด
          </div>
        </div>
        <div class="d-flex justify-center align-center" style="width: 40%">
          <div class="d-flex justify-center align-center">
            <img
              style="width: 100%"
              src="../assets/Webp/Ufapromotion/chineselion.webp"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <div style="color: white; width: 100%; text-align: center">โปรโมชั่น</div>
      <div>
        <img
          style="width: 100%"
          src="../assets/Webp/Ufapromotion/promotion.webp"
        />
      </div>

      <v-carousel
        cycle
        style="max-height: 350px; max-width:350px; margin:0 auto"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="i in proimg" :key="i.id">
          <div style="width: 100%; max-height: 350px">
            <img style="width: 100%; max-height: 350px" :src="i.src" />
          </div>
        </v-carousel-item>
      </v-carousel>

      <div class="d-flex flex-wrap">
        <div style="width: 100%">
          <div style="width: 100%; max-width: 800px; max-height: 150px">
            <img
              style="width: 100%; height: 100%"
              src="../assets/Webp/Ufapromotion/ufalogo.webp"
            />
          </div>
          <div id="mbufaprohd">เว็บกีฬาออนไลน์ คาสิโนออนไลน์</div>
          <div>
            <div id="redline"></div>
          </div>
          <div id="ufaprotx">
            UFAONLINE ครบทุกอย่างที่คุณต้องการ อันดับ 1 ของความมั่นคง
            และพร้อมให้บริการ UFAONLINE เว็บไซต์พนันออนไลน์ ที่สมบูรณ์แบบที่สุด
            และได้รับความนิยมในการใช้บริการสูงสุดในประเทศไทย และเอเซีย UFAONLINE
            ได้รับการแต่ตั้งจาก ยูฟ่าเบท เป็นที่แรก ที่เดียวเท่านั้น
            เว็บไซต์แทงบอลออนไลน์ แห่งนี้ได้รับการยกย่องให้เป็น
            เว็บไซต์พนันออนไลน์ ที่ดีที่สุด และมั่นคงที่สุด
            สมาชิกยกย่องให้เราเป็น เว็บไซต์รับเดิมพันออนไลน์ ที่ดีที่สุด
            จากการรีวิวตามสื่อโซเชียลต่างๆ และสมาชิกจำนวนไม่น้อย
            เลือกที่จะใช้บริการ พนันออนไลน์ กับเว็บไซต์ของเรา
            และแน่นอนจำนวนสมาชิกของ เว็บไซต์ พนันออนไลน์แห่งนี้
            เพิ่มขึ้นในอัตราที่สูงมาก ด้วยความใส่ใจในคุณภาพของเว็บไซต์
            ประสิทธิภาพ ของระบบ และการให้บริการ เราจึงเป็นอันดับ 1 ของ
            เว็บไซต์พนันบอลออนไลน์ และ คาสิโนออนไลน์ ด้วยการสะสมประสบการณ์
            ในการให้บริการรับเดิมพันออนไลน์มามากกว่า 10 ปี ทำให้เราเข้าใจ
            และสามารถดำเนินการ และบริหารงานได้อย่างมีคุณภาพ และประสิทธิภาพสูงสุด
          </div>
        </div>
        <div class="d-flex justify-center" style="width: 100%">
          <img
            style="width: auto; max-height: 300px; min-width: 100px"
            src="../assets/Webp/Ufapromotion/chineselion.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: "",
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    proimg: [
      { id: 1, src: require("../assets/Webp/Ufapromotion/pro10.webp") },
      { id: 2, src: require("../assets/Webp/Ufapromotion/pro08.webp") },
      { id: 3, src: require("../assets/Webp/Ufapromotion/pro04.webp") },
      { id: 4, src: require("../assets/Webp/Ufapromotion/pro09.webp") },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#ufaprotx {
  color: white;
  font-size: 16px;
  text-align: justify;
  text-indent: 30px;
  padding: 0% 4% 4% 4%;
}
#mbufaprohd {
  color: red;
  font-size: 25px;
  text-align: center;
}
#ufaprohd {
  color: red;
  font-size: 35px;
  text-align: center;
  width: 100%;
}
#proloopimg {
  width: 100%;
  div {
    width: 30%;
    img {
      width: 90%;
      max-height: 400px;
      max-width: 400px;
    }
  }
}
#redline {
  width: 100%;
  height: 3px;
  background: red;
  margin: 20px 0px;
}
</style>
