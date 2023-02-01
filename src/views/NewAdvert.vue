<template>
  <div id="new-advert"></div>
  <section class="pet-bg ad-details-page">
    <div class="container">
      <div class="pet-postdetails">
        <div class="row">
          <div class="col-md-12">
            <form action="#">
              <fieldset>
                <div class="section postdetails">
                  <h4>
                    Публикувай<span class="pull-right">* Задължителни полета</span>
                  </h4>
                  <div class="row form-group add-title">
                    <label class="col-sm-3 label-title">Категория<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <div class="dropdown category-dropdown">
                        <a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Избери Категория</span>
                          <i class="fa fa-angle-down pull-right"></i>
                        </a>
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
                        <a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Любимец категория</span>
                          <i class="fa fa-angle-down pull-right"></i>
                        </a>
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
                        <a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Любимец категория</span>
                          <i class="fa fa-angle-down pull-right"></i>
                        </a>
                        <ul class="dropdown-menu category-change">
                          <li><a href="#">Дръпни</a></li>
                          <li><a href="#">От</a></li>
                          <li><a href="#">Бекенда</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Пол<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <div class="dropdown category-dropdown">
                        <a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Пол</span>
                          <i class="fa fa-angle-down pull-right"></i>
                        </a>
                        <ul class="dropdown-menu category-change">
                          <li><a href="#">Мъжки</a></li>
                          <li><a href="#">Женски</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Град<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <div class="dropdown category-dropdown">
                        <a data-toggle="dropdown" href="#" aria-expanded="false"><span class="change-text">Град</span>
                          <i class="fa fa-angle-down pull-right"></i>
                        </a>
                        <ul class="dropdown-menu category-change">
                          <li><a href="#">София</a></li>
                          <li><a href="#">Бургас</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Чип<span class="required">*</span></label>
                     
                    
                    <div class="col-sm-9">
                      <div class="custom-check checkbox section agreement">
                        <label for="chip">
                          <input id="chip" type="checkbox" name="chip" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Паспорт<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <div class="custom-check checkbox section agreement">
                        <label for="passport">
                          <input
                            id="passport"
                            type="checkbox"
                            name="passport"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Родословие<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <div class="custom-check checkbox section agreement">
                        <label for="pedigree">
                          <input
                            id="pedigree"
                            type="checkbox"
                            name="pedigree"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      row
                      form-group
                      photos-resume
                      pet-postdetails
                      post-resume
                    "
                  >
                    <label class="col-sm-3 label-title">Снимки</label>
                    <div class="col-sm-8">
                      <label class="upload-image" for="filename">
                        <input id="filename" type="file" name="filename" />
                        Upload Photos
                      </label>
                    </div>
                  </div>
                  <div class="row form-group brand-name">
                    <label class="col-sm-3 label-title">Телефон за контакт<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Телефон"
                      />
                    </div>
                  </div>
                  <div class="row form-group brand-name">
                    <label class="col-sm-3 label-title">Цена</label>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Цена"
                      />
                    </div>
                  </div>
                  <div class="row form-group item-description">
                    <label class="col-sm-3 label-title">Описание<span class="required">*</span></label>
                    <div class="col-sm-9">
                      <textarea
                        id="textarea"
                        class="form-control"
                        placeholder="Допълнителна информация за обявата"
                        rows="8"
                      ></textarea>
                    </div>
                  </div>
                  <div class="buttons">
                    <router-link class="btn" to="/">Save </router-link>
                    <router-link class="btn" to="/">Back </router-link>
                  </div>
                </div>
                <!-- postdetails -->
              </fieldset>
            </form>
            <!-- form -->
          </div>
        </div>
        <!-- photos-ad -->
      </div>
    </div>
    <!-- container -->
  </section>
  <!-- main -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
<style lang="scss" scoped>
.custom-check {
  padding: 0;
  float: left;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
