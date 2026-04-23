function ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Os={duration:.5,overwrite:!1,delay:0},Jl,Bt,vt,_n=1e8,rt=1/_n,Xo=Math.PI*2,Ff=Xo/4,Bf=0,zu=Math.sqrt,kf=Math.cos,Hf=Math.sin,Pt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},Ql=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},ec=function(){return typeof window<"u"},Gr=function(e){return xt(e)||Pt(e)},Vu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Yo=/(?:-?\.?\d|\.)+/gi,Gu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wu=/[+-]=-?[.\d]+/,Xu=/[^,'"\[\]\s]+/gi,zf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,pn,qo,tc,on={},Ca={},Yu,qu=function(e){return(Ca=is(e,on))&&Qt},nc=function(e,t){},Pa=function(e,t){return!t&&void 0},ju=function(e,t){return e&&(on[e]=t)&&Ca&&(Ca[e]=t)||on},br=function(){return 0},Vf={suppressEvents:!0,isStart:!0,kill:!1},va={suppressEvents:!0,kill:!1},Gf={suppressEvents:!0},ic={},Ai=[],jo={},Ku,sn={},Ka={},Kc=30,xa=[],sc="",rc=function(e){var t=e[0],n,i;if(Gn(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xa.length;i--&&!xa[i].targetTest(t););n=xa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xd(e[i],n)))||e.splice(i,1);return e},Qi=function(e){return e._gsap||rc(vn(e))[0]._gsap},Zu=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Ql(n)&&e.getAttribute&&e.getAttribute(t)||n},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Wf=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Da=function(){var e=Ai.length,t=Ai.slice(0),n,i;for(jo={},Ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$u=function(e,t,n,i){Ai.length&&!Bt&&Da(),e.render(t,n,i||Bt&&t<0&&(e._initted||e._startAt)),Ai.length&&!Bt&&Da()},Ju=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xu).length<2?t:Pt(e)?e.trim():e},Qu=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xf=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},is=function(e,t){for(var n in t)e[n]=t[n];return e},Zc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},La=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xr=function(e){var t=e.parent||ft,n=e.keyframes?Xf(kt(e.keyframes)):Tn;if(Kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yf=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ed=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},za=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ko=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(va):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jf=function r(e){return!e||e._ts&&r(e.parent)},$c=function(e){return e._repeat?Fs(e._tTime,e=e.duration()+e._rDelay)*e:0},Fs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ia=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Va=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Ga=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Va(e),n._dirty||es(n,e)),e},td=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ia(e.rawTime(),t),(!t._dur||Fr(0,t.totalDuration(),n)-t._tTime>rt)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-rt}},On=function(e,t,n,i){return t.parent&&Di(t),t._start=Lt((li(n)?n:n||e!==ft?fn(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ed(e,t,"_first","_last",e._sort?"_start":0),Zo(t)||(e._recent=t),i||td(e,t),e._ts<0&&Ga(e,e._tTime),e},nd=function(e,t){return(on.ScrollTrigger||nc("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},id=function(e,t,n,i,s){if(oc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ku!==rn.frame)return Ai.push(e),e._lazy=[s,i],1},Kf=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zf=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Kf(e)&&!(!e._initted&&Zo(e))||(e._ts<0||e._dp._ts<0)&&!Zo(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Fr(0,e._tDur,t),h=Fs(l,o),e._yoyo&&h&1&&(a=1-a),h!==Fs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||i||e._zTime===rt||!t&&e._zTime){if(!e._initted&&id(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?rt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ko(e,t,n,!0),e._onUpdate&&!n&&xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Di(e,1),!n&&!Bt&&(xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$f=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Bs=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ga(e,e._tTime=e._tDur*o),e.parent&&Va(e),n||es(e.parent,e),e},Jc=function(e){return e instanceof qt?es(e):Bs(e,e._dur)},Jf={_start:0,endTime:br,totalDuration:br},fn=function r(e,t,n){var i=e.labels,s=e._recent||Jf,a=e.duration()>=_n?s.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},yr=function(e,t,n){var i=li(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kt(l.vars.inherit)&&l.parent;a.immediateRender=Kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Et(t[0],a,t[s+1])},Ni=function(e,t){return e||e===0?t(e):t},Fr=function(e,t,n){return n<e?e:n>t?t:n},Ft=function(e,t){return!Pt(e)||!(t=zf.exec(e))?"":t[1]},Qf=function(e,t,n){return Ni(n,function(i){return Fr(e,t,i)})},$o=[].slice,sd=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==pn},ep=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Pt(i)&&!t||sd(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Pt(e)&&!n&&(qo||!ks())?$o.call((t||tc).querySelectorAll(e),0):kt(e)?ep(e,n):sd(e)?$o.call(e,0):e?[e]:[]},Jo=function(e){return e=vn(e)[0]||Pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vn(t,n.querySelectorAll?n:n===e?Pa("Invalid scope")||tc.createElement("div"):e)}},rd=function(e){return e.sort(function(){return .5-Math.random()})},ad=function(e){if(xt(e))return e;var t=Gn(e)?e:{each:e},n=ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Pt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,T,M,x,b,R,A,w,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,_n])[1],!v){for(A=-_n;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=a[_]=[],p=l?Math.min(v,_)*h-.5:i%v,T=v===_n?0:l?_*u/v-.5:i/v|0,A=0,w=_n,R=0;R<_;R++)M=R%v-p,x=T-(R/v|0),m[R]=b=c?Math.abs(c==="y"?x:M):zu(M*M+x*x),b>A&&(A=b),b<w&&(w=b);i==="random"&&rd(m),m.max=A-w,m.min=w,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ft(t.amount||t.each)||0,n=n&&_<0?gd(n):n}return _=(m[d]-m.min)/m.max||0,Lt(m.b+(n?n(_):_)*m.v)+m.u}},Qo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(li(n)?0:Ft(n))}},od=function(e,t){var n=kt(e),i,s;return!n&&Gn(e)&&(i=n=e.radius||_n,e.values?(e=vn(e.values),(s=!li(e[0]))&&(i*=i)):e=Qo(e.increment)),Ni(t,n?xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=_n,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:a,s||h===a||li(a)?h:h+Ft(a)}:Qo(e))},ld=function(e,t,n,i){return Ni(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},tp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},np=function(e,t){return function(n){return e(parseFloat(n))+(t||Ft(n))}},ip=function(e,t,n){return hd(e,t,0,1,n)},cd=function(e,t,n){return Ni(n,function(i){return e[~~t(i)]})},sp=function r(e,t,n){var i=t-e;return kt(e)?cd(e,r(0,e.length),t):Ni(n,function(s){return(i+(s-e)%i)%i+e})},rp=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?cd(e,r(0,e.length-1),t):Ni(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},wr=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Xu:Yo),n+=e.substr(t,i-t)+ld(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},hd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ni(s,function(l){return n+((l-e)/a*o||0)})},ap=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Pt(e),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=is(kt(e)?[]:{},e));if(!h){for(l in t)ac.call(o,e,l,"get",t[l]);s=function(g){return hc(g,o)||(a?e.p:e)}}}return Ni(n,s)},Qc=function(e,t,n){var i=e.labels,s=_n,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xn=function(e,t,n){var i=e.vars,s=i[t],a=vt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ai.length&&Da(),o&&(vt=o),h=l?s.apply(c,l):s.call(c),vt=a,h},mr=function(e){return Di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&xn(e,"onInterrupt"),e},ws,ud=[],dd=function(e){if(ec()&&e){e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:br,render:hc,add:ac,kill:Sp,modifier:Mp,rawVars:0},a={targetTest:0,get:0,getSetter:cc,aliases:{},register:0};if(ks(),e!==i){if(sn[t])return;Tn(i,Tn(La(e,s),a)),is(i.prototype,is(s,La(e,a))),sn[i.prop=t]=i,e.targetTest&&(xa.push(i),ic[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ju(t,i),e.register&&e.register(Qt,i,$t)}else e&&ud.push(e)},it=255,gr={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Za=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},fd=function(e,t,n){var i=e?li(e)?[e>>16,e>>8&it,e&it]:0:gr.black,s,a,o,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gr[e])i=gr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&it,i&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Yo),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Za(l+1/3,s,a),i[1]=Za(l,s,a),i[2]=Za(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Gu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yo)||gr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/it,a=i[1]/it,o=i[2]/it,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},pd=function(e){var t=[],n=[],i=-1;return e.split(Ri).forEach(function(s){var a=s.match(bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},eh=function(e,t,n){var i="",s=(e+i).match(Ri),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=fd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=pd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ri,"1").split(bs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ri),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Ri=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),op=/hsl[a]?\(/,md=function(e){var t=e.join(" "),n;if(Ri.lastIndex=0,Ri.test(t))return n=op.test(t),e[1]=eh(e[1],n),e[0]=eh(e[0],n,pd(e[1])),!0},Ar,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,T=m===!0,M,x,b,R;if(p>e&&(n+=p-t),i+=p,b=i-n,M=b-a,(M>0||T)&&(R=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=M+(M>=s?4:s-M),x=1),T||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](b,d,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Yu&&(!qo&&ec()&&(pn=qo=window,tc=pn.document||{},on.gsap=Qt,(pn.gsapVersions||(pn.gsapVersions=[])).push(Qt.version),qu(Ca||pn.GreenSockGlobals||!pn.gsap&&pn||{}),h=pn.requestAnimationFrame,ud.forEach(dd)),l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ar=1,g(2))},sleep:function(){(h?pn.cancelAnimationFrame:clearTimeout)(l),Ar=0,c=br},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,T){var M=p?function(x,b,R,A){m(x,b,R,A),u.remove(M)}:m;return u.remove(m),o[T?"unshift":"push"](M),ks(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),ks=function(){return!Ar&&rn.wake()},He={},lp=/^[\d.\-M][\d.\-,\s]/,cp=/["']/g,hp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(cp,"").trim():+c,i=l.substr(o+1).trim();return t},up=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dp=function(e){var t=(e+"").split("("),n=He[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hp(t[1])]:up(e).split(",").map(Ju)):He._CE&&lp.test(e)?He._CE("",e):n},gd=function(e){return function(t){return 1-e(1-t)}},_d=function r(e,t){for(var n=e._first,i;n;)n instanceof qt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ts=function(e,t){return e&&(xt(e)?e:He[e]||dp(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Zt(e,function(o){He[o]=on[o]=s,He[a=o.toLowerCase()]=n;for(var l in s)He[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=He[o+"."+l]=s[l]}),s},vd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$a=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Xo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Hf((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:vd(o);return s=Xo/s,l.config=function(c,h){return r(e,c,h)},l},Ja=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vd(n);return i.config=function(s){return r(e,s)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;rs("Elastic",$a("in"),$a("out"),$a());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});rs("Circ",function(r){return-(zu(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-kf(r*Ff)+1});rs("Back",Ja("in"),Ja("out"),Ja());He.SteppedEase=He.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-rt;return function(o){return((i*Fr(0,a,o)|0)+s)*n}}};Os.ease=He["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return sc+=r+","+r+"Params,"});var xd=function(e,t){this.id=Bf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zu,this.set=t?t.getSetter:cc},Rr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Bs(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Ar||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ga(this,n),!s._dp||s.parent||td(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$u(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$c(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$c(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-rt?0:this._rts,this.totalTime(Fr(-Math.abs(this._delay),this._tDur,i),!0),Va(this),qf(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&On(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ia(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gf);var i=Bt;return Bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fn(this,n),Kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-rt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=xt(n)?n:Qu,o=function(){var c=i.then;i.then=null,xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){mr(this)},r}();Tn(Rr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var qt=function(r){Hu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kt(n.sortChildren),ft&&On(n.parent||ft,ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&nd(ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return yr(0,arguments,this),this},t.from=function(i,s,a){return yr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return yr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,xr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,fn(this,a),1),this},t.call=function(i,s,a){return On(this,Et.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Et(i,a,fn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,xr(a).immediateRender=Kt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,xr(o).immediateRender=Kt(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Lt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,T,M,x,b,R,A;if(this!==ft&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,x=this._start,M=this._ts,p=!M,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Lt(h%m),h===l?(_=this._repeat,d=c):(_=~~(h/m),_&&_===h/m&&(d=c,_--),d>c&&(d=c)),b=Fs(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),R&&_&1&&(d=c-d,A=1),_!==b&&!this._lock){var w=R&&b&1,v=w===(R&&_&1);if(_<b&&(w=!w),o=w?0:h%c?c:h,this._lock=1,this.render(o||(A?0:Lt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;_d(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=$f(this,Lt(o),Lt(d)),T&&(h-=d-(d=T._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(xn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){T=0,g&&(h+=this._zTime=-rt);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,a||Bt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){T=0,g&&(h+=this._zTime=y?-rt:rt);break}}f=g}}if(T&&!s&&(this.pause(),T.render(d>=o?0:-rt)._zTime=d>=o?1:-1,this._ts))return this._start=x,Va(this),this.render(i,s,a);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Di(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(li(s)||(s=fn(this,s,i)),!(i instanceof Rr)){if(kt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Pt(i))return this.addLabel(i,s);if(xt(i))i=Et.delayedCall(0,i);else return this}return this!==i?On(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-_n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(za(this,i),i===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=fn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Et.delayedCall(0,s||br,a);return o.data="isPause",this._hasPause=1,On(this,o,fn(this,i))},t.removePause=function(i){var s=this._first;for(i=fn(this,i);s;)s._start===i&&s.data==="isPause"&&Di(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ti!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=vn(i),l=this._first,c=li(s),h;l;)l instanceof Et?Wf(l._targets,o)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=fn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Et.to(a,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||rt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Bs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Tn({startAt:{time:fn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qc(this,fn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qc(this,fn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return es(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=_n,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,On(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Bs(a,a===ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ft._ts&&($u(ft,Ia(i,ft)),Ku=rn.frame),rn.frame>=Kc){Kc+=an.autoSleep||120;var s=ft._first;if((!s||!s._ts)&&an.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(Rr);Tn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fp=function(e,t,n,i,s,a,o){var l=new $t(this._pt,e,t,0,1,bd,null,s),c=0,h=0,u,d,f,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=wr(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),d=n.match(ja)||[];u=ja.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Cs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ja.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Wu.test(i)||p)&&(l.e=0),this._pt=l,l},ac=function(e,t,n,i,s,a,o,l,c,h){xt(i)&&(i=i(s||0,e,a));var u=e[t],d=n!=="get"?n:xt(u)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=xt(u)?c?vp:Td:lc,g;if(Pt(i)&&(~i.indexOf("random(")&&(i=wr(i)),i.charAt(1)==="="&&(g=Cs(d,i)+(Ft(d)||0),(g||g===0)&&(i=g))),!h||d!==i||el)return!isNaN(d*i)&&i!==""?(g=new $t(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?yp:Ed,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&nc(t,i),fp.call(this,e,t,d,i,f,l||an.stringFilter,c))},pp=function(e,t,n,i,s){if(xt(e)&&(e=Mr(e,s,t,n,i)),!Gn(e)||e.style&&e.nodeType||kt(e)||Vu(e))return Pt(e)?Mr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Mr(e[o],s,t,n,i);return a},yd=function(e,t,n,i,s,a){var o,l,c,h;if(sn[e]&&(o=new sn[e]).init(s,o.rawVars?t[e]:pp(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new $t(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ti,el,oc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,d=i.runBackwards,f=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,T=e._targets,M=e.parent,x=M&&M.data==="nested"?M.vars.targets:T,b=e._overwrite==="auto"&&!Jl,R=e.timeline,A,w,v,y,P,k,L,I,H,B,Y,z,J;if(R&&(!g||!s)&&(s="none"),e._ease=ts(s,Os.ease),e._yEase=f?gd(ts(f===!0?s:f,Os.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!R&&!!i.runBackwards,!R||g&&!i.stagger){if(I=T[0]?Qi(T[0]).harness:0,z=I&&i[I.prop],A=La(i,ic),p&&(p._zTime<0&&p.progress(1),t<0&&d&&o&&!_?p.render(-1,!0):p.revert(d&&m?va:Vf),p._lazy=0),a){if(Di(e._startAt=Et.set(T,Tn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!p&&Kt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!_)&&e._startAt.revert(va),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!p){if(t&&(o=!1),v=Tn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Kt(l),immediateRender:o,stagger:0,parent:M},A),z&&(v[I.prop]=z),Di(e._startAt=Et.set(T,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(va):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Kt(l)||l&&!m,w=0;w<T.length;w++){if(P=T[w],L=P._gsap||rc(T)[w]._gsap,e._ptLookup[w]=B={},jo[L.id]&&Ai.length&&Da(),Y=x===T?w:x.indexOf(P),I&&(H=new I).init(P,z||A,e,Y,x)!==!1&&(e._pt=y=new $t(e._pt,P,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(te){B[te]=y}),H.priority&&(k=1)),!I||z)for(v in A)sn[v]&&(H=yd(v,A,e,Y,P,x))?H.priority&&(k=1):B[v]=y=ac.call(e,P,v,"get",A[v],Y,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(P,e._op[w]),b&&e._pt&&(Ti=e,ft.killTweensOf(P,B,e.globalTime(t)),J=!e.parent,Ti=0),e._pt&&l&&(jo[L.id]=1)}k&&wd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&R.render(_n,!0,!0)},mp=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,d;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(c=u[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return el=1,e.vars[t]="+=0",oc(e,o),el=0,1;l.push(c)}for(d=l.length;d--;)h=l[d],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=Mt(n)+Ft(h.e)),h.b&&(h.b=c.s+Ft(h.b))},gp=function(e,t){var n=e[0]?Qi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=is({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},_p=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Mr=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):Pt(e)&&~e.indexOf("random(")?wr(e):e},Md=sc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sd={};Zt(Md+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Sd[r]=1});var Et=function(r){Hu(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:xr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||ft,M=(kt(n)||Vu(n)?li(n[0]):"length"in i)?[n]:vn(n),x,b,R,A,w,v,y,P;if(o._targets=M.length?rc(M):Pa("GSAP target "+n+" not found. https://greensock.com",!an.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Gr(c)||Gr(h)){if(i=o.vars,x=o.timeline=new qt({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:M}),x.kill(),x.parent=x._dp=ni(o),x._start=0,d||Gr(c)||Gr(h)){if(A=M.length,y=d&&ad(d),Gn(d))for(w in d)~Md.indexOf(w)&&(P||(P={}),P[w]=d[w]);for(b=0;b<A;b++)R=La(i,Sd),R.stagger=0,p&&(R.yoyoEase=p),P&&is(R,P),v=M[b],R.duration=+Mr(c,ni(o),b,v,M),R.delay=(+Mr(h,ni(o),b,v,M)||0)-o._delay,!d&&A===1&&R.delay&&(o._delay=h=R.delay,o._start+=h,R.delay=0),x.to(v,R,y?y(b,v,M):0),x._ease=He.none;x.duration()?c=h=0:o.timeline=0}else if(g){xr(Tn(x.vars.defaults,{ease:"none"})),x._ease=ts(g.ease||i.ease||"none");var k=0,L,I,H;if(kt(g))g.forEach(function(B){return x.to(M,B,">")}),x.duration();else{R={};for(w in g)w==="ease"||w==="easeEach"||_p(w,g[w],R,g.easeEach);for(w in R)for(L=R[w].sort(function(B,Y){return B.t-Y.t}),k=0,b=0;b<L.length;b++)I=L[b],H={ease:I.e,duration:(I.t-(b?L[b-1].t:0))/100*c},H[w]=I.v,x.to(M,H,k),k+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!Jl&&(Ti=ni(o),ft.killTweensOf(M),Ti=0),On(T,ni(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Lt(T._time)&&Kt(u)&&jf(ni(o))&&T.data!=="nested")&&(o._tTime=-rt,o.render(Math.max(0,-h)||0)),m&&nd(ni(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-rt&&!h?l:i<rt?0:i,d,f,g,_,m,p,T,M,x;if(!c)Zf(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=Lt(u%_),u===l?(g=this._repeat,d=c):(g=~~(u/_),g&&g===u/_&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=Fs(this._tTime,_),d===o&&!a&&this._initted)return this._tTime=u,this;g!==m&&(M&&this._yEase&&_d(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(Lt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(id(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(d/c),this._from&&(this.ratio=T=1-T),d&&!o&&!s&&!g&&(xn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;M&&M.render(i<0?i:!d&&p?-rt:M._dur*M._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ko(this,i,s,a),xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ko(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Di(this,1),!s&&!(h&&!o)&&(u||o||p)&&(xn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Ar||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||oc(this,l),c=this._ease(l/this._dur),mp(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Ga(this,0),this.parent||ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ti&&Ti.vars.overwrite!==!0)._first||mr(this),this.parent&&a!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vn(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&Yf(o,l))return s==="all"&&(this._pt=0),mr(this);for(u=this._op=this._op||[],s!=="all"&&(Pt(s)&&(_={},Zt(s,function(T){return _[T]=1}),s=_),s=gp(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&za(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&mr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return yr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return yr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ft.killTweensOf(i,s,a)},e}(Rr);Tn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new qt,t=$o.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var lc=function(e,t,n){return e[t]=n},Td=function(e,t,n){return e[t](n)},vp=function(e,t,n,i){return e[t](i.fp,n)},xp=function(e,t,n){return e.setAttribute(t,n)},cc=function(e,t){return xt(e[t])?Td:Ql(e[t])&&e.setAttribute?xp:lc},Ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Mp=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Sp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?za(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Tp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},$t=function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ed,this.d=l||this,this.set=c||lc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Tp,this.m=n,this.mt=s,this.tween=i},r}();Zt(sc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ic[r]=1});on.TweenMax=on.TweenLite=Et;on.TimelineLite=on.TimelineMax=qt;ft=new qt({sortChildren:!1,defaults:Os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=md;var ns=[],ya={},Ep=[],th=0,bp=0,Qa=function(e){return(ya[e]||Ep).map(function(t){return t()})},tl=function(){var e=Date.now(),t=[];e-th>2&&(Qa("matchMediaInit"),ns.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=pn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Qa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),th=e,Qa("matchMedia"))},Ad=function(){function r(t,n){this.selector=n&&Jo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bp++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var a=this,o=function(){var c=vt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Jo(s)),vt=a,u=i.apply(a,arguments),xt(u)&&a._r.push(u),vt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===xt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Et)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=ns.length;o--;)ns[o].id===this.id&&ns.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),wp=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Gn(n)||(n={matches:n});var a=new Ad(0,s||this.scope),o=a.conditions={},l,c,h;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=pn.matchMedia(n[c]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(tl):l.addEventListener("change",tl)));return h&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ua={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dd(i)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=vn(e)[0]);var s=Qi(e||{}).get,a=n?Qu:Ju;return n==="native"&&(n=""),e&&(t?a((sn[t]&&sn[t].get||s)(e,t,n,i)):function(o,l,c){return a((sn[o]&&sn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=vn(e),e.length>1){var i=e.map(function(h){return Qt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=sn[t],o=Qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;ws._pt=0,u.init(e,n?h+n:h,ws,0,[e]),u.render(1,u),ws._pt&&hc(1,ws)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Qt.to(e,is((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,Os.ease)),Zc(Os,e||{})},config:function(e){return Zc(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!sn[o]&&!on[o]&&Pa(t+" effect requires "+o+" plugin.")}),Ka[t]=function(o,l,c){return n(vn(o),Tn(l||{},s),c)},a&&(qt.prototype[t]=function(o,l,c){return this.add(Ka[t](o,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){He[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):He},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),i,s;for(n.smoothChildTiming=Kt(e.smoothChildTiming),ft.remove(n),n._dp=0,n._time=n._tTime=ft._time,i=ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&On(n,i,i._start-i._delay),i=s;return On(ft,n,0),n},context:function(e,t){return e?new Ad(e,t):vt},matchMedia:function(e){return new wp(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tl()},addEventListener:function(e,t){var n=ya[e]||(ya[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ya[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sp,wrapYoyo:rp,distribute:ad,random:ld,snap:od,normalize:ip,getUnit:Ft,clamp:Qf,splitColor:fd,toArray:vn,selector:Jo,mapRange:hd,pipe:tp,unitize:np,interpolate:ap,shuffle:rd},install:qu,effects:Ka,ticker:rn,updateRoot:qt.updateRoot,plugins:sn,globalTimeline:ft,core:{PropTween:$t,globals:ju,Tween:Et,Timeline:qt,Animation:Rr,getCache:Qi,_removeLinkedListItem:za,reverting:function(){return Bt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Jl=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ua[r]=Et[r]});rn.add(qt.updateRoot);ws=Ua.to({},{duration:0});var Ap=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Rp=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ap(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},eo=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Pt(s)&&(l={},Zt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Rp(o,s)}}}},Qt=Ua.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eo("roundProps",Qo),eo("modifiers"),eo("snap",od))||Ua;Et.version=qt.version=Qt.version="3.12.2";Yu=1;ec()&&ks();He.Power0;He.Power1;He.Power2;He.Power3;He.Power4;He.Linear;He.Quad;He.Cubic;He.Quart;He.Quint;He.Strong;He.Elastic;He.Back;He.SteppedEase;He.Bounce;He.Sine;He.Expo;He.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nh,Ei,Ps,uc,$i,ih,dc,Cp=function(){return typeof window<"u"},ci={},qi=180/Math.PI,Ds=Math.PI/180,os=Math.atan2,sh=1e8,fc=/([A-Z])/g,Pp=/(left|right|width|margin|padding|x)/i,Dp=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ip=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Up=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Np=function(e,t,n){return e.style[t]=n},Op=function(e,t,n){return e.style.setProperty(t,n)},Fp=function(e,t,n){return e._gsap[t]=n},Bp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kp=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Hp=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},pt="transform",Ln=pt+"Origin",zp=function r(e,t){var n=this,i=this.target,s=i.style;if(e in ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=si(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:si(i,e);else return Fn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(pt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=pt}(s||t)&&this.props.push(e,t,s[e])},Pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vp=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(fc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=dc(),(!s||!s.isStart)&&!n[pt]&&(Pd(n),i.uncache=1)}},Dd=function(e,t){var n={target:e,props:[],revert:Vp,save:zp};return e._gsap||Qt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ld,il=function(e,t){var n=Ei.createElementNS?Ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return n.style?n:Ei.createElement(e)},zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(fc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hs(t)||t,1)||""},rh="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,n){var i=t||$i,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(rh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?rh[a]:"")+e},sl=function(){Cp()&&window.document&&(nh=window,Ei=nh.document,Ps=Ei.documentElement,$i=il("div")||{style:{}},il("div"),pt=Hs(pt),Ln=pt+"Origin",$i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!Hs("perspective"),dc=Qt.core.reverting,uc=1)},to=function r(e){var t=il("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ps.removeChild(t),this.style.cssText=s,a},ah=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Id=function(e){var t;try{t=e.getBBox()}catch{t=to.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===to||(t=to.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ah(e,["x","cx","x1"])||0,y:+ah(e,["y","cy","y1"])||0,width:0,height:0}:t},Ud=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Id(e))},Cr=function(e,t){if(t){var n=e.style;t in ci&&t!==Ln&&(t=pt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(fc,"-$1").toLowerCase())):n.removeAttribute(t)}},bi=function(e,t,n,i,s,a){var o=new $t(e._pt,t,n,0,1,a?Cd:Rd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},oh={deg:1,rad:1,turn:1},Gp={grid:1,flex:1},Li=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$i.style,l=Pp.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;return i===a||!s||oh[i]||oh[a]?s:(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Ud(e),(f||a==="%")&&(ci[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[h],Mt(f?s/g*u:s/100*g)):(o[l?"width":"height"]=u+(d?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ei||!_.appendChild)&&(_=Ei.body),m=_._gsap,m&&f&&m.width&&l&&m.time===rn.time&&!m.uncache?Mt(s/m.width*u):((f||a==="%")&&!Gp[zn(_,"display")]&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild($i),g=$i[h],_.removeChild($i),o.position="absolute",l&&f&&(m=Qi(_),m.time=rn.time,m.width=_[h]),Mt(d?g*s/u:g&&s?u/g*s:0))))},si=function(e,t,n,i){var s;return uc||sl(),t in Fn&&t!=="transform"&&(t=Fn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=Dr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Oa(zn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Na[t]&&Na[t](e,t,n)||zn(e,t)||Zu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Li(e,t,s,n)+n:s},Wp=function(e,t,n,i){if(!n||n==="none"){var s=Hs(t,e,1),a=s&&zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new $t(this._pt,e.style,t,0,1,bd),l=0,c=0,h,u,d,f,g,_,m,p,T,M,x,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=zn(e,t)||i,e.style[t]=n),h=[n,i],md(h),n=h[0],i=h[1],d=n.match(bs)||[],b=i.match(bs)||[],b.length){for(;u=bs.exec(i);)m=u[0],T=i.substring(l,u.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Cs(f,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=bs.lastIndex-M.length,M||(M=M||an.units[t]||x,l===i.length&&(i+=M,o.e+=M)),x!==M&&(f=Li(e,t,_,M)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Cd:Rd;return Wu.test(i)&&(o.e=0),this._pt=o,o},lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xp=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=lh[n]||n,t[1]=lh[i]||i,t.join(" ")},Yp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ci[o]&&(l=1,o=o==="transformOrigin"?Ln:pt),Cr(n,o);l&&(Cr(n,pt),a&&(a.svg&&n.removeAttribute("transform"),Dr(n,1),a.uncache=1,Pd(i)))}},Na={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new $t(e._pt,t,n,0,0,Yp);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Pr=[1,0,0,1,0,0],Nd={},Od=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ch=function(e){var t=zn(e,pt);return Od(t)?Pr:t.substr(7).match(Gu).map(Mt)},pc=function(e,t){var n=e._gsap||Qi(e),i=e.style,s=ch(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pr:s):(s===Pr&&!e.offsetParent&&e!==Ps&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ps.appendChild(e)),s=ch(e),l?i.display=l:Cr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ps.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rl=function(e,t,n,i,s,a){var o=e._gsap,l=s||pc(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],M=t.split(" "),x=parseFloat(M[0])||0,b=parseFloat(M[1])||0,R,A,w,v;n?l!==Pr&&(A=f*m-g*_)&&(w=x*(m/A)+b*(-_/A)+(_*T-m*p)/A,v=x*(-g/A)+b*(f/A)-(f*T-g*p)/A,x=w,b=v):(R=Id(e),x=R.x+(~M[0].indexOf("%")?x/100*R.width:x),b=R.y+(~(M[1]||M[0]).indexOf("%")?b/100*R.height:b)),i||i!==!1&&o.smooth?(p=x-c,T=b-h,o.xOffset=u+(p*f+T*_)-p,o.yOffset=d+(p*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Ln]="0px 0px",a&&(bi(a,o,"xOrigin",c,x),bi(a,o,"yOrigin",h,b),bi(a,o,"xOffset",u,o.xOffset),bi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},Dr=function(e,t){var n=e._gsap||new xd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=zn(e,Ln)||"0",h,u,d,f,g,_,m,p,T,M,x,b,R,A,w,v,y,P,k,L,I,H,B,Y,z,J,te,ue,xe,de,X,$;return h=u=d=_=m=p=T=M=x=0,f=g=1,n.svg=!!(e.getCTM&&Ud(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),i.scale=i.rotate=i.translate="none"),A=pc(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),rl(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,R=n.yOrigin||0,A!==Pr&&(P=A[0],k=A[1],L=A[2],I=A[3],h=H=A[4],u=B=A[5],A.length===6?(f=Math.sqrt(P*P+k*k),g=Math.sqrt(I*I+L*L),_=P||k?os(k,P)*qi:0,T=L||I?os(L,I)*qi+_:0,T&&(g*=Math.abs(Math.cos(T*Ds))),n.svg&&(h-=b-(b*P+R*L),u-=R-(b*k+R*I))):($=A[6],de=A[7],te=A[8],ue=A[9],xe=A[10],X=A[11],h=A[12],u=A[13],d=A[14],w=os($,xe),m=w*qi,w&&(v=Math.cos(-w),y=Math.sin(-w),Y=H*v+te*y,z=B*v+ue*y,J=$*v+xe*y,te=H*-y+te*v,ue=B*-y+ue*v,xe=$*-y+xe*v,X=de*-y+X*v,H=Y,B=z,$=J),w=os(-L,xe),p=w*qi,w&&(v=Math.cos(-w),y=Math.sin(-w),Y=P*v-te*y,z=k*v-ue*y,J=L*v-xe*y,X=I*y+X*v,P=Y,k=z,L=J),w=os(k,P),_=w*qi,w&&(v=Math.cos(w),y=Math.sin(w),Y=P*v+k*y,z=H*v+B*y,k=k*v-P*y,B=B*v-H*y,P=Y,H=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Mt(Math.sqrt(P*P+k*k+L*L)),g=Mt(Math.sqrt(B*B+$*$)),w=os(H,B),T=Math.abs(w)>2e-4?w*qi:0,x=X?1/(X<0?-X:X):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Od(zn(e,pt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(f*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Mt(f),n.scaleY=Mt(g),n.rotation=Mt(_)+o,n.rotationX=Mt(m)+o,n.rotationY=Mt(p)+o,n.skewX=T+o,n.skewY=M+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Ln]=Oa(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?jp:Ld?Fd:qp,n.uncache=0,n},Oa=function(e){return(e=e.split(" "))[0]+" "+e[1]},no=function(e,t,n){var i=Ft(t);return Mt(parseFloat(t)+parseFloat(Li(e,"x",n+"px",i)))+i},qp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fd(e,t)},Bi="0deg",sr="0px",ki=") ",Fd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,M=n.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==Bi||h!==Bi)){var R=parseFloat(h)*Ds,A=Math.sin(R),w=Math.cos(R),v;R=parseFloat(u)*Ds,v=Math.cos(R),a=no(T,a,A*v*-M),o=no(T,o,-Math.sin(R)*-M),l=no(T,l,w*v*-M+M)}m!==sr&&(x+="perspective("+m+ki),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||a!==sr||o!==sr||l!==sr)&&(x+=l!==sr||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ki),c!==Bi&&(x+="rotate("+c+ki),h!==Bi&&(x+="rotateY("+h+ki),u!==Bi&&(x+="rotateX("+u+ki),(d!==Bi||f!==Bi)&&(x+="skew("+d+", "+f+ki),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ki),T.style[pt]=x||"translate(0, 0)"},jp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,M=parseFloat(a),x=parseFloat(o),b,R,A,w,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ds,c*=Ds,b=Math.cos(l)*u,R=Math.sin(l)*u,A=Math.sin(l-c)*-d,w=Math.cos(l-c)*d,c&&(h*=Ds,v=Math.tan(c-h),v=Math.sqrt(1+v*v),A*=v,w*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,R*=v)),b=Mt(b),R=Mt(R),A=Mt(A),w=Mt(w)):(b=u,w=d,R=A=0),(M&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(M=Li(f,"x",a,"px"),x=Li(f,"y",o,"px")),(g||_||m||p)&&(M=Mt(M+g-(g*b+_*A)+m),x=Mt(x+_-(g*R+_*w)+p)),(i||s)&&(v=f.getBBox(),M=Mt(M+i/100*v.width),x=Mt(x+s/100*v.height)),v="matrix("+b+","+R+","+A+","+w+","+M+","+x+")",f.setAttribute("transform",v),T&&(f.style[pt]=v)},Kp=function(e,t,n,i,s){var a=360,o=Pt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*sh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*sh)%a-~~(c/a)*a)),e._pt=d=new $t(e._pt,t,n,i,c,Lp),d.e=h,d.u="deg",e._props.push(n),d},hh=function(e,t){for(var n in t)e[n]=t[n];return e},Zp=function(e,t,n){var i=hh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[pt]=t,o=Dr(n,1),Cr(n,pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pt],a[pt]=t,o=Dr(n,1),a[pt]=c);for(l in ci)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ft(c),g=Ft(h),u=f!==g?Li(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new $t(e._pt,o,l,u,d-u,nl),e._pt.u=g||0,e._props.push(l));hh(o,i)};Zt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Na[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return si(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var Bd={name:"css",register:sl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,T,M,x,b,R,A,w;uc||sl(),this.styles=this.styles||Dd(e),w=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(sn[_]&&yd(_,t,n,i,e,s)))){if(f=typeof h,g=Na[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=wr(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Ri.lastIndex=0,Ri.test(c)||(m=Ft(c),p=Ft(h)),p?m!==p&&(c=Li(e,_,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),w.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Pt(c)&&~c.indexOf("random(")&&(c=wr(c)),Ft(c+"")||(c+=an.units[_]||Ft(si(e,_))||""),(c+"").charAt(1)==="="&&(c=si(e,_))):c=si(e,_),d=parseFloat(c),T=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),u=parseFloat(h),_ in Fn&&(_==="autoAlpha"&&(d===1&&si(e,"visibility")==="hidden"&&u&&(d=0),w.push("visibility",0,o.visibility),bi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Fn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ci,M){if(this.styles.save(_),x||(b=e._gsap,b.renderTransform&&!t.parseTransform||Dr(e,t.parseTransform),R=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new $t(this._pt,o,pt,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new $t(this._pt,b,"scaleY",b.scaleY,(T?Cs(b.scaleY,T+u):u)-b.scaleY||0,nl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){w.push(Ln,0,o[Ln]),h=Xp(h),b.svg?rl(e,h,0,R,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&bi(this,b,"zOrigin",b.zOrigin,p),bi(this,o,_,Oa(c),Oa(h)));continue}else if(_==="svgOrigin"){rl(e,h,1,R,0,this);continue}else if(_ in Nd){Kp(this,b,_,d,T?Cs(d,T+h):h);continue}else if(_==="smoothOrigin"){bi(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Zp(this,h,e);continue}}else _ in o||(_=Hs(_)||_);if(M||(u||u===0)&&(d||d===0)&&!Dp.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ft(h)||(_ in an.units?an.units[_]:m),m!==p&&(d=Li(e,_,c,p)),this._pt=new $t(this._pt,M?b:o,_,d,(T?Cs(d,T+u):u)-d,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Up:nl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ip);else if(_ in o)Wp.call(this,e,_,c,T?T+h:h);else if(_ in e)this.add(e,_,c||e[_],T?T+h:h,i,s);else if(_!=="parseTransform"){nc(_,h);continue}M||(_ in o?w.push(_,0,o[_]):w.push(_,1,c||e[_])),a.push(_)}}A&&wd(this)},render:function(e,t){if(t.tween._time||!dc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:si,aliases:Fn,getSetter:function(e,t,n){var i=Fn[t];return i&&i.indexOf(",")<0&&(t=i),t in ci&&t!==Ln&&(e._gsap.x||si(e,"x"))?n&&ih===n?t==="scale"?Bp:Fp:(ih=n||{})&&(t==="scale"?kp:Hp):e.style&&!Ql(e.style[t])?Np:~t.indexOf("-")?Op:cc(e,t)},core:{_removeProperty:Cr,_getMatrix:pc}};Qt.utils.checkPrefix=Hs;Qt.core.getStyleSaver=Dd;(function(r,e,t,n){var i=Zt(r+","+e+","+t,function(s){ci[s]=1});Zt(e,function(s){an.units[s]="deg",Nd[s]=1}),Fn[i[13]]=r+","+e,Zt(n,function(s){var a=s.split(":");Fn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Qt.registerPlugin(Bd);var mc=Qt.registerPlugin(Bd)||Qt;mc.core.Tween;const $p=!1,kd=768,io=window.matchMedia("(max-width: "+kd+"px)").matches,Jp=window.matchMedia("(hover: hover)").matches,ie={VER:"?v=260123",IS_DEV:$p,IS_PC:!0,IS_IPHONE:!1,OS:"",DEVICE:"",BROWSER:"",IS_WIDTH:io,IS_HOVER:Jp,FPS:60,BREAKPOINT:kd,BASE_W:io?375:1440,BASE_H:io?667:900,DELAY:{ORIENTATION:300,RESIZE_AFTER:300},IS_CAMERA:!1,IS_HAND_MODE:!1,HAND_HOVER:{VALUE:0,IS_MESH_HOVER:!1,IS_DOM_HOVER:!1},INTERVAL_MS:50,DOMMESH_ALPHA:0,EPS3:.001,EPS4:1e-4,EPS6:1e-6,EPS9:1e-9,IS_HIGH:!0,QUALITY:0,IS_HELPERS:!1,IS_GUI:!1,IS_STATS:!1,IS_CONTROLS:!1,IS_FOG:!1,IS_LIGHT_HELPER:!1,IS_SCENE_HELPER:!1,LAYERS:{DEFAULT:0,BLOOM:1,SCENE1:2,SCENE2:3,MASK:4}};function Qp(){const r=ie.HAND_HOVER;if(r.__bound)return;r.__bound=!0,r.IS_MESH_HOVER=!!r.IS_MESH_HOVER,r.IS_DOM_HOVER=!!r.IS_DOM_HOVER,r.VALUE=Number(r.VALUE??0);let e=!!r.IS_MESH_HOVER,t=!!r.IS_DOM_HOVER,n=null,i=null;const s=()=>{const o=!!(e||t);o!==n&&(n=o,document.documentElement.dataset.hover=o?"1":"0",i?.kill?.(),i=mc.to(r,{VALUE:o?1:0,duration:o?.25:.22,ease:"power2.out",overwrite:!0,onStart:()=>{}}))};s();const a=(o,l,c)=>{const h=Object.getOwnPropertyDescriptor(r,o);h?.get||h?.set||Object.defineProperty(r,o,{configurable:!0,enumerable:!0,get:l,set:c})};a("IS_MESH_HOVER",()=>e,o=>{const l=!!o;l!==e&&(e=l,s())}),a("IS_DOM_HOVER",()=>t,o=>{const l=!!o;l!==t&&(t=l,s())})}const em=()=>{try{return document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()}catch{return Promise.resolve()}},tm=()=>new Promise(async r=>{await em(),r()});class nm{constructor(){this.body=document.body,this.ua=window.navigator.userAgent.toLowerCase(),this.data={browser:"",os:"",device:"",iphone:""},this.checkBrowser(),this.checkOs(),this.checkDevice(),this.checkiPhone(),this.data.browser!=""&&this.body.classList.add(this.data.browser),this.data.os!=""&&this.body.classList.add(this.data.os),this.data.device!=""&&this.body.classList.add(this.data.device),this.data.iphone!=""&&this.body.classList.add(this.data.iphone)}checkBrowser(){let e="";this.ua.indexOf("edge")!==-1||this.ua.indexOf("edga")!==-1||this.ua.indexOf("edgios")!==-1?e="edge":this.ua.indexOf("opera")!==-1||this.ua.indexOf("opr")!==-1?e="opera":this.ua.indexOf("samsungbrowser")!==-1?e="samsung":this.ua.indexOf("ucbrowser")!==-1?e="uc":this.ua.indexOf("chrome")!==-1||this.ua.indexOf("crios")!==-1?e="chrome":this.ua.indexOf("firefox")!==-1||this.ua.indexOf("fxios")!==-1?e="firefox":this.ua.indexOf("safari")!==-1?e="safari":(this.ua.indexOf("msie")!==-1||this.ua.indexOf("trident")!==-1)&&(e="ie"),this.data.browser=e}checkOs(){let e="";this.ua.indexOf("windows nt")!==-1?e="windows":this.ua.indexOf("android")!==-1?e="android":this.ua.indexOf("iphone")!==-1||this.ua.indexOf("ipad")!==-1?e="ios":this.ua.indexOf("mac os x")!==-1&&(e="macos"),this.data.os=e}checkDevice(){let e="";this.ua.indexOf("iphone")!==-1||this.ua.indexOf("android")!==-1&&this.ua.indexOf("Mobile")>0?e="mobile":this.ua.indexOf("ipad")!==-1||this.ua.indexOf("android")!==-1||this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document?e="tablet":e="pc",this.data.device=e}checkiPhone(){this.ua.indexOf("iphone")!==-1?this.data.iphone="iphone":this.data.iphone=""}}const im=new nm;function so(r,e,t,n){return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(h){s(h)}}function o(c){try{l(n.throw(c))}catch(h){s(h)}}function l(c){var h;c.done?i(c.value):(h=c.value,h instanceof t?h:new t(function(u){u(h)})).then(a,o)}l((n=n.apply(r,e||[])).next())})}const sm=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function uh(r){return r=r.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Hd=typeof window>"u",Un=(()=>{if(Hd)return;const{userAgent:r,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(r),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||n||i,isSafari12:/Version\/12.+Safari/.test(r),isFirefox:/Firefox/.test(r)}})();function rm(r,e,t){if(!t)return[e];const n=function(c){const h=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,u=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,d=c.createShader(35633),f=c.createShader(35632),g=c.createProgram();if(!(f&&d&&g))return;c.shaderSource(d,h),c.shaderSource(f,u),c.compileShader(d),c.compileShader(f),c.attachShader(g,d),c.attachShader(g,f),c.linkProgram(g),c.detachShader(g,d),c.detachShader(g,f),c.deleteShader(d),c.deleteShader(f),c.useProgram(g);const _=c.createBuffer();c.bindBuffer(34962,_),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const m=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(m,3,5126,!1,0,0),c.enableVertexAttribArray(m),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const p=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,p),c.deleteProgram(g),c.deleteBuffer(_),p.join("")}(r),i="801621810",s="8016218135",a="80162181161",o=Un?.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["a15",i,15],["m1",i,15],["m2",i,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15],["a15",i,15],["a16",i,15],["a17",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}class dh extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const ro=[],fh=[];function am(r,e){if(r===e)return 0;const t=r;r.length>e.length&&(r=e,e=t);let n=r.length,i=e.length;for(;n>0&&r.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let s,a=0;for(;a<n&&r.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,h=0,u=0;for(;h<n;)fh[h]=r.charCodeAt(a+h),ro[h]=++h;for(;u<i;)for(s=e.charCodeAt(a+u),o=u++,c=u,h=0;h<n;h++)l=s===fh[h]?o:o+1,o=ro[h],c=ro[h]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function om(r){return r!=null}const lm=({mobileTiers:r=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@5.0.70/dist/benchmarks"}={})=>so(void 0,void 0,void 0,function*(){const a={};if(Hd)return{tier:0,type:"SSR"};const{isIpad:o=!!Un?.isIpad,isMobile:l=!!Un?.isMobile,screenSize:c=window.screen,loadBenchmarks:h=b=>so(void 0,void 0,void 0,function*(){const R=yield fetch(`${s}/${b}`).then(A=>A.json());if(parseInt(R.shift().split(".")[0],10)<4)throw new dh("Detect GPU benchmark data is out of date. Please update to version 4x");return R})}=t;let{renderer:u}=t;const d=(b,R,A,w,v)=>({device:v,fps:w,gpu:A,isMobile:l,tier:b,type:R});let f,g="";if(u)u=uh(u),f=[u];else{const b=n||function(A,w=!1){const v={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:w,powerPreference:"high-performance",stencil:!1};A&&delete v.powerPreference;const y=window.document.createElement("canvas"),P=y.getContext("webgl",v)||y.getContext("experimental-webgl",v);return P??void 0}(Un?.isSafari12,i);if(!b)return d(0,"WEBGL_UNSUPPORTED");const R=Un?.isFirefox?null:b.getExtension("WEBGL_debug_renderer_info");if(u=R?b.getParameter(R.UNMASKED_RENDERER_WEBGL):b.getParameter(b.RENDERER),!u)return d(1,"FALLBACK");g=u,u=uh(u),f=function(A,w,v){return w==="apple gpu"?rm(A,w,v):[w]}(b,u,l)}const _=(yield Promise.all(f.map(function(b){var R;return so(this,void 0,void 0,function*(){const A=(de=>{const X=l?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce","adreno"];for(const $ of X)if(de.includes($))return $})(b);if(!A)return;const w=`${l?"m":"d"}-${A}${o?"-ipad":""}.json`,v=a[w]=(R=a[w])!==null&&R!==void 0?R:h(w);let y;try{y=yield v}catch(de){if(de instanceof dh)throw de;return}const P=function(de){var X;const $=(de=de.replace(/\([^)]+\)/,"")).match(/\d+/)||de.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(X=$?.join("").replace(/\W|amd/g,""))!==null&&X!==void 0?X:""}(b);let k=y.filter(([,de])=>de===P);k.length||(k=y.filter(([de])=>de.includes(b)));const L=k.length;if(L===0)return;const I=b.split(/[.,()\[\]/\s]/g).sort().filter((de,X,$)=>X===0||de!==$[X-1]).join(" ");let H,[B,,,,Y]=L>1?k.map(de=>[de,am(I,de[2])]).sort(([,de],[,X])=>de-X)[0][0]:k[0],z=Number.MAX_VALUE;const{devicePixelRatio:J}=window,te=c.width*J*c.height*J;for(const de of Y){const[X,$]=de,ve=X*$,re=Math.abs(te-ve);re<z&&(z=re,H=de)}if(!H)return;const[,,ue,xe]=H;return[z,ue,B,xe]})}))).filter(om).sort(([b=Number.MAX_VALUE,R],[A=Number.MAX_VALUE,w])=>b===A?R-w:b-A);if(!_.length){const b=sm.find(R=>u.includes(R));return b?d(0,"BLOCKLISTED",b):d(1,"FALLBACK",`${u} (${g})`)}const[,m,p,T]=_[0];if(m===-1)return d(0,"BLOCKLISTED",p,m,T);const M=l?r:e;let x=0;for(let b=0;b<M.length;b++)m>=M[b]&&(x=b);return d(x,"BENCHMARK",p,m,T)});async function cm(){let r=0;const e=navigator.hardwareConcurrency||4;e>=12?r+=2:e>=6&&(r+=1);try{const i=await lm();i.tier>=3?r+=2:i.tier>=1&&(r+=1)}catch{}const t=await hm();r+=t;const n=window.navigator.userAgent.toLowerCase();return n&&/iphone|ipad|ipod|android/i.test(n)&&(r+=1),r>=5?"high":r>=3?"medium":"low"}function hm(){return new Promise(r=>{const e=performance.now(),t=performance.now()-e;t<100?r(2):t<200?r(1):r(0)})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="173",um=0,ph=1,dm=2,zd=1,Vd=2,ti=3,Mn=0,Jt=1,gn=2,Ci=0,Ls=1,al=2,mh=3,gh=4,fm=5,Zi=100,pm=101,mm=102,gm=103,_m=104,vm=200,xm=201,ym=202,Mm=203,ol=204,ll=205,Sm=206,Tm=207,Em=208,bm=209,wm=210,Am=211,Rm=212,Cm=213,Pm=214,cl=0,hl=1,ul=2,zs=3,dl=4,fl=5,pl=6,ml=7,Gd=0,Dm=1,Lm=2,Pi=0,Im=1,Um=2,Nm=3,Wd=4,Om=5,Fm=6,Bm=7,_h="attached",km="detached",Xd=300,Vs=301,Gs=302,gl=303,_l=304,Wa=306,Ii=1e3,Bn=1001,Ws=1002,Xt=1003,Yd=1004,_r=1005,ht=1006,Ma=1007,kn=1008,hi=1009,qd=1010,jd=1011,Lr=1012,_c=1013,ss=1014,jt=1015,Dn=1016,vc=1017,xc=1018,Xs=1020,Kd=35902,Zd=1021,$d=1022,yn=1023,Jd=1024,Qd=1025,Is=1026,Ys=1027,yc=1028,Mc=1029,ef=1030,Sc=1031,Tc=1033,Sa=33776,Ta=33777,Ea=33778,ba=33779,vl=35840,xl=35841,yl=35842,Ml=35843,Sl=36196,Tl=37492,El=37496,bl=37808,wl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Dl=37814,Ll=37815,Il=37816,Ul=37817,Nl=37818,Ol=37819,Fl=37820,Bl=37821,wa=36492,kl=36494,Hl=36495,tf=36283,zl=36284,Vl=36285,Gl=36286,Ir=2300,Ur=2301,ao=2302,vh=2400,xh=2401,yh=2402,Hm=2500,zm=0,nf=1,Wl=2,Vm=3200,Gm=3201,sf=0,Wm=1,Si="",ct="srgb",It="srgb-linear",Fa="linear",nt="srgb",ls=7680,Mh=519,Xm=512,Ym=513,qm=514,rf=515,jm=516,Km=517,Zm=518,$m=519,Xl=35044,Sh="300 es",ai=2e3,Ba=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const Sr=Math.PI/180,qs=180/Math.PI;function In(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Be(r,e,t){return Math.max(e,Math.min(t,r))}function Ec(r,e){return(r%e+e)%e}function Jm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Qm(r,e,t){return r!==e?(t-r)/(e-r):0}function Tr(r,e,t){return(1-t)*r+t*e}function eg(r,e,t,n){return Tr(r,e,1-Math.exp(-t*n))}function tg(r,e=1){return e-Math.abs(Ec(r,e*2)-e)}function ng(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ig(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function sg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rg(r,e){return r+Math.random()*(e-r)}function ag(r){return r*(.5-Math.random())}function og(r){r!==void 0&&(Th=r);let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lg(r){return r*Sr}function cg(r){return r*qs}function hg(r){return(r&r-1)===0&&r!==0}function ug(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Aa={DEG2RAD:Sr,RAD2DEG:qs,generateUUID:In,clamp:Be,euclideanModulo:Ec,mapLinear:Jm,inverseLerp:Qm,lerp:Tr,damp:eg,pingpong:tg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:ag,seededRandom:og,degToRad:lg,radToDeg:cg,isPowerOfTwo:hg,ceilPowerOfTwo:ug,floorPowerOfTwo:dg,setQuaternionFromProperEuler:fg,normalize:et,denormalize:Cn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],M=i[4],x=i[7],b=i[2],R=i[5],A=i[8];return s[0]=a*_+o*T+l*b,s[3]=a*m+o*M+l*R,s[6]=a*p+o*x+l*A,s[1]=c*_+h*T+u*b,s[4]=c*m+h*M+u*R,s[7]=c*p+h*x+u*A,s[2]=d*_+f*T+g*b,s[5]=d*m+f*M+g*R,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new Ne;function af(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pg(){const r=Nr("canvas");return r.style.display="block",r}const Eh={};function Es(r){r in Eh||(Eh[r]=!0)}function mg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _g(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){const r={enabled:!0,workingColorSpace:It,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[It]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:bh,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),r}const Xe=vg();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Nr("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}let yg=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(lo(i[a].image)):s.push(lo(i[a]))}else s=lo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let Mg=0;class bt extends Js{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Bn,i=Bn,s=ht,a=kn,o=yn,l=hi,c=bt.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=In(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Xd;bt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,b=(p+1)/2,R=(h+d)/4,A=(u+_)/4,w=(g+m)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=R/n,s=A/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=R/i,s=w/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=w/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sg extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Sg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),R=Math.atan2(b,p*T);m=Math.sin(m*R)/b,o=Math.sin(o*R)/b}const x=o*T;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new N,Ah=new di;class fi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Xr.subVectors(this.max,rr),hs.subVectors(e.a,rr),us.subVectors(e.b,rr),ds.subVectors(e.c,rr),mi.subVectors(us,hs),gi.subVectors(ds,us),Hi.subVectors(hs,ds);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Hi.z,Hi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Hi.z,0,-Hi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Hi.y,Hi.x,0];return!ho(t,hs,us,ds,Xr)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,hs,us,ds,Xr))?!1:(Yr.crossVectors(mi,gi),t=[Yr.x,Yr.y,Yr.z],ho(t,hs,us,ds,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,Wr=new fi,hs=new N,us=new N,ds=new N,mi=new N,gi=new N,Hi=new N,rr=new N,Xr=new N,Yr=new N,zi=new N;function ho(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){zi.fromArray(r,s);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Eg=new fi,ar=new N,uo=new N;class Xn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(uo)),this.expandByPoint(ar.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new N,fo=new N,qr=new N,_i=new N,po=new N,jr=new N,mo=new N;class Br{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=_i.dot(this.direction),l=-_i.dot(qr),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fo).addScaledVector(qr,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){po.subVectors(t,e),jr.subVectors(n,e),mo.crossVectors(po,jr);let a=this.direction.dot(mo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(_i,jr));if(l<0)return null;const c=o*this.direction.dot(po.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(mo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,wg)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(n,tn),vi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(n,tn)),vi.normalize(),Kr.crossVectors(tn,vi),i[0]=vi.x,i[4]=Kr.x,i[8]=tn.x,i[1]=vi.y,i[5]=Kr.y,i[9]=tn.y,i[2]=vi.z,i[6]=Kr.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],M=n[7],x=n[11],b=n[15],R=i[0],A=i[4],w=i[8],v=i[12],y=i[1],P=i[5],k=i[9],L=i[13],I=i[2],H=i[6],B=i[10],Y=i[14],z=i[3],J=i[7],te=i[11],ue=i[15];return s[0]=a*R+o*y+l*I+c*z,s[4]=a*A+o*P+l*H+c*J,s[8]=a*w+o*k+l*B+c*te,s[12]=a*v+o*L+l*Y+c*ue,s[1]=h*R+u*y+d*I+f*z,s[5]=h*A+u*P+d*H+f*J,s[9]=h*w+u*k+d*B+f*te,s[13]=h*v+u*L+d*Y+f*ue,s[2]=g*R+_*y+m*I+p*z,s[6]=g*A+_*P+m*H+p*J,s[10]=g*w+_*k+m*B+p*te,s[14]=g*v+_*L+m*Y+p*ue,s[3]=T*R+M*y+x*I+b*z,s[7]=T*A+M*P+x*H+b*J,s[11]=T*w+M*k+x*B+b*te,s[15]=T*v+M*L+x*Y+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,M=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,b=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=t*T+n*M+i*x+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=M*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=x*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=b*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,T=l*c,M=l*h,x=l*u,b=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+x)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-x)*R,i[5]=(1-(d+p))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+M)*A,i[9]=(m-T)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const a=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const c=1/s,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ai){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===ai)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ba)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ai){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h;let g,_;if(o===ai)g=(a+s)*u,_=-2*u;else if(o===Ba)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new N,An=new Ie,bg=new N(0,0,0),wg=new N(1,1,1),vi=new N,Kr=new N,tn=new N,Rh=new Ie,Ch=new di;class Wn{constructor(e=0,t=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const Ph=new N,ps=new di,$n=new Ie,Zr=new N,or=new N,Rg=new N,Cg=new di,Dh=new N(1,0,0),Lh=new N(0,1,0),Ih=new N(0,0,1),Uh={type:"added"},Pg={type:"removed"},ms={type:"childadded",child:null},go={type:"childremoved",child:null};class mt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new N,t=new Wn,n=new di,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ne}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(or,Zr,this.up):$n.lookAt(Zr,or,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ps.setFromRotationMatrix($n),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),ms.child=e,this.dispatchEvent(ms),ms.child=null),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new N(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new N,Jn=new N,_o=new N,Qn=new N,gs=new N,_s=new N,Nh=new N,vo=new N,xo=new N,yo=new N,Mo=new je,So=new je,To=new je;class Pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rn.subVectors(i,t),Jn.subVectors(n,t),_o.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(Jn),l=Rn.dot(_o),c=Jn.dot(Jn),h=Jn.dot(_o),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mo.setScalar(0),So.setScalar(0),To.setScalar(0),Mo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),To.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(So,s.y),a.addScaledVector(To,s.z),a}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;gs.subVectors(i,n),_s.subVectors(s,n),vo.subVectors(e,n);const l=gs.dot(vo),c=_s.dot(vo);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,i);const h=gs.dot(xo),u=_s.dot(xo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gs,a);yo.subVectors(e,s);const f=gs.dot(yo),g=_s.dot(yo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_s,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nh.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Nh,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Ec(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Eo(a,s,e+1/3),this.g=Eo(a,s,e),this.b=Eo(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=cf[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Xe.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Be(Ot.r*255,0,255))*65536+Math.round(Be(Ot.g*255,0,255))*256+Math.round(Be(Ot.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ct){Xe.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL($r);const n=Tr(xi.h,$r.h,t),i=Tr(xi.s,$r.s,t),s=Tr(xi.l,$r.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new we;we.NAMES=cf;let Dg=0;class Vn extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Ls,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class Hn extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ri=Lg();function Lg(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ig(r){Math.abs(r)>65504,r=Be(r,-65504,65504),ri.floatView[0]=r;const e=ri.uint32View[0],t=e>>23&511;return ri.baseTable[t]+((e&8388607)>>ri.shiftTable[t])}function Ug(r){const e=r>>10;return ri.uint32View[0]=ri.mantissaTable[ri.offsetTable[e]+(r&1023)]+ri.exponentTable[e],ri.floatView[0]}const Jr={toHalfFloat:Ig,fromHalfFloat:Ug},Tt=new N,Qr=new Ce;let Ng=0;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}}class hf extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uf extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Og=0;const dn=new Ie,bo=new mt,vs=new N,nn=new fi,lr=new fi,Ct=new N;class ln extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?uf:hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count,t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(nn.min,lr.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,lr.max),nn.expandByPoint(Ct)):(nn.expandByPoint(lr.min),nn.expandByPoint(lr.max))}nn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Ct.add(vs)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new N,l[w]=new N;const c=new N,h=new N,u=new N,d=new Ce,f=new Ce,g=new Ce,_=new N,m=new N;function p(w,v,y){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,w),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[w].add(_),o[v].add(_),o[y].add(_),l[w].add(m),l[v].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,v=T.length;w<v;++w){const y=T[w],P=y.start,k=y.count;for(let L=P,I=P+k;L<I;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new N,x=new N,b=new N,R=new N;function A(w){b.fromBufferAttribute(i,w),R.copy(b);const v=o[w];M.copy(v),M.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(R,v);const P=x.dot(l[w])<0?-1:1;a.setXYZW(w,M.x,M.y,M.z,P)}for(let w=0,v=T.length;w<v;++w){const y=T[w],P=y.start,k=y.count;for(let L=P,I=P+k;L<I;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return this;const t=new ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Ie,Vi=new Br,ea=new Xn,Fh=new N,ta=new N,na=new N,ia=new N,wo=new N,sa=new N,Bh=new N,ra=new N;class dt extends mt{constructor(e=new ln,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(wo.fromBufferAttribute(u,e),a?sa.addScaledVector(wo,h):sa.addScaledVector(wo.sub(t),h))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(ea.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ea,Fh)===null||Vi.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,b=M;x<b;x+=3){const R=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);i=aa(this,p,e,n,c,h,u,R,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);i=aa(this,a,e,n,c,h,u,T,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,b=M;x<b;x+=3){const R=x,A=x+1,w=x+2;i=aa(this,p,e,n,c,h,u,R,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,x=m+2;i=aa(this,a,e,n,c,h,u,T,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Fg(r,e,t,n,i,s,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Mn,o),l===null)return null;ra.copy(o),ra.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:r}}function aa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ta),r.getVertexPosition(l,na),r.getVertexPosition(c,ia);const h=Fg(r,e,t,n,ta,na,ia,Bh);if(h){const u=new N;Pn.getBarycoord(Bh,ta,na,ia,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,o,l,c,u,new Ce)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,o,l,c,u,new Ce)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Pn.getNormal(ta,na,ia,d.normal),h.face=d,h.barycoord=u}return h}class kr extends ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(u,2));function g(_,m,p,T,M,x,b,R,A,w,v){const y=x/A,P=b/w,k=x/2,L=b/2,I=R/2,H=A+1,B=w+1;let Y=0,z=0;const J=new N;for(let te=0;te<B;te++){const ue=te*P-L;for(let xe=0;xe<H;xe++){const de=xe*y-k;J[_]=de*T,J[m]=ue*M,J[p]=I,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(xe/A),u.push(1-te/w),Y+=1}}for(let te=0;te<w;te++)for(let ue=0;ue<A;ue++){const xe=d+ue+H*te,de=d+ue+H*(te+1),X=d+(ue+1)+H*(te+1),$=d+(ue+1)+H*te;l.push(xe,de,$),l.push(de,X,$),z+=6}o.addGroup(f,z,v),f+=z,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?e[t][n]=null:e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=js(r[t]);for(const i in n)e[i]=n[i]}return e}function Bg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function df(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const kg={clone:js,merge:Vt};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ff extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new N,kh=new Ce,Hh=new Ce;class Gt extends ff{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Hh),t.subVectors(Hh,kh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class Vg extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(xs,ys,e,t);i.layers=this.layers,this.add(i);const s=new Gt(xs,ys,e,t);s.layers=this.layers,this.add(s);const a=new Gt(xs,ys,e,t);a.layers=this.layers,this.add(a);const o=new Gt(xs,ys,e,t);o.layers=this.layers,this.add(o);const l=new Gt(xs,ys,e,t);l.layers=this.layers,this.add(l);const c=new Gt(xs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wc extends bt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gg extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kr(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Ci});s.uniforms.tEquirect.value=t;const a=new dt(i,s),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=ht),new Vg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Ji extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xg extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new N;class Ac{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zh=new N,Vh=new je,Gh=new je,qg=new N,Wh=new Ie,oa=new N,Ro=new Xn,Xh=new Ie,Co=new Br;class jg extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingBox.expandByPoint(oa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingSphere.expandByPoint(oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1&&(Xh.copy(i).invert(),Co.copy(e.ray).applyMatrix4(Xh),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===km&&this.bindMatrixInverse.copy(this.bindMatrix).invert()}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vh.fromBufferAttribute(i.attributes.skinIndex,e),Gh.fromBufferAttribute(i.attributes.skinWeight,e),zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Gh.getComponent(s);if(a!==0){const o=Vh.getComponent(s);Wh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(qg.copy(zh).applyMatrix4(Wh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rc extends bt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Xt,h=Xt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new Ie,Kg=new Ie;class Cc{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Kg;Yh.multiplyMatrices(o,t[s]),Yh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rc(t,e,e,yn,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(a=new pf),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Yl extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new Ie,qh=new Ie,la=[],jh=new fi,Zg=new Ie,cr=new dt,hr=new Xn;class mf extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),jh.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(jh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),hr.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),qh.multiplyMatrices(n,Ms),cr.matrixWorld=qh,cr.raycast(e,la);for(let a=0,o=la.length;a<o;a++){const l=la[a];l.instanceId=s,l.object=this,t.push(l)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rc(new Float32Array(i*this.count),i,this.count,yc,jt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Po=new N,$g=new N,Jg=new Ne;class ji{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Po.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jg.getNormalMatrix(e),i=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Xn,ca=new N;class Pc{constructor(e=new ji,t=new ji,n=new ji,i=new ji,s=new ji,a=new ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+T).normalize(),n[3].setComponents(l-a,d-h,m-g,x-T).normalize(),n[4].setComponents(l-o,d-u,m-_,x-M).normalize(),t===ai)n[5].setComponents(l+o,d+u,m+_,x+M).normalize();else if(t===Ba)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gf extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new N,Ha=new N,Kh=new Ie,ur=new Br,ha=new Xn,Do=new N,Zh=new N;class Dc extends mt{constructor(e=new ln,t=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ka.fromBufferAttribute(t,i-1),Ha.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ka.distanceTo(Ha);e.setAttribute("lineDistance",new Sn(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(i),ha.radius+=s,e.ray.intersectsSphere(ha)===!1)return;Kh.copy(i).invert(),ur.copy(e.ray).applyMatrix4(Kh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),T=h.getX(_+1),M=ua(this,e,ur,l,p,T,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ua(this,e,ur,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=ua(this,e,ur,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ua(this,e,ur,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ua(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(ka.fromBufferAttribute(o,i),Ha.fromBufferAttribute(o,s),t.distanceSqToSegment(ka,Ha,Do,Zh)>n)return;Do.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Do);if(!(c<e.near||c>e.far))return{distance:c,point:Zh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const $h=new N,Jh=new N;class Qg extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$h.fromBufferAttribute(t,i),Jh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$h.distanceTo(Jh);e.setAttribute("lineDistance",new Sn(n,1))}return this}}class e_ extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _f extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qh=new Ie,ql=new Br,da=new Xn,fa=new N;class t_ extends mt{constructor(e=new ln,t=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,e.ray.intersectsSphere(da)===!1)return;Qh.copy(i).invert(),ql.copy(e.ray).applyMatrix4(Qh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);fa.fromBufferAttribute(u,m),eu(fa,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)fa.fromBufferAttribute(u,g),eu(fa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function eu(r,e,t,n,i,s,a){const o=ql.distanceSqToPoint(r);if(o<t){const l=new N;ql.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vf extends bt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:ht,this.magFilter=s!==void 0?s:ht,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class xf extends bt{constructor(e,t,n,i,s,a,o,l,c,h=Is){if(h!==Is&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=ss),n===void 0&&h===Ys&&(n=Xs),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lc extends ln{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,h=new Ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Sn(a,3)),this.setAttribute("normal",new Sn(o,3)),this.setAttribute("uv",new Sn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ui extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-a;for(let M=0;M<c;M++){const x=M*u-s;g.push(x,-T,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const M=T+c*p,x=T+c*(p+1),b=T+1+c*(p+1),R=T+1+c*p;f.push(M,x,R),f.push(x,b,R)}this.setIndex(f),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}class n_ extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ic extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sf,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends Ic{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class i_ extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function pa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function r_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function a_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function yf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class o_ extends Hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:s=e,o=2*t-n;break;case yh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:a=e,l=2*n-t;break;case yh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let b=0;b!==o;++b)s[b]=p*a[h+b]+T*a[c+b]+M*a[l+b]+x*a[u+b];return s}}class l_ extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class c_ extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new c_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new o_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(a!==null&&a>l){e=!1;break}a=l}if(i!==void 0&&r_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ao,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ur;class Qs extends qn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Ir;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mf extends qn{}Mf.prototype.ValueTypeName="color";class Ks extends qn{}Ks.prototype.ValueTypeName="number";class h_ extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Zs extends qn{InterpolantFactoryMethodLinear(e){return new h_(this.times,this.values,this.getValueSize(),e)}}Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends qn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ir;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends qn{}$s.prototype.ValueTypeName="vector";class u_{constructor(e="",t=-1,n=[],i=Hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(f_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=a_(l);l=tu(l,1,h),c=tu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ks(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];yf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Ks(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n($s,f+".position",d,"pos",i),n(Zs,f+".quaternion",d,"rot",i),n($s,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ks;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Mf;case"quaternion":return Zs;case"bool":case"boolean":return Qs;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function f_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d_(r.type);if(r.times===void 0){const t=[],n=[];yf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class p_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const m_=new p_;class pi{constructor(e){this.manager=e!==void 0?e:m_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class g_ extends Error{constructor(e,t){super(e),this.response=t}}class Or extends pi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status,typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=h.length;R<A;R++){const w=h[R];w.onProgress&&w.onProgress(b)}p.enqueue(x),T()}},M=>{p.error(M)})}}});return new Response(m)}else throw new g_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{wi.add(e,c);const h=ei[e];delete ei[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sf extends pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=wi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Nr("img");function l(){h(),wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class __ extends pi{constructor(e){super(e)}load(e,t,n,i){const s=new wc;s.colorSpace=ct;const a=new Sf(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class v_ extends pi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Rc,o=new Or(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else return}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Bn,a.wrapT=c.wrapT!==void 0?c.wrapT:Bn,a.magFilter=c.magFilter!==void 0?c.magFilter:ht,a.minFilter=c.minFilter!==void 0?c.minFilter:ht,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=kn),c.mipmapCount===1&&(a.minFilter=ht),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class Tf extends pi{constructor(e){super(e)}load(e,t,n,i){const s=new bt,a=new Sf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Uc extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Lo=new Ie,nu=new N,iu=new N;class Nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x_ extends Nc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class y_ extends Uc{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new x_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const su=new Ie,dr=new N,Io=new N;class M_ extends Nc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),Io.copy(n.position),Io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Io),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su)}}class S_ extends Uc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new M_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Oc extends ff{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T_ extends Nc{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E_ extends Uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new T_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Er{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class b_ extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=wi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(e,l),s.manager.itemStart(e)}}class w_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Fc="\\[\\]\\.:\\/",A_=new RegExp("["+Fc+"]","g"),Bc="[^"+Fc+"]",R_="[^"+Fc.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",Bc),P_=/(WCOD+)?/.source.replace("WCOD",R_),D_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),I_=new RegExp("^"+C_+P_+D_+L_+"$"),U_=["material","materials","bones","map"];class N_{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(e){const t=I_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);U_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[n]===void 0)return;e=e[n]}if(c!==void 0){if(e[c]===void 0)return;e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=N_;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ru=new Ie;class kc{constructor(e,t,n=0,i=1/0){this.ray=new Br(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}setFromXRController(e){return ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(e,t=!0,n=[]){return jl(e,this,n,t),n.sort(au),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)jl(e[i],this,n,t);return n.sort(au),n}}function au(r,e){return r.distance-e.distance}function jl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)jl(s[a],e,t,!0)}}function ou(r,e,t,n){const i=O_(n);switch(t){case Zd:return r*e;case Jd:return r*e;case Qd:return r*e*2;case yc:return r*e/i.components*i.byteLength;case Mc:return r*e/i.components*i.byteLength;case ef:return r*e*2/i.components*i.byteLength;case Sc:return r*e*2/i.components*i.byteLength;case $d:return r*e*3/i.components*i.byteLength;case yn:return r*e*4/i.components*i.byteLength;case Tc:return r*e*4/i.components*i.byteLength;case Sa:case Ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ea:case ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:case Ml:return Math.max(r,16)*Math.max(e,8)/4;case vl:case yl:return Math.max(r,8)*Math.max(e,8)/2;case Sl:case Tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wa:case kl:case Hl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tf:case zl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vl:case Gl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O_(r){switch(r){case hi:case qd:return{byteLength:1,components:1};case Lr:case jd:case Dn:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ss:case _c:case jt:return{byteLength:4,components:1};case Kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=gc));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ef(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function F_(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:B_,alphahash_pars_fragment:k_,alphamap_fragment:H_,alphamap_pars_fragment:z_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:Y_,batching_vertex:q_,begin_vertex:j_,beginnormal_vertex:K_,bsdfs:Z_,iridescence_fragment:$_,bumpmap_pars_fragment:J_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:P0,envmap_vertex:y0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:T0,fog_pars_fragment:E0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:w0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:D0,lights_toon_pars_fragment:L0,lights_phong_fragment:I0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:B0,lights_fragment_end:k0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:Y0,map_particle_pars_fragment:q0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Z0,morphcolor_vertex:$0,morphnormal_vertex:J0,morphtarget_pars_vertex:Q0,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:hv,opaque_fragment:uv,packing:dv,premultiplied_alpha_fragment:fv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:yv,shadowmap_vertex:Mv,shadowmask_pars_fragment:Sv,skinbase_vertex:Tv,skinning_pars_vertex:Ev,skinning_vertex:bv,skinnormal_vertex:wv,specularmap_fragment:Av,specularmap_pars_fragment:Rv,tonemapping_fragment:Cv,tonemapping_pars_fragment:Pv,transmission_fragment:Dv,transmission_pars_fragment:Lv,uv_pars_fragment:Iv,uv_pars_vertex:Uv,uv_vertex:Nv,worldpos_vertex:Ov,background_vert:Fv,background_frag:Bv,backgroundCube_vert:kv,backgroundCube_frag:Hv,cube_vert:zv,cube_frag:Vv,depth_vert:Gv,depth_frag:Wv,distanceRGBA_vert:Xv,distanceRGBA_frag:Yv,equirect_vert:qv,equirect_frag:jv,linedashed_vert:Kv,linedashed_frag:Zv,meshbasic_vert:$v,meshbasic_frag:Jv,meshlambert_vert:Qv,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ax,meshphysical_vert:ox,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:hx,points_vert:ux,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Nn={basic:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Vt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Vt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Vt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Vt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Vt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Vt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Vt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Vt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Nn.physical={uniforms:Vt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ma={r:0,b:0,g:0},Wi=new Wn,_x=new Ie;function vx(r,e,t,n,i,s,a){const o=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const b=g(M);b===null?p(o,l):b&&b.isColor&&(p(b,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===Wa)?(h===void 0&&(h=new dt(new kr(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:js(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(Wi)),h.material.toneMapped=Xe.getTransfer(b.colorSpace)!==nt,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new dt(new Ui(2,2),new Wt({name:"BackgroundMaterial",uniforms:js(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(ma,df(r)),n.buffers.color.setClear(ma.r,ma.g,ma.b,x,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m,dispose:T}}function xx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,P,k,L,I){let H=!1;const B=u(L,k,P);s!==B&&(s=B,c(s.object)),H=f(y,L,k,I),H&&g(y,L,k,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(y,P,k,L),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,P,k){const L=k.wireframe===!0;let I=n[y.id];I===void 0&&(I={},n[y.id]=I);let H=I[P.id];H===void 0&&(H={},I[P.id]=H);let B=H[L];return B===void 0&&(B=d(l()),H[L]=B),B}function d(y){const P=[],k=[],L=[];for(let I=0;I<t;I++)P[I]=0,k[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:L,object:y,attributes:{},index:null}}function f(y,P,k,L){const I=s.attributes,H=P.attributes;let B=0;const Y=k.getAttributes();for(const z in Y)if(Y[z].location>=0){const te=I[z];let ue=H[z];if(ue===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(y,P,k,L){const I={},H=P.attributes;let B=0;const Y=k.getAttributes();for(const z in Y)if(Y[z].location>=0){let te=H[z];te===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),I[z]=ue,B++}s.attributes=I,s.attributesNum=B,s.index=L}function _(){const y=s.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const k=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;k[y]=1,L[y]===0&&(r.enableVertexAttribArray(y),L[y]=1),I[y]!==P&&(r.vertexAttribDivisor(y,P),I[y]=P)}function T(){const y=s.newAttributes,P=s.enabledAttributes;for(let k=0,L=P.length;k<L;k++)P[k]!==y[k]&&(r.disableVertexAttribArray(k),P[k]=0)}function M(y,P,k,L,I,H,B){B===!0?r.vertexAttribIPointer(y,P,k,I,H):r.vertexAttribPointer(y,P,k,L,I,H)}function x(y,P,k,L){_();const I=L.attributes,H=k.getAttributes(),B=P.defaultAttributeValues;for(const Y in H){const z=H[Y];if(z.location>=0){let J=I[Y];if(J===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const te=J.normalized,ue=J.itemSize,xe=e.get(J);if(xe===void 0)continue;const de=xe.buffer,X=xe.type,$=xe.bytesPerElement,ve=X===r.INT||X===r.UNSIGNED_INT||J.gpuType===_c;if(J.isInterleavedBufferAttribute){const re=J.data,Ae=re.stride,Ze=J.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)p(z.location+Re,re.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<z.locationSize;Re++)m(z.location+Re);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Re=0;Re<z.locationSize;Re++)M(z.location+Re,ue/z.locationSize,X,te,Ae*$,(Ze+ue/z.locationSize*Re)*$,ve)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)p(z.location+re,J.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<z.locationSize;re++)m(z.location+re);r.bindBuffer(r.ARRAY_BUFFER,de);for(let re=0;re<z.locationSize;re++)M(z.location+re,ue/z.locationSize,X,te,ue*$,ue/z.locationSize*re*$,ve)}}else if(B!==void 0){const te=B[Y];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(z.location,te);break;case 3:r.vertexAttrib3fv(z.location,te);break;case 4:r.vertexAttrib4fv(z.location,te);break;default:r.vertexAttrib1fv(z.location,te)}}}}T()}function b(){w();for(const y in n){const P=n[y];for(const k in P){const L=P[k];for(const I in L)h(L[I].object),delete L[I];delete P[k]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const k in P){const L=P[k];for(const I in L)h(L[I].object),delete L[I];delete P[k]}delete n[y.id]}function A(y){for(const P in n){const k=n[P];if(k[y.id]===void 0)continue;const L=k[y.id];for(const I in L)h(L[I].object),delete L[I];delete k[y.id]}}function w(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function yx(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==yn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==jt&&!w)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:R}}function Sx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ji,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,M=T*4;let x=p.clippingState||null;l.value=x,x=h(g,d,M,f);for(let b=0;b!==M;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(u[M]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tx(r){let e=new WeakMap;function t(a,o){return o===gl?a.mapping=Vs:o===_l&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gl||o===_l)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gg(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const As=4,lu=[.125,.215,.35,.446,.526,.582],Rs=20,Uo=new Oc,cu=new we;let No=null,Oo=0,Fo=0,Bo=!1;const Ki=(1+Math.sqrt(5))/2,Ss=1/Ki,hu=[new N(-Ki,Ss,0),new N(Ki,Ss,0),new N(-Ss,0,Ki),new N(Ss,0,Ki),new N(0,Ki,-Ss),new N(0,Ki,Ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Oo,Fo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:Dn,format:yn,colorSpace:It,depthBuffer:!1},i=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(s)),this._blurMaterial=bx(s,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cu),h.toneMapping=Pi,h.autoClear=!1;const f=new Hn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new dt(new kr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(cu),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;ga(i,T*M,p>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hu[(i-s-1)%hu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial,h=3,u=new dt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Rs;m>Rs;const p=[];let T=0;for(let A=0;A<Rs;++A){const w=A/_,v=Math.exp(-w*w/2);p.push(v),A===0?T+=v:A<m&&(T+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],b=3*x*(i>M-As?i-M+As:0),R=4*(this._cubeSize-x);ga(t,b,R,3*x,2*x),l.setRenderTarget(t),l.render(u,Uo)}}function Ex(r){const e=[],t=[],n=[];let i=r;const s=r-As+1+lu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-As?l=lu[a-r+As-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,w=R>2?0:-1,v=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];T.set(v,_*g*R),M.set(d,m*g*R);const y=[R,R,R,R,R,R];x.set(y,p*g*R)}const b=new ln;b.setAttribute("position",new wt(T,_)),b.setAttribute("uv",new wt(M,m)),b.setAttribute("faceIndex",new wt(x,p)),e.push(b),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function du(r,e,t){const n=new ui(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bx(r,e,t){const n=new Float32Array(Rs),i=new N(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fu(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function pu(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gl||l===_l,h=l===Vs||l===Gs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uu(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new uu(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ax(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rx(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let M=0,x=T.length;M<x;M+=3){const b=T[M+0],R=T[M+1],A=T[M+2];d.push(b,R,R,A,A,b)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const b=M+0,R=M+1,A=M+2;d.push(b,R,R,A,A,b)}}else return;const m=new(af(d)?uf:hf)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cx(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Px(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dx(r,e,t){const n=new WeakMap,i=new je;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=o.attributes.position.count*x,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*R*4*u),w=new lf(A,b,R,u);w.type=jt,w.needsUpdate=!0;const v=x*4;for(let P=0;P<u;P++){const k=p[P],L=T[P],I=M[P],H=b*R*4*P;for(let B=0;B<k.count;B++){const Y=B*v;g===!0&&(i.fromBufferAttribute(k,B),A[H+Y+0]=i.x,A[H+Y+1]=i.y,A[H+Y+2]=i.z,A[H+Y+3]=0),_===!0&&(i.fromBufferAttribute(L,B),A[H+Y+4]=i.x,A[H+Y+5]=i.y,A[H+Y+6]=i.z,A[H+Y+7]=0),m===!0&&(i.fromBufferAttribute(I,B),A[H+Y+8]=i.x,A[H+Y+9]=i.y,A[H+Y+10]=i.z,A[H+Y+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Ce(b,R)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Lx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const bf=new bt,mu=new xf(1,1),wf=new lf,Af=new Tg,Rf=new wc,gu=[],_u=[],vu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function tr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=gu[i];if(s===void 0&&(s=new Float32Array(i),gu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xa(r,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function Ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function Fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;yu.set(n),r.uniformMatrix2fv(this.addr,!1,yu),Rt(t,n)}}function Bx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;xu.set(n),r.uniformMatrix3fv(this.addr,!1,xu),Rt(t,n)}}function kx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;vu.set(n),r.uniformMatrix4fv(this.addr,!1,vu),Rt(t,n)}}function Hx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function Vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function Wx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mu.compareFunction=rf,s=mu):s=bf,t.setTexture2D(e||s,i)}function Kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Af,i)}function Zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rf,i)}function $x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wf,i)}function Jx(r){switch(r){case 5126:return Ix;case 35664:return Ux;case 35665:return Nx;case 35666:return Ox;case 35674:return Fx;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return zx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return Yx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}function Qx(r,e){r.uniform1fv(this.addr,e)}function ey(r,e){const t=tr(e,this.size,2);r.uniform2fv(this.addr,t)}function ty(r,e){const t=tr(e,this.size,3);r.uniform3fv(this.addr,t)}function ny(r,e){const t=tr(e,this.size,4);r.uniform4fv(this.addr,t)}function iy(r,e){const t=tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sy(r,e){const t=tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ry(r,e){const t=tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ay(r,e){r.uniform1iv(this.addr,e)}function oy(r,e){r.uniform2iv(this.addr,e)}function ly(r,e){r.uniform3iv(this.addr,e)}function cy(r,e){r.uniform4iv(this.addr,e)}function hy(r,e){r.uniform1uiv(this.addr,e)}function uy(r,e){r.uniform2uiv(this.addr,e)}function dy(r,e){r.uniform3uiv(this.addr,e)}function fy(r,e){r.uniform4uiv(this.addr,e)}function py(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||bf,s[a])}function my(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Af,s[a])}function gy(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rf,s[a])}function _y(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wf,s[a])}function vy(r){switch(r){case 5126:return Qx;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return _y}}class xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class yy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}}class My{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Mu(r,e){r.seq.push(e),r.map[e.id]=e}function Sy(r,e,t){const n=r.name,i=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),a=ko.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mu(t,c===void 0?new xy(o,r,e):new yy(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new My(o),Mu(t,u)),t=u}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Sy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Su(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ty=37297;let Ey=0;function by(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tu=new Ne;function wy(r){Xe._getMatrix(Tu,Xe.workingColorSpace,r);const e=`mat3( ${Tu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Fa:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return[e,"LinearTransferOETF"]}}function Eu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+by(r.getShaderSource(e),a)}else return i}function Ay(r,e){const t=wy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ry(r,e){let t;switch(e){case Im:t="Linear";break;case Um:t="Reinhard";break;case Nm:t="Cineon";break;case Wd:t="ACESFilmic";break;case Fm:t="AgX";break;case Bm:t="Neutral";break;case Om:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new N;function Cy(){Xe.getLuminanceCoefficients(_a);const r=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Py(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Dy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ly(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function vr(r){return r!==""}function bu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(r){return r.replace(Iy,Ny)}const Uy=new Map;function Ny(r,e){let t=Fe[e];if(t===void 0){const n=Uy.get(e);if(n!==void 0)t=Fe[n];else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(r){return r.replace(Oy,Fy)}function Fy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ru(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function By(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function ky(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function zy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Lm:e="ENVMAP_BLENDING_ADD";break}return e}function Vy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gy(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=By(t),c=ky(t),h=Hy(t),u=zy(t),d=Vy(t),f=Py(t),g=Dy(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Ay("linearToOutputTexel",t.outputColorSpace),Cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Kl(a),a=bu(a,t),a=wu(a,t),o=Kl(o),o=bu(o,t),o=wu(o,t),a=Au(a),o=Au(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+a,x=T+p+o,b=Su(i,i.VERTEX_SHADER,M),R=Su(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(b).trim(),I=i.getShaderInfoLog(R).trim();let H=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,R);else{const Y=Eu(i,b,"vertex"),z=Eu(i,R,"fragment")}else k!==""||(L===""||I==="")&&(B=!1);B&&(P.diagnostics={runnable:H,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(b),i.deleteShader(R),w=new Ra(i,_),v=Ly(i,_)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Ty)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ey++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let Wy=0;class Xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yy(e),t.set(e,n)),n}}class Yy{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}}function qy(r,e,t,n,i,s,a){const o=new bc,l=new Xy,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,P,k,L){const I=k.fog,H=L.geometry,B=v.isMeshStandardMaterial?k.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),z=Y&&Y.mapping===Wa?Y.image.height:null,J=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),v.precision);const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=te!==void 0?te.length:0;let xe=0;H.morphAttributes.position!==void 0&&(xe=1),H.morphAttributes.normal!==void 0&&(xe=2),H.morphAttributes.color!==void 0&&(xe=3);let de,X,$,ve;if(J){const Qe=Nn[J];de=Qe.vertexShader,X=Qe.fragmentShader}else de=v.vertexShader,X=v.fragmentShader,l.update(v),$=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ze=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,yt=!!v.map,ut=!!v.matcap,ze=!!Y,D=!!v.aoMap,cn=!!v.lightMap,Ve=!!v.bumpMap,Ge=!!v.normalMap,Se=!!v.displacementMap,ot=!!v.emissiveMap,Me=!!v.metalnessMap,C=!!v.roughnessMap,S=v.anisotropy>0,V=v.clearcoat>0,K=v.dispersion>0,Q=v.iridescence>0,j=v.sheen>0,ye=v.transmission>0,le=S&&!!v.anisotropyMap,pe=V&&!!v.clearcoatMap,Ye=V&&!!v.clearcoatNormalMap,ne=V&&!!v.clearcoatRoughnessMap,me=Q&&!!v.iridescenceMap,be=Q&&!!v.iridescenceThicknessMap,Pe=j&&!!v.sheenColorMap,ge=j&&!!v.sheenRoughnessMap,We=!!v.specularMap,Oe=!!v.specularColorMap,at=!!v.specularIntensityMap,F=ye&&!!v.transmissionMap,ae=ye&&!!v.thicknessMap,q=!!v.gradientMap,Z=!!v.alphaMap,he=v.alphaTest>0,ce=!!v.alphaHash,Ue=!!v.extensions;let gt=Pi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Ut={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:de,fragmentShader:X,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Re,batchingColor:Re&&L._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&L.instanceColor!==null,instancingMorph:Ze&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:It,alphaToCoverage:!!v.alphaToCoverage,map:yt,matcap:ut,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:cn,bumpMap:Ve,normalMap:Ge,displacementMap:d&&Se,emissiveMap:ot,normalMapObjectSpace:Ge&&v.normalMapType===Wm,normalMapTangentSpace:Ge&&v.normalMapType===sf,metalnessMap:Me,roughnessMap:C,anisotropy:S,anisotropyMap:le,clearcoat:V,clearcoatMap:pe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ne,dispersion:K,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:be,sheen:j,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:We,specularColorMap:Oe,specularIntensityMap:at,transmission:ye,transmissionMap:F,thicknessMap:ae,gradientMap:q,opaque:v.transparent===!1&&v.blending===Ls&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:ce,combine:v.combine,mapUv:yt&&_(v.map.channel),aoMapUv:D&&_(v.aoMap.channel),lightMapUv:cn&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:Ge&&_(v.normalMap.channel),displacementMapUv:Se&&_(v.displacementMap.channel),emissiveMapUv:ot&&_(v.emissiveMap.channel),metalnessMapUv:Me&&_(v.metalnessMap.channel),roughnessMapUv:C&&_(v.roughnessMap.channel),anisotropyMapUv:le&&_(v.anisotropyMap.channel),clearcoatMapUv:pe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:We&&_(v.specularMap.channel),specularColorMapUv:Oe&&_(v.specularColorMap.channel),specularIntensityMapUv:at&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:ae&&_(v.thicknessMap.channel),alphaMapUv:Z&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ge||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(yt||Z),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:yt&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===Jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&v.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(T(y,v),M(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const y=g[v.type];let P;if(y){const k=Nn[y];P=kg.clone(k.uniforms)}else P=v.uniforms;return P}function b(v,y){let P;for(let k=0,L=h.length;k<L;k++){const I=h[k];if(I.cacheKey===y){P=I,++P.usedTimes;break}}return P===void 0&&(P=new Gy(r,y,v,s),h.push(P)),P}function R(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:w}}function jy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ky(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Cu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ky),n.length>1&&n.sort(d||Cu),i.length>1&&i.sort(d||Cu)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Zy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Pu,r.set(n,[a])):i>=s.length?(a=new Pu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function $y(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function Jy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qy=0;function eM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tM(r){const e=new $y,t=Jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Ie,a=new Ie;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,M=0,x=0,b=0,R=0,A=0;c.sort(eM);for(let v=0,y=c.length;v<y;v++){const P=c[v],k=P.color,L=P.intensity,I=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*L,u+=k.g*L,d+=k.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],L);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,z=t.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(k).multiplyScalar(L),B.distance=I,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=H,x++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(k).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const Y=P.shadow,z=t.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==T||w.numPointShadows!==M||w.numSpotShadows!==x||w.numSpotMaps!==b||w.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,w.directionalLength=f,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=T,w.numPointShadows=M,w.numSpotShadows=x,w.numSpotMaps=b,w.numLightProbes=A,n.version=Qy++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Du(r){const e=new tM(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function nM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Du(r),e.set(i,[o])):s>=a.length?(o=new Du(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rM(r,e,t){let n=new Pc;const i=new Ce,s=new Ce,a=new je,o=new i_({depthPacking:Gm}),l=new s_,c={},h=t.maxTextureSize,u={[Mn]:Jt,[Jt]:Mn,[gn]:gn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:iM,fragmentShader:sM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(R,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Ci),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=p!==ti&&this.type===ti,I=p===ti&&this.type!==ti;for(let H=0,B=R.length;H<B;H++){const Y=R[H],z=Y.shadow;if(z===void 0||z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,z.mapSize.y=s.y)),z.map===null||L===!0||I===!0){const ue=this.type!==ti?{minFilter:Xt,magFilter:Xt}:{};z.map!==null&&z.map.dispose(),z.map=new ui(i.x,i.y,ue),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const te=z.getViewportCount();for(let ue=0;ue<te;ue++){const xe=z.getViewport(ue);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),k.viewport(a),z.updateMatrices(Y,ue),n=z.getFrustum(),x(A,w,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ti&&T(z,w),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,P)};function T(R,A){const w=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ui(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,w,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,w,f,_,null)}function M(R,A,w,v){let y=null;const P=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=w.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,L=A.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let H=I[L];H===void 0&&(H=y.clone(),I[L]=H,A.addEventListener("dispose",b)),y=H}if(y.visible=A.visible,y.wireframe=A.wireframe,v===ti?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=r.properties.get(y);k.light=w}return y}function x(R,A,w,v,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const L=e.update(R),I=R.material;if(Array.isArray(I)){const H=L.groups;for(let B=0,Y=H.length;B<Y;B++){const z=H[B],J=I[z.materialIndex];if(J&&J.visible){const te=M(R,J,v,y);R.onBeforeShadow(r,R,A,w,L,te,z),r.renderBufferDirect(w,null,L,te,R,z),R.onAfterShadow(r,R,A,w,L,te,z)}}}else if(I.visible){const H=M(R,I,v,y);R.onBeforeShadow(r,R,A,w,L,H,null),r.renderBufferDirect(w,null,L,H,R,null),R.onAfterShadow(r,R,A,w,L,H,null)}}const k=R.children;for(let L=0,I=k.length;L<I;L++)x(k[L],A,w,v,y)}function b(R){R.target.removeEventListener("dispose",b);for(const w in c){const v=c[w],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const aM={[cl]:hl,[ul]:pl,[dl]:ml,[zs]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:zs};function oM(r,e){function t(){let F=!1;const ae=new je;let q=null;const Z=new je(0,0,0,0);return{setMask:function(he){q!==he&&!F&&(r.colorMask(he,he,he,he),q=he)},setLocked:function(he){F=he},setClear:function(he,ce,Ue,gt,Ut){Ut===!0&&(he*=gt,ce*=gt,Ue*=gt),ae.set(he,ce,Ue,gt),Z.equals(ae)===!1&&(r.clearColor(he,ce,Ue,gt),Z.copy(ae))},reset:function(){F=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let F=!1,ae=!1,q=null,Z=null,he=null;return{setReversed:function(ce){if(ae!==ce){const Ue=e.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const gt=he;he=null,this.setClear(gt)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ce){q!==ce&&!F&&(r.depthMask(ce),q=ce)},setFunc:function(ce){if(ae&&(ce=aM[ce]),Z!==ce){switch(ce){case cl:r.depthFunc(r.NEVER);break;case hl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case dl:r.depthFunc(r.EQUAL);break;case fl:r.depthFunc(r.GEQUAL);break;case pl:r.depthFunc(r.GREATER);break;case ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ce}},setLocked:function(ce){F=ce},setClear:function(ce){he!==ce&&(ae&&(ce=1-ce),r.clearDepth(ce),he=ce)},reset:function(){F=!1,q=null,Z=null,he=null,ae=!1}}}function i(){let F=!1,ae=null,q=null,Z=null,he=null,ce=null,Ue=null,gt=null,Ut=null;return{setTest:function(Qe){F||(Qe?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!F&&(r.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,En,jn){(q!==Qe||Z!==En||he!==jn)&&(r.stencilFunc(Qe,En,jn),q=Qe,Z=En,he=jn)},setOp:function(Qe,En,jn){(ce!==Qe||Ue!==En||gt!==jn)&&(r.stencilOp(Qe,En,jn),ce=Qe,Ue=En,gt=jn)},setLocked:function(Qe){F=Qe},setClear:function(Qe){Ut!==Qe&&(r.clearStencil(Qe),Ut=Qe)},reset:function(){F=!1,ae=null,q=null,Z=null,he=null,ce=null,Ue=null,gt=null,Ut=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,b=null,R=null,A=new we(0,0,0),w=0,v=!1,y=null,P=null,k=null,L=null,I=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=Y>=2);let J=null,te={};const ue=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),de=new je().fromArray(ue),X=new je().fromArray(xe);function $(F,ae,q,Z){const he=new Uint8Array(4),ce=r.createTexture();r.bindTexture(F,ce),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ue=0;Ue<q;Ue++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ae+Ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ce}const ve={};ve[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(zs),Ve(!1),Ge(ph),re(r.CULL_FACE),D(Ci);function re(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Ae(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ze(F,ae){return u[F]!==ae?(r.bindFramebuffer(F,ae),u[F]=ae,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(F,ae){let q=f,Z=!1;if(F){q=d.get(ae),q===void 0&&(q=[],d.set(ae,q));const he=F.textures;if(q.length!==he.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Ue=he.length;ce<Ue;ce++)q[ce]=r.COLOR_ATTACHMENT0+ce;q.length=he.length,Z=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Z=!0);Z&&r.drawBuffers(q)}function yt(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const ut={[Zi]:r.FUNC_ADD,[pm]:r.FUNC_SUBTRACT,[mm]:r.FUNC_REVERSE_SUBTRACT};ut[gm]=r.MIN,ut[_m]=r.MAX;const ze={[vm]:r.ZERO,[xm]:r.ONE,[ym]:r.SRC_COLOR,[ol]:r.SRC_ALPHA,[wm]:r.SRC_ALPHA_SATURATE,[Em]:r.DST_COLOR,[Sm]:r.DST_ALPHA,[Mm]:r.ONE_MINUS_SRC_COLOR,[ll]:r.ONE_MINUS_SRC_ALPHA,[bm]:r.ONE_MINUS_DST_COLOR,[Tm]:r.ONE_MINUS_DST_ALPHA,[Am]:r.CONSTANT_COLOR,[Rm]:r.ONE_MINUS_CONSTANT_COLOR,[Cm]:r.CONSTANT_ALPHA,[Pm]:r.ONE_MINUS_CONSTANT_ALPHA};function D(F,ae,q,Z,he,ce,Ue,gt,Ut,Qe){if(F===Ci){_===!0&&(Ae(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),F!==fm){if(F!==m||Qe!==v){if((p!==Zi||x!==Zi)&&(r.blendEquation(r.FUNC_ADD),p=Zi,x=Zi),Qe)switch(F){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case al:r.blendFunc(r.ONE,r.ONE);break;case mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:break}else switch(F){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case al:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:break}T=null,M=null,b=null,R=null,A.set(0,0,0),w=0,m=F,v=Qe}return}he=he||ae,ce=ce||q,Ue=Ue||Z,(ae!==p||he!==x)&&(r.blendEquationSeparate(ut[ae],ut[he]),p=ae,x=he),(q!==T||Z!==M||ce!==b||Ue!==R)&&(r.blendFuncSeparate(ze[q],ze[Z],ze[ce],ze[Ue]),T=q,M=Z,b=ce,R=Ue),(gt.equals(A)===!1||Ut!==w)&&(r.blendColor(gt.r,gt.g,gt.b,Ut),A.copy(gt),w=Ut),m=F,v=!1}function cn(F,ae){F.side===gn?Ae(r.CULL_FACE):re(r.CULL_FACE);let q=F.side===Jt;ae&&(q=!q),Ve(q),F.blending===Ls&&F.transparent===!1?D(Ci):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){y!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),y=F)}function Ge(F){F!==um?(re(r.CULL_FACE),F!==P&&(F===ph?r.cullFace(r.BACK):F===dm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),P=F}function Se(F){F!==k&&(B&&r.lineWidth(F),k=F)}function ot(F,ae,q){F?(re(r.POLYGON_OFFSET_FILL),(L!==ae||I!==q)&&(r.polygonOffset(ae,q),L=ae,I=q)):Ae(r.POLYGON_OFFSET_FILL)}function Me(F){F?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function C(F){F===void 0&&(F=r.TEXTURE0+H-1),J!==F&&(r.activeTexture(F),J=F)}function S(F,ae,q){q===void 0&&(J===null?q=r.TEXTURE0+H-1:q=J);let Z=te[q];Z===void 0&&(Z={type:void 0,texture:void 0},te[q]=Z),(Z.type!==F||Z.texture!==ae)&&(J!==q&&(r.activeTexture(q),J=q),r.bindTexture(F,ae||ve[F]),Z.type=F,Z.texture=ae)}function V(){const F=te[J];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch{}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch{}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch{}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch{}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch{}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch{}}function me(){try{r.texImage2D.apply(r,arguments)}catch{}}function be(){try{r.texImage3D.apply(r,arguments)}catch{}}function Pe(F){de.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function ge(F){X.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function We(F,ae){let q=c.get(ae);q===void 0&&(q=new WeakMap,c.set(ae,q));let Z=q.get(F);Z===void 0&&(Z=r.getUniformBlockIndex(ae,F.name),q.set(F,Z))}function Oe(F,ae){const Z=c.get(ae).get(F);l.get(ae)!==Z&&(r.uniformBlockBinding(ae,Z,F.__bindingPointIndex),l.set(ae,Z))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,te={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,b=null,R=null,A=new we(0,0,0),w=0,v=!1,y=null,P=null,k=null,L=null,I=null,de.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ae,bindFramebuffer:Ze,drawBuffers:Re,useProgram:yt,setBlending:D,setMaterial:cn,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Se,setPolygonOffset:ot,setScissorTest:Me,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:me,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:ne,texSubImage2D:j,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Pe,viewport:ge,reset:at}}function lM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):Nr("canvas")}function _(C,S,V){let K=1;const Q=Me(C);if((Q.width>V||Q.height>V)&&(K=V/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*Q.width),ye=Math.floor(K*Q.height);u===void 0&&(u=g(j,ye));const le=S?g(j,ye):u;return le.width=j,le.height=ye,le.getContext("2d").drawImage(C,0,0,j,ye),le}else return"data"in C,C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,S,V,K,Q=!1){if(C!==null&&r[C]!==void 0)return r[C];let j=S;if(S===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),S===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),S===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){const ye=Q?Fa:Xe.getTransfer(K);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=ye===nt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,S){let V;return C?S===null||S===ss||S===Xs?V=r.DEPTH24_STENCIL8:S===jt?V=r.DEPTH32F_STENCIL8:S===Lr&&(V=r.DEPTH24_STENCIL8):S===null||S===ss||S===Xs?V=r.DEPTH_COMPONENT24:S===jt?V=r.DEPTH_COMPONENT32F:S===Lr&&(V=r.DEPTH_COMPONENT16),V}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==ht?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),y(S)}function w(C){const S=n.get(C);if(S.__webglInit===void 0)return;const V=C.source,K=d.get(V);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(C),Object.keys(K).length===0&&d.delete(V)}n.remove(C)}function v(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const V=C.source,K=d.get(V);delete K[S.__cacheKey],a.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,Q=V.length;K<Q;K++){const j=n.get(V[K]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(C)}let P=0;function k(){P=0}function L(){const C=P;return C>=i.maxTextures,P+=1,C}function I(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){const V=n.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const K=C.image;if(K!==null){if(K.complete!==!1){X(V,C,S);return}}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function B(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){X(V,C,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function Y(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){X(V,C,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function z(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const J={[Ii]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Ws]:r.MIRRORED_REPEAT},te={[Xt]:r.NEAREST,[Yd]:r.NEAREST_MIPMAP_NEAREST,[_r]:r.NEAREST_MIPMAP_LINEAR,[ht]:r.LINEAR,[Ma]:r.LINEAR_MIPMAP_NEAREST,[kn]:r.LINEAR_MIPMAP_LINEAR},ue={[Xm]:r.NEVER,[$m]:r.ALWAYS,[Ym]:r.LESS,[rf]:r.LEQUAL,[qm]:r.EQUAL,[Zm]:r.GEQUAL,[jm]:r.GREATER,[Km]:r.NOTEQUAL};function xe(C,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ht||S.magFilter===Ma||S.magFilter===_r||S.magFilter===kn||S.minFilter===ht||S.minFilter===Ma||S.minFilter===_r||S.minFilter),r.texParameteri(C,r.TEXTURE_WRAP_S,J[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,te[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,te[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==_r&&S.minFilter!==kn||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function de(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const j=I(S);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[j].usedTimes++;const ye=Q[C.__cacheKey];ye!==void 0&&(Q[C.__cacheKey].usedTimes--,ye.usedTimes===0&&v(S)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return V}function X(C,S,V){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const Q=de(C,S),j=S.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+V);const ye=n.get(j);if(j.version!==ye.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const le=Xe.getPrimaries(Xe.workingColorSpace),pe=S.colorSpace===Si?null:Xe.getPrimaries(S.colorSpace),Ye=S.colorSpace===Si||le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ne=_(S.image,!1,i.maxTextureSize);ne=ot(S,ne);const me=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let Pe=M(S.internalFormat,me,be,S.colorSpace,S.isVideoTexture);xe(K,S);let ge;const We=S.mipmaps,Oe=S.isVideoTexture!==!0,at=ye.__version===void 0||Q===!0,F=j.dataReady,ae=b(S,ne);if(S.isDepthTexture)Pe=x(S.format===Ys,S.type),at&&(Oe?t.texStorage2D(r.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,be,null));else if(S.isDataTexture)if(We.length>0){Oe&&at&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,We[0].width,We[0].height);for(let q=0,Z=We.length;q<Z;q++)ge=We[q],Oe?F&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,me,be,ge.data):t.texImage2D(r.TEXTURE_2D,q,Pe,ge.width,ge.height,0,me,be,ge.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,ne.width,ne.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,me,be,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,be,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Pe,We[0].width,We[0].height,ne.depth);for(let q=0,Z=We.length;q<Z;q++)if(ge=We[q],S.format!==yn){if(me!==null)if(Oe){if(F)if(S.layerUpdates.size>0){const he=ou(ge.width,ge.height,S.format,S.type);for(const ce of S.layerUpdates){const Ue=ge.data.subarray(ce*he/ge.data.BYTES_PER_ELEMENT,(ce+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ce,ge.width,ge.height,1,me,Ue)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Pe,ge.width,ge.height,ne.depth,0,ge.data,0,0)}else Oe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ne.depth,me,be,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Pe,ge.width,ge.height,ne.depth,0,me,be,ge.data)}else{Oe&&at&&t.texStorage2D(r.TEXTURE_2D,ae,Pe,We[0].width,We[0].height);for(let q=0,Z=We.length;q<Z;q++)ge=We[q],S.format!==yn?me!==null&&(Oe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Pe,ge.width,ge.height,0,ge.data)):Oe?F&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ge.width,ge.height,me,be,ge.data):t.texImage2D(r.TEXTURE_2D,q,Pe,ge.width,ge.height,0,me,be,ge.data)}else if(S.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Pe,ne.width,ne.height,ne.depth),F)if(S.layerUpdates.size>0){const q=ou(ne.width,ne.height,S.format,S.type);for(const Z of S.layerUpdates){const he=ne.data.subarray(Z*q/ne.data.BYTES_PER_ELEMENT,(Z+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,me,be,he)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,be,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,me,be,ne.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(r.TEXTURE_3D,ae,Pe,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,be,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,me,be,ne.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(r.TEXTURE_2D,ae,Pe,ne.width,ne.height);else{let q=ne.width,Z=ne.height;for(let he=0;he<ae;he++)t.texImage2D(r.TEXTURE_2D,he,Pe,q,Z,0,me,be,null),q>>=1,Z>>=1}}else if(We.length>0){if(Oe&&at){const q=Me(We[0]);t.texStorage2D(r.TEXTURE_2D,ae,Pe,q.width,q.height)}for(let q=0,Z=We.length;q<Z;q++)ge=We[q],Oe?F&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,me,be,ge):t.texImage2D(r.TEXTURE_2D,q,Pe,me,be,ge);S.generateMipmaps=!1}else if(Oe){if(at){const q=Me(ne);t.texStorage2D(r.TEXTURE_2D,ae,Pe,q.width,q.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,be,ne)}else t.texImage2D(r.TEXTURE_2D,0,Pe,me,be,ne);m(S)&&p(K),ye.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,V){if(S.image.length!==6)return;const K=de(C,S),Q=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const j=n.get(Q);if(Q.version!==j.__version||K===!0){t.activeTexture(r.TEXTURE0+V);const ye=Xe.getPrimaries(Xe.workingColorSpace),le=S.colorSpace===Si?null:Xe.getPrimaries(S.colorSpace),pe=S.colorSpace===Si||ye===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ye&&!ne?me[Z]=_(S.image[Z],!0,i.maxCubemapSize):me[Z]=ne?S.image[Z].image:S.image[Z],me[Z]=ot(S,me[Z]);const be=me[0],Pe=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),We=M(S.internalFormat,Pe,ge,S.colorSpace),Oe=S.isVideoTexture!==!0,at=j.__version===void 0||K===!0,F=Q.dataReady;let ae=b(S,be);xe(r.TEXTURE_CUBE_MAP,S);let q;if(Ye){Oe&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,We,be.width,be.height);for(let Z=0;Z<6;Z++){q=me[Z].mipmaps;for(let he=0;he<q.length;he++){const ce=q[he];S.format!==yn?Pe!==null&&(Oe?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,We,ce.width,ce.height,0,ce.data)):Oe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ce.width,ce.height,Pe,ge,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,We,ce.width,ce.height,0,Pe,ge,ce.data)}}}else{if(q=S.mipmaps,Oe&&at){q.length>0&&ae++;const Z=Me(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Oe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Pe,ge,me[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,me[Z].width,me[Z].height,0,Pe,ge,me[Z].data);for(let he=0;he<q.length;he++){const Ue=q[he].image[Z].image;Oe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ue.width,Ue.height,Pe,ge,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,We,Ue.width,Ue.height,0,Pe,ge,Ue.data)}}else{Oe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ge,me[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Pe,ge,me[Z]);for(let he=0;he<q.length;he++){const ce=q[he];Oe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Pe,ge,ce.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,We,Pe,ge,ce.image[Z])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,V,K,Q,j){const ye=s.convert(V.format,V.colorSpace),le=s.convert(V.type),pe=M(V.internalFormat,ye,le,V.colorSpace),Ye=n.get(S),ne=n.get(V);if(ne.__renderTarget=S,!Ye.__hasExternalTextures){const me=Math.max(1,S.width>>j),be=Math.max(1,S.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,pe,me,be,S.depth,0,ye,le,null):t.texImage2D(Q,j,pe,me,be,0,ye,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,ne.__webglTexture,0,Ve(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,ne.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(C,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=x(S.stencilBuffer,Q),ye=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ve(S);Ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,j,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,C)}else{const K=S.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],ye=s.convert(j.format,j.colorSpace),le=s.convert(j.type),pe=M(j.internalFormat,ye,le,j.colorSpace),Ye=Ve(S);V&&Ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,pe,S.width,S.height):Ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const Q=K.__webglTexture,j=Ve(S);if(S.depthTexture.format===Is)Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ys)Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ze(C){const S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),re(S.__webglDepthbuffer[K],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),re(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(C,S,V){const K=n.get(C);S!==void 0&&ve(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ze(C)}function yt(C){const S=C.texture,V=n.get(C),K=n.get(S);C.addEventListener("dispose",A);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)V.__webglFramebuffer[le][pe]=r.createFramebuffer()}else V.__webglFramebuffer[le]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)V.__webglFramebuffer[le]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ye)for(let le=0,pe=Q.length;le<pe;le++){const Ye=n.get(Q[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ge(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const pe=Q[le];V.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Ye=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),me=M(pe.internalFormat,Ye,ne,pe.colorSpace,C.isXRRenderTarget===!0),be=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,V.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),re(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),xe(r.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ve(V.__webglFramebuffer[le][pe],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else ve(V.__webglFramebuffer[le],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,pe=Q.length;le<pe;le++){const Ye=Q[le],ne=n.get(Ye);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),xe(r.TEXTURE_2D,Ye),ve(V.__webglFramebuffer,C,Ye,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(Ye)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),xe(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ve(V.__webglFramebuffer[pe],C,S,r.COLOR_ATTACHMENT0,le,pe);else ve(V.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}C.depthBuffer&&Ze(C)}function ut(C){const S=C.textures;for(let V=0,K=S.length;V<K;V++){const Q=S[V];if(m(Q)){const j=T(C),ye=n.get(Q).__webglTexture;t.bindTexture(j,ye),p(j),t.unbindTexture()}}}const ze=[],D=[];function cn(C){if(C.samples>0){if(Ge(C)===!1){const S=C.textures,V=C.width,K=C.height;let Q=r.COLOR_BUFFER_BIT;const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(C),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ye=n.get(S[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,V,K,0,0,V,K,Q,r.NEAREST),l===!0&&(ze.length=0,D.length=0,ze.push(r.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ze.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ye=n.get(S[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ve(C){return Math.min(i.maxSamples,C.samples)}function Ge(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ot(C,S){const V=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==It&&V!==Si&&Xe.getTransfer(V),S}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ge}function cM(r,e){function t(n,i=Si){let s;const a=Xe.getTransfer(i);if(n===hi)return r.UNSIGNED_BYTE;if(n===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return r.BYTE;if(n===jd)return r.SHORT;if(n===Lr)return r.UNSIGNED_SHORT;if(n===_c)return r.INT;if(n===ss)return r.UNSIGNED_INT;if(n===jt)return r.FLOAT;if(n===Dn)return r.HALF_FLOAT;if(n===Zd)return r.ALPHA;if(n===$d)return r.RGB;if(n===yn)return r.RGBA;if(n===Jd)return r.LUMINANCE;if(n===Qd)return r.LUMINANCE_ALPHA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Ys)return r.DEPTH_STENCIL;if(n===yc)return r.RED;if(n===Mc)return r.RED_INTEGER;if(n===ef)return r.RG;if(n===Sc)return r.RG_INTEGER;if(n===Tc)return r.RGBA_INTEGER;if(n===Sa||n===Ta||n===Ea||n===ba)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===xl||n===yl||n===Ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===Tl||n===El)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sl||n===Tl)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Ol||n===Fl||n===Bl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===kl||n===Hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tf||n===zl||n===Vl||n===Gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:hM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fM extends Js{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new dM,m=t.getContextAttributes();let p=null,T=null;const M=[],x=[],b=new Ce;let R=null;const A=new Gt;A.viewport=new je;const w=new Gt;w.viewport=new je;const v=[A,w],y=new w_;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=M[X];return $===void 0&&($=new Ao,M[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=M[X];return $===void 0&&($=new Ao,M[X]=$),$.getGripSpace()},this.getHand=function(X){let $=M[X];return $===void 0&&($=new Ao,M[X]=$),$.getHandSpace()};function L(X){const $=x.indexOf(X.inputSource);if($===-1)return;const ve=M[$];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||a),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){const $=x[X];$!==null&&(x[X]=null,M[X].disconnect($))}P=null,k=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting},this.setReferenceSpaceType=function(X){o=X,n.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",I),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,re=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Ys:Is,re=m.stencil?Xs:ss);const Ze={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ui(d.textureWidth,d.textureHeight,{format:yn,type:hi,depthTexture:new xf(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ui(f.framebufferWidth,f.framebufferHeight,{format:yn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(X){for(let $=0;$<X.removed.length;$++){const ve=X.removed[$],re=x.indexOf(ve);re>=0&&(x[re]=null,M[re].disconnect(ve))}for(let $=0;$<X.added.length;$++){const ve=X.added[$];let re=x.indexOf(ve);if(re===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=x.length){x.push(ve),re=Ze;break}else if(x[Ze]===null){x[Ze]=ve,re=Ze;break}if(re===-1)break}const Ae=M[re];Ae&&Ae.connect(ve)}}const B=new N,Y=new N;function z(X,$,ve){B.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const re=B.distanceTo(Y),Ae=$.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,Re=Ae[14]/(Ae[10]-1),yt=Ae[14]/(Ae[10]+1),ut=(Ae[9]+1)/Ae[5],ze=(Ae[9]-1)/Ae[5],D=(Ae[8]-1)/Ae[0],cn=(Ze[8]+1)/Ze[0],Ve=Re*D,Ge=Re*cn,Se=re/(-D+cn),ot=Se*-D;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Me=Re+Se,C=yt+Se,S=Ve-ot,V=Ge+(re-ot),K=ut*yt/C*Me,Q=ze*yt/C*Me;X.projectionMatrix.makePerspective(S,V,K,Q,Me,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let $=X.near,ve=X.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),y.near=w.near=A.near=$,y.far=w.far=A.far=ve,(P!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,k=y.far),A.layers.mask=X.layers.mask|2,w.layers.mask=X.layers.mask|4,y.layers.mask=A.layers.mask|w.layers.mask;const re=X.parent,Ae=y.cameras;J(y,re);for(let Ze=0;Ze<Ae.length;Ze++)J(Ae[Ze],re);Ae.length===2?z(y,A,w):y.projectionMatrix.copy(A.projectionMatrix),te(X,y,re)};function te(X,$,ve){ve===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ue=null;function xe(X,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let re=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Re=0;Re<ve.length;Re++){const yt=ve[Re];let ut=null;if(f!==null)ut=f.getViewport(yt);else{const D=u.getViewSubImage(d,yt);ut=D.viewport,Re===0&&(e.setRenderTargetTextures(T,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(T))}let ze=v[Re];ze===void 0&&(ze=new Gt,ze.layers.enable(Re),ze.viewport=new je,v[Re]=ze),ze.matrix.fromArray(yt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(yt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Re===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(ze)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Re=u.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ve=0;ve<M.length;ve++){const re=x[ve],Ae=M[ve];re!==null&&Ae!==void 0&&Ae.update(re,$,c||a)}ue&&ue(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const de=new Ef;de.setAnimationLoop(xe),this.setAnimationLoop=function(X){ue=X},this.dispose=function(){}}}const Xi=new Wn,pM=new Ie;function mM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,df(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(Xi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const x=M.program;n.uniformBlockBinding(T,x)}function c(T,M){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(T,b);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function h(T){const M=u();T.__bindingPointIndex=M;const x=r.createBuffer(),b=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return 0}function d(T){const M=i[T.id],x=T.uniforms,b=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let R=0,A=x.length;R<A;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let v=0,y=w.length;v<y;v++){const P=w[v];if(f(P,R,v,b)===!0){const k=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let H=0;H<L.length;H++){const B=L[H],Y=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,k+I,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,M,x,b){const R=T.value,A=M+"_"+x;if(b[A]===void 0)return typeof R=="number"||typeof R=="boolean"?b[A]=R:b[A]=R.clone(),!0;{const w=b[A];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return b[A]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(T){const M=T.uniforms;let x=0;const b=16;for(let A=0,w=M.length;A<w;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,P=v.length;y<P;y++){const k=v[y],L=Array.isArray(k.value)?k.value:[k.value];for(let I=0,H=L.length;I<H;I++){const B=L[I],Y=_(B),z=x%b,J=z%Y.boundary,te=z+J;x+=J,te!==0&&b-te<Y.storage&&(x+=b-te),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Y.storage}}}const R=x%b;return R>0&&(x+=b-R),T.__size=x,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture,M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class _M{constructor(e={}){const{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this.toneMapping=Pi,this.toneMappingExposure=1;const x=this;let b=!1,R=0,A=0,w=null,v=-1,y=null;const P=new je,k=new je;let L=null;const I=new we(0);let H=0,B=t.width,Y=t.height,z=1,J=null,te=null;const ue=new je(0,0,B,Y),xe=new je(0,0,B,Y);let de=!1;const X=new Pc;let $=!1,ve=!1;this.transmissionResolutionScale=1;const re=new Ie,Ae=new Ie,Ze=new N,Re=new je,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ze(){return w===null?z:1}let D=n;function cn(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const U="webgl2";if(D=cn(U,E),D===null)throw cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E}let Ve,Ge,Se,ot,Me,C,S,V,K,Q,j,ye,le,pe,Ye,ne,me,be,Pe,ge,We,Oe,at,F;function ae(){Ve=new Ax(D),Ve.init(),Oe=new cM(D,Ve),Ge=new Mx(D,Ve,e,Oe),Se=new oM(D,Ve),Ge.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),ot=new Px(D),Me=new jy,C=new lM(D,Ve,Se,Me,Ge,Oe,ot),S=new Tx(x),V=new wx(x),K=new F_(D),at=new xx(D,K),Q=new Rx(D,K,ot,at),j=new Lx(D,Q,K,ot),Pe=new Dx(D,Ge,C),ne=new Sx(Me),ye=new qy(x,S,V,Ve,Ge,at,ne),le=new mM(x,Me),pe=new Zy,Ye=new nM(Ve),be=new vx(x,S,V,Se,j,f,l),me=new rM(x,j,Ge),F=new gM(D,ot,Ge,Se),ge=new yx(D,Ve,ot),We=new Cx(D,Ve,ot),ot.programs=ye.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=Me,x.renderLists=pe,x.shadowMap=me,x.state=Se,x.info=ot}ae();const q=new fM(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(B,Y,!1))},this.getSize=function(E){return E.set(B,Y)},this.setSize=function(E,U,G=!0){q.isPresenting||(B=E,Y=U,t.width=Math.floor(E*z),t.height=Math.floor(U*z),G===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U))},this.getDrawingBufferSize=function(E){return E.set(B*z,Y*z).floor()},this.setDrawingBufferSize=function(E,U,G){B=E,Y=U,z=G,t.width=Math.floor(E*G),t.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,U,G,W){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,U,G,W),Se.viewport(P.copy(ue).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,U,G,W){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,U,G,W),Se.scissor(k.copy(xe).multiplyScalar(z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){Se.setScissorTest(de=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let O=!1;if(w!==null){const ee=w.texture.format;O=ee===Tc||ee===Sc||ee===Mc}if(O){const ee=w.texture.type,oe=ee===hi||ee===ss||ee===Lr||ee===Xs||ee===vc||ee===xc,fe=be.getClearColor(),_e=be.getClearAlpha(),De=fe.r,Le=fe.g,Te=fe.b;oe?(g[0]=De,g[1]=Le,g[2]=Te,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=De,_[1]=Le,_[2]=Te,_[3]=_e,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),be.dispose(),pe.dispose(),Ye.dispose(),Me.dispose(),S.dispose(),V.dispose(),j.dispose(),at.dispose(),F.dispose(),ye.dispose(),q.dispose(),q.removeEventListener("sessionstart",Vc),q.removeEventListener("sessionend",Gc),Oi.stop()};function Z(E){E.preventDefault(),b=!0}function he(){b=!1;const E=ot.autoReset,U=me.enabled,G=me.autoUpdate,W=me.needsUpdate,O=me.type;ae(),ot.autoReset=E,me.enabled=U,me.autoUpdate=G,me.needsUpdate=W,me.type=O}function ce(E){}function Ue(E){const U=E.target;U.removeEventListener("dispose",Ue),gt(U)}function gt(E){Ut(E),Me.remove(E)}function Ut(E){const U=Me.get(E).programs;U!==void 0&&(U.forEach(function(G){ye.releaseProgram(G)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,O,ee){U===null&&(U=yt);const oe=O.isMesh&&O.matrixWorld.determinant()<0,fe=Df(E,U,G,W,O);Se.setMaterial(W,oe);let _e=G.index,De=1;if(W.wireframe===!0){if(_e=Q.getWireframeAttribute(G),_e===void 0)return;De=2}const Le=G.drawRange,Te=G.attributes.position;let qe=Le.start*De,$e=(Le.start+Le.count)*De;ee!==null&&(qe=Math.max(qe,ee.start*De),$e=Math.min($e,(ee.start+ee.count)*De)),_e!==null?(qe=Math.max(qe,0),$e=Math.min($e,_e.count)):Te!=null&&(qe=Math.max(qe,0),$e=Math.min($e,Te.count));const St=$e-qe;if(St<0||St===1/0)return;at.setup(O,W,fe,G,_e);let _t,Ke=ge;if(_e!==null&&(_t=K.get(_e),Ke=We,Ke.setIndex(_t)),O.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*ze()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(O.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*ze()),O.isLineSegments?Ke.setMode(D.LINES):O.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else O.isPoints?Ke.setMode(D.POINTS):O.isSprite&&Ke.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,Dt=O._multiDrawCounts,Je=O._multiDrawCount,bn=_e?K.get(_e).bytesPerElement:1,as=Me.get(W).currentProgram.getUniforms();for(let en=0;en<Je;en++)as.setValue(D,"_gl_DrawID",en),Ke.render(Ee[en]/bn,Dt[en])}else if(O.isInstancedMesh)Ke.renderInstances(qe,St,O.count);else if(G.isInstancedBufferGeometry){const Ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dt=Math.min(G.instanceCount,Ee);Ke.renderInstances(qe,St,Dt)}else Ke.render(qe,St)};function Qe(E,U,G){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,Vr(E,U,G),E.side=Mn,E.needsUpdate=!0,Vr(E,U,G),E.side=gn):Vr(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=Ye.get(G),p.init(U),M.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const fe=ee[oe];Qe(fe,G,O),W.add(fe)}else Qe(ee,G,O),W.add(ee)}),M.pop(),p=null,W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(O=>{function ee(){if(W.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&W.delete(oe)}),W.size===0){O(E);return}setTimeout(ee,10)}Ve.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let En=null;function jn(E){En&&En(E)}function Vc(){Oi.stop()}function Gc(){Oi.start()}const Oi=new Ef;Oi.setAnimationLoop(jn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){En=E,q.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},q.addEventListener("sessionstart",Vc),q.addEventListener("sessionend",Gc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0||b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),p=Ye.get(E,M.length),p.init(U),M.push(p),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,$=ne.init(this.clippingPlanes,ve),m=pe.get(E,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&Ya(ee,U,-1/0,x.sortObjects)}Ya(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,te),ut=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ut&&be.addToRenderList(m,E),this.info.render.frame++,$===!0&&ne.beginShadows();const G=p.state.shadowsArray;me.render(G,E,U),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(O.length>0)for(let oe=0,fe=ee.length;oe<fe;oe++){const _e=ee[oe];Xc(W,O,E,_e)}ut&&be.render(E);for(let oe=0,fe=ee.length;oe<fe;oe++){const _e=ee[oe];Wc(m,E,_e,_e.viewport)}}else O.length>0&&Xc(W,O,E,U),ut&&be.render(E),Wc(m,E,U);w!==null&&A===0&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),at.resetDefaultState(),v=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ya(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const oe=j.update(E),fe=E.material;fe.visible&&m.push(E,oe,fe,G,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const oe=j.update(E),fe=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Re.copy(oe.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(fe)){const _e=oe.groups;for(let De=0,Le=_e.length;De<Le;De++){const Te=_e[De],qe=fe[Te.materialIndex];qe&&qe.visible&&m.push(E,oe,qe,G,Re.z,Te)}}else fe.visible&&m.push(E,oe,fe,G,Re.z,null)}}const ee=E.children;for(let oe=0,fe=ee.length;oe<fe;oe++)Ya(ee[oe],U,G,W)}function Wc(E,U,G,W){const O=E.opaque,ee=E.transmissive,oe=E.transparent;p.setupLightsView(G),$===!0&&ne.setGlobalState(x.clippingPlanes,G),W&&Se.viewport(P.copy(W)),O.length>0&&zr(O,U,G),ee.length>0&&zr(ee,U,G),oe.length>0&&zr(oe,U,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Xc(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ui(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Dn:hi,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=p.state.transmissionRenderTarget[W.id],oe=W.viewport||P;ee.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const fe=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(I),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),ut&&be.render(G);const _e=x.toneMapping;x.toneMapping=Pi;const De=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&ne.setGlobalState(x.clippingPlanes,W),zr(E,G,W),C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Te=0,qe=U.length;Te<qe;Te++){const $e=U[Te],St=$e.object,_t=$e.geometry,Ke=$e.material,Ee=$e.group;if(Ke.side===gn&&St.layers.test(W.layers)){const Dt=Ke.side;Ke.side=Jt,Ke.needsUpdate=!0,Yc(St,G,W,_t,Ke,Ee),Ke.side=Dt,Ke.needsUpdate=!0,Le=!0}}Le===!0&&(C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee))}x.setRenderTarget(fe),x.setClearColor(I,H),De!==void 0&&(W.viewport=De),x.toneMapping=_e}function zr(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ee=E.length;O<ee;O++){const oe=E[O],fe=oe.object,_e=oe.geometry,De=W===null?oe.material:W,Le=oe.group;fe.layers.test(G.layers)&&Yc(fe,U,G,_e,De,Le)}}function Yc(E,U,G,W,O,ee){E.onBeforeRender(x,U,G,W,O,ee),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,U,G,W,E,ee),O.transparent===!0&&O.side===gn&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,x.renderBufferDirect(G,U,W,O,E,ee),O.side=Mn,O.needsUpdate=!0,x.renderBufferDirect(G,U,W,O,E,ee),O.side=gn):x.renderBufferDirect(G,U,W,O,E,ee),E.onAfterRender(x,U,G,W,O,ee)}function Vr(E,U,G){U.isScene!==!0&&(U=yt);const W=Me.get(E),O=p.state.lights,ee=p.state.shadowsArray,oe=O.state.version,fe=ye.getParameters(E,O.state,ee,U,G),_e=ye.getProgramCacheKey(fe);let De=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ue),De=new Map,W.programs=De);let Le=De.get(_e);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===oe)return jc(E,fe),Le}else fe.uniforms=ye.getUniforms(E),E.onBeforeCompile(fe,x),Le=ye.acquireProgram(fe,_e),De.set(_e,Le),W.uniforms=fe.uniforms;const Te=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ne.uniform),jc(E,fe),W.needsLights=If(E),W.lightsStateVersion=oe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function qc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ra.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function jc(E,U){const G=Me.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Df(E,U,G,W,O){U.isScene!==!0&&(U=yt),C.resetTextureUnits();const ee=U.fog,oe=W.isMeshStandardMaterial?U.environment:null,fe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:It,_e=(W.isMeshStandardMaterial?V:S).get(W.envMap||oe),De=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,$e=!!G.morphAttributes.color;let St=Pi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=x.toneMapping);const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=_t!==void 0?_t.length:0,Ee=Me.get(W),Dt=p.state.lights;if($===!0&&(ve===!0||E!==y)){const Ht=E===y&&W.id===v;ne.setState(W,E,Ht)}let Je=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Dt.state.version||Ee.outputColorSpace!==fe||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==_e||W.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==De||Ee.vertexTangents!==Le||Ee.morphTargets!==Te||Ee.morphNormals!==qe||Ee.morphColors!==$e||Ee.toneMapping!==St||Ee.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Ee.__version=W.version);let bn=Ee.currentProgram;Je===!0&&(bn=Vr(W,U,O));let as=!1,en=!1,ir=!1;const lt=bn.getUniforms(),hn=Ee.uniforms;if(Se.useProgram(bn.program)&&(as=!0,en=!0,ir=!0),W.id!==v&&(v=W.id,en=!0),as||y!==E){Se.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),gg(re),_g(re),lt.setValue(D,"projectionMatrix",re)):lt.setValue(D,"projectionMatrix",E.projectionMatrix),lt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Yt=lt.map.cameraPosition;Yt!==void 0&&Yt.setValue(D,Ze.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,en=!0,ir=!0)}if(O.isSkinnedMesh){lt.setOptional(D,O,"bindMatrix"),lt.setOptional(D,O,"bindMatrixInverse");const Ht=O.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),lt.setValue(D,"boneTexture",Ht.boneTexture,C))}O.isBatchedMesh&&(lt.setOptional(D,O,"batchingTexture"),lt.setValue(D,"batchingTexture",O._matricesTexture,C),lt.setOptional(D,O,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",O._indirectTexture,C),lt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",O._colorsTexture,C));const un=G.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Pe.update(O,G,bn),(en||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,lt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=_e,hn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),en&&(lt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&Lf(hn,ir),ee&&W.fog===!0&&le.refreshFogUniforms(hn,ee),le.refreshMaterialUniforms(hn,W,z,Y,p.state.transmissionRenderTarget[E.id]),Ra.upload(D,qc(Ee),hn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ra.upload(D,qc(Ee),hn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(D,"center",O.center),lt.setValue(D,"modelViewMatrix",O.modelViewMatrix),lt.setValue(D,"normalMatrix",O.normalMatrix),lt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ht=W.uniformsGroups;for(let Yt=0,qa=Ht.length;Yt<qa;Yt++){const Fi=Ht[Yt];F.update(Fi,bn),F.bind(Fi,bn)}}return bn}function Lf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function If(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,G){Me.get(E.texture).__webglTexture=U,Me.get(E.depthTexture).__webglTexture=G;const W=Me.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const G=Me.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Uf=D.createFramebuffer();this.setRenderTarget=function(E,U=0,G=0){w=E,R=U,A=G;let W=!0,O=null,ee=!1,oe=!1;if(E){const _e=Me.get(E);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(_e.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_e.__hasExternalTextures)C.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(_e.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(oe=!0);const Le=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?O=Le[U][G]:O=Le[U],ee=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?O=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,P.copy(E.viewport),k.copy(E.scissor),L=E.scissorTest}else P.copy(ue).multiplyScalar(z).floor(),k.copy(xe).multiplyScalar(z).floor(),L=de;if(G!==0&&(O=Uf),Se.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&Se.drawBuffers(E,O),Se.viewport(P),Se.scissor(k),Se.setScissorTest(L),ee){const _e=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,G)}else if(oe){const _e=Me.get(E.texture),De=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,G,De)}else if(E!==null&&G!==0){const _e=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(E,U,G,W,O,ee,oe){if(!(E&&E.isWebGLRenderTarget))return;let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){Se.bindFramebuffer(D.FRAMEBUFFER,fe);try{const _e=E.texture,De=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(De)||!Ge.textureTypeReadable(Le))return;U>=0&&U<=E.width-W&&G>=0&&G<=E.height-O&&D.readPixels(U,G,W,O,Oe.convert(De),Oe.convert(Le),ee)}finally{const _e=w!==null?Me.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,W,O,ee,oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){const _e=E.texture,De=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-W&&G>=0&&G<=E.height-O){Se.bindFramebuffer(D.FRAMEBUFFER,fe);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),D.readPixels(U,G,W,O,Oe.convert(De),Oe.convert(Le),0);const qe=w!==null?Me.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,qe);const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mg(D,$e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(Te),D.deleteSync($e),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(E.image.width*W),ee=Math.floor(E.image.height*W),oe=U!==null?U.x:0,fe=U!==null?U.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,oe,fe,O,ee),Se.unbindTexture()};const Nf=D.createFramebuffer(),Of=D.createFramebuffer();this.copyTextureToTexture=function(E,U,G=null,W=null,O=0,ee=null){E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],U=arguments[2],ee=arguments[3]||0,G=null),ee===null&&(O!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let oe,fe,_e,De,Le,Te,qe,$e,St;const _t=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(G!==null)oe=G.max.x-G.min.x,fe=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,Le=G.min.y,Te=G.isBox3?G.min.z:0;else{const un=Math.pow(2,-O);oe=Math.floor(_t.width*un),fe=Math.floor(_t.height*un),E.isDataArrayTexture?_e=_t.depth:E.isData3DTexture?_e=Math.floor(_t.depth*un):_e=1,De=0,Le=0,Te=0}W!==null?(qe=W.x,$e=W.y,St=W.z):(qe=0,$e=0,St=0);const Ke=Oe.convert(U.format),Ee=Oe.convert(U.type);let Dt;U.isData3DTexture?(C.setTexture3D(U,0),Dt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Dt=D.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=D.getParameter(D.UNPACK_ROW_LENGTH),bn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),as=D.getParameter(D.UNPACK_SKIP_PIXELS),en=D.getParameter(D.UNPACK_SKIP_ROWS),ir=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const lt=E.isDataArrayTexture||E.isData3DTexture,hn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const un=Me.get(E),Ht=Me.get(U),Yt=Me.get(un.__renderTarget),qa=Me.get(Ht.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Fi=0;Fi<_e;Fi++)lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,O,Te+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,ee,St+Fi)),D.blitFramebuffer(De,Le,oe,fe,qe,$e,oe,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Me.has(E)){const un=Me.get(E),Ht=Me.get(U);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Nf),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Of);for(let Yt=0;Yt<_e;Yt++)lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,O,Te+Yt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,O),hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,ee,St+Yt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,ee),O!==0?D.blitFramebuffer(De,Le,oe,fe,qe,$e,oe,fe,D.COLOR_BUFFER_BIT,D.NEAREST):hn?D.copyTexSubImage3D(Dt,ee,qe,$e,St+Yt,De,Le,oe,fe):D.copyTexSubImage2D(Dt,ee,qe,$e,De,Le,oe,fe);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Dt,ee,qe,$e,St,oe,fe,_e,Ke,Ee,_t.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Dt,ee,qe,$e,St,oe,fe,_e,Ke,_t.data):D.texSubImage3D(Dt,ee,qe,$e,St,oe,fe,_e,Ke,Ee,_t):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,qe,$e,oe,fe,Ke,Ee,_t.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,qe,$e,_t.width,_t.height,Ke,_t.data):D.texSubImage2D(D.TEXTURE_2D,ee,qe,$e,oe,fe,Ke,Ee,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,as),D.pixelStorei(D.UNPACK_SKIP_ROWS,en),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ir),ee===0&&U.generateMipmaps&&D.generateMipmap(Dt),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,W=null,O=0){return E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,G,W,O)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Se.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class st{static set(e,t=!0){}static add(e,t,n,i=0,s=1,a=.1,o=n){}static toggle(e,t,n,i=n){}static color(e,t,n,i=n){}static text(e,t,n,i){}static select(e,t,n,i={}){}}function Lu(r,e){if(e===zm)return r;if(e===Wl||e===nf){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return r}const n=t.count-2,i=[];if(e===Wl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3;const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return r}class Iu extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new SM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new OM(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Er.extractUrlBase(e);a=Er.resolveURL(c,this.path)}else a=Er.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cf){try{a[ke.KHR_BINARY_GLTF]=new FM(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ZM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name,o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ke.KHR_MATERIALS_UNLIT:a[u]=new yM;break;case ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new BM(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:a[u]=new kM;break;case ke.KHR_MESH_QUANTIZATION:a[u]=new HM;break;default:d.indexOf(u)>=0&&o[u]}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function vM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xM{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],It);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new E_(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new S_(h),c.distance=u;break;case"spot":c=new y_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class yM{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ct))}return Promise.all(i)}}class MM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class SM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(s)}}class TM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class bM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class wM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class AM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],It),Promise.all(s)}}class RM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ct)),Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class DM{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class LM{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class IM{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UM{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NM{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class OM{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ie,m=new N,p=new di,T=new N(1,1,1),M=new mf(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&T.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,T));for(const x in l)if(x==="_COLOR_0"){const b=l[x];M.instanceColor=new Yl(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);mt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Cf="glTF",fr=12,Uu={JSON:1313821514,BIN:5130562};class FM{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fr,s=new DataView(e,fr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Uu.JSON){const c=new Uint8Array(e,fr+a,o);this.content=n.decode(c)}else if(l===Uu.BIN){const c=fr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Zl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Zl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ns[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,It,d)})})}}class kM{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HM{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Pf extends Hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,T=1-m,M=p-d+u;for(let x=0;x!==o;x++){const b=a[_+x+o],R=a[_+x+l]*h,A=a[g+x+o],w=a[g+x]*h;s[x]=T*b+M*R+m*A+p*w}return s}}const zM=new di;class VM extends Pf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zM.fromArray(s).normalize().toArray(s),s}}const mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nu={9728:Xt,9729:ht,9984:Yd,9985:Ma,9986:_r,9987:kn},Ou={33071:Bn,33648:Ws,10497:Ii},Ho={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GM={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Ir},zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ic({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),r.DefaultMaterial}function Yi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(r,e){e.extras!==void 0&&typeof e.extras=="object"&&Object.assign(r.userData,e.extras)}function XM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function YM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}}}function qM(r){let e;const t=r.extensions&&r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vo(t.attributes):e=r.indices+":"+Vo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Vo(r.targets[n]);return e}function Vo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function $l(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const KM=new Ie;class ZM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Tf(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Yi(s,o,i),ii(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Er.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ho[i.type],o=Ns[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new wt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ho[i.type],c=Ns[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(T);M||(_=new c(o,p*f,i.count*f/h),M=new Yg(_,f/h),t.cache.add(T,M)),m=new Ac(M,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new wt(_,l,g);if(i.sparse!==void 0){const p=Ho.SCALAR,T=Ns[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new T(a[1],M,i.sparse.count*p),R=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,w=b.length;A<w;A++){const v=b[A];if(m.setX(v,R[A*l]),l>=2&&m.setY(v,R[A*l+1]),l>=3&&m.setZ(v,R[A*l+2]),l>=4&&m.setW(v,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Nu[d.magFilter]||ht,h.minFilter=Nu[d.minFilter]||kn,h.wrapS=Ou[d.wrapS]||Ii,h.wrapT=Ou[d.wrapT]||Ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(Er.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ii(u,a),u.userData.mimeType=a.mimeType||jM(a.uri),u}).catch(function(u){throw u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _f,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gf,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ic}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ke.KHR_MATERIALS_UNLIT]){const u=i[ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ct)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=gn);const h=s.alphaMode||zo.OPAQUE;if(h===zo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Hn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Hn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Hn){const u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],It)}return s.emissiveTexture!==void 0&&a!==Hn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ct)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),ii(u,s),t.associations.set(u,{materials:e}),s.extensions&&Yi(i,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=qM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Fu(new ln,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?WM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const T=c[f];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new jg(_,T):new dt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=Lu(p.geometry,nf):m.mode===mn.TRIANGLE_FAN&&(p.geometry=Lu(p.geometry,Wl));else if(m.mode===mn.LINES)p=new Qg(_,T);else if(m.mode===mn.LINE_STRIP)p=new Dc(_,T);else if(m.mode===mn.LINE_LOOP)p=new e_(_,T);else if(m.mode===mn.POINTS)p=new t_(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&YM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ii(p,s),m.extensions&&Yi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Yi(i,u[0],s),u[0];const d=new Ji;s.extensions&&Yi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new Gt(Aa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Oc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ie;s!==null&&d.fromArray(s.array,c*16),l.push(d)}}return new Cc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,M=d.length;T<M;T++){const x=d[T],b=f[T],R=g[T],A=_[T],w=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,b,R,A,w);if(v)for(let y=0;y<v.length;y++)p.push(v[y])}return new u_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,KM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new pf:c.length>1?h=new Ji:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ii(h,s),s.extensions&&Yi(n,h,s),s.matrix!==void 0){const u=new Ie;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ji;n.name&&(s.name=i.createUniqueName(n.name)),ii(s,n),n.extensions&&Yi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Vn||d instanceof bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Mi[s.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Mi[s.path]){case Mi.weights:c=Ks;break;case Mi.rotation:c=Zs;break;case Mi.position:case Mi.scale:c=$s;break;default:switch(n.itemSize){case 1:c=Ks;break;case 2:case 3:default:c=$s;break}break}const h=i.interpolation!==void 0?GM[i.interpolation]:Ur,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Mi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$l(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Zs?VM:Pf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $M(r,e,t){const n=e.attributes,i=new fi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const h=$l(Ns[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else return}else return;const s=e.targets;if(s!==void 0){const o=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=$l(Ns[d.componentType]);l.multiplyScalar(_)}o.max(l)}}}i.expandByVector(o)}r.boundingBox=i;const a=new Xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Fu(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Zl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==It&&"COLOR_0"in n,ii(r,e),$M(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?XM(r,e.targets,t):r})}const Go=new WeakMap;class JM extends pi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Or(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ct,n).catch(n)}decodeDracoFile(e,t,n,i,s=It,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Go.has(e)){const l=Go.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Go.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new ln;e.index&&t.setIndex(new wt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,l=new wt(a,o);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==ct)return;const n=new we;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Xe.toWorkingColorSpace(n,ct),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Or(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=QM.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function QM(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let T,M;if(c.useUniqueIDs)M=h[m],T=o.GetAttributeByUniqueId(d,M);else{if(M=o.GetAttributeId(d,a[h[m]]),M===-1)continue;T=o.GetAttribute(d,M)}const x=i(a,o,d,m,p,T);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=s(a,h),p=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const T=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:T,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class eS extends v_{constructor(e){super(e),this.type=Dn}parse(e){const a=function(w,v){switch(w){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=`
`,u=function(w,v,y){v=v||1024;let k=w.pos,L=-1,I=0,H="",B=String.fromCharCode.apply(null,new Uint16Array(w.subarray(k,k+128)));for(;0>(L=B.indexOf(h))&&I<v&&k<w.byteLength;)H+=B,I+=B.length,k+=128,B+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(k,k+128)));return-1<L?(y!==!1&&(w.pos+=I+L+1),H+B.slice(0,L)):!1},d=function(w){const v=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,B;for((w.pos>=w.byteLength||!(H=u(w)))&&a(1,"no header found"),(B=H.match(v))||a(3,"bad initial token"),I.valid|=1,I.programtype=B[1],I.string+=H+`
`;H=u(w),H!==!1;){if(I.string+=H+`
`,H.charAt(0)==="#"){I.comments+=H+`
`;continue}if((B=H.match(y))&&(I.gamma=parseFloat(B[1])),(B=H.match(P))&&(I.exposure=parseFloat(B[1])),(B=H.match(k))&&(I.valid|=2,I.format=B[1]),(B=H.match(L))&&(I.valid|=4,I.height=parseInt(B[1],10),I.width=parseInt(B[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},f=function(w,v,y){const P=v;if(P<8||P>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);P!==(w[2]<<8|w[3])&&a(3,"wrong scanline width");const k=new Uint8Array(4*v*y);k.length||a(4,"unable to allocate buffer space");let L=0,I=0;const H=4*P,B=new Uint8Array(4),Y=new Uint8Array(H);let z=y;for(;z>0&&I<w.byteLength;){I+4>w.byteLength&&a(1),B[0]=w[I++],B[1]=w[I++],B[2]=w[I++],B[3]=w[I++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=P)&&a(3,"bad rgbe scanline format");let J=0,te;for(;J<H&&I<w.byteLength;){te=w[I++];const xe=te>128;if(xe&&(te-=128),(te===0||J+te>H)&&a(3,"bad scanline data"),xe){const de=w[I++];for(let X=0;X<te;X++)Y[J++]=de}else Y.set(w.subarray(I,I+te),J),J+=te,I+=te}const ue=P;for(let xe=0;xe<ue;xe++){let de=0;k[L]=Y[xe+de],de+=P,k[L+1]=Y[xe+de],de+=P,k[L+2]=Y[xe+de],de+=P,k[L+3]=Y[xe+de],L+=4}z--}return k},g=function(w,v,y,P){const k=w[v+3],L=Math.pow(2,k-128)/255;y[P+0]=w[v+0]*L,y[P+1]=w[v+1]*L,y[P+2]=w[v+2]*L,y[P+3]=1},_=function(w,v,y,P){const k=w[v+3],L=Math.pow(2,k-128)/255;y[P+0]=Jr.toHalfFloat(Math.min(w[v+0]*L,65504)),y[P+1]=Jr.toHalfFloat(Math.min(w[v+1]*L,65504)),y[P+2]=Jr.toHalfFloat(Math.min(w[v+2]*L,65504)),y[P+3]=Jr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),T=p.width,M=p.height,x=f(m.subarray(m.pos),T,M);let b,R,A;switch(this.type){case jt:A=x.length/4;const w=new Float32Array(A*4);for(let y=0;y<A;y++)g(x,y*4,w,y*4);b=w,R=jt;break;case Dn:A=x.length/4;const v=new Uint16Array(A*4);for(let y=0;y<A;y++)_(x,y*4,v,y*4);b=v,R=Dn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:M,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case jt:case Dn:a.colorSpace=It,a.minFilter=ht,a.magFilter=ht,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}class tS{constructor(){this.modelLoader=null,this.modelLoader=new Iu,this.dracoLoader=new Iu,this.dracoLoader.setDRACOLoader(new JM().setDecoderPath(URL_SITE+"assets/draco/")),this.textureLoader=new Tf,this.envTextureLoader=new eS}toLoadAsyncTexture(e){return this.textureLoader.loadAsync(e)}toLoadAsyncModel(e){return this.modelLoader.loadAsync(e)}toLoadAsyncDraco(e){return this.dracoLoader.loadAsync(e)}toLoadElementImg(e){return new Promise(t=>{const n=e.getAttribute("src"),i=e.getAttribute("width"),s=e.getAttribute("height"),a=new Image;a.src=n,a.addEventListener("load",o=>{const l={texture:this.textureLoader.load(n),ele:e,src:n,w:i,h:s,aspect:i/s};return l.texture.outputColorSpace=ct,t(l)})})}toLoadElementVideo(e){const t=e.getAttribute("src"),n=e.getAttribute("width"),i=e.getAttribute("height");return new Promise(async s=>{try{await e.play();let a=!1;e.addEventListener("timeupdate",o=>{if(!a){a=!0;const l={ele:e,src:t,texture:new vf(e),w:n,h:i,aspect:n/i};return l.texture.outputColorSpace=ct,s(l)}})}catch{return s(null)}})}toLoadCubeMap(e,t,n,i,s,a){return new Promise((o,l)=>{new __().load([DIR_URL+e,DIR_URL+i,DIR_URL+t,DIR_URL+s,DIR_URL+n,DIR_URL+a],o,void 0,l)})}toLoadHDR(e){return this.envTextureLoader.loadAsync(e)}}class nS{constructor(e,t){this.element=e,this.resolution=t,this.isInitialized=!1,this.renderer=null,this.scene=null,this.camera=null,this.cameraRadianAngle=null,this.worldOriginPosition=new N,this.loader=new tS,this.originDepthScale=this.getDepthScaler(0),this.inFrontDepthScale=this.getDepthScaler(1),this.inFrontDepthScale5=this.getDepthScaler(5),this.inBackDepthScale5=this.getDepthScaler(-5),this.inBackDepthScale10=this.getDepthScaler(-10),this.inBackDepthScale20=this.getDepthScaler(-20),this.inBackDepthScale30=this.getDepthScaler(-30)}getDepthScaler(e=0,t=this.resolution.y){const n=t,i=this.camera?this.camera.fov:60,s=this.camera?this.camera.position.z:10,a=n/Math.tan(i*Math.PI/360)*.5;return Math.abs(s-e)/a}disposeGltf(e){e&&e.traverse(t=>{t.geometry&&typeof t.geometry.dispose=="function"&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const i of n){for(const s in i){const a=i[s];a&&a.isTexture&&typeof a.dispose=="function"&&a.dispose()}typeof i.dispose=="function"&&i.dispose()}})}update(e){this.isInitialized}resize(e){this.resolution=e,this.resizeRenderer(),this.resizeCamera(),this.originDepthScale=this.getDepthScaler(0),this.inFrontDepthScale=this.getDepthScaler(1),this.inFrontDepthScale5=this.getDepthScaler(5),this.inBackDepthScale5=this.getDepthScaler(-5),this.inBackDepthScale10=this.getDepthScaler(-10),this.inBackDepthScale20=this.getDepthScaler(-20),this.inBackDepthScale30=this.getDepthScaler(-30)}resizeRenderer(){this.renderer&&(this.renderer.setSize(this.resolution.elex,this.resolution.eley),this.renderer.setPixelRatio(this.resolution.dpr))}setRendererLight(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.type=Vd,this.renderer.outputColorSpace=ct,this.renderer.toneMapping=Wd,this.renderer.toneMappingExposure=1}setRenderer(){this.renderer=new _M({antialias:!0,alpha:!0}),this.renderer.setClearColor(16777215),this.setRendererLight(),this.resizeRenderer(),this.element.appendChild(this.renderer.domElement)}resizeCamera(){this.camera&&(this.camera.aspect=this.resolution.x/this.resolution.y,this.camera.updateProjectionMatrix())}setCamera(){this.camera=new Gt,this.camera.near=1,this.camera.far=100,this.camera.fov=60,this.camera.position.z=10,this.camera.lookAt(this.worldOriginPosition),this.resizeCamera()}setScene(){this.scene=new Xg,this.scene.userData={background:{clear:new we("#000"),default:new we("#000").convertLinearToSRGB()}},this.scene.background=this.scene.userData.background.default;const e=st.set("scene",0);e&&e.addColor(this.scene.userData.background,"default").name("background.default").onChange(t=>{this.scene.userData.background.default=t}).listen()}async load(){this.tWhiteNoise=await this.loader.toLoadAsyncTexture("assets/webgl/texture/tWhiteNoise.webp"),this.tWhiteNoise.wrapS=Ii,this.tWhiteNoise.wrapT=Ii,this.tBlockNoise=await this.loader.toLoadAsyncTexture("assets/webgl/texture/tBlockNoise.webp"),this.tBlockNoise.wrapS=Ws,this.tBlockNoise.wrapT=Ws}init(){return new Promise(e=>{this.setRenderer(),this.setCamera(),this.setScene(),this.isInitialized=!0,e()})}}const Bu=(r=0)=>new Promise(e=>{setTimeout(()=>{e()},r)});var iS="varying vec2 vUv;uniform sampler2D tScene1;uniform sampler2D tScene2;uniform sampler2D tMask;void main(void){vec4 c=vec4(1);vec4 mask=texture2D(tMask,vUv);vec4 cScene1=texture2D(tScene1,vUv);vec4 cScene2=texture2D(tScene2,vUv);c=mix(cScene1,cScene2,mask.r);c.rgb+=mix(vec3(0),vec3(1),mask.b);gl_FragColor=c;}",Wo="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",sS="varying vec2 vUv;uniform sampler2D tVideo;uniform sampler2D tNormal;uniform sampler2D tRoughness;uniform vec2 uResolution;uniform vec2 uVideoSize;uniform vec2 uNormalSize;uniform float uEnableCamera;uniform float uBloom;uniform float uVignette;uniform vec4 uRoughnessData;uniform vec4 uProgress;vec2 optimizationTextureUv(vec2 _uv,float pa,float ta){vec2 ratio=vec2(min(pa/ta,1.0),(min((1.0/pa)/(1.0/ta),1.0)));return vec2(((_uv.x-0.5)*ratio.x+0.5),((_uv.y-0.5)*ratio.y+0.5));}void main(void){vec4 c=vec4(1);float aspect=uResolution.x/uResolution.y;vec2 normalUv=vUv;normalUv=optimizationTextureUv(normalUv,aspect,uNormalSize.x/uNormalSize.y);vec3 cNormal=texture2D(tNormal,vUv).rgb;vec2 roughnessUv=vUv;roughnessUv=mix(roughnessUv,roughnessUv*cNormal.xy,uRoughnessData.y);vec4 cRoughness=texture2D(tRoughness,roughnessUv);cRoughness.rgb=pow(cRoughness.rgb*uRoughnessData.z,vec3(uRoughnessData.x));float vignette=smoothstep(0.75,0.5,distance(vUv,vec2(0.5)));float thresholdUv=0.0;vec2 videoUv=vUv;videoUv.x=mix(videoUv.x,1.0-videoUv.x,uEnableCamera);videoUv=optimizationTextureUv(videoUv,aspect,uVideoSize.x/uVideoSize.y);videoUv=videoUv*cNormal.xy*2.0;vec4 cVideo=texture2D(tVideo,videoUv);c=cVideo;c.rgb=mix(c.rgb,cRoughness.rgb,uRoughnessData.w);c.rgb=mix(c.rgb*vignette*1.0,c.rgb,uVignette);c.rgb=mix(c.rgb,c.rgb*0.,uBloom);gl_FragColor=c;}",rS="varying vec2 vUv;uniform float uHover;void main(){vUv=uv;float s=mix(1.0,2.0,uHover);vec3 p=position*s;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}",aS="varying vec2 vUv;uniform float uEnableCamera;uniform float uHover;uniform float uShow;void main(void){vec4 c=vec4(vUv,1,1);float threshold=smoothstep(mix(-0.5,0.0,uHover),0.7,distance(vUv,vec2(0.5)));c=vec4(mix(0.0,1.0,threshold));c.a*=uEnableCamera;c.a*=uShow;gl_FragColor=c;}",oS="varying vec2 vUv;varying vec3 vNormal;varying vec3 vEyeVector;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);vec4 worldPosition=vec4(position,1.0);vEyeVector=normalize(worldPosition.xyz-cameraPosition);vec4 mvPosition=modelViewMatrix*worldPosition;gl_Position=projectionMatrix*mvPosition;}",lS="varying vec2 vUv;varying vec3 vNormal;varying vec3 vEyeVector;uniform vec3 uColor;void main(){vec4 c=vec4(uColor,1);vec2 uv=vUv;float fresnel=pow(1.0+dot(vEyeVector,vNormal),1.0);c.rgb+=vec3(fresnel);gl_FragColor=c;}",cS="varying vec2 vUv;uniform sampler2D tDiffuse;uniform sampler2D tAscii;uniform float uAspect;uniform float uAsciiColorStep;uniform float uTileSize;uniform float uColorPattern;uniform vec2 uCrtData;vec2 crt(vec2 uv,float power,float zoom){vec2 p=uv*2.0-1.0;float r2=dot(p,p);p*=1.0+power*r2;p/=zoom;return p*0.5+0.5;}void main(){vec4 c=vec4(1);vec2 aspect=vec2(uAspect,1.0);vec2 tile=fract(vUv*aspect*uTileSize);vec2 uv=floor(vUv*aspect*uTileSize)/(uTileSize*aspect);uv=crt(uv,uCrtData.x,uCrtData.y);vec4 cDiffuse=texture2D(tDiffuse,uv);float gray=dot(cDiffuse.rgb,vec3(0.299,0.587,0.114));float shift=floor(gray/uAsciiColorStep)*uAsciiColorStep;shift=1.0-shift;tile.x=tile.x*uAsciiColorStep+shift;float ascii=texture2D(tAscii,tile).r;vec3 asciiColor=vec3(ascii);if(uColorPattern<0.5){c.rgb=asciiColor*cDiffuse.rgb;}else if(uColorPattern<1.5){vec3 green=vec3(1.0,0.0,0.9843);vec3 blue=vec3(0.05,0.28,1.0);vec3 color=mix(blue,green,smoothstep(0.15,0.9,gray));c.rgb=asciiColor*color*(0.55+gray*0.85);}else if(uColorPattern<2.5){vec3 contrast=pow(cDiffuse.rgb,vec3(2.4))*1.65;contrast=smoothstep(vec3(0.08),vec3(0.95),contrast);c.rgb=asciiColor*contrast;}else{c.rgb=mix(vec3(0.02),vec3(0.0,0.698,0.4078),ascii)*(0.4+gray*0.9);}c.a=cDiffuse.a;gl_FragColor=c;}";class hS{constructor(e,t,n){this.stage=e,this.resolution=t,this.audio=n,this.planeGeometry=new Ui(1,1,1,1),this.isInitialized=!1,this.tVideo=null,this.maskRectMesh=null,this.maskFollowMesh=null,this.fingerTipMeshSize=ie.IS_WIDTH?8:14,this.raycaster=new kc,this.raycaster.layers.disable(ie.LAYERS.DEFAULT),this.raycaster.layers.enable(ie.LAYERS.MASK),this.ndc=new Ce,this.handPoints={Left:{index:null,thumb:null},Right:{index:null,thumb:null}}}onEnabledHandMode(e){this.videoMesh&&(e.texture&&(this.videoMesh.material.uniforms.tVideo.value=e.texture),e.width&&(this.videoMesh.material.uniforms.uVideoSize.value.x=e.width),e.height&&(this.videoMesh.material.uniforms.uVideoSize.value.y=e.height),this.videoMesh.material.uniforms.uEnableCamera.value=1);const t=n=>{n.material.uniforms.uEnableCamera.value=1,n.visible=!0};this.lfIndexMesh&&t(this.lfIndexMesh),this.lfThumMesh&&t(this.lfThumMesh),this.rfIndexMesh&&t(this.rfIndexMesh),this.rfThumMesh&&t(this.rfThumMesh)}onDisabledHandMode(){this.videoMesh&&(this.videoMesh.material.uniforms.uEnableCamera.value=0,this.videoMesh.material.uniforms.tVideo.value=this.tDummy,this.videoMesh.material.uniforms.uVideoSize.value.x=1,this.videoMesh.material.uniforms.uVideoSize.value.y=1);const e=t=>{t.material.uniforms.uEnableCamera.value=0,t.visible=!1};this.lfIndexMesh&&e(this.lfIndexMesh),this.lfThumMesh&&e(this.lfThumMesh),this.rfIndexMesh&&e(this.rfIndexMesh),this.rfThumMesh&&e(this.rfThumMesh)}onHandMove(e,t){const n=e,i=(s,a)=>{if(!a)return;const o=this.stage.inFrontDepthScale5,l=a.x-.5,c=1-a.y-.5,h=l*this.resolution.x*o,u=c*this.resolution.y*o;s.position.x=h,s.position.y=u};t==="Left"?(this.lfIndexMesh&&i(this.lfIndexMesh,n.indexUv),this.lfThumMesh&&i(this.lfThumMesh,n.thumbUv),this.handPoints.Left.index=this.uvToScenePosition(n.indexUv,this.stage.inFrontDepthScale5,5),this.handPoints.Left.thumb=this.uvToScenePosition(n.thumbUv,this.stage.inFrontDepthScale5,5)):t==="Right"&&(this.rfIndexMesh&&i(this.rfIndexMesh,n.indexUv),this.rfThumMesh&&i(this.rfThumMesh,n.thumbUv),this.handPoints.Right.index=this.uvToScenePosition(n.indexUv,this.stage.inFrontDepthScale5,5),this.handPoints.Right.thumb=this.uvToScenePosition(n.thumbUv,this.stage.inFrontDepthScale5,5)),this.updateMaskFollowMeshGeometry()}onHandPinchDown(e,t){t==="Right"&&this.maskRectMesh&&(this.maskRectMesh.userData.position.x=this.maskRectMesh.position.x,this.maskRectMesh.userData.position.y=this.maskRectMesh.position.y)}onHandPinchMove(e,t){}onHandPinchUp(e,t,n){if(t==="Left"&&!n){const i=this.asciiMesh?.material?.uniforms?.uColorPattern;i&&(i.value=(i.value+1)%4)}if(t==="Right"&&!n){const i=this.asciiMesh?.material?.uniforms?.uTileSize,s=ie.IS_WIDTH?[32,48,64]:[32,48,64];if(i){const a=s.findIndex(l=>l===i.value),o=a<0?0:(a+1)%s.length;i.value=s[o]}}}onHandRayClick(e,t){if(!e)return!1;const n=e.thumbUv;if(!n)return!1;const i=n.x*2-1,s=-(n.y*2-1);this.ndc.set(i,s),this.raycaster.setFromCamera(this.ndc,this.stage.camera)}onRightHandDetected(e,t){this.rfIndexMesh&&(this.rfIndexMesh.material.uniforms.uShow.value=1),this.rfThumMesh&&(this.rfThumMesh.material.uniforms.uShow.value=1)}onLeftHandDetected(e,t){this.lfIndexMesh&&(this.lfIndexMesh.material.uniforms.uShow.value=1),this.lfThumMesh&&(this.lfThumMesh.material.uniforms.uShow.value=1)}onRightHandLost(e){this.rfIndexMesh&&(this.rfIndexMesh.material.uniforms.uShow.value=0),this.rfThumMesh&&(this.rfThumMesh.material.uniforms.uShow.value=0),this.handPoints.Right.index=null,this.handPoints.Right.thumb=null,this.updateMaskFollowMeshGeometry()}onLeftHandLost(e){this.lfIndexMesh&&(this.lfIndexMesh.material.uniforms.uShow.value=0),this.lfThumMesh&&(this.lfThumMesh.material.uniforms.uShow.value=0),this.handPoints.Left.index=null,this.handPoints.Left.thumb=null,this.updateMaskFollowMeshGeometry()}onTwoHandPinchStart(e){this.maskRectMesh&&(this.maskRectMesh.userData.scale.x=this.maskRectMesh.scale.x,this.maskRectMesh.userData.scale.y=this.maskRectMesh.scale.y,this.maskRectMesh.userData.scale.z=this.maskRectMesh.scale.z,this.maskRectMesh.scale.x<1e-4&&(this.maskRectMesh.position.y=0,this.quadMesh&&(this.quadMesh.material.uniforms.uMouse.value.y=0)),this.maskRectMesh.scale.y<1e-4&&(this.maskRectMesh.position.x=0,this.quadMesh&&(this.quadMesh.material.uniforms.uMouse.value.x=0)))}onTwoHandPinchMove(e){if(this.maskRectMesh){const t=this.stage.originDepthScale,n=this.resolution.x*t*.5,i=this.resolution.y*t*.5,s=n*.9,a=i*.9;let o=this.maskRectMesh.userData.scale.x*e.ratioX+(e.ratioX-1);o=Aa.clamp(o,0,s);let l=this.maskRectMesh.userData.scale.y*e.ratioY+(e.ratioY-1);l=Aa.clamp(l,0,a);let c=this.maskRectMesh.userData.scale.z+(e.ratio-1);c=Aa.clamp(c,0,10),this.maskRectMesh.scale.x=o,this.maskRectMesh.scale.y=l,this.maskRectMesh.scale.z=c}}onTwoHandPinchEnd(e){this.maskRectMesh&&(this.maskRectMesh.userData.scale.x=this.maskRectMesh.scale.x,this.maskRectMesh.userData.scale.y=this.maskRectMesh.scale.y,this.maskRectMesh.userData.scale.z=this.maskRectMesh.scale.z,this.maskRectMesh.scale.x<1e-4&&(this.maskRectMesh.position.y=0,this.quadMesh&&(this.quadMesh.material.uniforms.uMouse.value.y=0)),this.maskRectMesh.scale.y<1e-4&&(this.maskRectMesh.position.x=0,this.quadMesh&&(this.quadMesh.material.uniforms.uMouse.value.x=0)))}uvToScenePosition(e,t=this.stage.originDepthScale,n=0){if(!e)return null;const i=e.x-.5,s=1-e.y-.5;return{x:i*this.resolution.x*t,y:s*this.resolution.y*t,z:n}}updateMaskFollowMeshGeometry(){if(!this.maskFollowMesh)return;const e=this.handPoints.Left.index,t=this.handPoints.Left.thumb,n=this.handPoints.Right.thumb,i=this.handPoints.Right.index;if(!e||!t||!n||!i){this.maskFollowMesh.visible=!1;return}this.maskFollowMesh.visible=!0;const s=this.maskFollowMesh.geometry.attributes.position.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=t.y,s[5]=t.z,s[6]=n.x,s[7]=n.y,s[8]=n.z,s[9]=i.x,s[10]=i.y,s[11]=i.z,this.maskFollowMesh.geometry.attributes.position.needsUpdate=!0,this.maskFollowMesh.geometry.computeVertexNormals(),this.maskFollowMesh.geometry.computeBoundingSphere()}attachVideoTexture(e){}attachFluidTexture(e){}resize(e){if(this.resolution=e,this.videoMesh){this.videoMesh?.material?.uniforms?.uResolution&&(this.videoMesh.material.uniforms.uResolution.value.x=this.resolution.x,this.videoMesh.material.uniforms.uResolution.value.y=this.resolution.y);const n=this.stage.inBackDepthScale30;this.videoMesh.ds=n;const i=this.resolution.x*n,s=this.resolution.y*n;this.videoMesh.scale.set(i,s,1)}if(this.asciiMesh){this.asciiMesh?.material?.uniforms?.uAspect&&(this.asciiMesh.material.uniforms.uAspect.value=this.resolution.aspect);const n=this.stage.originDepthScale,i=this.resolution.x*n,s=this.resolution.y*n;this.asciiMesh.scale.set(i,s,1)}if(this.compositeMesh){const n=this.stage.inBackDepthScale30;this.compositeMesh.ds=n;const i=this.resolution.x*n,s=this.resolution.y*n;this.compositeMesh.scale.set(i,s,1)}const t=n=>{const i=this.stage.inFrontDepthScale5,s=this.fingerTipMeshSize*this.resolution.dpr,a=s*i,o=s*i;n.scale.set(a,o,1)};this.lfIndexMesh&&t(this.lfIndexMesh),this.lfThumMesh&&t(this.lfThumMesh),this.rfIndexMesh&&t(this.rfIndexMesh),this.rfThumMesh&&t(this.rfThumMesh)}resizeAfter(){}updateBeforeBloom(e){this.isInitialized&&this.videoMesh&&(this.videoMesh.material.uniforms.uBloom.value=1)}updateAfterBloom(e){this.isInitialized&&this.videoMesh&&(this.videoMesh.material.uniforms.uBloom.value=0)}update(e){this.isInitialized}async load(){this.tDummy=await this.stage.loader.toLoadAsyncTexture("assets/webgl/texture/tDummy.webp"),this.tNormal=await this.stage.loader.toLoadAsyncTexture("assets/webgl/texture/Metal008_1K-JPG_NormalGL.jpg"),this.tRoughness=await this.stage.loader.toLoadAsyncTexture("assets/webgl/texture/tMetalRoughness.webp"),this.tAscii=await this.stage.loader.toLoadAsyncTexture("assets/webgl/texture/test.jpg"),this.tAscii.minFilter=ht,this.tAscii.magFilter=ht,this.tAscii.generateMipmaps=!1,this.previewGeometry=null,this.previewPlaneData=await this.stage.loader.toLoadAsyncDraco("assets/webgl/glb/previewPlane.glb"),this.previewPlaneData.scene.traverse(e=>{e.name==="PreviewPlane"&&(this.previewGeometry=e.geometry.clone())}),this.stage.disposeGltf(this.previewPlaneData.scene)}async init(){{const e=new Wt({vertexShader:Wo,fragmentShader:sS,uniforms:{uResolution:{value:new Ce(this.resolution.x,this.resolution.y)},tVideo:{value:this.tDummy},uVideoSize:{value:new Ce(1,1)},tNormal:{value:this.tNormal},uNormalSize:{value:new Ce(1,1)},tRoughness:{value:this.tRoughness},uRoughnessData:{value:new je(10,.5,2,.2)},uEnableCamera:{value:0},uBloom:{value:0},uVignette:{value:0},uProgress:{value:new je(0,0,0,0)}},transparent:!0,side:Mn});this.videoMesh=new dt(this.planeGeometry,e),this.videoMesh.layers.disable(ie.LAYERS.DEFAULT),this.videoMesh.layers.enable(ie.LAYERS.SCENE1),this.videoMesh.position.z=-30,this.stage.scene.add(this.videoMesh);{const t=st.set("videoMesh",1);t&&(st.add(t,e.uniforms.uProgress.value,"x",0,1,.1,"prog.x"),st.add(t,e.uniforms.uProgress.value,"y",0,1,.1,"prog.y"),st.add(t,e.uniforms.uProgress.value,"z",0,1,.1,"prog.z"),st.add(t,e.uniforms.uProgress.value,"w",0,1,.1,"prog.w"),st.add(t,e.uniforms.uVignette,"value",0,1,.1,"vignette"),st.add(t,e.uniforms.uRoughnessData.value,"x",0,1,.1,"roughness: pow"),st.add(t,e.uniforms.uRoughnessData.value,"y",0,1,.1,"roughness: "),st.add(t,e.uniforms.uRoughnessData.value,"z",0,1,.1,"roughness: "),st.add(t,e.uniforms.uRoughnessData.value,"w",0,1,.1,"roughness: "))}}{const e=new Ui(1,1),t=new Wt({vertexShader:Wo,fragmentShader:cS,uniforms:{tDiffuse:{value:null},tAscii:{value:this.tAscii},uAspect:{value:this.resolution.aspect},uAsciiColorStep:{value:this.tAscii.source.data.height/this.tAscii.source.data.width},uTileSize:{value:ie.IS_WIDTH?32:32+16},uColorPattern:{value:0},uCrtData:{value:new Ce(.15,1.05)}}});this.asciiMesh=new dt(e,t),this.asciiMesh.layers.disable(ie.LAYERS.DEFAULT),this.asciiMesh.layers.enable(ie.LAYERS.BLOOM),this.asciiMesh.layers.enable(ie.LAYERS.SCENE2),this.stage.scene.add(this.asciiMesh);{const n=st.set("asciiMesh",0);n&&(st.add(n,t.uniforms.uTileSize,"value",10,120,1,"tile size"),st.add(n,t.uniforms.uColorPattern,"value",0,3,1,"color pattern"),st.add(n,t.uniforms.uCrtData.value,"x",0,1,.01,"lens: power"),st.add(n,t.uniforms.uCrtData.value,"y",0,2,.01,"lens: zoom"))}}{const e=this.previewGeometry.clone(),t=new Wt({vertexShader:oS,fragmentShader:lS,uniforms:{uColor:{value:new we("#ff0000")}},side:gn,transparent:!0});this.maskRectMesh=new dt(e,t),this.maskRectMesh.position.z=0,this.maskRectMesh.userData={scale:new N(0,0,0),position:new N(0,0,0)}}{const e=new ln,t=new Float32Array([0,0,0,0,0,0,0,0,0,0,0,0]),n=new Float32Array([0,1,0,0,1,0,1,1]),i=[0,1,2,0,2,3];e.setAttribute("position",new wt(t,3)),e.setAttribute("uv",new wt(n,2)),e.setIndex(i),e.computeVertexNormals();const s=new Hn({color:16711680,side:gn});this.maskFollowMesh=new dt(e,s),this.maskFollowMesh.visible=!1,this.maskFollowMesh.layers.disable(ie.LAYERS.DEFAULT),this.maskFollowMesh.layers.enable(ie.LAYERS.MASK),this.stage.scene.add(this.maskFollowMesh)}{const e=new Wt({vertexShader:Wo,fragmentShader:iS,uniforms:{tScene1:{value:null},tScene2:{value:null},tMask:{value:null}},transparent:!0,side:Mn});this.compositeMesh=new dt(this.planeGeometry,e),this.compositeMesh.layers.enable(ie.LAYERS.BLOOM),this.compositeMesh.position.z=-30,this.stage.scene.add(this.compositeMesh)}{const e=new Lc(1,24,24),t=new Wt({vertexShader:rS,fragmentShader:aS,uniforms:{uEnableCamera:{value:0},uHover:{value:0},uShow:{value:0}},transparent:!0,side:Mn});this.rfIndexMesh=new dt(e,t.clone()),this.rfThumMesh=new dt(e,t.clone()),this.lfIndexMesh=new dt(e,t.clone()),this.lfThumMesh=new dt(e,t.clone()),this.rfIndexMesh.position.z=5,this.rfThumMesh.position.z=5,this.lfIndexMesh.position.z=5,this.lfThumMesh.position.z=5,this.stage.scene.add(this.rfIndexMesh,this.rfThumMesh,this.lfIndexMesh,this.lfThumMesh)}this.isInitialized=!0}}class uS{constructor(e,t,n=window){this.stage=e,this.pointerElement=n,this.isInitialized=!1,this.resolution=t,this.pointer={isAbleToDown:!1,isDown:!1,isMoved:!1,delta:{x:0,y:0},textureCood:{x:0,y:0},prevTextureCood:{x:0,y:0}},ie.IS_HOVER?(this.pointer.isDown=!0,this.pointerElement.addEventListener("mousemove",this.move.bind(this)),this.pointer.isAbleToDown?(this.pointer.isDown=!1,this.pointerElement.addEventListener("mousedown",this.down.bind(this)),this.pointerElement.addEventListener("mouseup",this.up.bind(this))):(this.pointerElement.addEventListener("mouseenter",this.down.bind(this),{passive:!0}),this.pointerElement.addEventListener("mouseleave",this.up.bind(this),{passive:!0}))):(this.pointer.isDown=!1,this.pointerElement.addEventListener("touchstart",this.down.bind(this)),this.pointerElement.addEventListener("touchmove",this.move.bind(this)),this.pointerElement.addEventListener("touchend",this.up.bind(this))),this.fbos={swap1:this.getRenderTarget(this.resolution.x,this.resolution.y),swap2:this.getRenderTarget(this.resolution.x,this.resolution.y)},this.buffers={write:this.fbos.swap1,read:this.fbos.swap2}}getCorrectDeltaX(e){return this.resolution.aspect<1&&(e*=this.resolution.aspect),e}getCorrectDeltaY(e){return this.resolution.aspect>1&&(e/=this.resolution.aspect),e}getCorrectRadius(e){return this.resolution.aspect>1&&(e*=this.resolution.aspect),e}getRenderTarget(e=this.resolution.x,t=this.resolution.y,n={type:Dn}){return new ui(e,t,n)}down(e){let t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY;t=t*this.resolution.dpr,n=n*this.resolution.dpr,this.pointer.isDown=!0,this.pointer.isMoved=!1,this.pointer.textureCood.x=t/this.resolution.x,this.pointer.textureCood.y=1-n/this.resolution.y,this.pointer.prevTextureCood.x=this.pointer.textureCood.x,this.pointer.prevTextureCood.y=this.pointer.textureCood.y,this.pointer.delta.x=0,this.pointer.delta.y=0}move(e){if(!this.pointer.isDown)return;let t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY;t=t*this.resolution.dpr,n=n*this.resolution.dpr,this.pointer.prevTextureCood.x=this.pointer.textureCood.x,this.pointer.prevTextureCood.y=this.pointer.textureCood.y,this.pointer.textureCood.x=t/this.resolution.x,this.pointer.textureCood.y=1-n/this.resolution.y,this.pointer.delta.x=this.getCorrectDeltaX(this.pointer.textureCood.x-this.pointer.prevTextureCood.x),this.pointer.delta.y=this.getCorrectDeltaY(this.pointer.textureCood.y-this.pointer.prevTextureCood.y),this.pointer.isMoved=Math.abs(this.pointer.delta.x)>0||Math.abs(this.pointer.delta.y)>0}up(){this.pointer.isDown=!1,ie.IS_HOVER||(this.pointer.prevTextureCood.x=this.pointer.textureCood.x,this.pointer.prevTextureCood.y=this.pointer.textureCood.y,this.pointer.delta.x=this.getCorrectDeltaX(this.pointer.textureCood.x-this.pointer.prevTextureCood.x),this.pointer.delta.y=this.getCorrectDeltaY(this.pointer.textureCood.y-this.pointer.prevTextureCood.y))}resize(e){this.resolution=e,this.fbos.swap1.setSize(this.resolution.x,this.resolution.y),this.fbos.swap2.setSize(this.resolution.x,this.resolution.y)}init(){if(this.mesh=new dt(new Ui(2,2,1,1),new Hn({})),ie.LAYERS){for(const e in ie.LAYERS)if(Object.prototype.hasOwnProperty.call(ie.LAYERS,e)){const t=ie.LAYERS[e];this.mesh.layers.enable(t)}}}}var dS="attribute vec3 position;attribute vec2 uv;varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.0);}";class nr{constructor(e,t,n,i=null){this.stage=e,this.material=new n_({vertexShader:dS,fragmentShader:t,defines:i,uniforms:n,transparent:!0})}update(e,t,n=!1,i=this.stage.camera){this.stage.renderer.setRenderTarget(t),this.stage.renderer.clear(),n&&this.stage.renderer.setRenderTarget(null),this.stage.renderer.render(e,i),this.stage.renderer.setRenderTarget(null)}}var fS="precision highp float;varying vec2 vUv;uniform sampler2D tInput;uniform sampler2D tFluid;uniform sampler2D tBloom;uniform sampler2D tMask;uniform sampler2D tBlockNoise;uniform float uTime;uniform float uBloomThreshold;uniform vec2 uResolution;uniform float uThreshold;uniform float uRadius;uniform float uSoftness;uniform float uIntensity;uniform float uProgress;float radialMask(vec2 uv,vec2 c){vec2 aspect=vec2(uResolution.x/uResolution.y,1.0);vec2 p=(uv-c)*aspect;float d=length(p);float r=uRadius;float softness=uSoftness;return smoothstep(r,r+max(1e-6,softness),d);}vec4 getChromaticAberration(sampler2D tex,vec2 uv){vec2 center=vec2(0.5);float threshold=uThreshold;float intensity=uIntensity;float m=radialMask(uv,center);float gate=smoothstep(threshold,1.0,m);vec2 dir=normalize(uv-center+1e-6);float amt=intensity*gate;vec2 ofs=dir*(amt/uResolution);float r=texture2D(tex,uv+ofs).r;float g=texture2D(tex,uv).g;float b=texture2D(tex,uv-ofs).b;vec3 ca=vec3(r,g,b);vec4 src=texture2D(tex,uv);return vec4(mix(src.rgb,ca,gate),src.a);}float randomHash(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}float anime(float f){float speed=5.;return sin(f*10.+uTime*speed)*.5;}float noise(vec2 uv){float o=anime(randomHash(uv));return o;}void main(){vec4 c=vec4(1);float progress=uProgress;float wn=noise(vUv*1.0);vec4 fluid=texture2D(tFluid,vUv);vec4 color=getChromaticAberration(tInput,vUv);vec4 bloom=texture2D(tBloom,vUv);vec4 mask=texture2D(tMask,vUv);c=color;c.rgb+=mix(vec3(0),bloom.rgb,mask.r)*uBloomThreshold;c.rgb+=mix(vec3(0),vec3(1),mask.b);c-=wn*0.05;gl_FragColor=c;}";class pS extends nr{constructor(e){super(e,fS,{tInput:{value:null},tBloom:{value:null},tMask:{value:null},tFluid:{value:null},tBlockNoise:{value:null},uResolution:{value:new Ce},uThreshold:{value:0},uRadius:{value:0},uSoftness:{value:.9},uIntensity:{value:8},uBloomThreshold:{value:1},uTime:{value:0},uProgress:{value:0}});const t=st.set("output",1);t&&(this.material.uniforms.uThreshold&&st.add(t,this.material.uniforms.uThreshold,"value",0,1,.1,"uThreshold"),this.material.uniforms.uRadius&&st.add(t,this.material.uniforms.uRadius,"value",0,2,.1,"uRadius"),this.material.uniforms.uSoftness&&st.add(t,this.material.uniforms.uSoftness,"value",0,1,.1,"uSoftness"),this.material.uniforms.uIntensity&&st.add(t,this.material.uniforms.uIntensity,"value",0,10,.1,"uIntensity"))}}class zc{constructor(e,t){this.stage=e,this.resolution=t,this.texture=null,this.name=""}getRenderTarget(e,t,n=Dn){return new ui(e,t,{type:n})}}var mS="precision highp float;varying vec2 vUv;uniform sampler2D tDiffuse;uniform float uThreshold;uniform float uSmooth;const vec3 LUMINANCE=vec3(0.299,0.587,0.114);void main(void){vec4 color=texture2D(tDiffuse,vUv);float threshold=smoothstep(uThreshold,uThreshold+uSmooth,dot(color.rgb,LUMINANCE));gl_FragColor=vec4(mix(vec3(0.0),color.rgb,threshold),color.a);}",gS="precision highp float;varying vec2 vUv;uniform sampler2D tDiffuse;uniform vec2 uPixelSize;uniform vec2 uDirection;uniform float uWeights[GAUSS_RADIUS];void main(void){float sumWeight=uWeights[0];vec3 sumColor=texture2D(tDiffuse,vUv).rgb*sumWeight;for(int i=0;i<GAUSS_RADIUS;i++){vec2 offsetUv=vec2(i)*uDirection*uPixelSize;sumColor+=texture2D(tDiffuse,vUv+offsetUv).rgb*uWeights[i];sumColor+=texture2D(tDiffuse,vUv-offsetUv).rgb*uWeights[i];sumWeight+=2.0*uWeights[i];}gl_FragColor=vec4(sumColor/sumWeight,1.0);}",_S="precision highp float;varying vec2 vUv;uniform sampler2D tDiffuse1;uniform sampler2D tDiffuse2;uniform sampler2D tDiffuse3;uniform sampler2D tDiffuse4;uniform sampler2D tDiffuse5;uniform float uBloomStrength;uniform float uBloomRadius;uniform vec3 uBloomColor;void main(){vec4 bloomColor=vec4(uBloomColor,1.0);vec4 c1=1.0*uBloomRadius*bloomColor*texture2D(tDiffuse1,vUv);vec4 c2=0.8*uBloomRadius*bloomColor*texture2D(tDiffuse2,vUv);vec4 c3=0.6*uBloomRadius*bloomColor*texture2D(tDiffuse3,vUv);vec4 c4=0.4*uBloomRadius*bloomColor*texture2D(tDiffuse4,vUv);vec4 c5=0.2*uBloomRadius*bloomColor*texture2D(tDiffuse5,vUv);vec4 color=uBloomStrength*(c1+c2+c3+c4+c5);color.rgb=clamp(color.rgb,vec3(0.0),vec3(1.0));gl_FragColor=vec4(color.rgb,1.0);}",vS="precision highp float;varying vec2 vUv;uniform sampler2D tDiffuseOrigin;uniform sampler2D tDiffuseBloom;uniform float uToneScale;uniform float uTime;void main(){vec4 t=texture2D(tDiffuseOrigin,vUv)*uToneScale;t+=texture2D(tDiffuseBloom,vUv);gl_FragColor=vec4(t.rgb,t.a);}";class xS extends nr{constructor(e){super(e,mS,{tDiffuse:{value:null},uThreshold:{value:0},uSmooth:{value:0}})}}class yS extends nr{constructor(e){super(e,gS,{tDiffuse:{value:null},uPixelSize:{value:new Ce},uDirection:{value:new Ce},uWeights:{value:null}},{GAUSS_RADIUS:0})}}class MS extends nr{constructor(e){super(e,_S,{tDiffuse1:{value:null},tDiffuse2:{value:null},tDiffuse3:{value:null},tDiffuse4:{value:null},tDiffuse5:{value:null},uBloomStrength:{value:0},uBloomRadius:{value:2.5},uBloomColor:{value:new we(16777215)}})}}class SS extends nr{constructor(e){super(e,vS,{tDiffuseOrigin:{value:null},tDiffuseBloom:{value:null},uToneScale:{value:0},uTime:{value:0},blending:al,transparent:!0})}}class TS extends zc{constructor(e,t){super(e,t),this.name="Bloom",this.CONFIG={BLUR_AMOUNT:5,KERNEL:[3,5,7,9,11],BLOOM_THRESHOLD:0,BLOOM_BRIGHT_SMOOTH:.1,BLOOM_GAUSS_STRENGTH:100,BLOOM_RADIUS:5,BLOOM_STRENGTH:.5,BLOOM_COLOR:new we("#fff").convertLinearToSRGB(),BLOOM_TONE_SCALE:1}}calcGaussWeight(e){let t=0;const n=[];for(let i=0;i<e;i++){const s=1+2*i;let a=Math.exp(-.5*(s*s)/this.CONFIG.BLOOM_GAUSS_STRENGTH);n.push(a),i>0&&(a*=2),t+=a}for(let i=0;i<n.length;i++)n[i]/=t;return n}resize(e){this.resolution=e;const t=this.resolution.x,n=this.resolution.y;this.fbos.bloom.setSize(t,n);{let i=this.resolution.minx,s=this.resolution.miny;for(let a=0;a<this.CONFIG.BLUR_AMOUNT;a++)this.fbos.horizontals.width=i,this.fbos.horizontals.height=s,this.fbos.verticals.width=i,this.fbos.verticals.height=s,i=Math.round(i*.5),s=Math.round(s*.5)}}update(e,t,n,i=this.stage.camera){let s=null;t.material=this.bloomBrightPass.material,t.material.uniforms.tDiffuse.value=n,this.bloomBrightPass.update(t,this.fbos.bloom,!1,i),s=this.fbos.bloom.texture;for(let a=0;a<this.CONFIG.BLUR_AMOUNT;a++){const o=this.bloomBlurPass[a];t.material=o.material,t.material.uniforms.tDiffuse.value=s,t.material.uniforms.uDirection.value.x=1,t.material.uniforms.uDirection.value.y=0,o.update(t,this.fbos.horizontals[a],!1,i),t.material.uniforms.tDiffuse.value=this.fbos.horizontals[a].texture,t.material.uniforms.uDirection.value.x=0,t.material.uniforms.uDirection.value.y=1,o.update(t,this.fbos.verticals[a],!1,i),s=this.fbos.verticals[a].texture}t.material=this.bloomCompositePass.material,t.material.uniforms.tDiffuse1.value=this.fbos.verticals[0].texture,t.material.uniforms.tDiffuse2.value=this.fbos.verticals[1].texture,t.material.uniforms.tDiffuse3.value=this.fbos.verticals[2].texture,t.material.uniforms.tDiffuse4.value=this.fbos.verticals[3].texture,t.material.uniforms.tDiffuse5.value=this.fbos.verticals[4].texture,this.bloomCompositePass.update(t,this.fbos.bloom,!1,i),s=this.fbos.bloom.texture,this.texture=s}init(){this.fbos={bloom:this.getRenderTarget(this.resolution.x,this.resolution.y),horizontals:[],verticals:[]};{let t=this.resolution.minx,n=this.resolution.miny;for(let i=0;i<this.CONFIG.BLUR_AMOUNT;i++){const s=this.getRenderTarget(t,n);s.texture.generateMipmaps=!1,this.fbos.horizontals.push(s);const a=this.getRenderTarget(t,n);a.texture.generateMipmaps=!1,this.fbos.verticals.push(a),t=Math.round(t*.5),n=Math.round(n*.5)}}{this.bloomBrightPass=new xS(this.stage),this.bloomBrightPass.material.uniforms.uThreshold.value=this.CONFIG.BLOOM_THRESHOLD,this.bloomBrightPass.material.uniforms.uSmooth.value=this.CONFIG.BLOOM_BRIGHT_SMOOTH,this.bloomBlurPass=[];for(let t=0;t<this.CONFIG.BLUR_AMOUNT;t++){const n=new yS(this.stage);n.material.uniforms.uPixelSize.value.x=1/this.resolution.minx,n.material.uniforms.uPixelSize.value.y=1/this.resolution.miny,n.material.defines={GAUSS_RADIUS:this.CONFIG.KERNEL[t]},n.material.uniforms.uWeights.value=this.calcGaussWeight(this.CONFIG.KERNEL[t]),this.bloomBlurPass.push(n)}this.bloomCompositePass=new MS(this.stage),this.bloomCompositePass.material.uniforms.uBloomStrength.value=this.CONFIG.BLOOM_STRENGTH,this.bloomCompositePass.material.uniforms.uBloomRadius.value=this.CONFIG.BLOOM_RADIUS,this.bloomCompositePass.material.uniforms.uBloomColor.value.r=this.CONFIG.BLOOM_COLOR.r,this.bloomCompositePass.material.uniforms.uBloomColor.value.g=this.CONFIG.BLOOM_COLOR.g,this.bloomCompositePass.material.uniforms.uBloomColor.value.b=this.CONFIG.BLOOM_COLOR.b,this.bloomBlendPass=new SS(this.stage),this.bloomBlendPass.material.uniforms.uToneScale.value=this.CONFIG.BLOOM_TONE_SCALE}const e=st.set(this.name,0);e&&(st.add(e,this.bloomBrightPass.material.uniforms.uThreshold,"value",0,1,.1,"bright threshold"),st.add(e,this.bloomBrightPass.material.uniforms.uSmooth,"value",0,1,.1,"bright smooth"),e.add(this.CONFIG,"BLOOM_GAUSS_STRENGTH",1,100,1).name("gauss strength").onChange(t=>{this.CONFIG.BLOOM_GAUSS_STRENGTH=t;for(let n=0;n<this.CONFIG.BLUR_AMOUNT;n++){const i=this.bloomBlurPass[n];i.material.uniforms.uWeights.value=this.calcGaussWeight(this.CONFIG.KERNEL[n])}}).listen(),st.add(e,this.bloomCompositePass.material.uniforms.uBloomRadius,"value",0,10,.1,"bloom radius"),st.add(e,this.bloomCompositePass.material.uniforms.uBloomStrength,"value",0,10,.1,"bloom strength"),st.color(e,this.bloomCompositePass.material.uniforms.uBloomColor,"value","bloom color"))}}var ES="precision highp float;varying vec2 vUv;uniform float uDamping;uniform float uTime;uniform sampler2D tOld;uniform sampler2D tNew;void main(){vec4 old=texture2D(tOld,vUv);vec4 new=texture2D(tNew,vUv);old*=uDamping*step(0.0,old-0.1);gl_FragColor=max(new,old);}";class bS extends nr{constructor(e){super(e,ES,{uDamping:{value:.7},uTime:{value:0},tOld:{value:null},tNew:{value:null}})}}class wS extends zc{constructor(e,t){super(e,t),this.name="MotionBlur"}resize(e){this.resolution=e;const t=this.resolution.x,n=this.resolution.y;this.fbo.setSize(t,n),this.fbo2.setSize(t,n)}update(e,t,n,i=!1,s=this.stage.camera){t.material=this.motionBlurPass.material,t.material.uniforms.tOld.value=this.fbo2.texture,t.material.uniforms.tNew.value=n,t.material.uniforms.uTime.value=e.delta,this.motionBlurPass.update(t,this.fbo,i,s),this.texture=this.fbo.texture;const a=this.fbo2;this.fbo2=this.fbo,this.fbo=a}init(){this.fbo=this.getRenderTarget(this.resolution.x,this.resolution.y),this.fbo2=this.getRenderTarget(this.resolution.x,this.resolution.y),this.motionBlurPass=new bS(this.stage)}}class AS{constructor(e,t,n,i=null){this.stage=e,this.material=new Wt({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }",fragmentShader:t,defines:i,uniforms:n,transparent:!0})}update(e,t,n=!1,i=this.stage.camera){this.stage.renderer.setRenderTarget(t),this.stage.renderer.clear(),n&&this.stage.renderer.setRenderTarget(null),this.stage.renderer.render(e,i),this.stage.renderer.setRenderTarget(null)}}var RS=`uniform sampler2D tDiffuse;uniform vec2 resolution;varying vec2 vUv;
#define EDGE_STEP_COUNT 6
#define EDGE_GUESS 8.0
#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
const float edgeSteps[EDGE_STEP_COUNT]=float[EDGE_STEP_COUNT](EDGE_STEPS);float _ContrastThreshold=0.0312;float _RelativeThreshold=0.063;float _SubpixelBlending=1.0;vec4 Sample(sampler2D tex2D,vec2 uv){return texture(tex2D,uv);}float SampleLuminance(sampler2D tex2D,vec2 uv){return dot(Sample(tex2D,uv).rgb,vec3(0.3,0.59,0.11));}float SampleLuminance(sampler2D tex2D,vec2 texSize,vec2 uv,float uOffset,float vOffset){uv+=texSize*vec2(uOffset,vOffset);return SampleLuminance(tex2D,uv);}struct LuminanceData{float m,n,e,s,w;float ne,nw,se,sw;float highest,lowest,contrast;};LuminanceData SampleLuminanceNeighborhood(sampler2D tex2D,vec2 texSize,vec2 uv){LuminanceData l;l.m=SampleLuminance(tex2D,uv);l.n=SampleLuminance(tex2D,texSize,uv,0.0,1.0);l.e=SampleLuminance(tex2D,texSize,uv,1.0,0.0);l.s=SampleLuminance(tex2D,texSize,uv,0.0,-1.0);l.w=SampleLuminance(tex2D,texSize,uv,-1.0,0.0);l.ne=SampleLuminance(tex2D,texSize,uv,1.0,1.0);l.nw=SampleLuminance(tex2D,texSize,uv,-1.0,1.0);l.se=SampleLuminance(tex2D,texSize,uv,1.0,-1.0);l.sw=SampleLuminance(tex2D,texSize,uv,-1.0,-1.0);l.highest=max(max(max(max(l.n,l.e),l.s),l.w),l.m);l.lowest=min(min(min(min(l.n,l.e),l.s),l.w),l.m);l.contrast=l.highest-l.lowest;return l;}bool ShouldSkipPixel(LuminanceData l){float threshold=max(_ContrastThreshold,_RelativeThreshold*l.highest);return l.contrast<threshold;}float DeterminePixelBlendFactor(LuminanceData l){float f=2.0*(l.n+l.e+l.s+l.w);f+=l.ne+l.nw+l.se+l.sw;f*=1.0/12.0;f=abs(f-l.m);f=clamp(f/l.contrast,0.0,1.0);float blendFactor=smoothstep(0.0,1.0,f);return blendFactor*blendFactor*_SubpixelBlending;}struct EdgeData{bool isHorizontal;float pixelStep;float oppositeLuminance,gradient;};EdgeData DetermineEdge(vec2 texSize,LuminanceData l){EdgeData e;float horizontal=abs(l.n+l.s-2.0*l.m)*2.0+abs(l.ne+l.se-2.0*l.e)+abs(l.nw+l.sw-2.0*l.w);float vertical=abs(l.e+l.w-2.0*l.m)*2.0+abs(l.ne+l.nw-2.0*l.n)+abs(l.se+l.sw-2.0*l.s);e.isHorizontal=horizontal>=vertical;float pLuminance=e.isHorizontal ? l.n : l.e;float nLuminance=e.isHorizontal ? l.s : l.w;float pGradient=abs(pLuminance-l.m);float nGradient=abs(nLuminance-l.m);e.pixelStep=e.isHorizontal ? texSize.y : texSize.x;if(pGradient<nGradient){e.pixelStep=-e.pixelStep;e.oppositeLuminance=nLuminance;e.gradient=nGradient;}else{e.oppositeLuminance=pLuminance;e.gradient=pGradient;}return e;}float DetermineEdgeBlendFactor(sampler2D tex2D,vec2 texSize,LuminanceData l,EdgeData e,vec2 uv){vec2 uvEdge=uv;vec2 edgeStep;if(e.isHorizontal){uvEdge.y+=e.pixelStep*0.5;edgeStep=vec2(texSize.x,0.0);}else{uvEdge.x+=e.pixelStep*0.5;edgeStep=vec2(0.0,texSize.y);}float edgeLuminance=(l.m+e.oppositeLuminance)*0.5;float gradientThreshold=e.gradient*0.25;vec2 puv=uvEdge+edgeStep*edgeSteps[0];float pLuminanceDelta=SampleLuminance(tex2D,puv)-edgeLuminance;bool pAtEnd=abs(pLuminanceDelta)>=gradientThreshold;for(int i=1;i<EDGE_STEP_COUNT&&!pAtEnd;i++){puv+=edgeStep*edgeSteps[i];pLuminanceDelta=SampleLuminance(tex2D,puv)-edgeLuminance;pAtEnd=abs(pLuminanceDelta)>=gradientThreshold;}if(!pAtEnd){puv+=edgeStep*EDGE_GUESS;}vec2 nuv=uvEdge-edgeStep*edgeSteps[0];float nLuminanceDelta=SampleLuminance(tex2D,nuv)-edgeLuminance;bool nAtEnd=abs(nLuminanceDelta)>=gradientThreshold;for(int i=1;i<EDGE_STEP_COUNT&&!nAtEnd;i++){nuv-=edgeStep*edgeSteps[i];nLuminanceDelta=SampleLuminance(tex2D,nuv)-edgeLuminance;nAtEnd=abs(nLuminanceDelta)>=gradientThreshold;}if(!nAtEnd){nuv-=edgeStep*EDGE_GUESS;}float pDistance,nDistance;if(e.isHorizontal){pDistance=puv.x-uv.x;nDistance=uv.x-nuv.x;}else{pDistance=puv.y-uv.y;nDistance=uv.y-nuv.y;}float shortestDistance;bool deltaSign;if(pDistance<=nDistance){shortestDistance=pDistance;deltaSign=pLuminanceDelta>=0.0;}else{shortestDistance=nDistance;deltaSign=nLuminanceDelta>=0.0;}if(deltaSign==(l.m-edgeLuminance>=0.0)){return 0.0;}return 0.5-shortestDistance/(pDistance+nDistance);}vec4 ApplyFXAA(sampler2D tex2D,vec2 texSize,vec2 uv){LuminanceData luminance=SampleLuminanceNeighborhood(tex2D,texSize,uv);if(ShouldSkipPixel(luminance)){return Sample(tex2D,uv);}float pixelBlend=DeterminePixelBlendFactor(luminance);EdgeData edge=DetermineEdge(texSize,luminance);float edgeBlend=DetermineEdgeBlendFactor(tex2D,texSize,luminance,edge,uv);float finalBlend=max(pixelBlend,edgeBlend);if(edge.isHorizontal){uv.y+=edge.pixelStep*finalBlend;}else{uv.x+=edge.pixelStep*finalBlend;}return Sample(tex2D,uv);}void main(){gl_FragColor=ApplyFXAA(tDiffuse,resolution.xy,vUv);}`;class CS extends AS{constructor(e){super(e,RS,{tDiffuse:{value:null},resolution:{value:new Ce}})}}class PS extends zc{constructor(e,t){super(e,t),this.name="Fxaa",this.reductionFactor=.75}resize(e){this.resolution=e;const t=this.resolution.x,n=this.resolution.y;this.fbo.setSize(t,n),this.fxaaPass.material.uniforms.resolution.value.x=1/this.resolution.x*this.reductionFactor,this.fxaaPass.material.uniforms.resolution.value.y=1/this.resolution.y*this.reductionFactor}update(e,t,n,i=!1,s){t.material=this.fxaaPass.material,t.material.uniforms.tDiffuse.value=n,this.fxaaPass.update(t,this.fbo,i,s),this.texture=this.fbo.texture}init(){this.fbo=this.getRenderTarget(this.resolution.x,this.resolution.y),this.fxaaPass=new CS(this.stage),this.fxaaPass.material.uniforms.resolution.value.x=1/this.resolution.x*this.reductionFactor,this.fxaaPass.material.uniforms.resolution.value.y=1/this.resolution.y*this.reductionFactor}}class DS extends uS{constructor(e,t,n){super(e,t),this.objects=n,this.loader=this.stage.loader,this.fluid=null,this.bloom=null,this.bloom=new TS(this.stage,this.resolution),this.motionBlur=new wS(this.stage,this.resolution),this.fxaa=null,this.fxaa=new PS(this.stage,this.resolution)}down(e){super.down(e)}move(e){super.move(e)}up(){super.up()}swap(){const e=this.buffers.read;this.buffers.read=this.buffers.write,this.buffers.write=e}resize(e){this.isInitialized&&(super.resize(e),this.fbos.video&&this.fbos.video.setSize(e.x,e.y),this.fbos.scene1&&this.fbos.scene1.setSize(e.x,e.y),this.fbos.scene2&&this.fbos.scene2.setSize(e.x,e.y),this.fbos.mask&&this.fbos.mask.setSize(e.x,e.y),this.fluid!=null&&this.fluid.resize(e),this.bloom!=null&&this.bloom.resize(e),this.motionBlur!=null&&this.motionBlur.resize(e),this.fxaa!=null&&this.fxaa.resize(e),this.outputPass.material.uniforms.uResolution.value.x=this.resolution.x,this.outputPass.material.uniforms.uResolution.value.y=this.resolution.y)}renderFboTexture(e,t=0,n=this.stage.scene.userData.background.default){return this.stage.scene.background=n,this.stage.camera.layers.set(t),this.stage.renderer.setRenderTarget(e),this.stage.renderer.clear(),this.stage.renderer.render(this.stage.scene,this.stage.camera),e.texture}update(e){if(!this.isInitialized)return;const t=this.stage.scene.userData.background.default,n=this.stage.scene.userData.background.clear;let i={input:null,fluid:null,bloom:null,motionBlur:null,video:null,scene1:null,scene2:null,mask:null};i.video=this.renderFboTexture(this.fbos.video,ie.LAYERS.VIDEO),this.objects&&this.objects.attachVideoTexture(i.video),i.scene1=this.renderFboTexture(this.fbos.scene1,ie.LAYERS.SCENE1),this.objects?.compositeMesh?.material?.uniforms?.tScene1&&(this.objects.compositeMesh.material.uniforms.tScene1.value=i.scene1),this.objects.asciiMesh&&(this.objects.asciiMesh.material.uniforms.tDiffuse.value=i.scene1),this.stage.scene.background=t,this.stage.camera.layers.set(ie.LAYERS.DEFAULT),this.stage.renderer.setRenderTarget(this.buffers.write),this.stage.renderer.clear(),this.stage.renderer.render(this.stage.scene,this.stage.camera),i.input=this.buffers.write.texture,this.swap(),i.scene2=this.renderFboTexture(this.fbos.scene2,ie.LAYERS.SCENE2),this.objects?.compositeMesh?.material?.uniforms?.tScene2&&(this.objects.compositeMesh.material.uniforms.tScene2.value=i.scene2),i.mask=this.renderFboTexture(this.fbos.mask,ie.LAYERS.MASK),this.objects?.compositeMesh?.material?.uniforms?.tMask&&(this.objects.compositeMesh.material.uniforms.tMask.value=i.mask),this.bloom!=null&&(this.stage.scene.background=n,this.objects.updateBeforeBloom(),this.stage.camera.layers.set(ie.LAYERS.BLOOM),this.stage.renderer.setRenderTarget(this.buffers.write),this.stage.renderer.clear(),this.stage.renderer.render(this.stage.scene,this.stage.camera),i.bloom=this.buffers.write.texture,this.swap(),this.bloom.update(e,this.mesh,i.bloom),i.bloom=this.bloom.texture),this.objects.updateAfterBloom(e),this.stage.scene.background=t,this.stage.camera.layers.set(ie.LAYERS.DEFAULT),this.stage.renderer.setRenderTarget(this.buffers.write),this.stage.renderer.clear(),this.stage.renderer.render(this.stage.scene,this.stage.camera),i.input=this.buffers.write.texture,this.swap(),this.motionBlur!=null&&!ie.IS_HAND_MODE&&ie.IS_HIGH&&(this.motionBlur.update(e,this.mesh,i.input),i.input=this.motionBlur.texture),this.mesh.material=this.outputPass.material,this.mesh.material.uniforms.uTime.value=e.elapsed,this.mesh.material.uniforms.tInput.value=i.input,this.mesh.material.uniforms.tFluid.value=i.fluid,this.mesh.material.uniforms.tBloom.value=i.bloom,this.mesh.material.uniforms.tMask.value=i.mask,this.outputPass.update(this.mesh,this.buffers.write,!0)}load(){return new Promise(async e=>{e()})}init(){return new Promise(async e=>{super.init(),this.fbos.video=this.getRenderTarget(this.resolution.x,this.resolution.y),this.fbos.scene1=this.getRenderTarget(this.resolution.x,this.resolution.y),this.fbos.scene2=this.getRenderTarget(this.resolution.x,this.resolution.y),this.fbos.mask=this.getRenderTarget(this.resolution.x,this.resolution.y),this.outputPass=new pS(this.stage),this.outputPass.material.uniforms.uResolution.value.x=this.resolution.x,this.outputPass.material.uniforms.uResolution.value.y=this.resolution.y,this.outputPass.material.uniforms.tBlockNoise.value=this.stage.tBlockNoise,this.fluid!=null&&this.fluid.init(),this.bloom!=null&&this.bloom.init(),this.motionBlur!=null&&this.motionBlur.init(),this.fxaa!=null&&this.fxaa.init(),this.isInitialized=!0,e()})}}class ku{static getDepthScaler(e,t,n,i){const s=e/Math.tan(t*Math.PI/360)*.5;return Math.abs(n-i)/s}static getDistance(e,t,n,i){return Math.sqrt(Math.pow(e-n,2)+Math.pow(t-i,2))}static getRangeOfRadian(e){return e>this.PI2?e-=this.PI2:e<-this.PI2&&(e+=this.PI2),e}static lerp(e,t,n){return e*(1-n)+t*n}static clamp(e,t,n){return t>e?t:n<e?n:e}static fract(e,t,n){const i=n-t+1;let s=(e-t)%i;return 0>s&&(s=i+s),s+t}static clampRandom(e,t){return Math.random()*(t-e)+e}static remap(e,t,n,i,s){return(e-t)/(n-t)*(s-i)+i}static degreeToRadian(e){return e*Math.PI/180}static radianToDegree(e){return e*180/Math.PI}}class Ts{constructor(e=60,t=1.2,n=.007,i=1.5){this.freq=e,this.minCutoff=t,this.beta=n,this.dCutoff=i,this.xPrev=null,this.dxPrev=0,this.tPrev=null}alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t){const n=this.tPrev?Math.max((t-this.tPrev)/1e3,ie.EPS3):1/this.freq;this.tPrev=t;const i=this.xPrev==null?0:(e-this.xPrev)/n,s=this.alpha(this.dCutoff,n);this.dxPrev=s*i+(1-s)*this.dxPrev;const a=this.minCutoff+this.beta*Math.abs(this.dxPrev),o=this.alpha(a,n),l=this.xPrev==null?e:o*e+(1-o)*this.xPrev;return this.xPrev=l,l}}class LS{constructor(e){this.resolution=e,this.isReady=!1,this.isTabletMode=!1,this.isMainDetectStop=!0,this.isMSTP="MediaStreamTrackProcessor"in window&&"VideoFrame"in window,this.invertX=!0,this.invertY=!1,this.handsMax=2,this.targetFPS=60,this.detConf=.5,this.presConf=.5,this.trkConf=.5,this.euro={freq:60,minCutoff:2.5,beta:.06,dCutoff:1.5},this.baseURL=URL_SITE||"/",this.stream=null,this.track=null,this.processor=null,this.worker=null,this.detector=null,this.warmupFrames=0,this.frameCounter=0,this.noHandStreak=0,this.detectEveryN=1,this.lastTips=[],this.touches=[],this.prevSmoothed=new Map,this.filters=new Map,this.updateListeners=new Set,this.videoSize={w:0,h:0},this.videoEl=document.getElementById("mediapipe")}base(){const e=this.baseURL;return e.endsWith("/")?e:e+"/"}calcVideoSize(){let t=this.resolution.aspect,n,i;return t>=1?(n=640,i=Math.max(1,Math.round(640/t)),ie.IS_PC||(this.isTabletMode=!0,t=9/16,n=640,i=Math.max(1,Math.round(640*t)))):(n=Math.max(1,Math.round(640*t)),i=640,ie.IS_PC||(this.isTabletMode=!0,t=9/16,n=640,i=Math.max(1,Math.round(640*t)))),n=640,i=360,{width:n,height:i}}extractTipsFromResult(e){const t=[];if(e?.landmarks?.length)for(let n=0;n<e.landmarks.length;n++){const i=e.landmarks[n];if(!i)continue;const s=i[8],a=i[4];if(!s||!a)continue;const o=e.handedness?.[n]?.[0]?.categoryName??null;t.push({id:n,handedness:o,idx:{x:s.x,y:s.y,z:s.z??0},th:{x:a.x,y:a.y,z:a.z??0}})}return t}buildTouchesFromTips(e,t){const n=[],i=Math.min(e.length,this.handsMax);if(i===0)return n;const s=(a,o,l,c,h,u,d)=>{let f=this.filters.get(a);if(!f){const g=this.euro;f={fx:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff),fy:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff),fz:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff),ftx:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff),fty:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff),ftz:new Ts(g.freq,g.minCutoff,g.beta,g.dCutoff)},this.filters.set(a,f)}return f};if(!this.isTabletMode){const a=this.resolution.aspect,o=Math.max(ie.EPS6,this.videoSize.w/this.videoSize.h),l=Math.min(a/o,1),c=Math.min(1/a/(1/o),1),h=d=>(d-.5)/l+.5,u=d=>(d-.5)/c+.5;for(let d=0;d<i;d++){const f=e[d],g=f.id??d,_=f.idx?.x??f.x??0,m=f.idx?.y??f.y??0,p=f.idx?.z??f.z??0,T=f.th?.x??_,M=f.th?.y??m,x=f.th?.z??p,b=s(g),R=b.fx.filter(_,t),A=b.fy.filter(m,t),w=b.fz.filter(p,t),v=b.ftx.filter(T,t),y=b.fty.filter(M,t),P=b.ftz.filter(x,t);let k=h(_),L=u(m),I=h(T),H=u(M),B=h(R),Y=u(A),z=h(v),J=u(y);this.invertX&&(k=1-k,I=1-I,B=1-B,z=1-z),this.invertY&&(L=1-L,H=1-H,Y=1-Y,J=1-J);const te=.5*(k+I),ue=.5*(L+H),xe=.5*(B+z),de=.5*(Y+J);n.push({id:g,handedness:f.handedness??null,indexUv:{x:k,y:L,z:p,lerp:{x:B,y:Y,z:w}},thumbUv:{x:I,y:H,z:x,lerp:{x:z,y:J,z:P}},centerUv:{x:te,y:ue,lerp:{x:xe,y:de}}})}return n}for(let a=0;a<i;a++){const o=e[a],l=o.id??a,c=o.idx?.x??o.x??0,h=o.idx?.y??o.y??0,u=o.idx?.z??o.z??0,d=o.th?.x??c,f=o.th?.y??h,g=o.th?.z??u,_=s(l),m=_.fx.filter(c,t),p=_.fy.filter(h,t),T=_.fz.filter(u,t),M=_.ftx.filter(d,t),x=_.fty.filter(f,t),b=_.ftz.filter(g,t),R=this.invertX?1-c:c,A=this.invertY?1-h:h,w=this.invertX?1-d:d,v=this.invertY?1-f:f,y=this.invertX?1-m:m,P=this.invertY?1-p:p,k=this.invertX?1-M:M,L=this.invertY?1-x:x,I=.5*(R+w),H=.5*(A+v),B=.5*(y+k),Y=.5*(P+L);n.push({id:l,handedness:o.handedness??null,indexUv:{x:R,y:A,z:u,lerp:{x:y,y:P,z:T}},thumbUv:{x:w,y:v,z:g,lerp:{x:k,y:L,z:b}},centerUv:{x:I,y:H,lerp:{x:B,y:Y}}})}return n}onUpdate(e){return this.updateListeners.add(e),()=>this.updateListeners.delete(e)}emitUpdate(e){if(this.updateListeners.size!==0)for(const t of this.updateListeners)try{t(this.touches,e)}catch{}}async resizeAfter(e){this.resolution=e,this.isReady&&(await this.disposeHands(),await this.init())}async dispose(){await this.disposeHands(),this.updateListeners.clear()}async stop(){await this.disposeHands()}async start(){this.isReady||await this.init()}async disposeHands(){try{this.worker?.postMessage?.({type:"dispose"}),this.worker?.terminate?.()}catch{}this.worker=null,this.isMainDetectStop=!0;try{this.detector?.close?.()}catch{}this.detector=null;try{this.track?.stop?.(),this.stream?.getTracks?.().forEach(e=>e.stop())}catch{}this.stream=null,this.track=null;try{this.processor?.readable?.cancel?.()}catch{}this.processor=null,this.videoEl&&(this.videoEl.pause?.(),this.videoEl.srcObject=null,this.videoEl.removeAttribute?.("src"),this.videoEl.load?.()),this.prevSmoothed.clear(),this.filters.clear(),this.touches=[],this.isReady=!1}async initWorker(){const e=new MediaStreamTrackProcessor({track:this.track}),t=e.readable;this.processor=e;const n=this.base()+"workers/hands.worker.js";this.worker=new Worker(n),this.worker.onmessage=i=>{const{type:s,tips:a,nowMs:o}=i.data||{};s==="tips"&&(this.frameCounter++,this.touches=this.buildTouchesFromTips(a??[],o),this.emitUpdate(o))},this.worker.postMessage({type:"init",baseURL:this.base(),readable:t,options:{numHands:this.handsMax,minDet:this.detConf,minPres:this.presConf,minTrk:this.trkConf,targetFPS:this.targetFPS}},[t])}async initMainThread(){const t=await(async c=>(window.mediapipeVision||await new Promise((h,u)=>{const d=document.createElement("script");d.src=c+"mediapipe/wasm/vision_bundle.js",d.onload=h,d.onerror=u,document.head.appendChild(d)}),window.mediapipeVision))(this.base()),{FilesetResolver:n,HandLandmarker:i}=t,s=this.base()+"mediapipe/wasm",a=this.base()+"mediapipe/models/hand_landmarker.task";this.detector=await i.createFromOptions(await n.forVisionTasks(s),{baseOptions:{modelAssetPath:a},runningMode:"VIDEO",numHands:this.handsMax,minHandDetectionConfidence:this.detConf,minHandPresenceConfidence:this.presConf,minTrackingConfidence:this.trkConf}),this.isMainDetectStop=!1,this.warmupFrames=5;const o=this.videoEl,l=c=>{if(!this.isMainDetectStop){try{if(this.warmupFrames>0)this.warmupFrames--;else{if(this.frameCounter%this.detectEveryN===0){const d=this.detector.detectForVideo(o,c),f=this.extractTipsFromResult(d);f&&f.length>0?(this.noHandStreak=0,this.detectEveryN=1,this.lastTips=f):(this.noHandStreak++,this.noHandStreak>30?this.detectEveryN=4:this.noHandStreak>10&&(this.detectEveryN=2),this.lastTips=[])}const u=this.lastTips??[];this.frameCounter++,this.touches=this.buildTouchesFromTips(u,c),this.emitUpdate(c)}}catch{}o?.requestVideoFrameCallback?o.requestVideoFrameCallback(l):setTimeout(()=>l(performance.now()),Math.round(1e3/this.targetFPS))}};o?.requestVideoFrameCallback?o.requestVideoFrameCallback(l):setTimeout(()=>l(performance.now()),Math.round(1e3/this.targetFPS))}async init(){this.isTabletMode=!ie.IS_PC;const e=640,t=360,n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",aspectRatio:e/t,width:{ideal:e},height:{ideal:t},frameRate:{ideal:this.targetFPS,max:this.targetFPS}},audio:!1}),[i]=n.getVideoTracks();this.stream=n,this.track=i,this.videoSize.w=e,this.videoSize.h=t,this.videoEl&&(this.videoEl.playsInline=!0,this.videoEl.muted=!0,this.videoEl.autoplay=!0,this.videoEl.srcObject=n,this.videoEl.width=e,this.videoEl.height=t,await this.videoEl.play().catch(()=>{})),this.isMSTP?await this.initWorker():await this.initMainThread(),this.isReady=!0}}class IS{constructor(e){this.resolution=e,this.isDown=!1,this.gain={wheel:.005,drag:ie.IS_HOVER?.01:.02,hand:.005},this.ease=.12,this.pointer={prev:{x:0,y:0},down:{x:0,y:0},prevDrag:{x:0,y:0},move:{x:0,y:0,timer:null,lerp:{x:0,y:0,interpolation:.5}}},this.SRC_NONE=0,this.SRC_WHEEL=1,this.SRC_DRAG=2,this.vector={x:0,y:0,delta:0,rawX:0,rawY:0,current:{x:0,y:0},target:{x:0,y:0},source:this.SRC_NONE},this._wheelAcc={x:0,y:0},this.onWheel=this.onWheel.bind(this),this.onPDown=this.onPointerDown.bind(this),this.onPMove=this.onPointerMove.bind(this),this.onPUp=this.onPointerUp.bind(this),this._activePointerId=null,this.isEnableFinger=!1,this.isLockLoadCamera=!1,this.fingers=new LS(this.resolution),this.hand={activeKey:null,k:1,states:{Left:{isDown:!1,down:{x:0,y:0},prevDrag:{x:0,y:0}},Right:{isDown:!1,down:{x:0,y:0},prevDrag:{x:0,y:0}},Unknown0:{isDown:!1,down:{x:0,y:0},prevDrag:{x:0,y:0}},Unknown1:{isDown:!1,down:{x:0,y:0},prevDrag:{x:0,y:0}}}};const t=document.getElementById("jsScrollbar__range");this.dom={rangeEl:t,max:1e3,k:ie.IS_WIDTH?120:80,acc:0,emitStep:.5,last:0,enabled:!0,isHandDrag:!1,inertia:0,friction:.92,minInertia:.02},this.dom.rangeEl&&(this.dom.max=Number(this.dom.rangeEl.max)||this.dom.max,this.dom.last=Number(this.dom.rangeEl.value)||0),this.MODE_POINTER=0,this.MODE_HAND=1,this.inputMode=this.MODE_POINTER,this.pointerEnabled=!1,this.wheelEnabled=!1,this.enablePointerInput(!0),this.enableWheelInput(!0)}async stopCamera(){if(this.isEnableFinger)try{await this.fingers.stop()}finally{this.isEnableFinger=!1,this.isLockLoadCamera=!1,ie.IS_CAMERA=!1}}enableWheelInput(e){e&&!this.wheelEnabled?(window.addEventListener("wheel",this.onWheel,{passive:!0}),this.wheelEnabled=!0):!e&&this.wheelEnabled&&(window.removeEventListener("wheel",this.onWheel),this.wheelEnabled=!1,this._wheelAcc.x=0,this._wheelAcc.y=0)}enablePointerInput(e){e&&!this.pointerEnabled?(window.addEventListener("pointerdown",this.onPDown,{passive:!0}),window.addEventListener("pointermove",this.onPMove,{passive:!0}),window.addEventListener("pointerup",this.onPUp,{passive:!0}),window.addEventListener("pointercancel",this.onPUp,{passive:!0}),this.pointerEnabled=!0):!e&&this.pointerEnabled&&(window.removeEventListener("pointerdown",this.onPDown),window.removeEventListener("pointermove",this.onPMove),window.removeEventListener("pointerup",this.onPUp),window.removeEventListener("pointercancel",this.onPUp),this.pointerEnabled=!1,this.isDown=!1,this._activePointerId=null,this.vector.source&=~this.SRC_DRAG,this.vector.source===0&&(this.vector.source=this.SRC_NONE))}setInputMode(e){this.inputMode!==e&&(this.inputMode=e,e===this.MODE_HAND?(this.enableWheelInput(!1),this.enablePointerInput(!1)):(this.hand.activeKey=null,Object.values(this.hand.states).forEach(t=>{t.isDown=!1,t.prevDrag.x=0,t.prevDrag.y=0}),this.dom.isHandDrag=!1,this.enablePointerInput(!0),this.enableWheelInput(!0)))}resize(e){this.resolution=e}resizeAfter(){this.fingers.resizeAfter(this.resolution)}normalize(e,t,n,i){return{x:e/n*2-1,y:-(t/i)*2+1}}lerp(e,t,n){return e*(1-n)+t*n}getHandState(e="Unknown0"){return this.hand.states[e]||this.hand.states.Unknown0}canTakeHandControl(e="Unknown0"){return this.hand.activeKey===e||this.hand.activeKey==null||e==="Right"&&this.hand.activeKey!=="Right"}onPointerDown(e){e.pointerType==="mouse"&&e.button!==0||(this.isDown=!0,this._activePointerId=e.pointerId,this.pointer.down.x=e.clientX,this.pointer.down.y=e.clientY,this.pointer.prevDrag.x=0,this.pointer.prevDrag.y=0,this.vector.source|=this.SRC_DRAG)}onPointerMove(e){const t=this.normalize(e.clientX,e.clientY,this.resolution.x,this.resolution.y);if(this.pointer.move.x=t.x,this.pointer.move.y=t.y,clearTimeout(this.pointer.move.timer),this.pointer.move.timer=setTimeout(()=>{clearTimeout(this.pointer.move.timer),this.pointer.move.timer=null},100),!this.isDown||this._activePointerId!=null&&e.pointerId!==this._activePointerId)return;const n=e.clientX-this.pointer.down.x,i=e.clientY-this.pointer.down.y,s=n-this.pointer.prevDrag.x,a=i-this.pointer.prevDrag.y;this.pointer.prevDrag.x=n,this.pointer.prevDrag.y=i,this.vector.target.x+=s*this.gain.drag,this.vector.target.y+=a*this.gain.drag*-1,this.vector.source|=this.SRC_DRAG}onPointerUp(e){this._activePointerId!=null&&e.pointerId!==this._activePointerId||(this.isDown=!1,this._activePointerId=null,this.vector.source&=~this.SRC_DRAG,this.vector.source===0&&(this.vector.source=this.SRC_NONE))}onWheel(e){this._wheelAcc.x+=e.deltaX,this._wheelAcc.y+=e.deltaY,this.vector.source|=this.SRC_WHEEL}onHandDown(e,t="Unknown0"){const n=this.getHandState(t);n.isDown=!0,n.down.x=e.x,n.down.y=e.y,n.prevDrag.x=0,n.prevDrag.y=0,this.canTakeHandControl(t)&&(this.hand.activeKey=t,this.dom.isHandDrag=!0,this.vector.source|=this.SRC_DRAG)}onHandMove(e,t="Unknown0"){const n=this.getHandState(t);if(!n.isDown||this.hand.activeKey!==t)return;const i=e.x-n.down.x,s=e.y-n.down.y,a=i-n.prevDrag.x,o=s-n.prevDrag.y;n.prevDrag.x=i,n.prevDrag.y=s;const l=a*this.resolution.x,c=o*this.resolution.y;this.vector.target.x+=l*this.gain.hand*this.hand.k,this.vector.target.y+=c*this.gain.hand*-1*this.hand.k,this.vector.source|=this.SRC_DRAG}onHandUp(e="Unknown0"){const t=this.getHandState(e);t.isDown=!1,this.hand.activeKey===e&&(this.hand.activeKey=null);const n=Object.values(this.hand.states).some(i=>i.isDown);this.dom.isHandDrag=n,n||(this.vector.source&=~this.SRC_DRAG,this.vector.source===0&&(this.vector.source=this.SRC_NONE))}update(){(this._wheelAcc.x!==0||this._wheelAcc.y!==0)&&(this.vector.target.x+=this._wheelAcc.x*this.gain.wheel*-1,this.vector.target.y+=this._wheelAcc.y*this.gain.wheel,this._wheelAcc.x=0,this._wheelAcc.y=0);const e=this.vector.current.x,t=this.vector.current.y;this.vector.current.x=ku.lerp(this.vector.current.x,this.vector.target.x,this.ease),this.vector.current.y=ku.lerp(this.vector.current.y,this.vector.target.y,this.ease);let n=this.vector.current.x-e,i=this.vector.current.y-t;this.vector.rawX=n,this.vector.rawY=i;const s=ie.EPS4;n=Math.round(n/s)*s,i=Math.round(i/s)*s,this.vector.x=n,this.vector.y=i,this.vector.delta=Math.hypot(n,i),this.vector.delta<ie.EPS9&&(this.vector.source&=~this.SRC_WHEEL,this.vector.source===0&&(this.vector.source=this.SRC_NONE)),ie.IS_HOVER&&(this.pointer.move.lerp.x=this.lerp(this.pointer.move.lerp.x,this.pointer.move.x,this.pointer.move.lerp.interpolation),this.pointer.move.lerp.y=this.lerp(this.pointer.move.lerp.y,this.pointer.move.y,this.pointer.move.lerp.interpolation)),this._updateDomScrollbarByVector()}_updateDomScrollbarByVector(){const e=this.dom,t=e?.rangeEl;if(!e?.enabled||!t)return;const n=e.max||Number(t.max)||1e3;if(e.isHandDrag){const o=(this.vector.rawY??this.vector.y)*e.k;e.inertia=e.inertia*.7+o*.3,e.acc+=o}else{if(e.inertia*=e.friction,Math.abs(e.inertia)<e.minInertia){e.inertia=0,e.acc=0;return}e.acc+=e.inertia}if(Math.abs(e.acc)<e.emitStep)return;const i=Number(t.value)||0,s=Math.max(0,Math.min(n,i+e.acc));e.acc=0,!(Math.abs(s-e.last)<e.emitStep)&&(e.last=s,t.value=String(s),t.dispatchEvent(new Event("input",{bubbles:!0})))}wrapTargetCurrent(e,t){const n=Math.abs(e),i=Math.abs(t);n>0&&(this.vector.current.x>n&&(this.vector.current.x-=n,this.vector.target.x-=n),this.vector.current.x<-n&&(this.vector.current.x+=n,this.vector.target.x+=n)),i>0&&(this.vector.current.y>i&&(this.vector.current.y-=i,this.vector.target.y-=i),this.vector.current.y<-i&&(this.vector.current.y+=i,this.vector.target.y+=i))}dispose(){window.removeEventListener("wheel",this.onWheel),window.removeEventListener("pointerdown",this.onPDown),window.removeEventListener("pointermove",this.onPMove),window.removeEventListener("pointerup",this.onPUp),window.removeEventListener("pointercancel",this.onPUp),clearTimeout(this.pointer.move.timer),this.pointer.move.timer=null}async loadCamera(){const e={success:!1,texture:null,width:null,height:null};if(this.isEnableFinger||this.isLockLoadCamera)return e;this.isLockLoadCamera=!0,ie.IS_CAMERA=!1;try{await this.fingers.start();const t=this.fingers.videoEl;if(t){const n=new vf(t);n.minFilter=ht,n.magFilter=ht,n.generateMipmaps=!1,await t.play().catch(()=>{}),e.texture=n,e.width=t.videoWidth,e.height=t.videoHeight}e.success=!0,this.isEnableFinger=!0,ie.IS_CAMERA=!0}catch{this.isEnableFinger=!1}finally{this.isLockLoadCamera=!1}return e}}class US{constructor(e,t){this.stage=e,this.audio=t,this.rootEl=this.stage.element,this.selector=".jsClick",this.z=-5,this.ds=this.stage.getDepthScaler(this.z,this.stage.resolution.eley),this.mesh=null,this.items=[],this.tmpMat=new Ie,this.tmpPos=new N,this.tmpQuat=new di,this.tmpScl=new N,this.raycaster=new kc,this.ndc=new Ce,this.prevInstanceId=-1}dispose(){this.mesh&&(this.mesh.geometry?.dispose?.(),this.mesh.material?.dispose?.(),this.mesh.parent?.remove(this.mesh),this.mesh=null),this.items=[]}resize(){this.ds=this.stage.getDepthScaler(this.z,this.stage.resolution?.eley)}init(){this.dispose();const e=[...document.querySelectorAll(this.selector)];if(!e.length)return;this.items=e.map(s=>({ele:s}));const t=new Ui(1,1),n=new Hn({transparent:!0,opacity:ie.DOMMESH_ALPHA,depthTest:!1,depthWrite:!1}),i=new mf(t,n,this.items.length);i.frustumCulled=!1,i.renderOrder=9999,this.mesh=i,this.stage.scene.add(i),this.update()}update(){if(!this.mesh||!this.items.length)return;const e=this.rootEl.getBoundingClientRect();for(let t=0;t<this.items.length;t++){const n=this.items[t].ele;if(!n||!n.isConnected)continue;const i=n.getBoundingClientRect(),s=i.left+i.width*.5-(e.left+e.width*.5),a=i.top+i.height*.5-(e.top+e.height*.5),o=s*this.ds,l=-a*this.ds,c=i.width*this.ds,h=i.height*this.ds;this.tmpPos.set(o,l,this.z),this.tmpQuat.identity(),this.tmpScl.set(c,h,1),this.tmpMat.compose(this.tmpPos,this.tmpQuat,this.tmpScl),this.mesh.setMatrixAt(t,this.tmpMat)}this.mesh.instanceMatrix.needsUpdate=!0}clickFromIntersection(e){if(!e||!this.mesh)return!1;const t=e.instanceId;if(t==null)return!1;const n=this.items[t];return n?.ele?(n.ele.click(),!0):!1}getElementFromIntersection(e){if(!e||!this.mesh)return null;const t=e.instanceId;return t==null?null:this.items[t]?.ele??null}getAnchorFromElement(e){return e?e.closest?.("a")??null:null}isExternalAnchor(e){if(!e?.href)return!1;const t=e.getAttribute("href")||"";if(t.startsWith("#")||t.startsWith("javascript:"))return!1;try{return new URL(e.href,window.location.href).origin!==window.location.origin}catch{return!1}}isSamePageAnchor(e){if(!e||!e.href)return!0;const t=e.getAttribute("href")||"";if(t===""||t==="#"||t.startsWith("#")||t.startsWith("javascript:"))return!0;try{const n=new URL(e.href,window.location.href),i=new URL(window.location.href);if(n.origin===i.origin&&n.pathname===i.pathname)return!0}catch{return!0}return!1}showExternalPopup({autoHideMs:e=3800}={}){document.documentElement.setAttribute("data-external-popup","1"),clearTimeout(this._externalPopupTimer),this._externalPopupTimer=setTimeout(()=>{document.documentElement.setAttribute("data-external-popup","0")},e)}hideExternalPopup(){clearTimeout(this._externalPopupTimer),document.documentElement.setAttribute("data-external-popup","0")}hitFromUv(e){if(!e||!this.mesh)return null;const t=e.x*2-1,n=-(e.y*2-1);return this.ndc.set(t,n),this.raycaster.setFromCamera(this.ndc,this.stage.camera),this.raycaster.intersectObject(this.mesh,!1)[0]??null}updateHandDomHoverFromUv(e){const t=this.hitFromUv(e),n=!!(t&&t.instanceId!=null);if(t){const i=t.instanceId;i!=this.prevInstanceId&&this.audio.playHover(),this.prevInstanceId=i}return ie.HAND_HOVER.IS_DOM_HOVER=n,n}}class NS{constructor(e,t,n){this.stage=e,this.resolution=t,this.audio=n,this.root=document.documentElement,this.isHandMode=this.root.getAttribute("data-hand")==="1",this.isBootingHandMode=!1,this.raycaster=new kc,this.ndc=new Ce,this.click={enable:!1,threshold:.1,beofre:{distance:0}},this.drag={enable:!1,threshold:.1,beofre:{distance:0}},this.pinch={down:!1,dragStarted:!1,downAt:0,startUv:{x:0,y:0},lastUv:{x:0,y:0},maxDispPx:0,diffZ:.01,config:{upScale:1.35,clickMaxMs:320,clickMovePx:20*2,dragStartPx:36*2}},this.handStates={Left:this.createHandState(),Right:this.createHandState(),Unknown0:this.createHandState(),Unknown1:this.createHandState()},this.handPresence={Left:!1,Right:!1},this.twoHandPinch={active:!1,startDistance:0,currentDistance:0,startDx:0,startDy:0,currentDx:0,currentDy:0,ratio:1,ratioX:1,ratioY:1},this.DEBUG_HAND_PINCH=!1,this.interactiveController=new IS(this.resolution),this.domClickProxies=new US(this.stage,this.audio),this.cameraStatus="idle",this.setCameraStatus("idle"),this.onEnabledHandMode=i=>{},this.onDisabledHandMode=()=>{},this.onRightHandDetected=(i,s)=>{},this.onRightHandLost=i=>{},this.onLeftHandDetected=(i,s)=>{},this.onLeftHandLost=i=>{},this.onHandMove=(i,s)=>{},this.onHandPinchDown=(i,s)=>{},this.onHandPinchMove=(i,s)=>{},this.onHandPinchUp=(i,s,a)=>{},this.onHandRayClick=(i,s)=>{},this.onTwoHandPinchStart=i=>{},this.onTwoHandPinchMove=i=>{},this.onTwoHandPinchEnd=i=>{}}setCameraStatus(e="idle"){this.cameraStatus=e,this.root.dataset.cameraStatus=e}createHandState(){return{click:{enable:!1,threshold:.1,before:{distance:0}},drag:{enable:!1,threshold:.1,before:{distance:0}},pinch:{down:!1,dragStarted:!1,downAt:0,startUv:{x:0,y:0},lastUv:{x:0,y:0},maxDispPx:0,diffZ:.01,moveUv:{x:0,y:0},movePx:{x:0,y:0},config:{upScale:1.35,clickMaxMs:320,clickMovePx:20*2,dragStartPx:36*2}}}}getHandKey(e,t=0){return e?.handedness==="Left"?"Left":e?.handedness==="Right"?"Right":t===0?"Unknown0":"Unknown1"}updateHandPresence(e){const t=e??[];let n=null,i=null;for(let s=0;s<t.length;s++){const a=t[s],o=this.getHandKey(a,s);o==="Left"&&!n&&(n=a),o==="Right"&&!i&&(i=a)}i&&!this.handPresence.Right?(this.handPresence.Right=!0,this.onRightHandDetected(i,"Right")):!i&&this.handPresence.Right&&(this.handPresence.Right=!1,this.onRightHandLost("Right")),n&&!this.handPresence.Left?(this.handPresence.Left=!0,this.onLeftHandDetected(n,"Left")):!n&&this.handPresence.Left&&(this.handPresence.Left=!1,this.onLeftHandLost("Left"))}updateTwoHandPinch(e,t){const n=this.handStates.Left,i=this.handStates.Right,s=e.find(p=>this.getHandKey(p)==="Left")??null,a=e.find(p=>this.getHandKey(p)==="Right")??null,o=!!n?.pinch?.down,l=!!i?.pinch?.down;if(!(o&&l&&s&&a)){this.twoHandPinch.active&&(this.twoHandPinch.active=!1,this.onTwoHandPinchEnd({nowMs:t,startDistance:this.twoHandPinch.startDistance,currentDistance:this.twoHandPinch.currentDistance,startDx:this.twoHandPinch.startDx,startDy:this.twoHandPinch.startDy,currentDx:this.twoHandPinch.currentDx,currentDy:this.twoHandPinch.currentDy,ratio:this.twoHandPinch.ratio,ratioX:this.twoHandPinch.ratioX,ratioY:this.twoHandPinch.ratioY,leftTouch:s,rightTouch:a}));return}const h=s.centerUv?.x??s.thumbUv.x,u=s.centerUv?.y??s.thumbUv.y,d=a.centerUv?.x??a.thumbUv.x,f=a.centerUv?.y??a.thumbUv.y,g=(d-h)*this.resolution.aspect,_=f-u,m=Math.hypot(g,_);if(!this.twoHandPinch.active){this.twoHandPinch.active=!0,this.twoHandPinch.startDistance=m,this.twoHandPinch.currentDistance=m,this.twoHandPinch.startDx=g,this.twoHandPinch.startDy=_,this.twoHandPinch.currentDx=g,this.twoHandPinch.currentDy=_,this.twoHandPinch.ratio=1,this.twoHandPinch.ratioX=1,this.twoHandPinch.ratioY=1,this.onTwoHandPinchStart({nowMs:t,startDistance:m,currentDistance:m,startDx:g,startDy:_,currentDx:g,currentDy:_,ratio:1,ratioX:1,ratioY:1,leftTouch:s,rightTouch:a});return}this.twoHandPinch.currentDistance=m,this.twoHandPinch.currentDx=g,this.twoHandPinch.currentDy=_,this.twoHandPinch.ratio=Math.abs(this.twoHandPinch.startDistance)>ie.EPS6?m/this.twoHandPinch.startDistance:1,this.twoHandPinch.ratioX=Math.abs(this.twoHandPinch.startDx)>ie.EPS6?g/this.twoHandPinch.startDx:1,this.twoHandPinch.ratioY=Math.abs(this.twoHandPinch.startDy)>ie.EPS6?_/this.twoHandPinch.startDy:1,this.onTwoHandPinchMove({nowMs:t,startDistance:this.twoHandPinch.startDistance,currentDistance:m,startDx:this.twoHandPinch.startDx,startDy:this.twoHandPinch.startDy,currentDx:g,currentDy:_,ratio:this.twoHandPinch.ratio,ratioX:this.twoHandPinch.ratioX,ratioY:this.twoHandPinch.ratioY,leftTouch:s,rightTouch:a})}async applyHandMode(e){const t=e;if(this.root.dataset.hand=t?"1":"0",ie.IS_HAND_MODE=t,this.isHandMode=t,t){const n=a=>{this.onEnabledHandMode(a),this.root.dataset.loadCamera="0",this.setCameraStatus("idle")},i=async()=>{this.root.dataset.loadCamera="0",this.setCameraStatus("permission"),await Bu(2e3),await this.applyHandMode(!1)};this.root.dataset.loadCamera="1";let s="";try{this.setCameraStatus("loading");const o=await(async()=>{if(this.interactiveController.isEnableFinger)return!0;if(this.isBootingHandMode)return!1;this.isBootingHandMode=!0;try{const l=await this.interactiveController.loadCamera();return l?.success?(n(l),!0):!1}finally{this.isBootingHandMode=!1}})();await Bu(100),this.domClickProxies?.update(),o||(s="failed")}catch{s=o=>{const l=o?.name||"";return l==="NotAllowedError"||l==="PermissionDeniedError"||l==="SecurityError"?"denied":"failed"}}if(s!=""&&this.interactiveController.isEnableFinger===!1){await i();return}}else this.setCameraStatus("idle"),delete this.root.dataset.loadCamera,await this.interactiveController.stopCamera(),this.onDisabledHandMode(),ie.HAND_HOVER.VALUE=0,ie.HAND_HOVER.IS_DOM_HOVER=!1;this.interactiveController?.setInputMode(t?this.interactiveController.MODE_HAND:this.interactiveController.MODE_POINTER),this.click.enable=!1,this.drag.enable=!1,this.click.beofre.distance=1,this.drag.beofre.distance=1,Object.values(this.handStates).forEach(n=>{n.click.enable=!1,n.drag.enable=!1,n.click.before.distance=1,n.drag.before.distance=1,n.pinch.down=!1,n.pinch.dragStarted=!1,n.pinch.maxDispPx=0})}resizeAfter(){this.domClickProxies?.resize(),this.domClickProxies?.update(),this.interactiveController.resizeAfter()}resize(e){this.resolution=e,this.interactiveController&&this.interactiveController.resize(this.resolution)}update(e){this.interactiveController&&this.interactiveController.update()}handDomClick(e,t){if(!e)return!1;const n=e.thumbUv;if(!n)return!1;const i=this.domClickProxies;if(!i.mesh)return!1;const s=n.x*2-1,a=-(n.y*2-1);this.ndc.set(s,a),this.raycaster.setFromCamera(this.ndc,this.stage.camera);const o=this.raycaster.intersectObject(i.mesh,!1);if(!o.length)return!1;const l=i.getElementFromIntersection(o[0]);if(!l)return!1;const c=this.domClickProxies.getAnchorFromElement(l);return c&&this.domClickProxies.isSamePageAnchor(c)?!0:c&&this.domClickProxies.isExternalAnchor(c)?(this.domClickProxies.showExternalPopup({autoHideMs:3800}),this._lastExternalHref=c.href,!0):(l.click(),!0)}handRayClick(e,t){this.onHandRayClick(e,t)}handMove(e,t){const n=e,i=t;(i==="Right"||i==="Unknown0")&&this.domClickProxies.updateHandDomHoverFromUv(n.thumbUv),this.onHandMove(e,t)}handPinch(e,t,n,i){const s=e,a=t,o=n,l=i;if(!s||!o)return;const c=o.pinch,h=o.click,u=o.drag,d=this.resolution.aspect,f=(s.indexUv.x-s.thumbUv.x)*d,g=s.indexUv.y-s.thumbUv.y,_=Math.hypot(f,g),p=Math.max(ie.EPS4,.5*_)*2,T=h.threshold,M=T*c.config.upScale,x=Math.abs(s.indexUv.z??0)-Math.abs(s.thumbUv.z??0),b=Math.abs(x)<c.diffZ,R=p<T,A=p>M,w=c.down&&!R&&!c.dragStarted,v=I=>({x:I.x*this.resolution.elex,y:I.y*this.resolution.eley}),y=()=>{c.down=!0,c.dragStarted=!1,c.downAt=a,c.maxDispPx=0;const I=s.thumbUv?.lerp??s.thumbUv;c.startUv.x=c.lastUv.x=I.x,c.startUv.y=c.lastUv.y=I.y,h.enable=!0,u.enable=!1,c.moveUv.x=0,c.moveUv.y=0,c.movePx.x=0,c.movePx.y=0,this.interactiveController.dom.isHandDrag=!0,this.interactiveController.dom.inertia=0,this.interactiveController.dom.acc=0;const H=s.centerUv?.lerp?{x:s.centerUv.lerp.x,y:s.centerUv.lerp.y}:s.centerUv??s.thumbUv;this.interactiveController.onHandDown(H,l),this.onHandPinchDown(s,l),this.DEBUG_HAND_PINCH},P=()=>{const I=s.thumbUv?.lerp??s.thumbUv,H=v(c.startUv),B=v(I),Y=B.x-H.x,z=B.y-H.y,J=Math.hypot(Y,z);if(c.moveUv.x=I.x-c.startUv.x,c.moveUv.y=I.y-c.startUv.y,c.movePx.x=Y,c.movePx.y=z,J>c.maxDispPx&&(c.maxDispPx=J),!c.dragStarted&&c.maxDispPx>c.config.dragStartPx&&(c.dragStarted=!0,u.enable=!0,this.DEBUG_HAND_PINCH),c.dragStarted){const te=s.centerUv?.lerp?{x:s.centerUv.lerp.x,y:s.centerUv.lerp.y}:s.centerUv??s.thumbUv;this.interactiveController.onHandMove(te,l),this.onHandPinchMove({...s,pinch:{moveUv:{x:c.moveUv.x,y:c.moveUv.y},movePx:{x:c.movePx.x,y:c.movePx.y},maxDispPx:c.maxDispPx}},l)}c.lastUv.x=I.x,c.lastUv.y=I.y},k=I=>{const H=a-c.downAt,B=!c.dragStarted&&H<c.config.clickMaxMs&&c.maxDispPx<c.config.clickMovePx;this.DEBUG_HAND_PINCH,c.down=!1,h.enable=!1,u.enable=!1;const Y=Object.values(this.handStates).some(z=>z?.pinch?.down);this.interactiveController.dom.isHandDrag=Y,this.interactiveController.onHandUp(l),this.onHandPinchUp(s,l,I),B&&(this.handDomClick(s,l)||this.handRayClick(s,l))},L=this.twoHandPinch?.active&&(l==="Left"||l==="Right");L?(h.enable=!1,u.enable=!1):(!c.down&&R&&y(),c.down&&!(A||w)&&P()),c.down&&(A||w)&&k(L),h.before.distance=p,u.before.distance=p}initDomOperate(){const e=".jsOperateToggleBtn";if(this.operateToggleBtns=[...document.querySelectorAll(e)],!this.operateToggleBtns.length)return;this.isClickOperate=!0;const t=async n=>{if(!this.isClickOperate)return;this.isClickOperate=!1;const i=!this.isHandMode;await this.applyHandMode(i),this.isClickOperate=!0};this.operateToggleBtns.forEach(n=>{n.addEventListener("click",t,{passive:!0})})}async init(){this.initDomOperate(),Qp(),this.domClickProxies.init(),this.interactiveController.fingers.onUpdate((e,t)=>{const n=e??[];if(this.updateHandPresence(n),!n.length){this.updateTwoHandPinch([],t);return}n.forEach((i,s)=>{const a=this.getHandKey(i,s);if(a!=="Left"&&a!=="Right")return;const o=this.handStates[a];this.handMove(i,a),this.handPinch(i,t,o,a)}),this.updateTwoHandPinch(n,t)})}}class OS{constructor(e,t){this.params=e,this.audio=t,this.isInitialized=!1,this.root=document.documentElement,this.elements={webglWrapper:document.getElementById("world")};const n=this.elements.webglWrapper.clientWidth,i=this.elements.webglWrapper.clientHeight,s=Math.min(2,window.devicePixelRatio);this.resolution={x:n*s,y:i*s,elex:n,eley:i,minx:Math.round(n*.5),miny:Math.round(i*.5),dpr:s,aspect:n/i},this.stage=new nS(this.elements.webglWrapper,this.resolution),this.objects=new hS(this.stage,this.resolution,this.audio),this.pp=new DS(this.stage,this.resolution,this.objects),this.helpers=null,this.mediapipe=new NS(this.stage,this.resolution,this.audio),this.mediapipe.onEnabledHandMode=a=>{this.isInitialized&&this.onEnabledHandMode(a)},this.mediapipe.onDisabledHandMode=()=>{this.isInitialized&&this.onDisabledHandMode()},this.mediapipe.onHandMove=(a,o)=>{this.isInitialized&&this.onHandMove(a,o)},this.mediapipe.onHandPinchDown=(a,o)=>{this.isInitialized&&this.onHandPinchDown(a,o)},this.mediapipe.onHandPinchMove=(a,o)=>{this.isInitialized&&this.onHandPinchMove(a,o)},this.mediapipe.onHandPinchUp=(a,o,l)=>{this.isInitialized&&this.onHandPinchUp(a,o,l)},this.mediapipe.onHandRayClick=(a,o)=>{this.isInitialized&&this.onHandRayClick(a,o)},this.mediapipe.onRightHandDetected=(a,o)=>{this.isInitialized&&this.onRightHandDetected(a,o)},this.mediapipe.onRightHandLost=a=>{this.isInitialized&&this.onRightHandLost(a)},this.mediapipe.onLeftHandDetected=(a,o)=>{this.isInitialized&&this.onLeftHandDetected(a,o)},this.mediapipe.onLeftHandLost=a=>{this.isInitialized&&this.onLeftHandLost(a)},this.mediapipe.onTwoHandPinchStart=a=>{this.isInitialized&&this.onTwoHandPinchStart(a)},this.mediapipe.onTwoHandPinchMove=a=>{this.isInitialized&&this.onTwoHandPinchMove(a)},this.mediapipe.onTwoHandPinchEnd=a=>{this.isInitialized&&this.onTwoHandPinchEnd(a)}}onEnabledHandMode(e){this.objects?.onEnabledHandMode?.(e)}onDisabledHandMode(){this.objects?.onDisabledHandMode?.()}onHandMove(e,t){this.objects?.onHandMove?.(e,t)}onHandPinchDown(e,t){this.objects?.onHandPinchDown?.(e,t)}onHandPinchMove(e,t){this.objects?.onHandPinchMove?.(e,t)}onHandPinchUp(e,t,n){this.objects?.onHandPinchUp?.(e,t,n)}onHandRayClick(e,t){this.objects?.onHandRayClick?.(e,t)}onRightHandDetected(e,t){this.objects?.onRightHandDetected?.(e,t)}onRightHandLost(e){this.objects?.onRightHandLost?.(e)}onLeftHandDetected(e,t){this.objects?.onLeftHandDetected?.(e,t)}onLeftHandLost(e){this.objects?.onLeftHandLost?.(e)}onTwoHandPinchStart(e){this.objects?.onTwoHandPinchStart?.(e)}onTwoHandPinchMove(e){this.objects?.onTwoHandPinchMove?.(e)}onTwoHandPinchEnd(e){this.objects?.onTwoHandPinchEnd?.(e)}resizeAfter(){this.objects&&this.objects.resizeAfter(),this.mediapipe&&this.mediapipe.resizeAfter()}resize(e){const t=this.elements.webglWrapper.clientWidth,n=this.elements.webglWrapper.clientHeight,i=this.resolution.dpr;this.resolution.x=t*i,this.resolution.y=n*i,this.resolution.elex=t,this.resolution.eley=n,this.resolution.aspect=t/n,this.stage.resize(this.resolution),this.objects.resize(this.resolution),this.pp!=null&&this.pp.resize(this.resolution),this.mediapipe&&this.mediapipe.resize(this.resolution)}update(e){this.mediapipe&&this.mediapipe.update(e),this.objects.update(e),this.helpers!=null&&this.helpers.update(),this.pp!=null?this.pp.update(e):this.stage.renderer.render(this.stage.scene,this.stage.camera)}async load(){await this.stage.load(),await this.objects.load()}async init(){await this.stage.init(),await this.objects.init(),this.pp!=null&&await this.pp.init(),this.helpers!=null&&this.helpers.init(),this.mediapipe&&await this.mediapipe.init(),this.isInitialized=!0}}class pr{constructor(e,t){this.audioContext=e,this.audioFilePath=t,this.audioBuffer=null,this.sourceNode=null,this.volumeNode=null,this.filterNode=null,this.analyserNode=null,this.audioDataArray=null,this.isPlaying=!1,this.fadeInDuration=1,this.fadeOutDuration=2,this.frequency=2e4,this.maxVolume=1}async init(){const t=await(await fetch(this.audioFilePath)).arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(t),this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=512,this.analyserNode.smoothingTimeConstant=1;const n=this.analyserNode.frequencyBinCount;this.audioDataArray=new Uint8Array(n)}play(e=!1,t=!1,n=1){this.isPlaying&&this.stop(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.audioBuffer,this.sourceNode.loop=t,this.sourceNode.playbackRate.value=n,this.volumeNode=this.audioContext.createGain(),this.filterNode=this.audioContext.createBiquadFilter(),this.filterNode.type="lowpass",this.filterNode.frequency.setValueAtTime(this.frequency,this.audioContext.currentTime),this.filterNode.Q.setValueAtTime(10,this.audioContext.currentTime),this.sourceNode.connect(this.filterNode).connect(this.volumeNode).connect(this.analyserNode).connect(this.audioContext.destination),e?(this.volumeNode.gain.setValueAtTime(0,this.audioContext.currentTime),this.volumeNode.gain.linearRampToValueAtTime(this.maxVolume,this.audioContext.currentTime+this.fadeInDuration)):this.volumeNode.gain.setValueAtTime(this.maxVolume,this.audioContext.currentTime),this.sourceNode.start(0,0),this.isPlaying=!0,this.sourceNode.onended=()=>{this.isPlaying=!1}}stop(e=!1){if(!this.isPlaying)return;const t=this.audioContext.currentTime;e?(this.volumeNode.gain.linearRampToValueAtTime(0,t+this.fadeOutDuration),setTimeout(()=>{this.sourceNode&&(this.sourceNode.stop(),this.sourceNode.loop=!1,this.isPlaying=!1)},this.fadeOutDuration*1e3)):(this.sourceNode.stop(),this.sourceNode.loop=!1,this.isPlaying=!1)}changeFrequency(e=2e4,t=1){this.filterNode&&mc.to(this.filterNode.frequency,{value:e,duration:t})}resume(){this.isPlaying||this.play(!0)}getAnalyserData(e="time"){return!this.analyserNode||!this.audioDataArray?null:(e==="time"?this.analyserNode.getByteTimeDomainData(this.audioDataArray):e==="freq"&&this.analyserNode.getByteFrequencyData(this.audioDataArray),this.audioDataArray)}getMaxAmplitude(){if(!this.getAnalyserData("time"))return 0;let t=0;return this.isPlaying&&(t=this.audioDataArray.reduce((n,i)=>Math.max(n,i)),t=t/255),t-=.5,t=t<0?0:t,t}}class FS{constructor(){this.isLoaded=!1,this.isPlaying=!1,this.isPlayingBtn=!0,this.isOncedPlaying=!1,this.vector={x:0,y:0,beforeX:0,beforeY:0},this.root=document.documentElement,this.bgm=null,this.rain=null,this.hover1=null,this.hover2=null,this.glitch=null,this.isHoverSwap=!0,this.src={bgm:"assets/audio/bgm-hw.mp3",rain:"assets/audio/rain.mp3",hover:"assets/audio/hover.mp3",glitch:"assets/audio/glitch.mp3"},this.playHover=this.playHover.bind(this),this.ctx=null,this._built=!1,this._resetting=!1,this._isAble2Click=!0,this.audioBgmBtn=null,this._hideTeardownTimer=null}_setBgmBtnState(e){this.audioBgmBtn&&(this.root.dataset.audio=e?"1":"0",this.audioBgmBtn.setAttribute("aria-pressed",e?"true":"false"))}async _buildGraph(){this._built&&await this._teardownGraph(),this.ctx=new(window.AudioContext||window.webkitAudioContext),this.bgm=new pr(this.ctx,URL_SITE+this.src.bgm),this.rain=new pr(this.ctx,URL_SITE+this.src.rain),this.hover1=new pr(this.ctx,URL_SITE+this.src.hover),this.hover2=new pr(this.ctx,URL_SITE+this.src.hover),this.glitch=new pr(this.ctx,URL_SITE+this.src.glitch),await Promise.all([this.bgm.init(),this.rain.init(),this.hover1.init(),this.hover2.init(),this.glitch.init()]),this.bgm.maxVolume=.5,this.rain.maxVolume=.25,this.glitch.maxVolume=.5,this.hover1.maxVolume=.5,this.hover2.maxVolume=.5,this.isLoaded=!0,this._built=!0}async _teardownGraph(){this.isLoaded=!1;const e=120,t=n=>{try{if(!n)return;typeof n.fadeOutDuration=="number"&&(n.fadeOutDuration=e/1e3),n.stop&&n.stop(!0)}catch{}};t(this.bgm),t(this.rain),t(this.hover1),t(this.hover2),t(this.glitch),await new Promise(n=>setTimeout(n,e+40)).catch(()=>{}),this.bgm=this.rain=this.hover1=this.hover2=this.glitch=this.menu=null;try{await this.ctx?.close?.()}catch{}this.ctx=null,this.isPlaying=!1,this.isOncedPlaying=!1,this._isAble2Click=!0,this._setBgmBtnState(!1),this._built=!1}async fullReset(){if(!this._resetting){this._resetting=!0;try{await this._teardownGraph(),await this._buildGraph()}finally{this._resetting=!1}}}playHover(){this.isLoaded&&this.isPlaying&&(this.isHoverSwap?(this.isHoverSwap=!1,this.hover1&&this.hover1.play(!1,!1,1)):(this.isHoverSwap=!0,this.hover2&&this.hover2.play(!1,!1,1)))}playGlitch(){this.isLoaded&&this.isPlaying&&this.glitch.play(!1,!1,2)}leave(){if(ie.IS_HOVER&&this.audioBtnElements?.length>0)for(let e=0;e<this.audioBtnElements.length;e++)this.audioBtnElements[e].removeEventListener("mouseenter",this.playHover)}enter(){if(ie.IS_HOVER&&(this.audioBtnElements=[...document.querySelectorAll(".jsAudioHover")],this.audioBtnElements.length>0))for(let e=0;e<this.audioBtnElements.length;e++)this.audioBtnElements[e].addEventListener("mouseenter",this.playHover)}loaded(){this.isLoaded=!0}async init(){await this._buildGraph(),this.audioBgmBtn=document.getElementById("jsAudioBtn"),this._setBgmBtnState(!1),ie.IS_PREVIEW||window.addEventListener("click",t=>{this.isLoaded&&!this.isOncedPlaying&&(this.isOncedPlaying=!0,this.isPlaying=!0,this.bgm.play(!0,!0),this.rain.play(!0,!0),this._setBgmBtnState(!0))},{once:!0}),this.audioBgmBtn&&this.audioBgmBtn.addEventListener("click",t=>{if(t.preventDefault(),!(!this.isLoaded||!this._isAble2Click)){if(this._isAble2Click=!1,this.isPlaying){try{this.bgm.fadeOutDuration=.12,this.rain.fadeOutDuration=.12}catch{}this.bgm?.stop(!0),this.rain?.stop(!0),this.isPlaying=!1,this._setBgmBtnState(!1)}else this.isOncedPlaying||(this.isOncedPlaying=!0),this.bgm?.play(!0,!0),this.rain?.play(!0,!0),this.isPlaying=!0,this._setBgmBtnState(!0);setTimeout(()=>{this._isAble2Click=!0},500)}});const e=async()=>{this._hideTeardownTimer&&clearTimeout(this._hideTeardownTimer),this._hideTeardownTimer=setTimeout(async()=>{await this._teardownGraph()},10)};document.addEventListener("visibilitychange",async()=>{document.visibilityState==="hidden"?await e():(this._built||await this._buildGraph(),this._setBgmBtnState(!1))}),window.addEventListener("pagehide",async()=>{await e()}),window.addEventListener("pageshow",async()=>{this._built||await this._buildGraph(),this._setBgmBtnState(!1)})}}window.URL_SITE="https://dev.shoya-kajita.com/077/";class BS{constructor(){this.root=document.documentElement,this.body=document.body,this.ua=im.data,ie.IS_PC=this.ua.device==="pc",ie.OS=this.ua.os,ie.DEVICE=this.ua.device,ie.BROWSER=this.ua.browser,ie.IS_IPHONE=this.ua.iphone==="iphone",this.time={now:0,delta:0,elapsed:0,fps:0},this.timer={resize:null,orientation:null},this.params={w:window.innerWidth,h:window.innerHeight,beforeWidth:window.innerWidth,aspect:0},this.fps={lastTime:0,lastFpsTime:0,frameCount:0,startTime:null,nowTime:0,limit:ie.FPS,interval:1e3/ie.FPS,current:0},this.audio=new FS,this.controller=new OS(this.params,this.audio),this.event()}event(){let e=!1;const t=i=>{requestAnimationFrame(t),this.fps.startTime||(this.fps.startTime=i),this.time.now=i;const s=i-this.fps.lastTime;this.time.delta=s*.001,this.time.elapsed=(i-this.fps.startTime)*.001,s>this.fps.interval&&(this.fps.lastTime=i-s%this.fps.interval,this.fps.frameCount++,this.time.ratio=s/this.fps.baseFpsSecond,this.update(),e||(this.fps.current=1e3/s,this.time.fps=Math.round(this.fps.current),i-this.fps.lastFpsTime>=5e3&&(this.fps.current=Math.round(this.fps.frameCount/5),this.time.fps=this.fps.current,this.fps.frameCount=0,this.fps.lastFpsTime=i,this.time.fps<44&&(ie.IS_HIGH=!1),this.root.dataset.fps=this.time.fps,e=!0)))};t();function n(){return window.innerWidth>window.innerHeight?"landscape":"portrait"}window.addEventListener("orientationchange",i=>{window.orientation!=0&&this.params.w<this.params.h&&(clearTimeout(this.timer.orientation),this.timer.orientation=setTimeout(()=>{window.location.reload()},ie.DELAY.ORIENTATION)),this.body.setAttribute("data-orientation",n())}),this.body.setAttribute("data-orientation",n()),window.addEventListener("resize",this.resize.bind(this),{passive:!0})}resizeParams(){ie.IS_WIDTH=window.matchMedia("(max-width: 768px)").matches,ie.IS_HOVER=window.matchMedia("(hover: hover)").matches,this.params.w=window.innerWidth,this.params.h=window.innerHeight,this.params.aspect=this.params.w/this.params.h}resizeEnableCheck(){let e=!0;return ie.IS_PC?e=!0:window.innerWidth===this.params.w?e=!1:e=!0,e}resizeAfter(){const e=document.getElementById("vw").clientWidth;e>ie.BREAKPOINT&&this.params.beforeWidth<ie.BREAKPOINT+1&&window.location.reload(),e<ie.BREAKPOINT+1&&this.params.beforeWidth>ie.BREAKPOINT+1&&window.location.reload(),this.params.beforeWidth=e}resize(e=!0){this.isAbleToResize=e?this.resizeEnableCheck():!0,this.isAbleToResize&&(this.resizeParams(),this.controller&&this.controller.resize(),clearTimeout(this.timer.resize),this.timer.resize=setTimeout(()=>{this.resizeAfter(),this.controller&&this.controller.resizeAfter()},ie.DELAY.RESIZE_AFTER))}update(){this.controller&&this.controller.update(this.time)}async load(){await tm(),this.controller&&await this.controller.load()}async loaded(){this.root.dataset.loaded="1"}async init(){this.audio.enter(),this.controller!=null&&await this.controller.init(),this.resize(!1),await this.loaded()}}window.addEventListener("load",async()=>{const r=await cm();r==="high"?(ie.QUALITY=3,ie.FPS=60):r==="mid"?(ie.QUALITY=2,ie.FPS=60):(ie.QUALITY=1,ie.FPS=60);const e=new BS;await e.load(),await e.init()});
