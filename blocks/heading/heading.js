(()=>{"use strict";var e,r={912:(e,r,t)=>{var a=t(540),n=t(338);const o=()=>a.createElement("div",{className:"text-class"},a.createElement("h1",null,"Banco Santander")),l=document.querySelector(".heading");if(l){(0,n.H)(l).render(a.createElement(o,null))}}},t={};function a(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(r,t,n,o)=>{if(!t){var l=1/0;for(v=0;v<e.length;v++){for(var[t,n,o]=e[v],c=!0,i=0;i<t.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](t[i])))?t.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(v--,1);var s=n();void 0!==s&&(r=s)}}return r}o=o||0;for(var v=e.length;v>0&&e[v-1][2]>o;v--)e[v]=e[v-1];e[v]=[t,n,o]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={heading:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[l,c,i]=t,s=0;if(l.some((r=>0!==e[r]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var v=i(a)}for(r&&r(t);s<l.length;s++)o=l[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(v)},t=self.webpackChunkreact_app=self.webpackChunkreact_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=a.O(void 0,["vendor"],(()=>a(912)));n=a.O(n)})();
export default function decorate(block) {
    const a = block.querySelector(':scope > div > div');
    const data = a.querySelector("p").innerHTML;
    a.innerHTML = "";
    const h1Tag = document.createElement("h1");
    h1Tag.classList.add("test");
    h1Tag.innerHTML = data;
    a.appendChild(h1Tag);
    console.log("block",a);
}
