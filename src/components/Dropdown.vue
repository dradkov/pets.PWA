<template>


<!-- <ul class="dropdown-menu category-change">
<div v-for="(option, index) in options" :key="index">

     <li>{{option}}</li>

</div>

</ul> --><select :options="['Canada', 'United States']" v-model="myValue"/>

 <!-- <v-layout v-for="(item, index) in options" :key="index">
      <v-flex xs8>
        <v-select
         
          background-color="transparent"
      
         :items="item"
        ></v-select>

      </v-flex>
      <v-spacer></v-spacer>
    
    </v-layout> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({
  components: {},
  props: {
    options: [] as any[],
  },
})


export default class Advert extends Vue {
  msg!: string;
  options!: any[];

}
</script>

<style>
.dropdown1 {
  position: relative;
  display: inline-block;
}
.dropdown1-toggle {
  background-color: white;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
}
.dropdown1-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 160px;
  list-style: none;
  background-color: white;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
}
.dropdown1-menu li {
  padding: 8px 12px;
  cursor: pointer;
}
.dropdown1-menu li:hover {
  background-color: #f6f6f6;
}
</style>
