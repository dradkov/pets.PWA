<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="container">
      <Filters />
      <ListAdverts />
    </div><!-- conainer -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Filters from "@/components/Filters.vue"; // @ is an alias to /src
import ListAdverts from "@/components/ListAdverts.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Filters,
    ListAdverts
  },
})
export default class Home extends Vue {}
</script>
