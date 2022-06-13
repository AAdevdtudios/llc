<script setup>

const props = defineProps({
  header: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="relative w-auto my-6 mx-auto max-w-6xl">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <!--header-->
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
        >
          <h3 class="text-3xl font-semibold">{{ header }}</h3>
          <!-- modalMessages.header -->
          <button
            class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            v-on:click="$emit('changeModal')"
          >
            <span
              class="bg-transparent text-black opacity-30 h-6 w-6 text-2xl block outline-none focus:outline-none"
            >
              ×
            </span>
          </button>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
          <p class="my-4 text-slate-500 text-xl leading-relaxed">
            <span v-if="header == 'Not-Paid'">
              Good Day,<br />
              Thank you for registering for the Lagos Leadership conference 2022 with
              theme ‘Leading in season of Darkness & Confussion’. <br />If you are yet to
              make payment, kindly pay your participation fee so we can reserve your spot.
              The scheduled Fees are show below: <br />
              Virtual Fee: N2,000.00 (Two Thousand Naira Only) <br />
              Onsite (Physical) Fee: N5,000.00 (Five Thousand Naira Only) <br />All
              payments should be made to the following account:<br />
              Account Name: <span class="font-bold">Bonmenabari Leadership Limited</span
              ><br />
              Account Number: <span class="font-bold">1771664775</span><br />
              Bank: <span class="font-bold">Polaris Bank Limited</span>
            </span>
            <span v-else>
              {{ message }}
            </span>
          </p>
        </div>
        <!--footer-->
        <div
          class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
        >
          <button
            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="$emit('changeModal')"
          >
            Close
          </button>
        </div>
      </div>
    </div>
</template>
