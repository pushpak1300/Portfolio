import{f as m,o,s as c,P as t,Q as r,Z as d,$ as a,b as p,M as x,u,X as y,Y as f,c as g}from"./entry.8f58f52b.js";import{u as k}from"./index.9c85c802.js";import{q as j}from"./query.1e57910b.js";import"./utils.1520b9b0.js";const b=t("hr",null,null,-1),C={class:"font-medium mt-7 text-2xl mb-5 text-gray-700 dark:text-gray-50"},v={class:"mb-5 text-gray-500 dark:text-gray-300"},$={class:"mb-7 text-gray-700 dark:text-gray-50"},w=t("p",{class:"text-xl font-medium"}," ⚡ Tech stack ",-1),B={class:"text-gray-700 dark:text-gray-50"},L={class:"mb-9"},P={key:0},V=t("strong",null,"Check it out →",-1),N=["href","textContent"],U={key:1},q=t("strong",null,"Check it out →",-1),A=["href"],D=m({__name:"Project",props:{project:null},setup(e){return(s,n)=>(o(),c("div",null,[b,t("p",C,r(e.project.name),1),t("p",v,r(e.project.description),1),t("div",$,[w,t("p",B,r(e.project.skills),1)]),t("div",L,[e.project.githubUrl?(o(),c("p",P,[d(" 🌎 "),V,t("a",{href:e.project.githubUrl,target:"_blank",rel:"noopener",textContent:r(e.project.githubUrl.replace("https://github.com/",""))},null,8,N)])):a("",!0),e.project.projectLink?(o(),c("p",U,[d(" 🌎 "),q,t("a",{href:e.project.projectLink,target:"_blank",rel:"noopener"},r(e.project.projectLink),9,A)])):a("",!0)])]))}}),S={key:0,class:"flex-grow w-full container max-w-4xl mx-auto md:py-8 py-4 px-6 text-gray-700 dark:text-gray-50"},T={class:"mb-12 md:mb-6"},Y=t("div",{class:"mb-4"},[t("h1",{class:"mb-0 font-bold text-4xl"}," Projects "),t("p",{class:"my-2"}," List of projects that I am proud of ")],-1),Q=m({__name:"projects",async setup(e){let s,n;const _=p(),{data:l}=([s,n]=x(()=>k(()=>j(_.path).findOne(),"$YWCdSV8Jub")),s=await s,n(),s);return(E,F)=>{const h=D;return u(l).projects?(o(),c("div",S,[t("div",T,[Y,(o(!0),c(y,null,f(u(l).projects,i=>(o(),g(h,{key:i.id,project:i},null,8,["project"]))),128))])])):a("",!0)}}});export{Q as default};
