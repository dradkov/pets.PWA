<template>
  <header id="header" class="clearfix">
    <!-- navbar -->
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- navbar-header -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/">Pets</router-link>
        </div>
        <!-- /navbar-header -->
        <div class="navbar-left">
          <div id="navbar-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="index.html"></a>
              </li>
              <li><a href="job-list.html"></a></li>
              <li><a href="details.html"></a></li>
              <li><a href="resume.html"></a></li>
              <li class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >	
                </a>
                
                <ul class="dropdown-menu">
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="post-resume.html">Post Resume</a></li>
                  <li><a href="post.html">Job Post</a></li>
                  <li><a href="edit-resume.html">Edit Resume</a></li>
                  <li><a href="profile-details.html">profile Details</a></li>
                  <li><a href="bookmark.html">Bookmark</a></li>
                  <li><a href="applied-job.html">Applied Job</a></li>
                  <li><a href="delete-account.html">Close Account</a></li>
                  <li><a href="signup.html">Job Signup</a></li>
                  <li><a href="signin.html">Job Signin</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- navbar-left -->

        <!-- nav-right -->
        <div class="nav-right">
          <ul class="sign-in">
            <li><i class="fa fa-user"></i></li>
            <!-- <li><a href="signin.html">Sign In</a></li> -->
            <router-link to="/register">Регистрация</router-link>
          </ul>
          <!-- sign-in -->
          <router-link to="/new-advert" class="btn">Публикувай</router-link>
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
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class TopBarHeader extends Vue {}
</script>
