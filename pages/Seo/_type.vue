<template>
  <div
    class="d-flex justify-center flex-wrap"
    style="color: white; width: 100%"
  >
    <div style="width: 100%; max-width: 2000px">
      <h1 class="text-center" style="margin: 20px 0px; font-size: 50px">
        {{ type }}
      </h1>
      <article class="d-flex justify-center flex-wrap">
        <div
          class="text-center"
          style="
            width: 100%;
            max-width: 300px;
            height: 300px;
            background: white;
            margin: 1% 1%;
          "
          v-for="i in arr"
          :key="i.id"
        >
          <div style="font-size: 30px">
            <a
              :href="'https://ufa-online.bet/Seopage/' + i.id"
              style="color: white; text-decoration: none"
            >
              <!-- <a
              :href="'http://localhost:3000/Seopage/' + i.id"
              style="color: white; text-decoration:none"
            > -->
              <div
                class="text-truncate"
                style="
                  word-wrap: break-word;
                  text-align: left;
                  max-width: 300px;
                  color: black;
                "
              >
                <div style="width: 300px; height: 300px">
                  <div style="position: relative; top: 45%">
                    <strong
                      class="text-center text-truncate"
                      style="
                        position: absolute;
                        width: 100%;
                        max-width: 300px;
                        background: white;
                        padding: 0 5%;
                      "
                    >
                      {{ i.title }}
                    </strong>
                  </div>
                  <div
                    class="d-flex justify-center align-center"
                    style="widthL100%; height:100%;"
                  >
                    <img
                      id="imgseo"
                      :src="'https://image.oneslot.bet/' + i.img"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>

    <!-- <div
              class="text-truncate"
              style="word-wrap: break-word; text-align: left; max-width: 1200px"
            >
              {{ i.description }}
            </div> -->

    <!-- <div>
              <a @click="seoimgfu('http://image.oneslot.bet/' + i.img)">
                <img
                  style="max-width: 300px"
                  :src="'http://image.oneslot.bet/' + i.img"
              /></a>
            </div> -->

    <!-- <div>
              <div class="d-flex">
                <div style="word-wrap: break-word; text-align: left">
                  ผู้เขียน : {{ i.author }}
                </div>

                <v-spacer></v-spacer>
                <div>
                <v-btn
                    icon
                    @click="seoselecteone(i.id), (updatedialog = true)"
                  >
                    <v-icon> mdi-file-document-edit-outline </v-icon>
                  </v-btn>
                <v-btn class="mr-5" icon @click="seodelete(i.id)">
                    <v-icon> mdi-close-circle </v-icon>
                  </v-btn>
                </div>
              </div>
            </div> -->

    <!-- insert -->
    <!-- <div style="border-radius: 50px 50px" dark>
      <h3>เพิ่มบทความ</h3>
      <div>
        <div class="d-flex">
          <div style="margin-top: 9px; margin-left: 5px">
            <v-text-field
              :rules="rules"
              color="green"
              label="ชื่อผู้เขียน"
              type=""
              v-model="seopost.addauthor"
            ></v-text-field>
          </div>
        </div>
        <v-text-field
          color="green"
          label="หัวข้อบทความ"
          v-model="seopost.addtitle"
        ></v-text-field>

        <v-text-field
          color="green"
          label="ประเภทบทความ"
          v-model="seopost.addtype"
        ></v-text-field>

        <div class="d-flex">
          <v-icon>mdi-camera</v-icon>
          <div>
            <input style="color: black" type="file" @change="onFileSelected" />
          </div>
        </div>

        <div class="d-flex">
          <img style="max-height: 300px" :src="imageURL" />
        </div>

        <v-textarea
          color="green"
          counter
          label="เนื้อหา"
          v-model="seopost.adddescription"
        ></v-textarea>
      </div>
      <div>
        <v-btn color="error" @click="adddiscard()"> ยกเลิก </v-btn>
        <v-btn color="success" @click="addsave()"> บันทึก </v-btn>
      </div>

      <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        ระบบได้ทำการบันทึกข้อมูลของท่านแล้ว
      </v-snackbar>
      <v-snackbar v-model="notSaved" :timeout="2000" absolute bottom left>
        โปรดตรวจสอบข้อมูล
      </v-snackbar>
    </div> -->

    <!-- update -->
    <!-- <v-dialog
      v-model="updatedialog"
      max-width="600px"
      transition="dialog-transition"
    >
      <div
        style="background: black; padding: 20px; border-radius: 50px"
        class="overflow-hidden"
      >
        <div>
          <v-text-field
            :rules="rules"
            label="ชื่อผู้เขียน"
            type=""
            v-model="seoeditpost.author"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            color="white"
            label="หัวข้อบทความ"
            v-model="seoeditpost.title"
          ></v-text-field>

          <div class="d-flex">
            <div><v-icon>mdi-account</v-icon></div>
            <div>
              <input
                style="color: black"
                @change="onFileSelectedupdate"
                type="file"
                name=""
                id=""
              />
            </div>
          </div>
          <div v-if="imageURLupdate == ''">
            <img
              style="max-width: 200px"
              :src="'http://image.oneslot.bet/' + seoeditpost.seoimg"
            />
          </div>
          <div v-if="imageURLupdate != ''">
            <img style="max-height: 200px" :src="imageURLupdate" />
          </div>

          <div>
            <v-textarea
              counter
              label="เนื้อหา"
              :rules="rulestextarea"
              v-model="seoeditpost.description"
              auto-grow
            ></v-textarea>
          </div>
        </div>
        <div class="d-flex justify-end">
          <v-btn color="success" @click="save()"> บันทึก </v-btn>
        </div>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
          ระบบได้ทำการบันทึกข้อมูลของท่านแล้ว
        </v-snackbar>
        <v-snackbar v-model="notSaved" :timeout="2000" absolute bottom left>
          โปรดตรวจสอบข้อมูล
        </v-snackbar>
      </div>
    </v-dialog>
    <v-dialog max-width="500px" v-model="seoloopdialog">
      <img style="width: 500px" :src="seoimgurl" />
    </v-dialog> -->
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
    console.log(this.$route.params.type);
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
  opacity: 0.5;
}
#imgseo:hover {
  height: 100%;
  opacity: 1;
}
</style>
