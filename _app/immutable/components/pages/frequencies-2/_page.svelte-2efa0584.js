import{S as J,i as K,s as R,k as f,a as S,q as W,x as k,M as U,l as p,h as o,c as V,m as $,r as y,y as B,n as g,H as a,b as L,z as N,u as O,f as j,t as F,A as G,L as X}from"../../../chunks/paths-4d6c4e3c.js";import{p as Y}from"../../../chunks/stores-8badb64f.js";import{Q as Z}from"../../../chunks/Quiz-31cea8f3.js";import{W as x}from"../../../chunks/Wavelength-cd83eb05.js";function tt(c){let n,_,d,e,h,v,i,E,q=c[0].data.title+"",I,A,w,z=c[0].data.description+"",b,C,m,H,l,u;return m=new x({}),l=new Z({props:{questions:c[0].data.questions}}),{c(){n=f("meta"),d=S(),e=f("section"),h=f("div"),v=f("div"),i=f("div"),E=f("h1"),I=W(q),A=S(),w=f("p"),b=W(z),C=S(),k(m.$$.fragment),H=S(),k(l.$$.fragment),this.h()},l(t){const s=U("svelte-nperlo",document.head);n=p(s,"META",{name:!0,content:!0}),s.forEach(o),d=V(t),e=p(t,"SECTION",{});var r=$(e);h=p(r,"DIV",{class:!0});var M=$(h);v=p(M,"DIV",{class:!0});var P=$(v);i=p(P,"DIV",{class:!0});var D=$(i);E=p(D,"H1",{});var Q=$(E);I=y(Q,q),Q.forEach(o),A=V(D),w=p(D,"P",{});var T=$(w);b=y(T,z),T.forEach(o),D.forEach(o),P.forEach(o),M.forEach(o),C=V(r),B(m.$$.fragment,r),H=V(r),B(l.$$.fragment,r),r.forEach(o),this.h()},h(){document.title="Båndplan",g(n,"name","description"),g(n,"content",_=c[0].data.title),g(i,"class","col"),g(v,"class","row"),g(h,"class","container")},m(t,s){a(document.head,n),L(t,d,s),L(t,e,s),a(e,h),a(h,v),a(v,i),a(i,E),a(E,I),a(i,A),a(i,w),a(w,b),a(e,C),N(m,e,null),a(e,H),N(l,e,null),u=!0},p(t,[s]){(!u||s&1&&_!==(_=t[0].data.title))&&g(n,"content",_),(!u||s&1)&&q!==(q=t[0].data.title+"")&&O(I,q),(!u||s&1)&&z!==(z=t[0].data.description+"")&&O(b,z);const r={};s&1&&(r.questions=t[0].data.questions),l.$set(r)},i(t){u||(j(m.$$.fragment,t),j(l.$$.fragment,t),u=!0)},o(t){F(m.$$.fragment,t),F(l.$$.fragment,t),u=!1},d(t){o(n),t&&o(d),t&&o(e),G(m),G(l)}}}function et(c,n,_){let d;return X(c,Y,e=>_(0,d=e)),[d]}class rt extends J{constructor(n){super(),K(this,n,et,tt,R,{})}}export{rt as default};
