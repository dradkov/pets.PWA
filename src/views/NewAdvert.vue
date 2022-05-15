<template>
 <div id="new-advert"></div>
 <section class=" job-bg ad-details-page">
		<div class="container">
			<div class="job-postdetails">
				<div class="row">	
					<div class="col-md-12">
						<form action="#">
							<fieldset>
								<div class="section postdetails">
									<h4>Публикувай<span class="pull-right">* Задължителни полета</span></h4>
									<div class="row form-group add-title">
										<label class="col-sm-3 label-title">Категория<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Избери Категория</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Купува</a></li>
													<li><a href="#">Продава</a></li>
													<li><a href="#">Изгубено/Намерено</a></li>
													<li><a href="#">За разплод</a></li>
												</ul>								
											</div>
										</div>
									</div>			
									<div class="row form-group">
										<label class="col-sm-3 label-title">Тип любимец<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Любимец категория</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Куче</a></li>
													<li><a href="#">Котка</a></li>
													<li><a href="#">Папагал</a></li>
													<li><a href="#">Морско свинче</a></li>
												</ul>								
											</div>
										</div>
									</div>

                                    <div class="row form-group">
										<label class="col-sm-3 label-title">Порода любимец<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Любимец категория</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Дръпни</a></li>
													<li><a href="#">От</a></li>
													<li><a href="#">Бекенда</a></li>
												</ul>								
											</div>
										</div>
									</div>

									<div class="row form-group">
										<label class="col-sm-3 label-title">Title for your jonb<span class="required">*</span></label>
										<div class="col-sm-9">
											<input type="text" class="form-control" placeholder="ex, Human Resource Manager">
										</div>
									</div>					
									<div class="row form-group item-description">
										<label class="col-sm-3 label-title">Description<span class="required">*</span></label>
										<div class="col-sm-9">
											<textarea class="form-control" id="textarea" placeholder="Write few lines about your jobs" rows="8"></textarea>		
										</div>
									</div>
									<div class="row characters">
										<div class="col-sm-9 col-sm-offset-3">
											<p>5000 characters left</p>
										</div>
									</div>	
									<div class="row form-group add-title location">
										<label class="col-sm-3 label-title">Location<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown pull-left">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Country</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Argentina</a></li>
													<li><a href="#">Australia</a></li>
													<li><a href="#">Belgium</a></li>
													<li><a href="#">Brazil</a></li>
													<li><a href="#">Cambodia</a></li>
												</ul>								
											</div>
											<div class="dropdown category-dropdown pull-right">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">State</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">State 1</a></li>
													<li><a href="#">State 2</a></li>
													<li><a href="#">State 3</a></li>
												</ul>								
											</div>
										</div>
									</div>
									<div class="row form-group select-price">
										<label class="col-sm-3 label-title">Salary<span class="required">*</span></label>
										<div class="col-sm-9">
											<label>$USD</label>
											<input type="text" class="form-control" placeholder="Min">
											<span>-</span>
											<input type="text" class="form-control" placeholder="Max">
											<input type="radio" name="price" value="negotiable" id="negotiable">
											<label for="negotiable">Negotiable </label>
										</div>
									</div>	
									<div class="row form-group add-title">
										<label class="col-sm-3 label-title">Salary Type<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Per Hour</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Per Hour</a></li>
													<li><a href="#">Daily</a></li>
													<li><a href="#">Monthly</a></li>
													<li><a href="#">Yearly</a></li>
												</ul>								
											</div>
										</div>
									</div>	
									<div class="row form-group add-title">
										<label class="col-sm-3 label-title">Exprience<span class="required">*</span></label>
										<div class="col-sm-9">
											<div class="dropdown category-dropdown">
												<a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Mid Level</span> <i class="fa fa-angle-down pull-right"></i></a>
												<ul class="dropdown-menu category-change">
													<li><a href="#">Entry Level</a></li>
													<li><a href="#">Mid Level</a></li>
													<li><a href="#">Mid-Senior Level</a></li>
													<li><a href="#">Top Level</a></li>
												</ul>								
											</div>
										</div>
									</div>	
									<div class="row form-group brand-name">
										<label class="col-sm-3 label-title">Job Function<span class="required">*</span></label>
										<div class="col-sm-9">
											<input type="text" class="form-control" placeholder="human, reosurce, job, hrm">
										</div>
									</div>											
								</div><!-- postdetails -->
								

								<div class="checkbox section agreement">
									<label for="send">
										<input type="checkbox" name="send" id="send">
										You agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and acknowledge that you are the rightful owner of this item and using Jobs to find a genuine buyer.
									</label>
									<button type="submit" class="btn btn-primary">Post Your Job</button>
								</div><!-- section -->
								
							</fieldset>
						</form><!-- form -->	
					</div>
				

				</div><!-- photos-ad -->				
			</div>	
		</div><!-- container -->
	</section><!-- main -->
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
export default class Adverts extends Vue {
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

