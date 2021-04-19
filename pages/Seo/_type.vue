<template>
  <div
    class="d-flex justify-center flex-wrap"
    style="color: white; width: 100%"
  >
    <div style="width: 100%; max-width: 2000px">
      <!-- Desktop -->
      <div class="hidden-sm-and-down">
        <div style="height: 100px" class="hidden-sm-and-down"></div>
        <section>
          <h1 class="text-center" style="margin: 20px 0px; font-size: 50px">
            {{ type }}
          </h1>
          <div class="d-flex justify-center flex-wrap">
            <article
              style="width: 100%; max-width: 300px; height: 350px; margin: 1%"
              v-for="i in arr"
              :key="i.id"
            >
              <!-- <a
              :href="'https://ufa-online.bet/Seopage/' + i.id"
              style="color: white; text-decoration: none"
            > -->
              <NuxtLink :to="'/Seopage/' + i.id" style="text-decoration: none">
                <div
                  class="d-flex flex-wrap"
                  style="
                    max-width: 350px;
                    height: 100%;
                    width: 100%;
                    max-height: 350px;
                  "
                >
                  <div
                    class="d-flex justify-center align-center"
                    style="width: 300px; height: 300px; overflow: hidden"
                  >
                    <img
                      id="imgseo"
                      :src="'https://image.warpufa.bet/' + i.img"
                    />
                  </div>
                  <div
                    class="d-flex justify-center align-center"
                    style="
                      width: 100%;
                      height: 50px;
                      max-width: 300px;
                      background: red;
                    "
                  >
                    <strong
                      class="text-center text-truncate"
                      style="
                        width: 100%;
                        max-width: 300px;
                        padding: 0 5%;
                        color: white;
                        font-size: 30px;
                      "
                    >
                      {{ i.title }}
                    </strong>
                    <p hidden>{{i.description}}</p>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>
        </section>
      </div>
    </div>

    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <section style="margin: 1%">
        <h1 class="text-center" style="margin: 20px 0px; font-size: 50px">
          {{ type }}
        </h1>
        <div style="width: 100%" class="d-flex justify-center flex-wrap">
          <article
            style="width: 46%; margin: 1%; max-height: 300px"
            v-for="i in arr"
            :key="i.id"
          >
            <!-- <a
              :href="'https://ufa-online.bet/Seopage/' + i.id"
              style="color: white; text-decoration: none"
            > -->
            <NuxtLink :to="'/Seopage/' + i.id" style="text-decoration: none">
              <div
                class="d-flex justify-center align-center flex-wrap"
                style="width: 100%; height: 100%"
              >
                <div
                  class="d-flex justify-center align-center"
                  style="
                    max-width: 300px;
                    height: 100%;
                    max-height: 250px;
                    overflow: hidden;
                  "
                >
                  <img
                    style="height: 100%"
                    :src="'https://image.warpufa.bet/' + i.img"
                  />
                </div>
                <div
                  class="d-flex justify-center align-center"
                  style="
                    width: 100%;
                    height: 50px;
                    max-width: 300px;
                    background: red;
                  "
                >
                  <strong
                    class="text-center text-truncate"
                    style="
                      width: 100%;
                      max-width: 300px;
                      padding: 0 5%;
                      color: white;
                      font-size: 30px;
                    "
                  >
                    {{ i.title }}
                  </strong>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </section>
      <div style="height: 100px" class="hidden-md-and-up"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      type: "",

      seoeditpost: {
        id: "",
        title: "",
        author: "",
        description: "",
        seoimg: "",
        type: "",
      },

      seopost: {
        addtitle: "",
        addauthor: "",
        adddescription: "",
        addseoimg: "",
        addtype: "",
      },

      seoloopdialog: false,
      seoimgurl: "",
      imageURL: "",
      imageURLupdate: "",
      updatedialog: false,

      // rulestextarea: [(v) => v.length <= 255 || "สูงสุดที่ 255 ตัวอักษร"],
      rules: [
        (value) => !!value || "*จำเป็น*",
        (value) => (value && value.length >= 3) || "ขั้นต่ำ 3 ตัวอักษร",
      ],
      hasSaved: false,
      notSaved: false,
      arr: "",
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    this.seotype(this.type);
    // console.log(this.$route.params.type);
    // this.seoselecte();
  },
  methods: {
    async seotype(type) {
      await this.$axios
        .$get(`/articletype/${type}`)
        .then((res) => {
          // console.log("data", res);
          this.arr = res;
          this.seoeditpost.seoimg = "404.jpg";
          // console.log("arr", this.arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    seopage(i) {
      // window.open(`http://localhost:3000/Seopage/${i.id}`);
      window.open(`http://ufa-online.bet/Seopage/${i.id}`);
      // this.$router.push({ path: "Seopage", query: { page: i } });
    },
    adddiscard() {
      this.seopost.addtitle = "";
      this.seopost.adddescription = "";
      this.seopost.addauthor = "";
      this.seopost.addseoimg = "";
      this.seopost.addtype = "";
      this.imageURL = "";
    },
    seoimgfu(imgurl) {
      this.seoloopdialog = true;
      this.seoimgurl = imgurl;
    },
    onFileSelectedupdate(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // for preview
        this.imageURLupdate = event.target.result;
        // this.seoeditpost.seoimg = "";
      };
      reader.readAsDataURL(event.target.files[0]);

      // for upload
      this.img = event.target.files[0];
    },
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // for preview
        this.imageURL = event.target.result;
        // this.seopost.addseoimg = "";
      };
      reader.readAsDataURL(event.target.files[0]);
      // for upload
      this.seopost.addseoimg = event.target.files[0];
      // console.log(this.seopost.addseoimg);
    },
    async seoselecte() {
      await this.$axios
        .$get(`/article`)
        .then((res) => {
          // console.log("data", res);
          this.arr = res;
          this.seoeditpost.seoimg = "404.jpg";
          // console.log("arr", this.arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async seoinsert() {
      let formData = new FormData();
      formData.append("title", this.seopost.addtitle);
      formData.append("description", this.seopost.adddescription);
      formData.append("author", this.seopost.addauthor);
      formData.append("image", this.seopost.addseoimg);
      formData.append("type", this.seopost.addtype);

      await this.$axios
        .$post(`/article`, formData)
        .then(() => {
          // console.log(res.data);
          this.seopost.addtitle = "";
          this.seopost.adddescription = "";
          this.seopost.addauthor = "";
          this.seopost.addseoimg = "";
          this.seopost.addtype = "";
          this.imageURL = "";
          this.seotype(this.type);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async seoupdate() {
      let formData = new FormData();
      formData.append("id", this.seoeditpost.id);
      formData.append("title", this.seoeditpost.title);
      formData.append("description", this.seoeditpost.description);
      formData.append("author", this.seoeditpost.author);
      formData.append("image", this.seoeditpost.seoimg);
      formData.append("type", this.seoeditpost.type);

      await this.$axios
        .$patch(`/article`, formData)
        .then(() => {
          // console.log(res.data);
          this.seotype(this.type);
          this.seoeditpost.id = "";
          this.seoeditpost.title = "";
          this.seoeditpost.description = "";
          this.seoeditpost.author = "";
          this.seoeditpost.seoimg = "";
          this.seoeditpost.type = "";
          this.updatedialog = false;
          this.imageURLupdate = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async seodelete(id) {
      await this.$axios
        .$delete(`/article/${id}`)
        .then(() => {
          // console.log(res.data);
          this.seotype(this.type);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async seoselecteone(id) {
      await this.$axios
        .$get(`/articleone/${id}`)
        .then((res) => {
          // console.log(res);
          this.seoeditpost.id = res.id;
          this.seoeditpost.title = res.title;
          this.seoeditpost.description = res.description;
          this.seoeditpost.author = res.author;
          this.seoeditpost.seoimg = res.img;
          this.seoeditpost.type = res.type;
          this.imageURLupdate = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    save() {
      if (this.seoeditpost.title.length >= 3) {
        if (this.seoeditpost.description.length != "") {
          this.hasSaved = true;
          this.seoupdate();
        } else {
          this.notSaved = true;
        }
      } else {
        this.notSaved = true;
      }
    },
    addsave() {
      if (this.seopost.addtitle.length >= 3) {
        this.hasSaved = true;
        this.seoinsert();
      } else {
        this.notSaved = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#imgseo {
  height: 100%;
}
</style>
