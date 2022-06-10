<template>
  <div class="col-span-2 mt-3 md:mt-0 lg:mt-0">
    <label for="FirstName" class="labelTitle">{{ label }}</label>
    <VField :name="name" v-slot="{ field, meta, errors }">
      <div
        class="w-full border-2 rounded-lg p-3 border-slate-100 mt-5 flex"
        :class="{
          ' border-green-200': meta.valid && meta.touched,
          ' border-red-300': !meta.valid && meta.touched,
        }"
      >
        <input
          v-bind="field"
          class="col-span-2 w-full flex-grow h-full outline-none"
          :placeholder="placeholder"
          :type="type"
        />
        <div>
          <span class="icon is-small is-right" v-if="meta.valid && meta.touched">
            <i class="fas fa-check has-text-success"></i>
          </span>
          <span class="icon is-small is-right" v-else-if="!meta.valid && meta.touched">
            <i class="fas fa-x has-text-danger"></i>
          </span>
        </div>
      </div>
      <!-- <template v-if="Object.keys(errors).length">
        <ul>
          <li v-for="(message, field) in errors" :key="field" class="help is-danger">
            {{ message }}
          </li>
        </ul>
      </template> -->
      <VErrorMessage :name="name" as="div" class="text-red-500 text-sm font-normal" />
      <div class="debug" v-if="debug">
        <pre>{{ errors }}</pre>
        <pre>{{ meta }}</pre>
      </div>
    </VField>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
  debug: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
