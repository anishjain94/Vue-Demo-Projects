<template>
  <div>
    <AppHeader :isLoggedIn="isLoggedIn" @open-login="isLoginOpen = true" />
    <router-view> </router-view>
    <login v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Login from "./components/Login.vue";
import firebase from "./util/firebase.js";

export default {
  name: "App",
  components: {
    AppHeader,
    Login,
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        console.log("User logged in");
        console.log(user);
        // User is signed in.
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
        console.log("No user Logged IN");
        // No user is signed in.
      }
    });
  },
};
</script>

<style>
</style>
