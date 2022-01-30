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
import Adverts from "@/components/Adverts.vue";
import { GET_BUY_COUNT } from "@/store/actions.type";


import { useStore } from 'vuex'
import { key } from './store/store'


@Options({
  components: {
    TopBarHeader,
    Filters,
    Adverts
  },
})
 export default class App extends Vue {

   public async beforeMount(){
const store = useStore(key);

  await store.dispatch(GET_BUY_COUNT);


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
