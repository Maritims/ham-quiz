import{S as oe,i as ie,s as ce,k as o,q as T,a as z,l as i,m as u,r as A,h as s,c as B,n,b as W,H as e,P as O,N as Q,O as U,E as x,T as de,x as ee,M as ue,y as te,z as ae,u as ne,f as le,t as se,A as re,L as fe}from"../../../chunks/paths-c98d99b0.js";import{p as ve}from"../../../chunks/stores-af9f228c.js";import{Q as he}from"../../../chunks/Quiz-eb24e208.js";function pe(f){let l,c,r,a,b,I,v,V,w,E,y,m,d,H,k,D,P,_,h,t,g,p,L,M,F;return{c(){l=o("div"),c=o("div"),r=o("div"),a=o("h2"),b=T("Kalkulator"),I=z(),v=o("p"),V=T("Fyll ut et av feltene for å beregne bølgelengde eller frekvens."),w=z(),E=o("div"),y=o("div"),m=o("div"),d=o("input"),H=z(),k=o("label"),D=T("Bølgelengde (m)"),P=z(),_=o("div"),h=o("div"),t=o("input"),g=z(),p=o("label"),L=T("Frekvens (MHz)"),this.h()},l($){l=i($,"DIV",{class:!0});var q=u(l);c=i(q,"DIV",{class:!0});var j=u(c);r=i(j,"DIV",{class:!0});var N=u(r);a=i(N,"H2",{});var G=u(a);b=A(G,"Kalkulator"),G.forEach(s),I=B(N),v=i(N,"P",{});var J=u(v);V=A(J,"Fyll ut et av feltene for å beregne bølgelengde eller frekvens."),J.forEach(s),N.forEach(s),j.forEach(s),w=B(q),E=i(q,"DIV",{class:!0});var S=u(E);y=i(S,"DIV",{class:!0});var R=u(y);m=i(R,"DIV",{class:!0});var C=u(m);d=i(C,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),H=B(C),k=i(C,"LABEL",{for:!0});var X=u(k);D=A(X,"Bølgelengde (m)"),X.forEach(s),C.forEach(s),R.forEach(s),P=B(S),_=i(S,"DIV",{class:!0});var Y=u(_);h=i(Y,"DIV",{class:!0});var K=u(h);t=i(K,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),g=B(K),p=i(K,"LABEL",{for:!0});var Z=u(p);L=A(Z,"Frekvens (MHz)"),Z.forEach(s),K.forEach(s),Y.forEach(s),S.forEach(s),q.forEach(s),this.h()},h(){n(r,"class","col"),n(c,"class","row"),n(d,"type","number"),n(d,"class","form-control"),n(d,"id","wavelength"),n(d,"placeholder","Bølgelengde (m)"),n(k,"for","frequency"),n(m,"class","form-floating mb-3"),n(y,"class","col"),n(t,"type","number"),n(t,"class","form-control"),n(t,"id","frequency"),n(t,"placeholder","Frekvens (MHz)"),n(p,"for","frequency"),n(h,"class","form-floating mb-3"),n(_,"class","col"),n(E,"class","row"),n(l,"class","container")},m($,q){W($,l,q),e(l,c),e(c,r),e(r,a),e(a,b),e(r,I),e(r,v),e(v,V),e(l,w),e(l,E),e(E,y),e(y,m),e(m,d),O(d,f[1]),e(m,H),e(m,k),e(k,D),e(E,P),e(E,_),e(_,h),e(h,t),O(t,f[0]),e(h,g),e(h,p),e(p,L),M||(F=[Q(d,"input",f[2]),Q(d,"change",f[3]),Q(t,"input",f[4]),Q(t,"change",f[5])],M=!0)},p($,[q]){q&2&&U(d.value)!==$[1]&&O(d,$[1]),q&1&&U(t.value)!==$[0]&&O(t,$[0])},i:x,o:x,d($){$&&s(l),M=!1,de(F)}}}function _e(f,l,c){let r,a;function b(){a=U(this.value),c(1,a)}const I=()=>c(0,r=300/a);function v(){r=U(this.value),c(0,r)}return[r,a,b,I,v,()=>c(1,a=300*r)]}class me extends oe{constructor(l){super(),ie(this,l,_e,pe,ce,{})}}function ge(f){let l,c,r,a,b,I,v,V,w=f[0].data.title+"",E,y,m,d=f[0].data.description+"",H,k,D,P,_,h;return D=new me({}),_=new he({props:{questions:f[0].data.questions}}),{c(){l=o("meta"),r=z(),a=o("section"),b=o("div"),I=o("div"),v=o("div"),V=o("h1"),E=T(w),y=z(),m=o("p"),H=T(d),k=z(),ee(D.$$.fragment),P=z(),ee(_.$$.fragment),this.h()},l(t){const g=ue("svelte-nperlo",document.head);l=i(g,"META",{name:!0,content:!0}),g.forEach(s),r=B(t),a=i(t,"SECTION",{});var p=u(a);b=i(p,"DIV",{class:!0});var L=u(b);I=i(L,"DIV",{class:!0});var M=u(I);v=i(M,"DIV",{class:!0});var F=u(v);V=i(F,"H1",{});var $=u(V);E=A($,w),$.forEach(s),y=B(F),m=i(F,"P",{});var q=u(m);H=A(q,d),q.forEach(s),F.forEach(s),M.forEach(s),L.forEach(s),k=B(p),te(D.$$.fragment,p),P=B(p),te(_.$$.fragment,p),p.forEach(s),this.h()},h(){document.title="Båndplan",n(l,"name","description"),n(l,"content",c=f[0].data.title),n(v,"class","col"),n(I,"class","row"),n(b,"class","container")},m(t,g){e(document.head,l),W(t,r,g),W(t,a,g),e(a,b),e(b,I),e(I,v),e(v,V),e(V,E),e(v,y),e(v,m),e(m,H),e(a,k),ae(D,a,null),e(a,P),ae(_,a,null),h=!0},p(t,[g]){(!h||g&1&&c!==(c=t[0].data.title))&&n(l,"content",c),(!h||g&1)&&w!==(w=t[0].data.title+"")&&ne(E,w),(!h||g&1)&&d!==(d=t[0].data.description+"")&&ne(H,d);const p={};g&1&&(p.questions=t[0].data.questions),_.$set(p)},i(t){h||(le(D.$$.fragment,t),le(_.$$.fragment,t),h=!0)},o(t){se(D.$$.fragment,t),se(_.$$.fragment,t),h=!1},d(t){s(l),t&&s(r),t&&s(a),re(D),re(_)}}}function Ee(f,l,c){let r;return fe(f,ve,a=>c(0,r=a)),[r]}class qe extends oe{constructor(l){super(),ie(this,l,Ee,ge,ce,{})}}export{qe as default};
