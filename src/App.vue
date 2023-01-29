<template>
  <!-- <div id="nav"> -->
  <TopBarHeader msg="Welcome to You App" />
  <!-- </div> -->
  <router-view />
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBarHeader from "@/components/Headers/TopBarHeader.vue";
import Filters from "@/components/Filters.vue";
import ListAdverts from "@/components/ListAdverts.vue";
import  PaginationFilter  from "@/models/PaginationFilter";
import { useStore } from 'vuex';
import { GET_ALL_PETS } from "./store/actions.type";


@Options({
  components: {
    TopBarHeader,
    Filters,
    ListAdverts
  },
})
 export default class App extends Vue {

   public async beforeMount(){
    const store = useStore();

    const filter = new PaginationFilter(1,10);

   await store.dispatch(GET_ALL_PETS, filter);


   }
 }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
