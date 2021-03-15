<template>
  <div id="AppBar">
    <!-- Desktop -->
    <div class="hidden-sm-and-down">
      <div class="d-flex justify-center" style="width: 100%">
        <div class="d-flex align-center" id="ufabar">
          <!-- Dialog -->
          <div class="d-flex align-center" style="width:5%">
            <v-dialog transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  color="red"
                  v-bind="attrs"
                  v-on="on"
                  absolute
                  fab
                  icon
                >
                  <v-icon large>mdi-menu</v-icon>
                </v-btn>
              </template>

              <v-card
                style="
          max-width: 150px;
          border-radius: 0px 50px 50px 0px;
          position: fixed;
          left: 0;
          top: 0;
        "
                class="py-5"
              >
                <v-row
                  class="justify-center"
                  style="margin: 20px 0 0 0; margin-top: 15px"
                >
                  <a href="https://lin.ee/sQCIWhr" target="_BLANK">
                    <div>
                      <img
                        width="90%"
                        src="../assets/Webp/Appbar/linebunnyfix.webp"
                      />
                    </div>
                  </a>
                </v-row>

                <v-row class="justify-center">
                  <v-btn
                    text
                    style="margin: 20px 0 0 0; height: 120px !important"
                    href="https://ufaonline.ibetauto.com/ufaonline/ufabet/login"
                  >
                    <div>
                      <img
                        class="mt-0"
                        style="width: 100px !important"
                        src="../assets/Webp/Appbar/11.webp"
                      />
                    </div>
                  </v-btn>
                </v-row>

                <v-row class="justify-center">
                  <v-btn
                    text
                    style="margin: 20px 0 0 0; height: 120px !important"
                    href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
                  >
                    <div>
                      <img
                        class="mt-0"
                        style="width: 100px !important"
                        src="../assets/Webp/Appbar/22.webp"
                      />
                    </div>
                  </v-btn>
                </v-row>

                <v-row class="justify-center">
                  <v-btn
                    text
                    style="margin: 20px 0 0 0; height: 120px !important"
                  >
                    <div>
                      <img
                        class="mt-0"
                        style="width: 100px !important"
                        src="../assets/Webp/Appbar/33.webp"
                      />
                    </div>
                  </v-btn>
                </v-row>

                <v-row class="justify-center">
                  <v-btn
                    text
                    style="margin: 20px 0 0 0; height: 120px !important"
                  >
                    <div>
                      <img
                        class="mt-0"
                        style="width: 100px !important"
                        src="../assets/Webp/Appbar/44.webp"
                      />
                    </div>
                  </v-btn>
                </v-row>
              </v-card>
            </v-dialog>
          </div>
          <!-- EndDialog -->
          <div class="d-flex align-center" style="height: 100px; width: 30%">
            <img
              style="max-width: 400px; width: 100%"
              src="../assets/Webp/Appbar/logoufa.webp"
            />
          </div>
          <div class="d-flex flex-wrap" style="width: 40%">
            <div
              class="d-flex flex-wrap justify-center"
              style="width: 25%"
              v-for="i in appbar"
              :key="i.id"
            >
              <div style="width:100%">
                <a @click="article(i.path)"
                  ><img style="width: 100%" :src="i.src"
                /></a>
              </div>
            </div>
          </div>
          <div style="width: 30%" class="d-flex justify-end">
            <a
              style="color: white"
              href="https://ufaonline.ibetauto.com/ufaonline/ufabet/login"
            >
              <div
                class="d-flex justify-center align-center"
                id="ufalogin"
              ></div
            ></a>
            <a
              style="color: white"
              href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
            >
              <div
                class="d-flex justify-center align-center"
                id="ufaregis"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <div class="d-flex justify-center" style="width: 100%">
        <!-- Dialog -->
        <div class="d-flex align-center" style="width:5%">
          <v-dialog transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                color="red"
                v-bind="attrs"
                v-on="on"
                absolute
                fab
                icon
              >
                <v-icon large>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-card
              style="
          max-width: 150px;
          border-radius: 0px 50px 50px 0px;
          position: fixed;
          left: 0;
          top: 0;
        "
              class="py-5"
            >
              <v-row
                class="justify-center"
                style="margin: 20px 0 0 0; margin-top: 15px"
              >
                <a href="https://lin.ee/sQCIWhr" target="_BLANK">
                  <div>
                    <img
                      width="90%"
                      src="../assets/Webp/Appbar/linebunnyfix.webp"
                    />
                  </div>
                </a>
              </v-row>

              <v-row class="justify-center">
                <v-btn
                  text
                  style="margin: 20px 0 0 0; height: 120px !important"
                  href="https://ufaonline.ibetauto.com/ufaonline/ufabet/login"
                >
                  <div>
                    <img
                      class="mt-0"
                      style="width: 100px !important"
                      src="../assets/Webp/Appbar/11.webp"
                    />
                  </div>
                </v-btn>
              </v-row>

              <v-row class="justify-center">
                <v-btn
                  text
                  style="margin: 20px 0 0 0; height: 120px !important"
                  href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
                >
                  <div>
                    <img
                      class="mt-0"
                      style="width: 100px !important"
                      src="../assets/Webp/Appbar/22.webp"
                    />
                  </div>
                </v-btn>
              </v-row>

              <v-row class="justify-center">
                <v-btn
                  text
                  style="margin: 20px 0 0 0; height: 120px !important"
                >
                  <div>
                    <img
                      class="mt-0"
                      style="width: 100px !important"
                      src="../assets/Webp/Appbar/33.webp"
                    />
                  </div>
                </v-btn>
              </v-row>

              <v-row class="justify-center">
                <v-btn
                  text
                  style="margin: 20px 0 0 0; height: 120px !important"
                >
                  <div>
                    <img
                      class="mt-0"
                      style="width: 100px !important"
                      src="../assets/Webp/Appbar/44.webp"
                    />
                  </div>
                </v-btn>
              </v-row>
            </v-card>
          </v-dialog>
        </div>
        <!-- EndDialog -->
        <v-spacer></v-spacer>
        <div style="width:60%; margin:2.5%">
          <img
            style="width: 100%"
            src="../assets/Webp/Newufabet/ufalogo.webp"
          />
        </div>
        <v-spacer></v-spacer>
      </div>
    </div>

    <div id="loginbottombar" class="hidden-md-and-up">
      <div
        class="d-flex justify-center align-end"
        style="width:100%;height:100%"
      >
        <v-btn
          style="background: transparent;"
          height="100%"
          width="18%"
          class="align-end"
          ><img id="navimg101" src="../assets/Webp/Appbar/1-01.webp"
        /></v-btn>
        <v-btn
          style="background: transparent;"
          height="100%"
          width="18%"
          class="align-end"
          ><img id="navimg101" src="../assets/Webp/Appbar/1-02.webp"
        /></v-btn>
        <v-btn
          style="background: transparent;"
          height="100%"
          width="28%"
          href="https://lin.ee/sQCIWhr"
          target="_BLANK"
        >
          <img id="navimg102" src="../assets/Webp/Appbar/linebunnyfix.webp"
        /></v-btn>
        <v-btn
          style="background: transparent;"
          height="100%"
          width="18%"
          class="align-end"
        >
          <div id="star1">
            <div class="star-x1"></div>
            <div class="star-y1"></div>
          </div>
          <div id="star2">
            <div class="star-x2"></div>
            <div class="star-y2"></div>
          </div>
          <div id="star3">
            <div class="star-x3"></div>
            <div class="star-y3"></div>
          </div>
          <img id="navimg101" src="../assets/Webp/Appbar/1-03.webp"
        /></v-btn>
        <v-btn
          style="background: transparent;"
          height="100%"
          width="18%"
          class="align-end"
          ><img id="navimg101" src="../assets/Webp/Appbar/1-04.webp"
        /></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      appbar: [
        { id: 1, src: require("../assets/Webp/Appbar/promotion.webp") },
        { id: 2, src: require("../assets/Webp/Appbar/activity.webp") },
        { id: 3, src: require("../assets/Webp/Appbar/introduce.webp") },
        {
          id: 4,
          src: require("../assets/Webp/Appbar/article.webp"),
          path: "seo"
        }
      ]
    };
  },
  methods: {
    article(path) {
      if (path == "seo") {
        this.$router.push({ path: "seo" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#loginbottombar {
  background-color: black;
  position: fixed;
  bottom: 0px;
  height: 80px;
  width: 100%;
  z-index: 1;
}
#ufaregis {
  margin: 0px 5px;
  width: 120px;
  padding: 0px 20px;
  background: #ff6666;
  border-radius: 25px;
  min-height: 40px;
}
#ufaregis:after {
  padding: 5px 15px;
  content: "สมัครสมาชิก";
  font-size: 15px;
  position: absolute;
  top: 100;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 212, 255, 0) 50%
  );
  border-radius: 25px;
  min-height: 30px;
}
#ufalogin {
  margin: 0px 5px;
  width: 120px;
  padding: 0px 20px;
  background: #32d800;
  border-radius: 25px;
  min-height: 40px;
}
#ufalogin:after {
  padding: 5px 23px;
  content: "เข้าสู่ระบบ";
  font-size: 15px;
  position: absolute;
  top: 100;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 212, 255, 0) 50%
  );
  border-radius: 25px;
  min-height: 30px;
}
#ufabar {
  z-index: 2;
  max-width: 2000px;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: black;
  // background: linear-gradient(
  //   180deg,
  //   rgba(0, 0, 0, 1) 70%,
  //   rgba(255, 0, 0, 0) 100%
  // );
}
#star1 {
  position: absolute;
  top: 0%;
  left: 10%;
}
#star2 {
  position: absolute;
  top: 30%;
  left: 65%;
}
#star3 {
  position: absolute;
  top: 60%;
  left: 10%;
}
.star-x1 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(90deg);
  animation: shining-x1 1s ease-in-out infinite;
}
.star-y1 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(0deg);
  animation: shining-y1 1s ease-in-out infinite;
}

