<template>
  <section class="pet-bg user-page">
    <div class="container">
      <div class="row text-center">
        <!-- user-login -->
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="user-account pet-user-account">
            <h2>Регистрация</h2>
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
                  <div class="form-group">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="confirmPassword"
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      @blur="validatePassword"
                    />
                    <p v-if="invalidConfirmMessage" class="warning">
                      {{ invalidConfirmMessage }}
                    </p>
                  </div>
                  <div class="checkbox">
                    <label class="pull-left checked" for="signing">
                      <input id="signing" type="checkbox" name="signing" /> С регистрирането на акаунт вие се съгласявате с нашите Правила и условия
                    </label>
                  </div>
                  <!-- checkbox -->
                </form>
                <p v-if="invalidDataFieldsMessage" class="warning">
                  {{ invalidDataFieldsMessage }}
                </p>
                <button class="btn" @click="() => onSubmit()">
                  Регистрация
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
import { REGISER_USER } from "@/store/actions.type";
import { useStore } from "vuex";

@Options({
  components: {},
})
export default class Register extends Vue {
  public email = '';
  public password = '';
  public confirmPassword = '';
  public isInvalidEmail = false;
  public invalidEmailMessage ='';
  public invalidConfirmMessage = '';
  public invalidDataFieldsMessage = '';
  public store = useStore();

  public async onSubmit() {
    if (
      this.email === '' ||
      this.password === '' ||
      this.confirmPassword === ''
    ) {
      this.invalidDataFieldsMessage = "Моля, попълнете всички полета.";
    } else if (
      this.invalidEmailMessage === '' &&
      this.invalidConfirmMessage === ''
    ) {
      const registerModel = new UserRegister(this.email, this.password);
      await this.store.dispatch(REGISER_USER, registerModel).then(() => {
        this.$router.push('/');
      });
    }
  }

  public validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      this.invalidEmailMessage = '';
    } else {
      this.invalidEmailMessage = "Моля въведете валиден адрес";
    }
  }

  public validatePassword() {
    if (this.password !== this.confirmPassword) {
      this.invalidConfirmMessage =
        "Паролата и паролата за потвърждение не съвпадат.";
    } else if (this.password === '' || this.confirmPassword === '') {
      this.invalidConfirmMessage =
        "Паролата и паролата за потвърждение не трябва да са празни.";
    } else {
      this.invalidConfirmMessage = '';
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
