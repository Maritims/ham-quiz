import{S as x,i as ee,s as le,k as a,q as P,a as V,l as r,m as i,r as z,h as s,c as q,n as l,b as te,H as e,N as M,O as N,P as A,E as $,Q as ae}from"./paths-4d6c4e3c.js";function re(h){let n,d,t,u,k,D,g,B,K,p,b,_,o,S,E,T,U,y,m,c,W,I,C,O,Q;return{c(){n=a("div"),d=a("div"),t=a("div"),u=a("h2"),k=P("Kalkulator"),D=V(),g=a("p"),B=P("Fyll ut et av feltene for å beregne bølgelengde eller frekvens."),K=V(),p=a("div"),b=a("div"),_=a("div"),o=a("input"),S=V(),E=a("label"),T=P("Bølgelengde (m)"),U=V(),y=a("div"),m=a("div"),c=a("input"),W=V(),I=a("label"),C=P("Frekvens (MHz)"),this.h()},l(v){n=r(v,"DIV",{class:!0});var f=i(n);d=r(f,"DIV",{class:!0});var j=i(d);t=r(j,"DIV",{class:!0});var F=i(t);u=r(F,"H2",{});var G=i(u);k=z(G,"Kalkulator"),G.forEach(s),D=q(F),g=r(F,"P",{});var J=i(g);B=z(J,"Fyll ut et av feltene for å beregne bølgelengde eller frekvens."),J.forEach(s),F.forEach(s),j.forEach(s),K=q(f),p=r(f,"DIV",{class:!0});var H=i(p);b=r(H,"DIV",{class:!0});var R=i(b);_=r(R,"DIV",{class:!0});var w=i(_);o=r(w,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),S=q(w),E=r(w,"LABEL",{for:!0});var X=i(E);T=z(X,"Bølgelengde (m)"),X.forEach(s),w.forEach(s),R.forEach(s),U=q(H),y=r(H,"DIV",{class:!0});var Y=i(y);m=r(Y,"DIV",{class:!0});var L=i(m);c=r(L,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),W=q(L),I=r(L,"LABEL",{for:!0});var Z=i(I);C=z(Z,"Frekvens (MHz)"),Z.forEach(s),L.forEach(s),Y.forEach(s),H.forEach(s),f.forEach(s),this.h()},h(){l(t,"class","col"),l(d,"class","row"),l(o,"type","number"),l(o,"class","form-control"),l(o,"id","wavelength"),l(o,"placeholder","Bølgelengde (m)"),l(E,"for","frequency"),l(_,"class","form-floating mb-3"),l(b,"class","col"),l(c,"type","number"),l(c,"class","form-control"),l(c,"id","frequency"),l(c,"placeholder","Frekvens (MHz)"),l(I,"for","frequency"),l(m,"class","form-floating mb-3"),l(y,"class","col"),l(p,"class","row"),l(n,"class","container")},m(v,f){te(v,n,f),e(n,d),e(d,t),e(t,u),e(u,k),e(t,D),e(t,g),e(g,B),e(n,K),e(n,p),e(p,b),e(b,_),e(_,o),M(o,h[1]),e(_,S),e(_,E),e(E,T),e(p,U),e(p,y),e(y,m),e(m,c),M(c,h[0]),e(m,W),e(m,I),e(I,C),O||(Q=[N(o,"input",h[2]),N(o,"change",h[3]),N(c,"input",h[4]),N(c,"change",h[5])],O=!0)},p(v,[f]){f&2&&A(o.value)!==v[1]&&M(o,v[1]),f&1&&A(c.value)!==v[0]&&M(c,v[0])},i:$,o:$,d(v){v&&s(n),O=!1,ae(Q)}}}function se(h,n,d){let t,u;function k(){u=A(this.value),d(1,u)}const D=()=>d(0,t=300/u);function g(){t=A(this.value),d(0,t)}return[t,u,k,D,g,()=>d(1,u=300*t)]}class oe extends x{constructor(n){super(),ee(this,n,se,re,le,{})}}export{oe as W};
