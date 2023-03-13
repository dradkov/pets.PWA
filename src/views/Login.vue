<template>
  <section class="pet-bg user-page">
    <div class="container">
      <div class="row text-center">
        <!-- user-login -->
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="user-account pet-user-account">
            <h2>Влез</h2>
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
                 <div class="footerLinks">
                  <router-link to="/register">Нямам Регистрация</router-link>
                 <router-link to="/forgoten-password">Забравена парола</router-link>

                 </div>
                
                  <!-- checkbox -->
                </form>
                <p v-if="invalidDataFieldsMessage" class="warning">
                  {{ invalidDataFieldsMessage }}
                </p>
                <button class="btn" @click="() => onSubmit()">
                  Влез
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
import UserLogin from "@/models/User/UserLogin";
import { LOGIN_USER, REGISER_USER } from "@/store/actions.type";
import { useStore } from "vuex";

@Options({
  components: {},
})
export default class Login extends Vue {
  public email = '';
  public password = '';
  public isInvalidEmail = false;
  public invalidEmailMessage = '';
  public invalidDataFieldsMessage = '';
  public store = useStore();

  public async onSubmit() {
    if (
      this.email === '' ||
      this.password === '' 
    ) {
      this.invalidDataFieldsMessage = "Please fill in all fields";
    } else if ( this.invalidEmailMessage === '' ) 
    {
      const login = new UserLogin(this.email, this.password);
      await this.store.dispatch(LOGIN_USER, login).then((response) => {
        this.$router.push('/');
      });
    }
  }

  public validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      this.invalidEmailMessage = "";
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

.footerLinks {
    margin: 45px auto 0 auto;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
}

</style>
