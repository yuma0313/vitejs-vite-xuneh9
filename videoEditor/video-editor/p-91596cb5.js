var t=Object.defineProperty,e=new WeakMap,n=t=>e.get(t),o=(t,n)=>e.set(n.t=t,n),l=(t,e)=>e in t,s=(t,e)=>(0,console.error)(t,e),r=new Map,i=new Map,c="slot-fb{display:contents}slot-fb[hidden]{display:none}",f="undefined"!=typeof window?window:{},u=f.document||{head:{}},a={o:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o),ce:(t,e)=>new CustomEvent(t,e)},d=t=>Promise.resolve(t),h=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),p=!1,m=[],v=[],y=(t,e)=>n=>{t.push(n),p||(p=!0,e&&4&a.o?w(b):a.raf(b))},$=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){s(t)}t.length=0},b=()=>{$(m),$(v),(p=m.length>0)&&a.raf(b)},w=t=>d().then(t),g=y(v,!0),S={},k=t=>"object"==(t=typeof t)||"function"===t;function j(t){var e,n,o;return null!=(o=null==(n=null==(e=t.head)?void 0:e.querySelector('meta[name="csp-nonce"]'))?void 0:n.getAttribute("content"))?o:void 0}((e,n)=>{for(var o in n)t(e,o,{get:n[o],enumerable:!0})})({},{err:()=>E,map:()=>C,ok:()=>O,unwrap:()=>R,unwrapErr:()=>A});var O=t=>({isOk:!0,isErr:!1,value:t}),E=t=>({isOk:!1,isErr:!0,value:t});function C(t,e){if(t.isOk){const n=e(t.value);return n instanceof Promise?n.then((t=>O(t))):O(n)}if(t.isErr)return E(t.value);throw"should never get here"}var M,x,P,R=t=>{if(t.isOk)return t.value;throw t.value},A=t=>{if(t.isErr)return t.value;throw t.value},T=(t,e,...n)=>{let o=null,l=null,s=null,r=!1,i=!1;const c=[],f=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?f(o):null!=o&&"boolean"!=typeof o&&((r="function"!=typeof t&&!k(o))&&(o+=""),r&&i?c[c.length-1].i+=o:c.push(r?F(null,o):o),i=r)};if(f(n),e){e.key&&(l=e.key),e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,c,L);const u=F(t,null);return u.u=e,c.length>0&&(u.h=c),u.p=l,u.m=s,u},F=(t,e)=>({o:0,v:t,i:e,$:null,h:null,u:null,p:null,m:null}),H={},L={forEach:(t,e)=>t.map(N).forEach(e),map:(t,e)=>t.map(N).map(e).map(D)},N=t=>({vattrs:t.u,vchildren:t.h,vkey:t.p,vname:t.m,vtag:t.v,vtext:t.i}),D=t=>{if("function"==typeof t.vtag){const e={...t.vattrs};return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),T(t.vtag,e,...t.vchildren||[])}const e=F(t.vtag,t.vtext);return e.u=t.vattrs,e.h=t.vchildren,e.p=t.vkey,e.m=t.vname,e},U=t=>n(t).$hostElement$,W=(t,e,n)=>{const o=U(t);return{emit:t=>q(o,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},q=(t,e,n)=>{const o=a.ce(e,n);return t.dispatchEvent(o),o},B=new WeakMap,G=t=>"sc-"+t.S,I=(t,e,n,o,s,r)=>{if(n!==o){let i=l(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,l=_(n),s=_(o);e.remove(...l.filter((t=>t&&!s.includes(t)))),e.add(...s.filter((t=>t&&!l.includes(t))))}else if("style"===e){for(const e in n)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)n&&o[e]===n[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if("key"===e);else if("ref"===e)o&&o(t);else if(i||"o"!==e[0]||"n"!==e[1]){const l=k(o);if((i||l&&null!==o)&&!s)try{if(t.tagName.includes("-"))t[e]=o;else{const l=null==o?"":o;"list"===e?i=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(t){}null==o||!1===o?!1===o&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&r||s)&&!l&&t.setAttribute(e,o=!0===o?"":o)}else if(e="-"===e[2]?e.slice(3):l(f,c)?c.slice(2):c[2]+e.slice(3),n||o){const l=e.endsWith(z);e=e.replace(J,""),n&&a.rel(t,e,n,l),o&&a.ael(t,e,o,l)}}},V=/\s/,_=t=>t?t.split(V):[],z="Capture",J=RegExp(z+"$"),K=(t,e,n)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,l=t&&t.u||S,s=e.u||S;for(const t of Q(Object.keys(l)))t in s||I(o,t,l[t],void 0,n,e.o);for(const t of Q(Object.keys(s)))I(o,t,l[t],s[t],n,e.o)};function Q(t){return t.includes("ref")?[...t.filter((t=>"ref"!==t)),"ref"]:t}var X=!1,Y=!1,Z=!1,tt=!1,et=(t,e,n,o)=>{var l;const s=e.h[n];let r,i,c,f=0;if(X||(Z=!0,"slot"===s.v&&(M&&o.classList.add(M+"-s"),s.o|=s.h?2:1)),null!==s.i)r=s.$=u.createTextNode(s.i);else if(1&s.o)r=s.$=u.createTextNode("");else{if(tt||(tt="svg"===s.v),r=s.$=u.createElementNS(tt?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",!X&&2&s.o?"slot-fb":s.v),tt&&"foreignObject"===s.v&&(tt=!1),K(null,s,tt),!!r.getRootNode().querySelector("body")&&null!=M&&r["s-si"]!==M&&r.classList.add(r["s-si"]=M),vt(r,o),s.h)for(f=0;f<s.h.length;++f)i=et(t,s,f,r),i&&r.appendChild(i);"svg"===s.v?tt=!1:"foreignObject"===r.tagName&&(tt=!0)}return r["s-hn"]=P,3&s.o&&(r["s-sr"]=!0,r["s-cr"]=x,r["s-sn"]=s.m||"",r["s-rf"]=null==(l=s.u)?void 0:l.ref,c=t&&t.h&&t.h[n],c&&c.v===s.v&&t.$&&nt(t.$,!1)),r},nt=(t,e)=>{a.o|=1;const n=Array.from(t.childNodes);for(let t=n.length-1;t>=0;t--){const o=n[t];o["s-hn"]!==P&&o["s-ol"]&&(pt(it(o),o,rt(o)),o["s-ol"].remove(),o["s-ol"]=void 0,o["s-sh"]=void 0,Z=!0),e&&nt(o,e)}a.o&=-2},ot=(t,e,n,o,l,s)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===P&&(i=i.shadowRoot);l<=s;++l)o[l]&&(r=et(null,n,l,t),r&&(o[l].$=r,pt(i,r,rt(e))))},lt=(t,e,n)=>{for(let o=e;o<=n;++o){const e=t[o];if(e){const t=e.$;ht(e),t&&(Y=!0,t["s-ol"]?t["s-ol"].remove():nt(t,!0),t.remove())}}},st=(t,e,n=!1)=>!(t.v!==e.v||("slot"===t.v?"k"in t&&n&&8!==t.$.nodeType||t.m!==e.m:!n&&t.p!==e.p)),rt=t=>t&&t["s-ol"]||t,it=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,ct=(t,e,n=!1)=>{const o=e.$=t.$,l=t.h,s=e.h,r=e.v,i=e.i;let c;null===i?(tt="svg"===r||"foreignObject"!==r&&tt,("slot"!==r||X)&&K(t,e,tt),null!==l&&null!==s?((t,e,n,o,l=!1)=>{let s,r,i=0,c=0,f=0,u=0,a=e.length-1,d=e[0],h=e[a],p=o.length-1,m=o[0],v=o[p];for(;i<=a&&c<=p;)if(null==d)d=e[++i];else if(null==h)h=e[--a];else if(null==m)m=o[++c];else if(null==v)v=o[--p];else if(st(d,m,l))ct(d,m,l),d=e[++i],m=o[++c];else if(st(h,v,l))ct(h,v,l),h=e[--a],v=o[--p];else if(st(d,v,l))"slot"!==d.v&&"slot"!==v.v||nt(d.$.parentNode,!1),ct(d,v,l),pt(t,d.$,h.$.nextSibling),d=e[++i],v=o[--p];else if(st(h,m,l))"slot"!==d.v&&"slot"!==v.v||nt(h.$.parentNode,!1),ct(h,m,l),pt(t,h.$,d.$),h=e[--a],m=o[++c];else{for(f=-1,u=i;u<=a;++u)if(e[u]&&null!==e[u].p&&e[u].p===m.p){f=u;break}f>=0?(r=e[f],r.v!==m.v?s=et(e&&e[c],n,f,t):(ct(r,m,l),e[f]=void 0,s=r.$),m=o[++c]):(s=et(e&&e[c],n,c,t),m=o[++c]),s&&pt(it(d.$),s,rt(d.$))}i>a?ot(t,null==o[p+1]?null:o[p+1].$,n,o,c,p):c>p&&lt(e,i,a)})(o,l,e,s,n):null!==s?(null!==t.i&&(o.textContent=""),ot(o,null,e,s,0,s.length-1)):!n&&null!==l&&lt(l,0,l.length-1),tt&&"svg"===r&&(tt=!1)):(c=o["s-cr"])?c.parentNode.textContent=i:t.i!==i&&(o.data=i)},ft=t=>{const e=t.childNodes;for(const t of e)if(1===t.nodeType){if(t["s-sr"]){const n=t["s-sn"];t.hidden=!1;for(const o of e)if(o!==t)if(o["s-hn"]!==t["s-hn"]||""!==n){if(1===o.nodeType&&(n===o.getAttribute("slot")||n===o["s-sn"])||3===o.nodeType&&n===o["s-sn"]){t.hidden=!0;break}}else if(1===o.nodeType||3===o.nodeType&&""!==o.textContent.trim()){t.hidden=!0;break}}ft(t)}},ut=[],at=t=>{let e,n,o;for(const l of t.childNodes){if(l["s-sr"]&&(e=l["s-cr"])&&e.parentNode){n=e.parentNode.childNodes;const t=l["s-sn"];for(o=n.length-1;o>=0;o--)if(e=n[o],!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==l["s-hn"])if(dt(e,t)){let n=ut.find((t=>t.j===e));Y=!0,e["s-sn"]=e["s-sn"]||t,n?(n.j["s-sh"]=l["s-hn"],n.O=l):(e["s-sh"]=l["s-hn"],ut.push({O:l,j:e})),e["s-sr"]&&ut.map((t=>{dt(t.j,e["s-sn"])&&(n=ut.find((t=>t.j===e)),n&&!t.O&&(t.O=n.O))}))}else ut.some((t=>t.j===e))||ut.push({j:e})}1===l.nodeType&&at(l)}},dt=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,ht=t=>{t.u&&t.u.ref&&t.u.ref(null),t.h&&t.h.map(ht)},pt=(t,e,n)=>{const o=null==t?void 0:t.insertBefore(e,n);return vt(e,t),o},mt=t=>{const e=[];return t&&e.push(...t["s-scs"]||[],t["s-si"],t["s-sc"],...mt(t.parentElement)),e},vt=(t,e,n=!1)=>{var o;if(t&&e&&1===t.nodeType){const l=new Set(mt(e).filter(Boolean));if(l.size&&(null==(o=t.classList)||o.add(...t["s-scs"]=[...l]),t["s-ol"]||n))for(const e of Array.from(t.childNodes))vt(e,t,!0)}},yt=(t,e)=>{e&&!t.C&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.C=e)))},$t=(t,e)=>{if(t.o|=16,!(4&t.o))return yt(t,t.M),g((()=>bt(t,e)));t.o|=512},bt=(t,e)=>{const n=t.t;if(!n)throw Error(`Can't render component <${t.$hostElement$.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let o;return e&&(t.o|=256,t.P&&(t.P.map((([t,e])=>Et(n,t,e))),t.P=void 0),o=Et(n,"componentWillLoad")),wt(o,(()=>St(t,n,e)))},wt=(t,e)=>gt(t)?t.then(e).catch((t=>{console.error(t),e()})):e(),gt=t=>t instanceof Promise||t&&t.then&&"function"==typeof t.then,St=async(t,e,n)=>{var o;const l=t.$hostElement$,s=l["s-rc"];n&&(t=>{const e=t.R,n=t.$hostElement$,o=e.o,l=((t,e)=>{var n;const o=G(e),l=i.get(o);if(t=11===t.nodeType?t:u,l)if("string"==typeof l){let s,r=B.get(t=t.head||t);if(r||B.set(t,r=new Set),!r.has(o)){{s=u.createElement("style"),s.innerHTML=l;const o=null!=(n=a.A)?n:j(u);null!=o&&s.setAttribute("nonce",o),(!(1&e.o)||1&e.o&&"HEAD"!==t.nodeName)&&t.insertBefore(s,t.querySelector("link"))}4&e.o&&(s.innerHTML+=c),r&&r.add(o)}}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return o})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&o&&2&o&&(n["s-sc"]=l,n.classList.add(l+"-h"),2&o&&n.classList.add(l+"-s"))})(t);kt(t,e,l,n),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=null!=(o=l["s-p"])?o:[],n=()=>jt(t);0===e.length?n():(Promise.all(e).then(n),t.o|=4,e.length=0)}},kt=(t,e,n,o)=>{try{e=e.render(),t.o&=-17,t.o|=2,((t,e,n=!1)=>{var o,l,s,r;const i=t.$hostElement$,c=t.R,f=t.T||F(null,null),d=(t=>t&&t.v===H)(e)?e:T(null,null,e);if(P=i.tagName,n&&d.u)for(const t of Object.keys(d.u))i.hasAttribute(t)&&!["key","ref","style","class"].includes(t)&&(d.u[t]=i[t]);if(d.v=null,d.o|=4,t.T=d,d.$=f.$=i.shadowRoot||i,M=i["s-sc"],X=!!(1&c.o),x=i["s-cr"],Y=!1,ct(f,d,n),a.o|=1,Z){at(d.$);for(const t of ut){const e=t.j;if(!e["s-ol"]){const t=u.createTextNode("");t["s-nr"]=e,pt(e.parentNode,e["s-ol"]=t,e)}}for(const t of ut){const e=t.j,i=t.O;if(i){const t=i.parentNode;let n=i.nextSibling;{let s=null==(o=e["s-ol"])?void 0:o.previousSibling;for(;s;){let o=null!=(l=s["s-nr"])?l:null;if(o&&o["s-sn"]===e["s-sn"]&&t===o.parentNode){for(o=o.nextSibling;o===e||(null==o?void 0:o["s-sr"]);)o=null==o?void 0:o.nextSibling;if(!o||!o["s-nr"]){n=o;break}}s=s.previousSibling}}(!n&&t!==e.parentNode||e.nextSibling!==n)&&e!==n&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),pt(t,e,n),1===e.nodeType&&(e.hidden=null!=(s=e["s-ih"])&&s)),e&&"function"==typeof i["s-rf"]&&i["s-rf"](e)}else 1===e.nodeType&&(n&&(e["s-ih"]=null!=(r=e.hidden)&&r),e.hidden=!0)}}Y&&ft(d.$),a.o&=-2,ut.length=0,x=void 0})(t,e,o)}catch(e){s(e,t.$hostElement$)}return null},jt=t=>{const e=t.$hostElement$,n=t.t,o=t.M;64&t.o||(t.o|=64,Ct(e),Et(n,"componentDidLoad"),t.F(e),o||Ot()),t.H(e),t.C&&(t.C(),t.C=void 0),512&t.o&&w((()=>$t(t,!1))),t.o&=-517},Ot=()=>{Ct(u.documentElement),w((()=>q(f,"appload",{detail:{namespace:"video-editor"}})))},Et=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){s(t)}},Ct=t=>t.classList.add("hydrated"),Mt=(t,e,o)=>{var l,r;const i=t.prototype;if(e.L||e.N||t.watchers){t.watchers&&!e.N&&(e.N=t.watchers);const c=Object.entries(null!=(l=e.L)?l:{});if(c.map((([t,[l]])=>{31&l||2&o&&32&l?Object.defineProperty(i,t,{get(){return((t,e)=>n(this).D.get(e))(0,t)},set(o){((t,e,o,l)=>{const r=n(t);if(!r)throw Error(`Couldn't find host element for "${l.S}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);const i=r.$hostElement$,c=r.D.get(e),f=r.o,u=r.t;if(o=((t,e)=>null==t||k(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(o,l.L[e][0]),(!(8&f)||void 0===c)&&o!==c&&(!Number.isNaN(c)||!Number.isNaN(o))&&(r.D.set(e,o),u)){if(l.N&&128&f){const t=l.N[e];t&&t.map((t=>{try{u[t](o,c,e)}catch(t){s(t,i)}}))}2==(18&f)&&$t(r,!1)}})(this,t,o,e)},configurable:!0,enumerable:!0}):1&o&&64&l&&Object.defineProperty(i,t,{value(...e){var o;const l=n(this);return null==(o=null==l?void 0:l.U)?void 0:o.then((()=>{var n;return null==(n=l.t)?void 0:n[t](...e)}))}})})),1&o){const o=new Map;i.attributeChangedCallback=function(t,l,s){a.jmp((()=>{var r;const c=o.get(t);if(this.hasOwnProperty(c))s=this[c],delete this[c];else{if(i.hasOwnProperty(c)&&"number"==typeof this[c]&&this[c]==s)return;if(null==c){const o=n(this),i=null==o?void 0:o.o;if(i&&!(8&i)&&128&i&&s!==l){const n=o.t,i=null==(r=e.N)?void 0:r[t];null==i||i.forEach((e=>{null!=n[e]&&n[e].call(n,s,l,t)}))}return}}this[c]=(null!==s||"boolean"!=typeof this[c])&&s}))},t.observedAttributes=Array.from(new Set([...Object.keys(null!=(r=e.N)?r:{}),...c.filter((([t,e])=>15&e[0])).map((([t,e])=>{const n=e[1]||t;return o.set(n,t),n}))]))}}return t},xt=t=>{Et(t,"connectedCallback")},Pt=t=>{Et(t,"disconnectedCallback")},Rt=(t,o={})=>{var l;const d=[],p=o.exclude||[],m=f.customElements,v=u.head,y=v.querySelector("meta[charset]"),$=u.createElement("style"),b=[];let w,g=!0;Object.assign(a,o),a.l=new URL(o.resourcesUrl||"./",u.baseURI).href;let S=!1;if(t.map((t=>{t[1].map((o=>{var l;const c={o:o[0],S:o[1],L:o[2],W:o[3]};4&c.o&&(S=!0),c.L=o[2],c.W=o[3],c.N=null!=(l=o[4])?l:{};const f=c.S,v=class extends HTMLElement{constructor(t){if(super(t),this.hasRegisteredEventListeners=!1,((t,n)=>{const o={o:0,$hostElement$:t,R:n,D:new Map};o.U=new Promise((t=>o.H=t)),o.q=new Promise((t=>o.F=t)),t["s-p"]=[],t["s-rc"]=[],e.set(t,o)})(t=this,c),1&c.o)if(t.shadowRoot){if("open"!==t.shadowRoot.mode)throw Error(`Unable to re-use existing shadow root for ${c.S}! Mode is set to ${t.shadowRoot.mode} but Stencil only supports open shadow roots.`)}else t.attachShadow({mode:"open"})}connectedCallback(){const t=n(this);this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0,Tt(this,t,c.W)),w&&(clearTimeout(w),w=null),g?b.push(this):a.jmp((()=>(t=>{if(!(1&a.o)){const e=n(t),o=e.R,l=()=>{};if(1&e.o)Tt(t,e,o.W),(null==e?void 0:e.t)?xt(e.t):(null==e?void 0:e.q)&&e.q.then((()=>xt(e.t)));else{e.o|=1,12&o.o&&(t=>{const e=t["s-cr"]=u.createComment("");e["s-cn"]=!0,pt(t,e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){yt(e,e.M=n);break}}o.L&&Object.entries(o.L).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n)=>{let o;if(!(32&e.o)){if(e.o|=32,n.B){const t=(t=>{const e=t.S.replace(/-/g,"_"),n=t.B;if(!n)return;const o=r.get(n);return o?o[e]:import(`./${n}.entry.js`).then((t=>(r.set(n,t),t[e])),s)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/})(n);if(t&&"then"in t){const e=()=>{};o=await t,e()}else o=t;if(!o)throw Error(`Constructor for "${n.S}#${e.G}" was not found`);o.isProxied||(n.N=o.watchers,Mt(o,n,2),o.isProxied=!0);const l=()=>{};e.o|=8;try{new o(e)}catch(t){s(t)}e.o&=-9,e.o|=128,l(),xt(e.t)}else o=t.constructor,customElements.whenDefined(t.localName).then((()=>e.o|=128));if(o&&o.style){let t;"string"==typeof o.style&&(t=o.style);const e=G(n);if(!i.has(e)){const o=()=>{};((t,e,n)=>{let o=i.get(t);h&&n?(o=o||new CSSStyleSheet,"string"==typeof o?o=e:o.replaceSync(e)):o=e,i.set(t,o)})(e,t,!!(1&n.o)),o()}}}const l=e.M,c=()=>$t(e,!0);l&&l["s-rc"]?l["s-rc"].push(c):c()})(t,e,o)}l()}})(this)))}disconnectedCallback(){a.jmp((()=>(async()=>{if(!(1&a.o)){const t=n(this);t.I&&(t.I.map((t=>t())),t.I=void 0),(null==t?void 0:t.t)?Pt(t.t):(null==t?void 0:t.q)&&t.q.then((()=>Pt(t.t)))}})()))}componentOnReady(){return n(this).q}};c.B=t[0],p.includes(f)||m.get(f)||(d.push(f),m.define(f,Mt(v,c,1)))}))})),d.length>0&&(S&&($.textContent+=c),$.textContent+=d.sort()+"{visibility:hidden}.hydrated{visibility:inherit}",$.innerHTML.length)){$.setAttribute("data-styles","");const t=null!=(l=a.A)?l:j(u);null!=t&&$.setAttribute("nonce",t),v.insertBefore($,y?y.nextSibling:v.firstChild)}g=!1,b.length?b.map((t=>t.connectedCallback())):a.jmp((()=>w=setTimeout(Ot,30)))},At=(t,e)=>e,Tt=(t,e,n)=>{n&&n.map((([n,o,l])=>{const s=Ht(t,n),r=Ft(e,l),i=Lt(n);a.ael(s,o,r,i),(e.I=e.I||[]).push((()=>a.rel(s,o,r,i)))}))},Ft=(t,e)=>n=>{var o;try{256&t.o?null==(o=t.t)||o[e](n):(t.P=t.P||[]).push([e,n])}catch(t){s(t)}},Ht=(t,e)=>4&e?u:8&e?f:t,Lt=t=>({passive:!!(1&t),capture:!!(2&t)}),Nt=t=>a.A=t;export{At as F,H,Rt as b,W as c,U as g,T as h,d as p,o as r,Nt as s}