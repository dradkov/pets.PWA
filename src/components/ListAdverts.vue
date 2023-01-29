<template>
  <div id="popular-pets" role="tabpanel" class="tab-pane fade in active">
    <Advert :advertCollection="listAdverts" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Advert from "@/components/Advert.vue";
import { useStore } from "vuex";


@Options({
  components: { Advert },
})
export default class ListAdverts extends Vue {
  get listAdverts() {
    const store = useStore();

    return store.getters.pets;
  }
}
</script>
