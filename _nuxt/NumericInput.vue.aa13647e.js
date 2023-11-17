import{br as B,dr as o,ds as E,dt as h,dH as n,c3 as f,dV as u,dI as m,dT as x,dW as b,eC as S,bn as j,dG as i,bh as A,bs as l,ao as U,dO as c,bm as a,dp as D,dU as M,dJ as W,dl as F,fv as O}from"./injective.5ec62b21.js";const te=B({__name:"InfoTooltip",props:{lg:Boolean,tooltip:{type:String,default:""}},setup(s){return(d,e)=>{const r=b,p=S;return o(),E(p,null,{default:h(()=>[n("div",null,[f(r,{name:"circle-info",class:u(["text-gray-700 dark:text-gray-200",{"w-4 h-4 min-w-4":s.lg,"w-3 h-3 min-w-3":!s.lg}])},null,8,["class"])])]),content:h(()=>[n("span",null,m(s.tooltip),1),x(d.$slots,"link")]),_:3})}}}),z={class:"dark:bg-gray-700 bg-gray-200 dark:text-green-500 text-accent-200 p-4 rounded-xl flex"},G={class:"flex-1"},H=B({__name:"InlineNotification",emits:["close"],setup(s,{emit:d}){const e=setTimeout(()=>{r()},5e3);function r(){clearTimeout(e),d("close")}return j(()=>{clearTimeout(e)}),(p,v)=>{const _=b;return o(),i("div",z,[n("p",G,[x(p.$slots,"default")]),n("div",{class:"items-start",onClick:r},[n("button",null,[f(_,{name:"close","is-md":""})])])])}}}),J={class:"relative"},P={class:"flex items-center"},q=["for"],K={key:1,class:"leading-none"},L={key:0,class:"text-accent-200 font-normal text-xs"},Q={class:"no-shadow flex items-center justify-between"},R=["onClick"],X={key:0,class:"mt-4"},Y={inheritAttrs:!1,customOptions:{}},se=B({...Y,__name:"NumericInput",props:{lg:Boolean,md:Boolean,sm:Boolean,round:Boolean,valid:Boolean,disabled:Boolean,errorSmall:Boolean,isInjToken:Boolean,inputTransparentBg:Boolean,showErrorBelowInput:Boolean,isDense:Boolean,errors:{type:Array,default:()=>[]},max:{type:String,default:""}},emits:["update:max","update:modelValue"],setup(s,{emit:d}){const e=s,r=A(!1),p=l(()=>({"input-lg":e.lg,"input-round":e.round,"input-sm":e.sm,"input-md":e.md,"input-bg-transparent":e.inputTransparentBg})),v=l(()=>{const t=[];return t.push(e.lg?"mt-2":"mt-1"),(e.errorSmall||e.sm)&&t.push("text-xs"),t.join(" ")}),_=l(()=>e.lg?["text-base","pr-2"]:["px-2","py-1","mr-2","border","text-xs"]),k=l(()=>{const t=["w-full "];return e.disabled&&t.push("is-disabled"),e.lg&&t.push("flex-grow"),e.valid&&t.push("is-valid"),!e.valid&&e.errors.length>0&&t.push("is-invalid"),t.join(" ")}),g=l(()=>e.errors.length>0?e.errors[0]:null),y=l(()=>new U(e.max).gt(0)),I=l(()=>!!g.value&&(e.showErrorBelowInput||e.lg)),$=l(()=>!!g.value&&!e.showErrorBelowInput);function T(t){d("update:modelValue",t)}function C(){d("update:modelValue",e.max),d("update:max"),e.isInjToken&&(r.value=!0)}return(t,w)=>{const N=O,V=H;return o(),i("div",{class:u(["input-wrap w-full",a(k)])},[n("div",J,[n("div",P,[s.lg?c("",!0):(o(),i("label",{key:0,for:t.$attrs.id,class:"block text-xs font-semibold text-gray-700 dark:text-gray-200"},m(t.$attrs.label||""),9,q)),t.$slots.context?(o(),i("div",K,[x(t.$slots,"context")])):c("",!0)]),a($)&&!s.lg?(o(),i("div",L,m(a(g)),1)):c("",!0),n("div",{class:u({"mt-2":!s.isDense&&!s.showErrorBelowInput,"input-wrapper":!s.inputTransparentBg})},[n("div",Q,[f(N,D(t.$attrs,{class:[a(p),"text-gray-700 dark:text-gray-200 input"],disabled:s.disabled,"onUpdate:modelValue":T}),null,16,["class","disabled"]),n("div",{class:u(["addon flex shrink-0 items-center",{"pr-3":!s.lg&&!s.md}])},[a(y)?(o(),i("span",{key:0,class:"cursor-pointer",onClick:M(C,["stop"])},[n("span",{class:u(["tracking-1 rounded border-gray-400 uppercase text-gray-700 dark:border-gray-700 dark:text-gray-400",a(_)])},m(t.$t("max")),3)],8,R)):c("",!0),x(t.$slots,"addon")],2)])],2),a(I)?(o(),i("span",{key:1,class:u(["text-accent-200 font-normal",a(v)])},m(a(g)),3)):c("",!0)]),f(F,{name:"fade-in-out"},{default:h(()=>[a(r)?(o(),i("div",X,[f(V,{class:"text-xs",onClose:w[0]||(w[0]=Z=>r.value=!1)},{default:h(()=>[W(m(t.$t("injAmountWithFeeBuffer")),1)]),_:1})])):c("",!0)]),_:1})],2)}}});export{te as _,se as a};
