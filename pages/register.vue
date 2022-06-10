<script setup>
import { reactive, ref } from "vue";
import { object, string, ref as yupRef, bool } from "yup";
import { configure } from "vee-validate";
import { date } from "yup/lib/locale";
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneRegex = /^[0-9]+$/;

const debug = ref(false);

onMounted(() => {
  debug.value = useRouter().currentRoute.value.query.debug === "true" ? true : false;
});
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const appearances = ref("Physical");
const attendanceDates = ref("8th Only");
const titles = ref("Mr");

const schema = object({
  firstName: string().required().min(3).label("First name"),
  surName: string().required().min(3).label("Last name"),
  phoneNumber: string()
    .required()
    .matches(phoneRegex)
    .min(10)
    .max(11)
    .label("Phone number"),
  email: string().required().email().label("Email Address"),
  address: string().required().label("Address"),
  appearance: string(),
  appearanceType: string(),
  attendanceDate: string(),
  title: string(),
  gender: string(),
});

const initialValues = {
  email: "",
  firstName: "",
  surName: "",
  phoneNumber: "",
  appearance: "Physical",
  appearanceType: "",
  gender: "Male",
  address: "",
  attendanceDate: "free",
};

async function sendToDb(val) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  await fetch("https://localhost:44361/api/Members", {
    method: "POST",
    body: JSON.stringify(val),
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = data.url;
    });
}

const handleSubmit = (values, actions) => {
  values.attendanceDate = attendanceDates.value;
  values.appearance = appearances.value == "Physical" ? true : false;
  values.appearanceType = appearances.value;
  values.title = titles.value;
  console.log(values);

  sendToDb(values);
  //actions.resetForm();
};
</script>
<template>
  <div class="h-full p-5 mt-6 lg:mt-0 lg:p-20">
    <div class="h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10">
      <br />
      <h2 class="font-bold font-Nunito text-xl lg:text-5xl">Register</h2>
      <br />
      <span>Please fill the above information</span>
      <VForm
        class="card p-5"
        :validation-schema="schema"
        :initial-values="initialValues"
        v-slot="{ meta: formMeta, errors: formErrors }"
        @submit="handleSubmit"
      >
        <br />
        <div
          class="block md:grid lg:grid grid-cols-5 gap-4 w-full mt-2 items-center justify-center"
        >
          <div class="col-span-1 flex flex-col">
            <label for="title" class="labelTitle">Title</label>
            <select name="subject" class="inputStyle" v-model="titles">
              <option disabled>Choose option</option>
              <option selected value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div class="col-span-2 mt-3 md:mt-0 lg:mt-0">
            <VInputFormField
              type="text"
              name="firstName"
              label="First Name"
              placeholder="First Name"
              :debug="debug"
            />
          </div>
          <div class="col-span-2 mt-3 md:mt-0 lg:mt-0">
            <VInputFormField
              type="text"
              name="surName"
              label="Last Name"
              placeholder="Last Name"
              :debug="debug"
            />
          </div>
        </div>
        <div
          class="block md:grid lg:grid grid-cols-4 gap-4 w-full mt-10 items-center justify-center"
        >
          <div class="col-span-1">
            <VInputFormField
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              placeholder="09000000000"
              :debug="debug"
            />
          </div>
          <div class="col-span-2">
            <VInputFormField
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              :debug="debug"
              leftIcon="fa-envelope"
            />
          </div>
          <div class="items-end">
            <label for="LastName" class="labelTitle">Gender</label>
            <div class="inputStyle border-none">
              <label class="text-lg font-bold text-slate-500 mr-20 cursor-pointer">
                <v-field name="gender" type="radio" value="Male"></v-field
                ><span class="ml-3">Male</span>
              </label>
              <label class="text-lg font-bold text-slate-500 cursor-pointer">
                <v-field name="gender" type="radio" value="Female"></v-field
                ><span class="ml-3">Female</span>
              </label>
            </div>
          </div>
        </div>
        <br />
        <VInputFormField
          type="address"
          name="address"
          label="Address"
          placeholder="address"
          :debug="debug"
          leftIcon="fa-envelope"
        />

        <div
          class="block md:grid lg:grid grid-cols-2 gap-4 w-full mt-10 items-center justify-center"
        >
          <div class="col-span-1 flex flex-col">
            <label for="title" class="labelTitle">Event Date</label>
            <select
              name="subject"
              class="inputStyle cursor-pointer"
              v-model="attendanceDates"
            >
              <option selected value="8th Only">8th Only</option>
              <option selected value="9th Only">9th Only</option>
              <option value="8th - 9th">Both event</option>
            </select>
          </div>
          <div class="col-span-1 flex flex-col">
            <label for="title" class="labelTitle">Attendance Type</label>
            <select
              name="subject"
              class="inputStyle cursor-pointer"
              v-model="appearances"
            >
              <option selected value="Physical">Physical</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
        </div>

        <br />
        <label for="phone" class="labelTitle">Price</label>
        <div class="inputStyle mb-5 bg-slate-500">
          <span class="text-white font-medium text-lg">
            {{
              attendanceDates == "8th Only"
                ? "Free"
                : appearances == "Physical"
                ? "3000"
                : "5000"
            }}
          </span>
        </div>
        <div class="flex items-center justify-center">
          <button
            :class="{ 'opacity-100': formMeta.valid }"
            :disabled="!formMeta.valid"
            type="submit"
            class="btn i96"
          >
            Submit
          </button>
        </div>

        <template v-if="Object.keys(formErrors).length">
          <p class="help is-danger has-text-weight-bold">
            Please correct the following errors:
          </p>
          <ul>
            <li
              v-for="(message, field) in formErrors"
              :key="field"
              class="help is-danger"
            >
              {{ message }}
            </li>
          </ul>
        </template>
      </VForm>
    </div>
  </div>
</template>

<style>
.labelTitle {
  @apply font-medium text-lg text-slate-500;
}
.inputStyle {
  @apply w-full border-2 rounded-lg p-3 border-slate-100 outline-none mt-5;
}
.btn {
  @apply inline-block px-6 py-3.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out;
}
.i96 {
  @apply w-96;
}
.btn:disabled {
  @apply opacity-20;
}
</style>
