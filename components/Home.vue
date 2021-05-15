<template>
  <div style="width:100%; max-width:2000px">
    <div class="hidden-sm-and-down" style="height: 100px"></div>
    <!-- Desktop -->
    <div class="hidden-sm-and-down">
      <div class="d-flex justify-center" style="width: 100%;">
        <div
          class="align-center"
          style="width: 100%; display: flex; flex-direction: column;"
        >
          <img style="width: 100%" src="../assets/Webp/Asd/pcbg.webp" />
          <!-- <div class="pro100" style="position: absolute;"><img style="width: 100%" src="../assets/Webp/Asd/test.png" /></div> -->
          <div
            class="backgroundBT marginBT"
            style="
            background: red;
            position: absolute;
            width: 30%;
            max-width: 350px;
          "
          >
            <v-card
              class=" d-flex justify-center align-center"
              outlined
              tile
              color="transparent"
              style="z-index: 1;padding:2px;"
            >
              <div>
                <div style="display: flex; flex-direction: column">
                  <img src="../assets/Webp/Asd/101.webp" style="width: 100%" />
                </div>
              </div>

              <img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-1.webp"
                class="effect1"
                style="position: absolute"
              /><img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-2.webp"
                class="effect2"
                style="position: absolute"
              />
              <v-btn
                outlined
                style="border-radius: 100px; position: absolute"
                text
                block
                height="100%"
                href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
              ></v-btn>
            </v-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <div class="d-flex justify-center" style="width: 100%;">
        <div
          class="align-center"
          style="width: 100%; display: flex; flex-direction: column;"
        >
          <div class="BTimg"></div>
          <!-- <div class="pro100" style="position: absolute;"><img style="width: 100%" src="../assets/Webp/Asd/test.png" /></div> -->
          <div
            class="backgroundBT marginBT"
            style="
            background: red;
            position: absolute;
            width: 30%;
            max-width: 350px;
          "
          >
            <v-card
              class="d-flex justify-center align-center"
              outlined
              tile
              color="transparent"
              style="z-index: 1"
            >
              <div>
                <div style="display: flex; flex-direction: column">
                  <img src="../assets/Webp/Asd/101.webp" style="width: 100%" />
                </div>
              </div>

              <img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-1.webp"
                class="effect1"
                style="position: absolute"
              /><img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-2.webp"
                class="effect2"
                style="position: absolute"
              />
              <v-btn
                outlined
                style="border-radius: 100px; position: absolute"
                text
                block
                height="100%"
                href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
              ></v-btn>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  name: "Home"
};
</script>
<style lang="scss" scoped>

@media (max-width: 768px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 768px;
    background-position: center;
  }
}
@media (max-width: 540px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: cover;
    width: 100%;
    height: 500px;
    background-position: center;
  }
}
@media (max-width: 415px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 415px;
    background-position: center;
  }
}
@media (max-width: 376px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 375px;
    background-position: center;
  }
}
@media (max-width: 360px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 360px;
    background-position: center;
  }
}
@media (max-width: 320px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 320px;
    background-position: center;
  }
}
@media (max-width: 280px) {
  .BTimg {
    background-image: url("../assets/Webp/Asd/mbbg.webp");
    background-color: transparent;
    background-size: contain;
    width: 100%;
    height: 280px;
    background-position: center;
  }
}
img {
  max-width: 100%;
  height: auto;
}
.pro100{
  margin-top: 5%;
  width: 60%;
}
// @media (max-width: 400px) {
//   .pro100 {
//     margin-top: 5%;
//   }
// }
// @media (max-width: 650px) {
//   .pro100 {
//     margin-top: -3%;
//   }
// }

@media (min-width: 500px) {
  .pro100 {
    width: 50%;
    margin-top: 0%;
  }
}
@media (min-width: 800px) {
  .pro100 {
    width: 50%;
    margin-top: 5%;
  }
}
@media (min-width: 1000px) {
  .pro100 {
    width: 55%;
    margin-top: 4%;
  }
}
@media (min-width: 1900px) {
  .pro100 {
    width: 60%;
    margin-top: 5%;
  }
}
@media (min-width: 2000px) {
  .pro100 {
    width: 30%;
    margin-top: 5%;
  }
}
@media (max-width: 768px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 540px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 415px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 376px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 360px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 320px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (max-width: 280px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (min-width: 700px) {
  .marginBT {
    margin-top: 70%;
  }
}
@media (min-width: 1000px) {
  .marginBT {
    margin-top: 42%;
  }
}
@media (min-width: 2000px) {
  .marginBT {
    margin-top: 43%;
  }
}
@media (min-width: 2350px) {
  .marginBT {
    margin-top: 38%;
  }
}
@media (min-width: 2650px) {
  .marginBT {
    margin-top: 30%;
  }
}
@media (min-width: 3000px) {
  .marginBT {
    margin-top: 20%;
  }
}

.effect1 {
  animation: effect 2s linear infinite;
}
.effect2 {
  animation: effect 0.5s linear infinite;
}
@keyframes effect {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.backgroundBT {
  position: relative;
  border-radius: 100px;
  line-height: 48px;
  background: transparent;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  text-decoration: none;
}
.backgroundBT::before {
  content: "";
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f00, #fb0094, #ff0, #f00);
  background-size: 400%;
  opacity: 1;
  transition: 0.5%;
  // z-index: -1;
  animation: animate 20s linear infinite;
}
.backgroundBT::after {
  content: "";
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff0, #f00, #fb0094, #ff0, #f00);
  background-size: 400%;
  opacity: 1;
  // filter: blur(10px);
  transition: 0.5%;
  // z-index: -1;
  animation: animate 20s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.backgroundBT span {
  position: absolute;
  max-width: 100%;
  display: block;
  top: 1px;
  left: 1px;
  bottom: 1px;
  right: 1px;
  text-align: center;
  background: #0c0c0c;
  background-image: url("../assets/Webp/Asd/101.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  color: rgba(225, 255, 255, 0.2);
  transition: 0.5s;
  // z-index: -1;
  border-radius: 100px;
}
</style>
