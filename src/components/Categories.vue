<template>
  <div class="section category-items job-category-items text-center">
    <ul class="category-list">
      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/1.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[0] }}</span>
          <span class="category-quantity">(1298)</span>
        </a>
      </li>
      <!-- category-item -->

      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/2.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[1] }}</span>
          <span class="category-quantity">(76212)</span>
        </a>
      </li>
      <!-- category-item -->

      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/3.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[2] }}</span>
          <span class="category-quantity">(212)</span>
        </a>
      </li>
      <!-- category-item -->

      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/4.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[3] }}</span>
          <span class="category-quantity">(972)</span>
        </a>
      </li>
      <!-- category-item -->

      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/5.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[4] }}</span>
          <span class="category-quantity">(1298)</span>
        </a>
      </li>
      <!-- category-item -->

      <li class="category-item">
        <a href="job-list.html">
          <div class="category-icon">
            <img src="images/icon/6.png" alt="images" class="img-responsive" />
          </div>
          <span class="category-title">{{ getOptions[5] }}</span>
          <span class="category-quantity">(76212)</span>
        </a>
      </li>
      <!-- category-item -->
    </ul>
  </div>
  <!-- category ad -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { MainOption, FORMATTED_MAIN_OPTIONS } from '@/models/Options/MainPageOptions';
import {
  MainOption,
  FORMATTED_MAIN_OPTIONS,
} from "@/models/Options/MainPageOptions";

@Options({
  components: {},
})
export default class Categories extends Vue {

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

