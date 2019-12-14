<template>
  <v-app>
    <Header></Header>
    <PortFolio></PortFolio>
  </v-app>
</template>

<script>
import PortFolio from "./components/PortFolio";
import Header from "./components/Header";
import AOS from "aos";

export default {
  name: "App",
  components: {
    PortFolio,
    Header
  },
  data: () => ({
    //
  }),
  created() {
    AOS.init();
  }
};
</script>
