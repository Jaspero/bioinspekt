import{S as Pt,i as St,s as Ut,C as Mt,k as f,a as h,q as k,e as Tt,l as c,m as u,h as o,c as d,r as E,D as ht,n as l,E as N,b as v,F as s,G as Be,f as w,B as G,H as Nt,I as Kt,J as Bt,w as P,x as S,p as Gt,y as U,t as O,z as D,K as Ft,L as xt,M as Ht,N as qt}from"../../chunks/index-6479a5d3.js";import{p as Wt}from"../../chunks/stores-35e29d7e.js";import{T as M}from"../../chunks/Text-5145982c.js";import{M as dt}from"../../chunks/Margin-9f472b34.js";function Jt(i){const e=i-1;return e*e*e+1}function Xt(i,{delay:e=0,duration:a=400,easing:t=Jt,x:r=0,y:g=0,opacity:I=0}={}){const C=getComputedStyle(i),_=+C.opacity,m=C.transform==="none"?"":C.transform,z=_*(1-I);return{delay:e,duration:a,easing:t,css:(j,A)=>`
			transform: ${m} translate(${(1-j)*r}px, ${(1-j)*g}px);
			opacity: ${_-z*A}`}}function Zt(i){let e,a,t,r,g,I,C,_,m,z,j,A,F,T,X,H,q,te;return{c(){e=f("div"),a=f("a"),t=k("Početna"),r=h(),g=f("a"),I=k("Certifikacije"),C=h(),_=f("a"),m=k("Regulative"),z=h(),j=f("a"),A=k("Obrasci"),F=h(),T=f("a"),X=k("Kontakt"),this.h()},l(V){e=c(V,"DIV",{class:!0});var b=u(e);a=c(b,"A",{href:!0,class:!0});var ae=u(a);t=E(ae,"Početna"),ae.forEach(o),r=d(b),g=c(b,"A",{href:!0,class:!0});var Y=u(g);I=E(Y,"Certifikacije"),Y.forEach(o),C=d(b),_=c(b,"A",{href:!0,class:!0});var Q=u(_);m=E(Q,"Regulative"),Q.forEach(o),z=d(b),j=c(b,"A",{href:!0,class:!0});var re=u(j);A=E(re,"Obrasci"),re.forEach(o),F=d(b),T=c(b,"A",{href:!0,class:!0});var y=u(T);X=E(y,"Kontakt"),y.forEach(o),b.forEach(o),this.h()},h(){l(a,"href","/"),l(a,"class","svelte-1hfsdrw"),N(a,"active",i[2].url.pathname==="/"),l(g,"href","/certifikacije"),l(g,"class","svelte-1hfsdrw"),N(g,"active",i[2].url.pathname==="/certifikacije"),l(_,"href","/zakonske-regulative"),l(_,"class","svelte-1hfsdrw"),N(_,"active",i[2].url.pathname==="/zakonske-regulative"),l(j,"href","/obrasci"),l(j,"class","svelte-1hfsdrw"),N(j,"active",i[2].url.pathname==="/obrasci"),l(T,"href","/kontakt"),l(T,"class","svelte-1hfsdrw"),N(T,"active",i[2].url.pathname==="/kontakt"),l(e,"class","menu svelte-1hfsdrw")},m(V,b){v(V,e,b),s(e,a),s(a,t),s(e,r),s(e,g),s(g,I),s(e,C),s(e,_),s(_,m),s(e,z),s(e,j),s(j,A),s(e,F),s(e,T),s(T,X),q||(te=[Be(a,"click",i[5]),Be(g,"click",i[6]),Be(_,"click",i[7]),Be(j,"click",i[8]),Be(T,"click",i[9])],q=!0)},p(V,b){b&4&&N(a,"active",V[2].url.pathname==="/"),b&4&&N(g,"active",V[2].url.pathname==="/certifikacije"),b&4&&N(_,"active",V[2].url.pathname==="/zakonske-regulative"),b&4&&N(j,"active",V[2].url.pathname==="/obrasci"),b&4&&N(T,"active",V[2].url.pathname==="/kontakt")},i(V){H||Mt(()=>{H=Bt(e,Xt,{y:-200,duration:200}),H.start()})},o:G,d(V){V&&o(e),q=!1,Nt(te)}}}function Yt(i){let e=!1,a=()=>{e=!1},t,r,g,I,C,_,m,z,j,A,F,T,X,H,q,te,V,b,ae,Y,Q,re,y,ie,fe,se,Z,ee,Ge,me,pe,W,ce,ze,oe,$e,Fe;Mt(i[3]);let L=i[0]&&Zt(i);return{c(){r=f("div"),g=f("div"),I=f("a"),C=f("img"),m=h(),z=f("header"),j=f("div"),A=f("nav"),F=f("a"),T=k("Početna"),X=h(),H=f("a"),q=k("Certifikacije"),te=h(),V=f("a"),b=k("Regulative"),ae=h(),Y=f("a"),Q=k("Obrasci"),re=h(),y=f("a"),ie=k("Kontakt"),fe=h(),se=f("div"),Z=f("a"),ee=f("img"),me=h(),pe=f("button"),W=f("img"),ze=h(),L&&L.c(),oe=Tt(),this.h()},l(p){r=c(p,"DIV",{class:!0});var R=u(r);g=c(R,"DIV",{class:!0});var ve=u(g);I=c(ve,"A",{href:!0});var _e=u(I);C=c(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(o),ve.forEach(o),R.forEach(o),m=d(p),z=c(p,"HEADER",{class:!0});var xe=u(z);j=c(xe,"DIV",{class:!0});var K=u(j);A=c(K,"NAV",{class:!0});var x=u(A);F=c(x,"A",{href:!0,class:!0});var He=u(F);T=E(He,"Početna"),He.forEach(o),X=d(x),H=c(x,"A",{href:!0,class:!0});var ke=u(H);q=E(ke,"Certifikacije"),ke.forEach(o),te=d(x),V=c(x,"A",{href:!0,class:!0});var qe=u(V);b=E(qe,"Regulative"),qe.forEach(o),ae=d(x),Y=c(x,"A",{href:!0,class:!0});var Ee=u(Y);Q=E(Ee,"Obrasci"),Ee.forEach(o),re=d(x),y=c(x,"A",{href:!0,class:!0});var he=u(y);ie=E(he,"Kontakt"),he.forEach(o),x.forEach(o),K.forEach(o),xe.forEach(o),fe=d(p),se=c(p,"DIV",{class:!0});var Ae=u(se);Z=c(Ae,"A",{href:!0});var we=u(Z);ee=c(we,"IMG",{src:!0,alt:!0,class:!0}),we.forEach(o),me=d(Ae),pe=c(Ae,"BUTTON",{class:!0});var de=u(pe);W=c(de,"IMG",{src:!0,alt:!0,height:!0}),de.forEach(o),Ae.forEach(o),ze=d(p),L&&L.l(p),oe=Tt(),this.h()},h(){ht(C.src,_="/logo.png")||l(C,"src",_),l(C,"alt",""),l(C,"class","logo svelte-1hfsdrw"),l(I,"href","/"),l(g,"class","col-12 flex jc-center"),l(r,"class","grid desktop svelte-1hfsdrw"),l(F,"href","/"),l(F,"class","svelte-1hfsdrw"),N(F,"active",i[2].url.pathname==="/"),l(H,"href","/certifikacije"),l(H,"class","svelte-1hfsdrw"),N(H,"active",i[2].url.pathname==="/certifikacije"),l(V,"href","/zakonske-regulative"),l(V,"class","svelte-1hfsdrw"),N(V,"active",i[2].url.pathname==="/zakonske-regulative"),l(Y,"href","/obrasci"),l(Y,"class","svelte-1hfsdrw"),N(Y,"active",i[2].url.pathname==="/obrasci"),l(y,"href","/kontakt"),l(y,"class","svelte-1hfsdrw"),N(y,"active",i[2].url.pathname==="/kontakt"),l(A,"class","flex jc-center svelte-1hfsdrw"),l(j,"class","grid jc-center h-full"),l(z,"class","nav svelte-1hfsdrw"),ht(ee.src,Ge="/logo.png")||l(ee,"src",Ge),l(ee,"alt",""),l(ee,"class","logo svelte-1hfsdrw"),l(Z,"href","/"),ht(W.src,ce=i[0]?"/icons/close.svg":"/icons/menu.svg")||l(W,"src",ce),l(W,"alt",""),l(W,"height","40"),l(pe,"class","svelte-1hfsdrw"),l(se,"class","nav-mobile svelte-1hfsdrw"),N(se,"shadow",i[1]>0)},m(p,R){v(p,r,R),s(r,g),s(g,I),s(I,C),v(p,m,R),v(p,z,R),s(z,j),s(j,A),s(A,F),s(F,T),s(A,X),s(A,H),s(H,q),s(A,te),s(A,V),s(V,b),s(A,ae),s(A,Y),s(Y,Q),s(A,re),s(A,y),s(y,ie),v(p,fe,R),v(p,se,R),s(se,Z),s(Z,ee),s(se,me),s(se,pe),s(pe,W),v(p,ze,R),L&&L.m(p,R),v(p,oe,R),$e||(Fe=[Be(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(a,100),i[3]()}),Be(pe,"click",i[4])],$e=!0)},p(p,[R]){R&2&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,p[1]),t=setTimeout(a,100)),R&4&&N(F,"active",p[2].url.pathname==="/"),R&4&&N(H,"active",p[2].url.pathname==="/certifikacije"),R&4&&N(V,"active",p[2].url.pathname==="/zakonske-regulative"),R&4&&N(Y,"active",p[2].url.pathname==="/obrasci"),R&4&&N(y,"active",p[2].url.pathname==="/kontakt"),R&1&&!ht(W.src,ce=p[0]?"/icons/close.svg":"/icons/menu.svg")&&l(W,"src",ce),R&2&&N(se,"shadow",p[1]>0),p[0]?L?(L.p(p,R),R&1&&w(L,1)):(L=Zt(p),L.c(),w(L,1),L.m(oe.parentNode,oe)):L&&(L.d(1),L=null)},i(p){w(L)},o:G,d(p){p&&o(r),p&&o(m),p&&o(z),p&&o(fe),p&&o(se),p&&o(ze),L&&L.d(p),p&&o(oe),$e=!1,Nt(Fe)}}}function Qt(i,e,a){let t;Kt(i,Wt,F=>a(2,t=F));let r=!1,g;function I(){a(1,g=window.pageYOffset)}return[r,g,t,I,()=>a(0,r=!r),()=>a(0,r=!1),()=>a(0,r=!1),()=>a(0,r=!1),()=>a(0,r=!1),()=>a(0,r=!1)]}class yt extends Pt{constructor(e){super(),St(this,e,Qt,Yt,Ut,{})}}function ea(i){let e;return{c(){e=k("Vanjski linkovi")},l(a){e=E(a,"Vanjski linkovi")},m(a,t){v(a,e,t)},d(a){a&&o(e)}}}function ta(i){let e,a;return{c(){e=f("u"),a=k("Agencija za plaćanje u poljoprivredi")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Agencija za plaćanje u poljoprivredi"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function aa(i){let e,a;return{c(){e=f("u"),a=k("ARKOD preglednik")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"ARKOD preglednik"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ra(i){let e,a;return{c(){e=f("u"),a=k("EUR-lex")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"EUR-lex"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function sa(i){let e,a;return{c(){e=f("u"),a=k("Ministarstvo poljoprivrede - ekološka proizvodnja")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Ministarstvo poljoprivrede - ekološka proizvodnja"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function la(i){let e,a;return{c(){e=f("u"),a=k("Narodne novine")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Narodne novine"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function oa(i){let e,a;return{c(){e=f("u"),a=k("Organic farming - European Commission")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Organic farming - European Commission"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function na(i){let e,a;return{c(){e=f("u"),a=k("Wiki - Ekološka poljoprivreda (EN)")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Wiki - Ekološka poljoprivreda (EN)"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ia(i){let e;return{c(){e=k("Zakonske regulative")},l(a){e=E(a,"Zakonske regulative")},m(a,t){v(a,e,t)},d(a){a&&o(e)}}}function fa(i){let e,a;return{c(){e=f("u"),a=k("Uredbe ekološke proizvodnje")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Uredbe ekološke proizvodnje"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ca(i){let e,a;return{c(){e=f("u"),a=k("Poticaji")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Poticaji"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ua(i){let e,a;return{c(){e=f("u"),a=k("Eko znak EU")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Eko znak EU"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function $a(i){let e,a;return{c(){e=f("u"),a=k("Eko znak HR")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Eko znak HR"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ma(i){let e;return{c(){e=k("Certifikacije")},l(a){e=E(a,"Certifikacije")},m(a,t){v(a,e,t)},d(a){a&&o(e)}}}function pa(i){let e,a;return{c(){e=f("u"),a=k("Bio Suisse standard")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Bio Suisse standard"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function _a(i){let e,a;return{c(){e=f("u"),a=k("Dunav Soja standard")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Dunav Soja standard"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ha(i){let e,a;return{c(){e=f("u"),a=k("BEZ GMO standard")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"BEZ GMO standard"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function da(i){let e,a;return{c(){e=f("u"),a=k("ZOI i ZOZP")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"ZOI i ZOZP"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ga(i){let e,a;return{c(){e=f("u"),a=k("Dokazana kvaliteta")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Dokazana kvaliteta"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function va(i){let e;return{c(){e=k("Koraci do eko znaka")},l(a){e=E(a,"Koraci do eko znaka")},m(a,t){v(a,e,t)},d(a){a&&o(e)}}}function ka(i){let e,a;return{c(){e=f("u"),a=k("Obavijesti za klijente - kontrola i certifikacija")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Obavijesti za klijente - kontrola i certifikacija"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function Ea(i){let e,a;return{c(){e=f("u"),a=k("Obavijesti klijentima (1)")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Obavijesti klijentima (1)"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function wa(i){let e,a;return{c(){e=f("u"),a=k("Obavijesti klijentima (2)")},l(t){e=c(t,"U",{});var r=u(e);a=E(r,"Obavijesti klijentima (2)"),r.forEach(o)},m(t,r){v(t,e,r),s(e,a)},p:G,d(t){t&&o(e)}}}function ba(i){let e,a,t,r,g,I,C,_,m,z,j,A,F,T,X,H,q,te,V,b,ae,Y,Q,re,y,ie,fe,se,Z,ee,Ge,me,pe,W,ce,ze,oe,$e,Fe,L,p,R,ve,_e,xe,K,x,He,ke,qe,Ee,he,Ae,we,de,gt,Ve,Oe,vt,Re,Ie,kt,Ce,Pe,Et,ne,Se,wt,Te,bt,Ze,Ue,jt,be,De,zt,je,Le,pt,Me,We,Ne,At,Ke,Je,Ot,_t;return r=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ea]},$$scope:{ctx:i}}}),I=new dt({props:{size:".5"}}),m=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ta]},$$scope:{ctx:i}}}),A=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[aa]},$$scope:{ctx:i}}}),X=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ra]},$$scope:{ctx:i}}}),te=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[sa]},$$scope:{ctx:i}}}),ae=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[la]},$$scope:{ctx:i}}}),re=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[oa]},$$scope:{ctx:i}}}),fe=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[na]},$$scope:{ctx:i}}}),ee=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ia]},$$scope:{ctx:i}}}),me=new dt({props:{size:".5"}}),ce=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[fa]},$$scope:{ctx:i}}}),$e=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ca]},$$scope:{ctx:i}}}),p=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ua]},$$scope:{ctx:i}}}),_e=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[$a]},$$scope:{ctx:i}}}),x=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ma]},$$scope:{ctx:i}}}),ke=new dt({props:{size:".5"}}),he=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[pa]},$$scope:{ctx:i}}}),de=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[_a]},$$scope:{ctx:i}}}),Oe=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ha]},$$scope:{ctx:i}}}),Ie=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[da]},$$scope:{ctx:i}}}),Pe=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ga]},$$scope:{ctx:i}}}),Se=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[va]},$$scope:{ctx:i}}}),Te=new dt({props:{size:".5"}}),Ue=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[ka]},$$scope:{ctx:i}}}),De=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[Ea]},$$scope:{ctx:i}}}),Le=new M({props:{size:"small",weight:"bold",color:"primary-c",$$slots:{default:[wa]},$$scope:{ctx:i}}}),{c(){e=f("footer"),a=f("div"),t=f("div"),P(r.$$.fragment),g=h(),P(I.$$.fragment),C=h(),_=f("a"),P(m.$$.fragment),z=h(),j=f("a"),P(A.$$.fragment),F=h(),T=f("a"),P(X.$$.fragment),H=h(),q=f("a"),P(te.$$.fragment),V=h(),b=f("a"),P(ae.$$.fragment),Y=h(),Q=f("a"),P(re.$$.fragment),y=h(),ie=f("a"),P(fe.$$.fragment),se=h(),Z=f("div"),P(ee.$$.fragment),Ge=h(),P(me.$$.fragment),pe=h(),W=f("a"),P(ce.$$.fragment),ze=h(),oe=f("a"),P($e.$$.fragment),Fe=h(),L=f("a"),P(p.$$.fragment),R=h(),ve=f("a"),P(_e.$$.fragment),xe=h(),K=f("div"),P(x.$$.fragment),He=h(),P(ke.$$.fragment),qe=h(),Ee=f("a"),P(he.$$.fragment),Ae=h(),we=f("a"),P(de.$$.fragment),gt=h(),Ve=f("a"),P(Oe.$$.fragment),vt=h(),Re=f("a"),P(Ie.$$.fragment),kt=h(),Ce=f("a"),P(Pe.$$.fragment),Et=h(),ne=f("div"),P(Se.$$.fragment),wt=h(),P(Te.$$.fragment),bt=h(),Ze=f("a"),P(Ue.$$.fragment),jt=h(),be=f("a"),P(De.$$.fragment),zt=h(),je=f("a"),P(Le.$$.fragment),pt=h(),Me=f("div"),We=f("div"),Ne=f("div"),At=k(`© 2023 Bioinspekt d.o.o. Sva prava pridržana. Za bilo kakva pitanja javite nam se na
      `),Ke=f("a"),Je=f("u"),Ot=k("info.bioinspekt@gmail.com"),this.h()},l(n){e=c(n,"FOOTER",{class:!0});var $=u(e);a=c($,"DIV",{class:!0});var ge=u(a);t=c(ge,"DIV",{class:!0});var B=u(t);S(r.$$.fragment,B),g=d(B),S(I.$$.fragment,B),C=d(B),_=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var Xe=u(_);S(m.$$.fragment,Xe),Xe.forEach(o),z=d(B),j=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var Ye=u(j);S(A.$$.fragment,Ye),Ye.forEach(o),F=d(B),T=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var Qe=u(T);S(X.$$.fragment,Qe),Qe.forEach(o),H=d(B),q=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var ye=u(q);S(te.$$.fragment,ye),ye.forEach(o),V=d(B),b=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var et=u(b);S(ae.$$.fragment,et),et.forEach(o),Y=d(B),Q=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var tt=u(Q);S(re.$$.fragment,tt),tt.forEach(o),y=d(B),ie=c(B,"A",{href:!0,target:!0,rel:!0,class:!0});var at=u(ie);S(fe.$$.fragment,at),at.forEach(o),B.forEach(o),se=d(ge),Z=c(ge,"DIV",{class:!0});var le=u(Z);S(ee.$$.fragment,le),Ge=d(le),S(me.$$.fragment,le),pe=d(le),W=c(le,"A",{href:!0,class:!0});var rt=u(W);S(ce.$$.fragment,rt),rt.forEach(o),ze=d(le),oe=c(le,"A",{href:!0,class:!0});var st=u(oe);S($e.$$.fragment,st),st.forEach(o),Fe=d(le),L=c(le,"A",{href:!0,class:!0});var lt=u(L);S(p.$$.fragment,lt),lt.forEach(o),R=d(le),ve=c(le,"A",{href:!0,class:!0});var ot=u(ve);S(_e.$$.fragment,ot),ot.forEach(o),le.forEach(o),xe=d(ge),K=c(ge,"DIV",{class:!0});var J=u(K);S(x.$$.fragment,J),He=d(J),S(ke.$$.fragment,J),qe=d(J),Ee=c(J,"A",{href:!0,class:!0});var nt=u(Ee);S(he.$$.fragment,nt),nt.forEach(o),Ae=d(J),we=c(J,"A",{href:!0,class:!0});var it=u(we);S(de.$$.fragment,it),it.forEach(o),gt=d(J),Ve=c(J,"A",{href:!0,class:!0});var ft=u(Ve);S(Oe.$$.fragment,ft),ft.forEach(o),vt=d(J),Re=c(J,"A",{href:!0,class:!0});var ct=u(Re);S(Ie.$$.fragment,ct),ct.forEach(o),kt=d(J),Ce=c(J,"A",{href:!0,class:!0});var ut=u(Ce);S(Pe.$$.fragment,ut),ut.forEach(o),J.forEach(o),Et=d(ge),ne=c(ge,"DIV",{class:!0});var ue=u(ne);S(Se.$$.fragment,ue),wt=d(ue),S(Te.$$.fragment,ue),bt=d(ue),Ze=c(ue,"A",{href:!0,class:!0});var $t=u(Ze);S(Ue.$$.fragment,$t),$t.forEach(o),jt=d(ue),be=c(ue,"A",{href:!0,target:!0,rel:!0,class:!0});var mt=u(be);S(De.$$.fragment,mt),mt.forEach(o),zt=d(ue),je=c(ue,"A",{href:!0,target:!0,rel:!0,class:!0});var Dt=u(je);S(Le.$$.fragment,Dt),Dt.forEach(o),ue.forEach(o),ge.forEach(o),$.forEach(o),pt=d(n),Me=c(n,"DIV",{class:!0});var Lt=u(Me);We=c(Lt,"DIV",{class:!0});var Vt=u(We);Ne=c(Vt,"DIV",{class:!0});var It=u(Ne);At=E(It,`© 2023 Bioinspekt d.o.o. Sva prava pridržana. Za bilo kakva pitanja javite nam se na
      `),Ke=c(It,"A",{href:!0,style:!0});var Rt=u(Ke);Je=c(Rt,"U",{});var Ct=u(Je);Ot=E(Ct,"info.bioinspekt@gmail.com"),Ct.forEach(o),Rt.forEach(o),It.forEach(o),Vt.forEach(o),Lt.forEach(o),this.h()},h(){l(_,"href","https://www.apprrr.hr/"),l(_,"target","_blank"),l(_,"rel","noreferrer"),l(_,"class","svelte-coak9t"),l(j,"href","http://preglednik.arkod.hr/ARKOD-Web/#layers=OSNOVNI%20PROSTORNI%20PODACI,DOF-client,ZU-client,LPIS_FILTERED,LPIS_200,LPIS_210,LPIS_310,LPIS_320,LPIS_321,LPIS_410,LPIS_421,LPIS_422,LPIS_430,LPIS_450,LPIS_451,LPIS_490,LPIS_900,LPIS,SLOPE05,SLOPE510,SLOPE1015,SLOPE15,SLOPEnull,POP,POVS,GAEC7,Zasticena%20podrucja,Ptice,Leptiri,Kontinentalna%20regija,Mediteranska%20regija,Brdsko-planinska%20regija,3m%20Vodoza%C5%A1titni%20pojas,10m%20Vodoza%C5%A1titni%20pojas,Obiljezja%20krajobraza,Tocke,Linije,Poligoni,TT%202015,RP,GPP,BFO,SPEC&map_x=500000&map_y=4925000&map_sc=3657142"),l(j,"target","_blank"),l(j,"rel","noreferrer"),l(j,"class","svelte-coak9t"),l(T,"href","https://eur-lex.europa.eu/homepage.html"),l(T,"target","_blank"),l(T,"rel","noreferrer"),l(T,"class","svelte-coak9t"),l(q,"href","https://poljoprivreda.gov.hr/pristup-informacijama/zakoni-i-propisi/ekoloska-4510/4510"),l(q,"target","_blank"),l(q,"rel","noreferrer"),l(q,"class","svelte-coak9t"),l(b,"href","https://www.nn.hr/"),l(b,"target","_blank"),l(b,"rel","noreferrer"),l(b,"class","svelte-coak9t"),l(Q,"href","https://commission.europa.eu/select-language?destination=/node/3192"),l(Q,"target","_blank"),l(Q,"rel","noreferrer"),l(Q,"class","svelte-coak9t"),l(ie,"href","https://en.wikipedia.org/wiki/Organic_farming"),l(ie,"target","_blank"),l(ie,"rel","noreferrer"),l(ie,"class","svelte-coak9t"),l(t,"class","col-3 col-xs-6"),l(W,"href","/zakonske-regulative/uredbe-ekoloske-proizvodnje"),l(W,"class","svelte-coak9t"),l(oe,"href","/zakonske-regulative/poticaji"),l(oe,"class","svelte-coak9t"),l(L,"href","/zakonske-regulative/eko-znak-eu"),l(L,"class","svelte-coak9t"),l(ve,"href","/zakonske-regulative/eko-znak-hr"),l(ve,"class","svelte-coak9t"),l(Z,"class","col-3 col-xs-6"),l(Ee,"href","/certifikacije/bio-suisse-standard"),l(Ee,"class","svelte-coak9t"),l(we,"href","/certifikacije/dunav-soja-standard"),l(we,"class","svelte-coak9t"),l(Ve,"href","/certifikacije/bez-gmo-standard"),l(Ve,"class","svelte-coak9t"),l(Re,"href","/certifikacije/zoi-i-zozp"),l(Re,"class","svelte-coak9t"),l(Ce,"href","/certifikacije/dokazana-kvaliteta-hrvatska"),l(Ce,"class","svelte-coak9t"),l(K,"class","col-3 col-xs-6"),l(Ze,"href","/kontrola-i-certifikacija"),l(Ze,"class","svelte-coak9t"),l(be,"href","/docs/obavijest-1.pdf"),l(be,"target","_blank"),l(be,"rel","noreferrer"),l(be,"class","svelte-coak9t"),l(je,"href","/docs/obavijest-2.pdf"),l(je,"target","_blank"),l(je,"rel","noreferrer"),l(je,"class","svelte-coak9t"),l(ne,"class","col-3 col-xs-6"),l(a,"class","grid"),l(e,"class","svelte-coak9t"),l(Ke,"href","mailto:info.bioinspekt@gmail.com"),Gt(Ke,"display","inline-block"),l(Ne,"class","col-12 ta-center"),l(We,"class","grid"),l(Me,"class","subfooter svelte-coak9t")},m(n,$){v(n,e,$),s(e,a),s(a,t),U(r,t,null),s(t,g),U(I,t,null),s(t,C),s(t,_),U(m,_,null),s(t,z),s(t,j),U(A,j,null),s(t,F),s(t,T),U(X,T,null),s(t,H),s(t,q),U(te,q,null),s(t,V),s(t,b),U(ae,b,null),s(t,Y),s(t,Q),U(re,Q,null),s(t,y),s(t,ie),U(fe,ie,null),s(a,se),s(a,Z),U(ee,Z,null),s(Z,Ge),U(me,Z,null),s(Z,pe),s(Z,W),U(ce,W,null),s(Z,ze),s(Z,oe),U($e,oe,null),s(Z,Fe),s(Z,L),U(p,L,null),s(Z,R),s(Z,ve),U(_e,ve,null),s(a,xe),s(a,K),U(x,K,null),s(K,He),U(ke,K,null),s(K,qe),s(K,Ee),U(he,Ee,null),s(K,Ae),s(K,we),U(de,we,null),s(K,gt),s(K,Ve),U(Oe,Ve,null),s(K,vt),s(K,Re),U(Ie,Re,null),s(K,kt),s(K,Ce),U(Pe,Ce,null),s(a,Et),s(a,ne),U(Se,ne,null),s(ne,wt),U(Te,ne,null),s(ne,bt),s(ne,Ze),U(Ue,Ze,null),s(ne,jt),s(ne,be),U(De,be,null),s(ne,zt),s(ne,je),U(Le,je,null),v(n,pt,$),v(n,Me,$),s(Me,We),s(We,Ne),s(Ne,At),s(Ne,Ke),s(Ke,Je),s(Je,Ot),_t=!0},p(n,[$]){const ge={};$&1&&(ge.$$scope={dirty:$,ctx:n}),r.$set(ge);const B={};$&1&&(B.$$scope={dirty:$,ctx:n}),m.$set(B);const Xe={};$&1&&(Xe.$$scope={dirty:$,ctx:n}),A.$set(Xe);const Ye={};$&1&&(Ye.$$scope={dirty:$,ctx:n}),X.$set(Ye);const Qe={};$&1&&(Qe.$$scope={dirty:$,ctx:n}),te.$set(Qe);const ye={};$&1&&(ye.$$scope={dirty:$,ctx:n}),ae.$set(ye);const et={};$&1&&(et.$$scope={dirty:$,ctx:n}),re.$set(et);const tt={};$&1&&(tt.$$scope={dirty:$,ctx:n}),fe.$set(tt);const at={};$&1&&(at.$$scope={dirty:$,ctx:n}),ee.$set(at);const le={};$&1&&(le.$$scope={dirty:$,ctx:n}),ce.$set(le);const rt={};$&1&&(rt.$$scope={dirty:$,ctx:n}),$e.$set(rt);const st={};$&1&&(st.$$scope={dirty:$,ctx:n}),p.$set(st);const lt={};$&1&&(lt.$$scope={dirty:$,ctx:n}),_e.$set(lt);const ot={};$&1&&(ot.$$scope={dirty:$,ctx:n}),x.$set(ot);const J={};$&1&&(J.$$scope={dirty:$,ctx:n}),he.$set(J);const nt={};$&1&&(nt.$$scope={dirty:$,ctx:n}),de.$set(nt);const it={};$&1&&(it.$$scope={dirty:$,ctx:n}),Oe.$set(it);const ft={};$&1&&(ft.$$scope={dirty:$,ctx:n}),Ie.$set(ft);const ct={};$&1&&(ct.$$scope={dirty:$,ctx:n}),Pe.$set(ct);const ut={};$&1&&(ut.$$scope={dirty:$,ctx:n}),Se.$set(ut);const ue={};$&1&&(ue.$$scope={dirty:$,ctx:n}),Ue.$set(ue);const $t={};$&1&&($t.$$scope={dirty:$,ctx:n}),De.$set($t);const mt={};$&1&&(mt.$$scope={dirty:$,ctx:n}),Le.$set(mt)},i(n){_t||(w(r.$$.fragment,n),w(I.$$.fragment,n),w(m.$$.fragment,n),w(A.$$.fragment,n),w(X.$$.fragment,n),w(te.$$.fragment,n),w(ae.$$.fragment,n),w(re.$$.fragment,n),w(fe.$$.fragment,n),w(ee.$$.fragment,n),w(me.$$.fragment,n),w(ce.$$.fragment,n),w($e.$$.fragment,n),w(p.$$.fragment,n),w(_e.$$.fragment,n),w(x.$$.fragment,n),w(ke.$$.fragment,n),w(he.$$.fragment,n),w(de.$$.fragment,n),w(Oe.$$.fragment,n),w(Ie.$$.fragment,n),w(Pe.$$.fragment,n),w(Se.$$.fragment,n),w(Te.$$.fragment,n),w(Ue.$$.fragment,n),w(De.$$.fragment,n),w(Le.$$.fragment,n),_t=!0)},o(n){O(r.$$.fragment,n),O(I.$$.fragment,n),O(m.$$.fragment,n),O(A.$$.fragment,n),O(X.$$.fragment,n),O(te.$$.fragment,n),O(ae.$$.fragment,n),O(re.$$.fragment,n),O(fe.$$.fragment,n),O(ee.$$.fragment,n),O(me.$$.fragment,n),O(ce.$$.fragment,n),O($e.$$.fragment,n),O(p.$$.fragment,n),O(_e.$$.fragment,n),O(x.$$.fragment,n),O(ke.$$.fragment,n),O(he.$$.fragment,n),O(de.$$.fragment,n),O(Oe.$$.fragment,n),O(Ie.$$.fragment,n),O(Pe.$$.fragment,n),O(Se.$$.fragment,n),O(Te.$$.fragment,n),O(Ue.$$.fragment,n),O(De.$$.fragment,n),O(Le.$$.fragment,n),_t=!1},d(n){n&&o(e),D(r),D(I),D(m),D(A),D(X),D(te),D(ae),D(re),D(fe),D(ee),D(me),D(ce),D($e),D(p),D(_e),D(x),D(ke),D(he),D(de),D(Oe),D(Ie),D(Pe),D(Se),D(Te),D(Ue),D(De),D(Le),n&&o(pt),n&&o(Me)}}}class ja extends Pt{constructor(e){super(),St(this,e,null,ba,Ut,{})}}function za(i){let e,a,t,r,g,I;e=new yt({});const C=i[1].default,_=Ft(C,i,i[0],null);return g=new ja({}),{c(){P(e.$$.fragment),a=h(),t=f("main"),_&&_.c(),r=h(),P(g.$$.fragment),this.h()},l(m){S(e.$$.fragment,m),a=d(m),t=c(m,"MAIN",{"data-sveltekit-prefetch":!0});var z=u(t);_&&_.l(z),z.forEach(o),r=d(m),S(g.$$.fragment,m),this.h()},h(){l(t,"data-sveltekit-prefetch","")},m(m,z){U(e,m,z),v(m,a,z),v(m,t,z),_&&_.m(t,null),v(m,r,z),U(g,m,z),I=!0},p(m,[z]){_&&_.p&&(!I||z&1)&&xt(_,C,m,m[0],I?qt(C,m[0],z,null):Ht(m[0]),null)},i(m){I||(w(e.$$.fragment,m),w(_,m),w(g.$$.fragment,m),I=!0)},o(m){O(e.$$.fragment,m),O(_,m),O(g.$$.fragment,m),I=!1},d(m){D(e,m),m&&o(a),m&&o(t),_&&_.d(m),m&&o(r),D(g,m)}}}function Aa(i,e,a){let{$$slots:t={},$$scope:r}=e;return i.$$set=g=>{"$$scope"in g&&a(0,r=g.$$scope)},[r,t]}class Ua extends Pt{constructor(e){super(),St(this,e,Aa,za,Ut,{})}}export{Ua as default};
