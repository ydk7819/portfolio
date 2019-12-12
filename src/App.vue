<template>
  <v-app>
    <Header></Header>
    <PortFolio></PortFolio>
  </v-app>
</template>

<script>
import PortFolio from "./components/PortFolio";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    PortFolio,
    Header
  },
  data: () => ({
    //
  })
};
</script>
