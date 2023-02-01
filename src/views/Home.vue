<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="container">
      <Filters />
      <ListAdverts />
      <Pagination />
    </div><!-- conainer -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; 
import Filters from "@/components/Filters.vue"; 
import ListAdverts from "@/components/ListAdverts.vue"; 
import Pagination from "@/components/Pagination.vue"; 

@Options({
  components: {
    HelloWorld,
    Filters,
    ListAdverts,
    Pagination
  },
})
export default class Home extends Vue {}
</script>
