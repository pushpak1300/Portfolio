const c=/\d/,a=["-","_","/","."];function d(e=""){if(!c.test(e))return e.toUpperCase()===e}function h(e,l){const p=l!=null?l:a,n=[];if(!e||typeof e!="string")return n;let t="",o,i;for(const u of e){const f=p.includes(u);if(f===!0){n.push(t),t="",o=void 0;continue}const s=d(u);if(i===!1){if(o===!1&&s===!0){n.push(t),t=u,o=s;continue}if(o===!0&&s===!1&&t.length>1){const r=t[t.length-1];n.push(t.slice(0,Math.max(0,t.length-1))),t=r+u,o=s;continue}}t+=u,o=s,i=f}return n.push(t),n}function y(e){return e?e[0].toUpperCase()+e.slice(1):""}function b(e){return e?(Array.isArray(e)?e:h(e)).map(l=>y(l)).join(""):""}var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}export{C as c,U as g,b as p};
