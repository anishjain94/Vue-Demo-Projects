<template>
  <div class="w-full bg-blue-800 text-white px-4 py-2 text-center">
    <router-link class="px-4 py-2 text-center" to="/helloworld"
      >Dc Heros</router-link
    >
    <router-link class="px-4 py-2 text-center" to="/calender"
      >Calender</router-link
    >

    <router-link class="px-4 py-2 text-center" to="/"> Home </router-link>

    <router-link class="px-4 py-2 text-center" to="/markdown"
      >MarkDown</router-link
    >

    <button
      class="px-4 py-2 text-center"
      @click="$emit('open-login')"
      v-if="!isLoggedIn"
    >
      Login
    </button>

    <button class="px-4 py-2 text-center" @click="logout" v-else>Logout</button>
  </div>
</template>

<script>
import firebase from "../util/firebase.js";

export default {
  props: ["isLoggedIn"],

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          console.log("Sign-out successful");
        })
        .catch(function (error) {
          console.log("Couldnot Signout", error);
        });
    },
  },
};
</script>

<style>
</style>