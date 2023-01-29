<template>
  <header id="header" class="clearfix">
    <!-- navbar -->
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- navbar-header -->
        <div class="navbar-header">
          <router-link to="/">Pets Logo</router-link>
        </div>
        <!-- nav-right -->
        <div class="nav-right">
          <ul class="sign-in">
            <li><i class="fa fa-user"></i></li>

             <router-link
            v-if="currentLabel === ent" to="/login"
            >{{this.currentLabel }}
            </router-link
          >
           <router-link
            v-else to="/profile"
            >{{ this.currentLabel }}
            </router-link>
          </ul>
          <router-link
            v-if="currentLabel !== this.userLabel"
            to="/new-advert"
            class="btn"
            >{{ this.publishLabel }}</router-link
          >
        </div>
        <!-- nav-right -->
      </div>
      <!-- container -->
    </nav>
    <!-- navbar -->
  </header>
  <!-- header -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
//import { key } from "@/store/store";

@Options({
  components: {
    HelloWorld,
  },
})
export default class TopBarHeader extends Vue {
  private publishLabel = 'Публикувай';
  private userLabel = 'Вход';
  private ent = 'Вход';

   get currentLabel() {
    //const store = useStore(key);

    const store = useStore();
    let user = store.getters.currentUser;
    if (user.userName === undefined) {
      return this.userLabel;
    }
    return user.userName;
  }
}
</script>
