<template>
  <div id="popular-jobs" role="tabpanel" class="tab-pane fade in active">
    <Advert :advertCollection="listAdverts" />
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
import { useStore } from "vuex";
import { key } from "@/store/store";

@Options({
  components: { Advert },
})
export default class ListAdverts extends Vue {
  get listAdverts() {
    const store = useStore(key);

    return store.getters.pets;
  }
}
</script>
