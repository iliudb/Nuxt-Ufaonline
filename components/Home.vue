<template>
  <div>
    <!-- <div class="hidden-sm-and-down" style="height: 80px"></div>
    <div class="d-flex justify-center bgimg" style="background:green;width:500px;height:500px;">
      <img
        class="d-flex justify-center align-end"
        style="width: 100%"
        src="../assets/Webp/Asd/bg.webp"
      />
      <v-card class="d-flex justify-center" outlined color="transparent">
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
      </v-card>
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  name: "Home",
};
</script>
<style lang="scss" scoped>
.bgimg{
  background-image: url("../assets/Webp/Asd/bg.webp");
  background-size: auto;
  background-color: #cccccc;

}
.register {
  max-width: 20%;
  border-radius: 80px;
  -moz-border-radius: 80px;
  -webkit-border-radius: 80px;
}
@media (min-width: 380px) {
  .register {
    max-width: 25%;
  }
}
@media (min-width: 765px) {
  .register {
    max-width: 60%;
  }
}
@media (min-width: 1023px) {
  .register {
    max-width: 70%;
  }
}
@media (min-width: 1500px) {
  .register {
    max-width: 100%;
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
  border-radius: 80px;
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
  border-radius: 80px;
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
  z-index: -1;
  animation: animate 20s linear infinite;
}
.backgroundBT::after {
  content: "";
  position: absolute;
  border-radius: 80px;
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
  z-index: -1;
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
// .backgroundBT span {
//   position: absolute;
//   max-width: 100%;
//   display: block;
//   top: 1px;
//   left: 1px;
//   bottom: 1px;
//   right: 1px;
//   text-align: center;
//   background: #0c0c0c;
//   background-image: url("../assets/test/101.webp");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: auto;
//   color: rgba(225, 255, 255, 0.2);
//   transition: 0.5s;
//   z-index: -1;
//   border-radius: 80px;
// }
// .BT:hover {
//   background-image: url("../assets/test/102.webp");
// }
</style>
