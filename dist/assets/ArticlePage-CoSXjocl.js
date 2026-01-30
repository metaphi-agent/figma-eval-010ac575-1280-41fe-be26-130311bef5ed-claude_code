import{j as e,r as i}from"./index-BYi4hJCh.js";function u({title:s,subtitle:a,author:t}){return e.jsx("div",{className:"bg-[--color-primary] text-white py-20 px-6",children:e.jsxs("div",{className:"content-container",children:[a&&e.jsx("p",{className:"text-sm font-bold uppercase tracking-[2px] mb-8",children:a}),e.jsx("h1",{className:"text-[58px] font-bold leading-[70px] tracking-[-1px] mb-12 max-w-[780px]",children:s}),t&&e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("img",{src:t.avatar,alt:t.name,className:"w-[100px] h-[100px] rounded-full object-cover",loading:"eager"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:t.name}),e.jsx("p",{className:"text-base opacity-90 mb-3",children:t.tagline}),e.jsx("div",{className:"flex items-center gap-4",children:t.socials.map((r,n)=>e.jsx("a",{href:r.url,className:"text-white hover:opacity-80 transition-opacity duration-150",target:"_blank",rel:"noopener noreferrer",children:r.icon},n))})]})]})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...s)=>s.filter((a,t,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:d,...h},m)=>i.createElement("svg",{ref:m,...f,width:a,height:a,stroke:s,strokeWidth:r?Number(t)*24/Number(a):t,className:l("lucide",n),...h},[...d.map(([x,p])=>i.createElement(x,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(s,a)=>{const t=i.forwardRef(({className:r,...n},o)=>i.createElement(b,{ref:o,iconNode:a,className:l(`lucide-${g(s)}`,r),...n}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=c("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=c("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=c("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);function k(){const s={name:"SAMUEL AUDLEY",tagline:"Saving the world. Shaping the world",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",socials:[{icon:e.jsx(v,{size:20}),url:"#"},{icon:e.jsx(y,{size:20}),url:"#"},{icon:e.jsx(w,{size:20}),url:"#"},{icon:e.jsx(j,{size:20}),url:"#"}]};return e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx(u,{title:"How To Protect Computer. Very Useful Tips",subtitle:"SPLASHPROOF DESIGN",author:s}),e.jsx("div",{className:"content-container py-16",children:e.jsxs("article",{className:"space-y-12",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-[42px] font-bold text-[--color-text-primary] leading-[52px] tracking-[-0.4px] mb-6",children:"Branding"}),e.jsx("p",{className:"text-secondary text-base leading-[26px] mb-6",children:"This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again."}),e.jsx("p",{className:"text-secondary text-base leading-[26px]",children:"For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-[22px] font-medium text-[--color-text-primary] leading-8 mb-4",children:"Perfect for Your"}),e.jsx("p",{className:"text-secondary text-base leading-[26px]",children:"She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment."})]}),e.jsxs("div",{children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=800&fit=crop",alt:"Portrait",className:"w-full h-auto rounded-lg",loading:"lazy"}),e.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-widest mt-3",children:"There have not been any since"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-[22px] font-medium text-[--color-text-primary] leading-8 mb-6",children:"The Fall Report"}),e.jsx("p",{className:"text-secondary text-base leading-[26px] mb-8",children:"This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"w-3.5 h-4 flex-shrink-0 mt-1.5",children:e.jsx("div",{className:"w-3.5 h-3.5 rounded-full border-2 border-[--color-text-primary]"})}),e.jsx("p",{className:"text-[--color-text-primary] text-lg font-medium leading-7",children:"Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you."})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"w-3.5 h-4 flex-shrink-0 mt-1.5",children:e.jsx("div",{className:"w-3.5 h-3.5 rounded-full border-2 border-[--color-text-primary]"})}),e.jsx("p",{className:"text-[--color-text-primary] text-lg font-medium leading-7",children:"So saying he unbuckled his baldric with the bugle, took a feather from his cap, and gave them to Wamba."})]})]}),e.jsx("p",{className:"text-secondary text-base leading-[26px] mt-8",children:"She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment."})]})]})})]})}export{k as default};
