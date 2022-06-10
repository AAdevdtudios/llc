<script setup lang="ts">
import speakers from "@/data.json";
</script>

<template>
  <div class="h-full p-5 mt-6 lg:mt-0 lg:p-20">
    <div class="h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10">
      <br />
      <h1 class="text-2xl font-bold">Speakers</h1>
      <div v-for="speaker in speakers" :key="speaker.id" class="mt-4">
        <a :href="`speakers/${speaker.name}`">
          <div
            class="h-full flex flex-nowrap p-3 rounded-md hover:shadow-2xl shadow-slate-300 transition-all ease-in-out duration-200"
          >
            <img
              :src="`../assets/images/Speaker/${speaker.image}`"
              :alt="speaker.name"
              class="w-36 h-36 bg-cover mr-2"
            />
            <p class="text-lg">
              <span class="font-bold">{{ speaker.name }}</span> {{ speaker.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
