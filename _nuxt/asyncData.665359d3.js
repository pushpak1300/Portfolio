import{k as y,M as _,N as g,O as m,z as P,P as x,i as b,Q as w,R as O}from"./entry.0f406f7c.js";const k=()=>null;function B(...i){const l=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(l);let[a,c,r={}]=i;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??k,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const e=x(),f=()=>e.isHydrating?e.payload.data[a]:e.static.data[a],d=()=>f()!==void 0;e._asyncData[a]||(e._asyncData[a]={data:y(f()??r.default()),pending:y(!d()),error:_(e.payload._errors,a),status:y("idle")});const t={...e._asyncData[a]};t.refresh=t.execute=(s={})=>{if(e._asyncDataPromises[a]){if(s.dedupe===!1)return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}if((s._initial||e.isHydrating&&s._initial!==!1)&&d())return f();t.pending.value=!0,t.status.value="pending";const u=new Promise((n,o)=>{try{n(c(e))}catch(D){o(D)}}).then(n=>{if(u.cancelled)return e._asyncDataPromises[a];let o=n;r.transform&&(o=r.transform(n)),r.pick&&(o=C(o,r.pick)),t.data.value=o,t.error.value=null,t.status.value="success"}).catch(n=>{if(u.cancelled)return e._asyncDataPromises[a];t.error.value=n,t.data.value=b(r.default()),t.status.value="error"}).finally(()=>{u.cancelled||(t.pending.value=!1,e.payload.data[a]=t.data.value,t.error.value&&(e.payload._errors[a]=w(t.error.value)),delete e._asyncDataPromises[a])});return e._asyncDataPromises[a]=u,e._asyncDataPromises[a]};const p=()=>t.refresh({_initial:!0}),v=r.server!==!1&&e.payload.serverRendered;{const s=O();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(g(()=>{n.forEach(o=>{o()}),n.splice(0,n.length)}),m(()=>n.splice(0,n.length)))}v&&e.isHydrating&&d()?(t.pending.value=!1,t.status.value=t.error.value?"error":"success"):s&&(e.payload.serverRendered&&e.isHydrating||r.lazy)&&r.immediate?s._nuxtOnBeforeMountCbs.push(p):r.immediate&&p(),r.watch&&P(r.watch,()=>t.refresh());const u=e.hook("app:data:refresh",n=>{if(!n||n.includes(a))return t.refresh()});s&&m(u)}const h=Promise.resolve(e._asyncDataPromises[a]).then(()=>t);return Object.assign(h,t),h}function C(i,l){const a={};for(const c of l)a[c]=i[c];return a}export{B as u};
