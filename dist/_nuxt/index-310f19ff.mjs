import{_ as N,r as L,b as u,u as B,o as l,c as o,d as e,F as h,e as v,w as A,v as H,f as j,n as C,t as c,a as y,g as n,h as E,i as O,j as R,k as U,l as q,m as F,p as G,q as K,s as M}from"./entry-af31dbb6.mjs";import{s as P}from"./data-ea67643b.mjs";const Y={setup(D,{expose:r}){r();let _=[" LLC hopes to reform and transform individuals to great minds"," Helps in partnering with finest leaders, innovators, professionals and entrepreneurs"," LLC operates solely in Lagos State with an annual leadership conference"," The conference takes place once in a year with speakers from across the globe."],s=L([{id:1,question:"What is the price of the ticket ?",content:"Day 1- July 8 is totally free and Day 2- July 9 on virtual is 3000 while Physical is 5000 ",active:!0},{id:1,question:"What is included in my ticket ?",content:"Your ticket covers both brake-fast and launch.",active:!1},{id:1,question:"Office address ?",content:"RCCG Resurrection Parish, Lekki",active:!1},{id:1,question:"How should I dress ?",content:"Their is no formal dress code but it is advisable to look decent for the event",active:!1}]),d=L([{id:1,active:!1,day:"Day 1 - JULY 8",contents:[{id:1,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!0,name:"Diamonds Richard",topic:"FIRST Speaker",time:"09:00 - 12:00"},{id:2,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!1,name:"Diamonds Richard",topic:"FIRST Speaker",time:"09:00 - 12:00"},{id:3,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!1,name:"Diamonds Richard",topic:"FIRST Speaker",time:"09:00 - 12:00"}]},{id:2,active:!0,day:"Day 2 - JULY 9",contents:[{id:1,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!0,name:"Samuel Richard",time:"12:15 - 01:15",topic:"Second Speaker"},{id:2,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!1,name:"Diamonds Samuel",time:"12:15 - 01:15",topic:"Second Speaker"},{id:3,content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",active:!1,name:"Samuel Diamonds",time:"12:15 - 01:15",topic:"Second Speaker"}]}]);function w(i){for(let a=0;a<s.length;a++)s[a].active=!1;this.faqs[i].active=!0}function t(i){for(let a=0;a<d.length;a++)d[a].active=!1;this.speakerSchedules[i].active=!0}function m(i,a){for(let b=0;b<d[i].contents.length;b++)d[i].contents[b].active=!1;this.speakerSchedules[i].contents[a].active=!0}let x=u(""),p=u(""),f=u(""),g=u(""),k=u(""),I=B();async function T(){k.value=!0;let i=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;p.value.match(i)?(g.value="Email is valid",f.value=!0,await fetch("https://localhost:44361/api/Members/identify?email="+p.value).then(a=>a.json()).then(a=>{window.location.href=a.url})):(g.value="Email is not valid",f.value=!1)}const S={itemList:_,faqs:s,speakerSchedules:d,change:w,changeDate:t,makeActive:m,val:x,email:p,answer:f,result:g,error:k,router:I,validateEmail:T,schedules:[{id:1,time:"09:00 am - 10:00 am",program:"Welcome and intro",speaker:"Mustafizur Khan, SD Asia"},{id:2,time:"10:00 am-12:00 am",program:"Tips and share",speaker:"Mustafizur Khan, SD Asia"},{id:3,time:"1:00 am - 2:00 am",program:"Revises and Questions ",speaker:"Mustafizur Khan, SD Asia"}],speakers:P};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}},J=y('<section class="background-design"><div class="special"></div><div class="center-element"><div class="intro"><h1 class="header-center">LEADING IN SEASON OF DARKNESS AND CONFUSION</h1><p class="text-2xl font-light">RCCG RESURRECTION PARISH, LEKKI</p><p class="text-lg font-light">JULY 8TH, 2022 - JULY 9TH, 2022</p><br><div class="transform h-fit bg-white w-min m-auto transition duration-500 hover:scale-100 rounded overflow-hidden p-2"><a href="#register" class="text-black px-6 py-5 font-light text-2xl">Register</a></div></div></div></section>',1),V={id:"about",class:"h-full px-5 lg:px-32 py-3 lg:py-0"},z={class:"sm:block lg:flex gap-3 lg:py-20"},W=e("div",{class:"row-span-1 py-2 font-light"},[e("h3",{class:"text-2xl font-bold font-sans pb-6"},[e("span",{class:"border-b-4 border-black py-3"},"ABOUT"),n(" LLC ")]),e("p",null," The Lagos Leadership Conference is an annual international leadership platform which brings together leaders from all segments of society to share ideas and get fresh insights from notable leaders from within and outside Nigeria. The vision is to assist in building the leadership capacity of leaders- political,corporate,business,religious,women,youth etc. The overall aim is to contribute a quota in reducing the Leadership deficit in our nation. "),e("img",{src:E,alt:"All on",class:"h-96 block max-w-full align-middle mt-5"})],-1),Q={class:"row-span-2 font-light"},X=e("h3",{class:"text-2xl font-bold font-sans mb-6 mt-2 lg:mt-0"},"WHAT IS OUR GOAL?",-1),Z=e("p",null," It is run as a Non-governmental organization under the management of BONMENEBARI LEADERSHIP FOUNDATION providing leadership development for aspiring leaders who want to create a niche for themselves in their various domains. LLC hopes to reform and transform individuals to great minds in their professions or professional by partnering with finest leaders, innovators, professionals and entrepreneurs who will share ideas with participants. ",-1),$=e("div",{class:"h-96 bg-green-900 w-full bg-facts bg-cover relative"},[e("div",{class:"special"})],-1),ee={id:"speakers",class:"h-full px-5 lg:px-32"},te={class:"items-center w-full md:justify-center sm:justify-center lg:block py-14"},se=e("h2",{class:"text-4xl font-bold"},[e("span",{class:"border-b-4 border-black py-3"},"Speakers")],-1),ae={class:"grid md:grid-cols-2 lg:grid-cols-3 items-center mt-11 gap-y-3"},ie=["href"],le=["src","alt"],oe={class:"font-bold text-xl"},ne={class:"font-light"},re={class:"h-full px-5 lg:px-32 py-28",id:"register"},de=e("h2",{class:"font-bold text-3xl"},[e("span",{class:"border-b-4 border-black py-3"},"Register "),n("now ")],-1),ce=e("br",null,null,-1),ue=e("h4",{class:"font-semibold text-2xl"},"Get your hall pass ready for the event",-1),me=e("br",null,null,-1),he={class:"grid grid-cols-5 w-full h-full gap-2 gap-y-4"},pe=y('<section id="schedule" class="h-full px-5 lg:px-32"><div class="items-center w-full md:justify-center sm:justify-center sm:block py-14"><h2 class="text-4xl font-bold"><span class="border-b-4 border-black py-3">EVENT</span> SCHEDULE </h2><div class="lg:grid sm:block md:grid-cols-4 gap-2 justify-between mt-10"><div class="col-span-2"><img src="'+O+'" alt="pastorcharleskpandei" class="w-60 h-60 mb-2"><p> Charles Duunebari Kpandei is the Lead consultant of the Bonmenebari Leadership Institute and a consummate Leader and trainer. A graduate of the University of Benin in Accounting, He is an alumnus of the Lagos Business school (AMP) and the Haggai Institute in Hawaii. He has over two decades management level Banking experience in various areas in the Bank of Credit and Commerce International (BCCI, later African International Bank, AIB) and Fortune International Bank where he left as Deputy General Manager, Corporate Resources. </p><p class="mt-5"> He is the founding Chairman of Berachah Microfinance Bank and Director, Southwell Global Energy Services Ltd. He is the Chairman, Bonmenebari Leadership Foundation, a foundation which has for more than ten years involved itself in activities aimed at reducing the leadership deficit that exists in literally all segments of the Nigerian society. </p><p class="mt-5"> He has vast experience in training Leaders in Government, private sector, youth, women and church leaders both locally and internationally. He is the Convener of the Annual Lagos Leadership Conference ( LLC). He serves as Regional Pastor of the Redeemed Christian Church of God having oversight of more than 1500 churches. </p></div><div class="col-span-2"><p class="font-bold"><span class="text-xl">FRIDAY JULY 8, 2022</span><br><span class="text-3xl">CHRUCH LEADERS SUMMIT</span><br><span class="text-xl mb-2">SPEAKERS</span> <br></p><hr><span> Samson Ajetumobi <br> E. A. Odeyemi <br> Charles Kpandei <br></span><p class="font-bold mt-5"><span class="text-xl">SATURDAY JULY 9, 2022 </span><br><span class="text-3xl">INTERACTIVE ROUNDTABLE</span><br><span class="text-xl mb-2">SPEAKERS</span> <br></p><hr><span> Charles Kpandei <br> Agu Irukwu <br> Yemi Adedeji <br> Harbert Wigwe <br> Ola Brown <br> Jumoke Adenowo <br> Ade Ayeyemi</span></div></div></div></section>',1),fe={id:"faq",class:"h-full px-5 lg:px-32"},ge={class:"items-center w-full md:justify-center sm:justify-center lg:block py-28"},be=e("h2",{class:"text-4xl font-bold"},"FAQ",-1),ve=e("br",null,null,-1),ye=["index"],_e=["onClick"],we=y('<section id="photos" class="h-full px-5 lg:px-32"><div class="items-center w-full justify-center lg:block py-14"><h2 class="text-4xl font-bold">Gallery</h2><div class="md:block lg:grid grid-cols-4 gap-3 mt-20"><div class="h-full w-full bg-gray-900 col-span-2 row-span-2"><img src="'+R+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+E+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+U+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+q+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+R+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+F+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+G+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+K+'" alt="" class="w-full h-full"></div><div class="md:h-full lg:h-56 md:mt-3 w-full bg-gray-900"><img src="'+M+'" alt="" class="w-full h-full"></div></div></div></section>',1),xe=e("div",{class:"h-full px-5 lg:px-32 py-28 md:block lg:grid grid-cols-3"},[e("div",null,[e("h2",{class:"text-4xl font-bold"},"EVENT LOCATION"),e("br"),e("address",{class:"gap-1 mb-3 lg:mb-0"},[e("p",null,[n(" Some place"),e("br"),n(" The Some Hall"),e("br"),n(" House # 08, Road #52, Street"),e("br"),n(" Phone: +234 802 291 3883"),e("br"),n(" Email: enquiry@llconference.com ")])])]),e("div",{class:"col-span-2"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.374257736756!2d-97.05776737233124!3d32.67609202023925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e885e45bc67f7%3A0x86eacd7b88ce0cd0!2sRCCG%20Grace%20Chapel!5e0!3m2!1sen!2sbd!4v1653039725656!5m2!1sen!2sbd",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1);function ke(D,r,_,s,d,w){return l(),o(h,null,[J,e("section",V,[e("div",z,[W,e("div",Q,[X,Z,e("ul",null,[(l(!0),o(h,null,v(s.itemList,t=>(l(),o("li",{key:t,class:"before:content-['\\00BB'] mt-5 font-bold list-item"},c(t),1))),128))])])])]),$,e("section",ee,[e("div",te,[se,e("div",ae,[(l(!0),o(h,null,v(s.speakers,t=>(l(),o("div",{class:"flex flex-col h-auto w-80 gap-2 justify-center items-center",key:t.id},[e("a",{href:`speakers/${t.name}`},[e("img",{src:`${t.image}`,alt:t.name,class:"h-80 cursor-pointer hover:opacity-80"},null,8,le),e("h1",oe,c(t.name),1),e("h3",ne,c(t.profession),1)],8,ie)]))),128))])])]),e("div",re,[de,ce,ue,me,e("div",he,[A(e("input",{type:"email",placeholder:"Enter your email","onUpdate:modelValue":r[0]||(r[0]=t=>s.email=t),class:"col-span-4 border-2 border-solid border-gray-200 text-xl p-2 outline-none"},null,512),[[H,s.email]]),e("button",{class:"bg-black border-none text-white rounded",onClick:s.validateEmail}," Register "),A(e("span",{class:C([s.answer==!0?"bg-green-400":"bg-red-400","w-full p-3 text-white col-span-5 rounded-md flex justify-between"])},[e("p",null,c(s.result),1),e("p",{class:"cursor-pointer font-bold",onClick:r[1]||(r[1]=t=>s.error=!1)},"X")],2),[[j,s.error]])])]),pe,e("section",fe,[e("div",ge,[be,ve,(l(!0),o(h,null,v(s.faqs,(t,m)=>(l(),o("div",{key:t.id,index:m,class:"mb-2"},[e("div",{class:"flex bg-black text-white w-full p-4 cursor-pointer",onClick:x=>s.change(m)},c(t.question),9,_e),e("div",{class:C(["border border-gray-400 p-5 transition ease-in-out duration-200 transform",t.active===!0?"block":"hidden"])},[e("p",null,c(t.content),1)],2)],8,ye))),128))])]),we,xe],64)}var Ce=N(Y,[["render",ke]]);export{Ce as default};