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
  email: {
    type: String,
    default: "",
  },
  Fname: {
    type: String,
    default: "",
  },
  amount: {
    type: int,
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
            Dear {{ Fname }}, thank you for completing the LLC2022 Registration. Please
            find below the event details. i. July 8, 2022 – Church Leaders Summit ii. July
            9, 2022 – Interactive roundtable discussion You are required to pay
            {{ amount }} . See account details below for transfer.
            <br />
            Account Name:
            <span class="font-bold">Bonmenabari Leadership Limited</span><br />
            Account Number: <span class="font-bold">1771664775</span><br />
            Bank: <span class="font-bold">Polaris Bank Limited</span>
            <br />
            Thank you <br />
            For: LLC 2022 Organizing Committee Regards,
          </span>
          <span v-else-if="header == 'Already-Exist'">
            Dear {{ Fname }}, thank your for completing the LLC2022 Registration. Event
            and Payment Details will be sent to {{ email }}.
          </span>
          <span v-else-if="header == 'Welcome'">
            You have successfully registered for the Lagos Leadership Conference 2022.
            Please check your email(Inbox and spam) for event information. For further
            enquires, please contact us at: llconf2099@gmail.com
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
