<script setup lang="ts">
import data from "@/data.json";
const router = useRoute();

const speaker = data.find((name) => name.name === router.params.id);
</script>

<template>
  <div class="h-full p-5 mt-6 lg:mt-0 lg:p-20">
    <div
      class="h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10 flex gap-2 origin-top"
    >
      <img
        :src="`../assets/images/Speaker/${speaker.image}`"
        :alt="speaker.name"
        class="w-80 h-80 bg-cover mr-2"
      />
      <div>
        <h1 class="font-bold text-4xl mb-4">{{ speaker.name }}</h1>
        <h3 class="labelTitle">{{ speaker.content }}</h3>
      </div>
    </div>
  </div>
</template>
