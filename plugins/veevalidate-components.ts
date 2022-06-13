import { Form, Field, ErrorMessage } from 'vee-validate';
import VueTailwindModal from 'vue-tailwind-modal';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VForm", Form);
    nuxtApp.vueApp.component("VField", Field);
    nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
    nuxtApp.vueApp.component("VueTailwindModal", VueTailwindModal)
  });
  