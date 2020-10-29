<template>
  <div>
    <section
      class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-50"
      @click="emitEvent()"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow">
          <h1 class="text-xl">Login</h1>

          <form @submit.prevent="submit()">
            <div>
              <label for="Email">Email</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Email"
                v-model="email"
              />
            </div>

            <div>
              <label for="Password">Password</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Password"
                v-model="password"
              />
            </div>

            <div class="my-4">
              <button
                class="text-center shadow rounded w-full bg-red-700 text-white"
                type="submit"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>Loading</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../util/firebase";

export default {
  data() {
    return {
      email: "jain.apurve94@gmail.com",
      password: "123456",
      isLoading: false,
    };
  },

  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          this.isLoading = false;
          this.email = "";
          this.password = "";
          console.log(res);
          this.emitEvent();
        })
        .catch((error) => {
          this.isLoading = false;
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error logging in", errorCode, errorMessage);
        });
    },

    emitEvent() {
      this.$emit("close-login");
    },
  },
};
</script>

<style>
</style>