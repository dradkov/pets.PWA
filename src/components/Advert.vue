<template>
  <div v-for="(advert, index) in advertCollection" :key="index">
    <div class="pet-ad-item">
      <div class="item-info">
        <div class="item-image-box">
          <div class="item-image">
            <a href="pet-details.html"
              ><img src="images/pet/1.png" alt="Image" class="img-responsive"
            /></a>
          </div>
          <!-- item-image -->
        </div>
        <div class="ad-info">
          <span
            ><a href="pet-details.html" class="title"
              >{{ message(advert.advertType, advert.petType) }} </a
            ><a href="#"></a
          ></span>
          <div class="ad-meta">
            <ul>
              <li>
                <a href="#"
                  ><i class="fa fa-map-marker" aria-hidden="true"></i
                  >{{ formatAddress(advert.address) }}</a
                >
              </li>

              <li>
                <a href="#"
                  ><i class="fa fa-money" aria-hidden="true"></i>Цена:
                  {{ advert.price }}</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-tags" aria-hidden="true"></i>Порода:
                  {{ advert.breed }}</a
                >
              </li>

              <li>
                <a href="#"
                  ><i class="fa fa-tags" aria-hidden="true"></i
                  >{{ formatGender(advert.gender) }}</a
                >
              </li>
            </ul>
          </div>
          <!-- ad-meta -->
        </div>
        <!-- ad-info -->
        <div class="button" @click="() => onDetails(advert.id)">
          <a class="btn btn-primary">Детайли</a>
        </div>
      </div>
      <!-- item-info -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IPet from "@/models/Pet";
import { ADVERT_TYPE_OPTIONS } from "@/models/Enums/AdvertType";
import { PET_TYPE_OPTIONS } from "@/models/Enums/PetType";
import { GENDER_TYPE_OPTIONS } from "@/models/Enums/Gender";
import Address from "@/models/Address";
import { useStore } from "vuex";
import { GET_CURRENT_PET } from "@/store/actions.type";

@Options({
  components: {},
  props: {
    msg: String,
    advertCollection: [] as IPet[],
  },
})
export default class Advert extends Vue {
  msg!: string;
  advertCollection!: IPet[];
   public store = useStore();

  public async onDetails(id: string) {
    this.store.dispatch(GET_CURRENT_PET, id).then(() => {
        this.$router.push('/details');
      });
  }
  private message(advertType: number, petType: number) {
    return `${ADVERT_TYPE_OPTIONS.get(advertType)} ${PET_TYPE_OPTIONS.get(
      petType
    )}`;
  }

  private formatAddress(address: Address) {
    return `${address.city}, ${address.streetAddress}`;
  }

  private formatGender(gender: number) {
    return `Пол: ${GENDER_TYPE_OPTIONS.get(gender)}`;
  }
}
</script>
