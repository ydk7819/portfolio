<template>
  <div>
    <section>
      <v-parallax src="../assets/main.jpg" height="800">
        <v-layout column justify-center align-center>
          <div v-for="item in intro" :key="item.id">
            <span>HI! I'M</span>
            <div class="display-3 font-weight-black">
              {{ item.name }}
            </div>
            <div class="display-1 mb-10 font-weight-black">
              {{ item.role }}
            </div>
            <div v-html="item.desc"></div>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- about -->
    <section class="section_margin">
      <v-flex class="my-4">
        <h1 class="display-1 text-center my-5">
          ABOUT
        </h1>
        <v-layout row wrap justify-center>
          <hr class="title_line" />
        </v-layout>
      </v-flex>
      <v-layout row wrap align-center justify-center content_width margin_auto>
        <v-flex sm8 xs12 v-for="(item, i) in about" :key="i.id">
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
        <v-layout
          sm4
          xs12
          my-12
          row
          wrap
          justify-center
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
        </v-layout>
      </v-layout>
    </section>

    <!-- projects -->
    <section class="background_color section_margin">
      <div id="repository">
        <div class="my-4">
          <h1 class="display-1 text-center my-5">
            PROJECTS
          </h1>
          <v-layout row wrap justify-center>
            <hr class="title_line" />
          </v-layout>
        </div>

        <v-layout
          v-for="(item, i) in project"
          :key="i.id"
          row
          wrap
          project_padding
        >
          <v-flex xs12 sm6 my-2>
            <v-layout column justify-center fill-height>
              <div>
                <h1 class="display-2 font-weight-bold font_darkgray">
                  {{ item.title }}
                </h1>
                <div class="title mb-2 font_gray font-weight-thin">
                  {{ item.subtitle }}
                </div>
                <hr class="project_line mb-2" :style="item.styleObject" />
                <h4 class="font_darkgray">{{ item.date }}</h4>
                <h4 class="mb-2 font_darkgray">{{ item.role }}</h4>
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

                <v-btn icon :href="item.pdf">
                  <font-awesome-icon
                    icon="file-pdf"
                    size="2x"
                    :style="item.buttonStyle"
                  />
                </v-btn>
                <v-btn icon v-if="item.link != null" :href="item.link" mx-2>
                  <font-awesome-icon
                    icon="external-link-alt"
                    size="2x"
                    :style="item.buttonStyle"
                  />
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
              data-aos-duration="1000"
            >
              <v-img :src="item.image"></v-img>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </section>

    <!-- contact -->
    <section class="section_margin">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm3>
          <v-card flat class="transparent">
            <div>
              <h1 class="display-1 text-center my-5">
                CONTECT
              </h1>
              <v-layout row wrap justify-center>
                <hr class="title_line" />
              </v-layout>
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
                  <v-list-item-title>
                    <a href="https://www.github.com/ydk7819">
                      www.github.com/ydk7819
                    </a>
                  </v-list-item-title>
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: [
        {
          name: "DongKwon Yang",
          role: "FRONTEND ENGINEER",
          desc:
            "항상 새로움을 찾는 프론트엔드 엔지니어 양동권입니다. <br /> 다양한 기술을 새롭게 배우며 새로 결과물을 만들어보고 있습니다. <br /> 정체되지 않고 꾸준히 발전하는 개발자가 되기위해 공부하는 중입니다."
        }
      ],
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
            "일반 소비자들의 반응을 통해 해당 기사가 긍정적인 반응이 많은지 부정적인 반응이 많은지를 알려줍니다. <br /> 댓글을 형태소로 나누어 logistic regression으로 분석합니다.",
          skills: [
            { name: "python", src: require("../assets/python.png") },
            { name: "mysql", src: require("../assets/mysql.png") },
            { name: "vue", src: require("../assets/vue.png") },
            { name: "tensorflow", src: require("../assets/tensorflow.png") },
            { name: "flask", src: require("../assets/flask.png") }
          ],
          image: require("../assets/ssafyilbo.png"),
          pdf:
            "https://drive.google.com/open?id=1ihzGmDeQswtg5czPe1Zh_OA0d6fEzVab",
          link: "http://13.125.116.42/",
          styleObject: {
            width: "100px",
            border: "1px solid #09A5FE"
          },
          buttonStyle: {
            color: "#09A5FE"
          }
        },
        {
          title: "10TRILLION",
          subtitle: "팀 포트폴리오 웹/앱",
          date: "19.07.01 ~ 19.08.16",
          role: "front-end / 관리자기능 / DB설계",
          descript:
            "팀을 소개하는 랜딩페이지 입니다. <br /> 회원 / 게시글 등록 및 관리가 가능한 반응형 웹입니다. <br /> 로그인, gitlab, 날씨 등의 API를 활용하여 다양한 기능을 제공합니다.",
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
            color: "#05D1B9"
          }
        },
        {
          title: "SAFEFOOD",
          subtitle: "사용자 식품 섭취 관리 웹",
          date: "19.03.11 ~ 19.05.16",
          role: "front-end / back-end",
          descript:
            "사용자의 알레르기를 파악하여 건강한 식품 섭취를 도와줍니다. <br /> 식품의 영양정보 검색 및 섭취식품의 영양소 정보를 쉽게 파악할 수 있습니다. <br /> 로그인, gitlab, 날씨 등의 API를 활용하였습니다.",
          skills: [
            { name: "java", src: require("../assets/java.png") },
            { name: "mysql", src: require("../assets/mysql.png") },
            { name: "jQuery", src: require("../assets/jQuery.png") },
            { name: "springboot", src: require("../assets/springboot.png") }
          ],
          image: require("../assets/safefood.png"),
          pdf:
            "https://drive.google.com/open?id=12fF8T0zblFt3hEhLFpMJIvZiWMpcvmnS",
          styleObject: {
            width: "100px",
            border: "1px solid #FACC2E"
          },
          buttonStyle: {
            color: "#FACC2E"
          }
        }
      ]
    };
  }
};
</script>

<style>
* {
  font-family: "Nanum Gothic", sans-serif;
}
#repository {
  width: 70%;
  margin: auto;
}
.project_padding {
  padding-top: 150px;
  padding-bottom: 150px;
}
.section_margin {
  margin-top: 150px;
  margin-bottom: 150px;
}
.background_color {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}
.content_width {
  width: 70%;
}
.skill_logo {
  display: inline-block !important;
  margin-left: 10px;
}
.font_gray {
  color: #585858;
}
.font_darkgray {
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
