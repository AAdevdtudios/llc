<template>
  <div class="h-full p-5 mt-6 lg:mt-0 lg:p-20">
    <div class="h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10">
      <br />
      <h1 class="text-3xl text-slate-800 font-bold">Get Report</h1>
      <div class="font-bold flex justify-between inputStyle items-center">
        <span class="text-xl text-slate-800">Get xlsx of All Paid users</span>
        <span class="p-3 rounded bg-slate-900 text-white"
          ><a href="">Download document </a></span
        >
      </div>
      <div class="font-bold flex justify-between inputStyle items-center">
        <span class="text-xl text-slate-800">Get xlsx of All Free users</span>
        <span class="p-3 rounded bg-slate-900 text-white"
          ><a href="">Download document </a></span
        >
      </div>
      <div class="font-bold flex justify-between inputStyle items-center">
        <span class="text-xl text-slate-800">Get xlsx of Un-Paid users</span>
        <span class="p-3 rounded bg-slate-900 text-white"
          ><a href="https://llcapi.herokuapp.com/api/Members/query?query=Free" download
            >Download document
          </a></span
        >
      </div>
      <div class="font-bold flex justify-between inputStyle items-center">
        <span class="text-xl text-slate-800">Get xlsx of All Virtual users</span>
        <span class="p-3 rounded bg-slate-900 text-white"
          ><a href="">Download document </a></span
        >
      </div>
      <div class="font-bold flex justify-between inputStyle items-center">
        <span class="text-xl text-slate-800">Get xlsx of All Physical users</span>
        <span class="p-3 rounded bg-slate-900 text-white"
          ><a href="">Download document </a></span
        >
      </div>
    </div>
  </div>
</template>
