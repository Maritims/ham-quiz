import{S as me,i as pe,s as be,k as b,q as T,l as w,m as k,r as q,h as g,n as E,b as L,H as u,O as we,u as y,E as re,R as Ve,a as F,c as P,f as K,g as De,d as Ie,t as ne,T as Te,v as oe,U as ue,x as qe,y as Oe,z as Qe,V as fe,A as Se}from"./paths-4d6c4e3c.js";function Ae(l){for(let e=l.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),n=l[e];l[e]=l[t],l[t]=n}return l}function ke(l,e){const t=Math.floor(Math.random()*l.length),n=l[t];return e.indexOf(n)===-1?n:ke(l,e)}function ce(l,e){const t=[];l.indexOf(e)>-1&&t.push(e);for(let n=0;n<3;n++)t.push(ke(l,t));return Ae(t)}function Be(l){let e,t,n,c,f,o;return{c(){e=b("li"),t=b("button"),n=T(l[0]),this.h()},l(i){e=w(i,"LI",{class:!0});var s=k(e);t=w(s,"BUTTON",{class:!0});var r=k(t);n=q(r,l[0]),r.forEach(g),s.forEach(g),this.h()},h(){E(t,"class",c="btn btn-"+l[3]+" text-start"),t.disabled=l[2],E(e,"class","list-group-item d-grid gap-2")},m(i,s){L(i,e,s),u(e,t),u(t,n),f||(o=we(t,"click",l[7]),f=!0)},p(i,[s]){s&1&&y(n,i[0]),s&8&&c!==(c="btn btn-"+i[3]+" text-start")&&E(t,"class",c),s&4&&(t.disabled=i[2])},i:re,o:re,d(i){i&&g(e),f=!1,o()}}}function He(l,e,t){let n,c,f,{answers:o}=e,{answerText:i}=e,{question:s}=e;const r=Ve(),m=()=>r("answer",{id:s.id,answer:i});return l.$$set=p=>{"answers"in p&&t(5,o=p.answers),"answerText"in p&&t(0,i=p.answerText),"question"in p&&t(1,s=p.question)},l.$$.update=()=>{l.$$.dirty&34&&t(6,n=o.find(p=>p.id===s.id)),l.$$.dirty&67&&t(3,c=n?s.answer===i?"success":"danger":"light"),l.$$.dirty&64&&t(2,f=n!==void 0)},[i,s,f,c,r,o,n,m]}class Me extends me{constructor(e){super(),pe(this,e,He,Be,be,{answers:5,answerText:0,question:1})}}function de(l,e,t){const n=l.slice();return n[11]=e[t],n[13]=t,n}function he(l){let e,t,n,c,f,o=l[6].explanation+"",i;return{c(){e=b("div"),t=b("h4"),n=T("Forklaring"),c=F(),f=b("p"),i=T(o),this.h()},l(s){e=w(s,"DIV",{class:!0,role:!0});var r=k(e);t=w(r,"H4",{class:!0});var m=k(t);n=q(m,"Forklaring"),m.forEach(g),c=P(r),f=w(r,"P",{});var p=k(f);i=q(p,o),p.forEach(g),r.forEach(g),this.h()},h(){E(t,"class","alert-heading"),E(e,"class","alert alert-info"),E(e,"role","alert")},m(s,r){L(s,e,r),u(e,t),u(t,n),u(e,c),u(e,f),u(f,i)},p(s,r){r&64&&o!==(o=s[6].explanation+"")&&y(i,o)},d(s){s&&g(e)}}}function _e(l){let e,t,n,c;function f(s){l[9](s)}function o(s){l[10](s)}let i={answerText:l[11].answer};return l[6]!==void 0&&(i.question=l[6]),l[1]!==void 0&&(i.answers=l[1]),e=new Me({props:i}),oe.push(()=>ue(e,"question",f)),oe.push(()=>ue(e,"answers",o)),e.$on("answer",l[8]),{c(){qe(e.$$.fragment)},l(s){Oe(e.$$.fragment,s)},m(s,r){Qe(e,s,r),c=!0},p(s,r){const m={};r&65&&(m.answerText=s[11].answer),!t&&r&64&&(t=!0,m.question=s[6],fe(()=>t=!1)),!n&&r&2&&(n=!0,m.answers=s[1],fe(()=>n=!1)),e.$set(m)},i(s){c||(K(e.$$.fragment,s),c=!0)},o(s){ne(e.$$.fragment,s),c=!1},d(s){Se(e,s)}}}function ve(l){let e,t,n,c;return{c(){e=b("button"),t=T("Neste"),this.h()},l(f){e=w(f,"BUTTON",{class:!0});var o=k(e);t=q(o,"Neste"),o.forEach(g),this.h()},h(){E(e,"class","btn btn-primary"),e.disabled=l[3]},m(f,o){L(f,e,o),u(e,t),n||(c=we(e,"click",l[7]),n=!0)},p(f,o){o&8&&(e.disabled=f[3])},d(f){f&&g(e),n=!1,c()}}}function ge(l){let e;return{c(){e=b("div"),this.h()},l(t){e=w(t,"DIV",{class:!0});var n=k(e);n.forEach(g),this.h()},h(){E(e,"class","row mt-2")},m(t,n){L(t,e,n)},d(t){t&&g(e)}}}function Ne(l){let e,t,n,c,f,o,i,s,r,m,p=l[0].indexOf(l[6])+1+"",R,z,_=l[0].length+"",Q,W,C=l[6].question+"",j,X,B,Z,S,H,x,Y,$,M,ee,A,V=l[5]&&!l[5].value&&l[6].explanation&&he(l),N=ce(l[0],l[6]),h=[];for(let a=0;a<N.length;a+=1)h[a]=_e(de(l,N,a));const Ee=a=>ne(h[a],1,1,()=>{h[a]=null});let D=l[2]!==l[0][l[0].length-1].id&&ve(l),I=l[3]&&ge();return{c(){e=b("div"),t=b("div"),n=b("div"),c=b("h2"),f=T("Velg korrekt svaralternativ"),o=F(),V&&V.c(),i=F(),s=b("div"),r=b("h5"),m=T("Spørsmål "),R=T(p),z=T(" av "),Q=T(_),W=T(": "),j=T(C),X=F(),B=b("ul");for(let a=0;a<h.length;a+=1)h[a].c();Z=F(),S=b("div"),H=b("div"),x=T("Poeng: "),Y=T(l[4]),$=F(),M=b("div"),D&&D.c(),ee=F(),I&&I.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var d=k(e);t=w(d,"DIV",{class:!0});var v=k(t);n=w(v,"DIV",{class:!0});var O=k(n);c=w(O,"H2",{});var se=k(c);f=q(se,"Velg korrekt svaralternativ"),se.forEach(g),o=P(O),V&&V.l(O),i=P(O),s=w(O,"DIV",{class:!0});var G=k(s);r=w(G,"H5",{class:!0});var U=k(r);m=q(U,"Spørsmål "),R=q(U,p),z=q(U," av "),Q=q(U,_),W=q(U,": "),j=q(U,C),U.forEach(g),X=P(G),B=w(G,"UL",{class:!0});var ae=k(B);for(let le=0;le<h.length;le+=1)h[le].l(ae);ae.forEach(g),G.forEach(g),O.forEach(g),v.forEach(g),Z=P(d),S=w(d,"DIV",{class:!0});var J=k(S);H=w(J,"DIV",{class:!0});var te=k(H);x=q(te,"Poeng: "),Y=q(te,l[4]),te.forEach(g),$=P(J),M=w(J,"DIV",{class:!0});var ie=k(M);D&&D.l(ie),ie.forEach(g),J.forEach(g),ee=P(d),I&&I.l(d),d.forEach(g),this.h()},h(){E(r,"class","card-header"),E(B,"class","list-group list-group-flush"),E(s,"class","card"),E(n,"class","col"),E(t,"class","row"),E(H,"class","col"),E(M,"class","col text-end"),E(S,"class","row mt-2"),E(e,"class","container")},m(a,d){L(a,e,d),u(e,t),u(t,n),u(n,c),u(c,f),u(n,o),V&&V.m(n,null),u(n,i),u(n,s),u(s,r),u(r,m),u(r,R),u(r,z),u(r,Q),u(r,W),u(r,j),u(s,X),u(s,B);for(let v=0;v<h.length;v+=1)h[v].m(B,null);u(e,Z),u(e,S),u(S,H),u(H,x),u(H,Y),u(S,$),u(S,M),D&&D.m(M,null),u(e,ee),I&&I.m(e,null),A=!0},p(a,[d]){if(a[5]&&!a[5].value&&a[6].explanation?V?V.p(a,d):(V=he(a),V.c(),V.m(n,i)):V&&(V.d(1),V=null),(!A||d&65)&&p!==(p=a[0].indexOf(a[6])+1+"")&&y(R,p),(!A||d&1)&&_!==(_=a[0].length+"")&&y(Q,_),(!A||d&64)&&C!==(C=a[6].question+"")&&y(j,C),d&323){N=ce(a[0],a[6]);let v;for(v=0;v<N.length;v+=1){const O=de(a,N,v);h[v]?(h[v].p(O,d),K(h[v],1)):(h[v]=_e(O),h[v].c(),K(h[v],1),h[v].m(B,null))}for(De(),v=N.length;v<h.length;v+=1)Ee(v);Ie()}(!A||d&16)&&y(Y,a[4]),a[2]!==a[0][a[0].length-1].id?D?D.p(a,d):(D=ve(a),D.c(),D.m(M,null)):D&&(D.d(1),D=null),a[3]?I||(I=ge(),I.c(),I.m(e,null)):I&&(I.d(1),I=null)},i(a){if(!A){for(let d=0;d<N.length;d+=1)K(h[d]);A=!0}},o(a){h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)ne(h[d]);A=!1},d(a){a&&g(e),V&&V.d(),Te(h,a),D&&D.d(),I&&I.d()}}}function Ue(l,e,t){let n,c,f,{questions:o}=e,i=[];function s(){m!=o[o.length-1].id?t(2,m++,m):t(3,p=!0)}function r(_){t(1,i=[...i.filter(Q=>Q.id!==_.detail.id),{id:_.detail.id,value:n.answer===_.detail.answer}])}let m=o[0].id,p=!1;function R(_){n=_,t(6,n),t(0,o),t(2,m)}function z(_){i=_,t(1,i)}return l.$$set=_=>{"questions"in _&&t(0,o=_.questions)},l.$$.update=()=>{l.$$.dirty&5&&t(6,n=o.find(_=>_.id===m)),l.$$.dirty&6&&t(5,c=i.find(_=>_.id===m)),l.$$.dirty&2&&t(4,f=i.reduce((_,Q)=>_+=Q.value?1:0,0))},[o,i,m,p,f,c,n,s,r,R,z]}class Pe extends me{constructor(e){super(),pe(this,e,Ue,Ne,be,{questions:0})}}export{Pe as Q};
