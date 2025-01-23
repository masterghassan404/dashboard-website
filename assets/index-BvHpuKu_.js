(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Us(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},Xt=[],je=()=>{},Qc=()=>!1,Pr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fs=t=>t.startsWith("onUpdate:"),ae=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zc=Object.prototype.hasOwnProperty,G=(t,e)=>Zc.call(t,e),H=Array.isArray,yn=t=>Or(t)==="[object Map]",el=t=>Or(t)==="[object Set]",V=t=>typeof t=="function",ce=t=>typeof t=="string",ln=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Fo=t=>(ie(t)||V(t))&&V(t.then)&&V(t.catch),tl=Object.prototype.toString,Or=t=>tl.call(t),nl=t=>Or(t).slice(8,-1),rl=t=>Or(t)==="[object Object]",$s=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sl=/-(\w)/g,Et=xr(t=>t.replace(sl,(e,n)=>n?n.toUpperCase():"")),il=/\B([A-Z])/g,$t=xr(t=>t.replace(il,"-$1").toLowerCase()),Bo=xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kr=xr(t=>t?`on${Bo(t)}`:""),bt=(t,e)=>!Object.is(t,e),sr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$o=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _i;const kr=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?ll(r):Hs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||ie(t))return t}const ol=/;(?![^(]*\))/g,al=/:([^]+)/,cl=/\/\*[^]*?\*\//g;function ll(t){const e={};return t.replace(cl,"").split(ol).forEach(n=>{if(n){const r=n.split(al);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vs(t){let e="";if(ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Vs(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=Us(ul);function Ho(t){return!!t||t===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class dl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hl(){return Ee}let ne;const zr=new WeakSet;class Vo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zr.has(this)&&(zr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vi(this),Ko(this);const e=ne,n=ke;ne=this,ke=!0;try{return this.fn()}finally{zo(this),ne=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ks(e);this.deps=this.depsTail=void 0,vi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hs(this)&&this.run()}get dirty(){return hs(this)}}let jo=0,En,In;function Wo(t,e=!1){if(t.flags|=8,e){t.next=In,In=t;return}t.next=En,En=t}function js(){jo++}function Ws(){if(--jo>0)return;if(In){let e=In;for(In=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;En;){let e=En;for(En=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ko(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zo(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ks(r),pl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function hs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Go(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Go(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xn))return;t.globalVersion=xn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!hs(t)){t.flags&=-3;return}const n=ne,r=ke;ne=t,ke=!0;try{Ko(t);const s=t.fn(t._value);(e.version===0||bt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,ke=r,zo(t),t.flags&=-3}}function Ks(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ks(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const qo=[];function It(){qo.push(ke),ke=!1}function St(){const t=qo.pop();ke=t===void 0?!0:t}function vi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let xn=0;class gl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!ke||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new gl(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Jo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,xn++,this.notify(e)}notify(e){js();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ws()}}}function Jo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Jo(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ps=new WeakMap,Dt=Symbol(""),gs=Symbol(""),kn=Symbol("");function ue(t,e,n){if(ke&&ne){let r=ps.get(t);r||ps.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zs),s.map=r,s.key=n),s.track()}}function Qe(t,e,n,r,s,i){const o=ps.get(t);if(!o){xn++;return}const c=a=>{a&&a.trigger()};if(js(),e==="clear")o.forEach(c);else{const a=H(t),l=a&&$s(n);if(a&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===kn||!ln(p)&&p>=f)&&c(h)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(kn)),e){case"add":a?l&&c(o.get("length")):(c(o.get(Dt)),yn(t)&&c(o.get(gs)));break;case"delete":a||(c(o.get(Dt)),yn(t)&&c(o.get(gs)));break;case"set":yn(t)&&c(o.get(Dt));break}}Ws()}function zt(t){const e=z(t);return e===t?e:(ue(e,"iterate",kn),Ne(t)?e:e.map(he))}function Gs(t){return ue(t=z(t),"iterate",kn),t}const ml={__proto__:null,[Symbol.iterator](){return Gr(this,Symbol.iterator,he)},concat(...t){return zt(this).concat(...t.map(e=>H(e)?zt(e):e))},entries(){return Gr(this,"entries",t=>(t[1]=he(t[1]),t))},every(t,e){return qe(this,"every",t,e,void 0,arguments)},filter(t,e){return qe(this,"filter",t,e,n=>n.map(he),arguments)},find(t,e){return qe(this,"find",t,e,he,arguments)},findIndex(t,e){return qe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qe(this,"findLast",t,e,he,arguments)},findLastIndex(t,e){return qe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qe(this,"forEach",t,e,void 0,arguments)},includes(...t){return qr(this,"includes",t)},indexOf(...t){return qr(this,"indexOf",t)},join(t){return zt(this).join(t)},lastIndexOf(...t){return qr(this,"lastIndexOf",t)},map(t,e){return qe(this,"map",t,e,void 0,arguments)},pop(){return hn(this,"pop")},push(...t){return hn(this,"push",t)},reduce(t,...e){return bi(this,"reduce",t,e)},reduceRight(t,...e){return bi(this,"reduceRight",t,e)},shift(){return hn(this,"shift")},some(t,e){return qe(this,"some",t,e,void 0,arguments)},splice(...t){return hn(this,"splice",t)},toReversed(){return zt(this).toReversed()},toSorted(t){return zt(this).toSorted(t)},toSpliced(...t){return zt(this).toSpliced(...t)},unshift(...t){return hn(this,"unshift",t)},values(){return Gr(this,"values",he)}};function Gr(t,e,n){const r=Gs(t),s=r[e]();return r!==t&&!Ne(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const _l=Array.prototype;function qe(t,e,n,r,s,i){const o=Gs(t),c=o!==t&&!Ne(t),a=o[e];if(a!==_l[e]){const h=a.apply(t,i);return c?he(h):h}let l=n;o!==t&&(c?l=function(h,p){return n.call(this,he(h),p,t)}:n.length>2&&(l=function(h,p){return n.call(this,h,p,t)}));const f=a.call(o,l,r);return c&&s?s(f):f}function bi(t,e,n,r){const s=Gs(t);let i=n;return s!==t&&(Ne(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,he(c),a,t)}),s[e](i,...r)}function qr(t,e,n){const r=z(t);ue(r,"iterate",kn);const s=r[e](...n);return(s===-1||s===!1)&&Ys(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function hn(t,e,n=[]){It(),js();const r=z(t)[e].apply(t,n);return Ws(),St(),r}const vl=Us("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln));function bl(t){ln(t)||(t=String(t));const e=z(this);return ue(e,"has",t),e.hasOwnProperty(t)}class Xo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Pl:ta:i?ea:Zo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let a;if(o&&(a=ml[n]))return a;if(n==="hasOwnProperty")return bl}const c=Reflect.get(e,n,fe(e)?e:r);return(ln(n)?Yo.has(n):vl(n))||(s||ue(e,"get",n),i)?c:fe(c)?o&&$s(n)?c:c.value:ie(c)?s?ra(c):Nr(c):c}}class Qo extends Xo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Ut(i);if(!Ne(r)&&!Ut(r)&&(i=z(i),r=z(r)),!H(e)&&fe(i)&&!fe(r))return a?!1:(i.value=r,!0)}const o=H(e)&&$s(n)?Number(n)<e.length:G(e,n),c=Reflect.set(e,n,r,fe(e)?e:s);return e===z(s)&&(o?bt(r,i)&&Qe(e,"set",n,r):Qe(e,"add",n,r)),c}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ln(n)||!Yo.has(n))&&ue(e,"has",n),r}ownKeys(e){return ue(e,"iterate",H(e)?"length":Dt),Reflect.ownKeys(e)}}class yl extends Xo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wl=new Qo,El=new yl,Il=new Qo(!0);const ms=t=>t,er=t=>Reflect.getPrototypeOf(t);function Sl(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=yn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?ms:e?_s:he;return!e&&ue(i,"iterate",a?gs:Dt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tl(t,e){const n={get(s){const i=this.__v_raw,o=z(i),c=z(s);t||(bt(s,c)&&ue(o,"get",s),ue(o,"get",c));const{has:a}=er(o),l=e?ms:t?_s:he;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ue(z(s),"iterate",Dt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),c=z(s);return t||(bt(s,c)&&ue(o,"has",s),ue(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=z(c),l=e?ms:t?_s:he;return!t&&ue(a,"iterate",Dt),c.forEach((f,h)=>s.call(i,l(f),l(h),o))}};return ae(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!Ne(s)&&!Ut(s)&&(s=z(s));const i=z(this);return er(i).has.call(i,s)||(i.add(s),Qe(i,"add",s,s)),this},set(s,i){!e&&!Ne(i)&&!Ut(i)&&(i=z(i));const o=z(this),{has:c,get:a}=er(o);let l=c.call(o,s);l||(s=z(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?bt(i,f)&&Qe(o,"set",s,i):Qe(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:c}=er(i);let a=o.call(i,s);a||(s=z(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&Qe(i,"delete",s,void 0),l},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&Qe(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sl(s,t,e)}),n}function qs(t,e){const n=Tl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Cl={get:qs(!1,!1)},Rl={get:qs(!1,!0)},Al={get:qs(!0,!1)};const Zo=new WeakMap,ea=new WeakMap,ta=new WeakMap,Pl=new WeakMap;function Ol(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xl(t){return t.__v_skip||!Object.isExtensible(t)?0:Ol(nl(t))}function Nr(t){return Ut(t)?t:Js(t,!1,wl,Cl,Zo)}function na(t){return Js(t,!1,Il,Rl,ea)}function ra(t){return Js(t,!0,El,Al,ta)}function Js(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=xl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Sn(t){return Ut(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function Ys(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function kl(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&$o(t,"__v_skip",!0),t}const he=t=>ie(t)?Nr(t):t,_s=t=>ie(t)?ra(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Nl(t){return sa(t,!1)}function Dl(t){return sa(t,!0)}function sa(t,e){return fe(t)?t:new Ml(t,e)}class Ml{constructor(e,n){this.dep=new zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:he(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ne(e)||Ut(e);e=r?e:z(e),bt(e,n)&&(this._rawValue=e,this._value=r?e:he(e),this.dep.trigger())}}function Mt(t){return fe(t)?t.value:t}const Ll={get:(t,e,n)=>e==="__v_raw"?t:Mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ia(t){return Sn(t)?t:new Proxy(t,Ll)}class Ul{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Wo(this,!0),!0}get value(){const e=this.dep.track();return Go(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fl(t,e,n=!1){let r,s;return V(t)?r=t:(r=t.get,s=t.set),new Ul(r,s,n)}const nr={},pr=new WeakMap;let xt;function Bl(t,e=!1,n=xt){if(n){let r=pr.get(n);r||pr.set(n,r=[]),r.push(t)}}function $l(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Ne(O)||s===!1||s===0?Ze(O,1):Ze(O);let f,h,p,g,C=!1,P=!1;if(fe(t)?(h=()=>t.value,C=Ne(t)):Sn(t)?(h=()=>l(t),C=!0):H(t)?(P=!0,C=t.some(O=>Sn(O)||Ne(O)),h=()=>t.map(O=>{if(fe(O))return O.value;if(Sn(O))return l(O);if(V(O))return a?a(O,2):O()})):V(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){It();try{p()}finally{St()}}const O=xt;xt=f;try{return a?a(t,3,[g]):t(g)}finally{xt=O}}:h=je,e&&s){const O=h,W=s===!0?1/0:s;h=()=>Ze(O(),W)}const $=hl(),L=()=>{f.stop(),$&&Bs($.effects,f)};if(i&&e){const O=e;e=(...W)=>{O(...W),L()}}let k=P?new Array(t.length).fill(nr):nr;const M=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const W=f.run();if(s||C||(P?W.some((se,ee)=>bt(se,k[ee])):bt(W,k))){p&&p();const se=xt;xt=f;try{const ee=[W,k===nr?void 0:P&&k[0]===nr?[]:k,g];a?a(e,3,ee):e(...ee),k=W}finally{xt=se}}}else f.run()};return c&&c(M),f=new Vo(h),f.scheduler=o?()=>o(M,!1):M,g=O=>Bl(O,!1,f),p=f.onStop=()=>{const O=pr.get(f);if(O){if(a)a(O,4);else for(const W of O)W();pr.delete(f)}},e?r?M(!0):k=f.run():o?o(M.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Ze(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))Ze(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)Ze(t[r],e,n);else if(el(t)||yn(t))t.forEach(r=>{Ze(r,e,n)});else if(rl(t)){for(const r in t)Ze(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ze(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(t,e,n,r){try{return r?t(...r):t()}catch(s){Dr(s,e,n)}}function ze(t,e,n,r){if(V(t)){const s=jn(t,e,n,r);return s&&Fo(s)&&s.catch(i=>{Dr(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}}function Dr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,a,l)===!1)return}c=c.parent}if(i){It(),jn(i,null,10,[t,a,l]),St();return}}Hl(t,n,s,r,o)}function Hl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pe=[];let $e=-1;const Qt=[];let dt=null,Gt=0;const oa=Promise.resolve();let gr=null;function aa(t){const e=gr||oa;return t?e.then(this?t.bind(this):t):e}function Vl(t){let e=$e+1,n=pe.length;for(;e<n;){const r=e+n>>>1,s=pe[r],i=Nn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xs(t){if(!(t.flags&1)){const e=Nn(t),n=pe[pe.length-1];!n||!(t.flags&2)&&e>=Nn(n)?pe.push(t):pe.splice(Vl(e),0,t),t.flags|=1,ca()}}function ca(){gr||(gr=oa.then(ua))}function jl(t){H(t)?Qt.push(...t):dt&&t.id===-1?dt.splice(Gt+1,0,t):t.flags&1||(Qt.push(t),t.flags|=1),ca()}function yi(t,e,n=$e+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function la(t){if(Qt.length){const e=[...new Set(Qt)].sort((n,r)=>Nn(n)-Nn(r));if(Qt.length=0,dt){dt.push(...e);return}for(dt=e,Gt=0;Gt<dt.length;Gt++){const n=dt[Gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dt=null,Gt=0}}const Nn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ua(t){try{for($e=0;$e<pe.length;$e++){const e=pe[$e];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$e<pe.length;$e++){const e=pe[$e];e&&(e.flags&=-2)}$e=-1,pe.length=0,la(),gr=null,(pe.length||Qt.length)&&ua()}}let Pe=null,fa=null;function mr(t){const e=Pe;return Pe=t,fa=t&&t.type.__scopeId||null,e}function Wl(t,e=Pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ai(-1);const i=mr(e);let o;try{o=t(...s)}finally{mr(i),r._d&&Ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lt(t,e){if(Pe===null)return t;const n=Br(Pe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Z]=e[s];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(It(),ze(a,n,8,[t.el,c,t,e]),St())}}const Kl=Symbol("_vte"),zl=t=>t.__isTeleport;function Qs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function da(t,e){return V(t)?ae({name:t.name},e,{setup:t}):t}function ha(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vs(t,e,n,r,s=!1){if(H(t)){t.forEach((C,P)=>vs(C,e&&(H(e)?e[P]:e),n,r,s));return}if(Tn(r)&&!s)return;const i=r.shapeFlag&4?Br(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Z?c.refs={}:c.refs,h=c.setupState,p=z(h),g=h===Z?()=>!1:C=>G(p,C);if(l!=null&&l!==a&&(ce(l)?(f[l]=null,g(l)&&(h[l]=null)):fe(l)&&(l.value=null)),V(a))jn(a,c,12,[o,f]);else{const C=ce(a),P=fe(a);if(C||P){const $=()=>{if(t.f){const L=C?g(a)?h[a]:f[a]:a.value;s?H(L)&&Bs(L,i):H(L)?L.includes(i)||L.push(i):C?(f[a]=[i],g(a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else C?(f[a]=o,g(a)&&(h[a]=o)):P&&(a.value=o,t.k&&(f[t.k]=o))};o?($.id=-1,we($,n)):$()}}}kr().requestIdleCallback;kr().cancelIdleCallback;const Tn=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function Gl(t,e){ga(t,"a",e)}function ql(t,e){ga(t,"da",e)}function ga(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Mr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&Jl(r,e,n,s),s=s.parent}}function Jl(t,e,n,r){const s=Mr(e,t,r,!0);ma(()=>{Bs(r[e],s)},n)}function Mr(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{It();const c=Kn(n),a=ze(e,n,t,o);return c(),St(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=ge)=>{(!Ln||t==="sp")&&Mr(t,(...r)=>e(...r),n)},Yl=at("bm"),Xl=at("m"),Ql=at("bu"),Zl=at("u"),eu=at("bum"),ma=at("um"),tu=at("sp"),nu=at("rtg"),ru=at("rtc");function su(t,e=ge){Mr("ec",t,e)}const iu=Symbol.for("v-ndc"),bs=t=>t?La(t)?Br(t):bs(t.parent):null,Cn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bs(t.parent),$root:t=>bs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zs(t),$forceUpdate:t=>t.f||(t.f=()=>{Xs(t.update)}),$nextTick:t=>t.n||(t.n=aa.bind(t.proxy)),$watch:t=>Cu.bind(t)}),Jr=(t,e)=>t!==Z&&!t.__isScriptSetup&&G(t,e),ou={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jr(r,e))return o[e]=1,r[e];if(s!==Z&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==Z&&G(n,e))return o[e]=4,n[e];ys&&(o[e]=0)}}const f=Cn[e];let h,p;if(f)return e==="$attrs"&&ue(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Z&&G(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jr(s,e)?(s[e]=n,!0):r!==Z&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Z&&G(t,o)||Jr(e,o)||(c=i[0])&&G(c,o)||G(r,o)||G(Cn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wi(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ys=!0;function au(t){const e=Zs(t),n=t.proxy,r=t.ctx;ys=!1,e.beforeCreate&&Ei(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:C,activated:P,deactivated:$,beforeDestroy:L,beforeUnmount:k,destroyed:M,unmounted:O,render:W,renderTracked:se,renderTriggered:ee,errorCaptured:Te,serverPrefetch:Ce,expose:Re,inheritAttrs:ct,components:At,directives:Le,filters:fn}=e;if(l&&cu(l,r,null),o)for(const X in o){const K=o[X];V(K)&&(r[X]=K.bind(n))}if(s){const X=s.call(n,n);ie(X)&&(t.data=Nr(X))}if(ys=!0,i)for(const X in i){const K=i[X],Ge=V(K)?K.bind(n,n):V(K.get)?K.get.bind(n,n):je,lt=!V(K)&&V(K.set)?K.set.bind(n):je,Ue=xe({get:Ge,set:lt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:_e=>Ue.value=_e})}if(c)for(const X in c)_a(c[X],r,n,X);if(a){const X=V(a)?a.call(n):a;Reflect.ownKeys(X).forEach(K=>{ir(K,X[K])})}f&&Ei(f,t,"c");function oe(X,K){H(K)?K.forEach(Ge=>X(Ge.bind(n))):K&&X(K.bind(n))}if(oe(Yl,h),oe(Xl,p),oe(Ql,g),oe(Zl,C),oe(Gl,P),oe(ql,$),oe(su,Te),oe(ru,se),oe(nu,ee),oe(eu,k),oe(ma,O),oe(tu,Ce),H(Re))if(Re.length){const X=t.exposed||(t.exposed={});Re.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:Ge=>n[K]=Ge})})}else t.exposed||(t.exposed={});W&&t.render===je&&(t.render=W),ct!=null&&(t.inheritAttrs=ct),At&&(t.components=At),Le&&(t.directives=Le),Ce&&ha(t)}function cu(t,e,n=je){H(t)&&(t=ws(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=rt(s.from||r,s.default,!0):i=rt(s.from||r):i=rt(s),fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ei(t,e,n){ze(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _a(t,e,n,r){let s=r.includes(".")?xa(n,r):()=>n[r];if(ce(t)){const i=e[t];V(i)&&or(s,i)}else if(V(t))or(s,t.bind(n));else if(ie(t))if(H(t))t.forEach(i=>_a(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&or(s,i,t)}}function Zs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>_r(a,l,o,!0)),_r(a,e,o)),ie(e)&&i.set(e,a),a}function _r(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_r(t,i,n,!0),s&&s.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=lu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const lu={data:Ii,props:Si,emits:Si,methods:_n,computed:_n,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:_n,directives:_n,watch:fu,provide:Ii,inject:uu};function Ii(t,e){return e?t?function(){return ae(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function uu(t,e){return _n(ws(t),ws(e))}function ws(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function _n(t,e){return t?ae(Object.create(null),t,e):e}function Si(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:ae(Object.create(null),wi(t),wi(e??{})):e}function fu(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function va(){return{app:null,config:{isNativeTag:Qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let du=0;function hu(t,e){return function(r,s=null){V(r)||(r=ae({},r)),s!=null&&!ie(s)&&(s=null);const i=va(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:du++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qu,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(l,...h)):V(f)&&(o.add(f),f(l,...h))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,h){return h?(i.components[f]=h,l):i.components[f]},directive(f,h){return h?(i.directives[f]=h,l):i.directives[f]},mount(f,h,p){if(!a){const g=l._ceVNode||Se(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,f):t(g,f,p),a=!0,l._container=f,f.__vue_app__=l,Br(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(ze(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,h){return i.provides[f]=h,l},runWithContext(f){const h=Zt;Zt=l;try{return f()}finally{Zt=h}}};return l}}let Zt=null;function ir(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function rt(t,e,n=!1){const r=ge||Pe;if(r||Zt){const s=Zt?Zt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}const ba={},ya=()=>Object.create(ba),wa=t=>Object.getPrototypeOf(t)===ba;function pu(t,e,n,r=!1){const s={},i=ya();t.propsDefaults=Object.create(null),Ea(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:na(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Lr(t.emitsOptions,p))continue;const g=e[p];if(a)if(G(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const C=Et(p);s[C]=Es(a,c,C,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ea(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!G(e,h)&&((f=$t(h))===h||!G(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Es(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&Qe(t.attrs,"set","")}function Ea(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(wn(a))continue;const l=e[a];let f;s&&G(s,f=Et(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Lr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Es(s,a,h,l[h],t,!G(l,h))}}return o}function Es(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=G(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Kn(s);r=l[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}const mu=new WeakMap;function Ia(t,e,n=!1){const r=n?mu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const f=h=>{a=!0;const[p,g]=Ia(h,e,!0);ae(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return ie(t)&&r.set(t,Xt),Xt;if(H(i))for(let f=0;f<i.length;f++){const h=Et(i[f]);Ti(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=Et(f);if(Ti(h)){const p=i[f],g=o[h]=H(p)||V(p)?{type:p}:ae({},p),C=g.type;let P=!1,$=!0;if(H(C))for(let L=0;L<C.length;++L){const k=C[L],M=V(k)&&k.name;if(M==="Boolean"){P=!0;break}else M==="String"&&($=!1)}else P=V(C)&&C.name==="Boolean";g[0]=P,g[1]=$,(P||G(g,"default"))&&c.push(h)}}const l=[o,c];return ie(t)&&r.set(t,l),l}function Ti(t){return t[0]!=="$"&&!wn(t)}const Sa=t=>t[0]==="_"||t==="$stable",ei=t=>H(t)?t.map(He):[He(t)],_u=(t,e,n)=>{if(e._n)return e;const r=Wl((...s)=>ei(e(...s)),n);return r._c=!1,r},Ta=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sa(s))continue;const i=t[s];if(V(i))e[s]=_u(s,i,r);else if(i!=null){const o=ei(i);e[s]=()=>o}}},Ca=(t,e)=>{const n=ei(e);t.slots.default=()=>n},Ra=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},vu=(t,e,n)=>{const r=t.slots=ya();if(t.vnode.shapeFlag&32){const s=e._;s?(Ra(r,e,n),n&&$o(r,"_",s,!0)):Ta(e,r)}else e&&Ca(t,e)},bu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ra(s,e,n):(i=!e.$stable,Ta(e,s)),o=e}else e&&(Ca(t,e),o={default:1});if(i)for(const c in s)!Sa(c)&&o[c]==null&&delete s[c]},we=Nu;function yu(t){return wu(t)}function wu(t,e){const n=kr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=je,insertStaticContent:C}=t,P=(u,d,m,b=null,_=null,y=null,S=void 0,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!pn(u,d)&&(b=v(u),_e(u,_,y,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:w,ref:U,shapeFlag:R}=d;switch(w){case Ur:$(u,d,m,b);break;case Dn:L(u,d,m,b);break;case ar:u==null&&k(d,m,b,S);break;case Xe:At(u,d,m,b,_,y,S,I,E);break;default:R&1?W(u,d,m,b,_,y,S,I,E):R&6?Le(u,d,m,b,_,y,S,I,E):(R&64||R&128)&&w.process(u,d,m,b,_,y,S,I,E,N)}U!=null&&_&&vs(U,u&&u.ref,y,d||u,!d)},$=(u,d,m,b)=>{if(u==null)r(d.el=c(d.children),m,b);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},L=(u,d,m,b)=>{u==null?r(d.el=a(d.children||""),m,b):d.el=u.el},k=(u,d,m,b)=>{[u.el,u.anchor]=C(u.children,d,m,b,u.el,u.anchor)},M=({el:u,anchor:d},m,b)=>{let _;for(;u&&u!==d;)_=p(u),r(u,m,b),u=_;r(d,m,b)},O=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=p(u),s(u),u=m;s(d)},W=(u,d,m,b,_,y,S,I,E)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?se(d,m,b,_,y,S,I,E):Ce(u,d,_,y,S,I,E)},se=(u,d,m,b,_,y,S,I)=>{let E,w;const{props:U,shapeFlag:R,transition:D,dirs:B}=u;if(E=u.el=o(u.type,y,U&&U.is,U),R&8?f(E,u.children):R&16&&Te(u.children,E,null,b,_,Yr(u,y),S,I),B&&Pt(u,null,b,"created"),ee(E,u,u.scopeId,S,b),U){for(const te in U)te!=="value"&&!wn(te)&&i(E,te,null,U[te],y,b);"value"in U&&i(E,"value",null,U.value,y),(w=U.onVnodeBeforeMount)&&Be(w,b,u)}B&&Pt(u,null,b,"beforeMount");const j=Eu(_,D);j&&D.beforeEnter(E),r(E,d,m),((w=U&&U.onVnodeMounted)||j||B)&&we(()=>{w&&Be(w,b,u),j&&D.enter(E),B&&Pt(u,null,b,"mounted")},_)},ee=(u,d,m,b,_)=>{if(m&&g(u,m),b)for(let y=0;y<b.length;y++)g(u,b[y]);if(_){let y=_.subTree;if(d===y||Na(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=_.vnode;ee(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},Te=(u,d,m,b,_,y,S,I,E=0)=>{for(let w=E;w<u.length;w++){const U=u[w]=I?ht(u[w]):He(u[w]);P(null,U,d,m,b,_,y,S,I)}},Ce=(u,d,m,b,_,y,S)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:w,dirs:U}=d;E|=u.patchFlag&16;const R=u.props||Z,D=d.props||Z;let B;if(m&&Ot(m,!1),(B=D.onVnodeBeforeUpdate)&&Be(B,m,d,u),U&&Pt(d,u,m,"beforeUpdate"),m&&Ot(m,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&f(I,""),w?Re(u.dynamicChildren,w,I,m,b,Yr(d,_),y):S||K(u,d,I,null,m,b,Yr(d,_),y,!1),E>0){if(E&16)ct(I,R,D,m,_);else if(E&2&&R.class!==D.class&&i(I,"class",null,D.class,_),E&4&&i(I,"style",R.style,D.style,_),E&8){const j=d.dynamicProps;for(let te=0;te<j.length;te++){const J=j[te],ve=R[J],le=D[J];(le!==ve||J==="value")&&i(I,J,ve,le,_,m)}}E&1&&u.children!==d.children&&f(I,d.children)}else!S&&w==null&&ct(I,R,D,m,_);((B=D.onVnodeUpdated)||U)&&we(()=>{B&&Be(B,m,d,u),U&&Pt(d,u,m,"updated")},b)},Re=(u,d,m,b,_,y,S)=>{for(let I=0;I<d.length;I++){const E=u[I],w=d[I],U=E.el&&(E.type===Xe||!pn(E,w)||E.shapeFlag&70)?h(E.el):m;P(E,w,U,null,b,_,y,S,!0)}},ct=(u,d,m,b,_)=>{if(d!==m){if(d!==Z)for(const y in d)!wn(y)&&!(y in m)&&i(u,y,d[y],null,_,b);for(const y in m){if(wn(y))continue;const S=m[y],I=d[y];S!==I&&y!=="value"&&i(u,y,I,S,_,b)}"value"in m&&i(u,"value",d.value,m.value,_)}},At=(u,d,m,b,_,y,S,I,E)=>{const w=d.el=u?u.el:c(""),U=d.anchor=u?u.anchor:c("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),u==null?(r(w,m,b),r(U,m,b),Te(d.children||[],m,U,_,y,S,I,E)):R>0&&R&64&&D&&u.dynamicChildren?(Re(u.dynamicChildren,D,m,_,y,S,I),(d.key!=null||_&&d===_.subTree)&&Aa(u,d,!0)):K(u,d,m,U,_,y,S,I,E)},Le=(u,d,m,b,_,y,S,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,m,b,S,E):fn(d,m,b,_,y,S,E):jt(u,d,E)},fn=(u,d,m,b,_,y,S)=>{const I=u.component=Vu(u,b,_);if(pa(u)&&(I.ctx.renderer=N),ju(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,oe,S),!u.el){const E=I.subTree=Se(Dn);L(null,E,d,m)}}else oe(I,u,d,m,_,y,S)},jt=(u,d,m)=>{const b=d.component=u.component;if(xu(u,d,m))if(b.asyncDep&&!b.asyncResolved){X(b,d,m);return}else b.next=d,b.update();else d.el=u.el,b.vnode=d},oe=(u,d,m,b,_,y,S)=>{const I=()=>{if(u.isMounted){let{next:R,bu:D,u:B,parent:j,vnode:te}=u;{const be=Pa(u);if(be){R&&(R.el=te.el,X(u,R,S)),be.asyncDep.then(()=>{u.isUnmounted||I()});return}}let J=R,ve;Ot(u,!1),R?(R.el=te.el,X(u,R,S)):R=te,D&&sr(D),(ve=R.props&&R.props.onVnodeBeforeUpdate)&&Be(ve,j,R,te),Ot(u,!0);const le=Xr(u),Oe=u.subTree;u.subTree=le,P(Oe,le,h(Oe.el),v(Oe),u,_,y),R.el=le.el,J===null&&ku(u,le.el),B&&we(B,_),(ve=R.props&&R.props.onVnodeUpdated)&&we(()=>Be(ve,j,R,te),_)}else{let R;const{el:D,props:B}=d,{bm:j,m:te,parent:J,root:ve,type:le}=u,Oe=Tn(d);if(Ot(u,!1),j&&sr(j),!Oe&&(R=B&&B.onVnodeBeforeMount)&&Be(R,J,d),Ot(u,!0),D&&re){const be=()=>{u.subTree=Xr(u),re(D,u.subTree,u,_,null)};Oe&&le.__asyncHydrate?le.__asyncHydrate(D,u,be):be()}else{ve.ce&&ve.ce._injectChildStyle(le);const be=u.subTree=Xr(u);P(null,be,m,b,u,_,y),d.el=be.el}if(te&&we(te,_),!Oe&&(R=B&&B.onVnodeMounted)){const be=d;we(()=>Be(R,J,be),_)}(d.shapeFlag&256||J&&Tn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&we(u.a,_),u.isMounted=!0,d=m=b=null}};u.scope.on();const E=u.effect=new Vo(I);u.scope.off();const w=u.update=E.run.bind(E),U=u.job=E.runIfDirty.bind(E);U.i=u,U.id=u.uid,E.scheduler=()=>Xs(U),Ot(u,!0),w()},X=(u,d,m)=>{d.component=u;const b=u.vnode.props;u.vnode=d,u.next=null,gu(u,d.props,b,m),bu(u,d.children,m),It(),yi(u),St()},K=(u,d,m,b,_,y,S,I,E=!1)=>{const w=u&&u.children,U=u?u.shapeFlag:0,R=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){lt(w,R,m,b,_,y,S,I,E);return}else if(D&256){Ge(w,R,m,b,_,y,S,I,E);return}}B&8?(U&16&&Ae(w,_,y),R!==w&&f(m,R)):U&16?B&16?lt(w,R,m,b,_,y,S,I,E):Ae(w,_,y,!0):(U&8&&f(m,""),B&16&&Te(R,m,b,_,y,S,I,E))},Ge=(u,d,m,b,_,y,S,I,E)=>{u=u||Xt,d=d||Xt;const w=u.length,U=d.length,R=Math.min(w,U);let D;for(D=0;D<R;D++){const B=d[D]=E?ht(d[D]):He(d[D]);P(u[D],B,m,null,_,y,S,I,E)}w>U?Ae(u,_,y,!0,!1,R):Te(d,m,b,_,y,S,I,E,R)},lt=(u,d,m,b,_,y,S,I,E)=>{let w=0;const U=d.length;let R=u.length-1,D=U-1;for(;w<=R&&w<=D;){const B=u[w],j=d[w]=E?ht(d[w]):He(d[w]);if(pn(B,j))P(B,j,m,null,_,y,S,I,E);else break;w++}for(;w<=R&&w<=D;){const B=u[R],j=d[D]=E?ht(d[D]):He(d[D]);if(pn(B,j))P(B,j,m,null,_,y,S,I,E);else break;R--,D--}if(w>R){if(w<=D){const B=D+1,j=B<U?d[B].el:b;for(;w<=D;)P(null,d[w]=E?ht(d[w]):He(d[w]),m,j,_,y,S,I,E),w++}}else if(w>D)for(;w<=R;)_e(u[w],_,y,!0),w++;else{const B=w,j=w,te=new Map;for(w=j;w<=D;w++){const ye=d[w]=E?ht(d[w]):He(d[w]);ye.key!=null&&te.set(ye.key,w)}let J,ve=0;const le=D-j+1;let Oe=!1,be=0;const dn=new Array(le);for(w=0;w<le;w++)dn[w]=0;for(w=B;w<=R;w++){const ye=u[w];if(ve>=le){_e(ye,_,y,!0);continue}let Fe;if(ye.key!=null)Fe=te.get(ye.key);else for(J=j;J<=D;J++)if(dn[J-j]===0&&pn(ye,d[J])){Fe=J;break}Fe===void 0?_e(ye,_,y,!0):(dn[Fe-j]=w+1,Fe>=be?be=Fe:Oe=!0,P(ye,d[Fe],m,null,_,y,S,I,E),ve++)}const gi=Oe?Iu(dn):Xt;for(J=gi.length-1,w=le-1;w>=0;w--){const ye=j+w,Fe=d[ye],mi=ye+1<U?d[ye+1].el:b;dn[w]===0?P(null,Fe,m,mi,_,y,S,I,E):Oe&&(J<0||w!==gi[J]?Ue(Fe,m,mi,2):J--)}}},Ue=(u,d,m,b,_=null)=>{const{el:y,type:S,transition:I,children:E,shapeFlag:w}=u;if(w&6){Ue(u.component.subTree,d,m,b);return}if(w&128){u.suspense.move(d,m,b);return}if(w&64){S.move(u,d,m,N);return}if(S===Xe){r(y,d,m);for(let R=0;R<E.length;R++)Ue(E[R],d,m,b);r(u.anchor,d,m);return}if(S===ar){M(u,d,m);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(y),r(y,d,m),we(()=>I.enter(y),_);else{const{leave:R,delayLeave:D,afterLeave:B}=I,j=()=>r(y,d,m),te=()=>{R(y,()=>{j(),B&&B()})};D?D(y,j,te):te()}else r(y,d,m)},_e=(u,d,m,b=!1,_=!1)=>{const{type:y,props:S,ref:I,children:E,dynamicChildren:w,shapeFlag:U,patchFlag:R,dirs:D,cacheIndex:B}=u;if(R===-2&&(_=!1),I!=null&&vs(I,null,m,u,!0),B!=null&&(d.renderCache[B]=void 0),U&256){d.ctx.deactivate(u);return}const j=U&1&&D,te=!Tn(u);let J;if(te&&(J=S&&S.onVnodeBeforeUnmount)&&Be(J,d,u),U&6)Zn(u.component,m,b);else{if(U&128){u.suspense.unmount(m,b);return}j&&Pt(u,null,d,"beforeUnmount"),U&64?u.type.remove(u,d,m,N,b):w&&!w.hasOnce&&(y!==Xe||R>0&&R&64)?Ae(w,d,m,!1,!0):(y===Xe&&R&384||!_&&U&16)&&Ae(E,d,m),b&&Wt(u)}(te&&(J=S&&S.onVnodeUnmounted)||j)&&we(()=>{J&&Be(J,d,u),j&&Pt(u,null,d,"unmounted")},m)},Wt=u=>{const{type:d,el:m,anchor:b,transition:_}=u;if(d===Xe){Kt(m,b);return}if(d===ar){O(u);return}const y=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,E=()=>S(m,y);I?I(u.el,y,E):E()}else y()},Kt=(u,d)=>{let m;for(;u!==d;)m=p(u),s(u),u=m;s(d)},Zn=(u,d,m)=>{const{bum:b,scope:_,job:y,subTree:S,um:I,m:E,a:w}=u;Ci(E),Ci(w),b&&sr(b),_.stop(),y&&(y.flags|=8,_e(S,u,d,m)),I&&we(I,d),we(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ae=(u,d,m,b=!1,_=!1,y=0)=>{for(let S=y;S<u.length;S++)_e(u[S],d,m,b,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=p(u.anchor||u.el),m=d&&d[Kl];return m?p(m):d};let A=!1;const T=(u,d,m)=>{u==null?d._vnode&&_e(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,m),d._vnode=u,A||(A=!0,yi(),la(),A=!1)},N={p:P,um:_e,m:Ue,r:Wt,mt:fn,mc:Te,pc:K,pbc:Re,n:v,o:t};let q,re;return{render:T,hydrate:q,createApp:hu(T,q)}}function Yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ot({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Eu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Aa(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ht(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Aa(o,c)),c.type===Ur&&(c.el=o.el)}}function Iu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Pa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pa(e)}function Ci(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Su=Symbol.for("v-scx"),Tu=()=>rt(Su);function or(t,e,n){return Oa(t,e,n)}function Oa(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,c=ae({},n),a=e&&r||!e&&i!=="post";let l;if(Ln){if(i==="sync"){const g=Tu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=je,g.resume=je,g.pause=je,g}}const f=ge;c.call=(g,C,P)=>ze(g,f,C,P);let h=!1;i==="post"?c.scheduler=g=>{we(g,f&&f.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(g,C)=>{C?g():Xs(g)}),c.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=$l(t,e,c);return Ln&&(l?l.push(p):a&&p()),p}function Cu(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?xa(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=Kn(this),c=Oa(s,i.bind(r),n);return o(),c}function xa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ru=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Et(e)}Modifiers`]||t[`${$t(e)}Modifiers`];function Au(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&Ru(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ce(f)?f.trim():f)),o.number&&(s=n.map(ds)));let c,a=r[c=Kr(e)]||r[c=Kr(Et(e))];!a&&i&&(a=r[c=Kr($t(e))]),a&&ze(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ze(l,t,6,s)}}function ka(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=l=>{const f=ka(l,e,!0);f&&(c=!0,ae(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ie(t)&&r.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):ae(o,i),ie(t)&&r.set(t,o),o)}function Lr(t,e){return!t||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,$t(e))||G(t,e))}function Xr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:h,data:p,setupState:g,ctx:C,inheritAttrs:P}=t,$=mr(t);let L,k;try{if(n.shapeFlag&4){const O=s||r,W=O;L=He(l.call(W,O,f,h,g,p,C)),k=c}else{const O=e;L=He(O.length>1?O(h,{attrs:c,slots:o,emit:a}):O(h,null)),k=e.props?c:Pu(c)}}catch(O){Rn.length=0,Dr(O,t,1),L=Se(Dn)}let M=L;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:W}=M;O.length&&W&7&&(i&&O.some(Fs)&&(k=Ou(k,i)),M=sn(M,k,!1,!0))}return n.dirs&&(M=sn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Qs(M,n.transition),L=M,mr($),L}const Pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pr(n))&&((e||(e={}))[n]=t[n]);return e},Ou=(t,e)=>{const n={};for(const r in t)(!Fs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ri(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Lr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ri(r,o,l):!0:!!o;return!1}function Ri(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lr(n,i))return!0}return!1}function ku({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Na=t=>t.__isSuspense;function Nu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):jl(t)}const Xe=Symbol.for("v-fgt"),Ur=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),Rn=[];let Ie=null;function Wn(t=!1){Rn.push(Ie=t?null:[])}function Du(){Rn.pop(),Ie=Rn[Rn.length-1]||null}let Mn=1;function Ai(t){Mn+=t,t<0&&Ie&&(Ie.hasOnce=!0)}function Da(t){return t.dynamicChildren=Mn>0?Ie||Xt:null,Du(),Mn>0&&Ie&&Ie.push(t),t}function Fr(t,e,n,r,s,i){return Da(x(t,e,n,r,s,i,!0))}function Mu(t,e,n,r,s){return Da(Se(t,e,n,r,s,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Ma=({key:t})=>t??null,cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||fe(t)||V(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ma(e),ref:e&&cr(e),scopeId:fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return c?(ti(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),Mn>0&&!o&&Ie&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ie.push(a),a}const Se=Lu;function Lu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iu)&&(t=Dn),vr(t)){const c=sn(t,e,!0);return n&&ti(c,n),Mn>0&&!i&&Ie&&(c.shapeFlag&6?Ie[Ie.indexOf(t)]=c:Ie.push(c)),c.patchFlag=-2,c}if(Gu(t)&&(t=t.__vccOpts),e){e=Uu(e);let{class:c,style:a}=e;c&&!ce(c)&&(e.class=Vs(c)),ie(a)&&(Ys(a)&&!H(a)&&(a=ae({},a)),e.style=Hs(a))}const o=ce(t)?1:Na(t)?128:zl(t)?64:ie(t)?4:V(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function Uu(t){return t?Ys(t)||wa(t)?ae({},t):t:null}function sn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Bu(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ma(l),ref:e&&e.ref?n&&i?H(i)?i.concat(cr(e)):[i,cr(e)]:cr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Qs(f,a.clone(f)),f}function Fu(t=" ",e=0){return Se(Ur,null,t,e)}function kt(t,e){const n=Se(ar,null,t);return n.staticCount=e,n}function He(t){return t==null||typeof t=="boolean"?Se(Dn):H(t)?Se(Xe,null,t.slice()):vr(t)?ht(t):Se(Ur,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sn(t)}function ti(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ti(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wa(e)?e._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),r&64?(n=16,e=[Fu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vs([e.class,r.class]));else if(s==="style")e.style=Hs([e.style,r.style]);else if(Pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Be(t,e,n,r=null){ze(t,e,7,[n,r])}const $u=va();let Hu=0;function Vu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$u,i={uid:Hu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ia(r,s),emitsOptions:ka(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Au.bind(null,i),t.ce&&t.ce(i),i}let ge=null,br,Is;{const t=kr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};br=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),Is=e("__VUE_SSR_SETTERS__",n=>Ln=n)}const Kn=t=>{const e=ge;return br(t),t.scope.on(),()=>{t.scope.off(),br(e)}},Pi=()=>{ge&&ge.scope.off(),br(null)};function La(t){return t.vnode.shapeFlag&4}let Ln=!1;function ju(t,e=!1,n=!1){e&&Is(e);const{props:r,children:s}=t.vnode,i=La(t);pu(t,r,i,e),vu(t,s,n);const o=i?Wu(t,e):void 0;return e&&Is(!1),o}function Wu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ou);const{setup:r}=n;if(r){It();const s=t.setupContext=r.length>1?zu(t):null,i=Kn(t),o=jn(r,t,0,[t.props,s]),c=Fo(o);if(St(),i(),(c||t.sp)&&!Tn(t)&&ha(t),c){if(o.then(Pi,Pi),e)return o.then(a=>{Oi(t,a,e)}).catch(a=>{Dr(a,t,0)});t.asyncDep=o}else Oi(t,o,e)}else Ua(t,e)}function Oi(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=ia(e)),Ua(t,n)}let xi;function Ua(t,e,n){const r=t.type;if(!t.render){if(!e&&xi&&!r.render){const s=r.template||Zs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ae(ae({isCustomElement:i,delimiters:c},o),a);r.render=xi(s,l)}}t.render=r.render||je}{const s=Kn(t);It();try{au(t)}finally{St(),s()}}}const Ku={get(t,e){return ue(t,"get",""),t[e]}};function zu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ku),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ia(kl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}})):t.proxy}function Gu(t){return V(t)&&"__vccOpts"in t}const xe=(t,e)=>Fl(t,e,Ln);function Fa(t,e,n){const r=arguments.length;return r===2?ie(e)&&!H(e)?vr(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),Se(t,e,n))}const qu="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ss;const ki=typeof window<"u"&&window.trustedTypes;if(ki)try{Ss=ki.createPolicy("vue",{createHTML:t=>t})}catch{}const Ba=Ss?t=>Ss.createHTML(t):t=>t,Ju="http://www.w3.org/2000/svg",Yu="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Ni=Ye&&Ye.createElement("template"),Xu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ye.createElementNS(Ju,t):e==="mathml"?Ye.createElementNS(Yu,t):n?Ye.createElement(t,{is:n}):Ye.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ye.createTextNode(t),createComment:t=>Ye.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ye.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ni.innerHTML=Ba(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ni.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qu=Symbol("_vtc");function Zu(t,e,n){const r=t[Qu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yr=Symbol("_vod"),$a=Symbol("_vsh"),Qr={beforeMount(t,{value:e},{transition:n}){t[yr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),gn(t,!0),r.enter(t)):r.leave(t,()=>{gn(t,!1)}):gn(t,e))},beforeUnmount(t,{value:e}){gn(t,e)}};function gn(t,e){t.style.display=e?t[yr]:"none",t[$a]=!e}const ef=Symbol(""),tf=/(^|;)\s*display\s*:/;function nf(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&lr(r,c,"")}else for(const o in e)n[o]==null&&lr(r,o,"");for(const o in n)o==="display"&&(i=!0),lr(r,o,n[o])}else if(s){if(e!==n){const o=r[ef];o&&(n+=";"+o),r.cssText=n,i=tf.test(n)}}else e&&t.removeAttribute("style");yr in t&&(t[yr]=i?r.display:"",t[$a]&&(r.display="none"))}const Di=/\s*!important$/;function lr(t,e,n){if(H(n))n.forEach(r=>lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rf(t,e);Di.test(n)?t.setProperty($t(r),n.replace(Di,""),"important"):t[r]=n}}const Mi=["Webkit","Moz","ms"],Zr={};function rf(t,e){const n=Zr[e];if(n)return n;let r=Et(e);if(r!=="filter"&&r in t)return Zr[e]=r;r=Bo(r);for(let s=0;s<Mi.length;s++){const i=Mi[s]+r;if(i in t)return Zr[e]=i}return e}const Li="http://www.w3.org/1999/xlink";function Ui(t,e,n,r,s,i=fl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Li,e.slice(6,e.length)):t.setAttributeNS(Li,e,n):n==null||i&&!Ho(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ln(n)?String(n):n)}function Fi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ba(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ho(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function qt(t,e,n,r){t.addEventListener(e,n,r)}function sf(t,e,n,r){t.removeEventListener(e,n,r)}const Bi=Symbol("_vei");function of(t,e,n,r,s=null){const i=t[Bi]||(t[Bi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=af(e);if(r){const l=i[e]=uf(r,s);qt(t,c,l,a)}else o&&(sf(t,c,o,a),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function af(t){let e;if($i.test(t)){e={};let r;for(;r=t.match($i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$t(t.slice(2)),e]}let es=0;const cf=Promise.resolve(),lf=()=>es||(cf.then(()=>es=0),es=Date.now());function uf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(ff(r,n.value),e,5,[r])};return n.value=t,n.attached=lf(),n}function ff(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,df=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Zu(t,r,o):e==="style"?nf(t,n,r):Pr(e)?Fs(e)||of(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hf(t,e,r,o))?(Fi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ui(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(r))?Fi(t,Et(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ui(t,e,r,o))};function hf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hi(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hi(e)&&ce(n)?!1:e in t}const Vi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>sr(e,n):e};function pf(t){t.target.composing=!0}function ji(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ts=Symbol("_assign"),wr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ts]=Vi(s);const i=r||s.props&&s.props.type==="number";qt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ds(c)),t[ts](c)}),n&&qt(t,"change",()=>{t.value=t.value.trim()}),e||(qt(t,"compositionstart",pf),qt(t,"compositionend",ji),qt(t,"change",ji))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ts]=Vi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ds(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},gf=ae({patchProp:df},Xu);let Wi;function mf(){return Wi||(Wi=yu(gf))}const _f=(...t)=>{const e=mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bf(t){return ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof document<"u";function Ha(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ha(t.default)}const Y=Object.assign;function ns(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const An=()=>{},De=Array.isArray,Va=/#/g,wf=/&/g,Ef=/\//g,If=/=/g,Sf=/\?/g,ja=/\+/g,Tf=/%5B/g,Cf=/%5D/g,Wa=/%5E/g,Rf=/%60/g,Ka=/%7B/g,Af=/%7C/g,za=/%7D/g,Pf=/%20/g;function ni(t){return encodeURI(""+t).replace(Af,"|").replace(Tf,"[").replace(Cf,"]")}function Of(t){return ni(t).replace(Ka,"{").replace(za,"}").replace(Wa,"^")}function Ts(t){return ni(t).replace(ja,"%2B").replace(Pf,"+").replace(Va,"%23").replace(wf,"%26").replace(Rf,"`").replace(Ka,"{").replace(za,"}").replace(Wa,"^")}function xf(t){return Ts(t).replace(If,"%3D")}function kf(t){return ni(t).replace(Va,"%23").replace(Sf,"%3F")}function Nf(t){return t==null?"":kf(t).replace(Ef,"%2F")}function Un(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Df=/\/$/,Mf=t=>t.replace(Df,"");function rs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Bf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Un(o)}}function Lf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ki(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&on(e.matched[r],n.matched[s])&&Ga(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function on(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ga(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ff(t[n],e[n]))return!1;return!0}function Ff(t,e){return De(t)?zi(t,e):De(e)?zi(e,t):t===e}function zi(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Bf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fn;(function(t){t.pop="pop",t.push="push"})(Fn||(Fn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function $f(t){if(!t)if(Jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mf(t)}const Hf=/^[^#]+#/;function Vf(t,e){return t.replace(Hf,"#")+e}function jf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $r=()=>({left:window.scrollX,top:window.scrollY});function Wf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const Cs=new Map;function Kf(t,e){Cs.set(t,e)}function zf(t){const e=Cs.get(t);return Cs.delete(t),e}let Gf=()=>location.protocol+"//"+location.host;function qa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ki(a,"")}return Ki(n,t)+r+s}function qf(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const g=qa(t,location),C=n.value,P=e.value;let $=0;if(p){if(n.value=g,e.value=p,o&&o===C){o=null;return}$=P?p.position-P.position:0}else r(g);s.forEach(L=>{L(n.value,C,{delta:$,type:Fn.pop,direction:$?$>0?Pn.forward:Pn.back:Pn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const g=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Y({},p.state,{scroll:$r()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function qi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$r():null}}function Jf(t){const{history:e,location:n}=window,r={value:qa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Gf()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(a,l){const f=Y({},e.state,qi(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=Y({},s.value,e.state,{forward:a,scroll:$r()});i(f.current,f,!0);const h=Y({},qi(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Yf(t){t=$f(t);const e=Jf(t),n=qf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:Vf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xf(t){return typeof t=="string"||t&&typeof t=="object"}function Ja(t){return typeof t=="string"||typeof t=="symbol"}const Ya=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function an(t,e){return Y(new Error,{type:t,[Ya]:!0},e)}function Je(t,e){return t instanceof Error&&Ya in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",Qf={sensitive:!1,strict:!1,start:!0,end:!0},Zf=/[.+*?^${}()[\]/\\]/g;function ed(t,e){const n=Y({},Qf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Zf,"\\$&"),g+=40;else if(p.type===1){const{value:C,repeatable:P,optional:$,regexp:L}=p;i.push({name:C,repeatable:P,optional:$});const k=L||Yi;if(k!==Yi){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+O.message)}}let M=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(M=$&&l.length<2?`(?:/${M})`:"/"+M),$&&(M+="?"),s+=M,g+=20,$&&(g+=-8),P&&(g+=-20),k===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",C=i[p-1];h[C.name]=g&&C.repeatable?g.split("/"):g}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:C,repeatable:P,optional:$}=g,L=C in l?l[C]:"";if(De(L)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=De(L)?L.join("/"):L;if(!k)if($)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function td(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xa(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=td(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nd={type:0,value:""},rd=/[a-zA-Z0-9_]/;function sd(t){if(!t)return[[]];if(t==="/")return[[nd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:rd.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function id(t,e,n){const r=ed(sd(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function od(t,e){const n=[],r=new Map;e=to({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const C=!g,P=Zi(h);P.aliasOf=g&&g.record;const $=to(e,h),L=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of O)L.push(Zi(Y({},P,{components:g?g.record.components:P.components,path:W,aliasOf:g?g.record:P})))}let k,M;for(const O of L){const{path:W}=O;if(p&&W[0]!=="/"){const se=p.record.path,ee=se[se.length-1]==="/"?"":"/";O.path=p.record.path+(W&&ee+W)}if(k=id(O,p,$),g?g.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),C&&h.name&&!eo(k)&&o(h.name)),Qa(k)&&a(k),P.children){const se=P.children;for(let ee=0;ee<se.length;ee++)i(se[ee],k,g&&g.children[ee])}g=g||k}return M?()=>{o(M)}:An}function o(h){if(Ja(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=ld(h,n);n.splice(p,0,h),h.record.name&&!eo(h)&&r.set(h.record.name,h)}function l(h,p){let g,C={},P,$;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw an(1,{location:h});$=g.record.name,C=Y(Qi(p.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Qi(h.params,g.keys.map(M=>M.name))),P=g.stringify(C)}else if(h.path!=null)P=h.path,g=n.find(M=>M.re.test(P)),g&&(C=g.parse(P),$=g.record.name);else{if(g=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!g)throw an(1,{location:h,currentLocation:p});$=g.record.name,C=Y({},p.params,h.params),P=g.stringify(C)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:$,path:P,params:C,matched:L,meta:cd(L)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zi(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ad(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ad(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function eo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cd(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function to(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ld(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Xa(t,e[i])<0?r=i:n=i+1}const s=ud(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ud(t){let e=t;for(;e=e.parent;)if(Qa(e)&&Xa(t,e)===0)return e}function Qa({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ja," "),o=i.indexOf("="),c=Un(o<0?i:i.slice(0,o)),a=o<0?null:Un(i.slice(o+1));if(c in e){let l=e[c];De(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function no(t){let e="";for(let n in t){const r=t[n];if(n=xf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hd=Symbol(""),ro=Symbol(""),ri=Symbol(""),Za=Symbol(""),Rs=Symbol("");function mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(an(4,{from:n,to:e})):p instanceof Error?a(p):Xf(p)?a(an(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function ss(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ha(a)){const f=(a.__vccOpts||a)[e];f&&i.push(pt(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const h=yf(f)?f.default:f;o.mods[c]=f,o.components[c]=h;const g=(h.__vccOpts||h)[e];return g&&pt(g,n,r,o,c,s)()}))}}return i}function so(t){const e=rt(ri),n=rt(Za),r=xe(()=>{const a=Mt(t.to);return e.resolve(a)}),s=xe(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(on.bind(null,f));if(p>-1)return p;const g=io(a[l-2]);return l>1&&io(f)===g&&h[h.length-1].path!==g?h.findIndex(on.bind(null,a[l-2])):p}),i=xe(()=>s.value>-1&&_d(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ga(n.params,r.value.params));function c(a={}){return md(a)?e[Mt(t.replace)?"replace":"push"](Mt(t.to)).catch(An):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const pd=da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:so,setup(t,{slots:e}){const n=Nr(so(t)),{options:r}=rt(ri),s=xe(()=>({[oo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gd=pd;function md(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _d(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function io(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oo=(t,e,n)=>t??e??n,vd=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rt(Rs),s=xe(()=>t.route||r.value),i=rt(ro,0),o=xe(()=>{let l=Mt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=xe(()=>s.value.matched[o.value]);ir(ro,xe(()=>o.value+1)),ir(hd,c),ir(Rs,s);const a=Nl();return or(()=>[a.value,c.value,t.name],([l,f,h],[p,g,C])=>{f&&(f.instances[h]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!on(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return ao(n.default,{Component:p,route:l});const g=h.props[f],C=g?g===!0?l.params:typeof g=="function"?g(l):g:null,$=Fa(p,Y({},C,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return ao(n.default,{Component:$,route:l})||$}}});function ao(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ec=vd;function bd(t){const e=od(t.routes,t),n=t.parseQuery||fd,r=t.stringifyQuery||no,s=t.history,i=mn(),o=mn(),c=mn(),a=Dl(ut);let l=ut;Jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ns.bind(null,v=>""+v),h=ns.bind(null,Nf),p=ns.bind(null,Un);function g(v,A){let T,N;return Ja(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function C(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function L(v,A){if(A=Y({},A||a.value),typeof v=="string"){const d=rs(n,v,A.path),m=e.resolve({path:d.path},A),b=s.createHref(d.fullPath);return Y(d,m,{params:p(m.params),hash:Un(d.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=Y({},v,{path:rs(n,v.path,A.path).path});else{const d=Y({},v.params);for(const m in d)d[m]==null&&delete d[m];T=Y({},v,{params:h(d)}),A.params=h(A.params)}const N=e.resolve(T,A),q=v.hash||"";N.params=f(p(N.params));const re=Lf(r,Y({},v,{hash:Of(q),path:N.path})),u=s.createHref(re);return Y({fullPath:re,hash:q,query:r===no?dd(v.query):v.query||{}},N,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?rs(n,v,a.value.path):Y({},v)}function M(v,A){if(l!==v)return an(8,{from:A,to:v})}function O(v){return ee(v)}function W(v){return O(Y(k(v),{replace:!0}))}function se(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),Y({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function ee(v,A){const T=l=L(v),N=a.value,q=v.state,re=v.force,u=v.replace===!0,d=se(T);if(d)return ee(Y(k(d),{state:typeof d=="object"?Y({},q,d.state):q,force:re,replace:u}),A||T);const m=T;m.redirectedFrom=A;let b;return!re&&Uf(r,N,T)&&(b=an(16,{to:m,from:N}),Ue(N,N,!0,!1)),(b?Promise.resolve(b):Re(m,N)).catch(_=>Je(_)?Je(_,2)?_:lt(_):K(_,m,N)).then(_=>{if(_){if(Je(_,2))return ee(Y({replace:u},k(_.to),{state:typeof _.to=="object"?Y({},q,_.to.state):q,force:re}),A||m)}else _=At(m,N,!0,u,q);return ct(m,N,_),_})}function Te(v,A){const T=M(v,A);return T?Promise.reject(T):Promise.resolve()}function Ce(v){const A=Kt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Re(v,A){let T;const[N,q,re]=yd(v,A);T=ss(N.reverse(),"beforeRouteLeave",v,A);for(const d of N)d.leaveGuards.forEach(m=>{T.push(pt(m,v,A))});const u=Te.bind(null,v,A);return T.push(u),Ae(T).then(()=>{T=[];for(const d of i.list())T.push(pt(d,v,A));return T.push(u),Ae(T)}).then(()=>{T=ss(q,"beforeRouteUpdate",v,A);for(const d of q)d.updateGuards.forEach(m=>{T.push(pt(m,v,A))});return T.push(u),Ae(T)}).then(()=>{T=[];for(const d of re)if(d.beforeEnter)if(De(d.beforeEnter))for(const m of d.beforeEnter)T.push(pt(m,v,A));else T.push(pt(d.beforeEnter,v,A));return T.push(u),Ae(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=ss(re,"beforeRouteEnter",v,A,Ce),T.push(u),Ae(T))).then(()=>{T=[];for(const d of o.list())T.push(pt(d,v,A));return T.push(u),Ae(T)}).catch(d=>Je(d,8)?d:Promise.reject(d))}function ct(v,A,T){c.list().forEach(N=>Ce(()=>N(v,A,T)))}function At(v,A,T,N,q){const re=M(v,A);if(re)return re;const u=A===ut,d=Jt?history.state:{};T&&(N||u?s.replace(v.fullPath,Y({scroll:u&&d&&d.scroll},q)):s.push(v.fullPath,q)),a.value=v,Ue(v,A,T,u),lt()}let Le;function fn(){Le||(Le=s.listen((v,A,T)=>{if(!Zn.listening)return;const N=L(v),q=se(N);if(q){ee(Y(q,{replace:!0}),N).catch(An);return}l=N;const re=a.value;Jt&&Kf(Gi(re.fullPath,T.delta),$r()),Re(N,re).catch(u=>Je(u,12)?u:Je(u,2)?(ee(u.to,N).then(d=>{Je(d,20)&&!T.delta&&T.type===Fn.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(u,N,re))).then(u=>{u=u||At(N,re,!1),u&&(T.delta&&!Je(u,8)?s.go(-T.delta,!1):T.type===Fn.pop&&Je(u,20)&&s.go(-1,!1)),ct(N,re,u)}).catch(An)}))}let jt=mn(),oe=mn(),X;function K(v,A,T){lt(v);const N=oe.list();return N.length?N.forEach(q=>q(v,A,T)):console.error(v),Promise.reject(v)}function Ge(){return X&&a.value!==ut?Promise.resolve():new Promise((v,A)=>{jt.add([v,A])})}function lt(v){return X||(X=!v,fn(),jt.list().forEach(([A,T])=>v?T(v):A()),jt.reset()),v}function Ue(v,A,T,N){const{scrollBehavior:q}=t;if(!Jt||!q)return Promise.resolve();const re=!T&&zf(Gi(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return aa().then(()=>q(v,A,re)).then(u=>u&&Wf(u)).catch(u=>K(u,v,A))}const _e=v=>s.go(v);let Wt;const Kt=new Set,Zn={currentRoute:a,listening:!0,addRoute:g,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:P,resolve:L,options:t,push:O,replace:W,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:oe.add,isReady:Ge,install(v){const A=this;v.component("RouterLink",gd),v.component("RouterView",ec),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(a)}),Jt&&!Wt&&a.value===ut&&(Wt=!0,O(s.location).catch(q=>{}));const T={};for(const q in ut)Object.defineProperty(T,q,{get:()=>a.value[q],enumerable:!0});v.provide(ri,A),v.provide(Za,na(T)),v.provide(Rs,a);const N=v.unmount;Kt.add(v),v.unmount=function(){Kt.delete(v),Kt.size<1&&(l=ut,Le&&Le(),Le=null,a.value=ut,Wt=!1,X=!1),N()}}};function Ae(v){return v.reduce((A,T)=>A.then(()=>Ce(T)),Promise.resolve())}return Zn}function yd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>on(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>on(l,a))||s.push(a))}return[n,r,s]}const wd={__name:"App",setup(t){return(e,n)=>(Wn(),Mu(Mt(ec)))}};var co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ed=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),r.push(n[f],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Id;const p=i<<2|c>>4;if(r.push(p),l!==64){const g=c<<4&240|l>>2;if(r.push(g),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sd=function(t){const e=tc(t);return nc.encodeByteArray(e,!0)},rc=function(t){return Sd(t).replace(/\./g,"")},sc=function(t){try{return nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=()=>Td().__FIREBASE_DEFAULTS__,Rd=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},si=()=>{try{return Cd()||Rd()||Ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pd=t=>{var e,n;return(n=(e=si())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ic=()=>{var t;return(t=si())===null||t===void 0?void 0:t.config},oc=t=>{var e;return(e=si())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function kd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Md(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ld(){try{return typeof indexedDB=="object"}catch{return!1}}function Ud(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fd,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,c,r)}}function Bd(t,e){return t.replace($d,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $d=/\{\$([^}]+)}/g;function Hd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lo(i)&&lo(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vd(t,e){const n=new jd(t,e);return n.subscribe.bind(n)}class jd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=is),s.error===void 0&&(s.error=is),s.complete===void 0&&(s.complete=is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Od;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gd(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(t){return t===Nt?void 0:t}function Gd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Jd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Yd=Q.INFO,Xd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Qd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=Yd,this._logHandler=Qd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Zd=(t,e)=>e.some(n=>t instanceof n);let uo,fo;function eh(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function th(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cc=new WeakMap,As=new WeakMap,lc=new WeakMap,os=new WeakMap,ii=new WeakMap;function nh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cc.set(n,t)}).catch(()=>{}),ii.set(e,t),e}function rh(t){if(As.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});As.set(t,e)}let Ps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return As.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sh(t){Ps=t(Ps)}function ih(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(as(this),e,...n);return lc.set(r,e.sort?e.sort():[e]),yt(r)}:th().includes(t)?function(...e){return t.apply(as(this),e),yt(cc.get(this))}:function(...e){return yt(t.apply(as(this),e))}}function oh(t){return typeof t=="function"?ih(t):(t instanceof IDBTransaction&&rh(t),Zd(t,eh())?new Proxy(t,Ps):t)}function yt(t){if(t instanceof IDBRequest)return nh(t);if(os.has(t))return os.get(t);const e=oh(t);return e!==t&&(os.set(t,e),ii.set(e,t)),e}const as=t=>ii.get(t);function ah(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=yt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yt(o.result),a.oldVersion,a.newVersion,yt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const ch=["get","getKey","getAll","getAllKeys","count"],lh=["put","add","delete","clear"],cs=new Map;function ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cs.get(e))return cs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ch.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return cs.set(e,i),i}sh(t=>({...t,get:(e,n,r)=>ho(e,n)||t.get(e,n,r),has:(e,n)=>!!ho(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Os="@firebase/app",po="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new ac("@firebase/app"),dh="@firebase/app-compat",hh="@firebase/analytics-compat",ph="@firebase/analytics",gh="@firebase/app-check-compat",mh="@firebase/app-check",_h="@firebase/auth",vh="@firebase/auth-compat",bh="@firebase/database",yh="@firebase/data-connect",wh="@firebase/database-compat",Eh="@firebase/functions",Ih="@firebase/functions-compat",Sh="@firebase/installations",Th="@firebase/installations-compat",Ch="@firebase/messaging",Rh="@firebase/messaging-compat",Ah="@firebase/performance",Ph="@firebase/performance-compat",Oh="@firebase/remote-config",xh="@firebase/remote-config-compat",kh="@firebase/storage",Nh="@firebase/storage-compat",Dh="@firebase/firestore",Mh="@firebase/vertexai",Lh="@firebase/firestore-compat",Uh="firebase",Fh="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]",Bh={[Os]:"fire-core",[dh]:"fire-core-compat",[ph]:"fire-analytics",[hh]:"fire-analytics-compat",[mh]:"fire-app-check",[gh]:"fire-app-check-compat",[_h]:"fire-auth",[vh]:"fire-auth-compat",[bh]:"fire-rtdb",[yh]:"fire-data-connect",[wh]:"fire-rtdb-compat",[Eh]:"fire-fn",[Ih]:"fire-fn-compat",[Sh]:"fire-iid",[Th]:"fire-iid-compat",[Ch]:"fire-fcm",[Rh]:"fire-fcm-compat",[Ah]:"fire-perf",[Ph]:"fire-perf-compat",[Oh]:"fire-rc",[xh]:"fire-rc-compat",[kh]:"fire-gcs",[Nh]:"fire-gcs-compat",[Dh]:"fire-fst",[Lh]:"fire-fst-compat",[Mh]:"fire-vertex","fire-js":"fire-js",[Uh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Map,$h=new Map,ks=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(ks.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ks.set(e,t);for(const n of Ir.values())go(n,t);for(const n of $h.values())go(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ve(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new zn("app","Firebase",Hh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=Fh;function fc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=ic()),!n)throw wt.create("no-options");const i=Ir.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new qd(s);for(const a of ks.values())o.addComponent(a);const c=new Vh(n,r,o);return Ir.set(s,c),c}function jh(t=xs){const e=Ir.get(t);if(!e&&t===xs&&ic())return fc();if(!e)throw wt.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=Bh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(c.join(" "));return}Bn(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="firebase-heartbeat-database",Kh=1,$n="firebase-heartbeat-store";let ls=null;function dc(){return ls||(ls=ah(Wh,Kh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),ls}async function zh(t){try{const n=(await dc()).transaction($n),r=await n.objectStore($n).get(hc(t));return await n.done,r}catch(e){if(e instanceof Tt)it.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function mo(t,e){try{const r=(await dc()).transaction($n,"readwrite");await r.objectStore($n).put(e,hc(t)),await r.done}catch(n){if(n instanceof Tt)it.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function hc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1024,qh=30*24*60*60*1e3;class Jh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_o();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=qh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:r,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function _o(){return new Date().toISOString().substring(0,10)}function Yh(t,e=Gh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ld()?Ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vo(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){Bn(new cn("platform-logger",e=>new uh(e),"PRIVATE")),Bn(new cn("heartbeat",e=>new Jh(e),"PRIVATE")),en(Os,po,t),en(Os,po,"esm2017"),en("fire-js","")}Qh("");function oi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zh=pc,gc=new zn("auth","Firebase",pc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new ac("@firebase/auth");function ep(t,...e){Sr.logLevel<=Q.WARN&&Sr.warn(`Auth (${qn}): ${t}`,...e)}function ur(t,...e){Sr.logLevel<=Q.ERROR&&Sr.error(`Auth (${qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw ai(t,...e)}function We(t,...e){return ai(t,...e)}function mc(t,e,n){const r=Object.assign(Object.assign({},Zh()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ai(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gc.create(t,...e)}function F(t,e,...n){if(!t)throw ai(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function ot(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tp(){return bo()==="http:"||bo()==="https:"}function bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tp()||Nd()||"connection"in navigator)?navigator.onLine:!0}function rp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=xd()||Dd()}get(){return np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Jn(3e4,6e4);function Ct(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rt(t,e,n,r,s={}){return vc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return kd()||(l.referrerPolicy="no-referrer"),_c.fetch()(bc(t,t.config.apiHost,n,c),l)})}async function vc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sp),e);try{const s=new ap(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw rr(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mc(t,f,l);Me(t,f)}}catch(s){if(s instanceof Tt)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Rt(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ci(t.config,s):`${t.config.apiScheme}://${s}`}function op(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ap{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),ip.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}function yo(t){return t!==void 0&&t.enterprise!==void 0}class cp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return op(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lp(t,e){return Rt(t,"GET","/v2/recaptchaConfig",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e){return Rt(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return Rt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fp(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),s=li(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(us(s.auth_time)),issuedAtTime:On(us(s.iat)),expirationTime:On(us(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function us(t){return Number(t)*1e3}function li(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=sc(n);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wo(t){const e=li(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&dp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hn(t,yc(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wc(i.providerUserInfo):[],c=gp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ds(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function pp(t){const e=Ht(t);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wc(t){return t.map(e=>{var{providerId:n}=e,r=oi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e){const n=await vc(t,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",_c.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _p(t,e){return Rt(t,"POST","/v2/accounts:revokeToken",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=wo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new tn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ds(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fp(this,e)}reload(){return pp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Hn(this,up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:O,isAnonymous:W,providerData:se,stsTokenManager:ee}=n;F(M&&ee,e,"internal-error");const Te=tn.fromJSON(this.name,ee);F(typeof M=="string",e,"internal-error"),ft(h,e.name),ft(p,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof W=="boolean",e,"internal-error"),ft(g,e.name),ft(C,e.name),ft(P,e.name),ft($,e.name),ft(L,e.name),ft(k,e.name);const Ce=new tt({uid:M,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:W,photoURL:C,phoneNumber:g,tenantId:P,stsTokenManager:Te,createdAt:L,lastLoginAt:k});return se&&Array.isArray(se)&&(Ce.providerData=se.map(Re=>Object.assign({},Re))),$&&(Ce._redirectEventId=$),Ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new tn;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new tn;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ds(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map;function nt(t){ot(t instanceof Function,"Expected a class definition");let e=Eo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ec.type="NONE";const Io=Ec;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(nt(Io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(Io);const o=fr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=tt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new nn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ac(e))return"Blackberry";if(Pc(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||Tc(e))&&!e.includes("edge/"))return"Chrome";if(Rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ic(t=me()){return/firefox\//i.test(t)}function Sc(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tc(t=me()){return/crios\//i.test(t)}function Cc(t=me()){return/iemobile/i.test(t)}function Rc(t=me()){return/android/i.test(t)}function Ac(t=me()){return/blackberry/i.test(t)}function Pc(t=me()){return/webos/i.test(t)}function ui(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vp(t=me()){var e;return ui(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bp(){return Md()&&document.documentMode===10}function Oc(t=me()){return ui(t)||Rc(t)||Pc(t)||Ac(t)||/windows phone/i.test(t)||Cc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e=[]){let n;switch(t){case"Browser":n=So(me());break;case"Worker":n=`${So(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e={}){return Rt(t,"GET","/v2/passwordPolicy",Ct(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=6;class Ip{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ep,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(st(this));const n=e?Ht(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wp(this),n=new Ip(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _p(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ep(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vt(t){return Ht(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tp(t){Hr=t}function kc(t){return Hr.loadJS(t)}function Cp(){return Hr.recaptchaEnterpriseScript}function Rp(){return Hr.gapiScript}function Ap(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Pp{constructor(){this.enterprise=new Op}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Op{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xp="recaptcha-enterprise",Nc="NO_RECAPTCHA";class kp{constructor(e){this.type=xp,this.auth=Vt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{lp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new cp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;yo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Nc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&yo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Cp();a.length!==0&&(a+=c),kc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Co(t,e,n,r=!1,s=!1){const i=new kp(t);let o;if(s)o=Nc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ms(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Co(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Co(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e){const n=uc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function Dp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mp(t,e,n){const r=Vt(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Dc(e),{host:o,port:c}=Lp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Up()}function Dc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lp(t){const e=Dc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ro(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ro(o)}}}function Ro(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Up(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Fp(t,e){return Rt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Ct(t,e))}async function Hp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends fi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,n,"signInWithPassword",Bp);case"emailLink":return $p(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,r,"signUpPassword",Fp);case"emailLink":return Hp(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="http://localhost";class Ft extends fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=oi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:Vp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wp(t){const e=vn(bn(t)).link,n=e?vn(bn(e)).deep_link_id:null,r=vn(bn(t)).deep_link_id;return(r?vn(bn(r)).link:null)||r||n||e||t}class di{constructor(e){var n,r,s,i,o,c;const a=vn(bn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=jp((s=a.mode)!==null&&s!==void 0?s:null);F(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Wp(e);try{return new di(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,n){return Vn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=di.parseLink(n);return F(r,"argument-error"),Vn._fromEmailAndCode(e,r.code,r.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Mc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Xn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Xn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e){return Yn(t,"POST","/v1/accounts:signUp",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=Ao(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ao(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Cr(e,n,r,s)}}function Lc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,i,e,r):i})}async function zp(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e,n=!1){const{auth:r}=t;if(Ve(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await Hn(t,Lc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=li(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t,e,n=!1){if(Ve(t.app))return Promise.reject(st(t));const r="signIn",s=await Lc(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function qp(t,e){return Uc(Vt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(t){const e=Vt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jp(t,e,n){if(Ve(t.app))return Promise.reject(st(t));const r=Vt(t),o=await Ms(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Kp).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Fc(t),a}),c=await Bt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Yp(t,e,n){return Ve(t.app)?Promise.reject(st(t)):qp(Ht(t),un.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fc(t),r})}function Xp(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function Qp(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}const Rr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rr,"1"),this.storage.removeItem(Rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=1e3,eg=10;class $c extends Bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$c.type="LOCAL";const tg=$c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hc.type="SESSION";const Vc=Hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await ng(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=hi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function sg(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function ig(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function og(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ag(){return jc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebaseLocalStorageDb",cg=1,Ar="firebaseLocalStorage",Kc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jr(t,e){return t.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function lg(){const t=indexedDB.deleteDatabase(Wc);return new Qn(t).toPromise()}function Ls(){const t=indexedDB.open(Wc,cg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ar,{keyPath:Kc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ar)?e(r):(r.close(),await lg(),e(await Ls()))})})}async function Po(t,e,n){const r=jr(t,!0).put({[Kc]:e,value:n});return new Qn(r).toPromise()}async function ug(t,e){const n=jr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Oo(t,e){const n=jr(t,!0).delete(e);return new Qn(n).toPromise()}const fg=800,dg=3;class zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ls(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(ag()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ig(),!this.activeServiceWorker)return;this.sender=new rg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||og()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ls();return await Po(e,Rr,"1"),await Oo(e,Rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Po(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ug(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zc.type="LOCAL";const hg=zc;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){return e?nt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gg(t){return Uc(t.auth,new pi(t),t.bypassAuthState)}function mg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Gp(n,new pi(t),t.bypassAuthState)}async function _g(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),zp(n,new pi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gg;case"linkViaPopup":case"linkViaRedirect":return _g;case"reauthViaPopup":case"reauthViaRedirect":return mg;default:Me(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Jn(2e3,1e4);class Yt extends Gc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vg.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="pendingRedirect",dr=new Map;class yg extends Gc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const r=await wg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wg(t,e){const n=Sg(e),r=Ig(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Eg(t,e){dr.set(t._key(),e)}function Ig(t){return nt(t._redirectPersistence)}function Sg(t){return fr(bg,t.config.apiKey,t.name)}async function Tg(t,e,n=!1){if(Ve(t.app))return Promise.reject(st(t));const r=Vt(t),s=pg(r,e),o=await new yg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=10*60*1e3;class Rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ag(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xo(e))}saveEventToCache(e){this.cachedEventUids.add(xo(e)),this.lastProcessedEventTime=Date.now()}}function xo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ag(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e={}){return Rt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xg=/^https?/;async function kg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pg(t);for(const n of e)try{if(Ng(n))return}catch{}Me(t,"unauthorized-domain")}function Ng(t){const e=Ns(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xg.test(n))return!1;if(Og.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Jn(3e4,6e4);function ko(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mg(t){return new Promise((e,n)=>{var r,s,i;function o(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(We(t,"network-request-failed"))},timeout:Dg.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const c=Ap("iframefcb");return Ke()[c]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},kc(`${Rp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw hr=null,e})}let hr=null;function Lg(t){return hr=hr||Mg(t),hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Jn(5e3,15e3),Fg="__/auth/iframe",Bg="emulator/auth/iframe",$g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ci(e,Bg):`https://${t.config.authDomain}/${Fg}`,r={apiKey:e.apiKey,appName:t.name,v:qn},s=Hg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function jg(t){const e=await Lg(t),n=Ke().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Vg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$g,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),c=Ke().setTimeout(()=>{i(o)},Ug.get());function a(){Ke().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kg=500,zg=600,Gg="_blank",qg="http://localhost";class No{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jg(t,e,n,r=Kg,s=zg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Wg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=me().toLowerCase();n&&(c=Tc(l)?Gg:n),Ic(l)&&(e=e||qg,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[g,C])=>`${p}${g}=${C},`,"");if(vp(l)&&c!=="_self")return Yg(e||"",c),new No(null);const h=window.open(e||"",c,f);F(h,t,"popup-blocked");try{h.focus()}catch{}return new No(h)}function Yg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="__/auth/handler",Qg="emulator/auth/handler",Zg=encodeURIComponent("fac");async function Do(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(e instanceof Mc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Zg}=${encodeURIComponent(a)}`:"";return`${em(t)}?${Gn(c).slice(1)}${l}`}function em({config:t}){return t.emulator?ci(t,Qg):`https://${t.authDomain}/${Xg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class tm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vc,this._completeRedirectFn=Tg,this._overrideRedirectResult=Eg}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Do(e,n,r,Ns(),s);return Jg(e,o,hi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Do(e,n,r,Ns(),s);return sg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jg(e),r=new Rg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fs,{type:fs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fs];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oc()||Sc()||ui()}}const nm=tm;var Mo="@firebase/auth",Lo="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function im(t){Bn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xc(t)},l=new Sp(r,s,i,a);return Dp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new cn("auth-internal",e=>{const n=Vt(e.getProvider("auth").getImmediate());return(r=>new rm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Mo,Lo,sm(t)),en(Mo,Lo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=5*60,am=oc("authIdTokenMaxAge")||om;let Uo=null;const cm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>am)return;const s=n==null?void 0:n.token;Uo!==s&&(Uo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jc(t=jh()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Np(t,{popupRedirectResolver:nm,persistence:[hg,tg,Vc]}),r=oc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cm(i.toString());Qp(n,o,()=>o(n.currentUser)),Xp(n,c=>o(c))}}const s=Pd("auth");return s&&Mp(n,`http://${s}`),n}function lm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Tp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});im("Browser");const um="/dashboard-website/assets/ddd-wsl-CJqTinys.png",Wr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},fm={name:"Login",data(){return{email:"",password:"",initials:""}},methods:{login(){const t=Jc();Yp(t,this.email,this.password).then(e=>{console.log(e)},e=>{alert(e)})}}},dm={class:"h-[10.0rem] w-[40.0rem] bg-cover bg-center font-sans",style:{"background-image":"url('/src/imge/FB.jpg')"}},hm={class:"w-[320px] h-[420px] bg-f9 bg-opacity-60 mt-[50%] ml-[50%] transform -translate-x-1/2 -translate-y-1/2 p-[50px] pl-[30px]"},pm={class:"bg-f3 bg-opacity-10"},gm={class:"w-[8.0rem] text-lx font-bold text-lg h-[3.0rem] mb-[5%] text-[20px] bg-f5"};function mm(t,e,n,r,s,i){return Wn(),Fr("body",dm,[x("div",hm,[e[7]||(e[7]=x("img",{class:"w-[100px] h-[100px] rounded-[10%] absolute top-[-50px] left-[36%]",src:um,alt:"avater"},null,-1)),e[8]||(e[8]=x("h1",{class:"py-[40px] m-0 text-center text-[30px] text-f1"},"alqrshy",-1)),x("form",pm,[e[3]||(e[3]=x("p",{class:"m-0 p-0 text-lx font-bold text-f1"},"Email:",-1)),Lt(x("input",{class:"w-full mb-[7%] border-b border-f5 bg-transparent outline-none h-[40px] text-center text-f1",type:"text",name:"Email",placeholder:"enter username","onUpdate:modelValue":e[0]||(e[0]=o=>t.emali=o)},null,512),[[wr,t.emali]]),e[4]||(e[4]=x("p",{class:"m-0 p-0 text-lx font-bold text-f1"},"password:",-1)),Lt(x("input",{class:"w-full mb-[7%] border-b border-f5 bg-transparent outline-none h-[40px] text-center text-f1",type:"text",name:"password",placeholder:"enter password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[wr,s.password]]),x("button",gm,[x("p",{onClick:e[2]||(e[2]=(...o)=>i.login&&i.login(...o)),class:"text-center m-0 p-0 text-f1"}," Login")]),e[5]||(e[5]=x("br",null,null,-1)),e[6]||(e[6]=x("a",{href:"/Signup",class:"text-f1"}," Mc set up account ",-1))])])])}const _m=Wr(fm,[["render",mm]]),vm="/dashboard-website/assets/img-DKNOag9j.jpg",bm={data(){return{isSubMenuVisible:!1,isBrandSubMenuVisible:!1,isCategorySubMenuVisible:!1}},methods:{toggleSubMenu(){this.isSubMenuVisible=!this.isSubMenuVisible},toggleBrandSubMenu(){this.isBrandSubMenuVisible=!this.isBrandSubMenuVisible},toggleCategorySubMenu(){this.isCategorySubMenuVisible=!this.isCategorySubMenuVisible}}},ym={class:"bg-f6"},wm={id:"wrapper",class:"flex"},Em={id:"page",class:"flex-grow"},Im={class:"layout-wrap flex"},Sm={class:"section-menu-left w-60 bg-f3 shadow-lg absolute left-0 top-0 h-[59.3rem]"},Tm={class:"center p-4"},Cm={class:"center-item"},Rm={class:"menu-list"},Am={class:"menu-item has-children mb-2"},Pm={class:"sub-menu ml-4"},Om={class:"menu-item has-children mb-2"},xm={class:"sub-menu ml-4"},km={class:"menu-item has-children mb-2"},Nm={class:"sub-menu ml-4"};function Dm(t,e,n,r,s,i){return Wn(),Fr("div",ym,[x("div",wm,[x("div",Em,[x("div",Im,[x("div",Sm,[e[11]||(e[11]=kt('<div class="box-logo flex items-center justify-between p-4 border-b" data-v-79386837><a href="" id="site-logo-inner" data-v-79386837><img class="w-[7.3rem] px-1 py-3" src="'+vm+'" alt="Logo" data-v-79386837></a><div class="button-show-hide cursor-pointer" data-v-79386837><i class="icon-menu-left text-gray-600" data-v-79386837></i></div></div><div class="relative ... top-2" data-v-79386837><div class="absolute pointer-events-auto ..." data-v-79386837><svg class="absolute text-slate-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-79386837><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-v-79386837></path></svg></div><input type="text" placeholder="Search" class="..." data-v-79386837></div>',2)),x("div",Tm,[e[10]||(e[10]=kt('<div class="center-item mb-4" data-v-79386837><div class="center-heading text-lg font-semibold" data-v-79386837>Main Home</div><ul class="menu-list mt-2" data-v-79386837><li class="menu-item mb-2" data-v-79386837><a href="/login" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" data-v-79386837><div class="icon mr-2" data-v-79386837><i class="icon-grid" data-v-79386837></i></div><div class="text" data-v-79386837>Dashboard</div></a></li></ul></div>',1)),x("div",Cm,[x("ul",Rm,[x("li",Am,[x("a",{href:"javascript:void(0);",class:"flex items-center p-2 text-gray-700 hover:bg-gray-200",onClick:e[0]||(e[0]=(...o)=>i.toggleSubMenu&&i.toggleSubMenu(...o))},e[3]||(e[3]=[x("div",{class:"icon mr-2"},[x("i",{class:"fas fa-shopping-cart"})],-1),x("div",{class:"text"},"Products",-1)])),Lt(x("ul",Pm,e[4]||(e[4]=[kt('<li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>Add Product</div></a></li><li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>Products</div></a></li>',2)]),512),[[Qr,s.isSubMenuVisible]])]),x("li",Om,[x("a",{href:"javascript:void(0);",class:"flex items-center p-2 text-gray-700 hover:bg-gray-200",onClick:e[1]||(e[1]=(...o)=>i.toggleBrandSubMenu&&i.toggleBrandSubMenu(...o))},e[5]||(e[5]=[x("div",{class:"icon mr-2"},[x("i",{class:"icon-layers"})],-1),x("div",{class:"text"},"Brand",-1)])),Lt(x("ul",xm,e[6]||(e[6]=[kt('<li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>New Brand</div></a></li><li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>Brands</div></a></li>',2)]),512),[[Qr,s.isBrandSubMenuVisible]])]),x("li",km,[x("a",{href:"javascript:void(0);",class:"flex items-center p-2 text-gray-700 hover:bg-gray-200",onClick:e[2]||(e[2]=(...o)=>i.toggleCategorySubMenu&&i.toggleCategorySubMenu(...o))},e[7]||(e[7]=[x("div",{class:"icon mr-2"},[x("i",{class:"icon-layers"})],-1),x("div",{class:"text"},"Category",-1)])),Lt(x("ul",Nm,e[8]||(e[8]=[kt('<li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>New Category</div></a></li><li class="sub-menu-item mb-1" data-v-79386837><a href="" class="block p-2 text-gray-600 hover:bg-gray-200 rounded" data-v-79386837><div class="text" data-v-79386837>Categories</div></a></li>',2)]),512),[[Qr,s.isCategorySubMenuVisible]])]),e[9]||(e[9]=kt('<li class="menu-item" data-v-79386837><a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200" data-v-79386837><div class="icon mr-2" data-v-79386837><i class="icon-image" data-v-79386837></i></div><div class="text" data-v-79386837>Slider</div></a></li><li class="menu-item" data-v-79386837><a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200" data-v-79386837><div class="icon mr-2" data-v-79386837><i class="icon-grid" data-v-79386837></i></div><div class="text" data-v-79386837>Coupons</div></a></li><li class="menu-item" data-v-79386837><a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200" data-v-79386837><div class="icon mr-2" data-v-79386837><i class="icon-user" data-v-79386837></i></div><div class="text" data-v-79386837>User</div></a></li><ul class="menu-list" data-v-79386837><li class="menu-item mb-2" data-v-79386837><a href="" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" data-v-79386837><div class="fill-blue-500 ..." data-v-79386837></div><div class="text" data-v-79386837>Settings</div></a></li></ul>',4))])])])])])])])])}const Mm=Wr(bm,[["render",Dm],["__scopeId","data-v-79386837"]]),Lm="/dashboard-website/assets/FB-CFAbJ39g.jpg",Um={};function Fm(t,e){return Wn(),Fr("body",null,e[0]||(e[0]=[kt('<header class="fixed top-0 left-0 w-full h-[5.4rem] p-2 md:p-[0.3rem] z-10 flex justify-between items-center z-100 backdrop-blur-md bg-f4 bg-opacity-30"><a href="#" class="text-2xl font-bold text-white"><img class="w-[6.3rem] px-2 py-2" src="'+Lm+'" alt="logo"></a><input type="checkbox" id="check" class="hidden display-none"><label for="check" class="absolute right-5 text-white text-3xl cursor-pointer icons"><i class="bx bx-menu" id="menu-icon"></i><i class="bx bx-x hidden" id="close-icon"></i></label><nav class="navbar hidden md:flex space-x-8"><a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Home</a><a href="/login " class="text-lg font-bold text-f1 text-opacity-80 border-b">Login</a><a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Gallery</a><a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Services</a><a href="#" class="text-lg font-bold text-f1 text-opacity-80 border-b">Contact</a></nav></header>',1)]))}const Bm=Wr(Um,[["render",Fm]]),$m={name:"Signup",data(){return{email:"",password:"",initials:""}},methods:{Signup(){const t=Jc();Jp(t,this.email,this.password).then(e=>{console.log(e)},e=>{alert(e)})}}},Hm={class:"size-[40.3rem] h-[40.3rem] bg-[url('/src/imge/FB.jpg')] bg-cover bg-center"},Vm={class:"bg-f5 bg-opacity-10 h-[30.1rem] w-[35.1rem] ml-[2.1rem] mt-[3.1rem]"},jm={class:"bg-f9 bg-opacity-50 mt-[1.1rem] h-[25.1rem] w-[30.0rem] ml-[2.1rem]"},Wm={class:"card"},Km={class:"#"},zm={class:"row mb-3"},Gm={class:"col-md-6"},qm={class:"row mb-3"},Jm={class:"col-md-6"},Ym={class:"row mb-0"},Xm={class:"col-md-6 offset-md-4"};function Qm(t,e,n,r,s,i){return Wn(),Fr("div",Hm,[e[8]||(e[8]=x("h3",{class:"text-lg bg-f9 bg-opacity-60 text-lx font-bold mt-[5.rem] ml-[1.rem] text-f1"}," قوم بي إنشاء حساب جديد",-1)),x("div",Vm,[e[7]||(e[7]=x("p",{class:"text-f1 text-lx font-bold text-lg border-b-2 border-f5"},"Login",-1)),x("div",jm,[x("div",Wm,[e[6]||(e[6]=x("div",{class:"card-header"},null,-1)),x("div",Km,[x("div",zm,[e[3]||(e[3]=x("label",{for:"email",class:"text-f1 text-lx font-bold text-lg"},[x("p",{class:"absolute mr-[5.0rem] mt-[1.0rem]"},"Email:")],-1)),x("div",Gm,[Lt(x("input",{type:"email",class:"w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center ml-[7.0rem] mt-[1.0rem]",placeholder:"enter Email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[wr,s.email]])])]),x("div",qm,[e[4]||(e[4]=x("label",{for:"password",class:"text-f1 text-lx font-bold text-lg"},[x("p",{class:"absolute mr-[5.0rem] mt-[1.0rem]"},"Password:")],-1)),x("div",Jm,[Lt(x("input",{type:"password",class:"w-[15.5rem] h-[2.2rem] bg-f1 text-f9 text-center ml-[7.0rem] mt-[1.0rem]",placeholder:"enter Password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[wr,s.password]])])]),x("div",Ym,[x("div",Xm,[x("button",{class:"w-[8.0rem] text-lx font-bold text-lg h-[3.0rem] mb-[5%] text-[20px] bg-f5",onClick:e[2]||(e[2]=(...o)=>i.Signup&&i.Signup(...o))}," Signup "),e[5]||(e[5]=x("a",{href:"/login",class:"text-f1 m-2 p-2"}," Money Login ",-1))])])])])])])])}const Zm=Wr($m,[["render",Qm]]),e_=[{path:"/home",name:"home_page",component:Mm,meta:{title:"Home page"}},{path:"/Signup",name:"Signup_page",component:Zm,meta:{title:"Signup page"}},{path:"/Login",name:"Login_page",component:_m,meta:{title:"Login page"}},{path:"/navbar",name:"navbar_page",component:Bm,meta:{title:"Navbar page"}}],Yc=bd({history:Yf("/dashboard-website/"),routes:e_,scrollBehavior(t,e,n){return n||{left:0,top:0}}});Yc.beforeEach((t,e,n)=>{document.title=`GHASSAN web ${t.meta.title} | site`,n()});var t_="firebase",n_="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(t_,n_,"app");const r_={apiKey:"AIzaSyB-8QbtR7vS7UeWahBJnfULuqLd1a5b-A0",authDomain:"vue-login-c76a0.firebaseapp.com",projectId:"vue-login-c76a0",storageBucket:"vue-login-c76a0.appspot.com",messagingSenderId:"463528868344",appId:"1:463528868344:web:df0216599d1446185d3e0d"};fc(r_);const Xc=_f(wd);Xc.use(Yc);Xc.mount("#app");
