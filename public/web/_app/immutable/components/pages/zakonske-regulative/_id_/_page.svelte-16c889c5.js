import{S as y,i as B,s as b,w as k,a as u,k as p,x as w,c as v,l as $,m as h,h as i,T as E,n as g,y as q,b as f,F as x,f as z,t as D,z as I,q as S,r as T,B as V}from"../../../../chunks/index-6479a5d3.js";import{B as C}from"../../../../chunks/Banner-1ac26a5a.js";function F(o){let a=o[0].title+"",s;return{c(){s=S(a)},l(t){s=T(t,a)},m(t,l){f(t,s,l)},p:V,d(t){t&&i(s)}}}function H(o){let a,s,t,l,c=o[0].content+"",_,m,r;return a=new C({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),document.title=m=o[0].title+" - Bioinspekt",{c(){k(a.$$.fragment),s=u(),t=p("div"),l=p("div"),_=u(),this.h()},l(e){w(a.$$.fragment,e),s=v(e),t=$(e,"DIV",{class:!0});var n=h(t);l=$(n,"DIV",{class:!0});var d=h(l);d.forEach(i),n.forEach(i),_=v(e),E("svelte-1ahz6d",document.head).forEach(i),this.h()},h(){g(l,"class","col-12"),g(t,"class","grid content-selector svelte-1my183p")},m(e,n){q(a,e,n),f(e,s,n),f(e,t,n),x(t,l),l.innerHTML=c,f(e,_,n),r=!0},p(e,[n]){const d={};n&4&&(d.$$scope={dirty:n,ctx:e}),a.$set(d),(!r||n&1)&&m!==(m=e[0].title+" - Bioinspekt")&&(document.title=m)},i(e){r||(z(a.$$.fragment,e),r=!0)},o(e){D(a.$$.fragment,e),r=!1},d(e){I(a,e),e&&i(s),e&&i(t),e&&i(_)}}}function L(o,a,s){let{data:t}=a;const{page:l}=t;return o.$$set=c=>{"data"in c&&s(1,t=c.data)},[l,t]}class A extends y{constructor(a){super(),B(this,a,L,H,b,{data:1})}}export{A as default};
