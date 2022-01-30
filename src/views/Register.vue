<template>
<section class="job-bg user-page">
		<div class="container">
			<div class="row text-center">
				<!-- user-login -->			
				<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<div class="user-account job-user-account">
						<h2>Create An Account</h2>
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane active" id="find-job">
									<form action="#">
										<!-- <div class="form-group">
											<input type="text" class="form-control" placeholder="Name" >
										</div> -->
										<div class="form-group">
											<input type="email" class="form-control" placeholder="Email">
										</div>
										<div class="form-group">
											<input type="password" class="form-control" placeholder="Password">
										</div>
										<div class="form-group">
											<input type="password" class="form-control" placeholder="Confirm Password">
										</div>
										<!-- <div class="form-group">
											<input type="text" class="form-control" placeholder="Mobile Number">
										</div> -->
										<!-- select -->
										<select class="form-control">
											<!-- <option value="#">Select City</option>
											<option value="#">London UK</option>
											<option value="#">Newyork, USA</option>
											<option value="#">Seoul, Korea</option>
											<option value="#">Beijing, China</option> -->
										</select>
                                        
                                        <!-- select -->
		
										<div class="checkbox">
											<label class="pull-left checked" for="signing"><input type="checkbox" name="signing" id="signing"> By signing up for an account you agree to our Terms and Conditions </label>
										</div><!-- checkbox -->	
										<button type="submit" class="btn">Registration</button>	
									</form>
								</div>
								<div role="tabpanel" class="tab-pane" id="post-job">
									
								</div>
							</div>				
					</div>
				</div><!-- user-login -->			
			</div><!-- row -->	
		</div><!-- container -->
	</section><!-- signup-page -->
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
export default class Test extends Vue {

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

