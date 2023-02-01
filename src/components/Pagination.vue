<template>
 <section class="pet-bg page pet-list-page">
		<div class="container">
			<div class="category-info">	
				<div class="row">
					<div class="col-sm-8 col-md-7">
						<div class="section pet-list-item">
							<div class="text-center">
								<ul class="pagination ">
									<li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
									<li><a href="#">1</a></li>
									<li class="active"><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">4</a></li>
									<li><a href="#">5</a></li>
									<li><a>...</a></li>
									<li><a href="#">10</a></li>
									<li><a href="#">20</a></li>
									<li><a href="#">30</a></li>
									<li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
								</ul>
							</div>				
						</div>
					</div>
				</div>	
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Advert from "@/components/Advert.vue";
import { useStore } from "vuex";


@Options({
  components: { Pagination },
})
export default class Pagination extends Vue {
  get listAdverts() {
    const store = useStore();

    return store.getters.pets;
  }
}
</script>