<script setup>
import speakers from "@/data.json";
import { watchEffect } from "vue";
import dayjs from "dayjs";
import ModalTailComponent1 from "../components/ModalTailComponent.vue";
const apiConfig = useRuntimeConfig();

let itemList = [
  " LLC hopes to reform and transform individuals to great minds",
  " Helps in partnering with finest leaders, innovators, professionals and entrepreneurs",
  " LLC operates solely in Lagos State with an annual leadership conference",
  " The conference takes place once in a year with speakers from across the globe.",
];
let faqs = reactive([
  {
    id: 1,
    question: "What is the price of the ticket ?",
    content:
      "Day 1- July 8 is totally free and Day 2- July 9 on virtual is 3000 while Physical is 5000 ",
    active: true,
  },
  {
    id: 1,
    question: "What is included in my ticket ?",
    content: "Your ticket covers both brake-fast and launch.",
    active: false,
  },
  {
    id: 1,
    question: "Office address ?",
    content: "RCCG Resurrection Parish, Lekki",
    active: false,
  },
  {
    id: 1,
    question: "How should I dress ?",
    content:
      "Their is no formal dress code but it is advisable to look decent for the event",
    active: false,
  },
]);
let speakerSchedules = reactive([
  {
    id: 1,
    active: false,
    day: "Day 1 - JULY 8",
    contents: [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: true,
        name: "Diamonds Richard",
        topic: "FIRST Speaker",
        time: "09:00 - 12:00",
      },
      {
        id: 2,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: false,
        name: "Diamonds Richard",
        topic: "FIRST Speaker",
        time: "09:00 - 12:00",
      },
      {
        id: 3,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: false,
        name: "Diamonds Richard",
        topic: "FIRST Speaker",
        time: "09:00 - 12:00",
      },
    ],
  },
  {
    id: 2,
    active: true,
    day: "Day 2 - JULY 9",
    contents: [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: true,
        name: "Samuel Richard",
        time: "12:15 - 01:15",
        topic: "Second Speaker",
      },
      {
        id: 2,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: false,
        name: "Diamonds Samuel",
        time: "12:15 - 01:15",
        topic: "Second Speaker",
      },
      {
        id: 3,
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
        active: false,
        name: "Samuel Diamonds",
        time: "12:15 - 01:15",
        topic: "Second Speaker",
      },
    ],
  },
]);
function change(value) {
  for (let index = 0; index < faqs.length; index++) {
    faqs[index].active = false;
  }
  this.faqs[value].active = true;

  // faqs.forEach((item, index) => {
  //   console.log(index);
  // });
}
function changeDate(value) {
  for (let index = 0; index < speakerSchedules.length; index++) {
    speakerSchedules[index].active = false;
  }
  this.speakerSchedules[value].active = true;
}
function makeActive(val, indexVal) {
  for (let index = 0; index < speakerSchedules[val].contents.length; index++) {
    speakerSchedules[val].contents[index].active = false;
  }
  this.speakerSchedules[val].contents[indexVal].active = true;
}

let val = ref("");
let email = ref("");
let answer = ref("");
let result = ref("");
let error = ref("");
let router = useRouter();
const showModal = ref(false);
const modalMessages = reactive({
  header: "",
  message: "",
});
async function validateEmail() {
  error.value = true;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(regexEmail)) {
    result.value = "Email is valid";
    answer.value = true;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch("https://llcapi.herokuapp.com/api/Members/identify?email=" + email.value)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Success") {
          window.location.href = data.url;
        }
        showModal.value = true;
        modalMessages.header = data.response;
        modalMessages.message = data.message;
      });
  } else {
    result.value = "Email is not valid";
    answer.value = false;
  }
}

let schedules = [
  {
    id: 1,
    time: "09:00 am - 10:00 am",
    program: "Welcome and intro",
    speaker: "Mustafizur Khan, SD Asia",
  },
  {
    id: 2,
    time: "10:00 am-12:00 am",
    program: "Tips and share",
    speaker: "Mustafizur Khan, SD Asia",
  },
  {
    id: 3,
    time: "1:00 am - 2:00 am",
    program: "Revises and Questions ",
    speaker: "Mustafizur Khan, SD Asia",
  },
];

