import{_ as j,x as w,o as r,c as u,d as e,t as g,y as i,z as T,A as D,B as V,n as k,b,C as q,u as C,D as M,E as O,G as a,r as E,H as B,I as A,J as I,w as S,K as N,F as P,e as L}from"./entry-af31dbb6.mjs";const R={props:{type:{type:String,default:"text"},name:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String,default:""},leftIcon:{type:String,default:""},debug:{type:Boolean,default:!1}},setup(f,{expose:l}){l();const t={props:f};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},U={class:"col-span-2 mt-3 md:mt-0 lg:mt-0"},$={for:"FirstName",class:"labelTitle"},z=["placeholder","type"],G={key:0,class:"icon is-small is-right"},J=e("i",{class:"fas fa-check has-text-success"},null,-1),H=[J],K={key:1,class:"icon is-small is-right"},Q=e("i",{class:"fas fa-x has-text-danger"},null,-1),W=[Q],X={key:0,class:"debug"};function Y(f,l,n,t,v,h){const o=w("VErrorMessage"),_=w("VField");return r(),u("div",U,[e("label",$,g(n.label),1),i(_,{name:n.name},{default:T(({field:m,meta:s,errors:p})=>[e("div",{class:k(["w-full border-2 rounded-lg p-3 border-slate-100 mt-5 flex",{" border-green-200":s.valid&&s.touched," border-red-300":!s.valid&&s.touched}])},[e("input",D(m,{class:"col-span-2 w-full flex-grow h-full outline-none",placeholder:n.placeholder,type:n.type}),null,16,z),e("div",null,[s.valid&&s.touched?(r(),u("span",G,H)):!s.valid&&s.touched?(r(),u("span",K,W)):V("",!0)])],2),i(o,{name:n.name,as:"div",class:"text-red-500 text-sm font-normal"},null,8,["name"]),n.debug?(r(),u("div",X,[e("pre",null,g(p),1),e("pre",null,g(s),1)])):V("",!0)]),_:1},8,["name"])])}var Z=j(R,[["render",Y]]);const ee={setup(f,{expose:l}){l();let n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,t=/^[0-9]+$/;const v=b(!1);q(()=>{v.value=C().currentRoute.value.query.debug==="true"}),M({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0});const h=b("Physical"),o=b("8th Only"),_=b("Mr"),m=O({firstName:a().required().min(3).label("First name"),surName:a().required().min(3).label("Last name"),phoneNumber:a().required().matches(t).min(10).max(11).label("Phone number"),email:a().required().email().label("Email Address"),address:a().required().label("Address"),appearance:a(),appearanceType:a(),attendanceDate:a(),title:a(),gender:a()}),s={email:"",firstName:"",surName:"",phoneNumber:"",appearance:"Physical",appearanceType:"",gender:"Male",address:"",attendanceDate:"free"};async function p(d){const F={Accept:"application/json","Content-Type":"application/json"};await fetch("https://localhost:44361/api/Members",{method:"POST",body:JSON.stringify(d),headers:F}).then(x=>x.json()).then(x=>{console.log(x),window.location.href=x.url})}const y={regexEmail:n,phoneRegex:t,debug:v,appearances:h,attendanceDates:o,titles:_,schema:m,initialValues:s,sendToDb:p,handleSubmit:(d,F)=>{d.attendanceDate=o.value,d.appearance=h.value=="Physical",d.appearanceType=h.value,d.title=_.value,console.log(d),p(d)},reactive:E,ref:b,object:O,string:a,yupRef:B,bool:A,configure:M,date:I};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}},te={class:"h-full p-5 mt-6 lg:mt-0 lg:p-20"},se={class:"h-full bg-white rounded-2xl shadow-2xl shadow-slate-300 p-3 lg:p-10"},le=e("br",null,null,-1),ae=e("h2",{class:"font-bold font-Nunito text-xl lg:text-5xl"},"Register",-1),ne=e("br",null,null,-1),oe=e("span",null,"Please fill the above information",-1),ie=e("br",null,null,-1),ce={class:"block md:grid lg:grid grid-cols-5 gap-4 w-full mt-2 items-center justify-center"},de={class:"col-span-1 flex flex-col"},re=e("label",{for:"title",class:"labelTitle"},"Title",-1),ue=e("option",{disabled:""},"Choose option",-1),_e=e("option",{selected:"",value:"Mr"},"Mr",-1),pe=e("option",{value:"Miss"},"Miss",-1),he=e("option",{value:"Mrs"},"Mrs",-1),me=[ue,_e,pe,he],be={class:"col-span-2 mt-3 md:mt-0 lg:mt-0"},ge={class:"col-span-2 mt-3 md:mt-0 lg:mt-0"},fe={class:"block md:grid lg:grid grid-cols-4 gap-4 w-full mt-10 items-center justify-center"},ve={class:"col-span-1"},ye={class:"col-span-2"},xe={class:"items-end"},we=e("label",{for:"LastName",class:"labelTitle"},"Gender",-1),Se={class:"inputStyle border-none"},Ne={class:"text-lg font-bold text-slate-500 mr-20 cursor-pointer"},Ve=e("span",{class:"ml-3"},"Male",-1),Fe={class:"text-lg font-bold text-slate-500 cursor-pointer"},Me=e("span",{class:"ml-3"},"Female",-1),Oe=e("br",null,null,-1),Pe={class:"block md:grid lg:grid grid-cols-2 gap-4 w-full mt-10 items-center justify-center"},je={class:"col-span-1 flex flex-col"},Te=e("label",{for:"title",class:"labelTitle"},"Event Date",-1),ke=e("option",{selected:"",value:"8th Only"},"8th Only",-1),De=e("option",{selected:"",value:"9th Only"},"9th Only",-1),qe=e("option",{value:"8th - 9th"},"Both event",-1),Ce=[ke,De,qe],Ee={class:"col-span-1 flex flex-col"},Be=e("label",{for:"title",class:"labelTitle"},"Attendance Type",-1),Ae=e("option",{selected:"",value:"Physical"},"Physical",-1),Ie=e("option",{value:"Virtual"},"Virtual",-1),Le=[Ae,Ie],Re=e("br",null,null,-1),Ue=e("label",{for:"phone",class:"labelTitle"},"Price",-1),$e={class:"inputStyle mb-5 bg-slate-500"},ze={class:"text-white font-medium text-lg"},Ge={class:"flex items-center justify-center"},Je=["disabled"],He=e("p",{class:"help is-danger has-text-weight-bold"}," Please correct the following errors: ",-1);function Ke(f,l,n,t,v,h){const o=Z,_=w("v-field"),m=w("VForm");return r(),u("div",te,[e("div",se,[le,ae,ne,oe,i(m,{class:"card p-5","validation-schema":t.schema,"initial-values":t.initialValues,onSubmit:t.handleSubmit},{default:T(({meta:s,errors:p})=>[ie,e("div",ce,[e("div",de,[re,S(e("select",{name:"subject",class:"inputStyle","onUpdate:modelValue":l[0]||(l[0]=c=>t.titles=c)},me,512),[[N,t.titles]])]),e("div",be,[i(o,{type:"text",name:"firstName",label:"First Name",placeholder:"First Name",debug:t.debug},null,8,["debug"])]),e("div",ge,[i(o,{type:"text",name:"surName",label:"Last Name",placeholder:"Last Name",debug:t.debug},null,8,["debug"])])]),e("div",fe,[e("div",ve,[i(o,{type:"tel",name:"phoneNumber",label:"Phone Number",placeholder:"09000000000",debug:t.debug},null,8,["debug"])]),e("div",ye,[i(o,{type:"email",name:"email",label:"Email",placeholder:"Email",debug:t.debug,leftIcon:"fa-envelope"},null,8,["debug"])]),e("div",xe,[we,e("div",Se,[e("label",Ne,[i(_,{name:"gender",type:"radio",value:"Male"}),Ve]),e("label",Fe,[i(_,{name:"gender",type:"radio",value:"Female"}),Me])])])]),Oe,i(o,{type:"address",name:"address",label:"Address",placeholder:"address",debug:t.debug,leftIcon:"fa-envelope"},null,8,["debug"]),e("div",Pe,[e("div",je,[Te,S(e("select",{name:"subject",class:"inputStyle cursor-pointer","onUpdate:modelValue":l[1]||(l[1]=c=>t.attendanceDates=c)},Ce,512),[[N,t.attendanceDates]])]),e("div",Ee,[Be,S(e("select",{name:"subject",class:"inputStyle cursor-pointer","onUpdate:modelValue":l[2]||(l[2]=c=>t.appearances=c)},Le,512),[[N,t.appearances]])])]),Re,Ue,e("div",$e,[e("span",ze,g(t.attendanceDates=="8th Only"?"Free":t.appearances=="Physical"?"3000":"5000"),1)]),e("div",Ge,[e("button",{class:k([{"opacity-100":s.valid},"btn i96"]),disabled:!s.valid,type:"submit"}," Submit ",10,Je)]),Object.keys(p).length?(r(),u(P,{key:0},[He,e("ul",null,[(r(!0),u(P,null,L(p,(c,y)=>(r(),u("li",{key:y,class:"help is-danger"},g(c),1))),128))])],64)):V("",!0)]),_:1},8,["validation-schema"])])])}var We=j(ee,[["render",Ke]]);export{We as default};