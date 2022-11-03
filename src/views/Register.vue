<template>
  <section class="pet-bg user-page">
    <div class="container">
      <div class="row text-center">
        <!-- user-login -->
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="user-account pet-user-account">
            <h2>Create An Account</h2>
            <div class="tab-content">
              <div id="register" role="tabpanel" class="tab-pane active">
                <form action="">
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control" placeholder="Email" @blur="validateEmail" />
                    <p v-if="invalidEmailMessage" class="warning">
                      {{ invalidEmailMessage }}
                    </p>
                  </div>
                  <div class="form-group">
                    <input v-model="password" type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm Password" @blur="validatePassword" />
                    <p v-if="invalidConfirmMessage" class="warning">
                      {{ invalidConfirmMessage }}
                    </p>
                  </div>
                  <div class="checkbox">
                    <label class="pull-left checked" for="signing">
                      <input id="signing" type="checkbox" name="signing" /> By signing up for an account you agree to our Terms and Conditions
                    </label>
                  </div>
                  <!-- checkbox -->
                  <button class="btn" @click="(event) => onSubmit()">
                    Registration
                  </button>
                </form>
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
import Register from '@/models/User/Register';
import { REGISER_USER } from "@/store/actions.type";
import { useStore } from 'vuex'
import { key } from '@/store/store'

@Options({
  components: {},
})
export default class Test extends Vue {
  public email = "";
  public password = "";
  public confirmPassword = "";
  public isInvalidEmail = false;
  public invalidEmailMessage = '';
  public invalidConfirmMessage = '';
  public  store = useStore(key);

  public async onSubmit() {
	  if (this.invalidEmailMessage === '' && this.invalidConfirmMessage === '') {
      const registerModel = new Register(this.email, this.password);
      await this.store.dispatch(REGISER_USER, registerModel).then(()=>{
      this.$router.push('/');
      });
	  }
  }

  public validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
		this.invalidEmailMessage = '';
    } else {
      this.invalidEmailMessage = 'Please enter a valid email address';
    }
  }

  public validatePassword() {
    if ( this.password !== this.confirmPassword) {
		this.invalidConfirmMessage = 'The password and confirmation password do not match.';
    } else {
	  this.invalidConfirmMessage = '';
    }
  }
}
</script>

<style lang="scss" scoped>
	.warning {
		color: red;
		font-size:10;
	}
</style>