//Counter
const days = reactive({
  displayDays: 0,
  displayHours: 0,
  displayMinutes: 0,
  displaySeconds: 0,
});
function changeModal() {
  showModal.value = !showModal.value;
}
const seconds = ref(1000);
const minutes = ref(seconds.value * 60);
const hours = ref(minutes.value * 60);
const daySet = ref(hours.value * 24);
function counters() {
  const timer = setInterval(() => {
    const now = new Date();
    const end = new Date(2022, 6, 9, 0, 0, 0, 0);
    const distance = end.getTime() - now.getTime();
    if (distance < 0) {
      clearInterval(timer);
      return;
    }
    const day = Math.floor(distance / daySet.value);
    const hour = Math.floor((distance % daySet.value) / hours.value);
    const minute = Math.floor((distance % hours.value) / minutes.value);
    const second = Math.floor((distance % minutes.value) / seconds.value);
    days.displayMinutes = minute < 10 ? "0" + minute : minute;
    days.displaySeconds = second < 10 ? "0" + second : second;
    days.displayHours = hour < 10 ? "0" + hour : hour;
    days.displayDays = day < 10 ? "0" + day : day;
  }, 1000);
}

onMounted(() => {
  console.log();
  counters();
});
</script>

<template>
  <section class="background-design">
    <div class="special"></div>
    <div class="center-element">
      <div class="intro">
        <h1 class="header-center mt-64 md:mt-20">
          <span class="text-blue-300">LEADING IN SEASON</span> OF <br />
          <span class="text-red-500">DARKNESS</span> AND
          <span class="text-yellow-300">CONFUSION</span>
        </h1>
        <p class="text-lg mt-6 md:mt-2 md:text-4xl font-bold">
          RCCG RESURRECTION PARISH, LEKKI
        </p>
        <p class="text-sm mt-5 md:text-xl font-bold">JULY 8TH, 2022 - JULY 9TH, 2022</p>
        <div class="flex gap-7 md:flex md:gap-8 lg:gap-32 mt-10 mb-8">
          <div class="rings">
            <div class="rings-texts">
              <span>{{ days.displayDays }}</span>
            </div>
            <img src="@/assets/images/new/rings/ring-1.png" alt="" class="h-full" />
            <span class="text-sm lg:text-xl">Days</span>
          </div>
          <div class="rings">
            <div class="rings-texts">
              <span>{{ days.displayHours }}</span>
            </div>
            <img src="@/assets/images/new/rings/ring-2.png" alt="" class="h-full" />
            <span class="text-sm lg:text-xl">Hours</span>
          </div>
          <div class="rings">
            <div class="rings-texts">
              <span>{{ days.displayMinutes }}</span>
            </div>
            <img src="@/assets/images/new/rings/ring-3.png" alt="" class="h-full" />
            <span class="text-sm lg:text-xl">Minute</span>
          </div>
          <div class="rings">
            <div class="rings-texts">
              <span>{{ days.displaySeconds }}</span>
            </div>
            <img src="@/assets/images/new/rings/ring-1.png" alt="" class="h-full" />
            <span class="text-sm lg:text-xl">Seconds</span>
          </div>
        </div>
        <br />
        <!-- <div
          class="transform h-fit bg-white w-min m-auto transition duration-500 hover:scale-100 rounded overflow-hidden p-2"
        >
          <a href="#register" class="text-black px-6 py-5 font-light text-2xl"
            >Register</a
          >
        </div> -->
      </div>
    </div>
  </section>
  <section
    id="about"
    class="h-full px-5 lg:px-10 py-3 lg:py-0 bg-speaker relative overflow-hidden"
  >
    <img
      src="@/assets/images/new/random/cross.svg"
      alt=""
      class="opacity-10 absolute top-10 left-40 h-32 w-32 rotate-45"
    />
    <img
      src="@/assets/images/new/random/side-slide.svg"
      alt=""
      class="opacity-40 absolute top-1 right-1"
    />
    <div class="sm:block lg:flex gap-3 lg:py-20">
      <div class="row-span-1 py-2 font-light">
        <h3 class="text-2xl font-bold font-sans pb-6">
          <span class="border-b-4 border-black py-3">ABOUT</span> LLC
        </h3>
        <p>
          The Lagos Leadership Conference is an annual international leadership platform
          which brings together leaders from all segments of society to share ideas and
          get fresh insights from notable leaders from within and outside Nigeria. The
          vision is to assist in building the leadership capacity of leaders-
          political,corporate,business,religious,women,youth etc. The overall aim is to
          contribute a quota in reducing the Leadership deficit in our nation.
        </p>
        <img
          src="@/assets/images/image6.jpg"
          alt="All on"
          class="h-96 block max-w-full align-middle mt-5"
        />
      </div>
      <div class="row-span-2 font-light">
        <h3 class="text-2xl font-bold font-sans mb-6 mt-2 lg:mt-0">WHAT IS OUR GOAL?</h3>
        <p>
          It is run as a Non-governmental organization under the management of BONMENEBARI
          LEADERSHIP FOUNDATION providing leadership development for aspiring leaders who
          want to create a niche for themselves in their various domains. LLC hopes to
          reform and transform individuals to great minds in their professions or
          professional by partnering with finest leaders, innovators, professionals and
          entrepreneurs who will share ideas with participants.
        </p>
        <ul>
          <li
            v-for="item in itemList"
            :key="item"
            class="before:content-['\00BB'] mt-5 font-bold list-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <div class="h-96 bg-green-900 w-full bg-facts bg-cover relative">
    <div class="special"></div>
  </div>
  <section id="speakers" class="h-full px-5 lg:px-10 bg-speaker">
    <div class="items-center w-full md:justify-center sm:justify-center lg:block py-14">
      <h2 class="text-4xl font-bold">
        <span class="border-b-4 border-black py-3">Speakers</span>
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 items-center mt-11 gap-y-3">
        <div
          class="flex flex-col h-auto w-80 gap-2 justify-center items-center uppercase mt-5"
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <!-- <a :href="`speakers/${speaker.name}`"> -->
          <img
            :src="`${speaker.image}`"
            :alt="speaker.name"
            class="h-80 cursor-pointer hover:opacity-80"
          />
          <h1 class="font-bold text-xl text-cyan-500">{{ speaker.name }}</h1>
          <h3 class="font-bold text-center capitalize text-xl tracking-tighter">
            {{ speaker.title }}
          </h3>
          <h3 class="font-bold text-center capitalize text-base tracking-tighter">
            {{ speaker.company }}
          </h3>
          <!-- </a
          > -->
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="h-full px-5 lg:px-32 py-28" id="register">
    <h2 class="font-bold text-3xl">
      <span class="border-b-4 border-black py-3">Register </span>now
    </h2>
    <br />
    <h4 class="font-semibold text-2xl">Get your hall pass ready for the event</h4>
    <br />
    <div class="grid grid-cols-5 w-full h-full gap-2 gap-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        v-model="email"
        class="col-span-4 border-2 border-solid border-gray-200 text-xl p-2 outline-none"
      />
      <button class="bg-black border-none text-white rounded" @click="validateEmail">
        Register
      </button>
      <span
        v-show="error"
        :class="answer == true ? 'bg-green-400' : 'bg-red-400'"
        class="w-full p-3 text-white col-span-5 rounded-md flex justify-between"
      >
        <p>{{ result }}</p>
        <p class="cursor-pointer font-bold" @click="error = false">X</p>
      </span>
    </div>
  </div> -->
  <section id="schedule" class="h-full px-5 lg:px-14 bg-gray-50">
    <div class="items-center w-full md:justify-center sm:justify-center sm:block py-4">
      <div class="lg:grid sm:block md:grid-cols-4 gap-2 justify-between mt-4">
        <div class="col-span-2">
          <h2 class="text-4xl font-bold mb-10">
            <span class="border-b-4 border-black py-3">ABOUT</span> Convener
          </h2>
          <img
            src="@/assets/images/Speaker/pastorcharleskpandei.jpg"
            alt="pastorcharleskpandei"
            class="w-60 h-60 mb-2"
          />
          <p>
            Charles Duunebari Kpandei is the Lead consultant of the Bonmenebari Leadership
            Institute and a consummate Leader and trainer. A graduate of the University of
            Benin in Accounting, He is an alumnus of the Lagos Business school (AMP) and
            the Haggai Institute in Hawaii. He has over two decades management level
            Banking experience in various areas in the Bank of Credit and Commerce
            International (BCCI, later African International Bank, AIB) and Fortune
            International Bank where he left as Deputy General Manager, Corporate
            Resources.
          </p>
          <p class="mt-5">
            He is the founding Chairman of Berachah Microfinance Bank and Director,
            Southwell Global Energy Services Ltd. He is the Chairman, Bonmenebari
            Leadership Foundation, a foundation which has for more than ten years involved
            itself in activities aimed at reducing the leadership deficit that exists in
            literally all segments of the Nigerian society.
          </p>
        </div>
        <div class="col-span-2">
          <h2 class="text-4xl font-bold mb-10">
            <span class="border-b-4 border-black py-3">EVENT</span> SCHEDULE
          </h2>
          <p class="font-bold">
            <span class="text-xl">FRIDAY JULY 8, 2022</span><br />
            <span class="text-3xl text-red-700 font-bold font-Open-Sans tracking-wide"
              >CHRUCH LEADERS SUMMIT</span
            ><br />
            <span class="text-xl mb-2">SPEAKERS</span> <br />
          </p>
          <hr />
          <span class="font-bold flex flex-col gap-2 mt-2">
            <span>E. A. Odeyemi</span>
            <span>Samson Ajetumobi</span>
            <span>Odeh Akatu</span>
            <span>Charles Kpandei</span>
          </span>
          <p class="font-bold mt-5">
            <span class="text-xl">SATURDAY JULY 9, 2022 </span><br />
            <span class="text-3xl text-red-700 font-bold font-Open-Sans tracking-wide"
              >INTERACTIVE ROUNDTABLE</span
            ><br />
            <span class="text-xl mb-2">SPEAKERS</span> <br />
          </p>
          <hr />
          <span class="font-bold flex flex-col gap-2 mt-2">
            <span>Cecilia Bolaji Dada</span>
            <span>Ade Ayeyemi</span>
            <span>Victor Gbenga Afolabi</span>
            <span>Yemi Adedeji</span>
          </span>

          <!-- <div class="flex gap-4 transition-all duration-200 ease-in-out">
            <div
              v-for="(speakerSchedule, index) in speakerSchedules"
              :key="index"
              @click="changeDate(index)"
            >
              <p
                class="p-4 rounded-md text-lg font-bold text-white w-fit shadow-lg hover:bg-blue-900 cursor-pointer"
                :class="speakerSchedule.active ? ' bg-blue-900 ' : 'bg-blue-500'"
              >
                {{ speakerSchedule.day }}
              </p>
            </div>
          </div>
          <div
            v-for="(speakerSchedule, indexSchedule) in speakerSchedules"
            :key="indexSchedule"
          >
            <div
              v-for="(speech, index) in speakerSchedule.contents"
              :key="index"
              :class="speakerSchedule.active ? 'block' : ' hidden'"
              @click="makeActive(indexSchedule, index)"
            >
              <div
                class="mt-5 p-5 rounded-sm hover:bg-blue-900"
                :class="speech.active ? 'bg-blue-900' : 'bg-blue-400 cursor-pointer'"
              >
                <div class="text-white">
                  <div class="flex items-center font-bold gap-3 text-white">
                    <span
                      class="bg-slate-700 rounded-sm opacity-70 text-gray-200 p-3 text-sm font-medium"
                    >
                      <i class="fas fa-clock"></i> {{ speech.time }}
                    </span>
                    {{ speech.topic }}
                  </div>
                  <div :class="speech.active ? 'block' : 'hidden'">
                    <p class="mt-5">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum. Stet clita kasd gubergren.
                    </p>
                    <div class="flex gap-5 mt-5 items-center">
                      <img
                        class="rounded-full border border-gray-100 shadow-sm h-20 w-20"
                        src="https://randomuser.me/api/portraits/women/81.jpg"
                        alt="user image"
                      />
                      <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-microphone"></i>
                        <a href="/speakers" class="hover:border-b-2">{{ speech.name }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- <div class="grid md:grid-cols-2 lg:grid-cols-3 items-center mt-11 gap-x-2 gap-y-3">
        <div
          class="flex flex-col h-60 w-full lg:w-80 border-double border-4 border-white gap-2 justify-center items-center bg-black text-white"
          v-for="schedule in schedules"
          :key="schedule.id"
        >
          <time datetime="10:11">{{ schedule.time }}</time>
          <h3 class="font-bold text-xl">{{ schedule.program }}</h3>
          <p class="font-light">{{ schedule.speaker }}</p>
        </div>
      </div> -->
    </div>
  </section>
  <!-- <section id="partner" class="h-screen bg-slate-100">Partner</section> -->
  <!-- Faq -->
  <section id="faq" class="h-full px-5 lg:px-32">
    <div class="items-center w-full md:justify-center sm:justify-center lg:block py-28">
      <h2 class="text-4xl font-bold">FAQ</h2>
      <br />
      <div v-for="(faq, index) in faqs" :key="faq.id" :index="index" class="mb-2">
        <div
          class="flex bg-black text-white w-full p-4 cursor-pointer"
          @click="change(index)"
        >
          {{ faq.question }}
        </div>
        <div
          class="border border-gray-400 p-5 transition ease-in-out duration-200 transform"
          :class="faq.active === true ? 'block' : 'hidden'"
        >
          <p>
            {{ faq.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="photos" class="h-full px-5 lg:px-32">
    <div class="items-center w-full justify-center lg:block py-14">
      <h2 class="text-4xl font-bold">Gallery</h2>
      <div class="md:block lg:grid grid-cols-4 gap-3 mt-20">
        <div class="h-full w-full bg-gray-900 col-span-2 row-span-2">
          <img src="@/assets/images/image3.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/image6.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/image4.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/image5.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/image3.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/gallery2.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/image1.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/new/image2.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900">
          <img src="@/assets/images/new/image6.jpg" alt="" class="w-full h-full" />
        </div>
      </div>
    </div>
  </section>
  <div
    v-if="showModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <ModalTailComponent1
      @changeModal="changeModal"
      :header="modalMessages.header"
      :message="modalMessages.message"
    />
  </div>
  <div
    v-if="showModal"
    class="opacity-25 fixed inset-0 z-40 bg-black"
    v-on:click="changeModal"
  ></div>
  <div class="h-full px-5 lg:px-32 py-28 md:block lg:grid grid-cols-3">
    <div>
      <h2 class="text-4xl font-bold">EVENT LOCATION</h2>
      <br />
      <address class="gap-1 mb-3 lg:mb-0">
        <p>
          1st Gate Jakande Estate,<br />
          KM 15 Lekki-Express Way, Nigeria., Lekki<br />
          Venu: RCCG Resurrection Lekki<br />
          Phone: +234 802 291 3883<br />
          Email: enquiry@llconference.com
        </p>
      </address>
    </div>
    <div class="col-span-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2903570411036!2d3.496100344041662!3d6.434473534213048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf67f3c217b09%3A0x80b6d4e0716dbc58!2sRCCG%20Resurrection%20Lekki!5e0!3m2!1sen!2sng!4v1655198213765!5m2!1sen!2sng"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<style>
.special {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.49);
}
.rings {
  @apply h-14 md:h-20 lg:h-32 lg:w-32 relative text-xl md:text-4xl font-bold text-center;
}
.rings-texts {
  @apply left-0 top-0 text-lg md:text-4xl h-full w-full p-3 md:p-5 lg:p-10 text-center m-auto absolute;
}
.background-design {
  @apply h-screen bg-hero bg-no-repeat bg-cover w-full relative;
}
.intro {
  @apply w-full relative top-0 left-0 text-left pl-5 lg:pl-10 text-white  tracking-widest;
}
.header-center {
  @apply uppercase text-4xl md:text-7xl w-full font-Montserrat text-white font-bold h-full;
}
.center-element {
  @apply flex items-center h-2/3 md:h-3/4 lg:h-screen overscroll-none;
}
.animation {
  @apply bg-white text-black px-6 py-3 font-light h-fit transform transition duration-500 hover:scale-125;
}
</style>

// { // "id":7, // "name":"OLA BROWN", // "title": "Founder,", // "company": "Flying
Doctors Healthcare Group", //
"image":"https://firebasestorage.googleapis.com/v0/b/imagestores-73682.appspot.com/o/New%20Files%2FBrown.png?alt=media&token=c2da0e8f-bcf0-4365-8396-ba2fc5951685",
// "description":", née Orekunrin (born 1986), is a British-Nigerian medical doctor,
healthcare entrepreneur and founder of the Flying Doctors Healthcare Investment Group and
a director of Greentree Investment Company. Flying Doctors Healthcare Group is active in
air ambulance services, consulting/healthcare technology, hospital/clinic construction,
diagnostics and equipment, health facility management and pharmaceutical retail.", //
"content":"Olamide Brown, née Orekunrin (born 1986), is a British-Nigerian medical doctor,
healthcare entrepreneur and founder of the Flying Doctors Healthcare Investment Group and
a director of Greentree Investment Company. Flying Doctors Healthcare Group is active in
air ambulance services, consulting/healthcare technology, hospital/clinic construction,
diagnostics and equipment, health facility management and pharmaceutical retail. Brown is
a proficient motivational speaker who had inspired many with her talks. She is married and
blessed with children. Her awards include; World Economic Forum (WEF) Young Global Leader,
Forbes 20 Young Power Women In Africa 2013, Forbes Africa's 30 Under 30 for 2015, YWomen –
YNaija 100 Most Influential Women in Nigeria 2015, Silverbird Group Extraordinary Business
Achievement Award, 2018 in Lagos, the youngest person ever to win this award,
YNaija Business Power List 2020, Silverbird Group Extraordinary Business Achievement
Award, 2018 in Lagos(she is and the youngest person ever to win this award)." // },
