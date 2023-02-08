<template>
  <section class="pet-bg page pet-list-page">
    <div class="container">
      <div class="category-info">
        <div class="row">
          <div class="col-sm-8 col-md-7">
            <div class="section pet-list-item">
              <div class="text-center">
                <ul class="pagination">
                  <!-- <li>
                    <a href="#"><i class="fa fa-chevron-left"></i></a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li class="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a>...</a></li>
                  <li><a href="#">10</a></li>
                  <li><a href="#">20</a></li>
                  <li><a href="#">30</a></li>
                  <li>
                    <a href="#"><i class="fa fa-chevron-right"></i></a>
                  </li> -->
                  <button
                    class="test"
                    :disabled="isFirstPage"
                    :class="isFirstPage ? 'disabled' : ''"
                    @click="previousPage"
                  >
                    <i class="fa fa-chevron-left"></i>
                  </button>
                  <li v-for="index in pageCount" :key="index">
                    <button class="test" @click="getPage(index)">
                      <li>
                        <a class="active"> {{ index }}</a>
                      </li>
                    </button>
                  </li>
                  <button
                    :disabled="isLastPage"
                    :class="isLastPage ? 'disabled' : ''"
                    @click="nextPage"
                  >
                    <i class="fa fa-chevron-right"></i>
                  </button>
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
import { useStore } from "vuex";
import PaginationFilter from "@/models/PaginationFilter";
import { GET_ALL_PETS } from "../store/actions.type";

@Options({
  components: { Pagination },
  props: {
    msg: String,
    pageCount: Number,
  },
})
export default class Pagination extends Vue {
  private currentPage = 0;
  private isLastPage = false;
  private isFirstPage = false;
  public store = useStore();

  async getPage(pageNumber: number) {
    this.currentPage = pageNumber;

    if (this.currentPage === 1) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }

    if (this.currentPage === this.pageCountNumber) {
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }
    const filter = new PaginationFilter(this.currentPage, 2);

    await this.store.dispatch(GET_ALL_PETS, filter);
  }
  previousPage() {
    this.currentPage = this.currentPage - 1;
    if (this.currentPage <= 1) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }

    if (this.currentPage < this.pageCountNumber) {
      this.isLastPage = false;
    } else {
      this.isLastPage = true;
    }
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    if (this.currentPage === this.pageCountNumber) {
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }

    if (this.currentPage >= 1) {
      this.isFirstPage = false;
    } else {
      this.isFirstPage = true;
    }
  }

  get pageCountNumber() {
    return 7;
  }
}
</script>

<style scoped lang="scss">
.disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.test > li > a:hover,
.test > .active > a,
.test > .active > a:focus,
.test > .active > a:hover {
  background-color: #00a651;
}

.test {
  margin-top: 25px;
  margin-bottom: 10px;
}

.test > li > a {
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 700;
  background-color: #e7e8e9;
  margin: 3px;
  border: 1px solid #e2e3e3;
  border-radius: 5px;
}

.test > li > a {
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 700;
  background-color: #e7e8e9;
  margin: 3px;
  border: 1px solid #e2e3e3;
  border-radius: 5px;
}

.test > li > a:hover,
.test > .active > a,
.test > .active > a:focus,
.test > .active > a:hover {
  color: #fff;
  background-color: #00a651;
  border: 8px solid #008c44;
}
</style>
