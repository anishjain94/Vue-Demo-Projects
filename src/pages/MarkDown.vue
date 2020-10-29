<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>

    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" v-model="text"></textarea>
      </article>
      <article class="w-1/2 bg-gray-300 border" v-html="markdown"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      text: "this is text",
    };
  },
  computed: {
    markdown() {
      return marked(this.text);
    },
  },
};
</script>

<style>
</style>