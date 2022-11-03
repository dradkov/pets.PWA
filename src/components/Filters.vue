<template>
 <div class="banner-pet">
		<div class="banner-overlay"></div>
		<div class="container text-center">
			<div class="banner-form">
				<form action="#">
					<input type="text" class="form-control" placeholder="Search">
					<button type="submit" class="btn btn-primary" value="Search">Търсене</button>
				</form>
			</div><!-- banner-form -->
		</div><!-- container -->
	</div><!-- banner-section -->
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
export default class Filters extends Vue {

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

