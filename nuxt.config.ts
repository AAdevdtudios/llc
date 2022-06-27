import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target:'static',
  modules: [
    // your other modules
    '@nuxtjs/dayjs',
    "@nuxtjs/sitemap",
  ],
  publicRuntimeConfig:{
    api: process.env.API_Base_URL
  },
  head:{
    title: "Lagos Leadership Conference ",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  script: [
    {
      src: "https://kit.fontawesome.com/b685dbf27e.js",
      crossorigin: "anonymous",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
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
  },
  sitemap: {
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    exclude:[
      '/account/**'
    ],
  },
  css: ["@/assets/styles/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
