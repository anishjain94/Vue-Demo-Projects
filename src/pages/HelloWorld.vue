<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center">DC heroes {{ herosCount }}</h1>

      <ul>
        <li
          class="flex justify-between"
          v-for="(i, index) in dcHeros"
          v-bind:key="index"
        >
          {{ i }}

          <button @click="remove(index)">X</button>
        </li>
      </ul>

      <input type="text" name="superHero" id="superHero" v-model="newHero" />
      <button class="border-gray-400" value="Submit" @click="addHeros()">
        Submit
      </button>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false,
      newHero: "dammm",
      dcHeros: ["flash", "arrow"],
    };
  },

  methods: {
    addHeros() {
      if (this.newHero !== "") {
        this.dcHeros.push(this.newHero);
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },

  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
};
</script>


<style scoped>
</style>
