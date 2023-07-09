import{i,j as F,r as T,_ as L,o as l,c as m,a as e,d as u,f as x,t as p,k as y,l as S,h as j,m as H,n as N,F as R,q,s as v,g as A,b as U,x as V}from"./entry.0f406f7c.js";import{h as M}from"./index.cd32510b.js";import{u as O}from"./asyncData.665359d3.js";function W(r,t,a){const[s={},c]=typeof t=="string"?[{},t]:[t,a],n=s.key||M([c,i(s.baseURL),typeof r=="string"?r:"",i(s.params||s.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const _=n===c?"$f"+n:n,o=F(()=>{let f=r;return typeof f=="function"&&(f=f()),i(f)});if(!s.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:h,lazy:g,default:$,transform:I,pick:B,watch:b,immediate:D,...C}=s,k=T({...C,cache:typeof s.cache=="boolean"?void 0:s.cache}),E={server:h,lazy:g,default:$,transform:I,pick:B,immediate:D,watch:b===!1?[]:[k,o,...b||[]]};let d;return O(_,()=>{var w;return(w=d==null?void 0:d.abort)==null||w.call(d),d=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(s.$fetch||globalThis.$fetch)(o.value,{signal:d.signal,...k})},E)}const z={},G={class:"text-gray-500 dark:text-gray-400"},K=e("h1",{class:"text-2xl font-bold text-gray-700 dark:text-gray-100 sm:text-4xl sm:truncate"},[u(" Hey! 👋"),e("br"),u(" I'm Pushpak Chhajed ")],-1),P=e("p",{class:"text-lg md:text-base dark-mode:text-white leading-normal mb-2 mt-3"},[u(" I am a Software Engineer and a problem solver 💻 "),e("br"),u(" I did my undergraduation from Fr.CRCE, Mumbai where I obtained B.Engg. in Information Technology (2021). I usually attend "),e("a",{href:"https://devfolio.co/@pushpak1300",target:"_blank",rel:"noopener",class:"text-gray-700 dark:text-gray-50 font-semibold"},"hackathons"),u(" during weekends and take part in "),e("a",{href:"https://www.stopstalk.com/user/profile/pushpak1300",target:"_blank",rel:"noopener",class:"text-gray-700 dark:text-gray-50 font-semibold"}," programming contests "),u(" regularly. "),e("br"),u(" In short, I like to build and break apps.😏 ")],-1),Q=[K,P];function J(r,t){return l(),m("div",G,Q)}const X=L(z,[["render",J]]),Y={class:"text-gray-500 dark:text-gray-300"},Z={class:"text-sm"},ee=["datetime"],te=["href"],se={class:"text-xl font-semibold text-gray-700 dark:text-gray-100"},ae={class:"mt-3 text-base"},oe={class:"mt-3"},re=["href"],ne=x({__name:"HomeBlogItem",props:{blog:{type:Object,required:!0}},setup(r){const t=r;return(a,s)=>(l(),m("div",Y,[e("p",Z,[e("time",{datetime:new Date(Date.parse(t.blog.created_at))},p(new Date(Date.parse(t.blog.created_at)).toLocaleDateString("en-US")),9,ee)]),e("a",{href:t.blog.url,target:"_blank",rel:"noopener",class:"mt-1 block"},[e("p",se,p(t.blog.title),1),e("p",ae,p(t.blog.description),1)],8,te),e("div",oe,[e("a",{href:t.blog.url,target:"_blank",rel:"noopener",class:"text-base font-semibold text-gray-700 dark:text-gray-300 hover"}," Read full blog ",8,re)])]))}}),le={class:"mt-4 md:mt-12"},ie={class:"max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"},ce=e("h2",{class:"text-2xl tracking-tight font-extrabold text-gray-700 dark:text-gray-100 sm:text-3xl"}," Latest Blogs ",-1),de={class:"lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},ue=e("p",{class:"text-base text-gray-500 dark:text-gray-300"}," Get latest articles in your inbox. ",-1),me=["onSubmit"],ge=e("label",{for:"email-address",class:"sr-only"},"Email address",-1),fe={class:"mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex"},_e={key:0,class:"w-full bg-gray-600 dark:bg-gray-300 dark:text-gray-900 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:inline-flex"},pe=["textContent"],he={class:"mt-4 pt-8 grid gap-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8"},ye=x({__name:"TheHomeBlogList",props:{blogs:{type:Array,required:!0}},setup(r){const t=r,a=y(""),s=y(!1),c=y(!1),n=async()=>{c.value=!0,await W("https://usebasin.com/f/baffd19320ff.json",{method:"post",body:{email:a.value}},"$kgMIdoQF8h"),a.value="",s.value=!0,c.value=!1};return(_,o)=>{const h=ne;return l(),m("div",le,[e("div",ie,[e("div",null,[ce,e("div",de,[ue,e("form",{class:"mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end",onSubmit:S(n,["prevent"])},[e("div",null,[ge,j(e("input",{id:"email-address","onUpdate:modelValue":o[0]||(o[0]=g=>N(a)?a.value=g:null),name:"email-address",type:"email",autocomplete:"email",required:"",class:"appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-700 dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-300 placeholder-gray-500 focus:outline-none focus:ring-gray-500 focus:border-gray-500 lg:max-w-xs",placeholder:"Enter your email"},null,512),[[H,i(a)]])]),e("div",fe,[i(c)?(l(),m("button",_e," ⌛ ")):(l(),m("button",{key:1,type:"submit",class:"w-full bg-gray-600 dark:bg-gray-300 dark:text-gray-900 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:inline-flex",textContent:p(i(s)?"Sumbitted":"Notify me")},null,8,pe))])],40,me)])]),e("div",he,[(l(!0),m(R,null,q(t.blogs,g=>(l(),v(h,{key:g.id,blog:g},null,8,["blog"]))),128))])])])}}}),xe={class:"dark:bg-gray-800 flex-col flex-grow container max-w-4xl md:py-12 py-8 px-6"},be={class:"mb-8"},ke={class:"mb-4"},Be=x({__name:"index",async setup(r){let t,a,s=([t,a]=A(()=>$fetch("https://dev.to/api/articles?username=pushpak1300")),t=await t,a(),t);return s=s.slice(0,2),(c,n)=>{const _=X,o=ye;return l(),m("div",null,[e("div",xe,[e("div",be,[U(_)]),e("div",ke,[i(s)?(l(),v(o,{key:0,blogs:i(s)},null,8,["blogs"])):V("",!0)])])])}}});export{Be as default};
