<template>
  <div
    class="min-w-full flex justify-between text-white items-center bg-black px-5 lg:px-32 py-3 fixed top-0 left-0 z-50 scroll"
  >
    <a href="/">
      <div class="flex gap-2 items-center">
        <div class="h-10 w-10 rounded-full flex justify-center items-center bg-blue-700">
          logo
        </div>
        <span>LL Conference</span>
      </div>
    </a>
    <div class="hidden md:flex uppercase gap-5 text-sm font-Montserrat">
      <a
        :href="`/#${tag}`"
        v-for="(tag, index) in tags"
        :key="tag"
        :index="index"
        class="transition-all duration-200 ease-in-out border-opacity-2"
        :class="
          tag == currentSection ? ' border-white border-opacity-100 pb-1 border-b-2' : ''
        "
        >{{ tag }}</a
      >
    </div>
    <div class="sm:inline md:hidden">
      <i class="fa fa-bars" aria-hidden="true" @click="navs = true"></i>
    </div>
    <transition>
      <div v-show="navs">
        <div
          :class="navs == true ? ' opacity-30 ' : ''"
          class="md:hidden absolute top-0 right-0 w-screen h-screen bg-white z-50 transition duration-200 delay-200 ease-in-out"
          @click="navs = false"
        ></div>
        <div
          class="md:hidden absolute top-0 w-80 h-screen bg-black px-10 z-50 transition duration-200 delay-200 ease-in-out"
          :class="navs == true ? ' right-0' : ' -right-full'"
        >
          <ul
            class="justify-start items-start flex flex-col mt-20 gap-10 text-lg capitalize"
          >
            <li class="flex w-full justify-between">
              <div></div>
              <span @click="navs = false">X</span>
            </li>
            <li v-for="(tag, index) in tags" :key="tag" :index="index">
              <a
                :href="`/#${tag}`"
                class="transition-all duration-200 ease-in-out border-opacity-2"
                :class="
                  tag == currentSection
                    ? ' border-white border-opacity-100 pb-1 border-b-2'
                    : ''
                "
                @click="navs = false"
                >{{ tag }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
useHead({
  title: "Lagos Leadership Conference",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  script: [
    {
      src: "https://kit.fontawesome.com/b685dbf27e.js",
      crossorigin: "anonymous",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href:
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ],
  meta: [
    { "http-equiv": "content-type", content: "text/html; charset=utf-8" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    {
      hid: "description",
      name: "description",
      content:
        "Lagos Leadership · Conference 2022 · Theme · LEADING IN SEASON OF DARKNESS AND CONFUSION · RCCG Resurrection Parish, Lekki · JULY 8TH, 2022",
    },
    {
      name: "keywords",
      content:
        "Lagos Leadership, Conference, Leadership Conference, Lagos Leadership Conference",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Lagos Leadership · Conference 2022 · Theme · LEADING IN SEASON OF DARKNESS AND CONFUSION · RCCG Resurrection Parish, Lekki · JULY 8TH, 2022",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.llconference.com",
    },
    { name: "author", content: "https://www.llconference.com" },
  ],
  bodyAttrs: {
    class: "test",
  },
});
function testSys() {
  console.log("Run shit");
}
let tags = ["about", "speakers", "schedule", "faq", "photos"];

const currentSection = ref(null);
let navs = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute("id");
          console.log(currentSection.value);
        }
      });
    },
    {
      rootMargin: "0px 0px -90% 0px",
    }
  );
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
</script>
<style>
.nuxt-link-exact-active {
  border: 2px;
  color: aqua;
}
html {
  scroll-behavior: smooth;
}
</style>
