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
a[c]=function(){a[c]=function(){H.IV(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.w0"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.w0"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.w0(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={v_:function v_(a){this.a=a},
tx:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
pF:function(a,b,c,d){var t=new H.pE(a,b,c,[d])
t.fs(a,b,c,d)
return t},
dx:function(a,b,c,d){if(!!J.ai(a).$isr)return new H.h1(a,b,[c,d])
return new H.hD(a,b,[c,d])},
p1:function(a,b,c){if(!!J.ai(a).$isr)return new H.iD(a,H.td(b),[c])
return new H.hQ(a,H.td(b),[c])},
td:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dH(a,"count","is not an integer"))
if(a<0)H.aN(P.bx(a,0,null,"count",null))
return a},
hs:function(){return new P.d8("No element")},
G6:function(){return new P.d8("Too many elements")},
xy:function(){return new P.d8("Too few elements")},
k7:function(a,b,c,d){if(c-b<=32)H.Hg(a,b,c,d)
else H.Hf(a,b,c,d)},
Hg:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b_(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.ct(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Hf:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ar(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ar(a3+a4,2)
p=q-t
o=q+t
n=J.b_(a2)
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
if(J.b1(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ai(c)
if(b.T(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dm(c)
if(b.aF(c,0)){--f
continue}else{a=f-1
if(b.a4(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.dG(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.ct(a5.$2(d,j),0))for(;!0;)if(J.ct(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dG(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.k7(a2,a3,g-2,a5)
H.k7(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b1(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b1(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b1(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b1(a5.$2(d,j),0))for(;!0;)if(J.b1(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dG(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.k7(a2,g,f,a5)}else H.k7(a2,g,f,a5)},
lk:function lk(a){this.a=a},
r:function r(){},
dO:function dO(){},
pE:function pE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
es:function es(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hD:function hD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h1:function h1(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jL:function jL(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eu:function eu(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eJ:function eJ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kk:function kk(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hQ:function hQ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iD:function iD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
p2:function p2(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iP:function iP(){},
q4:function q4(){},
i_:function i_(){},
kH:function(a,b){var t=a.bE(b)
if(!u.globalState.d.cy)u.globalState.f.bM()
return t},
z1:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ai(s).$isp)throw H.j(P.df("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.rt(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wV()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qW(P.v4(null,H.eP),0)
r=P.D
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fE])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.rs()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.B3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HE)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a2(null,null,null,r)
p=new H.ft(0,null,!1)
o=new H.fE(s,new H.w(0,null,null,null,null,null,0,[r,H.ft]),q,u.createNewIsolate(),p,new H.dI(H.tN()),new H.dI(H.tN()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
q.h(0,0)
o.dB(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fK(a,{func:1,args:[,]}))o.bE(new H.tO(t,a))
else if(H.fK(a,{func:1,args:[,,]}))o.bE(new H.tP(t,a))
else o.bE(a)
u.globalState.f.bM()},
HE:function(a){var t=P.hy(["command","print","msg",a])
return new H.dE(!0,P.i9(null,P.D)).aG(t)},
B5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.B6()
return},
B6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.j(new P.R("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.j(new P.R('Cannot extract URI from "'+t+'"'))},
B3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eM(!0,[]).b8(b.data)
s=J.b_(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eM(!0,[]).b8(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eM(!0,[]).b8(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a2(null,null,null,k)
i=new H.ft(0,null,!1)
h=new H.fE(s,new H.w(0,null,null,null,null,null,0,[k,H.ft]),j,u.createNewIsolate(),i,new H.dI(H.tN()),new H.dI(H.tN()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
j.h(0,0)
h.dB(0,i)
u.globalState.f.a.aT(0,new H.eP(h,new H.mS(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bM()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fM(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bM()
break
case"close":u.globalState.ch.as(0,$.$get$wW().n(0,a))
a.terminate()
u.globalState.f.bM()
break
case"log":H.B2(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hy(["command","print","msg",t])
k=new H.dE(!0,P.i9(null,P.D)).aG(k)
s.toString
self.postMessage(k)}else P.eS(s.n(t,"msg"))
break
case"error":throw H.j(s.n(t,"msg"))}},
B2:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hy(["command","log","msg",a])
r=new H.dE(!0,P.i9(null,P.D)).aG(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bE(q)
t=H.cs(q)
s=P.lV(t)
throw H.j(s)}},
B4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xL=$.xL+("_"+s)
$.xM=$.xM+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fM(f,["spawned",new H.fF(s,r),q,t.r])
r=new H.mT(a,b,c,d,t)
if(e===!0){t.ef(q,q)
u.globalState.f.a.aT(0,new H.eP(t,r,"start isolate"))}else r.$0()},
Hm:function(a,b){var t=new H.pW(!0,!1,null)
t.ft(a,b)
return t},
HX:function(a){return new H.eM(!0,[]).b8(new H.dE(!1,P.i9(null,P.D)).aG(a))},
tO:function tO(a,b){this.a=a
this.b=b},
tP:function tP(a,b){this.a=a
this.b=b},
rt:function rt(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fE:function fE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
rj:function rj(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
rs:function rs(){},
mS:function mS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mT:function mT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qG:function qG(){},
fF:function fF(b,a){this.b=b
this.a=a},
rv:function rv(a,b){this.a=a
this.b=b},
id:function id(b,c,a){this.b=b
this.c=c
this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(a,b,c){this.a=a
this.b=b
this.c=c},
pX:function pX(a,b){this.a=a
this.b=b},
pY:function pY(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
A6:function(){throw H.j(new P.R("Cannot modify unmodifiable Map"))},
Iy:function(a){return u.types[a]},
yW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ai(a).$isaE},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cu(a)
if(typeof t!=="string")throw H.j(H.bl(a))
return t},
GP:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oI(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ew:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
vn:function(a,b){if(b==null)throw H.j(new P.bJ(a,null,null))
return b.$1(a)},
fq:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.vn(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.vn(a,c)}if(b<2||b>36)throw H.j(P.bx(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a9(q,o)|32)>r)return H.vn(a,c)}return parseInt(a,b)},
xJ:function(a,b){return b.$1(a)},
xN:function(a,b){var t,s
H.Ij(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xJ(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tS(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xJ(a,b)}return t},
oz:function(a){var t,s,r,q,p,o,n,m
t=J.ai(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.T||!!J.ai(a).$iseH){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a9(q,0)===36)q=C.c.al(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tH(H.kL(a),0,null),u.mangledGlobalNames)},
oy:function(a){return"Instance of '"+H.oz(a)+"'"},
Gt:function(){if(!!self.location)return self.location.href
return},
xI:function(a){var t,s,r,q,p
t=J.c4(a)
if(typeof t!=="number")return t.f1()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Gy:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c3)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bl(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b5(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.j(H.bl(q))}return H.xI(t)},
xP:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.c3)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bl(q))
if(q<0)throw H.j(H.bl(q))
if(q>65535)return H.Gy(a)}return H.xI(a)},
Gz:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.f1()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
fr:function(a){var t
if(typeof a!=="number")return H.a6(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b5(t,10))>>>0,56320|t&1023)}}throw H.j(P.bx(a,0,1114111,null,null))},
cX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xK:function(a){return a.b?H.cX(a).getUTCFullYear()+0:H.cX(a).getFullYear()+0},
vp:function(a){return a.b?H.cX(a).getUTCMonth()+1:H.cX(a).getMonth()+1},
vo:function(a){return a.b?H.cX(a).getUTCDate()+0:H.cX(a).getDate()+0},
Gu:function(a){return a.b?H.cX(a).getUTCHours()+0:H.cX(a).getHours()+0},
Gw:function(a){return a.b?H.cX(a).getUTCMinutes()+0:H.cX(a).getMinutes()+0},
Gx:function(a){return a.b?H.cX(a).getUTCSeconds()+0:H.cX(a).getSeconds()+0},
Gv:function(a){return a.b?H.cX(a).getUTCMilliseconds()+0:H.cX(a).getMilliseconds()+0},
vq:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bl(a))
return a[b]},
xO:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bl(a))
a[b]=c},
a6:function(a){throw H.j(H.bl(a))},
u:function(a,b){if(a==null)J.c4(a)
throw H.j(H.c2(a,b))},
c2:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cT(!0,b,"index",null)
t=J.c4(a)
if(!(b<0)){if(typeof t!=="number")return H.a6(t)
s=b>=t}else s=!0
if(s)return P.bz(b,a,"index",null,t)
return P.k3(b,"index",null)},
Ip:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cT(!0,a,"start",null)
if(a<0||a>c)return new P.eA(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cT(!0,b,"end",null)
if(b<a||b>c)return new P.eA(a,c,!0,b,"end","Invalid value")}return new P.cT(!0,b,"end",null)},
bl:function(a){return new P.cT(!0,a,null,null)},
kJ:function(a){if(typeof a!=="number")throw H.j(H.bl(a))
return a},
w_:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(H.bl(a))
return a},
Ij:function(a){if(typeof a!=="string")throw H.j(H.bl(a))
return a},
j:function(a){var t
if(a==null)a=new P.fn()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.z3})
t.name=""}else t.toString=H.z3
return t},
z3:function(){return J.cu(this.dartException)},
aN:function(a){throw H.j(a)},
c3:function(a){throw H.j(new P.bH(a))},
dT:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.q1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
q2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
y4:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
v1:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.nb(a,s,t?null:b.receiver)},
bE:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tQ(a)
if(a==null)return
if(a instanceof H.ha)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b5(r,16)&8191)===10)switch(q){case 438:return t.$1(H.v1(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jU(p,null))}}if(a instanceof TypeError){o=$.$get$xZ()
n=$.$get$y_()
m=$.$get$y0()
l=$.$get$y1()
k=$.$get$y5()
j=$.$get$y6()
i=$.$get$y3()
$.$get$y2()
h=$.$get$y8()
g=$.$get$y7()
f=o.aP(s)
if(f!=null)return t.$1(H.v1(s,f))
else{f=n.aP(s)
if(f!=null){f.method="call"
return t.$1(H.v1(s,f))}else{f=m.aP(s)
if(f==null){f=l.aP(s)
if(f==null){f=k.aP(s)
if(f==null){f=j.aP(s)
if(f==null){f=i.aP(s)
if(f==null){f=l.aP(s)
if(f==null){f=h.aP(s)
if(f==null){f=g.aP(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jU(s,f==null?null:f.method))}}return t.$1(new H.q3(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.kb()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cT(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.kb()
return a},
cs:function(a){var t
if(a instanceof H.ha)return a.b
if(a==null)return new H.kC(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kC(a,null)},
IL:function(a){if(a==null||typeof a!='object')return J.cS(a)
else return H.ew(a)},
yT:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IF:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kH(b,new H.tC(a))
case 1:return H.kH(b,new H.tD(a,d))
case 2:return H.kH(b,new H.tE(a,d,e))
case 3:return H.kH(b,new H.tF(a,d,e,f))
case 4:return H.kH(b,new H.tG(a,d,e,f,g))}throw H.j(P.lV("Unsupported number of arguments for wrapped closure"))},
dl:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IF)
a.$identity=t
return t},
A2:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ai(c).$isp){t.$reflectionInfo=c
r=H.GP(t).r}else r=c
q=d?Object.create(new H.pc().constructor.prototype):Object.create(new H.fT(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dJ
$.dJ=J.dY(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.wr(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Iy,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.wo:H.tW
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.j("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.wr(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
A_:function(a,b,c,d){var t=H.tW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
wr:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.A1(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.A_(s,!q,t,b)
if(s===0){q=$.dJ
$.dJ=J.dY(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fU
if(p==null){p=H.lb("self")
$.fU=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dJ
$.dJ=J.dY(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fU
if(p==null){p=H.lb("self")
$.fU=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
A0:function(a,b,c,d){var t,s
t=H.tW
s=H.wo
switch(b?-1:a){case 0:throw H.j(new H.oP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
A1:function(a,b){var t,s,r,q,p,o,n,m
t=H.zZ()
s=$.wn
if(s==null){s=H.lb("receiver")
$.wn=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.A0(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dJ
$.dJ=J.dY(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dJ
$.dJ=J.dY(o,1)
return new Function(s+H.y(o)+"}")()},
w0:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ai(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.A2(a,b,t,!!d,e,f)},
tW:function(a){return a.a},
wo:function(a){return a.c},
zZ:function(){var t=$.fU
if(t==null){t=H.lb("self")
$.fU=t}return t},
lb:function(a){var t,s,r,q,p
t=new H.fT("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
IN:function(a,b){var t=J.b_(b)
throw H.j(H.wq(H.oz(a),t.I(b,3,t.gm(b))))},
kN:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ai(a)[b]
else t=!0
if(t)return a
H.IN(a,b)},
yS:function(a){var t=J.ai(a)
return"$S" in t?t.$S():null},
fK:function(a,b){var t
if(a==null)return!1
t=H.yS(a)
return t==null?!1:H.w3(t,b)},
wq:function(a,b){return new H.li("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
IV:function(a){throw H.j(new P.lC(a))},
tN:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yU:function(a){return u.getIsolateTag(a)},
bX:function(a){return new H.dU(a,null)},
a:function(a,b){a.$ti=b
return a},
kL:function(a){if(a==null)return
return a.$ti},
yV:function(a,b){return H.w5(a["$as"+H.y(b)],H.kL(a))},
aq:function(a,b,c){var t=H.yV(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kL(a)
return t==null?null:t[b]},
dF:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tH(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dF(t,b)
return H.I2(a,b)}return"unknown-reified-type"},
I2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dF(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dF(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dF(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Iw(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dF(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
tH:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c1("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dF(o,c)}return q?"":"<"+t.B(0)+">"},
kM:function(a){var t,s
if(a instanceof H.f0){t=H.yS(a)
if(t!=null)return H.dF(t,null)}s=J.ai(a).constructor.builtin$cls
if(a==null)return s
return s+H.tH(a.$ti,0,null)},
w5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dX:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kL(a)
s=J.ai(a)
if(s[b]==null)return!1
return H.yO(H.w5(s[d],t),c)},
IU:function(a,b,c,d){if(a==null)return a
if(H.dX(a,b,c,d))return a
throw H.j(H.wq(H.oz(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tH(c,0,null),u.mangledGlobalNames)))},
yO:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d0(a[s],b[s]))return!1
return!0},
eR:function(a,b,c){return a.apply(b,H.yV(b,c))},
Ik:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="z"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kL(a)
a=J.ai(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.w3(r.apply(a,null),b)}return H.d0(s,b)},
d0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.w3(a,b)
if('func' in a)return b.builtin$cls==="J0"||b.builtin$cls==="z"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dF(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yO(H.w5(o,t),r)},
yN:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d0(t,p)||H.d0(p,t)))return!1}return!0},
Ia:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d0(p,o)||H.d0(o,p)))return!1}return!0},
w3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d0(t,s)||H.d0(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.yN(r,q,!1))return!1
if(!H.yN(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}}return H.Ia(a.named,b.named)},
Jb:function(a){var t=$.w1
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Ja:function(a){return H.ew(a)},
J9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IG:function(a){var t,s,r,q,p,o
t=$.w1.$1(a)
s=$.ts[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yM.$2(a,t)
if(t!=null){s=$.ts[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.w4(r)
$.ts[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.tB[t]=r
return r}if(p==="-"){o=H.w4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yX(a,r)
if(p==="*")throw H.j(new P.eG(t))
if(u.leafTags[t]===true){o=H.w4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yX(a,r)},
yX:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tI(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
w4:function(a){return J.tI(a,!1,null,!!a.$isaE)},
II:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tI(t,!1,null,!!t.$isaE)
else return J.tI(t,c,null,null)},
ID:function(){if(!0===$.w2)return
$.w2=!0
H.IE()},
IE:function(){var t,s,r,q,p,o,n,m
$.ts=Object.create(null)
$.tB=Object.create(null)
H.IC()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yZ.$1(p)
if(o!=null){n=H.II(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
IC:function(){var t,s,r,q,p,o,n
t=C.U()
t=H.fJ(C.V,H.fJ(C.W,H.fJ(C.z,H.fJ(C.z,H.fJ(C.Y,H.fJ(C.X,H.fJ(C.Z(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.w1=new H.ty(p)
$.yM=new H.tz(o)
$.yZ=new H.tA(n)},
fJ:function(a,b){return a(b)||b},
uX:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.j(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
IS:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
z2:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.ht){q=b.gdY()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aN(H.bl(b))
throw H.j("String.replaceAll(Pattern) UNIMPLEMENTED")}},
I8:function(a){return a},
IT:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.b6(0,a),t=new H.kp(t.a,t.b,t.c,null),s=0,r="";t.G();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.yD().$1(C.c.I(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.yD().$1(C.c.al(a,s)))
return t.charCodeAt(0)==0?t:t},
ln:function ln(){},
lo:function lo(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qK:function qK(a,$ti){this.a=a
this.$ti=$ti},
oI:function oI(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
q1:function q1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jU:function jU(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
tQ:function tQ(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
tC:function tC(a){this.a=a},
tD:function tD(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tG:function tG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
pL:function pL(){},
pc:function pc(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
li:function li(a){this.a=a},
oP:function oP(a){this.a=a},
dU:function dU(a,b){this.a=a
this.b=b},
w:function w(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
na:function na(a){this.a=a},
n9:function n9(a){this.a=a},
np:function np(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nq:function nq(a,$ti){this.a=a
this.$ti=$ti},
nr:function nr(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
tA:function tA(a){this.a=a},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kA:function kA(a,b){this.a=a
this.b=b},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(a,b,c){this.a=a
this.b=b
this.c=c},
rR:function rR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.df("Invalid length "+H.y(a)))
return a},
yz:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.df("Invalid view offsetInBytes "+H.y(b)))
if(c!=null&&(typeof c!=="number"||Math.floor(c)!==c))throw H.j(P.df("Invalid view length "+H.y(c)))},
yC:function(a){return a},
Gr:function(a){return new Int8Array(H.yC(a))},
cM:function(a,b,c){H.yz(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
HW:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aF()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.j(H.Ip(a,b,c))
return b},
fl:function fl(){},
ev:function ev(){},
nU:function nU(){},
jP:function jP(){},
hG:function hG(){},
hI:function hI(){},
hK:function hK(){},
hH:function hH(){},
hJ:function hJ(){},
hL:function hL(){},
nV:function nV(){},
nW:function nW(){},
nX:function nX(){},
nY:function nY(){},
nZ:function nZ(){},
o_:function o_(){},
o0:function o0(){},
jQ:function jQ(){},
fm:function fm(){},
Iw:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
yY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jH.prototype
return J.jG.prototype}if(typeof a=="string")return J.eq.prototype
if(a==null)return J.n7.prototype
if(typeof a=="boolean")return J.n6.prototype
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.z)return a
return J.tv(a)},
tI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
tv:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.w2==null){H.ID()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.j(new P.eG("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$v0()]
if(p!=null)return p
p=H.IG(a)
if(p!=null)return p
if(typeof a=="function")return C.a_
s=Object.getPrototypeOf(a)
if(s==null)return C.L
if(s===Object.prototype)return C.L
if(typeof q=="function"){Object.defineProperty(q,$.$get$v0(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
xz:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
G7:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a9(a,b)
if(s!==32&&s!==13&&!J.xz(s))break;++b}return b},
uW:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a0(a,t)
if(s!==32&&s!==13&&!J.xz(s))break}return b},
b_:function(a){if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.z)return a
return J.tv(a)},
dd:function(a){if(a==null)return a
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.z)return a
return J.tv(a)},
dm:function(a){if(typeof a=="number")return J.fk.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eH.prototype
return a},
kK:function(a){if(typeof a=="number")return J.fk.prototype
if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eH.prototype
return a},
cR:function(a){if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eH.prototype
return a},
aM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.z)return a
return J.tv(a)},
dY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kK(a).R(a,b)},
b1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).T(a,b)},
w6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dm(a).ay(a,b)},
ct:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dm(a).aF(a,b)},
dG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dm(a).a4(a,b)},
w7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kK(a).ak(a,b)},
d1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yW(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b_(a).n(a,b)},
ij:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yW(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dd(a).i(a,b,c)},
z4:function(a,b){return J.dd(a).h(a,b)},
z5:function(a,b,c,d){return J.aM(a).ee(a,b,c,d)},
z6:function(a,b){return J.cR(a).b6(a,b)},
dZ:function(a,b){return J.aM(a).hs(a,b)},
w8:function(a){return J.aM(a).hu(a)},
z7:function(a,b,c){return J.dm(a).af(a,b,c)},
z8:function(a,b){return J.kK(a).aH(a,b)},
z9:function(a,b){return J.aM(a).aI(a,b)},
za:function(a,b){return J.b_(a).Z(a,b)},
kP:function(a,b,c){return J.b_(a).el(a,b,c)},
zb:function(a,b){return J.aM(a).hG(a,b)},
zc:function(a,b){return J.aM(a).en(a,b)},
w9:function(a,b){return J.dd(a).W(a,b)},
zd:function(a,b,c,d){return J.dd(a).bF(a,b,c,d)},
kQ:function(a){return J.dm(a).ap(a)},
wa:function(a,b){return J.dd(a).a2(a,b)},
wb:function(a){return J.aM(a).geh(a)},
wc:function(a){return J.aM(a).gej(a)},
ze:function(a){return J.aM(a).gbD(a)},
fL:function(a){return J.aM(a).gav(a)},
zf:function(a){return J.aM(a).gcW(a)},
cS:function(a){return J.ai(a).ga5(a)},
kR:function(a){return J.b_(a).gX(a)},
wd:function(a){return J.aM(a).ga1(a)},
cI:function(a){return J.dd(a).gY(a)},
ik:function(a){return J.aM(a).gaj(a)},
c4:function(a){return J.b_(a).gm(a)},
zg:function(a){return J.aM(a).gii(a)},
zh:function(a){return J.aM(a).gd4(a)},
zi:function(a){return J.aM(a).giA(a)},
zj:function(a){return J.aM(a).giB(a)},
we:function(a){return J.ai(a).gad(a)},
tR:function(a){return J.aM(a).gaS(a)},
zk:function(a){return J.aM(a).giE(a)},
zl:function(a){return J.aM(a).gdd(a)},
zm:function(a){return J.aM(a).gaL(a)},
zn:function(a){return J.aM(a).di(a)},
zo:function(a,b){return J.aM(a).bQ(a,b)},
zp:function(a,b){return J.b_(a).br(a,b)},
wf:function(a,b,c,d,e){return J.aM(a).eB(a,b,c,d,e)},
wg:function(a,b){return J.dd(a).aE(a,b)},
zq:function(a,b,c){return J.cR(a).eF(a,b,c)},
wh:function(a,b){return J.aM(a).im(a,b)},
zr:function(a){return J.dd(a).iw(a)},
zs:function(a,b,c,d){return J.aM(a).eK(a,b,c,d)},
kS:function(a,b,c){return J.cR(a).d9(a,b,c)},
zt:function(a,b,c){return J.cR(a).iz(a,b,c)},
fM:function(a,b){return J.aM(a).bf(a,b)},
wi:function(a,b){return J.aM(a).sbD(a,b)},
zu:function(a,b){return J.aM(a).saa(a,b)},
zv:function(a,b){return J.aM(a).san(a,b)},
zw:function(a,b){return J.dd(a).aB(a,b)},
ea:function(a,b){return J.cR(a).fe(a,b)},
zx:function(a,b){return J.cR(a).al(a,b)},
zy:function(a,b,c){return J.cR(a).I(a,b,c)},
wj:function(a){return J.dm(a).l(a)},
zz:function(a){return J.dd(a).at(a)},
zA:function(a){return J.cR(a).iG(a)},
zB:function(a,b){return J.dm(a).bN(a,b)},
cu:function(a){return J.ai(a).B(a)},
zC:function(a){return J.cR(a).iH(a)},
tS:function(a){return J.cR(a).bv(a)},
zD:function(a){return J.cR(a).eS(a)},
f:function f(){},
n6:function n6(){},
n7:function n7(){},
hu:function hu(){},
or:function or(){},
eH:function eH(){},
er:function er(){},
ep:function ep($ti){this.$ti=$ti},
uZ:function uZ($ti){this.$ti=$ti},
eU:function eU(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fk:function fk(){},
jH:function jH(){},
jG:function jG(){},
eq:function eq(){}},P={
Hr:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Ib()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dl(new P.qC(t),1)).observe(s,{childList:true})
return new P.qB(t,s,r)}else if(self.setImmediate!=null)return P.Ic()
return P.Id()},
Hs:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dl(new P.qD(a),0))},
Ht:function(a){++u.globalState.f.b
self.setImmediate(H.dl(new P.qE(a),0))},
Hu:function(a){P.vK(C.o,a)},
bt:function(a,b){P.yx(null,a)
return b.ghX()},
cr:function(a,b){P.yx(a,b)},
bs:function(a,b){J.z9(b,a)},
br:function(a,b){b.cS(H.bE(a),H.cs(a))},
yx:function(a,b){var t,s,r,q
t=new P.t8(b)
s=new P.t9(b)
r=J.ai(a)
if(!!r.$isbk)a.cL(t,s)
else if(!!r.$iscl)a.cd(t,s)
else{q=new P.bk(0,$.ao,null,[null])
q.a=4
q.c=a
q.cL(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ao.toString
return new P.tl(t)},
yE:function(a,b){if(H.fK(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
AL:function(a,b){var t=new P.bk(0,$.ao,null,[b])
P.xY(C.o,new P.tn(a,t))
return t},
wS:function(a,b,c){var t
if(a==null)a=new P.fn()
t=$.ao
if(t!==C.e)t.toString
t=new P.bk(0,t,null,[c])
t.dD(a,b)
return t},
AM:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bk(0,$.ao,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mz(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.c3)(a),++l){q=a[l]
p=t.b
q.cd(new P.my(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bk(0,$.ao,null,[null])
m.dC(C.E)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bE(j)
n=H.cs(j)
if(t.b===0||!1)return P.wS(o,n,null)
else{t.c=o
t.d=n}}return s},
bn:function(a){return new P.kE(new P.bk(0,$.ao,null,[a]),[a])},
yA:function(a,b,c){$.ao.toString
a.aq(b,c)},
Hy:function(a,b){var t=new P.bk(0,$.ao,null,[b])
t.a=4
t.c=a
return t},
yl:function(a,b){var t,s,r
b.a=1
try{a.cd(new P.r5(b),new P.r6(b))}catch(r){t=H.bE(r)
s=H.cs(r)
P.z_(new P.r7(b,t,s))}},
r4:function(a,b){var t,s,r
for(;a.gh3();)a=a.c
t=a.gcD()
s=b.c
if(t){b.c=null
r=b.bY(s)
b.a=a.a
b.c=a.c
P.fD(b,r)}else{b.a=2
b.c=a
a.e1(s)}},
fD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fL(p)
n=p.gaR()
s.toString
P.kI(null,null,s,o,n)}return}for(;b.gcG()!=null;b=m){m=b.a
b.a=null
P.fD(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gev()||b.geu()){k=b.gho()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fL(p)
n=p.gaR()
s.toString
P.kI(null,null,s,o,n)
return}j=$.ao
if(j==null?k!=null:j!==k)$.ao=k
else j=null
if(b.geu())new P.rc(t,r,q,b).$0()
else if(s){if(b.gev())new P.rb(r,b,l).$0()}else if(b.gi3())new P.ra(t,r,b).$0()
if(j!=null)$.ao=j
s=r.b
if(!!J.ai(s).$iscl){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bY(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.r4(s,i)
return}}i=b.b
b=i.bX()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
I4:function(){var t,s
for(;t=$.fH,t!=null;){$.ig=null
s=t.b
$.fH=s
if(s==null)$.ie=null
t.a.$0()}},
I7:function(){$.vY=!0
try{P.I4()}finally{$.ig=null
$.vY=!1
if($.fH!=null)$.$get$vT().$1(P.yP())}},
yL:function(a){var t=new P.kq(a,null)
if($.fH==null){$.ie=t
$.fH=t
if(!$.vY)$.$get$vT().$1(P.yP())}else{$.ie.b=t
$.ie=t}},
I6:function(a){var t,s,r
t=$.fH
if(t==null){P.yL(a)
$.ig=$.ie
return}s=new P.kq(a,null)
r=$.ig
if(r==null){s.b=t
$.ig=s
$.fH=s}else{s.b=r.b
r.b=s
$.ig=s
if(s.b==null)$.ie=s}},
z_:function(a){var t=$.ao
if(C.e===t){P.fI(null,null,C.e,a)
return}t.toString
P.fI(null,null,t,t.cQ(a,!0))},
J5:function(a,b){return new P.rP(null,a,!1,[b])},
yI:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bE(o)
s=H.cs(o)
$.ao.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fL(r)
q=n
p=r.gaR()
c.$2(q,p)}}},
HV:function(a,b,c,d){var t=a.c4(0)
if(!!J.ai(t).$iscl&&t!==$.$get$hj())t.cf(new P.tb(b,c,d))
else b.aq(c,d)},
yy:function(a,b){return new P.ta(a,b)},
vX:function(a,b,c){var t=a.c4(0)
if(!!J.ai(t).$iscl&&t!==$.$get$hj())t.cf(new P.tc(b,c))
else b.aN(c)},
Hx:function(a,b,c,d,e,f,g){var t,s
t=$.ao
s=e?1:0
s=new P.eO(a,null,null,null,null,t,s,null,null,[f,g])
s.dw(b,c,d,e,g)
s.dz(a,b,c,d,e,f,g)
return s},
HU:function(a,b,c){$.ao.toString
a.bS(b,c)},
xY:function(a,b){var t=$.ao
if(t===C.e){t.toString
return P.vK(a,b)}return P.vK(a,t.cQ(b,!0))},
vK:function(a,b){var t=C.a.ar(a.a,1000)
return H.Hm(t<0?0:t,b)},
kI:function(a,b,c,d,e){var t={}
t.a=d
P.I6(new P.tk(t,e))},
yF:function(a,b,c,d){var t,s
s=$.ao
if(s===c)return d.$0()
$.ao=c
t=s
try{s=d.$0()
return s}finally{$.ao=t}},
yH:function(a,b,c,d,e){var t,s
s=$.ao
if(s===c)return d.$1(e)
$.ao=c
t=s
try{s=d.$1(e)
return s}finally{$.ao=t}},
yG:function(a,b,c,d,e,f){var t,s
s=$.ao
if(s===c)return d.$2(e,f)
$.ao=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ao=t}},
fI:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cQ(d,!(!t||!1))
P.yL(d)},
qC:function qC(a){this.a=a},
qB:function qB(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(a){this.a=a},
qE:function qE(a){this.a=a},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
tl:function tl(a){this.a=a},
cl:function cl(){},
tn:function tn(a,b){this.a=a
this.b=b},
mz:function mz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f2:function f2(){},
kr:function kr(){},
dW:function dW(a,$ti){this.a=a
this.$ti=$ti},
kE:function kE(a,$ti){this.a=a
this.$ti=$ti},
kv:function kv(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bk:function bk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r1:function r1(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rd:function rd(a){this.a=a},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
pj:function pj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ph:function ph(a,b){this.a=a
this.b=b},
pi:function pi(a,b){this.a=a
this.b=b},
pk:function pk(a){this.a=a},
pp:function pp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pn:function pn(a,b){this.a=a
this.b=b},
po:function po(){},
pq:function pq(a){this.a=a},
pt:function pt(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(a){this.a=a},
pv:function pv(a,b){this.a=a
this.b=b},
pw:function pw(a,b){this.a=a
this.b=b},
pl:function pl(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(a){this.a=a},
pg:function pg(){},
dc:function dc(){},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a){this.a=a},
kt:function kt(){},
qP:function qP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qR:function qR(b,c,a){this.b=b
this.c=c
this.a=a},
qQ:function qQ(){},
rw:function rw(){},
rx:function rx(a,b){this.a=a
this.b=b},
rO:function rO(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rP:function rP(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a,b){this.a=a
this.b=b},
tc:function tc(a,b){this.a=a
this.b=b},
fC:function fC(){},
eO:function eO(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
ru:function ru(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
rN:function rN(z,x,y,a,b,c,d,e,f,r,$ti){var _=this
_.z=z
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
rM:function rM(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eV:function eV(a,b){this.a=a
this.b=b},
t7:function t7(){},
tk:function tk(a,b){this.a=a
this.b=b},
rA:function rA(){},
rB:function rB(a,b){this.a=a
this.b=b},
rC:function rC(a,b){this.a=a
this.b=b},
rD:function rD(a,b){this.a=a
this.b=b},
Hz:function(a,b){var t=a[b]
return t===a?null:t},
vV:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vU:function(){var t=Object.create(null)
P.vV(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xA:function(a,b,c){return H.yT(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
cy:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jJ:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hy:function(a){return H.yT(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
i9:function(a,b){return new P.kz(0,null,null,null,null,null,0,[a,b])},
HD:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
F:function(a,b,c,d,e){return new P.rf(0,null,null,null,null,[d,e])},
uS:function(a,b,c){var t,s
if(P.vZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ih()
s.push(a)
try{P.I3(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.xX(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jE:function(a,b,c){var t,s,r
if(P.vZ(a))return b+"..."+c
t=new P.c1(b)
s=$.$get$ih()
s.push(a)
try{r=t
r.N=P.xX(r.gN(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
vZ:function(a){var t,s
for(t=0;s=$.$get$ih(),t<s.length;++t)if(a===s[t])return!0
return!1},
I3:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cI(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.G())return
q=H.y(t.gS())
b.push(q)
s+=q.length+2;++r}if(!t.G()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gS();++r
if(!t.G()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gS();++r
for(;t.G();n=m,m=l){l=t.gS();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.y(n)
p=H.y(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a2:function(a,b,c,d){return new P.ky(0,null,null,null,null,null,0,[d])},
jK:function(a,b){var t,s
t=P.a2(null,null,null,b)
for(s=J.cI(a);s.G();)t.h(0,s.gS())
return t},
nH:function(a){var t,s,r
t={}
if(P.vZ(a))return"{...}"
s=new P.c1("")
try{$.$get$ih().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
J.wa(a,new P.nI(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$ih()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
v4:function(a,b){var t=new P.ns(null,0,0,0,[b])
t.fq(a,b)
return t},
rf:function rf(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
rh:function rh(a){this.a=a},
kx:function kx(a,$ti){this.a=a
this.$ti=$ti},
rg:function rg(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kz:function kz(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ky:function ky(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ri:function ri(){},
eo:function eo(){},
hr:function hr(){},
hz:function hz(){},
fp:function fp(){},
aT:function aT(){},
nF:function nF(){},
rZ:function rZ(){},
nG:function nG(){},
i0:function i0(a,$ti){this.a=a
this.$ti=$ti},
nI:function nI(a,b){this.a=a
this.b=b},
ns:function ns(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rr:function rr(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oZ:function oZ(){},
oY:function oY(){},
tf:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.rl(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.tf(a[t])
return a},
wm:function(a,b,c,d,e,f){if(C.d.bR(f,4)!==0)throw H.j(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.j(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.j(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
I5:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.j(H.bl(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.bE(r)
q=String(s)
throw H.j(new P.bJ(q,null,null))}q=P.tf(t)
return q},
I0:function(a){return a.j4()},
HC:function(a,b,c){var t,s,r
t=new P.c1("")
s=new P.rn(t,[],P.Im())
s.ci(a)
r=t.N
return r.charCodeAt(0)==0?r:r},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
f1:function f1(){},
ed:function ed(){},
lP:function lP(){},
hv:function hv(a,b){this.a=a
this.b=b},
nd:function nd(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
nf:function nf(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
ro:function ro(){},
rp:function rp(a,b){this.a=a
this.b=b},
rn:function rn(c,a,b){this.c=c
this.a=a
this.b=b},
qc:function qc(a){this.a=a},
qd:function qd(a){this.a=a},
t0:function t0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
t2:function t2(a){this.a=a},
t1:function t1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hk:function(a,b,c){var t,s,r,q,p
if(b<0)throw H.j(P.bx(b,0,J.c4(a),null,null))
t=c==null
if(!t){if(typeof c!=="number")return c.a4()
s=c<b}else s=!1
if(s)throw H.j(P.bx(c,b,J.c4(a),null,null))
r=J.cI(a)
for(q=0;q<b;++q)if(!r.G())throw H.j(P.bx(b,0,q,null,null))
p=[]
if(t)for(;r.G();)p.push(r.gS())
else{if(typeof c!=="number")return H.a6(c)
q=b
for(;q<c;++q){if(!r.G())throw H.j(P.bx(c,b,q,null,null))
p.push(r.gS())}}return H.xP(p)},
xX:function(a,b,c){var t=J.cI(b)
if(!t.G())return a
if(c.length===0){do a+=H.y(t.gS())
while(t.G())}else{a+=H.y(t.gS())
for(;t.G();)a=a+c+H.y(t.gS())}return a},
A5:function(a,b){return J.z8(a,b)},
A8:function(a,b){var t=new P.e0(a,b)
t.du(a,b)
return t},
A9:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
Aa:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iu:function(a){if(a>=10)return""+a
return"0"+a},
wF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cu(a)
if(typeof a==="string")return JSON.stringify(a)
return P.At(a)},
At:function(a){var t=J.ai(a)
if(!!t.$isf0)return t.B(a)
return H.oy(a)},
df:function(a){return new P.cT(!1,null,null,a)},
dH:function(a,b,c){return new P.cT(!0,a,b,c)},
zE:function(a){return new P.cT(!1,null,a,"Must not be null")},
xT:function(a){return new P.eA(null,null,!1,null,null,a)},
k3:function(a,b,c){return new P.eA(null,null,!0,a,b,"Value not in range")},
bx:function(a,b,c,d,e){return new P.eA(b,c,!0,a,d,"Invalid value")},
dk:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a6(a)
if(!(0>a)){if(typeof c!=="number")return H.a6(c)
t=a>c}else t=!0
if(t)throw H.j(P.bx(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a6(b)
if(!(a>b)){if(typeof c!=="number")return H.a6(c)
t=b>c}else t=!0
if(t)throw H.j(P.bx(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var t=e!=null?e:J.c4(b)
return new P.mQ(b,t,!0,a,c,"Index out of range")},
lV:function(a){return new P.r0(a)},
dj:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cI(a);s.G();)t.push(s.gS())
if(b)return t
t.fixed$length=Array
return t},
G8:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.dj(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
eS:function(a){H.yY(H.y(a))},
dP:function(a,b,c){return new H.ht(a,H.uX(a,!1,!0,!1),null,null)},
pB:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dk(b,c,t,null,null,null)
if(!(b>0)){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.xP(s?C.b.cm(a,b,c):a)}if(!!J.ai(a).$isfm)return H.Gz(a,b,P.dk(b,c,a.length,null,null,null))
return P.Hk(a,b,c)},
ya:function(){var t=H.Gt()
if(t!=null)return P.yb(t,0,null)
throw H.j(new P.R("'Uri.base' is not supported"))},
yb:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a9(a,b+4)^58)*3|C.c.a9(a,b)^100|C.c.a9(a,b+1)^97|C.c.a9(a,b+2)^116|C.c.a9(a,b+3)^97)>>>0
if(s===0)return P.y9(b>0||c<c?C.c.I(a,b,c):a,5,null).geU()
else if(s===32)return P.y9(C.c.I(a,t,c),0,null).geU()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yJ(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ay()
if(p>=b)if(P.yJ(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.R()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.a6(l)
if(k<l)l=k
if(typeof m!=="number")return m.a4()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a4()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a4()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aM(a,"..",m)))h=l>m+2&&C.c.aM(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aM(a,"file",b)){if(o<=b){if(!C.c.aM(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.I(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aK(a,m,l,"/");++l;++k;++c}else{a=C.c.I(a,b,m)+"/"+C.c.I(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aM(a,"http",b)){if(q&&n+3===m&&C.c.aM(a,"80",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.I(a,b,n)+C.c.I(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aM(a,"https",b)){if(q&&n+4===m&&C.c.aM(a,"443",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.I(a,b,n)+C.c.I(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.I(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rL(a,p,o,n,m,l,k,i,null)}return P.HG(a,b,c,p,o,n,m,l,k,i)},
yd:function(a,b){return C.b.hU(a.split("&"),P.jJ(),new P.q9(b))},
Hn:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.q6(a)
s=H.cz(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a0(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fq(C.c.I(a,p,q),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fq(C.c.I(a,p,c),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
yc:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.q7(a)
s=new P.q8(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.a0(a,q)
if(m===58){if(q===b){++q
if(C.c.a0(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.b1(C.b.gbi(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hn(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aA()
h=j[1]
if(typeof h!=="number")return H.a6(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aA()
i=j[3]
if(typeof i!=="number")return H.a6(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ai(e).T(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dm()
i=C.d.b5(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
HG:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HO(a,b,d)
else{if(d===b)P.ic(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HP(a,t,e-1):""
r=P.HK(a,e,f,!1)
if(typeof f!=="number")return f.R()
q=f+1
if(typeof g!=="number")return H.a6(g)
p=q<g?P.HM(H.fq(C.c.I(a,q,g),null,new P.to(a,f)),j):null}else{s=""
r=null
p=null}o=P.HL(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.HN(a,h+1,i,null):null
return new P.kF(j,s,r,p,o,n,i<c?P.HJ(a,i+1,c):null,null,null,null,null,null)},
yr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ic:function(a,b,c){throw H.j(new P.bJ(c,a,b))},
HM:function(a,b){if(a!=null&&J.b1(a,P.yr(b)))return
return a},
HK:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.ae()
t=c-1
if(C.c.a0(a,t)!==93)P.ic(a,b,"Missing end `]` to match `[` in host")
P.yc(a,b+1,t)
return C.c.I(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a6(c)
s=b
for(;s<c;++s)if(C.c.a0(a,s)===58){P.yc(a,b,c)
return"["+a+"]"}return P.HR(a,b,c)},
HR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a6(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a0(a,t)
if(p===37){o=P.yw(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c1("")
m=C.c.I(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.I(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.H,n)
n=(C.H[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c1("")
if(s<t){r.N+=C.c.I(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ic(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a0(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c1("")
m=C.c.I(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.ys(p)
t+=k
s=t}}}}if(r==null)return C.c.I(a,b,c)
if(s<c){m=C.c.I(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
HO:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yu(C.c.a9(a,b)))P.ic(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a9(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ic(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.I(a,b,c)
return P.HH(s?a.toLowerCase():a)},
HH:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HP:function(a,b,c){var t=P.fG(a,b,c,C.a8,!1)
return t==null?C.c.I(a,b,c):t},
HL:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fG(a,b,c,C.J,!1)
if(r==null)r=C.c.I(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ah(r,"/"))r="/"+r
return P.HQ(r,e,f)},
HQ:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ah(a,"/"))return P.HS(a,!t||c)
return P.HT(a)},
HN:function(a,b,c,d){var t=P.fG(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
HJ:function(a,b,c){var t=P.fG(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
yw:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a0(a,b+1)
r=C.c.a0(a,t)
q=H.tx(s)
p=H.tx(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b5(o,4)
if(t>=8)return H.u(C.G,t)
t=(C.G[t]&1<<(o&15))!==0}else t=!1
if(t)return H.fr(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.I(a,b,b+3).toUpperCase()
return},
ys:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a9("0123456789ABCDEF",a>>>4)
t[2]=C.c.a9("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.hj(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a9("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a9("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.pB(t,0,null)},
fG:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cR(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.a6(c)
if(!(r<c))break
c$0:{o=s.a0(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yw(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ic(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a0(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ys(o)}}if(p==null)p=new P.c1("")
p.N+=C.c.I(a,q,r)
p.N+=H.y(m)
if(typeof l!=="number")return H.a6(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.N+=s.I(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
yv:function(a){if(C.c.ah(a,"."))return!0
return C.c.br(a,"/.")!==-1},
HT:function(a){var t,s,r,q,p,o,n
if(!P.yv(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c3)(s),++p){o=s[p]
if(J.b1(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bs(t,"/")},
HS:function(a,b){var t,s,r,q,p,o
if(!P.yv(a))return!b?P.yt(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c3)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b1(C.b.gbi(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.kR(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b1(C.b.gbi(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.yt(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.bs(t,"/")},
yt:function(a){var t,s,r,q
t=J.b_(a)
s=t.gm(a)
if(typeof s!=="number")return s.ay()
if(s>=2&&P.yu(t.a0(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
if(!(r<s))break
q=t.a0(a,r)
if(q===58)return C.c.I(a,0,r)+"%3A"+C.c.al(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
HI:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a0(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.j(P.df("Invalid URL encoding"))}}return t},
t_:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a6(c)
t=J.cR(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a0(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.I(a,b,c)
else o=new H.lk(t.I(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a0(a,s)
if(q>127)throw H.j(P.df("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.j(P.df("Truncated URI"))
o.push(P.HI(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.qd(!1).hB(o)},
yu:function(a){var t=a|32
return 97<=t&&t<=122},
y9:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.b_(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
c$0:{p=s.a0(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.j(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.j(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
p=s.a0(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbi(t)
if(p!==44||r!==m+7||!s.aM(a,"base64",m+1))throw H.j(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.N.ij(0,a,o,s.gm(a))
else{l=P.fG(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aK(a,o,s.gm(a),l)}return new P.q5(a,t,c)},
I_:function(){var t,s,r,q,p
t=P.G8(22,new P.th(),!0,P.db)
s=new P.tg(t)
r=new P.ti()
q=new P.tj()
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
yJ:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yK()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a9(a,s)^96
p=J.d1(r,q>95?31:q)
if(typeof p!=="number")return p.aQ()
d=p&31
o=C.d.b5(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cQ:function cQ(){},
bG:function bG(){},
e0:function e0(a,b){this.a=a
this.b=b},
V:function V(){},
dr:function dr(a){this.a=a},
lM:function lM(){},
lN:function lN(){},
ef:function ef(){},
fn:function fn(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mQ:function mQ(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a){this.a=a},
eG:function eG(a){this.a=a},
d8:function d8(a){this.a=a},
bH:function bH(a){this.a=a},
od:function od(){},
kb:function kb(){},
lC:function lC(a){this.a=a},
r0:function r0(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,bU,$ti){this.a=a
this.bU=bU
this.$ti=$ti},
D:function D(){},
n:function n(){},
jF:function jF(){},
p:function p(){},
aL:function aL(){},
d6:function d6(){},
dn:function dn(){},
z:function z(){},
dy:function dy(){},
eB:function eB(){},
dS:function dS(){},
x:function x(){},
c1:function c1(N){this.N=N},
eI:function eI(){},
q9:function q9(a){this.a=a},
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
q8:function q8(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
to:function to(a,b){this.a=a
this.b=b},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
th:function th(){},
tg:function tg(a){this.a=a},
ti:function ti(){},
tj:function tj(){},
rL:function rL(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qO:function qO(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yQ:function(a){var t,s,r,q,p
if(a==null)return
t=P.jJ()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.c3)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Il:function(a){var t,s
t=new P.bk(0,$.ao,null,[null])
s=new P.dW(t,[null])
a.then(H.dl(new P.tq(s),1))["catch"](H.dl(new P.tr(s),1))
return t},
u1:function(){var t=$.wA
if(t==null){t=J.kP(window.navigator.userAgent,"Opera",0)
$.wA=t}return t},
wC:function(){var t=$.wB
if(t==null){t=P.u1()!==!0&&J.kP(window.navigator.userAgent,"WebKit",0)
$.wB=t}return t},
Ab:function(){var t,s
t=$.wx
if(t!=null)return t
s=$.wy
if(s==null){s=J.kP(window.navigator.userAgent,"Firefox",0)
$.wy=s}if(s)t="-moz-"
else{s=$.wz
if(s==null){s=P.u1()!==!0&&J.kP(window.navigator.userAgent,"Trident/",0)
$.wz=s}if(s)t="-ms-"
else t=P.u1()===!0?"-o-":"-webkit-"}$.wx=t
return t},
rS:function rS(){},
rU:function rU(a,b){this.a=a
this.b=b},
qy:function qy(){},
qz:function qz(a,b){this.a=a
this.b=b},
rT:function rT(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
ls:function ls(){},
lt:function lt(a){this.a=a},
HY:function(a){var t,s,r
t=new P.bk(0,$.ao,null,[null])
s=new P.kE(t,[null])
a.toString
r=W.Z
W.eN(a,"success",new P.te(a,s),!1,r)
W.eN(a,"error",s.gek(),!1,r)
return t},
lE:function lE(){},
te:function te(a,b){this.a=a
this.b=b},
mP:function mP(){},
o9:function o9(){},
hN:function hN(){},
pZ:function pZ(){},
HF:function(a){var t=new P.ry(0,0)
t.fB(a)
return t},
i8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
GO:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.a4()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.a4()
if(d<0)s=-d*0
else s=d
return new P.bL(a,b,t,s,[e])},
rk:function rk(){},
ry:function ry(a,b){this.a=a
this.b=b},
dz:function dz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
rz:function rz(){},
bL:function bL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kT:function kT(){},
eb:function eb(){},
lX:function lX(){},
lY:function lY(){},
lZ:function lZ(){},
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
m5:function m5(){},
m6:function m6(){},
m7:function m7(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mb:function mb(){},
mc:function mc(){},
md:function md(){},
ms:function ms(){},
mw:function mw(){},
dv:function dv(){},
e4:function e4(){},
mN:function mN(){},
d5:function d5(){},
nl:function nl(){},
j3:function j3(){},
jn:function jn(){},
nJ:function nJ(){},
nK:function nK(){},
d7:function d7(){},
o5:function o5(){},
j4:function j4(){},
jo:function jo(){},
oo:function oo(){},
ot:function ot(){},
ou:function ou(){},
oG:function oG(){},
oH:function oH(){},
hP:function hP(){},
pA:function pA(){},
j5:function j5(){},
jp:function jp(){},
pD:function pD(){},
l_:function l_(a){this.a=a},
ck:function ck(){},
pG:function pG(){},
pI:function pI(){},
ke:function ke(){},
pP:function pP(){},
hZ:function hZ(){},
da:function da(){},
q_:function q_(){},
j6:function j6(){},
jq:function jq(){},
qb:function qb(){},
qg:function qg(){},
qh:function qh(){},
i6:function i6(){},
rE:function rE(){},
rF:function rF(){},
rG:function rG(){},
bi:function bi(){},
db:function db(){},
fR:function fR(){},
eW:function eW(){},
fS:function fS(){},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
bF:function bF(){},
eY:function eY(){},
l9:function l9(){},
lr:function lr(){},
jY:function jY(){},
kV:function kV(){},
oK:function oK(){},
oL:function oL(){},
t4:function t4(){},
ka:function ka(){},
j7:function j7(){},
jr:function jr(){}},W={
zX:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zY:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
A7:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Hv:function(a){var t=new W.qL(a,null)
t.fw(a)
return t},
Ac:function(a,b,c){var t,s
t=document.body
s=(t&&C.w).aO(t,a,b,c)
s.toString
t=new H.eJ(new W.d_(s),new W.tm(),[W.af])
return t.gbl(t)},
h2:function(a){var t,s,r
t="element tag unavailable"
try{s=J.zk(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bE(r)}return t},
uq:function(a,b,c){return W.wT(a,null,null,b,null,null,null,c).b1(new W.mI())},
wT:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e5
s=new P.bk(0,$.ao,null,[t])
r=new P.dW(s,[t])
q=new XMLHttpRequest()
C.S.ik(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.J4
W.eN(q,"load",new W.mJ(r,q),!1,t)
W.eN(q,"error",r.gek(),!1,t)
q.send()
return s},
wU:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
ur:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zv(t,a)}catch(r){H.bE(r)}return t},
eQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eN:function(a,b,c,d,e){var t=W.I9(new W.r_(c))
t=new W.qZ(0,a,b,t,!1,[e])
t.fz(a,b,c,!1,e)
return t},
ym:function(a){var t,s
t=document.createElement("a")
s=new W.rH(t,window.location)
s=new W.i7(s)
s.fA(a)
return s},
HA:function(a,b,c,d){return!0},
HB:function(a,b,c,d){var t,s,r,q,p
t=d.geV()
s=t.a
s.href=c
r=s.hostname
t=t.b
q=t.hostname
if(r==null?q==null:r===q){q=s.port
p=t.port
if(q==null?p==null:q===p){q=s.protocol
t=t.protocol
t=q==null?t==null:q===t}else t=!1}else t=!1
if(!t)if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
yq:function(){var t=P.x
t=new W.rW(P.jK(C.q,t),P.a2(null,null,null,t),P.a2(null,null,null,t),P.a2(null,null,null,t),null)
t.fC(null,new H.eu(C.q,new W.rX(),[H.N(C.q,0),null]),["TEMPLATE"],null)
return t},
yB:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.Hw(a)
if(!!J.ai(t).$isag)return t
return}else return a},
HZ:function(a){var t
if(!!J.ai(a).$isee)return a
t=new P.ko([],[],!1)
t.c=!0
return t.bd(a)},
Hw:function(a){if(a===window)return a
else return new W.qN(a)},
I9:function(a){var t=$.ao
if(t===C.e)return a
return t.hw(a,!0)},
aQ:function aQ(){},
eT:function eT(){},
kW:function kW(){},
eX:function eX(){},
cJ:function cJ(){},
l3:function l3(){},
h4:function h4(){},
h7:function h7(){},
l7:function l7(){},
eZ:function eZ(){},
f_:function f_(){},
fX:function fX(){},
il:function il(){},
lg:function lg(){},
lh:function lh(){},
ec:function ec(){},
lm:function lm(){},
ip:function ip(){},
fZ:function fZ(){},
lu:function lu(){},
lv:function lv(){},
h_:function h_(){},
h0:function h0(){},
lw:function lw(){},
bM:function bM(){},
f3:function f3(){},
iW:function iW(){},
qL:function qL(a,b){this.a=a
this.b=b},
jV:function jV(){},
qM:function qM(){},
is:function is(){},
lx:function lx(){},
ly:function ly(){},
lD:function lD(){},
f4:function f4(){},
it:function it(){},
lG:function lG(){},
iv:function iv(){},
ee:function ee(){},
iw:function iw(){},
ix:function ix(){},
lH:function lH(){},
lI:function lI(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iX:function iX(){},
jg:function jg(){},
iB:function iB(){},
iC:function iC(){},
ku:function ku(a,$ti){this.a=a
this.$ti=$ti},
ca:function ca(){},
tm:function tm(){},
lO:function lO(){},
h3:function h3(){},
lU:function lU(){},
Z:function Z(){},
ag:function ag(){},
mo:function mo(){},
cd:function cd(){},
fc:function fc(){},
iY:function iY(){},
jh:function jh(){},
mp:function mp(){},
mq:function mq(){},
mr:function mr(){},
mt:function mt(){},
mu:function mu(){},
iS:function iS(){},
cm:function cm(){},
mF:function mF(){},
fe:function fe(){},
iZ:function iZ(){},
ji:function ji(){},
iU:function iU(){},
e5:function e5(){},
mI:function mI(){},
mJ:function mJ(a,b){this.a=a
this.b=b},
hk:function hk(){},
mM:function mM(){},
hl:function hl(){},
fg:function fg(){},
hm:function hm(){},
ni:function ni(){},
jI:function jI(){},
hw:function hw(){},
hx:function hx(){},
nz:function nz(){},
nE:function nE(){},
jM:function jM(){},
jN:function jN(){},
nL:function nL(){},
nM:function nM(){},
nN:function nN(){},
nO:function nO(){},
nP:function nP(){},
hF:function hF(){},
cn:function cn(){},
jO:function jO(){},
j8:function j8(){},
js:function js(){},
e6:function e6(){},
o1:function o1(){},
o2:function o2(){},
d_:function d_(a){this.a=a},
af:function af(){},
jR:function jR(){},
jS:function jS(){},
j9:function j9(){},
jt:function jt(){},
o7:function o7(){},
o8:function o8(){},
oc:function oc(){},
oe:function oe(){},
oi:function oi(){},
ok:function ok(){},
e8:function e8(){},
oq:function oq(){},
cf:function cf(){},
k1:function k1(){},
ja:function ja(){},
ju:function ju(){},
ow:function ow(){},
ox:function ox(){},
oB:function oB(){},
oE:function oE(){},
oO:function oO(){},
k4:function k4(){},
k5:function k5(){},
fu:function fu(){},
k6:function k6(){},
oX:function oX(){},
p_:function p_(){},
p0:function p0(){},
p3:function p3(){},
co:function co(){},
k8:function k8(){},
h5:function h5(){},
h8:function h8(){},
p6:function p6(){},
hR:function hR(){},
cp:function cp(){},
k9:function k9(){},
jb:function jb(){},
jv:function jv(){},
fv:function fv(){},
p8:function p8(){},
ch:function ch(){},
p9:function p9(){},
pa:function pa(){},
pe:function pe(){},
pf:function pf(a){this.a=a},
pC:function pC(){},
cj:function cj(){},
eF:function eF(){},
kd:function kd(){},
pJ:function pJ(){},
pK:function pK(){},
hW:function hW(){},
hX:function hX(){},
cO:function cO(){},
cG:function cG(){},
pQ:function pQ(){},
jc:function jc(){},
jw:function jw(){},
pR:function pR(){},
h6:function h6(){},
h9:function h9(){},
pV:function pV(){},
cq:function cq(){},
kf:function kf(){},
jd:function jd(){},
jx:function jx(){},
fy:function fy(){},
kg:function kg(){},
fz:function fz(){},
q0:function q0(){},
kh:function kh(){},
dB:function dB(){},
qa:function qa(){},
qe:function qe(){},
qf:function qf(){},
fA:function fA(){},
ki:function ki(){},
qk:function qk(){},
kl:function kl(){},
qr:function qr(){},
eK:function eK(){},
fB:function fB(){},
qJ:function qJ(){},
i4:function i4(){},
je:function je(){},
jy:function jy(){},
ks:function ks(){},
jf:function jf(){},
jz:function jz(){},
qS:function qS(){},
qT:function qT(){},
kw:function kw(){},
j_:function j_(){},
jj:function jj(){},
re:function re(){},
ia:function ia(){},
j0:function j0(){},
jk:function jk(){},
rI:function rI(){},
kB:function kB(){},
j1:function j1(){},
jl:function jl(){},
kD:function kD(){},
j2:function j2(){},
jm:function jm(){},
t5:function t5(){},
t6:function t6(){},
qF:function qF(){},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qY:function qY(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i5:function i5(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qZ:function qZ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
r_:function r_(a){this.a=a},
i7:function i7(a){this.a=a},
bv:function bv(){},
jT:function jT(a){this.a=a},
o4:function o4(a){this.a=a},
o3:function o3(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(){},
rJ:function rJ(){},
rK:function rK(){},
rW:function rW(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rX:function rX(){},
rV:function rV(){},
iQ:function iQ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qN:function qN(a){this.a=a},
e7:function e7(){},
rY:function rY(){},
rH:function rH(a,b){this.a=a
this.b=b},
kG:function kG(a){this.a=a},
t3:function t3(a){this.a=a}},T={
us:function(a,b,c,d){var t
H.IU(a,"$isp",[P.D],"$asp")
t=new T.hn(a,null,d,b,null)
t.fp(a,b,c,d)
return t},
xH:function(a,b){return new T.of(0,a,new Uint8Array(H.cz(b==null?32768:b)))},
Hp:function(a){var t=new T.qu(-1,0,0,0,0,null,null,"",[])
t.fu(a)
return t},
Hq:function(a,b){var t=new T.qv(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fv(a,b)
return t},
ff:function(a){var t=new T.mK(null,0,2147483647)
t.fo(a)
return t},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
de:function de(a){this.a=a},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qv:function qv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
qw:function qw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
qt:function qt(a){this.a=a},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
la:function la(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
lc:function lc(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
lF:function lF(){},
mD:function mD(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
GR:function(a,b,c,d,e){var t,s
t=[P.x]
s=H.a([],t)
t=new T.hO("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.V]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a3),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.O]),H.a([],[A.fV]),1)
t.ab(a,b,c,d,e)
return t},
hO:function hO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Ag:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.am(s[q],8)
return t.bc(b)},
Af:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.ac(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Ae:function(a,b,c,d){var t,s,r,q,p
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kJ(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;++p)t.am(q[p],r)
return t.bc(b)},
Ad:function(a,b,c,d){var t,s,r,q,p,o
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;++o){r=p.ac(q)
if(o>=t)return H.u(s,o)
s[o]=r}return s}},S={kU:function kU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bI:function bI(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},io:function io(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mH:function mH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},uV:function uV(a){this.a=a},jX:function jX(){},nj:function nj(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},nC:function nC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},oW:function oW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},fo:function fo(){},vL:function vL(){},vM:function vM(){},vN:function vN(){},u8:function u8(){},ub:function ub(){},tZ:function tZ(){},vu:function vu(){},vP:function vP(){},vQ:function vQ(){},lf:function lf(){},vk:function vk(){},vg:function vg(){},no:function no(){},u2:function u2(){},tU:function tU(){},lA:function lA(){},v3:function v3(){},lB:function lB(){},oj:function oj(){},vB:function vB(){},vy:function vy(){},vC:function vC(){},tT:function tT(){},mA:function mA(){},ld:function ld(){},tY:function tY(){},tX:function tX(){},vl:function vl(){},vD:function vD(){},vm:function vm(){},ua:function ua(){},u9:function u9(){},vA:function vA(){},vz:function vz(){},pS:function pS(){},vG:function vG(){},u_:function u_(){},u0:function u0(){},vO:function vO(){},hE:function hE(){},v8:function v8(){},v9:function v9(){},va:function va(){},vb:function vb(){},vv:function vv(){},vw:function vw(){},vx:function vx(){},v7:function v7(){},vd:function vd(){},ve:function ve(){},un:function un(){},uo:function uo(){},up:function up(){},vf:function vf(){},vc:function vc(){},tV:function tV(){},vI:function vI(){},vJ:function vJ(){},vH:function vH(){}},K={bU:function bU(a,b){this.a=a
this.b=b},nm:function nm(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},oS:function oS(y1,y2,p,q,t,u,v,w,A,C,D,J,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
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
_.x2=x2},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zF:function(a,b,c,d,e){var t,s,r
t=P.x
s=A.e_
r=P.D
r=new L.aU(P.F(null,null,null,t,s),P.F(null,null,null,r,s),P.F(null,null,null,t,r),P.F(null,null,null,r,t))
r.j(0,$.b2,L.e("#FF9B00"),!0)
r.j(0,$.b4,L.e("#FF9B00"),!0)
r.j(0,$.b3,L.e("#FF8700"),!0)
r.j(0,$.bd,L.e("#7F7F7F"),!0)
r.j(0,$.bc,L.e("#727272"),!0)
r.j(0,$.b6,L.e("#A3A3A3"),!0)
r.j(0,$.b7,L.e("#999999"),!0)
r.j(0,$.b5,L.e("#898989"),!0)
r.j(0,$.bb,L.e("#EFEFEF"),!0)
r.j(0,$.ba,L.e("#DBDBDB"),!0)
r.j(0,$.b9,L.e("#C6C6C6"),!0)
r.j(0,$.b8,L.e("#ADADAD"),!0)
s=[t]
t=new L.fP(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.V]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.O]),H.a([],[A.fV]),Q.J(null,null,A.a3))
t.ao(a,b,c,d,e)
return t},
e:function(a){if(C.c.ah(a,"#"))return A.wt(C.c.al(a,1))
else return A.wt(a)},
fP:function fP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oU:function oU(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2}},M={kZ:function kZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fW:function fW(a,b){this.a=a
this.b=b},lz:function lz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hb:function hb(){},bC:function bC(a,b){this.a=a
this.b=b},pb:function pb(a){this.a=a},qn:function qn(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2}},U={l2:function l2(){},nB:function nB(a){this.a=a},ob:function ob(a){this.a=a},px:function px(){},py:function py(a){this.a=a},pz:function pz(a){this.a=a},lK:function lK(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,eq,er,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
_.eq=eq
_.er=er
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
_.x2=x2},me:function me(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nD:function nD(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c:function c(a){this.a=a},X:function X(b,c,a){this.b=b
this.c=c
this.a=a},aj:function aj(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},pT:function pT(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
Ho:function(a){if(J.cR(a).ah(a," "))return C.c.al(a,1)
return a},
qo:function qo(a){this.a=a},
qp:function qp(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b}},E={
IH:function(){A.tw()
W.uq(C.c.ak("../",N.om())+"navbar.txt",null,null).b1(O.IK())
$.tt=document.querySelector("#story")
E.ii("make form to generate json datastring for entrant (easier than csv), BBName, Entrant Name, images csv, text, jrComment, shogunComment  ")
E.ii("make sample file for showing three contest entry")
E.ii("have image folder for entrants")
E.ii("slurp file")
E.ii("display contest entries")
E.ii("allow filtering (use PL's image browser code thingy)")
E.IJ()
E.tu()},
ii:function(a){var t=document.createElement("li")
C.a2.cl(t,"TODO: "+a)
$.tt.appendChild(t)},
tu:function(){var t=0,s=P.bn(),r,q,p
var $async$tu=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=2
return P.cr(B.lp(),$async$tu)
case 2:r=b
P.eS("entries is "+H.y(r))
for(q=J.cI(r);q.G();){p=q.gS()
H.yY("entry is "+H.y(p))
J.zc(p,$.tt)}return P.bs(null,s)}})
return P.bt($async$tu,s)},
IJ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=t.createElement("div")
s.textContent="For JR Use Only"
$.tt.appendChild(s)
r=W.ur("text")
r.id="bbName"
q=W.ur("text")
q.id="entrantName"
p=W.ur("text")
p.id="imagesCSV"
o=t.createElement("textarea")
o.id="text"
n=t.createElement("textarea")
n.id="jrComment"
m=t.createElement("textarea")
m.id="shogunComment"
l=t.createElement("button")
l.textContent="Submit"
k=H.a([r,q,p,o,n,m],[W.ca])
for(j=0;j<6;++j){i=k[j]
t=J.ai(i)
if(!!t.$ishm){s.appendChild(i)
i.value=i.id}else if(!!t.$ishX){s.appendChild(i)
i.value=i.id}}s.appendChild(l)
W.eN(l,"click",new E.tJ(s,k),!1,W.e6)},
tJ:function tJ(a,b){this.a=a
this.b=b},
iT:function iT(){},
oa:function oa(){},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
nR:function nR(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
oD:function oD(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
oR:function oR(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
qj:function qj(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2}},O={l4:function l4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},c7:function c7(){},dp:function dp(){},l8:function l8(a){this.a=a},eE:function eE(){},iE:function iE(){},
IM:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.om()
a=J.zt(a,P.dP("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tL(t))
s=document
J.wf(s.querySelector("#navbar"),"beforeend",a,C.x,null)
if(J.b1(O.Ix("seerOfVoid",null),"true"))P.AL(new O.tM(),P.d6)
r=new P.e0(Date.now(),!1)
if(H.vp(r)===4&&H.vo(r)===1)J.wc(s.querySelector("body")).h(0,"voidbody")
q=H.vp(r)
p=H.vo(r)
o=C.a.B(H.xK(r))
n=C.a.B(q)
m=C.a.B(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.k2(null,null)
k.dl(H.fq(l,null,null))
k.ih()
if($.He||k.a.d_()>0.99)H.kN(s.querySelector("#today"),"$iseT").href=C.c.ak("../",t)+"dead_index.html?seed="+l
else H.kN(s.querySelector("#today"),"$iseT").href=C.c.ak("../",t)+"index2.html?seed="+l},
Ix:function(a,b){var t,s,r,q
t=P.ya().gd7().n(0,a)
if(t!=null)t=P.t_(t,0,J.c4(t),C.n,!1)
if(t!=null)return t
s=$.z0
if(s.length!==0){r=J.zx(window.location.href,J.zp(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.yb(H.z2(s,q,"")+"?"+$.z0,0,null).gd7().n(0,a)}return},
IW:function(){var t,s,r,q
t=document
J.wc(t.querySelector("body")).h(0,"voidbody")
s=new W.ku(t.querySelectorAll(".void"),[null])
for(t=new H.es(s,s.gm(s),0,null,[null]);t.G();){r=t.d
q=J.ze(J.tR(r))
if(q==="none"||q.length===0)O.IQ(r)
else O.Iz(r)}},
IQ:function(a){var t,s
if(a==null)return
t=J.aM(a)
s=t.gaS(a)
J.wi(s,!!t.$ishR?"inline":"block")},
Iz:function(a){if(a==null)return
J.wi(J.tR(a),"none")},
IR:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.eS("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.ea(s,",")
if(!J.za(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bE(q)
P.eS("Saving isn't possible....you don't have local storage")}},
tL:function tL(a){this.a=a},
tM:function tM(){},
tK:function tK(){},
cW:function cW(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pO:function pO(a){this.a=a},oF:function oF(a){this.a=a},le:function le(a){this.a=a},mB:function mB(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mC:function mC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o6:function o6(b,a){this.b=b
this.a=a},dR:function dR(a,b){this.a=a
this.b=b},ad:function ad(a,b){this.a=a
this.b=b},d2:function d2(r,c,d,e,f,a,b){var _=this
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
_.b=b},U:function U(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iq:function iq(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cY:function cY(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},lj:function lj(c,a,b){this.c=c
this.a=a
this.b=b},by:function by(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jZ:function jZ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iR:function iR(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},k0:function k0(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oT:function oT(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},p4:function p4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dQ:function dQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nT:function(){var t=0,s=P.bn(),r,q
var $async$nT=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.eS("loading big bads")
r=$
q=J
t=2
return P.cr(A.et("BigBadLists/bigBads.txt",!1,!1,null),$async$nT)
case 2:r.xG=q.ea(b,"\n")
return P.bs(null,s)}})
return P.bt($async$nT,s)},
Ii:function(a){var t,s,r,q,p,o
t=J.ea(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.c3)(t),++q){p=t[q]
o=J.b_(p)
r+=" "+(J.zC(o.n(p,0))+o.al(p,1))}return r}},A={ll:function ll(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a3(c,e,null,a,!1,P.a2(null,null,null,G.a1),0,3)
t.L(a,b,c,!1,e)
return t},
a3:function a3(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
n5:function n5(){},
n4:function n4(){},
fV:function fV(){},
fY:function(a,b,c,d){var t=new A.e_(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.fn(a,b,c,d)
return t},
ws:function(a,b,c,d){var t=A.fY(0,0,0,255)
t.b=C.a.af(C.d.ap(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.af(C.d.ap(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.af(C.d.ap(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.af(C.d.ap(d*255),0,255)
return t},
A3:function(a,b){if(b){if(typeof a!=="number")return a.aQ()
return A.fY((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aQ()
return A.fY((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wt:function(a){return A.A3(H.fq(a,16,new A.tp()),a.length>=8)},
e_:function e_(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
tp:function tp(){},
xE:function(){if($.xC)return
$.xC=!0
Z.AC()},
et:function(a,b,c,d){var t=0,s=P.bn(),r,q,p,o,n
var $async$et=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.xE()
t=$.$get$cV().a_(0,a)?3:5
break
case 3:q=$.$get$cV().n(0,a)
p=J.ai(q)
if(!!p.$isdQ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cN(q)
t=1
break}}else throw H.j("Requested resource ("+a+") is an unexpected type: "+H.y(J.we(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.v6==null?8:9
break
case 8:t=10
return P.cr(A.ny(),$async$et)
case 10:case 9:n=$.v6.f0(a)
t=n!=null?11:12
break
case 11:t=13
return P.cr(A.nt(n),$async$et)
case 13:if(!$.$get$cV().a_(0,a))$.$get$cV().i(0,a,new Y.dQ(a,null,H.a([],[[P.f2,,]]),[null]))
r=$.$get$cV().n(0,a).b
t=1
break
case 12:case 7:r=A.Ga(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$et,s)},
ny:function(){var t=0,s=P.bn(),r
var $async$ny=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cr(A.et("manifest/manifest.txt",!1,!0,$.wP),$async$ny)
case 2:r.v6=b
return P.bs(null,s)}})
return P.bt($async$ny,s)},
G9:function(a){if(!$.$get$cV().a_(0,a))$.$get$cV().i(0,a,new Y.dQ(a,null,H.a([],[[P.f2,,]]),[null]))
return $.$get$cV().n(0,a)},
Ga:function(a,b,c){var t
if($.$get$cV().a_(0,a))throw H.j("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wO(C.b.gbi(a.split("."))).a
t=A.G9(a)
c.bb(A.xB(a,!1)).b1(new A.nw(t))
return t.cN(0)},
nt:function(a){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$nt=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cr(A.et(a+".bundle",!1,!0,null),$async$nt)
case 3:q=a0
p=C.c.I(a,0,C.c.eC(a,$.$get$xD()))
o=P.d6
n=new P.dW(new P.bk(0,$.ao,null,[o]),[o])
m=H.a([],[P.cl])
for(o=J.zf(q),l=o.length,k=[[P.f2,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.c3)(o),++i){h=o[i]
g=J.aM(h)
f=Z.wO(C.b.gbi(J.ea(g.gH(h),"."))).a
e=p+"/"+H.y(g.gH(h))
if($.$get$cV().a_(0,e)){m.push(A.et(e,!1,!1,null))
continue}d=H.kN(g.gbq(h),"$isdb")
if(!$.$get$cV().a_(0,e))$.$get$cV().i(0,e,new Y.dQ(e,null,H.a([],k),j))
c=$.$get$cV().n(0,e)
m.push(c.cN(0))
f.bh(d.buffer).b1(new A.nu(f,c))}P.AM(m,null,!1).b1(new A.nv(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$nt,s)},
hA:function(a,b){var t=0,s=P.bn(),r,q,p,o,n
var $async$hA=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$v5().a_(0,a)){r=$.$get$v5().n(0,a)
t=1
break}q=W.fu
p=new P.bk(0,$.ao,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eN(n,"load",new A.nx(new P.dW(p,[q]),n),!1,W.Z)
n.src=A.xB(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$hA,s)},
xB:function(a,b){if(C.c.ah(a,"/")){a=C.c.al(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.ak("../",N.om())+a},
nw:function nw(a){this.a=a},
nu:function nu(a,b){this.a=a
this.b=b},
nv:function nv(a){this.a=a},
nx:function nx(a,b){this.a=a
this.b=b},
oh:function oh(){},
jW:function jW(){},
k2:function k2(a,b){this.a=a
this.b=b},
tw:function(){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$tw=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.yR){t=1
break}$.yR=!0
D.Hj()
q=P.x
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$b().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.ab
H.a([],p)
o=new G.bK(n,o,0.6)
$.$get$b().h(0,o)
$.x4=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.2)
$.$get$b().h(0,o)
$.b0=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.aA=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.c9=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.aW=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.bV=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.bj=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.H
H.a([],p)
o=new G.bK(n,o,3.1)
$.$get$b().h(0,o)
$.bp=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.ce=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.aS=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.bA=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bK(n,o,0.1)
$.$get$b().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bK(n,o,-13)
$.$get$b().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$b().h(0,o)
$.aw=o
o=H.a(["legendary"],p)
n=$.n3
H.a([],p)
o=new G.bK(n,o,13)
$.$get$b().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.n3
H.a([],p)
o=new G.bK(n,o,40.37)
$.$get$b().h(0,o)
$.FQ=o
o=$.I
H.a([],p)
o=new G.aH(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.av=o
o=$.uR
H.a([],p)
o=new G.aH(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.aR=o
o=$.uR
H.a([],p)
o=new G.aH(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aH(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.bm=o
o=$.H
H.a([],p)
o=new G.aH(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c_=o
o=$.I
H.a([],p)
o=new G.aH(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.aZ=o
o=$.I
H.a([],p)
o=new G.aH(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,o)
$.bW=o
o=$.I
H.a([],p)
o=new G.aH(o,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,o)
$.aD=o
o=$.H
H.a([],p)
o=new G.aH(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,o)
$.aK=o
o=$.q
H.a([],p)
o=new G.aH(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,o)
$.bq=o
o=$.q
H.a([],p)
o=new G.aH(o,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,o)
$.a8=o
o=$.q
H.a([],p)
o=new G.aH(o,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,o)
$.bg=o
o=$.I
H.a([],p)
o=new G.aH(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.bh=o
o=$.I
H.a([],p)
o=new G.aH(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.ar=o
o=$.I
H.a([],p)
o=new G.aH(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.al=o
o=$.I
H.a([],p)
o=new G.aH(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aH(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.Y=o
o=$.H
H.a([],p)
o=new G.aH(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,o)
$.at=o
o=$.I
H.a([],p)
o=new G.aH(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,o)
$.aB=o
o=$.I
H.a([],p)
o=new G.aH(o,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aH(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bw=o
o=$.I
H.a([],p)
o=new G.aH(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a4=o
o=$.n3
H.a([],p)
o=new G.aH(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,o)
$.T=o
o=$.n3
H.a([],p)
o=new G.aH(o,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,o)
$.P=o
o=$.I
H.a([],p)
o=new G.aH(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,o)
$.ay=o
o=$.q
H.a([],p)
o=new G.aH(o,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,o)
$.aI=o
o=$.I
H.a([],p)
o=new G.aH(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,o)
$.aF=o
o=$.I
H.a([],p)
o=new G.aH(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,o)
$.aY=o
o=$.I
H.a([],p)
o=new G.aH(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,o)
$.bN=o
o=$.I
H.a([],p)
o=new G.aH(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,o)
$.bo=o
o=$.I
H.a([],p)
o=new G.aH(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,o)
$.c8=o
o=$.I
H.a([],p)
o=new G.aH(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,o)
$.as=o
o=$.I
H.a([],p)
o=new G.aH(o,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,o)
$.ae=o
o=$.q
H.a([],p)
o=new G.aH(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,o)
$.aJ=o
o=$.I
H.a([],p)
o=new G.aH(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,o)
$.aa=o
o=$.I
H.a([],p)
o=new G.aH(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aH(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,o)
$.aP=o
o=$.I
H.a([],p)
o=new G.aH(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.bf=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ah(n,o,0.1)
$.$get$b().h(0,o)
$.x8=o
o=H.a(["a sword"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.fj=o
o=H.a(["a hammer"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uC=o
o=H.a(["a rifle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uM=o
o=H.a(["a pistol"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uJ=o
o=H.a(["a blade"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.wZ=o
o=H.a(["a dagger"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.ux=o
o=H.a(["a santa"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.hq=o
o=H.a(["a fist"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.x6=o
o=H.a(["claws"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.mW=o
o=H.a(["a grenade"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.mX=o
o=H.a(["a freaking safe"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xm=o
o=H.a(["a ball"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.em=o
o=H.a(["a trident"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xu=o
o=H.a(["a card"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.mV=o
o=H.a(["a frying pan"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uz=o
o=H.a(["a pillow"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.en=o
o=H.a(["a machinegun"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uF=o
o=H.a(["a shuriken"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xq=o
o=H.a(["a sling"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xs=o
o=H.a(["a yoyo"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xw=o
o=H.a(["a cane"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.x0=o
o=H.a(["a shield"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.fi=o
o=H.a(["a lance"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xg=o
o=H.a(["a ax"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.ut=o
o=H.a(["a sign"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xl=o
o=H.a(["a book"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.ax=o
o=H.a(["a broom"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.jA=o
o=H.a(["a club"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.jC=o
o=H.a(["a bow"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uu=o
o=H.a(["a whip"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xv=o
o=H.a(["a staff"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xt=o
o=H.a(["a needle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uH=o
o=H.a(["dice"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uy=o
o=H.a(["a fork"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.x7=o
o=H.a(["a pigeon???"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,1.3)
$.$get$b().h(0,o)
$.uI=o
o=H.a(["a chainsaw"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.x1=o
o=H.a(["a sickle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xr=o
o=H.a(["a shotgun"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xo=o
o=H.a(["a stick"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.dw=o
o=H.a(["a chain"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.hp=o
o=H.a(["a wrench"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uP=o
o=H.a(["a shovel"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xp=o
o=H.a(["a rolling pin"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uO=o
o=H.a(["a puppet"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uK=o
o=H.a(["a razor"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.uL=o
o=H.a(["a pen"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.mZ=o
o=H.a(["a bust"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.jB=o
o=H.a(["a bowling ball"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["a golf club"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xa=o
o=H.a(["a knife"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xf=o
o=H.a(["scissors"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$b().h(0,o)
$.xn=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.H
m=G.a1
l=[m]
k=H.a([$.E,$.av,$.aK],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a([],p)
n=$.v
k=H.a([$.ae,$.av],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["fossilized"],p)
n=$.H
k=H.a([$.b0,$.aw],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["adamantium"],p)
n=$.H
k=H.a([$.b0,$.E],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.wX=o
o=H.a([],p)
n=$.v
k=H.a([$.aY,$.aF],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Fp=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.Q,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.FE=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.Q,$.E],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.Q,$.aw],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.ce,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.W,$.L],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.n0=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.E,$.bj],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.x2=o
o=H.a(["rotting","zombie"],p)
n=$.H
k=H.a([$.bS,$.bj],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.EM=o
o=H.a(["draugr","white walker"],p)
n=$.H
k=H.a([$.bS,$.bj,$.bo],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["Ultraviolet"],p)
n=$.uQ
k=H.a([$.aR,$.am],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aR,$.am,$.av],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.FP=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bW],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ar,$.aW],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.uv=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ar,$.Q],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ar,$.c9],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ar,$.b0],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["toothy"],p)
n=$.a5
k=H.a([$.b0,$.bQ],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.FM=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.aw,$.aW,$.bj],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ar,$.bN],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.aw,$.aW],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.uw=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.ay,$.aB,$.aV,$.Y,$.al,$.bW,$.a4],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aZ,$.am,$.av,$.a0,$.aD,$.Y,$.al,$.ap],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["deadpool"],p)
n=$.a5
k=H.a([$.bS,$.aI,$.ap,$.aV],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aZ,$.ap],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.Fs=o
o=H.a(["wolverine"],p)
n=$.a5
k=H.a([$.b0,$.av,$.aK],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.G0=o
o=H.a(["rabbit's foot"],p)
n=$.a5
k=H.a([$.bW,$.ce],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.xk=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.H
k=H.a([$.aK,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a5
k=H.a([$.aK,$.aJ,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.wY=o
o=H.a(["training sword","bokken"],p)
n=$.a5
k=H.a([$.W,$.av],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aP,$.ap],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.uD=o
o=H.a(["netted","webbed"],p)
n=$.a5
k=H.a([$.bg,$.Q],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["barbed wire"],p)
n=$.a5
k=H.a([$.aK,$.bg,$.E,$.Q],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a(["morning star"],p)
n=$.a5
k=H.a([$.aK,$.ae],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.aY,$.bh],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bR,$.ap],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.EW=o
o=H.a(["bayonet"],p)
n=$.a5
k=H.a([$.aK,$.aJ],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bo,$.ap,$.av],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.Fo=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aR,$.as,$.av],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a4,$.aP],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a4,$.bf],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.EG=o
o=H.a(["skeletal"],p)
n=$.a5
k=H.a([$.aZ,$.aD,$.b0],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.Fi=o
o=H.a(["green sun"],p)
n=$.uR
k=H.a([$.as,$.c_,$.aR],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.uB=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uQ
k=H.a([$.am,$.al],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a4,$.aR],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.ED=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.av,$.am,$.ap],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c_,$.bq],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["living"],p)
n=$.H
k=H.a([$.b0,$.bj,$.at],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["dead","corpse","deceased"],p)
n=$.H
k=H.a([$.b0,$.bj],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a8,$.bg,$.aJ],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.FD=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.am,$.aa],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.aa],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.al,$.bh],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.Fn=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ae,$.aa],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.av,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.F4=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.al,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.F3=o
o=H.a(["Bach's"],p)
n=$.ab
k=H.a([$.Y,$.aa],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["Mozart's"],p)
n=$.ab
k=H.a([$.a4,$.aa],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ab
k=H.a([$.Y,$.c_],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["Feynman's"],p)
n=$.ab
k=H.a([$.Y,$.aV],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["Ziptie"],p)
n=$.ab
k=H.a([$.aA,$.bg],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.G4=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.E,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.jD=o
o=H.a(["Sassacre"],p)
n=$.ab
k=H.a([$.c8,$.aV],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.EU=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ae,$.c8],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.Fl=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bg,$.L],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mY=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.as,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["pinata"],p)
n=$.a5
k=H.a([$.L,$.ar],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ae,$.c8,$.E],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aR,$.bq],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.am,$.bq],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.Fm=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.am,$.av],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a8,$.aa],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.FG=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.aw,$.aa],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.EI=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a5
k=H.a([$.at,$.bj,$.aJ],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aV,$.aa,$.aX,$.aZ],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.xe=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.ap,$.a8],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.F7=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ae,$.ap,$.bR],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.FV=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.as,$.ar],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.Fr=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bo,$.ar],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bo,$.ar,$.av],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bo,$.aK],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.ap,$.ar],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.EX=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.am,$.aa,$.ap,$.a8],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.FT=o
o=H.a(["mallet"],p)
n=$.a5
k=H.a([$.W,$.ae],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.ap],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.E,$.L,$.bh],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ar,$.bh],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c_,$.ap],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.EE=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.aw,$.aa,$.ay],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.aa,$.ay],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a4,$.ay],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.ay],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.F6=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bh,$.ay,$.al],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.fh=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bh,$.aa,$.al],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bh,$.bo],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.xd=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.as,$.bo],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.ap,$.bo],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["winter's","season's"],p)
n=$.ab
k=H.a([$.bm,$.bo],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.FY=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ab
k=H.a([$.a4,$.bo],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["Santa Saws"],p)
n=$.ab
k=H.a([$.a4,$.bo,$.av],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.ES=o
o=H.a(["Santa Sleighs"],p)
n=$.ab
k=H.a([$.hq,$.av],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.ET=o
o=H.a(["Santa Claws"],p)
n=$.ab
k=H.a([$.hq,$.mW],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.ER=o
o=H.a(["Sandy Claws"],p)
n=$.ab
k=H.a([$.hq,$.mW,$.aw],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.EQ=o
o=H.a(["Silent Night"],p)
n=$.ab
k=H.a([$.hq,$.am],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.Fe=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ab
k=H.a([$.aZ,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bj,$.c_,$.bS],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.ap,$.E],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.Fh=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c_,$.a8,$.ar],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c_,$.a8,$.ar,$.aJ],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a([],p)
n=$.q
k=H.a([$.ae,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c_,$.aw],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.FS=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.L,$.c9],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.av,$.aw],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aK,$.aw],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aK],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.ap,$.bq],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.G3=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.aY],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.Q,$.aY],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.FR=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bj,$.aY],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.xi=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.ce,$.aY],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.F2=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ae,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.ay,$.bQ],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.n1=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a5
k=H.a([$.bh,$.bQ],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.ap,$.av],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar,$.L,$.E],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.ap,$.L],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.EZ=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a4,$.E],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ae,$.E],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.FL=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.c8,$.E],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.xh=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aP,$.aV],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bh,$.aV],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.al,$.aV],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.aY,$.aP],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["stradivarius"],p)
n=$.ab
k=H.a([$.al,$.bh,$.W,$.aa],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.Fy=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aP],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.EY=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a8,$.at],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mU=o
o=H.a(["robotic"],p)
n=$.H
k=H.a([$.E,$.a8,$.at],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.uN=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bq],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.F9=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.at,$.a8,$.aa],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.FU=o
o=H.a(["*Hyun-ae"],p)
n=$.ab
k=H.a([$.at,$.a8,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aJ],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c8,$.aJ],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.al,$.L],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.Fw=o
o=H.a([],p)
n=$.q
k=H.a([$.ax,$.L],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a([],p)
n=$.q
k=H.a([$.E,$.aJ],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.av,$.L],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["squeaky"],p)
n=$.H
k=H.a([$.ae,$.c9],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.Ft=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aP,$.aa],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.L],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ar],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aJ],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["sick nasty","ill"],p)
n=$.H
k=H.a([$.ap,$.bN],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.Fb=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.E,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a8],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c9,$.av],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.EO=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.av],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.EP=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aX,$.a8],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.FJ=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aX,$.a8,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.F0=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aW,$.E],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.uG=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aW,$.aw,$.a4],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.x3=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c9,$.aJ],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ay,$.al],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.x5=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aV,$.ap],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bR,$.aV],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.uE=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aP,$.ap,$.al],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bS,$.aX,$.aZ],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aJ,$.ap,$.al],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.EK=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.E,$.bh],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.uA=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aR,$.E],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$b().h(0,o)
$.n_=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bW,$.E],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$b().h(0,o)
$.xc=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.Q,$.ce],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.al],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.xj=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.c8],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["glitched"],p)
n=$.H
k=H.a([$.bp,$.a8],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.x9=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a8],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.E,$.aX,$.aa],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.at,$.aP],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.Fg=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ar,$.aP],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aP],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bh,$.aP],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.ap,$.aF,$.aV],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.FA=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bj],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.as,$.bq],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bq,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a4,$.aR,$.bp],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.E,$.c_],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.E,$.a8],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.E,$.as],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.aw,$.as],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["Rusty"],p)
n=$.H
k=H.a([$.E,$.bR],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.EN=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.av,$.ap,$.al],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aV],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.EJ=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ay,$.aR],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ay,$.am],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.aw,$.bj],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.Fx=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a4,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a4,$.aw],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a4,$.at],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ar,$.al],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aW,$.ay,$.bh],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.Fu=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.Q],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["Locked"],p)
n=$.H
k=H.a([$.bg,$.bw],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.aw,$.L],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.L,$.aS],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.L,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bp,$.bw,$.bS],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.EV=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.L,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.am,$.Q],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.x_=o
o=H.a(["Possessed"],p)
n=$.H
k=H.a([$.bV,$.bj],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bV,$.as],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.bf,$.uK,$.at],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bj,$.bp],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bm],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bw],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.ap,$.as],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a4,$.bm],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bm,$.bg],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.FO=o
o=H.a([],p)
n=$.q
k=H.a([$.bm,$.bw],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Ghost Rider's"],p)
n=$.ab
k=H.a([$.hp,$.as,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bo],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a(["Duelist's"],p)
n=$.ab
k=H.a([$.aJ,$.al],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["Silenced"],p)
n=$.H
k=H.a([$.aJ,$.am],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.Fd=o
o=H.a(["Deudly"],p)
n=$.H
k=H.a([$.aJ,$.bR],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["Screaming"],p)
n=$.H
k=H.a([$.aX,$.aZ],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.F_=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bS,$.aa],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bS,$.ay],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.Fz=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bf,$.bh],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.at,$.aZ,$.bp,$.a4],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bp,$.am],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.EH=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ar,$.bq],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["Disguised"],p)
n=$.H
k=H.a([$.am,$.aP],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Haunted"],p)
n=$.H
k=H.a([$.aF,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["Cognitohazardous"],p)
n=$.H
k=H.a([$.bp,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Staticy"],p)
n=$.H
k=H.a([$.aF,$.a8],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.Fv=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aW,$.c_],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aV,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.FK=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.E,$.bQ],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["High-Powered"],p)
n=$.H
k=H.a([$.bq,$.aJ],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bq,$.ae],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.aY,$.bA],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aF,$.aK],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.EA=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.am,$.a8],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aK,$.av],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.E,$.aX],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.E,$.al],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.Ff=o
o=H.a(["Withered"],p)
n=$.H
k=H.a([$.aD,$.aS],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.G_=o
o=H.a(["Shattered"],p)
n=$.H
k=H.a([$.aW,$.bR],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.F5=o
o=H.a(["Miner's"],p)
n=$.ab
k=H.a([$.aw,$.E],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.aa,$.at],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.Fc=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bj,$.a8],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.am,$.a8],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.aw,$.bN],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bN,$.E],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.Q,$.ae],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aS,$.Q],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bw,$.aR],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aR,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bw,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a(["Poached"],p)
n=$.H
k=H.a([$.bj,$.bh],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.Ep=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.Q,$.ay],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.FC=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bW,$.b0],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.FZ=o
o=H.a(["Rattling"],p)
n=$.H
k=H.a([$.aX,$.b0],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.EF=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.b0],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aV,$.b0],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.aY],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aX,$.bw],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aX,$.bq],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.F8=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bN,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.as,$.a4],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.FW=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.Q,$.aW],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b0,$.aZ],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.Fj=o
o=H.a(["Enchanted"],p)
n=$.H
k=H.a([$.a4,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["Berserker's"],p)
n=$.ab
k=H.a([$.a4,$.bw],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["Clerical"],p)
n=$.ab
k=H.a([$.a4,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.as],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c_,$.aR],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.G2=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aY,$.as],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["Crackling"],p)
n=$.H
k=H.a([$.aX,$.as],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Thumping"],p)
n=$.H
k=H.a([$.aX,$.c8],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.FI=o
o=H.a(["Shrieking","Banshee"],p)
n=$.H
k=H.a([$.bV,$.aX],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.Fa=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aV,$.bp],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.FB=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aS],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aS],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.EL=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aV,$.ae],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a4,$.bN],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ay,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.FN=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.av,$.aV],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.Fk=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bS,$.aV],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.xb=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.ay,$.aS],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bN,$.aS],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.H
k=H.a([$.a4,$.bA],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.FX=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aS,$.ar,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.bg,$.at],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bw,$.at],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["Hypothermic"],p)
n=$.H
k=H.a([$.aD,$.bo],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Hyperthermic"],p)
n=$.H
k=H.a([$.aD,$.as],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["Shackled"],p)
n=$.H
k=H.a([$.bg,$.c8],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.F1=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aR,$.Y,$.aW,$.a8],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.W,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bV,$.a4],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.Fq=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.as,$.bA],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["Tattered"],p)
n=$.H
k=H.a([$.Q,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.FF=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.aa,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.G1=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.b0],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.b0],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b0,$.aI,$.ar],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.Q,$.as],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bQ,$.aS],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.E,$.ar],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["Diseased"],p)
n=$.H
k=H.a([$.aD,$.bj],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aK,$.ce],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["Fanged"],p)
n=$.H
k=H.a([$.b0,$.aK],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.aw,$.am],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aW,$.am],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aW,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aW,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.En=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bQ,$.L],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aS,$.bS],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["Thorny"],p)
n=$.H
k=H.a([$.aS,$.aK],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.FH=o
o=H.a(["Bulbed"],p)
n=$.H
k=H.a([$.aS,$.ae],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aW,$.aJ],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aS,$.c9],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aS,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.aa,$.aZ],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bp,$.aa],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bp,$.a8,$.aa],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aS,$.ce],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["Necrotic"],p)
n=$.H
k=H.a([$.b0,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b0,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.H
k=H.a([$.b0,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b0,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b0,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b0,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.W,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.W,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.W,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.H
k=H.a([$.W,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.W,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.W,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.W,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.W,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.W,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.W,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ab
k=H.a([$.W,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.W,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.W,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.W,$.bj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.W,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aA,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.L,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.L,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.L,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.Q,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.aw,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.aw,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.aw,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.aw,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.aw,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.aw,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.aw,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.aw,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.H
k=H.a([$.aw,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.H
k=H.a([$.Y,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.H
k=H.a([$.Q,$.bj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.Q,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.Q,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.Q,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.Q,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.H
k=H.a([$.Q,$.c8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.Q,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.Q,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.Q,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.Q,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.Q,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.Q,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.Q,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.Q,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.Q,$.bw],l)
H.a([],p)
$.$get$b().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.Q,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.Q,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.Q,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.Q,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.Q,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ab
k=H.a([$.Y,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a4,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aS,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aA,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.P,$.T],l)
H.a([],p)
$.$get$b().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bf,$.aP,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bp,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bp,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ab
k=H.a([$.bp,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ab
k=H.a([$.a0,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ab
k=H.a([$.Y,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a0,$.aA,$.bm,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a0,$.dw,$.W,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ab
k=H.a([$.am,$.a4,$.bf,$.aF,$.aZ],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["Kingly"],p)
n=$.ab
k=H.a([$.aZ,$.ae,$.c8,$.a4,$.bf],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["Jack"],p)
n=$.ab
k=H.a([$.aK,$.av,$.E,$.am],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a0,$.aP,$.W,$.P,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a0,$.ax,$.L,$.E,$.Y,$.P],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a0,$.ax,$.L,$.Y,$.P,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a0,$.aD,$.L,$.Y,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ab
k=H.a([$.a0,$.aR,$.E,$.aK,$.av,$.fj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ab
k=H.a([$.a0,$.L,$.bw,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ab
k=H.a([$.a0,$.a4,$.Q,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ab
k=H.a([$.a0,$.aF,$.b0,$.E,$.fi,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ab
k=H.a([$.a0,$.aw,$.al,$.jB,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.H
k=H.a([$.a0,$.Q,$.bh,$.ay,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a0,$.E,$.bh,$.ay,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a0,$.aA,$.a8,$.am,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.a4,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.ay,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.H
k=$.a0
j=$.L
i=$.Y
i=H.a([k,j,i,$.ax,i,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a0,$.ay,$.bQ,$.ae,$.em,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ab
i=H.a([$.a0,$.ax,$.L,$.bw,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ab
i=H.a([$.a4,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.L,$.Y,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a0,$.E,$.am,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.H
i=H.a([$.a0,$.E,$.aW,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a0,$.aP,$.W,$.ap,$.bm,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a0,$.as,$.E,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a0,$.a8,$.L,$.ax,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a0,$.W,$.at,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ab
i=H.a([$.a0,$.bf,$.bA,$.aR,$.aa,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a0,$.aI,$.aW,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a0,$.aR,$.bW,$.aw,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ab
i=H.a([$.a0,$.aF,$.aw,$.al,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ab
i=H.a([$.a0,$.ar,$.bw,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ab
i=H.a([$.a0,$.E,$.aa,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a0,$.aW,$.c_,$.aR,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.E,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ab
i=H.a([$.E,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.E,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.E,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.H
i=H.a([$.E,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.H
i=H.a([$.E,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.E,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bQ,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bQ,$.c9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bQ,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bQ,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bQ,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bQ,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.H
i=H.a([$.bQ,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bQ,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.H
i=H.a([$.bQ,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bR,$.L],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.H
i=H.a([$.bR,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.H
i=H.a([$.bR,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bR,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.H
i=H.a([$.bR,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ab
i=H.a([$.bR,$.bw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bR,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bR,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bR,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ab
i=H.a([$.W,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.W,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.W,$.c9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.c9,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.H
i=H.a([$.c9,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.c9,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.L,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.L,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.aw,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.aw,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.aw,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bV,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bV,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bV,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bV,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bV,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bV,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bV,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bj,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bj,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bj,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.H
i=H.a([$.bj,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bp,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bp,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.H
i=H.a([$.bp,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bp,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.H
i=H.a([$.ce,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.ce,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ab
i=H.a([$.ce,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.ce,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aS,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.H
i=H.a([$.aS,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.aS,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.aS,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aS,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aS,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aS,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.H
i=H.a([$.aS,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.H
i=H.a([$.bA,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bA,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bA,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bA,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bA,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bA,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bA,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.uQ
i=H.a([$.bA,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.H
i=H.a([$.bA,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bS,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.av,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.av,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.aZ,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ar,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ar,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ar,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c8,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c8,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aJ,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aJ,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ab
i=H.a([$.aJ,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ab
i=H.a([$.aJ,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.H
i=H.a([$.aJ,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.H
i=H.a([$.aJ,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ab
i=H.a([$.aJ,$.bw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aJ,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aJ,$.c_],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aJ,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.H
i=H.a([$.aJ,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aR,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.aa,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bW,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bW,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ab
i=H.a([$.bW,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ab
i=H.a([$.aR,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.H
i=H.a([$.aR,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aR,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.H
i=H.a([$.aR,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ab
i=H.a([$.am,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.am,$.a4,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.H
i=H.a([$.am,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.am,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.am,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ab
i=H.a([$.am,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ab
i=H.a([$.bm,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bm,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bm,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c_],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.H
i=H.a([$.bN,$.c_],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.H
i=H.a([$.aD,$.c_],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.H
i=H.a([$.a8,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.H
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bq,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bq,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bq,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bq,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a8,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bq,$.bw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bq,$.aa],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.H
i=H.a([$.bq,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bq,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bo,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a4,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.H
i=H.a([$.a8,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bw,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bN,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bN,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bN,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.H
i=H.a([$.bN,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.H
i=H.a([$.bN,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bN,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.H
i=H.a([$.aa,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.aa,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.aa,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.aa,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ab
i=H.a([$.aa,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.aa,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.aa,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.aa,$.bw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.aa,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bw,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bw,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ab
i=H.a([$.Y,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bg,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bg,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.H
i=H.a([$.bg,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.ay,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.H
i=H.a([$.aY,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aY,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ar,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aB,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aB,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.H
i=H.a([$.at,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.at,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ab
i=H.a([$.aB,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.H
i=H.a([$.aB,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.H
i=H.a([$.aB,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.H
i=H.a([$.aB,$.aX,$.ax,$.jC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.H
i=H.a([$.ar,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.H
i=H.a([$.ar,$.a4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.H
i=H.a([$.ar,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.H
i=H.a([$.a4,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.H
i=H.a([$.ar,$.aV,$.a8,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.E,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b0,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.H
i=H.a([$.bR,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.W,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.H
i=H.a([$.c9,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.L,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.H
i=H.a([$.L,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ab
i=H.a([$.aW,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.H
i=H.a([$.bj,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.H
i=H.a([$.as,$.bp],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aB,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ab
i=H.a([$.aS,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.H
i=H.a([$.aI,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bf,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ab
i=H.a([$.bW,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.H
i=H.a([$.am,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.H
i=H.a([$.as,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.H
i=H.a([$.as,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.H
i=H.a([$.as,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.H
i=H.a([$.aD,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.H
i=H.a([$.bh,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.H
i=H.a([$.bh,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.H
i=H.a([$.bh,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.H
i=H.a([$.aF,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.H
i=H.a([$.aX,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.H
i=H.a([$.aB,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.H
i=H.a([$.a4,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.H
i=H.a([$.P,$.T,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.H
i=H.a([$.P,$.T,$.bf,$.aP,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.H
i=H.a([$.P,$.T,$.bf,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.H
i=H.a([$.aw,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.H
i=H.a([$.bA,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.H
i=H.a([$.aS,$.aZ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.H
i=H.a([$.a4,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.H
i=H.a([$.aZ,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.H
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.xU==null){o=$.mW
n=$.aK
l=$.av
k=$.b0
j=new U.aj(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a2(null,null,null,m),0,3)
j.L("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xU=j}o=$.$get$an();(o&&C.b).sm(o,0)
o=$.$get$an()
n=$.Q
l=$.xb
k=new U.aj(n,null,null,null,"Speedo",!1,P.a2(null,null,null,m),0,3)
k.L("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$an()
o=$.fj
n=$.av
l=$.E
j=$.aK
i=new U.aj(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a2(null,null,null,m),0,3)
i.L("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$an()
k=$.uC
o=$.ae
j=$.E
l=new U.aj(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a2(null,null,null,m),0,3)
l.L("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$an()
i=$.uM
k=$.aJ
j=$.E
o=new U.aj(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a2(null,null,null,m),0,3)
o.L("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$an()
l=$.uJ
i=$.aJ
j=$.E
k=new U.aj(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a2(null,null,null,m),0,3)
k.L("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$an()
o=$.xo
l=$.aJ
j=$.E
i=new U.aj(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a2(null,null,null,m),0,3)
i.L("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$an()
k=$.wZ
o=$.aK
j=$.av
l=$.E
n=new U.aj(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a2(null,null,null,m),0,3)
n.L("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$an()
i=$.ux
k=$.aK
l=$.av
j=$.E
o=new U.aj(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a2(null,null,null,m),0,3)
o.L("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$an()
n=$.hq
i=$.ae
j=$.bQ
l=new U.aj(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a2(null,null,null,m),0,3)
l.L("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$an()
o=$.xr
n=$.av
j=$.E
i=new U.aj(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a2(null,null,null,m),0,3)
i.L("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$an()
l=$.x1
o=$.av
j=$.E
n=new U.aj(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a2(null,null,null,m),0,3)
n.L("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$an()
i=$.x7
l=$.aK
j=$.E
o=new U.aj(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a2(null,null,null,m),0,3)
o.L("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$an()
n=$.uI
i=$.bA
j=$.bp
l=new U.aj(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a2(null,null,null,m),0,3)
l.L("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$an()
o=$.em
n=$.c8
j=$.aw
i=$.ae
k=new U.aj(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a2(null,null,null,m),0,3)
k.L("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$an()
l=$.uy
o=$.aA
i=$.bW
j=new U.aj(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a2(null,null,null,m),0,3)
j.L("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$an()
k=$.uH
l=$.E
i=$.aK
o=new U.aj(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a2(null,null,null,m),0,3)
o.L("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$an()
j=$.xt
k=$.W
i=$.ae
l=new U.aj(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a2(null,null,null,m),0,3)
l.L("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$an()
o=$.xv
j=$.bg
i=$.Q
k=new U.aj(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a2(null,null,null,m),0,3)
k.L("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$an()
l=$.uu
o=$.aJ
i=$.aw
j=$.Q
n=$.aK
h=new U.aj(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a2(null,null,null,m),0,3)
h.L("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$an()
k=$.jC
l=$.W
n=$.ae
j=new U.aj(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a2(null,null,null,m),0,3)
j.L("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$an()
h=$.jA
k=$.W
n=new U.aj(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a2(null,null,null,m),0,3)
n.L("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$an()
j=$.ax
h=$.L
k=$.ae
l=new U.aj(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a2(null,null,null,m),0,3)
l.L("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$an()
n=$.xl
j=$.E
k=$.ae
h=new U.aj(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a2(null,null,null,m),0,3)
h.L("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$an()
l=$.ut
n=$.av
k=$.E
j=$.ae
i=new U.aj(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a2(null,null,null,m),0,3)
i.L("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xg
l=$.W
j=$.aK
k=new U.aj(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a2(null,null,null,m),0,3)
k.L("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.fi
h=$.E
j=$.ae
l=new U.aj(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a2(null,null,null,m),0,3)
l.L("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.x0
i=$.W
j=$.ae
h=new U.aj(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a2(null,null,null,m),0,3)
h.L("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xw
k=$.aA
j=$.ae
i=new U.aj(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a2(null,null,null,m),0,3)
i.L("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xs
l=$.W
j=$.aJ
k=new U.aj(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a2(null,null,null,m),0,3)
k.L("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xq
h=$.E
j=$.av
l=new U.aj(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a2(null,null,null,m),0,3)
l.L("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uF
i=$.E
j=$.aJ
h=new U.aj(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a2(null,null,null,m),0,3)
h.L("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.mX
k=$.E
j=$.bq
i=new U.aj(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a2(null,null,null,m),0,3)
i.L("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.em
l=$.c9
j=$.ae
k=new U.aj(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a2(null,null,null,m),0,3)
k.L("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xu
h=$.E
j=$.aK
l=new U.aj(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a2(null,null,null,m),0,3)
l.L("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.mV
i=$.L
j=$.av
h=new U.aj(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a2(null,null,null,m),0,3)
h.L("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.uz
k=$.E
j=$.ae
i=new U.aj(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a2(null,null,null,m),0,3)
i.L("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.en
l=$.aY
j=$.Q
k=new U.aj(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a2(null,null,null,m),0,3)
k.L("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.hp
h=$.E
j=$.bg
l=new U.aj(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a2(null,null,null,m),0,3)
l.L("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uP
i=$.E
j=$.ae
h=new U.aj(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a2(null,null,null,m),0,3)
h.L("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xp
k=$.E
j=$.ae
i=new U.aj(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a2(null,null,null,m),0,3)
i.L("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.uO
l=$.W
j=$.ae
k=new U.aj(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a2(null,null,null,m),0,3)
k.L("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.uK
h=$.W
j=$.aD
l=new U.aj(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a2(null,null,null,m),0,3)
l.L("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uL
i=$.E
j=$.av
h=new U.aj(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a2(null,null,null,m),0,3)
h.L("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.mZ
k=$.E
j=$.Y
i=new U.aj(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a2(null,null,null,m),0,3)
i.L("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.jB
l=$.aw
j=$.c8
k=new U.aj(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a2(null,null,null,m),0,3)
k.L("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xa
h=$.W
j=$.ae
l=new U.aj(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a2(null,null,null,m),0,3)
l.L("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.xf
i=$.E
j=$.av
h=new U.aj(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a2(null,null,null,m),0,3)
h.L("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xn
k=$.E
j=$.av
i=new U.aj(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a2(null,null,null,m),0,3)
i.L("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xm
l=$.E
j=$.c8
k=new U.aj(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a2(null,null,null,m),0,3)
k.L("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.dw
h=$.W
j=$.ae
m=new U.aj(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a2(null,null,null,m),0,3)
m.L("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bI("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.wI=m
m=new S.bI("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.ui=m
m=new S.bI("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.e2=m
m=new S.bI("Iguana","thip",null,null)
$.$get$bP().push(m)
$.ej=m
m=new S.bI("Turtle","click",null,null)
$.$get$bP().push(m)
$.fa=m
m=new S.bI("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dN=m
m=new S.bI("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f8=m
m=new S.bI("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.iI=m
m=new S.bI("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.uc=m
m=new S.bI("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.mh=m
m=new S.bI("Snake","hiss",null,null)
$.$get$bP().push(m)
$.uk=m
m=new S.bI("Alligator","nak",null,null)
$.$get$bP().push(m)
$.iH=m
m=new S.bI("Mole","snuff",null,null)
$.$get$bP().push(m)
$.wJ=m
m=new S.bI("Bird","tweet",null,null)
$.$get$bP().push(m)
$.mg=m
m=new S.bI("Wolf","howl",null,null)
$.$get$bP().push(m)
$.mn=m
m=new S.bI("Newt","skitter",null,null)
$.$get$bP().push(m)
$.wK=m
m=new S.bI("Spider","skitter",null,null)
$.$get$bP().push(m)
$.iO=m
m=new S.bI("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.iJ=m
m=new S.bI("Dragon","roar",null,null)
$.$get$bP().push(m)
$.hc=m
m=new S.io("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.Ax=m
m=new S.io("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.Au=m
m=new S.mH("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.Aw=m
$.Ay=H.a([$.uk,$.iH,$.wK,$.ui,$.ej,$.e2,$.fa,$.iI,$.uc,$.mh],[S.bI])
$.hh=new T.c0(0,"spices")
m=$.AA
$.f5=new T.c0(m,"fresh baked bread")
$.cx=new T.c0(m,"sweetness")
$.c6=new T.c0(m,"nature")
$.mm=new T.c0(0,"salt")
k=$.Az
$.d3=new T.c0(k,"rot")
$.Av=new T.c0(k,"feet")
$.f7=new T.c0(0,"oil")
$.ue=new T.c0(0,"chlorine")
$.hf=new T.c0(0,"nothing in particular")
$.ei=new T.c0(0,"gunpowder")
$.he=new T.c0(0,"must")
$.cD=new T.c0(m,"zoo animals")
$.e3=new T.c0(k,"sweat")
$.iN=new T.c0(0,"ozone")
$.c5=new T.c0(0,"deceit")
$.dh=new T.c0(k,"blood")
$.f9=new T.c0(k,"smoke")
$.bY=new K.bU(k,"creepy")
$.aO=new K.bU(m,"calm")
$.cc=new K.bU(k,"frantic")
$.mj=new K.bU(0,"like nothing")
$.cb=new K.bU(m,"energizing")
$.cC=new K.bU(0,"studious")
$.dt=new K.bU(0,"dangerous")
$.dK=new K.bU(0,"glamorous")
$.hg=new K.bU(0,"romantic")
$.ds=new K.bU(m,"creative")
$.mi=new K.bU(0,"lucky")
$.du=new K.bU(0,"happy")
$.dL=new K.bU(0,"heroic")
$.d4=new K.bU(k,"stupid")
$.mi=new K.bU(0,"lucky")
$.wH=new K.bU(0,"claustrophobic")
$.mk=new K.bU(0,"overheated")
$.eh=new K.bU(k,"confusing")
$.cv=new K.bU(0,"contemplatative")
$.cU=new M.bC(0,"clanking")
$.cw=new M.bC(0,"laughing")
$.be=new M.bC(m,"rustling")
$.el=new M.bC(k,"screaming")
$.iL=new M.bC(k,"foot steps")
$.f6=new M.bC(k,"beeping")
$.wM=new M.bC(k,"whispering")
$.eg=new M.bC(0,"clacking")
$.cA=new M.bC(0,"applause")
$.ek=new M.bC(0,"jazz")
$.ug=new M.bC(0,"disco")
$.hd=new M.bC(0,"drums")
$.iK=new M.bC(0,"echoing")
$.ml=new M.bC(k,"roaring")
$.iM=new M.bC(k,"gunfire")
$.cB=new M.bC(0,"music")
$.uj=new M.bC(0,"singing")
$.ud=new M.bC(0,"chanting")
$.fb=new M.bC(0,"whistling")
$.di=new M.bC(m,"nature")
$.uf=new M.bC(0,"croaking")
$.dM=new M.bC(0,"silence")
$.uh=new M.bC(0,"pulsing")
$.wL=new M.bC(0,"ticking")
m=H.a([],p)
o=[X.G,P.V]
n=A.a3
l=E.O
k=[l]
j=[A.fV]
m=new S.nj(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Knight",3,!0,!1,!1)
$.GX=m
m=P.l(H.a([new E.O($.ci,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oW(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Seer",6,!0,!1,!1)
$.H8=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.l4("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Bard",9,!0,!1,!1)
$.GS=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mE("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Heir",8,!0,!1,!1)
$.GV=m
m=H.a([],p)
m=new U.nD(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Maid",0,!0,!1,!1)
$.H_=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.oM(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Rogue",4,!0,!1,!1)
$.H4=m
m=H.a([],p)
m=new V.og(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Page",1,!0,!1,!1)
$.H2=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pT(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Thief",7,!0,!1,!1)
$.Hb=m
m=P.l(H.a([new E.O($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pH(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sylph",5,!0,!1,!1)
$.Ha=m
m=H.a([],p)
m=new N.oA("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Prince",10,!0,!1,!1)
$.H3=m
m=P.l(H.a([new E.O($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new M.qn("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Witch",11,!0,!1,!1)
$.Hd=m
m=P.l(H.a([new E.O($.ci,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nC("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Mage",2,!0,!1,!1)
$.GZ=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.O($.ci,3,!1),new E.O($.vE,-2,!1)],k),l)
e=H.a([],p)
m=new E.qj("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Waste",12,!1,!1,!1)
$.Hc=m
m=H.a([],p)
m=new Y.oT("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scout",13,!1,!1,!1)
$.H6=m
m=P.l(H.a([new E.O($.ci,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oU("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scribe",15,!1,!1,!1)
$.H7=m
m=P.l(H.a([new E.O($.ci,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oR(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sage",14,!1,!1,!1)
$.H5=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mC("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Guide",16,!1,!1,!1)
$.GU=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.O($.ci,3,!1)],k),l)
g=H.a([],p)
m=new Y.mB(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Grace",17,!1,!1,!1)
$.GT=m
m=P.l(H.a([new E.O($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nR("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Muse",18,!1,!1,!1)
$.H0=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.O($.ci,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nA("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Lord",19,!1,!1,!1)
$.GY=m
m=P.l(H.a([new E.O($.ci,-0.1,!1),new E.O($.dA,1,!1)],k),l)
i=H.a([],p)
m=new Y.p4("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Smith",20,!1,!1,!1)
$.H9=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.l(H.a([new E.O($.ci,4,!1),new E.O($.vE,-3,!1)],k),l)
e=H.a([],p)
m=new X.mL("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.w(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Human",21,!1,!1,!0)
$.GW=m
$.H1=T.GR("Null",255,!1,!0,!1)
m=A.e_
i=P.D
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.b4,L.e("#EFEFEF"),!0)
h.j(0,$.b3,L.e("#DEDEDE"),!0)
h.j(0,$.bd,L.e("#FF2106"),!0)
h.j(0,$.bc,L.e("#B01200"),!0)
h.j(0,$.b6,L.e("#2F2F30"),!0)
h.j(0,$.b7,L.e("#1D1D1D"),!0)
h.j(0,$.b5,L.e("#080808"),!0)
h.j(0,$.bb,L.e("#030303"),!0)
h.j(0,$.ba,L.e("#242424"),!0)
h.j(0,$.b9,L.e("#333333"),!0)
h.j(0,$.b8,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.O($.dA,2,!0),new E.O($.eC,1,!0),new E.O($.hU,-2,!0)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new N.p7(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(0,"Space",!0,!1,!1)
$.zU=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff0000"),!0)
a.j(0,$.b4,L.e("#FF2106"),!0)
a.j(0,$.b3,L.e("#AD1604"),!0)
a.j(0,$.bd,L.e("#030303"),!0)
a.j(0,$.bc,L.e("#242424"),!0)
a.j(0,$.b6,L.e("#510606"),!0)
a.j(0,$.b7,L.e("#3C0404"),!0)
a.j(0,$.b5,L.e("#1F0000"),!0)
a.j(0,$.bb,L.e("#B70D0E"),!0)
a.j(0,$.ba,L.e("#970203"),!0)
a.j(0,$.b9,L.e("#8E1516"),!0)
a.j(0,$.b8,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.O($.hT,2,!0),new E.O($.hU,1,!0),new E.O($.fw,-2,!0)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new N.pU(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(1,"Time",!0,!1,!1)
$.zV=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#3399ff"),!0)
h.j(0,$.b4,L.e("#10E0FF"),!0)
h.j(0,$.b3,L.e("#00A4BB"),!0)
h.j(0,$.bd,L.e("#FEFD49"),!0)
h.j(0,$.bc,L.e("#D6D601"),!0)
h.j(0,$.b6,L.e("#0052F3"),!0)
h.j(0,$.b7,L.e("#0046D1"),!0)
h.j(0,$.b5,L.e("#003396"),!0)
h.j(0,$.bb,L.e("#0087EB"),!0)
h.j(0,$.ba,L.e("#0070ED"),!0)
h.j(0,$.b9,L.e("#006BE1"),!0)
h.j(0,$.b8,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.O($.hU,2,!0),new E.O($.d9,1,!0),new E.O($.eC,-1,!0),new E.O($.eD,-1,!0),new E.O($.ci,0.05,!1)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new T.lc(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(2,"Breath",!0,!1,!1)
$.zH=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#003300"),!0)
a.j(0,$.b4,L.e("#0F0F0F"),!0)
a.j(0,$.b3,L.e("#010101"),!0)
a.j(0,$.bd,L.e("#E8C15E"),!0)
a.j(0,$.bc,L.e("#C7A140"),!0)
a.j(0,$.b6,L.e("#1E211E"),!0)
a.j(0,$.b7,L.e("#141614"),!0)
a.j(0,$.b5,L.e("#0B0D0B"),!0)
a.j(0,$.bb,L.e("#204020"),!0)
a.j(0,$.ba,L.e("#11200F"),!0)
a.j(0,$.b9,L.e("#192C16"),!0)
a.j(0,$.b8,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.O($.dA,2,!0),new E.O($.fw,1,!0),new E.O($.hT,-1,!0),new E.O($.eC,-1,!0),new E.O($.ci,0.01,!1)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new U.lK(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(3,"Doom",!0,!1,!1)
$.zI=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#993300"),!0)
h.j(0,$.b4,L.e("#BA1016"),!0)
h.j(0,$.b3,L.e("#820B0F"),!0)
h.j(0,$.bd,L.e("#381B76"),!0)
h.j(0,$.bc,L.e("#1E0C47"),!0)
h.j(0,$.b6,L.e("#290704"),!0)
h.j(0,$.b7,L.e("#230200"),!0)
h.j(0,$.b5,L.e("#110000"),!0)
h.j(0,$.bb,L.e("#3D190A"),!0)
h.j(0,$.ba,L.e("#2C1207"),!0)
h.j(0,$.b9,L.e("#5C2913"),!0)
h.j(0,$.b8,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.O($.eD,2,!0),new E.O($.d9,1,!0),new E.O($.dA,-2,!0)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new T.la(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(4,"Blood",!0,!1,!1)
$.zG=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff3399"),!0)
a.j(0,$.b4,L.e("#BD1864"),!0)
a.j(0,$.b3,L.e("#780F3F"),!0)
a.j(0,$.bd,L.e("#1D572E"),!0)
a.j(0,$.bc,L.e("#11371D"),!0)
a.j(0,$.b6,L.e("#4C1026"),!0)
a.j(0,$.b7,L.e("#3C0D1F"),!0)
a.j(0,$.b5,L.e("#260914"),!0)
a.j(0,$.bb,L.e("#6B0829"),!0)
a.j(0,$.ba,L.e("#4A0818"),!0)
a.j(0,$.b9,L.e("#55142A"),!0)
a.j(0,$.b8,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.O($.eD,1,!0),new E.kY(null,1,!0)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new T.mD(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(5,"Heart",!0,!1,!1)
$.zK=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#3da35a"),!0)
h.j(0,$.b4,L.e("#06FFC9"),!0)
h.j(0,$.b3,L.e("#04A885"),!0)
h.j(0,$.bd,L.e("#6E0E2E"),!0)
h.j(0,$.bc,L.e("#4A0818"),!0)
h.j(0,$.b6,L.e("#1D572E"),!0)
h.j(0,$.b7,L.e("#164524"),!0)
h.j(0,$.b5,L.e("#11371D"),!0)
h.j(0,$.bb,L.e("#3DA35A"),!0)
h.j(0,$.ba,L.e("#2E7A43"),!0)
h.j(0,$.b9,L.e("#3B7E4F"),!0)
h.j(0,$.b8,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.O($.fw,2,!0),new E.O($.hT,1,!0),new E.O($.dA,-2,!0)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new V.nQ(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(6,"Mind",!0,!1,!1)
$.zQ=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#ff9933"),!0)
a.j(0,$.b4,L.e("#FEFD49"),!0)
a.j(0,$.b3,L.e("#FEC910"),!0)
a.j(0,$.bd,L.e("#10E0FF"),!0)
a.j(0,$.bc,L.e("#00A4BB"),!0)
a.j(0,$.b6,L.e("#FA4900"),!0)
a.j(0,$.b7,L.e("#E94200"),!0)
a.j(0,$.b5,L.e("#C33700"),!0)
a.j(0,$.bb,L.e("#FF8800"),!0)
a.j(0,$.ba,L.e("#D66E04"),!0)
a.j(0,$.b9,L.e("#E76700"),!0)
a.j(0,$.b8,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.O($.hS,2,!0),new E.O($.fw,1,!0),new E.O($.d9,-1,!0),new E.O($.eC,-1,!0),new E.O($.ci,0.2,!1)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new G.nn(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(7,"Light",!0,!1,!1)
$.zP=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#000066"),!0)
h.j(0,$.b4,L.e("#0B1030"),!0)
h.j(0,$.b3,L.e("#04091A"),!0)
h.j(0,$.bd,L.e("#CCC4B5"),!0)
h.j(0,$.bc,L.e("#A89F8D"),!0)
h.j(0,$.b6,L.e("#00164F"),!0)
h.j(0,$.b7,L.e("#00103C"),!0)
h.j(0,$.b5,L.e("#00071A"),!0)
h.j(0,$.bb,L.e("#033476"),!0)
h.j(0,$.ba,L.e("#02285B"),!0)
h.j(0,$.b9,L.e("#004CB2"),!0)
h.j(0,$.b8,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fQ(D.vF(),null,3,!0),new E.fQ(D.vF(),null,-1,!0),new E.O($.hT,-1,!0),new E.O($.ci,0.2,!1)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new Q.qi(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(8,"Void",!0,!1,!1)
$.zW=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#9900cc"),!0)
a.j(0,$.b4,L.e("#974AA7"),!0)
a.j(0,$.b3,L.e("#6B347D"),!0)
a.j(0,$.bd,L.e("#3D190A"),!0)
a.j(0,$.bc,L.e("#2C1207"),!0)
a.j(0,$.b6,L.e("#7C3FBA"),!0)
a.j(0,$.b7,L.e("#6D34A6"),!0)
a.j(0,$.b5,L.e("#592D86"),!0)
a.j(0,$.bb,L.e("#381B76"),!0)
a.j(0,$.ba,L.e("#1E0C47"),!0)
a.j(0,$.b9,L.e("#281D36"),!0)
a.j(0,$.b8,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.O($.hV,2,!0),new E.O($.hU,1,!0),new E.O($.d9,-1,!0),new E.O($.eD,-1,!0),new E.O($.ci,0.01,!1)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new E.oD(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(9,"Rage",!0,!1,!1)
$.zS=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#ffcc66"),!0)
h.j(0,$.b4,L.e("#FDF9EC"),!0)
h.j(0,$.b3,L.e("#D6C794"),!0)
h.j(0,$.bd,L.e("#164524"),!0)
h.j(0,$.bc,L.e("#06280C"),!0)
h.j(0,$.b6,L.e("#FFC331"),!0)
h.j(0,$.b7,L.e("#F7BB2C"),!0)
h.j(0,$.b5,L.e("#DBA523"),!0)
h.j(0,$.bb,L.e("#FFE094"),!0)
h.j(0,$.ba,L.e("#E8C15E"),!0)
h.j(0,$.b9,L.e("#F6C54A"),!0)
h.j(0,$.b8,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.O($.d9,2,!0),new E.O($.hS,1,!0),new E.fQ(D.vF(),null,-2,!0)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new X.mG(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(10,"Hope",!0,!1,!1)
$.zL=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#494132"),!0)
a.j(0,$.b4,L.e("#76C34E"),!0)
a.j(0,$.b3,L.e("#4F8234"),!0)
a.j(0,$.bd,L.e("#00164F"),!0)
a.j(0,$.bc,L.e("#00071A"),!0)
a.j(0,$.b6,L.e("#605542"),!0)
a.j(0,$.b7,L.e("#494132"),!0)
a.j(0,$.b5,L.e("#2D271E"),!0)
a.j(0,$.bb,L.e("#CCC4B5"),!0)
a.j(0,$.ba,L.e("#A89F8D"),!0)
a.j(0,$.b9,L.e("#A29989"),!0)
a.j(0,$.b8,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.O($.eC,2,!0),new E.O($.hV,1,!0),new E.O($.dA,-2,!0)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new K.nm(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(11,"Life",!0,!1,!1)
$.zO=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#9630BF"),!0)
h.j(0,$.b4,L.e("#cc87e8"),!0)
h.j(0,$.b3,L.e("#9545b7"),!0)
h.j(0,$.bd,L.e("#ae769b"),!0)
h.j(0,$.bc,L.e("#8f577c"),!0)
h.j(0,$.b6,L.e("#9630bf"),!0)
h.j(0,$.b7,L.e("#693773"),!0)
h.j(0,$.b5,L.e("#4c2154"),!0)
h.j(0,$.bb,L.e("#fcf9bd"),!0)
h.j(0,$.ba,L.e("#e0d29e"),!0)
h.j(0,$.b9,L.e("#bdb968"),!0)
h.j(0,$.b8,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.O($.dA,3,!0),new E.O($.d9,-2,!0)],k),l)
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b3,L.e("#FF8700"),!0)
a.j(0,$.bd,L.e("#7F7F7F"),!0)
a.j(0,$.bc,L.e("#727272"),!0)
a.j(0,$.b6,L.e("#A3A3A3"),!0)
a.j(0,$.b7,L.e("#999999"),!0)
a.j(0,$.b5,L.e("#898989"),!0)
a.j(0,$.bb,L.e("#EFEFEF"),!0)
a.j(0,$.ba,L.e("#DBDBDB"),!0)
a.j(0,$.b9,L.e("#C6C6C6"),!0)
a.j(0,$.b8,L.e("#ADADAD"),!0)
a=new Z.lL(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ao(12,"Dream",!1,!1,!1)
$.zJ=a
a=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
a.j(0,$.b2,L.e("#9630BF"),!0)
a.j(0,$.b4,L.e("#cc87e8"),!0)
a.j(0,$.b3,L.e("#9545b7"),!0)
a.j(0,$.bd,L.e("#ae769b"),!0)
a.j(0,$.bc,L.e("#8f577c"),!0)
a.j(0,$.b6,L.e("#9630bf"),!0)
a.j(0,$.b7,L.e("#693773"),!0)
a.j(0,$.b5,L.e("#4c2154"),!0)
a.j(0,$.bb,L.e("#fcf9bd"),!0)
a.j(0,$.ba,L.e("#e0d29e"),!0)
a.j(0,$.b9,L.e("#bdb968"),!0)
a.j(0,$.b8,L.e("#ab9b55"),!0)
b=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.l(H.a([new E.O($.dA,3,!0),new E.O($.d9,-2,!0)],k),l)
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b3,L.e("#FF8700"),!0)
h.j(0,$.bd,L.e("#7F7F7F"),!0)
h.j(0,$.bc,L.e("#727272"),!0)
h.j(0,$.b6,L.e("#A3A3A3"),!0)
h.j(0,$.b7,L.e("#999999"),!0)
h.j(0,$.b5,L.e("#898989"),!0)
h.j(0,$.bb,L.e("#EFEFEF"),!0)
h.j(0,$.ba,L.e("#DBDBDB"),!0)
h.j(0,$.b9,L.e("#C6C6C6"),!0)
h.j(0,$.b8,L.e("#ADADAD"),!0)
h=new Q.nk(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ao(13,"Law",!1,!1,!0)
$.zN=h
h=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
h.j(0,$.b2,L.e("#ffff00"),!0)
h.j(0,$.b4,L.e("#ffff00"),!0)
h.j(0,$.b3,L.e("#ffff00"),!0)
h.j(0,$.bd,L.e("#508b2d"),!0)
h.j(0,$.bc,L.e("#316c0d"),!0)
h.j(0,$.b6,L.e("#dddd00"),!0)
h.j(0,$.b7,L.e("#afaf00"),!0)
h.j(0,$.b5,L.e("#8f8f00"),!0)
h.j(0,$.bb,L.e("#ff0000"),!0)
h.j(0,$.ba,L.e("#a8000a"),!0)
h.j(0,$.b9,L.e("#b8151f"),!0)
h.j(0,$.b8,L.e("#8c1d1d"),!0)
g=P.l(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.l(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.l(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.l(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.l(H.a([new E.O($.ci,13,!0)],k),l)
b=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
b.j(0,$.b2,L.e("#FF9B00"),!0)
b.j(0,$.b4,L.e("#FF9B00"),!0)
b.j(0,$.b3,L.e("#FF8700"),!0)
b.j(0,$.bd,L.e("#7F7F7F"),!0)
b.j(0,$.bc,L.e("#727272"),!0)
b.j(0,$.b6,L.e("#A3A3A3"),!0)
b.j(0,$.b7,L.e("#999999"),!0)
b.j(0,$.b5,L.e("#898989"),!0)
b.j(0,$.bb,L.e("#EFEFEF"),!0)
b.j(0,$.ba,L.e("#DBDBDB"),!0)
b.j(0,$.b9,L.e("#C6C6C6"),!0)
b.j(0,$.b8,L.e("#ADADAD"),!0)
b=new Z.ng(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ao(14,"Juice",!1,!1,!0)
$.zM=b
b=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
b.j(0,$.b2,L.e("#00ff00"),!0)
b.j(0,$.b4,L.e("#00ff00"),!0)
b.j(0,$.b3,L.e("#00ff00"),!0)
b.j(0,$.bd,L.e("#00ff00"),!0)
b.j(0,$.bc,L.e("#00cf00"),!0)
b.j(0,$.b6,L.e("#171717"),!0)
b.j(0,$.b7,L.e("#080808"),!0)
b.j(0,$.b5,L.e("#080808"),!0)
b.j(0,$.bb,L.e("#616161"),!0)
b.j(0,$.ba,L.e("#3b3b3b"),!0)
b.j(0,$.b9,L.e("#4a4a4a"),!0)
b.j(0,$.b8,L.e("#292929"),!0)
c=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.O($.hV,13,!0)],k),l)
m=new L.aU(P.F(null,null,null,q,m),P.F(null,null,null,i,m),P.F(null,null,null,q,i),P.F(null,null,null,i,q))
m.j(0,$.b2,L.e("#FF9B00"),!0)
m.j(0,$.b4,L.e("#FF9B00"),!0)
m.j(0,$.b3,L.e("#FF8700"),!0)
m.j(0,$.bd,L.e("#7F7F7F"),!0)
m.j(0,$.bc,L.e("#727272"),!0)
m.j(0,$.b6,L.e("#A3A3A3"),!0)
m.j(0,$.b7,L.e("#999999"),!0)
m.j(0,$.b5,L.e("#898989"),!0)
m.j(0,$.bb,L.e("#EFEFEF"),!0)
m.j(0,$.ba,L.e("#DBDBDB"),!0)
m.j(0,$.b9,L.e("#C6C6C6"),!0)
m.j(0,$.b8,L.e("#ADADAD"),!0)
j=new K.oS(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ao(15,"Sauce",!1,!0,!1)
$.zT=j
$.zR=L.zF(255,"Null",!1,!0,!1)
j=P.l(H.a([new E.O($.d9,1,!0),new E.O($.hS,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
g=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
f=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
d=P.l(H.a([],k),l)
c=H.a(["Nobody"],p)
b=H.a(["Nobody"],p)
q=new F.nS(j,q,m,g,f,!1,e,d,c,b,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cL(q)
$.AU=q
q=P.l(H.a([new E.O($.fw,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kU(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cL(q)
$.AN=q
q=P.l(H.a([new E.O($.hV,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kZ(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cL(q)
$.AO=q
q=P.l(H.a([new E.O($.hT,-1,!0),new E.O($.hS,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.ll(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cL(q)
$.AP=q
q=P.l(H.a([new E.O($.d9,-1,!0),new E.O($.eC,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lz(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cL(q)
$.AQ=q
q=P.l(H.a([new E.O($.d9,1,!0),new E.O($.eD,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lJ(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cL(q)
$.AR=q
q=P.l(H.a([new E.O($.hS,1,!0),new E.O($.dA,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.me(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cL(q)
$.AS=q
q=P.l(H.a([new E.O($.hV,1,!0),new E.O($.eC,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.nh(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cL(q)
$.AT=q
q=P.l(H.a([new E.O($.hU,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.ov(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cL(q)
$.AW=q
q=P.l(H.a([new E.O($.eD,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oN(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cL(q)
$.AX=q
q=P.l(H.a([new E.O($.d9,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.p5(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cL(q)
$.AY=q
q=P.l(H.a([new E.O($.eD,-1,!0),new E.O($.d9,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pN(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cL(q)
$.B_=q
q=P.l(H.a([new E.O($.fw,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.qs(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cL(q)
$.B0=q
q=P.l(H.a([new E.O($.dA,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pM(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cL(q)
$.AZ=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.ho(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.E()
q.F()
B.cL(q)
$.AV=q
A.xE()
t=3
return P.cr(Y.nT(),$async$tw)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$tw,s)}},B={
lp:function(){var t=0,s=P.bn(),r
var $async$lp=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cr(W.uq(C.c.ak("../",N.om())+"BigBadLists/contestEntrants.txt",null,null).b1(new B.lq()),$async$lp)
case 3:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$lp,s)},
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lq:function lq(){},
mE:function mE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.D=D
_.J=J
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
cL:function(a){if($.$get$mR().a_(0,a.f))throw H.j("Duplicate aspect id for "+a.B(0)+": "+a.f+" is already registered for "+J.cu($.$get$mR().n(0,a.f))+".")
$.$get$mR().i(0,a.f,a)},
ho:function ho(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qx:function qx(a){this.a=a},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
I1:function(a){return a.bk(0)},
dC:function dC(a){this.a=a},
km:function km(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i3:function i3(a,b){this.a=a
this.b=b}},V={lJ:function lJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mv:function mv(a){this.a=a},nQ:function nQ(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},og:function og(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},pN:function pN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
As:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
s=Math.pow(256,e)
c.toString
r=H.cM(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.am(n-1,p)
t.am(a,8)}return t.bc(b)},
Ar:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.dZ(a,b)
for(q=e*8,p=0;p<c;){o=r.ac(q)+1
n=r.ac(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
u7:function(a){return new V.lT(a)},
u6:function(a){return new V.lS(a)},
Ao:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kJ(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cM(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.am(m-1,o)
t.am(a,r)}return t.bc(b)},
An:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.dZ(a,b)
for(r=e*8,o=0;o<c;){n=p.ac(r)+1
m=p.ac(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
u5:function(a){return new V.lR(a)},
u4:function(a){return new V.lQ(a)},
Aq:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kJ(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cM(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ap(Math.log(n)/0.6931471805599453)+1
t.am(k-1,5)
t.am(n-1,k)
t.am(a,r)}return t.bc(b)},
Ap:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.ac(p.ac(5)+1)+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lT:function lT(a){this.a=a},
lS:function lS(a){this.a=a},
lR:function lR(a){this.a=a},
lQ:function lQ(a){this.a=a}},Z={lL:function lL(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
AC:function(){var t,s
if(!$.wN)$.wN=!0
else return
t=[P.x]
s=new Y.pO(H.a([],t))
$.um=s
Z.cK(s,"txt",null)
Z.cK($.um,"vert","x-shader/x-vertex")
Z.cK($.um,"frag","x-shader/x-fragment")
$.AB=new Y.oF(H.a([],t))
$.wP=new Y.le(H.a([],t))
s=new B.qx(H.a([],t))
$.wR=s
Z.cK(s,"zip",null)
Z.cK($.wR,"bundle",null)
s=new U.qo(H.a([],t))
$.AK=s
Z.cK(s,"words",null)
s=new Q.os(H.a([],t))
$.wQ=s
Z.cK(s,"png",null)
Z.cK($.wQ,"jpg","image/jpeg")
$.AI=new Q.op(H.a([],t))
s=new M.pb(H.a([],t))
$.AJ=s
Z.cK(s,"psprite",null)
s=new V.mv(H.a([],t))
$.ul=s
Z.cK(s,"ttf",null)
Z.cK($.ul,"otf",null)
Z.cK($.ul,"woff",null)
s=new Y.o6(null,H.a([],t))
$.AF=s
Z.cK(s,"obj",null)
s=new U.nB(H.a([],t))
$.AD=s
Z.cK(s,"mp3",null)
$.AE=new U.py(H.a([],t))
s=new U.ob(H.a([],t))
$.AG=s
Z.cK(s,"ogg",null)
$.AH=new U.pz(H.a([],t))},
cK:function(a,b,c){$.$get$mx().i(0,b,new Z.iF(a,c,[null,null]))
a.a.push(b)},
wO:function(a){var t
if($.$get$mx().a_(0,a)){t=$.$get$mx().n(0,a)
if(t.a instanceof O.c7)return t
throw H.j("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.j("No file format found for extension ."+H.y(a))},
iF:function iF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ng:function ng(y1,y2,p,q,t,u,v,w,A,C,D,J,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
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
nA:function nA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
uY:function uY(){},
uT:function uT(){},
uU:function uU(){}},X={iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},im:function im(){},mG:function mG(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},mL:function mL(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={a9:function a9(){},nh:function nh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oA:function oA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},oM:function oM(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},p5:function p5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},p7:function p7(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},pU:function pU(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
Gs:function(a){var t,s,r,q,p,o,n,m,l
t=J.cu(a)
s=new W.ku(document.querySelectorAll("link"),[null])
for(r=new H.es(s,s.gm(s),0,null,[null]);r.G();){q=r.d
p=J.ai(q)
if(!!p.$ishx&&q.rel==="stylesheet"){o=$.$get$on()
H.y(p.gaa(q))
o.toString
o=t.length
n=Math.min(o,J.c4(p.gaa(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.d1(p.gaa(q),m)){l=C.c.al(t,m)
$.$get$on().toString
return l.split("/").length-1}continue}}}$.$get$on().bj(C.m,"Didn't find a css link to derive relative path")
return 0},
om:function(){var t=P.ya()
if(!$.$get$ol().a_(0,t))$.$get$ol().i(0,t,N.Gs(t))
return $.$get$ol().n(0,t)}},Q={mO:function mO(){},os:function os(a){this.a=a},op:function op(a){this.a=a},nk:function nk(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,ag,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
_.ag=ag
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
_.ch=ch},qi:function qi(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},k_:function k_(){},
J:function(a,b,c){var t=new Q.dV(null,null,[c])
t.dv(a,b,c)
return t},
vR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dX(a,"$isn",[e],"$asn"))if(H.dX(a,"$iscP",[e],"$ascP"))for(s=J.cI(a.gc8()),r=0;s.G();){q=s.gS()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gY(a),p=[H.N(t,0)],r=0;s.G();){n=s.gS()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gY(a),p=[e],o=[H.N(t,0)];s.G();){l=s.gS()
if(H.Ik(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dX(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.j("Invalid entry type "+H.y(J.we(l))+" for WeightedList<"+H.y(H.bX(H.dF(e)))+">. Should be "+H.y(H.bX(H.dF(e)))+" or WeightPair<"+H.y(H.bX(H.dF(e)))+">.")}return t},
vS:function(a,b,c,d){return new Q.kj(J.wg(a.gc8(),new Q.qm(c,d,b)),null,[c,d])},
cP:function cP(){},
dV:function dV(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i2:function i2(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eL:function eL(){},
i1:function i1(){},
ql:function ql(a,$ti){this.a=a
this.$ti=$ti},
kj:function kj(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function(){var t=0,s=P.bn(),r
var $async$oV=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cr(A.hA("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oV)
case 3:r=A.hA("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$oV,s)}},G={nn:function nn(y1,y2,p,q,t,u,v,w,A,C,D,J,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.C=C
_.D=D
_.J=J
_.M=M
_.O=O
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
_.x2=x2},ov:function ov(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
A4:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.jK(a,t)
r=P.a2(null,null,null,t)
q=H.a([],[G.d])
for(t=G.G5(),p=J.cI(t.a),t=new H.kk(p,t.b,[H.N(t,0)]);t.G();){o=p.gS()
if(o.eR(s))q.push(o)}C.b.fd(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c3)(q),++n){o=q[n]
if(o.eR(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.c3)(p),++l)s.as(0,p[l])}}if(s.a!==0)r.aD(0,s)
return r},
G5:function(){var t=$.$get$b()
t.toString
return new H.eJ(t,new G.n2(),[H.N(t,0)])},
a1:function a1(){},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
n2:function n2(){}},F={nS:function nS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qs:function qs(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gb:function(a){if(a===C.h){window
return C.i.gav(C.i)}if(a===C.m){window
return C.i.giI()}if(a===C.a9){window
return C.i.gi4()}return P.Io()},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
v2:function v2(){},
Am:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c0(s[q])
return t.bc(b)},
Al:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.ca()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Ak:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kJ(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c0(o-1)
t.am(a,r)}return t.bc(b)},
Aj:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.ca()+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
Ai:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dq(new P.c1(""),0,0)
t.am(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c0(p-1)
t.c0(a)}return t.bc(b)},
Ah:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;){p=r.ca()+1
o=r.ca()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
GM:function(a){var t,s
if(a.gm(a).aF(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giS(s).gj2().eA("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
GA:function(a){a.gai(a).gc1()
return!1},
GL:function(a){a.gai(a).gc1()
return!1},
GK:function(a){a.gai(a).gc1()
return!1},
GJ:function(a){return a.gai(a).gbA().gj1()},
GH:function(a){return a.gai(a).gbA().gj_()},
GG:function(a){return a.gai(a).gbA().giZ()},
GD:function(a){return a.gai(a).gbA().giX()},
GF:function(a){return a.gai(a).gbA().giY()},
GI:function(a){return a.gai(a).gbA().gj0()},
GE:function(a){var t=a.gai(a)
t.gc1()
t.gc1()
return!1},
GB:function(a){return!0},
GC:function(a){a.gai(a).giU()
return!1},
oC:function oC(){},
a_:function a_(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
S:function S(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a7:function a7(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bB:function bB(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pH:function pH(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
hi:function hi(){},
vj:function vj(){},
vi:function vi(){}},D={pM:function pM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Hj:function(){if($.xW)return
$.xW=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=0
$.vE=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.Hi=t
t=new D.kn(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
t.Q=1
$.hV=t
t=new D.kn(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
$.eC=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.Hh=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hU=t
t=new D.oJ("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.eD=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.d9=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.fw=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hS=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hT=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.dA=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.ci=t},
vF:function(){var t=$.$get$cN()
return new H.eJ(t,new D.pd(),[H.N(t,0)])},
pd:function pd(){},
cF:function cF(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
kn:function kn(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oJ:function oJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,T,S,K,L,M,U,E,O,Y,A,B,V,Z,X,N,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.v_.prototype={}
J.f.prototype={
T:function(a,b){return a===b},
ga5:function(a){return H.ew(a)},
B:function(a){return H.oy(a)},
gad:function(a){return new H.dU(H.kM(a),null)},
$ishi:1,
$isz:1,
$isfo:1,
$isz:1,
$isn8:1,
$isz:1,
$isf:1,
$isn8:1,
$isz:1,
$isf:1,
$ishE:1,
$isz:1}
J.n6.prototype={
B:function(a){return String(a)},
ga5:function(a){return a?519018:218159},
gad:function(a){return C.ap},
$iscQ:1}
J.n7.prototype={
T:function(a,b){return null==b},
B:function(a){return"null"},
ga5:function(a){return 0},
gad:function(a){return C.aj},
$isd6:1}
J.hu.prototype={
ga5:function(a){return 0},
gad:function(a){return C.ai},
B:function(a){return String(a)},
$isn8:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
en:function(a,b){return a.draw(b)},
h:function(a,b){return a.add(b)},
as:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gc2:function(a){return a.bottom},
geh:function(a){return a.attributes},
san:function(a,b){return a.type=b},
gb2:function(a){return a.width},
gaW:function(a){return a.height},
gaL:function(a){return a.value},
im:function(a,b){return a.parse(b)},
fb:function(a,b){return a.setLogging(b)},
fc:function(a,b){return a.setMaterials(b)}}
J.or.prototype={}
J.eH.prototype={}
J.er.prototype={
B:function(a){var t=a[$.$get$wv()]
return t==null?this.fi(a):J.cu(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ep.prototype={
c5:function(a,b){if(!!a.immutable$list)throw H.j(new P.R(b))},
cR:function(a,b){if(!!a.fixed$length)throw H.j(new P.R(b))},
h:function(a,b){this.cR(a,"add")
a.push(b)},
a2:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.j(new P.bH(a))}},
aE:function(a,b){return new H.eu(a,b,[H.N(a,0),null])},
bs:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
aB:function(a,b){return H.pF(a,b,null,H.N(a,0))},
hU:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.j(new P.bH(a))}return s},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
cm:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bl(b))
if(b<0||b>a.length)throw H.j(P.bx(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.j(H.bl(c))
if(c<b||c>a.length)throw H.j(P.bx(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
gai:function(a){if(a.length>0)return a[0]
throw H.j(H.hs())},
gbi:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.j(H.hs())},
a8:function(a,b,c,d,e){var t,s,r
this.c5(a,"setRange")
P.dk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aN(P.bx(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.j(H.xy())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
bF:function(a,b,c,d){var t
this.c5(a,"fill range")
P.dk(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aK:function(a,b,c,d){var t,s,r,q,p,o
this.cR(a,"replaceRange")
P.dk(b,c,a.length,null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ae()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.az(a,b,r,d)
if(p!==0){this.a8(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a8(a,r,o,a,c)
this.az(a,b,r,d)}},
eg:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.j(new P.bH(a))}return!1},
hS:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.j(new P.bH(a))}return!0},
dn:function(a,b){var t
this.c5(a,"sort")
t=b==null?P.In():b
H.k7(a,0,a.length-1,t)},
fd:function(a){return this.dn(a,null)},
ba:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b1(a[t],b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
Z:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b1(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
B:function(a){return P.jE(a,"[","]")},
a7:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
at:function(a){return this.a7(a,!0)},
gY:function(a){return new J.eU(a,a.length,0,null,[H.N(a,0)])},
ga5:function(a){return H.ew(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cR(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dH(b,"newLength",null))
if(b<0)throw H.j(P.bx(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c2(a,b))
if(b>=a.length||b<0)throw H.j(H.c2(a,b))
return a[b]},
i:function(a,b,c){this.c5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c2(a,b))
if(b>=a.length||b<0)throw H.j(H.c2(a,b))
a[b]=c},
$isaz:1,
$asaz:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.uZ.prototype={}
J.eU.prototype={
gS:function(){return this.d},
G:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.j(H.c3(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fk.prototype={
aH:function(a,b){var t
if(typeof b!=="number")throw H.j(H.bl(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcY(b)
if(this.gcY(a)===t)return 0
if(this.gcY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcY:function(a){return a===0?1/a<0:a<0},
eQ:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.j(new P.R(""+a+".toInt()"))},
ap:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.j(new P.R(""+a+".floor()"))},
b0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(new P.R(""+a+".round()"))},
af:function(a,b,c){if(C.a.aH(b,c)>0)throw H.j(H.bl(b))
if(this.aH(a,b)<0)return b
if(this.aH(a,c)>0)return c
return a},
l:function(a){return a},
bN:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.j(P.bx(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a0(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aN(new P.R("Unexpected toString result: "+t))
r=J.b_(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ak("0",q)},
B:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga5:function(a){return a&0x1FFFFFFF},
dj:function(a){return-a},
R:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a+b},
ae:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a-b},
ak:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a*b},
bR:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dt:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e9(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.j(new P.R("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
aA:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
if(b<0)throw H.j(H.bl(b))
return b>31?0:a<<b>>>0},
au:function(a,b){return b>31?0:a<<b>>>0},
b5:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hj:function(a,b){if(b<0)throw H.j(H.bl(b))
return b>31?0:a>>>b},
e8:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a>b},
ay:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a>=b},
gad:function(a){return C.as},
$isdn:1}
J.jH.prototype={
gad:function(a){return C.ar},
$isV:1,
$isdn:1,
$isD:1}
J.jG.prototype={
gad:function(a){return C.aq},
$isV:1,
$isdn:1}
J.eq.prototype={
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c2(a,b))
if(b<0)throw H.j(H.c2(a,b))
if(b>=a.length)H.aN(H.c2(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.j(H.c2(a,b))
return a.charCodeAt(b)},
cO:function(a,b,c){if(c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return new H.rQ(b,a,c)},
b6:function(a,b){return this.cO(a,b,0)},
eF:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a0(b,c+s)!==this.a9(a,s))return
return new H.kc(c,b,a)},
R:function(a,b){if(typeof b!=="string")throw H.j(P.dH(b,null,null))
return a+b},
hR:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.al(a,s-t)},
d9:function(a,b,c){return H.z2(a,b,c)},
iz:function(a,b,c){return H.IT(a,b,c,null)},
fe:function(a,b){if(b==null)H.aN(H.bl(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.ht&&b.gdX().exec("").length-2===0)return a.split(b.gh5())
else return this.fO(a,b)},
aK:function(a,b,c,d){var t,s
H.w_(b)
c=P.dk(b,c,a.length,null,null,null)
H.w_(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fO:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.x])
for(s=J.z6(b,a),s=s.gY(s),r=0,q=1;s.G();){p=s.gS()
o=p.gdq(p)
n=p.gep(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.I(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.al(a,r))
return t},
aM:function(a,b,c){var t
H.w_(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zq(b,a,c)!=null},
ah:function(a,b){return this.aM(a,b,0)},
I:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aN(H.bl(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aN(H.bl(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.j(P.k3(b,null,null))
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.k3(b,null,null))
if(c>a.length)throw H.j(P.k3(c,null,null))
return a.substring(b,c)},
al:function(a,b){return this.I(a,b,null)},
iG:function(a){return a.toLowerCase()},
iH:function(a){return a.toUpperCase()},
bv:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a9(t,0)===133){r=J.G7(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a0(t,q)===133?J.uW(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eS:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a0(t,r)===133)s=J.uW(t,r)}else{s=J.uW(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ak:function(a,b){var t,s
if(typeof b!=="number")return H.a6(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.P)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ba:function(a,b,c){var t
if(c<0||c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
br:function(a,b){return this.ba(a,b,0)},
ib:function(a,b,c){var t
if(b==null)H.aN(H.bl(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aN(P.bx(t,0,c,null,null))
if(b.cz(a,t)!=null)return t}return-1},
eC:function(a,b){return this.ib(a,b,null)},
el:function(a,b,c){if(c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
return H.IS(a,b,c)},
Z:function(a,b){return this.el(a,b,0)},
gX:function(a){return a.length===0},
aH:function(a,b){var t
if(typeof b!=="string")throw H.j(H.bl(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
B:function(a){return a},
ga5:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gad:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c2(a,b))
if(b>=a.length||b<0)throw H.j(H.c2(a,b))
return a[b]},
$isaz:1,
$asaz:function(){},
$isx:1}
H.lk.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a0(this.a,b)},
$asi_:function(){return[P.D]},
$ashz:function(){return[P.D]},
$asfp:function(){return[P.D]},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.r.prototype={$asr:null}
H.dO.prototype={
gY:function(a){return new H.es(this,this.gm(this),0,null,[H.aq(this,"dO",0)])},
a2:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.W(0,s))
if(t!==this.gm(this))throw H.j(new P.bH(this))}},
gX:function(a){return this.gm(this)===0},
gai:function(a){if(this.gm(this)===0)throw H.j(H.hs())
return this.W(0,0)},
Z:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b1(this.W(0,s),b))return!0
if(t!==this.gm(this))throw H.j(new P.bH(this))}return!1},
cg:function(a,b){return this.fh(0,b)},
aE:function(a,b){return new H.eu(this,b,[H.aq(this,"dO",0),null])},
aB:function(a,b){return H.pF(this,b,null,H.aq(this,"dO",0))},
a7:function(a,b){var t,s,r
t=H.a([],[H.aq(this,"dO",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.W(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
at:function(a){return this.a7(a,!0)}}
H.pE.prototype={
gfP:function(){var t=J.c4(this.a)
return t},
ghk:function(){var t,s
t=J.c4(this.a)
s=this.b
if(J.ct(s,t))return t
return s},
gm:function(a){var t,s
t=J.c4(this.a)
s=this.b
if(J.w6(s,t))return 0
if(typeof s!=="number")return H.a6(s)
return t-s},
W:function(a,b){var t=J.dY(this.ghk(),b)
if(J.dG(b,0)||J.w6(t,this.gfP()))throw H.j(P.bz(b,this,"index",null,null))
return J.w9(this.a,t)},
aB:function(a,b){var t
if(J.dG(b,0))H.aN(P.bx(b,0,null,"count",null))
t=J.dY(this.b,b)
return H.pF(this.a,t,this.c,H.N(this,0))},
a7:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.b_(s)
q=r.gm(s)
if(typeof t!=="number")return H.a6(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.W(s,t+m)
if(m>=n.length)return H.u(n,m)
n[m]=o
if(r.gm(s)<q)throw H.j(new P.bH(this))}return n},
at:function(a){return this.a7(a,!0)},
fs:function(a,b,c,d){var t=this.b
if(J.dG(t,0))H.aN(P.bx(t,0,null,"start",null))}}
H.es.prototype={
gS:function(){return this.d},
G:function(){var t,s,r,q
t=this.a
s=J.b_(t)
r=s.gm(t)
if(this.b!==r)throw H.j(new P.bH(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.W(t,q);++this.c
return!0}}
H.hD.prototype={
gY:function(a){return new H.jL(null,J.cI(this.a),this.b,this.$ti)},
gm:function(a){return J.c4(this.a)},
gX:function(a){return J.kR(this.a)},
$asn:function(a,b){return[b]}}
H.h1.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jL.prototype={
G:function(){var t=this.b
if(t.G()){this.a=this.c.$1(t.gS())
return!0}this.a=null
return!1},
gS:function(){return this.a},
$asjF:function(a,b){return[b]}}
H.eu.prototype={
gm:function(a){return J.c4(this.a)},
W:function(a,b){return this.b.$1(J.w9(this.a,b))},
$asdO:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.eJ.prototype={
gY:function(a){return new H.kk(J.cI(this.a),this.b,this.$ti)},
aE:function(a,b){return new H.hD(this,b,[H.N(this,0),null])}}
H.kk.prototype={
G:function(){var t,s
for(t=this.a,s=this.b;t.G();)if(s.$1(t.gS())===!0)return!0
return!1},
gS:function(){return this.a.gS()}}
H.hQ.prototype={
aB:function(a,b){return new H.hQ(this.a,this.b+H.td(b),this.$ti)},
gY:function(a){return new H.p2(J.cI(this.a),this.b,this.$ti)}}
H.iD.prototype={
gm:function(a){var t=J.c4(this.a)-this.b
if(t>=0)return t
return 0},
aB:function(a,b){return new H.iD(this.a,this.b+H.td(b),this.$ti)},
$isr:1,
$asr:null,
$asn:null}
H.p2.prototype={
G:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.G()
this.b=0
return t.G()},
gS:function(){return this.a.gS()}}
H.iP.prototype={
sm:function(a,b){throw H.j(new P.R("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.j(new P.R("Cannot add to a fixed-length list"))},
aK:function(a,b,c,d){throw H.j(new P.R("Cannot remove from a fixed-length list"))}}
H.q4.prototype={
i:function(a,b,c){throw H.j(new P.R("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.j(new P.R("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.j(new P.R("Cannot add to an unmodifiable list"))},
a8:function(a,b,c,d,e){throw H.j(new P.R("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.R("Cannot remove from an unmodifiable list"))},
bF:function(a,b,c,d){throw H.j(new P.R("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.i_.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.tO.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tP.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.rt.prototype={}
H.fE.prototype={
ef:function(a,b){if(!this.f.T(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cM()},
iy:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.as(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.u(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.u(p,q)
p[q]=r
if(q===s.c)s.dQ();++s.d}this.y=!1}this.cM()},
hp:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
ix:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aN(new P.R("removeRange"))
P.dk(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f9:function(a,b){if(!this.r.T(0,a))return
this.db=b},
i_:function(a,b,c){var t=J.ai(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){J.fM(a,c)
return}t=this.cx
if(t==null){t=P.v4(null,null)
this.cx=t}t.aT(0,new H.rj(a,c))},
hZ:function(a,b){var t
if(!this.r.T(0,a))return
t=J.ai(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){this.c6()
return}t=this.cx
if(t==null){t=P.v4(null,null)
this.cx=t}t.aT(0,this.gia())},
i0:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.eS(a)
if(b!=null)P.eS(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cu(a)
s[1]=b==null?null:J.cu(b)
for(r=new P.dD(t,t.r,null,null,[null]),r.c=t.e;r.G();)J.fM(r.d,s)},
bE:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bE(o)
p=H.cs(o)
this.i0(q,p)
if(this.db===!0){this.c6()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi8()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.eL().$0()}return s},
cZ:function(a){return this.b.n(0,a)},
dB:function(a,b){var t=this.b
if(t.a_(0,a))throw H.j(P.lV("Registry: ports must be registered only once."))
t.i(0,a,b)},
cM:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c6()},
c6:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bp(0)
for(t=this.b,s=t.gce(t),s=s.gY(s);s.G();)s.gS().fH()
t.bp(0)
this.c.bp(0)
u.globalState.z.as(0,this.a)
this.dx.bp(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fM(q,t[p])}this.ch=null}},
gi8:function(){return this.d},
ghA:function(){return this.e}}
H.rj.prototype={
$0:function(){J.fM(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qW.prototype={
hJ:function(){var t=this.a
if(t.b===t.c)return
return t.eL()},
eP:function(){var t,s,r
t=this.hJ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a_(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.aN(P.lV("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hy(["command","close"])
r=new H.dE(!0,new P.kz(0,null,null,null,null,null,0,[null,P.D])).aG(r)
s.toString
self.postMessage(r)}return!1}t.it()
return!0},
e3:function(){if(self.window!=null)new H.qX(this).$0()
else for(;this.eP(););},
bM:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.e3()
else try{this.e3()}catch(r){t=H.bE(r)
s=H.cs(r)
q=u.globalState.Q
p=P.hy(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dE(!0,P.i9(null,P.D)).aG(p)
q.toString
self.postMessage(p)}}}
H.qX.prototype={
$0:function(){if(!this.a.eP())return
P.xY(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eP.prototype={
it:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bE(this.b)}}
H.rs.prototype={}
H.mS.prototype={
$0:function(){H.B4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mT.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fK(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fK(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cM()},
$S:function(){return{func:1,v:true}}}
H.qG.prototype={}
H.fF.prototype={
bf:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdV())return
r=H.HX(b)
if(t.ghA()===s){s=J.b_(r)
switch(s.n(r,0)){case"pause":t.ef(s.n(r,1),s.n(r,2))
break
case"resume":t.iy(s.n(r,1))
break
case"add-ondone":t.hp(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.ix(s.n(r,1))
break
case"set-errors-fatal":t.f9(s.n(r,1),s.n(r,2))
break
case"ping":t.i_(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hZ(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.aT(0,new H.eP(t,new H.rv(this,r),"receive"))},
T:function(a,b){if(b==null)return!1
return b instanceof H.fF&&J.b1(this.b,b.b)},
ga5:function(a){return this.b.gcC()}}
H.rv.prototype={
$0:function(){var t=this.a.b
if(!t.gdV())t.fD(0,this.b)},
$S:function(){return{func:1}}}
H.id.prototype={
bf:function(a,b){var t,s,r
t=P.hy(["command","message","port",this,"msg",b])
s=new H.dE(!0,P.i9(null,P.D)).aG(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
T:function(a,b){if(b==null)return!1
return b instanceof H.id&&J.b1(this.b,b.b)&&J.b1(this.a,b.a)&&J.b1(this.c,b.c)},
ga5:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aA()
s=this.a
if(typeof s!=="number")return s.aA()
r=this.c
if(typeof r!=="number")return H.a6(r)
return(t<<16^s<<8^r)>>>0}}
H.ft.prototype={
fH:function(){this.c=!0
this.b=null},
fD:function(a,b){if(this.c)return
this.b.$1(b)},
$isGN:1,
gcC:function(){return this.a},
gdV:function(){return this.c}}
H.pW.prototype={
ft:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aT(0,new H.eP(s,new H.pX(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dl(new H.pY(this,b),0),a)}else throw H.j(new P.R("Timer greater than 0."))}}
H.pX.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pY.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dI.prototype={
ga5:function(a){var t=this.a
if(typeof t!=="number")return t.dm()
t=C.d.b5(t,0)^C.d.ar(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dI){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcC:function(){return this.a}}
H.dE.prototype={
aG:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ai(a)
if(!!t.$isfl)return["buffer",a]
if(!!t.$isev)return["typed",a]
if(!!t.$isaz)return this.f5(a)
if(!!t.$isB1){r=this.gf2()
q=t.gaj(a)
q=H.dx(q,r,H.aq(q,"n",0),null)
q=P.dj(q,!0,H.aq(q,"n",0))
t=t.gce(a)
t=H.dx(t,r,H.aq(t,"n",0),null)
return["map",q,P.dj(t,!0,H.aq(t,"n",0))]}if(!!t.$isn8)return this.f6(a)
if(!!t.$isf)this.eT(a)
if(!!t.$isGN)this.bP(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfF)return this.f7(a)
if(!!t.$isid)return this.f8(a)
if(!!t.$isf0){p=a.$static_name
if(p==null)this.bP(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdI)return["capability",a.a]
if(!(a instanceof P.z))this.eT(a)
return["dart",u.classIdExtractor(a),this.f4(u.classFieldsExtractor(a))]},
bP:function(a,b){throw H.j(new P.R((b==null?"Can't transmit:":b)+" "+H.y(a)))},
eT:function(a){return this.bP(a,null)},
f5:function(a){var t=this.f3(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bP(a,"Can't serialize indexable: ")},
f3:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aG(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
f4:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aG(a[t]))
return a},
f6:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bP(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aG(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
f8:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f7:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcC()]
return["raw sendport",a]}}
H.eM.prototype={
b8:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.j(P.df("Bad serialized message: "+H.y(a)))
switch(C.b.gai(a)){case"ref":if(1>=a.length)return H.u(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.u(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bC(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bC(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"map":return this.hN(a)
case"sendport":return this.hO(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hM(a)
case"function":if(1>=a.length)return H.u(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.u(a,1)
return new H.dI(a[1])
case"dart":s=a.length
if(1>=s)return H.u(a,1)
q=a[1]
if(2>=s)return H.u(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bC(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.j("couldn't deserialize: "+H.y(a))}},
bC:function(a){var t,s,r
t=J.b_(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
t.i(a,s,this.b8(t.n(a,s)));++s}return a},
hN:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jJ()
this.b.push(q)
s=J.zz(J.wg(s,this.ghL()))
for(t=J.b_(s),p=J.b_(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b8(p.n(r,o)))
return q},
hO:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.b1(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cZ(q)
if(o==null)return
n=new H.fF(o,r)}else n=new H.id(s,q,r)
this.b.push(n)
return n},
hM:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b_(s)
p=J.b_(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a6(n)
if(!(o<n))break
q[t.n(s,o)]=this.b8(p.n(r,o));++o}return q}}
H.ln.prototype={
gX:function(a){return this.gm(this)===0},
B:function(a){return P.nH(this)},
i:function(a,b,c){return H.A6()},
$isaL:1,
$asaL:null}
H.lo.prototype={
gm:function(a){return this.a},
a_:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a_(0,b))return
return this.dP(b)},
dP:function(a){return this.b[a]},
a2:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dP(q))}},
gaj:function(a){return new H.qK(this,[H.N(this,0)])}}
H.qK.prototype={
gY:function(a){var t=this.a.c
return new J.eU(t,t.length,0,null,[H.N(t,0)])},
gm:function(a){return this.a.c.length}}
H.oI.prototype={}
H.q1.prototype={
aP:function(a){var t,s,r
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
H.jU.prototype={
B:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.nb.prototype={
B:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.q3.prototype={
B:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ha.prototype={
gaR:function(){return this.b}}
H.tQ.prototype={
$1:function(a){if(!!J.ai(a).$isef)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kC.prototype={
B:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tC.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.tD.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.tE.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.tF.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tG.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f0.prototype={
B:function(a){return"Closure '"+H.oz(this).trim()+"'"},
giQ:function(){return this},
$D:null}
H.pL.prototype={}
H.pc.prototype={
B:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fT.prototype={
T:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga5:function(a){var t,s
t=this.c
if(t==null)s=H.ew(this.a)
else s=typeof t!=="object"?J.cS(t):H.ew(t)
t=H.ew(this.b)
if(typeof s!=="number")return s.iT()
return(s^t)>>>0},
B:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.oy(t)}}
H.li.prototype={
B:function(a){return this.a}}
H.oP.prototype={
B:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dU.prototype={
B:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga5:function(a){return J.cS(this.a)},
T:function(a,b){if(b==null)return!1
return b instanceof H.dU&&J.b1(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gaj:function(a){return new H.nq(this,[H.N(this,0)])},
gce:function(a){return H.dx(this.gaj(this),new H.na(this),H.N(this,0),H.N(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dJ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dJ(s,b)}else return this.i5(b)},
i5:function(a){var t=this.d
if(t==null)return!1
return this.bI(this.bT(t,this.bH(a)),a)>=0},
aD:function(a,b){b.a2(0,new H.n9(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.by(t,b)
return s==null?null:s.gb9()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.by(r,b)
return s==null?null:s.gb9()}else return this.i6(b)},
i6:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bT(t,this.bH(a))
r=this.bI(s,a)
if(r<0)return
return s[r].gb9()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cE()
this.b=t}this.dA(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cE()
this.c=s}this.dA(s,b,c)}else{r=this.d
if(r==null){r=this.cE()
this.d=r}q=this.bH(b)
p=this.bT(r,q)
if(p==null)this.cK(r,q,[this.cF(b,c)])
else{o=this.bI(p,b)
if(o>=0)p[o].sb9(c)
else p.push(this.cF(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.e2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.e2(this.c,b)
else return this.i7(b)},
i7:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bT(t,this.bH(a))
r=this.bI(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.eb(q)
return q.gb9()},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a2:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.j(new P.bH(this))
t=t.c}},
dA:function(a,b,c){var t=this.by(a,b)
if(t==null)this.cK(a,b,this.cF(b,c))
else t.sb9(c)},
e2:function(a,b){var t
if(a==null)return
t=this.by(a,b)
if(t==null)return
this.eb(t)
this.dN(a,b)
return t.gb9()},
cF:function(a,b){var t,s
t=new H.np(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
eb:function(a){var t,s
t=a.gha()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bH:function(a){return J.cS(a)&0x3ffffff},
bI:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b1(a[s].gez(),b))return s
return-1},
B:function(a){return P.nH(this)},
by:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
cK:function(a,b,c){a[b]=c},
dN:function(a,b){delete a[b]},
dJ:function(a,b){return this.by(a,b)!=null},
cE:function(){var t=Object.create(null)
this.cK(t,"<non-identifier-key>",t)
this.dN(t,"<non-identifier-key>")
return t},
$isB1:1,
$isaL:1,
$asaL:null}
H.na.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.n9.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eR(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.np.prototype={
gez:function(){return this.a},
gb9:function(){return this.b},
gha:function(){return this.d},
sb9:function(a){return this.b=a}}
H.nq.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gY:function(a){var t,s
t=this.a
s=new H.nr(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Z:function(a,b){return this.a.a_(0,b)},
a2:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.j(new P.bH(t))
s=s.c}}}
H.nr.prototype={
gS:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bH(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.ty.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.tz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.x]}}}
H.tA.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.x]}}}
H.ht.prototype={
B:function(a){return"RegExp/"+this.a+"/"},
gdY:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uX(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdX:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uX(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cO:function(a,b,c){if(c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return new H.qA(this,b,c)},
b6:function(a,b){return this.cO(a,b,0)},
fQ:function(a,b){var t,s
t=this.gdY()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kA(this,s)},
cz:function(a,b){var t,s
t=this.gdX()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.kA(this,s)},
eF:function(a,b,c){if(c<0||c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return this.cz(b,c)},
$isGQ:1,
gh5:function(){return this.b}}
H.kA.prototype={
gdq:function(a){return this.b.index},
gep:function(a){var t=this.b
return t.index+t[0].length},
bk:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdy:1}
H.qA.prototype={
gY:function(a){return new H.kp(this.a,this.b,this.c,null)},
$ashr:function(){return[P.dy]},
$asn:function(){return[P.dy]}}
H.kp.prototype={
gS:function(){return this.d},
G:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fQ(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.kc.prototype={
gep:function(a){return this.a+this.c.length},
n:function(a,b){return this.bk(b)},
bk:function(a){if(!J.b1(a,0))throw H.j(P.k3(a,null,null))
return this.c},
$isdy:1,
gdq:function(a){return this.a}}
H.rQ.prototype={
gY:function(a){return new H.rR(this.a,this.b,this.c,null)},
$asn:function(){return[P.dy]}}
H.rR.prototype={
G:function(){var t,s,r,q,p,o,n
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
this.d=new H.kc(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gS:function(){return this.d}}
H.fl.prototype={
gad:function(a){return C.ab},
hv:function(a,b,c){return H.cM(a,b,c)},
hu:function(a){return this.hv(a,0,null)},
ht:function(a,b,c){var t
H.yz(a,b,c)
t=new DataView(a,b)
return t},
hs:function(a,b){return this.ht(a,b,null)},
$isfl:1,
$isbi:1,
$isz:1,
geD:function(a){return a.byteLength}}
H.ev.prototype={
h2:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dH(b,d,"Invalid list position"))
else throw H.j(P.bx(b,0,c,d,null))},
dE:function(a,b,c,d){if(b>>>0!==b||b>c)this.h2(a,b,c,d)},
$isev:1,
$isz:1,
gc3:function(a){return a.buffer},
geD:function(a){return a.byteLength}}
H.nU.prototype={
gad:function(a){return C.ac},
$isz:1}
H.jP.prototype={
gm:function(a){return a.length},
e7:function(a,b,c,d,e){var t,s,r
t=a.length
this.dE(a,b,t,"start")
this.dE(a,c,t,"end")
if(typeof b!=="number")return b.aF()
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.bx(b,0,c,null,null))
s=c-b
if(J.dG(e,0))throw H.j(P.df(e))
r=d.length
if(typeof e!=="number")return H.a6(e)
if(r-e<s)throw H.j(new P.d8("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaE:1,
$asaE:function(){},
$isaz:1,
$asaz:function(){}}
H.hG.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.ai(d).$ishG){this.e7(a,b,c,d,e)
return}this.ds(a,b,c,d,e)},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)}}
H.hI.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]},
$isp:1,
$isr:1,
$isn:1}
H.hK.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]}}
H.hH.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.ai(d).$ishH){this.e7(a,b,c,d,e)
return}this.ds(a,b,c,d,e)},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.hJ.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]},
$isp:1,
$isr:1,
$isn:1}
H.hL.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.D]},
$asr:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.nV.prototype={
gad:function(a){return C.ad},
$isz:1,
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nW.prototype={
gad:function(a){return C.ae},
$isz:1,
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nX.prototype={
gad:function(a){return C.af},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nY.prototype={
gad:function(a){return C.ag},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nZ.prototype={
gad:function(a){return C.ah},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.o_.prototype={
gad:function(a){return C.al},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.o0.prototype={
gad:function(a){return C.am},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.jQ.prototype={
gad:function(a){return C.an},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.fm.prototype={
gad:function(a){return C.ao},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aN(H.c2(a,b))
return a[b]},
cm:function(a,b,c){return new Uint8Array(a.subarray(b,H.HW(b,c,a.length)))},
$isfm:1,
$isdb:1,
$isz:1,
$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.qC.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qB.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qD.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qE.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.t8.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.t9.prototype={
$2:function(a,b){this.a.$2(1,new H.ha(a,b))},
$S:function(){return{func:1,args:[,P.dS]}}}
P.tl.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.cl.prototype={}
P.tn.prototype={
$0:function(){var t,s,r
try{this.b.aN(this.a.$0())}catch(r){t=H.bE(r)
s=H.cs(r)
P.yA(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mz.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.aq(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.my.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.dI(r)}else if(t.b===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f2.prototype={}
P.kr.prototype={
cS:function(a,b){if(a==null)a=new P.fn()
if(this.a.a!==0)throw H.j(new P.d8("Future already completed"))
$.ao.toString
this.aq(a,b)},
bB:function(a){return this.cS(a,null)},
$isf2:1,
ghX:function(){return this.a}}
P.dW.prototype={
aI:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.d8("Future already completed"))
t.dC(b)},
hy:function(a){return this.aI(a,null)},
aq:function(a,b){this.a.dD(a,b)}}
P.kE.prototype={
aI:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.d8("Future already completed"))
t.aN(b)},
aq:function(a,b){this.a.aq(a,b)}}
P.kv.prototype={
gho:function(){return this.b.b},
gev:function(){return(this.c&1)!==0},
gi3:function(){return(this.c&2)!==0},
geu:function(){return this.c===8},
i1:function(a){return this.b.b.da(this.d,a)},
ic:function(a){if(this.c!==6)return!0
return this.b.b.da(this.d,J.fL(a))},
hY:function(a){var t,s,r
t=this.e
s=J.aM(a)
r=this.b.b
if(H.fK(t,{func:1,args:[,,]}))return r.iC(t,s.gav(a),a.gaR())
else return r.da(t,s.gav(a))},
i2:function(){return this.b.b.eN(this.d)},
gcG:function(){return this.a}}
P.bk.prototype={
gh3:function(){return this.a===2},
gcD:function(){return this.a>=4},
cd:function(a,b){var t=$.ao
if(t!==C.e){t.toString
if(b!=null)b=P.yE(b,t)}return this.cL(a,b)},
b1:function(a){return this.cd(a,null)},
cL:function(a,b){var t,s
t=new P.bk(0,$.ao,null,[null])
s=b==null?1:3
this.co(new P.kv(null,t,s,a,b,[H.N(this,0),null]))
return t},
cf:function(a){var t,s
t=$.ao
s=new P.bk(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.co(new P.kv(null,s,8,a,null,[t,t]))
return s},
co:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcD()){s.co(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fI(null,null,t,new P.r1(this,a))}},
e1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcG()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcD()){p.e1(a)
return}this.a=p.a
this.c=p.c}t.a=this.bY(a)
s=this.b
s.toString
P.fI(null,null,s,new P.r9(t,this))}},
bX:function(){var t=this.c
this.c=null
return this.bY(t)},
bY:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcG()
t.a=s}return s},
aN:function(a){var t,s
t=this.$ti
if(H.dX(a,"$iscl",t,"$ascl"))if(H.dX(a,"$isbk",t,null))P.r4(a,this)
else P.yl(a,this)
else{s=this.bX()
this.a=4
this.c=a
P.fD(this,s)}},
dI:function(a){var t=this.bX()
this.a=4
this.c=a
P.fD(this,t)},
aq:function(a,b){var t=this.bX()
this.a=8
this.c=new P.eV(a,b)
P.fD(this,t)},
fJ:function(a){return this.aq(a,null)},
dC:function(a){var t
if(H.dX(a,"$iscl",this.$ti,"$ascl")){this.fG(a)
return}this.a=1
t=this.b
t.toString
P.fI(null,null,t,new P.r3(this,a))},
fG:function(a){var t
if(H.dX(a,"$isbk",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fI(null,null,t,new P.r8(this,a))}else P.r4(a,this)
return}P.yl(a,this)},
dD:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fI(null,null,t,new P.r2(this,a,b))},
$iscl:1,
gbZ:function(){return this.a},
ghe:function(){return this.c}}
P.r1.prototype={
$0:function(){P.fD(this.a,this.b)},
$S:function(){return{func:1}}}
P.r9.prototype={
$0:function(){P.fD(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.r5.prototype={
$1:function(a){var t=this.a
t.a=0
t.aN(a)},
$S:function(){return{func:1,args:[,]}}}
P.r6.prototype={
$2:function(a,b){this.a.aq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.r7.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.r3.prototype={
$0:function(){this.a.dI(this.b)},
$S:function(){return{func:1}}}
P.r8.prototype={
$0:function(){P.r4(this.b,this.a)},
$S:function(){return{func:1}}}
P.r2.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.rc.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.i2()}catch(q){s=H.bE(q)
r=H.cs(q)
if(this.c){p=J.fL(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eV(s,r)
o.a=!0
return}if(!!J.ai(t).$iscl){if(t instanceof P.bk&&t.gbZ()>=4){if(t.gbZ()===8){p=this.b
p.b=t.ghe()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b1(new P.rd(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.rd.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.rb.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.i1(this.c)}catch(r){t=H.bE(r)
s=H.cs(r)
q=this.a
q.b=new P.eV(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ra.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ic(t)===!0&&q.e!=null){p=this.b
p.b=q.hY(t)
p.a=!1}}catch(o){s=H.bE(o)
r=H.cs(o)
q=this.a
p=J.fL(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eV(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kq.prototype={}
P.cZ.prototype={
aE:function(a,b){return new P.ru(b,this,[H.aq(this,"cZ",0),null])},
Z:function(a,b){var t,s
t={}
s=new P.bk(0,$.ao,null,[P.cQ])
t.a=null
t.a=this.aX(new P.pj(t,this,b,s),!0,new P.pk(s),s.gbm())
return s},
a2:function(a,b){var t,s
t={}
s=new P.bk(0,$.ao,null,[null])
t.a=null
t.a=this.aX(new P.pp(t,this,b,s),!0,new P.pq(s),s.gbm())
return s},
gm:function(a){var t,s
t={}
s=new P.bk(0,$.ao,null,[P.D])
t.a=0
this.aX(new P.pt(t),!0,new P.pu(t,s),s.gbm())
return s},
gX:function(a){var t,s
t={}
s=new P.bk(0,$.ao,null,[P.cQ])
t.a=null
t.a=this.aX(new P.pr(t,s),!0,new P.ps(s),s.gbm())
return s},
at:function(a){var t,s,r
t=H.aq(this,"cZ",0)
s=H.a([],[t])
r=new P.bk(0,$.ao,null,[[P.p,t]])
this.aX(new P.pv(this,s),!0,new P.pw(s,r),r.gbm())
return r},
aB:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b||b<0)H.aN(P.df(b))
return new P.rM(b,this,[H.aq(this,"cZ",0)])},
gai:function(a){var t,s
t={}
s=new P.bk(0,$.ao,null,[H.aq(this,"cZ",0)])
t.a=null
t.a=this.aX(new P.pl(t,this,s),!0,new P.pm(s),s.gbm())
return s}}
P.pj.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yI(new P.ph(this.c,a),new P.pi(t,s),P.yy(t.a,s))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"cZ")}}
P.ph.prototype={
$0:function(){return J.b1(this.b,this.a)},
$S:function(){return{func:1}}}
P.pi.prototype={
$1:function(a){if(a===!0)P.vX(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cQ]}}}
P.pk.prototype={
$0:function(){this.a.aN(!1)},
$S:function(){return{func:1}}}
P.pp.prototype={
$1:function(a){P.yI(new P.pn(this.c,a),new P.po(),P.yy(this.a.a,this.d))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"cZ")}}
P.pn.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.po.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.pq.prototype={
$0:function(){this.a.aN(null)},
$S:function(){return{func:1}}}
P.pt.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pu.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:function(){return{func:1}}}
P.pr.prototype={
$1:function(a){P.vX(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.ps.prototype={
$0:function(){this.a.aN(!0)},
$S:function(){return{func:1}}}
P.pv.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.a,"cZ")}}
P.pw.prototype={
$0:function(){this.b.aN(this.a)},
$S:function(){return{func:1}}}
P.pl.prototype={
$1:function(a){P.vX(this.a.a,this.c,a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"cZ")}}
P.pm.prototype={
$0:function(){var t,s,r,q
try{r=H.hs()
throw H.j(r)}catch(q){t=H.bE(q)
s=H.cs(q)
P.yA(this.a,t,s)}},
$S:function(){return{func:1}}}
P.pg.prototype={}
P.dc.prototype={
d1:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.ei()
if((t&4)===0&&(this.e&32)===0)this.dR(this.ge_())},
eI:function(a){return this.d1(a,null)},
eM:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.ck(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dR(this.ge0())}}}},
c4:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cq()
t=this.f
return t==null?$.$get$hj():t},
cq:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ei()
if((this.e&32)===0)this.r=null
this.f=this.dZ()},
bw:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e4(b)
else this.cp(new P.qP(b,null,[H.aq(this,"dc",0)]))},
bS:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e6(a,b)
else this.cp(new P.qR(a,b,null))},
fF:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.e5()
else this.cp(C.Q)},
bV:function(){},
bW:function(){},
dZ:function(){return},
cp:function(a){var t,s
t=this.r
if(t==null){t=new P.rO(null,null,0,[H.aq(this,"dc",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.ck(this)}},
e4:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.dc(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
e6:function(a,b){var t,s
t=this.e
s=new P.qI(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cq()
t=this.f
if(!!J.ai(t).$iscl&&t!==$.$get$hj())t.cf(s)
else s.$0()}else{s.$0()
this.cs((t&4)!==0)}},
e5:function(){var t,s
t=new P.qH(this)
this.cq()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ai(s).$iscl&&s!==$.$get$hj())s.cf(t)
else t.$0()},
dR:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
cs:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gX(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gX(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bV()
else this.bW()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.ck(this)},
dw:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yE(b,t)
this.c=c},
gbZ:function(){return this.e}}
P.qI.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fK(s,{func:1,args:[P.z,P.dS]})
q=t.d
p=this.b
o=t.b
if(r)q.iD(o,p,this.c)
else q.dc(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qH.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eO(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kt.prototype={
gbJ:function(a){return this.a},
sbJ:function(a,b){return this.a=b}}
P.qP.prototype={
d2:function(a){a.e4(this.b)}}
P.qR.prototype={
d2:function(a){a.e6(this.b,this.c)},
$askt:function(){},
gav:function(a){return this.b},
gaR:function(){return this.c}}
P.qQ.prototype={
d2:function(a){a.e5()},
gbJ:function(a){return},
sbJ:function(a,b){throw H.j(new P.d8("No events after a done."))}}
P.rw.prototype={
ck:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.z_(new P.rx(this,a))
this.a=1},
ei:function(){if(this.a===1)this.a=3},
gbZ:function(){return this.a}}
P.rx.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbJ(r)
t.b=q
if(q==null)t.c=null
r.d2(this.b)},
$S:function(){return{func:1}}}
P.rO.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbJ(0,b)
this.c=b}}}
P.rP.prototype={}
P.tb.prototype={
$0:function(){return this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.ta.prototype={
$2:function(a,b){P.HV(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dS]}}}
P.tc.prototype={
$0:function(){return this.a.aN(this.b)},
$S:function(){return{func:1}}}
P.fC.prototype={
aX:function(a,b,c,d){return this.dK(a,d,c,!0===b)},
eE:function(a,b,c){return this.aX(a,null,b,c)},
dK:function(a,b,c,d){return P.Hx(this,a,b,c,d,H.aq(this,"fC",0),H.aq(this,"fC",1))},
cB:function(a,b){b.bw(0,a)},
h0:function(a,b,c){c.bS(a,b)},
$ascZ:function(a,b){return[b]}}
P.eO.prototype={
bw:function(a,b){if((this.e&2)!==0)return
this.fk(0,b)},
bS:function(a,b){if((this.e&2)!==0)return
this.fl(a,b)},
bV:function(){var t=this.y
if(t==null)return
t.eI(0)},
bW:function(){var t=this.y
if(t==null)return
t.eM(0)},
dZ:function(){var t=this.y
if(t!=null){this.y=null
return t.c4(0)}return},
fW:function(a){this.x.cB(a,this)},
h_:function(a,b){this.x.h0(a,b,this)},
fY:function(){this.fF()},
dz:function(a,b,c,d,e,f,g){this.y=this.x.a.eE(this.gfV(),this.gfX(),this.gfZ())},
$asdc:function(a,b){return[b]}}
P.ru.prototype={
cB:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bE(q)
r=H.cs(q)
P.HU(b,s,r)
return}b.bw(0,t)}}
P.rN.prototype={
gfM:function(a){return this.z},
$aseO:function(a){return[a,a]},
$asdc:null}
P.rM.prototype={
dK:function(a,b,c,d){var t,s,r
t=H.N(this,0)
s=$.ao
r=d?1:0
r=new P.rN(this.b,this,null,null,null,null,s,r,null,null,this.$ti)
r.dw(a,b,c,d,t)
r.dz(this,a,b,c,d,t,t)
return r},
cB:function(a,b){var t,s
t=b.gfM(b)
s=J.dm(t)
if(s.aF(t,0)){b.z=s.ae(t,1)
return}b.bw(0,a)},
$asfC:function(a){return[a,a]},
$ascZ:null}
P.eV.prototype={
B:function(a){return H.y(this.a)},
$isef:1,
gav:function(a){return this.a},
gaR:function(){return this.b}}
P.t7.prototype={}
P.tk.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fn()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.j(t)
r=H.j(t)
r.stack=J.cu(s)
throw r},
$S:function(){return{func:1}}}
P.rA.prototype={
eO:function(a){var t,s,r,q
try{if(C.e===$.ao){r=a.$0()
return r}r=P.yF(null,null,this,a)
return r}catch(q){t=H.bE(q)
s=H.cs(q)
r=P.kI(null,null,this,t,s)
return r}},
dc:function(a,b){var t,s,r,q
try{if(C.e===$.ao){r=a.$1(b)
return r}r=P.yH(null,null,this,a,b)
return r}catch(q){t=H.bE(q)
s=H.cs(q)
r=P.kI(null,null,this,t,s)
return r}},
iD:function(a,b,c){var t,s,r,q
try{if(C.e===$.ao){r=a.$2(b,c)
return r}r=P.yG(null,null,this,a,b,c)
return r}catch(q){t=H.bE(q)
s=H.cs(q)
r=P.kI(null,null,this,t,s)
return r}},
cQ:function(a,b){if(b)return new P.rB(this,a)
else return new P.rC(this,a)},
hw:function(a,b){return new P.rD(this,a)},
n:function(a,b){return},
eN:function(a){if($.ao===C.e)return a.$0()
return P.yF(null,null,this,a)},
da:function(a,b){if($.ao===C.e)return a.$1(b)
return P.yH(null,null,this,a,b)},
iC:function(a,b,c){if($.ao===C.e)return a.$2(b,c)
return P.yG(null,null,this,a,b,c)}}
P.rB.prototype={
$0:function(){return this.a.eO(this.b)},
$S:function(){return{func:1}}}
P.rC.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.rD.prototype={
$1:function(a){return this.a.dc(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.rf.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gaj:function(a){return new P.kx(this,[H.N(this,0)])},
gce:function(a){var t=H.N(this,0)
return H.dx(new P.kx(this,[t]),new P.rh(this),t,H.N(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fL(b)},
fL:function(a){var t=this.d
if(t==null)return!1
return this.aV(t[this.aU(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fT(0,b)},
fT:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(b)]
r=this.aV(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vU()
this.b=t}this.dG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vU()
this.c=s}this.dG(s,b,c)}else this.hh(b,c)},
hh:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vU()
this.d=t}s=this.aU(a)
r=t[s]
if(r==null){P.vV(t,s,[a,b]);++this.a
this.e=null}else{q=this.aV(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(b)]
r=this.aV(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a2:function(a,b){var t,s,r,q
t=this.ct()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.j(new P.bH(this))}},
ct:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dG:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vV(a,b,c)},
bx:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Hz(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aU:function(a){return J.cS(a)&0x3ffffff},
aV:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b1(a[s],b))return s
return-1},
$isaL:1,
$asaL:null}
P.rh.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kx.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gY:function(a){var t=this.a
return new P.rg(t,t.ct(),0,null,this.$ti)},
Z:function(a,b){return this.a.a_(0,b)},
a2:function(a,b){var t,s,r,q
t=this.a
s=t.ct()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.j(new P.bH(t))}}}
P.rg.prototype={
gS:function(){return this.d},
G:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.j(new P.bH(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kz.prototype={
bH:function(a){return H.IL(a)&0x3ffffff},
bI:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gez()
if(r==null?b==null:r===b)return s}return-1}}
P.ky.prototype={
gY:function(a){var t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fK(b)},
fK:function(a){var t=this.d
if(t==null)return!1
return this.aV(t[this.aU(a)],a)>=0},
cZ:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Z(0,a)?a:null
else return this.h4(a)},
h4:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(a)]
r=this.aV(s,a)
if(r<0)return
return J.d1(s,r).gdO()},
a2:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.j(new P.bH(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dF(r,b)}else return this.aT(0,b)},
aT:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.HD()
this.d=t}s=this.aU(b)
r=t[s]
if(r==null)t[s]=[this.cu(b)]
else{if(this.aV(r,b)>=0)return!1
r.push(this.cu(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aU(b)]
r=this.aV(s,b)
if(r<0)return!1
this.dH(s.splice(r,1)[0])
return!0},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dF:function(a,b){if(a[b]!=null)return!1
a[b]=this.cu(b)
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dH(t)
delete a[b]
return!0},
cu:function(a){var t,s
t=new P.rq(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dH:function(a){var t,s
t=a.gfI()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aU:function(a){return J.cS(a)&0x3ffffff},
aV:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b1(a[s].gdO(),b))return s
return-1},
$iseB:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.rq.prototype={
gdO:function(){return this.a},
gfI:function(){return this.c}}
P.dD.prototype={
gS:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bH(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.ri.prototype={}
P.eo.prototype={
aE:function(a,b){return H.dx(this,b,H.aq(this,"eo",0),null)},
Z:function(a,b){var t
for(t=this.gY(this);t.G();)if(J.b1(t.gS(),b))return!0
return!1},
a2:function(a,b){var t
for(t=this.gY(this);t.G();)b.$1(t.gS())},
a7:function(a,b){return P.dj(this,!0,H.aq(this,"eo",0))},
at:function(a){return this.a7(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.G();)++s
return s},
gX:function(a){return!this.gY(this).G()},
aB:function(a,b){return H.p1(this,b,H.aq(this,"eo",0))},
B:function(a){return P.uS(this,"(",")")},
$isn:1,
$asn:null}
P.hr.prototype={}
P.hz.prototype={}
P.fp.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.aT.prototype={
gY:function(a){return new H.es(a,this.gm(a),0,null,[H.aq(a,"aT",0)])},
W:function(a,b){return this.n(a,b)},
a2:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.j(new P.bH(a))}},
gX:function(a){return this.gm(a)===0},
Z:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b1(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.j(new P.bH(a))}return!1},
aE:function(a,b){return new H.eu(a,b,[H.aq(a,"aT",0),null])},
aB:function(a,b){return H.pF(a,b,null,H.aq(a,"aT",0))},
a7:function(a,b){var t,s,r
t=H.a([],[H.aq(a,"aT",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
at:function(a){return this.a7(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bF:function(a,b,c,d){var t
P.dk(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a8:function(a,b,c,d,e){var t,s,r,q,p,o
P.dk(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ae()
if(typeof b!=="number")return H.a6(b)
t=c-b
if(t===0)return
if(J.dG(e,0))H.aN(P.bx(e,0,null,"skipCount",null))
if(H.dX(d,"$isp",[H.aq(a,"aT",0)],"$asp")){s=e
r=d}else{r=J.zw(d,e).a7(0,!1)
s=0}q=J.kK(s)
p=J.b_(r)
if(J.ct(q.R(s,t),p.gm(r)))throw H.j(H.xy())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.R(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.R(s,o)))},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aK:function(a,b,c,d){var t,s,r,q,p
P.dk(b,c,this.gm(a),null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ae()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.az(a,b,r,d)
if(q!==0){this.a8(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a8(a,r,p,a,c)
this.az(a,b,r,d)}},
ba:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b1(this.n(a,t),b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
B:function(a){return P.jE(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.nF.prototype={
a2:function(a,b){var t,s
for(t=J.cI(J.ik(this.a));t.G();){s=t.gS()
b.$2(s,J.d1(this.a,s))}},
gm:function(a){return J.c4(J.ik(this.a))},
gX:function(a){return J.kR(J.ik(this.a))},
B:function(a){return P.nH(this)},
$isaL:1,
$asaL:null}
P.rZ.prototype={
i:function(a,b,c){throw H.j(new P.R("Cannot modify unmodifiable map"))},
$isaL:1,
$asaL:null}
P.nG.prototype={
n:function(a,b){return J.d1(this.a,b)},
i:function(a,b,c){J.ij(this.a,b,c)},
a2:function(a,b){J.wa(this.a,b)},
gX:function(a){return J.kR(this.a)},
gm:function(a){return J.c4(this.a)},
gaj:function(a){return J.ik(this.a)},
B:function(a){return J.cu(this.a)},
$isaL:1,
$asaL:null}
P.i0.prototype={$asaL:null,$isaL:1}
P.nI.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.y(a)
t.N=s+": "
t.N+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ns.prototype={
gY:function(a){return new P.rr(this,this.c,this.d,this.b,null,this.$ti)},
a2:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.aN(new P.bH(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
W:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a6(b)
if(0>b||b>=t)H.aN(P.bz(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a7:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hn(t)
return t},
at:function(a){return this.a7(a,!0)},
h:function(a,b){this.aT(0,b)},
bp:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
B:function(a){return P.jE(this,"{","}")},
eL:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.j(H.hs());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aT:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dQ();++this.d},
dQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a8(s,0,q,t,r)
C.b.a8(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
hn:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a8(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a8(a,0,p,r,t)
C.b.a8(a,p,p+this.c,this.a,0)
return this.c+p}},
fq:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.rr.prototype={
gS:function(){return this.e},
G:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aN(new P.bH(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oZ.prototype={
gX:function(a){return this.a===0},
aD:function(a,b){var t
for(t=J.cI(b);t.G();)this.h(0,t.gS())},
a7:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dD(this,this.r,null,null,[null]),s.c=this.e,r=0;s.G();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
at:function(a){return this.a7(a,!0)},
aE:function(a,b){return new H.h1(this,b,[H.N(this,0),null])},
B:function(a){return P.jE(this,"{","}")},
a2:function(a,b){var t
for(t=new P.dD(this,this.r,null,null,[null]),t.c=this.e;t.G();)b.$1(t.d)},
bs:function(a,b){var t,s
t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
if(!t.G())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.G())}else{s=H.y(t.d)
for(;t.G();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
aB:function(a,b){return H.p1(this,b,H.N(this,0))},
$iseB:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.oY.prototype={}
P.rl.prototype={
n:function(a,b){var t,s
t=this.b
if(t==null)return this.c.n(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.hb(b):s}},
gm:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.bg().length
return t},
gX:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.bg().length
return t===0},
gaj:function(a){var t
if(this.b==null){t=this.c
return t.gaj(t)}return new P.rm(this)},
i:function(a,b,c){var t,s
if(this.b==null)this.c.i(0,b,c)
else if(this.a_(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.hl().i(0,b,c)},
a_:function(a,b){if(this.b==null)return this.c.a_(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a2:function(a,b){var t,s,r,q
if(this.b==null)return this.c.a2(0,b)
t=this.bg()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.tf(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.j(new P.bH(this))}},
B:function(a){return P.nH(this)},
bg:function(){var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
hl:function(){var t,s,r,q,p
if(this.b==null)return this.c
t=P.cy(P.x,null)
s=this.bg()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.n(0,p))}if(q===0)s.push(null)
else C.b.sm(s,0)
this.b=null
this.a=null
this.c=t
return t},
hb:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.tf(this.a[a])
return this.b[a]=t},
$isaL:1,
$asaL:function(){return[P.x,null]}}
P.rm.prototype={
gm:function(a){var t=this.a
if(t.b==null){t=t.c
t=t.gm(t)}else t=t.bg().length
return t},
W:function(a,b){var t=this.a
if(t.b==null)t=t.gaj(t).W(0,b)
else{t=t.bg()
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t=t[b]}return t},
gY:function(a){var t=this.a
if(t.b==null){t=t.gaj(t)
t=t.gY(t)}else{t=t.bg()
t=new J.eU(t,t.length,0,null,[H.N(t,0)])}return t},
Z:function(a,b){return this.a.a_(0,b)},
$asdO:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]}}
P.l5.prototype={
ij:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.b_(b)
a1=P.dk(a0,a1,t.gm(b),null,null,null)
s=$.$get$yk()
if(typeof a1!=="number")return H.a6(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a0(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.tx(C.c.a9(b,l))
h=H.tx(C.c.a9(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.R()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c1("")
p.N+=C.c.I(b,q,r)
p.N+=H.fr(k)
q=l
continue}}throw H.j(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.I(b,q,a1)
e=t.length
if(o>=0)P.wm(b,n,a1,o,m,e)
else{d=C.a.bR(e-1,4)+1
if(d===1)throw H.j(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aK(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.wm(b,n,a1,o,m,c)
else{d=C.d.bR(c,4)
if(d===1)throw H.j(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aK(b,a1,a1,d===2?"==":"=")}return b},
$asf1:function(){return[[P.p,P.D],P.x]}}
P.l6.prototype={
$ased:function(){return[[P.p,P.D],P.x]}}
P.f1.prototype={}
P.ed.prototype={}
P.lP.prototype={
$asf1:function(){return[P.x,[P.p,P.D]]}}
P.hv.prototype={
B:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}}
P.nd.prototype={
B:function(a){return"Cyclic error in JSON stringify"}}
P.nc.prototype={
hF:function(a,b){var t=P.I5(a,this.ghI().a)
return t},
hE:function(a){return this.hF(a,null)},
hP:function(a,b){var t=this.ghQ()
t=P.HC(a,t.b,t.a)
return t},
eo:function(a){return this.hP(a,null)},
ghQ:function(){return C.a1},
ghI:function(){return C.a0},
$asf1:function(){return[P.z,P.x]}}
P.nf.prototype={
$ased:function(){return[P.z,P.x]}}
P.ne.prototype={
$ased:function(){return[P.x,P.z]}}
P.ro.prototype={
eZ:function(a){var t,s,r,q,p,o
t=J.b_(a)
s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
r=0
q=0
for(;q<s;++q){p=t.a0(a,q)
if(p>92)continue
if(p<32){if(q>r)this.dg(a,r,q)
r=q+1
this.ax(92)
switch(p){case 8:this.ax(98)
break
case 9:this.ax(116)
break
case 10:this.ax(110)
break
case 12:this.ax(102)
break
case 13:this.ax(114)
break
default:this.ax(117)
this.ax(48)
this.ax(48)
o=p>>>4&15
this.ax(o<10?48+o:87+o)
o=p&15
this.ax(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)this.dg(a,r,q)
r=q+1
this.ax(92)
this.ax(p)}}if(r===0)this.aw(a)
else if(r<s)this.dg(a,r,s)},
cr:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.j(new P.nd(a,null))}t.push(a)},
ci:function(a){var t,s,r,q
if(this.eY(a))return
this.cr(a)
try{t=this.b.$1(a)
if(!this.eY(t))throw H.j(new P.hv(a,null))
r=this.a
if(0>=r.length)return H.u(r,-1)
r.pop()}catch(q){s=H.bE(q)
throw H.j(new P.hv(a,s))}},
eY:function(a){var t,s
if(typeof a==="number"){if(!isFinite(a))return!1
this.iP(a)
return!0}else if(a===!0){this.aw("true")
return!0}else if(a===!1){this.aw("false")
return!0}else if(a==null){this.aw("null")
return!0}else if(typeof a==="string"){this.aw('"')
this.eZ(a)
this.aw('"')
return!0}else{t=J.ai(a)
if(!!t.$isp){this.cr(a)
this.iN(a)
t=this.a
if(0>=t.length)return H.u(t,-1)
t.pop()
return!0}else if(!!t.$isaL){this.cr(a)
s=this.iO(a)
t=this.a
if(0>=t.length)return H.u(t,-1)
t.pop()
return s}else return!1}},
iN:function(a){var t,s
this.aw("[")
t=J.b_(a)
if(t.gm(a)>0){this.ci(t.n(a,0))
for(s=1;s<t.gm(a);++s){this.aw(",")
this.ci(t.n(a,s))}}this.aw("]")},
iO:function(a){var t,s,r,q,p,o
t={}
s=J.b_(a)
if(s.gX(a)===!0){this.aw("{}")
return!0}r=s.gm(a)
if(typeof r!=="number")return r.ak()
q=new Array(r*2)
t.a=0
t.b=!0
s.a2(a,new P.rp(t,q))
if(!t.b)return!1
this.aw("{")
for(s=q.length,p='"',o=0;o<s;o+=2,p=',"'){this.aw(p)
this.eZ(q[o])
this.aw('":')
r=o+1
if(r>=s)return H.u(q,r)
this.ci(q[r])}this.aw("}")
return!0}}
P.rp.prototype={
$2:function(a,b){var t,s,r,q,p
if(typeof a!=="string")this.a.b=!1
t=this.b
s=this.a
r=s.a
q=r+1
s.a=q
p=t.length
if(r>=p)return H.u(t,r)
t[r]=a
s.a=q+1
if(q>=p)return H.u(t,q)
t[q]=b},
$S:function(){return{func:1,args:[,,]}}}
P.rn.prototype={
iP:function(a){this.c.N+=C.d.B(a)},
aw:function(a){this.c.N+=H.y(a)},
dg:function(a,b,c){this.c.N+=J.zy(a,b,c)},
ax:function(a){this.c.N+=H.fr(a)}}
P.qc.prototype={
gH:function(a){return"utf-8"}}
P.qd.prototype={
cT:function(a,b,c){var t,s,r,q
t=J.c4(a)
P.dk(b,c,t,null,null,null)
s=new P.c1("")
r=new P.t0(!1,s,!0,0,0,0)
r.cT(a,b,t)
r.hT(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
hB:function(a){return this.cT(a,0,null)},
$ased:function(){return[[P.p,P.D],P.x]}}
P.t0.prototype={
hT:function(a,b,c){if(this.e>0)throw H.j(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.t2(c)
p=new P.t1(this,a,b,c)
$loop$0:for(o=J.b_(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aQ()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,m)
throw H.j(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.B,k)
if(t<=C.B[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bN(t,16),a,m-r-1)
throw H.j(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bN(t,16),a,m-r-1)
throw H.j(k)}if(!this.c||t!==65279)n.N+=H.fr(t)
this.c=!1}if(typeof c!=="number")return H.a6(c)
k=m<c
for(;k;){j=q.$2(a,m)
if(J.ct(j,0)){this.c=!1
if(typeof j!=="number")return H.a6(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dm(l)
if(g.a4(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.zB(g.dj(l),16),a,h-1)
throw H.j(g)}else{if(typeof l!=="number")return l.aQ()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,h-1)
throw H.j(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.t2.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
if(typeof t!=="number")return H.a6(t)
s=J.b_(a)
r=b
for(;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aQ()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.t1.prototype={
$2:function(a,b){this.a.b.N+=P.pB(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.cQ.prototype={}
P.bG.prototype={}
P.e0.prototype={
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.e0))return!1
return this.a===b.a&&this.b===b.b},
aH:function(a,b){return C.a.aH(this.a,b.ghm())},
ga5:function(a){var t=this.a
return(t^C.a.b5(t,30))&1073741823},
B:function(a){var t,s,r,q,p,o,n
t=P.A9(H.xK(this))
s=P.iu(H.vp(this))
r=P.iu(H.vo(this))
q=P.iu(H.Gu(this))
p=P.iu(H.Gw(this))
o=P.iu(H.Gx(this))
n=P.Aa(H.Gv(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.A8(C.a.R(this.a,b.giW()),this.b)},
gie:function(){return this.a},
du:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.j(P.df(this.gie()))},
$isbG:1,
$asbG:function(){return[P.e0]},
ghm:function(){return this.a}}
P.V.prototype={$isbG:1,
$asbG:function(){return[P.dn]}}
P.dr.prototype={
R:function(a,b){return new P.dr(this.a+b.gbn())},
ae:function(a,b){return new P.dr(C.a.ae(this.a,b.gbn()))},
ak:function(a,b){return new P.dr(C.a.b0(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbn())},
aF:function(a,b){return C.a.aF(this.a,b.gbn())},
ay:function(a,b){return C.a.ay(this.a,b.gbn())},
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dr))return!1
return this.a===b.a},
ga5:function(a){return this.a&0x1FFFFFFF},
aH:function(a,b){return C.a.aH(this.a,b.gbn())},
B:function(a){var t,s,r,q,p
t=new P.lN()
s=this.a
if(s<0)return"-"+new P.dr(0-s).B(0)
r=t.$1(C.a.ar(s,6e7)%60)
q=t.$1(C.a.ar(s,1e6)%60)
p=new P.lM().$1(s%1e6)
return""+C.a.ar(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
dj:function(a){return new P.dr(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dr]},
gbn:function(){return this.a}}
P.lM.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.x,args:[P.D]}}}
P.lN.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.x,args:[P.D]}}}
P.ef.prototype={
gaR:function(){return H.cs(this.$thrownJsError)}}
P.fn.prototype={
B:function(a){return"Throw of null."}}
P.cT.prototype={
gcw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcv:function(){return""},
B:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gcw()+s+r
if(!this.a)return q
p=this.gcv()
o=P.wF(this.b)
return q+p+": "+H.y(o)},
gH:function(a){return this.c}}
P.eA.prototype={
gcw:function(){return"RangeError"},
gcv:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.aF()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mQ.prototype={
gcw:function(){return"RangeError"},
gcv:function(){if(J.dG(this.b,0))return": index must not be negative"
var t=this.f
if(J.b1(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.R.prototype={
B:function(a){return"Unsupported operation: "+this.a}}
P.eG.prototype={
B:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.d8.prototype={
B:function(a){return"Bad state: "+this.a}}
P.bH.prototype={
B:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.wF(t))+"."}}
P.od.prototype={
B:function(a){return"Out of Memory"},
gaR:function(){return},
$isef:1}
P.kb.prototype={
B:function(a){return"Stack Overflow"},
gaR:function(){return},
$isef:1}
P.lC.prototype={
B:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.r0.prototype={
B:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bJ.prototype={
B:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.I(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a6(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a9(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.y(r-o+1)+")\n"):s+(" (at character "+H.y(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.a0(q,m)
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
g=""}f=C.c.I(q,i,j)
return s+h+f+g+"\n"+C.c.ak(" ",r-i+h.length)+"^\n"},
gc7:function(a){return this.c}}
P.lW.prototype={
B:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bU
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aN(P.dH(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.vq(b,"expando$values")
return s==null?null:H.vq(s,t)},
i:function(a,b,c){var t,s
t=this.bU
if(typeof t!=="string")t.set(b,c)
else{s=H.vq(b,"expando$values")
if(s==null){s=new P.z()
H.xO(b,"expando$values",s)}H.xO(s,t,c)}},
gH:function(a){return this.a}}
P.D.prototype={$isbG:1,
$asbG:function(){return[P.dn]}}
P.n.prototype={
aE:function(a,b){return H.dx(this,b,H.aq(this,"n",0),null)},
cg:function(a,b){return new H.eJ(this,b,[H.aq(this,"n",0)])},
Z:function(a,b){var t
for(t=this.gY(this);t.G();)if(J.b1(t.gS(),b))return!0
return!1},
a2:function(a,b){var t
for(t=this.gY(this);t.G();)b.$1(t.gS())},
a7:function(a,b){return P.dj(this,b,H.aq(this,"n",0))},
at:function(a){return this.a7(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.G();)++s
return s},
gX:function(a){return!this.gY(this).G()},
aB:function(a,b){return H.p1(this,b,H.aq(this,"n",0))},
gbl:function(a){var t,s
t=this.gY(this)
if(!t.G())throw H.j(H.hs())
s=t.gS()
if(t.G())throw H.j(H.G6())
return s},
W:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.zE("index"))
if(b<0)H.aN(P.bx(b,0,null,"index",null))
for(t=this.gY(this),s=0;t.G();){r=t.gS()
if(b===s)return r;++s}throw H.j(P.bz(b,this,"index",null,s))},
B:function(a){return P.uS(this,"(",")")},
$asn:null}
P.jF.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.aL.prototype={$asaL:null}
P.d6.prototype={
ga5:function(a){return P.z.prototype.ga5.call(this,this)},
B:function(a){return"null"}}
P.dn.prototype={$isbG:1,
$asbG:function(){return[P.dn]}}
P.z.prototype={constructor:P.z,$isz:1,
T:function(a,b){return this===b},
ga5:function(a){return H.ew(this)},
B:function(a){return H.oy(this)},
gad:function(a){return new H.dU(H.kM(this),null)},
toString:function(){return this.B(this)}}
P.dy.prototype={}
P.eB.prototype={}
P.dS.prototype={}
P.x.prototype={$isbG:1,
$asbG:function(){return[P.x]}}
P.c1.prototype={
gm:function(a){return this.N.length},
gX:function(a){return this.N.length===0},
B:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eI.prototype={}
P.q9.prototype={
$2:function(a,b){var t,s,r,q
t=J.b_(b)
s=t.br(b,"=")
if(s===-1){if(!t.T(b,""))J.ij(a,P.t_(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.I(b,0,s)
q=C.c.al(b,s+1)
t=this.a
J.ij(a,P.t_(r,0,r.length,t,!0),P.t_(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.q6.prototype={
$2:function(a,b){throw H.j(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.x,P.D]}}}
P.q7.prototype={
$2:function(a,b){throw H.j(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.x],opt:[,]}}}
P.q8.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fq(C.c.I(this.a,a,b),16,null)
s=J.dm(t)
if(s.a4(t,0)||s.aF(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kF.prototype={
geW:function(){return this.b},
gcX:function(a){var t=this.c
if(t==null)return""
if(C.c.ah(t,"["))return C.c.I(t,1,t.length-1)
return t},
gd3:function(a){var t=this.d
if(t==null)return P.yr(this.a)
return t},
gd6:function(a){var t=this.f
return t==null?"":t},
ges:function(){var t=this.r
return t==null?"":t},
gd7:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.x
s=new P.i0(P.yd(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gew:function(){return this.c!=null},
gey:function(){return this.f!=null},
gex:function(){return this.r!=null},
B:function(a){var t=this.y
if(t==null){t=this.dU()
this.y=t}return t},
dU:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.y(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.y(s)}else t=s
t+=H.y(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
T:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ai(b)
if(!!t.$iseI){if(this.a===b.gdk())if(this.c!=null===b.gew()){s=this.b
r=b.geW()
if(s==null?r==null:s===r){s=this.gcX(this)
r=t.gcX(b)
if(s==null?r==null:s===r)if(J.b1(this.gd3(this),t.gd3(b)))if(J.b1(this.e,t.geH(b))){s=this.f
r=s==null
if(!r===b.gey()){if(r)s=""
if(s===t.gd6(b)){t=this.r
s=t==null
if(!s===b.gex()){if(s)t=""
t=t===b.ges()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga5:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dU()
this.y=t}t=C.c.ga5(t)
this.z=t}return t},
$iseI:1,
gdk:function(){return this.a},
geH:function(a){return this.e}}
P.to.prototype={
$1:function(a){throw H.j(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.q5.prototype={
geU:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.b_(s)
q=r.ba(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fG(s,o,p,C.k,!1)
if(n==null)n=r.I(s,o,p)
p=q}else n=null
m=P.fG(s,t,p,C.J,!1)
t=new P.qO(this,"data",null,null,null,m==null?r.I(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
B:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.th.prototype={
$1:function(a){return new Uint8Array(H.cz(96))},
$S:function(){return{func:1,args:[,]}}}
P.tg.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.zd(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.db,args:[,,]}}}
P.ti.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dd(a),r=0;r<t;++r)s.i(a,C.c.a9(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.x,P.D]}}}
P.tj.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a9(b,0),s=C.c.a9(b,1),r=J.dd(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.x,P.D]}}}
P.rL.prototype={
gew:function(){return this.c>0},
gey:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
gex:function(){return this.r<this.a.length},
gdk:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ah(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ah(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ah(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ah(this.a,"package")){this.x="package"
t="package"}else{t=C.c.I(this.a,0,t)
this.x=t}return t},
geW:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.I(this.a,s,t-1):""},
gcX:function(a){var t=this.c
return t>0?C.c.I(this.a,t,this.d):""},
gd3:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.R()
s=this.e
if(typeof s!=="number")return H.a6(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.R()
return H.fq(C.c.I(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ah(this.a,"http"))return 80
if(t===5&&C.c.ah(this.a,"https"))return 443
return 0},
geH:function(a){return C.c.I(this.a,this.e,this.f)},
gd6:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.I(this.a,t+1,s):""},
ges:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.al(s,t+1):""},
gd7:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.aa
t=P.x
return new P.i0(P.yd(this.gd6(this),C.n),[t,t])},
ga5:function(a){var t=this.y
if(t==null){t=C.c.ga5(this.a)
this.y=t}return t},
T:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ai(b)
if(!!t.$iseI)return this.a===t.B(b)
return!1},
B:function(a){return this.a},
$iseI:1}
P.qO.prototype={}
W.aQ.prototype={}
W.eT.prototype={
B:function(a){return String(a)},
$iseT:1,
$isf:1,
$isz:1,
gaa:function(a){return a.href},
san:function(a,b){return a.type=b},
saa:function(a,b){return a.href=b}}
W.kW.prototype={
B:function(a){return String(a)},
$isf:1,
$isz:1,
gaa:function(a){return a.href},
saa:function(a,b){return a.href=b}}
W.eX.prototype={$iseX:1,$isca:1,$isaf:1,$isz:1}
W.cJ.prototype={$isz:1}
W.l3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cJ]},
$isr:1,
$asr:function(){return[W.cJ]},
$isn:1,
$asn:function(){return[W.cJ]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cJ]},
$isaz:1,
$asaz:function(){return[W.cJ]}}
W.h4.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.h7.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.l7.prototype={
gaa:function(a){return a.href},
saa:function(a,b){return a.href=b}}
W.eZ.prototype={$iseZ:1}
W.f_.prototype={$isf_:1,$isag:1,$isf:1,$isz:1}
W.fX.prototype={$isfX:1,
gH:function(a){return a.name},
gaL:function(a){return a.value},
san:function(a,b){return a.type=b}}
W.il.prototype={
i9:function(a){return a.keys()}}
W.lg.prototype={$isz:1}
W.lh.prototype={$isz:1}
W.ec.prototype={$isf:1,$isz:1,
gm:function(a){return a.length}}
W.lm.prototype={$isag:1,$isf:1,$isz:1}
W.ip.prototype={
cV:function(a,b){return typeof console!="undefined"?console.error(b):null},
bk:function(a){return typeof console!="undefined"?console.group(a):null},
eA:function(a){return typeof console!="undefined"?console.info(a):null},
iJ:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fZ.prototype={
gH:function(a){return a.name}}
W.lu.prototype={
gaS:function(a){return a.style}}
W.lv.prototype={
gaa:function(a){return a.href}}
W.h_.prototype={
gaS:function(a){return a.style}}
W.h0.prototype={
gH:function(a){return a.name}}
W.lw.prototype={
gaS:function(a){return a.style}}
W.bM.prototype={$isbM:1,$isz:1}
W.f3.prototype={
bQ:function(a,b){var t=this.fU(a,b)
return t!=null?t:""},
fU:function(a,b){if(W.A7(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.Ab()+b)},
K:function(a,b){return a.item(b)},
gbq:function(a){return a.content},
gbD:function(a){return a.display},
sbD:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iW.prototype={}
W.qL.prototype={
bQ:function(a,b){var t=this.b
return J.zo(t.gai(t),b)},
hi:function(a,b){var t
for(t=this.a,t=new H.es(t,t.gm(t),0,null,[H.N(t,0)]);t.G();)t.d.style[a]=b},
sbD:function(a,b){this.hi("display",b)},
fw:function(a){var t=P.dj(this.a,!0,null)
this.b=new H.eu(t,new W.qM(),[H.N(t,0),null])}}
W.jV.prototype={}
W.qM.prototype={
$1:function(a){return J.tR(a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
gbq:function(a){return this.bQ(a,"content")},
gbD:function(a){return this.bQ(a,"display")}}
W.lx.prototype={
gaS:function(a){return a.style}}
W.ly.prototype={
gaS:function(a){return a.style}}
W.lD.prototype={
gcW:function(a){return a.files}}
W.f4.prototype={$isf4:1,$isz:1}
W.it.prototype={
c_:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.lG.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.iv.prototype={}
W.ee.prototype={$isee:1}
W.iw.prototype={$isf:1,$isz:1}
W.ix.prototype={
gH:function(a){return a.name}}
W.lH.prototype={
gH:function(a){var t=a.name
if(P.wC()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wC()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
B:function(a){return String(a)}}
W.lI.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.iy.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.iz.prototype={
B:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gb2(a))+" x "+H.y(this.gaW(a))},
T:function(a,b){var t
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
return a.left===t.gbt(b)&&a.top===t.gbu(b)&&this.gb2(a)===t.gb2(b)&&this.gaW(a)===t.gaW(b)},
ga5:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb2(a)
q=this.gaW(a)
return W.yo(W.eQ(W.eQ(W.eQ(W.eQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gdd:function(a){return new P.dz(a.left,a.top,[null])},
gc2:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width},
gU:function(a){return a.x},
gV:function(a){return a.y},
$isbL:1,
$asbL:function(){},
$isz:1}
W.iA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isz:1,
$isaE:1,
$asaE:function(){return[P.x]},
$isaz:1,
$asaz:function(){return[P.x]}}
W.iX.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.jg.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.iB.prototype={
K:function(a,b){return a.item(b)}}
W.iC.prototype={
h:function(a,b){return a.add(b)},
Z:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ku.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot modify list"))},
sm:function(a,b){throw H.j(new P.R("Cannot modify list"))},
gaS:function(a){return W.Hv(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.ca.prototype={
geh:function(a){return new W.qU(a)},
gej:function(a){return new W.qV(a)},
gc7:function(a){return P.GO(C.d.b0(a.offsetLeft),C.d.b0(a.offsetTop),C.d.b0(a.offsetWidth),C.d.b0(a.offsetHeight),null)},
B:function(a){return a.localName},
eB:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aO:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wE
if(t==null){t=H.a([],[W.e7])
s=new W.jT(t)
t.push(W.ym(null))
t.push(W.yq())
$.wE=s
d=s}else d=t
t=$.wD
if(t==null){t=new W.kG(d)
$.wD=t
c=t}else{t.a=d
c=t}}if($.e1==null){t=document
s=t.implementation.createHTMLDocument("")
$.e1=s
$.u3=s.createRange()
s=$.e1
s.toString
r=s.createElement("base")
J.zu(r,t.baseURI)
$.e1.head.appendChild(r)}t=$.e1
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e1
if(!!this.$isf_)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e1.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Z(C.a6,a.tagName)){$.u3.selectNodeContents(q)
p=$.u3.createContextualFragment(b)}else{q.innerHTML=b
p=$.e1.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e1.body
if(q==null?t!=null:q!==t)J.zr(q)
c.cj(p)
document.adoptNode(p)
return p},
hD:function(a,b,c){return this.aO(a,b,c,null)},
fa:function(a,b,c,d){a.textContent=null
a.appendChild(this.aO(a,b,c,d))},
cl:function(a,b){return this.fa(a,b,null,null)},
di:function(a){return a.getBoundingClientRect()},
$isca:1,
$isaf:1,
$isz:1,
$isf:1,
$isag:1,
gaS:function(a){return a.style},
gdW:function(a){return a.namespaceURI},
giE:function(a){return a.tagName}}
W.tm.prototype={
$1:function(a){return!!J.ai(a).$isca},
$S:function(){return{func:1,args:[,]}}}
W.lO.prototype={
gH:function(a){return a.name},
san:function(a,b){return a.type=b}}
W.h3.prototype={
gH:function(a){return a.name}}
W.lU.prototype={
gav:function(a){return a.error}}
W.Z.prototype={$isZ:1,$isz:1}
W.ag.prototype={
ee:function(a,b,c,d){if(c!=null)this.fE(a,b,c,!1)},
eK:function(a,b,c,d){if(c!=null)this.hd(a,b,c,!1)},
fE:function(a,b,c,d){return a.addEventListener(b,H.dl(c,1),!1)},
hd:function(a,b,c,d){return a.removeEventListener(b,H.dl(c,1),!1)},
$isag:1}
W.mo.prototype={
gH:function(a){return a.name}}
W.cd.prototype={$iscd:1,$isz:1,
gH:function(a){return a.name}}
W.fc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isfc:1,
$isaE:1,
$asaE:function(){return[W.cd]},
$isaz:1,
$asaz:function(){return[W.cd]},
$isz:1,
$isp:1,
$asp:function(){return[W.cd]},
$isr:1,
$asr:function(){return[W.cd]},
$isn:1,
$asn:function(){return[W.cd]}}
W.iY.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.jh.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.mp.prototype={
gav:function(a){return a.error}}
W.mq.prototype={
gH:function(a){return a.name}}
W.mr.prototype={
gav:function(a){return a.error},
gm:function(a){return a.length}}
W.mt.prototype={
gaS:function(a){return a.style},
gde:function(a){return a.weight}}
W.mu.prototype={
h:function(a,b){return a.add(b)},
iV:function(a,b,c){return a.forEach(H.dl(b,3),c)},
a2:function(a,b){b=H.dl(b,3)
return a.forEach(b)}}
W.iS.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.cm.prototype={$iscm:1,$isz:1}
W.mF.prototype={$isz:1,
gm:function(a){return a.length}}
W.fe.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.iZ.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.ji.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.iU.prototype={
K:function(a,b){return a.item(b)}}
W.e5.prototype={
j3:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ik:function(a,b,c,d){return a.open(b,c,d)},
giA:function(a){return W.HZ(a.response)},
bf:function(a,b){return a.send(b)},
$ise5:1,
$isz:1,
giB:function(a){return a.responseText}}
W.mI.prototype={
$1:function(a){return J.zj(a)},
$S:function(){return{func:1,args:[W.e5]}}}
W.mJ.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ay()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aI(0,t)
else p.bB(a)},
$S:function(){return{func:1,args:[,]}}}
W.hk.prototype={}
W.mM.prototype={
gH:function(a){return a.name}}
W.hl.prototype={$ishl:1}
W.fg.prototype={$isfg:1,$isca:1,$isaf:1,$isz:1,
aI:function(a,b){return a.complete.$1(b)}}
W.hm.prototype={$ishm:1,$isca:1,$isf:1,$isz:1,$isag:1,$isaf:1,
gcW:function(a){return a.files},
gH:function(a){return a.name},
gaL:function(a){return a.value},
san:function(a,b){return a.type=b}}
W.ni.prototype={
gH:function(a){return a.name}}
W.jI.prototype={
gaL:function(a){return a.value}}
W.hw.prototype={
h:function(a,b){return a.add(b)}}
W.hx.prototype={$ishx:1,
gaa:function(a){return a.href},
saa:function(a,b){return a.href=b},
san:function(a,b){return a.type=b}}
W.nz.prototype={
B:function(a){return String(a)},
$isz:1,
gaa:function(a){return a.href}}
W.nE.prototype={
gH:function(a){return a.name}}
W.jM.prototype={
gav:function(a){return a.error}}
W.jN.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nL.prototype={
san:function(a,b){return a.type=b}}
W.nM.prototype={
san:function(a,b){return a.type=b}}
W.nN.prototype={
gbq:function(a){return a.content},
gH:function(a){return a.name}}
W.nO.prototype={
gaL:function(a){return a.value}}
W.nP.prototype={
iR:function(a,b,c){return a.send(b,c)},
bf:function(a,b){return a.send(b)}}
W.hF.prototype={
gH:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isz:1}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cn]},
$isaz:1,
$asaz:function(){return[W.cn]},
$isz:1,
$isp:1,
$asp:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.j8.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.js.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.e6.prototype={
gc7:function(a){var t,s,r,q,p
if(!!a.offsetX)return new P.dz(a.offsetX,a.offsetY,[null])
else{if(!J.ai(W.yB(a.target)).$isca)throw H.j(new P.R("offsetX is only supported on elements"))
t=W.yB(a.target)
s=a.clientX
r=a.clientY
q=J.zl(J.zn(t))
p=q.a
if(typeof s!=="number")return s.ae()
if(typeof p!=="number")return H.a6(p)
q=q.b
if(typeof r!=="number")return r.ae()
if(typeof q!=="number")return H.a6(q)
return new P.dz(C.d.eQ(s-p),C.d.eQ(r-q),[null])}}}
W.o1.prototype={$isf:1,$isz:1}
W.o2.prototype={
gH:function(a){return a.name}}
W.d_.prototype={
gbl:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.j(new P.d8("No elements"))
if(s>1)throw H.j(new P.d8("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
aD:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gY:function(a){var t=this.a.childNodes
return new W.iQ(t,t.length,-1,null,[H.aq(t,"bv",0)])},
a8:function(a,b,c,d,e){throw H.j(new P.R("Cannot setRange on Node list"))},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
bF:function(a,b,c,d){throw H.j(new P.R("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.j(new P.R("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashz:function(){return[W.af]},
$asfp:function(){return[W.af]},
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.af.prototype={
gii:function(a){return new W.d_(a)},
iw:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
B:function(a){var t=a.nodeValue
return t==null?this.fg(a):t},
Z:function(a,b){return a.contains(b)},
$isaf:1,
$isz:1,
gc9:function(a){return a.parentNode},
gd4:function(a){return a.previousSibling}}
W.jR.prototype={
d5:function(a){return a.previousNode()}}
W.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.j9.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.jt.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.o7.prototype={
san:function(a,b){return a.type=b}}
W.o8.prototype={
gH:function(a){return a.name},
san:function(a,b){return a.type=b}}
W.oc.prototype={
gaL:function(a){return a.value}}
W.oe.prototype={
gH:function(a){return a.name},
gaL:function(a){return a.value}}
W.oi.prototype={
gH:function(a){return a.name},
gaL:function(a){return a.value}}
W.ok.prototype={$isf:1,$isz:1}
W.e8.prototype={
gH:function(a){return a.name}}
W.oq.prototype={
gm:function(a){return a.length}}
W.cf.prototype={
K:function(a,b){return a.item(b)},
$iscf:1,
$isz:1,
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.k1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cf]},
$isr:1,
$asr:function(){return[W.cf]},
$isn:1,
$asn:function(){return[W.cf]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cf]},
$isaz:1,
$asaz:function(){return[W.cf]}}
W.ja.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.ju.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.ow.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.ox.prototype={
bf:function(a,b){return a.send(b)}}
W.oB.prototype={
gaL:function(a){return a.value}}
W.oE.prototype={
di:function(a){return a.getBoundingClientRect()}}
W.oO.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.k4.prototype={
bf:function(a,b){return a.send(b)}}
W.k5.prototype={
san:function(a,b){return a.type=b}}
W.fu.prototype={$isfu:1,$isca:1,$isaf:1,$isz:1,
san:function(a,b){return a.type=b}}
W.k6.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name},
gaL:function(a){return a.value}}
W.oX.prototype={
gH:function(a){return a.name}}
W.p_.prototype={$isag:1,$isf:1,$isz:1}
W.p0.prototype={
gH:function(a){return a.name}}
W.p3.prototype={
gH:function(a){return a.name}}
W.co.prototype={$isco:1,$isz:1}
W.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.co]},
$isaz:1,
$asaz:function(){return[W.co]}}
W.h5.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.h8.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.p6.prototype={
san:function(a,b){return a.type=b}}
W.hR.prototype={$ishR:1}
W.cp.prototype={$iscp:1,$isz:1,
gde:function(a){return a.weight}}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cp]},
$isaz:1,
$asaz:function(){return[W.cp]}}
W.jb.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.jv.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.fv.prototype={$isfv:1,$isz:1}
W.p8.prototype={
gav:function(a){return a.error}}
W.ch.prototype={
K:function(a,b){return a.item(b)},
$isch:1,
$isz:1,
gm:function(a){return a.length}}
W.p9.prototype={
gH:function(a){return a.name}}
W.pa.prototype={
gH:function(a){return a.name}}
W.pe.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a2:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gaj:function(a){var t=H.a([],[P.x])
this.a2(a,new W.pf(t))
return t},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isaL:1,
$asaL:function(){return[P.x,P.x]},
$isz:1}
W.pf.prototype={
$2:function(a,b){return this.a.push(a)},
$S:function(){return{func:1,args:[,,]}}}
W.pC.prototype={
san:function(a,b){return a.type=b}}
W.cj.prototype={$iscj:1,$isz:1,
gaa:function(a){return a.href}}
W.eF.prototype={}
W.kd.prototype={
aO:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=W.Ac("<table>"+H.y(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d_(s).aD(0,J.zg(t))
return s}}
W.pJ.prototype={
aO:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aO(t.createElement("table"),b,c,d)
t.toString
t=new W.d_(t)
r=t.gbl(t)
r.toString
t=new W.d_(r)
q=t.gbl(t)
s.toString
q.toString
new W.d_(s).aD(0,new W.d_(q))
return s}}
W.pK.prototype={
aO:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aO(t.createElement("table"),b,c,d)
t.toString
t=new W.d_(t)
r=t.gbl(t)
s.toString
r.toString
new W.d_(s).aD(0,new W.d_(r))
return s}}
W.hW.prototype={$ishW:1,
gbq:function(a){return a.content}}
W.hX.prototype={$ishX:1,
gH:function(a){return a.name},
gaL:function(a){return a.value}}
W.cO.prototype={$isz:1}
W.cG.prototype={$isz:1}
W.pQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cG]},
$isaz:1,
$asaz:function(){return[W.cG]},
$isz:1,
$isp:1,
$asp:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$isn:1,
$asn:function(){return[W.cG]}}
W.jc.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.jw.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.pR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cO]},
$isaz:1,
$asaz:function(){return[W.cO]},
$isz:1,
$isp:1,
$asp:function(){return[W.cO]},
$isr:1,
$asr:function(){return[W.cO]},
$isn:1,
$asn:function(){return[W.cO]}}
W.h6.prototype={
$asp:function(){return[W.cO]},
$asr:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isp:1,
$isr:1,
$isn:1}
W.h9.prototype={
$asp:function(){return[W.cO]},
$asr:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isp:1,
$isr:1,
$isn:1}
W.pV.prototype={
gm:function(a){return a.length}}
W.cq.prototype={$iscq:1,$isz:1}
W.kf.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cq]},
$isaz:1,
$asaz:function(){return[W.cq]}}
W.jd.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.jx.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.fy.prototype={$isfy:1,$isz:1}
W.kg.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.fz.prototype={}
W.q0.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.kh.prototype={
il:function(a){return a.parentNode()},
d5:function(a){return a.previousNode()}}
W.dB.prototype={}
W.qa.prototype={
B:function(a){return String(a)},
$isf:1,
$isz:1,
gaa:function(a){return a.href}}
W.qe.prototype={$isz:1}
W.qf.prototype={
gm:function(a){return a.length}}
W.fA.prototype={$isfA:1,$isz:1}
W.ki.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.qk.prototype={
bf:function(a,b){return a.send(b)}}
W.kl.prototype={$isf:1,$isz:1,$isag:1,
gH:function(a){return a.name}}
W.qr.prototype={$isag:1,$isf:1,$isz:1}
W.eK.prototype={$isf:1,$isz:1}
W.fB.prototype={$isfB:1,$isaf:1,$isz:1,
gH:function(a){return a.name},
gdW:function(a){return a.namespaceURI}}
W.qJ.prototype={
B:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
T:function(a,b){var t,s,r
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
s=a.left
r=t.gbt(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbu(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=J.cS(a.left)
s=J.cS(a.top)
r=J.cS(a.width)
q=J.cS(a.height)
return W.yo(W.eQ(W.eQ(W.eQ(W.eQ(0,t),s),r),q))},
gdd:function(a){return new P.dz(a.left,a.top,[null])},
$isbL:1,
$asbL:function(){},
$isz:1,
gc2:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width}}
W.i4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[P.bL]},
$isaz:1,
$asaz:function(){return[P.bL]},
$isz:1,
$isp:1,
$asp:function(){return[P.bL]},
$isr:1,
$asr:function(){return[P.bL]},
$isn:1,
$asn:function(){return[P.bL]}}
W.je.prototype={
$asp:function(){return[P.bL]},
$asr:function(){return[P.bL]},
$asn:function(){return[P.bL]},
$isp:1,
$isr:1,
$isn:1}
W.jy.prototype={
$asp:function(){return[P.bL]},
$asr:function(){return[P.bL]},
$asn:function(){return[P.bL]},
$isp:1,
$isr:1,
$isn:1}
W.ks.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bM]},
$isr:1,
$asr:function(){return[W.bM]},
$isn:1,
$asn:function(){return[W.bM]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.bM]},
$isaz:1,
$asaz:function(){return[W.bM]}}
W.jf.prototype={
$asp:function(){return[W.bM]},
$asr:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$isr:1,
$isn:1}
W.jz.prototype={
$asp:function(){return[W.bM]},
$asr:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$isr:1,
$isn:1}
W.qS.prototype={$isf:1,$isz:1}
W.qT.prototype={
gaW:function(a){return a.height},
gb2:function(a){return a.width},
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.kw.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cm]},
$isaz:1,
$asaz:function(){return[W.cm]},
$isz:1,
$isp:1,
$asp:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$isn:1,
$asn:function(){return[W.cm]}}
W.j_.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.jj.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.re.prototype={$isag:1,$isf:1,$isz:1}
W.ia.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.j0.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.jk.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.rI.prototype={$isag:1,$isf:1,$isz:1}
W.kB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$isn:1,
$asn:function(){return[W.ch]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.ch]},
$isaz:1,
$asaz:function(){return[W.ch]}}
W.j1.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.jl.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.kD.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cj]},
$isaz:1,
$asaz:function(){return[W.cj]},
$isz:1,
$isp:1,
$asp:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]}}
W.j2.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.jm.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.t5.prototype={$isf:1,$isz:1}
W.t6.prototype={$isf:1,$isz:1}
W.qF.prototype={
a2:function(a,b){var t,s,r,q,p
for(t=this.gaj(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.c3)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaj:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.x])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aM(p)
if(o.gdW(p)==null)s.push(o.gH(p))}return s},
gX:function(a){return this.gaj(this).length===0},
$isaL:1,
$asaL:function(){return[P.x,P.x]},
gdS:function(){return this.a}}
W.qU.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaj(this).length}}
W.qV.prototype={
aJ:function(){var t,s,r,q,p
t=P.a2(null,null,null,P.x)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.c3)(s),++q){p=J.tS(s[q])
if(p.length!==0)t.h(0,p)}return t},
eX:function(a){this.a.className=a.bs(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
Z:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdS:function(){return this.a}}
W.qY.prototype={
aX:function(a,b,c,d){return W.eN(this.a,this.b,a,!1,H.N(this,0))},
eE:function(a,b,c){return this.aX(a,null,b,c)}}
W.i5.prototype={}
W.qZ.prototype={
c4:function(a){if(this.b==null)return
this.ec()
this.b=null
this.d=null
return},
d1:function(a,b){if(this.b==null)return;++this.a
this.ec()},
eI:function(a){return this.d1(a,null)},
eM:function(a){if(this.b==null||this.a<=0)return;--this.a
this.ea()},
ea:function(){var t=this.d
if(t!=null&&this.a<=0)J.z5(this.b,this.c,t,!1)},
ec:function(){var t=this.d
if(t!=null)J.zs(this.b,this.c,t,!1)},
fz:function(a,b,c,d,e){this.ea()}}
W.r_.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i7.prototype={
bo:function(a){return $.$get$yn().Z(0,W.h2(a))},
b7:function(a,b,c){var t,s,r
t=W.h2(a)
s=$.$get$vW()
r=s.n(0,H.y(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fA:function(a){var t,s
t=$.$get$vW()
if(t.gX(t)){for(s=0;s<262;++s)t.i(0,C.a3[s],W.IA())
for(s=0;s<12;++s)t.i(0,C.r[s],W.IB())}},
$ise7:1,
geV:function(){return this.a}}
W.bv.prototype={
gY:function(a){return new W.iQ(a,this.gm(a),-1,null,[H.aq(a,"bv",0)])},
h:function(a,b){throw H.j(new P.R("Cannot add to immutable List."))},
a8:function(a,b,c,d,e){throw H.j(new P.R("Cannot setRange on immutable List."))},
az:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.R("Cannot modify an immutable List."))},
bF:function(a,b,c,d){throw H.j(new P.R("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.jT.prototype={
h:function(a,b){this.a.push(b)},
bo:function(a){return C.b.eg(this.a,new W.o4(a))},
b7:function(a,b,c){return C.b.eg(this.a,new W.o3(a,b,c))},
$ise7:1}
W.o4.prototype={
$1:function(a){return a.bo(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.o3.prototype={
$1:function(a){return a.b7(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
bo:function(a){return this.a.Z(0,W.h2(a))},
b7:function(a,b,c){var t,s
t=W.h2(a)
s=this.c
if(s.Z(0,H.y(t)+"::"+b))return this.d.hq(c)
else if(s.Z(0,"*::"+b))return this.d.hq(c)
else{s=this.b
if(s.Z(0,H.y(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.y(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
fC:function(a,b,c,d){var t,s,r
this.a.aD(0,c)
t=b.cg(0,new W.rJ())
s=b.cg(0,new W.rK())
this.b.aD(0,t)
r=this.c
r.aD(0,C.E)
r.aD(0,s)},
$ise7:1,
geV:function(){return this.d}}
W.rJ.prototype={
$1:function(a){return!C.b.Z(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rK.prototype={
$1:function(a){return C.b.Z(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rW.prototype={
b7:function(a,b,c){if(this.fm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.wb(a).a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.rX.prototype={
$1:function(a){return"TEMPLATE::"+H.y(a)},
$S:function(){return{func:1,args:[,]}}}
W.rV.prototype={
bo:function(a){var t=J.ai(a)
if(!!t.$ishP)return!1
t=!!t.$isck
if(t&&W.h2(a)==="foreignObject")return!1
if(t)return!0
return!1},
b7:function(a,b,c){if(b==="is"||C.c.ah(b,"on"))return!1
return this.bo(a)},
$ise7:1}
W.iQ.prototype={
G:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.d1(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gS:function(){return this.d}}
W.qN.prototype={
ee:function(a,b,c,d){return H.aN(new P.R("You can only attach EventListeners to your own window."))},
eK:function(a,b,c,d){return H.aN(new P.R("You can only attach EventListeners to your own window."))},
$isag:1,
$isf:1}
W.e7.prototype={}
W.rY.prototype={
cj:function(a){}}
W.rH.prototype={}
W.kG.prototype={
cj:function(a){new W.t3(this).$2(a,null)},
bz:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
hg:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.wb(a)
r=s.gdS().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bE(n)}p="element unprintable"
try{p=J.cu(a)}catch(n){H.bE(n)}try{o=W.h2(a)
this.hf(a,b,t,p,o,s,r)}catch(n){if(H.bE(n) instanceof P.cT)throw n
else{this.bz(a,b)
window
m="Removing corrupted element "+H.y(p)
if(typeof console!="undefined")console.warn(m)}}},
hf:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bz(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bo(a)){this.bz(a,b)
window
t="Removing disallowed element <"+H.y(e)+"> from "+J.cu(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b7(a,"is",g)){this.bz(a,b)
window
t="Removing disallowed type extension <"+H.y(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaj(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gaj(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.b7(a,J.zA(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.y(e)+" "+q+'="'+H.y(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ai(a).$ishW)this.cj(a.content)}}
W.t3.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.hg(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bz(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.zh(t)}catch(q){H.bE(q)
p=t
if(r){o=J.aM(p)
if(o.gc9(p)!=null){o.gc9(p)
o.gc9(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.rS.prototype={
bG:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ai(a)
if(!!s.$ise0)return new Date(a.a)
if(!!s.$isGQ)throw H.j(new P.eG("structured clone of RegExp"))
if(!!s.$iscd)return a
if(!!s.$iseZ)return a
if(!!s.$isfc)return a
if(!!s.$ishl)return a
if(!!s.$isfl||!!s.$isev)return a
if(!!s.$isaL){r=this.bG(a)
q=this.b
p=q.length
if(r>=p)return H.u(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.u(q,r)
q[r]=o
s.a2(a,new P.rU(t,this))
return t.a}if(!!s.$isp){r=this.bG(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hC(a,r)}throw H.j(new P.eG("structured clone of other type"))},
hC:function(a,b){var t,s,r,q,p
t=J.b_(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bd(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.rU.prototype={
$2:function(a,b){this.a.a[a]=this.b.bd(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qy.prototype={
bG:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e0(s,!0)
r.du(s,!0)
return r}if(a instanceof RegExp)throw H.j(new P.eG("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Il(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bG(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jJ()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hV(a,new P.qz(t,this))
return t.a}if(a instanceof Array){p=this.bG(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.b_(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a6(m)
r=J.dd(n)
l=0
for(;l<m;++l)r.i(n,l,this.bd(o.n(a,l)))
return n}return a}}
P.qz.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bd(b)
J.ij(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rT.prototype={}
P.ko.prototype={
hV:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.c3)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.tq.prototype={
$1:function(a){return this.a.aI(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.tr.prototype={
$1:function(a){return this.a.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.ls.prototype={
ed:function(a){if($.$get$wu().b.test(a))return a
throw H.j(P.dH(a,"value","Not a valid class token"))},
B:function(a){return this.aJ().bs(0," ")},
gY:function(a){var t,s
t=this.aJ()
s=new P.dD(t,t.r,null,null,[null])
s.c=t.e
return s},
a2:function(a,b){this.aJ().a2(0,b)},
aE:function(a,b){var t=this.aJ()
return new H.h1(t,b,[H.N(t,0),null])},
gX:function(a){return this.aJ().a===0},
gm:function(a){return this.aJ().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.ed(b)
return this.aJ().Z(0,b)},
cZ:function(a){return this.Z(0,a)?a:null},
h:function(a,b){this.ed(b)
return this.ig(0,new P.lt(b))},
a7:function(a,b){return this.aJ().a7(0,!0)},
at:function(a){return this.a7(a,!0)},
aB:function(a,b){var t=this.aJ()
return H.p1(t,b,H.N(t,0))},
ig:function(a,b){var t,s
t=this.aJ()
s=b.$1(t)
this.eX(t)
return s},
$iseB:1,
$aseB:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]}}
P.lt.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lE.prototype={
gH:function(a){return a.name}}
P.te.prototype={
$1:function(a){this.b.aI(0,new P.ko([],[],!1).bd(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mP.prototype={
gH:function(a){return a.name}}
P.o9.prototype={
c_:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.h1(a,b,c)
q=P.HY(t)
return q}catch(p){s=H.bE(p)
r=H.cs(p)
q=P.wS(s,r,null)
return q}},
h:function(a,b){return this.c_(a,b,null)},
h1:function(a,b,c){return a.add(new P.rT([],[]).bd(b))},
gH:function(a){return a.name}}
P.hN.prototype={
gav:function(a){return a.error}}
P.pZ.prototype={
gav:function(a){return a.error}}
P.rk.prototype={
bK:function(a){if(a<=0||a>4294967296)throw H.j(P.xT("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
d_:function(){return Math.random()}}
P.ry.prototype={
b4:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ar(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bK:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.j(P.xT("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b4()
return(this.a&t)>>>0}do{this.b4()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
d_:function(){this.b4()
var t=this.a
this.b4()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fB:function(a){var t,s,r,q,p,o,n,m
t=J.dG(a,0)?-1:0
do{if(typeof a!=="number")return a.aQ()
s=(a&4294967295)>>>0
a=C.d.ar(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ar(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ar(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ar(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ar(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ar(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ar(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b4()
this.b4()
this.b4()
this.b4()}}
P.dz.prototype={
B:function(a){return"Point("+H.y(this.a)+", "+H.y(this.b)+")"},
T:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.dz))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
ga5:function(a){var t,s
t=J.cS(this.a)
s=J.cS(this.b)
return P.yp(P.i8(P.i8(0,t),s))},
R:function(a,b){var t,s,r,q
t=this.a
s=J.aM(b)
r=s.gU(b)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return H.a6(r)
q=this.b
s=s.gV(b)
if(typeof q!=="number")return q.R()
if(typeof s!=="number")return H.a6(s)
return new P.dz(t+r,q+s,this.$ti)},
ak:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.ak()
s=this.b
if(typeof s!=="number")return s.ak()
return new P.dz(t*b,s*b,this.$ti)},
gU:function(a){return this.a},
gV:function(a){return this.b}}
P.rz.prototype={
gcc:function(a){var t=this.a
if(typeof t!=="number")return t.R()
return t+this.c},
gc2:function(a){var t=this.b
if(typeof t!=="number")return t.R()
return t+this.d},
B:function(a){return"Rectangle ("+H.y(this.a)+", "+H.y(this.b)+") "+this.c+" x "+this.d},
T:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
s=this.a
r=t.gbt(b)
if(s==null?r==null:s===r){r=this.b
q=t.gbu(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.R()
if(s+this.c===t.gcc(b)){if(typeof r!=="number")return r.R()
t=r+this.d===t.gc2(b)}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=this.a
s=J.cS(t)
r=this.b
q=J.cS(r)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return r.R()
return P.yp(P.i8(P.i8(P.i8(P.i8(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))},
gdd:function(a){return new P.dz(this.a,this.b,this.$ti)}}
P.bL.prototype={$asbL:null,
gbt:function(a){return this.a},
gbu:function(a){return this.b},
gb2:function(a){return this.c},
gaW:function(a){return this.d}}
P.kT.prototype={$isf:1,$isz:1,
gaa:function(a){return a.href}}
P.eb.prototype={$isf:1,$isz:1}
P.lX.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.lY.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.lZ.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m_.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m0.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m1.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m2.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m3.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m4.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m5.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gaa:function(a){return a.href}}
P.m6.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m7.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m8.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m9.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.ma.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mb.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mc.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.md.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.ms.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gaa:function(a){return a.href}}
P.mw.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.dv.prototype={}
P.e4.prototype={$isf:1,$isz:1}
P.mN.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gaa:function(a){return a.href}}
P.d5.prototype={$isz:1}
P.nl.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d5]},
$isr:1,
$asr:function(){return[P.d5]},
$isn:1,
$asn:function(){return[P.d5]},
$isz:1}
P.j3.prototype={
$asp:function(){return[P.d5]},
$asr:function(){return[P.d5]},
$asn:function(){return[P.d5]},
$isp:1,
$isr:1,
$isn:1}
P.jn.prototype={
$asp:function(){return[P.d5]},
$asr:function(){return[P.d5]},
$asn:function(){return[P.d5]},
$isp:1,
$isr:1,
$isn:1}
P.nJ.prototype={$isf:1,$isz:1}
P.nK.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.d7.prototype={$isz:1}
P.o5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$isr:1,
$asr:function(){return[P.d7]},
$isn:1,
$asn:function(){return[P.d7]},
$isz:1}
P.j4.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.jo.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.oo.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gaa:function(a){return a.href}}
P.ot.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.ou.prototype={
gm:function(a){return a.length}}
P.oG.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.oH.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.hP.prototype={$ishP:1,$isf:1,$isz:1,
gaa:function(a){return a.href},
san:function(a,b){return a.type=b}}
P.pA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isz:1}
P.j5.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.jp.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.pD.prototype={
san:function(a,b){return a.type=b}}
P.l_.prototype={
aJ:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a2(null,null,null,P.x)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.c3)(r),++p){o=J.tS(r[p])
if(o.length!==0)s.h(0,o)}return s},
eX:function(a){this.a.setAttribute("class",a.bs(0," "))}}
P.ck.prototype={
gej:function(a){return new P.l_(a)},
aO:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e7])
t.push(W.ym(null))
t.push(W.yq())
t.push(new W.rV())
c=new W.kG(new W.jT(t))}s='<svg version="1.1">'+H.y(b)+"</svg>"
t=document
r=t.body
q=(r&&C.w).hD(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d_(q)
o=t.gbl(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
eB:function(a,b,c,d,e){throw H.j(new P.R("Cannot invoke insertAdjacentHtml on SVG."))},
$isck:1,
$isag:1,
$isf:1,
$isz:1}
P.pG.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.pI.prototype={$isf:1,$isz:1}
P.ke.prototype={}
P.pP.prototype={$isf:1,$isz:1,
gaa:function(a){return a.href}}
P.hZ.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.da.prototype={$isz:1}
P.q_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.da]},
$isr:1,
$asr:function(){return[P.da]},
$isn:1,
$asn:function(){return[P.da]},
$isz:1}
P.j6.prototype={
$asp:function(){return[P.da]},
$asr:function(){return[P.da]},
$asn:function(){return[P.da]},
$isp:1,
$isr:1,
$isn:1}
P.jq.prototype={
$asp:function(){return[P.da]},
$asr:function(){return[P.da]},
$asn:function(){return[P.da]},
$isp:1,
$isr:1,
$isn:1}
P.qb.prototype={$isf:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gaa:function(a){return a.href}}
P.qg.prototype={$isf:1,$isz:1}
P.qh.prototype={$isf:1,$isz:1}
P.i6.prototype={$isf:1,$isz:1,
gaa:function(a){return a.href}}
P.rE.prototype={$isf:1,$isz:1}
P.rF.prototype={$isf:1,$isz:1}
P.rG.prototype={$isf:1,$isz:1}
P.bi.prototype={}
P.db.prototype={$isp:1,
$asp:function(){return[P.D]},
$isr:1,
$asr:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.fR.prototype={$isfR:1,$isz:1,
gm:function(a){return a.length}}
P.eW.prototype={$iseW:1,$isz:1,
gc3:function(a){return a.buffer}}
P.fS.prototype={
fN:function(a,b,c,d){return a.decodeAudioData(b,H.dl(c,1),H.dl(d,1))},
hG:function(a,b){var t,s,r
t=P.fR
s=new P.bk(0,$.ao,null,[t])
r=new P.dW(s,[t])
this.fN(a,b,new P.l0(r),new P.l1(r))
return s}}
P.l0.prototype={
$1:function(a){this.a.aI(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.l1.prototype={
$1:function(a){var t=this.a
if(a==null)t.bB("")
else t.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.bF.prototype={}
P.eY.prototype={}
P.l9.prototype={
san:function(a,b){return a.type=b}}
P.lr.prototype={
gc3:function(a){return a.buffer}}
P.jY.prototype={
san:function(a,b){return a.type=b}}
P.kV.prototype={
gH:function(a){return a.name}}
P.oK.prototype={$isz:1}
P.oL.prototype={$isf:1,$isz:1}
P.t4.prototype={$isf:1,$isz:1}
P.ka.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return P.yQ(a.item(b))},
i:function(a,b,c){throw H.j(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.R("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
K:function(a,b){return P.yQ(a.item(b))},
$isp:1,
$asp:function(){return[P.aL]},
$isr:1,
$asr:function(){return[P.aL]},
$isn:1,
$asn:function(){return[P.aL]},
$isz:1}
P.j7.prototype={
$asp:function(){return[P.aL]},
$asr:function(){return[P.aL]},
$asn:function(){return[P.aL]},
$isp:1,
$isr:1,
$isn:1}
P.jr.prototype={
$asp:function(){return[P.aL]},
$asr:function(){return[P.aL]},
$asn:function(){return[P.aL]},
$isp:1,
$isr:1,
$isn:1}
T.fN.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gY:function(a){var t=this.a
return new J.eU(t,t.length,0,null,[H.N(t,0)])},
$ashr:function(){return[T.fO]},
$asn:function(){return[T.fO]},
gcW:function(a){return this.a}}
T.fO.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.ff(C.C)
r=T.ff(C.D)
q=T.xH(0,this.b)
new T.iV(s,q,0,0,0,t,r).dT()
r=q.c.buffer
q=q.a
r.toString
q=H.cM(r,0,q)
this.cy=q
t=q}else{t=s.bO()
this.cy=t}this.ch=0}}return t},
B:function(a){return this.a},
gH:function(a){return this.a}}
T.de.prototype={
B:function(a){return"ArchiveException: "+this.a}}
T.hn.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ae()
if(typeof r!=="number")return H.a6(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
if(typeof b!=="number")return H.a6(b)
s+=b
if(s>>>0!==s||s>=t.length)return H.u(t,s)
return t[s]},
b3:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a6(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ae()
if(typeof s!=="number")return H.a6(s)
b=t-(a-s)}return T.us(this.a,this.d,b,a)},
ba:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.R()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a6(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s>>>0!==s||s>=q.length)return H.u(q,s)
q[s]}return-1},
br:function(a,b){return this.ba(a,b,0)},
aB:function(a,b){var t=this.b
if(typeof t!=="number")return t.R()
if(typeof b!=="number")return H.a6(b)
this.b=t+b},
d8:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ae()
if(typeof s!=="number")return H.a6(s)
r=this.b3(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ae()
if(typeof p!=="number")return H.a6(p)
if(typeof s!=="number")return s.R()
this.b=s+(t-(q-p))
return r},
cb:function(a){return P.pB(this.d8(a).bO(),0,null)},
a3:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a6:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
n=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.u(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.u(t,s)
j=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.u(t,r)
i=t[r]&255
if(this.d===1)return(C.a.au(p,56)|C.a.au(o,48)|C.a.au(n,40)|C.a.au(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.au(i,56)|C.a.au(j,48)|C.a.au(k,40)|C.a.au(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bO:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ae()
if(typeof r!=="number")return H.a6(r)
q=t-(s-r)
t=this.a
r=J.ai(t)
if(!!r.$isdb){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cM(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yC(r.cm(t,s,p>o?o:p)))},
fp:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc3:function(a){return this.a},
gc7:function(a){return this.b}}
T.of.prototype={
iK:function(a,b){var t,s,r,q
if(b==null)b=J.c4(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cA(s-q)
C.t.az(r,t,s,a)
this.a+=b},
df:function(a){return this.iK(a,null)},
iM:function(a){var t,s,r,q
t=J.b_(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
this.cA(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
C.t.a8(q,s,s+r,t.gc3(a),t.gc7(a))
r=this.a
t=t.gm(a)
if(typeof t!=="number")return H.a6(t)
this.a=r+t},
b3:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cM(t,a,b-a)},
dr:function(a){return this.b3(a,null)},
cA:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aN(P.df("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.t.az(r,0,q.length,q)
this.c=r},
fR:function(){return this.cA(null)},
gm:function(a){return this.a}}
T.qu.prototype={
hc:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b3(this.a-20,20)
if(s.a6()!==117853008){a.b=t
return}s.a6()
r=s.aZ()
s.a6()
a.b=r
if(a.a6()!==101075792){a.b=t
return}a.aZ()
a.a3()
a.a3()
q=a.a6()
p=a.a6()
o=a.aZ()
n=a.aZ()
m=a.aZ()
l=a.aZ()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fS:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ae()
if(typeof r!=="number")return H.a6(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a6()===101010256){a.b=t
return q}}throw H.j(new T.de("Could not find End of Central Directory Record"))},
fu:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fS(a)
this.a=t
a.b=t
a.a6()
this.b=a.a3()
this.c=a.a3()
this.d=a.a3()
this.e=a.a3()
this.f=a.a6()
this.r=a.a6()
s=a.a3()
if(s>0)this.x=a.cb(s)
this.hc(a)
r=a.b3(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.R()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ay()
if(!!(p>=t+o))break
if(r.a6()!==33639248)break
p=new T.qw(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a3()
p.b=r.a3()
p.c=r.a3()
p.d=r.a3()
p.e=r.a3()
p.f=r.a3()
p.r=r.a6()
p.x=r.a6()
p.y=r.a6()
n=r.a3()
m=r.a3()
l=r.a3()
p.z=r.a3()
p.Q=r.a3()
p.ch=r.a6()
o=r.a6()
p.cx=o
if(n>0)p.cy=r.cb(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ae()
j=r.b3(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ae()
if(typeof g!=="number")return H.a6(g)
if(typeof k!=="number")return k.R()
r.b=k+(i-(h-g))
p.db=j.bO()
f=j.a3()
e=j.a3()
if(f===1){if(e>=8)p.y=j.aZ()
if(e>=16)p.x=j.aZ()
if(e>=24){o=j.aZ()
p.cx=o}if(e>=28)p.z=j.a6()}}if(l>0)p.dx=r.cb(l)
a.b=o
p.dy=T.Hq(a,p)
q.push(p)}}}
T.qv.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.ff(C.C)
q=T.ff(C.D)
t=T.xH(0,t)
new T.iV(s,t,0,0,0,r,q).dT()
q=t.c.buffer
t=t.a
q.toString
t=H.cM(q,0,t)
this.cy=t
this.d=0}else{t=s.bO()
this.cy=t}}return t},
B:function(a){return this.z},
fv:function(a,b){var t,s,r,q
t=a.a6()
this.a=t
if(t!==67324752)throw H.j(new T.de("Invalid Zip Signature"))
this.b=a.a3()
this.c=a.a3()
this.d=a.a3()
this.e=a.a3()
this.f=a.a3()
this.r=a.a6()
this.x=a.a6()
this.y=a.a6()
s=a.a3()
r=a.a3()
this.z=a.cb(s)
this.Q=a.d8(r).bO()
this.cx=a.d8(this.ch.x)
if((this.c&8)!==0){q=a.a6()
if(q===134695760)this.r=a.a6()
else this.r=q
this.x=a.a6()
this.y=a.a6()}}}
T.qw.prototype={
B:function(a){return this.cy}}
T.qt.prototype={
hH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Hp(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.c3)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dm()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fO(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dX(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.us(k,0,null,0)}else if(k instanceof T.hn){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hn(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hR(m,"/")
j.y=n.r
s.push(j)}return new T.fN(s,null)}}
T.mK.prototype={
fo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.au(1,this.b)
r=H.cz(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iV.prototype={
dT:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.R()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ay()
if(!!(r>=s+q))break
if(!this.h8())break}},
h8:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.R()
if(typeof s!=="number")return s.ay()
if(s>=r+q)return!1
p=this.aC(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aC(16)
s=this.aC(16)
if(n!==0&&n!==(s^65535)>>>0)H.aN(new T.de("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ae()
r=q-r
if(n>s-r)H.aN(new T.de("Input buffer is broken"))
m=t.b3(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ae()
if(typeof l!=="number")return H.a6(l)
if(typeof s!=="number")return s.R()
t.b=s+(r-(q-l))
this.b.iM(m)
break
case 1:this.dM(this.f,this.r)
break
case 2:this.h9()
break
default:throw H.j(new T.de("unknown BTYPE: "+o))}return(p&1)===0},
aC:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return r.ay()
if(r>=q+p)throw H.j(new T.de("input buffer is broken"))
q=t.a
t.b=r+1
if(r>>>0!==r||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.aA(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.au(1,a)
this.c=C.a.e8(t,a)
this.d=s-a
return(t&r-1)>>>0},
cI:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.R()
if(typeof p!=="number")return p.ay()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p>>>0!==p||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.aA(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.au(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e8(r,k)
this.d=q-k
return l&65535},
h9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aC(5)+257
s=this.aC(5)+1
r=this.aC(4)+4
q=H.cz(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.K,o)
n=C.K[o]
m=this.aC(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.ff(p)
k=new Uint8Array(H.cz(t))
j=new Uint8Array(H.cz(s))
i=this.dL(t,l,k)
h=this.dL(s,l,j)
this.dM(T.ff(i),T.ff(h))},
dM:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cI(a)
if(s>285)throw H.j(new T.de("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fR()
r=t.c
q=t.a++
if(q>>>0!==q||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.I,p)
o=C.I[p]+this.aC(C.a5[p])
n=this.cI(b)
if(n<=29){if(n>=30)return H.u(C.F,n)
m=C.F[n]+this.aC(C.a4[n])
for(r=-m;o>m;){t.df(t.dr(r))
o-=m}if(o===m)t.df(t.dr(r))
else t.df(t.b3(r,o-m))}else throw H.j(new T.de("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ae();--r
t.b=r
if(r<0)t.b=0}},
dL:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cI(b)
switch(q){case 16:p=3+this.aC(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.aC(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aC(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.j(new T.de("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kU.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Math Book",H.a([$.L,$.Y,$.ax],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.L,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.E,$.Y,$.aW],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.L,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.L,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c_,$.aw],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.he,$.m)
q.i(0,$.be,$.m)
q.i(0,$.fa,$.k)
q.i(0,$.aO,$.M)
q.i(0,$.cC,$.k)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.K
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Gk
n=[U.c]
q.i(0,new R.a_("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
q.i(0,new R.a_("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.K+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.xS(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.B
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a_("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fs(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.M)
s.i(0,$.cC,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.a_("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.K+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a_("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.K+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ex(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
s.i(0,new R.a_("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fs(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.f6,$.M)
t.i(0,$.cC,$.m)
t.i(0,$.bY,$.M)
t.i(0,$.ue,$.M)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ac
t.i(0,new R.a_("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.K+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fs(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.K
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ac
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Gq
t.i(0,new R.a_("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e9(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
t.i(0,new R.a_("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.K+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aC)}}
K.bU.prototype={}
L.fP.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.be,$.M)
q.i(0,$.dN,$.k)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.M)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.B
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.S("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=this.f
j.i(0,new X.G(s,q,null),$.au)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f8,$.k)
s.i(0,$.ej,$.M)
s.i(0,$.f7,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.cc,$.M)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.B
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
s.i(0,new R.S("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(q,s,null),$.au)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.be,$.M)
t.i(0,$.c6,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.K
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.B
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has won! "
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.vr(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.M)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.B
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cg+". The "+l+" has won! "
t.i(0,new R.S("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(s,t,null),$.au)},
B:function(a){return this.Q},
ao:function(a,b,c,d,e){var t=this.Q
this.r=new X.iG("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.im]),H.a([],[M.hb]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$kX().a_(0,t))H.aN("Duplicate aspect id for "+this.B(0)+": "+t+" is already registered for "+J.cu($.$get$kX().n(0,t))+".")
$.$get$kX().i(0,t,this)},
gH:function(a){return this.Q}}
L.aU.prototype={}
M.kZ.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Barbells",H.a([$.ae,$.c8,$.E],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.em,$.c9],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jC,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.em,$.c9],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aX,$.a8],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jC,$.W,$.dw],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.E,$.bh],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.x6,$.c9],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c9,$.aY],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e3,$.M)
q.i(0,$.cb,$.m)
q.i(0,$.cU,$.M)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.K+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.a_("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a_("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.K+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e9(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a_("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hM(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e3,$.m)
t.i(0,$.fb,$.m)
t.i(0,$.cb,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.a_("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.xS(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.B+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.K
t.i(0,new R.a_("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e9(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.a_("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.B+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,t,null),$.aC)}}
U.l2.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$wk()
p=q.createBufferSource()
o=p
t=3
return P.cr(J.zb(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[P.eW]},
$asc7:function(){return[P.eW,P.bi]}}
U.nB.prototype={
aY:function(a){return"audio/mpeg"}}
U.ob.prototype={
aY:function(a){return"audio/ogg"}}
U.px.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.zX(b)
p=new W.i5(q,"canplaythrough",!1,[W.Z])
t=3
return P.cr(p.gai(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asiE:function(){return[W.eX]},
$asc7:function(){return[W.eX,P.x]}}
U.py.prototype={}
U.pz.prototype={}
E.tJ.prototype={
$1:function(a){var t,s,r,q
t=P.x
t=new H.w(0,null,null,null,null,null,0,[t,t])
for(s=this.b,r=0;r<6;++r){a=s[r]
t.i(0,a.id,J.zm(a))}q=document.createElement("textarea")
q.value=C.p.eo(t)
this.a.appendChild(q)},
$S:function(){return{func:1,args:[W.Z]}}}
O.l4.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Cod Piece",H.a([$.Q,$.a0,$.aP,$.P,$.W],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.uv,$.P,$.bN],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.W,$.bm,$.P,$.aa],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aD,$.P,$.bg],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cA,$.k)
t.i(0,$.hh,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.du,$.k)
t.i(0,$.cB,$.k)
t.i(0,$.f5,$.k)
r="After all the bullshit the "+$.B+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aG+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.K
m=[U.c]
t.i(0,new R.a7("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.K
t.i(0,new R.a7("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.B+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a7("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.B+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.lj("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bB("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.pO.prototype={
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseE:function(){return[P.x]},
$asc7:function(){return[P.x,P.x]}}
Y.oF.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[P.bi]},
$asc7:function(){return[P.bi,P.bi]}}
T.la.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Mystical Vial of Blood",H.a([$.aW,$.bm,$.T,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ar,$.bm,$.T,$.aV],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bm,$.T,$.aI,$.hp],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.bg,$.T,$.aI,$.hp,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.uD,$.bm,$.aI,$.T,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.k)
q.i(0,$.uh,$.k)
q.i(0,$.bY,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.x2
k=[U.c]
q.i(0,new R.a_("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e9(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.K+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.B
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cg+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.S("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cU,$.k)
s.i(0,$.cB,$.M)
s.i(0,$.aO,$.M)
s.i(0,$.iO,$.k)
s.i(0,$.cx,$.M)
p=$.o
o="The "+p+"  and the "
m=$.ez
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.B
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.S("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ey(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.B
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cg+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Gh
s.i(0,new R.S("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.X(l,h,o)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
o="The "+p+" learns of the "
h=$.aG
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.B
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.S("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aG+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.fd+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a7("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fs(),!1,!1,new Y.bZ("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aG
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.fd+" is now more popular with your friends than you are."
s.i(0,new R.a7("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.vs(),!1,!1,new Y.bZ("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
m="The "+p+"  and the "
h=$.ez
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.B
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.S("Pale Shipping Dungeon",!1,[new U.c(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",o)],H.a([],k),R.ey(),!1,!1,new Y.jZ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.be,$.M)
t.i(0,$.c6,$.m)
r="In the wake of the defeat of the "+$.B+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.fd+" to kick your ass, but luckily they have several."
t.i(0,new R.a7("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e9(),!1,!1,new Y.bZ("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.B
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cg+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.K+"ing. "
t.i(0,new R.S("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.au)}}
T.lc.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Pan's Pipe",H.a([$.aa,$.W,$.bm,$.T],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b0,$.T],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a8,$.E,$.bm,$.T],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.as,$.E,$.aX,$.T,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.m)
q.i(0,$.fb,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.B
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Gl
i=[U.c]
q.i(0,new R.S("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.X(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.f
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.k)
s.i(0,$.fb,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.c6,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ac
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.K+"ing is so joyful it's literally deafening. "
l=$.B
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.S("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.k)
t.i(0,$.ml,$.k)
t.i(0,$.fb,$.M)
t.i(0,$.c6,$.M)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.B
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aG+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.S("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.au)}}
M.fW.prototype={
f0:function(a){var t=this.a
if(!t.a_(0,a))return
return t.n(0,a)}}
Y.le.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.ea(b,"\n")
p=P.x
o=P.cy(p,p)
n=P.cy(p,[P.eB,P.x])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cR(k).bv(k).length===0)m=null
else if(m==null)m=C.c.bv(k)
else{j=C.c.bv(k)
i=C.c.I(m,0,C.c.eC(m,$.$get$wp())+1)+j
o.i(0,i,m)
if(!n.a_(0,m))n.i(0,m,P.a2(null,null,null,p))
J.z4(n.n(0,m),i)}}r=new M.fW(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseE:function(){return[M.fW]},
$asc7:function(){return[M.fW,P.x]}}
A.ll.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ae,$.aV,$.c8],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.L,$.aV],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aW,$.aV],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aX,$.a8,$.aV],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ar,$.aV],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.aV],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.E,$.aV],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.m)
q.i(0,$.cw,$.k)
q.i(0,$.cb,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.K+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.B+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.a_("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.M)
s.i(0,$.cb,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.k)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aG
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.K+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Go
s.i(0,new R.a_("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.M)
t.i(0,$.c5,$.m)
t.i(0,$.cw,$.k)
t.i(0,$.cb,$.m)
t.i(0,$.iI,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.K
t.i(0,new R.a_("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aC)}}
S.bI.prototype={
B:function(a){return H.y(new H.dU(H.kM(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.io.prototype={}
S.mH.prototype={}
B.ir.prototype={
en:function(a,b){var t,s,r,q,p
t=document
s=t.createElement("div")
s.classList.add("contestEntry")
r=t.createElement("div")
r.textContent=H.y(this.a)+" (by "+H.y(this.b)+")"
r.classList.add("nameHeader")
s.appendChild(r)
q=t.createElement("div")
C.y.cl(q,this.e)
q.classList.add("bodyElement")
s.appendChild(q)
p=t.createElement("div")
C.y.cl(p,"JR: "+H.y(this.d))
p.classList.add("jrNotes")
s.appendChild(p)
b.appendChild(s)}}
B.lq.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
t=H.a([],[B.ir])
s=J.ea(a,"\n")
for(r=s.length,q=P.x,q=[q,q],p=0;p<s.length;s.length===r||(0,H.c3)(s),++p){o=s[p]
n=new B.ir(null,null,null,null,null,null)
m=new H.w(0,null,null,null,null,null,0,q)
m.i(0,"HELLO","WORLD ")
m.i(0,"GOODBYE","WORLD BUT A SECOND TIME ")
m=C.p.hE(o)
n.a=J.d1(m,"bbName")
n.b=J.d1(m,"entrantName")
n.c=J.d1(m,"imagesCSV")
n.d=J.d1(m,"jrComment")
n.e=J.d1(m,"text")
n.f=J.d1(m,"shogunComment")
t.push(n)}return t},
$S:function(){return{func:1,args:[P.x]}}}
M.lz.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Can of Spray Paint",H.a([$.ay,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.L,$.al,$.aV,$.ax],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.uL,$.E,$.av],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.L,$.al,$.ax],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ay,$.ap,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.al,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.al,$.aA,$.ap],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ay,$.al],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.as,$.al,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.al],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.al,$.ax],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.m)
q.i(0,$.cC,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.B+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.K+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.a_("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.M)
s.i(0,$.cb,$.m)
s.i(0,$.cw,$.M)
s.i(0,$.be,$.m)
s.i(0,$.cA,$.k)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aG
l=l+n+" "
k=$.ac
s.i(0,new R.a_("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.K+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.M)
t.i(0,$.cx,$.M)
t.i(0,$.f5,$.M)
t.i(0,$.c5,$.M)
t.i(0,$.be,$.m)
t.i(0,$.aO,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.K
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ac+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Ge
t.i(0,new R.a_("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aC)}}
T.lF.prototype={}
V.lJ.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Trendy Fabric",H.a([$.ay,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ay,$.uA,$.hp],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.E,$.uH,$.aK],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jA
r=A.i("Broom",H.a([r,$.W,$.ae,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.uO,$.ae],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.aY,$.bm,$.ay,$.en],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ay,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aF,$.c8,$.E,$.bo],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ay,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bo],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.E,$.as,$.ae,$.c8,$.uz],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bN],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bN],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ay,$.bQ,$.aS],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ar,$.bj,$.b0],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ar,$.bj],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ay,$.ar,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.cx,$.M)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.c]
q.i(0,new R.a_("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.K+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.iq("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.k)
s.i(0,$.cb,$.m)
s.i(0,$.f5,$.k)
s.i(0,$.du,$.m)
s.i(0,$.be,$.k)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.K+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Gm
s.i(0,new R.a_("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.eg,$.k)
t.i(0,$.be,$.m)
t.i(0,$.ds,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.iO,$.k)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.K+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a_("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.aC)}}
U.lK.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ax,$.a8,$.L,$.aD,$.T,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bm,$.T,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b0,$.bm,$.T,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aW,$.T,$.bN],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aW,$.T,$.bo,$.aD,$.bg,$.bS,$.aZ],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aF,$.aZ,$.aD,$.L,$.T],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.k)
q.i(0,$.d3,$.m)
q.i(0,$.fb,$.M)
q.i(0,$.be,$.M)
q.i(0,$.bY,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.B
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.S("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.k)
s.i(0,$.d3,$.m)
s.i(0,$.el,$.ak)
s.i(0,$.ei,$.m)
s.i(0,$.ue,$.m)
s.i(0,$.dh,$.m)
s.i(0,$.d3,$.m)
s.i(0,$.be,$.M)
s.i(0,$.bY,$.m)
s.i(0,$.dt,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aG
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.K+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.B
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.S("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ex(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.B
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cg+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.S("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bY,$.k)
t.i(0,$.wM,$.ak)
t.i(0,$.he,$.M)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.B
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.S("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ex(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aG
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ac
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.B
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cg+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Gd
t.i(0,new R.S("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.X(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.au)}}
Z.lL.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.L,$.ax,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bm,$.ae,$.T,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bm,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.m)
q.i(0,$.ds,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iO,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xF
k=[U.c]
q.i(0,new R.S("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=this.f
l.i(0,new X.G(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.d4,$.m)
s.i(0,$.cv,$.m)
s.i(0,$.eh,$.m)
s.i(0,$.cw,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.S("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.k)
t.i(0,$.iK,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.eh,$.k)
t.i(0,$.ds,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.S("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aG+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(s,t,null),$.au)}}
X.iG.prototype={}
X.im.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hb]]}}}
M.hb.prototype={}
U.me.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Fluthulu Poster",H.a([$.Q,$.aY,$.aZ,$.bp],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.aY,$.aZ],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aF,$.aA,$.b0,$.fi,$.aP],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.xd,$.fj,$.aP],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bS,$.bj,$.aZ],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.ax,$.L,$.aB,$.aZ],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.L,$.a4,$.ae],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.L,$.a4,$.ae],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a4,$.bS,$.aZ,$.bp],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aF,$.aw,$.a4,$.ae,$.aP],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aF,$.uw,$.a4,$.ae,$.aP],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hc,$.ak)
q.i(0,$.cB,$.m)
q.i(0,$.c6,$.m)
q.i(0,$.cD,$.M)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.B
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.c]
q.i(0,new R.a_("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.dh,$.k)
s.i(0,$.iL,$.m)
s.i(0,$.bY,$.k)
s.i(0,$.el,$.k)
s.i(0,$.hg,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.a_("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.iN,$.m)
t.i(0,$.bY,$.k)
t.i(0,$.dK,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.uh,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.K
t.i(0,new R.a_("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aC)}}
N.a9.prototype={
B:function(a){return H.y(new H.dU(H.kM(this),null))+": "+H.y(this.b)}}
O.c7.prototype={
bb:function(a){var t=0,s=P.bn(),r,q=this,p
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cr(q.b_(a),$async$bb)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)}}
O.dp.prototype={
bh:function(a){var t=0,s=P.bn(),r
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
cU:function(a){var t=0,s=P.bn(),r,q=this
var $async$cU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zY([J.w8(a)],q.aY(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cU,s)},
b_:function(a){var t=0,s=P.bn(),r,q=this,p,o
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bk(0,$.ao,null,[p])
W.wT(a,null,q.aY(0),null,null,"arraybuffer",null,null).b1(new O.l8(new P.dW(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
$asc7:function(a){return[a,P.bi]}}
O.l8.prototype={
$1:function(a){this.a.aI(0,H.kN(J.zi(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e5]}}}
O.eE.prototype={
bh:function(a){var t=0,s=P.bn(),r,q,p,o,n
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cM(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.fr(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
b_:function(a){var t=0,s=P.bn(),r
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.uq(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
$asc7:function(a){return[a,P.x]}}
O.iE.prototype={
b_:function(a){var t=0,s=P.bn(),r
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
bh:function(a){return H.aN("Element format doesn't read from buffers")},
$asc7:function(a){return[a,P.x]}}
V.mv.prototype={
aY:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bn(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cr(A.hA("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[R.hi]},
$asc7:function(){return[R.hi,P.bi]}}
Z.iF.prototype={}
E.iT.prototype={}
E.oa.prototype={}
E.O.prototype={
B:function(a){var t="["+J.cu(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fQ.prototype={
B:function(a){var t="[(Random from "+P.uS(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kY.prototype={
B:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.mB.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.ax,$.P,$.L,$.a0,$.jD],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.n1,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.mn,$.m)
t.i(0,$.c6,$.k)
t.i(0,$.dt,$.M)
t.i(0,$.di,$.k)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.K
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aG
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ac
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.B
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.S("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
o=$.o
t.i(0,new R.a7("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.B+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.B+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.K
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aG+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a7("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bB("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.K+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.mC.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Sherpa Parka",H.a([$.bo,$.P,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a0,$.bo,$.ax,$.L,$.P,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.E,$.P,$.aX],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.E,$.P,$.a8,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.mn,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.dt,$.m)
t.i(0,$.di,$.k)
r="Now that the "+$.B+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.a7("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.K+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.mD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Doll",H.a([$.n1,$.ay,$.at,$.T],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.at,$.T,$.a0,$.aZ],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.uG,$.T],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.L,$.T,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ap,$.aW,$.T],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.M)
q.i(0,$.ek,$.k)
q.i(0,$.cb,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.B
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.S("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.B
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.S("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.vs(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.k)
s.i(0,$.iL,$.k)
s.i(0,$.fb,$.m)
s.i(0,$.bY,$.k)
s.i(0,$.cx,$.m)
s.i(0,$.dt,$.M)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.B
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is victorious. "
s.i(0,new R.S("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j="Now that the "+$.B+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.K
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.fd+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a7("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e9(),!1,!1,new Y.bZ("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.B
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.S("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ex(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.mm,$.k)
t.i(0,$.f5,$.m)
t.i(0,$.hg,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.ek,$.M)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.S("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aG+" laws put in place by "+$.B+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aG
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.K
t.i(0,new R.a7("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hM(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.o
m="The "+q+"  and the "
r=$.ez
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.B
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.S("Flushed Shipping Dungeon",!1,[new U.c(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",n)],H.a([],i),R.ey(),!1,!1,new Y.iR(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
n=$.o
r="The "+n+"  and the "
q=$.ez
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.B
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.S("Pitched Shipping Dungeon",!1,[new U.c(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",m)],H.a([],i),R.ey(),!1,!1,new Y.k0(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
h.i(0,new X.G(s,t,null),$.aC)}}
B.mE.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Family Ashes",H.a([$.aF,$.as,$.P,$.aD,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a0,$.L,$.P,$.aD,$.mY],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.ax,$.P,$.al],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.x2,$.P,$.mU,$.mY],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.ut,$.P,$.av,$.mY],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cc,$.m)
r=$.B
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.a7("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
r="The "+$.B+" has released the frogs into the "
p=$.o
t.i(0,new R.bB("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
X.mG.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Wand",H.a([$.W,$.T,$.a4,$.bf],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bf,$.bA,$.T,$.aR,$.aa,$.a0,$.a4],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bR,$.uD,$.T,$.a4,$.aV,$.bf],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bf,$.aR,$.T,$.as],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.aR,$.T,$.bf],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ud,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.aO,$.k)
q.i(0,$.cv,$.k)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.K+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.B
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Gg
i=[U.c]
q.i(0,new R.S("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.iI,$.m)
s.i(0,$.d4,$.k)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.B
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.S("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.du,$.M)
t.i(0,$.cC,$.k)
t.i(0,$.cv,$.k)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.B
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.S("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.B
t.i(0,new R.S("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hM(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.au)}}
X.mL.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Footstick",H.a([$.dw,$.P,$.n0,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.ax,$.P,$.jD,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.en,$.uE,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.uN,$.P,$.mU],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cD,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.ds,$.k)
t.i(0,$.di,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.eh,$.k)
t.i(0,$.hf,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a_("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vt(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.S("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xQ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a_("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.S("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
t.i(0,new R.S("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.M)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xR(),!1,!1,new Y.bZ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a7("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.M)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.au)}}
Q.mO.prototype={
bb:function(a){var t=0,s=P.bn(),r,q,p
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.wU(null,a,null)
p=new W.i5(q,"load",!1,[W.Z])
t=3
return P.cr(p.gai(p),$async$bb)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
$asdp:function(){return[W.fg]},
$asc7:function(){return[W.fg,P.bi]}}
Q.os.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bn(),r,q=this,p,o,n
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cr(q.cU(b),$async$P)
case 3:p=n.wU(null,d,null)
o=new W.i5(p,"load",!1,[W.Z])
t=4
return P.cr(o.gai(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)}}
Q.op.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bn()
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.j("Read NYI")
return P.bs(null,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[Q.k_]},
$asc7:function(){return[Q.k_,P.bi]}}
B.ho.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.be,$.M)
q.i(0,$.dN,$.k)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.M)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a_("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f8,$.k)
s.i(0,$.ej,$.M)
s.i(0,$.f7,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.cc,$.M)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a_("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.be,$.M)
t.i(0,$.c6,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.a_("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.K
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vr(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.M)
n.i(0,new X.G(s,t,null),$.aC)},
B:function(a){return this.ch},
gH:function(a){return this.ch}}
A.a3.prototype={
aH:function(a,b){var t=b.gbL()-this.gbL()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b0(t)},
ghK:function(){var t,s,r,q,p,o
t=H.a([],[P.x])
s=new A.k2(null,null)
s.dl(this.f.a)
if(this.r===0)return t
r=P.dj(G.A4(this.f),!0,G.a1)
C.b.dn(r,new A.n5())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c3)(r),++p){o=r[p]
if(!(o instanceof G.ah||o.gem().length===0))t.push(" "+Y.Ii(s.io(o.gem())))}return t},
gbL:function(){var t,s,r
for(t=this.f,s=new P.dD(t,t.r,null,null,[null]),s.c=t.e,r=0;s.G();)r+=s.d.gbL()
return r},
ghx:function(){var t=this.f
return new H.eJ(t,new A.n4(),[H.N(t,0)])},
ghW:function(){var t,s,r,q,p
for(t=this.ghK(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c3)(t),++q)r+=t[q]+" "
return r+this.d},
B:function(a){return this.ghW()},
L:function(a,b,c,d,e){var t,s,r
t=P.jK(b,null)
this.f=t
if(t.a===0)t.h(0,$.x8)
s=P.jK(this.ghx(),null)
for(t=new P.dD(s,s.r,null,null,[null]),t.c=s.e;t.G();){r=t.d
this.f.aD(0,r.gff())
this.f.as(0,r)}$.$get$xx().push(this)},
$isbG:1,
$asbG:function(){return[A.a3]}}
A.n5.prototype={
$2:function(a,b){return a.geG()-C.a.b0(b.geG())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.n4.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
S.uV.prototype={
B:function(a){return C.p.eo(this.a)},
n:function(a,b){return J.d1(this.a,b)},
i:function(a,b,c){J.ij(this.a,b,c)},
gaj:function(a){return J.ik(this.a)}}
S.jX.prototype={
$asaL:function(){return[P.x,P.x]},
$isaL:1}
Z.ng.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Juice Box",H.a([$.L,$.T,$.bf,$.aP],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.en,$.aY,$.T],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.eh,$.ak)
t.i(0,$.cB,$.m)
t.i(0,$.cb,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cv,$.k)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ac
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.K+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.B
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.S("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.B
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.K
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.S("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.B
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.S("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.au)}}
N.nh.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Gavel",H.a([$.W,$.uC],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.bg],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.ay],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.L,$.ax],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bQ,$.ar,$.bo],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.L,$.ax,$.ap],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aF,$.E,$.bg],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hc,$.M)
q.i(0,$.c5,$.m)
q.i(0,$.cC,$.M)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.K+"ing "
n=$.t
m=[U.c]
q.i(0,new R.a_("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.dt,$.m)
s.i(0,$.cU,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.K+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Gc
s.i(0,new R.a_("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.dh,$.M)
t.i(0,$.el,$.m)
t.i(0,$.ei,$.m)
t.i(0,$.f9,$.m)
t.i(0,$.iM,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.K
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gp
t.i(0,new R.a_("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.aC)}}
S.nj.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Shining Armor",H.a([$.aF,$.n_,$.P,$.fi],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a0,$.n_,$.P,$.aK,$.av,$.fj],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.E,$.P,$.bj,$.at],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aF,$.fi,$.P,$.n_],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.mk,$.k)
t.i(0,$.dL,$.k)
t.i(0,$.e3,$.k)
t.i(0,$.f9,$.k)
t.i(0,$.hc,$.m)
r="The "+$.B+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.B
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a7("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.aG
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.B
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a7("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
r="The volcanos of the land are weirdly active after the defeat of the "+$.B+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.K+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a7("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.nk.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.L,$.ax,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bm,$.ae,$.T,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bm,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.m)
q.i(0,$.ds,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iO,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xF
k=[U.c]
q.i(0,new R.S("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=this.f
l.i(0,new X.G(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.d4,$.m)
s.i(0,$.cv,$.m)
s.i(0,$.eh,$.m)
s.i(0,$.cw,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.S("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.k)
t.i(0,$.iK,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.eh,$.k)
t.i(0,$.ds,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.S("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aG+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(s,t,null),$.au)}}
K.nm.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Creeping Vine",H.a([$.W,$.T,$.aS,$.at],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.uv,$.T,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aF,$.aw,$.T,$.at],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.T,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aW,$.T,$.aI,$.a0,$.a4],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bj,$.T,$.at],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.k)
q.i(0,$.be,$.k)
q.i(0,$.hd,$.M)
q.i(0,$.aO,$.m)
q.i(0,$.mn,$.m)
q.i(0,$.cD,$.M)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.K+"ing in panic. Don't upset "
m=$.B
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.S("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.k)
s.i(0,$.cx,$.k)
s.i(0,$.cD,$.M)
s.i(0,$.aO,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.B
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.S("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d3,$.k)
t.i(0,$.be,$.M)
t.i(0,$.dN,$.k)
t.i(0,$.bY,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.iH,$.m)
r="Drawn by wailing and "+$.K+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.B
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.S("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.au)}}
G.nn.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("FAQ",H.a([$.a8,$.T,$.Y,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.T,$.aR,$.a8,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.T,$.aR,$.bW,$.a0,$.uw],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.xc,$.T,$.ae],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.xk,$.T],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aS,$.T,$.aR,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aW,$.T,$.at],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mi,$.k)
q.i(0,$.eg,$.m)
q.i(0,$.dK,$.k)
q.i(0,$.ek,$.k)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.B
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.S("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.K+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.B
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.S("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.f
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.du,$.k)
s.i(0,$.mh,$.k)
s.i(0,$.ej,$.k)
s.i(0,$.iI,$.k)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
o=o+l+", but "
k=$.B
o=o+k+" has hoarded all of the planets "
j=$.aG
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.K+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.S("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.vs(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.B
s.i(0,new R.S("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.K+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.he,$.m)
q.i(0,$.be,$.m)
q.i(0,$.fa,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.cC,$.k)
p="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.fd+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a7("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e9(),!1,!1,new Y.bZ("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.fd+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a7("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ex(),!1,!1,new Y.bZ("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.B
q.i(0,new R.S("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.k)
t.i(0,$.mi,$.k)
t.i(0,$.ek,$.m)
t.i(0,$.cB,$.m)
t.i(0,$.ug,$.m)
t.i(0,$.bY,$.M)
t.i(0,$.e3,$.M)
t.i(0,$.cb,$.m)
t.i(0,$.cw,$.M)
t.i(0,$.be,$.m)
t.i(0,$.cA,$.k)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ac
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.K+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.B
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.S("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
o="After the "+$.B+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.fd+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a7("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e9(),!1,!1,new Y.bZ("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.au)}}
Z.nA.prototype={
E:function(){var t,s,r,q
t=this.M
s=[G.a1]
r=A.i("Dream Bubbles Book",H.a([$.L,$.al,$.ax,$.x4],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.J(null,null,A.a3)
r=A.i("Uno Reverse Card",H.a([$.mV,$.n0,$.al],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.al],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.jD,$.P,$.al],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a0,$.L,$.P,$.bw,$.ax],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.M)
q.i(0,$.el,$.M)
q.i(0,$.bY,$.M)
q.i(0,$.cU,$.m)
p="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.K+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="As soon as the "+$.B+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a7("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.x
p.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.wI,$.k)
t.i(0,$.cv,$.k)
t.i(0,$.be,$.k)
t.i(0,$.aO,$.m)
s="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.K+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="As soon as the "+$.B+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a7("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,t,null),$.bO)}}
S.nC.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a4,$.a0,$.am],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a4],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.P,$.ae,$.a4,$.dw],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jA,$.W,$.P,$.at,$.a4,$.dw],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.f6,$.k)
t.i(0,$.f9,$.m)
t.i(0,$.cc,$.k)
t.i(0,$.f7,$.m)
t.i(0,$.d3,$.M)
r="The "+$.B+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
t.i(0,new R.a7("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.B+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aG
t.i(0,new R.a7("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="Now that the "+$.B+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aG
t.i(0,new R.a7("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.K+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.bZ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.nD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Maiden's Breath",H.a([$.aS,$.P,$.ay],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.P,$.dw,$.bA],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ay,$.aF,$.E,$.P,$.a0,$.fi,$.wX],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.L,$.P,$.aa,$.ax],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.di,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.be,$.m)
t.i(0,$.du,$.m)
t.i(0,$.cw,$.m)
r="The "+$.B+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a7("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.K+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.B+". ")],H.a([],n),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
V.nQ.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Puzzle Box",H.a([$.W,$.T,$.a4],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a8,$.T,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.E,$.T],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.E,$.T,$.a8,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aF,$.jB,$.aw,$.al,$.T,$.a0,$.a8],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.eg,$.M)
q.i(0,$.cC,$.M)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.B
k=[U.c]
q.i(0,new R.S("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fs(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.B
q.i(0,new R.S("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hc,$.M)
s.i(0,$.c5,$.m)
s.i(0,$.cC,$.M)
s.i(0,$.cv,$.M)
p=$.B
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.S("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iN,$.k)
t.i(0,$.be,$.m)
t.i(0,$.fa,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cC,$.k)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.B
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.S("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.au)}}
E.nR.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Feather Pen",H.a([$.E,$.P,$.al,$.bA],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.xj,$.P,$.jB,$.ae,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.L,$.P,$.al,$.ax],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.di,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.be,$.m)
t.i(0,$.du,$.m)
t.i(0,$.cw,$.m)
r="The "+$.B+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.B+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a7("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
F.nS.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Piano",H.a([$.ae,$.W,$.aa,$.al],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.E,$.aa],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aX,$.a8],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.aa],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.L,$.aa],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.aa,$.a8,$.aX,$.ap],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.aa,$.a8,$.ap],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.aa],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ak)
q.i(0,$.ug,$.k)
q.i(0,$.ek,$.k)
q.i(0,$.du,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.mg,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.B+" can only be awoken by the Legendary Hero playing the "
n=$.aG
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.c]
q.i(0,new R.a_("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aG
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ac+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.K+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gi
q.i(0,new R.a_("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.uj,$.ak)
s.i(0,$.dt,$.m)
s.i(0,$.cU,$.m)
s.i(0,$.du,$.k)
s.i(0,$.mg,$.ak)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aG
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.B
s.i(0,new R.a_("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hd,$.ak)
t.i(0,$.cb,$.m)
t.i(0,$.dN,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.K
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aG+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a_("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aC)}}
Y.o6.prototype={
P:function(a,b){var t=0,s=P.bn(),r,q=this,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cr(A.hA("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cr(Q.oV(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aM(p)
o.fc(p,P.xA(["",$.$get$ww()],P.x,S.hE))
o.fb(p,!1)
q.b=p}J.wh(p,b)
r=J.wh(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseE:function(){return[S.fo]},
$asc7:function(){return[S.fo,P.x]}}
V.og.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Shorts",H.a([$.Q,$.P,$.fh,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.P,$.ap],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ar,$.P,$.a4],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.mk,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.hh,$.m)
t.i(0,$.mm,$.m)
t.i(0,$.di,$.m)
t.i(0,$.be,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.ej,$.m)
t.i(0,$.uk,$.m)
t.i(0,$.iH,$.m)
t.i(0,$.mh,$.m)
r="The "+$.B+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.K
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.B
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.S("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m="Now that the "+$.B+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a7("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aG+" buffs. With a deafening "+$.K+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.iq("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
G.ov.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Superhero Action Figure",H.a([$.aA,$.ap,$.aP],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.ap],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.aV,$.bo,$.ce],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.ap],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.L,$.ap],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aS,$.ap,$.Q,$.at],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aS,$.aJ,$.ap,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aP,$.E,$.ap,$.fj,$.av,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.L,$.ap],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.L,$.ap],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.cb,$.k)
q.i(0,$.cD,$.ak)
q.i(0,$.d4,$.ak)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aG+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.K+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gj
l=[U.c]
q.i(0,new R.a_("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ei,$.m)
s.i(0,$.dt,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.dL,$.k)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aG
s.i(0,new R.a_("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dK,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.dL,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aG+" Cinema. A new movie, The Lonely "
o=$.ac
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.K+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a_("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aC)}}
N.oA.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fh],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a0,$.uA,$.P,$.fh],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bq,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cA,$.m)
t.i(0,$.cv,$.m)
t.i(0,$.dN,$.M)
r="With the closing of the curtain, the "+$.B+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.B
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a7("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.c.prototype={}
U.X.prototype={}
R.oC.prototype={
B:function(a){return H.y(new H.dU(H.kM(this),null))+": "+this.c},
gH:function(a){return this.c}}
R.a_.prototype={}
R.S.prototype={}
R.a7.prototype={}
R.bB.prototype={}
E.oD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Curtain",H.a([$.Q,$.T,$.aP],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.E,$.fj,$.aK,$.T,$.av,$.aZ,$.aP,$.bp,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.E,$.aX,$.a8,$.T,$.aP],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aF,$.E,$.aX,$.bw,$.c9,$.T,$.aP],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ar,$.bw,$.al,$.T,$.a0,$.aP],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.T,$.aZ,$.as,$.bq,$.aP],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mf,$.k)
q.i(0,$.dh,$.k)
q.i(0,$.dt,$.k)
q.i(0,$.d3,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c5,$.M)
q.i(0,$.d4,$.m)
q.i(0,$.ei,$.k)
q.i(0,$.iM,$.k)
q.i(0,$.f9,$.k)
q.i(0,$.ml,$.k)
q.i(0,$.hd,$.m)
q.i(0,$.el,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.S("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hM(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.S("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.k)
s.i(0,$.bY,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.iL,$.M)
s.i(0,$.dh,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.cb,$.k)
s.i(0,$.d4,$.M)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aG
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.S("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.mf,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.S("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(s,t,null),$.au)}}
Y.dR.prototype={}
Y.ad.prototype={}
Y.d2.prototype={}
Y.bZ.prototype={
gH:function(a){return this.c}}
Y.U.prototype={}
Y.iq.prototype={}
Y.bD.prototype={}
Y.cY.prototype={}
Y.lj.prototype={}
Y.by.prototype={}
Y.jZ.prototype={}
Y.iR.prototype={}
Y.k0.prototype={}
N.oM.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fh],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.uu,$.P,$.fh,$.wY],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a0,$.aA,$.a8,$.P,$.Y,$.am],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.c5,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.dL,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.B
t.i(0,new R.a7("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.oN.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Red Rose",H.a([$.aB,$.ay],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ar],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.as],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bq,$.E,$.aJ],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.ax,$.L,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.k)
q.i(0,$.hh,$.m)
q.i(0,$.f5,$.m)
q.i(0,$.hg,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.iJ,$.M)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.a_("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dK,$.k)
s.i(0,$.hg,$.k)
s.i(0,$.cx,$.m)
s.i(0,$.ek,$.M)
s.i(0,$.iJ,$.M)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.a_("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.f5,$.m)
t.i(0,$.mm,$.k)
t.i(0,$.hg,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.ek,$.M)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.B+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Gf
t.i(0,new R.a_("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=$.o
r="The "+n+"  and the "
o=$.ez
t.i(0,new R.a_("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ey(),!1,!1,new Y.iR(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o=$.o
n="The "+o+"  and the "
r=$.ez
t.i(0,new R.a_("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ey(),!1,!1,new Y.jZ(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r=$.o
o="The "+r+"  and the "
n=$.ez
t.i(0,new R.a_("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ey(),!1,!1,new Y.k0(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p.i(0,new X.G(s,t,null),$.aC)}}
T.hO.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a3)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.be,$.M)
q.i(0,$.dN,$.k)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.M)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a7("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
n=this.x
n.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f8,$.k)
s.i(0,$.ej,$.M)
s.i(0,$.f7,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.cc,$.M)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a7("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a7("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.ez+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.K+"ing in amazement. The factory is saved! ")],H.a([],m),R.ey(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.ak)
n.i(0,new X.G(q,s,null),$.bO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.be,$.M)
t.i(0,$.c6,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.K
t.i(0,new R.a_("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vr(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.M)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a7("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.bO)},
B:function(a){return this.r},
ab:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iG("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.im]),H.a([],[M.hb]))
this.E()
this.F()
if($.$get$oQ().a_(0,this.Q))H.aN("Duplicate class id for "+this.B(0)+": "+this.Q+" is already registered for "+J.cu($.$get$oQ().n(0,this.Q))+".")
$.$get$oQ().i(0,this.Q,this)},
gH:function(a){return this.r}}
E.oR.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.aY,$.Y,$.a4,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.L,$.P,$.ax,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.en,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.he,$.m)
t.i(0,$.be,$.m)
t.i(0,$.fa,$.k)
t.i(0,$.aO,$.M)
t.i(0,$.cC,$.k)
r="The "+$.B+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a7("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.K+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
K.oS.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Uno Reverse Card",H.a([$.mV,$.T,$.aP],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.en,$.aY,$.T],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.mf,$.k)
q.i(0,$.dh,$.k)
q.i(0,$.dt,$.k)
q.i(0,$.d3,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c5,$.M)
q.i(0,$.d4,$.m)
q.i(0,$.ei,$.k)
q.i(0,$.iM,$.k)
q.i(0,$.f9,$.k)
q.i(0,$.ml,$.k)
q.i(0,$.hd,$.m)
q.i(0,$.el,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.S("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hM(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.S("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.k)
s.i(0,$.bY,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.iL,$.M)
s.i(0,$.dh,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.cb,$.k)
s.i(0,$.d4,$.M)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aG
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.S("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.mf,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.S("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(s,t,null),$.au)}}
Y.oT.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Walking Stick",H.a([$.W,$.P,$.dw],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.x5,$.Y,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.L,$.P,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.P,$.Y,$.a4],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.x]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.di,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.be,$.k)
t.i(0,$.cb,$.M)
t.i(0,$.aO,$.M)
r="Now that the "+$.B+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.a7("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
L.oU.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Scroll",H.a([$.L,$.P,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aW,$.P,$.am,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.L,$.P,$.ax,$.Y,$.am,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.mg,$.k)
t.i(0,$.be,$.k)
t.i(0,$.cC,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cv,$.m)
r="The "+$.B+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a7("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
S.oW.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Cueball",H.a([$.em,$.n1,$.P,$.ae,$.at,$.a0],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.em,$.x3,$.P,$.aR],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aW,$.P,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.x_,$.P,$.aY],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.wJ,$.k)
t.i(0,$.iK,$.k)
t.i(0,$.wH,$.k)
t.i(0,$.cD,$.m)
r="Now that the "+$.B+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a7("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a7("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
r="A group of underlings are still making trouble, even after the defeat of the "+$.B+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a7("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.c0.prototype={}
Y.p4.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.ax,$.P,$.L,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aW,$.P,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bm],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a4,$.P,$.aR,$.ay,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.be,$.m)
t.i(0,$.di,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.c6,$.k)
r="The defeat of the "+$.B+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a7("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.p5.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Fiduspawn Plush",H.a([$.ce,$.Q,$.aY],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ce,$.Q,$.aY],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.uy,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bA,$.at,$.bj,$.b0,$.bp,$.uI],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.aY,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.ax,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.ax,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aY,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.ax,$.L,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.M)
q.i(0,$.aO,$.m)
q.i(0,$.cv,$.k)
q.i(0,$.cC,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.a_("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aG+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.K+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.M)
s.i(0,$.aO,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.ud,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.uj,$.k)
s.i(0,$.cC,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.K
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aG
s.i(0,new R.a_("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cU,$.M)
t.i(0,$.dK,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.dL,$.k)
t.i(0,$.hc,$.k)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.a_("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.K+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aC)}}
M.bC.prototype={}
N.p7.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Frog Statue",H.a([$.aF,$.aw,$.T],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.T],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c_,$.Y,$.a8,$.T],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.E,$.aW,$.Y,$.T],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.L,$.T,$.uB,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.x]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.K+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.B+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
p=$.o
t=t+p+" that they must negotiate with "
o=$.B
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.o
p="The "+o+" meets with "
t=$.B
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cD,$.M)
t.i(0,$.uf,$.k)
s=[U.c]
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
t.i(0,new R.bB("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.Hl)}}
U.aj.prototype={
gH:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.a3]}}
K.cE.prototype={
gH:function(a){return this.a}}
M.pb.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dg(null,0)
q.a=J.dZ(a7,0)
for(p=0,o="";p<6;++p)o+=H.fr(q.ac(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.j("Invalid header: "+n)
m=q.ac(8)
l=9+m*6
o=8*m
k=q.ac(o)
j=q.ac(o)
i=q.ac(o)
h=q.ac(o)
g=q.ac(o)
f=q.ac(o)
o=P.D
e=P.x
d=P.cy(o,e)
c=new O.cW(k,j,null,null,null,null,null,null,d,P.cy(e,o))
c.x=new Uint8Array(H.cz(k*j))
b=q.ac(8)
for(o=[o],p=0;p<b;++p){a=q.ac(8)
a0=q.ac(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ac(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pB(a1,0,null))}a4=q.ac(8)
a5=$.$get$xV().n(0,a4)
if(a5==null)throw H.j("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iL(i,h,g,a5.c.$4(a7,l,g*f,c))
c.iv()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[O.cW]},
$asc7:function(){return[O.cW,P.bi]}}
R.pH.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.ax,$.P,$.L,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aW,$.P,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bm],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a4,$.P,$.aR,$.ay,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cv,$.k)
t.i(0,$.aO,$.k)
t.i(0,$.di,$.m)
t.i(0,$.fa,$.m)
t.i(0,$.uc,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.iH,$.m)
t.i(0,$.ui,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.B+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a7("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.K+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.vt(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a7("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.B+". They are yelling and "+$.K+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a7("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p="The "+$.B+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bB("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="The defeat of the "+$.B+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a7("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aG+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
D.pM.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Robot",H.a([$.a8,$.E,$.at,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a8,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a8,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a8,$.L,$.aD,$.ax],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a8,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.x9,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.uP,$.E,$.ae],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a8,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.iN,$.m)
q.i(0,$.f6,$.k)
q.i(0,$.f8,$.k)
q.i(0,$.cc,$.M)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aG
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.B+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gn
p=[U.c]
q.i(0,new R.a_("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.A(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.K
q.i(0,new R.a_("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.B+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fs(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f8,$.k)
s.i(0,$.ej,$.M)
s.i(0,$.f7,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.cc,$.M)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.a_("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.K
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ac
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a_("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e9(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iN,$.M)
t.i(0,$.f6,$.k)
t.i(0,$.f8,$.k)
t.i(0,$.cc,$.M)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aG
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.B
t.i(0,new R.a_("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aC)}}
V.pN.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Lighter",H.a([$.E,$.as],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.L,$.bo],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.L,$.bo,$.c_],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.E,$.aD,$.c_,$.bf,$.bp],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.L,$.xe],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.E,$.bh,$.bf],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.E,$.bh,$.bf],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fh,$.bf],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bQ,$.bh],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.E,$.uJ,$.aJ,$.bf],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.E,$.uM,$.aJ,$.bf],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.E,$.uF,$.aJ,$.bf],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mX,$.av,$.E,$.bq,$.bf],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.L,$.bw,$.ax],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c9,$.E,$.aX,$.bw],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.as],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.dK,$.k)
q.i(0,$.e3,$.k)
q.i(0,$.f9,$.k)
q.i(0,$.mk,$.k)
q.i(0,$.dL,$.m)
p=$.o
o=[U.c]
q.i(0,new R.a_("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dK,$.k)
s.i(0,$.cx,$.k)
s.i(0,$.dL,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.a_("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.aG+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.be,$.M)
q.i(0,$.dN,$.k)
q.i(0,$.bY,$.m)
q.i(0,$.e2,$.M)
q.i(0,$.dh,$.M)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.a_("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.dh,$.M)
t.i(0,$.ei,$.k)
t.i(0,$.iM,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.el,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.K
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aG+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a_("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,t,null),$.aC)}}
X.G.prototype={
B:function(a){return"Theme: "+H.y(this.a)}}
U.pT.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Lockpick",H.a([$.E,$.P,$.am,$.aK,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.am],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.E,$.P,$.aK,$.av,$.ux],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.c5,$.k)
t.i(0,$.dt,$.m)
t.i(0,$.cb,$.m)
t.i(0,$.cU,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.B+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.K+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a7("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.B
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aG+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.K+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a7("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ac
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.K
l=n+l+"worth, the disaffected Heir to the "+$.aG+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a7("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.pU.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Grandfather Clock",H.a([$.W,$.al,$.bh,$.T],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.xi,$.T,$.aa],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aF,$.bj,$.T,$.b0,$.aZ,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.E,$.T,$.aa,$.al],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.E,$.T,$.aa,$.a0,$.ap],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.E,$.T,$.aa],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.wL,$.ak)
q.i(0,$.cc,$.m)
q.i(0,$.cU,$.m)
q.i(0,$.f7,$.k)
p=$.B
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.c]
q.i(0,new R.a7("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ex(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.B
q.i(0,new R.S("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=this.f
j.i(0,new X.G(s,q,null),$.au)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hd,$.k)
s.i(0,$.e3,$.M)
s.i(0,$.cc,$.k)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.B
s.i(0,new R.S("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(q,s,null),$.au)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.di,$.k)
r=$.B
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.S("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hM(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.B
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.S("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ex(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.B+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aG
t.i(0,new R.a7("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ex(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.S("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.K+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.B+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(s,t,null),$.au)}}
G.a1.prototype={
B:function(a){var t=this.b
if(t.length!==0)return C.b.gai(t)
return"NULL TRAIT"},
geG:function(){return this.a},
gem:function(){return this.b},
gbL:function(){return this.c}}
G.aH.prototype={}
G.ah.prototype={}
G.bK.prototype={}
G.d.prototype={
gis:function(){return this.e.length},
gbL:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.c3)(t),++q)r+=t[q].c
return r},
aH:function(a,b){return C.a.b0(b.gis()-this.e.length)},
eR:function(a){return C.b.hS(this.e,a.ghz(a))},
$isbG:1,
$asbG:function(){return[G.d]},
gH:function(a){return this.d},
gff:function(){return this.e}}
G.n2.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.qi.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Cardboard Box",H.a([$.L,$.T,$.am],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.E,$.T,$.am],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bq,$.T,$.am,$.mX],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b0,$.T,$.am,$.aZ,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.T,$.am,$.al],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.T,$.a0,$.uB,$.am,$.aW],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.k)
q.i(0,$.mj,$.k)
q.i(0,$.hf,$.k)
q.i(0,$.iK,$.k)
p=$.B
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.c]
q.i(0,new R.a7("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.B
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.S("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i=this.f
i.i(0,new X.G(s,q,null),$.au)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.m)
s.i(0,$.mj,$.m)
s.i(0,$.hf,$.m)
s.i(0,$.c5,$.k)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.B
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ac
s.i(0,new R.a7("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fs(),!1,!1,new Y.bZ("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
s.i(0,new R.S("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.K+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.B+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i.i(0,new X.G(q,s,null),$.au)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.k)
t.i(0,$.mj,$.k)
t.i(0,$.hf,$.k)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.B+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.S("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i.i(0,new X.G(s,t,null),$.au)}}
E.qj.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Yardstick",H.a([$.dw,$.P,$.n0,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.ax,$.P,$.jD,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.en,$.uE,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.uN,$.P,$.mU],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.cD,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.ds,$.k)
t.i(0,$.di,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.eh,$.k)
t.i(0,$.hf,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a_("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vt(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.S("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xQ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a_("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.C)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.S("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
t.i(0,new R.S("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.M)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xR(),!1,!1,new Y.bZ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a7("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.M)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.au)}}
M.qn.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Cauldron",H.a([$.xh,$.P,$.a4],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jA,$.dw,$.P,$.W,$.a4],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.uG,$.P,$.a4,$.am,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a9,P.V])
t.i(0,$.bY,$.m)
t.i(0,$.hh,$.m)
t.i(0,$.d3,$.m)
t.i(0,$.cU,$.m)
t.i(0,$.cw,$.m)
t.i(0,$.uf,$.m)
r=$.B
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bB("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="Even with the defeat of the "+$.B+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aG
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a7("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.C)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aG
q=q+r+" was discovered amongst the "+$.B+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a7("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aG
t.i(0,new R.a7("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.K+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.qo.prototype={
P:function(a5,a6){var t=0,s=P.bn(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.ea(a6,$.$get$yg())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.zD(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.j("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.x
n=H.a([],[o])
m=P.cy(o,B.km)
q.a=null
l=P.cy(o,o)
for(k=P.V,j=B.dC,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.y(g)
f.toString
f=J.ea(g,$.$get$ye())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.b_(g)
if(f.gX(g)===!0){$.$get$cH().toString
continue}if(f.ah(g,$.$get$yf())){$.$get$cH().toString
continue}if(C.c.ah(g,"@")){e=C.c.al(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.ah(g,"?")){f=C.c.al(g,1)
f=$.$get$hY().b6(0,f)
f=H.dx(f,B.kO(),H.aq(f,"n",0),null)
d=P.dj(f,!0,H.aq(f,"n",0))
if(d.length<2)$.$get$cH().bj(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$yh()
a=f.cz(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c4(f[1])
a1=C.c.al(g,a0)
if(a1.length===0)continue
f=J.ai(a0)
if(f.T(a0,0)){a1=C.c.eS(a1)
$.$get$cH().toString
f=P.cy(o,o)
a2=new B.km(P.cy(o,k),f,a1,!1,null,null)
a2.dv(null,null,j)
q.a=a2
f.aD(0,l)
m.i(0,a1,q.a)}else if(f.T(a0,$.yi))if(C.c.ah(a1,"?")){a1=C.c.al(a1,1)
f=$.$get$hY().b6(0,a1)
f=H.dx(f,B.kO(),H.aq(f,"n",0),null)
d=P.dj(f,!0,H.aq(f,"n",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.bj(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kS(d[0],$.$get$fx(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.kS(d[1],$.$get$fx(),"")
f=$.$get$cH()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ah(a1,"@")){e=C.c.al(a1,1)
$.$get$cH().toString
f=$.$get$hY().b6(0,a1)
f=H.dx(f,B.kO(),H.aq(f,"n",0),null)
d=P.dj(f,!0,H.aq(f,"n",0))
a4=d.length>1?H.xN(d[1],new U.qp(q,d)):1
q.a.c.i(0,C.c.d9(e,$.$get$fx(),""),a4)}else{$.$get$cH().toString
f=$.$get$hY().b6(0,g)
f=H.dx(f,B.kO(),H.aq(f,"n",0),null)
d=P.dj(f,!0,H.aq(f,"n",0))
a4=d.length>1?H.xN(d[1],new U.qq(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bv(J.kS(d[0],$.$get$fx(),""))
h=new B.dC(null)
a3=P.cy(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.wj(a4)),[H.aq(f,"cP",0)]))}else if(f.T(a0,$.yi*2)){$.$get$cH().toString
f=$.$get$hY().b6(0,g)
f=H.dx(f,B.kO(),H.aq(f,"n",0),null)
d=P.dj(f,!0,H.aq(f,"n",0))
f=d.length
if(f!==2)$.$get$cH().bj(C.h,"Invalid variant for "+H.y(h.dh(0))+" in "+q.a.e)
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bv(J.kS(d[0],$.$get$fx(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a3=C.c.d9(U.Ho(d[1]),$.$get$fx(),"")
h.a.i(0,f,a3)}}}}}r=new B.i3(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseE:function(){return[B.i3]},
$asc7:function(){return[B.i3,P.x]}}
U.qp.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bj(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
U.qq.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bj(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
F.qs.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a3)
s=[G.a1]
r=A.i("Make a World Book",H.a([$.L,$.al,$.ax],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aY,$.Q,$.mZ],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.ax,$.L,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.ax,$.L,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.ax,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.E,$.Y,$.mZ,$.al],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.ax,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.ax,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a9,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.k)
q.i(0,$.cC,$.k)
q.i(0,$.be,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.he,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.a_("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cx,$.m)
s.i(0,$.be,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.a_("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.K+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dK,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.dL,$.m)
t.i(0,$.ds,$.k)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.a_("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aC)}}
B.qx.prototype={
aY:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bn(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$yj()
p=J.w8(b)
q.toString
r=q.hH(T.us(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdp:function(){return[T.fN]},
$asc7:function(){return[T.fN,P.bi]}}
A.fV.prototype={}
B.dq.prototype={
cP:function(a){if(a)this.b=(this.b|C.a.au(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.fr(this.b)
this.b=0}},
am:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.au(1,t)
if(typeof a!=="number")return a.aQ()
this.cP((a&s)>>>0>0)}},
hr:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aA(1,t-s)
if(typeof a!=="number")return a.aQ()
this.cP((a&r)>>>0>0)}},
c0:function(a){var t,s
a=J.dY(a,1)
t=C.d.dt(Math.log(H.kJ(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cP(!1)
this.hr(a,t+1)},
bc:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a6(r)
q+=r
p=r}else p=0
r=H.cz(q)
o=new Uint8Array(r)
if(t){n=H.cM(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a9(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.dg.prototype={
cH:function(a){var t,s,r,q
t=C.f.ap(a/8)
s=C.a.bR(a,8)
r=this.a.getUint8(t)
q=C.a.aA(1,s)
if(typeof r!=="number")return r.aQ()
return(r&q)>>>0>0},
ac:function(a){var t,s,r
if(a>32)throw H.j(P.dH(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cH(this.b);++this.b
if(r)t=(t|C.a.au(1,s))>>>0}return t},
iu:function(a){var t,s,r,q
if(a>32)throw H.j(P.dH(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cH(this.b);++this.b
if(q)s=(s|C.a.aA(1,t-r))>>>0}return s},
ca:function(){var t,s,r
for(t=0;!0;){s=this.cH(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.iu(t+1)-1}}
A.e_.prototype={
B:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
iF:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aA()
s=this.c
if(typeof s!=="number")return s.aA()
r=this.d
if(typeof r!=="number")return r.aA()
q=this.a
if(typeof q!=="number")return H.a6(q)
return(t<<24|s<<16|r<<8|q)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e_){t=this.b
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
ga5:function(a){return this.iF(!0)},
R:function(a,b){var t,s,r,q,p,o,n,m
t=J.ai(b)
if(!!t.$ise_){t=this.b
s=b.b
if(typeof t!=="number")return t.R()
if(typeof s!=="number")return H.a6(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.R()
if(typeof q!=="number")return H.a6(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.R()
if(typeof o!=="number")return H.a6(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.R()
if(typeof m!=="number")return H.a6(m)
return A.fY(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.ws(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.R()
s=this.c
if(typeof s!=="number")return s.R()
r=this.d
if(typeof r!=="number")return r.R()
return A.fY(t+b,s+b,r+b,this.a)}throw H.j("Cannot add ["+H.y(t.gad(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
ak:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.ws(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){var t=J.ai(b)
if(t.T(b,0))return this.b
if(t.T(b,1))return this.c
if(t.T(b,2))return this.d
if(t.T(b,3))return this.a
throw H.j("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dm(b)
if(t.a4(b,0)||t.aF(b,3))throw H.j("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.T(b,0)){this.b=C.a.af(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.af(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,2)){this.d=C.a.af(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.af(c,0,255)
else if(t.T(b,0)){this.b=C.a.af(J.kQ(J.w7(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.af(J.kQ(J.w7(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kK(c)
if(t.T(b,2)){this.d=C.a.af(J.kQ(s.ak(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.af(J.kQ(s.ak(c,255)),0,255)}},
fn:function(a,b,c,d){this.b=C.d.af(C.d.af(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.af(C.d.af(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.af(C.d.af(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.af(J.z7(d,0,255),0,255)}}
A.tp.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.x]}}}
A.nw.prototype={
$1:function(a){return this.a.eJ(a)},
$S:function(){return{func:1,args:[,]}}}
A.nu.prototype={
$1:function(a){this.a.P(0,a).b1(this.b.gir())},
$S:function(){return{func:1,args:[,]}}}
A.nv.prototype={
$1:function(a){this.a.hy(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.nx.prototype={
$1:function(a){return this.a.aI(0,this.b)},
$S:function(){return{func:1,args:[W.Z]}}}
F.hB.prototype={
B:function(a){return this.b}}
F.hC.prototype={
bj:function(a,b){F.Gb(a).$1("("+this.c+")["+H.y(C.b.gbi(a.b.split(".")))+"]: "+H.y(b))},
cV:function(a,b){this.bj(C.h,b)},
gH:function(a){return this.c}}
F.v2.prototype={}
O.tL.prototype={
$1:function(a){return H.y(a.bk(1))+" = "+H.y(a.bk(2))+C.c.ak("../",this.a)},
$S:function(){return{func:1,args:[P.dy]}}}
O.tM.prototype={
$0:function(){var t=document
J.wf(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.x,null)
t=H.kN(t.querySelector("#voidButton"),"$isfX")
t.toString
W.eN(t,"click",new O.tK(),!1,W.e6)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.IR("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tK.prototype={
$1:function(a){return O.IW()},
$S:function(){return{func:1,args:[W.Z]}}}
R.hi.prototype={}
R.vj.prototype={}
R.vi.prototype={}
A.oh.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a_(0,b)?t.n(0,b):$.$get$vh()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a_(0,b)?t.n(0,b):$.$get$vh()}throw H.j(P.dH(b,"'name' should be a String name or int id only",null))},
gY:function(a){var t=this.a
t=t.gce(t)
return new H.jL(null,J.cI(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a_(0,b))this.as(0,b)
s=this.h6()
if(typeof s!=="number")return s.ay()
if(s>=256)throw H.j(P.dH(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
as:function(a,b){var t,s,r
t=this.a
if(!t.a_(0,b))return
s=this.c
r=s.n(0,b)
t.as(0,b)
this.b.as(0,r)
s.as(0,b)
this.d.as(0,r)},
h6:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a_(0,s))return s;++s}}}
A.jW.prototype={
$asn:function(){return[A.e_]},
$isn:1}
Q.k_.prototype={}
A.k2.prototype={
bK:function(a){if(a===0)return 0
return this.h7(a)},
ih:function(){return this.bK(4294967295)},
h7:function(a){var t,s
t=this.a
if(a>4294967295){s=t.d_()
this.b=C.d.b0(s*4294967295)
return C.d.ap(s*a)}else{s=t.bK(a)
this.b=s
return s}},
dl:function(a){var t=a==null
this.a=t?C.R:P.HF(a)
if(!t)this.b=J.dY(a,1)},
ip:function(a,b){var t=a.length
if(t===0)return
t=this.bK(t)
if(t<0||t>=a.length)return H.u(a,t)
return a[t]},
io:function(a){return this.ip(a,!0)}}
Y.dQ.prototype={
cN:function(a){var t,s
if(this.b!=null)throw H.j("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bk(0,$.ao,null,t)
this.c.push(new P.dW(s,t))
return s},
eJ:function(a){var t,s,r
if(this.b!=null)throw H.j("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c3)(t),++r)t[r].aI(0,this.b)
C.b.sm(t,0)}}
V.lT.prototype={
$4:function(a,b,c,d){return V.As(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bi,P.bi,O.cW]}}}
V.lS.prototype={
$4:function(a,b,c,d){return V.Ar(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.D,P.D,O.cW]}}}
V.lR.prototype={
$4:function(a,b,c,d){return V.Ao(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bi,P.bi,O.cW]}}}
V.lQ.prototype={
$4:function(a,b,c,d){return V.An(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.D,P.D,O.cW]}}}
O.cW.prototype={
iv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.u(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
iL:function(a,b,c,d){var t,s,r,q,p
t=J.aM(d)
s=0
while(!0){r=t.geD(d)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
q=(C.a.dt(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.pd.prototype={
$1:function(a){return a.giq()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
B:function(a){return this.a},
gH:function(a){return this.a},
giq:function(){return this.d}}
D.kn.prototype={}
D.oJ.prototype={}
B.dC.prototype={
f_:function(a,b){if(this.a.a_(0,"MAIN"))return this.a.n(0,"MAIN")
return},
dh:function(a){return this.f_(a,null)},
B:function(a){return"[Word: "+H.y(this.dh(0))+"]"}}
B.km.prototype={
B:function(a){return"WordList '"+this.e+"': "+this.fj(0)},
$isp:1,
$asp:function(){return[B.dC]},
$asdV:function(){return[B.dC]},
$asi2:function(){return[B.dC]},
$ascP:function(){return[B.dC]},
$asn:function(){return[B.dC]},
$asr:function(){return[B.dC]},
gH:function(a){return this.e}}
B.i3.prototype={
B:function(a){return"[WordListFile: "+this.b.B(0)+" ]"}}
S.fo.prototype={}
S.vL.prototype={}
S.vM.prototype={}
S.vN.prototype={}
S.u8.prototype={}
S.ub.prototype={}
S.tZ.prototype={}
S.vu.prototype={}
S.vP.prototype={}
S.vQ.prototype={}
S.lf.prototype={}
S.vk.prototype={}
S.vg.prototype={}
S.no.prototype={}
S.u2.prototype={}
S.tU.prototype={}
S.lA.prototype={}
S.v3.prototype={}
S.lB.prototype={}
S.oj.prototype={}
S.vB.prototype={}
S.vy.prototype={}
S.vC.prototype={}
S.tT.prototype={}
S.mA.prototype={}
S.ld.prototype={}
S.tY.prototype={}
S.tX.prototype={}
S.vl.prototype={}
S.vD.prototype={}
S.vm.prototype={}
S.ua.prototype={}
S.u9.prototype={}
S.vA.prototype={}
S.vz.prototype={}
S.pS.prototype={}
S.vG.prototype={}
S.u_.prototype={}
S.u0.prototype={}
S.vO.prototype={}
S.hE.prototype={}
S.v8.prototype={}
S.v9.prototype={}
S.va.prototype={}
S.vb.prototype={}
S.vv.prototype={}
S.vw.prototype={}
S.vx.prototype={}
S.v7.prototype={}
S.vd.prototype={}
S.ve.prototype={}
S.un.prototype={}
S.uo.prototype={}
S.up.prototype={}
S.vf.prototype={}
S.vc.prototype={}
S.tV.prototype={}
S.vI.prototype={}
S.vJ.prototype={}
S.vH.prototype={}
Z.uY.prototype={}
Z.uT.prototype={}
Z.uU.prototype={}
Q.cP.prototype={
k:function(a,b){return b},
B:function(a){return J.cu(this.gc8())},
aE:function(a,b){return Q.vS(this,b,H.aq(this,"cP",0),null)},
a7:function(a,b){return Q.vR(this,!1,!0,null,H.aq(this,"cP",0))},
at:function(a){return this.a7(a,!0)},
$isn:1,
$asn:null}
Q.dV.prototype={
gc8:function(){return this.b},
c_:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.wj(c)),[H.aq(this,"cP",0)]))},
h:function(a,b){return this.c_(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.wd(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.h(c,s,[H.aq(this,"cP",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
B:function(a){return P.jE(this.b,"[","]")},
aE:function(a,b){return Q.vS(this,b,H.aq(this,"dV",0),null)},
a7:function(a,b){return Q.vR(this,!1,!0,null,H.aq(this,"dV",0))},
at:function(a){return this.a7(a,!0)},
dv:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i2.prototype={$ascP:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.h.prototype={
B:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
ga1:function(a){return this.a},
gde:function(a){return this.b}}
Q.eL.prototype={
gc8:function(){return this.b},
gY:function(a){var t=new Q.ql(null,[H.aq(this,"eL",0)])
t.a=J.cI(this.b)
return t},
gm:function(a){return J.c4(this.b)},
B:function(a){return J.cu(this.b)},
aE:function(a,b){return Q.vS(this,b,H.aq(this,"eL",0),null)},
a7:function(a,b){return Q.vR(this,!1,!0,null,H.aq(this,"eL",0))},
at:function(a){return this.a7(a,!0)}}
Q.i1.prototype={$ascP:null,$asn:null,$isn:1}
Q.ql.prototype={
gS:function(){return J.wd(this.a.gS())},
G:function(){return this.a.G()}}
Q.kj.prototype={
$aseL:function(a,b){return[b]},
$asi1:function(a,b){return[b]},
$ascP:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.qm.prototype={
$1:function(a){var t=J.aM(a)
return new Q.h(this.c.$1(t.ga1(a)),t.gde(a),[this.b])},
$S:function(){return H.eR(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"kj")}}
J.f.prototype.fg=J.f.prototype.B
J.hu.prototype.fi=J.hu.prototype.B
P.dc.prototype.fk=P.dc.prototype.bw
P.dc.prototype.fl=P.dc.prototype.bS
P.aT.prototype.ds=P.aT.prototype.a8
P.n.prototype.fh=P.n.prototype.cg
W.ca.prototype.cn=W.ca.prototype.aO
W.ib.prototype.fm=W.ib.prototype.b7
Q.dV.prototype.fj=Q.dV.prototype.B;(function installTearOffs(){installTearOff(H.fE.prototype,"gia",0,0,0,null,["$0"],["c6"],1)
installTearOff(H.dE.prototype,"gf2",0,0,0,null,["$1"],["aG"],6)
installTearOff(H.eM.prototype,"ghL",0,0,0,null,["$1"],["b8"],6)
installTearOff(H,"yD",1,0,0,null,["$1"],["I8"],14)
installTearOff(P,"Ib",1,0,0,null,["$1"],["Hs"],8)
installTearOff(P,"Ic",1,0,0,null,["$1"],["Ht"],8)
installTearOff(P,"Id",1,0,0,null,["$1"],["Hu"],8)
installTearOff(P,"yP",1,0,0,null,["$0"],["I7"],1)
installTearOff(P.kr.prototype,"gek",0,0,0,null,["$2","$1"],["cS","bB"],12)
installTearOff(P.bk.prototype,"gbm",0,0,0,null,["$2","$1"],["aq","fJ"],12)
var t
installTearOff(t=P.dc.prototype,"ge_",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["bW"],1)
installTearOff(t=P.eO.prototype,"ge_",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["bW"],1)
installTearOff(t,"gfV",0,0,0,null,["$1"],["fW"],function(){return H.eR(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eO")})
installTearOff(t,"gfZ",0,0,0,null,["$2"],["h_"],33)
installTearOff(t,"gfX",0,0,0,null,["$0"],["fY"],1)
installTearOff(P.ky.prototype,"ghz",0,1,0,null,["$1"],["Z"],16)
installTearOff(P,"Im",1,0,0,null,["$1"],["I0"],6)
installTearOff(P,"In",1,0,0,null,["$2"],["A5"],32)
installTearOff(P,"Io",1,0,0,null,["$1"],["eS"],4)
installTearOff(W,"IA",1,0,0,null,["$4"],["HA"],13)
installTearOff(W,"IB",1,0,0,null,["$4"],["HB"],13)
installTearOff(W.il.prototype,"gaj",0,1,0,null,["$0"],["i9"],17)
installTearOff(t=W.ip.prototype,"gav",0,1,0,null,["$1"],["cV"],4)
installTearOff(t,"gi4",0,0,0,null,["$1"],["eA"],4)
installTearOff(t,"giI",0,0,0,null,["$1"],["iJ"],4)
installTearOff(W.f3.prototype,"ga1",0,1,0,null,["$1"],["K"],5)
installTearOff(W.it.prototype,"ga1",0,1,0,null,["$1"],["K"],35)
installTearOff(W.iA.prototype,"ga1",0,1,0,null,["$1"],["K"],5)
installTearOff(W.iB.prototype,"ga1",0,1,0,null,["$1"],["K"],14)
installTearOff(W.iC.prototype,"ga1",0,1,0,null,["$1"],["K"],5)
installTearOff(W.fc.prototype,"ga1",0,1,0,null,["$1"],["K"],15)
installTearOff(W.iS.prototype,"ga1",0,1,0,null,["$1"],["K"],10)
installTearOff(W.fe.prototype,"ga1",0,1,0,null,["$1"],["K"],9)
installTearOff(W.iU.prototype,"ga1",0,1,0,null,["$1"],["K"],9)
installTearOff(W.jN.prototype,"ga1",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jO.prototype,"ga1",0,1,0,null,["$1"],["K"],11)
installTearOff(W.jR.prototype,"gd4",0,1,0,null,["$0"],["d5"],7)
installTearOff(W.cf.prototype,"ga1",0,1,0,null,["$1"],["K"],11)
installTearOff(W.k1.prototype,"ga1",0,1,0,null,["$1"],["K"],18)
installTearOff(W.k6.prototype,"ga1",0,1,0,null,["$1"],["K"],10)
installTearOff(W.k8.prototype,"ga1",0,1,0,null,["$1"],["K"],19)
installTearOff(W.k9.prototype,"ga1",0,1,0,null,["$1"],["K"],20)
installTearOff(W.ch.prototype,"ga1",0,1,0,null,["$1"],["K"],21)
installTearOff(W.kf.prototype,"ga1",0,1,0,null,["$1"],["K"],22)
installTearOff(W.kg.prototype,"ga1",0,1,0,null,["$1"],["K"],23)
installTearOff(t=W.kh.prototype,"gc9",0,1,0,null,["$0"],["il"],7)
installTearOff(t,"gd4",0,1,0,null,["$0"],["d5"],7)
installTearOff(W.ki.prototype,"ga1",0,1,0,null,["$1"],["K"],24)
installTearOff(W.i4.prototype,"ga1",0,1,0,null,["$1"],["K"],25)
installTearOff(W.ks.prototype,"ga1",0,1,0,null,["$1"],["K"],26)
installTearOff(W.kw.prototype,"ga1",0,1,0,null,["$1"],["K"],36)
installTearOff(W.ia.prototype,"ga1",0,1,0,null,["$1"],["K"],28)
installTearOff(W.kB.prototype,"ga1",0,1,0,null,["$1"],["K"],29)
installTearOff(W.kD.prototype,"ga1",0,1,0,null,["$1"],["K"],30)
installTearOff(P.ka.prototype,"ga1",0,1,0,null,["$1"],["K"],31)
installTearOff(E,"wl",1,0,0,null,["$0"],["IH"],1)
installTearOff(R,"ey",1,0,0,null,["$1"],["GM"],0)
installTearOff(R,"xQ",1,0,0,null,["$1"],["GA"],0)
installTearOff(R,"vt",1,0,0,null,["$1"],["GL"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["GK"],0)
installTearOff(R,"vs",1,0,0,null,["$1"],["GJ"],0)
installTearOff(R,"xS",1,0,0,null,["$1"],["GH"],0)
installTearOff(R,"hM",1,0,0,null,["$1"],["GG"],0)
installTearOff(R,"ex",1,0,0,null,["$1"],["GD"],0)
installTearOff(R,"e9",1,0,0,null,["$1"],["GF"],0)
installTearOff(R,"fs",1,0,0,null,["$1"],["GI"],0)
installTearOff(R,"vr",1,0,0,null,["$1"],["GE"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["GB"],0)
installTearOff(R,"xR",1,0,0,null,["$1"],["GC"],0)
installTearOff(F.hC.prototype,"gav",0,1,0,null,["$1"],["cV"],4)
installTearOff(O,"IK",1,0,0,null,["$1"],["IM"],34)
installTearOff(Y.dQ.prototype,"gir",0,0,0,null,["$1"],["eJ"],function(){return H.eR(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dQ")})
installTearOff(V,"IP",1,0,0,null,["$4"],["Aq"],3)
installTearOff(V,"IO",1,0,0,null,["$4"],["Ap"],2)
installTearOff(B,"kO",1,0,0,null,["$1"],["I1"],27)
installTearOff(T,"Ih",1,0,0,null,["$4"],["Ag"],3)
installTearOff(T,"Ig",1,0,0,null,["$4"],["Af"],2)
installTearOff(T,"If",1,0,0,null,["$4"],["Ae"],3)
installTearOff(T,"Ie",1,0,0,null,["$4"],["Ad"],2)
installTearOff(F,"Iv",1,0,0,null,["$4"],["Am"],3)
installTearOff(F,"Iu",1,0,0,null,["$4"],["Al"],2)
installTearOff(F,"It",1,0,0,null,["$4"],["Ak"],3)
installTearOff(F,"Is",1,0,0,null,["$4"],["Aj"],2)
installTearOff(F,"Ir",1,0,0,null,["$4"],["Ai"],3)
installTearOff(F,"Iq",1,0,0,null,["$4"],["Ah"],2)})();(function inheritance(){inherit(P.z,null)
var t=P.z
inherit(H.v_,t)
inherit(J.f,t)
inherit(J.eU,t)
inherit(P.fp,t)
inherit(P.n,t)
inherit(H.es,t)
inherit(P.jF,t)
inherit(H.iP,t)
inherit(H.q4,t)
inherit(H.f0,t)
inherit(H.rt,t)
inherit(H.fE,t)
inherit(H.qW,t)
inherit(H.eP,t)
inherit(H.rs,t)
inherit(H.qG,t)
inherit(H.ft,t)
inherit(H.pW,t)
inherit(H.dI,t)
inherit(H.dE,t)
inherit(H.eM,t)
inherit(H.ln,t)
inherit(H.oI,t)
inherit(H.q1,t)
inherit(P.ef,t)
inherit(H.ha,t)
inherit(H.kC,t)
inherit(H.dU,t)
inherit(H.w,t)
inherit(H.np,t)
inherit(H.nr,t)
inherit(H.ht,t)
inherit(H.kA,t)
inherit(H.kp,t)
inherit(H.kc,t)
inherit(H.rR,t)
inherit(P.cl,t)
inherit(P.f2,t)
inherit(P.kr,t)
inherit(P.kv,t)
inherit(P.bk,t)
inherit(P.kq,t)
inherit(P.cZ,t)
inherit(P.pg,t)
inherit(P.dc,t)
inherit(P.kt,t)
inherit(P.qQ,t)
inherit(P.rw,t)
inherit(P.rP,t)
inherit(P.eV,t)
inherit(P.t7,t)
inherit(P.rf,t)
inherit(P.rg,t)
inherit(P.oZ,t)
inherit(P.rq,t)
inherit(P.dD,t)
inherit(P.eo,t)
inherit(P.aT,t)
inherit(P.nF,t)
inherit(P.rZ,t)
inherit(P.nG,t)
inherit(P.rr,t)
inherit(P.rl,t)
inherit(P.f1,t)
inherit(P.ed,t)
inherit(P.ro,t)
inherit(P.t0,t)
inherit(P.cQ,t)
inherit(P.bG,t)
inherit(P.e0,t)
inherit(P.dn,t)
inherit(P.dr,t)
inherit(P.od,t)
inherit(P.kb,t)
inherit(P.r0,t)
inherit(P.bJ,t)
inherit(P.lW,t)
inherit(P.p,t)
inherit(P.aL,t)
inherit(P.d6,t)
inherit(P.dy,t)
inherit(P.dS,t)
inherit(P.x,t)
inherit(P.c1,t)
inherit(P.eI,t)
inherit(P.kF,t)
inherit(P.q5,t)
inherit(P.rL,t)
inherit(W.ip,t)
inherit(W.jV,t)
inherit(W.is,t)
inherit(W.qF,t)
inherit(P.ls,t)
inherit(W.i7,t)
inherit(W.bv,t)
inherit(W.jT,t)
inherit(W.ib,t)
inherit(W.rV,t)
inherit(W.iQ,t)
inherit(W.qN,t)
inherit(W.e7,t)
inherit(W.rY,t)
inherit(W.rH,t)
inherit(W.kG,t)
inherit(P.rS,t)
inherit(P.qy,t)
inherit(P.rk,t)
inherit(P.ry,t)
inherit(P.dz,t)
inherit(P.rz,t)
inherit(P.bi,t)
inherit(P.db,t)
inherit(T.fO,t)
inherit(T.de,t)
inherit(T.hn,t)
inherit(T.of,t)
inherit(T.qu,t)
inherit(T.qv,t)
inherit(T.qw,t)
inherit(T.qt,t)
inherit(T.mK,t)
inherit(T.iV,t)
inherit(B.ho,t)
inherit(N.a9,t)
inherit(L.fP,t)
inherit(A.jW,t)
inherit(O.c7,t)
inherit(T.hO,t)
inherit(M.fW,t)
inherit(B.ir,t)
inherit(X.iG,t)
inherit(X.im,t)
inherit(M.hb,t)
inherit(Z.iF,t)
inherit(E.oa,t)
inherit(E.O,t)
inherit(A.a3,t)
inherit(S.jX,t)
inherit(U.c,t)
inherit(Y.dR,t)
inherit(K.cE,t)
inherit(X.G,t)
inherit(G.a1,t)
inherit(A.fV,t)
inherit(B.dq,t)
inherit(B.dg,t)
inherit(A.e_,t)
inherit(F.hB,t)
inherit(F.hC,t)
inherit(Q.k_,t)
inherit(A.k2,t)
inherit(Y.dQ,t)
inherit(O.cW,t)
inherit(D.cF,t)
inherit(B.dC,t)
inherit(Q.cP,t)
inherit(B.i3,t)
inherit(Q.h,t)
t=J.f
inherit(J.n6,t)
inherit(J.n7,t)
inherit(J.hu,t)
inherit(J.ep,t)
inherit(J.fk,t)
inherit(J.eq,t)
inherit(H.fl,t)
inherit(H.ev,t)
inherit(W.ag,t)
inherit(W.cJ,t)
inherit(W.eZ,t)
inherit(W.il,t)
inherit(W.lh,t)
inherit(W.fZ,t)
inherit(W.bM,t)
inherit(W.iW,t)
inherit(W.lD,t)
inherit(W.f4,t)
inherit(W.it,t)
inherit(W.lG,t)
inherit(W.ix,t)
inherit(W.lH,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(W.iX,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(W.h3,t)
inherit(W.Z,t)
inherit(W.iY,t)
inherit(W.mq,t)
inherit(W.mt,t)
inherit(W.cm,t)
inherit(W.mF,t)
inherit(W.iZ,t)
inherit(W.hl,t)
inherit(W.eF,t)
inherit(W.nz,t)
inherit(W.jN,t)
inherit(W.cn,t)
inherit(W.j8,t)
inherit(W.o1,t)
inherit(W.o2,t)
inherit(W.jR,t)
inherit(W.j9,t)
inherit(W.ok,t)
inherit(W.e8,t)
inherit(W.fz,t)
inherit(W.cf,t)
inherit(W.ja,t)
inherit(W.oE,t)
inherit(W.k5,t)
inherit(W.oX,t)
inherit(W.cp,t)
inherit(W.jb,t)
inherit(W.fv,t)
inherit(W.ch,t)
inherit(W.pa,t)
inherit(W.pe,t)
inherit(W.cj,t)
inherit(W.jc,t)
inherit(W.pV,t)
inherit(W.cq,t)
inherit(W.jd,t)
inherit(W.fy,t)
inherit(W.kg,t)
inherit(W.kh,t)
inherit(W.qa,t)
inherit(W.fA,t)
inherit(W.ki,t)
inherit(W.qJ,t)
inherit(W.je,t)
inherit(W.jf,t)
inherit(W.j_,t)
inherit(W.j0,t)
inherit(W.j1,t)
inherit(W.j2,t)
inherit(W.t5,t)
inherit(W.t6,t)
inherit(P.mP,t)
inherit(P.o9,t)
inherit(P.d5,t)
inherit(P.j3,t)
inherit(P.d7,t)
inherit(P.j4,t)
inherit(P.ot,t)
inherit(P.ou,t)
inherit(P.oG,t)
inherit(P.j5,t)
inherit(P.da,t)
inherit(P.j6,t)
inherit(P.qh,t)
inherit(P.fR,t)
inherit(P.kV,t)
inherit(P.oK,t)
inherit(P.oL,t)
inherit(P.t4,t)
inherit(P.j7,t)
t=J.hu
inherit(J.or,t)
inherit(J.eH,t)
inherit(J.er,t)
inherit(F.v2,t)
inherit(R.hi,t)
inherit(R.vj,t)
inherit(R.vi,t)
inherit(S.fo,t)
inherit(S.vL,t)
inherit(S.vM,t)
inherit(S.vN,t)
inherit(S.u8,t)
inherit(S.ub,t)
inherit(S.tZ,t)
inherit(S.vP,t)
inherit(S.vQ,t)
inherit(S.lA,t)
inherit(S.vB,t)
inherit(S.vC,t)
inherit(S.tT,t)
inherit(S.mA,t)
inherit(S.ld,t)
inherit(S.tY,t)
inherit(S.tX,t)
inherit(S.ua,t)
inherit(S.pS,t)
inherit(S.u0,t)
inherit(S.hE,t)
inherit(S.v9,t)
inherit(S.vb,t)
inherit(S.vw,t)
inherit(S.vx,t)
inherit(S.vd,t)
inherit(S.ve,t)
inherit(S.uo,t)
inherit(S.up,t)
inherit(S.vf,t)
inherit(S.vc,t)
inherit(S.tV,t)
inherit(S.vI,t)
inherit(S.vJ,t)
inherit(S.vH,t)
inherit(Z.uY,t)
inherit(Z.uT,t)
inherit(Z.uU,t)
inherit(J.uZ,J.ep)
t=J.fk
inherit(J.jH,t)
inherit(J.jG,t)
inherit(P.hz,P.fp)
t=P.hz
inherit(H.i_,t)
inherit(W.ku,t)
inherit(W.d_,t)
inherit(H.lk,H.i_)
t=P.n
inherit(H.r,t)
inherit(H.hD,t)
inherit(H.eJ,t)
inherit(H.hQ,t)
inherit(H.qK,t)
inherit(P.hr,t)
inherit(H.rQ,t)
t=H.r
inherit(H.dO,t)
inherit(H.nq,t)
inherit(P.kx,t)
inherit(P.eB,t)
t=H.dO
inherit(H.pE,t)
inherit(H.eu,t)
inherit(P.ns,t)
inherit(P.rm,t)
inherit(H.h1,H.hD)
t=P.jF
inherit(H.jL,t)
inherit(H.kk,t)
inherit(H.p2,t)
inherit(Q.ql,t)
inherit(H.iD,H.hQ)
t=H.f0
inherit(H.tO,t)
inherit(H.tP,t)
inherit(H.rj,t)
inherit(H.qX,t)
inherit(H.mS,t)
inherit(H.mT,t)
inherit(H.rv,t)
inherit(H.pX,t)
inherit(H.pY,t)
inherit(H.tQ,t)
inherit(H.tC,t)
inherit(H.tD,t)
inherit(H.tE,t)
inherit(H.tF,t)
inherit(H.tG,t)
inherit(H.pL,t)
inherit(H.na,t)
inherit(H.n9,t)
inherit(H.ty,t)
inherit(H.tz,t)
inherit(H.tA,t)
inherit(P.qC,t)
inherit(P.qB,t)
inherit(P.qD,t)
inherit(P.qE,t)
inherit(P.t8,t)
inherit(P.t9,t)
inherit(P.tl,t)
inherit(P.tn,t)
inherit(P.mz,t)
inherit(P.my,t)
inherit(P.r1,t)
inherit(P.r9,t)
inherit(P.r5,t)
inherit(P.r6,t)
inherit(P.r7,t)
inherit(P.r3,t)
inherit(P.r8,t)
inherit(P.r2,t)
inherit(P.rc,t)
inherit(P.rd,t)
inherit(P.rb,t)
inherit(P.ra,t)
inherit(P.pj,t)
inherit(P.ph,t)
inherit(P.pi,t)
inherit(P.pk,t)
inherit(P.pp,t)
inherit(P.pn,t)
inherit(P.po,t)
inherit(P.pq,t)
inherit(P.pt,t)
inherit(P.pu,t)
inherit(P.pr,t)
inherit(P.ps,t)
inherit(P.pv,t)
inherit(P.pw,t)
inherit(P.pl,t)
inherit(P.pm,t)
inherit(P.qI,t)
inherit(P.qH,t)
inherit(P.rx,t)
inherit(P.tb,t)
inherit(P.ta,t)
inherit(P.tc,t)
inherit(P.tk,t)
inherit(P.rB,t)
inherit(P.rC,t)
inherit(P.rD,t)
inherit(P.rh,t)
inherit(P.nI,t)
inherit(P.rp,t)
inherit(P.t2,t)
inherit(P.t1,t)
inherit(P.lM,t)
inherit(P.lN,t)
inherit(P.q9,t)
inherit(P.q6,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.to,t)
inherit(P.th,t)
inherit(P.tg,t)
inherit(P.ti,t)
inherit(P.tj,t)
inherit(W.qM,t)
inherit(W.tm,t)
inherit(W.mI,t)
inherit(W.mJ,t)
inherit(W.pf,t)
inherit(W.r_,t)
inherit(W.o4,t)
inherit(W.o3,t)
inherit(W.rJ,t)
inherit(W.rK,t)
inherit(W.rX,t)
inherit(W.t3,t)
inherit(P.rU,t)
inherit(P.qz,t)
inherit(P.tq,t)
inherit(P.tr,t)
inherit(P.lt,t)
inherit(P.te,t)
inherit(P.l0,t)
inherit(P.l1,t)
inherit(E.tJ,t)
inherit(B.lq,t)
inherit(O.l8,t)
inherit(A.n5,t)
inherit(A.n4,t)
inherit(G.n2,t)
inherit(U.qp,t)
inherit(U.qq,t)
inherit(A.tp,t)
inherit(A.nw,t)
inherit(A.nu,t)
inherit(A.nv,t)
inherit(A.nx,t)
inherit(O.tL,t)
inherit(O.tM,t)
inherit(O.tK,t)
inherit(V.lT,t)
inherit(V.lS,t)
inherit(V.lR,t)
inherit(V.lQ,t)
inherit(D.pd,t)
inherit(Q.qm,t)
t=H.qG
inherit(H.fF,t)
inherit(H.id,t)
inherit(H.lo,H.ln)
t=P.ef
inherit(H.jU,t)
inherit(H.nb,t)
inherit(H.q3,t)
inherit(H.li,t)
inherit(H.oP,t)
inherit(P.hv,t)
inherit(P.fn,t)
inherit(P.cT,t)
inherit(P.R,t)
inherit(P.eG,t)
inherit(P.d8,t)
inherit(P.bH,t)
inherit(P.lC,t)
t=H.pL
inherit(H.pc,t)
inherit(H.fT,t)
t=P.hr
inherit(H.qA,t)
inherit(T.fN,t)
t=H.ev
inherit(H.nU,t)
inherit(H.jP,t)
t=H.jP
inherit(H.hI,t)
inherit(H.hJ,t)
inherit(H.hK,H.hI)
inherit(H.hG,H.hK)
inherit(H.hL,H.hJ)
inherit(H.hH,H.hL)
t=H.hG
inherit(H.nV,t)
inherit(H.nW,t)
t=H.hH
inherit(H.nX,t)
inherit(H.nY,t)
inherit(H.nZ,t)
inherit(H.o_,t)
inherit(H.o0,t)
inherit(H.jQ,t)
inherit(H.fm,t)
t=P.kr
inherit(P.dW,t)
inherit(P.kE,t)
t=P.kt
inherit(P.qP,t)
inherit(P.qR,t)
inherit(P.rO,P.rw)
t=P.cZ
inherit(P.fC,t)
inherit(W.qY,t)
inherit(P.eO,P.dc)
t=P.fC
inherit(P.ru,t)
inherit(P.rM,t)
inherit(P.rN,P.eO)
inherit(P.rA,P.t7)
inherit(P.kz,H.w)
inherit(P.oY,P.oZ)
inherit(P.ri,P.oY)
inherit(P.ky,P.ri)
inherit(P.i0,P.nG)
t=P.f1
inherit(P.l5,t)
inherit(P.lP,t)
inherit(P.nc,t)
t=P.ed
inherit(P.l6,t)
inherit(P.nf,t)
inherit(P.ne,t)
inherit(P.qd,t)
inherit(P.nd,P.hv)
inherit(P.rn,P.ro)
inherit(P.qc,P.lP)
t=P.dn
inherit(P.V,t)
inherit(P.D,t)
t=P.cT
inherit(P.eA,t)
inherit(P.mQ,t)
inherit(P.qO,P.kF)
t=W.ag
inherit(W.af,t)
inherit(W.h4,t)
inherit(W.lm,t)
inherit(W.mp,t)
inherit(W.mr,t)
inherit(W.mu,t)
inherit(W.hk,t)
inherit(W.hF,t)
inherit(W.ox,t)
inherit(W.k4,t)
inherit(W.p_,t)
inherit(W.eK,t)
inherit(W.co,t)
inherit(W.h5,t)
inherit(W.cO,t)
inherit(W.cG,t)
inherit(W.h6,t)
inherit(W.qf,t)
inherit(W.qk,t)
inherit(W.kl,t)
inherit(W.qr,t)
inherit(W.rI,t)
inherit(P.lE,t)
inherit(P.hN,t)
inherit(P.pZ,t)
inherit(P.bF,t)
inherit(P.fS,t)
t=W.af
inherit(W.ca,t)
inherit(W.ec,t)
inherit(W.ee,t)
inherit(W.iw,t)
inherit(W.fB,t)
inherit(W.qS,t)
t=W.ca
inherit(W.aQ,t)
inherit(P.ck,t)
t=W.aQ
inherit(W.eT,t)
inherit(W.kW,t)
inherit(W.jM,t)
inherit(W.l7,t)
inherit(W.f_,t)
inherit(W.fX,t)
inherit(W.lg,t)
inherit(W.iv,t)
inherit(W.lO,t)
inherit(W.mo,t)
inherit(W.iS,t)
inherit(W.mM,t)
inherit(W.fg,t)
inherit(W.hm,t)
inherit(W.ni,t)
inherit(W.jI,t)
inherit(W.hx,t)
inherit(W.nE,t)
inherit(W.nL,t)
inherit(W.nM,t)
inherit(W.nN,t)
inherit(W.nO,t)
inherit(W.o7,t)
inherit(W.o8,t)
inherit(W.oc,t)
inherit(W.oe,t)
inherit(W.oi,t)
inherit(W.oB,t)
inherit(W.fu,t)
inherit(W.k6,t)
inherit(W.p3,t)
inherit(W.p6,t)
inherit(W.hR,t)
inherit(W.pC,t)
inherit(W.kd,t)
inherit(W.pJ,t)
inherit(W.pK,t)
inherit(W.hW,t)
inherit(W.hX,t)
inherit(W.re,t)
t=W.jM
inherit(W.eX,t)
inherit(W.qe,t)
inherit(W.h7,W.h4)
inherit(W.l3,W.h7)
t=W.bM
inherit(W.lu,t)
inherit(W.lv,t)
inherit(W.h_,t)
inherit(W.h0,t)
inherit(W.lw,t)
inherit(W.lx,t)
inherit(W.ly,t)
inherit(W.f3,W.iW)
inherit(W.qL,W.jV)
inherit(W.lI,W.iy)
inherit(W.jg,W.iX)
inherit(W.iA,W.jg)
t=W.Z
inherit(W.lU,t)
inherit(W.dB,t)
inherit(W.p8,t)
inherit(W.p9,t)
inherit(W.cd,W.eZ)
inherit(W.jh,W.iY)
inherit(W.fc,W.jh)
inherit(W.ji,W.iZ)
inherit(W.fe,W.ji)
inherit(W.iU,W.fe)
inherit(W.e5,W.hk)
t=W.eF
inherit(W.hw,t)
inherit(W.ow,t)
inherit(W.nP,W.hF)
inherit(W.js,W.j8)
inherit(W.jO,W.js)
inherit(W.e6,W.dB)
inherit(W.jt,W.j9)
inherit(W.jS,W.jt)
t=W.fz
inherit(W.oq,t)
inherit(W.oO,t)
inherit(W.q0,t)
inherit(W.ju,W.ja)
inherit(W.k1,W.ju)
inherit(W.p0,W.eK)
inherit(W.h8,W.h5)
inherit(W.k8,W.h8)
inherit(W.jv,W.jb)
inherit(W.k9,W.jv)
inherit(W.jw,W.jc)
inherit(W.pQ,W.jw)
inherit(W.h9,W.h6)
inherit(W.pR,W.h9)
inherit(W.jx,W.jd)
inherit(W.kf,W.jx)
inherit(W.jy,W.je)
inherit(W.i4,W.jy)
inherit(W.jz,W.jf)
inherit(W.ks,W.jz)
inherit(W.qT,W.iz)
inherit(W.jj,W.j_)
inherit(W.kw,W.jj)
inherit(W.jk,W.j0)
inherit(W.ia,W.jk)
inherit(W.jl,W.j1)
inherit(W.kB,W.jl)
inherit(W.jm,W.j2)
inherit(W.kD,W.jm)
inherit(W.qU,W.qF)
t=P.ls
inherit(W.qV,t)
inherit(P.l_,t)
inherit(W.i5,W.qY)
inherit(W.qZ,P.pg)
inherit(W.rW,W.ib)
inherit(P.rT,P.rS)
inherit(P.ko,P.qy)
inherit(P.bL,P.rz)
t=P.ck
inherit(P.e4,t)
inherit(P.eb,t)
inherit(P.lX,t)
inherit(P.lY,t)
inherit(P.lZ,t)
inherit(P.m_,t)
inherit(P.m0,t)
inherit(P.m1,t)
inherit(P.m2,t)
inherit(P.m3,t)
inherit(P.m4,t)
inherit(P.m5,t)
inherit(P.m6,t)
inherit(P.m7,t)
inherit(P.m8,t)
inherit(P.m9,t)
inherit(P.ma,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.md,t)
inherit(P.ms,t)
inherit(P.nJ,t)
inherit(P.nK,t)
inherit(P.oo,t)
inherit(P.hP,t)
inherit(P.pD,t)
inherit(P.pI,t)
inherit(P.qg,t)
inherit(P.i6,t)
inherit(P.rE,t)
inherit(P.rF,t)
inherit(P.rG,t)
t=P.e4
inherit(P.kT,t)
inherit(P.mw,t)
inherit(P.dv,t)
inherit(P.mN,t)
inherit(P.pG,t)
inherit(P.ke,t)
inherit(P.qb,t)
inherit(P.jn,P.j3)
inherit(P.nl,P.jn)
inherit(P.jo,P.j4)
inherit(P.o5,P.jo)
inherit(P.oH,P.dv)
inherit(P.jp,P.j5)
inherit(P.pA,P.jp)
t=P.ke
inherit(P.pP,t)
inherit(P.hZ,t)
inherit(P.jq,P.j6)
inherit(P.q_,P.jq)
t=P.bF
inherit(P.eY,t)
inherit(P.l9,t)
inherit(P.lr,t)
t=P.eY
inherit(P.eW,t)
inherit(P.jY,t)
inherit(P.jr,P.j7)
inherit(P.ka,P.jr)
t=B.ho
inherit(S.kU,t)
inherit(M.kZ,t)
inherit(A.ll,t)
inherit(M.lz,t)
inherit(V.lJ,t)
inherit(U.me,t)
inherit(N.nh,t)
inherit(F.nS,t)
inherit(G.ov,t)
inherit(Q.oN,t)
inherit(N.p5,t)
inherit(D.pM,t)
inherit(V.pN,t)
inherit(F.qs,t)
t=N.a9
inherit(T.lF,t)
inherit(R.oC,t)
t=T.lF
inherit(K.bU,t)
inherit(S.bI,t)
inherit(T.c0,t)
inherit(M.bC,t)
inherit(A.oh,A.jW)
inherit(L.aU,A.oh)
t=O.c7
inherit(O.dp,t)
inherit(O.iE,t)
inherit(O.eE,t)
t=O.dp
inherit(U.l2,t)
inherit(Y.oF,t)
inherit(V.mv,t)
inherit(Q.mO,t)
inherit(Q.op,t)
inherit(M.pb,t)
inherit(B.qx,t)
t=U.l2
inherit(U.nB,t)
inherit(U.ob,t)
inherit(U.px,O.iE)
t=U.px
inherit(U.py,t)
inherit(U.pz,t)
t=T.hO
inherit(O.l4,t)
inherit(Y.mB,t)
inherit(Y.mC,t)
inherit(B.mE,t)
inherit(X.mL,t)
inherit(S.nj,t)
inherit(Z.nA,t)
inherit(S.nC,t)
inherit(U.nD,t)
inherit(E.nR,t)
inherit(V.og,t)
inherit(N.oA,t)
inherit(N.oM,t)
inherit(E.oR,t)
inherit(Y.oT,t)
inherit(L.oU,t)
inherit(S.oW,t)
inherit(Y.p4,t)
inherit(R.pH,t)
inherit(U.pT,t)
inherit(E.qj,t)
inherit(M.qn,t)
t=O.eE
inherit(Y.pO,t)
inherit(Y.le,t)
inherit(Y.o6,t)
inherit(U.qo,t)
t=L.fP
inherit(T.la,t)
inherit(T.lc,t)
inherit(U.lK,t)
inherit(Z.lL,t)
inherit(T.mD,t)
inherit(X.mG,t)
inherit(Z.ng,t)
inherit(Q.nk,t)
inherit(K.nm,t)
inherit(G.nn,t)
inherit(V.nQ,t)
inherit(E.oD,t)
inherit(K.oS,t)
inherit(N.p7,t)
inherit(N.pU,t)
inherit(Q.qi,t)
t=S.bI
inherit(S.io,t)
inherit(S.mH,t)
inherit(E.iT,E.oa)
t=E.O
inherit(E.fQ,t)
inherit(E.kY,t)
inherit(Q.os,Q.mO)
inherit(S.uV,S.jX)
inherit(U.X,U.c)
t=R.oC
inherit(R.a_,t)
inherit(R.S,t)
inherit(R.a7,t)
inherit(R.bB,R.a7)
t=Y.dR
inherit(Y.ad,t)
inherit(Y.bZ,t)
inherit(Y.U,t)
inherit(Y.iq,t)
inherit(Y.bD,t)
inherit(Y.cY,t)
inherit(Y.lj,t)
inherit(Y.jZ,t)
inherit(Y.iR,t)
inherit(Y.k0,t)
t=Y.bZ
inherit(Y.d2,t)
inherit(Y.by,t)
inherit(U.aj,A.a3)
t=G.a1
inherit(G.aH,t)
inherit(G.bK,t)
inherit(G.d,t)
inherit(G.ah,G.bK)
t=D.cF
inherit(D.kn,t)
inherit(D.oJ,t)
t=Q.cP
inherit(Q.i2,t)
inherit(Q.i1,t)
inherit(Q.dV,Q.i2)
inherit(B.km,Q.dV)
t=S.fo
inherit(S.vu,t)
inherit(S.lf,t)
inherit(S.no,t)
inherit(S.v7,t)
inherit(S.un,t)
t=S.lf
inherit(S.vk,t)
inherit(S.vg,t)
t=S.no
inherit(S.u2,t)
inherit(S.tU,t)
t=S.lA
inherit(S.v3,t)
inherit(S.lB,t)
inherit(S.oj,S.lB)
inherit(S.vy,S.oj)
t=S.ld
inherit(S.vl,t)
inherit(S.vz,t)
t=S.mA
inherit(S.vD,t)
inherit(S.vm,t)
inherit(S.u9,t)
inherit(S.vA,t)
t=S.pS
inherit(S.vG,t)
inherit(S.u_,t)
inherit(S.vO,t)
t=S.hE
inherit(S.v8,t)
inherit(S.va,t)
inherit(S.vv,t)
inherit(Q.eL,Q.i1)
inherit(Q.kj,Q.eL)
mixin(H.i_,H.q4)
mixin(H.hI,P.aT)
mixin(H.hK,H.iP)
mixin(H.hJ,P.aT)
mixin(H.hL,H.iP)
mixin(P.fp,P.aT)
mixin(P.i0,P.rZ)
mixin(W.h4,P.aT)
mixin(W.h7,W.bv)
mixin(W.iW,W.is)
mixin(W.jV,W.is)
mixin(W.iX,P.aT)
mixin(W.jg,W.bv)
mixin(W.iY,P.aT)
mixin(W.jh,W.bv)
mixin(W.iZ,P.aT)
mixin(W.ji,W.bv)
mixin(W.j8,P.aT)
mixin(W.js,W.bv)
mixin(W.j9,P.aT)
mixin(W.jt,W.bv)
mixin(W.ja,P.aT)
mixin(W.ju,W.bv)
mixin(W.h5,P.aT)
mixin(W.h8,W.bv)
mixin(W.jb,P.aT)
mixin(W.jv,W.bv)
mixin(W.jc,P.aT)
mixin(W.jw,W.bv)
mixin(W.h6,P.aT)
mixin(W.h9,W.bv)
mixin(W.jd,P.aT)
mixin(W.jx,W.bv)
mixin(W.je,P.aT)
mixin(W.jy,W.bv)
mixin(W.jf,P.aT)
mixin(W.jz,W.bv)
mixin(W.j_,P.aT)
mixin(W.jj,W.bv)
mixin(W.j0,P.aT)
mixin(W.jk,W.bv)
mixin(W.j1,P.aT)
mixin(W.jl,W.bv)
mixin(W.j2,P.aT)
mixin(W.jm,W.bv)
mixin(P.j3,P.aT)
mixin(P.jn,W.bv)
mixin(P.j4,P.aT)
mixin(P.jo,W.bv)
mixin(P.j5,P.aT)
mixin(P.jp,W.bv)
mixin(P.j6,P.aT)
mixin(P.jq,W.bv)
mixin(P.j7,P.aT)
mixin(P.jr,W.bv)
mixin(S.jX,P.nF)
mixin(A.jW,P.eo)
mixin(Q.i2,P.aT)
mixin(Q.i1,P.eo)})();(function constants(){C.w=W.f_.prototype
C.y=W.iv.prototype
C.S=W.e5.prototype
C.T=J.f.prototype
C.b=J.ep.prototype
C.f=J.jG.prototype
C.a=J.jH.prototype
C.d=J.fk.prototype
C.c=J.eq.prototype
C.a_=J.er.prototype
C.a2=W.jI.prototype
C.t=H.fm.prototype
C.L=J.or.prototype
C.M=W.kd.prototype
C.v=J.eH.prototype
C.O=new P.l6(!1)
C.N=new P.l5(C.O)
C.i=new W.ip()
C.P=new P.od()
C.Q=new P.qQ()
C.R=new P.rk()
C.e=new P.rA()
C.x=new W.rY()
C.o=new P.dr(0)
C.U=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.z=function(hooks) { return hooks; }
C.V=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.W=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.A=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.Y=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Z=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.p=new P.nc(null,null)
C.a0=new P.ne(null)
C.a1=new P.nf(null,null)
C.B=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.C=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a3=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.x])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a4=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.D=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a5=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a6=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.E=makeConstList([])
C.a8=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.F=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.G=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.H=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.I=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.J=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.K=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.q=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.x])
C.r=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.x])
C.h=new F.hB(0,"LogLevel.ERROR")
C.m=new F.hB(1,"LogLevel.WARN")
C.a9=new F.hB(3,"LogLevel.VERBOSE")
C.a7=H.a(makeConstList([]),[P.x])
C.aa=new H.lo(0,{},C.a7,[P.x,P.x])
C.ab=H.bX("bi")
C.ac=H.bX("IX")
C.u=H.bX("IY")
C.ad=H.bX("IZ")
C.ae=H.bX("J_")
C.af=H.bX("J1")
C.ag=H.bX("J2")
C.ah=H.bX("J3")
C.ai=H.bX("n8")
C.aj=H.bX("d6")
C.ak=H.bX("x")
C.al=H.bX("J6")
C.am=H.bX("J7")
C.an=H.bX("J8")
C.ao=H.bX("db")
C.ap=H.bX("cQ")
C.aq=H.bX("V")
C.ar=H.bX("D")
C.as=H.bX("dn")
C.n=new P.qc(!1)})();(function staticFields(){$.xL="$cachedFunction"
$.xM="$cachedInvocation"
$.dJ=0
$.fU=null
$.wn=null
$.w1=null
$.yM=null
$.yZ=null
$.ts=null
$.tB=null
$.w2=null
$.fH=null
$.ie=null
$.ig=null
$.vY=!1
$.ao=C.e
$.wG=0
$.e1=null
$.u3=null
$.wE=null
$.wD=null
$.wA=null
$.wz=null
$.wy=null
$.wB=null
$.wx=null
$.zU=null
$.zV=null
$.zH=null
$.zI=null
$.zG=null
$.zK=null
$.zQ=null
$.zP=null
$.zW=null
$.zS=null
$.zL=null
$.zO=null
$.zJ=null
$.zN=null
$.zT=null
$.zM=null
$.zR=null
$.b2="accent"
$.b4="aspect1"
$.b3="aspect2"
$.bd="shoe1"
$.bc="shoe2"
$.b6="cloak1"
$.b7="cloak2"
$.b5="cloak3"
$.bb="shirt1"
$.ba="shirt2"
$.b9="pants1"
$.b8="pants2"
$.tt=null
$.ak=1300
$.k=3
$.m=2
$.M=1
$.C=0.1
$.AA=1
$.Az=-1
$.ui=null
$.e2=null
$.wI=null
$.ej=null
$.fa=null
$.iI=null
$.uc=null
$.mh=null
$.uk=null
$.iJ=null
$.iH=null
$.wK=null
$.iO=null
$.hc=null
$.dN=null
$.wJ=null
$.mg=null
$.mn=null
$.f8=null
$.Ax=null
$.Au=null
$.Aw=null
$.Ay=null
$.hh=null
$.f5=null
$.cx=null
$.d3=null
$.f7=null
$.mm=null
$.c6=null
$.c5=null
$.ue=null
$.hf=null
$.ei=null
$.Av=null
$.he=null
$.cD=null
$.e3=null
$.iN=null
$.dh=null
$.f9=null
$.bY=null
$.mk=null
$.wH=null
$.aO=null
$.cC=null
$.cv=null
$.cc=null
$.mj=null
$.cb=null
$.du=null
$.dt=null
$.ds=null
$.dK=null
$.dL=null
$.eh=null
$.d4=null
$.hg=null
$.mi=null
$.mf=null
$.cU=null
$.cw=null
$.be=null
$.f6=null
$.ek=null
$.ml=null
$.iK=null
$.hd=null
$.ug=null
$.cB=null
$.uj=null
$.ud=null
$.wM=null
$.eg=null
$.cA=null
$.dM=null
$.di=null
$.fb=null
$.uf=null
$.uh=null
$.wL=null
$.iL=null
$.iM=null
$.el=null
$.wN=!1
$.um=null
$.AB=null
$.wP=null
$.wR=null
$.AK=null
$.wQ=null
$.AI=null
$.AJ=null
$.ul=null
$.AF=null
$.AD=null
$.AE=null
$.AG=null
$.AH=null
$.AU=null
$.AN=null
$.AO=null
$.AP=null
$.AQ=null
$.AR=null
$.AS=null
$.AT=null
$.AW=null
$.AX=null
$.AY=null
$.AZ=null
$.B_=null
$.B0=null
$.AV=null
$.Gh="JACK"
$.Gl="PM"
$.Gi="JS"
$.Gg="HP"
$.Gq="YD"
$.Gn="SI"
$.Go="SU"
$.Gj="ME"
$.Gm="RB"
$.Ge="GN"
$.xF="MP"
$.Gc="AR"
$.Gk="PE"
$.Gd="DP"
$.Gp="WV"
$.Gf="HB"
$.o="PLAYER1TAG"
$.ez="PLAYER2TAG"
$.B="DENIZENTAG"
$.t="CONSORTTAG"
$.K="CONSORTSOUNDTAG"
$.aG="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.cg="TAGWEAPON"
$.GX=null
$.H8=null
$.GS=null
$.GV=null
$.H_=null
$.H4=null
$.H2=null
$.Hb=null
$.Ha=null
$.H3=null
$.Hd=null
$.GZ=null
$.Hc=null
$.H6=null
$.H5=null
$.H7=null
$.GU=null
$.GT=null
$.H1=null
$.H0=null
$.GY=null
$.H9=null
$.GW=null
$.yR=!1
$.He=!1
$.xU=null
$.Hl=13
$.au=3
$.bO=2
$.aC=1
$.n3=0
$.I=1
$.a5=3
$.H=4
$.uQ=6
$.uR=7
$.ab=8
$.v=9
$.q=10
$.x8=null
$.fj=null
$.uC=null
$.uM=null
$.uJ=null
$.wZ=null
$.ux=null
$.uI=null
$.hq=null
$.x6=null
$.xr=null
$.x1=null
$.x7=null
$.uy=null
$.uH=null
$.xt=null
$.xv=null
$.uu=null
$.jC=null
$.jA=null
$.ax=null
$.xl=null
$.ut=null
$.xg=null
$.fi=null
$.x0=null
$.xw=null
$.xs=null
$.xq=null
$.uF=null
$.mX=null
$.em=null
$.xu=null
$.mV=null
$.uz=null
$.en=null
$.xo=null
$.dw=null
$.hp=null
$.uP=null
$.xp=null
$.uO=null
$.uK=null
$.uL=null
$.mZ=null
$.jB=null
$.Br=null
$.xa=null
$.xf=null
$.xn=null
$.xm=null
$.E=null
$.x4=null
$.mW=null
$.bQ=null
$.b0=null
$.bR=null
$.W=null
$.aA=null
$.c9=null
$.L=null
$.Q=null
$.aw=null
$.aW=null
$.bV=null
$.bj=null
$.bp=null
$.ce=null
$.aS=null
$.bA=null
$.bS=null
$.a0=null
$.FQ=null
$.av=null
$.aZ=null
$.aK=null
$.ae=null
$.c8=null
$.aJ=null
$.as=null
$.bW=null
$.aR=null
$.am=null
$.bm=null
$.c_=null
$.aD=null
$.bq=null
$.bo=null
$.a8=null
$.bN=null
$.aa=null
$.bh=null
$.bw=null
$.aI=null
$.bg=null
$.ay=null
$.aY=null
$.aF=null
$.Y=null
$.at=null
$.aB=null
$.aV=null
$.ar=null
$.ap=null
$.a4=null
$.T=null
$.P=null
$.al=null
$.aP=null
$.bf=null
$.aX=null
$.CL=null
$.Fs=null
$.G0=null
$.Cg=null
$.Fp=null
$.CM=null
$.wX=null
$.FE=null
$.DM=null
$.CH=null
$.Bl=null
$.Em=null
$.n0=null
$.x2=null
$.EM=null
$.Cd=null
$.Dv=null
$.Cb=null
$.uv=null
$.BX=null
$.CY=null
$.Cl=null
$.DF=null
$.FM=null
$.CN=null
$.uw=null
$.DG=null
$.Cj=null
$.C2=null
$.xk=null
$.Be=null
$.wY=null
$.Do=null
$.uD=null
$.E0=null
$.DV=null
$.Bi=null
$.C5=null
$.EW=null
$.Bk=null
$.Fo=null
$.Du=null
$.Cs=null
$.EG=null
$.Fi=null
$.uB=null
$.DQ=null
$.ED=null
$.Ck=null
$.B7=null
$.FP=null
$.Dy=null
$.C1=null
$.FD=null
$.E3=null
$.C8=null
$.Fn=null
$.CC=null
$.F3=null
$.F4=null
$.Bg=null
$.DX=null
$.Cm=null
$.Cw=null
$.G4=null
$.jD=null
$.EU=null
$.Fl=null
$.mY=null
$.BR=null
$.Ed=null
$.Eh=null
$.Bd=null
$.CB=null
$.Fm=null
$.E2=null
$.FG=null
$.EI=null
$.Ei=null
$.xe=null
$.F7=null
$.FV=null
$.Fr=null
$.Db=null
$.Eu=null
$.Dc=null
$.EX=null
$.FT=null
$.DE=null
$.Cy=null
$.CV=null
$.BH=null
$.EE=null
$.CT=null
$.D_=null
$.Co=null
$.F6=null
$.fh=null
$.E7=null
$.xd=null
$.Dd=null
$.Da=null
$.FY=null
$.BN=null
$.ES=null
$.ET=null
$.ER=null
$.EQ=null
$.Fe=null
$.D0=null
$.DY=null
$.Fh=null
$.DP=null
$.E8=null
$.Ch=null
$.FS=null
$.DW=null
$.CE=null
$.CF=null
$.Eg=null
$.G3=null
$.Ds=null
$.FR=null
$.xi=null
$.F2=null
$.DC=null
$.n1=null
$.Dm=null
$.Ew=null
$.BM=null
$.CI=null
$.EZ=null
$.DZ=null
$.FL=null
$.xh=null
$.E6=null
$.BT=null
$.Ce=null
$.Es=null
$.Fy=null
$.EY=null
$.mU=null
$.uN=null
$.F9=null
$.FU=null
$.D9=null
$.Bv=null
$.BE=null
$.Fw=null
$.Ea=null
$.DN=null
$.Eb=null
$.Ft=null
$.Dn=null
$.Bh=null
$.CZ=null
$.DL=null
$.Fb=null
$.CS=null
$.BL=null
$.EO=null
$.EP=null
$.FJ=null
$.F0=null
$.uG=null
$.x3=null
$.C9=null
$.x5=null
$.Dh=null
$.uE=null
$.Ey=null
$.DU=null
$.EK=null
$.uA=null
$.n_=null
$.xc=null
$.Cu=null
$.CX=null
$.xj=null
$.x9=null
$.C4=null
$.FA=null
$.BY=null
$.Ek=null
$.De=null
$.Fg=null
$.DO=null
$.Bs=null
$.Df=null
$.Cr=null
$.Eo=null
$.Dx=null
$.DT=null
$.DD=null
$.DH=null
$.EN=null
$.EJ=null
$.Ba=null
$.Fx=null
$.EB=null
$.Ci=null
$.Cn=null
$.CW=null
$.Fu=null
$.CP=null
$.Dz=null
$.Bz=null
$.CJ=null
$.Cq=null
$.Ec=null
$.Cz=null
$.EV=null
$.DB=null
$.x_=null
$.Ex=null
$.Dg=null
$.CQ=null
$.B8=null
$.Bf=null
$.E9=null
$.Ej=null
$.Dw=null
$.D7=null
$.FO=null
$.BC=null
$.CR=null
$.DA=null
$.Cf=null
$.Fd=null
$.C3=null
$.F_=null
$.BA=null
$.Fz=null
$.DJ=null
$.Bu=null
$.EH=null
$.Et=null
$.Ca=null
$.D1=null
$.BS=null
$.Fv=null
$.Dk=null
$.FK=null
$.BU=null
$.D2=null
$.BV=null
$.Cc=null
$.EA=null
$.C6=null
$.Dl=null
$.E_=null
$.BO=null
$.Ff=null
$.G_=null
$.F5=null
$.DR=null
$.Fc=null
$.DS=null
$.Bn=null
$.B9=null
$.DK=null
$.Bx=null
$.BW=null
$.Bo=null
$.Bt=null
$.E5=null
$.Ep=null
$.FC=null
$.Di=null
$.FZ=null
$.EF=null
$.EC=null
$.Dp=null
$.Dj=null
$.C_=null
$.D5=null
$.DI=null
$.Ee=null
$.F8=null
$.Bc=null
$.FW=null
$.Cx=null
$.Fj=null
$.Cp=null
$.Bm=null
$.BP=null
$.BG=null
$.G2=null
$.BQ=null
$.CA=null
$.BZ=null
$.FI=null
$.Fa=null
$.FB=null
$.Bb=null
$.EL=null
$.Dq=null
$.Dt=null
$.FN=null
$.Fk=null
$.xb=null
$.CG=null
$.Er=null
$.FX=null
$.CK=null
$.Dr=null
$.BK=null
$.D8=null
$.D6=null
$.F1=null
$.Eq=null
$.D3=null
$.BF=null
$.Fq=null
$.Ef=null
$.FF=null
$.G1=null
$.Bq=null
$.Bp=null
$.BB=null
$.CD=null
$.Ez=null
$.C7=null
$.Ev=null
$.Ct=null
$.Bj=null
$.BD=null
$.E4=null
$.Cv=null
$.En=null
$.BJ=null
$.CO=null
$.FH=null
$.Bw=null
$.CU=null
$.El=null
$.BI=null
$.D4=null
$.E1=null
$.By=null
$.C0=null
$.yi=4
$.fd="OWNER"
$.xC=!1
$.v6=null
$.z0=""
$.vE=null
$.Hi=null
$.hV=null
$.eC=null
$.Hh=null
$.hU=null
$.eD=null
$.d9=null
$.fw=null
$.hS=null
$.hT=null
$.dA=null
$.ci=null
$.xW=!1})();(function lazyInitializers(){lazy($,"wv","$get$wv",function(){return H.yU("_$dart_dartClosure")})
lazy($,"v0","$get$v0",function(){return H.yU("_$dart_js")})
lazy($,"wV","$get$wV",function(){return H.B5()})
lazy($,"wW","$get$wW",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wG
$.wG=t+1
t="expando$key$"+t}return new P.lW(null,t,[P.D])})
lazy($,"xZ","$get$xZ",function(){return H.dT(H.q2({
toString:function(){return"$receiver$"}}))})
lazy($,"y_","$get$y_",function(){return H.dT(H.q2({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"y0","$get$y0",function(){return H.dT(H.q2(null))})
lazy($,"y1","$get$y1",function(){return H.dT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"y5","$get$y5",function(){return H.dT(H.q2(void 0))})
lazy($,"y6","$get$y6",function(){return H.dT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"y3","$get$y3",function(){return H.dT(H.y4(null))})
lazy($,"y2","$get$y2",function(){return H.dT(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"y8","$get$y8",function(){return H.dT(H.y4(void 0))})
lazy($,"y7","$get$y7",function(){return H.dT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vT","$get$vT",function(){return P.Hr()})
lazy($,"hj","$get$hj",function(){return P.Hy(null,P.d6)})
lazy($,"ih","$get$ih",function(){return[]})
lazy($,"yk","$get$yk",function(){return H.Gr([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yK","$get$yK",function(){return P.I_()})
lazy($,"yn","$get$yn",function(){return P.jK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vW","$get$vW",function(){return P.jJ()})
lazy($,"wu","$get$wu",function(){return P.dP("^\\S+$",!0,!1)})
lazy($,"kX","$get$kX",function(){return P.cy(P.D,L.fP)})
lazy($,"wp","$get$wp",function(){return P.dP("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bI])})
lazy($,"mx","$get$mx",function(){return P.cy(P.x,Z.iF)})
lazy($,"mR","$get$mR",function(){return P.cy(P.D,B.ho)})
lazy($,"xx","$get$xx",function(){return H.a([],[A.a3])})
lazy($,"xG","$get$xG",function(){return H.a([],[P.x])})
lazy($,"oQ","$get$oQ",function(){return P.cy(P.D,T.hO)})
lazy($,"an","$get$an",function(){return H.a([],[U.aj])})
lazy($,"xV","$get$xV",function(){return P.xA([0,new K.cE("Pixels -> Bytes",T.Ih(),T.Ig()),1,new K.cE("Pixels -> Packed bits",T.If(),T.Ie()),2,new K.cE("RLE 1 byte",V.u7(1),V.u6(1)),3,new K.cE("RLE 2 bytes",V.u7(2),V.u6(2)),4,new K.cE("RLE 3 bytes",V.u7(3),V.u6(3)),5,new K.cE("RLE packed 1 byte",V.u5(1),V.u4(1)),6,new K.cE("RLE packed 2 bytes",V.u5(2),V.u4(2)),7,new K.cE("RLE packed 3 bytes",V.u5(3),V.u4(3)),8,new K.cE("RLE dynamic",V.IP(),V.IO()),9,new K.cE("Exponential-Golomb pixels",F.Iv(),F.Iu()),10,new K.cE("Exponential-Golomb run RLE",F.It(),F.Is()),11,new K.cE("Exponential-Golomb run/data RLE",F.Ir(),F.Iq())],P.D,K.cE)})
lazy($,"b","$get$b",function(){return P.a2(null,null,null,G.a1)})
lazy($,"yg","$get$yg",function(){return P.dP("[\n\r]+",!0,!1)})
lazy($,"yh","$get$yh",function(){return P.dP("( *)(.*)",!0,!1)})
lazy($,"yf","$get$yf",function(){return P.dP("^s*//",!0,!1)})
lazy($,"ye","$get$ye",function(){return P.dP("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.hC(!1,!1,"WordListFileFormat")})
lazy($,"yj","$get$yj",function(){return new T.qt(null)})
lazy($,"wk","$get$wk",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cV","$get$cV",function(){return P.cy(P.x,Y.dQ)})
lazy($,"xD","$get$xD",function(){return P.dP("[\\/]",!0,!1)})
lazy($,"v5","$get$v5",function(){return P.cy(P.x,W.fu)})
lazy($,"vh","$get$vh",function(){return A.fY(255,0,255,255)})
lazy($,"on","$get$on",function(){return new F.hC(!1,!1,"Path Utils")})
lazy($,"ol","$get$ol",function(){return P.cy(P.eI,P.D)})
lazy($,"cN","$get$cN",function(){return H.a([],[D.cF])})
lazy($,"hY","$get$hY",function(){return P.dP("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fx","$get$fx",function(){return P.dP("\\\\(?!\\\\)",!0,!1)})
lazy($,"ww","$get$ww",function(){var t={color:16711935}
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
mangledGlobalNames:{D:"int",V:"double",dn:"num",x:"String",cQ:"bool",d6:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cQ,args:[[P.p,E.iT]]},{func:1,v:true},{func:1,ret:P.db,args:[P.bi,P.D,P.D,O.cW]},{func:1,ret:P.bi,args:[P.D,P.bi,P.bi,O.cW]},{func:1,v:true,args:[P.z]},{func:1,ret:P.x,args:[P.D]},{func:1,args:[,]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.af,args:[P.D]},{func:1,ret:W.ca,args:[P.D]},{func:1,ret:W.cn,args:[P.D]},{func:1,v:true,args:[P.z],opt:[P.dS]},{func:1,ret:P.cQ,args:[W.ca,P.x,P.x,W.i7]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:W.cd,args:[P.D]},{func:1,ret:P.cQ,args:[P.z]},{func:1,ret:P.cl},{func:1,ret:W.cf,args:[P.D]},{func:1,ret:W.co,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,ret:W.fv,args:[P.D]},{func:1,ret:W.cq,args:[P.D]},{func:1,ret:W.fy,args:[P.D]},{func:1,ret:W.fA,args:[P.D]},{func:1,ret:P.bL,args:[P.D]},{func:1,ret:W.bM,args:[P.D]},{func:1,ret:P.x,args:[P.dy]},{func:1,ret:W.fB,args:[P.D]},{func:1,ret:W.ch,args:[P.D]},{func:1,ret:W.cj,args:[P.D]},{func:1,ret:P.aL,args:[P.D]},{func:1,ret:P.D,args:[P.bG,P.bG]},{func:1,v:true,args:[,P.dS]},{func:1,v:true,args:[P.x]},{func:1,ret:W.f4,args:[P.D]},{func:1,ret:W.cm,args:[P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPreserveAspectRatio:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fl,ArrayBufferView:H.ev,DataView:H.nU,Float32Array:H.nV,Float64Array:H.nW,Int16Array:H.nX,Int32Array:H.nY,Int8Array:H.nZ,Uint16Array:H.o_,Uint32Array:H.o0,Uint8ClampedArray:H.jQ,CanvasPixelArray:H.jQ,Uint8Array:H.fm,HTMLBRElement:W.aQ,HTMLContentElement:W.aQ,HTMLDListElement:W.aQ,HTMLDataListElement:W.aQ,HTMLDetailsElement:W.aQ,HTMLDialogElement:W.aQ,HTMLHRElement:W.aQ,HTMLHeadElement:W.aQ,HTMLHeadingElement:W.aQ,HTMLHtmlElement:W.aQ,HTMLLabelElement:W.aQ,HTMLLegendElement:W.aQ,HTMLModElement:W.aQ,HTMLOptGroupElement:W.aQ,HTMLParagraphElement:W.aQ,HTMLPictureElement:W.aQ,HTMLPreElement:W.aQ,HTMLQuoteElement:W.aQ,HTMLShadowElement:W.aQ,HTMLTableCaptionElement:W.aQ,HTMLTableCellElement:W.aQ,HTMLTableDataCellElement:W.aQ,HTMLTableHeaderCellElement:W.aQ,HTMLTableColElement:W.aQ,HTMLTitleElement:W.aQ,HTMLTrackElement:W.aQ,HTMLUListElement:W.aQ,HTMLUnknownElement:W.aQ,HTMLDirectoryElement:W.aQ,HTMLFontElement:W.aQ,HTMLFrameElement:W.aQ,HTMLMarqueeElement:W.aQ,HTMLElement:W.aQ,HTMLAnchorElement:W.eT,HTMLAreaElement:W.kW,HTMLAudioElement:W.eX,AudioTrack:W.cJ,AudioTrackList:W.l3,HTMLBaseElement:W.l7,Blob:W.eZ,HTMLBodyElement:W.f_,HTMLButtonElement:W.fX,CacheStorage:W.il,HTMLCanvasElement:W.lg,CanvasRenderingContext2D:W.lh,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,CompositorWorker:W.lm,Credential:W.fZ,FederatedCredential:W.fZ,PasswordCredential:W.fZ,CSSFontFaceRule:W.lu,CSSImportRule:W.lv,CSSKeyframeRule:W.h_,MozCSSKeyframeRule:W.h_,WebKitCSSKeyframeRule:W.h_,CSSKeyframesRule:W.h0,MozCSSKeyframesRule:W.h0,WebKitCSSKeyframesRule:W.h0,CSSPageRule:W.lw,CSSCharsetRule:W.bM,CSSGroupingRule:W.bM,CSSMediaRule:W.bM,CSSNamespaceRule:W.bM,CSSSupportsRule:W.bM,CSSRule:W.bM,CSSStyleDeclaration:W.f3,MSStyleCSSProperties:W.f3,CSS2Properties:W.f3,CSSStyleRule:W.lx,CSSViewportRule:W.ly,DataTransfer:W.lD,DataTransferItem:W.f4,DataTransferItemList:W.it,DeviceAcceleration:W.lG,HTMLDivElement:W.iv,Document:W.ee,HTMLDocument:W.ee,XMLDocument:W.ee,DocumentFragment:W.iw,ShadowRoot:W.iw,DOMError:W.ix,FileError:W.ix,DOMException:W.lH,DOMPoint:W.lI,DOMPointReadOnly:W.iy,DOMRectReadOnly:W.iz,DOMStringList:W.iA,DOMStringMap:W.iB,DOMTokenList:W.iC,Element:W.ca,HTMLEmbedElement:W.lO,DirectoryEntry:W.h3,Entry:W.h3,FileEntry:W.h3,ErrorEvent:W.lU,AnimationEvent:W.Z,AnimationPlayerEvent:W.Z,ApplicationCacheErrorEvent:W.Z,AutocompleteErrorEvent:W.Z,BeforeInstallPromptEvent:W.Z,BeforeUnloadEvent:W.Z,BlobEvent:W.Z,ClipboardEvent:W.Z,CloseEvent:W.Z,CustomEvent:W.Z,DeviceLightEvent:W.Z,DeviceMotionEvent:W.Z,DeviceOrientationEvent:W.Z,ExtendableEvent:W.Z,ExtendableMessageEvent:W.Z,FetchEvent:W.Z,FontFaceSetLoadEvent:W.Z,GamepadEvent:W.Z,GeofencingEvent:W.Z,HashChangeEvent:W.Z,InstallEvent:W.Z,MediaEncryptedEvent:W.Z,MediaKeyMessageEvent:W.Z,MediaQueryListEvent:W.Z,MediaStreamEvent:W.Z,MediaStreamTrackEvent:W.Z,MessageEvent:W.Z,MIDIConnectionEvent:W.Z,MIDIMessageEvent:W.Z,NotificationEvent:W.Z,PageTransitionEvent:W.Z,PopStateEvent:W.Z,PresentationConnectionAvailableEvent:W.Z,PresentationConnectionCloseEvent:W.Z,ProgressEvent:W.Z,PromiseRejectionEvent:W.Z,PushEvent:W.Z,RelatedEvent:W.Z,RTCDataChannelEvent:W.Z,RTCDTMFToneChangeEvent:W.Z,RTCIceCandidateEvent:W.Z,RTCPeerConnectionIceEvent:W.Z,SecurityPolicyViolationEvent:W.Z,ServicePortConnectEvent:W.Z,ServiceWorkerMessageEvent:W.Z,SpeechRecognitionEvent:W.Z,StorageEvent:W.Z,SyncEvent:W.Z,TrackEvent:W.Z,TransitionEvent:W.Z,WebKitTransitionEvent:W.Z,ResourceProgressEvent:W.Z,USBConnectionEvent:W.Z,IDBVersionChangeEvent:W.Z,AudioProcessingEvent:W.Z,OfflineAudioCompletionEvent:W.Z,WebGLContextEvent:W.Z,Event:W.Z,InputEvent:W.Z,Animation:W.ag,ApplicationCache:W.ag,DOMApplicationCache:W.ag,OfflineResourceList:W.ag,BatteryManager:W.ag,CanvasCaptureMediaStreamTrack:W.ag,CrossOriginServiceWorkerClient:W.ag,EventSource:W.ag,MediaKeySession:W.ag,MediaQueryList:W.ag,MediaRecorder:W.ag,MediaSource:W.ag,MediaStream:W.ag,MediaStreamTrack:W.ag,MessagePort:W.ag,MIDIAccess:W.ag,NetworkInformation:W.ag,Notification:W.ag,Performance:W.ag,PermissionStatus:W.ag,PresentationAvailability:W.ag,PresentationReceiver:W.ag,PresentationRequest:W.ag,RTCDTMFSender:W.ag,RTCPeerConnection:W.ag,webkitRTCPeerConnection:W.ag,mozRTCPeerConnection:W.ag,ScreenOrientation:W.ag,ServicePortCollection:W.ag,ServiceWorkerContainer:W.ag,ServiceWorkerRegistration:W.ag,SpeechRecognition:W.ag,SpeechSynthesis:W.ag,SpeechSynthesisUtterance:W.ag,WorkerPerformance:W.ag,BluetoothDevice:W.ag,BluetoothRemoteGATTCharacteristic:W.ag,USB:W.ag,EventTarget:W.ag,HTMLFieldSetElement:W.mo,File:W.cd,FileList:W.fc,FileReader:W.mp,DOMFileSystem:W.mq,FileWriter:W.mr,FontFace:W.mt,FontFaceSet:W.mu,HTMLFormElement:W.iS,Gamepad:W.cm,History:W.mF,HTMLOptionsCollection:W.fe,HTMLCollection:W.fe,HTMLFormControlsCollection:W.iU,XMLHttpRequest:W.e5,XMLHttpRequestUpload:W.hk,XMLHttpRequestEventTarget:W.hk,HTMLIFrameElement:W.mM,ImageData:W.hl,HTMLImageElement:W.fg,HTMLInputElement:W.hm,HTMLKeygenElement:W.ni,HTMLLIElement:W.jI,CalcLength:W.hw,LengthValue:W.hw,SimpleLength:W.hw,HTMLLinkElement:W.hx,Location:W.nz,HTMLMapElement:W.nE,HTMLMediaElement:W.jM,MediaList:W.jN,HTMLMenuElement:W.nL,HTMLMenuItemElement:W.nM,HTMLMetaElement:W.nN,HTMLMeterElement:W.nO,MIDIOutput:W.nP,MIDIInput:W.hF,MIDIPort:W.hF,MimeType:W.cn,MimeTypeArray:W.jO,MouseEvent:W.e6,DragEvent:W.e6,PointerEvent:W.e6,WheelEvent:W.e6,Navigator:W.o1,NavigatorUserMediaError:W.o2,Node:W.af,NodeIterator:W.jR,NodeList:W.jS,RadioNodeList:W.jS,HTMLOListElement:W.o7,HTMLObjectElement:W.o8,HTMLOptionElement:W.oc,HTMLOutputElement:W.oe,HTMLParamElement:W.oi,Path2D:W.ok,PerformanceCompositeTiming:W.e8,PerformanceEntry:W.e8,PerformanceMark:W.e8,PerformanceMeasure:W.e8,PerformanceRenderTiming:W.e8,PerformanceResourceTiming:W.e8,Perspective:W.oq,Plugin:W.cf,PluginArray:W.k1,PositionValue:W.ow,PresentationConnection:W.ox,HTMLProgressElement:W.oB,Range:W.oE,Rotation:W.oO,RTCDataChannel:W.k4,DataChannel:W.k4,RTCSessionDescription:W.k5,mozRTCSessionDescription:W.k5,HTMLScriptElement:W.fu,HTMLSelectElement:W.k6,ServicePort:W.oX,SharedWorker:W.p_,SharedWorkerGlobalScope:W.p0,HTMLSlotElement:W.p3,SourceBuffer:W.co,SourceBufferList:W.k8,HTMLSourceElement:W.p6,HTMLSpanElement:W.hR,SpeechGrammar:W.cp,SpeechGrammarList:W.k9,SpeechRecognitionAlternative:W.fv,SpeechRecognitionError:W.p8,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.p9,SpeechSynthesisVoice:W.pa,Storage:W.pe,HTMLStyleElement:W.pC,CSSStyleSheet:W.cj,StyleSheet:W.cj,KeywordValue:W.eF,NumberValue:W.eF,TransformValue:W.eF,StyleValue:W.eF,HTMLTableElement:W.kd,HTMLTableRowElement:W.pJ,HTMLTableSectionElement:W.pK,HTMLTemplateElement:W.hW,HTMLTextAreaElement:W.hX,TextTrack:W.cO,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.pQ,TextTrackList:W.pR,TimeRanges:W.pV,Touch:W.cq,TouchList:W.kf,TrackDefault:W.fy,TrackDefaultList:W.kg,Matrix:W.fz,Skew:W.fz,TransformComponent:W.fz,Translation:W.q0,TreeWalker:W.kh,CompositionEvent:W.dB,FocusEvent:W.dB,KeyboardEvent:W.dB,TextEvent:W.dB,TouchEvent:W.dB,SVGZoomEvent:W.dB,UIEvent:W.dB,URL:W.qa,HTMLVideoElement:W.qe,VideoTrackList:W.qf,VTTRegion:W.fA,VTTRegionList:W.ki,WebSocket:W.qk,Window:W.kl,DOMWindow:W.kl,Worker:W.qr,CompositorWorkerGlobalScope:W.eK,DedicatedWorkerGlobalScope:W.eK,ServiceWorkerGlobalScope:W.eK,WorkerGlobalScope:W.eK,Attr:W.fB,ClientRect:W.qJ,ClientRectList:W.i4,DOMRectList:W.i4,CSSRuleList:W.ks,DocumentType:W.qS,DOMRect:W.qT,GamepadList:W.kw,HTMLFrameSetElement:W.re,NamedNodeMap:W.ia,MozNamedAttrMap:W.ia,ServiceWorker:W.rI,SpeechRecognitionResultList:W.kB,StyleSheetList:W.kD,WorkerLocation:W.t5,WorkerNavigator:W.t6,IDBDatabase:P.lE,IDBIndex:P.mP,IDBObjectStore:P.o9,IDBOpenDBRequest:P.hN,IDBVersionChangeRequest:P.hN,IDBRequest:P.hN,IDBTransaction:P.pZ,SVGAElement:P.kT,SVGAnimateElement:P.eb,SVGAnimateMotionElement:P.eb,SVGAnimateTransformElement:P.eb,SVGAnimationElement:P.eb,SVGSetElement:P.eb,SVGFEBlendElement:P.lX,SVGFEColorMatrixElement:P.lY,SVGFEComponentTransferElement:P.lZ,SVGFECompositeElement:P.m_,SVGFEConvolveMatrixElement:P.m0,SVGFEDiffuseLightingElement:P.m1,SVGFEDisplacementMapElement:P.m2,SVGFEFloodElement:P.m3,SVGFEGaussianBlurElement:P.m4,SVGFEImageElement:P.m5,SVGFEMergeElement:P.m6,SVGFEMorphologyElement:P.m7,SVGFEOffsetElement:P.m8,SVGFEPointLightElement:P.m9,SVGFESpecularLightingElement:P.ma,SVGFESpotLightElement:P.mb,SVGFETileElement:P.mc,SVGFETurbulenceElement:P.md,SVGFilterElement:P.ms,SVGForeignObjectElement:P.mw,SVGCircleElement:P.dv,SVGEllipseElement:P.dv,SVGLineElement:P.dv,SVGPathElement:P.dv,SVGPolygonElement:P.dv,SVGPolylineElement:P.dv,SVGGeometryElement:P.dv,SVGClipPathElement:P.e4,SVGDefsElement:P.e4,SVGGElement:P.e4,SVGSwitchElement:P.e4,SVGGraphicsElement:P.e4,SVGImageElement:P.mN,SVGLength:P.d5,SVGLengthList:P.nl,SVGMarkerElement:P.nJ,SVGMaskElement:P.nK,SVGNumber:P.d7,SVGNumberList:P.o5,SVGPatternElement:P.oo,SVGPoint:P.ot,SVGPointList:P.ou,SVGRect:P.oG,SVGRectElement:P.oH,SVGScriptElement:P.hP,SVGStringList:P.pA,SVGStyleElement:P.pD,SVGDescElement:P.ck,SVGDiscardElement:P.ck,SVGFEDistantLightElement:P.ck,SVGFEFuncAElement:P.ck,SVGFEFuncBElement:P.ck,SVGFEFuncGElement:P.ck,SVGFEFuncRElement:P.ck,SVGFEMergeNodeElement:P.ck,SVGMetadataElement:P.ck,SVGStopElement:P.ck,SVGTitleElement:P.ck,SVGComponentTransferFunctionElement:P.ck,SVGElement:P.ck,SVGSVGElement:P.pG,SVGSymbolElement:P.pI,SVGTextContentElement:P.ke,SVGTextPathElement:P.pP,SVGTSpanElement:P.hZ,SVGTextElement:P.hZ,SVGTextPositioningElement:P.hZ,SVGTransform:P.da,SVGTransformList:P.q_,SVGUseElement:P.qb,SVGViewElement:P.qg,SVGViewSpec:P.qh,SVGLinearGradientElement:P.i6,SVGRadialGradientElement:P.i6,SVGGradientElement:P.i6,SVGCursorElement:P.rE,SVGFEDropShadowElement:P.rF,SVGMPathElement:P.rG,AudioBuffer:P.fR,AudioBufferSourceNode:P.eW,AudioContext:P.fS,webkitAudioContext:P.fS,OfflineAudioContext:P.fS,AnalyserNode:P.bF,RealtimeAnalyserNode:P.bF,AudioDestinationNode:P.bF,ChannelMergerNode:P.bF,AudioChannelMerger:P.bF,ChannelSplitterNode:P.bF,AudioChannelSplitter:P.bF,DelayNode:P.bF,DynamicsCompressorNode:P.bF,GainNode:P.bF,AudioGainNode:P.bF,IIRFilterNode:P.bF,MediaStreamAudioDestinationNode:P.bF,PannerNode:P.bF,AudioPannerNode:P.bF,webkitAudioPannerNode:P.bF,ScriptProcessorNode:P.bF,JavaScriptAudioNode:P.bF,StereoPannerNode:P.bF,WaveShaperNode:P.bF,AudioNode:P.bF,MediaElementAudioSourceNode:P.eY,MediaStreamAudioSourceNode:P.eY,AudioSourceNode:P.eY,BiquadFilterNode:P.l9,ConvolverNode:P.lr,OscillatorNode:P.jY,Oscillator:P.jY,WebGLActiveInfo:P.kV,WebGLRenderingContext:P.oK,WebGL2RenderingContext:P.oL,WebGL2RenderingContextBase:P.t4,SQLResultSetRowList:P.ka})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CacheStorage:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,HTMLProgressElement:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jP.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hK.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hL.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
W.h4.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"
W.h8.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"
W.h9.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.z1(E.wl(),b)},[])
else (function(b){H.z1(E.wl(),b)})([])})})()
//# sourceMappingURL=BBBController.dart.js.map
