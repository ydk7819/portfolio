<template>
  <div>
    <!-- title bar -->
    <v-app-bar flat hide-on-scroll>
      <v-toolbar-title>
        dongkwon portfolio
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn text href="https://ydk7819.github.io">blog</v-btn>
      </v-toolbar-item>
    </v-app-bar>

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

    <br />
    <section>
      <v-parallax src="../assets/project1.png" height="600">
        <v-layout column align-center justify-center>
          <h1 class="mb-4 display-1 text-center">싸피일보</h1>
          <div class="subheading mb-2 ">
            기사 댓글 감정 분석 웹페이지
          </div>
          <div class="text-center">
            기간 : 19.08.19 ~ 19.10.11
            <br />
            크롤링한 기사와 댓글을 분석하여 긍/부정을 알려줍니다.
            <br />
            댓글을 형태소로 나누어 logistic regression으로 분석합니다.
            <br />
            프론트엔드와 학습모델구현을 맡았습니다.
          </div>
          <div class="my-4">
            <v-img
              class="skill_logo"
              src="../assets/python.png"
              max-width="50"
            ></v-img>
            <v-img
              class="skill_logo"
              src="../assets/mysql.png"
              max-width="50"
            ></v-img>
            <v-img
              class="skill_logo"
              src="../assets/vue.png"
              max-width="50"
            ></v-img>
            <v-img class="skill_logo" src="../assets/flask.png" max-width="50">
            </v-img>
          </div>
          <div>
            <v-btn small color="primary" href="http://13.125.116.42/">
              사이트로 이동
            </v-btn>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-parallax src="../assets/project2.png" height="600">
        <v-layout column align-center justify-center>
          <h1 class="mb-4 display-1 text-center">keep going</h1>
          <div class="subheading mb-2 ">
            팀 포트폴리오 웹/앱
          </div>
          <div class="text-center">
            기간 : 19.07.01 ~ 19.08.16
            <br />
            팀 소개, 게시글 등록 및 관리가 가능한 반응형 웹입니다.
            <br />
            로그인, gitlab, 날씨 등의 API를 활용하였습니다.
            <br />
            전반적인 프론트엔드와 관리기능을 구현하였습니다.
          </div>
          <div class="my-4">
            <v-img
              class="skill_logo"
              src="../assets/python.png"
              max-width="50"
            ></v-img>
            <v-img
              class="skill_logo"
              src="../assets/mysql.png"
              max-width="50"
            ></v-img>
            <v-img
              class="skill_logo"
              src="../assets/vue.png"
              max-width="50"
            ></v-img>
            <v-img class="skill_logo" src="../assets/flask.png" max-width="50">
            </v-img>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4 offset-sm1>
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
      ]
    };
  }
};
</script>
<style>
.skill_logo {
  display: inline-block !important;
  margin-left: 10px;
}
</style>
