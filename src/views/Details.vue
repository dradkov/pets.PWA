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
                    {{ header() }}
                  </h4>

                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Порода</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        v-model="currentAd.breed"
                      />
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Пол</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        v-model="breed"
                      />
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Град</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        v-model="currentAd.address.city"
                      />
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Възраст</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" readonly />
                    </div>
                  </div>

                  <div class="row form-group">
                    <label class="col-sm-3 label-title">Особености</label>
                    <div class="col-sm-3">
                      <label class="col-sm-3 label-title">Чип</label>

                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="currentAd.chip"
                        onclick="return false;"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label class="col-sm-3 label-title">Паспорт</label>

                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="currentAd.chip"
                        onclick="return false;"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label class="col-sm-3 label-title">Родословие</label>

                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="currentAd.chip"
                        onclick="return false;"
                      />
                    </div>
                  </div>
                  <div class="row form-group">
                    <label class="col-sm-3 label-title"></label>
                    <div class="col-sm-3">
                      <label class="col-sm-3 label-title">Брой ваксини</label>
                      <p>{{currentAd.numberOfVaccinations}}</p>
                    </div>
                    <div class="col-sm-3">
                      <label class="col-sm-3 label-title">Цвят</label>
                       <p>{{currentAd.color}}</p>
                    </div>
                  </div>
                  <div class="row form-group post-resume">
                    <label class="col-sm-3 label-title">Снимки</label>

                    <div class="profile-ad-container">
                      <div class="col-md-4">
                        <div class="profile-image">
                          <a href="pet-details.html"
                            ><img
                              src="images/TestPic.png"
                              alt="Image"
                              class="img-responsive"
                          /></a>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="profile-image">
                          <a href="pet-details.html"
                            ><img
                              src="images/TestPic.png"
                              alt="Image"
                              class="img-responsive"
                          /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row form-group brand-name">
                    <label class="col-sm-3 label-title"
                      >Телефон за контакт</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="currentAd.phoneNumber"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="row form-group brand-name">
                    <label class="col-sm-3 label-title">Цена</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="currentAd.price"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="row form-group item-description">
                    <label class="col-sm-3 label-title"
                      >Описание<span class="required">*</span></label
                    >
                    <div class="col-sm-9">
                      <textarea
                        id="textarea"
                        class="form-control"
                        rows="8"
                         v-model="currentAd.description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="buttons">
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
import { ADVERT_TYPE_OPTIONS } from "@/models/Enums/AdvertType";
import { GENDER_TYPE_OPTIONS } from "@/models/Enums/Gender";
import { PET_TYPE_OPTIONS } from "@/models/Enums/PetType";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";

@Options({})
export default class Details extends Vue {
  public store = useStore();

  get currentAd() {
    return this.store.getters.currentPetAd;
  }
  get breed() {
    return GENDER_TYPE_OPTIONS.get(this.currentAd.gender);
  }
  private header() {
    return `${ADVERT_TYPE_OPTIONS.get(
      this.currentAd.advertType
    )} ${PET_TYPE_OPTIONS.get(this.currentAd.petType)}`;
  }
}
</script>
