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

    <!-- about -->
    <section>
      <v-flex class="my-4">
        <h1 class="display-1 text-center my-5">
          ABOUT
        </h1>
        <div class="row wrap justify-center">
          <hr class="title_line" />
        </div>
      </v-flex>
      <v-layout row align-center justify-center content_width margin_auto>
        <v-flex sm8 v-for="(item, i) in about" :key="i.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.birth }}</p>

          <h3 class="font_gray">education</h3>
          <div v-for="(edu, j) in item.education" :key="j.id">
            {{ edu.date }}
            {{ edu.desc }}
          </div>
          <br />
          <h3 class="font_gray">awards</h3>
          <div v-for="(award, j) in item.award" :key="j.id">
            {{ award.date }}
            {{ award.desc }}
          </div>
        </v-flex>

        <!-- skills -->
        <v-flex sm4 my-12 row wrap justify-center>
          <v-flex xs4 v-for="(item, i) in skill" :key="i.id">
            <v-layout
              align-center
              justify-center
              column
              v-for="(skill, j) in item.language"
              :key="j.id"
            >
              <div class="my-2">{{ skill.name }}</div>
              <v-progress-circular
                :value="skill.value"
                :color="item.skill_color"
                :size="50"
                :rotate="-90"
                :width="10"
              >
                {{ skill.value }}
              </v-progress-circular>
            </v-layout>
          </v-flex>
        </v-flex>
      </v-layout>
    </section>

    <!-- projects -->
    <section class="background_color">
      <div id="repository">
        <div id="project_title">
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
      </div>
    </section>

    <!-- contact -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm3>
            <v-card flat class="transparent">
              <div>
                <h1 class="display-1 text-center my-5">
                  CONTECT
                </h1>
                <div class="row wrap justify-center">
                  <hr class="title_line" />
                </div>
              </div>
              <br />
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
      about: [
        {
          name: "양동권",
          birth: "93.02.08",
          education: [
            { date: "2012.03 ~ 2018.02", desc: "전남대학교 소프트웨어공학" },
            { date: "2017.06 ~ 2017.09", desc: "빅데이터 청년인재 - 빅데이터 엔지니어 양성" },
            { date: "2018.12 ~ 2019.12", desc: "삼성 청년 SW 아카데미" }
          ],
          award: [
            { date: "2019.05.17", desc: "SSAFY 1학기 성적우수상 광주3반 2등" },
            { date: "2019.08.16", desc: "SSAFY 웹/모바일 프로젝트 광주 2등" },
            { date: "2019.10.11", desc: "SSAFY 인공지능 특화 프로젝트 광주 1등"}
          ]
        }
      ],
      skill: [
        {
          language: [
            { name: "java", value: 75 },
            { name: "python", value: 50 },
            { name: "mysql", value: 60 }
          ],
          skill_color: "#09A5FE"
        },
        {
          language: [
            { name: "HTML", value: 70 },
            { name: "JQuery", value: 40 },
            { name: "Vue", value: 60 }
          ],
          skill_color: "#FACC2E"
        },
        {
          language: [
            { name: "SpringBoot", value: 40 },
            { name: "flask", value: 40 }
          ],
          skill_color: "#05D1B9"
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
#project_title {
  margin-top: 100px !important;
  margin-bottom: -200px !important;
}
#repository {
  width: 70%;
  margin: auto;
}
.background_color {
  background-color: #F2F2F2;
}
.content_width {
  width: 70%;
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
  border: 0.5px solid gray;
}
.margin_auto {
  margin: auto !important;
}
</style>
