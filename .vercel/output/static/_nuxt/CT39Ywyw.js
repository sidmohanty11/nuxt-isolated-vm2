import{b as N,v as S,E as g,L as p,e as E,D as a,M as h,y as $}from"./ZlESflv6.js";import{d as w,g as x,t as B,M as T,N as A}from"./Bznvh5Qw.js";const C=w({name:"block-styles",components:{InlinedStyles:S},props:["block","context"],data(){return{TARGET:g}},computed:{canShowBlock(){const e=this.block;return p(e.hide)?!e.hide:p(e.show)?e.show:!0},css(){var e,i,c;const o=this.block,s=o.responsiveStyles,r=this.context.content,l=E(((e=r==null?void 0:r.meta)==null?void 0:e.breakpoints)||{}),m=s==null?void 0:s.large,u=s==null?void 0:s.medium,y=s==null?void 0:s.small,t=o.id;if(!t)return"";const k=m?a({className:t,styles:m}):"",b=u?a({className:t,styles:u,mediaQuery:h("medium",l)}):"",f=y?a({className:t,styles:y,mediaQuery:h("small",l)}):"",n=o.animations&&o.animations.find(d=>d.trigger==="hover");let v="";if(n){const d=((c=(i=n.steps)==null?void 0:i[1])==null?void 0:c.styles)||{};v=a({className:`${t}:hover`,styles:{...d,transition:`all ${n.duration}s ${$(n.easing)}`,transitionDelay:n.delay?`${n.delay}s`:"0s"}})||""}return[k,b,f,v].join(" ")}}});function D(e,i,c,o,s,r){const l=x("InlinedStyles");return e.TARGET!=="reactNative"&&e.css&&e.canShowBlock?(B(),T(l,{key:0,id:"builderio-block",styles:e.css,nonce:e.context.nonce},null,8,["styles","nonce"])):A("",!0)}const I=N(C,[["render",D]]);export{I as default};
