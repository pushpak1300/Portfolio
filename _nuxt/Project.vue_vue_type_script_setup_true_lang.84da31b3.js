import{e as a,o as c,E as n,F as t,P as o,S as r,R as s}from"./entry.9d00c0c8.js";const l=t("hr",null,null,-1),i={class:"font-medium mt-7 text-2xl mb-5 text-gray-700 dark:text-gray-50"},h={class:"mb-5 text-gray-500 dark:text-gray-300"},d={class:"mb-7 text-gray-700 dark:text-gray-50"},u=t("h4",{class:"text-xl font-medium"}," \u26A1 Tech stack ",-1),m={class:"text-gray-700 dark:text-gray-50"},_={class:"mb-9"},g={key:0},k=t("strong",null,"Check it out \u2192",-1),x=["href","textContent"],p={key:1},j=t("strong",null,"Check it out \u2192",-1),y=["href"],E=a({__name:"Project",props:{project:null},setup(e){return(b,f)=>(c(),n("div",null,[l,t("p",i,o(e.project.name),1),t("p",h,o(e.project.description),1),t("div",d,[u,t("p",m,o(e.project.skills),1)]),t("div",_,[e.project.githubUrl?(c(),n("p",g,[r(" \u{1F30E} "),k,t("a",{href:e.project.githubUrl,target:"_blank",rel:"noopener",textContent:o(e.project.githubUrl.replace("https://github.com/",""))},null,8,x)])):s("",!0),e.project.projectLink?(c(),n("p",p,[r(" \u{1F30E} "),j,t("a",{href:e.project.projectLink,target:"_blank",rel:"noopener"},o(e.project.projectLink),9,y)])):s("",!0)])]))}});export{E as _};
