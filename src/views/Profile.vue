<template>
  <div class="profile pet-profile">
    <div class="user-pro-section">
      <!-- profile-details -->
      <div class="profile-details section">
        <h2>Профил</h2>
        <form action="#">
          <div class="form-group">
            <label>Имайл</label>
            <input
              type="email"
              :value="currentUser.email"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label>Телефон</label>
            <input
              type="text"
              class="form-control"
              placeholder="+213 1234 56789"
            />
          </div>
        </form>
      </div>
      <!-- profile-details -->

      <!-- change-password -->
      <div class="change-password section">
        <h2>Смяна на парола</h2>
        <!-- form -->
        <div class="form-group">
          <label>Стара парола</label>
          <input type="password" class="form-control" />
        </div>

        <div class="form-group">
          <label>Нова парола</label>
          <input type="password" class="form-control" />
        </div>

        <div class="form-group">
          <label>Потвърди парола</label>
          <input type="password" class="form-control" />
        </div>

        <div class="buttons">
          <router-link class="btn" to="/">Save </router-link>
          <router-link class="btn" to="/">Back </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import User from "@/models/User/User";

@Options({
  components: {},
})
export default class Profile extends Vue {
  public email = '';
  public password = '';
  public isInvalidEmail = false;
  public invalidEmailMessage = '';
  public invalidDataFieldsMessage = '';
  public store = useStore();

  public user = {} as User;

  get currentUser() {
    const store = useStore();

    let user = store.getters.currentUser;
    if (user === undefined) {
      return this.user;
    }
    return user;
  }
  public async onSubmit() {
    if (this.email === '' || this.password === '') {
      this.invalidDataFieldsMessage = "Please fill in all fields";
    } else if (this.invalidEmailMessage === '') {
      //   const login = new UserLogin(this.email, this.password);
      //   await this.store.dispatch(LOGIN_USER, login).then(() => {
      //     this.$router.push("/");
      //   });
    }
  }

  public validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      this.invalidEmailMessage = "";
    } else {
      this.invalidEmailMessage = 'Please enter a valid email address';
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
