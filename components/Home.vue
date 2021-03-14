<template>
  <div style="background:green;">
    <div class="hidden-sm-and-down" style="height: 100px"></div>
    <div class="d-flex justify-center">
      <div class="d-flex justify-center align-end">
        <img
          class="d-flex justify-center"
          style="width: 100%"
          src="../assets/Webp/Asd/bg.webp"
        />
        <div
          class="d-flex justify-center  mb-5 backgroundBT"
          style="background:red;position: absolute;width:30%;max-width:350px;"
        >
          <v-card
            class="pa-0 d-flex justify-center aling-center"
            outlined
            tile
            v-bind="attrs"
            v-on="on"
            color="transparent"
            style="z-index:1;"
          >
            <img src="../assets/Webp/Asd/101.webp" style="width:100%;" />

            <img
              width="100%"
              src="../assets/Webp/Asd/ez-casino-btn-effect-1.webp"
              class="effect1"
              style="position: absolute;"
            /><img
              width="100%"
              src="../assets/Webp/Asd/ez-casino-btn-effect-2.webp"
              class="effect2"
              style="position: absolute;"
            />
            <v-btn
              outlined
              style="border-radius: 100px;position: absolute;"
              text
              block
              height="100%"
              href="https://ufaonline.ibetauto.com/ufaonline/ufabet/register"
            ></v-btn>
          </v-card>
          <!-- 
              
              <v-btn
              style="border-radius: 80px;"
              fab
              color="success"
              class="backgroundBT"
            >
              <div style="max-width:30%;z-index:1;" class="align-center">
                <img
                  src="../assets/Webp/Asd/101.webp"
                  style="max-width:100%;"
                />
              </div>
            </v-btn> -->
        </div>
      </div>
    </div>
    <!-- <v-card class="d-flex justify-center" outlined color="transparent">
        <v-btn
          height="auto"
          max-width="20%"
          color="transparent"
          style="border-radius: 80px"
        >
          <div class="register">
            <div class="backgroundBT">
              <img
                src="../assets/Webp/Asd/101.webp"
                class="d-flex justify-center"
                width="100%"
              />
              <img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-1.webp"
                class="effect1"
              /><img
                width="100%"
                src="../assets/Webp/Asd/ez-casino-btn-effect-2.webp"
                class="effect2"
              />
            </div>
          </div>
        </v-btn>
      </v-card> -->
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
img {
  max-width: 100%;
  height: auto;
}
.bgimg {
  background-image: url("../assets/Webp/Asd/101.webp");
  background-size: cover;
}
.register {
  max-width: 20%;
  border-radius: 80px;
  -moz-border-radius: 80px;
  -webkit-border-radius: 80px;
}
@media (min-width: 380px) {
  .register {
    max-width: 15%;
  }
}
@media (min-width: 765px) {
  .register {
    max-width: 10%;
  }
}
@media (min-width: 1023px) {
  .register {
    max-width: 10%;
  }
}
@media (min-width: 1500px) {
  .register {
    max-width: 10%;
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
  background: linear-gradient(
    45deg,
    #fb0094,
    #00f,
    #0f0,
    #ff0,
    #f00,
    #fb0094,
    #00f,
    #0f0,
    #ff0,
    #f00
  );
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
  background: linear-gradient(
    45deg,
    #fb0094,
    #00f,
    #0f0,
    #ff0,
    #f00,
    #fb0094,
    #00f,
    #0f0,
    #ff0,
    #f00
  );
  background-size: 400%;
  opacity: 1;
  filter: blur(10px);
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
// .BT:hover {
//   background-image: url("../assets/Webp/Asd/101.webp");
// }
</style>
