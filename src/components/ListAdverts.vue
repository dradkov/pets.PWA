<template>
  <div id="popular-jobs" role="tabpanel" class="tab-pane fade in active">
    <Advert />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Advert from "@/components/Advert.vue";
// import { MainOption, FORMATTED_MAIN_OPTIONS } from '@/models/Options/MainPageOptions';
import {
  MainOption,
  FORMATTED_MAIN_OPTIONS,
} from "@/models/Options/MainPageOptions";

@Options({
  components: {Advert},
})
export default class ListAdverts extends Vue {

public async beforeMount(){
  

    console.log("ListAdverts extends Vue");

  // await store.dispatch(GET_BUY_COUNT);


   }

  
  get getOptions() {
    var listOfOptions = [] as any[];
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.SellBuy));
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.MarketPlace));
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.PetGift));
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.FoundLost));
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.SearchPartner));
    listOfOptions.push(FORMATTED_MAIN_OPTIONS.get(MainOption.Veterinary));

    return listOfOptions;
  }
}
</script>

