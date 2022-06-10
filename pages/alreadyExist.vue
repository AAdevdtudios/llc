<template>
  <div class="h-full p-5 mt-6 lg:mt-0 lg:p-20">
    <div class="h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10">
      <h1 class="font-bold text-2xl uppercase text-center">User already Exist</h1>
      <div class="px-7 my-10">
        <p>
          Good day we see you are trying to re-register please be informed that your
          information has been sent to your mail kindly check your mail. For more
          information you can contact us or send a mail at enquire@llconfer.com or you can
          fill the information below to contact us
        </p>
      </div>
      <h2 class="text-4xl font-bold text-center">For enquire</h2>
      <div class="h-full px-2 lg:px-7 py-12 md:block lg:grid grid-cols-3">
        <div>
          <br />
          <address class="gap-2 mb-3 lg:mb-0 text-center">
            <span>
              <i class="fa-solid fa-location-pin text-5xl"></i>
              <p class="font-semibold text-lg mt-2">Address</p>
              <p>
                Some place<br />
                The Some Hall<br />
              </p>
            </span>
            <span>
              <i class="fa-solid fa-phone text-5xl mt-5"></i>
              <p class="font-semibold text-lg mt-2">Call us</p>
              <p>
                +2349000000000<br />
                +2348000000000<br />
              </p>
            </span>
            <span>
              <i class="fa-solid fa-envelope text-5xl mt-5"></i>
              <p class="font-semibold text-lg mt-2">Email us</p>
              <p>example@mail.com</p>
            </span>
          </address>
        </div>
        <div class="col-span-2 flex-col">
          <input type="text" placeholder="Name" class="inputStyle" />
          <input type="text" placeholder="Email" class="inputStyle" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            minlength="20"
            class="inputStyle"
            placeholder="Message"
          ></textarea>
          <button class="btn w-full mt-3">
            <span class="mr-3">Send</span>
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
