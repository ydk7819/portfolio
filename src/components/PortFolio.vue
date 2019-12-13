<template>
  <div>
    <section>
      <v-parallax src="../assets/main.jpg" height="600">
        <v-layout column align-center justify-center>
          <h1 class="mb-4 display-1 text-center">Hi!</h1>
          <div class="subheading mb-2 text-center">
            항상 새로움을 찾는 개발자지망생 양동권입니다.
          </div>
          <div class="text-center">
            해보지 못한 기술들을 새롭게 배우며 다양한 결과물을 만들어보고
            있습니다.
            <br />
            정체되지 않고 꾸준히 발전하는 개발자가 되기위해 공부하는 중입니다.
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- skills -->
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Skills</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-card flat class="transparent">
                  <v-card-text>
                    <v-layout
                      v-for="(item, i) in language"
                      :key="i"
                      row
                      wrap
                      align-center
                    >
                      <v-flex xs12 md4 align-center>
                        <div class="layout justify-center">
                          {{ item.name }}
                        </div>
                      </v-flex>
                      <v-flex xs12 md8>
                        <v-progress-linear
                          rounded
                          height="8"
                          :value="item.value"
                          color="yellow darken-2"
                        ></v-progress-linear>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card flat class="transparent">
                  <v-card-text>
                    <v-layout
                      v-for="(item, i) in web"
                      :key="i"
                      row
                      wrap
                      align-center
                    >
                      <v-flex xs12 md4 align-center>
                        <div class="layout justify-center">
                          {{ item.name }}
                        </div>
                      </v-flex>
                      <v-flex xs12 md8>
                        <v-progress-linear
                          rounded
                          height="8"
                          :value="item.value"
                          color="cyan"
                        ></v-progress-linear>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card flat class="transparent">
                  <v-card-text>
                    <v-layout
                      v-for="(item, i) in frame"
                      :key="i"
                      row
                      wrap
                      align-center
                    >
                      <v-flex xs12 md4 align-center>
                        <div class="layout justify-center">
                          {{ item.name }}
                        </div>
                      </v-flex>
                      <v-flex xs12 md8>
                        <v-progress-linear
                          rounded
                          height="8"
                          :value="item.value"
                          color="deep-purple accent-4"
                        ></v-progress-linear>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- projects -->
    <section id="repository">
      <div id="project">
        <h1 class="display-1 text-center my-5">
          PROJECTS
        </h1>
        <div class="row wrap justify-center">
          <hr class="title_line" />
        </div>
      </div>

      <v-layout
        v-for="(item, i) in project"
        :key="i.id"
        row
        wrap
        project_margin
      >
        <v-flex xs12 sm6 my-2>
          <v-layout column justify-center fill-height>
            <div>
              <h1 class="display-2 font-weight-bold font_title">
                {{ item.title }}
              </h1>
              <div class="title mb-2 font_gray font-weight-thin">
                {{ item.subtitle }}
              </div>
              <hr class="project_line mb-2" :style="item.styleObject" />
              {{ item.date }}
              <br />
              {{ item.role }}
              <div v-html="item.descript"></div>

              <!-- project_skill -->
              <div class="my-4">
                <v-img
                  v-for="(skill, j) in item.skills"
                  :key="j.id"
                  :src="skill.src"
                  class="skill_logo"
                  max-width="50"
                ></v-img>
              </div>
              <v-btn text small :href="item.pdf" :style="item.buttonStyle">
                pdf
              </v-btn>
              <v-btn
                text
                small
                v-if="item.link != null"
                :href="item.link"
                class="project_page_button mx-2"
              >
                page
              </v-btn>
            </div>
          </v-layout>
        </v-flex>

        <!-- project_image -->
        <v-flex xs12 sm6 my-2>
          <v-layout
            align-center
            justify-end
            fill-height
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            <v-img :src="item.image"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>

    <!-- contact -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm3>
            <v-card flat class="transparent">
              <v-card-title primary-title class="justify-center">
                <h1 class="display-1 headline">Contact me</h1>
              </v-card-title>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">
                      mdi-github-circle
                    </v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      ><a href="https://www.github.com/ydk7819"
                        >www.github.com/ydk7819</a
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">
                      mdi-map-marker
                    </v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Gwangju, KR</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">
                      mdi-email
                    </v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>ydk9557819@naver.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: [
        {
          name: "java",
          value: 75
        },
        {
          name: "python",
          value: 50
        },
        {
          name: "kotlin",
          value: 25
        },
        {
          name: "mysql",
          value: 60
        }
      ],
      web: [
        {
          name: "HTML",
          value: 70
        },
        {
          name: "JS",
          value: 50
        },
        {
          name: "JQuery",
          value: 40
        },
        {
          name: "Vue",
          value: 50
        }
      ],
      frame: [
        {
          name: "Spring",
          value: 50
        },
        {
          name: "flask",
          value: 40
        }
      ],
      project: [
        {
          title: "사피일보",
          subtitle: "기사 댓글 감정 분석 웹페이지",
          date: "19.08.19 ~ 19.10.11",
          role: "front-end / 학습모델구현",
          descript:
            "크롤링한 기사와 댓글을 분석하여 긍/부정을 알려줍니다. <br /> 댓글을 형태소로 나누어 logistic regression으로 분석합니다.",
          skills: [
            { name: "python", src: require("../assets/python.png") },
            { name: "mysql", src: require("../assets/mysql.png") },
            { name: "vue", src: require("../assets/vue.png") },
            { name: "tensorflow", src: require("../assets/tensorflow.png") },
            { name: "flask", src: require("../assets/flask.png") }
          ],
          image: require("../assets/ssafyilbo.png"),
          pdf:
            "https://drive.google.com/file/d/1LcYJDvQiPs1ERVHdRKDoe3nmhBOPVD-D/view?usp=sharing",
          link: "http://13.125.116.42/",
          styleObject: {
            width: "100px",
            border: "1px solid #09A5FE"
          },
          buttonStyle: {
            background: "#09A5FE"
          }
        },
        {
          title: "10TRILLION",
          subtitle: "팀 포트폴리오 웹/앱",
          date: "19.07.01 ~ 19.08.16",
          role: "front-end / 관리자 / DB설계",
          descript:
            "팀 소개, 게시글 등록 및 관리가 가능한 반응형 웹입니다. <br /> 로그인, gitlab, 날씨 등의 API를 활용하였습니다.",
          skills: [
            { name: "python", src: require("../assets/python.png") },
            { name: "mysql", src: require("../assets/mysql.png") },
            { name: "vue", src: require("../assets/vue.png") },
            { name: "flask", src: require("../assets/flask.png") }
          ],
          image: require("../assets/webmoblie.png"),
          pdf:
            "https://drive.google.com/file/d/1LcYJDvQiPs1ERVHdRKDoe3nmhBOPVD-D/view?usp=sharing",
          styleObject: {
            width: "100px",
            border: "1px solid #05D1B9"
          },
          buttonStyle: {
            background: "#05D1B9"
          }
        }
      ]
    };
  }
};
</script>
<style>
#project {
  margin-top: 100px !important;
  margin-bottom: -200px !important;
}
#repository {
  width: 70%;
  margin: auto;
}
.skill_logo {
  display: inline-block !important;
  margin-left: 10px;
}
.project_margin {
  margin-top: 300px !important;
  margin-bottom: 300px !important;
}
.font_gray {
  color: #585858;
}
.font_title {
  color: #424242;
}
.project_line {
  width: 100px;
  border: 1px solid;
}
.project_page_button {
  background-color: #c7cacc !important;
}
.title_line {
  width: 70px;
  border: 0.7px solid gray;
}
</style>