.star-x2 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(90deg);
  animation: shining-x2 2s ease-in-out infinite;
}
.star-y2 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(0deg);
  animation: shining-y2 2s ease-in-out infinite;
}

.star-x3 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(90deg);
  animation: shining-x3 3s ease-in-out infinite;
}
.star-y3 {
  content: "";
  position: absolute;
  height: 4px;
  width: 20px;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.7),
    #fff686,
    rgba(255, 0, 0, 0.7)
  );
  filter: drop-shadow(0 0 10px #ff5e00);
  border-radius: 100%;
  transform: translateX(50%) rotateZ(0deg);
  animation: shining-y3 3s ease-in-out infinite;
}

@keyframes shining-x1 {
  0% {
    transform: scale(0, 0) rotateZ(90deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(90deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(90deg);
  }
}
@keyframes shining-y1 {
  0% {
    transform: scale(0, 0) rotateZ(0deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(0deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(0deg);
  }
}
@keyframes shining-x2 {
  0% {
    transform: scale(0, 0) rotateZ(90deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(90deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(90deg);
  }
}
@keyframes shining-y2 {
  0% {
    transform: scale(0, 0) rotateZ(0deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(0deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(0deg);
  }
}
@keyframes shining-x3 {
  0% {
    transform: scale(0, 0) rotateZ(90deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(90deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(90deg);
  }
}
@keyframes shining-y3 {
  0% {
    transform: scale(0, 0) rotateZ(0deg);
  }
  50% {
    transform: scale(1, 1) rotateZ(0deg);
  }
  100% {
    transform: scale(0, 0) rotateZ(0deg);
  }
}
#navimg101 {
  max-height: 55px;
  @media (min-width: 290px) {
    max-height: 65px;
    height: 100%;
  }
}
#navimg11 {
  max-height: 35px;
  margin-top: -10px;
  @media (min-width: 290px) {
    max-height: 40px;
    margin-top: -20px;
  }
}
#navimg102 {
  max-height: 80px;
  @media (min-width: 290px) {
    max-height: 80px;
  }
}
#navimg22 {
  max-height: 35px;
  margin-top: -10px;
  @media (min-width: 290px) {
    max-height: 40px;
    margin-top: -20px;
  }
}
#navimg103 {
  max-height: 55px;
  @media (min-width: 290px) {
    max-height: 65px;
  }
}
#navimg33 {
  max-height: 35px;
  margin-top: -10px;
  @media (min-width: 290px) {
    max-height: 40px;
    margin-top: -20px;
  }
}
#navimg104 {
  max-height: 70px;
  @media (min-width: 290px) {
    margin-top: -10px;
    max-height: 80px;
  }
}
#navimg44 {
  max-height: 40px;
  margin-top: -30px;
  @media (min-width: 290px) {
    max-height: 40px;
    margin-top: -25px;
  }
}
#navimg105 {
  max-height: 65px;
  @media (min-width: 290px) {
    max-height: 70px;
  }
}
#navimg55 {
  max-height: 40px;
  margin-top: -30px;
  @media (min-width: 290px) {
    max-height: 45px;
    margin-top: -25px;
  }
}
</style>
