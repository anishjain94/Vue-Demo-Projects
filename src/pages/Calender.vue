<template>
  <div class="mx-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calender</h1>
    <h2>{{ currentMonth }}</h2>
    <section class="flex mx-auto text-center">
      <p
        class="my-2 mx-1 text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>

    <section class="flex flex-wrap text-center">
      <p class="" style="width: 14.28%" v-for="i in 30" :key="i">{{ i }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["sun", "mon", "tues", "wed", "thru", "fri", "sat"],
      currentMonth: new Date().toLocaleString("default", { month: "long" }),
    };
  },
};
</script>

<style>
</style>