{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.Hb(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uD"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uD"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uD(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={tC:function tC(a){this.a=a},
r9:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wy:function(a,b,c,d){var t=new H.oF(a,b,c,[d])
t.eM(a,b,c,d)
return t},
dr:function(a,b,c,d){if(!!J.az(a).$isr)return new H.fT(a,b,[c,d])
return new H.hr(a,b,[c,d])},
jl:function(){return new P.dM("No element")},
w7:function(){return new P.dM("Too few elements")},
jJ:function(a,b,c,d){if(c-b<=32)H.FD(a,b,c,d)
else H.FC(a,b,c,d)},
FD:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bf(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.ct(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FC:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.am(a3+a4,2)
p=q-t
o=q+t
n=J.bf(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.ct(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ct(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ct(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ct(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ct(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ct(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ct(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ct(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ct(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.bb(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.az(c)
if(b.S(c,0))continue
if(b.a3(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dx(c)
if(b.aB(c,0)){--f
continue}else{a=f-1
if(b.a3(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.e7(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.ct(a5.$2(d,j),0))for(;!0;)if(J.ct(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e7(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.n(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.n(a2,b))
n.i(a2,b,j)
H.jJ(a2,a3,g-2,a5)
H.jJ(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bb(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bb(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bb(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bb(a5.$2(d,j),0))for(;!0;)if(J.bb(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e7(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jJ(a2,g,f,a5)}else H.jJ(a2,g,f,a5)},
kO:function kO(a){this.a=a},
r:function r(){},
el:function el(){},
oF:function oF(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
em:function em(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hr:function hr(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fT:function fT(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jq:function jq(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fc:function fc(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
e5:function e5(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eC:function eC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iu:function iu(){},
p4:function p4(){},
hK:function hK(){},
kc:function(a,b){var t=a.bp(b)
if(!u.globalState.d.cy)u.globalState.f.bz()
return t},
xy:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.az(s).$isp)throw H.l(P.dA("Arguments to main must be a List: "+H.z(s)))
u.globalState=new H.qk(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vs()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pR(P.tI(null,H.eH),0)
r=P.D
s.z=new H.u(0,null,null,null,null,null,0,[r,H.ft])
s.ch=new H.u(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qj()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zt,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.FX)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a4(null,null,null,r)
p=new H.fj(0,null,!1)
o=new H.ft(s,new H.u(0,null,null,null,null,null,0,[r,H.fj]),q,u.createNewIsolate(),p,new H.dB(H.rq()),new H.dB(H.rq()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
q.h(0,0)
o.d6(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fz(a,{func:1,args:[,]}))o.bp(new H.rr(t,a))
else if(H.fz(a,{func:1,args:[,,]}))o.bp(new H.rs(t,a))
else o.bp(a)
u.globalState.f.bz()},
FX:function(a){var t=P.hn(["command","print","msg",a])
return new H.dw(!0,P.hU(null,P.D)).aw(t)},
zv:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zw()
return},
zw:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.V('Cannot extract URI from "'+t+'"'))},
zt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eF(!0,[]).aV(b.data)
s=J.bf(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eF(!0,[]).aV(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eF(!0,[]).aV(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a4(null,null,null,k)
i=new H.fj(0,null,!1)
h=new H.ft(s,new H.u(0,null,null,null,null,null,0,[k,H.fj]),j,u.createNewIsolate(),i,new H.dB(H.rq()),new H.dB(H.rq()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
j.h(0,0)
h.d6(0,i)
u.globalState.f.a.aJ(0,new H.eH(h,new H.mg(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bz()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fC(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bz()
break
case"close":u.globalState.ch.an(0,$.$get$vt().n(0,a))
a.terminate()
u.globalState.f.bz()
break
case"log":H.zs(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hn(["command","print","msg",t])
k=new H.dw(!0,P.hU(null,P.D)).aw(k)
s.toString
self.postMessage(k)}else P.fA(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
zs:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hn(["command","log","msg",a])
r=new H.dw(!0,P.hU(null,P.D)).aw(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cs(q)
t=H.cr(q)
s=P.lj(t)
throw H.l(s)}},
zu:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wl=$.wl+("_"+s)
$.wm=$.wm+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fC(f,["spawned",new H.fu(s,r),q,t.r])
r=new H.mh(a,b,c,d,t)
if(e===!0){t.dN(q,q)
u.globalState.f.a.aJ(0,new H.eH(t,r,"start isolate"))}else r.$0()},
FJ:function(a,b){var t=new H.oX(!0,!1,null)
t.eN(a,b)
return t},
Gf:function(a){return new H.eF(!0,[]).aV(new H.dw(!1,P.hU(null,P.D)).aw(a))},
rr:function rr(a,b){this.a=a
this.b=b},
rs:function rs(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
ft:function ft(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
qf:function qf(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b},
pS:function pS(a){this.a=a},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(){},
mg:function mg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mh:function mh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pE:function pE(){},
fu:function fu(b,a){this.b=b
this.a=a},
qm:function qm(a,b){this.a=a
this.b=b},
hX:function hX(b,c,a){this.b=b
this.c=c
this.a=a},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
dw:function dw(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
yw:function(){throw H.l(new P.V("Cannot modify unmodifiable Map"))},
GS:function(a){return u.types[a]},
xt:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.az(a).$isaE},
z:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.l(H.bv(a))
return t},
F8:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nN(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ep:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
u1:function(a,b){if(b==null)throw H.l(new P.bJ(a,null,null))
return b.$1(a)},
fh:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.u1(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.u1(a,c)}if(b<2||b>36)throw H.l(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a4(q,o)|32)>r)return H.u1(a,c)}return parseInt(a,b)},
wj:function(a,b){return b.$1(a)},
wn:function(a,b){var t,s
H.GA(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wj(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rx(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wj(a,b)}return t},
nI:function(a){var t,s,r,q,p,o,n,m
t=J.az(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.az(a).$iseA){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a4(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rj(H.kg(a),0,null),u.mangledGlobalNames)},
jD:function(a){return"Instance of '"+H.nI(a)+"'"},
EO:function(){if(!!self.location)return self.location.href
return},
wi:function(a){var t,s,r,q,p
t=J.ci(a)
if(typeof t!=="number")return t.eo()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ET:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.ch)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aT(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bv(q))}return H.wi(t)},
wp:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.ch)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<0)throw H.l(H.bv(q))
if(q>65535)return H.ET(a)}return H.wi(a)},
EU:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eo()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hC:function(a){var t
if(typeof a!=="number")return H.ag(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aT(t,10))>>>0,56320|t&1023)}}throw H.l(P.bE(a,0,1114111,null,null))},
cV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wk:function(a){return a.b?H.cV(a).getUTCFullYear()+0:H.cV(a).getFullYear()+0},
u3:function(a){return a.b?H.cV(a).getUTCMonth()+1:H.cV(a).getMonth()+1},
u2:function(a){return a.b?H.cV(a).getUTCDate()+0:H.cV(a).getDate()+0},
EP:function(a){return a.b?H.cV(a).getUTCHours()+0:H.cV(a).getHours()+0},
ER:function(a){return a.b?H.cV(a).getUTCMinutes()+0:H.cV(a).getMinutes()+0},
ES:function(a){return a.b?H.cV(a).getUTCSeconds()+0:H.cV(a).getSeconds()+0},
EQ:function(a){return a.b?H.cV(a).getUTCMilliseconds()+0:H.cV(a).getMilliseconds()+0},
u4:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
return a[b]},
wo:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
a[b]=c},
ag:function(a){throw H.l(H.bv(a))},
w:function(a,b){if(a==null)J.ci(a)
throw H.l(H.c1(a,b))},
c1:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"index",null)
t=J.ci(a)
if(!(b<0)){if(typeof t!=="number")return H.ag(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jF(b,"index",null)},
GF:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cY(!0,a,"start",null)
if(a<0||a>c)return new P.et(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"end",null)
if(b<a||b>c)return new P.et(a,c,!0,b,"end","Invalid value")}return new P.cY(!0,b,"end",null)},
bv:function(a){return new P.cY(!0,a,null,null)},
ke:function(a){if(typeof a!=="number")throw H.l(H.bv(a))
return a},
uC:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bv(a))
return a},
GA:function(a){if(typeof a!=="string")throw H.l(H.bv(a))
return a},
l:function(a){var t
if(a==null)a=new P.ff()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xA})
t.name=""}else t.toString=H.xA
return t},
xA:function(){return J.cJ(this.dartException)},
ba:function(a){throw H.l(a)},
ch:function(a){throw H.l(new P.bM(a))},
dN:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.p1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wH:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tE:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mA(a,s,t?null:b.receiver)},
cs:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rt(a)
if(a==null)return
if(a instanceof H.h1)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tE(H.z(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return t.$1(new H.jw(p,null))}}if(a instanceof TypeError){o=$.$get$wB()
n=$.$get$wC()
m=$.$get$wD()
l=$.$get$wE()
k=$.$get$wI()
j=$.$get$wJ()
i=$.$get$wG()
$.$get$wF()
h=$.$get$wL()
g=$.$get$wK()
f=o.aE(s)
if(f!=null)return t.$1(H.tE(s,f))
else{f=n.aE(s)
if(f!=null){f.method="call"
return t.$1(H.tE(s,f))}else{f=m.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=k.aE(s)
if(f==null){f=j.aE(s)
if(f==null){f=i.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=h.aE(s)
if(f==null){f=g.aE(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jw(s,f==null?null:f.method))}}return t.$1(new H.p3(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jN()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jN()
return a},
cr:function(a){var t
if(a instanceof H.h1)return a.b
if(a==null)return new H.k8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k8(a,null)},
H0:function(a){if(a==null||typeof a!='object')return J.dz(a)
else return H.ep(a)},
xq:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
GX:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kc(b,new H.re(a))
case 1:return H.kc(b,new H.rf(a,d))
case 2:return H.kc(b,new H.rg(a,d,e))
case 3:return H.kc(b,new H.rh(a,d,e,f))
case 4:return H.kc(b,new H.ri(a,d,e,f,g))}throw H.l(P.lj("Unsupported number of arguments for wrapped closure"))},
dh:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.GX)
a.$identity=t
return t},
ys:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.az(c).$isp){t.$reflectionInfo=c
r=H.F8(t).r}else r=c
q=d?Object.create(new H.of().constructor.prototype):Object.create(new H.fI(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dC
$.dC=J.e6(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.v0(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.GS,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.uY:H.rB
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.v0(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yp:function(a,b,c,d){var t=H.rB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
v0:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yr(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yp(s,!q,t,b)
if(s===0){q=$.dC
$.dC=J.e6(q,1)
o="self"+H.z(q)
q="return function(){var "+o+" = this."
p=$.fJ
if(p==null){p=H.kH("self")
$.fJ=p}return new Function(q+H.z(p)+";return "+o+"."+H.z(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dC
$.dC=J.e6(q,1)
n+=H.z(q)
q="return function("+n+"){return this."
p=$.fJ
if(p==null){p=H.kH("self")
$.fJ=p}return new Function(q+H.z(p)+"."+H.z(t)+"("+n+");}")()},
yq:function(a,b,c,d){var t,s
t=H.rB
s=H.uY
switch(b?-1:a){case 0:throw H.l(new H.nT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yr:function(a,b){var t,s,r,q,p,o,n,m
t=H.yo()
s=$.uX
if(s==null){s=H.kH("receiver")
$.uX=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yq(q,!o,r,b)
if(q===1){s="return function(){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+");"
o=$.dC
$.dC=J.e6(o,1)
return new Function(s+H.z(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+", "+m+");"
o=$.dC
$.dC=J.e6(o,1)
return new Function(s+H.z(o)+"}")()},
uD:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.az(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.ys(a,b,t,!!d,e,f)},
rB:function(a){return a.a},
uY:function(a){return a.c},
yo:function(){var t=$.fJ
if(t==null){t=H.kH("self")
$.fJ=t}return t},
kH:function(a){var t,s,r,q,p
t=new H.fI("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
H3:function(a,b){var t=J.bf(b)
throw H.l(H.v_(H.nI(a),t.L(b,3,t.gm(b))))},
i0:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.az(a)[b]
else t=!0
if(t)return a
H.H3(a,b)},
xp:function(a){var t=J.az(a)
return"$S" in t?t.$S():null},
fz:function(a,b){var t
if(a==null)return!1
t=H.xp(a)
return t==null?!1:H.uG(t,b)},
v_:function(a,b){return new H.kM("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hb:function(a){throw H.l(new P.l3(a))},
rq:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xr:function(a){return u.getIsolateTag(a)},
bW:function(a){return new H.dO(a,null)},
a:function(a,b){a.$ti=b
return a},
kg:function(a){if(a==null)return
return a.$ti},
xs:function(a,b){return H.uI(a["$as"+H.z(b)],H.kg(a))},
av:function(a,b,c){var t=H.xs(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kg(a)
return t==null?null:t[b]},
dy:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rj(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.z(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dy(t,b)
return H.Gk(a,b)}return"unknown-reified-type"},
Gk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dy(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dy(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dy(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.GQ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dy(l[j],b)+(" "+H.z(j))}q+="}"}return"("+q+") => "+t},
rj:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c8("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dy(o,c)}return q?"":"<"+t.C(0)+">"},
kh:function(a){var t,s
if(a instanceof H.eR){t=H.xp(a)
if(t!=null)return H.dy(t,null)}s=J.az(a).constructor.builtin$cls
if(a==null)return s
return s+H.rj(a.$ti,0,null)},
uI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dR:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kg(a)
s=J.az(a)
if(s[b]==null)return!1
return H.xl(H.uI(s[d],t),c)},
Ha:function(a,b,c,d){if(a==null)return a
if(H.dR(a,b,c,d))return a
throw H.l(H.v_(H.nI(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rj(c,0,null),u.mangledGlobalNames)))},
xl:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cX(a[s],b[s]))return!1
return!0},
eJ:function(a,b,c){return a.apply(b,H.xs(b,c))},
GB:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ab"||b.builtin$cls==="cO"
if(b==null)return!0
t=H.kg(a)
a=J.az(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uG(r.apply(a,null),b)}return H.cX(s,b)},
cX:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cO")return!0
if('func' in b)return H.uG(a,b)
if('func' in a)return b.builtin$cls==="Hh"||b.builtin$cls==="ab"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dy(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xl(H.uI(o,t),r)},
xk:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cX(t,p)||H.cX(p,t)))return!1}return!0},
Gr:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cX(p,o)||H.cX(o,p)))return!1}return!0},
uG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cX(t,s)||H.cX(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xk(r,q,!1))return!1
if(!H.xk(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}}return H.Gr(a.named,b.named)},
Ht:function(a){var t=$.uE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Hs:function(a){return H.ep(a)},
Hr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
GY:function(a){var t,s,r,q,p,o
t=$.uE.$1(a)
s=$.r7[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xj.$2(a,t)
if(t!=null){s=$.r7[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uH(r)
$.r7[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rd[t]=r
return r}if(p==="-"){o=H.uH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xu(a,r)
if(p==="*")throw H.l(new P.ez(t))
if(u.leafTags[t]===true){o=H.uH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xu(a,r)},
xu:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rm(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uH:function(a){return J.rm(a,!1,null,!!a.$isaE)},
GZ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rm(t,!1,null,!!t.$isaE)
else return J.rm(t,c,null,null)},
GV:function(){if(!0===$.uF)return
$.uF=!0
H.GW()},
GW:function(){var t,s,r,q,p,o,n,m
$.r7=Object.create(null)
$.rd=Object.create(null)
H.GU()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xv.$1(p)
if(o!=null){n=H.GZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
GU:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fy(C.O,H.fy(C.P,H.fy(C.u,H.fy(C.u,H.fy(C.R,H.fy(C.Q,H.fy(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uE=new H.ra(p)
$.xj=new H.rb(o)
$.xv=new H.rc(n)},
fy:function(a,b){return a(b)||b},
tz:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
H8:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xz:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hj){q=b.gdu()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.bv(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Gp:function(a){return a},
H9:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aU(0,a),t=new H.jX(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.z(H.xa().$1(C.c.L(a,s,o)))+H.z(c.$1(q))
s=o+p[0].length}t=r+H.z(H.xa().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
kR:function kR(){},
kS:function kS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nN:function nN(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
p1:function p1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jw:function jw(a,b){this.a=a
this.b=b},
mA:function mA(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
rt:function rt(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
re:function re(a){this.a=a},
rf:function rf(a,b){this.a=a
this.b=b},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
rh:function rh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ri:function ri(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eR:function eR(){},
oK:function oK(){},
of:function of(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kM:function kM(a){this.a=a},
nT:function nT(a){this.a=a},
dO:function dO(a,b){this.a=a
this.b=b},
u:function u(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mz:function mz(a){this.a=a},
my:function my(a){this.a=a},
mK:function mK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mL:function mL(a,$ti){this.a=a
this.$ti=$ti},
mM:function mM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ra:function ra(a){this.a=a},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a,b){this.a=a
this.b=b},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cx:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dA("Invalid length "+H.z(a)))
return a},
x7:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dA("Invalid view offsetInBytes "+H.z(b)))},
x9:function(a){return a},
EM:function(a){return new Int8Array(H.x9(a))},
cN:function(a,b,c){H.x7(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Ge:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aB()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.GF(a,b,c))
return b},
fd:function fd(){},
eo:function eo(){},
na:function na(){},
jt:function jt(){},
hv:function hv(){},
hx:function hx(){},
hz:function hz(){},
hw:function hw(){},
hy:function hy(){},
hA:function hA(){},
nb:function nb(){},
nc:function nc(){},
nd:function nd(){},
ne:function ne(){},
nf:function nf(){},
ng:function ng(){},
nh:function nh(){},
ju:function ju(){},
fe:function fe(){},
GQ:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
H2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
az:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jo.prototype
return J.jn.prototype}if(typeof a=="string")return J.ej.prototype
if(a==null)return J.mw.prototype
if(typeof a=="boolean")return J.mv.prototype
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.r8(a)},
rm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
r8:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uF==null){H.GV()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.ez("Return interceptor for "+H.z(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tD()]
if(p!=null)return p
p=H.GY(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tD(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
w8:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Es:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a4(a,b)
if(s!==32&&s!==13&&!J.w8(s))break;++b}return b},
ty:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Y(a,t)
if(s!==32&&s!==13&&!J.w8(s))break}return b},
bf:function(a){if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.r8(a)},
di:function(a){if(a==null)return a
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.r8(a)},
dx:function(a){if(typeof a=="number")return J.fb.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
kf:function(a){if(typeof a=="number")return J.fb.prototype
if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
d7:function(a){if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
bo:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.r8(a)},
e6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kf(a).U(a,b)},
bb:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.az(a).S(a,b)},
uJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dx(a).as(a,b)},
ct:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dx(a).aB(a,b)},
e7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dx(a).a3(a,b)},
uK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kf(a).ar(a,b)},
i1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xt(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).n(a,b)},
kk:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xt(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.di(a).i(a,b,c)},
xB:function(a,b){return J.di(a).h(a,b)},
xC:function(a,b,c,d){return J.bo(a).fH(a,b,c,d)},
xD:function(a,b){return J.d7(a).aU(a,b)},
dS:function(a,b){return J.bo(a).fJ(a,b)},
uL:function(a){return J.bo(a).fL(a)},
xE:function(a,b,c){return J.dx(a).ab(a,b,c)},
xF:function(a,b){return J.kf(a).ay(a,b)},
xG:function(a,b){return J.bo(a).az(a,b)},
xH:function(a,b){return J.bf(a).ai(a,b)},
kl:function(a,b,c){return J.bf(a).dR(a,b,c)},
xI:function(a,b){return J.bo(a).fU(a,b)},
uM:function(a,b){return J.di(a).T(a,b)},
xJ:function(a,b,c,d){return J.di(a).bV(a,b,c,d)},
km:function(a){return J.dx(a).aj(a)},
xK:function(a,b){return J.di(a).a8(a,b)},
uN:function(a){return J.bo(a).gdP(a)},
xL:function(a){return J.bo(a).gbo(a)},
fB:function(a){return J.bo(a).gaq(a)},
xM:function(a){return J.bo(a).gcC(a)},
dz:function(a){return J.az(a).ga5(a)},
ru:function(a){return J.bf(a).gW(a)},
uO:function(a){return J.bo(a).gX(a)},
cI:function(a){return J.di(a).gV(a)},
ci:function(a){return J.bf(a).gm(a)},
rv:function(a){return J.bo(a).gJ(a)},
xN:function(a){return J.bo(a).ghG(a)},
xO:function(a){return J.bo(a).ghH(a)},
uP:function(a){return J.az(a).ga9(a)},
rw:function(a){return J.bo(a).gaI(a)},
xP:function(a,b){return J.bo(a).bD(a,b)},
xQ:function(a,b){return J.bf(a).be(a,b)},
uQ:function(a,b,c,d,e){return J.bo(a).br(a,b,c,d,e)},
uR:function(a,b){return J.di(a).av(a,b)},
xR:function(a,b,c){return J.d7(a).e6(a,b,c)},
uS:function(a,b){return J.bo(a).ht(a,b)},
xS:function(a,b,c,d){return J.bo(a).hD(a,b,c,d)},
kn:function(a,b,c){return J.d7(a).cO(a,b,c)},
xT:function(a,b,c){return J.d7(a).hF(a,b,c)},
fC:function(a,b){return J.bo(a).b5(a,b)},
uT:function(a,b){return J.bo(a).sbo(a,b)},
xU:function(a,b){return J.di(a).cY(a,b)},
eK:function(a,b){return J.d7(a).eB(a,b)},
xV:function(a,b){return J.d7(a).ag(a,b)},
uU:function(a){return J.dx(a).l(a)},
xW:function(a){return J.di(a).ao(a)},
xX:function(a,b){return J.dx(a).bA(a,b)},
cJ:function(a){return J.az(a).C(a)},
xY:function(a){return J.d7(a).hL(a)},
rx:function(a){return J.d7(a).bh(a)},
xZ:function(a){return J.d7(a).eh(a)},
h:function h(){},
mv:function mv(){},
mw:function mw(){},
hk:function hk(){},
nD:function nD(){},
eA:function eA(){},
ek:function ek(){},
ei:function ei($ti){this.$ti=$ti},
tB:function tB($ti){this.$ti=$ti},
i2:function i2(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fb:function fb(){},
jo:function jo(){},
jn:function jn(){},
ej:function ej(){}},P={
FO:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Gs()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dh(new P.pB(t),1)).observe(s,{childList:true})
return new P.pA(t,s,r)}else if(self.setImmediate!=null)return P.Gt()
return P.Gu()},
FP:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dh(new P.pC(a),0))},
FQ:function(a){++u.globalState.f.b
self.setImmediate(H.dh(new P.pD(a),0))},
FR:function(a){P.un(C.p,a)},
bt:function(a,b){P.x5(null,a)
return b.gh7()},
cw:function(a,b){P.x5(a,b)},
bs:function(a,b){J.xG(b,a)},
br:function(a,b){b.cw(H.cs(a),H.cr(a))},
x5:function(a,b){var t,s,r,q
t=new P.qR(b)
s=new P.qS(b)
r=J.az(a)
if(!!r.$isbi)a.cp(t,s)
else if(!!r.$isck)a.c0(t,s)
else{q=new P.bi(0,$.ao,null,[null])
q.a=4
q.c=a
q.cp(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ao.toString
return new P.r1(t)},
xb:function(a,b){if(H.fz(a,{func:1,args:[P.cO,P.cO]})){b.toString
return a}else{b.toString
return a}},
z9:function(a,b){var t=new P.bi(0,$.ao,null,[b])
P.wA(C.p,new P.r2(a,t))
return t},
vo:function(a,b,c){var t
if(a==null)a=new P.ff()
t=$.ao
if(t!==C.e)t.toString
t=new P.bi(0,t,null,[c])
t.d8(a,b)
return t},
za:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bi(0,$.ao,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lV(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.ch)(a),++l){q=a[l]
p=t.b
q.c0(new P.lU(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bi(0,$.ao,null,[null])
m.d7(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cs(j)
n=H.cr(j)
if(t.b===0||!1)return P.vo(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.ka(new P.bi(0,$.ao,null,[a]),[a])},
x8:function(a,b,c){$.ao.toString
a.al(b,c)},
FU:function(a,b){var t=new P.bi(0,$.ao,null,[b])
t.a=4
t.c=a
return t},
wY:function(a,b){var t,s,r
b.a=1
try{a.c0(new P.q0(b),new P.q1(b))}catch(r){t=H.cs(r)
s=H.cr(r)
P.xw(new P.q2(b,t,s))}},
q_:function(a,b){var t,s,r
for(;a.gfl();)a=a.c
t=a.gcg()
s=b.c
if(t){b.c=null
r=b.bM(s)
b.a=a.a
b.c=a.c
P.fs(b,r)}else{b.a=2
b.c=a
a.dA(s)}},
fs:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fB(p)
n=p.gaH()
s.toString
P.kd(null,null,s,o,n)}return}for(;b.gck()!=null;b=m){m=b.a
b.a=null
P.fs(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdY()||b.gdX()){k=b.gfF()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fB(p)
n=p.gaH()
s.toString
P.kd(null,null,s,o,n)
return}j=$.ao
if(j==null?k!=null:j!==k)$.ao=k
else j=null
if(b.gdX())new P.q7(t,r,q,b).$0()
else if(s){if(b.gdY())new P.q6(r,b,l).$0()}else if(b.ghe())new P.q5(t,r,b).$0()
if(j!=null)$.ao=j
s=r.b
if(!!J.az(s).$isck){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bM(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q_(s,i)
return}}i=b.b
b=i.bL()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Gm:function(){var t,s
for(;t=$.fw,t!=null;){$.hZ=null
s=t.b
$.fw=s
if(s==null)$.hY=null
t.a.$0()}},
Go:function(){$.uA=!0
try{P.Gm()}finally{$.hZ=null
$.uA=!1
if($.fw!=null)$.$get$uw().$1(P.xm())}},
xi:function(a){var t=new P.jY(a,null)
if($.fw==null){$.hY=t
$.fw=t
if(!$.uA)$.$get$uw().$1(P.xm())}else{$.hY.b=t
$.hY=t}},
Gn:function(a){var t,s,r
t=$.fw
if(t==null){P.xi(a)
$.hZ=$.hY
return}s=new P.jY(a,null)
r=$.hZ
if(r==null){s.b=t
$.hZ=s
$.fw=s}else{s.b=r.b
r.b=s
$.hZ=s
if(s.b==null)$.hY=s}},
xw:function(a){var t=$.ao
if(C.e===t){P.fx(null,null,C.e,a)
return}t.toString
P.fx(null,null,t,t.cu(a,!0))},
Hn:function(a,b){return new P.qB(null,a,!1,[b])},
xf:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cs(o)
s=H.cr(o)
$.ao.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fB(r)
q=n
p=r.gaH()
c.$2(q,p)}}},
Gd:function(a,b,c,d){var t=a.bT(0)
if(!!J.az(t).$isck&&t!==$.$get$hb())t.c2(new P.qU(b,c,d))
else b.al(c,d)},
x6:function(a,b){return new P.qT(a,b)},
uz:function(a,b,c){var t=a.bT(0)
if(!!J.az(t).$isck&&t!==$.$get$hb())t.c2(new P.qV(b,c))
else b.aD(c)},
FT:function(a,b,c,d,e,f,g){var t,s
t=$.ao
s=e?1:0
s=new P.hS(a,null,null,null,null,t,s,null,null,[f,g])
s.eQ(b,c,d,e,g)
s.eT(a,b,c,d,e,f,g)
return s},
Gc:function(a,b,c){$.ao.toString
a.bF(b,c)},
wA:function(a,b){var t=$.ao
if(t===C.e){t.toString
return P.un(a,b)}return P.un(a,t.cu(b,!0))},
un:function(a,b){var t=C.a.am(a.a,1000)
return H.FJ(t<0?0:t,b)},
kd:function(a,b,c,d,e){var t={}
t.a=d
P.Gn(new P.r0(t,e))},
xc:function(a,b,c,d){var t,s
s=$.ao
if(s===c)return d.$0()
$.ao=c
t=s
try{s=d.$0()
return s}finally{$.ao=t}},
xe:function(a,b,c,d,e){var t,s
s=$.ao
if(s===c)return d.$1(e)
$.ao=c
t=s
try{s=d.$1(e)
return s}finally{$.ao=t}},
xd:function(a,b,c,d,e,f){var t,s
s=$.ao
if(s===c)return d.$2(e,f)
$.ao=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ao=t}},
fx:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cu(d,!(!t||!1))
P.xi(d)},
pB:function pB(a){this.a=a},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a){this.a=a},
pD:function pD(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
r1:function r1(a){this.a=a},
ck:function ck(){},
r2:function r2(a,b){this.a=a
this.b=b},
lV:function lV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lU:function lU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eS:function eS(){},
jZ:function jZ(){},
dQ:function dQ(a,$ti){this.a=a
this.$ti=$ti},
ka:function ka(a,$ti){this.a=a
this.$ti=$ti},
k2:function k2(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bi:function bi(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pX:function pX(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q0:function q0(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q8:function q8(a){this.a=a},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
df:function df(){},
om:function om(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ok:function ok(a,b){this.a=a
this.b=b},
ol:function ol(a,b){this.a=a
this.b=b},
on:function on(a){this.a=a},
os:function os(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oq:function oq(a,b){this.a=a
this.b=b},
or:function or(){},
ot:function ot(a){this.a=a},
ow:function ow(a){this.a=a},
ox:function ox(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
ov:function ov(a){this.a=a},
oy:function oy(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oo:function oo(a,b,c){this.a=a
this.b=b
this.c=c},
op:function op(a){this.a=a},
oj:function oj(){},
dg:function dg(){},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a){this.a=a},
k0:function k0(){},
pL:function pL(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pN:function pN(b,c,a){this.b=b
this.c=c
this.a=a},
pM:function pM(){},
qn:function qn(){},
qo:function qo(a,b){this.a=a
this.b=b},
qA:function qA(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qB:function qB(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ql:function ql(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eN:function eN(a,b){this.a=a
this.b=b},
qQ:function qQ(){},
r0:function r0(a,b){this.a=a
this.b=b},
qr:function qr(){},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(a,b){this.a=a
this.b=b},
qu:function qu(a,b){this.a=a
this.b=b},
FV:function(a,b){var t=a[b]
return t===a?null:t},
uy:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ux:function(){var t=Object.create(null)
P.uy(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
w9:function(a,b,c){return H.xq(a,new H.u(0,null,null,null,null,null,0,[b,c]))},
cC:function(a,b){return new H.u(0,null,null,null,null,null,0,[a,b])},
mN:function(){return new H.u(0,null,null,null,null,null,0,[null,null])},
hn:function(a){return H.xq(a,new H.u(0,null,null,null,null,null,0,[null,null]))},
hU:function(a,b){return new P.k5(0,null,null,null,null,null,0,[a,b])},
FW:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
A:function(a,b,c,d,e){return new P.qa(0,null,null,null,null,[d,e])},
tv:function(a,b,c){var t,s
if(P.uB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i_()
s.push(a)
try{P.Gl(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wx(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jk:function(a,b,c){var t,s,r
if(P.uB(a))return b+"..."+c
t=new P.c8(b)
s=$.$get$i_()
s.push(a)
try{r=t
r.N=P.wx(r.gN(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uB:function(a){var t,s
for(t=0;s=$.$get$i_(),t<s.length;++t)if(a===s[t])return!0
return!1},
Gl:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cI(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.z(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.I()){if(r<=4){b.push(H.z(n))
return}p=H.z(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.I();n=m,m=l){l=t.gO();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.z(n)
p=H.z(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a4:function(a,b,c,d){return new P.k4(0,null,null,null,null,null,0,[d])},
tH:function(a,b){var t,s
t=P.a4(null,null,null,b)
for(s=J.cI(a);s.I();)t.h(0,s.gO())
return t},
we:function(a){var t,s,r
t={}
if(P.uB(a))return"{...}"
s=new P.c8("")
try{$.$get$i_().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a8(0,new P.n1(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i_()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
tI:function(a,b){var t=new P.mO(null,0,0,0,[b])
t.eL(a,b)
return t},
qa:function qa(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qd:function qd(a){this.a=a},
qb:function qb(a,$ti){this.a=a
this.$ti=$ti},
qc:function qc(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k5:function k5(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k4:function k4(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qe:function qe(){},
fa:function fa(){},
hi:function hi(){},
jp:function jp(){},
hB:function hB(){},
b3:function b3(){},
qI:function qI(){},
n0:function n0(){},
hL:function hL(a,$ti){this.a=a
this.$ti=$ti},
n1:function n1(a,b){this.a=a
this.b=b},
mO:function mO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qi:function qi(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
o4:function o4(){},
o3:function o3(){},
uW:function(a,b,c,d,e,f){if(C.d.bE(f,4)!==0)throw H.l(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.z(f),a,c))
if(d+e!==f)throw H.l(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
fN:function fN(){},
fP:function fP(){},
le:function le(){},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
qK:function qK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qM:function qM(a){this.a=a},
qL:function qL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FH:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bE(b,0,J.ci(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bE(c,b,J.ci(a),null,null))
s=J.cI(a)
for(r=0;r<b;++r)if(!s.I())throw H.l(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.I();)q.push(s.gO())
else for(r=b;r<c;++r){if(!s.I())throw H.l(P.bE(c,b,r,null,null))
q.push(s.gO())}return H.wp(q)},
wx:function(a,b,c){var t=J.cI(b)
if(!t.I())return a
if(c.length===0){do a+=H.z(t.gO())
while(t.I())}else{a+=H.z(t.gO())
for(;t.I();)a=a+c+H.z(t.gO())}return a},
yv:function(a,b){return J.xF(a,b)},
yy:function(a,b){var t=new P.dW(a,b)
t.d3(a,b)
return t},
yz:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.z(t)
if(t>=10)return s+"00"+H.z(t)
return s+"000"+H.z(t)},
yA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ia:function(a){if(a>=10)return""+a
return"0"+a},
vc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.yS(a)},
yS:function(a){var t=J.az(a)
if(!!t.$iseR)return t.C(a)
return H.jD(a)},
dA:function(a){return new P.cY(!1,null,null,a)},
dT:function(a,b,c){return new P.cY(!0,a,b,c)},
y_:function(a){return new P.cY(!1,null,a,"Must not be null")},
wt:function(a){return new P.et(null,null,!1,null,null,a)},
jF:function(a,b,c){return new P.et(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.et(b,c,!0,a,d,"Invalid value")},
de:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.ag(a)
if(!(0>a)){if(typeof c!=="number")return H.ag(c)
t=a>c}else t=!0
if(t)throw H.l(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.ag(b)
if(!(a>b)){if(typeof c!=="number")return H.ag(c)
t=b>c}else t=!0
if(t)throw H.l(P.bE(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.ci(b)
return new P.md(b,t,!0,a,c,"Index out of range")},
lj:function(a){return new P.pW(a)},
dd:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cI(a);s.I();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
Et:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
j:function(a,b){var t=P.dd(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fA:function(a){H.H2(H.z(a))},
dI:function(a,b,c){return new H.hj(a,H.tz(a,!1,!0,!1),null,null)},
oE:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.de(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a3()
s=c<t}else s=!0
return H.wp(s?C.b.c4(a,b,c):a)}if(!!J.az(a).$isfe)return H.EU(a,b,P.de(b,c,a.length,null,null,null))
return P.FH(a,b,c)},
wN:function(){var t=H.EO()
if(t!=null)return P.wO(t,0,null)
throw H.l(new P.V("'Uri.base' is not supported"))},
wO:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a4(a,b+4)^58)*3|C.c.a4(a,b)^100|C.c.a4(a,b+1)^97|C.c.a4(a,b+2)^116|C.c.a4(a,b+3)^97)>>>0
if(s===0)return P.wM(b>0||c<c?C.c.L(a,b,c):a,5,null).gej()
else if(s===32)return P.wM(C.c.L(a,t,c),0,null).gej()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xg(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.as()
if(p>=b)if(P.xg(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.U()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a3()
if(typeof l!=="number")return H.ag(l)
if(k<l)l=k
if(typeof m!=="number")return m.a3()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a3()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a3()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aC(a,"..",m)))h=l>m+2&&C.c.aC(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aC(a,"file",b)){if(o<=b){if(!C.c.aC(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.L(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aA(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aC(a,"http",b)){if(q&&n+3===m&&C.c.aC(a,"80",n+1))if(b===0&&!0){a=C.c.aA(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aC(a,"https",b)){if(q&&n+4===m&&C.c.aC(a,"443",n+1))if(b===0&&!0){a=C.c.aA(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.c.L(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qz(a,p,o,n,m,l,k,i,null)}return P.FZ(a,b,c,p,o,n,m,l,k,i)},
wQ:function(a,b){return C.b.h4(a.split("&"),P.mN(),new P.p9(b))},
FK:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.p6(a)
s=H.cx(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Y(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fh(C.c.L(a,p,q),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fh(C.c.L(a,p,c),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
wP:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.p7(a)
s=new P.p8(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Y(a,q)
if(m===58){if(q===b){++q
if(C.c.Y(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bb(C.b.gb7(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.FK(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.at()
h=j[1]
if(typeof h!=="number")return H.ag(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.at()
i=j[3]
if(typeof i!=="number")return H.ag(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.az(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cX()
i=C.d.aT(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
FZ:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.G6(a,b,d)
else{if(d===b)P.hW(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.G7(a,t,e-1):""
r=P.G2(a,e,f,!1)
if(typeof f!=="number")return f.U()
q=f+1
if(typeof g!=="number")return H.ag(g)
p=q<g?P.G4(H.fh(C.c.L(a,q,g),null,new P.r3(a,f)),j):null}else{s=""
r=null
p=null}o=P.G3(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a3()
n=h<i?P.G5(a,h+1,i,null):null
return new P.kb(j,s,r,p,o,n,i<c?P.G1(a,i+1,c):null,null,null,null,null,null)},
x_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hW:function(a,b,c){throw H.l(new P.bJ(c,a,b))},
G4:function(a,b){if(a!=null&&J.bb(a,P.x_(b)))return
return a},
G2:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.Y(a,t)!==93)P.hW(a,b,"Missing end `]` to match `[` in host")
P.wP(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.ag(c)
s=b
for(;s<c;++s)if(C.c.Y(a,s)===58){P.wP(a,b,c)
return"["+a+"]"}return P.G9(a,b,c)},
G9:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.ag(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Y(a,t)
if(p===37){o=P.x4(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c8("")
m=C.c.L(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c8("")
if(s<t){r.N+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.hW(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Y(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c8("")
m=C.c.L(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.x0(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
G6:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.x2(C.c.a4(a,b)))P.hW(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a4(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hW(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.G_(s?a.toLowerCase():a)},
G_:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
G7:function(a,b,c){var t=P.fv(a,b,c,C.Y,!1)
return t==null?C.c.L(a,b,c):t},
G3:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fv(a,b,c,C.D,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.G8(r,e,f)},
G8:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.Ga(a,!t||c)
return P.Gb(a)},
G5:function(a,b,c,d){var t=P.fv(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
G1:function(a,b,c){var t=P.fv(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
x4:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Y(a,b+1)
r=C.c.Y(a,t)
q=H.r9(s)
p=H.r9(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aT(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hC(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
x0:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a4("0123456789ABCDEF",a>>>4)
t[2]=C.c.a4("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fB(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a4("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a4("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.oE(t,0,null)},
fv:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d7(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a3()
if(typeof c!=="number")return H.ag(c)
if(!(r<c))break
c$0:{o=s.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.x4(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hW(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.x0(o)}}if(p==null)p=new P.c8("")
p.N+=C.c.L(a,q,r)
p.N+=H.z(m)
if(typeof l!=="number")return H.ag(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a3()
if(q<c)p.N+=s.L(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
x3:function(a){if(C.c.af(a,"."))return!0
return C.c.be(a,"/.")!==-1},
Gb:function(a){var t,s,r,q,p,o,n
if(!P.x3(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.ch)(s),++p){o=s[p]
if(J.bb(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bf(t,"/")},
Ga:function(a,b){var t,s,r,q,p,o
if(!P.x3(a))return!b?P.x1(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.ch)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bb(C.b.gb7(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.ru(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bb(C.b.gb7(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.x1(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bf(t,"/")},
x1:function(a){var t,s,r,q
t=J.bf(a)
s=t.gm(a)
if(typeof s!=="number")return s.as()
if(s>=2&&P.x2(t.Y(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.ag(s)
if(!(r<s))break
q=t.Y(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
G0:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Y(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dA("Invalid URL encoding"))}}return t},
qJ:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.ag(c)
t=J.d7(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Y(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.kO(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Y(a,s)
if(q>127)throw H.l(P.dA("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dA("Truncated URI"))
o.push(P.G0(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pd(!1).fS(o)},
x2:function(a){var t=a|32
return 97<=t&&t<=122},
wM:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bf(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ag(o)
if(!(r<o))break
c$0:{p=s.Y(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ag(o)
if(!(r<o))break
p=s.Y(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb7(t)
if(p!==44||r!==m+7||!s.aC(a,"base64",m+1))throw H.l(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hq(0,a,o,s.gm(a))
else{l=P.fv(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aA(a,o,s.gm(a),l)}return new P.p5(a,t,c)},
Gi:function(){var t,s,r,q,p
t=P.Et(22,new P.qY(),!0,P.d5)
s=new P.qX(t)
r=new P.qZ()
q=new P.r_()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
xg:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xh()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a4(a,s)^96
p=J.i1(r,q>95?31:q)
if(typeof p!=="number")return p.aG()
d=p&31
o=C.d.aT(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
d6:function d6(){},
bF:function bF(){},
dW:function dW(a,b){this.a=a
this.b=b},
U:function U(){},
dD:function dD(a){this.a=a},
lb:function lb(){},
lc:function lc(){},
eb:function eb(){},
ff:function ff(){},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
md:function md(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
ez:function ez(a){this.a=a},
dM:function dM(a){this.a=a},
bM:function bM(a){this.a=a},
nq:function nq(){},
jN:function jN(){},
l3:function l3(a){this.a=a},
pW:function pW(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,bI,$ti){this.a=a
this.bI=bI
this.$ti=$ti},
D:function D(){},
n:function n(){},
jm:function jm(){},
p:function p(){},
bl:function bl(){},
cO:function cO(){},
dj:function dj(){},
ab:function ab(){},
ds:function ds(){},
eu:function eu(){},
dL:function dL(){},
C:function C(){},
c8:function c8(N){this.N=N},
eB:function eB(){},
p9:function p9(a){this.a=a},
p6:function p6(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
r3:function r3(a,b){this.a=a
this.b=b},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(){},
qX:function qX(a){this.a=a},
qZ:function qZ(){},
r_:function r_(){},
qz:function qz(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pK:function pK(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
xn:function(a){var t,s,r,q,p
if(a==null)return
t=P.mN()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.ch)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GC:function(a){var t,s
t=new P.bi(0,$.ao,null,[null])
s=new P.dQ(t,[null])
a.then(H.dh(new P.r5(s),1))["catch"](H.dh(new P.r6(s),1))
return t},
rH:function(){var t=$.v9
if(t==null){t=J.kl(window.navigator.userAgent,"Opera",0)
$.v9=t}return t},
vb:function(){var t=$.va
if(t==null){t=P.rH()!==!0&&J.kl(window.navigator.userAgent,"WebKit",0)
$.va=t}return t},
yB:function(){var t,s
t=$.v6
if(t!=null)return t
s=$.v7
if(s==null){s=J.kl(window.navigator.userAgent,"Firefox",0)
$.v7=s}if(s)t="-moz-"
else{s=$.v8
if(s==null){s=P.rH()!==!0&&J.kl(window.navigator.userAgent,"Trident/",0)
$.v8=s}if(s)t="-ms-"
else t=P.rH()===!0?"-o-":"-webkit-"}$.v6=t
return t},
qE:function qE(){},
qG:function qG(a,b){this.a=a
this.b=b},
px:function px(){},
py:function py(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
kU:function kU(){},
kV:function kV(a){this.a=a},
Gg:function(a){var t,s,r
t=new P.bi(0,$.ao,null,[null])
s=new P.ka(t,[null])
a.toString
r=W.S
W.eG(a,"success",new P.qW(a,s),!1,r)
W.eG(a,"error",s.gdQ(),!1,r)
return t},
l5:function l5(){},
qW:function qW(a,b){this.a=a
this.b=b},
mc:function mc(){},
nn:function nn(){},
hE:function hE(){},
p_:function p_(){},
FY:function(a){var t=new P.qp(0,0)
t.eU(a)
return t},
qg:function qg(){},
qp:function qp(a,b){this.a=a
this.b=b},
qq:function qq(){},
bS:function bS(){},
ko:function ko(){},
e8:function e8(){},
ll:function ll(){},
lm:function lm(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
lq:function lq(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lO:function lO(){},
cm:function cm(){},
ma:function ma(){},
d2:function d2(){},
mG:function mG(){},
iI:function iI(){},
j1:function j1(){},
n2:function n2(){},
n3:function n3(){},
d3:function d3(){},
nk:function nk(){},
iJ:function iJ(){},
j2:function j2(){},
nA:function nA(){},
nF:function nF(){},
o_:function o_(){},
oD:function oD(){},
iK:function iK(){},
j3:function j3(){},
kv:function kv(a){this.a=a},
c9:function c9(){},
oG:function oG(){},
oI:function oI(){},
ey:function ey(){},
oQ:function oQ(){},
d4:function d4(){},
p0:function p0(){},
iL:function iL(){},
j4:function j4(){},
pb:function pb(){},
pf:function pf(){},
pg:function pg(){},
hT:function hT(){},
qv:function qv(){},
qw:function qw(){},
qx:function qx(){},
bg:function bg(){},
d5:function d5(){},
fG:function fG(){},
eO:function eO(){},
fH:function fH(){},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
bC:function bC(){},
dU:function dU(){},
kT:function kT(){},
kq:function kq(){},
nP:function nP(){},
qN:function qN(){},
jM:function jM(){},
iM:function iM(){},
j5:function j5(){}},W={
ym:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yn:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yx:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
FS:function(a){var t=new W.pI(a,null)
t.eR(a)
return t},
vp:function(a,b,c){return W.vq(a,null,null,b,null,null,null,c).b0(new W.m4())},
vq:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.dZ
s=new P.bi(0,$.ao,null,[t])
r=new P.dQ(s,[t])
q=new XMLHttpRequest()
C.L.hs(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Hm
W.eG(q,"load",new W.m5(r,q),!1,t)
W.eG(q,"error",r.gdQ(),!1,t)
q.send()
return s},
vr:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
wZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eG:function(a,b,c,d,e){var t=W.Gq(new W.pV(c))
t=new W.pU(0,a,b,t,!1,[e])
t.eS(a,b,c,!1,e)
return t},
Gh:function(a){var t
if(!!J.az(a).$isea)return a
t=new P.jW([],[],!1)
t.c=!0
return t.b2(a)},
Gq:function(a){var t=$.ao
if(t===C.e)return a
return t.fN(a,!0)},
am:function am(){},
eL:function eL(){},
kr:function kr(){},
eP:function eP(){},
cK:function cK(){},
kz:function kz(){},
fW:function fW(){},
fZ:function fZ(){},
kD:function kD(){},
eQ:function eQ(){},
kG:function kG(){},
fM:function fM(){},
e9:function e9(){},
kQ:function kQ(){},
i6:function i6(){},
fQ:function fQ(){},
kW:function kW(){},
kX:function kX(){},
fR:function fR(){},
fS:function fS(){},
kY:function kY(){},
bI:function bI(){},
eT:function eT(){},
iA:function iA(){},
pI:function pI(a,b){this.a=a
this.b=b},
jx:function jx(){},
pJ:function pJ(){},
i8:function i8(){},
kZ:function kZ(){},
l_:function l_(){},
l4:function l4(){},
eU:function eU(){},
i9:function i9(){},
ea:function ea(){},
ib:function ib(){},
ic:function ic(){},
l7:function l7(){},
id:function id(){},
ie:function ie(){},
iB:function iB(){},
iV:function iV(){},
ig:function ig(){},
ih:function ih(){},
k1:function k1(a,$ti){this.a=a
this.$ti=$ti},
dm:function dm(){},
ld:function ld(){},
fU:function fU(){},
fV:function fV(){},
S:function S(){},
aF:function aF(){},
lK:function lK(){},
cb:function cb(){},
f1:function f1(){},
iC:function iC(){},
iW:function iW(){},
lL:function lL(){},
lM:function lM(){},
lN:function lN(){},
lQ:function lQ(){},
lR:function lR(){},
iw:function iw(){},
cl:function cl(){},
m1:function m1(){},
f3:function f3(){},
iD:function iD(){},
iX:function iX(){},
iy:function iy(){},
dZ:function dZ(){},
m4:function m4(){},
m5:function m5(a,b){this.a=a
this.b=b},
hc:function hc(){},
m9:function m9(){},
hd:function hd(){},
f5:function f5(){},
me:function me(){},
mD:function mD(){},
hl:function hl(){},
hm:function hm(){},
mV:function mV(){},
n_:function n_(){},
ht:function ht(){},
jr:function jr(){},
n4:function n4(){},
n5:function n5(){},
hu:function hu(){},
cn:function cn(){},
js:function js(){},
iN:function iN(){},
j6:function j6(){},
ni:function ni(){},
nj:function nj(){},
ay:function ay(){},
jv:function jv(){},
iO:function iO(){},
j7:function j7(){},
nm:function nm(){},
nr:function nr(){},
nv:function nv(){},
nx:function nx(){},
e0:function e0(){},
nC:function nC(){},
cd:function cd(){},
jC:function jC(){},
iP:function iP(){},
j8:function j8(){},
nH:function nH(){},
jG:function jG(){},
fl:function fl(){},
jI:function jI(){},
o2:function o2(){},
o5:function o5(){},
o6:function o6(){},
o7:function o7(){},
co:function co(){},
jK:function jK(){},
fX:function fX(){},
h_:function h_(){},
hF:function hF(){},
cp:function cp(){},
jL:function jL(){},
iQ:function iQ(){},
j9:function j9(){},
fm:function fm(){},
ob:function ob(){},
cf:function cf(){},
oc:function oc(){},
od:function od(){},
oi:function oi(){},
cg:function cg(){},
e3:function e3(){},
oM:function oM(){},
oO:function oO(){},
cQ:function cQ(){},
cG:function cG(){},
oR:function oR(){},
iR:function iR(){},
ja:function ja(){},
oS:function oS(){},
fY:function fY(){},
h0:function h0(){},
oW:function oW(){},
cq:function cq(){},
jP:function jP(){},
iS:function iS(){},
jb:function jb(){},
fp:function fp(){},
jQ:function jQ(){},
e4:function e4(){},
pa:function pa(){},
pe:function pe(){},
fq:function fq(){},
jR:function jR(){},
pj:function pj(){},
jT:function jT(){},
pq:function pq(){},
eD:function eD(){},
fr:function fr(){},
pH:function pH(){},
hP:function hP(){},
iT:function iT(){},
jc:function jc(){},
k_:function k_(){},
iU:function iU(){},
jd:function jd(){},
pO:function pO(){},
pP:function pP(){},
k3:function k3(){},
iE:function iE(){},
iY:function iY(){},
q9:function q9(){},
hV:function hV(){},
iF:function iF(){},
iZ:function iZ(){},
qy:function qy(){},
k7:function k7(){},
iG:function iG(){},
j_:function j_(){},
k9:function k9(){},
iH:function iH(){},
j0:function j0(){},
qO:function qO(){},
qP:function qP(){},
pQ:function pQ(a){this.a=a},
pT:function pT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hQ:function hQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pU:function pU(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pV:function pV(a){this.a=a},
bx:function bx(){},
lP:function lP(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qH:function qH(){}},T={
t5:function(a,b,c,d){var t
H.Ha(a,"$isp",[P.D],"$asp")
t=new T.he(a,null,d,b,null)
t.eK(a,b,c,d)
return t},
wh:function(a,b){return new T.ns(0,a,new Uint8Array(H.cx(b==null?32768:b)))},
FM:function(a){var t=new T.pt(-1,0,0,0,0,null,null,"",[])
t.eO(a)
return t},
FN:function(a,b){var t=new T.pu(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eP(a,b)
return t},
f4:function(a){var t=new T.m6(null,0,2147483647)
t.eJ(a)
return t},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy},
d8:function d8(a){this.a=a},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pu:function pu(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db},
pv:function pv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy},
ps:function ps(a){this.a=a},
m6:function m6(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kF:function kF(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kI:function kI(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
l6:function l6(){},
lZ:function lZ(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
FA:function(){var t=$.$get$jH()
t=t.gb9(t)
return new H.e5(t,new T.nU(),[H.av(t,"n",0)])},
Fa:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.fk("Glitch",0.01,0.01,0.01,s,0.5,a,new H.u(0,null,null,null,null,null,0,[X.F,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.H(null,null,A.a1),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fK]),1)
t.a0(a,b,c,d,e)
return t},
nU:function nU(){},
fk:function fk(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
c0:function c0(a,b){this.a=a
this.b=b},
yF:function(a,b,c,d){var t,s,r,q
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.b1(b)},
yE:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.d9(null,0)
r.a=J.dS(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yD:function(a,b,c,d){var t,s,r,q,p
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.b1(b)},
yC:function(a,b,c,d){var t,s,r,q,p,o
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.d9(null,0)
p.a=J.dS(a,b)
for(o=0;o<c;++o){r=p.a6(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kp:function kp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bG:function bG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i5:function i5(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m3:function m3(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mE:function mE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},mY:function mY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o1:function o1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},fg:function fg(){},uo:function uo(){},up:function up(){},uq:function uq(){},rN:function rN(){},rQ:function rQ(){},rE:function rE(){},u8:function u8(){},us:function us(){},ut:function ut(){},kL:function kL(){},tZ:function tZ(){},tU:function tU(){},mJ:function mJ(){},rI:function rI(){},rz:function rz(){},l1:function l1(){},tG:function tG(){},l2:function l2(){},nw:function nw(){},uf:function uf(){},uc:function uc(){},ug:function ug(){},ry:function ry(){},lW:function lW(){},kJ:function kJ(){},rD:function rD(){},rC:function rC(){},u_:function u_(){},uh:function uh(){},u0:function u0(){},rP:function rP(){},rO:function rO(){},ue:function ue(){},ud:function ud(){},oT:function oT(){},uj:function uj(){},rF:function rF(){},rG:function rG(){},ur:function ur(){},hs:function hs(){},tM:function tM(){},tN:function tN(){},tO:function tO(){},tP:function tP(){},u9:function u9(){},ua:function ua(){},ub:function ub(){},tL:function tL(){},tR:function tR(){},tS:function tS(){},t2:function t2(){},t3:function t3(){},t4:function t4(){},tT:function tT(){},tQ:function tQ(){},rA:function rA(){},ul:function ul(){},um:function um(){},uk:function uk(){}},K={bT:function bT(a,b){this.a=a
this.b=b},mH:function mH(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nX:function nX(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yl:function(){var t=$.$get$i3()
t=t.gb9(t)
return new H.e5(t,new L.ks(),[H.av(t,"n",0)])},
y0:function(a,b,c,d,e){var t,s,r
t=P.C
s=A.dV
r=P.D
r=new L.aH(P.A(null,null,null,t,s),P.A(null,null,null,r,s),P.A(null,null,null,t,r),P.A(null,null,null,r,t))
r.j(0,$.aP,L.e("#FF9B00"),!0)
r.j(0,$.aR,L.e("#FF9B00"),!0)
r.j(0,$.aQ,L.e("#FF8700"),!0)
r.j(0,$.b_,L.e("#7F7F7F"),!0)
r.j(0,$.aZ,L.e("#727272"),!0)
r.j(0,$.aT,L.e("#A3A3A3"),!0)
r.j(0,$.aU,L.e("#999999"),!0)
r.j(0,$.aS,L.e("#898989"),!0)
r.j(0,$.aY,L.e("#EFEFEF"),!0)
r.j(0,$.aX,L.e("#DBDBDB"),!0)
r.j(0,$.aW,L.e("#C6C6C6"),!0)
r.j(0,$.aV,L.e("#ADADAD"),!0)
s=[t]
t=new L.eM(0.01,0.01,0.01,0.5,a,new H.u(0,null,null,null,null,null,0,[X.F,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.j(H.a(["Blank","Null","Boring","Error"],s),t),P.j(H.a(["Blank","Null","Boring","Error"],s),t),P.j(H.a(["Nothing","Errors","Glitches"],s),t),P.j(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fK]),Q.H(null,null,A.a1))
t.aa(a,b,c,d,e)
return t},
e:function(a){if(C.c.af(a,"#"))return A.v2(C.c.ag(a,1))
else return A.v2(a)},
ks:function ks(){},
eM:function eM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nZ:function nZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
oJ:function oJ(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={ku:function ku(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fL:function fL(a,b){this.a=a
this.b=b},l0:function l0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},h2:function h2(){},bB:function bB(a,b){this.a=a
this.b=b},oe:function oe(a){this.a=a},pm:function pm(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},U={ky:function ky(){},mX:function mX(a){this.a=a},np:function np(a){this.a=a},oA:function oA(){},oB:function oB(a){this.a=a},oC:function oC(a){this.a=a},l9:function l9(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,dU,dV,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.dU=dU
_.dV=dV
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lB:function lB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},mZ:function mZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},b:function b(a){this.a=a},W:function W(b,c,a){this.b=b
this.c=c
this.a=a},af:function af(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},oU:function oU(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
FL:function(a){if(J.d7(a).af(a," "))return C.c.ag(a,1)
return a},
pn:function pn(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b}},O={kA:function kA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},c4:function c4(){},dk:function dk(){},kE:function kE(a){this.a=a},ex:function ex(){},ii:function ii(){},
rk:function(){var t=0,s=P.bp(),r
var $async$rk=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:$.GJ=!0
A.ki()
W.vp(C.c.ar("../",N.tY())+"navbar.txt",null,null).b0(O.H_())
W.eG(window,"error",new O.rl(),!1,W.S)
t=2
return P.cw(A.ki(),$async$rk)
case 2:r=document.querySelector("#story")
O.GI(r)
O.GG(r)
O.GH(r)
return P.bs(null,s)}})
return P.bt($async$rk,s)},
GI:function(a){var t,s,r,q,p,o,n,m,l
for(t=B.zq(),s=J.cI(t.a),t=new H.eC(s,t.b,[H.O(t,0)]),r=J.bo(a);t.I();){q=s.gO()
p=J.rv(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.I();){m=o.gO()
n+="Weight: "+H.z(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.z(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
GG:function(a){var t,s,r,q,p,o,n,m,l
for(t=L.yl(),s=J.cI(t.a),t=new H.eC(s,t.b,[H.O(t,0)]),r=J.bo(a);t.I();){q=s.gO()
p=J.rv(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.I();){m=o.gO()
n+="Weight: "+H.z(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.z(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
GH:function(a){var t,s,r,q,p,o,n,m,l
for(t=T.FA(),s=J.cI(t.a),t=new H.eC(s,t.b,[H.O(t,0)]),r=J.bo(a);t.I();){q=s.gO()
p=J.rv(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.I();){m=o.gO()
n+="Weight: "+H.z(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.z(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
rl:function rl(){},
H1:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.tY()
a=J.xT(a,P.dI("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.ro(t))
s=document
J.uQ(s.querySelector("#navbar"),"beforeend",a,C.h,null)
if(J.bb(O.GR("seerOfVoid",null),"true"))P.z9(new O.rp(),P.cO)
r=new P.dW(Date.now(),!1)
if(H.u3(r)===4&&H.u2(r)===1)J.uN(s.querySelector("body")).h(0,"voidbody")
q=H.u3(r)
p=H.u2(r)
o=C.a.C(H.wk(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jE(null,null)
k.cW(H.fh(l,null,null))
k.hp()
if($.FB||k.a.cG()>0.99)H.i0(s.querySelector("#today"),"$iseL").href=C.c.ar("../",t)+"dead_index.html?seed="+l
else H.i0(s.querySelector("#today"),"$iseL").href=C.c.ar("../",t)+"index2.html?seed="+l},
GR:function(a,b){var t,s,r,q
t=P.wN().gcM().n(0,a)
if(t!=null)t=P.qJ(t,0,J.ci(t),C.o,!1)
if(t!=null)return t
s=$.xx
if(s.length!==0){r=J.xV(window.location.href,J.xQ(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wO(H.xz(s,q,"")+"?"+$.xx,0,null).gcM().n(0,a)}return},
Hc:function(){var t,s,r,q
t=document
J.uN(t.querySelector("body")).h(0,"voidbody")
s=new W.k1(t.querySelectorAll(".void"),[null])
for(t=new H.em(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.xL(J.rw(r))
if(q==="none"||q.length===0)O.H6(r)
else O.GT(r)}},
H6:function(a){var t,s
if(a==null)return
t=J.bo(a)
s=t.gaI(a)
J.uT(s,!!t.$ishF?"inline":"block")},
GT:function(a){if(a==null)return
J.uT(J.rw(a),"none")},
H7:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fA("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eK(s,",")
if(!J.xH(r,a))window.localStorage.setItem(t,H.z(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cs(q)
P.fA("Saving isn't possible....you don't have local storage")}},
ro:function ro(a){this.a=a},
rp:function rp(){},
rn:function rn(){},
cU:function cU(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oP:function oP(a){this.a=a},nM:function nM(a){this.a=a},kK:function kK(a){this.a=a},lX:function lX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},lY:function lY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nl:function nl(b,a){this.b=b
this.a=a},dK:function dK(a,b){this.a=a
this.b=b},ad:function ad(a,b){this.a=a
this.b=b},cZ:function cZ(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},bZ:function bZ(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},T:function T(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},i7:function i7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cW:function cW(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kN:function kN(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jz:function jz(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iv:function iv(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jB:function jB(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},nW:function nW(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nY:function nY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o8:function o8(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},dJ:function dJ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n9:function(){var t=0,s=P.bp(),r,q
var $async$n9=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fA("loading big bads")
r=$
q=J
t=2
return P.cw(A.en("BigBadLists/bigBads.txt",!1,!1,null),$async$n9)
case 2:r.wg=q.eK(b,"\n")
return P.bs(null,s)}})
return P.bt($async$n9,s)},
Gz:function(a){var t,s,r,q,p,o
t=J.eK(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.ch)(t),++q){p=t[q]
o=J.bf(p)
r+=" "+(J.xY(o.n(p,0))+o.ag(p,1))}return r}},A={kP:function kP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
i:function(a,b,c,d,e){var t=new A.a1(c,e,null,a,!1,P.a4(null,null,null,G.Z),0,3)
t.M(a,b,c,!1,e)
return t},
a1:function a1(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mu:function mu(){},
mt:function mt(){},
fK:function fK(){},
fO:function(a,b,c,d){var t=new A.dV(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eI(a,b,c,d)
return t},
v1:function(a,b,c,d){var t=A.fO(0,0,0,255)
t.b=C.a.ab(C.d.aj(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.aj(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.aj(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.aj(d*255),0,255)
return t},
yt:function(a,b){if(b){if(typeof a!=="number")return a.aG()
return A.fO((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aG()
return A.fO((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
v2:function(a){return A.yt(H.fh(a,16,new A.r4()),a.length>=8)},
dV:function dV(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
r4:function r4(){},
wd:function(){if($.wb)return
$.wb=!0
Z.z0()},
en:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$en=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.wd()
t=$.$get$cT().Z(0,a)?3:5
break
case 3:q=$.$get$cT().n(0,a)
p=J.az(q)
if(!!p.$isdJ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cr(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.z(J.uP(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tK==null?8:9
break
case 8:t=10
return P.cw(A.mU(),$async$en)
case 10:case 9:n=$.tK.en(a)
t=n!=null?11:12
break
case 11:t=13
return P.cw(A.mP(n),$async$en)
case 13:if(!$.$get$cT().Z(0,a))$.$get$cT().i(0,a,new Y.dJ(a,null,H.a([],[[P.eS,,]]),[null]))
r=$.$get$cT().n(0,a).b
t=1
break
case 12:case 7:r=A.Ev(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$en,s)},
mU:function(){var t=0,s=P.bp(),r
var $async$mU=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cw(A.en("manifest/manifest.txt",!1,!0,$.vl),$async$mU)
case 2:r.tK=b
return P.bs(null,s)}})
return P.bt($async$mU,s)},
Eu:function(a){if(!$.$get$cT().Z(0,a))$.$get$cT().i(0,a,new Y.dJ(a,null,H.a([],[[P.eS,,]]),[null]))
return $.$get$cT().n(0,a)},
Ev:function(a,b,c){var t
if($.$get$cT().Z(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vk(C.b.gb7(a.split("."))).a
t=A.Eu(a)
c.aZ(A.wa(a,!1)).b0(new A.mS(t))
return t.cr(0)},
mP:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mP=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cw(A.en(a+".bundle",!1,!0,null),$async$mP)
case 3:q=a0
p=C.c.L(a,0,C.c.e3(a,$.$get$wc()))
o=P.cO
n=new P.dQ(new P.bi(0,$.ao,null,[o]),[o])
m=H.a([],[P.ck])
for(o=J.xM(q),l=o.length,k=[[P.eS,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.ch)(o),++i){h=o[i]
g=J.bo(h)
f=Z.vk(C.b.gb7(J.eK(g.gJ(h),"."))).a
e=p+"/"+H.z(g.gJ(h))
if($.$get$cT().Z(0,e)){m.push(A.en(e,!1,!1,null))
continue}d=H.i0(g.gbd(h),"$isd5")
if(!$.$get$cT().Z(0,e))$.$get$cT().i(0,e,new Y.dJ(e,null,H.a([],k),j))
c=$.$get$cT().n(0,e)
m.push(c.cr(0))
f.b6(d.buffer).b0(new A.mQ(f,c))}P.za(m,null,!1).b0(new A.mR(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mP,s)},
ho:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$ho=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$tJ().Z(0,a)){r=$.$get$tJ().n(0,a)
t=1
break}q=W.fl
p=new P.bi(0,$.ao,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eG(n,"load",new A.mT(new P.dQ(p,[q]),n),!1,W.S)
n.src=A.wa(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ho,s)},
wa:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.z(window.location.protocol)+"//"+H.z(window.location.host)+"/"+a
return C.c.ar("../",N.tY())+a},
mS:function mS(a){this.a=a},
mQ:function mQ(a,b){this.a=a
this.b=b},
mR:function mR(a){this.a=a},
mT:function mT(a,b){this.a=a
this.b=b},
nu:function nu(){},
jy:function jy(){},
jE:function jE(a,b){this.a=a
this.b=b},
ki:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ki=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xo){t=1
break}$.xo=!0
D.FG()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$c().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.a9
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$c().h(0,o)
$.vE=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.bO=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.2)
$.$get$c().h(0,o)
$.b8=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.aA=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.c6=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.P=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.b6=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.bU=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.bh=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.cc=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.b2=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,0.1)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,-13)
$.$get$c().h(0,o)
$.bP=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$c().h(0,o)
$.au=o
o=H.a(["legendary"],p)
n=$.ms
H.a([],p)
o=new G.bH(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.ms
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$c().h(0,o)
$.Eb=o
o=$.I
H.a([],p)
o=new G.aK(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.at=o
o=$.tu
H.a([],p)
o=new G.aK(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b1=o
o=$.tu
H.a([],p)
o=new G.aK(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.aj=o
o=$.I
H.a([],p)
o=new G.aK(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bj=o
o=$.G
H.a([],p)
o=new G.aK(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c_=o
o=$.I
H.a([],p)
o=new G.aK(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b7=o
o=$.I
H.a([],p)
o=new G.aK(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bV=o
o=$.I
H.a([],p)
o=new G.aK(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aD=o
o=$.G
H.a([],p)
o=new G.aK(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.q
H.a([],p)
o=new G.aK(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.q
H.a([],p)
o=new G.aK(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aK(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bd=o
o=$.I
H.a([],p)
o=new G.aK(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.be=o
o=$.I
H.a([],p)
o=new G.aK(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aK(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ai=o
o=$.I
H.a([],p)
o=new G.aK(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.an=o
o=$.I
H.a([],p)
o=new G.aK(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aK(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.ar=o
o=$.I
H.a([],p)
o=new G.aK(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.I
H.a([],p)
o=new G.aK(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b5=o
o=$.I
H.a([],p)
o=new G.aK(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bq=o
o=$.I
H.a([],p)
o=new G.aK(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.ms
H.a([],p)
o=new G.aK(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.R=o
o=$.ms
H.a([],p)
o=new G.aK(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.N=o
o=$.I
H.a([],p)
o=new G.aK(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aw=o
o=$.q
H.a([],p)
o=new G.aK(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.I
H.a([],p)
o=new G.aK(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aG=o
o=$.I
H.a([],p)
o=new G.aK(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b4=o
o=$.I
H.a([],p)
o=new G.aK(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bK=o
o=$.I
H.a([],p)
o=new G.aK(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bk=o
o=$.I
H.a([],p)
o=new G.aK(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c5=o
o=$.I
H.a([],p)
o=new G.aK(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aq=o
o=$.I
H.a([],p)
o=new G.aK(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.aa=o
o=$.q
H.a([],p)
o=new G.aK(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aO=o
o=$.I
H.a([],p)
o=new G.aK(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a8=o
o=$.I
H.a([],p)
o=new G.aK(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.I
H.a([],p)
o=new G.aK(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aI=o
o=$.I
H.a([],p)
o=new G.aK(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ae(n,o,0.1)
$.$get$c().h(0,o)
$.ji=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.f9=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tg=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tp=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tm=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vv=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tb=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.hg=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vG=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.mk=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.ml=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.eh=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.mj=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.td=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.e_=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.ti=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vz=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.f8=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.t7=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.as=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.jf=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.jh=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.t8=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tk=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tc=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vH=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,1.3)
$.$get$c().h(0,o)
$.tl=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vA=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.dc=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.hf=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.tn=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.to=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.jg=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.zP=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vJ=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ae(n,o,0.4)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.Z
l=[m]
k=H.a([$.E,$.at,$.aN],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a([],p)
n=$.v
k=H.a([$.aa,$.at],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.b8,$.au],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.b8,$.E],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.vu=o
o=H.a([],p)
n=$.v
k=H.a([$.b4,$.aG],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.P,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.P,$.E],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.P,$.au],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.zL=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.cc,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.X,$.L],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jj=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.E,$.bh],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.vC=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bQ,$.bh],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bQ,$.bh,$.bk],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Ultraviolet"],p)
n=$.tt
k=H.a([$.b1,$.aj],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.b1,$.aj,$.at],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bV],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ap,$.b6],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.t9=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ap,$.P],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ap,$.c6],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ap,$.b8],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b8,$.bO],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.au,$.b6,$.bh],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ap,$.bK],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.au,$.b6],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.ta=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.aw,$.aB,$.b5,$.Y,$.ai,$.bV,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.b7,$.aj,$.at,$.a_,$.aD,$.Y,$.ai,$.an],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bQ,$.aM,$.an,$.b5],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.b7,$.an],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b8,$.at,$.aN],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bV,$.cc],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aN,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.zE=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aN,$.aO,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.t6=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.at],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aI,$.an],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.th=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.bd,$.P],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aN,$.bd,$.E,$.P],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.zI=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aN,$.aa],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b4,$.be],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bP,$.an],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aN,$.aO],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.zK=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bk,$.an,$.at],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.b1,$.aq,$.at],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.b9],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.b7,$.aD,$.b8],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["green sun"],p)
n=$.tu
k=H.a([$.aq,$.c_,$.b1],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.tf=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tt
k=H.a([$.aj,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.b1],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.at,$.aj,$.an],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c_,$.bn],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.zx=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.b8,$.bh,$.ar],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.b8,$.bh],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.bd,$.aO],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.aj,$.a8],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a8],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ai,$.be],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.aa,$.a8],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.at,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ai,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Bach's"],p)
n=$.a9
k=H.a([$.Y,$.a8],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.zG=o
o=H.a(["Mozart's"],p)
n=$.a9
k=H.a([$.a2,$.a8],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.a9
k=H.a([$.Y,$.c_],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Feynman's"],p)
n=$.a9
k=H.a([$.Y,$.b5],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Ziptie"],p)
n=$.a9
k=H.a([$.aA,$.bd],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.E,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hh=o
o=H.a(["Sassacre"],p)
n=$.a9
k=H.a([$.c5,$.b5],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.aa,$.c5],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bd,$.L],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.b5,$.aL],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.aq,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.L,$.ap],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.aa,$.c5,$.E],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.zD=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.b1,$.bn],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.aj,$.bn],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.aj,$.at],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a8],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.au,$.a8],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.ar,$.bh,$.aO],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.b5,$.a8,$.aL,$.b7],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.an,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.aa,$.an,$.bP],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.aq,$.ap],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bk,$.ap],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bk,$.ap,$.at],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bk,$.aN],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.an,$.ap],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.aj,$.a8,$.an,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.aa],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.an],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.E,$.L,$.be],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ap,$.be],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c_,$.an],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.au,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.aw],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.be,$.aw,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.f7=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.be,$.a8,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.be,$.bk],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.vM=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.aq,$.bk],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.an,$.bk],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.vN=o
o=H.a(["winter's","season's"],p)
n=$.a9
k=H.a([$.bj,$.bk],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.a9
k=H.a([$.a2,$.bk],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Santa Saws"],p)
n=$.a9
k=H.a([$.a2,$.bk,$.at],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Santa Sleighs"],p)
n=$.a9
k=H.a([$.hg,$.at],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Santa Claws"],p)
n=$.a9
k=H.a([$.hg,$.mk],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Sandy Claws"],p)
n=$.a9
k=H.a([$.hg,$.mk,$.au],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Silent Night"],p)
n=$.a9
k=H.a([$.hg,$.aj],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.a9
k=H.a([$.b7,$.bU],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bh,$.c_,$.bQ],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.an,$.E],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c_,$.a7,$.ap],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c_,$.a7,$.ap,$.aO],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a([],p)
n=$.q
k=H.a([$.aa,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c_,$.au],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.L,$.c6],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.at,$.au],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aN,$.au],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aN],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.an,$.bn],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.b4],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.P,$.b4],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bh,$.b4],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.cc,$.b4],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.aa,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.aw,$.bO],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.be,$.bO],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.an,$.at],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aB,$.ap],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aB,$.ap,$.L,$.E],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.an,$.L],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a2,$.E],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.aa,$.E],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.c5,$.E],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aI,$.b5],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.be,$.b5],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ai,$.b5],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b4,$.aI],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["stradivarius"],p)
n=$.a9
k=H.a([$.ai,$.be,$.X,$.a8],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aI],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.ar],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mi=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.E,$.a7,$.ar],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bn],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.ar,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["*Hyun-ae"],p)
n=$.a9
k=H.a([$.ar,$.a7,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aO],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c5,$.aO],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.L],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a([],p)
n=$.q
k=H.a([$.as,$.L],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a([],p)
n=$.q
k=H.a([$.E,$.aO],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.at,$.L],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.aa,$.c6],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aI,$.a8],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aM,$.L],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.zH=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aM,$.ap],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aM,$.aO],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.an,$.bK],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.E,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c6,$.at],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.at],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aL,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aL,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.b6,$.E],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.tj=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.b6,$.au,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.vD=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c6,$.aO],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.aw,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.vF=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.b5,$.an],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bP,$.b5],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mm=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aI,$.an,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bQ,$.aL,$.b7],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aO,$.an,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.E,$.be],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.te=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.b1,$.E],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bV,$.E],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.vL=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.P,$.cc],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.c5],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bm,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.vI=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aM,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.E,$.aL,$.a8],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.ar,$.aI],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ap,$.aI],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aM,$.aI],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.be,$.aI],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.an,$.aG,$.b5],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bh],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.zQ=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.aq,$.bn],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bn,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.b1,$.bm],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.E,$.c_],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.E,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.E,$.aq],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.au,$.aq],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.E,$.bP],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.at,$.an,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.b5],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.aw,$.b1],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.zA=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.aw,$.aj],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.au,$.bh],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.au],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a2,$.ar],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ap,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.b6,$.aw,$.be],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aM,$.P],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.bd,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.au,$.L],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.L,$.b2],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.L,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bm,$.bq,$.bQ],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.L,$.bV],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.aj,$.P],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.vw=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bU,$.bh],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bU,$.aq],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.b9,$.tn,$.ar],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bh,$.bm],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.zy=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.zF=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bj],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.an,$.aq],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bj],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bj,$.bd],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a([],p)
n=$.q
k=H.a([$.bj,$.bq],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["Ghost Rider's"],p)
n=$.a9
k=H.a([$.hf,$.aq,$.bU],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bk],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Duelist's"],p)
n=$.a9
k=H.a([$.aO,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aO,$.aj],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aO,$.bP],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aL,$.b7],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bQ,$.a8],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bQ,$.aw],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.b9,$.be],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.ar,$.b7,$.bm,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.zS=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bm,$.aj],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ap,$.bn],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.aj,$.aI],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aG,$.bU],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bm,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aG,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.b6,$.c_],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.b5,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.E,$.bO],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bn,$.aO],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bn,$.aa],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b4,$.bz],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aG,$.aN],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.aj,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aN,$.at],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.P,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.E,$.aL],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.E,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.b2],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.b6,$.bP],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Miner's"],p)
n=$.a9
k=H.a([$.au,$.E],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a8,$.ar],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bh,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.aj,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.zN=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.au,$.bK],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.zz=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bK,$.E],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.P,$.aa],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.b2,$.P],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.b1],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.zO=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.b1,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.zR=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bq,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bh,$.be],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.P,$.aw],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.P,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bV,$.b8],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aL,$.b8],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.b8],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.b5,$.b8],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aM,$.b4],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aL,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aL,$.bn],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bK,$.aM],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.zC=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.aq,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.P,$.b6],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b8,$.b7],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bV],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Berserker's"],p)
n=$.a9
k=H.a([$.a2,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.zM=o
o=H.a(["Clerical"],p)
n=$.a9
k=H.a([$.a2,$.aM],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aM,$.aq],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c_,$.b1],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bV],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b4,$.aq],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aL,$.aq],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aL,$.c5],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bU,$.aL],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.b5,$.bm],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aM,$.b2],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.zB=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.b2],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.b5,$.aa],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bK],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.aw,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.at,$.b5],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.vK=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.aw,$.b2],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bK,$.b2],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.bz],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.b2,$.ap,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.bd,$.ar],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bq,$.ar],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.vB=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.bk],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.aq],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.bd,$.c5],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.b1,$.Y,$.b6,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bU,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.aq,$.bz],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.P,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a8,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.b8],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.vy=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aM,$.b8],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.vx=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b8,$.aM,$.ap],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.P,$.aq],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bO,$.b2],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.E,$.ap],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bh],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aN,$.cc],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.b8,$.aN],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.au,$.aj],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.zJ=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.b6,$.aj],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.b6,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.b6,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bO,$.L],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.b2,$.bQ],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.b2,$.aN],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.b2,$.aa],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.b6,$.aO],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.b2,$.c6],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.b2,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a8,$.b7],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bm,$.a8],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bm,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.b2,$.cc],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.b8,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b8,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.b8,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b8,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b8,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b8,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.X,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.X,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.X,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.X,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.a9
k=H.a([$.X,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.X,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aA,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.L,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.L,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.L,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.P,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.au,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.au,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.au,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.au,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.au,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.au,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.au,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.au,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.au,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.P,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.P,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.P,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.P,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.P,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.P,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.P,$.c5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.P,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.P,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.P,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.P,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.P,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.P,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.P,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.P,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.P,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.P,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.P,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.P,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.P,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.P,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.a9
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.b2,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aA,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.N,$.R],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.b9,$.aI,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bm,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bm,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.a9
k=H.a([$.bm,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.a9
k=H.a([$.a_,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.a9
k=H.a([$.Y,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a_,$.aA,$.bj,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dc,$.X,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.a9
k=H.a([$.aj,$.a2,$.b9,$.aG,$.b7],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Kingly"],p)
n=$.a9
k=H.a([$.b7,$.aa,$.c5,$.a2,$.b9],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Jack"],p)
n=$.a9
k=H.a([$.aN,$.at,$.E,$.aj],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aI,$.X,$.N,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.as,$.L,$.E,$.Y,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.as,$.L,$.Y,$.N,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.L,$.Y,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.a9
k=H.a([$.a_,$.b1,$.E,$.aN,$.at,$.f9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.a9
k=H.a([$.a_,$.L,$.bq,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.a9
k=H.a([$.a_,$.a2,$.P,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.a9
k=H.a([$.a_,$.aG,$.b8,$.E,$.f8,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.a9
k=H.a([$.a_,$.au,$.ai,$.jg,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.P,$.be,$.aw,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.E,$.be,$.aw,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aA,$.a7,$.aj,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.P,$.Y,$.a2,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.P,$.Y,$.aw,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.L
i=$.Y
i=H.a([k,j,i,$.as,i,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a_,$.aw,$.bO,$.aa,$.eh,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.a9
i=H.a([$.a_,$.as,$.L,$.bq,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.a9
i=H.a([$.a2,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.L,$.Y,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.E,$.aj,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.E,$.b6,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aI,$.X,$.an,$.bj,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.aq,$.E,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.L,$.as,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.ar,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.a9
i=H.a([$.a_,$.b9,$.bz,$.b1,$.a8,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a_,$.aM,$.b6,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a_,$.b1,$.bV,$.au,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.a9
i=H.a([$.a_,$.aG,$.au,$.ai,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.a9
i=H.a([$.a_,$.ap,$.bq,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.a9
i=H.a([$.a_,$.E,$.a8,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.b6,$.c_,$.b1,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.E,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.a9
i=H.a([$.E,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.E,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.E,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.E,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.E,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.E,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bO,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bO,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bO,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bO,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bO,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bO,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bO,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bO,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bO,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bO,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bP,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bP,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bP,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bP,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bP,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.a9
i=H.a([$.bP,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bP,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bP,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bP,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.a9
i=H.a([$.X,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.X,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.X,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aA,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.c6,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.c6,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.c6,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.L,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.L,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.au,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.au,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.au,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bU,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bU,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bU,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bU,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bU,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bU,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bU,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bh,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bh,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bh,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bh,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bm,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bm,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bm,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bm,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.cc,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.cc,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.a9
i=H.a([$.cc,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.cc,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.b2,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.b2,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.b2,$.aj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.b2,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.b2,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.b2,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.b2,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.b2,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bz,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bz,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bz,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bz,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bz,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bz,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bz,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tt
i=H.a([$.bz,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bz,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bQ,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.at,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.at,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.b7,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aM,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ap,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ap,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ap,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c5,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c5,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aO,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aO,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.a9
i=H.a([$.aO,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.a9
i=H.a([$.aO,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aO,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aO,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.a9
i=H.a([$.aO,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aO,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aO,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aO,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aO,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.b1,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a8,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bV,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bV,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.a9
i=H.a([$.bV,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.a9
i=H.a([$.b1,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.b1,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.b1,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.b1,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.a9
i=H.a([$.aj,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.aj,$.a2,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.aj,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.aj,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.aj,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.a9
i=H.a([$.aj,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.a9
i=H.a([$.bj,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bj,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bj,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aM,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bK,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bn,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bn,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bn,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bn,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bn,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bn,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bn,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bn,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bk,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bK,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bK,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bK,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bK,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bK,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bK,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a8,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a8,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a8,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a8,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.a9
i=H.a([$.a8,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a8,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a8,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a8,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a8,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bq,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bq,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.a9
i=H.a([$.Y,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bd,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bd,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bd,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.bd,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.aw,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b4,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b4,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ap,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aB,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aB,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.ar,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.ar,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.a9
i=H.a([$.aB,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aB,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aB,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aB,$.aL,$.as,$.jh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ap,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ap,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ap,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ap,$.b5,$.a7,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.E,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b8,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bP,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.c6,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.L,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.L,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.a9
i=H.a([$.b6,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bh,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.aq,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aB,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.a9
i=H.a([$.b2,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aM,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.b9,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.a9
i=H.a([$.bV,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.aj,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.aq,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.aq,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.aq,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.be,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.be,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.be,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aG,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aL,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aB,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.b9,$.aI,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.N,$.R,$.b9,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.au,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bz,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.b2,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.b7,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bO,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,n,o,0))
if($.wu==null){o=$.mk
n=$.aN
l=$.at
k=$.b8
j=new U.af(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a4(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wu=j}o=$.$get$ak();(o&&C.b).sm(o,0)
o=$.$get$ak()
n=$.P
l=$.vK
k=new U.af(n,null,null,null,"Speedo",!1,P.a4(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$ak()
o=$.f9
n=$.at
l=$.E
j=$.aN
i=new U.af(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a4(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.tg
o=$.aa
j=$.E
l=new U.af(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a4(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$ak()
i=$.tp
k=$.aO
j=$.E
o=new U.af(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a4(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$ak()
l=$.tm
i=$.aO
j=$.E
k=new U.af(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a4(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$ak()
o=$.vY
l=$.aO
j=$.E
i=new U.af(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a4(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.vv
o=$.aN
j=$.at
l=$.E
n=new U.af(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a4(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$ak()
i=$.tb
k=$.aN
l=$.at
j=$.E
o=new U.af(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a4(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.hg
i=$.aa
j=$.bO
l=new U.af(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a4(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.w0
n=$.at
j=$.E
i=new U.af(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a4(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$ak()
l=$.vA
o=$.at
j=$.E
n=new U.af(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a4(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$ak()
i=$.vH
l=$.aN
j=$.E
o=new U.af(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a4(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.tl
i=$.bz
j=$.bm
l=new U.af(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a4(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.eh
n=$.c5
j=$.au
i=$.aa
k=new U.af(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tc
o=$.aA
i=$.bV
j=new U.af(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a4(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$ak()
k=$.tk
l=$.E
i=$.aN
o=new U.af(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a4(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$ak()
j=$.w2
k=$.X
i=$.aa
l=new U.af(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a4(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$ak()
o=$.w4
j=$.bd
i=$.P
k=new U.af(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a4(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.t8
o=$.aO
i=$.au
j=$.P
n=$.aN
h=new U.af(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a4(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$ak()
k=$.jh
l=$.X
n=$.aa
j=new U.af(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a4(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$ak()
h=$.jf
k=$.X
n=new U.af(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a4(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$ak()
j=$.as
h=$.L
k=$.aa
l=new U.af(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a4(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$ak()
n=$.vV
j=$.E
k=$.aa
h=new U.af(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a4(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$ak()
l=$.t7
n=$.at
k=$.E
j=$.aa
i=new U.af(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a4(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.vQ
l=$.X
j=$.aN
k=new U.af(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a4(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.f8
h=$.E
j=$.aa
l=new U.af(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a4(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vz
i=$.X
j=$.aa
h=new U.af(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a4(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w5
k=$.aA
j=$.aa
i=new U.af(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a4(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w1
l=$.X
j=$.aO
k=new U.af(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a4(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.w_
h=$.E
j=$.at
l=new U.af(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a4(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ti
i=$.E
j=$.aO
h=new U.af(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a4(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.ml
k=$.E
j=$.bn
i=new U.af(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a4(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.eh
l=$.c6
j=$.aa
k=new U.af(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.w3
h=$.E
j=$.aN
l=new U.af(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a4(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.mj
i=$.L
j=$.at
h=new U.af(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a4(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.td
k=$.E
j=$.aa
i=new U.af(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a4(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.e_
l=$.b4
j=$.P
k=new U.af(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a4(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.hf
h=$.E
j=$.bd
l=new U.af(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a4(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ts
i=$.E
j=$.aa
h=new U.af(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a4(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.vZ
k=$.E
j=$.aa
i=new U.af(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a4(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.tr
l=$.X
j=$.aa
k=new U.af(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a4(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.tn
h=$.X
j=$.aD
l=new U.af(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a4(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.to
i=$.E
j=$.at
h=new U.af(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a4(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mo
k=$.E
j=$.Y
i=new U.af(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a4(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.jg
l=$.au
j=$.c5
k=new U.af(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a4(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.vJ
h=$.X
j=$.aa
l=new U.af(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a4(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vP
i=$.E
j=$.at
h=new U.af(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a4(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.vX
k=$.E
j=$.at
i=new U.af(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a4(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.vW
l=$.E
j=$.c5
k=new U.af(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a4(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.dc
h=$.X
j=$.aa
m=new U.af(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a4(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bN().push(m)
$.ve=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bN().push(m)
$.rY=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bN().push(m)
$.dX=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bN().push(m)
$.ee=m
m=new S.bG("Turtle","click",null,null)
$.$get$bN().push(m)
$.f_=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bN().push(m)
$.dH=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bN().push(m)
$.eY=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bN().push(m)
$.io=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bN().push(m)
$.rR=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bN().push(m)
$.lD=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bN().push(m)
$.t_=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bN().push(m)
$.il=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bN().push(m)
$.vf=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bN().push(m)
$.lC=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bN().push(m)
$.lJ=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bN().push(m)
$.vg=m
m=new S.bG("Spider","skitter",null,null)
$.$get$bN().push(m)
$.it=m
m=new S.bG("Cupid","flappa",null,null)
$.$get$bN().push(m)
$.ip=m
m=new S.bG("Dragon","roar",null,null)
$.$get$bN().push(m)
$.h3=m
m=new S.i5("Prospitian","murmur",null,null)
$.$get$bN().push(m)
$.yW=m
m=new S.i5("Dersite","mutter",null,null)
$.$get$bN().push(m)
$.yT=m
m=new S.m3("Horror Terror","a;lkjdf",null,null)
$.$get$bN().push(m)
$.yV=m
$.yX=H.a([$.t_,$.il,$.vg,$.rY,$.ee,$.dX,$.f_,$.io,$.rR,$.lD],[S.bG])
$.h9=new T.c0(0,"spices")
m=$.yZ
$.eV=new T.c0(m,"fresh baked bread")
$.cv=new T.c0(m,"sweetness")
$.c3=new T.c0(m,"nature")
$.lI=new T.c0(0,"salt")
k=$.yY
$.d0=new T.c0(k,"rot")
$.yU=new T.c0(k,"feet")
$.eX=new T.c0(0,"oil")
$.rT=new T.c0(0,"chlorine")
$.h7=new T.c0(0,"nothing in particular")
$.ed=new T.c0(0,"gunpowder")
$.h6=new T.c0(0,"must")
$.cB=new T.c0(m,"zoo animals")
$.dY=new T.c0(k,"sweat")
$.is=new T.c0(0,"ozone")
$.c2=new T.c0(0,"deceit")
$.d_=new T.c0(k,"blood")
$.eZ=new T.c0(k,"smoke")
$.bX=new K.bT(k,"creepy")
$.b0=new K.bT(m,"calm")
$.ca=new K.bT(k,"frantic")
$.lF=new K.bT(0,"like nothing")
$.bY=new K.bT(m,"energizing")
$.cA=new K.bT(0,"studious")
$.dp=new K.bT(0,"dangerous")
$.dF=new K.bT(0,"glamorous")
$.h8=new K.bT(0,"romantic")
$.dn=new K.bT(m,"creative")
$.lE=new K.bT(0,"lucky")
$.dq=new K.bT(0,"happy")
$.dG=new K.bT(0,"heroic")
$.d1=new K.bT(k,"stupid")
$.lE=new K.bT(0,"lucky")
$.rU=new K.bT(0,"claustrophobic")
$.lG=new K.bT(0,"overheated")
$.dE=new K.bT(k,"confusing")
$.cj=new K.bT(0,"contemplatative")
$.cS=new M.bB(0,"clanking")
$.cu=new M.bB(0,"laughing")
$.bc=new M.bB(m,"rustling")
$.eg=new M.bB(k,"screaming")
$.iq=new M.bB(k,"foot steps")
$.eW=new M.bB(k,"beeping")
$.vi=new M.bB(k,"whispering")
$.ec=new M.bB(0,"clacking")
$.cy=new M.bB(0,"applause")
$.ef=new M.bB(0,"jazz")
$.rW=new M.bB(0,"disco")
$.h4=new M.bB(0,"drums")
$.h5=new M.bB(0,"echoing")
$.lH=new M.bB(k,"roaring")
$.ir=new M.bB(k,"gunfire")
$.cz=new M.bB(0,"music")
$.rZ=new M.bB(0,"singing")
$.rS=new M.bB(0,"chanting")
$.f0=new M.bB(0,"whistling")
$.da=new M.bB(m,"nature")
$.rV=new M.bB(0,"croaking")
$.db=new M.bB(0,"silence")
$.rX=new M.bB(0,"pulsing")
$.vh=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.F,P.U]
n=A.a1
l=E.M
k=[l]
j=[A.fK]
m=new S.mE(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.u(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Knight",3,!0,!1,!1)
$.Fh=m
m=P.j(H.a([new E.M($.c7,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o1(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.u(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Seer",6,!0,!1,!1)
$.Fu=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kA("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.u(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Bard",9,!0,!1,!1)
$.Fb=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m_("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.u(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Heir",8,!0,!1,!1)
$.Fe=m
m=H.a([],p)
m=new U.mZ(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.u(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Maid",0,!0,!1,!1)
$.Fk=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nQ(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.u(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Rogue",4,!0,!1,!1)
$.Fp=m
m=H.a([],p)
m=new V.nt(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.u(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Page",1,!0,!1,!1)
$.Fn=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.oU(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.u(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Thief",7,!0,!1,!1)
$.Fx=m
m=P.j(H.a([new E.M($.c7,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oH(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.u(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sylph",5,!0,!1,!1)
$.Fw=m
m=H.a([],p)
m=new N.nJ("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.u(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Prince",10,!0,!1,!1)
$.Fo=m
m=P.j(H.a([new E.M($.c7,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pm("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.u(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Witch",11,!0,!1,!1)
$.Fz=m
m=P.j(H.a([new E.M($.c7,0.4,!1)],k),l)
i=H.a([],p)
m=new S.mY("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.u(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Mage",2,!0,!1,!1)
$.Fj=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.j(H.a([new E.M($.c7,3,!1),new E.M($.og,-2,!1)],k),l)
e=H.a([],p)
m=new E.pi("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.u(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Waste",12,!1,!1,!1)
$.Fy=m
m=H.a([],p)
m=new Y.nY("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.u(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Scout",13,!1,!1,!1)
$.Fs=m
m=P.j(H.a([new E.M($.c7,0.5,!1)],k),l)
i=H.a([],p)
m=new L.nZ("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.u(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Scribe",15,!1,!1,!1)
$.Ft=m
m=P.j(H.a([new E.M($.c7,0.5,!1)],k),l)
i=H.a([],p)
m=new E.nV(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.u(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sage",14,!1,!1,!1)
$.Fq=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.lY("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.u(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Guide",16,!1,!1,!1)
$.Fd=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.j(H.a([new E.M($.c7,3,!1)],k),l)
g=H.a([],p)
m=new Y.lX(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.u(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Grace",17,!1,!1,!1)
$.Fc=m
m=P.j(H.a([new E.M($.c7,0.1,!1)],k),l)
i=H.a([],p)
m=new E.n7("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.u(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Muse",18,!1,!1,!1)
$.Fl=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.H(null,null,n)
h=P.j(H.a([new E.M($.c7,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mW("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.u(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Lord",19,!1,!1,!1)
$.Fi=m
m=P.j(H.a([new E.M($.c7,-0.1,!1),new E.M($.dt,1,!1)],k),l)
i=H.a([],p)
m=new Y.o8("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.u(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Smith",20,!1,!1,!1)
$.Fv=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.j(H.a([new E.M($.c7,4,!1),new E.M($.og,-3,!1)],k),l)
e=H.a([],p)
m=new X.m7("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.u(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Human",21,!1,!1,!0)
$.Ff=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.j(H.a([new E.M($.c7,41.3,!1),new E.M($.og,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.m8(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.u(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Hussie",22,!1,!0,!0)
$.Fg=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.nW(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.u(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sans",23,!1,!0,!0)
$.Fr=m
$.Fm=T.Fa("Null",255,!1,!0,!1)
m=A.dV
i=P.D
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#00ff00"),!0)
h.j(0,$.aR,L.e("#EFEFEF"),!0)
h.j(0,$.aQ,L.e("#DEDEDE"),!0)
h.j(0,$.b_,L.e("#FF2106"),!0)
h.j(0,$.aZ,L.e("#B01200"),!0)
h.j(0,$.aT,L.e("#2F2F30"),!0)
h.j(0,$.aU,L.e("#1D1D1D"),!0)
h.j(0,$.aS,L.e("#080808"),!0)
h.j(0,$.aY,L.e("#030303"),!0)
h.j(0,$.aX,L.e("#242424"),!0)
h.j(0,$.aW,L.e("#333333"),!0)
h.j(0,$.aV,L.e("#141414"),!0)
g=P.j(H.a(["Frogs"],p),q)
f=P.j(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.j(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.j(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.j(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.j(H.a([new E.M($.dt,2,!0),new E.M($.ev,1,!0),new E.M($.e2,-2,!0)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new N.oa(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(0,"Space",!0,!1,!1)
$.yh=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#ff0000"),!0)
a.j(0,$.aR,L.e("#FF2106"),!0)
a.j(0,$.aQ,L.e("#AD1604"),!0)
a.j(0,$.b_,L.e("#030303"),!0)
a.j(0,$.aZ,L.e("#242424"),!0)
a.j(0,$.aT,L.e("#510606"),!0)
a.j(0,$.aU,L.e("#3C0404"),!0)
a.j(0,$.aS,L.e("#1F0000"),!0)
a.j(0,$.aY,L.e("#B70D0E"),!0)
a.j(0,$.aX,L.e("#970203"),!0)
a.j(0,$.aW,L.e("#8E1516"),!0)
a.j(0,$.aV,L.e("#640707"),!0)
b=P.j(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.j(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.j(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.j(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.j(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.j(H.a([new E.M($.hH,2,!0),new E.M($.e2,1,!0),new E.M($.fn,-2,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new N.oV(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(1,"Time",!0,!1,!1)
$.yj=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#3399ff"),!0)
h.j(0,$.aR,L.e("#10E0FF"),!0)
h.j(0,$.aQ,L.e("#00A4BB"),!0)
h.j(0,$.b_,L.e("#FEFD49"),!0)
h.j(0,$.aZ,L.e("#D6D601"),!0)
h.j(0,$.aT,L.e("#0052F3"),!0)
h.j(0,$.aU,L.e("#0046D1"),!0)
h.j(0,$.aS,L.e("#003396"),!0)
h.j(0,$.aY,L.e("#0087EB"),!0)
h.j(0,$.aX,L.e("#0070ED"),!0)
h.j(0,$.aW,L.e("#006BE1"),!0)
h.j(0,$.aV,L.e("#0054B0"),!0)
g=P.j(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.j(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.j(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.j(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.j(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.j(H.a([new E.M($.e2,2,!0),new E.M($.cF,1,!0),new E.M($.ev,-1,!0),new E.M($.ew,-1,!0),new E.M($.c7,0.05,!1)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new T.kI(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(2,"Breath",!0,!1,!1)
$.y2=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#003300"),!0)
a.j(0,$.aR,L.e("#0F0F0F"),!0)
a.j(0,$.aQ,L.e("#010101"),!0)
a.j(0,$.b_,L.e("#E8C15E"),!0)
a.j(0,$.aZ,L.e("#C7A140"),!0)
a.j(0,$.aT,L.e("#1E211E"),!0)
a.j(0,$.aU,L.e("#141614"),!0)
a.j(0,$.aS,L.e("#0B0D0B"),!0)
a.j(0,$.aY,L.e("#204020"),!0)
a.j(0,$.aX,L.e("#11200F"),!0)
a.j(0,$.aW,L.e("#192C16"),!0)
a.j(0,$.aV,L.e("#121F10"),!0)
b=P.j(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.j(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.j(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.j(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.j(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.j(H.a([new E.M($.dt,2,!0),new E.M($.fn,1,!0),new E.M($.hH,-1,!0),new E.M($.ev,-1,!0),new E.M($.c7,0.01,!1)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new U.l9(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(3,"Doom",!0,!1,!1)
$.y3=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#993300"),!0)
h.j(0,$.aR,L.e("#BA1016"),!0)
h.j(0,$.aQ,L.e("#820B0F"),!0)
h.j(0,$.b_,L.e("#381B76"),!0)
h.j(0,$.aZ,L.e("#1E0C47"),!0)
h.j(0,$.aT,L.e("#290704"),!0)
h.j(0,$.aU,L.e("#230200"),!0)
h.j(0,$.aS,L.e("#110000"),!0)
h.j(0,$.aY,L.e("#3D190A"),!0)
h.j(0,$.aX,L.e("#2C1207"),!0)
h.j(0,$.aW,L.e("#5C2913"),!0)
h.j(0,$.aV,L.e("#4C1F0D"),!0)
g=P.j(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.j(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.j(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.j(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.j(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.j(H.a([new E.M($.ew,2,!0),new E.M($.cF,1,!0),new E.M($.dt,-2,!0)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new T.kF(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(4,"Blood",!0,!1,!1)
$.y1=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#ff3399"),!0)
a.j(0,$.aR,L.e("#BD1864"),!0)
a.j(0,$.aQ,L.e("#780F3F"),!0)
a.j(0,$.b_,L.e("#1D572E"),!0)
a.j(0,$.aZ,L.e("#11371D"),!0)
a.j(0,$.aT,L.e("#4C1026"),!0)
a.j(0,$.aU,L.e("#3C0D1F"),!0)
a.j(0,$.aS,L.e("#260914"),!0)
a.j(0,$.aY,L.e("#6B0829"),!0)
a.j(0,$.aX,L.e("#4A0818"),!0)
a.j(0,$.aW,L.e("#55142A"),!0)
a.j(0,$.aV,L.e("#3D0E1E"),!0)
b=P.j(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.j(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.j(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.j(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.j(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.j(H.a([new E.M($.ew,1,!0),new E.kt(null,1,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new T.lZ(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(5,"Heart",!0,!1,!1)
$.y5=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#3da35a"),!0)
h.j(0,$.aR,L.e("#06FFC9"),!0)
h.j(0,$.aQ,L.e("#04A885"),!0)
h.j(0,$.b_,L.e("#6E0E2E"),!0)
h.j(0,$.aZ,L.e("#4A0818"),!0)
h.j(0,$.aT,L.e("#1D572E"),!0)
h.j(0,$.aU,L.e("#164524"),!0)
h.j(0,$.aS,L.e("#11371D"),!0)
h.j(0,$.aY,L.e("#3DA35A"),!0)
h.j(0,$.aX,L.e("#2E7A43"),!0)
h.j(0,$.aW,L.e("#3B7E4F"),!0)
h.j(0,$.aV,L.e("#265133"),!0)
g=P.j(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.j(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.j(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.j(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.j(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.j(H.a([new E.M($.fn,2,!0),new E.M($.hH,1,!0),new E.M($.dt,-2,!0)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new V.n6(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(6,"Mind",!0,!1,!1)
$.yc=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#ff9933"),!0)
a.j(0,$.aR,L.e("#FEFD49"),!0)
a.j(0,$.aQ,L.e("#FEC910"),!0)
a.j(0,$.b_,L.e("#10E0FF"),!0)
a.j(0,$.aZ,L.e("#00A4BB"),!0)
a.j(0,$.aT,L.e("#FA4900"),!0)
a.j(0,$.aU,L.e("#E94200"),!0)
a.j(0,$.aS,L.e("#C33700"),!0)
a.j(0,$.aY,L.e("#FF8800"),!0)
a.j(0,$.aX,L.e("#D66E04"),!0)
a.j(0,$.aW,L.e("#E76700"),!0)
a.j(0,$.aV,L.e("#CA5B00"),!0)
b=P.j(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.j(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.j(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.j(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.j(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.j(H.a([new E.M($.hG,2,!0),new E.M($.fn,1,!0),new E.M($.cF,-1,!0),new E.M($.ev,-1,!0),new E.M($.c7,0.2,!1)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new G.mI(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(7,"Light",!0,!1,!1)
$.yb=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#000066"),!0)
h.j(0,$.aR,L.e("#0B1030"),!0)
h.j(0,$.aQ,L.e("#04091A"),!0)
h.j(0,$.b_,L.e("#CCC4B5"),!0)
h.j(0,$.aZ,L.e("#A89F8D"),!0)
h.j(0,$.aT,L.e("#00164F"),!0)
h.j(0,$.aU,L.e("#00103C"),!0)
h.j(0,$.aS,L.e("#00071A"),!0)
h.j(0,$.aY,L.e("#033476"),!0)
h.j(0,$.aX,L.e("#02285B"),!0)
h.j(0,$.aW,L.e("#004CB2"),!0)
h.j(0,$.aV,L.e("#003E91"),!0)
g=P.j(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.j(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.j(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.j(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.j(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.j(H.a([new E.fF(D.ui(),null,3,!0),new E.fF(D.ui(),null,-1,!0),new E.M($.hH,-1,!0),new E.M($.c7,0.2,!1)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new Q.ph(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(8,"Void",!0,!1,!1)
$.yk=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#9900cc"),!0)
a.j(0,$.aR,L.e("#974AA7"),!0)
a.j(0,$.aQ,L.e("#6B347D"),!0)
a.j(0,$.b_,L.e("#3D190A"),!0)
a.j(0,$.aZ,L.e("#2C1207"),!0)
a.j(0,$.aT,L.e("#7C3FBA"),!0)
a.j(0,$.aU,L.e("#6D34A6"),!0)
a.j(0,$.aS,L.e("#592D86"),!0)
a.j(0,$.aY,L.e("#381B76"),!0)
a.j(0,$.aX,L.e("#1E0C47"),!0)
a.j(0,$.aW,L.e("#281D36"),!0)
a.j(0,$.aV,L.e("#1D1526"),!0)
b=P.j(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.j(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.j(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.j(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.j(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.j(H.a([new E.M($.hI,2,!0),new E.M($.e2,1,!0),new E.M($.cF,-1,!0),new E.M($.ew,-1,!0),new E.M($.c7,0.01,!1)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new E.nL(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(9,"Rage",!0,!1,!1)
$.ye=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#ffcc66"),!0)
h.j(0,$.aR,L.e("#FDF9EC"),!0)
h.j(0,$.aQ,L.e("#D6C794"),!0)
h.j(0,$.b_,L.e("#164524"),!0)
h.j(0,$.aZ,L.e("#06280C"),!0)
h.j(0,$.aT,L.e("#FFC331"),!0)
h.j(0,$.aU,L.e("#F7BB2C"),!0)
h.j(0,$.aS,L.e("#DBA523"),!0)
h.j(0,$.aY,L.e("#FFE094"),!0)
h.j(0,$.aX,L.e("#E8C15E"),!0)
h.j(0,$.aW,L.e("#F6C54A"),!0)
h.j(0,$.aV,L.e("#EDAF0C"),!0)
g=P.j(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.j(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.j(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.j(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.j(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.j(H.a([new E.M($.cF,2,!0),new E.M($.hG,1,!0),new E.fF(D.ui(),null,-2,!0)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new X.m2(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(10,"Hope",!0,!1,!1)
$.y7=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#494132"),!0)
a.j(0,$.aR,L.e("#76C34E"),!0)
a.j(0,$.aQ,L.e("#4F8234"),!0)
a.j(0,$.b_,L.e("#00164F"),!0)
a.j(0,$.aZ,L.e("#00071A"),!0)
a.j(0,$.aT,L.e("#605542"),!0)
a.j(0,$.aU,L.e("#494132"),!0)
a.j(0,$.aS,L.e("#2D271E"),!0)
a.j(0,$.aY,L.e("#CCC4B5"),!0)
a.j(0,$.aX,L.e("#A89F8D"),!0)
a.j(0,$.aW,L.e("#A29989"),!0)
a.j(0,$.aV,L.e("#918673"),!0)
b=P.j(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.j(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.j(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.j(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.j(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.j(H.a([new E.M($.ev,2,!0),new E.M($.hI,1,!0),new E.M($.dt,-2,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new K.mH(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(11,"Life",!0,!1,!1)
$.ya=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#9630BF"),!0)
h.j(0,$.aR,L.e("#cc87e8"),!0)
h.j(0,$.aQ,L.e("#9545b7"),!0)
h.j(0,$.b_,L.e("#ae769b"),!0)
h.j(0,$.aZ,L.e("#8f577c"),!0)
h.j(0,$.aT,L.e("#9630bf"),!0)
h.j(0,$.aU,L.e("#693773"),!0)
h.j(0,$.aS,L.e("#4c2154"),!0)
h.j(0,$.aY,L.e("#fcf9bd"),!0)
h.j(0,$.aX,L.e("#e0d29e"),!0)
h.j(0,$.aW,L.e("#bdb968"),!0)
h.j(0,$.aV,L.e("#ab9b55"),!0)
g=P.j(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.j(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.j(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.j(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.j(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.j(H.a([new E.M($.dt,3,!0),new E.M($.cF,-2,!0)],k),l)
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#FF9B00"),!0)
a.j(0,$.aR,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF8700"),!0)
a.j(0,$.b_,L.e("#7F7F7F"),!0)
a.j(0,$.aZ,L.e("#727272"),!0)
a.j(0,$.aT,L.e("#A3A3A3"),!0)
a.j(0,$.aU,L.e("#999999"),!0)
a.j(0,$.aS,L.e("#898989"),!0)
a.j(0,$.aY,L.e("#EFEFEF"),!0)
a.j(0,$.aX,L.e("#DBDBDB"),!0)
a.j(0,$.aW,L.e("#C6C6C6"),!0)
a.j(0,$.aV,L.e("#ADADAD"),!0)
a=new Z.la(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(12,"Dream",!1,!1,!1)
$.y4=a
a=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
a.j(0,$.aP,L.e("#9630BF"),!0)
a.j(0,$.aR,L.e("#cc87e8"),!0)
a.j(0,$.aQ,L.e("#9545b7"),!0)
a.j(0,$.b_,L.e("#ae769b"),!0)
a.j(0,$.aZ,L.e("#8f577c"),!0)
a.j(0,$.aT,L.e("#9630bf"),!0)
a.j(0,$.aU,L.e("#693773"),!0)
a.j(0,$.aS,L.e("#4c2154"),!0)
a.j(0,$.aY,L.e("#fcf9bd"),!0)
a.j(0,$.aX,L.e("#e0d29e"),!0)
a.j(0,$.aW,L.e("#bdb968"),!0)
a.j(0,$.aV,L.e("#ab9b55"),!0)
b=P.j(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.j(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.j(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.j(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.j(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.j(H.a([new E.M($.dt,3,!0),new E.M($.cF,-2,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new Q.mF(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(13,"Law",!1,!1,!0)
$.y9=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#ffff00"),!0)
h.j(0,$.aR,L.e("#ffff00"),!0)
h.j(0,$.aQ,L.e("#ffff00"),!0)
h.j(0,$.b_,L.e("#508b2d"),!0)
h.j(0,$.aZ,L.e("#316c0d"),!0)
h.j(0,$.aT,L.e("#dddd00"),!0)
h.j(0,$.aU,L.e("#afaf00"),!0)
h.j(0,$.aS,L.e("#8f8f00"),!0)
h.j(0,$.aY,L.e("#ff0000"),!0)
h.j(0,$.aX,L.e("#a8000a"),!0)
h.j(0,$.aW,L.e("#b8151f"),!0)
h.j(0,$.aV,L.e("#8c1d1d"),!0)
g=P.j(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.j(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.j(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.j(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.j(H.a([new E.M($.c7,13,!0)],k),l)
b=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aP,L.e("#FF9B00"),!0)
b.j(0,$.aR,L.e("#FF9B00"),!0)
b.j(0,$.aQ,L.e("#FF8700"),!0)
b.j(0,$.b_,L.e("#7F7F7F"),!0)
b.j(0,$.aZ,L.e("#727272"),!0)
b.j(0,$.aT,L.e("#A3A3A3"),!0)
b.j(0,$.aU,L.e("#999999"),!0)
b.j(0,$.aS,L.e("#898989"),!0)
b.j(0,$.aY,L.e("#EFEFEF"),!0)
b.j(0,$.aX,L.e("#DBDBDB"),!0)
b.j(0,$.aW,L.e("#C6C6C6"),!0)
b.j(0,$.aV,L.e("#ADADAD"),!0)
b=new Z.mB(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.aa(14,"Juice",!1,!1,!0)
$.y8=b
b=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aP,L.e("#00ff00"),!0)
b.j(0,$.aR,L.e("#00ff00"),!0)
b.j(0,$.aQ,L.e("#00ff00"),!0)
b.j(0,$.b_,L.e("#00ff00"),!0)
b.j(0,$.aZ,L.e("#00cf00"),!0)
b.j(0,$.aT,L.e("#171717"),!0)
b.j(0,$.aU,L.e("#080808"),!0)
b.j(0,$.aS,L.e("#080808"),!0)
b.j(0,$.aY,L.e("#616161"),!0)
b.j(0,$.aX,L.e("#3b3b3b"),!0)
b.j(0,$.aW,L.e("#4a4a4a"),!0)
b.j(0,$.aV,L.e("#292929"),!0)
c=P.j(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.j(H.a(["Shogun"],p),q)
e=P.j(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.j(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.j(H.a([new E.M($.hI,13,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new K.nX(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(15,"Sauce",!1,!0,!1)
$.yg=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#933100"),!0)
h.j(0,$.aR,L.e("#933100"),!0)
h.j(0,$.aQ,L.e("#682200"),!0)
h.j(0,$.b_,L.e("#4c3a27"),!0)
h.j(0,$.aZ,L.e("#302418"),!0)
h.j(0,$.aT,L.e("#a0562b"),!0)
h.j(0,$.aU,L.e("#723e20"),!0)
h.j(0,$.aS,L.e("#442513"),!0)
h.j(0,$.aY,L.e("#963c07"),!0)
h.j(0,$.aX,L.e("#682a06"),!0)
h.j(0,$.aW,L.e("#6d4d3a"),!0)
h.j(0,$.aV,L.e("#422e23"),!0)
g=P.j(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.j(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.j(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.j(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.j(H.a([new E.M($.e2,10,!0),new E.M($.cF,-2,!0)],k),l)
b=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aP,L.e("#FF9B00"),!0)
b.j(0,$.aR,L.e("#FF9B00"),!0)
b.j(0,$.aQ,L.e("#FF8700"),!0)
b.j(0,$.b_,L.e("#7F7F7F"),!0)
b.j(0,$.aZ,L.e("#727272"),!0)
b.j(0,$.aT,L.e("#A3A3A3"),!0)
b.j(0,$.aU,L.e("#999999"),!0)
b.j(0,$.aS,L.e("#898989"),!0)
b.j(0,$.aY,L.e("#EFEFEF"),!0)
b.j(0,$.aX,L.e("#DBDBDB"),!0)
b.j(0,$.aW,L.e("#C6C6C6"),!0)
b.j(0,$.aV,L.e("#ADADAD"),!0)
b=new L.oJ(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.aa(16,"Taze",!1,!1,!0)
$.yi=b
b=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
b.j(0,$.aP,L.e("#990000"),!0)
b.j(0,$.aR,L.e("#ff0200"),!0)
b.j(0,$.aQ,L.e("#dd0000"),!0)
b.j(0,$.b_,L.e("#25334f"),!0)
b.j(0,$.aZ,L.e("#07090f"),!0)
b.j(0,$.aT,L.e("#c64f4f"),!0)
b.j(0,$.aU,L.e("#a33f3f"),!0)
b.j(0,$.aS,L.e("#843333"),!0)
b.j(0,$.aY,L.e("#b5c1d2"),!0)
b.j(0,$.aX,L.e("#939dac"),!0)
b.j(0,$.aW,L.e("#3c3e42"),!0)
b.j(0,$.aV,L.e("#202123"),!0)
c=P.j(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.j(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.j(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.j(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.j(H.a([new E.M($.e2,2,!0),new E.M($.cF,5,!0)],k),l)
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#FF9B00"),!0)
h.j(0,$.aR,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF8700"),!0)
h.j(0,$.b_,L.e("#7F7F7F"),!0)
h.j(0,$.aZ,L.e("#727272"),!0)
h.j(0,$.aT,L.e("#A3A3A3"),!0)
h.j(0,$.aU,L.e("#999999"),!0)
h.j(0,$.aS,L.e("#898989"),!0)
h.j(0,$.aY,L.e("#EFEFEF"),!0)
h.j(0,$.aX,L.e("#DBDBDB"),!0)
h.j(0,$.aW,L.e("#C6C6C6"),!0)
h.j(0,$.aV,L.e("#ADADAD"),!0)
h=new V.nS(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(17,"Rule",!1,!1,!0)
$.yf=h
h=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
h.j(0,$.aP,L.e("#853dcc"),!0)
h.j(0,$.aR,L.e("#f76261"),!0)
h.j(0,$.aQ,L.e("#913a39"),!0)
h.j(0,$.b_,L.e("#ab4443"),!0)
h.j(0,$.aZ,L.e("#78302f"),!0)
h.j(0,$.aT,L.e("#a54cff"),!0)
h.j(0,$.aU,L.e("#8c41d9"),!0)
h.j(0,$.aS,L.e("#7335b3"),!0)
h.j(0,$.aY,L.e("#853dcc"),!0)
h.j(0,$.aX,L.e("#642e99"),!0)
h.j(0,$.aW,L.e("#4c2375"),!0)
h.j(0,$.aV,L.e("#2b1442"),!0)
g=P.j(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.j(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.j(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.j(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.j(H.a([new E.M($.e2,15,!0),new E.M($.cF,-4,!0)],k),l)
m=new L.aH(P.A(null,null,null,q,m),P.A(null,null,null,i,m),P.A(null,null,null,q,i),P.A(null,null,null,i,q))
m.j(0,$.aP,L.e("#FF9B00"),!0)
m.j(0,$.aR,L.e("#FF9B00"),!0)
m.j(0,$.aQ,L.e("#FF8700"),!0)
m.j(0,$.b_,L.e("#7F7F7F"),!0)
m.j(0,$.aZ,L.e("#727272"),!0)
m.j(0,$.aT,L.e("#A3A3A3"),!0)
m.j(0,$.aU,L.e("#999999"),!0)
m.j(0,$.aS,L.e("#898989"),!0)
m.j(0,$.aY,L.e("#EFEFEF"),!0)
m.j(0,$.aX,L.e("#DBDBDB"),!0)
m.j(0,$.aW,L.e("#C6C6C6"),!0)
m.j(0,$.aV,L.e("#ADADAD"),!0)
j=new V.m0(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,m,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
j.aa(18,"Hippo",!1,!1,!0)
$.y6=j
$.yd=L.y0(255,"Null",!1,!0,!1)
j=P.j(H.a([new E.M($.cF,1,!0),new E.M($.hG,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
g=H.a(["Nobody"],p)
h=H.a(["Nobody"],p)
q=new F.n8(j,q,m,c,d,!1,e,f,g,h,1,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cM(q)
$.zi=q
q=P.j(H.a([new E.M($.fn,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kp(q,m,j,i,h,!1,g,f,e,d,13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cM(q)
$.zb=q
q=P.j(H.a([new E.M($.hI,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.ku(q,m,j,i,h,!1,g,f,e,d,4,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cM(q)
$.zc=q
q=P.j(H.a([new E.M($.hH,-1,!0),new E.M($.hG,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kP(q,m,j,i,h,!1,g,f,e,d,0,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cM(q)
$.zd=q
q=P.j(H.a([new E.M($.cF,-1,!0),new E.M($.ev,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l0(q,m,j,i,h,!1,g,f,e,d,2,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cM(q)
$.ze=q
q=P.j(H.a([new E.M($.cF,1,!0),new E.M($.ew,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l8(q,m,j,i,h,!1,g,f,e,d,8,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cM(q)
$.zf=q
q=P.j(H.a([new E.M($.hG,1,!0),new E.M($.dt,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lB(q,m,j,i,h,!1,g,f,e,d,7,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cM(q)
$.zg=q
q=P.j(H.a([new E.M($.hI,1,!0),new E.M($.ev,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mC(q,m,j,i,h,!1,g,f,e,d,6,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cM(q)
$.zh=q
q=P.j(H.a([new E.M($.e2,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nG(q,m,j,i,h,!1,g,f,e,d,9,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cM(q)
$.zk=q
q=P.j(H.a([new E.M($.ew,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nR(q,m,j,i,h,!1,g,f,e,d,12,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cM(q)
$.zl=q
q=P.j(H.a([new E.M($.cF,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.o9(q,m,j,i,h,!1,g,f,e,d,11,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cM(q)
$.zm=q
q=P.j(H.a([new E.M($.ew,-1,!0),new E.M($.cF,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oN(q,m,j,i,h,!1,g,f,e,d,5,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cM(q)
$.zo=q
q=P.j(H.a([new E.M($.fn,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pr(q,m,j,i,h,!1,g,f,e,d,3,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cM(q)
$.zp=q
q=P.j(H.a([new E.M($.dt,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oL(q,m,j,i,h,!1,g,f,e,d,10,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cM(q)
$.zn=q
q=H.a(["nobody"],p)
l=P.j(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.f6(!0,q,l,k,p,-13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"","","Null")
q.E()
q.F()
B.cM(q)
$.zj=q
A.wd()
t=3
return P.cw(Y.n9(),$async$ki)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$ki,s)}},V={l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},lS:function lS(a){this.a=a},m0:function m0(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},n6:function n6(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nt:function nt(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nS:function nS(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oN:function oN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cN(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.b1(b)},
yQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=new B.d9(null,0)
r.a=J.dS(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
rM:function(a){return new V.li(a)},
rL:function(a){return new V.lh(a)},
yN:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.b1(b)},
yM:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.d9(null,0)
p.a=J.dS(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
rK:function(a){return new V.lg(a)},
rJ:function(a){return new V.lf(a)},
yP:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.aj(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.b1(b)},
yO:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.d9(null,0)
p.a=J.dS(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
li:function li(a){this.a=a},
lh:function lh(a){this.a=a},
lg:function lg(a){this.a=a},
lf:function lf(a){this.a=a}},Z={la:function la(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
z0:function(){var t,s
if(!$.vj)$.vj=!0
else return
t=[P.C]
s=new Y.oP(H.a([],t))
$.t1=s
Z.cL(s,"txt",null)
Z.cL($.t1,"vert","x-shader/x-vertex")
Z.cL($.t1,"frag","x-shader/x-fragment")
$.z_=new Y.nM(H.a([],t))
$.vl=new Y.kK(H.a([],t))
s=new B.pw(H.a([],t))
$.vn=s
Z.cL(s,"zip",null)
Z.cL($.vn,"bundle",null)
s=new U.pn(H.a([],t))
$.z8=s
Z.cL(s,"words",null)
s=new Q.nE(H.a([],t))
$.vm=s
Z.cL(s,"png",null)
Z.cL($.vm,"jpg","image/jpeg")
$.z6=new Q.nB(H.a([],t))
s=new M.oe(H.a([],t))
$.z7=s
Z.cL(s,"psprite",null)
s=new V.lS(H.a([],t))
$.t0=s
Z.cL(s,"ttf",null)
Z.cL($.t0,"otf",null)
Z.cL($.t0,"woff",null)
s=new Y.nl(null,H.a([],t))
$.z3=s
Z.cL(s,"obj",null)
s=new U.mX(H.a([],t))
$.z1=s
Z.cL(s,"mp3",null)
$.z2=new U.oB(H.a([],t))
s=new U.np(H.a([],t))
$.z4=s
Z.cL(s,"ogg",null)
$.z5=new U.oC(H.a([],t))},
cL:function(a,b,c){$.$get$lT().i(0,b,new Z.ij(a,c,[null,null]))
a.a.push(b)},
vk:function(a){var t
if($.$get$lT().Z(0,a)){t=$.$get$lT().n(0,a)
if(t.a instanceof O.c4)return t
throw H.l("File format for extension ."+H.z(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.z(a))},
ij:function ij(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mB:function mB(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
mW:function mW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
tA:function tA(){},
tw:function tw(){},
tx:function tx(){}},X={ik:function ik(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i4:function i4(){},m2:function m2(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},m7:function m7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={a6:function a6(){},mC:function mC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},nJ:function nJ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nQ:function nQ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o9:function o9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},oa:function oa(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oV:function oV(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
EN:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.k1(document.querySelectorAll("link"),[null])
for(r=new H.em(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.az(q)
if(!!p.$ishm&&q.rel==="stylesheet"){o=$.$get$nz()
H.z(p.gae(q))
o.toString
o=t.length
n=Math.min(o,J.ci(p.gae(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.i1(p.gae(q),m)){l=C.c.ag(t,m)
$.$get$nz().toString
return l.split("/").length-1}continue}}}$.$get$nz().b8(C.n,"Didn't find a css link to derive relative path")
return 0},
tY:function(){var t=P.wN()
if(!$.$get$ny().Z(0,t))$.$get$ny().i(0,t,N.EN(t))
return $.$get$ny().n(0,t)}},E={ix:function ix(){},no:function no(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fF:function fF(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},n7:function n7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nL:function nL(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nV:function nV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},pi:function pi(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},B={m_:function m_(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
cM:function(a){var t=a.f
if($.$get$je().Z(0,t))throw H.l("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cJ($.$get$je().n(0,t))+".")
$.$get$je().i(0,t,a)},
zq:function(){var t=$.$get$je()
t=t.gb9(t)
return new H.e5(t,new B.mf(),[H.av(t,"n",0)])},
mf:function mf(){},
f6:function f6(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
pw:function pw(a){this.a=a},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b){this.a=a
this.b=b},
Gj:function(a){return a.ba(0)},
du:function du(a){this.a=a},
jU:function jU(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hO:function hO(a,b){this.a=a
this.b=b}},Q={m8:function m8(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},mb:function mb(){},nE:function nE(a){this.a=a},nB:function nB(a){this.a=a},mF:function mF(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nR:function nR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},ph:function ph(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jA:function jA(){},
H:function(a,b,c){var t=new Q.dP(null,null,[c])
t.d4(a,b,c)
return t},
uu:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.H(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dR(a,"$isn",[e],"$asn"))if(H.dR(a,"$iscR",[e],"$ascR"))for(s=J.cI(a.gbY()),r=0;s.I();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gV(a),p=[H.O(t,0)],r=0;s.I();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.f(n,m,p);++r}else for(s=a.gV(a),p=[e],o=[H.O(t,0)];s.I();){l=s.gO()
if(H.GB(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.f(l,k,o)}else if(H.dR(l,"$isf",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.z(J.uP(l))+" for WeightedList<"+H.z(H.bW(H.dy(e)))+">. Should be "+H.z(H.bW(H.dy(e)))+" or WeightPair<"+H.z(H.bW(H.dy(e)))+">.")}return t},
uv:function(a,b,c,d){return new Q.jS(J.uR(a.gbY(),new Q.pl(c,d,b)),null,[c,d])},
cR:function cR(){},
dP:function dP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hN:function hN(){},
f:function f(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eE:function eE(){},
hM:function hM(){},
pk:function pk(a,$ti){this.a=a
this.$ti=$ti},
jS:function jS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pl:function pl(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function(){var t=0,s=P.bp(),r
var $async$o0=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cw(A.ho("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o0)
case 3:r=A.ho("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$o0,s)}},G={mI:function mI(y1,y2,p,q,t,u,v,w,A,B,D,G,H,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.G=G
_.H=H
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nG:function nG(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yu:function(a){var t,s,r,q,p,o,n,m,l
t=G.Z
s=P.tH(a,t)
r=P.a4(null,null,null,t)
q=H.a([],[G.d])
for(t=G.Er(),p=J.cI(t.a),t=new H.eC(p,t.b,[H.O(t,0)]);t.I();){o=p.gO()
if(o.eg(s))q.push(o)}C.b.eA(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.ch)(q),++n){o=q[n]
if(o.eg(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.ch)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.bP(0,s)
return r},
Er:function(){var t=$.$get$c()
t.toString
return new H.e5(t,new G.mr(),[H.O(t,0)])},
Z:function Z(){},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mr:function mr(){}},F={n8:function n8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pr:function pr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
Ew:function(a){if(a===C.i){window
return C.j.gaq(C.j)}if(a===C.n){window
return C.j.ghM()}if(a===C.Z){window
return C.j.ghf()}return P.GE()},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(){},
yL:function(a,b,c,d){var t,s,r,q
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bQ(s[q])
return t.b1(b)},
yK:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.d9(null,0)
r.a=J.dS(a,b)
for(q=0;q<c;++q){p=r.bZ()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yJ:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bQ(o-1)
t.ah(a,r)}return t.b1(b)},
yI:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.d9(null,0)
p.a=J.dS(a,b)
for(o=0;o<c;){n=p.bZ()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
yH:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dl(new P.c8(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bQ(p-1)
t.bQ(a)}return t.b1(b)},
yG:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cx(c)
s=new Uint8Array(t)
r=new B.d9(null,0)
r.a=J.dS(a,b)
for(q=0;q<c;){p=r.bZ()+1
o=r.bZ()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
F6:function(a){var t,s
if(a.gm(a).aB(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.ghT(s).gi3().e2("checking for two players, ps is "+H.z(a)+", ret is "+t)
return t},
EV:function(a){a.gad(a).gbR()
return!1},
F5:function(a){a.gad(a).gbR()
return!1},
F4:function(a){a.gad(a).gbR()
return!1},
F3:function(a){return a.gad(a).gbl().gi2()},
F1:function(a){return a.gad(a).gbl().gi0()},
F0:function(a){return a.gad(a).gbl().gi_()},
EY:function(a){return a.gad(a).gbl().ghY()},
F_:function(a){return a.gad(a).gbl().ghZ()},
F2:function(a){return a.gad(a).gbl().gi1()},
EZ:function(a){var t=a.gad(a)
t.gbR()
t.gbR()
return!1},
EW:function(a){return!0},
EX:function(a){a.gad(a).ghV()
return!1},
nK:function nK(){},
a0:function a0(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
Q:function Q(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a5:function a5(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bA:function bA(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
oH:function oH(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
ha:function ha(){},
tX:function tX(){},
tW:function tW(){}},D={oL:function oL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
FG:function(){if($.ww)return
$.ww=!0
var t=new D.cE("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=0
$.og=t
t=new D.cE("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.FF=t
t=new D.jV(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=2.5
t.Q=1
$.hI=t
t=new D.jV(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=2.5
$.ev=t
t=new D.cE("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.FE=t
t=new D.cE("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.e2=t
t=new D.nO("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.ew=t
t=new D.cE("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.cF=t
t=new D.cE("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.fn=t
t=new D.cE("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.hG=t
t=new D.cE("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.hH=t
t=new D.cE("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.dt=t
t=new D.cE("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.c7=t},
ui:function(){var t=$.$get$cP()
return new H.e5(t,new D.oh(),[H.O(t,0)])},
oh:function oh(){},
cE:function cE(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
jV:function jV(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
nO:function nO(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tC.prototype={}
J.h.prototype={
S:function(a,b){return a===b},
ga5:function(a){return H.ep(a)},
C:function(a){return H.jD(a)},
ga9:function(a){return new H.dO(H.kh(a),null)},
$isha:1,
$isab:1,
$isfg:1,
$isab:1,
$ismx:1,
$ish:1,
$ismx:1,
$ish:1,
$ishs:1,
$isab:1}
J.mv.prototype={
C:function(a){return String(a)},
ga5:function(a){return a?519018:218159},
ga9:function(a){return C.ae},
$isd6:1}
J.mw.prototype={
S:function(a,b){return null==b},
C:function(a){return"null"},
ga5:function(a){return 0},
ga9:function(a){return C.a8},
$iscO:1}
J.hk.prototype={
ga5:function(a){return 0},
ga9:function(a){return C.a7},
C:function(a){return String(a)},
$ismx:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width},
gaX:function(a){return a.height},
ht:function(a,b){return a.parse(b)},
ey:function(a,b){return a.setLogging(b)},
ez:function(a,b){return a.setMaterials(b)}}
J.nD.prototype={}
J.eA.prototype={}
J.ek.prototype={
C:function(a){var t=a[$.$get$v4()]
return t==null?this.eE(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ei.prototype={
bU:function(a,b){if(!!a.immutable$list)throw H.l(new P.V(b))},
cv:function(a,b){if(!!a.fixed$length)throw H.l(new P.V(b))},
h:function(a,b){this.cv(a,"add")
a.push(b)},
a8:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bM(a))}},
av:function(a,b){return new H.fc(a,b,[H.O(a,0),null])},
bf:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.z(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
cY:function(a,b){return H.wy(a,b,null,H.O(a,0))},
h4:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bM(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
c4:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bv(c))
if(c<b||c>a.length)throw H.l(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gad:function(a){if(a.length>0)return a[0]
throw H.l(H.jl())},
gb7:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jl())},
a7:function(a,b,c,d,e){var t,s,r
this.bU(a,"setRange")
P.de(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.w7())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bV:function(a,b,c,d){var t
this.bU(a,"fill range")
P.de(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aA:function(a,b,c,d){var t,s,r,q,p,o
this.cv(a,"replaceRange")
P.de(b,c,a.length,null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ax(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.ax(a,b,r,d)}},
h2:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bM(a))}return!0},
cZ:function(a,b){var t
this.bU(a,"sort")
t=b==null?P.GD():b
H.jJ(a,0,a.length-1,t)},
eA:function(a){return this.cZ(a,null)},
aY:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bb(a[t],b))return t
return-1},
be:function(a,b){return this.aY(a,b,0)},
ai:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bb(a[t],b))return!0
return!1},
gW:function(a){return a.length===0},
C:function(a){return P.jk(a,"[","]")},
a2:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
ao:function(a){return this.a2(a,!0)},
gV:function(a){return new J.i2(a,a.length,0,null,[H.O(a,0)])},
ga5:function(a){return H.ep(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cv(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dT(b,"newLength",null))
if(b<0)throw H.l(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c1(a,b))
if(b>=a.length||b<0)throw H.l(H.c1(a,b))
return a[b]},
i:function(a,b,c){this.bU(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c1(a,b))
if(b>=a.length||b<0)throw H.l(H.c1(a,b))
a[b]=c},
$isax:1,
$asax:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.tB.prototype={}
J.i2.prototype={
gO:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.ch(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fb.prototype={
ay:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcE(b)
if(this.gcE(a)===t)return 0
if(this.gcE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcE:function(a){return a===0?1/a<0:a<0},
aj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.V(""+a+".floor()"))},
by:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.ay(b,c)>0)throw H.l(H.bv(b))
if(this.ay(a,b)<0)return b
if(this.ay(a,c)>0)return c
return a},
l:function(a){return a},
bA:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Y(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.V("Unexpected toString result: "+t))
r=J.bf(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ar("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga5:function(a){return a&0x1FFFFFFF},
cU:function(a){return-a},
U:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a+b},
ar:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a*b},
bE:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dI(a,b)},
am:function(a,b){return(a|0)===a?a/b|0:this.dI(a,b)},
dI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.V("Result of truncating division is "+H.z(t)+": "+H.z(a)+" ~/ "+H.z(b)))},
at:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
if(b<0)throw H.l(H.bv(b))
return b>31?0:a<<b>>>0},
ap:function(a,b){return b>31?0:a<<b>>>0},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fB:function(a,b){if(b<0)throw H.l(H.bv(b))
return b>31?0:a>>>b},
dH:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>b},
as:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>=b},
ga9:function(a){return C.ah},
$isdj:1}
J.jo.prototype={
ga9:function(a){return C.ag},
$isU:1,
$isdj:1,
$isD:1}
J.jn.prototype={
ga9:function(a){return C.af},
$isU:1,
$isdj:1}
J.ej.prototype={
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c1(a,b))
if(b<0)throw H.l(H.c1(a,b))
if(b>=a.length)H.ba(H.c1(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(b>=a.length)throw H.l(H.c1(a,b))
return a.charCodeAt(b)},
cs:function(a,b,c){if(c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
return new H.qC(b,a,c)},
aU:function(a,b){return this.cs(a,b,0)},
e6:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Y(b,c+s)!==this.a4(a,s))return
return new H.jO(c,b,a)},
U:function(a,b){if(typeof b!=="string")throw H.l(P.dT(b,null,null))
return a+b},
h1:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
cO:function(a,b,c){return H.xz(a,b,c)},
hF:function(a,b,c){return H.H9(a,b,c,null)},
eB:function(a,b){if(b==null)H.ba(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hj&&b.gdt().exec("").length-2===0)return a.split(b.gfn())
else return this.f5(a,b)},
aA:function(a,b,c,d){var t,s
H.uC(b)
c=P.de(b,c,a.length,null,null,null)
H.uC(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
f5:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.xD(b,a),s=s.gV(s),r=0,q=1;s.I();){p=s.gO()
o=p.gd_(p)
n=p.gdT(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aC:function(a,b,c){var t
H.uC(c)
if(typeof c!=="number")return c.a3()
if(c<0||c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.xR(b,a,c)!=null},
af:function(a,b){return this.aC(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.ba(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.bv(c))
if(typeof b!=="number")return b.a3()
if(b<0)throw H.l(P.jF(b,null,null))
if(typeof c!=="number")return H.ag(c)
if(b>c)throw H.l(P.jF(b,null,null))
if(c>a.length)throw H.l(P.jF(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.L(a,b,null)},
hL:function(a){return a.toUpperCase()},
bh:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a4(t,0)===133){r=J.Es(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Y(t,q)===133?J.ty(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eh:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Y(t,r)===133)s=J.ty(t,r)}else{s=J.ty(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ar:function(a,b){var t,s
if(typeof b!=="number")return H.ag(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aY:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.aY(a,b,0)},
hl:function(a,b,c){var t
if(b==null)H.ba(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.ba(P.bE(t,0,c,null,null))
if(b.cd(a,t)!=null)return t}return-1},
e3:function(a,b){return this.hl(a,b,null)},
dR:function(a,b,c){if(c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
return H.H8(a,b,c)},
ai:function(a,b){return this.dR(a,b,0)},
gW:function(a){return a.length===0},
ay:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga5:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga9:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c1(a,b))
if(b>=a.length||b<0)throw H.l(H.c1(a,b))
return a[b]},
$isax:1,
$asax:function(){},
$isC:1}
H.kO.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Y(this.a,b)},
$ashK:function(){return[P.D]},
$asjp:function(){return[P.D]},
$ashB:function(){return[P.D]},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.r.prototype={$asr:null}
H.el.prototype={
gV:function(a){return new H.em(this,this.gm(this),0,null,[H.av(this,"el",0)])},
a8:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.bM(this))}},
gW:function(a){return this.gm(this)===0},
gad:function(a){if(this.gm(this)===0)throw H.l(H.jl())
return this.T(0,0)},
ai:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bb(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bM(this))}return!1},
av:function(a,b){return new H.fc(this,b,[H.av(this,"el",0),null])},
a2:function(a,b){var t,s,r
t=H.a([],[H.av(this,"el",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ao:function(a){return this.a2(a,!0)}}
H.oF.prototype={
gf6:function(){var t=J.ci(this.a)
return t},
gfC:function(){var t,s
t=J.ci(this.a)
s=this.b
if(J.ct(s,t))return t
return s},
gm:function(a){var t,s
t=J.ci(this.a)
s=this.b
if(J.uJ(s,t))return 0
if(typeof s!=="number")return H.ag(s)
return t-s},
T:function(a,b){var t=J.e6(this.gfC(),b)
if(J.e7(b,0)||J.uJ(t,this.gf6()))throw H.l(P.by(b,this,"index",null,null))
return J.uM(this.a,t)},
a2:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bf(s)
q=r.gm(s)
if(typeof t!=="number")return H.ag(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bM(this))}return n},
ao:function(a){return this.a2(a,!0)},
eM:function(a,b,c,d){var t=this.b
if(J.e7(t,0))H.ba(P.bE(t,0,null,"start",null))}}
H.em.prototype={
gO:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.bf(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hr.prototype={
gV:function(a){return new H.jq(null,J.cI(this.a),this.b,this.$ti)},
gm:function(a){return J.ci(this.a)},
gW:function(a){return J.ru(this.a)},
$asn:function(a,b){return[b]}}
H.fT.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jq.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$asjm:function(a,b){return[b]}}
H.fc.prototype={
gm:function(a){return J.ci(this.a)},
T:function(a,b){return this.b.$1(J.uM(this.a,b))},
$asel:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.e5.prototype={
gV:function(a){return new H.eC(J.cI(this.a),this.b,this.$ti)},
av:function(a,b){return new H.hr(this,b,[H.O(this,0),null])}}
H.eC.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.iu.prototype={
sm:function(a,b){throw H.l(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to a fixed-length list"))},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot remove from a fixed-length list"))}}
H.p4.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot remove from an unmodifiable list"))},
bV:function(a,b,c,d){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.hK.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.rr.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rs.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qk.prototype={}
H.ft.prototype={
dN:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cq()},
hE:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.w(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.w(p,q)
p[q]=r
if(q===s.c)s.dl();++s.d}this.y=!1}this.cq()},
fG:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.az(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hC:function(a){var t,s,r
if(this.ch==null)return
for(t=J.az(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.V("removeRange"))
P.de(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ex:function(a,b){if(!this.r.S(0,a))return
this.db=b},
ha:function(a,b,c){var t=J.az(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fC(a,c)
return}t=this.cx
if(t==null){t=P.tI(null,null)
this.cx=t}t.aJ(0,new H.qf(a,c))},
h9:function(a,b){var t
if(!this.r.S(0,a))return
t=J.az(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bW()
return}t=this.cx
if(t==null){t=P.tI(null,null)
this.cx=t}t.aJ(0,this.ghk())},
hb:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fA(a)
if(b!=null)P.fA(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dv(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fC(r.d,s)},
bp:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cs(o)
p=H.cr(o)
this.hb(q,p)
if(this.db===!0){this.bW()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghj()
if(this.cx!=null)for(;n=this.cx,!n.gW(n);)this.cx.eb().$0()}return s},
cF:function(a){return this.b.n(0,a)},
d6:function(a,b){var t=this.b
if(t.Z(0,a))throw H.l(P.lj("Registry: ports must be registered only once."))
t.i(0,a,b)},
cq:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bW()},
bW:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bc(0)
for(t=this.b,s=t.gb9(t),s=s.gV(s);s.I();)s.gO().eZ()
t.bc(0)
this.c.bc(0)
u.globalState.z.an(0,this.a)
this.dx.bc(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fC(q,t[p])}this.ch=null}},
ghj:function(){return this.d},
gfR:function(){return this.e}}
H.qf.prototype={
$0:function(){J.fC(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pR.prototype={
fW:function(){var t=this.a
if(t.b===t.c)return
return t.eb()},
ef:function(){var t,s,r
t=this.fW()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Z(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gW(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.lj("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gW(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hn(["command","close"])
r=new H.dw(!0,new P.k5(0,null,null,null,null,null,0,[null,P.D])).aw(r)
s.toString
self.postMessage(r)}return!1}t.hz()
return!0},
dC:function(){if(self.window!=null)new H.pS(this).$0()
else for(;this.ef(););},
bz:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dC()
else try{this.dC()}catch(r){t=H.cs(r)
s=H.cr(r)
q=u.globalState.Q
p=P.hn(["command","error","msg",H.z(t)+"\n"+H.z(s)])
p=new H.dw(!0,P.hU(null,P.D)).aw(p)
q.toString
self.postMessage(p)}}}
H.pS.prototype={
$0:function(){if(!this.a.ef())return
P.wA(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eH.prototype={
hz:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bp(this.b)}}
H.qj.prototype={}
H.mg.prototype={
$0:function(){H.zu(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mh.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fz(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fz(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cq()},
$S:function(){return{func:1,v:true}}}
H.pE.prototype={}
H.fu.prototype={
b5:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gds())return
r=H.Gf(b)
if(t.gfR()===s){s=J.bf(r)
switch(s.n(r,0)){case"pause":t.dN(s.n(r,1),s.n(r,2))
break
case"resume":t.hE(s.n(r,1))
break
case"add-ondone":t.fG(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hC(s.n(r,1))
break
case"set-errors-fatal":t.ex(s.n(r,1),s.n(r,2))
break
case"ping":t.ha(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.h9(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aJ(0,new H.eH(t,new H.qm(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fu&&J.bb(this.b,b.b)},
ga5:function(a){return this.b.gcf()}}
H.qm.prototype={
$0:function(){var t=this.a.b
if(!t.gds())t.eV(0,this.b)},
$S:function(){return{func:1}}}
H.hX.prototype={
b5:function(a,b){var t,s,r
t=P.hn(["command","message","port",this,"msg",b])
s=new H.dw(!0,P.hU(null,P.D)).aw(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.hX&&J.bb(this.b,b.b)&&J.bb(this.a,b.a)&&J.bb(this.c,b.c)},
ga5:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.at()
s=this.a
if(typeof s!=="number")return s.at()
r=this.c
if(typeof r!=="number")return H.ag(r)
return(t<<16^s<<8^r)>>>0}}
H.fj.prototype={
eZ:function(){this.c=!0
this.b=null},
eV:function(a,b){if(this.c)return
this.b.$1(b)},
$isF7:1,
gcf:function(){return this.a},
gds:function(){return this.c}}
H.oX.prototype={
eN:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aJ(0,new H.eH(s,new H.oY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dh(new H.oZ(this,b),0),a)}else throw H.l(new P.V("Timer greater than 0."))}}
H.oY.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.oZ.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dB.prototype={
ga5:function(a){var t=this.a
if(typeof t!=="number")return t.cX()
t=C.d.aT(t,0)^C.d.am(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dB){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcf:function(){return this.a}}
H.dw.prototype={
aw:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.az(a)
if(!!t.$isfd)return["buffer",a]
if(!!t.$iseo)return["typed",a]
if(!!t.$isax)return this.es(a)
if(!!t.$iszr){r=this.gep()
q=t.gbg(a)
q=H.dr(q,r,H.av(q,"n",0),null)
q=P.dd(q,!0,H.av(q,"n",0))
t=t.gb9(a)
t=H.dr(t,r,H.av(t,"n",0),null)
return["map",q,P.dd(t,!0,H.av(t,"n",0))]}if(!!t.$ismx)return this.eu(a)
if(!!t.$ish)this.ei(a)
if(!!t.$isF7)this.bC(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfu)return this.ev(a)
if(!!t.$ishX)return this.ew(a)
if(!!t.$iseR){p=a.$static_name
if(p==null)this.bC(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdB)return["capability",a.a]
if(!(a instanceof P.ab))this.ei(a)
return["dart",u.classIdExtractor(a),this.er(u.classFieldsExtractor(a))]},
bC:function(a,b){throw H.l(new P.V((b==null?"Can't transmit:":b)+" "+H.z(a)))},
ei:function(a){return this.bC(a,null)},
es:function(a){var t=this.eq(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bC(a,"Can't serialize indexable: ")},
eq:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aw(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
er:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aw(a[t]))
return a},
eu:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bC(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aw(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
ew:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ev:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcf()]
return["raw sendport",a]}}
H.eF.prototype={
aV:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dA("Bad serialized message: "+H.z(a)))
switch(C.b.gad(a)){case"ref":if(1>=a.length)return H.w(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.w(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bn(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bn(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bn(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bn(r),[null])
s.fixed$length=Array
return s
case"map":return this.h_(a)
case"sendport":return this.h0(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fZ(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dB(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bn(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.z(a))}},
bn:function(a){var t,s,r
t=J.bf(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
if(!(s<r))break
t.i(a,s,this.aV(t.n(a,s)));++s}return a},
h_:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.mN()
this.b.push(q)
s=J.xW(J.uR(s,this.gfY()))
for(t=J.bf(s),p=J.bf(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aV(p.n(r,o)))
return q},
h0:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.bb(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cF(q)
if(o==null)return
n=new H.fu(o,r)}else n=new H.hX(s,q,r)
this.b.push(n)
return n},
fZ:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bf(s)
p=J.bf(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.ag(n)
if(!(o<n))break
q[t.n(s,o)]=this.aV(p.n(r,o));++o}return q}}
H.kR.prototype={
gW:function(a){return this.gm(this)===0},
C:function(a){return P.we(this)},
i:function(a,b,c){return H.yw()},
$isbl:1,
$asbl:null}
H.kS.prototype={
gm:function(a){return this.a},
Z:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Z(0,b))return
return this.dk(b)},
dk:function(a){return this.b[a]},
a8:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dk(q))}}}
H.nN.prototype={}
H.p1.prototype={
aE:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.jw.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.z(this.a)
return"NullError: method not found: '"+H.z(t)+"' on null"}}
H.mA.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.z(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.z(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.z(this.a)+")"}}
H.p3.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h1.prototype={
gaH:function(){return this.b}}
H.rt.prototype={
$1:function(a){if(!!J.az(a).$iseb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k8.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.re.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rf.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rg.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rh.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ri.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eR.prototype={
C:function(a){return"Closure '"+H.nI(this).trim()+"'"},
ghR:function(){return this},
$D:null}
H.oK.prototype={}
H.of.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fI.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga5:function(a){var t,s
t=this.c
if(t==null)s=H.ep(this.a)
else s=typeof t!=="object"?J.dz(t):H.ep(t)
t=H.ep(this.b)
if(typeof s!=="number")return s.hU()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.z(this.d)+"' of "+H.jD(t)}}
H.kM.prototype={
C:function(a){return this.a}}
H.nT.prototype={
C:function(a){return"RuntimeError: "+H.z(this.a)}}
H.dO.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga5:function(a){return J.dz(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dO&&J.bb(this.a,b.a)}}
H.u.prototype={
gm:function(a){return this.a},
gW:function(a){return this.a===0},
gbg:function(a){return new H.mL(this,[H.O(this,0)])},
gb9:function(a){return H.dr(this.gbg(this),new H.mz(this),H.O(this,0),H.O(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.df(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.df(s,b)}else return this.hg(b)},
hg:function(a){var t=this.d
if(t==null)return!1
return this.bt(this.bH(t,this.bs(a)),a)>=0},
bP:function(a,b){b.a8(0,new H.my(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bk(t,b)
return s==null?null:s.gaW()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bk(r,b)
return s==null?null:s.gaW()}else return this.hh(b)},
hh:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bH(t,this.bs(a))
r=this.bt(s,a)
if(r<0)return
return s[r].gaW()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.ci()
this.b=t}this.d5(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.ci()
this.c=s}this.d5(s,b,c)}else{r=this.d
if(r==null){r=this.ci()
this.d=r}q=this.bs(b)
p=this.bH(r,q)
if(p==null)this.co(r,q,[this.cj(b,c)])
else{o=this.bt(p,b)
if(o>=0)p[o].saW(c)
else p.push(this.cj(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.dB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dB(this.c,b)
else return this.hi(b)},
hi:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bH(t,this.bs(a))
r=this.bt(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dK(q)
return q.gaW()},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.c}},
d5:function(a,b,c){var t=this.bk(a,b)
if(t==null)this.co(a,b,this.cj(b,c))
else t.saW(c)},
dB:function(a,b){var t
if(a==null)return
t=this.bk(a,b)
if(t==null)return
this.dK(t)
this.di(a,b)
return t.gaW()},
cj:function(a,b){var t,s
t=new H.mK(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dK:function(a){var t,s
t=a.gft()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bs:function(a){return J.dz(a)&0x3ffffff},
bt:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].ge1(),b))return s
return-1},
C:function(a){return P.we(this)},
bk:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
df:function(a,b){return this.bk(a,b)!=null},
ci:function(){var t=Object.create(null)
this.co(t,"<non-identifier-key>",t)
this.di(t,"<non-identifier-key>")
return t},
$iszr:1,
$isbl:1,
$asbl:null}
H.mz.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.my.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[a,b]}},this.a,"u")}}
H.mK.prototype={
ge1:function(){return this.a},
gaW:function(){return this.b},
gft:function(){return this.d},
saW:function(a){return this.b=a}}
H.mL.prototype={
gm:function(a){return this.a.a},
gW:function(a){return this.a.a===0},
gV:function(a){var t,s
t=this.a
s=new H.mM(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ai:function(a,b){return this.a.Z(0,b)},
a8:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bM(t))
s=s.c}}}
H.mM.prototype={
gO:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.ra.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rc.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.hj.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdu:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tz(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdt:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tz(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cs:function(a,b,c){if(c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
return new H.pz(this,b,c)},
aU:function(a,b){return this.cs(a,b,0)},
f7:function(a,b){var t,s
t=this.gdu()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k6(this,s)},
cd:function(a,b){var t,s
t=this.gdt()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.k6(this,s)},
e6:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
return this.cd(b,c)},
$isF9:1,
gfn:function(){return this.b}}
H.k6.prototype={
gd_:function(a){return this.b.index},
gdT:function(a){var t=this.b
return t.index+t[0].length},
ba:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isds:1}
H.pz.prototype={
gV:function(a){return new H.jX(this.a,this.b,this.c,null)},
$ashi:function(){return[P.ds]},
$asn:function(){return[P.ds]}}
H.jX.prototype={
gO:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.f7(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jO.prototype={
gdT:function(a){return this.a+this.c.length},
n:function(a,b){return this.ba(b)},
ba:function(a){if(a!==0)throw H.l(P.jF(a,null,null))
return this.c},
$isds:1,
gd_:function(a){return this.a}}
H.qC.prototype={
gV:function(a){return new H.qD(this.a,this.b,this.c,null)},
$asn:function(){return[P.ds]}}
H.qD.prototype={
I:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.jO(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gO:function(){return this.d}}
H.fd.prototype={
ga9:function(a){return C.a0},
fM:function(a,b,c){return H.cN(a,b,c)},
fL:function(a){return this.fM(a,0,null)},
fK:function(a,b,c){var t
H.x7(a,b,c)
t=new DataView(a,b)
return t},
fJ:function(a,b){return this.fK(a,b,null)},
$isfd:1,
$isbg:1,
ge4:function(a){return a.byteLength}}
H.eo.prototype={
fk:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dT(b,d,"Invalid list position"))
else throw H.l(P.bE(b,0,c,d,null))},
d9:function(a,b,c,d){if(b>>>0!==b||b>c)this.fk(a,b,c,d)},
$iseo:1,
gbS:function(a){return a.buffer},
ge4:function(a){return a.byteLength}}
H.na.prototype={
ga9:function(a){return C.a1}}
H.jt.prototype={
gm:function(a){return a.length},
dG:function(a,b,c,d,e){var t,s,r
t=a.length
this.d9(a,b,t,"start")
this.d9(a,c,t,"end")
if(typeof b!=="number")return b.aB()
if(typeof c!=="number")return H.ag(c)
if(b>c)throw H.l(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a3()
if(e<0)throw H.l(P.dA(e))
r=d.length
if(r-e<s)throw H.l(new P.dM("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaE:1,
$asaE:function(){},
$isax:1,
$asax:function(){}}
H.hv.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.az(d).$ishv){this.dG(a,b,c,d,e)
return}this.d1(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hx.prototype={
$asaE:function(){},
$asax:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$asn:function(){return[P.U]},
$isp:1,
$isr:1,
$isn:1}
H.hz.prototype={
$asaE:function(){},
$asax:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$asn:function(){return[P.U]}}
H.hw.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.az(d).$ishw){this.dG(a,b,c,d,e)
return}this.d1(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.hy.prototype={
$asaE:function(){},
$asax:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]},
$isp:1,
$isr:1,
$isn:1}
H.hA.prototype={
$asaE:function(){},
$asax:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.nb.prototype={
ga9:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nc.prototype={
ga9:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nd.prototype={
ga9:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.ne.prototype={
ga9:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nf.prototype={
ga9:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.ng.prototype={
ga9:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nh.prototype={
ga9:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.ju.prototype={
ga9:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.fe.prototype={
ga9:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c1(a,b))
return a[b]},
c4:function(a,b,c){return new Uint8Array(a.subarray(b,H.Ge(b,c,a.length)))},
$isfe:1,
$isd5:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.pB.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pA.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pC.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pD.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qR.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qS.prototype={
$2:function(a,b){this.a.$2(1,new H.h1(a,b))},
$S:function(){return{func:1,args:[,P.dL]}}}
P.r1.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.ck.prototype={}
P.r2.prototype={
$0:function(){var t,s,r
try{this.b.aD(this.a.$0())}catch(r){t=H.cs(r)
s=H.cr(r)
P.x8(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lV.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.al(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lU.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.de(r)}else if(t.b===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eS.prototype={}
P.jZ.prototype={
cw:function(a,b){if(a==null)a=new P.ff()
if(this.a.a!==0)throw H.l(new P.dM("Future already completed"))
$.ao.toString
this.al(a,b)},
bm:function(a){return this.cw(a,null)},
$iseS:1,
gh7:function(){return this.a}}
P.dQ.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dM("Future already completed"))
t.d7(b)},
fP:function(a){return this.az(a,null)},
al:function(a,b){this.a.d8(a,b)}}
P.ka.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dM("Future already completed"))
t.aD(b)},
al:function(a,b){this.a.al(a,b)}}
P.k2.prototype={
gfF:function(){return this.b.b},
gdY:function(){return(this.c&1)!==0},
ghe:function(){return(this.c&2)!==0},
gdX:function(){return this.c===8},
hc:function(a){return this.b.b.cP(this.d,a)},
hm:function(a){if(this.c!==6)return!0
return this.b.b.cP(this.d,J.fB(a))},
h8:function(a){var t,s,r
t=this.e
s=J.bo(a)
r=this.b.b
if(H.fz(t,{func:1,args:[,,]}))return r.hI(t,s.gaq(a),a.gaH())
else return r.cP(t,s.gaq(a))},
hd:function(){return this.b.b.ed(this.d)},
gck:function(){return this.a}}
P.bi.prototype={
gfl:function(){return this.a===2},
gcg:function(){return this.a>=4},
c0:function(a,b){var t=$.ao
if(t!==C.e){t.toString
if(b!=null)b=P.xb(b,t)}return this.cp(a,b)},
b0:function(a){return this.c0(a,null)},
cp:function(a,b){var t,s
t=new P.bi(0,$.ao,null,[null])
s=b==null?1:3
this.c5(new P.k2(null,t,s,a,b,[H.O(this,0),null]))
return t},
c2:function(a){var t,s
t=$.ao
s=new P.bi(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.c5(new P.k2(null,s,8,a,null,[t,t]))
return s},
c5:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcg()){s.c5(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fx(null,null,t,new P.pX(this,a))}},
dA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gck()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcg()){p.dA(a)
return}this.a=p.a
this.c=p.c}t.a=this.bM(a)
s=this.b
s.toString
P.fx(null,null,s,new P.q4(t,this))}},
bL:function(){var t=this.c
this.c=null
return this.bM(t)},
bM:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gck()
t.a=s}return s},
aD:function(a){var t,s
t=this.$ti
if(H.dR(a,"$isck",t,"$asck"))if(H.dR(a,"$isbi",t,null))P.q_(a,this)
else P.wY(a,this)
else{s=this.bL()
this.a=4
this.c=a
P.fs(this,s)}},
de:function(a){var t=this.bL()
this.a=4
this.c=a
P.fs(this,t)},
al:function(a,b){var t=this.bL()
this.a=8
this.c=new P.eN(a,b)
P.fs(this,t)},
f0:function(a){return this.al(a,null)},
d7:function(a){var t
if(H.dR(a,"$isck",this.$ti,"$asck")){this.eY(a)
return}this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.pZ(this,a))},
eY:function(a){var t
if(H.dR(a,"$isbi",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.q3(this,a))}else P.q_(a,this)
return}P.wY(a,this)},
d8:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.pY(this,a,b))},
$isck:1,
gbN:function(){return this.a},
gfw:function(){return this.c}}
P.pX.prototype={
$0:function(){P.fs(this.a,this.b)},
$S:function(){return{func:1}}}
P.q4.prototype={
$0:function(){P.fs(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q0.prototype={
$1:function(a){var t=this.a
t.a=0
t.aD(a)},
$S:function(){return{func:1,args:[,]}}}
P.q1.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q2.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.pZ.prototype={
$0:function(){this.a.de(this.b)},
$S:function(){return{func:1}}}
P.q3.prototype={
$0:function(){P.q_(this.b,this.a)},
$S:function(){return{func:1}}}
P.pY.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.q7.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hd()}catch(q){s=H.cs(q)
r=H.cr(q)
if(this.c){p=J.fB(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eN(s,r)
o.a=!0
return}if(!!J.az(t).$isck){if(t instanceof P.bi&&t.gbN()>=4){if(t.gbN()===8){p=this.b
p.b=t.gfw()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b0(new P.q8(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.q8.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.q6.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hc(this.c)}catch(r){t=H.cs(r)
s=H.cr(r)
q=this.a
q.b=new P.eN(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.q5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hm(t)===!0&&q.e!=null){p=this.b
p.b=q.h8(t)
p.a=!1}}catch(o){s=H.cs(o)
r=H.cr(o)
q=this.a
p=J.fB(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eN(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jY.prototype={}
P.df.prototype={
av:function(a,b){return new P.ql(b,this,[H.av(this,"df",0),null])},
ai:function(a,b){var t,s
t={}
s=new P.bi(0,$.ao,null,[P.d6])
t.a=null
t.a=this.aM(new P.om(t,this,b,s),!0,new P.on(s),s.gbb())
return s},
a8:function(a,b){var t,s
t={}
s=new P.bi(0,$.ao,null,[null])
t.a=null
t.a=this.aM(new P.os(t,this,b,s),!0,new P.ot(s),s.gbb())
return s},
gm:function(a){var t,s
t={}
s=new P.bi(0,$.ao,null,[P.D])
t.a=0
this.aM(new P.ow(t),!0,new P.ox(t,s),s.gbb())
return s},
gW:function(a){var t,s
t={}
s=new P.bi(0,$.ao,null,[P.d6])
t.a=null
t.a=this.aM(new P.ou(t,s),!0,new P.ov(s),s.gbb())
return s},
ao:function(a){var t,s,r
t=H.av(this,"df",0)
s=H.a([],[t])
r=new P.bi(0,$.ao,null,[[P.p,t]])
this.aM(new P.oy(this,s),!0,new P.oz(s,r),r.gbb())
return r},
gad:function(a){var t,s
t={}
s=new P.bi(0,$.ao,null,[H.av(this,"df",0)])
t.a=null
t.a=this.aM(new P.oo(t,this,s),!0,new P.op(s),s.gbb())
return s}}
P.om.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xf(new P.ok(this.c,a),new P.ol(t,s),P.x6(t.a,s))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"df")}}
P.ok.prototype={
$0:function(){return J.bb(this.b,this.a)},
$S:function(){return{func:1}}}
P.ol.prototype={
$1:function(a){if(a===!0)P.uz(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d6]}}}
P.on.prototype={
$0:function(){this.a.aD(!1)},
$S:function(){return{func:1}}}
P.os.prototype={
$1:function(a){P.xf(new P.oq(this.c,a),new P.or(),P.x6(this.a.a,this.d))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"df")}}
P.oq.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.or.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.ot.prototype={
$0:function(){this.a.aD(null)},
$S:function(){return{func:1}}}
P.ow.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.ox.prototype={
$0:function(){this.b.aD(this.a.a)},
$S:function(){return{func:1}}}
P.ou.prototype={
$1:function(a){P.uz(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.ov.prototype={
$0:function(){this.a.aD(!0)},
$S:function(){return{func:1}}}
P.oy.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.a,"df")}}
P.oz.prototype={
$0:function(){this.b.aD(this.a)},
$S:function(){return{func:1}}}
P.oo.prototype={
$1:function(a){P.uz(this.a.a,this.c,a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"df")}}
P.op.prototype={
$0:function(){var t,s,r,q
try{r=H.jl()
throw H.l(r)}catch(q){t=H.cs(q)
s=H.cr(q)
P.x8(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oj.prototype={}
P.dg.prototype={
cI:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dO()
if((t&4)===0&&(this.e&32)===0)this.dm(this.gdw())},
e9:function(a){return this.cI(a,null)},
ec:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gW(t)}else t=!1
if(t)this.r.c3(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dm(this.gdz())}}}},
bT:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c7()
t=this.f
return t==null?$.$get$hb():t},
c7:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dO()
if((this.e&32)===0)this.r=null
this.f=this.dv()},
bG:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dD(b)
else this.c6(new P.pL(b,null,[H.av(this,"dg",0)]))},
bF:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dF(a,b)
else this.c6(new P.pN(a,b,null))},
eX:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dE()
else this.c6(C.J)},
bJ:function(){},
bK:function(){},
dv:function(){return},
c6:function(a){var t,s
t=this.r
if(t==null){t=new P.qA(null,null,0,[H.av(this,"dg",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c3(this)}},
dD:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cQ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c8((t&4)!==0)},
dF:function(a,b){var t,s
t=this.e
s=new P.pG(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c7()
t=this.f
if(!!J.az(t).$isck&&t!==$.$get$hb())t.c2(s)
else s.$0()}else{s.$0()
this.c8((t&4)!==0)}},
dE:function(){var t,s
t=new P.pF(this)
this.c7()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.az(s).$isck&&s!==$.$get$hb())s.c2(t)
else t.$0()},
dm:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c8((t&4)!==0)},
c8:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gW(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gW(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bJ()
else this.bK()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c3(this)},
eQ:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xb(b,t)
this.c=c},
gbN:function(){return this.e}}
P.pG.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fz(s,{func:1,args:[P.ab,P.dL]})
q=t.d
p=this.b
o=t.b
if(r)q.hJ(o,p,this.c)
else q.cQ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pF.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ee(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k0.prototype={
gbv:function(a){return this.a},
sbv:function(a,b){return this.a=b}}
P.pL.prototype={
cJ:function(a){a.dD(this.b)}}
P.pN.prototype={
cJ:function(a){a.dF(this.b,this.c)},
$ask0:function(){},
gaq:function(a){return this.b},
gaH:function(){return this.c}}
P.pM.prototype={
cJ:function(a){a.dE()},
gbv:function(a){return},
sbv:function(a,b){throw H.l(new P.dM("No events after a done."))}}
P.qn.prototype={
c3:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xw(new P.qo(this,a))
this.a=1},
dO:function(){if(this.a===1)this.a=3},
gbN:function(){return this.a}}
P.qo.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbv(r)
t.b=q
if(q==null)t.c=null
r.cJ(this.b)},
$S:function(){return{func:1}}}
P.qA.prototype={
gW:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbv(0,b)
this.c=b}}}
P.qB.prototype={}
P.qU.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qT.prototype={
$2:function(a,b){P.Gd(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dL]}}}
P.qV.prototype={
$0:function(){return this.a.aD(this.b)},
$S:function(){return{func:1}}}
P.hR.prototype={
aM:function(a,b,c,d){return this.f3(a,d,c,!0===b)},
e5:function(a,b,c){return this.aM(a,null,b,c)},
f3:function(a,b,c,d){return P.FT(this,a,b,c,d,H.av(this,"hR",0),H.av(this,"hR",1))},
dn:function(a,b){b.bG(0,a)},
fi:function(a,b,c){c.bF(a,b)},
$asdf:function(a,b){return[b]}}
P.hS.prototype={
bG:function(a,b){if((this.e&2)!==0)return
this.eG(0,b)},
bF:function(a,b){if((this.e&2)!==0)return
this.eH(a,b)},
bJ:function(){var t=this.y
if(t==null)return
t.e9(0)},
bK:function(){var t=this.y
if(t==null)return
t.ec(0)},
dv:function(){var t=this.y
if(t!=null){this.y=null
return t.bT(0)}return},
fd:function(a){this.x.dn(a,this)},
fh:function(a,b){this.x.fi(a,b,this)},
ff:function(){this.eX()},
eT:function(a,b,c,d,e,f,g){this.y=this.x.a.e5(this.gfc(),this.gfe(),this.gfg())},
$asdg:function(a,b){return[b]}}
P.ql.prototype={
dn:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cs(q)
r=H.cr(q)
P.Gc(b,s,r)
return}b.bG(0,t)}}
P.eN.prototype={
C:function(a){return H.z(this.a)},
$iseb:1,
gaq:function(a){return this.a},
gaH:function(){return this.b}}
P.qQ.prototype={}
P.r0.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ff()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qr.prototype={
ee:function(a){var t,s,r,q
try{if(C.e===$.ao){r=a.$0()
return r}r=P.xc(null,null,this,a)
return r}catch(q){t=H.cs(q)
s=H.cr(q)
r=P.kd(null,null,this,t,s)
return r}},
cQ:function(a,b){var t,s,r,q
try{if(C.e===$.ao){r=a.$1(b)
return r}r=P.xe(null,null,this,a,b)
return r}catch(q){t=H.cs(q)
s=H.cr(q)
r=P.kd(null,null,this,t,s)
return r}},
hJ:function(a,b,c){var t,s,r,q
try{if(C.e===$.ao){r=a.$2(b,c)
return r}r=P.xd(null,null,this,a,b,c)
return r}catch(q){t=H.cs(q)
s=H.cr(q)
r=P.kd(null,null,this,t,s)
return r}},
cu:function(a,b){if(b)return new P.qs(this,a)
else return new P.qt(this,a)},
fN:function(a,b){return new P.qu(this,a)},
n:function(a,b){return},
ed:function(a){if($.ao===C.e)return a.$0()
return P.xc(null,null,this,a)},
cP:function(a,b){if($.ao===C.e)return a.$1(b)
return P.xe(null,null,this,a,b)},
hI:function(a,b,c){if($.ao===C.e)return a.$2(b,c)
return P.xd(null,null,this,a,b,c)}}
P.qs.prototype={
$0:function(){return this.a.ee(this.b)},
$S:function(){return{func:1}}}
P.qt.prototype={
$0:function(){return this.a.ed(this.b)},
$S:function(){return{func:1}}}
P.qu.prototype={
$1:function(a){return this.a.cQ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qa.prototype={
gm:function(a){return this.a},
gW:function(a){return this.a===0},
gb9:function(a){var t=H.O(this,0)
return H.dr(new P.qb(this,[t]),new P.qd(this),t,H.O(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f2(b)},
f2:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fa(0,b)},
fa:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ux()
this.b=t}this.dc(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ux()
this.c=s}this.dc(s,b,c)}else this.fz(b,c)},
fz:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ux()
this.d=t}s=this.aK(a)
r=t[s]
if(r==null){P.uy(t,s,[a,b]);++this.a
this.e=null}else{q=this.aL(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cn(0,b)},
cn:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a8:function(a,b){var t,s,r,q
t=this.ca()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bM(this))}},
ca:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
dc:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uy(a,b,c)},
bi:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.FV(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aK:function(a){return J.dz(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bb(a[s],b))return s
return-1},
$isbl:1,
$asbl:null}
P.qd.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qb.prototype={
gm:function(a){return this.a.a},
gW:function(a){return this.a.a===0},
gV:function(a){var t=this.a
return new P.qc(t,t.ca(),0,null,this.$ti)},
ai:function(a,b){return this.a.Z(0,b)},
a8:function(a,b){var t,s,r,q
t=this.a
s=t.ca()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bM(t))}}}
P.qc.prototype={
gO:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k5.prototype={
bs:function(a){return H.H0(a)&0x3ffffff},
bt:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge1()
if(r==null?b==null:r===b)return s}return-1}}
P.k4.prototype={
gV:function(a){var t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gW:function(a){return this.a===0},
ai:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f1(b)},
f1:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
cF:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ai(0,a)?a:null
else return this.fm(a)},
fm:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(a)]
r=this.aL(s,a)
if(r<0)return
return J.i1(s,r).gdj()},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.da(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.da(r,b)}else return this.aJ(0,b)},
aJ:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.FW()
this.d=t}s=this.aK(b)
r=t[s]
if(r==null)t[s]=[this.c9(b)]
else{if(this.aL(r,b)>=0)return!1
r.push(this.c9(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cn(0,b)},
cn:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return!1
this.dd(s.splice(r,1)[0])
return!0},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
da:function(a,b){if(a[b]!=null)return!1
a[b]=this.c9(b)
return!0},
bi:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dd(t)
delete a[b]
return!0},
c9:function(a){var t,s
t=new P.qh(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dd:function(a){var t,s
t=a.gf_()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aK:function(a){return J.dz(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].gdj(),b))return s
return-1},
$iseu:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qh.prototype={
gdj:function(){return this.a},
gf_:function(){return this.c}}
P.dv.prototype={
gO:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qe.prototype={}
P.fa.prototype={
av:function(a,b){return H.dr(this,b,H.av(this,"fa",0),null)},
ai:function(a,b){var t
for(t=this.gV(this);t.I();)if(J.bb(t.gO(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gV(this);t.I();)b.$1(t.gO())},
a2:function(a,b){return P.dd(this,!0,H.av(this,"fa",0))},
ao:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.I();)++s
return s},
gW:function(a){return!this.gV(this).I()},
C:function(a){return P.tv(this,"(",")")},
$isn:1,
$asn:null}
P.hi.prototype={}
P.jp.prototype={}
P.hB.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.b3.prototype={
gV:function(a){return new H.em(a,this.gm(a),0,null,[H.av(a,"b3",0)])},
T:function(a,b){return this.n(a,b)},
a8:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bM(a))}},
gW:function(a){return this.gm(a)===0},
ai:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bb(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bM(a))}return!1},
av:function(a,b){return new H.fc(a,b,[H.av(a,"b3",0),null])},
cY:function(a,b){return H.wy(a,b,null,H.av(a,"b3",0))},
a2:function(a,b){var t,s,r
t=H.a([],[H.av(a,"b3",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ao:function(a){return this.a2(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bV:function(a,b,c,d){var t
P.de(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.de(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.ag(b)
t=c-b
if(t===0)return
if(J.e7(e,0))H.ba(P.bE(e,0,null,"skipCount",null))
if(H.dR(d,"$isp",[H.av(a,"b3",0)],"$asp")){s=e
r=d}else{r=J.xU(d,e).a2(0,!1)
s=0}q=J.kf(s)
p=J.bf(r)
if(J.ct(q.U(s,t),p.gm(r)))throw H.l(H.w7())
if(q.a3(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.U(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.U(s,o)))},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aA:function(a,b,c,d){var t,s,r,q,p
P.de(b,c,this.gm(a),null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ax(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.ax(a,b,r,d)}},
aY:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bb(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.aY(a,b,0)},
C:function(a){return P.jk(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qI.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify unmodifiable map"))},
$isbl:1,
$asbl:null}
P.n0.prototype={
n:function(a,b){return J.i1(this.a,b)},
i:function(a,b,c){J.kk(this.a,b,c)},
a8:function(a,b){J.xK(this.a,b)},
gW:function(a){return J.ru(this.a)},
gm:function(a){return J.ci(this.a)},
C:function(a){return J.cJ(this.a)},
$isbl:1,
$asbl:null}
P.hL.prototype={$asbl:null,$isbl:1}
P.n1.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.z(a)
t.N=s+": "
t.N+=H.z(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mO.prototype={
gV:function(a){return new P.qi(this,this.c,this.d,this.b,null,this.$ti)},
a8:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.ba(new P.bM(this))}},
gW:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.ag(b)
if(0>b||b>=t)H.ba(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a2:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fE(t)
return t},
ao:function(a){return this.a2(a,!0)},
h:function(a,b){this.aJ(0,b)},
bc:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jk(this,"{","}")},
eb:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jl());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aJ:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dl();++this.d},
dl:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a7(s,0,q,t,r)
C.b.a7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fE:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eL:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.qi.prototype={
gO:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.ba(new P.bM(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.o4.prototype={
gW:function(a){return this.a===0},
bP:function(a,b){var t
for(t=J.cI(b);t.I();)this.h(0,t.gO())},
a2:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dv(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
ao:function(a){return this.a2(a,!0)},
av:function(a,b){return new H.fT(this,b,[H.O(this,0),null])},
C:function(a){return P.jk(this,"{","}")},
a8:function(a,b){var t
for(t=new P.dv(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
bf:function(a,b){var t,s
t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.z(t.d)
while(t.I())}else{s=H.z(t.d)
for(;t.I();)s=s+b+H.z(t.d)}return s.charCodeAt(0)==0?s:s},
$iseu:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.o3.prototype={}
P.kB.prototype={
hq:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bf(b)
a1=P.de(a0,a1,t.gm(b),null,null,null)
s=$.$get$wX()
if(typeof a1!=="number")return H.ag(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Y(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.r9(C.c.a4(b,l))
h=H.r9(C.c.a4(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.U()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c8("")
p.N+=C.c.L(b,q,r)
p.N+=H.hC(k)
q=l
continue}}throw H.l(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.L(b,q,a1)
e=t.length
if(o>=0)P.uW(b,n,a1,o,m,e)
else{d=C.a.bE(e-1,4)+1
if(d===1)throw H.l(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aA(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.uW(b,n,a1,o,m,c)
else{d=C.d.bE(c,4)
if(d===1)throw H.l(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aA(b,a1,a1,d===2?"==":"=")}return b},
$asfN:function(){return[[P.p,P.D],P.C]}}
P.kC.prototype={
$asfP:function(){return[[P.p,P.D],P.C]}}
P.fN.prototype={}
P.fP.prototype={}
P.le.prototype={
$asfN:function(){return[P.C,[P.p,P.D]]}}
P.pc.prototype={
gJ:function(a){return"utf-8"}}
P.pd.prototype={
cz:function(a,b,c){var t,s,r,q
t=J.ci(a)
P.de(b,c,t,null,null,null)
s=new P.c8("")
r=new P.qK(!1,s,!0,0,0,0)
r.cz(a,b,t)
r.h3(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fS:function(a){return this.cz(a,0,null)},
$asfP:function(){return[[P.p,P.D],P.C]}}
P.qK.prototype={
h3:function(a,b,c){if(this.e>0)throw H.l(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qM(c)
p=new P.qL(this,a,b,c)
$loop$0:for(o=J.bf(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aG()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bA(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bA(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bA(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.N+=H.hC(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.ct(j,0)){this.c=!1
if(typeof j!=="number")return H.ag(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dx(l)
if(g.a3(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.xX(g.cU(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aG()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bA(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qM.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bf(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aG()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.qL.prototype={
$2:function(a,b){this.a.b.N+=P.oE(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.d6.prototype={}
P.bF.prototype={}
P.dW.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dW))return!1
return this.a===b.a&&this.b===b.b},
ay:function(a,b){return C.a.ay(this.a,b.gfD())},
ga5:function(a){var t=this.a
return(t^C.a.aT(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.yz(H.wk(this))
s=P.ia(H.u3(this))
r=P.ia(H.u2(this))
q=P.ia(H.EP(this))
p=P.ia(H.ER(this))
o=P.ia(H.ES(this))
n=P.yA(H.EQ(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yy(C.a.U(this.a,b.ghX()),this.b)},
ghn:function(){return this.a},
d3:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dA(this.ghn()))},
$isbF:1,
$asbF:function(){return[P.dW]},
gfD:function(){return this.a}}
P.U.prototype={$isbF:1,
$asbF:function(){return[P.dj]}}
P.dD.prototype={
U:function(a,b){return new P.dD(this.a+b.gbj())},
ar:function(a,b){return new P.dD(C.a.by(this.a*b))},
a3:function(a,b){return C.a.a3(this.a,b.gbj())},
aB:function(a,b){return C.a.aB(this.a,b.gbj())},
as:function(a,b){return C.a.as(this.a,b.gbj())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dD))return!1
return this.a===b.a},
ga5:function(a){return this.a&0x1FFFFFFF},
ay:function(a,b){return C.a.ay(this.a,b.gbj())},
C:function(a){var t,s,r,q,p
t=new P.lc()
s=this.a
if(s<0)return"-"+new P.dD(0-s).C(0)
r=t.$1(C.a.am(s,6e7)%60)
q=t.$1(C.a.am(s,1e6)%60)
p=new P.lb().$1(s%1e6)
return""+C.a.am(s,36e8)+":"+H.z(r)+":"+H.z(q)+"."+H.z(p)},
cU:function(a){return new P.dD(0-this.a)},
$isbF:1,
$asbF:function(){return[P.dD]},
gbj:function(){return this.a}}
P.lb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.D]}}}
P.lc.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.D]}}}
P.eb.prototype={
gaH:function(){return H.cr(this.$thrownJsError)}}
P.ff.prototype={
C:function(a){return"Throw of null."}}
P.cY.prototype={
gcc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.z(t)
q=this.gcc()+s+r
if(!this.a)return q
p=this.gcb()
o=P.vc(this.b)
return q+p+": "+H.z(o)},
gJ:function(a){return this.c}}
P.et.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.z(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.z(t)
else{if(typeof r!=="number")return r.aB()
if(r>t)s=": Not in range "+H.z(t)+".."+H.z(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.z(t)}}return s}}
P.md.prototype={
gcc:function(){return"RangeError"},
gcb:function(){if(J.e7(this.b,0))return": index must not be negative"
var t=this.f
if(J.bb(t,0))return": no indices are valid"
return": index should be less than "+H.z(t)},
gm:function(a){return this.f}}
P.V.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.ez.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.z(t):"UnimplementedError"}}
P.dM.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.z(P.vc(t))+"."}}
P.nq.prototype={
C:function(a){return"Out of Memory"},
gaH:function(){return},
$iseb:1}
P.jN.prototype={
C:function(a){return"Stack Overflow"},
gaH:function(){return},
$iseb:1}
P.l3.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.z(t)+"' during its initialization"}}
P.pW.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.z(t)}}
P.bJ.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.z(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a3()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.ag(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a4(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.z(r-o+1)+")\n"):s+(" (at character "+H.z(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Y(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.ar(" ",r-i+h.length)+"^\n"}}
P.lk.prototype={
C:function(a){return"Expando:"+H.z(this.a)},
n:function(a,b){var t,s
t=this.bI
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.dT(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.u4(b,"expando$values")
return s==null?null:H.u4(s,t)},
i:function(a,b,c){var t,s
t=this.bI
if(typeof t!=="string")t.set(b,c)
else{s=H.u4(b,"expando$values")
if(s==null){s=new P.ab()
H.wo(b,"expando$values",s)}H.wo(s,t,c)}},
gJ:function(a){return this.a}}
P.D.prototype={$isbF:1,
$asbF:function(){return[P.dj]}}
P.n.prototype={
av:function(a,b){return H.dr(this,b,H.av(this,"n",0),null)},
ai:function(a,b){var t
for(t=this.gV(this);t.I();)if(J.bb(t.gO(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gV(this);t.I();)b.$1(t.gO())},
a2:function(a,b){return P.dd(this,!0,H.av(this,"n",0))},
ao:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.I();)++s
return s},
gW:function(a){return!this.gV(this).I()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.y_("index"))
if(b<0)H.ba(P.bE(b,0,null,"index",null))
for(t=this.gV(this),s=0;t.I();){r=t.gO()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
C:function(a){return P.tv(this,"(",")")},
$asn:null}
P.jm.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.bl.prototype={$asbl:null}
P.cO.prototype={
ga5:function(a){return P.ab.prototype.ga5.call(this,this)},
C:function(a){return"null"}}
P.dj.prototype={$isbF:1,
$asbF:function(){return[P.dj]}}
P.ab.prototype={constructor:P.ab,$isab:1,
S:function(a,b){return this===b},
ga5:function(a){return H.ep(this)},
C:function(a){return H.jD(this)},
ga9:function(a){return new H.dO(H.kh(this),null)},
toString:function(){return this.C(this)}}
P.ds.prototype={}
P.eu.prototype={}
P.dL.prototype={}
P.C.prototype={$isbF:1,
$asbF:function(){return[P.C]}}
P.c8.prototype={
gm:function(a){return this.N.length},
gW:function(a){return this.N.length===0},
C:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eB.prototype={}
P.p9.prototype={
$2:function(a,b){var t,s,r,q
t=J.bf(b)
s=t.be(b,"=")
if(s===-1){if(!t.S(b,""))J.kk(a,P.qJ(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kk(a,P.qJ(r,0,r.length,t,!0),P.qJ(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.p6.prototype={
$2:function(a,b){throw H.l(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.D]}}}
P.p7.prototype={
$2:function(a,b){throw H.l(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.p8.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fh(C.c.L(this.a,a,b),16,null)
s=J.dx(t)
if(s.a3(t,0)||s.aB(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kb.prototype={
gek:function(){return this.b},
gcD:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.L(t,1,t.length-1)
return t},
gcK:function(a){var t=this.d
if(t==null)return P.x_(this.a)
return t},
gcL:function(a){var t=this.f
return t==null?"":t},
gdW:function(){var t=this.r
return t==null?"":t},
gcM:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hL(P.wQ(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
gdZ:function(){return this.c!=null},
ge0:function(){return this.f!=null},
ge_:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dr()
this.y=t}return t},
dr:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.z(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.z(s)}else t=s
t+=H.z(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.az(b)
if(!!t.$iseB){if(this.a===b.gcV())if(this.c!=null===b.gdZ()){s=this.b
r=b.gek()
if(s==null?r==null:s===r){s=this.gcD(this)
r=t.gcD(b)
if(s==null?r==null:s===r)if(J.bb(this.gcK(this),t.gcK(b)))if(J.bb(this.e,t.ge8(b))){s=this.f
r=s==null
if(!r===b.ge0()){if(r)s=""
if(s===t.gcL(b)){t=this.r
s=t==null
if(!s===b.ge_()){if(s)t=""
t=t===b.gdW()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga5:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dr()
this.y=t}t=C.c.ga5(t)
this.z=t}return t},
$iseB:1,
gcV:function(){return this.a},
ge8:function(a){return this.e}}
P.r3.prototype={
$1:function(a){throw H.l(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.p5.prototype={
gej:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bf(s)
q=r.aY(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fv(s,o,p,C.l,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fv(s,t,p,C.D,!1)
t=new P.pK(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.z(s):s}}
P.qY.prototype={
$1:function(a){return new Uint8Array(H.cx(96))},
$S:function(){return{func:1,args:[,]}}}
P.qX.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.xJ(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d5,args:[,,]}}}
P.qZ.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.di(a),r=0;r<t;++r)s.i(a,C.c.a4(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d5,P.C,P.D]}}}
P.r_.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a4(b,0),s=C.c.a4(b,1),r=J.di(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d5,P.C,P.D]}}}
P.qz.prototype={
gdZ:function(){return this.c>0},
ge0:function(){var t=this.f
if(typeof t!=="number")return t.a3()
return t<this.r},
ge_:function(){return this.r<this.a.length},
gcV:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
gek:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcD:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gcK:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.U()
s=this.e
if(typeof s!=="number")return H.ag(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.U()
return H.fh(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
ge8:function(a){return C.c.L(this.a,this.e,this.f)},
gcL:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a3()
return t<s?C.c.L(this.a,t+1,s):""},
gdW:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gcM:function(){var t=this.f
if(typeof t!=="number")return t.a3()
if(t>=this.r)return C.a_
t=P.C
return new P.hL(P.wQ(this.gcL(this),C.o),[t,t])},
ga5:function(a){var t=this.y
if(t==null){t=C.c.ga5(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.az(b)
if(!!t.$iseB)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseB:1}
P.pK.prototype={}
W.am.prototype={}
W.eL.prototype={
C:function(a){return String(a)},
$iseL:1,
$ish:1,
gae:function(a){return a.href}}
W.kr.prototype={
C:function(a){return String(a)},
$ish:1,
gae:function(a){return a.href}}
W.eP.prototype={$iseP:1,$isdm:1,$isay:1,$isab:1}
W.cK.prototype={$isab:1}
W.kz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cK]},
$isr:1,
$asr:function(){return[W.cK]},
$isn:1,
$asn:function(){return[W.cK]},
$isaE:1,
$asaE:function(){return[W.cK]},
$isax:1,
$asax:function(){return[W.cK]}}
W.fW.prototype={
$asp:function(){return[W.cK]},
$asr:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$isr:1,
$isn:1}
W.fZ.prototype={
$asp:function(){return[W.cK]},
$asr:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$isr:1,
$isn:1}
W.kD.prototype={
gae:function(a){return a.href}}
W.eQ.prototype={$iseQ:1}
W.kG.prototype={$ish:1}
W.fM.prototype={$isfM:1,
gJ:function(a){return a.name}}
W.e9.prototype={$ish:1,
gm:function(a){return a.length}}
W.kQ.prototype={$ish:1}
W.i6.prototype={
cB:function(a,b){return typeof console!="undefined"?console.error(b):null},
ba:function(a){return typeof console!="undefined"?console.group(a):null},
e2:function(a){return typeof console!="undefined"?console.info(a):null},
hN:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fQ.prototype={
gJ:function(a){return a.name}}
W.kW.prototype={
gaI:function(a){return a.style}}
W.kX.prototype={
gae:function(a){return a.href}}
W.fR.prototype={
gaI:function(a){return a.style}}
W.fS.prototype={
gJ:function(a){return a.name}}
W.kY.prototype={
gaI:function(a){return a.style}}
W.bI.prototype={$isbI:1,$isab:1}
W.eT.prototype={
bD:function(a,b){var t=this.fb(a,b)
return t!=null?t:""},
fb:function(a,b){if(W.yx(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yB()+b)},
K:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbo:function(a){return a.display},
sbo:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iA.prototype={}
W.pI.prototype={
bD:function(a,b){var t=this.b
return J.xP(t.gad(t),b)},
fA:function(a,b){var t
for(t=this.a,t=new H.em(t,t.gm(t),0,null,[H.O(t,0)]);t.I();)t.d.style[a]=b},
sbo:function(a,b){this.fA("display",b)},
eR:function(a){var t=P.dd(this.a,!0,null)
this.b=new H.fc(t,new W.pJ(),[H.O(t,0),null])}}
W.jx.prototype={}
W.pJ.prototype={
$1:function(a){return J.rw(a)},
$S:function(){return{func:1,args:[,]}}}
W.i8.prototype={
gbd:function(a){return this.bD(a,"content")},
gbo:function(a){return this.bD(a,"display")}}
W.kZ.prototype={
gaI:function(a){return a.style}}
W.l_.prototype={
gaI:function(a){return a.style}}
W.l4.prototype={
gcC:function(a){return a.files}}
W.eU.prototype={$iseU:1,$isab:1}
W.i9.prototype={
bO:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ea.prototype={$isea:1}
W.ib.prototype={$ish:1}
W.ic.prototype={
gJ:function(a){return a.name}}
W.l7.prototype={
gJ:function(a){var t=a.name
if(P.vb()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vb()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.id.prototype={
C:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(this.gb3(a))+" x "+H.z(this.gaX(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.az(b)
if(!t.$isbS)return!1
return a.left===t.gbX(b)&&a.top===t.gc1(b)&&this.gb3(a)===t.gb3(b)&&this.gaX(a)===t.gaX(b)},
ga5:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb3(a)
q=this.gaX(a)
return W.wZ(W.eI(W.eI(W.eI(W.eI(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaX:function(a){return a.height},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width},
$isbS:1,
$asbS:function(){}}
W.ie.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]},
$isaE:1,
$asaE:function(){return[P.C]},
$isax:1,
$asax:function(){return[P.C]}}
W.iB.prototype={
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
W.iV.prototype={
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
W.ig.prototype={
K:function(a,b){return a.item(b)}}
W.ih.prototype={
h:function(a,b){return a.add(b)},
ai:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k1.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.V("Cannot modify list"))},
gaI:function(a){return W.FS(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.dm.prototype={
gdP:function(a){return new W.pQ(a)},
C:function(a){return a.localName},
br:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdm:1,
$isay:1,
$isab:1,
$ish:1,
gaI:function(a){return a.style}}
W.ld.prototype={
gJ:function(a){return a.name}}
W.fU.prototype={
gJ:function(a){return a.name}}
W.fV.prototype={$isfV:1,
gaq:function(a){return a.error}}
W.S.prototype={$isS:1,$isab:1}
W.aF.prototype={
fH:function(a,b,c,d){if(c!=null)this.eW(a,b,c,!1)},
hD:function(a,b,c,d){if(c!=null)this.fv(a,b,c,!1)},
eW:function(a,b,c,d){return a.addEventListener(b,H.dh(c,1),!1)},
fv:function(a,b,c,d){return a.removeEventListener(b,H.dh(c,1),!1)}}
W.lK.prototype={
gJ:function(a){return a.name}}
W.cb.prototype={$iscb:1,$isab:1,
gJ:function(a){return a.name}}
W.f1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isf1:1,
$isaE:1,
$asaE:function(){return[W.cb]},
$isax:1,
$asax:function(){return[W.cb]},
$isp:1,
$asp:function(){return[W.cb]},
$isr:1,
$asr:function(){return[W.cb]},
$isn:1,
$asn:function(){return[W.cb]}}
W.iC.prototype={
$asp:function(){return[W.cb]},
$asr:function(){return[W.cb]},
$asn:function(){return[W.cb]},
$isp:1,
$isr:1,
$isn:1}
W.iW.prototype={
$asp:function(){return[W.cb]},
$asr:function(){return[W.cb]},
$asn:function(){return[W.cb]},
$isp:1,
$isr:1,
$isn:1}
W.lL.prototype={
gaq:function(a){return a.error}}
W.lM.prototype={
gJ:function(a){return a.name}}
W.lN.prototype={
gaq:function(a){return a.error},
gm:function(a){return a.length}}
W.lQ.prototype={
gaI:function(a){return a.style},
gcR:function(a){return a.weight}}
W.lR.prototype={
h:function(a,b){return a.add(b)},
hW:function(a,b,c){return a.forEach(H.dh(b,3),c)},
a8:function(a,b){b=H.dh(b,3)
return a.forEach(b)}}
W.iw.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.cl.prototype={$iscl:1,$isab:1}
W.m1.prototype={
gm:function(a){return a.length}}
W.f3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaE:1,
$asaE:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iD.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.iX.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.iy.prototype={
K:function(a,b){return a.item(b)}}
W.dZ.prototype={
i4:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hs:function(a,b,c,d){return a.open(b,c,d)},
ghG:function(a){return W.Gh(a.response)},
b5:function(a,b){return a.send(b)},
$isdZ:1,
$isab:1,
ghH:function(a){return a.responseText}}
W.m4.prototype={
$1:function(a){return J.xO(a)},
$S:function(){return{func:1,args:[W.dZ]}}}
W.m5.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.as()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.az(0,t)
else p.bm(a)},
$S:function(){return{func:1,args:[,]}}}
W.hc.prototype={}
W.m9.prototype={
gJ:function(a){return a.name}}
W.hd.prototype={$ishd:1}
W.f5.prototype={$isf5:1,$isdm:1,$isay:1,$isab:1,
az:function(a,b){return a.complete.$1(b)}}
W.me.prototype={$ish:1,
gcC:function(a){return a.files},
gJ:function(a){return a.name}}
W.mD.prototype={
gJ:function(a){return a.name}}
W.hl.prototype={
h:function(a,b){return a.add(b)}}
W.hm.prototype={$ishm:1,
gae:function(a){return a.href}}
W.mV.prototype={
C:function(a){return String(a)},
gae:function(a){return a.href}}
W.n_.prototype={
gJ:function(a){return a.name}}
W.ht.prototype={
gaq:function(a){return a.error}}
W.jr.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n4.prototype={
gbd:function(a){return a.content},
gJ:function(a){return a.name}}
W.n5.prototype={
hS:function(a,b,c){return a.send(b,c)},
b5:function(a,b){return a.send(b)}}
W.hu.prototype={
gJ:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isab:1}
W.js.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cn]},
$isax:1,
$asax:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.iN.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.j6.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.ni.prototype={$ish:1}
W.nj.prototype={
gJ:function(a){return a.name}}
W.ay.prototype={
C:function(a){var t=a.nodeValue
return t==null?this.eD(a):t},
ai:function(a,b){return a.contains(b)},
$isay:1,
$isab:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaE:1,
$asaE:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iO.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.j7.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.nm.prototype={
gJ:function(a){return a.name}}
W.nr.prototype={
gJ:function(a){return a.name}}
W.nv.prototype={
gJ:function(a){return a.name}}
W.nx.prototype={$ish:1}
W.e0.prototype={
gJ:function(a){return a.name}}
W.nC.prototype={
gm:function(a){return a.length}}
W.cd.prototype={
K:function(a,b){return a.item(b)},
$iscd:1,
$isab:1,
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cd]},
$isr:1,
$asr:function(){return[W.cd]},
$isn:1,
$asn:function(){return[W.cd]},
$isaE:1,
$asaE:function(){return[W.cd]},
$isax:1,
$asax:function(){return[W.cd]}}
W.iP.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.j8.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.nH.prototype={
b5:function(a,b){return a.send(b)}}
W.jG.prototype={
b5:function(a,b){return a.send(b)}}
W.fl.prototype={$isfl:1,$isdm:1,$isay:1,$isab:1}
W.jI.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.o2.prototype={
gJ:function(a){return a.name}}
W.o5.prototype={$ish:1}
W.o6.prototype={
gJ:function(a){return a.name}}
W.o7.prototype={
gJ:function(a){return a.name}}
W.co.prototype={$isco:1,$isab:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]},
$isaE:1,
$asaE:function(){return[W.co]},
$isax:1,
$asax:function(){return[W.co]}}
W.fX.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.h_.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.hF.prototype={$ishF:1}
W.cp.prototype={$iscp:1,$isab:1,
gcR:function(a){return a.weight}}
W.jL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]},
$isaE:1,
$asaE:function(){return[W.cp]},
$isax:1,
$asax:function(){return[W.cp]}}
W.iQ.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.j9.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.fm.prototype={$isfm:1,$isab:1}
W.ob.prototype={
gaq:function(a){return a.error}}
W.cf.prototype={
K:function(a,b){return a.item(b)},
$iscf:1,
$isab:1,
gm:function(a){return a.length}}
W.oc.prototype={
gJ:function(a){return a.name}}
W.od.prototype={
gJ:function(a){return a.name}}
W.oi.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a8:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gW:function(a){return a.key(0)==null},
$isbl:1,
$asbl:function(){return[P.C,P.C]}}
W.cg.prototype={$iscg:1,$isab:1,
gae:function(a){return a.href}}
W.e3.prototype={}
W.oM.prototype={
gbd:function(a){return a.content}}
W.oO.prototype={
gJ:function(a){return a.name}}
W.cQ.prototype={$isab:1}
W.cG.prototype={$isab:1}
W.oR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cG]},
$isax:1,
$asax:function(){return[W.cG]},
$isp:1,
$asp:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$isn:1,
$asn:function(){return[W.cG]}}
W.iR.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.ja.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.oS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cQ]},
$isax:1,
$asax:function(){return[W.cQ]},
$isp:1,
$asp:function(){return[W.cQ]},
$isr:1,
$asr:function(){return[W.cQ]},
$isn:1,
$asn:function(){return[W.cQ]}}
W.fY.prototype={
$asp:function(){return[W.cQ]},
$asr:function(){return[W.cQ]},
$asn:function(){return[W.cQ]},
$isp:1,
$isr:1,
$isn:1}
W.h0.prototype={
$asp:function(){return[W.cQ]},
$asr:function(){return[W.cQ]},
$asn:function(){return[W.cQ]},
$isp:1,
$isr:1,
$isn:1}
W.oW.prototype={
gm:function(a){return a.length}}
W.cq.prototype={$iscq:1,$isab:1}
W.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]},
$isaE:1,
$asaE:function(){return[W.cq]},
$isax:1,
$asax:function(){return[W.cq]}}
W.iS.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.jb.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.fp.prototype={$isfp:1,$isab:1}
W.jQ.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e4.prototype={}
W.pa.prototype={
C:function(a){return String(a)},
$ish:1,
gae:function(a){return a.href}}
W.pe.prototype={
gm:function(a){return a.length}}
W.fq.prototype={$isfq:1,$isab:1}
W.jR.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pj.prototype={
b5:function(a,b){return a.send(b)}}
W.jT.prototype={$ish:1,
gJ:function(a){return a.name}}
W.pq.prototype={$ish:1}
W.eD.prototype={$ish:1}
W.fr.prototype={$isfr:1,$isay:1,$isab:1,
gJ:function(a){return a.name}}
W.pH.prototype={
C:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(a.width)+" x "+H.z(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.az(b)
if(!t.$isbS)return!1
s=a.left
r=t.gbX(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc1(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=J.dz(a.left)
s=J.dz(a.top)
r=J.dz(a.width)
q=J.dz(a.height)
return W.wZ(W.eI(W.eI(W.eI(W.eI(0,t),s),r),q))},
$isbS:1,
$asbS:function(){},
gaX:function(a){return a.height},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width}}
W.hP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[P.bS]},
$isax:1,
$asax:function(){return[P.bS]},
$isp:1,
$asp:function(){return[P.bS]},
$isr:1,
$asr:function(){return[P.bS]},
$isn:1,
$asn:function(){return[P.bS]}}
W.iT.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$asn:function(){return[P.bS]},
$isp:1,
$isr:1,
$isn:1}
W.jc.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$asn:function(){return[P.bS]},
$isp:1,
$isr:1,
$isn:1}
W.k_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bI]},
$isr:1,
$asr:function(){return[W.bI]},
$isn:1,
$asn:function(){return[W.bI]},
$isaE:1,
$asaE:function(){return[W.bI]},
$isax:1,
$asax:function(){return[W.bI]}}
W.iU.prototype={
$asp:function(){return[W.bI]},
$asr:function(){return[W.bI]},
$asn:function(){return[W.bI]},
$isp:1,
$isr:1,
$isn:1}
W.jd.prototype={
$asp:function(){return[W.bI]},
$asr:function(){return[W.bI]},
$asn:function(){return[W.bI]},
$isp:1,
$isr:1,
$isn:1}
W.pO.prototype={$ish:1}
W.pP.prototype={
gaX:function(a){return a.height},
gb3:function(a){return a.width}}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cl]},
$isax:1,
$asax:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]},
$isr:1,
$asr:function(){return[W.cl]},
$isn:1,
$asn:function(){return[W.cl]}}
W.iE.prototype={
$asp:function(){return[W.cl]},
$asr:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$isr:1,
$isn:1}
W.iY.prototype={
$asp:function(){return[W.cl]},
$asr:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$isr:1,
$isn:1}
W.q9.prototype={$ish:1}
W.hV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$isr:1,
$asr:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaE:1,
$asaE:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iF.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.iZ.prototype={
$asp:function(){return[W.ay]},
$asr:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$isr:1,
$isn:1}
W.qy.prototype={$ish:1}
W.k7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cf]},
$isr:1,
$asr:function(){return[W.cf]},
$isn:1,
$asn:function(){return[W.cf]},
$isaE:1,
$asaE:function(){return[W.cf]},
$isax:1,
$asax:function(){return[W.cf]}}
W.iG.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.j_.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cg]},
$isax:1,
$asax:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$isn:1,
$asn:function(){return[W.cg]}}
W.iH.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.j0.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.qO.prototype={$ish:1}
W.qP.prototype={$ish:1}
W.pQ.prototype={
aF:function(){var t,s,r,q,p
t=P.a4(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.ch)(s),++q){p=J.rx(s[q])
if(p.length!==0)t.h(0,p)}return t},
el:function(a){this.a.className=a.bf(0," ")},
gm:function(a){return this.a.classList.length},
gW:function(a){return this.a.classList.length===0},
ai:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.pT.prototype={
aM:function(a,b,c,d){return W.eG(this.a,this.b,a,!1,H.O(this,0))},
e5:function(a,b,c){return this.aM(a,null,b,c)}}
W.hQ.prototype={}
W.pU.prototype={
bT:function(a){if(this.b==null)return
this.dL()
this.b=null
this.d=null
return},
cI:function(a,b){if(this.b==null)return;++this.a
this.dL()},
e9:function(a){return this.cI(a,null)},
ec:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dJ()},
dJ:function(){var t=this.d
if(t!=null&&this.a<=0)J.xC(this.b,this.c,t,!1)},
dL:function(){var t=this.d
if(t!=null)J.xS(this.b,this.c,t,!1)},
eS:function(a,b,c,d,e){this.dJ()}}
W.pV.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gV:function(a){return new W.lP(a,this.gm(a),-1,null,[H.av(a,"bx",0)])},
h:function(a,b){throw H.l(new P.V("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on immutable List."))},
ax:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
bV:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.lP.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i1(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.qH.prototype={}
P.qE.prototype={
bq:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.az(a)
if(!!s.$isdW)return new Date(a.a)
if(!!s.$isF9)throw H.l(new P.ez("structured clone of RegExp"))
if(!!s.$iscb)return a
if(!!s.$iseQ)return a
if(!!s.$isf1)return a
if(!!s.$ishd)return a
if(!!s.$isfd||!!s.$iseo)return a
if(!!s.$isbl){r=this.bq(a)
q=this.b
p=q.length
if(r>=p)return H.w(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.w(q,r)
q[r]=o
s.a8(a,new P.qG(t,this))
return t.a}if(!!s.$isp){r=this.bq(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.fT(a,r)}throw H.l(new P.ez("structured clone of other type"))},
fT:function(a,b){var t,s,r,q,p
t=J.bf(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b2(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.qG.prototype={
$2:function(a,b){this.a.a[a]=this.b.b2(b)},
$S:function(){return{func:1,args:[,,]}}}
P.px.prototype={
bq:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dW(s,!0)
r.d3(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.ez("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GC(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bq(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mN()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.h5(a,new P.py(t,this))
return t.a}if(a instanceof Array){p=this.bq(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bf(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.ag(m)
r=J.di(n)
l=0
for(;l<m;++l)r.i(n,l,this.b2(o.n(a,l)))
return n}return a}}
P.py.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.kk(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qF.prototype={}
P.jW.prototype={
h5:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.ch)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.r5.prototype={
$1:function(a){return this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r6.prototype={
$1:function(a){return this.a.bm(a)},
$S:function(){return{func:1,args:[,]}}}
P.kU.prototype={
dM:function(a){if($.$get$v3().b.test(a))return a
throw H.l(P.dT(a,"value","Not a valid class token"))},
C:function(a){return this.aF().bf(0," ")},
gV:function(a){var t,s
t=this.aF()
s=new P.dv(t,t.r,null,null,[null])
s.c=t.e
return s},
a8:function(a,b){this.aF().a8(0,b)},
av:function(a,b){var t=this.aF()
return new H.fT(t,b,[H.O(t,0),null])},
gW:function(a){return this.aF().a===0},
gm:function(a){return this.aF().a},
ai:function(a,b){if(typeof b!=="string")return!1
this.dM(b)
return this.aF().ai(0,b)},
cF:function(a){return this.ai(0,a)?a:null},
h:function(a,b){this.dM(b)
return this.ho(0,new P.kV(b))},
a2:function(a,b){return this.aF().a2(0,!0)},
ao:function(a){return this.a2(a,!0)},
ho:function(a,b){var t,s
t=this.aF()
s=b.$1(t)
this.el(t)
return s},
$iseu:1,
$aseu:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.kV.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l5.prototype={
gJ:function(a){return a.name}}
P.qW.prototype={
$1:function(a){this.b.az(0,new P.jW([],[],!1).b2(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mc.prototype={
gJ:function(a){return a.name}}
P.nn.prototype={
bO:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fj(a,b,c)
q=P.Gg(t)
return q}catch(p){s=H.cs(p)
r=H.cr(p)
q=P.vo(s,r,null)
return q}},
h:function(a,b){return this.bO(a,b,null)},
fj:function(a,b,c){return a.add(new P.qF([],[]).b2(b))},
gJ:function(a){return a.name}}
P.hE.prototype={
gaq:function(a){return a.error}}
P.p_.prototype={
gaq:function(a){return a.error}}
P.qg.prototype={
bw:function(a){if(a<=0||a>4294967296)throw H.l(P.wt("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cG:function(){return Math.random()}}
P.qp.prototype={
aS:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bw:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wt("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aS()
return(this.a&t)>>>0}do{this.aS()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cG:function(){this.aS()
var t=this.a
this.aS()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eU:function(a){var t,s,r,q,p,o,n,m
t=J.e7(a,0)?-1:0
do{if(typeof a!=="number")return a.aG()
s=(a&4294967295)>>>0
a=C.d.am(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.am(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.am(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.am(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.am(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.am(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.am(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aS()
this.aS()
this.aS()
this.aS()}}
P.qq.prototype={}
P.bS.prototype={$asbS:null}
P.ko.prototype={$ish:1,
gae:function(a){return a.href}}
P.e8.prototype={$ish:1}
P.ll.prototype={$ish:1}
P.lm.prototype={$ish:1}
P.ln.prototype={$ish:1}
P.lo.prototype={$ish:1}
P.lp.prototype={$ish:1}
P.lq.prototype={$ish:1}
P.lr.prototype={$ish:1}
P.ls.prototype={$ish:1}
P.lt.prototype={$ish:1}
P.lu.prototype={$ish:1,
gae:function(a){return a.href}}
P.lv.prototype={$ish:1}
P.lw.prototype={$ish:1}
P.lx.prototype={$ish:1}
P.ly.prototype={$ish:1}
P.lz.prototype={$ish:1}
P.lA.prototype={$ish:1}
P.lO.prototype={$ish:1,
gae:function(a){return a.href}}
P.cm.prototype={$ish:1}
P.ma.prototype={$ish:1,
gae:function(a){return a.href}}
P.d2.prototype={$isab:1}
P.mG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d2]},
$isr:1,
$asr:function(){return[P.d2]},
$isn:1,
$asn:function(){return[P.d2]}}
P.iI.prototype={
$asp:function(){return[P.d2]},
$asr:function(){return[P.d2]},
$asn:function(){return[P.d2]},
$isp:1,
$isr:1,
$isn:1}
P.j1.prototype={
$asp:function(){return[P.d2]},
$asr:function(){return[P.d2]},
$asn:function(){return[P.d2]},
$isp:1,
$isr:1,
$isn:1}
P.n2.prototype={$ish:1}
P.n3.prototype={$ish:1}
P.d3.prototype={$isab:1}
P.nk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d3]},
$isr:1,
$asr:function(){return[P.d3]},
$isn:1,
$asn:function(){return[P.d3]}}
P.iJ.prototype={
$asp:function(){return[P.d3]},
$asr:function(){return[P.d3]},
$asn:function(){return[P.d3]},
$isp:1,
$isr:1,
$isn:1}
P.j2.prototype={
$asp:function(){return[P.d3]},
$asr:function(){return[P.d3]},
$asn:function(){return[P.d3]},
$isp:1,
$isr:1,
$isn:1}
P.nA.prototype={$ish:1,
gae:function(a){return a.href}}
P.nF.prototype={
gm:function(a){return a.length}}
P.o_.prototype={$ish:1,
gae:function(a){return a.href}}
P.oD.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.iK.prototype={
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
P.j3.prototype={
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
P.kv.prototype={
aF:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a4(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.ch)(r),++p){o=J.rx(r[p])
if(o.length!==0)s.h(0,o)}return s},
el:function(a){this.a.setAttribute("class",a.bf(0," "))}}
P.c9.prototype={
gdP:function(a){return new P.kv(a)},
br:function(a,b,c,d,e){throw H.l(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$ish:1}
P.oG.prototype={$ish:1}
P.oI.prototype={$ish:1}
P.ey.prototype={}
P.oQ.prototype={$ish:1,
gae:function(a){return a.href}}
P.d4.prototype={$isab:1}
P.p0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d4]},
$isr:1,
$asr:function(){return[P.d4]},
$isn:1,
$asn:function(){return[P.d4]}}
P.iL.prototype={
$asp:function(){return[P.d4]},
$asr:function(){return[P.d4]},
$asn:function(){return[P.d4]},
$isp:1,
$isr:1,
$isn:1}
P.j4.prototype={
$asp:function(){return[P.d4]},
$asr:function(){return[P.d4]},
$asn:function(){return[P.d4]},
$isp:1,
$isr:1,
$isn:1}
P.pb.prototype={$ish:1,
gae:function(a){return a.href}}
P.pf.prototype={$ish:1}
P.pg.prototype={$ish:1}
P.hT.prototype={$ish:1,
gae:function(a){return a.href}}
P.qv.prototype={$ish:1}
P.qw.prototype={$ish:1}
P.qx.prototype={$ish:1}
P.bg.prototype={}
P.d5.prototype={$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.fG.prototype={$isfG:1,$isab:1,
gm:function(a){return a.length}}
P.eO.prototype={$iseO:1,$isab:1,
gbS:function(a){return a.buffer}}
P.fH.prototype={
f4:function(a,b,c,d){return a.decodeAudioData(b,H.dh(c,1),H.dh(d,1))},
fU:function(a,b){var t,s,r
t=P.fG
s=new P.bi(0,$.ao,null,[t])
r=new P.dQ(s,[t])
this.f4(a,b,new P.kw(r),new P.kx(r))
return s}}
P.kw.prototype={
$1:function(a){this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kx.prototype={
$1:function(a){var t=this.a
if(a==null)t.bm("")
else t.bm(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.dU.prototype={}
P.kT.prototype={
gbS:function(a){return a.buffer}}
P.kq.prototype={
gJ:function(a){return a.name}}
P.nP.prototype={$ish:1}
P.qN.prototype={$ish:1}
P.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xn(a.item(b))},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
K:function(a,b){return P.xn(a.item(b))},
$isp:1,
$asp:function(){return[P.bl]},
$isr:1,
$asr:function(){return[P.bl]},
$isn:1,
$asn:function(){return[P.bl]}}
P.iM.prototype={
$asp:function(){return[P.bl]},
$asr:function(){return[P.bl]},
$asn:function(){return[P.bl]},
$isp:1,
$isr:1,
$isn:1}
P.j5.prototype={
$asp:function(){return[P.bl]},
$asr:function(){return[P.bl]},
$asn:function(){return[P.bl]},
$isp:1,
$isr:1,
$isn:1}
T.fD.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gW:function(a){return this.a.length===0},
gV:function(a){var t=this.a
return new J.i2(t,t.length,0,null,[H.O(t,0)])},
$ashi:function(){return[T.fE]},
$asn:function(){return[T.fE]},
gcC:function(a){return this.a}}
T.fE.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f4(C.x)
r=T.f4(C.y)
q=T.wh(0,this.b)
new T.iz(s,q,0,0,0,t,r).dq()
r=q.c.buffer
q=q.a
r.toString
q=H.cN(r,0,q)
this.cy=q
t=q}else{t=s.bB()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gJ:function(a){return this.a}}
T.d8.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.he.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.ag(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
if(typeof b!=="number")return H.ag(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aR:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.ag(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.ag(s)
b=t-(a-s)}return T.t5(this.a,this.d,b,a)},
aY:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.U()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.ag(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
be:function(a,b){return this.aY(a,b,0)},
cN:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.ag(s)
r=this.aR(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.ag(p)
if(typeof s!=="number")return s.U()
this.b=s+(t-(q-p))
return r},
c_:function(a){return P.oE(this.cN(a).bB(),0,null)},
a_:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a1:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aO:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ap(p,56)|C.a.ap(o,48)|C.a.ap(n,40)|C.a.ap(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ap(i,56)|C.a.ap(j,48)|C.a.ap(k,40)|C.a.ap(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bB:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.ag(r)
q=t-(s-r)
t=this.a
r=J.az(t)
if(!!r.$isd5){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cN(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.x9(r.c4(t,s,p>o?o:p)))},
eK:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbS:function(a){return this.a},
ghr:function(a){return this.b}}
T.ns.prototype={
hO:function(a,b){var t,s,r,q
if(b==null)b=J.ci(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.ce(s-q)
C.q.ax(r,t,s,a)
this.a+=b},
cS:function(a){return this.hO(a,null)},
hQ:function(a){var t,s,r,q
t=J.bf(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
this.ce(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
C.q.a7(q,s,s+r,t.gbS(a),t.ghr(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.ag(q)
this.a=t+(r-(s-q))},
aR:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cN(t,a,b-a)},
d0:function(a){return this.aR(a,null)},
ce:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.ba(P.dA("Invalid length "+H.z(s)))
r=new Uint8Array(s)
q=this.c
C.q.ax(r,0,q.length,q)
this.c=r},
f8:function(){return this.ce(null)},
gm:function(a){return this.a}}
T.pt.prototype={
fu:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aR(this.a-20,20)
if(s.a1()!==117853008){a.b=t
return}s.a1()
r=s.aO()
s.a1()
a.b=r
if(a.a1()!==101075792){a.b=t
return}a.aO()
a.a_()
a.a_()
q=a.a1()
p=a.a1()
o=a.aO()
n=a.aO()
m=a.aO()
l=a.aO()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
f9:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.ag(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a1()===101010256){a.b=t
return q}}throw H.l(new T.d8("Could not find End of Central Directory Record"))},
eO:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.f9(a)
this.a=t
a.b=t
a.a1()
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a1()
this.r=a.a1()
s=a.a_()
if(s>0)this.x=a.c_(s)
this.fu(a)
r=a.aR(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.U()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.as()
if(!(p<t+o))break
if(r.a1()!==33639248)break
p=new T.pv(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a_()
p.b=r.a_()
p.c=r.a_()
p.d=r.a_()
p.e=r.a_()
p.f=r.a_()
p.r=r.a1()
p.x=r.a1()
p.y=r.a1()
n=r.a_()
m=r.a_()
l=r.a_()
p.z=r.a_()
p.Q=r.a_()
p.ch=r.a1()
o=r.a1()
p.cx=o
if(n>0)p.cy=r.c_(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.aR(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.ag(g)
if(typeof k!=="number")return k.U()
r.b=k+(i-(h-g))
p.db=j.bB()
f=j.a_()
e=j.a_()
if(f===1){if(e>=8)p.y=j.aO()
if(e>=16)p.x=j.aO()
if(e>=24){o=j.aO()
p.cx=o}if(e>=28)p.z=j.a1()}}if(l>0)p.dx=r.c_(l)
a.b=o
p.dy=T.FN(a,p)
q.push(p)}}}
T.pu.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f4(C.x)
q=T.f4(C.y)
t=T.wh(0,t)
new T.iz(s,t,0,0,0,r,q).dq()
q=t.c.buffer
t=t.a
q.toString
t=H.cN(q,0,t)
this.cy=t
this.d=0}else{t=s.bB()
this.cy=t}}return t},
C:function(a){return this.z},
eP:function(a,b){var t,s,r,q
t=a.a1()
this.a=t
if(t!==67324752)throw H.l(new T.d8("Invalid Zip Signature"))
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a_()
this.r=a.a1()
this.x=a.a1()
this.y=a.a1()
s=a.a_()
r=a.a_()
this.z=a.c_(s)
this.Q=a.cN(r).bB()
this.cx=a.cN(this.ch.x)
if((this.c&8)!==0){q=a.a1()
if(q===134695760)this.r=a.a1()
else this.r=q
this.x=a.a1()
this.y=a.a1()}}}
T.pv.prototype={
C:function(a){return this.cy}}
T.ps.prototype={
fV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.FM(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.ch)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cX()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fE(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dR(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.t5(k,0,null,0)}else if(k instanceof T.he){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.he(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h1(m,"/")
j.y=n.r
s.push(j)}return new T.fD(s,null)}}
T.m6.prototype={
eJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ap(1,this.b)
r=H.cx(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iz.prototype={
dq:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.U()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.as()
if(!(r<s+q))break
if(!this.fq())break}},
fq:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.U()
if(typeof s!=="number")return s.as()
if(s>=r+q)return!1
p=this.au(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.au(16)
s=this.au(16)
if(n!==0&&n!==(s^65535)>>>0)H.ba(new T.d8("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.ba(new T.d8("Input buffer is broken"))
m=t.aR(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.ag(l)
if(typeof s!=="number")return s.U()
t.b=s+(r-(q-l))
this.b.hQ(m)
break
case 1:this.dh(this.f,this.r)
break
case 2:this.fs()
break
default:throw H.l(new T.d8("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return r.as()
if(r>=q+p)throw H.l(new T.d8("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.at(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ap(1,a)
this.c=C.a.dH(t,a)
this.d=s-a
return(t&r-1)>>>0},
cm:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.U()
if(typeof p!=="number")return p.as()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.at(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ap(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dH(r,k)
this.d=q-k
return l&65535},
fs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cx(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.au(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.f4(p)
k=new Uint8Array(H.cx(t))
j=new Uint8Array(H.cx(s))
i=this.dg(t,l,k)
h=this.dg(s,l,j)
this.dh(T.f4(i),T.f4(h))},
dh:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cm(a)
if(s>285)throw H.l(new T.d8("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.f8()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.au(C.V[p])
n=this.cm(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.au(C.U[n])
for(r=-m;o>m;){t.cS(t.d0(r))
o-=m}if(o===m)t.cS(t.d0(r))
else t.cS(t.aR(r,o-m))}else throw H.l(new T.d8("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
dg:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cm(b)
switch(q){case 16:p=3+this.au(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.au(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.au(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.d8("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kp.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Math Book",H.a([$.L,$.Y,$.as],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.L,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.E,$.Y,$.b6],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.L,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.L,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c_,$.au],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.m)
q.i(0,$.bc,$.m)
q.i(0,$.f_,$.k)
q.i(0,$.b0,$.K)
q.i(0,$.cA,$.k)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.EF
n=[U.b]
q.i(0,new R.a0("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.a0("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.ws(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.y
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a0("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fi(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eW,$.K)
s.i(0,$.cA,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.a0("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a0("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eq(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
s.i(0,new R.a0("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fi(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.eW,$.K)
t.i(0,$.cA,$.m)
t.i(0,$.bX,$.K)
t.i(0,$.rT,$.K)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ac
t.i(0,new R.a0("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fi(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ac
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.EL
t.i(0,new R.a0("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e1(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
t.i(0,new R.a0("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
K.bT.prototype={
aQ:function(){return"<div class = 'feature'>Feels "+H.z(this.b)+", Quality: "+H.z(this.a)+"</div>"}}
L.ks.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[L.eM]}}}
L.eM.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dH,$.k)
q.i(0,$.bX,$.m)
q.i(0,$.dX,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ce+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.al)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eX,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.ca,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.y
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ce+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.al)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c3,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.y
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ce+". The "+r+" has won! "
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.u5(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.y
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ce+". The "+l+" has won! "
t.i(0,new R.Q("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.al)},
C:function(a){return this.Q},
aa:function(a,b,c,d,e){var t=this.Q
this.r=new X.ik("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i4]),H.a([],[M.h2]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$i3().Z(0,t))H.ba("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$i3().n(0,t))+".")
$.$get$i3().i(0,t,this)},
gb_:function(){return this.f},
gJ:function(a){return this.Q},
gbu:function(){return this.cy}}
L.aH.prototype={}
M.ku.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Barbells",H.a([$.aa,$.c5,$.E],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.eh,$.c6],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jh,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.eh,$.c6],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aL,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jh,$.X,$.dc],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.E,$.be],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vG,$.c6],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c6,$.b4],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dY,$.K)
q.i(0,$.bY,$.m)
q.i(0,$.cS,$.K)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a0("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a0("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e1(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a0("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hD(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dY,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.bY,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.a0("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.ws(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.a0("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e1(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.a0("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,t,null),$.aC)}}
U.ky.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$uV()
p=q.createBufferSource()
o=p
t=3
return P.cw(J.xI(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[P.eO]},
$asc4:function(){return[P.eO,P.bg]}}
U.mX.prototype={
aN:function(a){return"audio/mpeg"}}
U.np.prototype={
aN:function(a){return"audio/ogg"}}
U.oA.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.ym(b)
p=new W.hQ(q,"canplaythrough",!1,[W.S])
t=3
return P.cw(p.gad(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asii:function(){return[W.eP]},
$asc4:function(){return[W.eP,P.C]}}
U.oB.prototype={}
U.oC.prototype={}
O.kA.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Cod Piece",H.a([$.P,$.a_,$.aI,$.N,$.X],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.t9,$.N,$.bK],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.X,$.bj,$.N,$.a8],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.P,$.aD,$.N,$.bd],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cy,$.k)
t.i(0,$.h9,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.dq,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.eV,$.k)
r="After all the bullshit the "+$.y+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aJ+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.b]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.x(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a5("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.x(),!1,!1,new Y.kN("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.oP.prototype={
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[P.C]},
$asc4:function(){return[P.C,P.C]}}
Y.nM.prototype={
aN:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[P.bg]},
$asc4:function(){return[P.bg,P.bg]}}
T.kF.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Mystical Vial of Blood",H.a([$.b6,$.bj,$.R,$.aM],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ap,$.bj,$.R,$.b5],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.P,$.bj,$.R,$.aM,$.hf],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.bd,$.R,$.aM,$.hf,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.th,$.bj,$.aM,$.R,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.rX,$.k)
q.i(0,$.bX,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a0("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e1(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ce+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.al)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cS,$.k)
s.i(0,$.cz,$.K)
s.i(0,$.b0,$.K)
s.i(0,$.it,$.k)
s.i(0,$.cv,$.K)
p=$.o
o="The "+p+"  and the "
m=$.es
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.y
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.er(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.y
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ce+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.EC
s.i(0,new R.Q("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aJ
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.y
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ce+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aJ+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f2+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fi(),!1,!1,new Y.bZ("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aJ
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f2+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.u6(),!1,!1,new Y.bZ("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
m="The "+p+"  and the "
h=$.es
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.r)+".",o)],H.a([],k),R.er(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.al)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c3,$.m)
r="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f2+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e1(),!1,!1,new Y.bZ("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.y
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ce+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.al)}}
T.kI.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Pan's Pipe",H.a([$.a8,$.X,$.bj,$.R],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b8,$.R],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.E,$.bj,$.R],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aq,$.E,$.aL,$.R,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c3,$.m)
q.i(0,$.f0,$.k)
q.i(0,$.b0,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.y
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ce+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.EG
i=[U.b]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.al)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.k)
s.i(0,$.f0,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.bY,$.m)
s.i(0,$.c3,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ac
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.y
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ce+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.al)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ca,$.k)
t.i(0,$.lH,$.k)
t.i(0,$.f0,$.K)
t.i(0,$.c3,$.K)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.y
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aJ+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ce+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.al)}}
M.fL.prototype={
en:function(a){var t=this.a
if(!t.Z(0,a))return
return t.n(0,a)}}
Y.kK.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.eK(b,"\n")
p=P.C
o=P.cC(p,p)
n=P.cC(p,[P.eu,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d7(k).bh(k).length===0)m=null
else if(m==null)m=C.c.bh(k)
else{j=C.c.bh(k)
i=C.c.L(m,0,C.c.e3(m,$.$get$uZ())+1)+j
o.i(0,i,m)
if(!n.Z(0,m))n.i(0,m,P.a4(null,null,null,p))
J.xB(n.n(0,m),i)}}r=new M.fL(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[M.fL]},
$asc4:function(){return[M.fL,P.C]}}
A.kP.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.L,$.aa,$.b5,$.c5],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.L,$.b5],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b6,$.b5],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aL,$.a7,$.b5],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ap,$.b5],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.P,$.b5],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.E,$.b5],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cu,$.k)
q.i(0,$.bY,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a0("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dY,$.K)
s.i(0,$.bY,$.k)
s.i(0,$.cu,$.k)
s.i(0,$.cy,$.k)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aJ
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EJ
s.i(0,new R.a0("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.K)
t.i(0,$.c2,$.m)
t.i(0,$.cu,$.k)
t.i(0,$.bY,$.m)
t.i(0,$.io,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.a0("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
S.bG.prototype={
aQ:function(){return"<div class = 'feature'>"+this.c+", Says: "+this.d+"</div>"},
C:function(a){return H.z(new H.dO(H.kh(this),null))+": "+this.c},
gJ:function(a){return this.c}}
S.i5.prototype={}
S.m3.prototype={}
M.l0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Can of Spray Paint",H.a([$.aw,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.L,$.ai,$.b5,$.as],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.to,$.E,$.at],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.L,$.ai,$.as],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aw,$.an,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ai,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ai,$.aA,$.an],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aw,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aq,$.ai,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.P,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.ai,$.as],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.db,$.m)
q.i(0,$.cA,$.k)
q.i(0,$.b0,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.y+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a0("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dY,$.K)
s.i(0,$.bY,$.m)
s.i(0,$.cu,$.K)
s.i(0,$.bc,$.m)
s.i(0,$.cy,$.k)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aJ
l=l+n+" "
k=$.ac
s.i(0,new R.a0("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.K)
t.i(0,$.cv,$.K)
t.i(0,$.eV,$.K)
t.i(0,$.c2,$.K)
t.i(0,$.bc,$.m)
t.i(0,$.b0,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ac+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Ez
t.i(0,new R.a0("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
T.l6.prototype={}
V.l8.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Trendy Fabric",H.a([$.aw,$.P],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aw,$.te,$.hf],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.E,$.tk,$.aN],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.jf
r=A.i("Broom",H.a([r,$.X,$.aa,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.tr,$.aa],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.P,$.b4,$.bj,$.aw,$.e_],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aw,$.P],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.c5,$.E,$.bk],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aw,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bk],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.E,$.aq,$.aa,$.c5,$.td],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bK],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aw,$.bO,$.b2],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ap,$.bh,$.b8],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ap,$.bh],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aw,$.ap,$.aM],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cz,$.m)
q.i(0,$.cv,$.K)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.b]
q.i(0,new R.a0("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.x(),!1,!1,new Y.i7("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.k)
s.i(0,$.bY,$.m)
s.i(0,$.eV,$.k)
s.i(0,$.dq,$.m)
s.i(0,$.bc,$.k)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.EH
s.i(0,new R.a0("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ec,$.k)
t.i(0,$.bc,$.m)
t.i(0,$.dn,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.it,$.k)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a0("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
U.l9.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.as,$.a7,$.L,$.aD,$.R,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bj,$.R,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b8,$.bj,$.R,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b6,$.R,$.bK],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b6,$.R,$.bk,$.aD,$.bd,$.bQ,$.b7],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.b7,$.aD,$.L,$.R],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dH,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.f0,$.K)
q.i(0,$.bc,$.K)
q.i(0,$.bX,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.y
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ce+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.Q("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.al)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.k)
s.i(0,$.d0,$.m)
s.i(0,$.eg,$.ah)
s.i(0,$.ed,$.m)
s.i(0,$.rT,$.m)
s.i(0,$.d_,$.m)
s.i(0,$.d0,$.m)
s.i(0,$.bc,$.K)
s.i(0,$.bX,$.m)
s.i(0,$.dp,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aJ
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.y
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ce+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.y
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ce+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.al)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bX,$.k)
t.i(0,$.vi,$.ah)
t.i(0,$.h6,$.K)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.y
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aJ
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ac
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.y
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ce+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Ey
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.al)}}
Z.la.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Dream Diary",H.a([$.L,$.as,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bj,$.aa,$.R,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bj,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dn,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.it,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wf
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.al)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.m)
s.i(0,$.dn,$.k)
s.i(0,$.d1,$.m)
s.i(0,$.cj,$.m)
s.i(0,$.dE,$.m)
s.i(0,$.cu,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.al)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.db,$.k)
t.i(0,$.h5,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cj,$.k)
t.i(0,$.dE,$.k)
t.i(0,$.dn,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aJ+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.al)}}
X.ik.prototype={}
X.i4.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h2]]}}}
M.h2.prototype={}
U.lB.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Fluthulu Poster",H.a([$.P,$.b4,$.b7,$.bm],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.P,$.b4,$.b7],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aA,$.b8,$.f8,$.aI],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.vM,$.f9,$.aI],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bQ,$.bh,$.b7],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.as,$.L,$.aB,$.b7],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.L,$.a2,$.aa],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.L,$.a2,$.aa],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a2,$.bQ,$.b7,$.bm],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.au,$.a2,$.aa,$.aI],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.ta,$.a2,$.aa,$.aI],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h3,$.ah)
q.i(0,$.cz,$.m)
q.i(0,$.c3,$.m)
q.i(0,$.cB,$.K)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.b]
q.i(0,new R.a0("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.k)
s.i(0,$.d_,$.k)
s.i(0,$.iq,$.m)
s.i(0,$.bX,$.k)
s.i(0,$.eg,$.k)
s.i(0,$.h8,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.a0("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.k)
t.i(0,$.is,$.m)
t.i(0,$.bX,$.k)
t.i(0,$.dF,$.m)
t.i(0,$.eW,$.m)
t.i(0,$.rX,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.J
t.i(0,new R.a0("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.a6.prototype={
aQ:function(){return H.z(this.b)+", Quality: "+H.z(this.a)},
C:function(a){return H.z(new H.dO(H.kh(this),null))+": "+H.z(this.b)}}
O.c4.prototype={
aZ:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$aZ=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cw(q.aP(a),$async$aZ)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aZ,s)}}
O.dk.prototype={
b6:function(a){var t=0,s=P.bp(),r
var $async$b6=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b6,s)},
cA:function(a){var t=0,s=P.bp(),r,q=this
var $async$cA=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yn([J.uL(a)],q.aN(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cA,s)},
aP:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bi(0,$.ao,null,[p])
W.vq(a,null,q.aN(0),null,null,"arraybuffer",null,null).b0(new O.kE(new P.dQ(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
$asc4:function(a){return[a,P.bg]}}
O.kE.prototype={
$1:function(a){this.a.az(0,H.i0(J.xN(a),"$isbg"))},
$S:function(){return{func:1,args:[W.dZ]}}}
O.ex.prototype={
b6:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$b6=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cN(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hC(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b6,s)},
aP:function(a){var t=0,s=P.bp(),r
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vp(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
$asc4:function(a){return[a,P.C]}}
O.ii.prototype={
aP:function(a){var t=0,s=P.bp(),r
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
b6:function(a){return H.ba("Element format doesn't read from buffers")},
$asc4:function(a){return[a,P.C]}}
V.lS.prototype={
aN:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cw(A.ho("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[R.ha]},
$asc4:function(){return[R.ha,P.bg]}}
Z.ij.prototype={}
E.ix.prototype={}
E.no.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cJ(this.a)+" x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fF.prototype={
C:function(a){var t="[(Random from "+P.tv(this.d,"(",")")+") x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kt.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.z(this.b)+"]"}}
Y.lX.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.as,$.N,$.L,$.a_,$.hh],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.P,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mq,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lJ,$.m)
t.i(0,$.c3,$.k)
t.i(0,$.dp,$.K)
t.i(0,$.da,$.k)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aJ
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ac
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.y
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.x(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aJ+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a5("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.lY.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Sherpa Parka",H.a([$.bk,$.N,$.cc],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bk,$.as,$.L,$.N,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.E,$.N,$.aL],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.E,$.N,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lJ,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.dp,$.m)
t.i(0,$.da,$.k)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.b]
t.i(0,new R.a5("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.lZ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Doll",H.a([$.mq,$.aw,$.ar,$.R],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.X,$.ar,$.R,$.a_,$.b7],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tj,$.R],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.L,$.R,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.an,$.b6,$.R],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.K)
q.i(0,$.ef,$.k)
q.i(0,$.bY,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ce+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.Q("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.y
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.u6(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.F(s,q,null),$.al)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cu,$.k)
s.i(0,$.iq,$.k)
s.i(0,$.f0,$.m)
s.i(0,$.bX,$.k)
s.i(0,$.cv,$.m)
s.i(0,$.dp,$.K)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.y
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ce+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.y+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f2+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e1(),!1,!1,new Y.bZ("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.y
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.F(q,s,null),$.al)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.lI,$.k)
t.i(0,$.eV,$.m)
t.i(0,$.h8,$.k)
t.i(0,$.cz,$.m)
t.i(0,$.ef,$.K)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.Q("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aJ+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aJ
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hD(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.o
m="The "+q+"  and the "
r=$.es
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.y
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.r)+".",n)],H.a([],i),R.er(),!1,!1,new Y.iv(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n=$.o
r="The "+n+"  and the "
q=$.es
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.r)+".",m)],H.a([],i),R.er(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
h.i(0,new X.F(s,t,null),$.aC)}}
B.m_.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Family Ashes",H.a([$.aG,$.aq,$.N,$.aD,$.bU],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.L,$.N,$.aD,$.mn],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.as,$.N,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vC,$.N,$.mi,$.mn],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.t7,$.N,$.at,$.mn],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.ca,$.m)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.b]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.y+" has released the frogs into the "
p=$.o
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.m0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Hippo",H.a([$.aL,$.b9,$.R],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.vy,$.aL,$.ji],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.E,$.vB],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.dE,$.K)
t.i(0,$.db,$.m)
t.i(0,$.rU,$.m)
t.i(0,$.h5,$.m)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.y
q=q+p+", and when they walk into a consort village, a "
o=$.t
q=q+o+" "
n=$.J
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.Q("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.al)}}
X.m2.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Wand",H.a([$.X,$.R,$.a2,$.b9],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.b9,$.bz,$.R,$.b1,$.a8,$.a_,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bP,$.th,$.R,$.a2,$.b5,$.b9],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.b9,$.b1,$.R,$.aq],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.b1,$.R,$.b9],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.rS,$.k)
q.i(0,$.cz,$.m)
q.i(0,$.b0,$.k)
q.i(0,$.cj,$.k)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.y
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EB
i=[U.b]
q.i(0,new R.Q("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.al)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.k)
s.i(0,$.io,$.m)
s.i(0,$.d1,$.k)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.y
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.al)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.dq,$.K)
t.i(0,$.cA,$.k)
t.i(0,$.cj,$.k)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.y
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.y
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.F(s,t,null),$.al)}}
X.m7.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Footstick",H.a([$.dc,$.N,$.jj,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.as,$.N,$.hh,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.P,$.N,$.e_,$.mm,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tq,$.N,$.mi],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cB,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.dn,$.k)
t.i(0,$.da,$.k)
t.i(0,$.ec,$.k)
t.i(0,$.dE,$.k)
t.i(0,$.h7,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.b]
t.i(0,new R.a0("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.u7(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ce+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a0("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wr(),!1,!1,new Y.bZ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.al)}}
Q.m8.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Yardstick",H.a([$.dc,$.N,$.jj,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.as,$.N,$.hh,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.P,$.N,$.e_,$.mm,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mb.prototype={
aZ:function(a){var t=0,s=P.bp(),r,q,p
var $async$aZ=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vr(null,a,null)
p=new W.hQ(q,"load",!1,[W.S])
t=3
return P.cw(p.gad(p),$async$aZ)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aZ,s)},
$asdk:function(){return[W.f5]},
$asc4:function(){return[W.f5,P.bg]}}
Q.nE.prototype={
aN:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cw(q.cA(b),$async$R)
case 3:p=n.vr(null,d,null)
o=new W.hQ(p,"load",!1,[W.S])
t=4
return P.cw(o.gad(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)}}
Q.nB.prototype={
aN:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp()
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bs(null,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[Q.jA]},
$asc4:function(){return[Q.jA,P.bg]}}
B.mf.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[B.f6]}}}
B.f6.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dH,$.k)
q.i(0,$.bX,$.m)
q.i(0,$.dX,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.b]
q.i(0,new R.a0("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eX,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.ca,$.K)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a0("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.x(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c3,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.a0("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.u5(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
n.i(0,new X.F(s,t,null),$.aC)},
C:function(a){return this.ch},
gbu:function(){return this.a},
gb_:function(){return this.r},
gJ:function(a){return this.ch}}
A.a1.prototype={
ay:function(a,b){var t=b.gbx()-this.gbx()
if(t>0)t=1
else if(t<0)t=-1
return C.d.by(t)},
gfX:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.jE(null,null)
s.cW(this.f.a)
if(this.r===0)return t
r=P.dd(G.yu(this.f),!0,G.Z)
C.b.cZ(r,new A.mu())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.ch)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.gdS().length===0))t.push(" "+Y.Gz(s.hu(o.gdS())))}return t},
gbx:function(){var t,s,r
for(t=this.f,s=new P.dv(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbx()
return r},
gfO:function(){var t=this.f
return new H.e5(t,new A.mt(),[H.O(t,0)])},
gh6:function(){var t,s,r,q,p
for(t=this.gfX(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.ch)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.gh6()},
M:function(a,b,c,d,e){var t,s,r
t=P.tH(b,null)
this.f=t
if(t.a===0)t.h(0,$.ji)
s=P.tH(this.gfO(),null)
for(t=new P.dv(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.bP(0,r.geC())
this.f.an(0,r)}$.$get$w6().push(this)},
$isbF:1,
$asbF:function(){return[A.a1]}}
A.mu.prototype={
$2:function(a,b){return a.ge7()-C.a.by(b.ge7())},
$S:function(){return{func:1,args:[G.Z,G.Z]}}}
A.mt.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Z]}}}
Z.mB.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Juice Box",H.a([$.L,$.R,$.b9,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e_,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.dE,$.ah)
t.i(0,$.cz,$.m)
t.i(0,$.bY,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cj,$.k)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ac
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.y
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.y
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.y
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.Q("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.al)}}
N.mC.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Gavel",H.a([$.X,$.tg],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.bd],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.P,$.aw],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.L,$.as],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bO,$.ap,$.bk],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.L,$.as,$.an],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.E,$.bd],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h3,$.K)
q.i(0,$.c2,$.m)
q.i(0,$.cA,$.K)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.t
m=[U.b]
q.i(0,new R.a0("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.k)
s.i(0,$.dp,$.m)
s.i(0,$.cS,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Ex
s.i(0,new R.a0("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.k)
t.i(0,$.ca,$.m)
t.i(0,$.d_,$.K)
t.i(0,$.eg,$.m)
t.i(0,$.ed,$.m)
t.i(0,$.eZ,$.m)
t.i(0,$.ir,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EK
t.i(0,new R.a0("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
S.mE.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Shining Armor",H.a([$.aG,$.mp,$.N,$.f8],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mp,$.N,$.aN,$.at,$.f9],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.E,$.N,$.bh,$.ar],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.f8,$.N,$.mp],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lG,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.dY,$.k)
t.i(0,$.eZ,$.k)
t.i(0,$.h3,$.m)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a5("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aJ
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a5("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a5("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mF.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Dream Diary",H.a([$.L,$.as,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bj,$.aa,$.R,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bj,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dn,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.it,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wf
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.al)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.m)
s.i(0,$.dn,$.k)
s.i(0,$.d1,$.m)
s.i(0,$.cj,$.m)
s.i(0,$.dE,$.m)
s.i(0,$.cu,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.al)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.db,$.k)
t.i(0,$.h5,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cj,$.k)
t.i(0,$.dE,$.k)
t.i(0,$.dn,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aJ+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.al)}}
K.mH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Creeping Vine",H.a([$.X,$.R,$.b2,$.ar],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.t9,$.R,$.aM],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.au,$.R,$.ar],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bU,$.R,$.aM],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b6,$.R,$.aM,$.a_,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bh,$.R,$.ar],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c3,$.k)
q.i(0,$.bc,$.k)
q.i(0,$.h4,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.lJ,$.m)
q.i(0,$.cB,$.K)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.y
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.Q("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.al)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cB,$.K)
s.i(0,$.b0,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.y
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.Q("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.al)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.dH,$.k)
t.i(0,$.bX,$.m)
t.i(0,$.dX,$.m)
t.i(0,$.il,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.y
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.Q("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.al)}}
G.mI.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("FAQ",H.a([$.a7,$.R,$.Y,$.bV],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.R,$.b1,$.a7,$.bV],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.R,$.b1,$.bV,$.a_,$.ta],s),null,!1,"D13")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vL,$.R,$.aa],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.vU,$.R],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b2,$.R,$.b1,$.bV],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b6,$.R,$.ar],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.lE,$.k)
q.i(0,$.ec,$.m)
q.i(0,$.dF,$.k)
q.i(0,$.ef,$.k)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.y
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.Q("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.al)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.dq,$.k)
s.i(0,$.lD,$.k)
s.i(0,$.ee,$.k)
s.i(0,$.io,$.k)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
o=o+l+", but "
k=$.y
o=o+k+" has hoarded all of the planets "
j=$.aJ
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.u6(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.y
s.i(0,new R.Q("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.al)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.m)
q.i(0,$.bc,$.m)
q.i(0,$.f_,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.cA,$.k)
p="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f2+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e1(),!1,!1,new Y.bZ("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f2+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.eq(),!1,!1,new Y.bZ("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.y
q.i(0,new R.Q("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,q,null),$.al)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dF,$.k)
t.i(0,$.lE,$.k)
t.i(0,$.ef,$.m)
t.i(0,$.cz,$.m)
t.i(0,$.rW,$.m)
t.i(0,$.bX,$.K)
t.i(0,$.dY,$.K)
t.i(0,$.bY,$.m)
t.i(0,$.cu,$.K)
t.i(0,$.bc,$.m)
t.i(0,$.cy,$.k)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ac
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.y
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.y+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f2+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e1(),!1,!1,new Y.bZ("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,t,null),$.al)}}
Z.mW.prototype={
E:function(){var t,s,r,q
t=this.H
s=[G.Z]
r=A.i("Dream Bubbles Book",H.a([$.L,$.ai,$.as,$.vE],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.H(null,null,A.a1)
r=A.i("Uno Reverse Card",H.a([$.mj,$.jj,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.P,$.N,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hh,$.N,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.L,$.N,$.bq,$.as],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.K)
q.i(0,$.eg,$.K)
q.i(0,$.bX,$.K)
q.i(0,$.cS,$.m)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.b]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="As soon as the "+$.y+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a5("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ve,$.k)
t.i(0,$.cj,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.b0,$.m)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="As soon as the "+$.y+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a5("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.H,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.bL)}}
S.mY.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Alternate Costume",H.a([$.P,$.N,$.a2,$.a_,$.aj],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.P,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.N,$.aa,$.a2,$.dc],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jf,$.X,$.N,$.ar,$.a2,$.dc],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.eW,$.k)
t.i(0,$.eZ,$.m)
t.i(0,$.ca,$.k)
t.i(0,$.eX,$.m)
t.i(0,$.d0,$.K)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.o
t.i(0,new R.a5("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aJ
t.i(0,new R.a5("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.x(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.y+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aJ
t.i(0,new R.a5("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.x(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.mZ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Maiden's Breath",H.a([$.b2,$.N,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.N,$.dc,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aw,$.aG,$.E,$.N,$.a_,$.f8,$.vu],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.L,$.N,$.a8,$.as],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.da,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dq,$.m)
t.i(0,$.cu,$.m)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.n6.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Puzzle Box",H.a([$.X,$.R,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.R,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.E,$.R],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.E,$.R,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.jg,$.au,$.ai,$.R,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cj,$.m)
q.i(0,$.ec,$.K)
q.i(0,$.cA,$.K)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.b]
q.i(0,new R.Q("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fi(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.al)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.h3,$.K)
s.i(0,$.c2,$.m)
s.i(0,$.cA,$.K)
s.i(0,$.cj,$.K)
p=$.y
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.Q("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.al)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.bc,$.m)
t.i(0,$.f_,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cA,$.k)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.y
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.al)}}
E.n7.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Feather Pen",H.a([$.E,$.N,$.ai,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.vT,$.N,$.jg,$.aa,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.L,$.N,$.ai,$.as],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.da,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dq,$.m)
t.i(0,$.cu,$.m)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a5("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.n8.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Piano",H.a([$.aa,$.X,$.a8,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.E,$.a8],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aL,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a8],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.L,$.a8],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.a8,$.a7,$.aL,$.an],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.a8,$.a7,$.an],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a8],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.ah)
q.i(0,$.rW,$.k)
q.i(0,$.ef,$.k)
q.i(0,$.dq,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.lC,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.aJ
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.b]
q.i(0,new R.a0("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aJ
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ac+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.ED
q.i(0,new R.a0("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.rZ,$.ah)
s.i(0,$.dp,$.m)
s.i(0,$.cS,$.m)
s.i(0,$.dq,$.k)
s.i(0,$.lC,$.ah)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aJ
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.y
s.i(0,new R.a0("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.h4,$.ah)
t.i(0,$.bY,$.m)
t.i(0,$.dH,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aJ+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a0("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
Y.nl.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cw(A.ho("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.cw(Q.o0(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bo(p)
o.ez(p,P.w9(["",$.$get$v5()],P.C,S.hs))
o.ey(p,!1)
q.b=p}J.uS(p,b)
r=J.uS(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[S.fg]},
$asc4:function(){return[S.fg,P.C]}}
V.nt.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Shorts",H.a([$.P,$.N,$.f7,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.N,$.an],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ap,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lG,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.h9,$.m)
t.i(0,$.lI,$.m)
t.i(0,$.da,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dX,$.m)
t.i(0,$.ee,$.m)
t.i(0,$.t_,$.m)
t.i(0,$.il,$.m)
t.i(0,$.lD,$.m)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.y
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aJ+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.x(),!1,!1,new Y.i7("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nG.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Superhero Action Figure",H.a([$.aA,$.an,$.aI],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.an],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bU],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.b5,$.bk,$.cc],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.an],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.L,$.an],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b2,$.an,$.P,$.ar],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b2,$.aO,$.an,$.P],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aI,$.E,$.an,$.f9,$.at,$.bP],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.L,$.an],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.L,$.an],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cu,$.m)
q.i(0,$.cy,$.m)
q.i(0,$.bY,$.k)
q.i(0,$.cB,$.ah)
q.i(0,$.d1,$.ah)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aJ+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.EE
l=[U.b]
q.i(0,new R.a0("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.m)
s.i(0,$.dp,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.bY,$.m)
s.i(0,$.dG,$.k)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aJ
s.i(0,new R.a0("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dF,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.dG,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aJ+" Cinema. A new movie, The Lonely "
o=$.ac
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a0("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.nJ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Feather'd Cap",H.a([$.P,$.N,$.f7],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.te,$.N,$.f7],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bn,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cy,$.m)
t.i(0,$.cj,$.m)
t.i(0,$.dH,$.K)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.b.prototype={}
U.W.prototype={}
R.nK.prototype={
aQ:function(){return"<div class = 'feature'>QuestChain: "+this.c+", Reward: "+H.jD(this.z)+"</div>"},
C:function(a){return H.z(new H.dO(H.kh(this),null))+": "+this.c},
gJ:function(a){return this.c}}
R.a0.prototype={}
R.Q.prototype={}
R.a5.prototype={}
R.bA.prototype={}
E.nL.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Curtain",H.a([$.P,$.R,$.aI],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.E,$.f9,$.aN,$.R,$.at,$.b7,$.aI,$.bm,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.E,$.aL,$.a7,$.R,$.aI],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aG,$.E,$.aL,$.bq,$.c6,$.R,$.aI],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ap,$.bq,$.ai,$.R,$.a_,$.aI],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.R,$.b7,$.aq,$.bn,$.aI],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.im,$.k)
q.i(0,$.d_,$.k)
q.i(0,$.dp,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.bX,$.m)
q.i(0,$.ca,$.m)
q.i(0,$.c2,$.K)
q.i(0,$.d1,$.m)
q.i(0,$.ed,$.k)
q.i(0,$.ir,$.k)
q.i(0,$.eZ,$.k)
q.i(0,$.lH,$.k)
q.i(0,$.h4,$.m)
q.i(0,$.eg,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.al)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dq,$.k)
s.i(0,$.bX,$.m)
s.i(0,$.c2,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cu,$.k)
s.i(0,$.cy,$.m)
s.i(0,$.iq,$.K)
s.i(0,$.d_,$.m)
s.i(0,$.cB,$.k)
s.i(0,$.bY,$.k)
s.i(0,$.d1,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aJ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.al)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.c2,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.cu,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.al)}}
Y.dK.prototype={}
Y.ad.prototype={}
Y.cZ.prototype={}
Y.bZ.prototype={
gJ:function(a){return this.c}}
Y.T.prototype={}
Y.i7.prototype={}
Y.bD.prototype={}
Y.cW.prototype={}
Y.kN.prototype={}
Y.bw.prototype={}
Y.jz.prototype={}
Y.iv.prototype={}
Y.jB.prototype={}
N.nQ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Domino Mask",H.a([$.P,$.N,$.f7],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.t8,$.N,$.f7,$.t6],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aA,$.a7,$.N,$.Y,$.aj],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.c2,$.k)
t.i(0,$.ca,$.m)
t.i(0,$.dG,$.m)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.nR.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Red Rose",H.a([$.aB,$.aw],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ap],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.aq],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bn,$.E,$.aO],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.as,$.L,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.k)
q.i(0,$.h9,$.m)
q.i(0,$.eV,$.m)
q.i(0,$.h8,$.k)
q.i(0,$.cz,$.m)
q.i(0,$.ip,$.K)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a0("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.m)
s.i(0,$.dF,$.k)
s.i(0,$.h8,$.k)
s.i(0,$.cv,$.m)
s.i(0,$.ef,$.K)
s.i(0,$.ip,$.K)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.a0("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.eV,$.m)
t.i(0,$.lI,$.k)
t.i(0,$.h8,$.k)
t.i(0,$.cz,$.m)
t.i(0,$.ef,$.K)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EA
t.i(0,new R.a0("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.es
t.i(0,new R.a0("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.iv(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o=$.o
n="The "+o+"  and the "
r=$.es
t.i(0,new R.a0("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r=$.o
o="The "+r+"  and the "
n=$.es
t.i(0,new R.a0("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p.i(0,new X.F(s,t,null),$.aC)}}
V.nS.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Arrow",H.a([$.aN,$.X,$.t6],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.X,$.aa,$.ji],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aI,$.R],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.R,$.vx,$.aI],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.b0,$.m)
t.i(0,$.db,$.K)
t.i(0,$.bY,$.m)
t.i(0,$.cj,$.K)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.y
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.Q("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.al)}}
T.nU.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[T.fk]}}}
T.fk.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dH,$.k)
q.i(0,$.bX,$.m)
q.i(0,$.dX,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.b]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eX,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.ca,$.K)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.es+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.er(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c3,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.u5(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.K)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.bL)},
C:function(a){return this.r},
a0:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.ik("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i4]),H.a([],[M.h2]))
this.E()
this.F()
t=this.Q
if($.$get$jH().Z(0,t))H.ba("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$jH().n(0,t))+".")
$.$get$jH().i(0,t,this)},
gJ:function(a){return this.r},
gb_:function(){return this.x},
gbu:function(){return this.cx}}
E.nV.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Sage's Robe",H.a([$.P,$.N,$.b4,$.Y,$.a2,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.L,$.N,$.as,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.P,$.N,$.e_,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.h6,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.f_,$.k)
t.i(0,$.b0,$.K)
t.i(0,$.cA,$.k)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a5("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.nW.prototype={}
K.nX.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Uno Reverse Card",H.a([$.mj,$.R,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e_,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.im,$.k)
q.i(0,$.d_,$.k)
q.i(0,$.dp,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.bX,$.m)
q.i(0,$.ca,$.m)
q.i(0,$.c2,$.K)
q.i(0,$.d1,$.m)
q.i(0,$.ed,$.k)
q.i(0,$.ir,$.k)
q.i(0,$.eZ,$.k)
q.i(0,$.lH,$.k)
q.i(0,$.h4,$.m)
q.i(0,$.eg,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.al)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dq,$.k)
s.i(0,$.bX,$.m)
s.i(0,$.c2,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cu,$.k)
s.i(0,$.cy,$.m)
s.i(0,$.iq,$.K)
s.i(0,$.d_,$.m)
s.i(0,$.cB,$.k)
s.i(0,$.bY,$.k)
s.i(0,$.d1,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aJ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.al)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.c2,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.cu,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.al)}}
Y.nY.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Walking Stick",H.a([$.X,$.N,$.dc],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.P,$.N,$.vF,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.L,$.N,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.N,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.da,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.bY,$.K)
t.i(0,$.b0,$.K)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.b]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.nZ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Scroll",H.a([$.L,$.N,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b6,$.N,$.aj,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.L,$.N,$.as,$.Y,$.aj,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.lC,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cj,$.m)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.o1.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Cueball",H.a([$.eh,$.mq,$.N,$.aa,$.ar,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.eh,$.vD,$.N,$.b1],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b6,$.N,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vw,$.N,$.b4],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.vf,$.k)
t.i(0,$.h5,$.k)
t.i(0,$.rU,$.k)
t.i(0,$.cB,$.m)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.b]
t.i(0,new R.a5("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a5("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c0.prototype={
aQ:function(){return"<div class = 'feature'>Smell "+H.z(this.b)+", Quality: "+H.z(this.a)+"</div>"}}
Y.o8.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Meddler's Guide",H.a([$.as,$.N,$.L,$.bq,$.a_,$.aM],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b6,$.N,$.aM],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aw,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.bc,$.m)
t.i(0,$.da,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.c3,$.k)
r="The defeat of the "+$.y+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.b]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.y+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.o9.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Fiduspawn Plush",H.a([$.cc,$.P,$.b4],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cc,$.P,$.b4],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tc,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.ar,$.bh,$.b8,$.bm,$.tl],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.P,$.b4,$.cc],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.as,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.as,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b4,$.P],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.as,$.L,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.db,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.cj,$.k)
q.i(0,$.cA,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.b]
q.i(0,new R.a0("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aJ+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.db,$.K)
s.i(0,$.b0,$.k)
s.i(0,$.cj,$.k)
s.i(0,$.rS,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.rZ,$.k)
s.i(0,$.cA,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aJ
s.i(0,new R.a0("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cS,$.K)
t.i(0,$.dF,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.h3,$.k)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.a0("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
M.bB.prototype={
aQ:function(){return"<div class = 'feature'>Sounds Like "+H.z(this.b)+", Quality: "+H.z(this.a)+"</div>"}}
N.oa.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Frog Statue",H.a([$.aG,$.au,$.R],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.P,$.R],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c_,$.Y,$.a7,$.R],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.E,$.b6,$.Y,$.R],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.L,$.R,$.tf,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.y+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
p=$.o
t=t+p+" that they must negotiate with "
o=$.y
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.o
p="The "+o+" meets with "
t=$.y
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cB,$.K)
t.i(0,$.rV,$.k)
s=[U.b]
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.x(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.F(o,t,null),$.FI)}}
U.af.prototype={
gJ:function(a){return this.d+"kind"},
$isbF:1,
$asbF:function(){return[A.a1]}}
K.cD.prototype={
gJ:function(a){return this.a}}
M.oe.prototype={
aN:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.d9(null,0)
q.a=J.dS(a7,0)
for(p=0,o="";p<6;++p)o+=H.hC(q.a6(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a6(8)
l=9+m*6
o=8*m
k=q.a6(o)
j=q.a6(o)
i=q.a6(o)
h=q.a6(o)
g=q.a6(o)
f=q.a6(o)
o=P.D
e=P.C
d=P.cC(o,e)
c=new O.cU(k,j,null,null,null,null,null,null,d,P.cC(e,o))
c.x=new Uint8Array(H.cx(k*j))
b=q.a6(8)
for(o=[o],p=0;p<b;++p){a=q.a6(8)
a0=q.a6(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a6(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oE(a1,0,null))}a4=q.a6(8)
a5=$.$get$wv().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hP(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hB()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[O.cU]},
$asc4:function(){return[O.cU,P.bg]}}
R.oH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Meddler's Guide",H.a([$.as,$.N,$.L,$.bq,$.a_,$.aM],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b6,$.N,$.aM],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aw,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cj,$.k)
t.i(0,$.b0,$.k)
t.i(0,$.da,$.m)
t.i(0,$.f_,$.m)
t.i(0,$.rR,$.m)
t.i(0,$.dX,$.m)
t.i(0,$.il,$.m)
t.i(0,$.rY,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.b]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.u7(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a5("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a5("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bA("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a5("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aJ+". Huh. Okay then.")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.oJ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Lightning",H.a([$.aL,$.b9,$.R],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bk,$.vN,$.ji],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aI,$.aL],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aL,$.R,$.aI],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.dE,$.K)
t.i(0,$.bY,$.k)
t.i(0,$.im,$.m)
t.i(0,$.d_,$.m)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.t
q=q+p+" walks up to them, and tells them about "
o=$.y
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.J+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.Q("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.al)}}
D.oL.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Robot",H.a([$.a7,$.E,$.ar,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.L,$.aD,$.as],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a7,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vI,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.ts,$.E,$.aa],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.is,$.m)
q.i(0,$.eW,$.k)
q.i(0,$.eY,$.k)
q.i(0,$.ca,$.K)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aJ
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EI
p=[U.b]
q.i(0,new R.a0("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.x(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.a0("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fi(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eX,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.ca,$.K)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.a0("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ac
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a0("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e1(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.al)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.K)
t.i(0,$.eW,$.k)
t.i(0,$.eY,$.k)
t.i(0,$.ca,$.K)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aJ
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.y
t.i(0,new R.a0("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
V.oN.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Lighter",H.a([$.E,$.aq],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.L,$.bk],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.L,$.bk,$.c_],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.E,$.aD,$.c_,$.b9,$.bm],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.L,$.vO],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.E,$.be,$.b9],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.E,$.be,$.b9],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.P,$.f7,$.b9],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bO,$.be],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.E,$.tm,$.aO,$.b9],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.E,$.tp,$.aO,$.b9],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.E,$.ti,$.aO,$.b9],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.ml,$.at,$.E,$.bn,$.b9],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.L,$.bq,$.as],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c6,$.E,$.aL,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.aq],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.dF,$.k)
q.i(0,$.dY,$.k)
q.i(0,$.eZ,$.k)
q.i(0,$.lG,$.k)
q.i(0,$.dG,$.m)
p=$.o
o=[U.b]
q.i(0,new R.a0("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.m)
s.i(0,$.dF,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.dG,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.a0("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.aJ+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dH,$.k)
q.i(0,$.bX,$.m)
q.i(0,$.dX,$.K)
q.i(0,$.d_,$.K)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.a0("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.k)
t.i(0,$.d_,$.K)
t.i(0,$.ed,$.k)
t.i(0,$.ir,$.k)
t.i(0,$.ca,$.m)
t.i(0,$.eg,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aJ+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a0("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.aC)}}
X.F.prototype={
aQ:function(){for(var t=this.b,t=t.gbg(t),t=t.gV(t);t.I();)t.gO()
return"<div class = 'theme'><b>"+H.z(this.a)+"</div></b><div class = 'features'></div></theme>"},
C:function(a){return"Theme: "+H.z(this.a)}}
O.rl.prototype={
$1:function(a){H.i0(a,"$isfV")
return},
$S:function(){return{func:1,args:[W.S]}}}
U.oU.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Lockpick",H.a([$.E,$.N,$.aj,$.aN,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.P,$.N,$.aj],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.E,$.N,$.aN,$.at,$.tb],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.c2,$.k)
t.i(0,$.dp,$.m)
t.i(0,$.bY,$.m)
t.i(0,$.cS,$.m)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a5("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aJ+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a5("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.y
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ac
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aJ+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oV.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Grandfather Clock",H.a([$.X,$.ai,$.be,$.R],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.vS,$.R,$.a8],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bh,$.R,$.b8,$.b7,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.E,$.R,$.a8,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.E,$.R,$.a8,$.a_,$.an],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.E,$.R,$.a8],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.vh,$.ah)
q.i(0,$.ca,$.m)
q.i(0,$.cS,$.m)
q.i(0,$.eX,$.k)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.eq(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.al)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.h4,$.k)
s.i(0,$.dY,$.K)
s.i(0,$.ca,$.k)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.y
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.al)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cj,$.k)
t.i(0,$.da,$.k)
r=$.y
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.y
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.Q("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.y+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aJ
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eq(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.al)}}
G.Z.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gad(t)
return"NULL TRAIT"},
ge7:function(){return this.a},
gdS:function(){return this.b},
gbx:function(){return this.c}}
G.aK.prototype={}
G.ae.prototype={}
G.bH.prototype={}
G.d.prototype={
ghy:function(){return this.e.length},
gbx:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.ch)(t),++q)r+=t[q].c
return r},
ay:function(a,b){return C.a.by(b.ghy()-this.e.length)},
eg:function(a){return C.b.h2(this.e,a.gfQ(a))},
$isbF:1,
$asbF:function(){return[G.d]},
gJ:function(a){return this.d},
geC:function(){return this.e}}
G.mr.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Z]}}}
Q.ph.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Cardboard Box",H.a([$.L,$.R,$.aj],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.E,$.R,$.aj],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bn,$.R,$.aj,$.ml],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b8,$.R,$.aj,$.b7,$.bQ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.R,$.aj,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.R,$.a_,$.tf,$.aj,$.b6],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.db,$.k)
q.i(0,$.lF,$.k)
q.i(0,$.h7,$.k)
q.i(0,$.h5,$.k)
p=$.y
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a5("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.Q("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.F(s,q,null),$.al)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.db,$.m)
s.i(0,$.lF,$.m)
s.i(0,$.h7,$.m)
s.i(0,$.c2,$.k)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.y
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ac
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fi(),!1,!1,new Y.bZ("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
s.i(0,new R.Q("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(q,s,null),$.al)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.db,$.k)
t.i(0,$.lF,$.k)
t.i(0,$.h7,$.k)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.Q("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(s,t,null),$.al)}}
E.pi.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Yardstick",H.a([$.dc,$.N,$.jj,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.as,$.N,$.hh,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.P,$.N,$.e_,$.mm,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tq,$.N,$.mi],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.cB,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.dn,$.k)
t.i(0,$.da,$.k)
t.i(0,$.ec,$.k)
t.i(0,$.dE,$.k)
t.i(0,$.h7,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.b]
t.i(0,new R.a0("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.u7(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ce+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a0("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.dK("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wr(),!1,!1,new Y.bZ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.al)}}
M.pm.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Cauldron",H.a([$.vR,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jf,$.dc,$.N,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tj,$.N,$.a2,$.aj,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a6,P.U])
t.i(0,$.bX,$.m)
t.i(0,$.h9,$.m)
t.i(0,$.d0,$.m)
t.i(0,$.cS,$.m)
t.i(0,$.cu,$.m)
t.i(0,$.rV,$.m)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.b]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aJ
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a5("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aJ
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a5("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aJ
t.i(0,new R.a5("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.x(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pn.prototype={
R:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eK(a6,$.$get$wT())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.xZ(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.z(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.cC(o,B.jU)
q.a=null
l=P.cC(o,o)
for(k=P.U,j=B.du,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.z(g)
f.toString
f=J.eK(g,$.$get$wR())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bf(g)
if(f.gW(g)===!0){$.$get$cH().toString
continue}if(f.af(g,$.$get$wS())){$.$get$cH().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hJ().aU(0,f)
f=H.dr(f,B.kj(),H.av(f,"n",0),null)
d=P.dd(f,!0,H.av(f,"n",0))
if(d.length<2)$.$get$cH().b8(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.z(c)
H.z(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$wU()
a=f.cd(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.ci(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.az(a0)
if(f.S(a0,0)){a1=C.c.eh(a1)
$.$get$cH().toString
f=P.cC(o,o)
a2=new B.jU(P.cC(o,k),f,a1,!1,null,null)
a2.d4(null,null,j)
q.a=a2
f.bP(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.wV))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hJ().aU(0,a1)
f=H.dr(f,B.kj(),H.av(f,"n",0),null)
d=P.dd(f,!0,H.av(f,"n",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.b8(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kn(d[0],$.$get$fo(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.kn(d[1],$.$get$fo(),"")
f=$.$get$cH()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cH().toString
f=$.$get$hJ().aU(0,a1)
f=H.dr(f,B.kj(),H.av(f,"n",0),null)
d=P.dd(f,!0,H.av(f,"n",0))
a4=d.length>1?H.wn(d[1],new U.po(q,d)):1
q.a.c.i(0,C.c.cO(e,$.$get$fo(),""),a4)}else{$.$get$cH().toString
f=$.$get$hJ().aU(0,g)
f=H.dr(f,B.kj(),H.av(f,"n",0),null)
d=P.dd(f,!0,H.av(f,"n",0))
a4=d.length>1?H.wn(d[1],new U.pp(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bh(J.kn(d[0],$.$get$fo(),""))
h=new B.du(null)
a3=P.cC(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.f(h,f.k(h,J.uU(a4)),[H.av(f,"cR",0)]))}else if(f.S(a0,$.wV*2)){$.$get$cH().toString
f=$.$get$hJ().aU(0,g)
f=H.dr(f,B.kj(),H.av(f,"n",0),null)
d=P.dd(f,!0,H.av(f,"n",0))
f=d.length
if(f!==2)$.$get$cH().b8(C.i,"Invalid variant for "+H.z(h.cT(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bh(J.kn(d[0],$.$get$fo(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.cO(U.FL(d[1]),$.$get$fo(),"")
h.a.i(0,f,a3)}}}}}r=new B.hO(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[B.hO]},
$asc4:function(){return[B.hO,P.C]}}
U.po.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b8(C.n,r+H.z(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.pp.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b8(C.n,r+H.z(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.pr.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Z]
r=A.i("Make a World Book",H.a([$.L,$.ai,$.as],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b4,$.P,$.mo],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.as,$.L,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.as,$.L,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.as,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.E,$.Y,$.mo,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.as,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.as,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a6,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.db,$.k)
q.i(0,$.cA,$.k)
q.i(0,$.bc,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.h6,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a0("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.x(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dG,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.cv,$.m)
s.i(0,$.bc,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.a0("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dF,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.dG,$.m)
t.i(0,$.dn,$.k)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.a0("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.x(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
B.pw.prototype={
aN:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$wW()
p=J.uL(b)
q.toString
r=q.fV(T.t5(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdk:function(){return[T.fD]},
$asc4:function(){return[T.fD,P.bg]}}
A.fK.prototype={}
B.dl.prototype={
ct:function(a){if(a)this.b=(this.b|C.a.ap(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hC(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ap(1,t)
if(typeof a!=="number")return a.aG()
this.ct((a&s)>>>0>0)}},
fI:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.at(1,t-s)
if(typeof a!=="number")return a.aG()
this.ct((a&r)>>>0>0)}},
bQ:function(a){var t,s
a=J.e6(a,1)
t=C.d.d2(Math.log(H.ke(a)),0.6931471805599453)
for(s=0;s<t;++s)this.ct(!1)
this.fI(a,t+1)},
b1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.ag(r)
q+=r
p=r}else p=0
r=H.cx(q)
o=new Uint8Array(r)
if(t){n=H.cN(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a4(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.d9.prototype={
cl:function(a){var t,s,r,q
t=C.f.aj(a/8)
s=C.a.bE(a,8)
r=this.a.getUint8(t)
q=C.a.at(1,s)
if(typeof r!=="number")return r.aG()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.l(P.dT(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cl(this.b);++this.b
if(r)t=(t|C.a.ap(1,s))>>>0}return t},
hA:function(a){var t,s,r,q
if(a>32)throw H.l(P.dT(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cl(this.b);++this.b
if(q)s=(s|C.a.at(1,t-r))>>>0}return s},
bZ:function(){var t,s,r
for(t=0;!0;){s=this.cl(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hA(t+1)-1}}
A.dV.prototype={
C:function(a){return"rgb("+H.z(this.b)+", "+H.z(this.c)+", "+H.z(this.d)+", "+H.z(this.a)+")"},
hK:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.at()
s=this.c
if(typeof s!=="number")return s.at()
r=this.d
if(typeof r!=="number")return r.at()
q=this.a
if(typeof q!=="number")return H.ag(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dV){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
ga5:function(a){return this.hK(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.az(b)
if(!!t.$isdV){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.ag(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.ag(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.ag(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.ag(m)
return A.fO(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.v1(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.fO(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.z(t.ga9(b))+" "+H.z(b)+"] to a Colour. Only Colour, double and int are valid.")},
ar:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.v1(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.z(b))},
i:function(a,b,c){var t,s
t=J.dx(b)
if(t.a3(b,0)||t.aB(b,3))throw H.l("Colour index out of range: "+H.z(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.S(b,0)){this.b=C.a.ab(J.km(J.uK(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(J.km(J.uK(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kf(c)
if(t.S(b,2)){this.d=C.a.ab(J.km(s.ar(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.km(s.ar(c,255)),0,255)}},
eI:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.xE(d,0,255),0,255)}}
A.r4.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.mS.prototype={
$1:function(a){return this.a.ea(a)},
$S:function(){return{func:1,args:[,]}}}
A.mQ.prototype={
$1:function(a){this.a.R(0,a).b0(this.b.ghx())},
$S:function(){return{func:1,args:[,]}}}
A.mR.prototype={
$1:function(a){this.a.fP(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mT.prototype={
$1:function(a){return this.a.az(0,this.b)},
$S:function(){return{func:1,args:[W.S]}}}
F.hp.prototype={
C:function(a){return this.b}}
F.hq.prototype={
b8:function(a,b){F.Ew(a).$1("("+this.c+")["+H.z(C.b.gb7(a.b.split(".")))+"]: "+H.z(b))},
cB:function(a,b){this.b8(C.i,b)},
gJ:function(a){return this.c}}
F.tF.prototype={}
O.ro.prototype={
$1:function(a){return H.z(a.ba(1))+" = "+H.z(a.ba(2))+C.c.ar("../",this.a)},
$S:function(){return{func:1,args:[P.ds]}}}
O.rp.prototype={
$0:function(){var t=document
J.uQ(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.h,null)
t=H.i0(t.querySelector("#voidButton"),"$isfM")
t.toString
W.eG(t,"click",new O.rn(),!1,W.Hl)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.H7("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rn.prototype={
$1:function(a){return O.Hc()},
$S:function(){return{func:1,args:[W.S]}}}
R.ha.prototype={}
R.tX.prototype={}
R.tW.prototype={}
A.nu.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Z(0,b)?t.n(0,b):$.$get$tV()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Z(0,b)?t.n(0,b):$.$get$tV()}throw H.l(P.dT(b,"'name' should be a String name or int id only",null))},
gV:function(a){var t=this.a
t=t.gb9(t)
return new H.jq(null,J.cI(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Z(0,b))this.an(0,b)
s=this.fo()
if(typeof s!=="number")return s.as()
if(s>=256)throw H.l(P.dT(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.Z(0,b))return
s=this.c
r=s.n(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
fo:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Z(0,s))return s;++s}}}
A.jy.prototype={
$asn:function(){return[A.dV]},
$isn:1}
Q.jA.prototype={}
A.jE.prototype={
bw:function(a){if(a===0)return 0
return this.fp(a)},
hp:function(){return this.bw(4294967295)},
fp:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cG()
this.b=C.d.by(s*4294967295)
return C.d.aj(s*a)}else{s=t.bw(a)
this.b=s
return s}},
cW:function(a){var t=a==null
this.a=t?C.K:P.FY(a)
if(!t)this.b=J.e6(a,1)},
hv:function(a,b){var t=a.length
if(t===0)return
t=this.bw(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
hu:function(a){return this.hv(a,!0)}}
Y.dJ.prototype={
cr:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bi(0,$.ao,null,t)
this.c.push(new P.dQ(s,t))
return s},
ea:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.ch)(t),++r)t[r].az(0,this.b)
C.b.sm(t,0)}}
V.li.prototype={
$4:function(a,b,c,d){return V.yR(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cU]}}}
V.lh.prototype={
$4:function(a,b,c,d){return V.yQ(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cU]}}}
V.lg.prototype={
$4:function(a,b,c,d){return V.yN(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cU]}}}
V.lf.prototype={
$4:function(a,b,c,d){return V.yM(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cU]}}}
O.cU.prototype={
hB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.w(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
hP:function(a,b,c,d){var t,s,r,q,p
t=J.bo(d)
s=0
while(!0){r=t.ge4(d)
if(typeof r!=="number")return H.ag(r)
if(!(s<r))break
q=(C.a.d2(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.oh.prototype={
$1:function(a){return a.ghw()},
$S:function(){return{func:1,args:[D.cE]}}}
D.cE.prototype={
C:function(a){return this.a},
gJ:function(a){return this.a},
ghw:function(){return this.d}}
D.jV.prototype={}
D.nO.prototype={}
B.du.prototype={
em:function(a,b){if(this.a.Z(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cT:function(a){return this.em(a,null)},
C:function(a){return"[Word: "+H.z(this.cT(0))+"]"}}
B.jU.prototype={
C:function(a){return"WordList '"+this.e+"': "+this.eF(0)},
$isp:1,
$asp:function(){return[B.du]},
$asdP:function(){return[B.du]},
$ashN:function(){return[B.du]},
$ascR:function(){return[B.du]},
$asn:function(){return[B.du]},
$asr:function(){return[B.du]},
gJ:function(a){return this.e}}
B.hO.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"}}
S.fg.prototype={}
S.uo.prototype={}
S.up.prototype={}
S.uq.prototype={}
S.rN.prototype={}
S.rQ.prototype={}
S.rE.prototype={}
S.u8.prototype={}
S.us.prototype={}
S.ut.prototype={}
S.kL.prototype={}
S.tZ.prototype={}
S.tU.prototype={}
S.mJ.prototype={}
S.rI.prototype={}
S.rz.prototype={}
S.l1.prototype={}
S.tG.prototype={}
S.l2.prototype={}
S.nw.prototype={}
S.uf.prototype={}
S.uc.prototype={}
S.ug.prototype={}
S.ry.prototype={}
S.lW.prototype={}
S.kJ.prototype={}
S.rD.prototype={}
S.rC.prototype={}
S.u_.prototype={}
S.uh.prototype={}
S.u0.prototype={}
S.rP.prototype={}
S.rO.prototype={}
S.ue.prototype={}
S.ud.prototype={}
S.oT.prototype={}
S.uj.prototype={}
S.rF.prototype={}
S.rG.prototype={}
S.ur.prototype={}
S.hs.prototype={}
S.tM.prototype={}
S.tN.prototype={}
S.tO.prototype={}
S.tP.prototype={}
S.u9.prototype={}
S.ua.prototype={}
S.ub.prototype={}
S.tL.prototype={}
S.tR.prototype={}
S.tS.prototype={}
S.t2.prototype={}
S.t3.prototype={}
S.t4.prototype={}
S.tT.prototype={}
S.tQ.prototype={}
S.rA.prototype={}
S.ul.prototype={}
S.um.prototype={}
S.uk.prototype={}
Z.tA.prototype={}
Z.tw.prototype={}
Z.tx.prototype={}
Q.cR.prototype={
k:function(a,b){return b},
C:function(a){return J.cJ(this.gbY())},
av:function(a,b){return Q.uv(this,b,H.av(this,"cR",0),null)},
a2:function(a,b){return Q.uu(this,!1,!0,null,H.av(this,"cR",0))},
ao:function(a){return this.a2(a,!0)},
$isn:1,
$asn:null}
Q.dP.prototype={
gbY:function(){return this.b},
bO:function(a,b,c){C.b.h(this.b,new Q.f(b,this.k(b,J.uU(c)),[H.av(this,"cR",0)]))},
h:function(a,b){return this.bO(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.uO(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.f(c,s,[H.av(this,"cR",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jk(this.b,"[","]")},
av:function(a,b){return Q.uv(this,b,H.av(this,"dP",0),null)},
a2:function(a,b){return Q.uu(this,!1,!0,null,H.av(this,"dP",0))},
ao:function(a){return this.a2(a,!0)},
d4:function(a,b,c){var t,s
this.a=a
t=[[Q.f,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hN.prototype={$ascR:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.f.prototype={
C:function(a){return"("+H.z(this.a)+" @ "+H.z(this.b)+")"},
gX:function(a){return this.a},
gcR:function(a){return this.b}}
Q.eE.prototype={
gbY:function(){return this.b},
gV:function(a){var t=new Q.pk(null,[H.av(this,"eE",0)])
t.a=J.cI(this.b)
return t},
gm:function(a){return J.ci(this.b)},
C:function(a){return J.cJ(this.b)},
av:function(a,b){return Q.uv(this,b,H.av(this,"eE",0),null)},
a2:function(a,b){return Q.uu(this,!1,!0,null,H.av(this,"eE",0))},
ao:function(a){return this.a2(a,!0)}}
Q.hM.prototype={$ascR:null,$asn:null,$isn:1}
Q.pk.prototype={
gO:function(){return J.uO(this.a.gO())},
I:function(){return this.a.I()}}
Q.jS.prototype={
$aseE:function(a,b){return[b]},
$ashM:function(a,b){return[b]},
$ascR:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.pl.prototype={
$1:function(a){var t=J.bo(a)
return new Q.f(this.c.$1(t.gX(a)),t.gcR(a),[this.b])},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[[Q.f,a]]}},this,"jS")}}
J.h.prototype.eD=J.h.prototype.C
J.hk.prototype.eE=J.hk.prototype.C
P.dg.prototype.eG=P.dg.prototype.bG
P.dg.prototype.eH=P.dg.prototype.bF
P.b3.prototype.d1=P.b3.prototype.a7
Q.dP.prototype.eF=Q.dP.prototype.C;(function installTearOffs(){installTearOff(H.ft.prototype,"ghk",0,0,0,null,["$0"],["bW"],1)
installTearOff(H.dw.prototype,"gep",0,0,0,null,["$1"],["aw"],7)
installTearOff(H.eF.prototype,"gfY",0,0,0,null,["$1"],["aV"],7)
installTearOff(H,"xa",1,0,0,null,["$1"],["Gp"],8)
installTearOff(P,"Gs",1,0,0,null,["$1"],["FP"],6)
installTearOff(P,"Gt",1,0,0,null,["$1"],["FQ"],6)
installTearOff(P,"Gu",1,0,0,null,["$1"],["FR"],6)
installTearOff(P,"xm",1,0,0,null,["$0"],["Go"],1)
installTearOff(P.jZ.prototype,"gdQ",0,0,0,null,["$2","$1"],["cw","bm"],11)
installTearOff(P.bi.prototype,"gbb",0,0,0,null,["$2","$1"],["al","f0"],11)
var t
installTearOff(t=P.dg.prototype,"gdw",0,0,0,null,["$0"],["bJ"],1)
installTearOff(t,"gdz",0,0,0,null,["$0"],["bK"],1)
installTearOff(t=P.hS.prototype,"gdw",0,0,0,null,["$0"],["bJ"],1)
installTearOff(t,"gdz",0,0,0,null,["$0"],["bK"],1)
installTearOff(t,"gfc",0,0,0,null,["$1"],["fd"],function(){return H.eJ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hS")})
installTearOff(t,"gfg",0,0,0,null,["$2"],["fh"],32)
installTearOff(t,"gfe",0,0,0,null,["$0"],["ff"],1)
installTearOff(P.k4.prototype,"gfQ",0,1,0,null,["$1"],["ai"],33)
installTearOff(P,"GD",1,0,0,null,["$2"],["yv"],28)
installTearOff(P,"GE",1,0,0,null,["$1"],["fA"],4)
installTearOff(t=W.i6.prototype,"gaq",0,1,0,null,["$1"],["cB"],4)
installTearOff(t,"ghf",0,0,0,null,["$1"],["e2"],4)
installTearOff(t,"ghM",0,0,0,null,["$1"],["hN"],4)
installTearOff(W.eT.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.i9.prototype,"gX",0,1,0,null,["$1"],["K"],13)
installTearOff(W.ie.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.ig.prototype,"gX",0,1,0,null,["$1"],["K"],8)
installTearOff(W.ih.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.f1.prototype,"gX",0,1,0,null,["$1"],["K"],14)
installTearOff(W.iw.prototype,"gX",0,1,0,null,["$1"],["K"],9)
installTearOff(W.f3.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.iy.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.jr.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.js.prototype,"gX",0,1,0,null,["$1"],["K"],12)
installTearOff(W.cd.prototype,"gX",0,1,0,null,["$1"],["K"],12)
installTearOff(W.jC.prototype,"gX",0,1,0,null,["$1"],["K"],15)
installTearOff(W.jI.prototype,"gX",0,1,0,null,["$1"],["K"],9)
installTearOff(W.jK.prototype,"gX",0,1,0,null,["$1"],["K"],16)
installTearOff(W.jL.prototype,"gX",0,1,0,null,["$1"],["K"],17)
installTearOff(W.cf.prototype,"gX",0,1,0,null,["$1"],["K"],18)
installTearOff(W.jP.prototype,"gX",0,1,0,null,["$1"],["K"],34)
installTearOff(W.jQ.prototype,"gX",0,1,0,null,["$1"],["K"],19)
installTearOff(W.jR.prototype,"gX",0,1,0,null,["$1"],["K"],20)
installTearOff(W.hP.prototype,"gX",0,1,0,null,["$1"],["K"],21)
installTearOff(W.k_.prototype,"gX",0,1,0,null,["$1"],["K"],22)
installTearOff(W.k3.prototype,"gX",0,1,0,null,["$1"],["K"],29)
installTearOff(W.hV.prototype,"gX",0,1,0,null,["$1"],["K"],24)
installTearOff(W.k7.prototype,"gX",0,1,0,null,["$1"],["K"],25)
installTearOff(W.k9.prototype,"gX",0,1,0,null,["$1"],["K"],26)
installTearOff(P.jM.prototype,"gX",0,1,0,null,["$1"],["K"],27)
installTearOff(R,"er",1,0,0,null,["$1"],["F6"],0)
installTearOff(R,"wq",1,0,0,null,["$1"],["EV"],0)
installTearOff(R,"u7",1,0,0,null,["$1"],["F5"],0)
installTearOff(R,"bR",1,0,0,null,["$1"],["F4"],0)
installTearOff(R,"u6",1,0,0,null,["$1"],["F3"],0)
installTearOff(R,"ws",1,0,0,null,["$1"],["F1"],0)
installTearOff(R,"hD",1,0,0,null,["$1"],["F0"],0)
installTearOff(R,"eq",1,0,0,null,["$1"],["EY"],0)
installTearOff(R,"e1",1,0,0,null,["$1"],["F_"],0)
installTearOff(R,"fi",1,0,0,null,["$1"],["F2"],0)
installTearOff(R,"u5",1,0,0,null,["$1"],["EZ"],0)
installTearOff(R,"x",1,0,0,null,["$1"],["EW"],0)
installTearOff(R,"wr",1,0,0,null,["$1"],["EX"],0)
installTearOff(O,"wz",1,0,0,null,["$0"],["rk"],30)
installTearOff(F.hq.prototype,"gaq",0,1,0,null,["$1"],["cB"],4)
installTearOff(O,"H_",1,0,0,null,["$1"],["H1"],31)
installTearOff(Y.dJ.prototype,"ghx",0,0,0,null,["$1"],["ea"],function(){return H.eJ(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dJ")})
installTearOff(V,"H5",1,0,0,null,["$4"],["yP"],3)
installTearOff(V,"H4",1,0,0,null,["$4"],["yO"],2)
installTearOff(B,"kj",1,0,0,null,["$1"],["Gj"],23)
installTearOff(T,"Gy",1,0,0,null,["$4"],["yF"],3)
installTearOff(T,"Gx",1,0,0,null,["$4"],["yE"],2)
installTearOff(T,"Gw",1,0,0,null,["$4"],["yD"],3)
installTearOff(T,"Gv",1,0,0,null,["$4"],["yC"],2)
installTearOff(F,"GP",1,0,0,null,["$4"],["yL"],3)
installTearOff(F,"GO",1,0,0,null,["$4"],["yK"],2)
installTearOff(F,"GN",1,0,0,null,["$4"],["yJ"],3)
installTearOff(F,"GM",1,0,0,null,["$4"],["yI"],2)
installTearOff(F,"GL",1,0,0,null,["$4"],["yH"],3)
installTearOff(F,"GK",1,0,0,null,["$4"],["yG"],2)})();(function inheritance(){inherit(P.ab,null)
var t=P.ab
inherit(H.tC,t)
inherit(J.h,t)
inherit(J.i2,t)
inherit(P.hB,t)
inherit(P.n,t)
inherit(H.em,t)
inherit(P.jm,t)
inherit(H.iu,t)
inherit(H.p4,t)
inherit(H.eR,t)
inherit(H.qk,t)
inherit(H.ft,t)
inherit(H.pR,t)
inherit(H.eH,t)
inherit(H.qj,t)
inherit(H.pE,t)
inherit(H.fj,t)
inherit(H.oX,t)
inherit(H.dB,t)
inherit(H.dw,t)
inherit(H.eF,t)
inherit(H.kR,t)
inherit(H.nN,t)
inherit(H.p1,t)
inherit(P.eb,t)
inherit(H.h1,t)
inherit(H.k8,t)
inherit(H.dO,t)
inherit(H.u,t)
inherit(H.mK,t)
inherit(H.mM,t)
inherit(H.hj,t)
inherit(H.k6,t)
inherit(H.jX,t)
inherit(H.jO,t)
inherit(H.qD,t)
inherit(P.ck,t)
inherit(P.eS,t)
inherit(P.jZ,t)
inherit(P.k2,t)
inherit(P.bi,t)
inherit(P.jY,t)
inherit(P.df,t)
inherit(P.oj,t)
inherit(P.dg,t)
inherit(P.k0,t)
inherit(P.pM,t)
inherit(P.qn,t)
inherit(P.qB,t)
inherit(P.eN,t)
inherit(P.qQ,t)
inherit(P.qa,t)
inherit(P.qc,t)
inherit(P.o4,t)
inherit(P.qh,t)
inherit(P.dv,t)
inherit(P.fa,t)
inherit(P.b3,t)
inherit(P.qI,t)
inherit(P.n0,t)
inherit(P.qi,t)
inherit(P.fN,t)
inherit(P.fP,t)
inherit(P.qK,t)
inherit(P.d6,t)
inherit(P.bF,t)
inherit(P.dW,t)
inherit(P.dj,t)
inherit(P.dD,t)
inherit(P.nq,t)
inherit(P.jN,t)
inherit(P.pW,t)
inherit(P.bJ,t)
inherit(P.lk,t)
inherit(P.p,t)
inherit(P.bl,t)
inherit(P.cO,t)
inherit(P.ds,t)
inherit(P.dL,t)
inherit(P.C,t)
inherit(P.c8,t)
inherit(P.eB,t)
inherit(P.kb,t)
inherit(P.p5,t)
inherit(P.qz,t)
inherit(W.i6,t)
inherit(W.jx,t)
inherit(W.i8,t)
inherit(P.kU,t)
inherit(W.bx,t)
inherit(W.lP,t)
inherit(W.qH,t)
inherit(P.qE,t)
inherit(P.px,t)
inherit(P.qg,t)
inherit(P.qp,t)
inherit(P.qq,t)
inherit(P.bg,t)
inherit(P.d5,t)
inherit(T.fE,t)
inherit(T.d8,t)
inherit(T.he,t)
inherit(T.ns,t)
inherit(T.pt,t)
inherit(T.pu,t)
inherit(T.pv,t)
inherit(T.ps,t)
inherit(T.m6,t)
inherit(T.iz,t)
inherit(B.f6,t)
inherit(N.a6,t)
inherit(L.eM,t)
inherit(A.jy,t)
inherit(O.c4,t)
inherit(T.fk,t)
inherit(M.fL,t)
inherit(X.ik,t)
inherit(X.i4,t)
inherit(M.h2,t)
inherit(Z.ij,t)
inherit(E.no,t)
inherit(E.M,t)
inherit(A.a1,t)
inherit(U.b,t)
inherit(Y.dK,t)
inherit(K.cD,t)
inherit(X.F,t)
inherit(G.Z,t)
inherit(A.fK,t)
inherit(B.dl,t)
inherit(B.d9,t)
inherit(A.dV,t)
inherit(F.hp,t)
inherit(F.hq,t)
inherit(Q.jA,t)
inherit(A.jE,t)
inherit(Y.dJ,t)
inherit(O.cU,t)
inherit(D.cE,t)
inherit(B.du,t)
inherit(Q.cR,t)
inherit(B.hO,t)
inherit(Q.f,t)
t=J.h
inherit(J.mv,t)
inherit(J.mw,t)
inherit(J.hk,t)
inherit(J.ei,t)
inherit(J.fb,t)
inherit(J.ej,t)
inherit(H.fd,t)
inherit(H.eo,t)
inherit(W.aF,t)
inherit(W.cK,t)
inherit(W.eQ,t)
inherit(W.fQ,t)
inherit(W.bI,t)
inherit(W.iA,t)
inherit(W.l4,t)
inherit(W.eU,t)
inherit(W.i9,t)
inherit(W.ic,t)
inherit(W.l7,t)
inherit(W.id,t)
inherit(W.iB,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(W.fU,t)
inherit(W.S,t)
inherit(W.iC,t)
inherit(W.lM,t)
inherit(W.lQ,t)
inherit(W.cl,t)
inherit(W.m1,t)
inherit(W.iD,t)
inherit(W.hd,t)
inherit(W.e3,t)
inherit(W.mV,t)
inherit(W.jr,t)
inherit(W.cn,t)
inherit(W.iN,t)
inherit(W.ni,t)
inherit(W.nj,t)
inherit(W.iO,t)
inherit(W.nx,t)
inherit(W.e0,t)
inherit(W.e4,t)
inherit(W.cd,t)
inherit(W.iP,t)
inherit(W.o2,t)
inherit(W.cp,t)
inherit(W.iQ,t)
inherit(W.fm,t)
inherit(W.cf,t)
inherit(W.od,t)
inherit(W.oi,t)
inherit(W.cg,t)
inherit(W.iR,t)
inherit(W.oW,t)
inherit(W.cq,t)
inherit(W.iS,t)
inherit(W.fp,t)
inherit(W.jQ,t)
inherit(W.pa,t)
inherit(W.fq,t)
inherit(W.jR,t)
inherit(W.pH,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.qO,t)
inherit(W.qP,t)
inherit(P.mc,t)
inherit(P.nn,t)
inherit(P.d2,t)
inherit(P.iI,t)
inherit(P.d3,t)
inherit(P.iJ,t)
inherit(P.nF,t)
inherit(P.iK,t)
inherit(P.d4,t)
inherit(P.iL,t)
inherit(P.pg,t)
inherit(P.fG,t)
inherit(P.kq,t)
inherit(P.nP,t)
inherit(P.qN,t)
inherit(P.iM,t)
t=J.hk
inherit(J.nD,t)
inherit(J.eA,t)
inherit(J.ek,t)
inherit(F.tF,t)
inherit(R.ha,t)
inherit(R.tX,t)
inherit(R.tW,t)
inherit(S.fg,t)
inherit(S.uo,t)
inherit(S.up,t)
inherit(S.uq,t)
inherit(S.rN,t)
inherit(S.rQ,t)
inherit(S.rE,t)
inherit(S.us,t)
inherit(S.ut,t)
inherit(S.l1,t)
inherit(S.uf,t)
inherit(S.ug,t)
inherit(S.ry,t)
inherit(S.lW,t)
inherit(S.kJ,t)
inherit(S.rD,t)
inherit(S.rC,t)
inherit(S.rP,t)
inherit(S.oT,t)
inherit(S.rG,t)
inherit(S.hs,t)
inherit(S.tN,t)
inherit(S.tP,t)
inherit(S.ua,t)
inherit(S.ub,t)
inherit(S.tR,t)
inherit(S.tS,t)
inherit(S.t3,t)
inherit(S.t4,t)
inherit(S.tT,t)
inherit(S.tQ,t)
inherit(S.rA,t)
inherit(S.ul,t)
inherit(S.um,t)
inherit(S.uk,t)
inherit(Z.tA,t)
inherit(Z.tw,t)
inherit(Z.tx,t)
inherit(J.tB,J.ei)
t=J.fb
inherit(J.jo,t)
inherit(J.jn,t)
inherit(P.jp,P.hB)
t=P.jp
inherit(H.hK,t)
inherit(W.k1,t)
inherit(H.kO,H.hK)
t=P.n
inherit(H.r,t)
inherit(H.hr,t)
inherit(H.e5,t)
inherit(P.hi,t)
inherit(H.qC,t)
t=H.r
inherit(H.el,t)
inherit(H.mL,t)
inherit(P.qb,t)
inherit(P.eu,t)
t=H.el
inherit(H.oF,t)
inherit(H.fc,t)
inherit(P.mO,t)
inherit(H.fT,H.hr)
t=P.jm
inherit(H.jq,t)
inherit(H.eC,t)
inherit(Q.pk,t)
t=H.eR
inherit(H.rr,t)
inherit(H.rs,t)
inherit(H.qf,t)
inherit(H.pS,t)
inherit(H.mg,t)
inherit(H.mh,t)
inherit(H.qm,t)
inherit(H.oY,t)
inherit(H.oZ,t)
inherit(H.rt,t)
inherit(H.re,t)
inherit(H.rf,t)
inherit(H.rg,t)
inherit(H.rh,t)
inherit(H.ri,t)
inherit(H.oK,t)
inherit(H.mz,t)
inherit(H.my,t)
inherit(H.ra,t)
inherit(H.rb,t)
inherit(H.rc,t)
inherit(P.pB,t)
inherit(P.pA,t)
inherit(P.pC,t)
inherit(P.pD,t)
inherit(P.qR,t)
inherit(P.qS,t)
inherit(P.r1,t)
inherit(P.r2,t)
inherit(P.lV,t)
inherit(P.lU,t)
inherit(P.pX,t)
inherit(P.q4,t)
inherit(P.q0,t)
inherit(P.q1,t)
inherit(P.q2,t)
inherit(P.pZ,t)
inherit(P.q3,t)
inherit(P.pY,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.q6,t)
inherit(P.q5,t)
inherit(P.om,t)
inherit(P.ok,t)
inherit(P.ol,t)
inherit(P.on,t)
inherit(P.os,t)
inherit(P.oq,t)
inherit(P.or,t)
inherit(P.ot,t)
inherit(P.ow,t)
inherit(P.ox,t)
inherit(P.ou,t)
inherit(P.ov,t)
inherit(P.oy,t)
inherit(P.oz,t)
inherit(P.oo,t)
inherit(P.op,t)
inherit(P.pG,t)
inherit(P.pF,t)
inherit(P.qo,t)
inherit(P.qU,t)
inherit(P.qT,t)
inherit(P.qV,t)
inherit(P.r0,t)
inherit(P.qs,t)
inherit(P.qt,t)
inherit(P.qu,t)
inherit(P.qd,t)
inherit(P.n1,t)
inherit(P.qM,t)
inherit(P.qL,t)
inherit(P.lb,t)
inherit(P.lc,t)
inherit(P.p9,t)
inherit(P.p6,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.r3,t)
inherit(P.qY,t)
inherit(P.qX,t)
inherit(P.qZ,t)
inherit(P.r_,t)
inherit(W.pJ,t)
inherit(W.m4,t)
inherit(W.m5,t)
inherit(W.pV,t)
inherit(P.qG,t)
inherit(P.py,t)
inherit(P.r5,t)
inherit(P.r6,t)
inherit(P.kV,t)
inherit(P.qW,t)
inherit(P.kw,t)
inherit(P.kx,t)
inherit(L.ks,t)
inherit(O.kE,t)
inherit(B.mf,t)
inherit(A.mu,t)
inherit(A.mt,t)
inherit(T.nU,t)
inherit(O.rl,t)
inherit(G.mr,t)
inherit(U.po,t)
inherit(U.pp,t)
inherit(A.r4,t)
inherit(A.mS,t)
inherit(A.mQ,t)
inherit(A.mR,t)
inherit(A.mT,t)
inherit(O.ro,t)
inherit(O.rp,t)
inherit(O.rn,t)
inherit(V.li,t)
inherit(V.lh,t)
inherit(V.lg,t)
inherit(V.lf,t)
inherit(D.oh,t)
inherit(Q.pl,t)
t=H.pE
inherit(H.fu,t)
inherit(H.hX,t)
inherit(H.kS,H.kR)
t=P.eb
inherit(H.jw,t)
inherit(H.mA,t)
inherit(H.p3,t)
inherit(H.kM,t)
inherit(H.nT,t)
inherit(P.ff,t)
inherit(P.cY,t)
inherit(P.V,t)
inherit(P.ez,t)
inherit(P.dM,t)
inherit(P.bM,t)
inherit(P.l3,t)
t=H.oK
inherit(H.of,t)
inherit(H.fI,t)
t=P.hi
inherit(H.pz,t)
inherit(T.fD,t)
t=H.eo
inherit(H.na,t)
inherit(H.jt,t)
t=H.jt
inherit(H.hx,t)
inherit(H.hy,t)
inherit(H.hz,H.hx)
inherit(H.hv,H.hz)
inherit(H.hA,H.hy)
inherit(H.hw,H.hA)
t=H.hv
inherit(H.nb,t)
inherit(H.nc,t)
t=H.hw
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.ng,t)
inherit(H.nh,t)
inherit(H.ju,t)
inherit(H.fe,t)
t=P.jZ
inherit(P.dQ,t)
inherit(P.ka,t)
t=P.k0
inherit(P.pL,t)
inherit(P.pN,t)
inherit(P.qA,P.qn)
t=P.df
inherit(P.hR,t)
inherit(W.pT,t)
inherit(P.hS,P.dg)
inherit(P.ql,P.hR)
inherit(P.qr,P.qQ)
inherit(P.k5,H.u)
inherit(P.o3,P.o4)
inherit(P.qe,P.o3)
inherit(P.k4,P.qe)
inherit(P.hL,P.n0)
t=P.fN
inherit(P.kB,t)
inherit(P.le,t)
t=P.fP
inherit(P.kC,t)
inherit(P.pd,t)
inherit(P.pc,P.le)
t=P.dj
inherit(P.U,t)
inherit(P.D,t)
t=P.cY
inherit(P.et,t)
inherit(P.md,t)
inherit(P.pK,P.kb)
t=W.aF
inherit(W.ay,t)
inherit(W.fW,t)
inherit(W.kQ,t)
inherit(W.lL,t)
inherit(W.lN,t)
inherit(W.lR,t)
inherit(W.hc,t)
inherit(W.hu,t)
inherit(W.nH,t)
inherit(W.jG,t)
inherit(W.o5,t)
inherit(W.eD,t)
inherit(W.co,t)
inherit(W.fX,t)
inherit(W.cQ,t)
inherit(W.cG,t)
inherit(W.fY,t)
inherit(W.pe,t)
inherit(W.pj,t)
inherit(W.jT,t)
inherit(W.pq,t)
inherit(W.qy,t)
inherit(P.l5,t)
inherit(P.hE,t)
inherit(P.p_,t)
inherit(P.bC,t)
inherit(P.fH,t)
t=W.ay
inherit(W.dm,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.ib,t)
inherit(W.fr,t)
inherit(W.pO,t)
t=W.dm
inherit(W.am,t)
inherit(P.c9,t)
t=W.am
inherit(W.eL,t)
inherit(W.kr,t)
inherit(W.ht,t)
inherit(W.kD,t)
inherit(W.kG,t)
inherit(W.fM,t)
inherit(W.ld,t)
inherit(W.lK,t)
inherit(W.iw,t)
inherit(W.m9,t)
inherit(W.f5,t)
inherit(W.me,t)
inherit(W.mD,t)
inherit(W.hm,t)
inherit(W.n_,t)
inherit(W.n4,t)
inherit(W.nm,t)
inherit(W.nr,t)
inherit(W.nv,t)
inherit(W.fl,t)
inherit(W.jI,t)
inherit(W.o7,t)
inherit(W.hF,t)
inherit(W.oM,t)
inherit(W.oO,t)
inherit(W.q9,t)
inherit(W.eP,W.ht)
inherit(W.fZ,W.fW)
inherit(W.kz,W.fZ)
t=W.bI
inherit(W.kW,t)
inherit(W.kX,t)
inherit(W.fR,t)
inherit(W.fS,t)
inherit(W.kY,t)
inherit(W.kZ,t)
inherit(W.l_,t)
inherit(W.eT,W.iA)
inherit(W.pI,W.jx)
inherit(W.iV,W.iB)
inherit(W.ie,W.iV)
t=W.S
inherit(W.fV,t)
inherit(W.ob,t)
inherit(W.oc,t)
inherit(W.cb,W.eQ)
inherit(W.iW,W.iC)
inherit(W.f1,W.iW)
inherit(W.iX,W.iD)
inherit(W.f3,W.iX)
inherit(W.iy,W.f3)
inherit(W.dZ,W.hc)
inherit(W.hl,W.e3)
inherit(W.n5,W.hu)
inherit(W.j6,W.iN)
inherit(W.js,W.j6)
inherit(W.j7,W.iO)
inherit(W.jv,W.j7)
inherit(W.nC,W.e4)
inherit(W.j8,W.iP)
inherit(W.jC,W.j8)
inherit(W.o6,W.eD)
inherit(W.h_,W.fX)
inherit(W.jK,W.h_)
inherit(W.j9,W.iQ)
inherit(W.jL,W.j9)
inherit(W.ja,W.iR)
inherit(W.oR,W.ja)
inherit(W.h0,W.fY)
inherit(W.oS,W.h0)
inherit(W.jb,W.iS)
inherit(W.jP,W.jb)
inherit(W.jc,W.iT)
inherit(W.hP,W.jc)
inherit(W.jd,W.iU)
inherit(W.k_,W.jd)
inherit(W.pP,W.id)
inherit(W.iY,W.iE)
inherit(W.k3,W.iY)
inherit(W.iZ,W.iF)
inherit(W.hV,W.iZ)
inherit(W.j_,W.iG)
inherit(W.k7,W.j_)
inherit(W.j0,W.iH)
inherit(W.k9,W.j0)
t=P.kU
inherit(W.pQ,t)
inherit(P.kv,t)
inherit(W.hQ,W.pT)
inherit(W.pU,P.oj)
inherit(P.qF,P.qE)
inherit(P.jW,P.px)
inherit(P.bS,P.qq)
t=P.c9
inherit(P.cm,t)
inherit(P.e8,t)
inherit(P.ll,t)
inherit(P.lm,t)
inherit(P.ln,t)
inherit(P.lo,t)
inherit(P.lp,t)
inherit(P.lq,t)
inherit(P.lr,t)
inherit(P.ls,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lO,t)
inherit(P.n2,t)
inherit(P.n3,t)
inherit(P.nA,t)
inherit(P.o_,t)
inherit(P.oI,t)
inherit(P.pf,t)
inherit(P.hT,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qx,t)
t=P.cm
inherit(P.ko,t)
inherit(P.ma,t)
inherit(P.oG,t)
inherit(P.ey,t)
inherit(P.pb,t)
inherit(P.j1,P.iI)
inherit(P.mG,P.j1)
inherit(P.j2,P.iJ)
inherit(P.nk,P.j2)
inherit(P.j3,P.iK)
inherit(P.oD,P.j3)
inherit(P.oQ,P.ey)
inherit(P.j4,P.iL)
inherit(P.p0,P.j4)
t=P.bC
inherit(P.dU,t)
inherit(P.kT,t)
inherit(P.eO,P.dU)
inherit(P.j5,P.iM)
inherit(P.jM,P.j5)
t=B.f6
inherit(S.kp,t)
inherit(M.ku,t)
inherit(A.kP,t)
inherit(M.l0,t)
inherit(V.l8,t)
inherit(U.lB,t)
inherit(N.mC,t)
inherit(F.n8,t)
inherit(G.nG,t)
inherit(Q.nR,t)
inherit(N.o9,t)
inherit(D.oL,t)
inherit(V.oN,t)
inherit(F.pr,t)
t=N.a6
inherit(T.l6,t)
inherit(R.nK,t)
t=T.l6
inherit(K.bT,t)
inherit(S.bG,t)
inherit(T.c0,t)
inherit(M.bB,t)
inherit(A.nu,A.jy)
inherit(L.aH,A.nu)
t=O.c4
inherit(O.dk,t)
inherit(O.ii,t)
inherit(O.ex,t)
t=O.dk
inherit(U.ky,t)
inherit(Y.nM,t)
inherit(V.lS,t)
inherit(Q.mb,t)
inherit(Q.nB,t)
inherit(M.oe,t)
inherit(B.pw,t)
t=U.ky
inherit(U.mX,t)
inherit(U.np,t)
inherit(U.oA,O.ii)
t=U.oA
inherit(U.oB,t)
inherit(U.oC,t)
t=T.fk
inherit(O.kA,t)
inherit(Y.lX,t)
inherit(Y.lY,t)
inherit(B.m_,t)
inherit(X.m7,t)
inherit(Q.m8,t)
inherit(S.mE,t)
inherit(Z.mW,t)
inherit(S.mY,t)
inherit(U.mZ,t)
inherit(E.n7,t)
inherit(V.nt,t)
inherit(N.nJ,t)
inherit(N.nQ,t)
inherit(E.nV,t)
inherit(Y.nW,t)
inherit(Y.nY,t)
inherit(L.nZ,t)
inherit(S.o1,t)
inherit(Y.o8,t)
inherit(R.oH,t)
inherit(U.oU,t)
inherit(E.pi,t)
inherit(M.pm,t)
t=O.ex
inherit(Y.oP,t)
inherit(Y.kK,t)
inherit(Y.nl,t)
inherit(U.pn,t)
t=L.eM
inherit(T.kF,t)
inherit(T.kI,t)
inherit(U.l9,t)
inherit(Z.la,t)
inherit(T.lZ,t)
inherit(V.m0,t)
inherit(X.m2,t)
inherit(Z.mB,t)
inherit(Q.mF,t)
inherit(K.mH,t)
inherit(G.mI,t)
inherit(V.n6,t)
inherit(E.nL,t)
inherit(V.nS,t)
inherit(K.nX,t)
inherit(N.oa,t)
inherit(L.oJ,t)
inherit(N.oV,t)
inherit(Q.ph,t)
t=S.bG
inherit(S.i5,t)
inherit(S.m3,t)
inherit(E.ix,E.no)
t=E.M
inherit(E.fF,t)
inherit(E.kt,t)
inherit(Q.nE,Q.mb)
inherit(U.W,U.b)
t=R.nK
inherit(R.a0,t)
inherit(R.Q,t)
inherit(R.a5,t)
inherit(R.bA,R.a5)
t=Y.dK
inherit(Y.ad,t)
inherit(Y.bZ,t)
inherit(Y.T,t)
inherit(Y.i7,t)
inherit(Y.bD,t)
inherit(Y.cW,t)
inherit(Y.kN,t)
inherit(Y.jz,t)
inherit(Y.iv,t)
inherit(Y.jB,t)
t=Y.bZ
inherit(Y.cZ,t)
inherit(Y.bw,t)
inherit(U.af,A.a1)
t=G.Z
inherit(G.aK,t)
inherit(G.bH,t)
inherit(G.d,t)
inherit(G.ae,G.bH)
t=D.cE
inherit(D.jV,t)
inherit(D.nO,t)
t=Q.cR
inherit(Q.hN,t)
inherit(Q.hM,t)
inherit(Q.dP,Q.hN)
inherit(B.jU,Q.dP)
t=S.fg
inherit(S.u8,t)
inherit(S.kL,t)
inherit(S.mJ,t)
inherit(S.tL,t)
inherit(S.t2,t)
t=S.kL
inherit(S.tZ,t)
inherit(S.tU,t)
t=S.mJ
inherit(S.rI,t)
inherit(S.rz,t)
t=S.l1
inherit(S.tG,t)
inherit(S.l2,t)
inherit(S.nw,S.l2)
inherit(S.uc,S.nw)
t=S.kJ
inherit(S.u_,t)
inherit(S.ud,t)
t=S.lW
inherit(S.uh,t)
inherit(S.u0,t)
inherit(S.rO,t)
inherit(S.ue,t)
t=S.oT
inherit(S.uj,t)
inherit(S.rF,t)
inherit(S.ur,t)
t=S.hs
inherit(S.tM,t)
inherit(S.tO,t)
inherit(S.u9,t)
inherit(Q.eE,Q.hM)
inherit(Q.jS,Q.eE)
mixin(H.hK,H.p4)
mixin(H.hx,P.b3)
mixin(H.hz,H.iu)
mixin(H.hy,P.b3)
mixin(H.hA,H.iu)
mixin(P.hB,P.b3)
mixin(P.hL,P.qI)
mixin(W.fW,P.b3)
mixin(W.fZ,W.bx)
mixin(W.iA,W.i8)
mixin(W.jx,W.i8)
mixin(W.iB,P.b3)
mixin(W.iV,W.bx)
mixin(W.iC,P.b3)
mixin(W.iW,W.bx)
mixin(W.iD,P.b3)
mixin(W.iX,W.bx)
mixin(W.iN,P.b3)
mixin(W.j6,W.bx)
mixin(W.iO,P.b3)
mixin(W.j7,W.bx)
mixin(W.iP,P.b3)
mixin(W.j8,W.bx)
mixin(W.fX,P.b3)
mixin(W.h_,W.bx)
mixin(W.iQ,P.b3)
mixin(W.j9,W.bx)
mixin(W.iR,P.b3)
mixin(W.ja,W.bx)
mixin(W.fY,P.b3)
mixin(W.h0,W.bx)
mixin(W.iS,P.b3)
mixin(W.jb,W.bx)
mixin(W.iT,P.b3)
mixin(W.jc,W.bx)
mixin(W.iU,P.b3)
mixin(W.jd,W.bx)
mixin(W.iE,P.b3)
mixin(W.iY,W.bx)
mixin(W.iF,P.b3)
mixin(W.iZ,W.bx)
mixin(W.iG,P.b3)
mixin(W.j_,W.bx)
mixin(W.iH,P.b3)
mixin(W.j0,W.bx)
mixin(P.iI,P.b3)
mixin(P.j1,W.bx)
mixin(P.iJ,P.b3)
mixin(P.j2,W.bx)
mixin(P.iK,P.b3)
mixin(P.j3,W.bx)
mixin(P.iL,P.b3)
mixin(P.j4,W.bx)
mixin(P.iM,P.b3)
mixin(P.j5,W.bx)
mixin(A.jy,P.fa)
mixin(Q.hN,P.b3)
mixin(Q.hM,P.fa)})();(function constants(){C.L=W.dZ.prototype
C.M=J.h.prototype
C.b=J.ei.prototype
C.f=J.jn.prototype
C.a=J.jo.prototype
C.d=J.fb.prototype
C.c=J.ej.prototype
C.T=J.ek.prototype
C.q=H.fe.prototype
C.F=J.nD.prototype
C.t=J.eA.prototype
C.H=new P.kC(!1)
C.G=new P.kB(C.H)
C.j=new W.i6()
C.I=new P.nq()
C.J=new P.pM()
C.K=new P.qg()
C.e=new P.qr()
C.h=new W.qH()
C.p=new P.dD(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.U=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.V=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.W=makeConstList([])
C.Y=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.i=new F.hp(0,"LogLevel.ERROR")
C.n=new F.hp(1,"LogLevel.WARN")
C.Z=new F.hp(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.C])
C.a_=new H.kS(0,{},C.X,[P.C,P.C])
C.a0=H.bW("bg")
C.a1=H.bW("Hd")
C.r=H.bW("He")
C.a2=H.bW("Hf")
C.a3=H.bW("Hg")
C.a4=H.bW("Hi")
C.a5=H.bW("Hj")
C.a6=H.bW("Hk")
C.a7=H.bW("mx")
C.a8=H.bW("cO")
C.a9=H.bW("C")
C.aa=H.bW("Ho")
C.ab=H.bW("Hp")
C.ac=H.bW("Hq")
C.ad=H.bW("d5")
C.ae=H.bW("d6")
C.af=H.bW("U")
C.ag=H.bW("D")
C.ah=H.bW("dj")
C.o=new P.pc(!1)})();(function staticFields(){$.wl="$cachedFunction"
$.wm="$cachedInvocation"
$.dC=0
$.fJ=null
$.uX=null
$.uE=null
$.xj=null
$.xv=null
$.r7=null
$.rd=null
$.uF=null
$.fw=null
$.hY=null
$.hZ=null
$.uA=!1
$.ao=C.e
$.vd=0
$.v9=null
$.v8=null
$.v7=null
$.va=null
$.v6=null
$.yh=null
$.yj=null
$.y2=null
$.y3=null
$.y1=null
$.y5=null
$.yc=null
$.yb=null
$.yk=null
$.ye=null
$.y7=null
$.ya=null
$.y4=null
$.y9=null
$.yg=null
$.y8=null
$.yi=null
$.yf=null
$.y6=null
$.yd=null
$.aP="accent"
$.aR="aspect1"
$.aQ="aspect2"
$.b_="shoe1"
$.aZ="shoe2"
$.aT="cloak1"
$.aU="cloak2"
$.aS="cloak3"
$.aY="shirt1"
$.aX="shirt2"
$.aW="pants1"
$.aV="pants2"
$.ah=1300
$.k=3
$.m=2
$.K=1
$.B=0.1
$.yZ=1
$.yY=-1
$.rY=null
$.dX=null
$.ve=null
$.ee=null
$.f_=null
$.io=null
$.rR=null
$.lD=null
$.t_=null
$.ip=null
$.il=null
$.vg=null
$.it=null
$.h3=null
$.dH=null
$.vf=null
$.lC=null
$.lJ=null
$.eY=null
$.yW=null
$.yT=null
$.yV=null
$.yX=null
$.h9=null
$.eV=null
$.cv=null
$.d0=null
$.eX=null
$.lI=null
$.c3=null
$.c2=null
$.rT=null
$.h7=null
$.ed=null
$.yU=null
$.h6=null
$.cB=null
$.dY=null
$.is=null
$.d_=null
$.eZ=null
$.bX=null
$.lG=null
$.rU=null
$.b0=null
$.cA=null
$.cj=null
$.ca=null
$.lF=null
$.bY=null
$.dq=null
$.dp=null
$.dn=null
$.dF=null
$.dG=null
$.dE=null
$.d1=null
$.h8=null
$.lE=null
$.im=null
$.cS=null
$.cu=null
$.bc=null
$.eW=null
$.ef=null
$.lH=null
$.h5=null
$.h4=null
$.rW=null
$.cz=null
$.rZ=null
$.rS=null
$.vi=null
$.ec=null
$.cy=null
$.db=null
$.da=null
$.f0=null
$.rV=null
$.rX=null
$.vh=null
$.iq=null
$.ir=null
$.eg=null
$.vj=!1
$.t1=null
$.z_=null
$.vl=null
$.vn=null
$.z8=null
$.vm=null
$.z6=null
$.z7=null
$.t0=null
$.z3=null
$.z1=null
$.z2=null
$.z4=null
$.z5=null
$.zi=null
$.zb=null
$.zc=null
$.zd=null
$.ze=null
$.zf=null
$.zg=null
$.zh=null
$.zk=null
$.zl=null
$.zm=null
$.zn=null
$.zo=null
$.zp=null
$.zj=null
$.EC="JACK"
$.EG="PM"
$.ED="JS"
$.EB="HP"
$.EL="YD"
$.EI="SI"
$.EJ="SU"
$.EE="ME"
$.EH="RB"
$.Ez="GN"
$.wf="MP"
$.Ex="AR"
$.EF="PE"
$.Ey="DP"
$.EK="WV"
$.EA="HB"
$.o="PLAYER1TAG"
$.es="PLAYER2TAG"
$.y="DENIZENTAG"
$.t="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aJ="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.ce="TAGWEAPON"
$.Fh=null
$.Fu=null
$.Fb=null
$.Fe=null
$.Fk=null
$.Fp=null
$.Fn=null
$.Fx=null
$.Fw=null
$.Fo=null
$.Fz=null
$.Fj=null
$.Fy=null
$.Fs=null
$.Fq=null
$.Ft=null
$.Fd=null
$.Fc=null
$.Fm=null
$.Fl=null
$.Fi=null
$.Fv=null
$.Ff=null
$.Fg=null
$.Fr=null
$.xo=!1
$.GJ=!1
$.FB=!1
$.wu=null
$.FI=13
$.al=3
$.bL=2
$.aC=1
$.ms=0
$.I=1
$.a3=3
$.G=4
$.tt=6
$.tu=7
$.a9=8
$.v=9
$.q=10
$.ji=null
$.f9=null
$.tg=null
$.tp=null
$.tm=null
$.vv=null
$.tb=null
$.tl=null
$.hg=null
$.vG=null
$.w0=null
$.vA=null
$.vH=null
$.tc=null
$.tk=null
$.w2=null
$.w4=null
$.t8=null
$.jh=null
$.jf=null
$.as=null
$.vV=null
$.t7=null
$.vQ=null
$.f8=null
$.vz=null
$.w5=null
$.w1=null
$.w_=null
$.ti=null
$.ml=null
$.eh=null
$.w3=null
$.mj=null
$.td=null
$.e_=null
$.vY=null
$.dc=null
$.hf=null
$.ts=null
$.vZ=null
$.tr=null
$.tn=null
$.to=null
$.mo=null
$.jg=null
$.zP=null
$.vJ=null
$.vP=null
$.vX=null
$.vW=null
$.E=null
$.vE=null
$.mk=null
$.bO=null
$.b8=null
$.bP=null
$.X=null
$.aA=null
$.c6=null
$.L=null
$.P=null
$.au=null
$.b6=null
$.bU=null
$.bh=null
$.bm=null
$.cc=null
$.b2=null
$.bz=null
$.bQ=null
$.a_=null
$.Eb=null
$.at=null
$.b7=null
$.aN=null
$.aa=null
$.c5=null
$.aO=null
$.aq=null
$.bV=null
$.b1=null
$.aj=null
$.bj=null
$.c_=null
$.aD=null
$.bn=null
$.bk=null
$.a7=null
$.bK=null
$.a8=null
$.be=null
$.bq=null
$.aM=null
$.bd=null
$.aw=null
$.b4=null
$.aG=null
$.Y=null
$.ar=null
$.aB=null
$.b5=null
$.ap=null
$.an=null
$.a2=null
$.R=null
$.N=null
$.ai=null
$.aI=null
$.b9=null
$.aL=null
$.B7=null
$.DO=null
$.Em=null
$.AD=null
$.DL=null
$.B8=null
$.vu=null
$.E_=null
$.C7=null
$.B3=null
$.zL=null
$.CI=null
$.jj=null
$.vC=null
$.D7=null
$.AA=null
$.BR=null
$.Ay=null
$.t9=null
$.Aj=null
$.Bk=null
$.AI=null
$.C0=null
$.E7=null
$.B9=null
$.ta=null
$.C1=null
$.AG=null
$.Ap=null
$.vU=null
$.zE=null
$.t6=null
$.BK=null
$.th=null
$.Cm=null
$.Cg=null
$.zI=null
$.As=null
$.Dh=null
$.zK=null
$.DK=null
$.BQ=null
$.AP=null
$.D1=null
$.DE=null
$.tf=null
$.Cb=null
$.CZ=null
$.AH=null
$.zx=null
$.Ea=null
$.BU=null
$.Ao=null
$.DZ=null
$.Cp=null
$.Av=null
$.DJ=null
$.AZ=null
$.Dp=null
$.Dq=null
$.zG=null
$.Ci=null
$.AJ=null
$.AT=null
$.Eq=null
$.hh=null
$.Df=null
$.DH=null
$.mn=null
$.Ad=null
$.Cz=null
$.CD=null
$.zD=null
$.AY=null
$.DI=null
$.Co=null
$.E1=null
$.D3=null
$.CE=null
$.vO=null
$.Dt=null
$.Eg=null
$.DN=null
$.Bx=null
$.CQ=null
$.By=null
$.Di=null
$.Ee=null
$.C_=null
$.AV=null
$.Bh=null
$.A4=null
$.D_=null
$.Bf=null
$.Bm=null
$.AL=null
$.Ds=null
$.f7=null
$.Ct=null
$.vM=null
$.Bz=null
$.vN=null
$.Ej=null
$.A9=null
$.Dd=null
$.De=null
$.Dc=null
$.Db=null
$.DA=null
$.Bn=null
$.Cj=null
$.DD=null
$.Ca=null
$.Cu=null
$.AE=null
$.Ed=null
$.Ch=null
$.B0=null
$.B1=null
$.CC=null
$.Ep=null
$.BO=null
$.Ec=null
$.vS=null
$.Do=null
$.BY=null
$.mq=null
$.BI=null
$.CS=null
$.A8=null
$.B4=null
$.Dk=null
$.Ck=null
$.E6=null
$.vR=null
$.Cs=null
$.Af=null
$.AB=null
$.CO=null
$.DU=null
$.Dj=null
$.mi=null
$.tq=null
$.Dv=null
$.Ef=null
$.Bw=null
$.zT=null
$.A1=null
$.DS=null
$.Cw=null
$.C8=null
$.Cx=null
$.DP=null
$.BJ=null
$.zH=null
$.Bl=null
$.C6=null
$.Dx=null
$.Be=null
$.A7=null
$.D9=null
$.Da=null
$.E4=null
$.Dm=null
$.tj=null
$.vD=null
$.Aw=null
$.vF=null
$.BD=null
$.mm=null
$.CU=null
$.Cf=null
$.D5=null
$.te=null
$.mp=null
$.vL=null
$.AR=null
$.Bj=null
$.vT=null
$.vI=null
$.Ar=null
$.DW=null
$.Ak=null
$.CG=null
$.BA=null
$.DC=null
$.C9=null
$.zQ=null
$.BB=null
$.AO=null
$.CK=null
$.BT=null
$.Ce=null
$.BZ=null
$.C2=null
$.D8=null
$.D4=null
$.zA=null
$.DT=null
$.CX=null
$.AF=null
$.AK=null
$.Bi=null
$.DQ=null
$.Bb=null
$.BV=null
$.zX=null
$.B5=null
$.AN=null
$.Cy=null
$.AW=null
$.Dg=null
$.BX=null
$.vw=null
$.CT=null
$.BC=null
$.Bc=null
$.zy=null
$.zF=null
$.Cv=null
$.CF=null
$.BS=null
$.Bu=null
$.E9=null
$.A_=null
$.Bd=null
$.BW=null
$.AC=null
$.Dz=null
$.Aq=null
$.Dl=null
$.zY=null
$.DV=null
$.C4=null
$.zS=null
$.D2=null
$.CP=null
$.Ax=null
$.Bo=null
$.Ae=null
$.DR=null
$.BG=null
$.E5=null
$.Ag=null
$.Bp=null
$.Ah=null
$.Az=null
$.CW=null
$.At=null
$.BH=null
$.Cl=null
$.Aa=null
$.DB=null
$.El=null
$.Dr=null
$.Cc=null
$.Dy=null
$.Cd=null
$.zN=null
$.zz=null
$.C5=null
$.zV=null
$.Ai=null
$.zO=null
$.zR=null
$.Cr=null
$.CL=null
$.DY=null
$.BE=null
$.Ek=null
$.D0=null
$.CY=null
$.BL=null
$.BF=null
$.Am=null
$.Bs=null
$.C3=null
$.CA=null
$.Du=null
$.zC=null
$.Eh=null
$.AU=null
$.DF=null
$.AM=null
$.zM=null
$.Ab=null
$.A3=null
$.Eo=null
$.Ac=null
$.AX=null
$.Al=null
$.E3=null
$.Dw=null
$.DX=null
$.zB=null
$.D6=null
$.BM=null
$.BP=null
$.E8=null
$.DG=null
$.vK=null
$.B2=null
$.CN=null
$.Ei=null
$.B6=null
$.BN=null
$.vB=null
$.Bv=null
$.Bt=null
$.Dn=null
$.CM=null
$.Bq=null
$.A2=null
$.DM=null
$.CB=null
$.E0=null
$.En=null
$.vy=null
$.vx=null
$.zZ=null
$.B_=null
$.CV=null
$.Au=null
$.CR=null
$.AQ=null
$.zJ=null
$.A0=null
$.Cq=null
$.AS=null
$.CJ=null
$.A6=null
$.Ba=null
$.E2=null
$.zU=null
$.Bg=null
$.CH=null
$.A5=null
$.Br=null
$.Cn=null
$.zW=null
$.An=null
$.wV=4
$.f2="OWNER"
$.wb=!1
$.tK=null
$.xx=""
$.og=null
$.FF=null
$.hI=null
$.ev=null
$.FE=null
$.e2=null
$.ew=null
$.cF=null
$.fn=null
$.hG=null
$.hH=null
$.dt=null
$.c7=null
$.ww=!1})();(function lazyInitializers(){lazy($,"v4","$get$v4",function(){return H.xr("_$dart_dartClosure")})
lazy($,"tD","$get$tD",function(){return H.xr("_$dart_js")})
lazy($,"vs","$get$vs",function(){return H.zv()})
lazy($,"vt","$get$vt",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vd
$.vd=t+1
t="expando$key$"+t}return new P.lk(null,t,[P.D])})
lazy($,"wB","$get$wB",function(){return H.dN(H.p2({
toString:function(){return"$receiver$"}}))})
lazy($,"wC","$get$wC",function(){return H.dN(H.p2({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wD","$get$wD",function(){return H.dN(H.p2(null))})
lazy($,"wE","$get$wE",function(){return H.dN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wI","$get$wI",function(){return H.dN(H.p2(void 0))})
lazy($,"wJ","$get$wJ",function(){return H.dN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wG","$get$wG",function(){return H.dN(H.wH(null))})
lazy($,"wF","$get$wF",function(){return H.dN(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wL","$get$wL",function(){return H.dN(H.wH(void 0))})
lazy($,"wK","$get$wK",function(){return H.dN(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uw","$get$uw",function(){return P.FO()})
lazy($,"hb","$get$hb",function(){return P.FU(null,P.cO)})
lazy($,"i_","$get$i_",function(){return[]})
lazy($,"wX","$get$wX",function(){return H.EM([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xh","$get$xh",function(){return P.Gi()})
lazy($,"v3","$get$v3",function(){return P.dI("^\\S+$",!0,!1)})
lazy($,"i3","$get$i3",function(){return P.cC(P.D,L.eM)})
lazy($,"uZ","$get$uZ",function(){return P.dI("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bG])})
lazy($,"lT","$get$lT",function(){return P.cC(P.C,Z.ij)})
lazy($,"je","$get$je",function(){return P.cC(P.D,B.f6)})
lazy($,"w6","$get$w6",function(){return H.a([],[A.a1])})
lazy($,"wg","$get$wg",function(){return H.a([],[P.C])})
lazy($,"jH","$get$jH",function(){return P.cC(P.D,T.fk)})
lazy($,"ak","$get$ak",function(){return H.a([],[U.af])})
lazy($,"wv","$get$wv",function(){return P.w9([0,new K.cD("Pixels -> Bytes",T.Gy(),T.Gx()),1,new K.cD("Pixels -> Packed bits",T.Gw(),T.Gv()),2,new K.cD("RLE 1 byte",V.rM(1),V.rL(1)),3,new K.cD("RLE 2 bytes",V.rM(2),V.rL(2)),4,new K.cD("RLE 3 bytes",V.rM(3),V.rL(3)),5,new K.cD("RLE packed 1 byte",V.rK(1),V.rJ(1)),6,new K.cD("RLE packed 2 bytes",V.rK(2),V.rJ(2)),7,new K.cD("RLE packed 3 bytes",V.rK(3),V.rJ(3)),8,new K.cD("RLE dynamic",V.H5(),V.H4()),9,new K.cD("Exponential-Golomb pixels",F.GP(),F.GO()),10,new K.cD("Exponential-Golomb run RLE",F.GN(),F.GM()),11,new K.cD("Exponential-Golomb run/data RLE",F.GL(),F.GK())],P.D,K.cD)})
lazy($,"c","$get$c",function(){return P.a4(null,null,null,G.Z)})
lazy($,"wT","$get$wT",function(){return P.dI("[\n\r]+",!0,!1)})
lazy($,"wU","$get$wU",function(){return P.dI("( *)(.*)",!0,!1)})
lazy($,"wS","$get$wS",function(){return P.dI("^s*//",!0,!1)})
lazy($,"wR","$get$wR",function(){return P.dI("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.hq(!1,!1,"WordListFileFormat")})
lazy($,"wW","$get$wW",function(){return new T.ps(null)})
lazy($,"uV","$get$uV",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cT","$get$cT",function(){return P.cC(P.C,Y.dJ)})
lazy($,"wc","$get$wc",function(){return P.dI("[\\/]",!0,!1)})
lazy($,"tJ","$get$tJ",function(){return P.cC(P.C,W.fl)})
lazy($,"tV","$get$tV",function(){return A.fO(255,0,255,255)})
lazy($,"nz","$get$nz",function(){return new F.hq(!1,!1,"Path Utils")})
lazy($,"ny","$get$ny",function(){return P.cC(P.eB,P.D)})
lazy($,"cP","$get$cP",function(){return H.a([],[D.cE])})
lazy($,"hJ","$get$hJ",function(){return P.dI("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fo","$get$fo",function(){return P.dI("\\\\(?!\\\\)",!0,!1)})
lazy($,"v5","$get$v5",function(){var t={color:16711935}
return new THREE.MeshBasicMaterial(t)})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{D:"int",U:"double",dj:"num",C:"String",d6:"bool",cO:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d6,args:[[P.p,E.ix]]},{func:1,v:true},{func:1,ret:P.d5,args:[P.bg,P.D,P.D,O.cU]},{func:1,ret:P.bg,args:[P.D,P.bg,P.bg,O.cU]},{func:1,v:true,args:[P.ab]},{func:1,ret:P.C,args:[P.D]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dm,args:[P.D]},{func:1,ret:W.ay,args:[P.D]},{func:1,v:true,args:[P.ab],opt:[P.dL]},{func:1,ret:W.cn,args:[P.D]},{func:1,ret:W.eU,args:[P.D]},{func:1,ret:W.cb,args:[P.D]},{func:1,ret:W.cd,args:[P.D]},{func:1,ret:W.co,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,ret:W.fm,args:[P.D]},{func:1,ret:W.fp,args:[P.D]},{func:1,ret:W.fq,args:[P.D]},{func:1,ret:P.bS,args:[P.D]},{func:1,ret:W.bI,args:[P.D]},{func:1,ret:P.C,args:[P.ds]},{func:1,ret:W.fr,args:[P.D]},{func:1,ret:W.cf,args:[P.D]},{func:1,ret:W.cg,args:[P.D]},{func:1,ret:P.bl,args:[P.D]},{func:1,ret:P.D,args:[P.bF,P.bF]},{func:1,ret:W.cl,args:[P.D]},{func:1,ret:[P.ck,P.cO]},{func:1,v:true,args:[P.C]},{func:1,v:true,args:[,P.dL]},{func:1,ret:P.d6,args:[P.ab]},{func:1,ret:W.cq,args:[P.D]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.h,AnimationEffectTiming:J.h,AnimationTimeline:J.h,AppBannerPromptResult:J.h,BarProp:J.h,Body:J.h,CacheStorage:J.h,CanvasGradient:J.h,CanvasPattern:J.h,CanvasRenderingContext2D:J.h,CHROMIUMValuebuffer:J.h,CircularGeofencingRegion:J.h,Client:J.h,Clients:J.h,CompositorProxy:J.h,ConsoleBase:J.h,Coordinates:J.h,CredentialsContainer:J.h,Crypto:J.h,CryptoKey:J.h,CSS:J.h,DeprecatedStorageInfo:J.h,DeprecatedStorageQuota:J.h,DeviceAcceleration:J.h,DeviceRotationRate:J.h,DirectoryReader:J.h,DOMImplementation:J.h,Iterator:J.h,DOMMatrix:J.h,DOMMatrixReadOnly:J.h,DOMParser:J.h,DOMPoint:J.h,DOMPointReadOnly:J.h,EffectModel:J.h,Stream:J.h,FormData:J.h,GamepadButton:J.h,Geofencing:J.h,GeofencingRegion:J.h,Geolocation:J.h,Geoposition:J.h,Headers:J.h,HMDVRDevice:J.h,IdleDeadline:J.h,ImageBitmap:J.h,ImageBitmapRenderingContext:J.h,InjectedScriptHost:J.h,InputDeviceCapabilities:J.h,IntersectionObserver:J.h,IntersectionObserverEntry:J.h,KeyframeEffect:J.h,MediaDeviceInfo:J.h,MediaDevices:J.h,MediaError:J.h,MediaKeyStatusMap:J.h,MediaKeySystemAccess:J.h,MediaKeys:J.h,MediaMetadata:J.h,MediaSession:J.h,MemoryInfo:J.h,MessageChannel:J.h,Metadata:J.h,MIDIInputMap:J.h,MIDIOutputMap:J.h,MutationObserver:J.h,WebKitMutationObserver:J.h,MutationRecord:J.h,NavigatorStorageUtils:J.h,NodeFilter:J.h,NodeIterator:J.h,NonDocumentTypeChildNode:J.h,NonElementParentNode:J.h,OffscreenCanvas:J.h,PerformanceNavigation:J.h,PerformanceObserver:J.h,PerformanceObserverEntryList:J.h,PerformanceTiming:J.h,Permissions:J.h,PositionError:J.h,PositionSensorVRDevice:J.h,Presentation:J.h,PushManager:J.h,PushMessageData:J.h,PushSubscription:J.h,Range:J.h,ReadableByteStream:J.h,ReadableByteStreamReader:J.h,ReadableStreamReader:J.h,RTCCertificate:J.h,RTCIceCandidate:J.h,mozRTCIceCandidate:J.h,RTCSessionDescription:J.h,mozRTCSessionDescription:J.h,RTCStatsReport:J.h,RTCStatsResponse:J.h,Screen:J.h,ScrollState:J.h,Selection:J.h,SharedArrayBuffer:J.h,SourceInfo:J.h,StorageInfo:J.h,StorageManager:J.h,StorageQuota:J.h,StyleMedia:J.h,StylePropertyMap:J.h,SyncManager:J.h,TextMetrics:J.h,TreeWalker:J.h,UnderlyingSourceBase:J.h,URLSearchParams:J.h,VRDevice:J.h,VREyeParameters:J.h,VRFieldOfView:J.h,VRPositionState:J.h,ValidityState:J.h,VideoPlaybackQuality:J.h,VideoTrack:J.h,WindowClient:J.h,WorkerConsole:J.h,XPathEvaluator:J.h,XPathExpression:J.h,XPathNSResolver:J.h,XPathResult:J.h,XMLSerializer:J.h,XSLTProcessor:J.h,Bluetooth:J.h,BluetoothAdvertisingData:J.h,BluetoothCharacteristicProperties:J.h,BluetoothRemoteGATTServer:J.h,BluetoothRemoteGATTService:J.h,BluetoothUUID:J.h,Cache:J.h,DOMFileSystemSync:J.h,DirectoryEntrySync:J.h,DirectoryReaderSync:J.h,EntrySync:J.h,FileEntrySync:J.h,FileReaderSync:J.h,FileWriterSync:J.h,HTMLAllCollection:J.h,NFC:J.h,PagePopupController:J.h,Request:J.h,Response:J.h,SubtleCrypto:J.h,USBAlternateInterface:J.h,USBConfiguration:J.h,USBDevice:J.h,USBEndpoint:J.h,USBInTransferResult:J.h,USBInterface:J.h,USBIsochronousInTransferPacket:J.h,USBIsochronousInTransferResult:J.h,USBIsochronousOutTransferPacket:J.h,USBIsochronousOutTransferResult:J.h,USBOutTransferResult:J.h,WebKitCSSMatrix:J.h,Worklet:J.h,WorkletGlobalScope:J.h,IDBCursor:J.h,IDBCursorWithValue:J.h,IDBFactory:J.h,IDBKeyRange:J.h,SVGAngle:J.h,SVGAnimatedAngle:J.h,SVGAnimatedBoolean:J.h,SVGAnimatedEnumeration:J.h,SVGAnimatedInteger:J.h,SVGAnimatedLength:J.h,SVGAnimatedLengthList:J.h,SVGAnimatedNumber:J.h,SVGAnimatedNumberList:J.h,SVGAnimatedPreserveAspectRatio:J.h,SVGAnimatedRect:J.h,SVGAnimatedString:J.h,SVGAnimatedTransformList:J.h,SVGMatrix:J.h,SVGPoint:J.h,SVGPreserveAspectRatio:J.h,SVGRect:J.h,SVGUnitTypes:J.h,AudioListener:J.h,AudioParam:J.h,PeriodicWave:J.h,ANGLEInstancedArrays:J.h,ANGLE_instanced_arrays:J.h,WebGLBuffer:J.h,CHROMIUMSubscribeUniform:J.h,WebGLCompressedTextureASTC:J.h,WebGLCompressedTextureATC:J.h,WEBGL_compressed_texture_atc:J.h,WebGLCompressedTextureETC1:J.h,WEBGL_compressed_texture_etc1:J.h,WebGLCompressedTexturePVRTC:J.h,WEBGL_compressed_texture_pvrtc:J.h,WebGLCompressedTextureS3TC:J.h,WEBGL_compressed_texture_s3tc:J.h,WebGLDebugRendererInfo:J.h,WEBGL_debug_renderer_info:J.h,WebGLDebugShaders:J.h,WEBGL_debug_shaders:J.h,WebGLDepthTexture:J.h,WEBGL_depth_texture:J.h,WebGLDrawBuffers:J.h,WEBGL_draw_buffers:J.h,EXTsRGB:J.h,EXT_sRGB:J.h,EXTBlendMinMax:J.h,EXT_blend_minmax:J.h,EXTColorBufferFloat:J.h,EXTDisjointTimerQuery:J.h,EXTFragDepth:J.h,EXT_frag_depth:J.h,EXTShaderTextureLOD:J.h,EXT_shader_texture_lod:J.h,EXTTextureFilterAnisotropic:J.h,EXT_texture_filter_anisotropic:J.h,WebGLFramebuffer:J.h,WebGLLoseContext:J.h,WebGLExtensionLoseContext:J.h,WEBGL_lose_context:J.h,OESElementIndexUint:J.h,OES_element_index_uint:J.h,OESStandardDerivatives:J.h,OES_standard_derivatives:J.h,OESTextureFloat:J.h,OES_texture_float:J.h,OESTextureFloatLinear:J.h,OES_texture_float_linear:J.h,OESTextureHalfFloat:J.h,OES_texture_half_float:J.h,OESTextureHalfFloatLinear:J.h,OES_texture_half_float_linear:J.h,OESVertexArrayObject:J.h,OES_vertex_array_object:J.h,WebGLProgram:J.h,WebGLQuery:J.h,WebGLRenderbuffer:J.h,WebGLRenderingContext:J.h,WebGLSampler:J.h,WebGLShader:J.h,WebGLShaderPrecisionFormat:J.h,WebGLSync:J.h,WebGLTexture:J.h,WebGLTimerQueryEXT:J.h,WebGLTransformFeedback:J.h,WebGLUniformLocation:J.h,WebGLVertexArrayObject:J.h,WebGLVertexArrayObjectOES:J.h,Database:J.h,SQLError:J.h,SQLResultSet:J.h,SQLTransaction:J.h,ArrayBuffer:H.fd,ArrayBufferView:H.eo,DataView:H.na,Float32Array:H.nb,Float64Array:H.nc,Int16Array:H.nd,Int32Array:H.ne,Int8Array:H.nf,Uint16Array:H.ng,Uint32Array:H.nh,Uint8ClampedArray:H.ju,CanvasPixelArray:H.ju,Uint8Array:H.fe,HTMLBRElement:W.am,HTMLCanvasElement:W.am,HTMLContentElement:W.am,HTMLDListElement:W.am,HTMLDataListElement:W.am,HTMLDetailsElement:W.am,HTMLDialogElement:W.am,HTMLDivElement:W.am,HTMLHRElement:W.am,HTMLHeadElement:W.am,HTMLHeadingElement:W.am,HTMLHtmlElement:W.am,HTMLLIElement:W.am,HTMLLabelElement:W.am,HTMLLegendElement:W.am,HTMLMenuElement:W.am,HTMLMenuItemElement:W.am,HTMLMeterElement:W.am,HTMLModElement:W.am,HTMLOListElement:W.am,HTMLOptGroupElement:W.am,HTMLOptionElement:W.am,HTMLParagraphElement:W.am,HTMLPictureElement:W.am,HTMLPreElement:W.am,HTMLProgressElement:W.am,HTMLQuoteElement:W.am,HTMLShadowElement:W.am,HTMLSourceElement:W.am,HTMLStyleElement:W.am,HTMLTableCaptionElement:W.am,HTMLTableCellElement:W.am,HTMLTableDataCellElement:W.am,HTMLTableHeaderCellElement:W.am,HTMLTableColElement:W.am,HTMLTableElement:W.am,HTMLTableRowElement:W.am,HTMLTableSectionElement:W.am,HTMLTitleElement:W.am,HTMLTrackElement:W.am,HTMLUListElement:W.am,HTMLUnknownElement:W.am,HTMLDirectoryElement:W.am,HTMLFontElement:W.am,HTMLFrameElement:W.am,HTMLMarqueeElement:W.am,HTMLElement:W.am,HTMLAnchorElement:W.eL,HTMLAreaElement:W.kr,HTMLAudioElement:W.eP,AudioTrack:W.cK,AudioTrackList:W.kz,HTMLBaseElement:W.kD,Blob:W.eQ,HTMLBodyElement:W.kG,HTMLButtonElement:W.fM,CDATASection:W.e9,CharacterData:W.e9,Comment:W.e9,ProcessingInstruction:W.e9,Text:W.e9,CompositorWorker:W.kQ,Credential:W.fQ,FederatedCredential:W.fQ,PasswordCredential:W.fQ,CSSFontFaceRule:W.kW,CSSImportRule:W.kX,CSSKeyframeRule:W.fR,MozCSSKeyframeRule:W.fR,WebKitCSSKeyframeRule:W.fR,CSSKeyframesRule:W.fS,MozCSSKeyframesRule:W.fS,WebKitCSSKeyframesRule:W.fS,CSSPageRule:W.kY,CSSCharsetRule:W.bI,CSSGroupingRule:W.bI,CSSMediaRule:W.bI,CSSNamespaceRule:W.bI,CSSSupportsRule:W.bI,CSSRule:W.bI,CSSStyleDeclaration:W.eT,MSStyleCSSProperties:W.eT,CSS2Properties:W.eT,CSSStyleRule:W.kZ,CSSViewportRule:W.l_,DataTransfer:W.l4,DataTransferItem:W.eU,DataTransferItemList:W.i9,Document:W.ea,HTMLDocument:W.ea,XMLDocument:W.ea,DocumentFragment:W.ib,ShadowRoot:W.ib,DOMError:W.ic,FileError:W.ic,DOMException:W.l7,DOMRectReadOnly:W.id,DOMStringList:W.ie,DOMStringMap:W.ig,DOMTokenList:W.ih,Element:W.dm,HTMLEmbedElement:W.ld,DirectoryEntry:W.fU,Entry:W.fU,FileEntry:W.fU,ErrorEvent:W.fV,AnimationEvent:W.S,AnimationPlayerEvent:W.S,ApplicationCacheErrorEvent:W.S,AutocompleteErrorEvent:W.S,BeforeInstallPromptEvent:W.S,BeforeUnloadEvent:W.S,BlobEvent:W.S,ClipboardEvent:W.S,CloseEvent:W.S,CompositionEvent:W.S,CustomEvent:W.S,DeviceLightEvent:W.S,DeviceMotionEvent:W.S,DeviceOrientationEvent:W.S,ExtendableEvent:W.S,ExtendableMessageEvent:W.S,FetchEvent:W.S,FocusEvent:W.S,FontFaceSetLoadEvent:W.S,GamepadEvent:W.S,GeofencingEvent:W.S,HashChangeEvent:W.S,InstallEvent:W.S,KeyboardEvent:W.S,MediaEncryptedEvent:W.S,MediaKeyMessageEvent:W.S,MediaQueryListEvent:W.S,MediaStreamEvent:W.S,MediaStreamTrackEvent:W.S,MessageEvent:W.S,MIDIConnectionEvent:W.S,MIDIMessageEvent:W.S,MouseEvent:W.S,DragEvent:W.S,NotificationEvent:W.S,PageTransitionEvent:W.S,PointerEvent:W.S,PopStateEvent:W.S,PresentationConnectionAvailableEvent:W.S,PresentationConnectionCloseEvent:W.S,ProgressEvent:W.S,PromiseRejectionEvent:W.S,PushEvent:W.S,RelatedEvent:W.S,RTCDataChannelEvent:W.S,RTCDTMFToneChangeEvent:W.S,RTCIceCandidateEvent:W.S,RTCPeerConnectionIceEvent:W.S,SecurityPolicyViolationEvent:W.S,ServicePortConnectEvent:W.S,ServiceWorkerMessageEvent:W.S,SpeechRecognitionEvent:W.S,StorageEvent:W.S,SyncEvent:W.S,TextEvent:W.S,TouchEvent:W.S,TrackEvent:W.S,TransitionEvent:W.S,WebKitTransitionEvent:W.S,UIEvent:W.S,WheelEvent:W.S,ResourceProgressEvent:W.S,USBConnectionEvent:W.S,IDBVersionChangeEvent:W.S,SVGZoomEvent:W.S,AudioProcessingEvent:W.S,OfflineAudioCompletionEvent:W.S,WebGLContextEvent:W.S,Event:W.S,InputEvent:W.S,Animation:W.aF,ApplicationCache:W.aF,DOMApplicationCache:W.aF,OfflineResourceList:W.aF,BatteryManager:W.aF,CanvasCaptureMediaStreamTrack:W.aF,CrossOriginServiceWorkerClient:W.aF,EventSource:W.aF,MediaKeySession:W.aF,MediaQueryList:W.aF,MediaRecorder:W.aF,MediaSource:W.aF,MediaStream:W.aF,MediaStreamTrack:W.aF,MessagePort:W.aF,MIDIAccess:W.aF,NetworkInformation:W.aF,Notification:W.aF,Performance:W.aF,PermissionStatus:W.aF,PresentationAvailability:W.aF,PresentationReceiver:W.aF,PresentationRequest:W.aF,RTCDTMFSender:W.aF,RTCPeerConnection:W.aF,webkitRTCPeerConnection:W.aF,mozRTCPeerConnection:W.aF,ScreenOrientation:W.aF,ServicePortCollection:W.aF,ServiceWorkerContainer:W.aF,ServiceWorkerRegistration:W.aF,SpeechRecognition:W.aF,SpeechSynthesis:W.aF,SpeechSynthesisUtterance:W.aF,WorkerPerformance:W.aF,BluetoothDevice:W.aF,BluetoothRemoteGATTCharacteristic:W.aF,USB:W.aF,EventTarget:W.aF,HTMLFieldSetElement:W.lK,File:W.cb,FileList:W.f1,FileReader:W.lL,DOMFileSystem:W.lM,FileWriter:W.lN,FontFace:W.lQ,FontFaceSet:W.lR,HTMLFormElement:W.iw,Gamepad:W.cl,History:W.m1,HTMLOptionsCollection:W.f3,HTMLCollection:W.f3,HTMLFormControlsCollection:W.iy,XMLHttpRequest:W.dZ,XMLHttpRequestUpload:W.hc,XMLHttpRequestEventTarget:W.hc,HTMLIFrameElement:W.m9,ImageData:W.hd,HTMLImageElement:W.f5,HTMLInputElement:W.me,HTMLKeygenElement:W.mD,CalcLength:W.hl,LengthValue:W.hl,SimpleLength:W.hl,HTMLLinkElement:W.hm,Location:W.mV,HTMLMapElement:W.n_,HTMLVideoElement:W.ht,HTMLMediaElement:W.ht,MediaList:W.jr,HTMLMetaElement:W.n4,MIDIOutput:W.n5,MIDIInput:W.hu,MIDIPort:W.hu,MimeType:W.cn,MimeTypeArray:W.js,Navigator:W.ni,NavigatorUserMediaError:W.nj,Node:W.ay,NodeList:W.jv,RadioNodeList:W.jv,HTMLObjectElement:W.nm,HTMLOutputElement:W.nr,HTMLParamElement:W.nv,Path2D:W.nx,PerformanceCompositeTiming:W.e0,PerformanceEntry:W.e0,PerformanceMark:W.e0,PerformanceMeasure:W.e0,PerformanceRenderTiming:W.e0,PerformanceResourceTiming:W.e0,Perspective:W.nC,Plugin:W.cd,PluginArray:W.jC,PresentationConnection:W.nH,RTCDataChannel:W.jG,DataChannel:W.jG,HTMLScriptElement:W.fl,HTMLSelectElement:W.jI,ServicePort:W.o2,SharedWorker:W.o5,SharedWorkerGlobalScope:W.o6,HTMLSlotElement:W.o7,SourceBuffer:W.co,SourceBufferList:W.jK,HTMLSpanElement:W.hF,SpeechGrammar:W.cp,SpeechGrammarList:W.jL,SpeechRecognitionAlternative:W.fm,SpeechRecognitionError:W.ob,SpeechRecognitionResult:W.cf,SpeechSynthesisEvent:W.oc,SpeechSynthesisVoice:W.od,Storage:W.oi,CSSStyleSheet:W.cg,StyleSheet:W.cg,KeywordValue:W.e3,NumberValue:W.e3,PositionValue:W.e3,TransformValue:W.e3,StyleValue:W.e3,HTMLTemplateElement:W.oM,HTMLTextAreaElement:W.oO,TextTrack:W.cQ,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.oR,TextTrackList:W.oS,TimeRanges:W.oW,Touch:W.cq,TouchList:W.jP,TrackDefault:W.fp,TrackDefaultList:W.jQ,Matrix:W.e4,Rotation:W.e4,Skew:W.e4,Translation:W.e4,TransformComponent:W.e4,URL:W.pa,VideoTrackList:W.pe,VTTRegion:W.fq,VTTRegionList:W.jR,WebSocket:W.pj,Window:W.jT,DOMWindow:W.jT,Worker:W.pq,CompositorWorkerGlobalScope:W.eD,DedicatedWorkerGlobalScope:W.eD,ServiceWorkerGlobalScope:W.eD,WorkerGlobalScope:W.eD,Attr:W.fr,ClientRect:W.pH,ClientRectList:W.hP,DOMRectList:W.hP,CSSRuleList:W.k_,DocumentType:W.pO,DOMRect:W.pP,GamepadList:W.k3,HTMLFrameSetElement:W.q9,NamedNodeMap:W.hV,MozNamedAttrMap:W.hV,ServiceWorker:W.qy,SpeechRecognitionResultList:W.k7,StyleSheetList:W.k9,WorkerLocation:W.qO,WorkerNavigator:W.qP,IDBDatabase:P.l5,IDBIndex:P.mc,IDBObjectStore:P.nn,IDBOpenDBRequest:P.hE,IDBVersionChangeRequest:P.hE,IDBRequest:P.hE,IDBTransaction:P.p_,SVGAElement:P.ko,SVGAnimateElement:P.e8,SVGAnimateMotionElement:P.e8,SVGAnimateTransformElement:P.e8,SVGAnimationElement:P.e8,SVGSetElement:P.e8,SVGFEBlendElement:P.ll,SVGFEColorMatrixElement:P.lm,SVGFEComponentTransferElement:P.ln,SVGFECompositeElement:P.lo,SVGFEConvolveMatrixElement:P.lp,SVGFEDiffuseLightingElement:P.lq,SVGFEDisplacementMapElement:P.lr,SVGFEFloodElement:P.ls,SVGFEGaussianBlurElement:P.lt,SVGFEImageElement:P.lu,SVGFEMergeElement:P.lv,SVGFEMorphologyElement:P.lw,SVGFEOffsetElement:P.lx,SVGFESpecularLightingElement:P.ly,SVGFETileElement:P.lz,SVGFETurbulenceElement:P.lA,SVGFilterElement:P.lO,SVGCircleElement:P.cm,SVGClipPathElement:P.cm,SVGDefsElement:P.cm,SVGEllipseElement:P.cm,SVGForeignObjectElement:P.cm,SVGGElement:P.cm,SVGGeometryElement:P.cm,SVGLineElement:P.cm,SVGPathElement:P.cm,SVGPolygonElement:P.cm,SVGPolylineElement:P.cm,SVGRectElement:P.cm,SVGSwitchElement:P.cm,SVGGraphicsElement:P.cm,SVGImageElement:P.ma,SVGLength:P.d2,SVGLengthList:P.mG,SVGMarkerElement:P.n2,SVGMaskElement:P.n3,SVGNumber:P.d3,SVGNumberList:P.nk,SVGPatternElement:P.nA,SVGPointList:P.nF,SVGScriptElement:P.o_,SVGStringList:P.oD,SVGDescElement:P.c9,SVGDiscardElement:P.c9,SVGFEDistantLightElement:P.c9,SVGFEFuncAElement:P.c9,SVGFEFuncBElement:P.c9,SVGFEFuncGElement:P.c9,SVGFEFuncRElement:P.c9,SVGFEMergeNodeElement:P.c9,SVGFEPointLightElement:P.c9,SVGFESpotLightElement:P.c9,SVGMetadataElement:P.c9,SVGStopElement:P.c9,SVGStyleElement:P.c9,SVGTitleElement:P.c9,SVGComponentTransferFunctionElement:P.c9,SVGElement:P.c9,SVGSVGElement:P.oG,SVGSymbolElement:P.oI,SVGTSpanElement:P.ey,SVGTextElement:P.ey,SVGTextPositioningElement:P.ey,SVGTextContentElement:P.ey,SVGTextPathElement:P.oQ,SVGTransform:P.d4,SVGTransformList:P.p0,SVGUseElement:P.pb,SVGViewElement:P.pf,SVGViewSpec:P.pg,SVGLinearGradientElement:P.hT,SVGRadialGradientElement:P.hT,SVGGradientElement:P.hT,SVGCursorElement:P.qv,SVGFEDropShadowElement:P.qw,SVGMPathElement:P.qx,AudioBuffer:P.fG,AudioBufferSourceNode:P.eO,AudioContext:P.fH,webkitAudioContext:P.fH,OfflineAudioContext:P.fH,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.dU,MediaStreamAudioSourceNode:P.dU,OscillatorNode:P.dU,Oscillator:P.dU,AudioSourceNode:P.dU,ConvolverNode:P.kT,WebGLActiveInfo:P.kq,WebGL2RenderingContext:P.nP,WebGL2RenderingContextBase:P.qN,SQLResultSetRowList:P.jM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jt.$nativeSuperclassTag="ArrayBufferView"
H.hx.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
H.hv.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hw.$nativeSuperclassTag="ArrayBufferView"
W.fW.$nativeSuperclassTag="EventTarget"
W.fZ.$nativeSuperclassTag="EventTarget"
W.fX.$nativeSuperclassTag="EventTarget"
W.h_.$nativeSuperclassTag="EventTarget"
W.fY.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xy(O.wz(),b)},[])
else (function(b){H.xy(O.wz(),b)})([])})})()
//# sourceMappingURL=ThemeController.dart.js.map
