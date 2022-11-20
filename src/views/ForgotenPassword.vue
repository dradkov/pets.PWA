<template>
  <section class="pet-bg user-page">
    <div class="container">
      <div class="row text-center">
        <!-- user-login -->
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="user-account pet-user-account">
            <h2>Забравена парола</h2>
            <div class="tab-content">
              <div id="register" role="tabpanel" class="tab-pane active">
                <form action="">
                  <div class="form-group">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      @blur="validateEmail"
                    />
                    <p v-if="invalidEmailMessage" class="warning">
                      {{ invalidEmailMessage }}
                    </p>
                  </div>
                 

                </form>
                <p v-if="invalidDataFieldsMessage" class="warning">
                  {{ invalidDataFieldsMessage }}
                </p>
                <button class="btn" @click="() => onSubmit()">
                  Изпрати
                </button>
              </div>
              <div id="post-register" role="tabpanel" class="tab-pane"></div>
            </div>
          </div>
        </div>
        <!-- user-login -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
  <!-- signup-page -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserRegister from "@/models/User/UserRegister";
import { REGISER_USER, SEND_FORGOTEN_PASS } from "@/store/actions.type";
import { useStore } from "vuex";
import { key } from "@/store/store";

@Options({
  components: {},
})
export default class ForgotenPassword extends Vue {
  public email = '';
  
  public isInvalidEmail = false;
  public invalidEmailMessage ='';
 
  public store = useStore(key);

  public async onSubmit() {
    if ( this.email !== '' && this.invalidEmailMessage == '')
     
      await this.store.dispatch(SEND_FORGOTEN_PASS,  this.email).then(() => {
        this.$router.push('/');
    }) 
  }

  public validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      this.invalidEmailMessage = '';
    } else {
      this.invalidEmailMessage = "Please enter a valid email address";
    }
  }
}
</script>

<style lang="scss" scoped>
.warning {
  color: red;
  font-size: 10;
}
</style>
