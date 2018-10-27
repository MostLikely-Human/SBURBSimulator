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
a[c]=function(){a[c]=function(){H.HK(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.va"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.va"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.va(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={u9:function u9(a){this.a=a},
rB:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
x_:function(a,b,c,d){var t=new H.oY(a,b,c,[d])
t.eU(a,b,c,d)
return t},
dj:function(a,b,c,d){if(!!J.aG(a).$isv)return new H.h0(a,b,[c,d])
return new H.hz(a,b,[c,d])},
jr:function(){return new P.dR("No element")},
wz:function(){return new P.dR("Too few elements")},
jM:function(a,b,c,d){if(c-b<=32)H.Gf(a,b,c,d)
else H.Ge(a,b,c,d)},
Gf:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.be(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cv(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Ge:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ap(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ap(a3+a4,2)
p=q-t
o=q+t
n=J.be(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cv(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cv(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cv(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cv(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cv(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cv(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cv(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cv(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cv(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.bc(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aG(c)
if(b.S(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dz(c)
if(b.aG(c,0)){--f
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
if(J.ed(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cv(a5.$2(d,j),0))for(;!0;)if(J.cv(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ed(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jM(a2,a3,g-2,a5)
H.jM(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bc(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bc(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bc(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bc(a5.$2(d,j),0))for(;!0;)if(J.bc(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ed(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jM(a2,g,f,a5)}else H.jM(a2,g,f,a5)},
kQ:function kQ(a){this.a=a},
v:function v(){},
et:function et(){},
oY:function oY(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dN:function dN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hz:function hz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h0:function h0(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jw:function jw(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fi:function fi(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hW:function hW(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jW:function jW(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iC:function iC(){},
pr:function pr(){},
hS:function hS(){},
kf:function(a,b){var t=a.bt(b)
if(!u.globalState.d.cy)u.globalState.f.bB()
return t},
y4:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aG(s).$isq)throw H.l(P.dC("Arguments to main must be a List: "+H.A(s)))
u.globalState=new H.qI(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vY()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qe(P.uf(null,H.eN),0)
r=P.E
s.z=new H.t(0,null,null,null,null,null,0,[r,H.fz])
s.ch=new H.t(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qH()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.A8,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.GA)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a5(null,null,null,r)
p=new H.fp(0,null,!1)
o=new H.fz(s,new H.t(0,null,null,null,null,null,0,[r,H.fp]),q,u.createNewIsolate(),p,new H.dE(H.rQ()),new H.dE(H.rQ()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
q.h(0,0)
o.dc(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fF(a,{func:1,args:[,]}))o.bt(new H.rR(t,a))
else if(H.fF(a,{func:1,args:[,,]}))o.bt(new H.rS(t,a))
else o.bt(a)
u.globalState.f.bB()},
GA:function(a){var t=P.hw(["command","print","msg",a])
return new H.dy(!0,P.i1(null,P.E)).az(t)},
Aa:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Ab()
return},
Ab:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.Z("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.Z('Cannot extract URI from "'+t+'"'))},
A8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eL(!0,[]).aZ(b.data)
s=J.be(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eL(!0,[]).aZ(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eL(!0,[]).aZ(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.E
j=P.a5(null,null,null,k)
i=new H.fp(0,null,!1)
h=new H.fz(s,new H.t(0,null,null,null,null,null,0,[k,H.fp]),j,u.createNewIsolate(),i,new H.dE(H.rQ()),new H.dE(H.rQ()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
j.h(0,0)
h.dc(0,i)
u.globalState.f.a.aN(0,new H.eN(h,new H.ml(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bB()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fJ(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bB()
break
case"close":u.globalState.ch.ag(0,$.$get$vZ().n(0,a))
a.terminate()
u.globalState.f.bB()
break
case"log":H.A7(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hw(["command","print","msg",t])
k=new H.dy(!0,P.i1(null,P.E)).az(k)
s.toString
self.postMessage(k)}else P.fG(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
A7:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hw(["command","log","msg",a])
r=new H.dy(!0,P.i1(null,P.E)).az(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cn(q)
t=H.cm(q)
s=P.ln(t)
throw H.l(s)}},
A9:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wN=$.wN+("_"+s)
$.wO=$.wO+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fJ(f,["spawned",new H.fA(s,r),q,t.r])
r=new H.mm(a,b,c,d,t)
if(e===!0){t.dT(q,q)
u.globalState.f.a.aN(0,new H.eN(t,r,"start isolate"))}else r.$0()},
Gl:function(a,b){var t=new H.ph(!0,!1,null)
t.eV(a,b)
return t},
GT:function(a){return new H.eL(!0,[]).aZ(new H.dy(!1,P.i1(null,P.E)).az(a))},
rR:function rR(a,b){this.a=a
this.b=b},
rS:function rS(a,b){this.a=a
this.b=b},
qI:function qI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fz:function fz(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
qD:function qD(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(){},
ml:function ml(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mm:function mm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q1:function q1(){},
fA:function fA(b,a){this.b=b
this.a=a},
qK:function qK(a,b){this.a=a
this.b=b},
i4:function i4(b,c,a){this.b=b
this.c=c
this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
ph:function ph(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(a,b){this.a=a
this.b=b},
pj:function pj(a,b){this.a=a
this.b=b},
dE:function dE(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
zc:function(){throw H.l(new P.Z("Cannot modify unmodifiable Map"))},
Hq:function(a){return u.types[a]},
y_:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aG(a).$isaU},
A:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.l(H.bv(a))
return t},
FM:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.o1(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ev:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uB:function(a,b){if(b==null)throw H.l(new P.bK(a,null,null))
return b.$1(a)},
fn:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uB(a,c)
if(3>=t.length)return H.x(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uB(a,c)}if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a5(q,o)|32)>r)return H.uB(a,c)}return parseInt(a,b)},
wL:function(a,b){return b.$1(a)},
wP:function(a,b){var t,s
H.xS(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wL(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.t0(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wL(a,b)}return t},
nW:function(a){var t,s,r,q,p,o,n,m
t=J.aG(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.aG(a).$iseG){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a5(q,0)===36)q=C.c.ai(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rL(H.kj(a),0,null),u.mangledGlobalNames)},
nV:function(a){return"Instance of '"+H.nW(a)+"'"},
Fr:function(){if(!!self.location)return self.location.href
return},
wK:function(a){var t,s,r,q,p
t=J.c1(a)
if(typeof t!=="number")return t.ex()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fw:function(a){var t,s,r,q
t=H.a([],[P.E])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bV)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aY(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bv(q))}return H.wK(t)},
wR:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bV)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<0)throw H.l(H.bv(q))
if(q>65535)return H.Fw(a)}return H.wK(a)},
Fx:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ex()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hK:function(a){var t
if(typeof a!=="number")return H.a9(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aY(t,10))>>>0,56320|t&1023)}}throw H.l(P.bF(a,0,1114111,null,null))},
cV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wM:function(a){return a.b?H.cV(a).getUTCFullYear()+0:H.cV(a).getFullYear()+0},
nU:function(a){return a.b?H.cV(a).getUTCMonth()+1:H.cV(a).getMonth()+1},
nT:function(a){return a.b?H.cV(a).getUTCDate()+0:H.cV(a).getDate()+0},
Fs:function(a){return a.b?H.cV(a).getUTCHours()+0:H.cV(a).getHours()+0},
Fu:function(a){return a.b?H.cV(a).getUTCMinutes()+0:H.cV(a).getMinutes()+0},
Fv:function(a){return a.b?H.cV(a).getUTCSeconds()+0:H.cV(a).getSeconds()+0},
Ft:function(a){return a.b?H.cV(a).getUTCMilliseconds()+0:H.cV(a).getMilliseconds()+0},
uC:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
return a[b]},
wQ:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
a[b]=c},
a9:function(a){throw H.l(H.bv(a))},
x:function(a,b){if(a==null)J.c1(a)
throw H.l(H.c7(a,b))},
c7:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"index",null)
t=J.c1(a)
if(!(b<0)){if(typeof t!=="number")return H.a9(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jJ(b,"index",null)},
Hh:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cZ(!0,a,"start",null)
if(a<0||a>c)return new P.ez(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"end",null)
if(b<a||b>c)return new P.ez(a,c,!0,b,"end","Invalid value")}return new P.cZ(!0,b,"end",null)},
bv:function(a){return new P.cZ(!0,a,null,null)},
kh:function(a){if(typeof a!=="number")throw H.l(H.bv(a))
return a},
v9:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bv(a))
return a},
xS:function(a){if(typeof a!=="string")throw H.l(H.bv(a))
return a},
l:function(a){var t
if(a==null)a=new P.fl()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.y5})
t.name=""}else t.toString=H.y5
return t},
y5:function(){return J.cJ(this.dartException)},
bb:function(a){throw H.l(a)},
bV:function(a){throw H.l(new P.bN(a))},
dV:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.po(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xa:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ub:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mI(a,s,t?null:b.receiver)},
cn:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rT(a)
if(a==null)return
if(a instanceof H.h8)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ub(H.A(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.A(s)+" (Error "+q+")"
return t.$1(new H.jC(p,null))}}if(a instanceof TypeError){o=$.$get$x4()
n=$.$get$x5()
m=$.$get$x6()
l=$.$get$x7()
k=$.$get$xb()
j=$.$get$xc()
i=$.$get$x9()
$.$get$x8()
h=$.$get$xe()
g=$.$get$xd()
f=o.aJ(s)
if(f!=null)return t.$1(H.ub(s,f))
else{f=n.aJ(s)
if(f!=null){f.method="call"
return t.$1(H.ub(s,f))}else{f=m.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=k.aJ(s)
if(f==null){f=j.aJ(s)
if(f==null){f=i.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=h.aJ(s)
if(f==null){f=g.aJ(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jC(s,f==null?null:f.method))}}return t.$1(new H.pq(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jQ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cZ(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jQ()
return a},
cm:function(a){var t
if(a instanceof H.h8)return a.b
if(a==null)return new H.kb(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kb(a,null)},
HA:function(a){if(a==null||typeof a!='object')return J.dB(a)
else return H.ev(a)},
xW:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hv:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kf(b,new H.rG(a))
case 1:return H.kf(b,new H.rH(a,d))
case 2:return H.kf(b,new H.rI(a,d,e))
case 3:return H.kf(b,new H.rJ(a,d,e,f))
case 4:return H.kf(b,new H.rK(a,d,e,f,g))}throw H.l(P.ln("Unsupported number of arguments for wrapped closure"))},
dn:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hv)
a.$identity=t
return t},
z8:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aG(c).$isq){t.$reflectionInfo=c
r=H.FM(t).r}else r=c
q=d?Object.create(new H.ox().constructor.prototype):Object.create(new H.fQ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dF
$.dF=J.ec(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vy(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hq,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vv:H.t4
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vy(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
z5:function(a,b,c,d){var t=H.t4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vy:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.z7(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.z5(s,!q,t,b)
if(s===0){q=$.dF
$.dF=J.ec(q,1)
o="self"+H.A(q)
q="return function(){var "+o+" = this."
p=$.fR
if(p==null){p=H.kI("self")
$.fR=p}return new Function(q+H.A(p)+";return "+o+"."+H.A(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dF
$.dF=J.ec(q,1)
n+=H.A(q)
q="return function("+n+"){return this."
p=$.fR
if(p==null){p=H.kI("self")
$.fR=p}return new Function(q+H.A(p)+"."+H.A(t)+"("+n+");}")()},
z6:function(a,b,c,d){var t,s
t=H.t4
s=H.vv
switch(b?-1:a){case 0:throw H.l(new H.o7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
z7:function(a,b){var t,s,r,q,p,o,n,m
t=H.z4()
s=$.vu
if(s==null){s=H.kI("receiver")
$.vu=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.z6(q,!o,r,b)
if(q===1){s="return function(){return this."+H.A(t)+"."+H.A(r)+"(this."+H.A(s)+");"
o=$.dF
$.dF=J.ec(o,1)
return new Function(s+H.A(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.A(t)+"."+H.A(r)+"(this."+H.A(s)+", "+m+");"
o=$.dF
$.dF=J.ec(o,1)
return new Function(s+H.A(o)+"}")()},
va:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aG(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.z8(a,b,t,!!d,e,f)},
t4:function(a){return a.a},
vv:function(a){return a.c},
z4:function(){var t=$.fR
if(t==null){t=H.kI("self")
$.fR=t}return t},
kI:function(a){var t,s,r,q,p
t=new H.fQ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
HD:function(a,b){var t=J.be(b)
throw H.l(H.vx(H.nW(a),t.M(b,3,t.gm(b))))},
eQ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aG(a)[b]
else t=!0
if(t)return a
H.HD(a,b)},
xV:function(a){var t=J.aG(a)
return"$S" in t?t.$S():null},
fF:function(a,b){var t
if(a==null)return!1
t=H.xV(a)
return t==null?!1:H.vd(t,b)},
vx:function(a,b){return new H.kN("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
HK:function(a){throw H.l(new P.l6(a))},
rQ:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xX:function(a){return u.getIsolateTag(a)},
c0:function(a){return new H.dW(a,null)},
a:function(a,b){a.$ti=b
return a},
kj:function(a){if(a==null)return
return a.$ti},
xZ:function(a,b){return H.vg(a["$as"+H.A(b)],H.kj(a))},
aH:function(a,b,c){var t=H.xZ(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kj(a)
return t==null?null:t[b]},
dA:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rL(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.A(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dA(t,b)
return H.GX(a,b)}return"unknown-reified-type"},
GX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dA(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dA(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dA(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Hp(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dA(l[j],b)+(" "+H.A(j))}q+="}"}return"("+q+") => "+t},
rL:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cd("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.P=p+", "
o=a[s]
if(o!=null)q=!1
p=t.P+=H.dA(o,c)}return q?"":"<"+t.D(0)+">"},
kk:function(a){var t,s
if(a instanceof H.eY){t=H.xV(a)
if(t!=null)return H.dA(t,null)}s=J.aG(a).constructor.builtin$cls
if(a==null)return s
return s+H.rL(a.$ti,0,null)},
vg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dZ:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kj(a)
s=J.aG(a)
if(s[b]==null)return!1
return H.xQ(H.vg(s[d],t),c)},
HJ:function(a,b,c,d){if(a==null)return a
if(H.dZ(a,b,c,d))return a
throw H.l(H.vx(H.nW(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rL(c,0,null),u.mangledGlobalNames)))},
xQ:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cY(a[s],b[s]))return!1
return!0},
eP:function(a,b,c){return a.apply(b,H.xZ(b,c))},
Hc:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kj(a)
a=J.aG(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vd(r.apply(a,null),b)}return H.cY(s,b)},
cY:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.vd(a,b)
if('func' in a)return b.builtin$cls==="HQ"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xQ(H.vg(o,t),r)},
xP:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cY(t,p)||H.cY(p,t)))return!1}return!0},
H3:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cY(p,o)||H.cY(o,p)))return!1}return!0},
vd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cY(t,s)||H.cY(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xP(r,q,!1))return!1
if(!H.xP(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}}return H.H3(a.named,b.named)},
I0:function(a){var t=$.vb
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
I_:function(a){return H.ev(a)},
HZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hw:function(a){var t,s,r,q,p,o
t=$.vb.$1(a)
s=$.rw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xO.$2(a,t)
if(t!=null){s=$.rw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ve(r)
$.rw[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rF[t]=r
return r}if(p==="-"){o=H.ve(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.y0(a,r)
if(p==="*")throw H.l(new P.eF(t))
if(u.leafTags[t]===true){o=H.ve(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.y0(a,r)},
y0:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rM(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ve:function(a){return J.rM(a,!1,null,!!a.$isaU)},
Hy:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rM(t,!1,null,!!t.$isaU)
else return J.rM(t,c,null,null)},
Ht:function(){if(!0===$.vc)return
$.vc=!0
H.Hu()},
Hu:function(){var t,s,r,q,p,o,n,m
$.rw=Object.create(null)
$.rF=Object.create(null)
H.Hs()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.y1.$1(p)
if(o!=null){n=H.Hy(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hs:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fE(C.O,H.fE(C.P,H.fE(C.u,H.fE(C.u,H.fE(C.R,H.fE(C.Q,H.fE(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vb=new H.rC(p)
$.xO=new H.rD(o)
$.y1=new H.rE(n)},
fE:function(a,b){return a(b)||b},
u6:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bK("Illegal RegExp pattern ("+String(q)+")",a,null))},
HH:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
vf:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hs){q=b.gdC()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bb(H.bv(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
H1:function(a){return a},
HI:function(a,b,c,d){var t,s,r,q,p,o
t=J.aG(b)
if(!t.$isux)throw H.l(P.dD(b,"pattern","is not a Pattern"))
for(t=t.aQ(b,a),t=new H.k_(t.a,t.b,t.c,null),s=0,r="";t.J();){q=t.d
p=q.b
o=p.index
r=r+H.A(H.xF().$1(C.c.M(a,s,o)))+H.A(c.$1(q))
s=o+p[0].length}t=r+H.A(H.xF().$1(C.c.ai(a,s)))
return t.charCodeAt(0)==0?t:t},
kT:function kT(){},
kU:function kU(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
o1:function o1(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
po:function po(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC:function jC(a,b){this.a=a
this.b=b},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
rT:function rT(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
rG:function rG(a){this.a=a},
rH:function rH(a,b){this.a=a
this.b=b},
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rK:function rK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eY:function eY(){},
p2:function p2(){},
ox:function ox(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kN:function kN(a){this.a=a},
o7:function o7(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
t:function t(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mH:function mH(a){this.a=a},
mG:function mG(a){this.a=a},
mS:function mS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mT:function mT(a,$ti){this.a=a
this.$ti=$ti},
mU:function mU(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rC:function rC(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(a){this.a=a},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9:function k9(a,b){this.a=a
this.b=b},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dC("Invalid length "+H.A(a)))
return a},
xB:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dC("Invalid view offsetInBytes "+H.A(b)))},
xE:function(a){return a},
Fp:function(a){return new Int8Array(H.xE(a))},
cN:function(a,b,c){H.xB(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GS:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aG()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.Hh(a,b,c))
return b},
fj:function fj(){},
eu:function eu(){},
nk:function nk(){},
jz:function jz(){},
hD:function hD(){},
hF:function hF(){},
hH:function hH(){},
hE:function hE(){},
hG:function hG(){},
hI:function hI(){},
nl:function nl(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
jA:function jA(){},
fk:function fk(){},
Hp:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
HC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aG:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ju.prototype
return J.jt.prototype}if(typeof a=="string")return J.er.prototype
if(a==null)return J.mE.prototype
if(typeof a=="boolean")return J.mD.prototype
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.rz(a)},
rM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rz:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vc==null){H.Ht()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eF("Return interceptor for "+H.A(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ua()]
if(p!=null)return p
p=H.Hw(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$ua(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wA:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
F5:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a5(a,b)
if(s!==32&&s!==13&&!J.wA(s))break;++b}return b},
u5:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a_(a,t)
if(s!==32&&s!==13&&!J.wA(s))break}return b},
be:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.rz(a)},
dp:function(a){if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.rz(a)},
dz:function(a){if(typeof a=="number")return J.fg.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eG.prototype
return a},
ki:function(a){if(typeof a=="number")return J.fg.prototype
if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eG.prototype
return a},
de:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eG.prototype
return a},
b7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.rz(a)},
ec:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ki(a).W(a,b)},
bc:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aG(a).S(a,b)},
vh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dz(a).av(a,b)},
cv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dz(a).aG(a,b)},
ed:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dz(a).a4(a,b)},
rU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ki(a).au(a,b)},
fH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.y_(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).n(a,b)},
kl:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.y_(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dp(a).i(a,b,c)},
y6:function(a,b){return J.dp(a).h(a,b)},
y7:function(a,b,c,d){return J.b7(a).fP(a,b,c,d)},
y8:function(a,b){return J.de(a).aQ(a,b)},
e_:function(a,b){return J.b7(a).fR(a,b)},
vi:function(a){return J.b7(a).fT(a)},
rV:function(a,b,c){return J.dz(a).ac(a,b,c)},
y9:function(a,b){return J.ki(a).aB(a,b)},
ya:function(a,b){return J.b7(a).aC(a,b)},
yb:function(a,b){return J.be(a).ad(a,b)},
km:function(a,b,c){return J.be(a).dX(a,b,c)},
yc:function(a,b){return J.b7(a).h1(a,b)},
vj:function(a,b){return J.dp(a).U(a,b)},
yd:function(a,b,c,d){return J.dp(a).bY(a,b,c,d)},
kn:function(a){return J.dz(a).al(a)},
vk:function(a,b){return J.dp(a).aa(a,b)},
rW:function(a){return J.b7(a).gdV(a)},
ye:function(a){return J.b7(a).gbs(a)},
fI:function(a){return J.b7(a).gas(a)},
yf:function(a){return J.b7(a).gcJ(a)},
dB:function(a){return J.aG(a).ga6(a)},
rX:function(a){return J.be(a).gY(a)},
vl:function(a){return J.b7(a).gX(a)},
cQ:function(a){return J.dp(a).gT(a)},
yg:function(a){return J.b7(a).gaD(a)},
c1:function(a){return J.be(a).gm(a)},
yh:function(a){return J.b7(a).gK(a)},
yi:function(a){return J.b7(a).gee(a)},
yj:function(a){return J.b7(a).ghT(a)},
yk:function(a){return J.b7(a).ghU(a)},
vm:function(a){return J.aG(a).gab(a)},
rY:function(a){return J.b7(a).gaM(a)},
yl:function(a){return J.b7(a).gb7(a)},
ym:function(a){return J.b7(a).bk(a)},
yn:function(a,b){return J.b7(a).at(a,b)},
yo:function(a,b){return J.b7(a).bF(a,b)},
yp:function(a,b){return J.be(a).bf(a,b)},
vn:function(a,b,c,d,e){return J.b7(a).e9(a,b,c,d,e)},
vo:function(a,b){return J.dp(a).ay(a,b)},
yq:function(a,b,c){return J.de(a).ed(a,b,c)},
vp:function(a,b){return J.b7(a).hD(a,b)},
yr:function(a,b,c,d){return J.b7(a).hQ(a,b,c,d)},
ko:function(a,b,c){return J.de(a).cV(a,b,c)},
rZ:function(a,b,c){return J.de(a).hS(a,b,c)},
fJ:function(a,b){return J.b7(a).b9(a,b)},
vq:function(a,b){return J.b7(a).sbs(a,b)},
ys:function(a,b){return J.dp(a).d3(a,b)},
e0:function(a,b){return J.de(a).eJ(a,b)},
yt:function(a,b){return J.de(a).ai(a,b)},
t_:function(a){return J.dz(a).l(a)},
yu:function(a){return J.dp(a).aq(a)},
yv:function(a,b){return J.dz(a).bC(a,b)},
cJ:function(a){return J.aG(a).D(a)},
yw:function(a){return J.de(a).hY(a)},
t0:function(a){return J.de(a).bj(a)},
yx:function(a){return J.de(a).er(a)},
j:function j(){},
mD:function mD(){},
mE:function mE(){},
ht:function ht(){},
nN:function nN(){},
eG:function eG(){},
es:function es(){},
eq:function eq($ti){this.$ti=$ti},
u8:function u8($ti){this.$ti=$ti},
i9:function i9(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fg:function fg(){},
ju:function ju(){},
jt:function jt(){},
er:function er(){}},P={
Gr:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.H4()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dn(new P.pZ(t),1)).observe(s,{childList:true})
return new P.pY(t,s,r)}else if(self.setImmediate!=null)return P.H5()
return P.H6()},
Gs:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dn(new P.q_(a),0))},
Gt:function(a){++u.globalState.f.b
self.setImmediate(H.dn(new P.q0(a),0))},
Gu:function(a){P.uV(C.o,a)},
bt:function(a,b){P.xz(null,a)
return b.ghg()},
cu:function(a,b){P.xz(a,b)},
bs:function(a,b){J.ya(b,a)},
br:function(a,b){b.cF(H.cn(a),H.cm(a))},
xz:function(a,b){var t,s,r,q
t=new P.re(b)
s=new P.rf(b)
r=J.aG(a)
if(!!r.$isbj)a.cv(t,s)
else if(!!r.$iscE)a.c3(t,s)
else{q=new P.bj(0,$.aC,null,[null])
q.a=4
q.c=a
q.cv(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aC.toString
return new P.rp(t)},
xG:function(a,b){if(H.fF(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
zQ:function(a,b){var t=new P.bj(0,$.aC,null,[b])
P.x3(C.o,new P.rr(a,t))
return t},
tx:function(a,b,c){var t
if(a==null)a=new P.fl()
t=$.aC
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.de(a,b)
return t},
zR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.aC,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lZ(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bV)(a),++l){q=a[l]
p=t.b
q.c3(new P.lY(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.aC,null,[null])
m.dd(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cn(j)
n=H.cm(j)
if(t.b===0||!1)return P.tx(o,n,null)
else{t.c=o
t.d=n}}return s},
bq:function(a){return new P.kd(new P.bj(0,$.aC,null,[a]),[a])},
xD:function(a,b,c){$.aC.toString
a.ao(b,c)},
Gx:function(a,b){var t=new P.bj(0,$.aC,null,[b])
t.a=4
t.c=a
return t},
xr:function(a,b){var t,s,r
b.a=1
try{a.c3(new P.qo(b),new P.qp(b))}catch(r){t=H.cn(r)
s=H.cm(r)
P.y2(new P.qq(b,t,s))}},
qn:function(a,b){var t,s,r
for(;a.gfu();)a=a.c
t=a.gcn()
s=b.c
if(t){b.c=null
r=b.bO(s)
b.a=a.a
b.c=a.c
P.fy(b,r)}else{b.a=2
b.c=a
a.dG(s)}},
fy:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fI(p)
n=p.gaL()
s.toString
P.kg(null,null,s,o,n)}return}for(;b.gcq()!=null;b=m){m=b.a
b.a=null
P.fy(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge3()||b.ge2()){k=b.gfN()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fI(p)
n=p.gaL()
s.toString
P.kg(null,null,s,o,n)
return}j=$.aC
if(j==null?k!=null:j!==k)$.aC=k
else j=null
if(b.ge2())new P.qv(t,r,q,b).$0()
else if(s){if(b.ge3())new P.qu(r,b,l).$0()}else if(b.ghn())new P.qt(t,r,b).$0()
if(j!=null)$.aC=j
s=r.b
if(!!J.aG(s).$iscE){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bO(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qn(s,i)
return}}i=b.b
b=i.bN()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GZ:function(){var t,s
for(;t=$.fC,t!=null;){$.i6=null
s=t.b
$.fC=s
if(s==null)$.i5=null
t.a.$0()}},
H0:function(){$.v7=!0
try{P.GZ()}finally{$.i6=null
$.v7=!1
if($.fC!=null)$.$get$v3().$1(P.xR())}},
xN:function(a){var t=new P.k0(a,null)
if($.fC==null){$.i5=t
$.fC=t
if(!$.v7)$.$get$v3().$1(P.xR())}else{$.i5.b=t
$.i5=t}},
H_:function(a){var t,s,r
t=$.fC
if(t==null){P.xN(a)
$.i6=$.i5
return}s=new P.k0(a,null)
r=$.i6
if(r==null){s.b=t
$.i6=s
$.fC=s}else{s.b=r.b
r.b=s
$.i6=s
if(s.b==null)$.i5=s}},
y2:function(a){var t=$.aC
if(C.e===t){P.fD(null,null,C.e,a)
return}t.toString
P.fD(null,null,t,t.cD(a,!0))},
HV:function(a,b){return new P.qZ(null,a,!1,[b])},
xK:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cn(o)
s=H.cm(o)
$.aC.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fI(r)
q=n
p=r.gaL()
c.$2(q,p)}}},
GR:function(a,b,c,d){var t=a.bV(0)
if(!!J.aG(t).$iscE&&t!==$.$get$hi())t.c6(new P.rh(b,c,d))
else b.ao(c,d)},
xA:function(a,b){return new P.rg(a,b)},
v6:function(a,b,c){var t=a.bV(0)
if(!!J.aG(t).$iscE&&t!==$.$get$hi())t.c6(new P.ri(b,c))
else b.aI(c)},
Gw:function(a,b,c,d,e,f,g){var t,s
t=$.aC
s=e?1:0
s=new P.i_(a,null,null,null,null,t,s,null,null,[f,g])
s.eY(b,c,d,e,g)
s.f0(a,b,c,d,e,f,g)
return s},
GQ:function(a,b,c){$.aC.toString
a.bH(b,c)},
x3:function(a,b){var t=$.aC
if(t===C.e){t.toString
return P.uV(a,b)}return P.uV(a,t.cD(b,!0))},
uV:function(a,b){var t=C.a.ap(a.a,1000)
return H.Gl(t<0?0:t,b)},
kg:function(a,b,c,d,e){var t={}
t.a=d
P.H_(new P.ro(t,e))},
xH:function(a,b,c,d){var t,s
s=$.aC
if(s===c)return d.$0()
$.aC=c
t=s
try{s=d.$0()
return s}finally{$.aC=t}},
xJ:function(a,b,c,d,e){var t,s
s=$.aC
if(s===c)return d.$1(e)
$.aC=c
t=s
try{s=d.$1(e)
return s}finally{$.aC=t}},
xI:function(a,b,c,d,e,f){var t,s
s=$.aC
if(s===c)return d.$2(e,f)
$.aC=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aC=t}},
fD:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cD(d,!(!t||!1))
P.xN(d)},
pZ:function pZ(a){this.a=a},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rp:function rp(a){this.a=a},
cE:function cE(){},
rr:function rr(a,b){this.a=a
this.b=b},
lZ:function lZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eZ:function eZ(){},
k1:function k1(){},
dY:function dY(a,$ti){this.a=a
this.$ti=$ti},
kd:function kd(a,$ti){this.a=a
this.$ti=$ti},
k5:function k5(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bj:function bj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qk:function qk(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b},
qo:function qo(a){this.a=a},
qp:function qp(a){this.a=a},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b){this.a=a
this.b=b},
qr:function qr(a,b){this.a=a
this.b=b},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a){this.a=a},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
dl:function dl(){},
oE:function oE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oC:function oC(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oK:function oK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI:function oI(a,b){this.a=a
this.b=b},
oJ:function oJ(){},
oL:function oL(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a){this.a=a},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(a){this.a=a},
oB:function oB(){},
dm:function dm(){},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a){this.a=a},
k3:function k3(){},
q8:function q8(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qa:function qa(b,c,a){this.b=b
this.c=c
this.a=a},
q9:function q9(){},
qL:function qL(){},
qM:function qM(a,b){this.a=a
this.b=b},
qY:function qY(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qZ:function qZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rh:function rh(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qJ:function qJ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eT:function eT(a,b){this.a=a
this.b=b},
rd:function rd(){},
ro:function ro(a,b){this.a=a
this.b=b},
qP:function qP(){},
qQ:function qQ(a,b){this.a=a
this.b=b},
qR:function qR(a,b){this.a=a
this.b=b},
qS:function qS(a,b){this.a=a
this.b=b},
Gy:function(a,b){var t=a[b]
return t===a?null:t},
v5:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
v4:function(){var t=Object.create(null)
P.v5(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wB:function(a,b,c){return H.xW(a,new H.t(0,null,null,null,null,null,0,[b,c]))},
bZ:function(a,b){return new H.t(0,null,null,null,null,null,0,[a,b])},
mV:function(){return new H.t(0,null,null,null,null,null,0,[null,null])},
hw:function(a){return H.xW(a,new H.t(0,null,null,null,null,null,0,[null,null]))},
i1:function(a,b){return new P.k8(0,null,null,null,null,null,0,[a,b])},
Gz:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.qy(0,null,null,null,null,[d,e])},
u2:function(a,b,c){var t,s
if(P.v8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i7()
s.push(a)
try{P.GY(a,t)}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=P.wZ(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jq:function(a,b,c){var t,s,r
if(P.v8(a))return b+"..."+c
t=new P.cd(b)
s=$.$get$i7()
s.push(a)
try{r=t
r.P=P.wZ(r.gP(),a,", ")}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=t
s.P=s.gP()+c
s=t.gP()
return s.charCodeAt(0)==0?s:s},
v8:function(a){var t,s
for(t=0;s=$.$get$i7(),t<s.length;++t)if(a===s[t])return!0
return!1},
GY:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cQ(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.J())return
q=H.A(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.J()){if(r<=5)return
if(0>=b.length)return H.x(b,-1)
p=b.pop()
if(0>=b.length)return H.x(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.J()){if(r<=4){b.push(H.A(n))
return}p=H.A(n)
if(0>=b.length)return H.x(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.J();n=m,m=l){l=t.gO();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.A(n)
p=H.A(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a5:function(a,b,c,d){return new P.k7(0,null,null,null,null,null,0,[d])},
ue:function(a,b){var t,s
t=P.a5(null,null,null,b)
for(s=J.cQ(a);s.J();)t.h(0,s.gO())
return t},
wG:function(a){var t,s,r
t={}
if(P.v8(a))return"{...}"
s=new P.cd("")
try{$.$get$i7().push(a)
r=s
r.P=r.gP()+"{"
t.a=!0
a.aa(0,new P.n9(t,s))
t=s
t.P=t.gP()+"}"}finally{t=$.$get$i7()
if(0>=t.length)return H.x(t,-1)
t.pop()}t=s.gP()
return t.charCodeAt(0)==0?t:t},
uf:function(a,b){var t=new P.mW(null,0,0,0,[b])
t.eT(a,b)
return t},
qy:function qy(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qB:function qB(a){this.a=a},
qz:function qz(a,$ti){this.a=a
this.$ti=$ti},
qA:function qA(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k8:function k8(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k7:function k7(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qC:function qC(){},
ff:function ff(){},
hr:function hr(){},
jv:function jv(){},
hJ:function hJ(){},
b5:function b5(){},
r5:function r5(){},
n8:function n8(){},
hT:function hT(a,$ti){this.a=a
this.$ti=$ti},
n9:function n9(a,b){this.a=a
this.b=b},
mW:function mW(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qG:function qG(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oj:function oj(){},
oi:function oi(){},
vs:function(a,b,c,d,e,f){if(C.d.bG(f,4)!==0)throw H.l(new P.bK("Invalid base64 padding, padded length must be multiple of four, is "+H.A(f),a,c))
if(d+e!==f)throw H.l(new P.bK("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bK("Invalid base64 padding, more than two '=' characters",a,b))},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
fU:function fU(){},
fW:function fW(){},
lh:function lh(){},
pA:function pA(a){this.a=a},
pB:function pB(a){this.a=a},
r7:function r7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r9:function r9(a){this.a=a},
r8:function r8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gj:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bF(b,0,J.c1(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bF(c,b,J.c1(a),null,null))
s=J.cQ(a)
for(r=0;r<b;++r)if(!s.J())throw H.l(P.bF(b,0,r,null,null))
q=[]
if(t)for(;s.J();)q.push(s.gO())
else for(r=b;r<c;++r){if(!s.J())throw H.l(P.bF(c,b,r,null,null))
q.push(s.gO())}return H.wR(q)},
wZ:function(a,b,c){var t=J.cQ(b)
if(!t.J())return a
if(c.length===0){do a+=H.A(t.gO())
while(t.J())}else{a+=H.A(t.gO())
for(;t.J();)a=a+c+H.A(t.gO())}return a},
zb:function(a,b){return J.y9(a,b)},
ze:function(a,b){var t=new P.dH(a,b)
t.d9(a,b)
return t},
zf:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.A(t)
if(t>=10)return s+"00"+H.A(t)
return s+"000"+H.A(t)},
zg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ii:function(a){if(a>=10)return""+a
return"0"+a},
vJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zy(a)},
zy:function(a){var t=J.aG(a)
if(!!t.$iseY)return t.D(a)
return H.nV(a)},
dC:function(a){return new P.cZ(!1,null,null,a)},
dD:function(a,b,c){return new P.cZ(!0,a,b,c)},
yy:function(a){return new P.cZ(!1,null,a,"Must not be null")},
wV:function(a){return new P.ez(null,null,!1,null,null,a)},
jJ:function(a,b,c){return new P.ez(null,null,!0,a,b,"Value not in range")},
bF:function(a,b,c,d,e){return new P.ez(b,c,!0,a,d,"Invalid value")},
dk:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a9(a)
if(!(0>a)){if(typeof c!=="number")return H.a9(c)
t=a>c}else t=!0
if(t)throw H.l(P.bF(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a9(b)
if(!(a>b)){if(typeof c!=="number")return H.a9(c)
t=b>c}else t=!0
if(t)throw H.l(P.bF(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.c1(b)
return new P.mi(b,t,!0,a,c,"Index out of range")},
ln:function(a){return new P.qj(a)},
d4:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cQ(a);s.J();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
F6:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.d4(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fG:function(a){H.HC(H.A(a))},
d8:function(a,b,c){return new H.hs(a,H.u6(a,!1,!0,!1),null,null)},
oW:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dk(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.wR(s?C.b.c9(a,b,c):a)}if(!!J.aG(a).$isfk)return H.Fx(a,b,P.dk(b,c,a.length,null,null,null))
return P.Gj(a,b,c)},
xg:function(){var t=H.Fr()
if(t!=null)return P.xh(t,0,null)
throw H.l(new P.Z("'Uri.base' is not supported"))},
xh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a5(a,b+4)^58)*3|C.c.a5(a,b)^100|C.c.a5(a,b+1)^97|C.c.a5(a,b+2)^116|C.c.a5(a,b+3)^97)>>>0
if(s===0)return P.xf(b>0||c<c?C.c.M(a,b,c):a,5,null).geu()
else if(s===32)return P.xf(C.c.M(a,t,c),0,null).geu()}r=H.a(new Array(8),[P.E])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xL(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.av()
if(p>=b)if(P.xL(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.a9(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aH(a,"..",m)))h=l>m+2&&C.c.aH(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aH(a,"file",b)){if(o<=b){if(!C.c.aH(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.M(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aF(a,m,l,"/");++l;++k;++c}else{a=C.c.M(a,b,m)+"/"+C.c.M(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aH(a,"http",b)){if(q&&n+3===m&&C.c.aH(a,"80",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aH(a,"https",b)){if(q&&n+4===m&&C.c.aH(a,"443",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.M(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qX(a,p,o,n,m,l,k,i,null)}return P.GC(a,b,c,p,o,n,m,l,k,i)},
xj:function(a,b){return C.b.hd(a.split("&"),P.mV(),new P.pw(b))},
Gm:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pt(a)
s=H.cz(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a_(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fn(C.c.M(a,p,q),null,null)
if(J.cv(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.x(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fn(C.c.M(a,p,c),null,null)
if(J.cv(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.x(r,o)
r[o]=m
return r},
xi:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pu(a)
s=new P.pv(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.a_(a,q)
if(m===58){if(q===b){++q
if(C.c.a_(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bc(C.b.gbc(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Gm(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aw()
h=j[1]
if(typeof h!=="number")return H.a9(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aw()
i=j[3]
if(typeof i!=="number")return H.a9(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aG(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.x(g,f)
g[f]=0
i=f+1
if(i>=16)return H.x(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d2()
i=C.d.aY(e,8)
if(f<0||f>=16)return H.x(g,f)
g[f]=i
i=f+1
if(i>=16)return H.x(g,i)
g[i]=e&255
f+=2}}return g},
GC:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.GK(a,b,d)
else{if(d===b)P.i3(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.GL(a,t,e-1):""
r=P.GG(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a9(g)
p=q<g?P.GI(H.fn(C.c.M(a,q,g),null,new P.rq(a,f)),j):null}else{s=""
r=null
p=null}o=P.GH(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.GJ(a,h+1,i,null):null
return new P.ke(j,s,r,p,o,n,i<c?P.GF(a,i+1,c):null,null,null,null,null,null)},
xt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i3:function(a,b,c){throw H.l(new P.bK(c,a,b))},
GI:function(a,b){if(a!=null&&J.bc(a,P.xt(b)))return
return a},
GG:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.an()
t=c-1
if(C.c.a_(a,t)!==93)P.i3(a,b,"Missing end `]` to match `[` in host")
P.xi(a,b+1,t)
return C.c.M(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a9(c)
s=b
for(;s<c;++s)if(C.c.a_(a,s)===58){P.xi(a,b,c)
return"["+a+"]"}return P.GN(a,b,c)},
GN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a9(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a_(a,t)
if(p===37){o=P.xy(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cd("")
m=C.c.M(a,s,t)
l=r.P+=!q?m.toLowerCase():m
if(n){o=C.c.M(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.P=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.x(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cd("")
if(s<t){r.P+=C.c.M(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.x(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i3(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a_(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cd("")
m=C.c.M(a,s,t)
r.P+=!q?m.toLowerCase():m
r.P+=P.xu(p)
t+=k
s=t}}}}if(r==null)return C.c.M(a,b,c)
if(s<c){m=C.c.M(a,s,c)
r.P+=!q?m.toLowerCase():m}n=r.P
return n.charCodeAt(0)==0?n:n},
GK:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xw(C.c.a5(a,b)))P.i3(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a5(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.x(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i3(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.M(a,b,c)
return P.GD(s?a.toLowerCase():a)},
GD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GL:function(a,b,c){var t=P.fB(a,b,c,C.Y,!1)
return t==null?C.c.M(a,b,c):t},
GH:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fB(a,b,c,C.D,!1)
if(r==null)r=C.c.M(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ah(r,"/"))r="/"+r
return P.GM(r,e,f)},
GM:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ah(a,"/"))return P.GO(a,!t||c)
return P.GP(a)},
GJ:function(a,b,c,d){var t=P.fB(a,b,c,C.l,!1)
return t==null?C.c.M(a,b,c):t},
GF:function(a,b,c){var t=P.fB(a,b,c,C.l,!1)
return t==null?C.c.M(a,b,c):t},
xy:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a_(a,b+1)
r=C.c.a_(a,t)
q=H.rB(s)
p=H.rB(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aY(o,4)
if(t>=8)return H.x(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hK(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.M(a,b,b+3).toUpperCase()
return},
xu:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a5("0123456789ABCDEF",a>>>4)
t[2]=C.c.a5("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fJ(a,6*r)&63|s
if(p>=q)return H.x(t,p)
t[p]=37
n=p+1
m=C.c.a5("0123456789ABCDEF",o>>>4)
if(n>=q)return H.x(t,n)
t[n]=m
m=p+2
n=C.c.a5("0123456789ABCDEF",o&15)
if(m>=q)return H.x(t,m)
t[m]=n
p+=3}}return P.oW(t,0,null)},
fB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.de(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.a9(c)
if(!(r<c))break
c$0:{o=s.a_(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.x(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xy(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.x(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i3(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a_(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xu(o)}}if(p==null)p=new P.cd("")
p.P+=C.c.M(a,q,r)
p.P+=H.A(m)
if(typeof l!=="number")return H.a9(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.P+=s.M(a,q,c)
t=p.P
return t.charCodeAt(0)==0?t:t},
xx:function(a){if(C.c.ah(a,"."))return!0
return C.c.bf(a,"/.")!==-1},
GP:function(a){var t,s,r,q,p,o,n
if(!P.xx(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(J.bc(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.x(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bg(t,"/")},
GO:function(a,b){var t,s,r,q,p,o
if(!P.xx(a))return!b?P.xv(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bc(C.b.gbc(t),"..")){if(0>=t.length)return H.x(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.x(t,0)
s=J.rX(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bc(C.b.gbc(t),".."))t.push("")
if(!b){if(0>=t.length)return H.x(t,0)
s=P.xv(t[0])
if(0>=t.length)return H.x(t,0)
t[0]=s}return C.b.bg(t,"/")},
xv:function(a){var t,s,r,q
t=J.be(a)
s=t.gm(a)
if(typeof s!=="number")return s.av()
if(s>=2&&P.xw(t.a_(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a9(s)
if(!(r<s))break
q=t.a_(a,r)
if(q===58)return C.c.M(a,0,r)+"%3A"+C.c.ai(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.x(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
GE:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a_(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dC("Invalid URL encoding"))}}return t},
r6:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a9(c)
t=J.de(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a_(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.M(a,b,c)
else o=new H.kQ(t.M(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a_(a,s)
if(q>127)throw H.l(P.dC("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dC("Truncated URI"))
o.push(P.GE(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pB(!1).h_(o)},
xw:function(a){var t=a|32
return 97<=t&&t<=122},
xf:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.be(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
c$0:{p=s.a_(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bK("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bK("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
p=s.a_(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbc(t)
if(p!==44||r!==m+7||!s.aH(a,"base64",m+1))throw H.l(new P.bK("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hA(0,a,o,s.gm(a))
else{l=P.fB(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aF(a,o,s.gm(a),l)}return new P.ps(a,t,c)},
GV:function(){var t,s,r,q,p
t=P.F6(22,new P.rl(),!0,P.dc)
s=new P.rk(t)
r=new P.rm()
q=new P.rn()
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
xL:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xM()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.x(t,d)
r=t[d]
q=C.c.a5(a,s)^96
p=J.fH(r,q>95?31:q)
if(typeof p!=="number")return p.aK()
d=p&31
o=C.d.aY(p,5)
if(o>=8)return H.x(e,o)
e[o]=s}return d},
dd:function dd(){},
bG:function bG(){},
dH:function dH(a,b){this.a=a
this.b=b},
T:function T(){},
dI:function dI(a){this.a=a},
le:function le(){},
lf:function lf(){},
eh:function eh(){},
fl:function fl(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mi:function mi(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a){this.a=a},
eF:function eF(a){this.a=a},
dR:function dR(a){this.a=a},
bN:function bN(a){this.a=a},
nA:function nA(){},
jQ:function jQ(){},
l6:function l6(a){this.a=a},
qj:function qj(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(a,bK,$ti){this.a=a
this.bK=bK
this.$ti=$ti},
E:function E(){},
o:function o(){},
js:function js(){},
q:function q(){},
bp:function bp(){},
d6:function d6(){},
dq:function dq(){},
ad:function ad(){},
d5:function d5(){},
eA:function eA(){},
dQ:function dQ(){},
C:function C(){},
cd:function cd(P){this.P=P},
eH:function eH(){},
pw:function pw(a){this.a=a},
pt:function pt(a){this.a=a},
pu:function pu(a){this.a=a},
pv:function pv(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rq:function rq(a,b){this.a=a
this.b=b},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(){},
rk:function rk(a){this.a=a},
rm:function rm(){},
rn:function rn(){},
qX:function qX(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
q7:function q7(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xT:function(a){var t,s,r,q,p
if(a==null)return
t=P.mV()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Hd:function(a,b){var t
if(a==null)return
t={}
J.vk(a,new P.rt(t))
return t},
He:function(a){var t,s
t=new P.bj(0,$.aC,null,[null])
s=new P.dY(t,[null])
a.then(H.dn(new P.ru(s),1))["catch"](H.dn(new P.rv(s),1))
return t},
tb:function(){var t=$.vG
if(t==null){t=J.km(window.navigator.userAgent,"Opera",0)
$.vG=t}return t},
vI:function(){var t=$.vH
if(t==null){t=P.tb()!==!0&&J.km(window.navigator.userAgent,"WebKit",0)
$.vH=t}return t},
zh:function(){var t,s
t=$.vD
if(t!=null)return t
s=$.vE
if(s==null){s=J.km(window.navigator.userAgent,"Firefox",0)
$.vE=s}if(s)t="-moz-"
else{s=$.vF
if(s==null){s=P.tb()!==!0&&J.km(window.navigator.userAgent,"Trident/",0)
$.vF=s}if(s)t="-ms-"
else t=P.tb()===!0?"-o-":"-webkit-"}$.vD=t
return t},
r1:function r1(){},
r3:function r3(a,b){this.a=a
this.b=b},
pV:function pV(){},
pW:function pW(a,b){this.a=a
this.b=b},
rt:function rt(a){this.a=a},
r2:function r2(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(a){this.a=a},
rv:function rv(a){this.a=a},
kX:function kX(){},
kY:function kY(a){this.a=a},
xC:function(a){var t,s,r
t=new P.bj(0,$.aC,null,[null])
s=new P.kd(t,[null])
a.toString
r=W.U
W.eb(a,"success",new P.rj(a,s),!1,r)
W.eb(a,"error",s.gdW(),!1,r)
return t},
l8:function l8(){},
rj:function rj(a,b){this.a=a
this.b=b},
mh:function mh(){},
nx:function nx(){},
hN:function hN(){},
pm:function pm(){},
GB:function(a){var t=new P.qN(0,0)
t.f1(a)
return t},
qE:function qE(){},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(){},
bU:function bU(){},
kp:function kp(){},
ee:function ee(){},
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
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lR:function lR(){},
cp:function cp(){},
mf:function mf(){},
d3:function d3(){},
mO:function mO(){},
iQ:function iQ(){},
j9:function j9(){},
na:function na(){},
nb:function nb(){},
d7:function d7(){},
nu:function nu(){},
iR:function iR(){},
ja:function ja(){},
nK:function nK(){},
nP:function nP(){},
oe:function oe(){},
oV:function oV(){},
iS:function iS(){},
jb:function jb(){},
kv:function kv(a){this.a=a},
ce:function ce(){},
oZ:function oZ(){},
p0:function p0(){},
eE:function eE(){},
pa:function pa(){},
db:function db(){},
pn:function pn(){},
iT:function iT(){},
jc:function jc(){},
pz:function pz(){},
pD:function pD(){},
pE:function pE(){},
i0:function i0(){},
qT:function qT(){},
qU:function qU(){},
qV:function qV(){},
bi:function bi(){},
dc:function dc(){},
fO:function fO(){},
eU:function eU(){},
fP:function fP(){},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
bC:function bC(){},
e1:function e1(){},
kV:function kV(){},
kr:function kr(){},
o3:function o3(){},
ra:function ra(){},
jP:function jP(){},
iU:function iU(){},
jd:function jd(){}},W={
z2:function(a){if(a!=null)return new Audio(a)
return new Audio()},
z3:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zd:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gv:function(a){var t=new W.q5(a,null)
t.eZ(a)
return t},
vV:function(a,b,c){return W.vW(a,null,null,b,null,null,null,c).b4(new W.m9())},
vW:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e4
s=new P.bj(0,$.aC,null,[t])
r=new P.dY(s,[t])
q=new XMLHttpRequest()
C.L.hC(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HU
W.eb(q,"load",new W.ma(r,q),!1,t)
W.eb(q,"error",r.gdW(),!1,t)
q.send()
return s},
vX:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xs:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eb:function(a,b,c,d,e){var t=W.H2(new W.qi(c))
t=new W.qh(0,a,b,t,!1,[e])
t.f_(a,b,c,!1,e)
return t},
GU:function(a){var t
if(!!J.aG(a).$iseg)return a
t=new P.jZ([],[],!1)
t.c=!0
return t.b6(a)},
H2:function(a){var t=$.aC
if(t===C.e)return a
return t.fV(a,!0)},
aI:function aI(){},
eS:function eS(){},
ks:function ks(){},
eV:function eV(){},
cK:function cK(){},
kz:function kz(){},
h2:function h2(){},
h5:function h5(){},
kD:function kD(){},
eW:function eW(){},
kH:function kH(){},
eX:function eX(){},
ef:function ef(){},
kO:function kO(){},
kS:function kS(){},
id:function id(){},
fX:function fX(){},
kW:function kW(){},
kZ:function kZ(){},
l_:function l_(){},
fY:function fY(){},
fZ:function fZ(){},
l0:function l0(){},
bJ:function bJ(){},
f_:function f_(){},
iI:function iI(){},
q5:function q5(a,b){this.a=a
this.b=b},
jD:function jD(){},
q6:function q6(){},
ig:function ig(){},
l1:function l1(){},
l2:function l2(){},
l7:function l7(){},
f0:function f0(){},
ih:function ih(){},
h_:function h_(){},
eg:function eg(){},
ij:function ij(){},
ik:function ik(){},
la:function la(){},
il:function il(){},
im:function im(){},
iJ:function iJ(){},
j2:function j2(){},
io:function io(){},
ip:function ip(){},
k4:function k4(a,$ti){this.a=a
this.$ti=$ti},
dt:function dt(){},
lg:function lg(){},
h1:function h1(){},
lm:function lm(){},
U:function U(){},
aV:function aV(){},
lN:function lN(){},
cg:function cg(){},
f7:function f7(){},
iK:function iK(){},
j3:function j3(){},
lO:function lO(){},
lP:function lP(){},
lQ:function lQ(){},
lT:function lT(){},
lU:function lU(){},
lW:function lW(){},
iE:function iE(){},
co:function co(){},
m6:function m6(){},
f9:function f9(){},
iL:function iL(){},
j4:function j4(){},
iG:function iG(){},
e4:function e4(){},
m9:function m9(){},
ma:function ma(a,b){this.a=a
this.b=b},
hj:function hj(){},
me:function me(){},
hk:function hk(){},
fb:function fb(){},
mj:function mj(){},
mL:function mL(){},
hu:function hu(){},
hv:function hv(){},
n2:function n2(){},
n7:function n7(){},
hB:function hB(){},
jx:function jx(){},
nd:function nd(){},
ne:function ne(){},
hC:function hC(){},
cq:function cq(){},
jy:function jy(){},
iV:function iV(){},
je:function je(){},
ns:function ns(){},
nt:function nt(){},
aR:function aR(){},
jB:function jB(){},
iW:function iW(){},
jf:function jf(){},
nw:function nw(){},
nB:function nB(){},
nF:function nF(){},
nH:function nH(){},
e7:function e7(){},
nM:function nM(){},
ci:function ci(){},
jI:function jI(){},
iX:function iX(){},
jg:function jg(){},
nS:function nS(){},
jK:function jK(){},
fq:function fq(){},
jL:function jL(){},
oh:function oh(){},
ok:function ok(){},
ol:function ol(){},
om:function om(){},
cr:function cr(){},
jN:function jN(){},
h3:function h3(){},
h6:function h6(){},
oq:function oq(){},
hP:function hP(){},
cs:function cs(){},
jO:function jO(){},
iY:function iY(){},
jh:function jh(){},
fr:function fr(){},
ot:function ot(){},
ck:function ck(){},
ou:function ou(){},
ov:function ov(){},
oA:function oA(){},
oX:function oX(){},
cl:function cl(){},
e9:function e9(){},
p4:function p4(){},
hQ:function hQ(){},
cP:function cP(){},
cH:function cH(){},
pb:function pb(){},
iZ:function iZ(){},
ji:function ji(){},
pc:function pc(){},
h4:function h4(){},
h7:function h7(){},
pg:function pg(){},
ct:function ct(){},
jS:function jS(){},
j_:function j_(){},
jj:function jj(){},
fv:function fv(){},
jT:function jT(){},
pl:function pl(){},
ea:function ea(){},
px:function px(){},
py:function py(){},
pC:function pC(){},
fw:function fw(){},
jU:function jU(){},
pH:function pH(){},
jX:function jX(){},
pO:function pO(){},
eJ:function eJ(){},
fx:function fx(){},
q4:function q4(){},
hY:function hY(){},
j0:function j0(){},
jk:function jk(){},
k2:function k2(){},
j1:function j1(){},
jl:function jl(){},
qb:function qb(){},
qc:function qc(){},
k6:function k6(){},
iM:function iM(){},
j5:function j5(){},
qx:function qx(){},
i2:function i2(){},
iN:function iN(){},
j6:function j6(){},
qW:function qW(){},
ka:function ka(){},
iO:function iO(){},
j7:function j7(){},
kc:function kc(){},
iP:function iP(){},
j8:function j8(){},
rb:function rb(){},
rc:function rc(){},
qd:function qd(a){this.a=a},
qg:function qg(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eM:function eM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qh:function qh(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qi:function qi(a){this.a=a},
bx:function bx(){},
lS:function lS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r4:function r4(){}},T={
tB:function(a,b,c,d){var t
H.HJ(a,"$isq",[P.E],"$asq")
t=new T.hl(a,null,d,b,null)
t.eS(a,b,c,d)
return t},
wJ:function(a,b){return new T.nC(0,a,new Uint8Array(H.cz(b==null?32768:b)))},
Gp:function(a){var t=new T.pR(-1,0,0,0,0,null,null,"",[])
t.eW(a)
return t},
Gq:function(a,b){var t=new T.pS(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eX(a,b)
return t},
fa:function(a){var t=new T.mb(null,0,2147483647)
t.eR(a)
return t},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
df:function df(a){this.a=a},
hl:function hl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pS:function pS(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
pT:function pT(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
pQ:function pQ(a){this.a=a},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kG:function kG(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
kJ:function kJ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
l9:function l9(){},
m3:function m3(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
FO:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.hO("Glitch",0.01,0.01,0.01,s,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.T]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.F(null,null,A.Y),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.J]),H.a([],[A.fS]),1)
t.a1(a,b,c,d,e)
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
c5:function c5(a,b){this.a=a
this.b=b},
zl:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.aj(s[q],8)
return t.b5(b)},
zk:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.a8(8)
if(q>=t)return H.x(s,q)
s[q]=p}return s},
zj:function(a,b,c,d){var t,s,r,q,p
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;++p)t.aj(q[p],r)
return t.b5(b)},
zi:function(a,b,c,d){var t,s,r,q,p,o
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;++o){r=p.a8(q)
if(o>=t)return H.x(s,o)
s[o]=r}return s}},S={kq:function kq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bH:function bH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ic:function ic(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m8:function m8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mM:function mM(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},n5:function n5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},og:function og(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fm:function fm(){},uW:function uW(){},uX:function uX(){},uY:function uY(){},th:function th(){},tk:function tk(){},t7:function t7(){},uG:function uG(){},v_:function v_(){},v0:function v0(){},kM:function kM(){},uy:function uy(){},us:function us(){},mR:function mR(){},tc:function tc(){},t2:function t2(){},l4:function l4(){},ud:function ud(){},l5:function l5(){},nG:function nG(){},uN:function uN(){},uK:function uK(){},uO:function uO(){},t1:function t1(){},m0:function m0(){},kK:function kK(){},t6:function t6(){},t5:function t5(){},uz:function uz(){},uP:function uP(){},uA:function uA(){},tj:function tj(){},ti:function ti(){},uM:function uM(){},uL:function uL(){},pd:function pd(){},uR:function uR(){},t9:function t9(){},ta:function ta(){},uZ:function uZ(){},hA:function hA(){},uj:function uj(){},uk:function uk(){},ul:function ul(){},um:function um(){},uH:function uH(){},uI:function uI(){},uJ:function uJ(){},ui:function ui(){},up:function up(){},uq:function uq(){},ty:function ty(){},tz:function tz(){},tA:function tA(){},ur:function ur(){},un:function un(){},t3:function t3(){},uT:function uT(){},uU:function uU(){},uS:function uS(){}},K={bW:function bW(a,b){this.a=a
this.b=b},mP:function mP(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},ob:function ob(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yz:function(a,b,c,d,e){var t,s,r
t=P.C
s=A.dG
r=P.E
r=new L.aa(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.j(0,$.ag,L.d("#FF9B00"),!0)
r.j(0,$.ai,L.d("#FF9B00"),!0)
r.j(0,$.ah,L.d("#FF8700"),!0)
r.j(0,$.ar,L.d("#7F7F7F"),!0)
r.j(0,$.aq,L.d("#727272"),!0)
r.j(0,$.ak,L.d("#A3A3A3"),!0)
r.j(0,$.al,L.d("#999999"),!0)
r.j(0,$.aj,L.d("#898989"),!0)
r.j(0,$.ap,L.d("#EFEFEF"),!0)
r.j(0,$.ao,L.d("#DBDBDB"),!0)
r.j(0,$.an,L.d("#C6C6C6"),!0)
r.j(0,$.am,L.d("#ADADAD"),!0)
s=[t]
t=new L.fM(0.01,0.01,0.01,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.T]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.J]),H.a([],[A.fS]),Q.F(null,null,A.Y))
t.Z(a,b,c,d,e)
return t},
d:function(a){if(C.c.ah(a,"#"))return A.vz(C.c.ai(a,1))
else return A.vz(a)},
fM:function fM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kE:function kE(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
od:function od(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
p1:function p1(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.ch=ch},fT:function fT(a,b){this.a=a
this.b=b},l3:function l3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h9:function h9(){},bB:function bB(a,b){this.a=a
this.b=b},ow:function ow(a){this.a=a},pK:function pK(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={ky:function ky(){},n4:function n4(a){this.a=a},nz:function nz(a){this.a=a},oS:function oS(){},oT:function oT(a){this.a=a},oU:function oU(a){this.a=a},lc:function lc(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,e_,e0,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
_.e_=e_
_.e0=e0
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
_.x2=x2},lF:function lF(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},n6:function n6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},b:function b(a){this.a=a},X:function X(b,c,a){this.b=b
this.c=c
this.a=a},au:function au(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},pe:function pe(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Gn:function(a){if(J.de(a).ah(a," "))return C.c.ai(a,1)
return a},
pL:function pL(a){this.a=a},
pM:function pM(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b}},O={kA:function kA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},cb:function cb(){},dr:function dr(){},kF:function kF(a){this.a=a},eD:function eD(){},iq:function iq(){},
HB:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uw()
a=J.rZ(a,P.d8("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rO(t))
s=document
J.vn(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.bc(O.xY("seerOfVoid",null),"true"))P.zQ(new O.rP(),P.d6)
r=new P.dH(Date.now(),!1)
if(H.nU(r)===4&&H.nT(r)===1)J.rW(s.querySelector("body")).h(0,"voidbody")
q=H.nU(r)
p=H.nT(r)
o=C.a.D(H.wM(r))
n=C.a.D(q)
m=C.a.D(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hM(null,null)
k.c8(H.fn(l,null,null))
k.hz()
if($.Gd||k.a.c0()>0.99)H.eQ(s.querySelector("#today"),"$iseS").href=C.c.au("../",t)+"dead_index.html?seed="+l
else H.eQ(s.querySelector("#today"),"$iseS").href=C.c.au("../",t)+"index2.html?seed="+l},
xY:function(a,b){var t,s,r,q
t=P.xg().gcT().n(0,a)
if(t!=null)t=P.r6(t,0,J.c1(t),C.n,!1)
if(t!=null)return t
s=$.y3
if(s.length!==0){r=J.yt(window.location.href,J.yp(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xh(H.vf(s,q,"")+"?"+$.y3,0,null).gcT().n(0,a)}return},
HL:function(){var t,s,r,q
t=document
J.rW(t.querySelector("body")).h(0,"voidbody")
s=new W.k4(t.querySelectorAll(".void"),[null])
for(t=new H.dN(s,s.gm(s),0,null,[null]);t.J();){r=t.d
q=J.ye(J.rY(r))
if(q==="none"||q.length===0)O.HG(r)
else O.Hr(r)}},
HG:function(a){var t,s
if(a==null)return
t=J.b7(a)
s=t.gaM(a)
J.vq(s,!!t.$ishP?"inline":"block")},
Hr:function(a){if(a==null)return
J.vq(J.rY(a),"none")},
eR:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fG("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e0(s,",")
if(!J.yb(r,a))window.localStorage.setItem(t,H.A(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cn(q)
P.fG("Saving isn't possible....you don't have local storage")}},
rO:function rO(a){this.a=a},
rP:function rP(){},
rN:function rN(){},
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
_.z=z}},Y={p9:function p9(a){this.a=a},o_:function o_(a){this.a=a},kL:function kL(a){this.a=a},m1:function m1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},m2:function m2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nv:function nv(b,a){this.b=b
this.a=a},dP:function dP(a,b){this.a=a
this.b=b},af:function af(a,b){this.a=a
this.b=b},d_:function d_(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c3:function c3(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},S:function S(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ie:function ie(c,d,a,b){var _=this
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
_.b=b},kP:function kP(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jF:function jF(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iD:function iD(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jH:function jH(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oa:function oa(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oc:function oc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},on:function on(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dO:function dO(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nj:function(){var t=0,s=P.bq(),r,q
var $async$nj=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fG("loading big bads")
r=$
q=J
t=2
return P.cu(A.e6("BigBadLists/bigBads.txt",!1,!1,null),$async$nj)
case 2:r.wI=q.e0(b,"\n")
return P.bs(null,s)}})
return P.bt($async$nj,s)},
Hb:function(a){var t,s,r,q,p,o
t=J.e0(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
o=J.be(p)
r+=" "+(J.yw(o.n(p,0))+o.ai(p,1))}return r}},V={
Hx:function(){A.rA()
W.vV(C.c.au("../",N.uw())+"navbar.txt",null,null).b4(O.Hz())
V.Hi()},
Hi:function(){var t,s,r,q,p,o,n,m,l
t=O.xY("staff",null)
s=new P.dH(Date.now(),!1)
if(H.nU(s)===4&&H.nT(s)===1){r="#"+H.A(t)+"Avatar"
q=document.querySelector(r)
r=J.b7(q)
p=r.gak(q)
p.toString
r.sak(q,H.vf(p,".png","_sauce.png"))}r=J.aG(t)
if(r.S(t,"authorBot"))O.eR("N4Igzg9grgTgxgUxALhAJQQQwCYEsB2A5gAQCCAQgORjHm4QgA0I+mAtkquQnBB8ZmIBhAJ4AjCDEJMQAFwQAPWShDEIAd3wIYCVhxjEdmADa4AXghqyAFghHE4mfMTE8+CYggBuulwlnyBrgAZsQ2dsQAVlBgssTWOALEwQjqDuLaWrK4cMQADpgwsmAAdMQyYphwANaEMND42ABy7JwgAOL+AJL4ACq25BAKAPJiYNo+MCV5RDKyMLiEhNpCCfiIKgAMJQCsMmCIWmC9EACq+MYQNSoA2sAAOuDQ8AiPyI8ln4+Mj3qvKI9TuNiAB1LDGGxhCC0Nz8QRoCASWTfR7yJRvR5qTTaXStIJWXA6bBqUIQC72VwEEgAWWGAGVegAZACaxDAUDy2noBlk0J0hCgxkK8SgbCcpWI-QiYE5jQExmMJLCtkJxC8mFixHU4MhvKiMTiwSFcWgcVcvDhhkREFkZSlOmIuBoggAnAAWEqbADMAHYAKQONaIZWYOI2J2O51isxUkookCVGp1BrNVoYjrdPoDIajcYwSbTIjx+aLZYwVZORDp7Y+gBs8YOuksJ3Olxq6ZuAF14zp2RCwHTZKGwB2HvdfmnxwCpwA1LrU8coqfq4xQV5T95TgCMm0XIAAvoxiGOJxw95vHoyugAxACidNIpyEt73P2XJjX573O73h+Pe7+L8p1IdoXynN9HhXT8Nz3ABaLcdl-I8TxYScMSnIRhmpalbzQZ9Xz3KD13Qx54N3Kd927JhUQWJZtEHYdGUsPMOyon45FossGOKdojECUcALQ6dHgAESwromlIJp8PAwiP2I4SQB9JD-ynQCYIwrCcLwsCl0g+SgMeZSKLYmjS3oodilvABHKATFYx5KJkXtBWKbiwFuB5ULPAEQDnBdqJAIj0y3RzkNPf53hAMTqQkqT8MC4LfIADkczs5k4izGOY7RbnS5gSzomB3N4rBAjyjLzOKyywBsuzjAq-cgA")
if(r.S(t,"karmicRetribution"))O.eR("N4Igzg9grgTgxgUxALhAaQEoAIBGBLCLABwEMBzJAGhADsSBbJVAWQUawGUAXKAEwRpcQ1LggAeQ1BADuNBDAEN5WPGCxcSAGwDWeGmXWEAZjDwDeaiDXUALBCsHy5XAHRYAKjYhh7m7-LUfNkMsACsoMC5cewUiBBIuPQNGRjUuGwSsOGhNXiwMgDd7HAQBYm9RPJwATywSLABWAAYAWmr4mBaIXKxoLi6jFq5oOBssegh6Nxk5BTpGGCxIkhguQPkCpKwoIixxLhgSFpMEMDGU06wTSdt7fiJ0yyMsDAReXjxXYRAcEjhtMgwaA0XgAOSUKBAAHUrGRNAgYTBtC4iPpvgc8GQKDAAMIZGiISFNFwAdga3zAiDkYHcEAAqjQ-P9IQBtYAAHXA0HgCE5yE5mFwBGI5F5wk58zF-JArHYrx8K1G8k5lE5ogkfM5M3kigWSw0q0CcRBW0S7AYJDAYC29RsUAo+QgMH4vWeCj+iSsKnoorUJBBWHZQZACk0CRIOHhQc54zYpzcADEnXsijBataeAkCNZ0ghaoV7P66kQiEDS3gEvYyHgjJQlnAFAI4CRdsnskRqqRli4gzRe548-kSEUaAByKIeqBaTS1Lidt51K5QTSaJYCUQE+x6LDSUraMA98U-P4AoFQEHgxia6Gw+GI5GosgqtWmLHyPH+xDX4lk5-gKmnLSDJMto14sgAun+ChgMuazcAkYBgRywaStGKBoRwACCGA4phHDuAAku4dIACIAKJoaqwYFFoUC8sG-LBgAjGhAC+kFHhib4wPBawADKnD4MBgRxqogFx2K8WAADi7qiMJ6EgBBf4SfIUlkQAjlOmhIWhqEMRh2G4fhRGkRRwZUZyNGaHRaGMZyLHBuxnKsXWHJcrAX6KYK+CEKQFB-qhimyqc9CfDYKn7Ne2pzEoiwlNWNBqAoYViDaAYpZa8mmnYsapLc+bDvYXgrPwvBuCFyUIEYOqbr0uaLBcajbvUPiaIMCg1XMiRaL0sAQDgTreG4A7pgaUTDFgfg+IYUCjDu4UpvI1TpFsfTWi6uYOPJzh1Gkdi1IciAhNopS7DsC3pLcU2VpEhhEHgcAHn+vz-ICwJgko14wvod5Og++gqa+2Ifpu36kg0f6UgIgH0oyED-CJUGnLBYBSbpKFfQZwZYTheGEcR5GUWh1m2djDlsaJL6YpJGj8YJyqKcpnHA2pdMyXJjPSszYmqTx7OadpGMSljmo40Z+OmUTFkk7R9Fi5yABMlMuW5nKQJ5UoCtgvkigFR5BdKIV+M6kUaopHCwO6miqPQdQBjQeA2HgNtgHbDZndthAxbqyijmoTUOHsWm9YwlqwAgI0HVgNCEH4+jKJ1tXHXAVvrktghgHWOBQFEeiRPEeSQOwkSHAndSaDtlY7k6PQQM8Ealx6C5GJiEd+gG9zQdaVhuJh4xZco9d5ZcGRqLH0h2AoeyaDNk1kBA0yyLVcVDusZRbQcuc2FHOoqJYjK1FY9hb-YCBV6uFx1v6eS5rUzbWHIqZ7JSLZbq4L0nu956fVeik-XCBAfFvAHkfEDGm758ReWlD+SGR5obUiAvDRGTMqYhhRpXNG7Nha0FFuhcWeMTKE3Ms+aics7JoUci5NBfMpICStFzTkPNqbcSkrJeI8kkYswgfzBCgstA4P0grEAuNjIEzMsTMhNl5b4M5AAZhViAdi3xoKoykqydyhtOSiMlsQv8pMtYgBYko8C6JWa8PpgwmAGiRZ-2lDoohEijwGOvMY5RIhzFsM5tY1AEEzE8PUiHTQrJTGsSAA")
if(r.S(t,"authorBotJunior"))O.eR("N4Igzg9grgTgxgUxALhAJQQQwCYAICCAQgFIDkYuARgJYQB0IANCAHaYC2SqAmgmA8wAuCAB6CUIXBADuLBDARtOMXGEGYFFbAgQAHADYBPXJkGqInXADNqCurgA6IXvye5BACwTGwmQ41xvPlwFK30EOEFqFgBzdy9cbEwWOGi4sI4+ARBKTDgAaxiYaBZsADlMiQAVAAkASQBlRoAxOrKAUTpdWKYQQRhqGJj5AGEPZMQJAAY6AFYATl6wRDkwKogAVRZ9CAKJAG1gJ0hYRCdkJzorp0YnJQRzpxqYdleruhunYTFHyRk5BT3FTUCjSUxwDxpEy4ODQAwIXDsTD5BHQMxWYrsXDRMDUbTmSyUKBgLz8XBVLzGdhQQTCFQOBkgDwvN7XRkmCieby4KC6JLCeIIWyqSG6XRQop4+yfHJ5QrFKClCqcX4UkF1MAAGQgADcEHUAOJQPj8boxGX9QbDGBjCYPFBOGazGXLRR8dZbHYFX77AC6Ms0UH0gjADXUIZ9R0Z9wZj0ZhE1+AaAAUau0ALIAeQAGtxY0x8zrMPpjfmLoyAIz5gC+ASjd0yZfzaEz6ZGrfT7TQecZt0ZRZLD0Z5acVcZ1f9Bb6AyG8jDpi1JvkPsnt2nVrn4bABoUpmXDpAfotM+t85D7QAjlBiyunLXcEdwNB4PaLiB3jKYwe6iw6XworEACEwEWqIgi-FIsjyIomTAqC4KQrE0JWIq8jFrgujFIgYC4hALC4NI1CeCYYoaIoZgxOECDSoyP5-moaTAYB+YBFyxhwDA-jYjELAQAMSFcoktiCMYOwQPkFAYhYgqIs+AKuFOuQFEUJTlI2B4NBYCB4QgzRQAU0QACLUAg2BdLEx4bja4wpK+jpzC6Kzups2y7Pkt5ToGwahlukb5jGw75gmSaphmOY9p8-bFqWgWVjWdb+Y2sVOEmDQ1JmmpdhFBZRYOTZxeOq5fCem4LpqS4wB5a6WrOMBntuu50lVxVWfVl7XvoHkTr0XkhvVByPl+b7BSmaZZrmMoDqWB5ViA96Depb5oIaNRVO0mYbA0uDNBs3aTdFdkgLN3VCCVdVbuVOHyAcvq9DVp5bjuWB0jdd1nW1V7Fq91ZAA")
if(r.S(t,"jadedResearcher"))O.eR("N4Igzg9grgTgxgUxALhAJQQQwCYAIBSaA5GLgEICSA8iADQgB2mAtkqgIpQJgAuAlhAa4MmADZ8eATzogeCAB48UIXBADuDBDARNWMXAAtMpAEYIA5lCE8IuAI5deAodrETJAOly4AggDM5fUxcUUFzXAAraBhNSVpcHgMESVxWBB5cNQkDBKTcTAAHAsxtBgyfKESIfQg-XIQ+fR1+bWEscSkvCh4STIaYbC8AFSSUgGsEBALccz5zc1FuBmr+BnDMDPVNUpYtfJNoDLVMSVJE5Nw4TCErULgx1OqEDxePIgBxADkqAGUKH6IAH5gbgAOpGOQANz2iQ2uD4YFeMhMmHu5hg0AY2E+u2UABEAKI-AAKVCGHgKaxkPBgc3MWgAwkYGIhlAAGDwAVhkYEQmjAQwgAFUGHcxsoANrAAA64GiiFlyFlr1ltFlugQitlIuwWl41zwIg6klVsrkii1Ki2Wh0u30RlIkFE0LwwT8CDUuGJQoAWj6ADJE-JY3AMgASPn9gc+7yDsIy518lQM1UMxhCmD4eEOuD8qfOzGGo1wYEmzBLtgKED4ZUWYERuBGNYemAOlUyEMuEF1l2uuGwEC8-ogEAeVl1MSwiXq+SKJWaufzeTg3YQXbKGNE4jWuRr5lI460mg2Ble3jDUFPuAAsiczPVtL1gsUeIEhEltIDTSAUWiMeOcVYS1CRJMkKTWb8aTpRlmQVFBZQ5ABmAB2b9eR0bhBRFMVLQlABdb9tDAKBRB4MAfh4DYwFwmVpXVXY6K1OiQC+X5-kYugOMhMQuA4pVmIARg4gBfAjONkWl5i0CiqP9bhSxgXCxLVCToJgGSyPeVxAhojiNT4jjWL+H4OLVZjuNEXjmP42UhOY0TIMk+l1MosiCQcMQlNlYT4hlOVYDgpUQBVcT9PgkAmWuek2jcKRIIUHhLVUDQbQ1fRiOwXVRRSQ8YH1LFSAQaEYEkRI9yLfpcFcY14VIYIwD4ZgSI2Zx4kENcwAMCQpHiSB4QyK4hHvGs-BrCQEFEFI4GZelXRDZhuz4UaEDwEwUkTNQuuYUhahCcaYDESbgxSYxOogRZMmyCtWASRq10EepGjTAqvFBCbRC8ZLtltPQ00dCAbv4G6HvOJ7mWwBtfBDCQElgBgdvbDjTpTRYSo42q9sCQ6TpLVz4WsLrHS6191q6tYKpSEwoHWEM-CgetgzwVhMoug003uGcGvLKx+FEeoUiMaFUkweQVtUdtuNpaBHVcs5O0gcdcDGGtsGCcwR0GRtCcurd+wQUaGHGo7BbXZYSy0AR6aqqYtDgemGsEBtv1-MZ0UxbEGPCkDSXJSlzEctTIpZTVwqQ1DxPQ-ksNFCB7i88SiJIsiNOo8KpT0hjrI4ihrx8d4KE+HwhmoT5TK4njNSzwS2RE3yM6AqvZR+dghQoPE8UDH4CU+Luy-MiuDOr2vcFo+iG6Y2U8Soa8C58T4GQJPvZQsqyJ5AASa-suvmP0xuQGJOefHDRfmLM5eB73jfh9HxhM7Xn5PgJHwAGkfAPhkKCGABNJeQBXyu15Xy3iPeuAD4LMR+D4NADIfA-GLkMIUhJf7-0HrZTe3lt5jzATZEARIhgEgJNeZBF816IWvqA1BIAyBoB8AXT+iCT6mn7pZbBHEgEYJATvO+4DZT4CoGQAAYv6F+RJiEsMoZychXDx48IitPa8BJoGMM4sw1esj2EgB8pwrBlD-QUAEUSHwQoF5iLUTgjRWib67zXnnZRZ8-4kNkQAWgEpI4BVjuE4LDFQNAvdT7l3EXvAAHFInRe985oCGGGUxrCh7uIoXvGBAiBGz2LlQUu-jVGxLQaE2+MicGwJ+N4wMaAf6ZPPoEwB6DNHKTNE5aSss5L1i0PHFSUEpIuSolpKcLS04ePyYZb4xkYmUIAEwiVqapDpKd3JQE8mnMSljZQK3gCHIKIUVJhSCj4OAiACgZCNO4eKFpwpfVSnaa2bgABe3Bchwmqu4DGm04QwwRBTPWcAsxrhsLjKY+QGo9jzEER4rAygJFsIsBMeQKhVHSgULAYwvAcUIMgXAQorxhmSF0fsggiAZDGMsT0m0dC4EkNAIgrRXDYD3LuBst5JDDR6KQbAsAaWJh8AUWkfMBEjlEKQTl1xEU3jvGuCQvQWW0h3ImAALAAegEohXAYZDqqDqAI3YuAqZ8FEHgKABRsUDgYHi-IcAeBzK3FNecdyMhNWmq9TszANiBFIAiUl5LKVYGpTuCQ9q+DTVSFgeGbqoCXKZpTAQ8RNp+pyKwa4pAyVQApWuAoogTg0vEO6EsjVI1dX9bGoNCak24AUCm6obK8idRhvGXAFB4hsz6o6hgKQIDnDyvEE2uACjtgbVAf1u1oilmdLcmsNgiyCuDUOCwPrcBf2gIzTtCAIAprXOICYwbhZrphiqtQKwcjTvBOkD8-UwBEHyP2KAzATDFvkPC2koLKJ8xXMHfZe013+iWggH42bVBBCEDgalpq+BC3THTDm6IoBXoOgiGl5gNWrrXKCOkqMv3llTJAVgZUdwRHphkPqfhU2bHbAIueU9rz-NwD8MgQo0BkBQ71SYNL4VLouvBjscIKA4oxth3grwPA9v9WrDWu5yY1sMEutcHHBpK0mNMAc5aETxA4x2ht1wUgprjb1WwjbSZ7lIBx44YKfkDjHQwB4Cb23tV4JNeIQKSx6qrDAVY4RAYGH-OYHIZVETo28NaHYv0ERGoyNVI6xFWjPIyKp1V1qA3XB4PEKmEWMiLGMFCi4HbEw3KEKx1EezKLByiw8qQMxqw7lswWXAhKPDO1RK7f8WJAJrMnkSH24F-biXac5IOgUEJcjQnyTCwoY5xwWYRbgSdyKy10tI7J+8i4UG7iY8pDjKnqOqQ5dr9TOlkSaQpVpdS1Ip26RsXpQV07TcoUZdiS2UF73GfZSZHWGlUVmfM07-SZuFOKYospTCKlmI4mtxZeEZCJ1IhNqiko-JbNlJdky4kUHhSEjU6km2U47a0JKYH9BHtbbAEdwImOUcHdli90QhPhJAA")
if(r.S(t,"someBody"))O.eR("N4Igzg9grgTgxgUxALhAGQQQxgOwASYBG0ALnoTBAA5IA0IOmAtkqgMoQvEAmAngQEscAcjIALTFSq8Q9EggAeJFCAgB3HAhgJGLGHgBmQ7mDwkxCJmAQAbA3iEE8YiGCoCSmG7TxhPMIQBzAjJIFjxuKG4EB3xMZ0wyAxtEmyEggDo8NijonBteHwkySOjfD1M-GEwBQLEyKCoCHG48OBsIOABrU3NLWLMLQ0xELIAJdTwYKIQM2RBCEa7AyigWgDlmVhAJtw8vQgRuDKocQPmSAMDArQBhCRxEFQAGDIBWebBETTAAFQgAKr5TpdFQAbQAuvNtGAoDYSGA2J4EeDgAAdBhbDHIDEAJQAkgBxMa-ACiAHkAWw8AAxAG4gCaGNoGIAbl4oAhsRiAOwYgC+PnRmJY3JA5IAsut8WhyQBBX5jfHrQnMtkcrkoDEAZgFQoxuk1OJAbFJypp+NJaAAItlbnK0HLCaS1SB2TZOWKALQANgFULkVxuMCRiTAGDA1hg4IDIEutWDoYRhO0iS0MYuQa0SbApIAjlAvBn+UA")
if(r.S(t,"dilletantMathematician"))O.eR("N4Igzg9grgTgxgUxALhAGQQQxgOwJY4DmABJgEbQAuxAIgLIgA0IOmAtkqgMpsQDWCWgkoI4lCDGIAhTJREwAnsTQQA7kxAiAHpRQg1OBDASsOMAORhiYADYIEAB2J4rBeTCgORAE2JklmMQAFniEQQC0DniUcEEIvrF4MA4AdMTSCABmEoIGRibsRsRwmDjE3i4lML4hYAD0cZJwEDhgcHjQYIZgrtSJyVaYhJgEadJQ1HnGpkWYNsaY3kqxpYTxxJRxfrLyeAhWmy7EClgwYwCSB42CgWCixtRgvALlwqLiklMFZuUQ+zjmah8HBqUgUCYAfgAhBoyJg4HxCDBoDhvAA5Qp6Wz2Lx4Dj0FIOIgaSgwUJrGAAYSCpUQegADCkAEwaNomfYAFQgAFUcDYIAi9ABtAC6GmMYCgNkoYC4lFkYGFYuYpPJRjlCowPSMwuAAB0WIUDcgDVIAEoAQXOaPOHO5NAAogbGAaAG5zKAIY0GgAsBoAvsrNGTCBSNTKAOILeRKkkhsPymUOgCOUDmsf9QA")
if(r.S(t,"tableGuardian"))O.eR("N4Igzg9grgTgxgUxALhAdQJYDsAEAVAcQHIwcARBAQwBMcBlBMMDCLEAGhC0oFslU6aAHI4AggCUAwjgCMHEABcEADwUoQZSlgDmAOn04AkqQUALSgvq8oCADY4AYqwWVsCdjgAOGWxEsQAMxwzBHoXGDBTDE8cSUoYBBcAawQYD2wA3mhSB2xKewAhCCYAfhwATWgcACNE3RwIAHcsVIRuPhgcaghGGosFW1DGjDMcKJ4G3BCuhDgkhqDpuITk1PTcCBhqkYaAN1Tg01DPWy1EnAAtNoUYKB4AWhkcSlIdjFJqiB5a2mqAT0OoWqsCw2G0OEaCTmC0BYXikWisReKQU9SaLQS7QOngSnnivQCm2euBUcBGYL6CgGCH09WBlh2ChBpGg-haELs9hOlEQtE8UCwcFMwQgsLASSgtns7xwbWg2mFClF1RgFOmuW4hWKpG6zV08mqPKS2hg0Cw1CEvH4IACGAVChkuk8OnkNzt2lSknMgutAAZdABWeRgRAtMB4CAAVSwvjm6gA2sAADrgaDwBAp5Ap+45lPsFNYzMpwQiCTSABMeZTSlURY0bT0BmMhwsVh4NnsTiwLjcHmmRRaRxo60yPGyjjyWtKFSqtVRDWaqUxVs63V6hqpgwhI2F4xmCBitRaFkVRxwYFgmUQMIAaqlfJjHh5hmZsLC4JR9i3LKZsr1pnQ0D2JIMB-GALj2IEsIAArMKwGBwDgAAymy0JaABe8RJPiWD1ChEBJKQtgYCkbYds81SQFsCC0EcnSQJKz5REKODaJ+oR7pQrG+MMOg1LYNiyn8NILhibQrl4uL4qQhKdFosrKGSCgUhu1K0jUUAMpYTIwFgLKad+ODCZYlBsW+jKUCkLIxgCrBDJyXinLyXgCixSpihKUoijUqp8eqk44EUTBdOiuhViAhpzCaZoWlada2va5ZOjo4VutoHowF6WiIHW-oACzhSGbSMBG0axkkdaJkm1WprAOU1VmNU5vc1VVjVhYNa1IAlmIUg4AAzF1+Y1TWChdY1KYUDoUCmOpzZmK2dDWHYjjOK4LQeGAswrDggw0AcUHTLBLCgoh4iMLAHo+iOWRQDkAVBWAZSVFANR1KJrRYquPQfP0W4vruGATNgzDUKE0xwM4pr2KaXwwtMtqajgBB+C4pgxghwoALKzOYHhwLAmIDACb6bNs-hBAAovEZh4RABFESRoRLe2dgkA01Q9i0tDTAxtgsosZ5+HR54YMoyOo5Q6PESxH6eFzpBaLQrC2ACLQ0dZoRjgkb2yRxoQfrgPLKbsFjg2eKNUlLGNCuzNyCZ4TSpGii7Lh0kkHtJOCycSClKSpf00gY9I4IyzINAZYNgN4ShvRSCAAI5QNEng0duoyO40BzxNr6TaZZvQq7Z7JZ153LOfygqKqKvOefY7kqmqZ4avkgXaiFepDV1kXGqaAqxXw41dQlpgKP1yXaF3I2qulnrevVRY1f6g01cNKZFWGpUxhAcxDzVVWtV1DHpofe+nyAzWn6vV8FnFV8oDf3XCL10gFffa+H4oKhjffE2f1N2gbBzRMOYSwLNyJdhcKCdwXhTBgQQq3BA3wIDUCBtceGZ4KDgVNMJGA7NAKMVDlgUc44W5TiejOV6c4XZiS+iFdcgd06AwmBYCAMQlgvGpDCMgd0FAeFVMwPirJvamgmNMaK-dJiXGuLcB4MgmKtEODKfI9hahsVwshemhFdpMzImzUgZluY4Eht2aGexs7nkaDnGE3AsAQHuNQXhXgaYIUGGAJimMcA8ALjgKA7Czz7FAqxPu5oxihHAkrayNDPoSRxJ7BIMkiTyVJOSPiqlBjqRDngAAEoYOg+BDBY0ph4LipcuROTTpXNyNczziklPYYYXkhAAHk8BvVlHYqACpvKNz8s3B67ddQaPRDE926tqAmBqdgeY5gYBgzkqEm4AJTLrVpI-D+3cjQSPNJaQev9H4jwUHlCe6zH5pQyllH0j8-5dX9JWd+j8N4lSjNvXe+z74HxvvfY+C8vmfxuX87MuZAWfw2YCrgd8QWdShTVHqZYcB5WQDgcQlMyDNJhdfDFX9axYoBX8kAhgFB2zQdEt2BxzCJMkcIxooDARqwQGndyiMVEAn5CZEkiyamhDIW3YKUE6BA1IJgMwwihB3FqDAeo4CVqQPWqEGUF4cTvDTv8D6ZK8GkCsTACYSCVQ8hgTSzxCQeDYAmWMIGMIaWijPAkFlocwDqS4gEAU9xfC7DBM+ZVcAYBGgpAEVUbRqBSuWjDJBurUikCiKQJBfgTruJwAkAAVrMZSfSDZQwgPXTBjAbgQFwfgoCYwXjmM6CEHgJTQkymZVKAE-qGU9NCEkHwgxaAA2EdMIG2sIIjABCaLQShfgAlqBSPEMAKawiwbm-NpACG2HqIS4IBdSB2K8Zsc28k7IcjLhUlyVdGVcvPHXby3RzwQDClisF+Ke7bIHhmXFGKUyHOOc6SeF6H2KBnhc+ed6YUPyxTId9l6vngFDM8sqO8Kr3qxfGAAuoB99CTJQKDAHQFwyH314uA58h9v6Oo4d-Zh-D99xDNKxpIUjRTxDlCI7+oDNHP6mwEj++jwHCMsZTG-djj8AC+cG31YvOakVDFgwBIUYFtGAGH32wfgwJz9Qm0NgAILapQkmoO-uw1xz+eGtP-N08R0j5GsaUeo-p0FZmGP5BsBZs+FmQABhszVXjsnf2CZgMJ5DlMk75Ck9Bvjv7nMPPvoh2wyGPNgGuY-TT4KdMgr-b+kjZGKOUyoy5qFIBGPWfU+lgDWLAvn0vR+90CmRNiaYKkSLHz-Pmfvm58LymqCqcq+fGTQXz51cU15qAPn3kteTFi2L4K2Pn0S0ZkzaW4uZeY3F4bn8V4Beq11fLHAuohbC4ps+IBou3z2efPFIBRvJdS21yzTHmuf1y+fZba8iuz3c4psrEnNutbatWeT92RMNbNmpxeKYXsrensVj7nnvO2Ge-18+g3fuf0O8ZlLpmCuPym+drq9yrv+ZAM5lbIA1soY2w-LbEOIW7fiwdwzR2EcA5TMj6FKZLuY7g9jjrpXxMVYJzJpn736sqbZ1mLbjP8y3YyuFrrPn2dE7w6T2H43MXU6sz+0n9Ose8fkLj8LCZkzE4zAT6X8PwrI4JwBhnroucPdZzABMMGTdA+5411Ilvrd3ZF6DjXO3td8916l7HBu+e+hTCr7jQA")
r="#"+H.A(t)
p=document
o=p.querySelector(r)
if(o!=null)J.rW(o).ag(0,"void")
n=H.eQ(p.querySelector("#layWaste"),"$iseX")
n.toString
W.eb(n,"click",new V.rx(),!1,W.uo)
r=P.C
m=B.eI
l=new B.p6(P.a5(null,null,null,r),P.bZ(r,m),P.bZ(r,m),!1,null)
m=new A.hM(null,null)
m.c8(null)
l.e=m
l.bh("headcanon")
p=J.yi(p.querySelector("#askAB"))
W.eb(p.a,p.b,new V.ry(l),!1,H.O(p,0))},
rx:function rx(){},
ry:function ry(a){this.a=a},
lb:function lb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
lV:function lV(a){this.a=a},
m5:function m5(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
nf:function nf(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
nD:function nD(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
o6:function o6(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
p5:function p5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zx:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
s=Math.pow(256,e)
c.toString
r=H.cN(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.x(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.x(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.aj(n-1,p)
t.aj(a,8)}return t.b5(b)},
zw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e_(a,b)
for(q=e*8,p=0;p<c;){o=r.a8(q)+1
n=r.a8(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.x(s,l)
s[l]=n}p+=o}return s},
tg:function(a){return new V.ll(a)},
tf:function(a){return new V.lk(a)},
zt:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.x(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.x(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.aj(m-1,o)
t.aj(a,r)}return t.b5(b)},
zs:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e_(a,b)
for(r=e*8,o=0;o<c;){n=p.a8(r)+1
m=p.a8(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.x(s,k)
s[k]=m}o+=n}return s},
te:function(a){return new V.lj(a)},
td:function(a){return new V.li(a)},
zv:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.x(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.x(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.al(Math.log(n)/0.6931471805599453)+1
t.aj(k-1,5)
t.aj(n-1,k)
t.aj(a,r)}return t.b5(b)},
zu:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.a8(p.a8(5)+1)+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
ll:function ll(a){this.a=a},
lk:function lk(a){this.a=a},
lj:function lj(a){this.a=a},
li:function li(a){this.a=a}},A={kR:function kR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.Y(c,e,null,a,!1,P.a5(null,null,null,G.V),0,3)
t.N(a,b,c,!1,e)
return t},
Y:function Y(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mC:function mC(){},
mB:function mB(){},
ng:function ng(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
os:function os(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
nR:function nR(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
op:function op(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
pk:function pk(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
o0:function o0(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
m_:function m_(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
fS:function fS(){},
fV:function(a,b,c,d){var t=new A.dG(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eQ(a,b,c,d)
return t},
t8:function(a,b,c,d){var t=A.fV(0,0,0,255)
t.b=C.a.ac(C.d.al(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ac(C.d.al(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ac(C.d.al(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ac(C.d.al(d*255),0,255)
return t},
z9:function(a,b){if(b){if(typeof a!=="number")return a.aK()
return A.fV((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aK()
return A.fV((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vz:function(a){return A.z9(H.fn(a,16,new A.rs()),a.length>=8)},
dG:function dG(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rs:function rs(){},
wF:function(){if($.wD)return
$.wD=!0
Z.zH()},
e6:function(a,b,c,d){var t=0,s=P.bq(),r,q,p,o,n
var $async$e6=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.wF()
t=$.$get$cT().V(0,a)?3:5
break
case 3:q=$.$get$cT().n(0,a)
p=J.aG(q)
if(!!p.$isdO){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cA(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.A(J.vm(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uh==null?8:9
break
case 8:t=10
return P.cu(A.n1(),$async$e6)
case 10:case 9:n=$.uh.ew(a)
t=n!=null?11:12
break
case 11:t=13
return P.cu(A.mX(n),$async$e6)
case 13:if(!$.$get$cT().V(0,a))$.$get$cT().i(0,a,new Y.dO(a,null,H.a([],[[P.eZ,,]]),[null]))
r=$.$get$cT().n(0,a).b
t=1
break
case 12:case 7:r=A.F8(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$e6,s)},
n1:function(){var t=0,s=P.bq(),r
var $async$n1=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cu(A.e6("manifest/manifest.txt",!1,!0,$.vS),$async$n1)
case 2:r.uh=b
return P.bs(null,s)}})
return P.bt($async$n1,s)},
F7:function(a){if(!$.$get$cT().V(0,a))$.$get$cT().i(0,a,new Y.dO(a,null,H.a([],[[P.eZ,,]]),[null]))
return $.$get$cT().n(0,a)},
F8:function(a,b,c){var t
if($.$get$cT().V(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vR(C.b.gbc(a.split("."))).a
t=A.F7(a)
c.b3(A.wC(a,!1)).b4(new A.n_(t))
return t.cA(0)},
mX:function(a){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mX=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cu(A.e6(a+".bundle",!1,!0,null),$async$mX)
case 3:q=a0
p=C.c.M(a,0,C.c.ea(a,$.$get$wE()))
o=P.d6
n=new P.dY(new P.bj(0,$.aC,null,[o]),[o])
m=H.a([],[P.cE])
for(o=J.yf(q),l=o.length,k=[[P.eZ,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bV)(o),++i){h=o[i]
g=J.b7(h)
f=Z.vR(C.b.gbc(J.e0(g.gK(h),"."))).a
e=p+"/"+H.A(g.gK(h))
if($.$get$cT().V(0,e)){m.push(A.e6(e,!1,!1,null))
continue}d=H.eQ(g.gbe(h),"$isdc")
if(!$.$get$cT().V(0,e))$.$get$cT().i(0,e,new Y.dO(e,null,H.a([],k),j))
c=$.$get$cT().n(0,e)
m.push(c.cA(0))
f.bb(d.buffer).b4(new A.mY(f,c))}P.zR(m,null,!1).b4(new A.mZ(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mX,s)},
hx:function(a,b){var t=0,s=P.bq(),r,q,p,o,n
var $async$hx=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$ug().V(0,a)){r=$.$get$ug().n(0,a)
t=1
break}q=W.fq
p=new P.bj(0,$.aC,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eb(n,"load",new A.n0(new P.dY(p,[q]),n),!1,W.U)
n.src=A.wC(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$hx,s)},
wC:function(a,b){if(C.c.ah(a,"/")){a=C.c.ai(a,1)
b=!0}else b=!1
if(b)return H.A(window.location.protocol)+"//"+H.A(window.location.host)+"/"+a
return C.c.au("../",N.uw())+a},
n_:function n_(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
mZ:function mZ(a){this.a=a},
n0:function n0(a,b){this.a=a
this.b=b},
nE:function nE(){},
jE:function jE(){},
hM:function hM(a,b){this.a=a
this.b=b},
rA:function(){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rA=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xU){t=1
break}$.xU=!0
D.Gi()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.ac
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$c().h(0,o)
$.ba=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.aO=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.c4=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.N=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.b3=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bX=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bg=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.I
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.ch=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.b6=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.aF=o
o=H.a(["legendary"],p)
n=$.mA
H.a([],p)
o=new G.bI(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mA
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$c().h(0,o)
$.EP=o
o=$.K
H.a([],p)
o=new G.aY(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aJ=o
o=$.u1
H.a([],p)
o=new G.aY(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b_=o
o=$.u1
H.a([],p)
o=new G.aY(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aY(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bk=o
o=$.I
H.a([],p)
o=new G.aY(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.bY=o
o=$.K
H.a([],p)
o=new G.aY(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b4=o
o=$.K
H.a([],p)
o=new G.aY(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bE=o
o=$.K
H.a([],p)
o=new G.aY(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aY(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.r
H.a([],p)
o=new G.aY(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bo=o
o=$.r
H.a([],p)
o=new G.aY(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.r
H.a([],p)
o=new G.aY(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bh=o
o=$.K
H.a([],p)
o=new G.aY(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bd=o
o=$.K
H.a([],p)
o=new G.aY(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aD=o
o=$.K
H.a([],p)
o=new G.aY(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.as=o
o=$.K
H.a([],p)
o=new G.aY(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.ay=o
o=$.K
H.a([],p)
o=new G.aY(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.a0=o
o=$.I
H.a([],p)
o=new G.aY(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aY(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aP=o
o=$.K
H.a([],p)
o=new G.aY(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b9=o
o=$.K
H.a([],p)
o=new G.aY(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bn=o
o=$.K
H.a([],p)
o=new G.aY(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.mA
H.a([],p)
o=new G.aY(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.H=o
o=$.mA
H.a([],p)
o=new G.aY(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.P=o
o=$.K
H.a([],p)
o=new G.aY(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aL=o
o=$.r
H.a([],p)
o=new G.aY(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.b0=o
o=$.K
H.a([],p)
o=new G.aY(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aM=o
o=$.K
H.a([],p)
o=new G.aY(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aY(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bL=o
o=$.K
H.a([],p)
o=new G.aY(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bl=o
o=$.K
H.a([],p)
o=new G.aY(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cc=o
o=$.K
H.a([],p)
o=new G.aY(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aE=o
o=$.K
H.a([],p)
o=new G.aY(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ab=o
o=$.r
H.a([],p)
o=new G.aY(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.b1=o
o=$.K
H.a([],p)
o=new G.aY(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a7=o
o=$.K
H.a([],p)
o=new G.aY(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aT=o
o=$.K
H.a([],p)
o=new G.aY(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aw=o
o=$.K
H.a([],p)
o=new G.aY(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.at(n,o,0.1)
$.$get$c().h(0,o)
$.fd=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ep=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tM=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tX=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tT=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hp=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wm=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.eo=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wv=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tK=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.e5=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tQ=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wq=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wt=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wx=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.fe=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wi=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wl=o
o=H.a(["a book"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.aK=o
o=H.a(["a broom"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jm=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jn=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ww=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wu=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tR=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tJ=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,1.3)
$.$get$c().h(0,o)
$.tS=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wr=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wo=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.di=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ho=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.u_=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wp=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tZ=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tU=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tW=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mx=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hn=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wn=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.I
m=G.V
l=[m]
k=H.a([$.D,$.aJ,$.aZ],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a([],p)
n=$.w
k=H.a([$.ab,$.aJ],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["fossilized"],p)
n=$.I
k=H.a([$.ba,$.aF],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["adamantium"],p)
n=$.I
k=H.a([$.ba,$.D],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.w_=o
o=H.a([],p)
n=$.w
k=H.a([$.b8,$.aM],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.Q,$.W],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.Q,$.D],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.N,$.D],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.ch,$.aO],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.W,$.N],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jo=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.D,$.bg],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["rotting","zombie"],p)
n=$.I
k=H.a([$.bS,$.bg],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["draugr","white walker"],p)
n=$.I
k=H.a([$.bS,$.bg,$.bl],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Ultraviolet"],p)
n=$.u0
k=H.a([$.b_,$.az],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Ultraviolence"],p)
n=$.r
k=H.a([$.b_,$.az,$.aJ],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a([],p)
n=$.r
k=H.a([$.aN,$.bE],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.aD,$.b3],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.aD,$.Q],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.aD,$.c4],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.aD,$.ba],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.ba,$.bQ],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.aF,$.b3,$.bg],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["arsenic","antifreeze"],p)
n=$.r
k=H.a([$.aD,$.bL],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.aF,$.b3],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.mr=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aL,$.aP,$.b9,$.a0,$.as,$.bE,$.a3],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b4,$.az,$.aJ,$.a_,$.aN,$.a0,$.as,$.ay],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.bS,$.b0,$.ay,$.b9],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b4,$.ay],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.ba,$.aJ,$.aZ],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bE,$.ch],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.tV=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.I
k=H.a([$.aZ,$.W],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aZ,$.b1,$.W],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.W,$.aJ],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.aw,$.ay],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.tO=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.bh,$.Q],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aZ,$.bh,$.D,$.Q],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aZ,$.ab],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b8,$.bd],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["SBAHJ"],p)
n=$.r
k=H.a([$.bR,$.ay],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aZ,$.b1],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bl,$.ay,$.aJ],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["light saber"],p)
n=$.r
k=H.a([$.b_,$.aE,$.aJ],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.a3,$.aw],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.a3,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.b4,$.aN,$.ba],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["green sun"],p)
n=$.u1
k=H.a([$.aE,$.bY,$.b_],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.ms=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.u0
k=H.a([$.az,$.as],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.a3,$.b_],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aJ,$.az,$.ay],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.r
k=H.a([$.bY,$.bo],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["living"],p)
n=$.I
k=H.a([$.ba,$.bg,$.aA],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["dead","corpse","deceased"],p)
n=$.I
k=H.a([$.ba,$.bg],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["taser"],p)
n=$.r
k=H.a([$.a2,$.bh,$.b1],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["nocturn"],p)
n=$.r
k=H.a([$.az,$.a7],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["dirge"],p)
n=$.r
k=H.a([$.aN,$.a7],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.as,$.bd],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.ab,$.a7],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aJ,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.as,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Bach's"],p)
n=$.ac
k=H.a([$.a0,$.a7],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Mozart's"],p)
n=$.ac
k=H.a([$.a3,$.a7],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ac
k=H.a([$.a0,$.bY],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Feynman's"],p)
n=$.ac
k=H.a([$.a0,$.b9],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Ziptie"],p)
n=$.ac
k=H.a([$.aO,$.bh],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.r
k=H.a([$.D,$.a0],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hq=o
o=H.a(["Sassacre"],p)
n=$.ac
k=H.a([$.cc,$.b9],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Sledge"],p)
n=$.r
k=H.a([$.ab,$.cc],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Legal"],p)
n=$.r
k=H.a([$.bh,$.N],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mv=o
o=H.a(["Clown"],p)
n=$.r
k=H.a([$.b9,$.aT],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aE,$.aP],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.N,$.aD],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["anvil"],p)
n=$.r
k=H.a([$.ab,$.cc,$.D],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["flashbang"],p)
n=$.r
k=H.a([$.b_,$.bo],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["smokebomb"],p)
n=$.r
k=H.a([$.az,$.bo],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["ninja"],p)
n=$.r
k=H.a([$.az,$.aJ],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["techno"],p)
n=$.r
k=H.a([$.a2,$.a7],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["rock and roll"],p)
n=$.r
k=H.a([$.aF,$.a7],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.aA,$.bg,$.b1],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["juggalo"],p)
n=$.r
k=H.a([$.b9,$.a7,$.aT,$.b4],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.ay,$.a2],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.ab,$.ay,$.bR],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aE,$.aD],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bl,$.aD],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bl,$.aD,$.aJ],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bl,$.aZ],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.ay,$.aD],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["vaporwave"],p)
n=$.r
k=H.a([$.az,$.a7,$.ay,$.a2],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.W,$.ab],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["fidget"],p)
n=$.r
k=H.a([$.aO,$.ay],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.D,$.N,$.bd],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.aD,$.bd],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.bY,$.ay],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aF,$.a7,$.aL],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.D,$.a7,$.aL],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.a3,$.aL],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.D,$.aL],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.bd,$.aL,$.as],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fc=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.bd,$.a7,$.as],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.bd,$.bl],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.we=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aE,$.bl],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.ay,$.bl],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["winter's","season's"],p)
n=$.ac
k=H.a([$.bk,$.bl],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ac
k=H.a([$.a3,$.bl],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Santa Saws"],p)
n=$.ac
k=H.a([$.a3,$.bl,$.aJ],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Santa Sleighs"],p)
n=$.ac
k=H.a([$.hp,$.aJ],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Santa Claws"],p)
n=$.ac
k=H.a([$.hp,$.mq],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Sandy Claws"],p)
n=$.ac
k=H.a([$.hp,$.mq,$.aF],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Silent Night"],p)
n=$.ac
k=H.a([$.hp,$.az],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ac
k=H.a([$.b4,$.bX],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.bg,$.bY,$.bS],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["skate","skateboard"],p)
n=$.r
k=H.a([$.ay,$.D],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["microwave"],p)
n=$.r
k=H.a([$.bY,$.a2,$.aD],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["orbital"],p)
n=$.r
k=H.a([$.bY,$.a2,$.aD,$.b1],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a([],p)
n=$.r
k=H.a([$.ab,$.a0],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.bY,$.aF],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["mousepad","jar opener"],p)
n=$.r
k=H.a([$.N,$.c4],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aJ,$.aF],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aZ,$.aF],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["picnic"],p)
n=$.r
k=H.a([$.aO,$.aZ],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.ay,$.bo],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["lawn"],p)
n=$.r
k=H.a([$.aO,$.b8],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.Q,$.b8],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.bg,$.b8],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.tP=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.ch,$.b8],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.ab,$.aP],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.aL,$.bQ],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.jp=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bd,$.bQ],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["n1nj4","katana"],p)
n=$.r
k=H.a([$.ay,$.aJ],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aP,$.aD],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aP,$.aD,$.N,$.D],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.ay,$.N],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.a3,$.D],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.ab,$.D],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.cc,$.D],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.wj=o
o=H.a(["satire","parody","onion"],p)
n=$.r
k=H.a([$.aw,$.b9],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.bd,$.b9],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.as,$.b9],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b8,$.aw],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["stradivarius"],p)
n=$.ac
k=H.a([$.as,$.bd,$.W,$.a7],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.a0,$.aw],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["AI"],p)
n=$.r
k=H.a([$.a2,$.aA],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["robotic"],p)
n=$.I
k=H.a([$.D,$.a2,$.aA],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tY=o
o=H.a(["shrapnel"],p)
n=$.r
k=H.a([$.W,$.bo],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["vocaloid"],p)
n=$.r
k=H.a([$.aA,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["*Hyun-ae"],p)
n=$.ac
k=H.a([$.aA,$.a2,$.aP],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["buckshot"],p)
n=$.r
k=H.a([$.W,$.b1],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["cannon"],p)
n=$.r
k=H.a([$.cc,$.b1],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["stationary"],p)
n=$.r
k=H.a([$.as,$.N],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a([],p)
n=$.r
k=H.a([$.aK,$.N],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a([],p)
n=$.r
k=H.a([$.D,$.b1],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["papercut"],p)
n=$.r
k=H.a([$.aJ,$.N],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["squeaky"],p)
n=$.I
k=H.a([$.ab,$.c4],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["kazoo"],p)
n=$.r
k=H.a([$.aw,$.a7],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["bandaid"],p)
n=$.r
k=H.a([$.b0,$.N],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["gushers"],p)
n=$.r
k=H.a([$.b0,$.aD],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["medic"],p)
n=$.r
k=H.a([$.b0,$.b1],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["sick nasty","ill"],p)
n=$.I
k=H.a([$.ay,$.bL],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.D,$.W],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["charging","power cord"],p)
n=$.r
k=H.a([$.aO,$.a2],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.c4,$.aJ],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.aO,$.aJ],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aT,$.a2],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aT,$.a2,$.a0],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["mirrored","reflective"],p)
n=$.r
k=H.a([$.b3,$.D],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.mw=o
o=H.a(["far seeing","sighted"],p)
n=$.r
k=H.a([$.b3,$.aF,$.a3],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["disabling","non lethal"],p)
n=$.r
k=H.a([$.c4,$.b1],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["fashionable"],p)
n=$.r
k=H.a([$.aL,$.as],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b9,$.ay],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bR,$.b9],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mu=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.aw,$.ay,$.as],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bS,$.aT,$.b4],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.r
k=H.a([$.b1,$.ay,$.as],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.D,$.bd],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.tL=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b_,$.D],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.my=o
o=H.a(["horseshoe"],p)
n=$.r
k=H.a([$.bE,$.D],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.tN=o
o=H.a(["felt"],p)
n=$.r
k=H.a([$.Q,$.ch],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aF,$.as],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.wk=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aF,$.cc],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["glitched"],p)
n=$.I
k=H.a([$.bm,$.a2],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["debugging"],p)
n=$.r
k=H.a([$.b0,$.a2],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.r
k=H.a([$.D,$.aT,$.a7],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aA,$.aw],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Imitation"],p)
n=$.r
k=H.a([$.aD,$.aw],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Placebo"],p)
n=$.r
k=H.a([$.b0,$.aw],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["counterfeit"],p)
n=$.r
k=H.a([$.bd,$.aw],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.ay,$.aM,$.b9],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.a0,$.bg],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Incendiary"],p)
n=$.r
k=H.a([$.aE,$.bo],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bo,$.aO],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["fae"],p)
n=$.r
k=H.a([$.a3,$.b_,$.bm],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.D,$.bY],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.D,$.a2],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.D,$.aE],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.aF,$.aE],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Rusty"],p)
n=$.I
k=H.a([$.D,$.bR],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["Fonzie"],p)
n=$.r
k=H.a([$.aJ,$.ay,$.as],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Romcom"],p)
n=$.r
k=H.a([$.aP,$.b9],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["Alluring"],p)
n=$.r
k=H.a([$.aL,$.b_],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["Masquerade"],p)
n=$.r
k=H.a([$.aL,$.az],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.r
k=H.a([$.aF,$.bg],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Psionic"],p)
n=$.r
k=H.a([$.a3,$.a0],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Dwarven"],p)
n=$.r
k=H.a([$.a3,$.aF],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.a3,$.aA],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aD,$.as],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b3,$.aL,$.bd],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Gauze"],p)
n=$.r
k=H.a([$.b0,$.Q],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Locked"],p)
n=$.I
k=H.a([$.bh,$.bn],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Etched"],p)
n=$.r
k=H.a([$.aF,$.N],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.N,$.b6],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["film"],p)
n=$.r
k=H.a([$.N,$.aO],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.bm,$.bn,$.bS],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Lottery"],p)
n=$.r
k=H.a([$.N,$.bE],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Blindfolded"],p)
n=$.r
k=H.a([$.az,$.Q],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["Possessed"],p)
n=$.I
k=H.a([$.bX,$.bg],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bX,$.aE],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.r
k=H.a([$.W,$.aW,$.tU,$.aA],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.bg,$.bm],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Ashen"],p)
n=$.r
k=H.a([$.aP,$.aN],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Pale"],p)
n=$.r
k=H.a([$.aP,$.bk],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Pitch"],p)
n=$.r
k=H.a([$.aP,$.bn],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.ay,$.aE],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Hypnotizing"],p)
n=$.r
k=H.a([$.a3,$.bk],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Tranquilizing"],p)
n=$.r
k=H.a([$.bk,$.bh],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a([],p)
n=$.r
k=H.a([$.bk,$.bn],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Ghost Rider's"],p)
n=$.ac
k=H.a([$.ho,$.aE,$.bX],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.a0,$.bl],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Duelist's"],p)
n=$.ac
k=H.a([$.b1,$.as],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Silenced"],p)
n=$.I
k=H.a([$.b1,$.az],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.ws=o
o=H.a(["Deudly"],p)
n=$.I
k=H.a([$.b1,$.bR],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Screaming"],p)
n=$.I
k=H.a([$.aT,$.b4],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bS,$.a7],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bS,$.aL],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.aW,$.bd],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["BroodFester"],p)
n=$.r
k=H.a([$.aA,$.b4,$.bm,$.a3],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["[REDACTED]"],p)
n=$.r
k=H.a([$.bm,$.az],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Pop Rocks"],p)
n=$.r
k=H.a([$.aD,$.bo],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Disguised"],p)
n=$.I
k=H.a([$.az,$.aw],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Haunted"],p)
n=$.I
k=H.a([$.aM,$.bX],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Cognitohazardous"],p)
n=$.I
k=H.a([$.bm,$.a0],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["Staticy"],p)
n=$.I
k=H.a([$.aM,$.a2],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Jadite"],p)
n=$.r
k=H.a([$.b3,$.bY],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["Tickling"],p)
n=$.r
k=H.a([$.b9,$.aM],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Composite"],p)
n=$.r
k=H.a([$.D,$.bQ],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["High-Powered"],p)
n=$.I
k=H.a([$.bo,$.b1],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Concussive"],p)
n=$.r
k=H.a([$.bo,$.ab],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b8,$.bz],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aM,$.aZ],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.r
k=H.a([$.aM,$.az,$.a2],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aZ,$.aJ],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.Q,$.a0],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Clanging"],p)
n=$.r
k=H.a([$.D,$.aT],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.D,$.as],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Withered"],p)
n=$.I
k=H.a([$.aN,$.b6],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Shattered"],p)
n=$.I
k=H.a([$.b3,$.bR],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Miner's"],p)
n=$.ac
k=H.a([$.aF,$.D],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Singing"],p)
n=$.r
k=H.a([$.a7,$.aA],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Mitochondrial"],p)
n=$.r
k=H.a([$.bg,$.a2],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["Blackout","EMP"],p)
n=$.r
k=H.a([$.az,$.a2],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.aF,$.bL],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bL,$.D],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.Q,$.ab],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b6,$.Q],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.r
k=H.a([$.bn,$.b_],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b_,$.a0],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.bn,$.a0],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Poached"],p)
n=$.I
k=H.a([$.bg,$.bd],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.Q,$.aL],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.Q,$.aM],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bE,$.ba],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Rattling"],p)
n=$.I
k=H.a([$.aT,$.ba],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.a0,$.ba],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b9,$.ba],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Massage"],p)
n=$.r
k=H.a([$.b0,$.b8],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aT,$.bn],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Shockwave"],p)
n=$.r
k=H.a([$.aT,$.bo],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Antivenom"],p)
n=$.r
k=H.a([$.bL,$.b0],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.aE,$.a3],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.Q,$.b3],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.ba,$.b4],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Enchanted"],p)
n=$.I
k=H.a([$.a3,$.bE],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Berserker's"],p)
n=$.ac
k=H.a([$.a3,$.bn],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Clerical"],p)
n=$.ac
k=H.a([$.a3,$.b0],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Cauterizing"],p)
n=$.r
k=H.a([$.b0,$.aE],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["X-Ray"],p)
n=$.r
k=H.a([$.bY,$.b_],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.a0,$.bE],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Fireplace"],p)
n=$.r
k=H.a([$.b8,$.aE],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Crackling"],p)
n=$.I
k=H.a([$.aT,$.aE],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Thumping"],p)
n=$.I
k=H.a([$.aT,$.cc],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Shrieking","Banshee"],p)
n=$.I
k=H.a([$.bX,$.aT],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b9,$.bm],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Aloe","Willowbark"],p)
n=$.r
k=H.a([$.b0,$.b6],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["Rose"],p)
n=$.r
k=H.a([$.aP,$.b6],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Knock Knock"],p)
n=$.r
k=H.a([$.b9,$.ab],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Lifesteal"],p)
n=$.r
k=H.a([$.a3,$.bL],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["Tragic"],p)
n=$.r
k=H.a([$.aL,$.aN],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Slapstick"],p)
n=$.r
k=H.a([$.aJ,$.b9],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Gross Out"],p)
n=$.r
k=H.a([$.bS,$.b9],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.aL,$.b6],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bL,$.b6],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.I
k=H.a([$.a3,$.bz],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["Forbidden Fruit"],p)
n=$.r
k=H.a([$.b6,$.aD,$.aN],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bh,$.aA],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.bn,$.aA],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["Hypothermic"],p)
n=$.I
k=H.a([$.aN,$.bl],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Hyperthermic"],p)
n=$.I
k=H.a([$.aN,$.aE],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Shackled"],p)
n=$.I
k=H.a([$.bh,$.cc],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.a0,$.aP],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b_,$.a0,$.b3,$.a2],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.W,$.aN],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bX,$.a3],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.aE,$.bz],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Tattered"],p)
n=$.I
k=H.a([$.Q,$.aN],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["Woodwind","Reed"],p)
n=$.r
k=H.a([$.a7,$.W],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Bone Hurting"],p)
n=$.r
k=H.a([$.aM,$.ba],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["Bone Healing:"],p)
n=$.r
k=H.a([$.b0,$.ba],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.ba,$.b0,$.aD],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.Q,$.aE],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bQ,$.b6],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.D,$.aD],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Diseased"],p)
n=$.I
k=H.a([$.aN,$.bg],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aZ,$.ch],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Fanged"],p)
n=$.I
k=H.a([$.ba,$.aZ],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.aF,$.az],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b3,$.az],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b3,$.W],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b3,$.aO],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Ceramic Wrap"],p)
n=$.r
k=H.a([$.bQ,$.N],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b6,$.bS],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Thorny"],p)
n=$.I
k=H.a([$.b6,$.aZ],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["Bulbed"],p)
n=$.I
k=H.a([$.b6,$.ab],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Glass Cannon"],p)
n=$.r
k=H.a([$.b3,$.b1],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Caoutchouc"],p)
n=$.r
k=H.a([$.b6,$.c4],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b6,$.aO],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Horrorcore"],p)
n=$.r
k=H.a([$.a7,$.b4],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Nightcore"],p)
n=$.r
k=H.a([$.bm,$.a7],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Crazy Bus"],p)
n=$.r
k=H.a([$.bm,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b6,$.ch],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Necrotic"],p)
n=$.I
k=H.a([$.ba,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.ba,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.I
k=H.a([$.ba,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.r
k=H.a([$.ba,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.ba,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.r
k=H.a([$.ba,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.W,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.W,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.W,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.I
k=H.a([$.W,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.W,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.W,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.r
k=H.a([$.W,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.W,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.r
k=H.a([$.W,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.r
k=H.a([$.W,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ac
k=H.a([$.W,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.W,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.W,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.W,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.r
k=H.a([$.W,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.aO,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.r
k=H.a([$.N,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
k=H.a([$.N,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.r
k=H.a([$.N,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.r
k=H.a([$.Q,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.aF,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.r
k=H.a([$.aF,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.aF,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.aF,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.aF,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.aF,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.aF,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.aF,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.I
k=H.a([$.aF,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.I
k=H.a([$.a0,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.I
k=H.a([$.Q,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.r
k=H.a([$.Q,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.r
k=H.a([$.Q,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.r
k=H.a([$.Q,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.Q,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.I
k=H.a([$.Q,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.Q,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.Q,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.Q,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.Q,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.r
k=H.a([$.Q,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.Q,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.Q,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.Q,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.Q,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.Q,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.Q,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.Q,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ac
k=H.a([$.a0,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.a3,$.W],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b6,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.aO,$.W],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.P,$.H],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.a0,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.aw,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.bm,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.r
k=H.a([$.bm,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ac
k=H.a([$.bm,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ac
k=H.a([$.a_,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ac
k=H.a([$.a0,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.a_,$.aO,$.bk,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.r
k=H.a([$.a_,$.di,$.W,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ac
k=H.a([$.az,$.a3,$.aW,$.aM,$.b4],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Kingly"],p)
n=$.ac
k=H.a([$.b4,$.ab,$.cc,$.a3,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Jack"],p)
n=$.ac
k=H.a([$.aZ,$.aJ,$.D,$.az],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Codpiece","Codtier"],p)
n=$.r
k=H.a([$.a_,$.aw,$.W,$.P,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.r
k=H.a([$.a_,$.aK,$.N,$.D,$.a0,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.r
k=H.a([$.a_,$.aK,$.N,$.a0,$.P,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.r
k=H.a([$.a_,$.aN,$.N,$.a0,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ac
k=H.a([$.a_,$.b_,$.D,$.aZ,$.aJ,$.ep],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ac
k=H.a([$.a_,$.N,$.bn,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ac
k=H.a([$.a_,$.a3,$.Q,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ac
k=H.a([$.a_,$.aM,$.ba,$.D,$.fe,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ac
k=H.a([$.a_,$.aF,$.as,$.hn,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.I
k=H.a([$.a_,$.Q,$.bd,$.aL,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.r
k=H.a([$.a_,$.D,$.bd,$.aL,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.r
k=H.a([$.a_,$.aO,$.a2,$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.r
k=H.a([$.a_,$.Q,$.a0,$.a3,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.r
k=H.a([$.a_,$.Q,$.a0,$.aL,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.I
k=$.a_
j=$.N
i=$.a0
i=H.a([k,j,i,$.aK,i,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.a_,$.aL,$.bQ,$.ab,$.eo,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ac
i=H.a([$.a_,$.aK,$.N,$.bn,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ac
i=H.a([$.a3,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.r
i=H.a([$.N,$.a0,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.r
i=H.a([$.a_,$.D,$.az,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.I
i=H.a([$.a_,$.D,$.b3,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.r
i=H.a([$.a_,$.aw,$.W,$.ay,$.bk,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.r
i=H.a([$.a_,$.aE,$.D,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.r
i=H.a([$.a_,$.a2,$.N,$.aK,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.r
i=H.a([$.a_,$.W,$.aA,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ac
i=H.a([$.a_,$.aW,$.bz,$.b_,$.a7,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.a_,$.b0,$.b3,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.a_,$.b_,$.bE,$.aF,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ac
i=H.a([$.a_,$.aM,$.aF,$.as,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ac
i=H.a([$.a_,$.aD,$.bn,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ac
i=H.a([$.a_,$.D,$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.a_,$.b3,$.bY,$.b_,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.D,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ac
i=H.a([$.D,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.D,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.D,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.I
i=H.a([$.D,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.I
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.D,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bQ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bQ,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bQ,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bQ,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bQ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bQ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.I
i=H.a([$.bQ,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bQ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.I
i=H.a([$.bQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bR,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.I
i=H.a([$.bR,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.I
i=H.a([$.bR,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bR,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.I
i=H.a([$.bR,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ac
i=H.a([$.bR,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bR,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bR,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bR,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ac
i=H.a([$.W,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.W,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.W,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.aO,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.r
i=H.a([$.c4,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.I
i=H.a([$.c4,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.r
i=H.a([$.c4,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.r
i=H.a([$.N,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.r
i=H.a([$.N,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.w
i=H.a([$.aF,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.aF,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aF,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bX,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bX,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bX,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bX,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bX,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bX,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bX,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.bg,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.bg,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.bg,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.I
i=H.a([$.bg,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.r
i=H.a([$.bm,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.bm,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.I
i=H.a([$.bm,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.r
i=H.a([$.bm,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.I
i=H.a([$.ch,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.ch,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ac
i=H.a([$.ch,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.ch,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b6,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.I
i=H.a([$.b6,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b6,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b6,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b6,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b6,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b6,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.I
i=H.a([$.b6,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.I
i=H.a([$.bz,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bz,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bz,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bz,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bz,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bz,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bz,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.u0
i=H.a([$.bz,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.I
i=H.a([$.bz,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bS,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.r
i=H.a([$.aJ,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.r
i=H.a([$.aJ,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b4,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.r
i=H.a([$.b0,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aD,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.aD,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aD,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.r
i=H.a([$.cc,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.r
i=H.a([$.cc,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.r
i=H.a([$.b1,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.r
i=H.a([$.b1,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ac
i=H.a([$.b1,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ac
i=H.a([$.b1,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.I
i=H.a([$.b1,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.I
i=H.a([$.b1,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ac
i=H.a([$.b1,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.r
i=H.a([$.b1,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.r
i=H.a([$.b1,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.r
i=H.a([$.b1,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.I
i=H.a([$.b1,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b_,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.a7,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bE,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bE,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ac
i=H.a([$.bE,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ac
i=H.a([$.b_,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.I
i=H.a([$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b_,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.I
i=H.a([$.b_,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ac
i=H.a([$.az,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.r
i=H.a([$.az,$.a3,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.I
i=H.a([$.az,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.az,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.r
i=H.a([$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ac
i=H.a([$.az,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ac
i=H.a([$.bk,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.r
i=H.a([$.bk,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.r
i=H.a([$.bk,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.r
i=H.a([$.b0,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.I
i=H.a([$.bL,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.I
i=H.a([$.aN,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.r
i=H.a([$.aN,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.I
i=H.a([$.a2,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.r
i=H.a([$.aN,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.I
i=H.a([$.aN,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aN,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.r
i=H.a([$.bo,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.r
i=H.a([$.bo,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.r
i=H.a([$.bo,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.r
i=H.a([$.aN,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.r
i=H.a([$.bo,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.r
i=H.a([$.a2,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.r
i=H.a([$.bo,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.r
i=H.a([$.bo,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.I
i=H.a([$.bo,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.r
i=H.a([$.bo,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.r
i=H.a([$.bl,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.r
i=H.a([$.a3,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.I
i=H.a([$.a2,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.r
i=H.a([$.bn,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.r
i=H.a([$.bL,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.r
i=H.a([$.bL,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.r
i=H.a([$.bL,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.I
i=H.a([$.bL,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.I
i=H.a([$.bL,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.r
i=H.a([$.bL,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.I
i=H.a([$.a7,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.r
i=H.a([$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.r
i=H.a([$.a7,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.r
i=H.a([$.a7,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ac
i=H.a([$.a7,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.r
i=H.a([$.a7,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.r
i=H.a([$.a7,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.r
i=H.a([$.a7,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.r
i=H.a([$.a7,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.r
i=H.a([$.bn,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.r
i=H.a([$.bn,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ac
i=H.a([$.a0,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.r
i=H.a([$.bh,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.r
i=H.a([$.bh,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.r
i=H.a([$.bh,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.I
i=H.a([$.bh,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aL,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.I
i=H.a([$.b8,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.r
i=H.a([$.b8,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aD,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aP,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aP,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.I
i=H.a([$.aA,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.I
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.r
i=H.a([$.a0,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.r
i=H.a([$.aA,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ac
i=H.a([$.aP,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.I
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.I
i=H.a([$.aP,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.I
i=H.a([$.aP,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.I
i=H.a([$.aP,$.aT,$.aK,$.jn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.I
i=H.a([$.aD,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.I
i=H.a([$.aD,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.I
i=H.a([$.aD,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.I
i=H.a([$.a3,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.I
i=H.a([$.aD,$.b9,$.a2,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.D,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.r
i=H.a([$.ba,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.I
i=H.a([$.bR,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.r
i=H.a([$.W,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.r
i=H.a([$.aO,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.I
i=H.a([$.c4,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.N,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.I
i=H.a([$.N,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ac
i=H.a([$.b3,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.I
i=H.a([$.bg,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.I
i=H.a([$.aE,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aP,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ac
i=H.a([$.b6,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.I
i=H.a([$.b0,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ac
i=H.a([$.bE,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.I
i=H.a([$.az,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.I
i=H.a([$.aE,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.I
i=H.a([$.aE,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.I
i=H.a([$.aE,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.I
i=H.a([$.aN,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.I
i=H.a([$.bd,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.I
i=H.a([$.bd,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.I
i=H.a([$.bd,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.I
i=H.a([$.aM,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.I
i=H.a([$.aT,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.I
i=H.a([$.aP,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.I
i=H.a([$.a3,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW,$.aw,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW,$.ch],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.I
i=H.a([$.aF,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.I
i=H.a([$.bz,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.I
i=H.a([$.b6,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.I
i=H.a([$.a3,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.I
i=H.a([$.b4,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.I
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.wW==null){o=$.mq
n=$.aZ
l=$.aJ
k=$.ba
j=new U.au(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a5(null,null,null,m),0,3)
j.N("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wW=j}o=$.$get$aB();(o&&C.b).sm(o,0)
o=$.$get$aB()
n=$.Q
l=$.wd
k=new U.au(n,null,null,null,"Speedo",!1,P.a5(null,null,null,m),0,3)
k.N("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aB()
o=$.ep
n=$.aJ
l=$.D
j=$.aZ
i=new U.au(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a5(null,null,null,m),0,3)
i.N("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.tM
o=$.ab
j=$.D
l=new U.au(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a5(null,null,null,m),0,3)
l.N("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aB()
i=$.tX
k=$.b1
j=$.D
o=new U.au(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a5(null,null,null,m),0,3)
o.N("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aB()
l=$.tT
i=$.b1
j=$.D
k=new U.au(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a5(null,null,null,m),0,3)
k.N("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aB()
o=$.wo
l=$.b1
j=$.D
i=new U.au(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a5(null,null,null,m),0,3)
i.N("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.w0
o=$.aZ
j=$.aJ
l=$.D
n=new U.au(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a5(null,null,null,m),0,3)
n.N("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aB()
i=$.tI
k=$.aZ
l=$.aJ
j=$.D
o=new U.au(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a5(null,null,null,m),0,3)
o.N("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.hp
i=$.ab
j=$.bQ
l=new U.au(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a5(null,null,null,m),0,3)
l.N("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.wr
n=$.aJ
j=$.D
i=new U.au(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a5(null,null,null,m),0,3)
i.N("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aB()
l=$.w3
o=$.aJ
j=$.D
n=new U.au(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a5(null,null,null,m),0,3)
n.N("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aB()
i=$.wa
l=$.aZ
j=$.D
o=new U.au(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a5(null,null,null,m),0,3)
o.N("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.tS
i=$.bz
j=$.bm
l=new U.au(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a5(null,null,null,m),0,3)
l.N("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.eo
n=$.cc
j=$.aF
i=$.ab
k=new U.au(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a5(null,null,null,m),0,3)
k.N("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tJ
o=$.aO
i=$.bE
j=new U.au(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a5(null,null,null,m),0,3)
j.N("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aB()
k=$.tR
l=$.D
i=$.aZ
o=new U.au(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a5(null,null,null,m),0,3)
o.N("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aB()
j=$.wu
k=$.W
i=$.ab
l=new U.au(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a5(null,null,null,m),0,3)
l.N("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aB()
o=$.ww
j=$.bh
i=$.Q
k=new U.au(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a5(null,null,null,m),0,3)
k.N("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tF
o=$.b1
i=$.aF
j=$.Q
n=$.aZ
h=new U.au(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a5(null,null,null,m),0,3)
h.N("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aB()
k=$.jn
l=$.W
n=$.ab
j=new U.au(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a5(null,null,null,m),0,3)
j.N("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aB()
h=$.jm
k=$.W
n=new U.au(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a5(null,null,null,m),0,3)
n.N("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aB()
j=$.aK
h=$.N
k=$.ab
l=new U.au(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a5(null,null,null,m),0,3)
l.N("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aB()
n=$.wl
j=$.D
k=$.ab
h=new U.au(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a5(null,null,null,m),0,3)
h.N("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aB()
l=$.tD
n=$.aJ
k=$.D
j=$.ab
i=new U.au(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a5(null,null,null,m),0,3)
i.N("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wi
l=$.W
j=$.aZ
k=new U.au(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a5(null,null,null,m),0,3)
k.N("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.fe
h=$.D
j=$.ab
l=new U.au(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a5(null,null,null,m),0,3)
l.N("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.w2
i=$.W
j=$.ab
h=new U.au(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a5(null,null,null,m),0,3)
h.N("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wx
k=$.aO
j=$.ab
i=new U.au(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a5(null,null,null,m),0,3)
i.N("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wt
l=$.W
j=$.b1
k=new U.au(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a5(null,null,null,m),0,3)
k.N("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wq
h=$.D
j=$.aJ
l=new U.au(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a5(null,null,null,m),0,3)
l.N("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tQ
i=$.D
j=$.b1
h=new U.au(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a5(null,null,null,m),0,3)
h.N("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mt
k=$.D
j=$.bo
i=new U.au(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a5(null,null,null,m),0,3)
i.N("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.eo
l=$.c4
j=$.ab
k=new U.au(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a5(null,null,null,m),0,3)
k.N("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wv
h=$.D
j=$.aZ
l=new U.au(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a5(null,null,null,m),0,3)
l.N("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.mp
i=$.N
j=$.aJ
h=new U.au(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a5(null,null,null,m),0,3)
h.N("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.tK
k=$.D
j=$.ab
i=new U.au(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a5(null,null,null,m),0,3)
i.N("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.e5
l=$.b8
j=$.Q
k=new U.au(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a5(null,null,null,m),0,3)
k.N("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.ho
h=$.D
j=$.bh
l=new U.au(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a5(null,null,null,m),0,3)
l.N("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.u_
i=$.D
j=$.ab
h=new U.au(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a5(null,null,null,m),0,3)
h.N("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wp
k=$.D
j=$.ab
i=new U.au(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a5(null,null,null,m),0,3)
i.N("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.tZ
l=$.W
j=$.ab
k=new U.au(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a5(null,null,null,m),0,3)
k.N("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.tU
h=$.W
j=$.aN
l=new U.au(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a5(null,null,null,m),0,3)
l.N("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tW
i=$.D
j=$.aJ
h=new U.au(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a5(null,null,null,m),0,3)
h.N("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mx
k=$.D
j=$.a0
i=new U.au(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a5(null,null,null,m),0,3)
i.N("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.hn
l=$.aF
j=$.cc
k=new U.au(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a5(null,null,null,m),0,3)
k.N("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wc
h=$.W
j=$.ab
l=new U.au(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a5(null,null,null,m),0,3)
l.N("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.wh
i=$.D
j=$.aJ
h=new U.au(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a5(null,null,null,m),0,3)
h.N("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wn
k=$.D
j=$.aJ
i=new U.au(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a5(null,null,null,m),0,3)
i.N("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wm
l=$.D
j=$.cc
k=new U.au(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a5(null,null,null,m),0,3)
k.N("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.di
h=$.W
j=$.ab
m=new U.au(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a5(null,null,null,m),0,3)
m.N("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bO().push(m)
$.vL=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bO().push(m)
$.ts=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bO().push(m)
$.e2=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bO().push(m)
$.ek=m
m=new S.bH("Turtle","click",null,null)
$.$get$bO().push(m)
$.f5=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bO().push(m)
$.dM=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bO().push(m)
$.f3=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bO().push(m)
$.iv=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bO().push(m)
$.tl=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bO().push(m)
$.lH=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bO().push(m)
$.tu=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bO().push(m)
$.it=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bO().push(m)
$.vM=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bO().push(m)
$.lG=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bO().push(m)
$.lM=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bO().push(m)
$.vN=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bO().push(m)
$.iB=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bO().push(m)
$.iw=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bO().push(m)
$.ha=m
m=new S.ic("Prospitian","murmur",null,null)
$.$get$bO().push(m)
$.zC=m
m=new S.ic("Dersite","mutter",null,null)
$.$get$bO().push(m)
$.zz=m
m=new S.m8("Horror Terror","a;lkjdf",null,null)
$.$get$bO().push(m)
$.zB=m
$.zD=H.a([$.tu,$.it,$.vN,$.ts,$.ek,$.e2,$.f5,$.iv,$.tl,$.lH],[S.bH])
$.hg=new T.c5(0,"spices")
m=$.zF
$.f1=new T.c5(m,"fresh baked bread")
$.cx=new T.c5(m,"sweetness")
$.ca=new T.c5(m,"nature")
$.lL=new T.c5(0,"salt")
k=$.zE
$.d0=new T.c5(k,"rot")
$.zA=new T.c5(k,"feet")
$.em=new T.c5(0,"oil")
$.tn=new T.c5(0,"chlorine")
$.he=new T.c5(0,"nothing in particular")
$.ej=new T.c5(0,"gunpowder")
$.hd=new T.c5(0,"must")
$.cD=new T.c5(m,"zoo animals")
$.e3=new T.c5(k,"sweat")
$.iA=new T.c5(0,"ozone")
$.c9=new T.c5(0,"deceit")
$.cR=new T.c5(k,"blood")
$.f4=new T.c5(k,"smoke")
$.c2=new K.bW(k,"creepy")
$.b2=new K.bW(m,"calm")
$.cf=new K.bW(k,"frantic")
$.lI=new K.bW(0,"like nothing")
$.bP=new K.bW(m,"energizing")
$.cC=new K.bW(0,"studious")
$.dv=new K.bW(0,"dangerous")
$.dK=new K.bW(0,"glamorous")
$.hf=new K.bW(0,"romantic")
$.du=new K.bW(m,"creative")
$.iz=new K.bW(0,"lucky")
$.dw=new K.bW(0,"happy")
$.dL=new K.bW(0,"heroic")
$.d2=new K.bW(k,"stupid")
$.iz=new K.bW(0,"lucky")
$.to=new K.bW(0,"claustrophobic")
$.lJ=new K.bW(0,"overheated")
$.dJ=new K.bW(k,"confusing")
$.c8=new K.bW(0,"contemplatative")
$.cS=new M.bB(0,"clanking")
$.cw=new M.bB(0,"laughing")
$.bf=new M.bB(m,"rustling")
$.en=new M.bB(k,"screaming")
$.ix=new M.bB(k,"foot steps")
$.f2=new M.bB(k,"beeping")
$.vP=new M.bB(k,"whispering")
$.ei=new M.bB(0,"clacking")
$.cA=new M.bB(0,"applause")
$.el=new M.bB(0,"jazz")
$.tq=new M.bB(0,"disco")
$.hb=new M.bB(0,"drums")
$.hc=new M.bB(0,"echoing")
$.lK=new M.bB(k,"roaring")
$.iy=new M.bB(k,"gunfire")
$.cB=new M.bB(0,"music")
$.tt=new M.bB(0,"singing")
$.tm=new M.bB(0,"chanting")
$.f6=new M.bB(0,"whistling")
$.dh=new M.bB(m,"nature")
$.tp=new M.bB(0,"croaking")
$.d1=new M.bB(0,"silence")
$.tr=new M.bB(0,"pulsing")
$.vO=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.G,P.T]
n=A.Y
l=E.J
k=[l]
j=[A.fS]
m=new S.mM(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.t(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Knight",3,!0,!1,!1)
$.FV=m
m=P.f(H.a([new E.J($.c_,0.4,!1)],k),l)
i=H.a([],p)
m=new S.og(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.t(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Seer",6,!0,!1,!1)
$.G7=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kA("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.t(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Bard",9,!0,!1,!1)
$.FP=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m4("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.t(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Heir",8,!0,!1,!1)
$.FS=m
m=H.a([],p)
m=new U.n6(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.t(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Maid",0,!0,!1,!1)
$.FY=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o4(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.t(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Rogue",4,!0,!1,!1)
$.G2=m
m=H.a([],p)
m=new V.nD(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.t(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Page",1,!0,!1,!1)
$.G0=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pe(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.t(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Thief",7,!0,!1,!1)
$.Ga=m
m=P.f(H.a([new E.J($.c_,0.1,!1)],k),l)
i=H.a([],p)
m=new R.p_(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.t(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sylph",5,!0,!1,!1)
$.G9=m
m=H.a([],p)
m=new N.nX("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.t(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Prince",10,!0,!1,!1)
$.G1=m
m=P.f(H.a([new E.J($.c_,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pK("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.t(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Witch",11,!0,!1,!1)
$.Gc=m
m=P.f(H.a([new E.J($.c_,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n5("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.t(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Mage",2,!0,!1,!1)
$.FX=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.J($.c_,3,!1),new E.J($.oy,-2,!1)],k),l)
e=H.a([],p)
m=new E.pG("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.t(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Waste",12,!1,!1,!1)
$.Gb=m
m=H.a([],p)
m=new Y.oc("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.t(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scout",13,!1,!1,!1)
$.G5=m
m=P.f(H.a([new E.J($.c_,0.5,!1)],k),l)
i=H.a([],p)
m=new L.od("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.t(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scribe",15,!1,!1,!1)
$.G6=m
m=P.f(H.a([new E.J($.c_,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o9(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.t(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sage",14,!1,!1,!1)
$.G3=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m2("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.t(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Guide",16,!1,!1,!1)
$.FR=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.J($.c_,3,!1)],k),l)
g=H.a([],p)
m=new Y.m1(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.t(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Grace",17,!1,!1,!1)
$.FQ=m
m=P.f(H.a([new E.J($.c_,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nh("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.t(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Muse",18,!1,!1,!1)
$.FZ=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.F(null,null,n)
h=P.f(H.a([new E.J($.c_,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n3("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.t(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Lord",19,!1,!1,!1)
$.FW=m
m=P.f(H.a([new E.J($.c_,-0.1,!1),new E.J($.d9,1,!1)],k),l)
i=H.a([],p)
m=new Y.on("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.t(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Smith",20,!1,!1,!1)
$.G8=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.J($.c_,4,!1),new E.J($.oy,-3,!1)],k),l)
e=H.a([],p)
m=new X.mc("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.t(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Human",21,!1,!1,!0)
$.FT=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.J($.c_,41.3,!1),new E.J($.oy,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.md(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.t(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Hussie",22,!1,!0,!0)
$.FU=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.oa(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.t(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sans",23,!1,!0,!0)
$.G4=m
$.G_=T.FO("Null",255,!1,!0,!1)
m=A.dG
i=P.E
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#00ff00"),!0)
h.j(0,$.ai,L.d("#EFEFEF"),!0)
h.j(0,$.ah,L.d("#DEDEDE"),!0)
h.j(0,$.ar,L.d("#FF2106"),!0)
h.j(0,$.aq,L.d("#B01200"),!0)
h.j(0,$.ak,L.d("#2F2F30"),!0)
h.j(0,$.al,L.d("#1D1D1D"),!0)
h.j(0,$.aj,L.d("#080808"),!0)
h.j(0,$.ap,L.d("#030303"),!0)
h.j(0,$.ao,L.d("#242424"),!0)
h.j(0,$.an,L.d("#333333"),!0)
h.j(0,$.am,L.d("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.J($.d9,2,!0),new E.J($.dT,1,!0),new E.J($.da,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new N.or(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(0,"Space",!0,!1,!1)
$.yX=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff0000"),!0)
a.j(0,$.ai,L.d("#FF2106"),!0)
a.j(0,$.ah,L.d("#AD1604"),!0)
a.j(0,$.ar,L.d("#030303"),!0)
a.j(0,$.aq,L.d("#242424"),!0)
a.j(0,$.ak,L.d("#510606"),!0)
a.j(0,$.al,L.d("#3C0404"),!0)
a.j(0,$.aj,L.d("#1F0000"),!0)
a.j(0,$.ap,L.d("#B70D0E"),!0)
a.j(0,$.ao,L.d("#970203"),!0)
a.j(0,$.an,L.d("#8E1516"),!0)
a.j(0,$.am,L.d("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.J($.eB,2,!0),new E.J($.da,1,!0),new E.J($.dS,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new N.pf(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(1,"Time",!0,!1,!1)
$.z_=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#3399ff"),!0)
h.j(0,$.ai,L.d("#10E0FF"),!0)
h.j(0,$.ah,L.d("#00A4BB"),!0)
h.j(0,$.ar,L.d("#FEFD49"),!0)
h.j(0,$.aq,L.d("#D6D601"),!0)
h.j(0,$.ak,L.d("#0052F3"),!0)
h.j(0,$.al,L.d("#0046D1"),!0)
h.j(0,$.aj,L.d("#003396"),!0)
h.j(0,$.ap,L.d("#0087EB"),!0)
h.j(0,$.ao,L.d("#0070ED"),!0)
h.j(0,$.an,L.d("#006BE1"),!0)
h.j(0,$.am,L.d("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.J($.da,2,!0),new E.J($.c6,1,!0),new E.J($.dT,-1,!0),new E.J($.dU,-1,!0),new E.J($.c_,0.05,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new T.kJ(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(2,"Breath",!0,!1,!1)
$.yC=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#003300"),!0)
a.j(0,$.ai,L.d("#0F0F0F"),!0)
a.j(0,$.ah,L.d("#010101"),!0)
a.j(0,$.ar,L.d("#E8C15E"),!0)
a.j(0,$.aq,L.d("#C7A140"),!0)
a.j(0,$.ak,L.d("#1E211E"),!0)
a.j(0,$.al,L.d("#141614"),!0)
a.j(0,$.aj,L.d("#0B0D0B"),!0)
a.j(0,$.ap,L.d("#204020"),!0)
a.j(0,$.ao,L.d("#11200F"),!0)
a.j(0,$.an,L.d("#192C16"),!0)
a.j(0,$.am,L.d("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.J($.d9,2,!0),new E.J($.dS,1,!0),new E.J($.eB,-1,!0),new E.J($.dT,-1,!0),new E.J($.c_,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new U.lc(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(3,"Doom",!0,!1,!1)
$.yD=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#993300"),!0)
h.j(0,$.ai,L.d("#BA1016"),!0)
h.j(0,$.ah,L.d("#820B0F"),!0)
h.j(0,$.ar,L.d("#381B76"),!0)
h.j(0,$.aq,L.d("#1E0C47"),!0)
h.j(0,$.ak,L.d("#290704"),!0)
h.j(0,$.al,L.d("#230200"),!0)
h.j(0,$.aj,L.d("#110000"),!0)
h.j(0,$.ap,L.d("#3D190A"),!0)
h.j(0,$.ao,L.d("#2C1207"),!0)
h.j(0,$.an,L.d("#5C2913"),!0)
h.j(0,$.am,L.d("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.J($.dU,2,!0),new E.J($.c6,1,!0),new E.J($.d9,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new T.kG(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(4,"Blood",!0,!1,!1)
$.yB=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff3399"),!0)
a.j(0,$.ai,L.d("#BD1864"),!0)
a.j(0,$.ah,L.d("#780F3F"),!0)
a.j(0,$.ar,L.d("#1D572E"),!0)
a.j(0,$.aq,L.d("#11371D"),!0)
a.j(0,$.ak,L.d("#4C1026"),!0)
a.j(0,$.al,L.d("#3C0D1F"),!0)
a.j(0,$.aj,L.d("#260914"),!0)
a.j(0,$.ap,L.d("#6B0829"),!0)
a.j(0,$.ao,L.d("#4A0818"),!0)
a.j(0,$.an,L.d("#55142A"),!0)
a.j(0,$.am,L.d("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.J($.dU,1,!0),new E.ia(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new T.m3(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(5,"Heart",!0,!1,!1)
$.yG=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#3da35a"),!0)
h.j(0,$.ai,L.d("#06FFC9"),!0)
h.j(0,$.ah,L.d("#04A885"),!0)
h.j(0,$.ar,L.d("#6E0E2E"),!0)
h.j(0,$.aq,L.d("#4A0818"),!0)
h.j(0,$.ak,L.d("#1D572E"),!0)
h.j(0,$.al,L.d("#164524"),!0)
h.j(0,$.aj,L.d("#11371D"),!0)
h.j(0,$.ap,L.d("#3DA35A"),!0)
h.j(0,$.ao,L.d("#2E7A43"),!0)
h.j(0,$.an,L.d("#3B7E4F"),!0)
h.j(0,$.am,L.d("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.J($.dS,2,!0),new E.J($.eB,1,!0),new E.J($.d9,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new V.nf(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(6,"Mind",!0,!1,!1)
$.yO=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff9933"),!0)
a.j(0,$.ai,L.d("#FEFD49"),!0)
a.j(0,$.ah,L.d("#FEC910"),!0)
a.j(0,$.ar,L.d("#10E0FF"),!0)
a.j(0,$.aq,L.d("#00A4BB"),!0)
a.j(0,$.ak,L.d("#FA4900"),!0)
a.j(0,$.al,L.d("#E94200"),!0)
a.j(0,$.aj,L.d("#C33700"),!0)
a.j(0,$.ap,L.d("#FF8800"),!0)
a.j(0,$.ao,L.d("#D66E04"),!0)
a.j(0,$.an,L.d("#E76700"),!0)
a.j(0,$.am,L.d("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.J($.fs,2,!0),new E.J($.dS,1,!0),new E.J($.c6,-1,!0),new E.J($.dT,-1,!0),new E.J($.c_,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new G.mQ(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(7,"Light",!0,!1,!1)
$.yM=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#000066"),!0)
h.j(0,$.ai,L.d("#0B1030"),!0)
h.j(0,$.ah,L.d("#04091A"),!0)
h.j(0,$.ar,L.d("#CCC4B5"),!0)
h.j(0,$.aq,L.d("#A89F8D"),!0)
h.j(0,$.ak,L.d("#00164F"),!0)
h.j(0,$.al,L.d("#00103C"),!0)
h.j(0,$.aj,L.d("#00071A"),!0)
h.j(0,$.ap,L.d("#033476"),!0)
h.j(0,$.ao,L.d("#02285B"),!0)
h.j(0,$.an,L.d("#004CB2"),!0)
h.j(0,$.am,L.d("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fN(D.uQ(),null,3,!0),new E.fN(D.uQ(),null,-1,!0),new E.J($.eB,-1,!0),new E.J($.c_,0.2,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new Q.pF(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(8,"Void",!0,!1,!1)
$.z1=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#9900cc"),!0)
a.j(0,$.ai,L.d("#974AA7"),!0)
a.j(0,$.ah,L.d("#6B347D"),!0)
a.j(0,$.ar,L.d("#3D190A"),!0)
a.j(0,$.aq,L.d("#2C1207"),!0)
a.j(0,$.ak,L.d("#7C3FBA"),!0)
a.j(0,$.al,L.d("#6D34A6"),!0)
a.j(0,$.aj,L.d("#592D86"),!0)
a.j(0,$.ap,L.d("#381B76"),!0)
a.j(0,$.ao,L.d("#1E0C47"),!0)
a.j(0,$.an,L.d("#281D36"),!0)
a.j(0,$.am,L.d("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.J($.eC,2,!0),new E.J($.da,1,!0),new E.J($.c6,-1,!0),new E.J($.dU,-1,!0),new E.J($.c_,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new E.nZ(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(9,"Rage",!0,!1,!1)
$.yS=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ffcc66"),!0)
h.j(0,$.ai,L.d("#FDF9EC"),!0)
h.j(0,$.ah,L.d("#D6C794"),!0)
h.j(0,$.ar,L.d("#164524"),!0)
h.j(0,$.aq,L.d("#06280C"),!0)
h.j(0,$.ak,L.d("#FFC331"),!0)
h.j(0,$.al,L.d("#F7BB2C"),!0)
h.j(0,$.aj,L.d("#DBA523"),!0)
h.j(0,$.ap,L.d("#FFE094"),!0)
h.j(0,$.ao,L.d("#E8C15E"),!0)
h.j(0,$.an,L.d("#F6C54A"),!0)
h.j(0,$.am,L.d("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.J($.c6,2,!0),new E.J($.fs,1,!0),new E.fN(D.uQ(),null,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new X.m7(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(10,"Hope",!0,!1,!1)
$.yI=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#494132"),!0)
a.j(0,$.ai,L.d("#76C34E"),!0)
a.j(0,$.ah,L.d("#4F8234"),!0)
a.j(0,$.ar,L.d("#00164F"),!0)
a.j(0,$.aq,L.d("#00071A"),!0)
a.j(0,$.ak,L.d("#605542"),!0)
a.j(0,$.al,L.d("#494132"),!0)
a.j(0,$.aj,L.d("#2D271E"),!0)
a.j(0,$.ap,L.d("#CCC4B5"),!0)
a.j(0,$.ao,L.d("#A89F8D"),!0)
a.j(0,$.an,L.d("#A29989"),!0)
a.j(0,$.am,L.d("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.J($.dT,2,!0),new E.J($.eC,1,!0),new E.J($.d9,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new K.mP(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(11,"Life",!0,!1,!1)
$.yL=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#9630BF"),!0)
h.j(0,$.ai,L.d("#cc87e8"),!0)
h.j(0,$.ah,L.d("#9545b7"),!0)
h.j(0,$.ar,L.d("#ae769b"),!0)
h.j(0,$.aq,L.d("#8f577c"),!0)
h.j(0,$.ak,L.d("#9630bf"),!0)
h.j(0,$.al,L.d("#693773"),!0)
h.j(0,$.aj,L.d("#4c2154"),!0)
h.j(0,$.ap,L.d("#fcf9bd"),!0)
h.j(0,$.ao,L.d("#e0d29e"),!0)
h.j(0,$.an,L.d("#bdb968"),!0)
h.j(0,$.am,L.d("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.J($.d9,3,!0),new E.J($.c6,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new Z.ld(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(12,"Dream",!1,!1,!1)
$.yE=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#9630BF"),!0)
a.j(0,$.ai,L.d("#cc87e8"),!0)
a.j(0,$.ah,L.d("#9545b7"),!0)
a.j(0,$.ar,L.d("#ae769b"),!0)
a.j(0,$.aq,L.d("#8f577c"),!0)
a.j(0,$.ak,L.d("#9630bf"),!0)
a.j(0,$.al,L.d("#693773"),!0)
a.j(0,$.aj,L.d("#4c2154"),!0)
a.j(0,$.ap,L.d("#fcf9bd"),!0)
a.j(0,$.ao,L.d("#e0d29e"),!0)
a.j(0,$.an,L.d("#bdb968"),!0)
a.j(0,$.am,L.d("#ab9b55"),!0)
b=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.f(H.a([new E.J($.d9,3,!0),new E.J($.c6,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new Q.mN(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(13,"Law",!1,!1,!0)
$.yK=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ffff00"),!0)
h.j(0,$.ai,L.d("#ffff00"),!0)
h.j(0,$.ah,L.d("#ffff00"),!0)
h.j(0,$.ar,L.d("#508b2d"),!0)
h.j(0,$.aq,L.d("#316c0d"),!0)
h.j(0,$.ak,L.d("#dddd00"),!0)
h.j(0,$.al,L.d("#afaf00"),!0)
h.j(0,$.aj,L.d("#8f8f00"),!0)
h.j(0,$.ap,L.d("#ff0000"),!0)
h.j(0,$.ao,L.d("#a8000a"),!0)
h.j(0,$.an,L.d("#b8151f"),!0)
h.j(0,$.am,L.d("#8c1d1d"),!0)
g=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.f(H.a([new E.J($.c_,13,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#FF9B00"),!0)
b.j(0,$.ai,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF8700"),!0)
b.j(0,$.ar,L.d("#7F7F7F"),!0)
b.j(0,$.aq,L.d("#727272"),!0)
b.j(0,$.ak,L.d("#A3A3A3"),!0)
b.j(0,$.al,L.d("#999999"),!0)
b.j(0,$.aj,L.d("#898989"),!0)
b.j(0,$.ap,L.d("#EFEFEF"),!0)
b.j(0,$.ao,L.d("#DBDBDB"),!0)
b.j(0,$.an,L.d("#C6C6C6"),!0)
b.j(0,$.am,L.d("#ADADAD"),!0)
b=new Z.mJ(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.Z(14,"Juice",!1,!1,!0)
$.yJ=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#00ff00"),!0)
b.j(0,$.ai,L.d("#00ff00"),!0)
b.j(0,$.ah,L.d("#00ff00"),!0)
b.j(0,$.ar,L.d("#00ff00"),!0)
b.j(0,$.aq,L.d("#00cf00"),!0)
b.j(0,$.ak,L.d("#171717"),!0)
b.j(0,$.al,L.d("#080808"),!0)
b.j(0,$.aj,L.d("#080808"),!0)
b.j(0,$.ap,L.d("#616161"),!0)
b.j(0,$.ao,L.d("#3b3b3b"),!0)
b.j(0,$.an,L.d("#4a4a4a"),!0)
b.j(0,$.am,L.d("#292929"),!0)
c=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.f(H.a(["Shogun"],p),q)
e=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.J($.eC,13,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new K.ob(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(15,"Sauce",!1,!0,!1)
$.yV=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#933100"),!0)
h.j(0,$.ai,L.d("#933100"),!0)
h.j(0,$.ah,L.d("#682200"),!0)
h.j(0,$.ar,L.d("#4c3a27"),!0)
h.j(0,$.aq,L.d("#302418"),!0)
h.j(0,$.ak,L.d("#a0562b"),!0)
h.j(0,$.al,L.d("#723e20"),!0)
h.j(0,$.aj,L.d("#442513"),!0)
h.j(0,$.ap,L.d("#963c07"),!0)
h.j(0,$.ao,L.d("#682a06"),!0)
h.j(0,$.an,L.d("#6d4d3a"),!0)
h.j(0,$.am,L.d("#422e23"),!0)
g=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
d=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
c=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
b=P.f(H.a([new E.J($.da,10,!0),new E.J($.c6,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new L.p1(2,0.7,0.7,h,g,f,e,d,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",c,["Lightning","Ice","Taserface"],["Taser"],b,0.01,0.01,0.01,0.5,16,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(16,"Taze",!1,!1,!0)
$.yZ=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#990000"),!0)
a.j(0,$.ai,L.d("#ff0200"),!0)
a.j(0,$.ah,L.d("#dd0000"),!0)
a.j(0,$.ar,L.d("#25334f"),!0)
a.j(0,$.aq,L.d("#07090f"),!0)
a.j(0,$.ak,L.d("#c64f4f"),!0)
a.j(0,$.al,L.d("#a33f3f"),!0)
a.j(0,$.aj,L.d("#843333"),!0)
a.j(0,$.ap,L.d("#b5c1d2"),!0)
a.j(0,$.ao,L.d("#939dac"),!0)
a.j(0,$.an,L.d("#3c3e42"),!0)
a.j(0,$.am,L.d("#202123"),!0)
b=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
c=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
d=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.J($.da,2,!0),new E.J($.c6,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new V.o6(0.9,1.1,2,a,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(17,"Rule",!1,!1,!0)
$.yU=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#853dcc"),!0)
h.j(0,$.ai,L.d("#f76261"),!0)
h.j(0,$.ah,L.d("#913a39"),!0)
h.j(0,$.ar,L.d("#ab4443"),!0)
h.j(0,$.aq,L.d("#78302f"),!0)
h.j(0,$.ak,L.d("#a54cff"),!0)
h.j(0,$.al,L.d("#8c41d9"),!0)
h.j(0,$.aj,L.d("#7335b3"),!0)
h.j(0,$.ap,L.d("#853dcc"),!0)
h.j(0,$.ao,L.d("#642e99"),!0)
h.j(0,$.an,L.d("#4c2375"),!0)
h.j(0,$.am,L.d("#2b1442"),!0)
g=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.f(H.a([new E.J($.da,15,!0),new E.J($.c6,-4,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#FF9B00"),!0)
b.j(0,$.ai,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF8700"),!0)
b.j(0,$.ar,L.d("#7F7F7F"),!0)
b.j(0,$.aq,L.d("#727272"),!0)
b.j(0,$.ak,L.d("#A3A3A3"),!0)
b.j(0,$.al,L.d("#999999"),!0)
b.j(0,$.aj,L.d("#898989"),!0)
b.j(0,$.ap,L.d("#EFEFEF"),!0)
b.j(0,$.ao,L.d("#DBDBDB"),!0)
b.j(0,$.an,L.d("#C6C6C6"),!0)
b.j(0,$.am,L.d("#ADADAD"),!0)
b=new V.m5(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.Z(18,"Hippo",!1,!1,!0)
$.yH=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#959595"),!0)
b.j(0,$.ai,L.d("#bfbfbf"),!0)
b.j(0,$.ah,L.d("#959595"),!0)
b.j(0,$.ar,L.d("#805233"),!0)
b.j(0,$.aq,L.d("#663c1f"),!0)
b.j(0,$.ak,L.d("#805233"),!0)
b.j(0,$.al,L.d("#737373"),!0)
b.j(0,$.aj,L.d("#664d3c"),!0)
b.j(0,$.ap,L.d("#663c1f"),!0)
b.j(0,$.ao,L.d("#4d2d17"),!0)
b.j(0,$.an,L.d("#68594e"),!0)
b.j(0,$.am,L.d("#4f443b"),!0)
c=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.f(H.a([new E.J($.da,5,!0),new E.J($.c6,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new L.kE(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(19,"Bear",!1,!1,!0)
$.yA=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ebd837"),!0)
h.j(0,$.ai,L.d("#ebd837"),!0)
h.j(0,$.ah,L.d("#857a1f"),!0)
h.j(0,$.ar,L.d("#857a1f"),!0)
h.j(0,$.aq,L.d("#524b13"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
e=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.J($.dS,2,!0),new E.J($.eB,1,!0),new E.J($.d9,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.ng(0.3,0.3,1,h,g,f,e,d,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,20,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(20,"Mindstone",!1,!0,!0)
$.yP=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#74a4ff"),!0)
a.j(0,$.ai,L.d("#74a4ff"),!0)
a.j(0,$.ah,L.d("#466299"),!0)
a.j(0,$.ar,L.d("#466299"),!0)
a.j(0,$.aq,L.d("#2f4166"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["Frogs","Stone"],p),q)
d=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.d9,2,!0),new E.J($.dT,1,!0),new E.J($.da,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.os(0.5,1,0.5,a,b,c,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",e,f,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],g,0.01,0.01,0.01,0.5,21,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(21,"Spacestone",!1,!0,!0)
$.yY=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#9846cc"),!0)
h.j(0,$.ai,L.d("#9846cc"),!0)
h.j(0,$.ah,L.d("#4c2366"),!0)
h.j(0,$.ar,L.d("#4c2366"),!0)
h.j(0,$.aq,L.d("#261233"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
c=P.f(H.a([new E.J($.eC,2,!0),new E.J($.da,1,!0),new E.J($.c6,-1,!0),new E.J($.dU,-1,!0),new E.J($.c_,0.01,!1)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.nR(1,1,0.01,h,g,f,e,d,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,22,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(22,"Powerstone",!1,!0,!0)
$.yR=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ffcb6f"),!0)
a.j(0,$.ai,L.d("#ffcb6f"),!0)
a.j(0,$.ah,L.d("#997a42"),!0)
a.j(0,$.ar,L.d("#997a42"),!0)
a.j(0,$.aq,L.d("#66512c"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.dU,1,!0),new E.ia(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.op(0.3,0.6,0.01,a,b,c,d,e,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,g,0.01,0.01,0.01,0.5,23,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(23,"Soulstone",!1,!0,!0)
$.yW=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#7ac476"),!0)
h.j(0,$.ai,L.d("#7ac476"),!0)
h.j(0,$.ah,L.d("#3a5e39"),!0)
h.j(0,$.ar,L.d("#3a5e39"),!0)
h.j(0,$.aq,L.d("#1b2b1a"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.J($.eB,2,!0),new E.J($.da,1,!0),new E.J($.dS,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.pk(0.51,1,0.01,0.7,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],b,0.01,0.01,0.01,0.5,24,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(24,"Timestone",!1,!0,!0)
$.z0=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ed1c24"),!0)
a.j(0,$.ai,L.d("#ed1c24"),!0)
a.j(0,$.ah,L.d("#820a0f"),!0)
a.j(0,$.ar,L.d("#820a0f"),!0)
a.j(0,$.aq,L.d("#4f0609"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.fs,2,!0),new E.J($.dS,1,!0),new E.J($.c6,-1,!0),new E.J($.dT,-1,!0),new E.J($.c_,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.o0(1.01,0.5,0.01,a,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],f,g,0.01,0.01,0.01,0.5,25,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Z(25,"Realitystone",!1,!0,!0)
$.yT=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#e19aca"),!0)
h.j(0,$.ai,L.d("#e19aca"),!0)
h.j(0,$.ah,L.d("#7a546e"),!0)
h.j(0,$.ar,L.d("#7a546e"),!0)
h.j(0,$.aq,L.d("#473140"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a([new E.J($.c6,-1,!0),new E.J($.eC,2,!0)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.m_(2,1.5,1,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],c,b,0.01,0.01,0.01,0.5,26,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Z(26,"Gauntlet",!1,!0,!0)
$.yF=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#c55555"),!0)
a.j(0,$.ai,L.d("#c55555"),!0)
a.j(0,$.ah,L.d("#090404"),!0)
a.j(0,$.ar,L.d("#ba872e"),!0)
a.j(0,$.aq,L.d("#8e694e"),!0)
a.j(0,$.ak,L.d("#b59e5d"),!0)
a.j(0,$.al,L.d("#837243"),!0)
a.j(0,$.aj,L.d("#4f4528"),!0)
a.j(0,$.ap,L.d("#9fbfbf"),!0)
a.j(0,$.ao,L.d("#95b5b5"),!0)
a.j(0,$.an,L.d("#956f6f"),!0)
a.j(0,$.am,L.d("#714b4b"),!0)
b=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
c=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
d=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
e=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
f=P.f(H.a([new E.J($.c6,-1,!0)],k),l)
m=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
m.j(0,$.ag,L.d("#FF9B00"),!0)
m.j(0,$.ai,L.d("#FF9B00"),!0)
m.j(0,$.ah,L.d("#FF8700"),!0)
m.j(0,$.ar,L.d("#7F7F7F"),!0)
m.j(0,$.aq,L.d("#727272"),!0)
m.j(0,$.ak,L.d("#A3A3A3"),!0)
m.j(0,$.al,L.d("#999999"),!0)
m.j(0,$.aj,L.d("#898989"),!0)
m.j(0,$.ap,L.d("#EFEFEF"),!0)
m.j(0,$.ao,L.d("#DBDBDB"),!0)
m.j(0,$.an,L.d("#C6C6C6"),!0)
m.j(0,$.am,L.d("#ADADAD"),!0)
j=new D.nc(2,0.5,1,a,b,c,d,"cURSED","Some cursed meme music starts to play.",e,["memes"],["memes"],f,0.01,0.01,0.01,0.5,27,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
j.Z(27,"Meme",!1,!1,!0)
$.yN=j
$.yQ=L.yz(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.J($.c6,1,!0),new E.J($.fs,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
f=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
e=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
d=H.a(["nobody"],p)
c=P.f(H.a([],k),l)
b=H.a(["Nobody"],p)
a=H.a(["Nobody"],p)
q=new F.ni(j,q,m,f,e,!1,d,c,b,a,1,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"loud","musical","Music")
q.G()
q.H()
B.cM(q)
$.zZ=q
q=P.f(H.a([new E.J($.dS,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kq(q,m,j,i,h,!1,g,f,e,d,13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"nerdy","smart","Academic")
q.G()
q.H()
B.cM(q)
$.zS=q
q=P.f(H.a([new E.J($.eC,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.ku(q,m,j,i,h,!1,g,f,e,d,4,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dumb","athletic","Athletic")
q.G()
q.H()
B.cM(q)
$.zT=q
q=P.f(H.a([new E.J($.eB,-1,!0),new E.J($.fs,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kR(q,m,j,i,h,!1,g,f,e,d,0,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dorky","funny","Comedy")
q.G()
q.H()
B.cM(q)
$.zU=q
q=P.f(H.a([new E.J($.c6,-1,!0),new E.J($.dT,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l3(q,m,j,i,h,!1,g,f,e,d,2,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"pretentious","cultured","Culture")
q.G()
q.H()
B.cM(q)
$.zV=q
q=P.f(H.a([new E.J($.c6,1,!0),new E.J($.dU,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lb(q,m,j,i,h,!1,g,f,e,d,8,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"boring","domestic","Domestic")
q.G()
q.H()
B.cM(q)
$.zW=q
q=P.f(H.a([new E.J($.fs,1,!0),new E.J($.d9,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lF(q,m,j,i,h,!1,g,f,e,d,7,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"whimpy","imaginative","Fantasy")
q.G()
q.H()
B.cM(q)
$.zX=q
q=P.f(H.a([new E.J($.eC,1,!0),new E.J($.dT,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mK(q,m,j,i,h,!1,g,f,e,d,6,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"harsh","fair-minded","Justice")
q.G()
q.H()
B.cM(q)
$.zY=q
q=P.f(H.a([new E.J($.da,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nQ(q,m,j,i,h,!1,g,f,e,d,9,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"frivolous","geeky","PopCulture")
q.G()
q.H()
B.cM(q)
$.A0=q
q=P.f(H.a([new E.J($.dU,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.o5(q,m,j,i,h,!1,g,f,e,d,12,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"obsessive","romantic","Romantic")
q.G()
q.H()
B.cM(q)
$.A1=q
q=P.f(H.a([new E.J($.c6,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oo(q,m,j,i,h,!1,g,f,e,d,11,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"shallow","extroverted","Social")
q.G()
q.H()
B.cM(q)
$.A2=q
q=P.f(H.a([new E.J($.dU,-1,!0),new E.J($.c6,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.p5(q,m,j,i,h,!1,g,f,e,d,5,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"terrible","honest","Terrible")
q.G()
q.H()
B.cM(q)
$.A4=q
q=P.f(H.a([new E.J($.dS,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pP(q,m,j,i,h,!1,g,f,e,d,3,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"wordy","lettered","Writing")
q.G()
q.H()
B.cM(q)
$.A5=q
q=P.f(H.a([new E.J($.d9,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.p3(q,m,j,i,h,!1,g,f,e,d,10,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"awkward","techy","Technology")
q.G()
q.H()
B.cM(q)
$.A3=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hm(!0,q,l,k,p,-13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"","","Null")
q.G()
q.H()
B.cM(q)
$.A_=q
A.wF()
t=3
return P.cu(Y.nj(),$async$rA)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$rA,s)}},Z={ld:function ld(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
zH:function(){var t,s
if(!$.vQ)$.vQ=!0
else return
t=[P.C]
s=new Y.p9(H.a([],t))
$.tw=s
Z.cL(s,"txt",null)
Z.cL($.tw,"vert","x-shader/x-vertex")
Z.cL($.tw,"frag","x-shader/x-fragment")
$.zG=new Y.o_(H.a([],t))
$.vS=new Y.kL(H.a([],t))
s=new B.pU(H.a([],t))
$.vU=s
Z.cL(s,"zip",null)
Z.cL($.vU,"bundle",null)
s=new U.pL(H.a([],t))
$.zP=s
Z.cL(s,"words",null)
s=new Q.nO(H.a([],t))
$.vT=s
Z.cL(s,"png",null)
Z.cL($.vT,"jpg","image/jpeg")
$.zN=new Q.nL(H.a([],t))
s=new M.ow(H.a([],t))
$.zO=s
Z.cL(s,"psprite",null)
s=new V.lV(H.a([],t))
$.tv=s
Z.cL(s,"ttf",null)
Z.cL($.tv,"otf",null)
Z.cL($.tv,"woff",null)
s=new Y.nv(null,H.a([],t))
$.zK=s
Z.cL(s,"obj",null)
s=new U.n4(H.a([],t))
$.zI=s
Z.cL(s,"mp3",null)
$.zJ=new U.oT(H.a([],t))
s=new U.nz(H.a([],t))
$.zL=s
Z.cL(s,"ogg",null)
$.zM=new U.oU(H.a([],t))},
cL:function(a,b,c){$.$get$lX().i(0,b,new Z.ir(a,c,[null,null]))
a.a.push(b)},
vR:function(a){var t
if($.$get$lX().V(0,a)){t=$.$get$lX().n(0,a)
if(t.a instanceof O.cb)return t
throw H.l("File format for extension ."+H.A(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.A(a))},
ir:function ir(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mJ:function mJ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
n3:function n3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
u7:function u7(){},
u3:function u3(){},
u4:function u4(){}},X={is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ib:function ib(){},m7:function m7(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},mc:function mc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={a6:function a6(){},mK:function mK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nX:function nX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o4:function o4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oo:function oo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},or:function or(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},pf:function pf(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
Fq:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.k4(document.querySelectorAll("link"),[null])
for(r=new H.dN(s,s.gm(s),0,null,[null]);r.J();){q=r.d
p=J.aG(q)
if(!!p.$ishv&&q.rel==="stylesheet"){o=$.$get$nJ()
H.A(p.gaf(q))
o.toString
o=t.length
n=Math.min(o,J.c1(p.gaf(q)))
for(m=0;m<n;++m){if(m>=o)return H.x(t,m)
if(t[m]!==J.fH(p.gaf(q),m)){l=C.c.ai(t,m)
$.$get$nJ().toString
return l.split("/").length-1}continue}}}$.$get$nJ().b2(C.i,"Didn't find a css link to derive relative path")
return 0},
uw:function(){var t=P.xg()
if(!$.$get$nI().V(0,t))$.$get$nI().i(0,t,N.Fq(t))
return $.$get$nI().n(0,t)}},E={iF:function iF(){},ny:function ny(){},J:function J(a,b,c){this.a=a
this.b=b
this.c=c},fN:function fN(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},nh:function nh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nZ:function nZ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},o9:function o9(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pG:function pG(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={m4:function m4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.E=E
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
if($.$get$mk().V(0,t))throw H.l("Duplicate aspect id for "+a.D(0)+": "+t+" is already registered for "+J.cJ($.$get$mk().n(0,t))+".")
$.$get$mk().i(0,t,a)},
hm:function hm(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
pU:function pU(a){this.a=a},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
GW:function(a){return a.aV(0)},
Go:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.C
s=P.bZ(t,P.T)
r=B.cX
q=new B.eI(s,P.bZ(t,t),J.yh(a),!1,null,null)
q.ca(null,null,r)
for(p=J.yg(a.gcL()),p=p.gT(p);p.J();){o=p.gO()
s.i(0,o,J.fH(a.gcL(),o))}for(s=a.gh3(),s=s.gaD(s),s=s.gT(s),p=q.d,n=a.d;s.J();){o=s.gO()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bV)(s),++m){l=s[m]
n=J.b7(l)
k=n.gX(l)
j=J.ym(k)
k=k.gbQ()
i=new B.cX(k)
if(k==null){k=P.bZ(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gb7(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
p6:function p6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p8:function p8(a){this.a=a},
p7:function p7(a,b){this.a=a
this.b=b},
cX:function cX(a){this.a=a},
eI:function eI(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hX:function hX(a,b){this.a=a
this.b=b}},Q={md:function md(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mg:function mg(){},nO:function nO(a){this.a=a},nL:function nL(a){this.a=a},mN:function mN(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a7=a7
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
_.x2=x2},o5:function o5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pF:function pF(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},jG:function jG(){},
F:function(a,b,c){var t=new Q.dX(null,null,[c])
t.ca(a,b,c)
return t},
v1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.F(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dZ(a,"$iso",[e],"$aso"))if(H.dZ(a,"$iscy",[e],"$ascy"))for(s=J.cQ(a.gbi()),r=0;s.J();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.x(p,r)
p[r]=q;++r}else for(s=a.gT(a),p=[H.O(t,0)],r=0;s.J();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.x(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gT(a),p=[e],o=[H.O(t,0)];s.J();){l=s.gO()
if(H.Hc(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.x(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dZ(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.x(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.A(J.vm(l))+" for WeightedList<"+H.A(H.c0(H.dA(e)))+">. Should be "+H.A(H.c0(H.dA(e)))+" or WeightPair<"+H.A(H.c0(H.dA(e)))+">.")}return t},
v2:function(a,b,c,d){return new Q.jV(J.vo(a.gbi(),new Q.pJ(c,d,b)),null,[c,d])},
cy:function cy(){},
dX:function dX(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hV:function hV(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eK:function eK(){},
hU:function hU(){},
pI:function pI(a,$ti){this.a=a
this.$ti=$ti},
jV:function jV(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
of:function(){var t=0,s=P.bq(),r
var $async$of=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cu(A.hx("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$of)
case 3:r=A.hx("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$of,s)}},G={mQ:function mQ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
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
_.x2=x2},nQ:function nQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
za:function(a){var t,s,r,q,p,o,n,m,l
t=G.V
s=P.ue(a,t)
r=P.a5(null,null,null,t)
q=H.a([],[G.e])
for(t=G.F4(),p=J.cQ(t.a),t=new H.jW(p,t.b,[H.O(t,0)]);t.J();){o=p.gO()
if(o.eq(s))q.push(o)}C.b.eI(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bV)(q),++n){o=q[n]
if(o.eq(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bV)(p),++l)s.ag(0,p[l])}}if(s.a!==0)r.bo(0,s)
return r},
F4:function(){var t=$.$get$c()
t.toString
return new H.hW(t,new G.mz(),[H.O(t,0)])},
V:function V(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mz:function mz(){}},D={nc:function nc(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},p3:function p3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gi:function(){if($.wY)return
$.wY=!0
var t=new D.cG("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=0
$.oy=t
t=new D.cG("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.Gh=t
t=new D.jY(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
t.Q=1
$.eC=t
t=new D.jY(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
$.dT=t
t=new D.cG("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.Gg=t
t=new D.cG("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.da=t
t=new D.o2("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dU=t
t=new D.cG("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.c6=t
t=new D.cG("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dS=t
t=new D.cG("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.fs=t
t=new D.cG("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.eB=t
t=new D.cG("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.d9=t
t=new D.cG("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.c_=t},
uQ:function(){var t=$.$get$cO()
return new H.hW(t,new D.oz(),[H.O(t,0)])},
oz:function oz(){},
cG:function cG(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
jY:function jY(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
o2:function o2(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},F={ni:function ni(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pP:function pP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
F9:function(a){if(a===C.h){window
return C.j.gas(C.j)}if(a===C.i){window
return C.j.ghZ()}if(a===C.Z){window
return C.j.gho()}return P.Hg()},
hy:function hy(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(){},
zr:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bS(s[q])
return t.b5(b)},
zq:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.c1()
if(q>=t)return H.x(s,q)
s[q]=p}return s},
zp:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.x(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.x(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bS(o-1)
t.aj(a,r)}return t.b5(b)},
zo:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dg(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.c1()+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
zn:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.ds(new P.cd(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.x(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.x(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bS(p-1)
t.bS(a)}return t.b5(b)},
zm:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dg(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;){p=r.c1()+1
o=r.c1()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.x(s,m)
s[m]=o}q+=p}return s}},R={
FK:function(a){var t,s
if(a.gm(a).aG(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi5(s).gii().e8("checking for two players, ps is "+H.A(a)+", ret is "+t)
return t},
Fy:function(a){a.gae(a).gbT()
return!1},
FJ:function(a){a.gae(a).gbT()
return!1},
FI:function(a){a.gae(a).gbT()
return!1},
FH:function(a){return a.gae(a).gbp().gih()},
FF:function(a){return a.gae(a).gbp().gie()},
FE:function(a){return a.gae(a).gbp().gic()},
FB:function(a){return a.gae(a).gbp().gia()},
FD:function(a){return a.gae(a).gbp().gib()},
FG:function(a){return a.gae(a).gbp().gig()},
FC:function(a){var t=a.gae(a)
t.gbT()
t.gbT()
return!1},
Fz:function(a){return!0},
FA:function(a){a.gae(a).gi7()
return!1},
nY:function nY(){},
a1:function a1(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
R:function R(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a8:function a8(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
p_:function p_(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hh:function hh(){},
uv:function uv(){},
uu:function uu(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,V,A,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.u9.prototype={}
J.j.prototype={
S:function(a,b){return a===b},
ga6:function(a){return H.ev(a)},
D:function(a){return H.nV(a)},
gab:function(a){return new H.dW(H.kk(a),null)},
$ishh:1,
$isad:1,
$isfm:1,
$isad:1,
$ismF:1,
$isj:1,
$ismF:1,
$isj:1,
$ishA:1,
$isad:1}
J.mD.prototype={
D:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gab:function(a){return C.ae},
$isdd:1}
J.mE.prototype={
S:function(a,b){return null==b},
D:function(a){return"null"},
ga6:function(a){return 0},
gab:function(a){return C.a8},
$isd6:1}
J.ht.prototype={
ga6:function(a){return 0},
gab:function(a){return C.a7},
D:function(a){return String(a)},
$ismF:1,
h:function(a,b){return a.add(b)},
ag:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
gb0:function(a){return a.height},
hD:function(a,b){return a.parse(b)},
eG:function(a,b){return a.setLogging(b)},
eH:function(a,b){return a.setMaterials(b)}}
J.nN.prototype={}
J.eG.prototype={}
J.es.prototype={
D:function(a){var t=a[$.$get$vB()]
return t==null?this.eM(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eq.prototype={
bW:function(a,b){if(!!a.immutable$list)throw H.l(new P.Z(b))},
cE:function(a,b){if(!!a.fixed$length)throw H.l(new P.Z(b))},
h:function(a,b){this.cE(a,"add")
a.push(b)},
aa:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bN(a))}},
ay:function(a,b){return new H.fi(a,b,[H.O(a,0),null])},
bg:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.A(a[r])
if(r>=t)return H.x(s,r)
s[r]=q}return s.join(b)},
d3:function(a,b){return H.x_(a,b,null,H.O(a,0))},
hd:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bN(a))}return s},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
c9:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bF(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bv(c))
if(c<b||c>a.length)throw H.l(P.bF(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gae:function(a){if(a.length>0)return a[0]
throw H.l(H.jr())},
gbc:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jr())},
a9:function(a,b,c,d,e){var t,s,r
this.bW(a,"setRange")
P.dk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bb(P.bF(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wz())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bY:function(a,b,c,d){var t
this.bW(a,"fill range")
P.dk(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aF:function(a,b,c,d){var t,s,r,q,p,o
this.cE(a,"replaceRange")
P.dk(b,c,a.length,null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aA(a,b,r,d)
if(p!==0){this.a9(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a9(a,r,o,a,c)
this.aA(a,b,r,d)}},
hb:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bN(a))}return!0},
d4:function(a,b){var t
this.bW(a,"sort")
t=b==null?P.Hf():b
H.jM(a,0,a.length-1,t)},
eI:function(a){return this.d4(a,null)},
b1:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bc(a[t],b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
ad:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bc(a[t],b))return!0
return!1},
gY:function(a){return a.length===0},
D:function(a){return P.jq(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
aq:function(a){return this.a3(a,!0)},
gT:function(a){return new J.i9(a,a.length,0,null,[H.O(a,0)])},
ga6:function(a){return H.ev(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cE(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dD(b,"newLength",null))
if(b<0)throw H.l(P.bF(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c7(a,b))
if(b>=a.length||b<0)throw H.l(H.c7(a,b))
return a[b]},
i:function(a,b,c){this.bW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c7(a,b))
if(b>=a.length||b<0)throw H.l(H.c7(a,b))
a[b]=c},
$isaQ:1,
$asaQ:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
J.u8.prototype={}
J.i9.prototype={
gO:function(){return this.d},
J:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.bV(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fg.prototype={
aB:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcM(b)
if(this.gcM(a)===t)return 0
if(this.gcM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcM:function(a){return a===0?1/a<0:a<0},
al:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.Z(""+a+".floor()"))},
bA:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.Z(""+a+".round()"))},
ac:function(a,b,c){if(C.a.aB(b,c)>0)throw H.l(H.bv(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
l:function(a){return a},
bC:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a_(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bb(new P.Z("Unexpected toString result: "+t))
r=J.be(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.au("0",q)},
D:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
d0:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a+b},
au:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a*b},
bG:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dP(a,b)},
ap:function(a,b){return(a|0)===a?a/b|0:this.dP(a,b)},
dP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.Z("Result of truncating division is "+H.A(t)+": "+H.A(a)+" ~/ "+H.A(b)))},
aw:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
if(b<0)throw H.l(H.bv(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fJ:function(a,b){if(b<0)throw H.l(H.bv(b))
return b>31?0:a>>>b},
dO:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>b},
av:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>=b},
gab:function(a){return C.ah},
$isdq:1}
J.ju.prototype={
gab:function(a){return C.ag},
$isT:1,
$isdq:1,
$isE:1}
J.jt.prototype={
gab:function(a){return C.af},
$isT:1,
$isdq:1}
J.er.prototype={
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c7(a,b))
if(b<0)throw H.l(H.c7(a,b))
if(b>=a.length)H.bb(H.c7(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(b>=a.length)throw H.l(H.c7(a,b))
return a.charCodeAt(b)},
cB:function(a,b,c){if(c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return new H.r_(b,a,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ed:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a_(b,c+s)!==this.a5(a,s))return
return new H.jR(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.l(P.dD(b,null,null))
return a+b},
ha:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ai(a,s-t)},
cV:function(a,b,c){return H.vf(a,b,c)},
hS:function(a,b,c){return H.HI(a,b,c,null)},
eJ:function(a,b){if(b==null)H.bb(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hs&&b.gdB().exec("").length-2===0)return a.split(b.gfw())
else return this.fd(a,b)},
aF:function(a,b,c,d){var t,s
H.v9(b)
c=P.dk(b,c,a.length,null,null,null)
H.v9(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fd:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.y8(b,a),s=s.gT(s),r=0,q=1;s.J();){p=s.gO()
o=p.gd5(p)
n=p.gdZ(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.M(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ai(a,r))
return t},
aH:function(a,b,c){var t
H.v9(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yq(b,a,c)!=null},
ah:function(a,b){return this.aH(a,b,0)},
M:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bb(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bb(H.bv(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.l(P.jJ(b,null,null))
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.jJ(b,null,null))
if(c>a.length)throw H.l(P.jJ(c,null,null))
return a.substring(b,c)},
ai:function(a,b){return this.M(a,b,null)},
hY:function(a){return a.toUpperCase()},
bj:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a5(t,0)===133){r=J.F5(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a_(t,q)===133?J.u5(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
er:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a_(t,r)===133)s=J.u5(t,r)}else{s=J.u5(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
au:function(a,b){var t,s
if(typeof b!=="number")return H.a9(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b1:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bf:function(a,b){return this.b1(a,b,0)},
hu:function(a,b,c){var t
if(b==null)H.bb(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bb(P.bF(t,0,c,null,null))
if(b.ck(a,t)!=null)return t}return-1},
ea:function(a,b){return this.hu(a,b,null)},
dX:function(a,b,c){if(c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
return H.HH(a,b,c)},
ad:function(a,b){return this.dX(a,b,0)},
gY:function(a){return a.length===0},
aB:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
D:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gab:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c7(a,b))
if(b>=a.length||b<0)throw H.l(H.c7(a,b))
return a[b]},
$isaQ:1,
$asaQ:function(){},
$isC:1,
$isux:1}
H.kQ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a_(this.a,b)},
$ashS:function(){return[P.E]},
$asjv:function(){return[P.E]},
$ashJ:function(){return[P.E]},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]}}
H.v.prototype={$asv:null}
H.et.prototype={
gT:function(a){return new H.dN(this,this.gm(this),0,null,[H.aH(this,"et",0)])},
aa:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.U(0,s))
if(t!==this.gm(this))throw H.l(new P.bN(this))}},
gY:function(a){return this.gm(this)===0},
gae:function(a){if(this.gm(this)===0)throw H.l(H.jr())
return this.U(0,0)},
ad:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bc(this.U(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bN(this))}return!1},
ay:function(a,b){return new H.fi(this,b,[H.aH(this,"et",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.aH(this,"et",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.U(0,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
aq:function(a){return this.a3(a,!0)}}
H.oY.prototype={
gfe:function(){var t=J.c1(this.a)
return t},
gfK:function(){var t,s
t=J.c1(this.a)
s=this.b
if(J.cv(s,t))return t
return s},
gm:function(a){var t,s
t=J.c1(this.a)
s=this.b
if(J.vh(s,t))return 0
if(typeof s!=="number")return H.a9(s)
return t-s},
U:function(a,b){var t=J.ec(this.gfK(),b)
if(J.ed(b,0)||J.vh(t,this.gfe()))throw H.l(P.by(b,this,"index",null,null))
return J.vj(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.be(s)
q=r.gm(s)
if(typeof t!=="number")return H.a9(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.U(s,t+m)
if(m>=n.length)return H.x(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bN(this))}return n},
aq:function(a){return this.a3(a,!0)},
eU:function(a,b,c,d){var t=this.b
if(J.ed(t,0))H.bb(P.bF(t,0,null,"start",null))}}
H.dN.prototype={
gO:function(){return this.d},
J:function(){var t,s,r,q
t=this.a
s=J.be(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bN(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.U(t,q);++this.c
return!0}}
H.hz.prototype={
gT:function(a){return new H.jw(null,J.cQ(this.a),this.b,this.$ti)},
gm:function(a){return J.c1(this.a)},
gY:function(a){return J.rX(this.a)},
$aso:function(a,b){return[b]}}
H.h0.prototype={$isv:1,
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jw.prototype={
J:function(){var t=this.b
if(t.J()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$asjs:function(a,b){return[b]}}
H.fi.prototype={
gm:function(a){return J.c1(this.a)},
U:function(a,b){return this.b.$1(J.vj(this.a,b))},
$aset:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hW.prototype={
gT:function(a){return new H.jW(J.cQ(this.a),this.b,this.$ti)},
ay:function(a,b){return new H.hz(this,b,[H.O(this,0),null])}}
H.jW.prototype={
J:function(){var t,s
for(t=this.a,s=this.b;t.J();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.iC.prototype={
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to a fixed-length list"))},
aF:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from a fixed-length list"))}}
H.pr.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to an unmodifiable list"))},
a9:function(a,b,c,d,e){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from an unmodifiable list"))},
bY:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
H.hS.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
H.rR.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rS.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qI.prototype={}
H.fz.prototype={
dT:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cw()},
hR:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ag(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.x(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.x(p,q)
p[q]=r
if(q===s.c)s.dt();++s.d}this.y=!1}this.cw()},
fO:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aG(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.x(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hP:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aG(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bb(new P.Z("removeRange"))
P.dk(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eF:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hj:function(a,b,c){var t=J.aG(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fJ(a,c)
return}t=this.cx
if(t==null){t=P.uf(null,null)
this.cx=t}t.aN(0,new H.qD(a,c))},
hi:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aG(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bZ()
return}t=this.cx
if(t==null){t=P.uf(null,null)
this.cx=t}t.aN(0,this.ght())},
hk:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fG(a)
if(b!=null)P.fG(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dx(t,t.r,null,null,[null]),r.c=t.e;r.J();)J.fJ(r.d,s)},
bt:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cn(o)
p=H.cm(o)
this.hk(q,p)
if(this.db===!0){this.bZ()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghs()
if(this.cx!=null)for(;n=this.cx,!n.gY(n);)this.cx.el().$0()}return s},
cN:function(a){return this.b.n(0,a)},
dc:function(a,b){var t=this.b
if(t.V(0,a))throw H.l(P.ln("Registry: ports must be registered only once."))
t.i(0,a,b)},
cw:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bZ()},
bZ:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.ba(0)
for(t=this.b,s=t.gc5(t),s=s.gT(s);s.J();)s.gO().f6()
t.ba(0)
this.c.ba(0)
u.globalState.z.ag(0,this.a)
this.dx.ba(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.x(t,p)
J.fJ(q,t[p])}this.ch=null}},
ghs:function(){return this.d},
gfZ:function(){return this.e}}
H.qD.prototype={
$0:function(){J.fJ(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qe.prototype={
h4:function(){var t=this.a
if(t.b===t.c)return
return t.el()},
ep:function(){var t,s,r
t=this.h4()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gY(s)}else s=!1
else s=!1
else s=!1
if(s)H.bb(P.ln("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gY(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hw(["command","close"])
r=new H.dy(!0,new P.k8(0,null,null,null,null,null,0,[null,P.E])).az(r)
s.toString
self.postMessage(r)}return!1}t.hK()
return!0},
dJ:function(){if(self.window!=null)new H.qf(this).$0()
else for(;this.ep(););},
bB:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dJ()
else try{this.dJ()}catch(r){t=H.cn(r)
s=H.cm(r)
q=u.globalState.Q
p=P.hw(["command","error","msg",H.A(t)+"\n"+H.A(s)])
p=new H.dy(!0,P.i1(null,P.E)).az(p)
q.toString
self.postMessage(p)}}}
H.qf.prototype={
$0:function(){if(!this.a.ep())return
P.x3(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eN.prototype={
hK:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bt(this.b)}}
H.qH.prototype={}
H.ml.prototype={
$0:function(){H.A9(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mm.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fF(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fF(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cw()},
$S:function(){return{func:1,v:true}}}
H.q1.prototype={}
H.fA.prototype={
b9:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdA())return
r=H.GT(b)
if(t.gfZ()===s){s=J.be(r)
switch(s.n(r,0)){case"pause":t.dT(s.n(r,1),s.n(r,2))
break
case"resume":t.hR(s.n(r,1))
break
case"add-ondone":t.fO(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hP(s.n(r,1))
break
case"set-errors-fatal":t.eF(s.n(r,1),s.n(r,2))
break
case"ping":t.hj(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hi(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.aN(0,new H.eN(t,new H.qK(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fA&&J.bc(this.b,b.b)},
ga6:function(a){return this.b.gcm()}}
H.qK.prototype={
$0:function(){var t=this.a.b
if(!t.gdA())t.f2(0,this.b)},
$S:function(){return{func:1}}}
H.i4.prototype={
b9:function(a,b){var t,s,r
t=P.hw(["command","message","port",this,"msg",b])
s=new H.dy(!0,P.i1(null,P.E)).az(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.i4&&J.bc(this.b,b.b)&&J.bc(this.a,b.a)&&J.bc(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aw()
s=this.a
if(typeof s!=="number")return s.aw()
r=this.c
if(typeof r!=="number")return H.a9(r)
return(t<<16^s<<8^r)>>>0}}
H.fp.prototype={
f6:function(){this.c=!0
this.b=null},
f2:function(a,b){if(this.c)return
this.b.$1(b)},
$isFL:1,
gcm:function(){return this.a},
gdA:function(){return this.c}}
H.ph.prototype={
eV:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aN(0,new H.eN(s,new H.pi(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dn(new H.pj(this,b),0),a)}else throw H.l(new P.Z("Timer greater than 0."))}}
H.pi.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pj.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dE.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.d2()
t=C.d.aY(t,0)^C.d.ap(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dE){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcm:function(){return this.a}}
H.dy.prototype={
az:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aG(a)
if(!!t.$isfj)return["buffer",a]
if(!!t.$iseu)return["typed",a]
if(!!t.$isaQ)return this.eB(a)
if(!!t.$isA6){r=this.gey()
q=t.gaD(a)
q=H.dj(q,r,H.aH(q,"o",0),null)
q=P.d4(q,!0,H.aH(q,"o",0))
t=t.gc5(a)
t=H.dj(t,r,H.aH(t,"o",0),null)
return["map",q,P.d4(t,!0,H.aH(t,"o",0))]}if(!!t.$ismF)return this.eC(a)
if(!!t.$isj)this.es(a)
if(!!t.$isFL)this.bE(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfA)return this.eD(a)
if(!!t.$isi4)return this.eE(a)
if(!!t.$iseY){p=a.$static_name
if(p==null)this.bE(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdE)return["capability",a.a]
if(!(a instanceof P.ad))this.es(a)
return["dart",u.classIdExtractor(a),this.eA(u.classFieldsExtractor(a))]},
bE:function(a,b){throw H.l(new P.Z((b==null?"Can't transmit:":b)+" "+H.A(a)))},
es:function(a){return this.bE(a,null)},
eB:function(a){var t=this.ez(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bE(a,"Can't serialize indexable: ")},
ez:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.az(a[s])
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
eA:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.az(a[t]))
return a},
eC:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bE(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.az(a[t[r]])
if(r>=s.length)return H.x(s,r)
s[r]=q}return["js-object",t,s]},
eE:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eD:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcm()]
return["raw sendport",a]}}
H.eL.prototype={
aZ:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dC("Bad serialized message: "+H.A(a)))
switch(C.b.gae(a)){case"ref":if(1>=a.length)return H.x(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.x(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return H.a(this.br(r),[null])
case"mutable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return this.br(r)
case"const":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"map":return this.h8(a)
case"sendport":return this.h9(a)
case"raw sendport":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h7(a)
case"function":if(1>=a.length)return H.x(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.x(a,1)
return new H.dE(a[1])
case"dart":s=a.length
if(1>=s)return H.x(a,1)
q=a[1]
if(2>=s)return H.x(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.br(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.A(a))}},
br:function(a){var t,s,r
t=J.be(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
t.i(a,s,this.aZ(t.n(a,s)));++s}return a},
h8:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q=P.mV()
this.b.push(q)
s=J.yu(J.vo(s,this.gh6()))
for(t=J.be(s),p=J.be(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aZ(p.n(r,o)))
return q},
h9:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
if(3>=t)return H.x(a,3)
q=a[3]
if(J.bc(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cN(q)
if(o==null)return
n=new H.fA(o,r)}else n=new H.i4(s,q,r)
this.b.push(n)
return n},
h7:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.be(s)
p=J.be(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a9(n)
if(!(o<n))break
q[t.n(s,o)]=this.aZ(p.n(r,o));++o}return q}}
H.kT.prototype={
gY:function(a){return this.gm(this)===0},
D:function(a){return P.wG(this)},
i:function(a,b,c){return H.zc()},
$isbp:1,
$asbp:null}
H.kU.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.dr(b)},
dr:function(a){return this.b[a]},
aa:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dr(q))}}}
H.o1.prototype={}
H.po.prototype={
aJ:function(a){var t,s,r
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
H.jC.prototype={
D:function(a){var t=this.b
if(t==null)return"NullError: "+H.A(this.a)
return"NullError: method not found: '"+H.A(t)+"' on null"}}
H.mI.prototype={
D:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.A(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.A(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.A(this.a)+")"}}
H.pq.prototype={
D:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h8.prototype={
gaL:function(){return this.b}}
H.rT.prototype={
$1:function(a){if(!!J.aG(a).$iseh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kb.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rG.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rH.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rI.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rJ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rK.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eY.prototype={
D:function(a){return"Closure '"+H.nW(this).trim()+"'"},
gi3:function(){return this},
$D:null}
H.p2.prototype={}
H.ox.prototype={
D:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fQ.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.ev(this.a)
else s=typeof t!=="object"?J.dB(t):H.ev(t)
t=H.ev(this.b)
if(typeof s!=="number")return s.i6()
return(s^t)>>>0},
D:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.A(this.d)+"' of "+H.nV(t)}}
H.kN.prototype={
D:function(a){return this.a}}
H.o7.prototype={
D:function(a){return"RuntimeError: "+H.A(this.a)}}
H.dW.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dB(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dW&&J.bc(this.a,b.a)}}
H.t.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gaD:function(a){return new H.mT(this,[H.O(this,0)])},
gc5:function(a){return H.dj(this.gaD(this),new H.mH(this),H.O(this,0),H.O(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dk(s,b)}else return this.hp(b)},
hp:function(a){var t=this.d
if(t==null)return!1
return this.bw(this.bJ(t,this.bv(a)),a)>=0},
bo:function(a,b){b.aa(0,new H.mG(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bn(t,b)
return s==null?null:s.gb_()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bn(r,b)
return s==null?null:s.gb_()}else return this.hq(b)},
hq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
return s[r].gb_()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.co()
this.b=t}this.da(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.co()
this.c=s}this.da(s,b,c)}else{r=this.d
if(r==null){r=this.co()
this.d=r}q=this.bv(b)
p=this.bJ(r,q)
if(p==null)this.cu(r,q,[this.cp(b,c)])
else{o=this.bw(p,b)
if(o>=0)p[o].sb_(c)
else p.push(this.cp(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.dI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dI(this.c,b)
else return this.hr(b)},
hr:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dR(q)
return q.gb_()},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.c}},
da:function(a,b,c){var t=this.bn(a,b)
if(t==null)this.cu(a,b,this.cp(b,c))
else t.sb_(c)},
dI:function(a,b){var t
if(a==null)return
t=this.bn(a,b)
if(t==null)return
this.dR(t)
this.dn(a,b)
return t.gb_()},
cp:function(a,b){var t,s
t=new H.mS(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dR:function(a){var t,s
t=a.gfD()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bv:function(a){return J.dB(a)&0x3ffffff},
bw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].ge7(),b))return s
return-1},
D:function(a){return P.wG(this)},
bn:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
dn:function(a,b){delete a[b]},
dk:function(a,b){return this.bn(a,b)!=null},
co:function(){var t=Object.create(null)
this.cu(t,"<non-identifier-key>",t)
this.dn(t,"<non-identifier-key>")
return t},
$isA6:1,
$isbp:1,
$asbp:null}
H.mH.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mG.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eP(function(a,b){return{func:1,args:[a,b]}},this.a,"t")}}
H.mS.prototype={
ge7:function(){return this.a},
gb_:function(){return this.b},
gfD:function(){return this.d},
sb_:function(a){return this.b=a}}
H.mT.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t,s
t=this.a
s=new H.mU(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ad:function(a,b){return this.a.V(0,b)},
aa:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bN(t))
s=s.c}}}
H.mU.prototype={
gO:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rC.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rE.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.hs.prototype={
D:function(a){return"RegExp/"+this.a+"/"},
gdC:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.u6(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdB:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.u6(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cB:function(a,b,c){var t
H.xS(b)
t=J.c1(b)
if(typeof t!=="number")return H.a9(t)
t=c>t
if(t)throw H.l(P.bF(c,0,J.c1(b),null,null))
return new H.pX(this,b,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ff:function(a,b){var t,s
t=this.gdC()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k9(this,s)},
ck:function(a,b){var t,s
t=this.gdB()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.x(s,-1)
if(s.pop()!=null)return
return new H.k9(this,s)},
ed:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return this.ck(b,c)},
$isFN:1,
$isux:1,
gfw:function(){return this.b}}
H.k9.prototype={
gd5:function(a){return this.b.index},
gdZ:function(a){var t=this.b
return t.index+t[0].length},
aV:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.x(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
$isd5:1}
H.pX.prototype={
gT:function(a){return new H.k_(this.a,this.b,this.c,null)},
$ashr:function(){return[P.d5]},
$aso:function(){return[P.d5]}}
H.k_.prototype={
gO:function(){return this.d},
J:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c1(t)
if(typeof t!=="number")return H.a9(t)
if(s<=t){r=this.a.ff(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jR.prototype={
gdZ:function(a){return this.a+this.c.length},
n:function(a,b){return this.aV(b)},
aV:function(a){if(a!==0)throw H.l(P.jJ(a,null,null))
return this.c},
$isd5:1,
gd5:function(a){return this.a}}
H.r_.prototype={
gT:function(a){return new H.r0(this.a,this.b,this.c,null)},
$aso:function(){return[P.d5]}}
H.r0.prototype={
J:function(){var t,s,r,q,p,o,n
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
this.d=new H.jR(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gO:function(){return this.d}}
H.fj.prototype={
gab:function(a){return C.a0},
fU:function(a,b,c){return H.cN(a,b,c)},
fT:function(a){return this.fU(a,0,null)},
fS:function(a,b,c){var t
H.xB(a,b,c)
t=new DataView(a,b)
return t},
fR:function(a,b){return this.fS(a,b,null)},
$isfj:1,
$isbi:1,
geb:function(a){return a.byteLength}}
H.eu.prototype={
ft:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dD(b,d,"Invalid list position"))
else throw H.l(P.bF(b,0,c,d,null))},
df:function(a,b,c,d){if(b>>>0!==b||b>c)this.ft(a,b,c,d)},
$iseu:1,
gbU:function(a){return a.buffer},
geb:function(a){return a.byteLength}}
H.nk.prototype={
gab:function(a){return C.a1}}
H.jz.prototype={
gm:function(a){return a.length},
dN:function(a,b,c,d,e){var t,s,r
t=a.length
this.df(a,b,t,"start")
this.df(a,c,t,"end")
if(typeof b!=="number")return b.aG()
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.bF(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a4()
if(e<0)throw H.l(P.dC(e))
r=d.length
if(r-e<s)throw H.l(new P.dR("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaU:1,
$asaU:function(){},
$isaQ:1,
$asaQ:function(){}}
H.hD.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.aG(d).$ishD){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)}}
H.hF.prototype={
$asaU:function(){},
$asaQ:function(){},
$asq:function(){return[P.T]},
$asv:function(){return[P.T]},
$aso:function(){return[P.T]},
$isq:1,
$isv:1,
$iso:1}
H.hH.prototype={
$asaU:function(){},
$asaQ:function(){},
$asq:function(){return[P.T]},
$asv:function(){return[P.T]},
$aso:function(){return[P.T]}}
H.hE.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.aG(d).$ishE){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.hG.prototype={
$asaU:function(){},
$asaQ:function(){},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]},
$isq:1,
$isv:1,
$iso:1}
H.hI.prototype={
$asaU:function(){},
$asaQ:function(){},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]}}
H.nl.prototype={
gab:function(a){return C.a2},
$isq:1,
$asq:function(){return[P.T]},
$isv:1,
$asv:function(){return[P.T]},
$iso:1,
$aso:function(){return[P.T]}}
H.nm.prototype={
gab:function(a){return C.a3},
$isq:1,
$asq:function(){return[P.T]},
$isv:1,
$asv:function(){return[P.T]},
$iso:1,
$aso:function(){return[P.T]}}
H.nn.prototype={
gab:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.no.prototype={
gab:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.np.prototype={
gab:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nq.prototype={
gab:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nr.prototype={
gab:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.jA.prototype={
gab:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.fk.prototype={
gab:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c7(a,b))
return a[b]},
c9:function(a,b,c){return new Uint8Array(a.subarray(b,H.GS(b,c,a.length)))},
$isfk:1,
$isdc:1,
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
P.pZ.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pY.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.q_.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.q0.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.re.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rf.prototype={
$2:function(a,b){this.a.$2(1,new H.h8(a,b))},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.rp.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.E,,]}}}
P.cE.prototype={}
P.rr.prototype={
$0:function(){var t,s,r
try{this.b.aI(this.a.$0())}catch(r){t=H.cn(r)
s=H.cm(r)
P.xD(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lZ.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lY.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.x(r,t)
r[t]=a
if(s===0)this.d.dj(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eZ.prototype={}
P.k1.prototype={
cF:function(a,b){if(a==null)a=new P.fl()
if(this.a.a!==0)throw H.l(new P.dR("Future already completed"))
$.aC.toString
this.ao(a,b)},
bq:function(a){return this.cF(a,null)},
$iseZ:1,
ghg:function(){return this.a}}
P.dY.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dR("Future already completed"))
t.dd(b)},
fX:function(a){return this.aC(a,null)},
ao:function(a,b){this.a.de(a,b)}}
P.kd.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dR("Future already completed"))
t.aI(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.k5.prototype={
gfN:function(){return this.b.b},
ge3:function(){return(this.c&1)!==0},
ghn:function(){return(this.c&2)!==0},
ge2:function(){return this.c===8},
hl:function(a){return this.b.b.cW(this.d,a)},
hw:function(a){if(this.c!==6)return!0
return this.b.b.cW(this.d,J.fI(a))},
hh:function(a){var t,s,r
t=this.e
s=J.b7(a)
r=this.b.b
if(H.fF(t,{func:1,args:[,,]}))return r.hV(t,s.gas(a),a.gaL())
else return r.cW(t,s.gas(a))},
hm:function(){return this.b.b.en(this.d)},
gcq:function(){return this.a}}
P.bj.prototype={
gfu:function(){return this.a===2},
gcn:function(){return this.a>=4},
c3:function(a,b){var t=$.aC
if(t!==C.e){t.toString
if(b!=null)b=P.xG(b,t)}return this.cv(a,b)},
b4:function(a){return this.c3(a,null)},
cv:function(a,b){var t,s
t=new P.bj(0,$.aC,null,[null])
s=b==null?1:3
this.cb(new P.k5(null,t,s,a,b,[H.O(this,0),null]))
return t},
c6:function(a){var t,s
t=$.aC
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.cb(new P.k5(null,s,8,a,null,[t,t]))
return s},
cb:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcn()){s.cb(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fD(null,null,t,new P.qk(this,a))}},
dG:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcq()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcn()){p.dG(a)
return}this.a=p.a
this.c=p.c}t.a=this.bO(a)
s=this.b
s.toString
P.fD(null,null,s,new P.qs(t,this))}},
bN:function(){var t=this.c
this.c=null
return this.bO(t)},
bO:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcq()
t.a=s}return s},
aI:function(a){var t,s
t=this.$ti
if(H.dZ(a,"$iscE",t,"$ascE"))if(H.dZ(a,"$isbj",t,null))P.qn(a,this)
else P.xr(a,this)
else{s=this.bN()
this.a=4
this.c=a
P.fy(this,s)}},
dj:function(a){var t=this.bN()
this.a=4
this.c=a
P.fy(this,t)},
ao:function(a,b){var t=this.bN()
this.a=8
this.c=new P.eT(a,b)
P.fy(this,t)},
f8:function(a){return this.ao(a,null)},
dd:function(a){var t
if(H.dZ(a,"$iscE",this.$ti,"$ascE")){this.f5(a)
return}this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qm(this,a))},
f5:function(a){var t
if(H.dZ(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qr(this,a))}else P.qn(a,this)
return}P.xr(a,this)},
de:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.ql(this,a,b))},
$iscE:1,
gbP:function(){return this.a},
gfG:function(){return this.c}}
P.qk.prototype={
$0:function(){P.fy(this.a,this.b)},
$S:function(){return{func:1}}}
P.qs.prototype={
$0:function(){P.fy(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qo.prototype={
$1:function(a){var t=this.a
t.a=0
t.aI(a)},
$S:function(){return{func:1,args:[,]}}}
P.qp.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qq.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qm.prototype={
$0:function(){this.a.dj(this.b)},
$S:function(){return{func:1}}}
P.qr.prototype={
$0:function(){P.qn(this.b,this.a)},
$S:function(){return{func:1}}}
P.ql.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qv.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hm()}catch(q){s=H.cn(q)
r=H.cm(q)
if(this.c){p=J.fI(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eT(s,r)
o.a=!0
return}if(!!J.aG(t).$iscE){if(t instanceof P.bj&&t.gbP()>=4){if(t.gbP()===8){p=this.b
p.b=t.gfG()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b4(new P.qw(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qw.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qu.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hl(this.c)}catch(r){t=H.cn(r)
s=H.cm(r)
q=this.a
q.b=new P.eT(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qt.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hw(t)===!0&&q.e!=null){p=this.b
p.b=q.hh(t)
p.a=!1}}catch(o){s=H.cn(o)
r=H.cm(o)
q=this.a
p=J.fI(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eT(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k0.prototype={}
P.dl.prototype={
ay:function(a,b){return new P.qJ(b,this,[H.aH(this,"dl",0),null])},
ad:function(a,b){var t,s
t={}
s=new P.bj(0,$.aC,null,[P.dd])
t.a=null
t.a=this.aR(new P.oE(t,this,b,s),!0,new P.oF(s),s.gbd())
return s},
aa:function(a,b){var t,s
t={}
s=new P.bj(0,$.aC,null,[null])
t.a=null
t.a=this.aR(new P.oK(t,this,b,s),!0,new P.oL(s),s.gbd())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.aC,null,[P.E])
t.a=0
this.aR(new P.oO(t),!0,new P.oP(t,s),s.gbd())
return s},
gY:function(a){var t,s
t={}
s=new P.bj(0,$.aC,null,[P.dd])
t.a=null
t.a=this.aR(new P.oM(t,s),!0,new P.oN(s),s.gbd())
return s},
aq:function(a){var t,s,r
t=H.aH(this,"dl",0)
s=H.a([],[t])
r=new P.bj(0,$.aC,null,[[P.q,t]])
this.aR(new P.oQ(this,s),!0,new P.oR(s,r),r.gbd())
return r},
gae:function(a){var t,s
t={}
s=new P.bj(0,$.aC,null,[H.aH(this,"dl",0)])
t.a=null
t.a=this.aR(new P.oG(t,this,s),!0,new P.oH(s),s.gbd())
return s}}
P.oE.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xK(new P.oC(this.c,a),new P.oD(t,s),P.xA(t.a,s))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oC.prototype={
$0:function(){return J.bc(this.b,this.a)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){if(a===!0)P.v6(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.dd]}}}
P.oF.prototype={
$0:function(){this.a.aI(!1)},
$S:function(){return{func:1}}}
P.oK.prototype={
$1:function(a){P.xK(new P.oI(this.c,a),new P.oJ(),P.xA(this.a.a,this.d))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oI.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oJ.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oL.prototype={
$0:function(){this.a.aI(null)},
$S:function(){return{func:1}}}
P.oO.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oP.prototype={
$0:function(){this.b.aI(this.a.a)},
$S:function(){return{func:1}}}
P.oM.prototype={
$1:function(a){P.v6(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oN.prototype={
$0:function(){this.a.aI(!0)},
$S:function(){return{func:1}}}
P.oQ.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.a,"dl")}}
P.oR.prototype={
$0:function(){this.b.aI(this.a)},
$S:function(){return{func:1}}}
P.oG.prototype={
$1:function(a){P.v6(this.a.a,this.c,a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oH.prototype={
$0:function(){var t,s,r,q
try{r=H.jr()
throw H.l(r)}catch(q){t=H.cn(q)
s=H.cm(q)
P.xD(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oB.prototype={}
P.dm.prototype={
cP:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dU()
if((t&4)===0&&(this.e&32)===0)this.du(this.gdE())},
eh:function(a){return this.cP(a,null)},
em:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gY(t)}else t=!1
if(t)this.r.c7(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.du(this.gdF())}}}},
bV:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cd()
t=this.f
return t==null?$.$get$hi():t},
cd:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dU()
if((this.e&32)===0)this.r=null
this.f=this.dD()},
bI:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dK(b)
else this.cc(new P.q8(b,null,[H.aH(this,"dm",0)]))},
bH:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dM(a,b)
else this.cc(new P.qa(a,b,null))},
f4:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dL()
else this.cc(C.J)},
bL:function(){},
bM:function(){},
dD:function(){return},
cc:function(a){var t,s
t=this.r
if(t==null){t=new P.qY(null,null,0,[H.aH(this,"dm",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c7(this)}},
dK:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cX(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
dM:function(a,b){var t,s
t=this.e
s=new P.q3(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cd()
t=this.f
if(!!J.aG(t).$iscE&&t!==$.$get$hi())t.c6(s)
else s.$0()}else{s.$0()
this.ce((t&4)!==0)}},
dL:function(){var t,s
t=new P.q2(this)
this.cd()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aG(s).$iscE&&s!==$.$get$hi())s.c6(t)
else t.$0()},
du:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
ce:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gY(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gY(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bL()
else this.bM()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c7(this)},
eY:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xG(b,t)
this.c=c},
gbP:function(){return this.e}}
P.q3.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fF(s,{func:1,args:[P.ad,P.dQ]})
q=t.d
p=this.b
o=t.b
if(r)q.hW(o,p,this.c)
else q.cX(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.q2.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eo(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k3.prototype={
gbx:function(a){return this.a},
sbx:function(a,b){return this.a=b}}
P.q8.prototype={
cQ:function(a){a.dK(this.b)}}
P.qa.prototype={
cQ:function(a){a.dM(this.b,this.c)},
$ask3:function(){},
gas:function(a){return this.b},
gaL:function(){return this.c}}
P.q9.prototype={
cQ:function(a){a.dL()},
gbx:function(a){return},
sbx:function(a,b){throw H.l(new P.dR("No events after a done."))}}
P.qL.prototype={
c7:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.y2(new P.qM(this,a))
this.a=1},
dU:function(){if(this.a===1)this.a=3},
gbP:function(){return this.a}}
P.qM.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbx(r)
t.b=q
if(q==null)t.c=null
r.cQ(this.b)},
$S:function(){return{func:1}}}
P.qY.prototype={
gY:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbx(0,b)
this.c=b}}}
P.qZ.prototype={}
P.rh.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.rg.prototype={
$2:function(a,b){P.GR(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.ri.prototype={
$0:function(){return this.a.aI(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
aR:function(a,b,c,d){return this.fb(a,d,c,!0===b)},
ec:function(a,b,c){return this.aR(a,null,b,c)},
fb:function(a,b,c,d){return P.Gw(this,a,b,c,d,H.aH(this,"hZ",0),H.aH(this,"hZ",1))},
dv:function(a,b){b.bI(0,a)},
fq:function(a,b,c){c.bH(a,b)},
$asdl:function(a,b){return[b]}}
P.i_.prototype={
bI:function(a,b){if((this.e&2)!==0)return
this.eO(0,b)},
bH:function(a,b){if((this.e&2)!==0)return
this.eP(a,b)},
bL:function(){var t=this.y
if(t==null)return
t.eh(0)},
bM:function(){var t=this.y
if(t==null)return
t.em(0)},
dD:function(){var t=this.y
if(t!=null){this.y=null
return t.bV(0)}return},
fl:function(a){this.x.dv(a,this)},
fp:function(a,b){this.x.fq(a,b,this)},
fn:function(){this.f4()},
f0:function(a,b,c,d,e,f,g){this.y=this.x.a.ec(this.gfk(),this.gfm(),this.gfo())},
$asdm:function(a,b){return[b]}}
P.qJ.prototype={
dv:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cn(q)
r=H.cm(q)
P.GQ(b,s,r)
return}b.bI(0,t)}}
P.eT.prototype={
D:function(a){return H.A(this.a)},
$iseh:1,
gas:function(a){return this.a},
gaL:function(){return this.b}}
P.rd.prototype={}
P.ro.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fl()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qP.prototype={
eo:function(a){var t,s,r,q
try{if(C.e===$.aC){r=a.$0()
return r}r=P.xH(null,null,this,a)
return r}catch(q){t=H.cn(q)
s=H.cm(q)
r=P.kg(null,null,this,t,s)
return r}},
cX:function(a,b){var t,s,r,q
try{if(C.e===$.aC){r=a.$1(b)
return r}r=P.xJ(null,null,this,a,b)
return r}catch(q){t=H.cn(q)
s=H.cm(q)
r=P.kg(null,null,this,t,s)
return r}},
hW:function(a,b,c){var t,s,r,q
try{if(C.e===$.aC){r=a.$2(b,c)
return r}r=P.xI(null,null,this,a,b,c)
return r}catch(q){t=H.cn(q)
s=H.cm(q)
r=P.kg(null,null,this,t,s)
return r}},
cD:function(a,b){if(b)return new P.qQ(this,a)
else return new P.qR(this,a)},
fV:function(a,b){return new P.qS(this,a)},
n:function(a,b){return},
en:function(a){if($.aC===C.e)return a.$0()
return P.xH(null,null,this,a)},
cW:function(a,b){if($.aC===C.e)return a.$1(b)
return P.xJ(null,null,this,a,b)},
hV:function(a,b,c){if($.aC===C.e)return a.$2(b,c)
return P.xI(null,null,this,a,b,c)}}
P.qQ.prototype={
$0:function(){return this.a.eo(this.b)},
$S:function(){return{func:1}}}
P.qR.prototype={
$0:function(){return this.a.en(this.b)},
$S:function(){return{func:1}}}
P.qS.prototype={
$1:function(a){return this.a.cX(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qy.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gc5:function(a){var t=H.O(this,0)
return H.dj(new P.qz(this,[t]),new P.qB(this),t,H.O(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fa(b)},
fa:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fi(0,b)},
fi:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.v4()
this.b=t}this.dh(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.v4()
this.c=s}this.dh(s,b,c)}else this.fH(b,c)},
fH:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.v4()
this.d=t}s=this.aO(a)
r=t[s]
if(r==null){P.v5(t,s,[a,b]);++this.a
this.e=null}else{q=this.aP(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
aa:function(a,b){var t,s,r,q
t=this.cg()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bN(this))}},
cg:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dh:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.v5(a,b,c)},
bl:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Gy(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aO:function(a){return J.dB(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bc(a[s],b))return s
return-1},
$isbp:1,
$asbp:null}
P.qB.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qz.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t=this.a
return new P.qA(t,t.cg(),0,null,this.$ti)},
ad:function(a,b){return this.a.V(0,b)},
aa:function(a,b){var t,s,r,q
t=this.a
s=t.cg()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bN(t))}}}
P.qA.prototype={
gO:function(){return this.d},
J:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bN(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k8.prototype={
bv:function(a){return H.HA(a)&0x3ffffff},
bw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge7()
if(r==null?b==null:r===b)return s}return-1}}
P.k7.prototype={
gT:function(a){var t=new P.dx(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gY:function(a){return this.a===0},
ad:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
cN:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ad(0,a)?a:null
else return this.fv(a)},
fv:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(a)]
r=this.aP(s,a)
if(r<0)return
return J.fH(s,r).gdq()},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dg(r,b)}else return this.aN(0,b)},
aN:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gz()
this.d=t}s=this.aO(b)
r=t[s]
if(r==null)t[s]=[this.cf(b)]
else{if(this.aP(r,b)>=0)return!1
r.push(this.cf(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return!1
this.di(s.splice(r,1)[0])
return!0},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dg:function(a,b){if(a[b]!=null)return!1
a[b]=this.cf(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.di(t)
delete a[b]
return!0},
cf:function(a){var t,s
t=new P.qF(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
di:function(a){var t,s
t=a.gf7()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.dB(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].gdq(),b))return s
return-1},
$iseA:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.qF.prototype={
gdq:function(){return this.a},
gf7:function(){return this.c}}
P.dx.prototype={
gO:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qC.prototype={}
P.ff.prototype={
ay:function(a,b){return H.dj(this,b,H.aH(this,"ff",0),null)},
ad:function(a,b){var t
for(t=this.gT(this);t.J();)if(J.bc(t.gO(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.gT(this);t.J();)b.$1(t.gO())},
a3:function(a,b){return P.d4(this,!0,H.aH(this,"ff",0))},
aq:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.J();)++s
return s},
gY:function(a){return!this.gT(this).J()},
D:function(a){return P.u2(this,"(",")")},
$iso:1,
$aso:null}
P.hr.prototype={}
P.jv.prototype={}
P.hJ.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
P.b5.prototype={
gT:function(a){return new H.dN(a,this.gm(a),0,null,[H.aH(a,"b5",0)])},
U:function(a,b){return this.n(a,b)},
aa:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bN(a))}},
gY:function(a){return this.gm(a)===0},
ad:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bc(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bN(a))}return!1},
ay:function(a,b){return new H.fi(a,b,[H.aH(a,"b5",0),null])},
d3:function(a,b){return H.x_(a,b,null,H.aH(a,"b5",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.aH(a,"b5",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
aq:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bY:function(a,b,c,d){var t
P.dk(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a9:function(a,b,c,d,e){var t,s,r,q,p,o
P.dk(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.an()
if(typeof b!=="number")return H.a9(b)
t=c-b
if(t===0)return
if(J.ed(e,0))H.bb(P.bF(e,0,null,"skipCount",null))
if(H.dZ(d,"$isq",[H.aH(a,"b5",0)],"$asq")){s=e
r=d}else{r=J.ys(d,e).a3(0,!1)
s=0}q=J.ki(s)
p=J.be(r)
if(J.cv(q.W(s,t),p.gm(r)))throw H.l(H.wz())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aF:function(a,b,c,d){var t,s,r,q,p
P.dk(b,c,this.gm(a),null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aA(a,b,r,d)
if(q!==0){this.a9(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a9(a,r,p,a,c)
this.aA(a,b,r,d)}},
b1:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bc(this.n(a,t),b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
D:function(a){return P.jq(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.r5.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify unmodifiable map"))},
$isbp:1,
$asbp:null}
P.n8.prototype={
n:function(a,b){return J.fH(this.a,b)},
i:function(a,b,c){J.kl(this.a,b,c)},
aa:function(a,b){J.vk(this.a,b)},
gY:function(a){return J.rX(this.a)},
gm:function(a){return J.c1(this.a)},
D:function(a){return J.cJ(this.a)},
$isbp:1,
$asbp:null}
P.hT.prototype={$asbp:null,$isbp:1}
P.n9.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.P+=", "
t.a=!1
t=this.b
s=t.P+=H.A(a)
t.P=s+": "
t.P+=H.A(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mW.prototype={
gT:function(a){return new P.qG(this,this.c,this.d,this.b,null,this.$ti)},
aa:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.x(r,s)
b.$1(r[s])
if(t!==this.d)H.bb(new P.bN(this))}},
gY:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
U:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a9(b)
if(0>b||b>=t)H.bb(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.x(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fM(t)
return t},
aq:function(a){return this.a3(a,!0)},
h:function(a,b){this.aN(0,b)},
ba:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.x(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
D:function(a){return P.jq(this,"{","}")},
el:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jr());++this.d
s=this.a
r=s.length
if(t>=r)return H.x(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aN:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.x(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dt();++this.d},
dt:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a9(s,0,q,t,r)
C.b.a9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fM:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a9(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a9(a,0,p,r,t)
C.b.a9(a,p,p+this.c,this.a,0)
return this.c+p}},
eT:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$aso:null}
P.qG.prototype={
gO:function(){return this.e},
J:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bb(new P.bN(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.x(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oj.prototype={
gY:function(a){return this.a===0},
bo:function(a,b){var t
for(t=J.cQ(b);t.J();)this.h(0,t.gO())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dx(this,this.r,null,null,[null]),s.c=this.e,r=0;s.J();r=p){q=s.d
p=r+1
if(r>=t.length)return H.x(t,r)
t[r]=q}return t},
aq:function(a){return this.a3(a,!0)},
ay:function(a,b){return new H.h0(this,b,[H.O(this,0),null])},
D:function(a){return P.jq(this,"{","}")},
aa:function(a,b){var t
for(t=new P.dx(this,this.r,null,null,[null]),t.c=this.e;t.J();)b.$1(t.d)},
bg:function(a,b){var t,s
t=new P.dx(this,this.r,null,null,[null])
t.c=this.e
if(!t.J())return""
if(b===""){s=""
do s+=H.A(t.d)
while(t.J())}else{s=H.A(t.d)
for(;t.J();)s=s+b+H.A(t.d)}return s.charCodeAt(0)==0?s:s},
$iseA:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.oi.prototype={}
P.kB.prototype={
hA:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.be(b)
a1=P.dk(a0,a1,t.gm(b),null,null,null)
s=$.$get$xq()
if(typeof a1!=="number")return H.a9(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a_(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rB(C.c.a5(b,l))
h=H.rB(C.c.a5(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.x(s,g)
f=s[g]
if(f>=0){g=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.P.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cd("")
p.P+=C.c.M(b,q,r)
p.P+=H.hK(k)
q=l
continue}}throw H.l(new P.bK("Invalid base64 data",b,r))}if(p!=null){t=p.P+=t.M(b,q,a1)
e=t.length
if(o>=0)P.vs(b,n,a1,o,m,e)
else{d=C.a.bG(e-1,4)+1
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.P=t;++d}}t=p.P
return C.c.aF(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vs(b,n,a1,o,m,c)
else{d=C.d.bG(c,4)
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aF(b,a1,a1,d===2?"==":"=")}return b},
$asfU:function(){return[[P.q,P.E],P.C]}}
P.kC.prototype={
$asfW:function(){return[[P.q,P.E],P.C]}}
P.fU.prototype={}
P.fW.prototype={}
P.lh.prototype={
$asfU:function(){return[P.C,[P.q,P.E]]}}
P.pA.prototype={
gK:function(a){return"utf-8"}}
P.pB.prototype={
cG:function(a,b,c){var t,s,r,q
t=J.c1(a)
P.dk(b,c,t,null,null,null)
s=new P.cd("")
r=new P.r7(!1,s,!0,0,0,0)
r.cG(a,b,t)
r.hc(0,a,t)
q=s.P
return q.charCodeAt(0)==0?q:q},
h_:function(a){return this.cG(a,0,null)},
$asfW:function(){return[[P.q,P.E],P.C]}}
P.r7.prototype={
hc:function(a,b,c){if(this.e>0)throw H.l(new P.bK("Unfinished UTF-8 octet sequence",b,c))},
cG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.r9(c)
p=new P.r8(this,a,b,c)
$loop$0:for(o=J.be(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aK()
if((l&192)!==128){k=new P.bK("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.x(C.w,k)
if(t<=C.w[k]){k=new P.bK("Overlong encoding of 0x"+C.a.bC(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bK("Character outside valid Unicode range: 0x"+C.a.bC(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.P+=H.hK(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cv(j,0)){this.c=!1
if(typeof j!=="number")return H.a9(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dz(l)
if(g.a4(l,0)){g=new P.bK("Negative UTF-8 code unit: -0x"+J.yv(g.d0(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aK()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bK("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.r9.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.be(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aK()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.E,args:[,P.E]}}}
P.r8.prototype={
$2:function(a,b){this.a.b.P+=P.oW(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.E,P.E]}}}
P.dd.prototype={}
P.bG.prototype={}
P.dH.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dH))return!1
return this.a===b.a&&this.b===b.b},
aB:function(a,b){return C.a.aB(this.a,b.gfL())},
ga6:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
D:function(a){var t,s,r,q,p,o,n
t=P.zf(H.wM(this))
s=P.ii(H.nU(this))
r=P.ii(H.nT(this))
q=P.ii(H.Fs(this))
p=P.ii(H.Fu(this))
o=P.ii(H.Fv(this))
n=P.zg(H.Ft(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.ze(C.a.W(this.a,b.gi9()),this.b)},
ghx:function(){return this.a},
d9:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dC(this.ghx()))},
$isbG:1,
$asbG:function(){return[P.dH]},
gfL:function(){return this.a}}
P.T.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.dI.prototype={
W:function(a,b){return new P.dI(this.a+b.gbm())},
au:function(a,b){if(typeof b!=="number")return H.a9(b)
return new P.dI(C.d.bA(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbm())},
aG:function(a,b){return C.a.aG(this.a,b.gbm())},
av:function(a,b){return C.a.av(this.a,b.gbm())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dI))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
aB:function(a,b){return C.a.aB(this.a,b.gbm())},
D:function(a){var t,s,r,q,p
t=new P.lf()
s=this.a
if(s<0)return"-"+new P.dI(0-s).D(0)
r=t.$1(C.a.ap(s,6e7)%60)
q=t.$1(C.a.ap(s,1e6)%60)
p=new P.le().$1(s%1e6)
return""+C.a.ap(s,36e8)+":"+H.A(r)+":"+H.A(q)+"."+H.A(p)},
d0:function(a){return new P.dI(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dI]},
gbm:function(){return this.a}}
P.le.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.E]}}}
P.lf.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.E]}}}
P.eh.prototype={
gaL:function(){return H.cm(this.$thrownJsError)}}
P.fl.prototype={
D:function(a){return"Throw of null."}}
P.cZ.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
D:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.A(t)
q=this.gcj()+s+r
if(!this.a)return q
p=this.gci()
o=P.vJ(this.b)
return q+p+": "+H.A(o)},
gK:function(a){return this.c}}
P.ez.prototype={
gcj:function(){return"RangeError"},
gci:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.A(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.A(t)
else{if(typeof r!=="number")return r.aG()
if(r>t)s=": Not in range "+H.A(t)+".."+H.A(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.A(t)}}return s}}
P.mi.prototype={
gcj:function(){return"RangeError"},
gci:function(){if(J.ed(this.b,0))return": index must not be negative"
var t=this.f
if(J.bc(t,0))return": no indices are valid"
return": index should be less than "+H.A(t)},
gm:function(a){return this.f}}
P.Z.prototype={
D:function(a){return"Unsupported operation: "+this.a}}
P.eF.prototype={
D:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.A(t):"UnimplementedError"}}
P.dR.prototype={
D:function(a){return"Bad state: "+this.a}}
P.bN.prototype={
D:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.A(P.vJ(t))+"."}}
P.nA.prototype={
D:function(a){return"Out of Memory"},
gaL:function(){return},
$iseh:1}
P.jQ.prototype={
D:function(a){return"Stack Overflow"},
gaL:function(){return},
$iseh:1}
P.l6.prototype={
D:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.A(t)+"' during its initialization"}}
P.qj.prototype={
D:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.A(t)}}
P.bK.prototype={
D:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.A(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.M(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a9(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a5(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.A(r-o+1)+")\n"):s+(" (at character "+H.A(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.a_(q,m)
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
g=""}f=C.c.M(q,i,j)
return s+h+f+g+"\n"+C.c.au(" ",r-i+h.length)+"^\n"}}
P.lo.prototype={
D:function(a){return"Expando:"+H.A(this.a)},
n:function(a,b){var t,s
t=this.bK
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bb(P.dD(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uC(b,"expando$values")
return s==null?null:H.uC(s,t)},
i:function(a,b,c){var t,s
t=this.bK
if(typeof t!=="string")t.set(b,c)
else{s=H.uC(b,"expando$values")
if(s==null){s=new P.ad()
H.wQ(b,"expando$values",s)}H.wQ(s,t,c)}},
gK:function(a){return this.a}}
P.E.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.o.prototype={
ay:function(a,b){return H.dj(this,b,H.aH(this,"o",0),null)},
ad:function(a,b){var t
for(t=this.gT(this);t.J();)if(J.bc(t.gO(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.gT(this);t.J();)b.$1(t.gO())},
a3:function(a,b){return P.d4(this,!0,H.aH(this,"o",0))},
aq:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.J();)++s
return s},
gY:function(a){return!this.gT(this).J()},
U:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.yy("index"))
if(b<0)H.bb(P.bF(b,0,null,"index",null))
for(t=this.gT(this),s=0;t.J();){r=t.gO()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
D:function(a){return P.u2(this,"(",")")},
$aso:null}
P.js.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$iso:1,$aso:null}
P.bp.prototype={$asbp:null}
P.d6.prototype={
ga6:function(a){return P.ad.prototype.ga6.call(this,this)},
D:function(a){return"null"}}
P.dq.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.ad.prototype={constructor:P.ad,$isad:1,
S:function(a,b){return this===b},
ga6:function(a){return H.ev(this)},
D:function(a){return H.nV(this)},
gab:function(a){return new H.dW(H.kk(this),null)},
toString:function(){return this.D(this)}}
P.d5.prototype={}
P.eA.prototype={}
P.dQ.prototype={}
P.C.prototype={$isbG:1,
$asbG:function(){return[P.C]},
$isux:1}
P.cd.prototype={
gm:function(a){return this.P.length},
gY:function(a){return this.P.length===0},
D:function(a){var t=this.P
return t.charCodeAt(0)==0?t:t},
gP:function(){return this.P}}
P.eH.prototype={}
P.pw.prototype={
$2:function(a,b){var t,s,r,q
t=J.be(b)
s=t.bf(b,"=")
if(s===-1){if(!t.S(b,""))J.kl(a,P.r6(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.M(b,0,s)
q=C.c.ai(b,s+1)
t=this.a
J.kl(a,P.r6(r,0,r.length,t,!0),P.r6(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pt.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.E]}}}
P.pu.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.pv.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fn(C.c.M(this.a,a,b),16,null)
s=J.dz(t)
if(s.a4(t,0)||s.aG(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.E,args:[P.E,P.E]}}}
P.ke.prototype={
gev:function(){return this.b},
gcK:function(a){var t=this.c
if(t==null)return""
if(C.c.ah(t,"["))return C.c.M(t,1,t.length-1)
return t},
gcR:function(a){var t=this.d
if(t==null)return P.xt(this.a)
return t},
gcS:function(a){var t=this.f
return t==null?"":t},
ge1:function(){var t=this.r
return t==null?"":t},
gcT:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hT(P.xj(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge4:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge5:function(){return this.r!=null},
D:function(a){var t=this.y
if(t==null){t=this.dz()
this.y=t}return t},
dz:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.A(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.A(s)}else t=s
t+=H.A(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aG(b)
if(!!t.$iseH){if(this.a===b.gd1())if(this.c!=null===b.ge4()){s=this.b
r=b.gev()
if(s==null?r==null:s===r){s=this.gcK(this)
r=t.gcK(b)
if(s==null?r==null:s===r)if(J.bc(this.gcR(this),t.gcR(b)))if(J.bc(this.e,t.geg(b))){s=this.f
r=s==null
if(!r===b.ge6()){if(r)s=""
if(s===t.gcS(b)){t=this.r
s=t==null
if(!s===b.ge5()){if(s)t=""
t=t===b.ge1()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dz()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseH:1,
gd1:function(){return this.a},
geg:function(a){return this.e}}
P.rq.prototype={
$1:function(a){throw H.l(new P.bK("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.ps.prototype={
geu:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
t=t[0]+1
r=J.be(s)
q=r.b1(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fB(s,o,p,C.l,!1)
if(n==null)n=r.M(s,o,p)
p=q}else n=null
m=P.fB(s,t,p,C.D,!1)
t=new P.q7(this,"data",null,null,null,m==null?r.M(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
D:function(a){var t,s
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
return t[0]===-1?"data:"+H.A(s):s}}
P.rl.prototype={
$1:function(a){return new Uint8Array(H.cz(96))},
$S:function(){return{func:1,args:[,]}}}
P.rk.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.x(t,a)
t=t[a]
J.yd(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dc,args:[,,]}}}
P.rm.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dp(a),r=0;r<t;++r)s.i(a,C.c.a5(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.C,P.E]}}}
P.rn.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a5(b,0),s=C.c.a5(b,1),r=J.dp(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.C,P.E]}}}
P.qX.prototype={
ge4:function(){return this.c>0},
ge6:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
ge5:function(){return this.r<this.a.length},
gd1:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ah(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ah(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ah(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ah(this.a,"package")){this.x="package"
t="package"}else{t=C.c.M(this.a,0,t)
this.x=t}return t},
gev:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.M(this.a,s,t-1):""},
gcK:function(a){var t=this.c
return t>0?C.c.M(this.a,t,this.d):""},
gcR:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a9(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.fn(C.c.M(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ah(this.a,"http"))return 80
if(t===5&&C.c.ah(this.a,"https"))return 443
return 0},
geg:function(a){return C.c.M(this.a,this.e,this.f)},
gcS:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.M(this.a,t+1,s):""},
ge1:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ai(s,t+1):""},
gcT:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.a_
t=P.C
return new P.hT(P.xj(this.gcS(this),C.n),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aG(b)
if(!!t.$iseH)return this.a===t.D(b)
return!1},
D:function(a){return this.a},
$iseH:1}
P.q7.prototype={}
W.aI.prototype={}
W.eS.prototype={
D:function(a){return String(a)},
$iseS:1,
$isj:1,
gaf:function(a){return a.href}}
W.ks.prototype={
D:function(a){return String(a)},
$isj:1,
gaf:function(a){return a.href}}
W.eV.prototype={$iseV:1,$isdt:1,$isaR:1,$isad:1}
W.cK.prototype={$isad:1}
W.kz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cK]},
$isv:1,
$asv:function(){return[W.cK]},
$iso:1,
$aso:function(){return[W.cK]},
$isaU:1,
$asaU:function(){return[W.cK]},
$isaQ:1,
$asaQ:function(){return[W.cK]}}
W.h2.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isq:1,
$isv:1,
$iso:1}
W.h5.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isq:1,
$isv:1,
$iso:1}
W.kD.prototype={
gaf:function(a){return a.href}}
W.eW.prototype={$iseW:1}
W.kH.prototype={$isj:1}
W.eX.prototype={$iseX:1,
gK:function(a){return a.name}}
W.ef.prototype={$isj:1,
gm:function(a){return a.length}}
W.kO.prototype={
at:function(a,b){return a.get(b)}}
W.kS.prototype={$isj:1}
W.id.prototype={
cI:function(a,b){return typeof console!="undefined"?console.error(b):null},
aV:function(a){return typeof console!="undefined"?console.group(a):null},
e8:function(a){return typeof console!="undefined"?console.info(a):null},
i_:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fX.prototype={
gK:function(a){return a.name}}
W.kW.prototype={
at:function(a,b){if(b!=null)return a.get(P.Hd(b,null))
return a.get()},
bk:function(a){return this.at(a,null)}}
W.kZ.prototype={
gaM:function(a){return a.style}}
W.l_.prototype={
gaf:function(a){return a.href}}
W.fY.prototype={
gaM:function(a){return a.style}}
W.fZ.prototype={
gK:function(a){return a.name}}
W.l0.prototype={
gaM:function(a){return a.style}}
W.bJ.prototype={$isbJ:1,$isad:1}
W.f_.prototype={
bF:function(a,b){var t=this.fj(a,b)
return t!=null?t:""},
fj:function(a,b){if(W.zd(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zh()+b)},
L:function(a,b){return a.item(b)},
gbe:function(a){return a.content},
gbs:function(a){return a.display},
sbs:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iI.prototype={}
W.q5.prototype={
bF:function(a,b){var t=this.b
return J.yo(t.gae(t),b)},
fI:function(a,b){var t
for(t=this.a,t=new H.dN(t,t.gm(t),0,null,[H.O(t,0)]);t.J();)t.d.style[a]=b},
sbs:function(a,b){this.fI("display",b)},
eZ:function(a){var t=P.d4(this.a,!0,null)
this.b=new H.fi(t,new W.q6(),[H.O(t,0),null])}}
W.jD.prototype={}
W.q6.prototype={
$1:function(a){return J.rY(a)},
$S:function(){return{func:1,args:[,]}}}
W.ig.prototype={
gbe:function(a){return this.bF(a,"content")},
gbs:function(a){return this.bF(a,"display")}}
W.l1.prototype={
gaM:function(a){return a.style}}
W.l2.prototype={
gaM:function(a){return a.style}}
W.l7.prototype={
gcJ:function(a){return a.files}}
W.f0.prototype={$isf0:1,$isad:1}
W.ih.prototype={
bR:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
L:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.h_.prototype={$ish_:1}
W.eg.prototype={$iseg:1}
W.ij.prototype={$isj:1}
W.ik.prototype={
gK:function(a){return a.name}}
W.la.prototype={
gK:function(a){var t=a.name
if(P.vI()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vI()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
D:function(a){return String(a)}}
W.il.prototype={
D:function(a){return"Rectangle ("+H.A(a.left)+", "+H.A(a.top)+") "+H.A(this.gb8(a))+" x "+H.A(this.gb0(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aG(b)
if(!t.$isbU)return!1
return a.left===t.gc_(b)&&a.top===t.gc4(b)&&this.gb8(a)===t.gb8(b)&&this.gb0(a)===t.gb0(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb8(a)
q=this.gb0(a)
return W.xs(W.eO(W.eO(W.eO(W.eO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.im.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]},
$isaU:1,
$asaU:function(){return[P.C]},
$isaQ:1,
$asaQ:function(){return[P.C]}}
W.iJ.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$aso:function(){return[P.C]},
$isq:1,
$isv:1,
$iso:1}
W.j2.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$aso:function(){return[P.C]},
$isq:1,
$isv:1,
$iso:1}
W.io.prototype={
L:function(a,b){return a.item(b)}}
W.ip.prototype={
h:function(a,b){return a.add(b)},
ad:function(a,b){return a.contains(b)},
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k4.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot modify list"))},
gaM:function(a){return W.Gv(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.dt.prototype={
gdV:function(a){return new W.qd(a)},
D:function(a){return a.localName},
e9:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
gee:function(a){return new W.eM(a,"click",!1,[W.uo])},
$isdt:1,
$isaR:1,
$isad:1,
$isj:1,
gaM:function(a){return a.style}}
W.lg.prototype={
gK:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.h1.prototype={
gK:function(a){return a.name}}
W.lm.prototype={
gas:function(a){return a.error}}
W.U.prototype={$isU:1,$isad:1}
W.aV.prototype={
fP:function(a,b,c,d){if(c!=null)this.f3(a,b,c,!1)},
hQ:function(a,b,c,d){if(c!=null)this.fF(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.dn(c,1),!1)},
fF:function(a,b,c,d){return a.removeEventListener(b,H.dn(c,1),!1)}}
W.lN.prototype={
gK:function(a){return a.name}}
W.cg.prototype={$iscg:1,$isad:1,
gK:function(a){return a.name}}
W.f7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isf7:1,
$isaU:1,
$asaU:function(){return[W.cg]},
$isaQ:1,
$asaQ:function(){return[W.cg]},
$isq:1,
$asq:function(){return[W.cg]},
$isv:1,
$asv:function(){return[W.cg]},
$iso:1,
$aso:function(){return[W.cg]}}
W.iK.prototype={
$asq:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isq:1,
$isv:1,
$iso:1}
W.j3.prototype={
$asq:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$aso:function(){return[W.cg]},
$isq:1,
$isv:1,
$iso:1}
W.lO.prototype={
gas:function(a){return a.error}}
W.lP.prototype={
gK:function(a){return a.name}}
W.lQ.prototype={
gas:function(a){return a.error},
gm:function(a){return a.length}}
W.lT.prototype={
gaM:function(a){return a.style},
gb7:function(a){return a.weight}}
W.lU.prototype={
h:function(a,b){return a.add(b)},
i8:function(a,b,c){return a.forEach(H.dn(b,3),c)},
aa:function(a,b){b=H.dn(b,3)
return a.forEach(b)}}
W.lW.prototype={
at:function(a,b){return a.get(b)}}
W.iE.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.co.prototype={$isco:1,$isad:1}
W.m6.prototype={
gm:function(a){return a.length}}
W.f9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aR]},
$isv:1,
$asv:function(){return[W.aR]},
$iso:1,
$aso:function(){return[W.aR]},
$isaU:1,
$asaU:function(){return[W.aR]},
$isaQ:1,
$asaQ:function(){return[W.aR]}}
W.iL.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.j4.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.iG.prototype={
L:function(a,b){return a.item(b)}}
W.e4.prototype={
ij:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hC:function(a,b,c,d){return a.open(b,c,d)},
ghT:function(a){return W.GU(a.response)},
b9:function(a,b){return a.send(b)},
$ise4:1,
$isad:1,
ghU:function(a){return a.responseText}}
W.m9.prototype={
$1:function(a){return J.yk(a)},
$S:function(){return{func:1,args:[W.e4]}}}
W.ma.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.av()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aC(0,t)
else p.bq(a)},
$S:function(){return{func:1,args:[,]}}}
W.hj.prototype={}
W.me.prototype={
gK:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.hk.prototype={$ishk:1}
W.fb.prototype={$isfb:1,$isdt:1,$isaR:1,$isad:1,
aC:function(a,b){return a.complete.$1(b)},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.mj.prototype={$isj:1,
gcJ:function(a){return a.files},
gK:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.mL.prototype={
gK:function(a){return a.name}}
W.hu.prototype={
h:function(a,b){return a.add(b)}}
W.hv.prototype={$ishv:1,
gaf:function(a){return a.href}}
W.n2.prototype={
D:function(a){return String(a)},
gaf:function(a){return a.href}}
W.n7.prototype={
gK:function(a){return a.name}}
W.hB.prototype={
gas:function(a){return a.error},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.jx.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nd.prototype={
gbe:function(a){return a.content},
gK:function(a){return a.name}}
W.ne.prototype={
i4:function(a,b,c){return a.send(b,c)},
b9:function(a,b){return a.send(b)}}
W.hC.prototype={
gK:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isad:1}
W.jy.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.cq]},
$isaQ:1,
$asaQ:function(){return[W.cq]},
$isq:1,
$asq:function(){return[W.cq]},
$isv:1,
$asv:function(){return[W.cq]},
$iso:1,
$aso:function(){return[W.cq]}}
W.iV.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isq:1,
$isv:1,
$iso:1}
W.je.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isq:1,
$isv:1,
$iso:1}
W.ns.prototype={$isj:1}
W.nt.prototype={
gK:function(a){return a.name}}
W.aR.prototype={
D:function(a){var t=a.nodeValue
return t==null?this.eL(a):t},
ad:function(a,b){return a.contains(b)},
$isaR:1,
$isad:1}
W.jB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aR]},
$isv:1,
$asv:function(){return[W.aR]},
$iso:1,
$aso:function(){return[W.aR]},
$isaU:1,
$asaU:function(){return[W.aR]},
$isaQ:1,
$asaQ:function(){return[W.aR]}}
W.iW.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.jf.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.nw.prototype={
gK:function(a){return a.name}}
W.nB.prototype={
gK:function(a){return a.name}}
W.nF.prototype={
gK:function(a){return a.name}}
W.nH.prototype={$isj:1}
W.e7.prototype={
gK:function(a){return a.name}}
W.nM.prototype={
gm:function(a){return a.length}}
W.ci.prototype={
L:function(a,b){return a.item(b)},
$isci:1,
$isad:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]},
$isaU:1,
$asaU:function(){return[W.ci]},
$isaQ:1,
$asaQ:function(){return[W.ci]}}
W.iX.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isq:1,
$isv:1,
$iso:1}
W.jg.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isq:1,
$isv:1,
$iso:1}
W.nS.prototype={
b9:function(a,b){return a.send(b)}}
W.jK.prototype={
b9:function(a,b){return a.send(b)}}
W.fq.prototype={$isfq:1,$isdt:1,$isaR:1,$isad:1,
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.jL.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.oh.prototype={
gK:function(a){return a.name}}
W.ok.prototype={$isj:1}
W.ol.prototype={
gK:function(a){return a.name}}
W.om.prototype={
gK:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isad:1}
W.jN.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]},
$isaU:1,
$asaU:function(){return[W.cr]},
$isaQ:1,
$asaQ:function(){return[W.cr]}}
W.h3.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.h6.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.oq.prototype={
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.hP.prototype={$ishP:1}
W.cs.prototype={$iscs:1,$isad:1,
gb7:function(a){return a.weight}}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cs]},
$isv:1,
$asv:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]},
$isaU:1,
$asaU:function(){return[W.cs]},
$isaQ:1,
$asaQ:function(){return[W.cs]}}
W.iY.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isq:1,
$isv:1,
$iso:1}
W.jh.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isq:1,
$isv:1,
$iso:1}
W.fr.prototype={$isfr:1,$isad:1}
W.ot.prototype={
gas:function(a){return a.error}}
W.ck.prototype={
L:function(a,b){return a.item(b)},
$isck:1,
$isad:1,
gm:function(a){return a.length}}
W.ou.prototype={
gK:function(a){return a.name}}
W.ov.prototype={
gK:function(a){return a.name}}
W.oA.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
aa:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gY:function(a){return a.key(0)==null},
$isbp:1,
$asbp:function(){return[P.C,P.C]}}
W.oX.prototype={
at:function(a,b){return a.get(b)}}
W.cl.prototype={$iscl:1,$isad:1,
gaf:function(a){return a.href}}
W.e9.prototype={}
W.p4.prototype={
gbe:function(a){return a.content}}
W.hQ.prototype={$ishQ:1,
gK:function(a){return a.name}}
W.cP.prototype={$isad:1}
W.cH.prototype={$isad:1}
W.pb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cH]},
$isaQ:1,
$asaQ:function(){return[W.cH]},
$isq:1,
$asq:function(){return[W.cH]},
$isv:1,
$asv:function(){return[W.cH]},
$iso:1,
$aso:function(){return[W.cH]}}
W.iZ.prototype={
$asq:function(){return[W.cH]},
$asv:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isq:1,
$isv:1,
$iso:1}
W.ji.prototype={
$asq:function(){return[W.cH]},
$asv:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isq:1,
$isv:1,
$iso:1}
W.pc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cP]},
$isaQ:1,
$asaQ:function(){return[W.cP]},
$isq:1,
$asq:function(){return[W.cP]},
$isv:1,
$asv:function(){return[W.cP]},
$iso:1,
$aso:function(){return[W.cP]}}
W.h4.prototype={
$asq:function(){return[W.cP]},
$asv:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isq:1,
$isv:1,
$iso:1}
W.h7.prototype={
$asq:function(){return[W.cP]},
$asv:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isq:1,
$isv:1,
$iso:1}
W.pg.prototype={
gm:function(a){return a.length}}
W.ct.prototype={$isct:1,$isad:1}
W.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ct]},
$isv:1,
$asv:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]},
$isaU:1,
$asaU:function(){return[W.ct]},
$isaQ:1,
$asaQ:function(){return[W.ct]}}
W.j_.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isq:1,
$isv:1,
$iso:1}
W.jj.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isq:1,
$isv:1,
$iso:1}
W.fv.prototype={$isfv:1,$isad:1}
W.jT.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pl.prototype={
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.ea.prototype={}
W.px.prototype={
D:function(a){return String(a)},
$isj:1,
gaf:function(a){return a.href}}
W.py.prototype={
at:function(a,b){return a.get(b)}}
W.pC.prototype={
gm:function(a){return a.length}}
W.fw.prototype={$isfw:1,$isad:1}
W.jU.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pH.prototype={
b9:function(a,b){return a.send(b)}}
W.jX.prototype={$isj:1,
gK:function(a){return a.name}}
W.pO.prototype={$isj:1}
W.eJ.prototype={$isj:1}
W.fx.prototype={$isfx:1,$isaR:1,$isad:1,
gK:function(a){return a.name}}
W.q4.prototype={
D:function(a){return"Rectangle ("+H.A(a.left)+", "+H.A(a.top)+") "+H.A(a.width)+" x "+H.A(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aG(b)
if(!t.$isbU)return!1
s=a.left
r=t.gc_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc4(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dB(a.left)
s=J.dB(a.top)
r=J.dB(a.width)
q=J.dB(a.height)
return W.xs(W.eO(W.eO(W.eO(W.eO(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width}}
W.hY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[P.bU]},
$isaQ:1,
$asaQ:function(){return[P.bU]},
$isq:1,
$asq:function(){return[P.bU]},
$isv:1,
$asv:function(){return[P.bU]},
$iso:1,
$aso:function(){return[P.bU]}}
W.j0.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isq:1,
$isv:1,
$iso:1}
W.jk.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isq:1,
$isv:1,
$iso:1}
W.k2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bJ]},
$isv:1,
$asv:function(){return[W.bJ]},
$iso:1,
$aso:function(){return[W.bJ]},
$isaU:1,
$asaU:function(){return[W.bJ]},
$isaQ:1,
$asaQ:function(){return[W.bJ]}}
W.j1.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isq:1,
$isv:1,
$iso:1}
W.jl.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isq:1,
$isv:1,
$iso:1}
W.qb.prototype={$isj:1}
W.qc.prototype={
gb0:function(a){return a.height},
gb8:function(a){return a.width}}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.co]},
$isaQ:1,
$asaQ:function(){return[W.co]},
$isq:1,
$asq:function(){return[W.co]},
$isv:1,
$asv:function(){return[W.co]},
$iso:1,
$aso:function(){return[W.co]}}
W.iM.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$aso:function(){return[W.co]},
$isq:1,
$isv:1,
$iso:1}
W.j5.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$aso:function(){return[W.co]},
$isq:1,
$isv:1,
$iso:1}
W.qx.prototype={$isj:1}
W.i2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aR]},
$isv:1,
$asv:function(){return[W.aR]},
$iso:1,
$aso:function(){return[W.aR]},
$isaU:1,
$asaU:function(){return[W.aR]},
$isaQ:1,
$asaQ:function(){return[W.aR]}}
W.iN.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.j6.prototype={
$asq:function(){return[W.aR]},
$asv:function(){return[W.aR]},
$aso:function(){return[W.aR]},
$isq:1,
$isv:1,
$iso:1}
W.qW.prototype={$isj:1}
W.ka.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ck]},
$isv:1,
$asv:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]},
$isaU:1,
$asaU:function(){return[W.ck]},
$isaQ:1,
$asaQ:function(){return[W.ck]}}
W.iO.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isq:1,
$isv:1,
$iso:1}
W.j7.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isq:1,
$isv:1,
$iso:1}
W.kc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.cl]},
$isaQ:1,
$asaQ:function(){return[W.cl]},
$isq:1,
$asq:function(){return[W.cl]},
$isv:1,
$asv:function(){return[W.cl]},
$iso:1,
$aso:function(){return[W.cl]}}
W.iP.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isq:1,
$isv:1,
$iso:1}
W.j8.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isq:1,
$isv:1,
$iso:1}
W.rb.prototype={$isj:1}
W.rc.prototype={$isj:1}
W.qd.prototype={
aE:function(){var t,s,r,q,p
t=P.a5(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=J.t0(s[q])
if(p.length!==0)t.h(0,p)}return t},
cZ:function(a){this.a.className=a.bg(0," ")},
gm:function(a){return this.a.classList.length},
gY:function(a){return this.a.classList.length===0},
ad:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
ag:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.remove(b)
return s}}
W.qg.prototype={
aR:function(a,b,c,d){return W.eb(this.a,this.b,a,!1,H.O(this,0))},
ec:function(a,b,c){return this.aR(a,null,b,c)}}
W.eM.prototype={}
W.qh.prototype={
bV:function(a){if(this.b==null)return
this.dS()
this.b=null
this.d=null
return},
cP:function(a,b){if(this.b==null)return;++this.a
this.dS()},
eh:function(a){return this.cP(a,null)},
em:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dQ()},
dQ:function(){var t=this.d
if(t!=null&&this.a<=0)J.y7(this.b,this.c,t,!1)},
dS:function(){var t=this.d
if(t!=null)J.yr(this.b,this.c,t,!1)},
f_:function(a,b,c,d,e){this.dQ()}}
W.qi.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gT:function(a){return new W.lS(a,this.gm(a),-1,null,[H.aH(a,"bx",0)])},
h:function(a,b){throw H.l(new P.Z("Cannot add to immutable List."))},
a9:function(a,b,c,d,e){throw H.l(new P.Z("Cannot setRange on immutable List."))},
aA:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
bY:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.lS.prototype={
J:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fH(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.r4.prototype={}
P.r1.prototype={
bu:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aG(a)
if(!!s.$isdH)return new Date(a.a)
if(!!s.$isFN)throw H.l(new P.eF("structured clone of RegExp"))
if(!!s.$iscg)return a
if(!!s.$iseW)return a
if(!!s.$isf7)return a
if(!!s.$ishk)return a
if(!!s.$isfj||!!s.$iseu)return a
if(!!s.$isbp){r=this.bu(a)
q=this.b
p=q.length
if(r>=p)return H.x(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.x(q,r)
q[r]=o
s.aa(a,new P.r3(t,this))
return t.a}if(!!s.$isq){r=this.bu(a)
t=this.b
if(r>=t.length)return H.x(t,r)
o=t[r]
if(o!=null)return o
return this.h0(a,r)}throw H.l(new P.eF("structured clone of other type"))},
h0:function(a,b){var t,s,r,q,p
t=J.be(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.x(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b6(t.n(a,p))
if(p>=r.length)return H.x(r,p)
r[p]=q}return r}}
P.r3.prototype={
$2:function(a,b){this.a.a[a]=this.b.b6(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pV.prototype={
bu:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dH(s,!0)
r.d9(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eF("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.He(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bu(a)
r=this.b
o=r.length
if(p>=o)return H.x(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mV()
t.a=n
if(p>=o)return H.x(r,p)
r[p]=n
this.he(a,new P.pW(t,this))
return t.a}if(a instanceof Array){p=this.bu(a)
r=this.b
if(p>=r.length)return H.x(r,p)
n=r[p]
if(n!=null)return n
o=J.be(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.x(r,p)
r[p]=n
if(typeof m!=="number")return H.a9(m)
r=J.dp(n)
l=0
for(;l<m;++l)r.i(n,l,this.b6(o.n(a,l)))
return n}return a}}
P.pW.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b6(b)
J.kl(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rt.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.C,,]}}}
P.r2.prototype={}
P.jZ.prototype={
he:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.ru.prototype={
$1:function(a){return this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rv.prototype={
$1:function(a){return this.a.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.kX.prototype={
cz:function(a){if($.$get$vA().b.test(a))return a
throw H.l(P.dD(a,"value","Not a valid class token"))},
D:function(a){return this.aE().bg(0," ")},
gT:function(a){var t,s
t=this.aE()
s=new P.dx(t,t.r,null,null,[null])
s.c=t.e
return s},
aa:function(a,b){this.aE().aa(0,b)},
ay:function(a,b){var t=this.aE()
return new H.h0(t,b,[H.O(t,0),null])},
gY:function(a){return this.aE().a===0},
gm:function(a){return this.aE().a},
ad:function(a,b){if(typeof b!=="string")return!1
this.cz(b)
return this.aE().ad(0,b)},
cN:function(a){return this.ad(0,a)?a:null},
h:function(a,b){this.cz(b)
return this.hy(0,new P.kY(b))},
ag:function(a,b){var t,s
this.cz(b)
t=this.aE()
s=t.ag(0,b)
this.cZ(t)
return s},
a3:function(a,b){return this.aE().a3(0,!0)},
aq:function(a){return this.a3(a,!0)},
hy:function(a,b){var t,s
t=this.aE()
s=b.$1(t)
this.cZ(t)
return s},
$iseA:1,
$aseA:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.kY.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l8.prototype={
gK:function(a){return a.name}}
P.rj.prototype={
$1:function(a){this.b.aC(0,new P.jZ([],[],!1).b6(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mh.prototype={
at:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.xC(t)
return q}catch(p){s=H.cn(p)
r=H.cm(p)
q=P.tx(s,r,null)
return q}},
gK:function(a){return a.name}}
P.nx.prototype={
bR:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fs(a,b,c)
q=P.xC(t)
return q}catch(p){s=H.cn(p)
r=H.cm(p)
q=P.tx(s,r,null)
return q}},
h:function(a,b){return this.bR(a,b,null)},
fs:function(a,b,c){return a.add(new P.r2([],[]).b6(b))},
gK:function(a){return a.name}}
P.hN.prototype={
gas:function(a){return a.error}}
P.pm.prototype={
gas:function(a){return a.error}}
P.qE.prototype={
by:function(a){if(a<=0||a>4294967296)throw H.l(P.wV("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c0:function(){return Math.random()}}
P.qN.prototype={
aX:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ap(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
by:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wV("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aX()
return(this.a&t)>>>0}do{this.aX()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c0:function(){this.aX()
var t=this.a
this.aX()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f1:function(a){var t,s,r,q,p,o,n,m
t=J.ed(a,0)?-1:0
do{if(typeof a!=="number")return a.aK()
s=(a&4294967295)>>>0
a=C.d.ap(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ap(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ap(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ap(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ap(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ap(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ap(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aX()
this.aX()
this.aX()
this.aX()}}
P.qO.prototype={}
P.bU.prototype={$asbU:null}
P.kp.prototype={$isj:1,
gaf:function(a){return a.href}}
P.ee.prototype={$isj:1}
P.lp.prototype={$isj:1}
P.lq.prototype={$isj:1}
P.lr.prototype={$isj:1}
P.ls.prototype={$isj:1}
P.lt.prototype={$isj:1}
P.lu.prototype={$isj:1}
P.lv.prototype={$isj:1}
P.lw.prototype={$isj:1}
P.lx.prototype={$isj:1}
P.ly.prototype={$isj:1,
gaf:function(a){return a.href}}
P.lz.prototype={$isj:1}
P.lA.prototype={$isj:1}
P.lB.prototype={$isj:1}
P.lC.prototype={$isj:1}
P.lD.prototype={$isj:1}
P.lE.prototype={$isj:1}
P.lR.prototype={$isj:1,
gaf:function(a){return a.href}}
P.cp.prototype={$isj:1}
P.mf.prototype={$isj:1,
gaf:function(a){return a.href}}
P.d3.prototype={$isad:1}
P.mO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d3]},
$isv:1,
$asv:function(){return[P.d3]},
$iso:1,
$aso:function(){return[P.d3]}}
P.iQ.prototype={
$asq:function(){return[P.d3]},
$asv:function(){return[P.d3]},
$aso:function(){return[P.d3]},
$isq:1,
$isv:1,
$iso:1}
P.j9.prototype={
$asq:function(){return[P.d3]},
$asv:function(){return[P.d3]},
$aso:function(){return[P.d3]},
$isq:1,
$isv:1,
$iso:1}
P.na.prototype={$isj:1}
P.nb.prototype={$isj:1}
P.d7.prototype={$isad:1}
P.nu.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d7]},
$isv:1,
$asv:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iR.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isq:1,
$isv:1,
$iso:1}
P.ja.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isq:1,
$isv:1,
$iso:1}
P.nK.prototype={$isj:1,
gaf:function(a){return a.href}}
P.nP.prototype={
gm:function(a){return a.length}}
P.oe.prototype={$isj:1,
gaf:function(a){return a.href}}
P.oV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.iS.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$aso:function(){return[P.C]},
$isq:1,
$isv:1,
$iso:1}
P.jb.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$aso:function(){return[P.C]},
$isq:1,
$isv:1,
$iso:1}
P.kv.prototype={
aE:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a5(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=J.t0(r[p])
if(o.length!==0)s.h(0,o)}return s},
cZ:function(a){this.a.setAttribute("class",a.bg(0," "))}}
P.ce.prototype={
gdV:function(a){return new P.kv(a)},
e9:function(a,b,c,d,e){throw H.l(new P.Z("Cannot invoke insertAdjacentHtml on SVG."))},
gee:function(a){return new W.eM(a,"click",!1,[W.uo])},
$isj:1}
P.oZ.prototype={$isj:1}
P.p0.prototype={$isj:1}
P.eE.prototype={}
P.pa.prototype={$isj:1,
gaf:function(a){return a.href}}
P.db.prototype={$isad:1}
P.pn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.db]},
$isv:1,
$asv:function(){return[P.db]},
$iso:1,
$aso:function(){return[P.db]}}
P.iT.prototype={
$asq:function(){return[P.db]},
$asv:function(){return[P.db]},
$aso:function(){return[P.db]},
$isq:1,
$isv:1,
$iso:1}
P.jc.prototype={
$asq:function(){return[P.db]},
$asv:function(){return[P.db]},
$aso:function(){return[P.db]},
$isq:1,
$isv:1,
$iso:1}
P.pz.prototype={$isj:1,
gaf:function(a){return a.href}}
P.pD.prototype={$isj:1}
P.pE.prototype={$isj:1}
P.i0.prototype={$isj:1,
gaf:function(a){return a.href}}
P.qT.prototype={$isj:1}
P.qU.prototype={$isj:1}
P.qV.prototype={$isj:1}
P.bi.prototype={}
P.dc.prototype={$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
P.fO.prototype={$isfO:1,$isad:1,
gm:function(a){return a.length}}
P.eU.prototype={$iseU:1,$isad:1,
gbU:function(a){return a.buffer}}
P.fP.prototype={
fc:function(a,b,c,d){return a.decodeAudioData(b,H.dn(c,1),H.dn(d,1))},
h1:function(a,b){var t,s,r
t=P.fO
s=new P.bj(0,$.aC,null,[t])
r=new P.dY(s,[t])
this.fc(a,b,new P.kw(r),new P.kx(r))
return s}}
P.kw.prototype={
$1:function(a){this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kx.prototype={
$1:function(a){var t=this.a
if(a==null)t.bq("")
else t.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e1.prototype={}
P.kV.prototype={
gbU:function(a){return a.buffer}}
P.kr.prototype={
gK:function(a){return a.name}}
P.o3.prototype={$isj:1}
P.ra.prototype={$isj:1}
P.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xT(a.item(b))},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
L:function(a,b){return P.xT(a.item(b))},
$isq:1,
$asq:function(){return[P.bp]},
$isv:1,
$asv:function(){return[P.bp]},
$iso:1,
$aso:function(){return[P.bp]}}
P.iU.prototype={
$asq:function(){return[P.bp]},
$asv:function(){return[P.bp]},
$aso:function(){return[P.bp]},
$isq:1,
$isv:1,
$iso:1}
P.jd.prototype={
$asq:function(){return[P.bp]},
$asv:function(){return[P.bp]},
$aso:function(){return[P.bp]},
$isq:1,
$isv:1,
$iso:1}
T.fK.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
gY:function(a){return this.a.length===0},
gT:function(a){var t=this.a
return new J.i9(t,t.length,0,null,[H.O(t,0)])},
$ashr:function(){return[T.fL]},
$aso:function(){return[T.fL]},
gcJ:function(a){return this.a}}
T.fL.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fa(C.x)
r=T.fa(C.y)
q=T.wJ(0,this.b)
new T.iH(s,q,0,0,0,t,r).dw()
r=q.c.buffer
q=q.a
r.toString
q=H.cN(r,0,q)
this.cy=q
t=q}else{t=s.bD()
this.cy=t}this.ch=0}}return t},
D:function(a){return this.a},
gK:function(a){return this.a}}
T.df.prototype={
D:function(a){return"ArchiveException: "+this.a}}
T.hl.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a9(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a9(b)
s+=b
if(s<0||s>=t.length)return H.x(t,s)
return t[s]},
aW:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a9(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.an()
if(typeof s!=="number")return H.a9(s)
b=t-(a-s)}return T.tB(this.a,this.d,b,a)},
b1:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a9(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.x(q,s)
q[s]}return-1},
bf:function(a,b){return this.b1(a,b,0)},
cU:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.an()
if(typeof s!=="number")return H.a9(s)
r=this.aW(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.an()
if(typeof p!=="number")return H.a9(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
c2:function(a){return P.oW(this.cU(a).bD(),0,null)},
a0:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a2:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aT:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ar(p,56)|C.a.ar(o,48)|C.a.ar(n,40)|C.a.ar(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ar(i,56)|C.a.ar(j,48)|C.a.ar(k,40)|C.a.ar(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bD:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a9(r)
q=t-(s-r)
t=this.a
r=J.aG(t)
if(!!r.$isdc){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cN(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xE(r.c9(t,s,p>o?o:p)))},
eS:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbU:function(a){return this.a},
ghB:function(a){return this.b}}
T.nC.prototype={
i0:function(a,b){var t,s,r,q
if(b==null)b=J.c1(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cl(s-q)
C.p.aA(r,t,s,a)
this.a+=b},
cY:function(a){return this.i0(a,null)},
i2:function(a){var t,s,r,q
t=J.be(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
this.cl(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
C.p.a9(q,s,s+r,t.gbU(a),t.ghB(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.an()
if(typeof q!=="number")return H.a9(q)
this.a=t+(r-(s-q))},
aW:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cN(t,a,b-a)},
d6:function(a){return this.aW(a,null)},
cl:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bb(P.dC("Invalid length "+H.A(s)))
r=new Uint8Array(s)
q=this.c
C.p.aA(r,0,q.length,q)
this.c=r},
fg:function(){return this.cl(null)},
gm:function(a){return this.a}}
T.pR.prototype={
fE:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aW(this.a-20,20)
if(s.a2()!==117853008){a.b=t
return}s.a2()
r=s.aT()
s.a2()
a.b=r
if(a.a2()!==101075792){a.b=t
return}a.aT()
a.a0()
a.a0()
q=a.a2()
p=a.a2()
o=a.aT()
n=a.aT()
m=a.aT()
l=a.aT()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fh:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.an()
if(typeof r!=="number")return H.a9(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.l(new T.df("Could not find End of Central Directory Record"))},
eW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fh(a)
this.a=t
a.b=t
a.a2()
this.b=a.a0()
this.c=a.a0()
this.d=a.a0()
this.e=a.a0()
this.f=a.a2()
this.r=a.a2()
s=a.a0()
if(s>0)this.x=a.c2(s)
this.fE(a)
r=a.aW(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.W()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.av()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.pT(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a0()
p.b=r.a0()
p.c=r.a0()
p.d=r.a0()
p.e=r.a0()
p.f=r.a0()
p.r=r.a2()
p.x=r.a2()
p.y=r.a2()
n=r.a0()
m=r.a0()
l=r.a0()
p.z=r.a0()
p.Q=r.a0()
p.ch=r.a2()
o=r.a2()
p.cx=o
if(n>0)p.cy=r.c2(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.an()
j=r.aW(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.an()
if(typeof g!=="number")return H.a9(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bD()
f=j.a0()
e=j.a0()
if(f===1){if(e>=8)p.y=j.aT()
if(e>=16)p.x=j.aT()
if(e>=24){o=j.aT()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.c2(l)
a.b=o
p.dy=T.Gq(a,p)
q.push(p)}}}
T.pS.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fa(C.x)
q=T.fa(C.y)
t=T.wJ(0,t)
new T.iH(s,t,0,0,0,r,q).dw()
q=t.c.buffer
t=t.a
q.toString
t=H.cN(q,0,t)
this.cy=t
this.d=0}else{t=s.bD()
this.cy=t}}return t},
D:function(a){return this.z},
eX:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.l(new T.df("Invalid Zip Signature"))
this.b=a.a0()
this.c=a.a0()
this.d=a.a0()
this.e=a.a0()
this.f=a.a0()
this.r=a.a2()
this.x=a.a2()
this.y=a.a2()
s=a.a0()
r=a.a0()
this.z=a.c2(s)
this.Q=a.cU(r).bD()
this.cx=a.cU(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.pT.prototype={
D:function(a){return this.cy}}
T.pQ.prototype={
h2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Gp(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.E],p=0;p<t.length;t.length===r||(0,H.bV)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d2()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fL(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dZ(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.tB(k,0,null,0)}else if(k instanceof T.hl){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hl(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.ha(m,"/")
j.y=n.r
s.push(j)}return new T.fK(s,null)}}
T.mb.prototype={
eR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cz(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.x(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.x(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iH.prototype={
dw:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.W()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.av()
if(!(r<s+q))break
if(!this.fB())break}},
fB:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return s.av()
if(s>=r+q)return!1
p=this.ax(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.ax(16)
s=this.ax(16)
if(n!==0&&n!==(s^65535)>>>0)H.bb(new T.df("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.an()
r=q-r
if(n>s-r)H.bb(new T.df("Input buffer is broken"))
m=t.aW(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.an()
if(typeof l!=="number")return H.a9(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.i2(m)
break
case 1:this.dm(this.f,this.r)
break
case 2:this.fC()
break
default:throw H.l(new T.df("unknown BTYPE: "+o))}return(p&1)===0},
ax:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.av()
if(r>=q+p)throw H.l(new T.df("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.x(q,r)
o=q[r]
this.c=(this.c|C.a.aw(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.dO(t,a)
this.d=s-a
return(t&r-1)>>>0},
cs:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return p.av()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.x(o,p)
m=o[p]
this.c=(this.c|C.a.aw(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.x(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dO(r,k)
this.d=q-k
return l&65535},
fC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.ax(5)+257
s=this.ax(5)+1
r=this.ax(4)+4
q=H.cz(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.x(C.E,o)
n=C.E[o]
m=this.ax(3)
if(n>=q)return H.x(p,n)
p[n]=m}l=T.fa(p)
k=new Uint8Array(H.cz(t))
j=new Uint8Array(H.cz(s))
i=this.dl(t,l,k)
h=this.dl(s,l,j)
this.dm(T.fa(i),T.fa(h))},
dm:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cs(a)
if(s>285)throw H.l(new T.df("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fg()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.x(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.x(C.C,p)
o=C.C[p]+this.ax(C.V[p])
n=this.cs(b)
if(n<=29){if(n>=30)return H.x(C.z,n)
m=C.z[n]+this.ax(C.U[n])
for(r=-m;o>m;){t.cY(t.d6(r))
o-=m}if(o===m)t.cY(t.d6(r))
else t.cY(t.aW(r,o-m))}else throw H.l(new T.df("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.an();--r
t.b=r
if(r<0)t.b=0}},
dl:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cs(b)
switch(q){case 16:p=3+this.ax(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=s}break
case 17:p=3+this.ax(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
case 18:p=11+this.ax(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.df("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kq.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Math Book",H.a([$.N,$.a0,$.aK],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.N,$.a0],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.a0,$.b3],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.N,$.a0],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.N,$.a0],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.bY,$.aF],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.a0],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bf,$.m)
q.i(0,$.f5,$.k)
q.i(0,$.b2,$.L)
q.i(0,$.cC,$.k)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.M
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Fi
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.M+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wU(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fo(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f2,$.L)
s.i(0,$.cC,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.M+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.M+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ew(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.f2,$.L)
t.i(0,$.cC,$.m)
t.i(0,$.c2,$.L)
t.i(0,$.tn,$.L)
r=$.n
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.ae
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.M+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.M
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ae
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Fo
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e8(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.M+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aS)}}
K.bW.prototype={}
L.fM.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bf,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c2,$.m)
q.i(0,$.e2,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.ek,$.L)
s.i(0,$.em,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.cf,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bf,$.L)
t.i(0,$.ca,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.M
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cj+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uD(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cj+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.av)},
D:function(a){return this.Q},
Z:function(a,b,c,d,e){var t=this.Q
this.r=new X.is("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ib]),H.a([],[M.h9]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.G()
this.H()
t=this.e
if($.$get$kt().V(0,t))H.bb("Duplicate aspect id for "+this.D(0)+": "+t+" is already registered for "+J.cJ($.$get$kt().n(0,t))+".")
$.$get$kt().i(0,t,this)},
gK:function(a){return this.Q}}
L.aa.prototype={}
M.ku.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Barbells",H.a([$.ab,$.cc,$.D],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.eo,$.c4],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jn,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.eo,$.c4],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aT,$.a2],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jn,$.W,$.di],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bd],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.w9,$.c4],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c4,$.b8],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.e3,$.L)
q.i(0,$.bP,$.m)
q.i(0,$.cS,$.L)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.M+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.M+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e8(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hL(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.e3,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.bP,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wU(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.M
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e8(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.u
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ae+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,t,null),$.aS)}}
U.ky.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$vr()
p=q.createBufferSource()
o=p
t=3
return P.cu(J.yc(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[P.eU]},
$ascb:function(){return[P.eU,P.bi]}}
U.n4.prototype={
aS:function(a){return"audio/mpeg"}}
U.nz.prototype={
aS:function(a){return"audio/ogg"}}
U.oS.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.z2(b)
p=new W.eM(q,"canplaythrough",!1,[W.U])
t=3
return P.cu(p.gae(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asiq:function(){return[W.eV]},
$ascb:function(){return[W.eV,P.C]}}
U.oT.prototype={}
U.oU.prototype={}
O.kA.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cod Piece",H.a([$.Q,$.a_,$.aw,$.P,$.W],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tG,$.P,$.bL],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aN,$.W,$.bk,$.P,$.a7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aN,$.P,$.bh],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cA,$.k)
t.i(0,$.hg,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.dw,$.k)
t.i(0,$.cB,$.k)
t.i(0,$.f1,$.k)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aX+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.M
m=[U.b]
t.i(0,new R.a8("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.M
t.i(0,new R.a8("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a8("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kP("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.p9.prototype={
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseD:function(){return[P.C]},
$ascb:function(){return[P.C,P.C]}}
Y.o_.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[P.bi]},
$ascb:function(){return[P.bi,P.bi]}}
L.kE.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Bear",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Thought",H.a([$.mo,$.ws,$.fd],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Doorway",H.a([$.fd,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c8,$.k)
t.i(0,$.d1,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.em,$.B)
r=$.n
q="The "+r+" hears a "+$.u+" "+$.M+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.R("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
V.rx.prototype={
$1:function(a){var t,s,r,q
t=document
s=H.eQ(t.querySelector("#myHeadCanon"),"$ishQ")
r=H.eQ(t.querySelector("#canon"),"$ish_")
q=t.createElement("div")
q.textContent=s.value
r.appendChild(q)},
$S:function(){return{func:1,args:[,]}}}
V.ry.prototype={
$1:function(a){var t,s
t=document
s=t.querySelector("#canon")
t=t.createElement("div")
t.textContent="AB: "+this.a.hE("JRheadcanon")
s.appendChild(t)
t=s.style
t.color="#ff0000"
t=s.style
t.backgroundColor="#888888"},
$S:function(){return{func:1,args:[W.U]}}}
T.kG.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Mystical Vial of Blood",H.a([$.b3,$.bk,$.H,$.b0],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.aD,$.bk,$.H,$.b9],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bk,$.H,$.b0,$.ho],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.bh,$.H,$.b0,$.ho,$.aM],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.tO,$.bk,$.b0,$.H,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cR,$.k)
q.i(0,$.tr,$.k)
q.i(0,$.c2,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ae+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e8(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.M+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cj+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cS,$.k)
s.i(0,$.cB,$.L)
s.i(0,$.b2,$.L)
s.i(0,$.iB,$.k)
s.i(0,$.cx,$.L)
p=$.n
o="The "+p+"  and the "
m=$.ey
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ex(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
h=$.n
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cj+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Ff
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.X(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
o="The "+p+" learns of the "
h=$.aX
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aX+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a8("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fo(),!1,!1,new Y.c3("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aX
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f8+" is now more popular with your friends than you are."
s.i(0,new R.a8("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.uE(),!1,!1,new Y.c3("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
m="The "+p+"  and the "
h=$.ey
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.q)+".",o)],H.a([],k),R.ex(),!1,!1,new Y.jF(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bf,$.L)
t.i(0,$.ca,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f8+" to kick your ass, but luckily they have several."
t.i(0,new R.a8("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e8(),!1,!1,new Y.c3("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.n
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cj+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.M+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
T.kJ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Pan's Pipe",H.a([$.a7,$.W,$.bk,$.H],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.ba,$.H],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a2,$.D,$.bk,$.H],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aE,$.D,$.aT,$.H,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.m)
q.i(0,$.f6,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ae
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Fj
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.X(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.k)
s.i(0,$.f6,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.ca,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ae
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.M+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.k)
t.i(0,$.lK,$.k)
t.i(0,$.f6,$.L)
t.i(0,$.ca,$.L)
r=$.n
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ae
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aX+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cj+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.av)}}
M.fT.prototype={
ew:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.kL.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.e0(b,"\n")
p=P.C
o=P.bZ(p,p)
n=P.bZ(p,[P.eA,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.de(k).bj(k).length===0)m=null
else if(m==null)m=C.c.bj(k)
else{j=C.c.bj(k)
i=C.c.M(m,0,C.c.ea(m,$.$get$vw())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a5(null,null,null,p))
J.y6(n.n(0,m),i)}}r=new M.fT(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseD:function(){return[M.fT]},
$ascb:function(){return[M.fT,P.C]}}
A.kR.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.N,$.ab,$.b9,$.cc],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.N,$.b9],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b3,$.b9],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aT,$.a2,$.b9],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.aD,$.b9],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.b9],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.b9],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.m)
q.i(0,$.cw,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.M+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.L)
s.i(0,$.bP,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.k)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aX
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.M+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Fm
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.L)
t.i(0,$.c9,$.m)
t.i(0,$.cw,$.k)
t.i(0,$.bP,$.m)
t.i(0,$.iv,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.ae
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.M
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aS)}}
S.bH.prototype={
D:function(a){return H.A(new H.dW(H.kk(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.ic.prototype={}
S.m8.prototype={}
M.l3.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Can of Spray Paint",H.a([$.aL,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.N,$.as,$.b9,$.aK],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tW,$.D,$.aJ],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.N,$.as,$.aK],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aL,$.ay,$.N],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.as,$.N],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.as,$.aO,$.ay],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aL,$.as],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aE,$.as,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.as],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.N,$.as,$.aK],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.m)
q.i(0,$.cC,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ae
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.M+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e3,$.L)
s.i(0,$.bP,$.m)
s.i(0,$.cw,$.L)
s.i(0,$.bf,$.m)
s.i(0,$.cA,$.k)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aX
l=l+n+" "
k=$.ae
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.M+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.hg,$.L)
t.i(0,$.cx,$.L)
t.i(0,$.f1,$.L)
t.i(0,$.c9,$.L)
t.i(0,$.bf,$.m)
t.i(0,$.b2,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.M
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.ae+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Fc
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aS)}}
T.l9.prototype={}
V.lb.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Trendy Fabric",H.a([$.aL,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aL,$.tL,$.ho],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tR,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jm
r=A.i("Broom",H.a([r,$.W,$.ab,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.tZ,$.ab],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b8,$.bk,$.aL,$.e5],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aL,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aM,$.cc,$.D,$.bl],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aL,$.N],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bl],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.aE,$.ab,$.cc,$.tK],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bL],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bL],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aL,$.bQ,$.b6],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aD,$.bg,$.ba],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aD,$.bg],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aL,$.aD,$.b0],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.cx,$.L)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ae
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.M+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.k)
s.i(0,$.bP,$.m)
s.i(0,$.f1,$.k)
s.i(0,$.dw,$.m)
s.i(0,$.bf,$.k)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ae
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.M+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Fk
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ei,$.k)
t.i(0,$.bf,$.m)
t.i(0,$.du,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.iB,$.k)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ae
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.M+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aS)}}
U.lc.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aK,$.a2,$.N,$.aN,$.H,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aO,$.bk,$.H,$.aN],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.ba,$.bk,$.H,$.aN],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b3,$.H,$.bL],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b3,$.H,$.bl,$.aN,$.bh,$.bS,$.b4],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aM,$.b4,$.aN,$.N,$.H],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.f6,$.L)
q.i(0,$.bf,$.L)
q.i(0,$.c2,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ae
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.k)
s.i(0,$.d0,$.m)
s.i(0,$.en,$.ax)
s.i(0,$.ej,$.m)
s.i(0,$.tn,$.m)
s.i(0,$.cR,$.m)
s.i(0,$.d0,$.m)
s.i(0,$.bf,$.L)
s.i(0,$.c2,$.m)
s.i(0,$.dv,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aX
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.M+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cj+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ew(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ae
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cj+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.c2,$.k)
t.i(0,$.vP,$.ax)
t.i(0,$.hd,$.L)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ew(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.n
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aX
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ae
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cj+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Fb
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.X(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
Z.ld.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aK,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aO,$.bk,$.ab,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aO,$.bk,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.du,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iB,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wH
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.m)
s.i(0,$.du,$.k)
s.i(0,$.d2,$.m)
s.i(0,$.c8,$.m)
s.i(0,$.dJ,$.m)
s.i(0,$.cw,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.hc,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.du,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.av)}}
X.is.prototype={}
X.ib.prototype={
$S:function(){return{func:1,v:true,args:[[P.q,M.h9]]}}}
M.h9.prototype={}
U.lF.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b8,$.b4,$.bm],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b8,$.b4],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aM,$.aO,$.ba,$.fe,$.aw],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aO,$.we,$.ep,$.aw],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aO,$.bS,$.bg,$.b4],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aK,$.N,$.aP,$.b4],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.N,$.a3,$.ab],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.N,$.a3,$.ab],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.N,$.a3,$.bS,$.b4,$.bm],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aM,$.aF,$.a3,$.ab,$.aw],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aM,$.mr,$.a3,$.ab,$.aw],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.ax)
q.i(0,$.cB,$.m)
q.i(0,$.ca,$.m)
q.i(0,$.cD,$.L)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ae
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.cR,$.k)
s.i(0,$.ix,$.m)
s.i(0,$.c2,$.k)
s.i(0,$.en,$.k)
s.i(0,$.hf,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.iA,$.m)
t.i(0,$.c2,$.k)
t.i(0,$.dK,$.m)
t.i(0,$.f2,$.m)
t.i(0,$.tr,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.M
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aS)}}
N.a6.prototype={
D:function(a){return H.A(new H.dW(H.kk(this),null))+": "+H.A(this.b)}}
O.cb.prototype={
b3:function(a){var t=0,s=P.bq(),r,q=this,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cu(q.aU(a),$async$b3)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)}}
O.dr.prototype={
bb:function(a){var t=0,s=P.bq(),r
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
cH:function(a){var t=0,s=P.bq(),r,q=this
var $async$cH=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.z3([J.vi(a)],q.aS(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cH,s)},
aU:function(a){var t=0,s=P.bq(),r,q=this,p,o
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bj(0,$.aC,null,[p])
W.vW(a,null,q.aS(0),null,null,"arraybuffer",null,null).b4(new O.kF(new P.dY(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$ascb:function(a){return[a,P.bi]}}
O.kF.prototype={
$1:function(a){this.a.aC(0,H.eQ(J.yj(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e4]}}}
O.eD.prototype={
bb:function(a){var t=0,s=P.bq(),r,q,p,o,n
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cN(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hK(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
aU:function(a){var t=0,s=P.bq(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vV(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$ascb:function(a){return[a,P.C]}}
O.iq.prototype={
aU:function(a){var t=0,s=P.bq(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
bb:function(a){return H.bb("Element format doesn't read from buffers")},
$ascb:function(a){return[a,P.C]}}
V.lV.prototype={
aS:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cu(A.hx("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[R.hh]},
$ascb:function(){return[R.hh,P.bi]}}
Z.ir.prototype={}
E.iF.prototype={}
E.ny.prototype={}
E.J.prototype={
D:function(a){var t="["+J.cJ(this.a)+" x "+H.A(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fN.prototype={
D:function(a){var t="[(Random from "+P.u2(this.d,"(",")")+") x "+H.A(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ia.prototype={
D:function(a){return"[Stats assigned from player Interests x"+H.A(this.b)+"]"}}
Y.m1.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aK,$.P,$.N,$.a_,$.hq],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aO,$.P,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.jp,$.P,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.lM,$.m)
t.i(0,$.ca,$.k)
t.i(0,$.dv,$.L)
t.i(0,$.dh,$.k)
r=$.u
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.M
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aX
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ae
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.n
t.i(0,new R.a8("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.M
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aX+" Quest Online: The "+$.ae+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a8("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.u
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.M+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.m2.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Sherpa Parka",H.a([$.bl,$.P,$.ch],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bl,$.aK,$.N,$.P,$.a0],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.P,$.aT],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.P,$.a2,$.a0],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.lM,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.dv,$.m)
t.i(0,$.dh,$.k)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.b]
t.i(0,new R.a8("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.M+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.m3.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Doll",H.a([$.jp,$.aL,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mw,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aP],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ej,$.L)
q.i(0,$.el,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.n
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.ae
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uE(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.k)
s.i(0,$.ix,$.k)
s.i(0,$.f6,$.m)
s.i(0,$.c2,$.k)
s.i(0,$.cx,$.m)
s.i(0,$.dv,$.L)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ae
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.M
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f8+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a8("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e8(),!1,!1,new Y.c3("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ew(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.lL,$.k)
t.i(0,$.f1,$.m)
t.i(0,$.hf,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.el,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aX+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aX
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.M
t.i(0,new R.a8("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hL(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.n
m="The "+q+"  and the "
r=$.ey
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.q)+".",n)],H.a([],i),R.ex(),!1,!1,new Y.iD(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n=$.n
r="The "+n+"  and the "
q=$.ey
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.A(C.q)+".",m)],H.a([],i),R.ex(),!1,!1,new Y.jH(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
h.i(0,new X.G(s,t,null),$.aS)}}
B.m4.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Family Ashes",H.a([$.aM,$.aE,$.P,$.aN,$.bX],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.N,$.P,$.aN,$.mv],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aK,$.P,$.as],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.w4,$.P,$.mn,$.mv],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tD,$.P,$.aJ,$.mv],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cf,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.b]
t.i(0,new R.a8("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.z+" has released the frogs into the "
p=$.n
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
V.m5.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Hippo",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.mo,$.aT,$.fd],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.D,$.tH],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dJ,$.L)
t.i(0,$.d1,$.m)
t.i(0,$.to,$.m)
t.i(0,$.hc,$.m)
r=$.n
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.M
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.X(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
X.m7.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Wand",H.a([$.W,$.H,$.a3,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.aW,$.bz,$.H,$.b_,$.a7,$.a_,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bR,$.tO,$.H,$.a3,$.b9,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.aW,$.b_,$.H,$.aE],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aO,$.b_,$.H,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.tm,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.b2,$.k)
q.i(0,$.c8,$.k)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.M+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ae
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Fe
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.iv,$.m)
s.i(0,$.d2,$.k)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.ae
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.dw,$.L)
t.i(0,$.cC,$.k)
t.i(0,$.c8,$.k)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ae
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.n
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hL(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.av)}}
X.mc.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Footstick",H.a([$.di,$.P,$.jo,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aK,$.P,$.hq,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.e5,$.mu,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tY,$.P,$.mn],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cD,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.du,$.k)
t.i(0,$.dh,$.k)
t.i(0,$.ei,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.he,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uF(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cj+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wS(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wT(),!1,!1,new Y.c3("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.av)}}
Q.md.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Yardstick",H.a([$.di,$.P,$.jo,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.aK,$.P,$.hq,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.Q,$.P,$.e5,$.mu,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mg.prototype={
b3:function(a){var t=0,s=P.bq(),r,q,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vX(null,a,null)
p=new W.eM(q,"load",!1,[W.U])
t=3
return P.cu(p.gae(p),$async$b3)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)},
$asdr:function(){return[W.fb]},
$ascb:function(){return[W.fb,P.bi]}}
Q.nO.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bq(),r,q=this,p,o,n
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cu(q.cH(b),$async$R)
case 3:p=n.vX(null,d,null)
o=new W.eM(p,"load",!1,[W.U])
t=4
return P.cu(o.gae(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)}}
Q.nL.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bq()
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bs(null,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[Q.jG]},
$ascb:function(){return[Q.jG,P.bi]}}
B.hm.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bf,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c2,$.m)
q.i(0,$.e2,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.ek,$.L)
s.i(0,$.em,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.cf,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bf,$.L)
t.i(0,$.ca,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uD(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aS)},
D:function(a){return this.ch},
gK:function(a){return this.ch}}
A.Y.prototype={
aB:function(a,b){var t=b.gbz()-this.gbz()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bA(t)},
gh5:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.hM(null,null)
s.c8(this.f.a)
if(this.r===0)return t
r=P.d4(G.za(this.f),!0,G.V)
C.b.d4(r,new A.mC())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=r[p]
if(!(o instanceof G.at||o.gdY().length===0))t.push(" "+Y.Hb(s.ei(o.gdY())))}return t},
gbz:function(){var t,s,r
for(t=this.f,s=new P.dx(t,t.r,null,null,[null]),s.c=t.e,r=0;s.J();)r+=s.d.gbz()
return r},
gfW:function(){var t=this.f
return new H.hW(t,new A.mB(),[H.O(t,0)])},
ghf:function(){var t,s,r,q,p
for(t=this.gh5(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q]+" "
return r+this.d},
D:function(a){return this.ghf()},
N:function(a,b,c,d,e){var t,s,r
t=P.ue(b,null)
this.f=t
if(t.a===0)t.h(0,$.fd)
s=P.ue(this.gfW(),null)
for(t=new P.dx(s,s.r,null,null,[null]),t.c=s.e;t.J();){r=t.d
this.f.bo(0,r.geK())
this.f.ag(0,r)}$.$get$wy().push(this)},
$isbG:1,
$asbG:function(){return[A.Y]}}
A.mC.prototype={
$2:function(a,b){return a.gef()-C.a.bA(b.gef())},
$S:function(){return{func:1,args:[G.V,G.V]}}}
A.mB.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Z.mJ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Juice Box",H.a([$.N,$.H,$.aW,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e5,$.b8,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dJ,$.ax)
t.i(0,$.cB,$.m)
t.i(0,$.bP,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.k)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ae
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.M+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.M
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.n
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
N.mK.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Gavel",H.a([$.W,$.tM],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aO,$.bh],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.aL],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.N,$.aK],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bQ,$.aD,$.bl],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.N,$.aK,$.ay],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aM,$.D,$.bh],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.L)
q.i(0,$.c9,$.m)
q.i(0,$.cC,$.L)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.M+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ae+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.dv,$.m)
s.i(0,$.cS,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.M+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ae+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Fa
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.cR,$.L)
t.i(0,$.en,$.m)
t.i(0,$.ej,$.m)
t.i(0,$.f4,$.m)
t.i(0,$.iy,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.M
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Fn
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aS)}}
S.mM.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Shining Armor",H.a([$.aM,$.my,$.P,$.fe],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.my,$.P,$.aZ,$.aJ,$.ep],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.P,$.bg,$.aA],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aM,$.fe,$.P,$.my],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.lJ,$.k)
t.i(0,$.dL,$.k)
t.i(0,$.e3,$.k)
t.i(0,$.f4,$.k)
t.i(0,$.ha,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a8("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aX
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.ae
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a8("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.M+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a8("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.mN.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aK,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aO,$.bk,$.ab,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aO,$.bk,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.du,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iB,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wH
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.m)
s.i(0,$.du,$.k)
s.i(0,$.d2,$.m)
s.i(0,$.c8,$.m)
s.i(0,$.dJ,$.m)
s.i(0,$.cw,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.hc,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.du,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.av)}}
K.mP.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Creeping Vine",H.a([$.W,$.H,$.b6,$.aA],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tG,$.H,$.b0],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aM,$.aF,$.H,$.aA],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bX,$.H,$.b0],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b3,$.H,$.b0,$.a_,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bg,$.H,$.aA],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.k)
q.i(0,$.bf,$.k)
q.i(0,$.hb,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.lM,$.m)
q.i(0,$.cD,$.L)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.M+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.k)
s.i(0,$.cx,$.k)
s.i(0,$.cD,$.L)
s.i(0,$.b2,$.m)
o=$.n
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.bf,$.L)
t.i(0,$.dM,$.k)
t.i(0,$.c2,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.it,$.m)
r="Drawn by wailing and "+$.M+"ing, the "
q=$.n
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
G.mQ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bE],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aO,$.H,$.b_,$.a2,$.bE],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bE,$.a_,$.mr],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tN,$.H,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tV,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b6,$.H,$.b_,$.bE],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iz,$.k)
q.i(0,$.ei,$.m)
q.i(0,$.dK,$.k)
q.i(0,$.el,$.k)
p=$.n
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.M+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.dw,$.k)
s.i(0,$.lH,$.k)
s.i(0,$.ek,$.k)
s.i(0,$.iv,$.k)
p=$.n
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ae
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aX
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.M+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uE(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.M+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bf,$.m)
q.i(0,$.f5,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.cC,$.k)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f8+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a8("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e8(),!1,!1,new Y.c3("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f8+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a8("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.ew(),!1,!1,new Y.c3("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.k)
t.i(0,$.iz,$.k)
t.i(0,$.el,$.m)
t.i(0,$.cB,$.m)
t.i(0,$.tq,$.m)
t.i(0,$.c2,$.L)
t.i(0,$.e3,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.cw,$.L)
t.i(0,$.bf,$.m)
t.i(0,$.cA,$.k)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ae
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.M+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.z+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f8+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a8("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e8(),!1,!1,new Y.c3("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.av)}}
Z.n3.prototype={
G:function(){var t,s,r,q
t=this.F
s=[G.V]
r=A.i("Dream Bubbles Book",H.a([$.N,$.as,$.aK,$.w7],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.F(null,null,A.Y)
r=A.i("Uno Reverse Card",H.a([$.mp,$.jo,$.as],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.as],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hq,$.P,$.as],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.N,$.P,$.bn,$.aK],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cR,$.L)
q.i(0,$.en,$.L)
q.i(0,$.c2,$.L)
q.i(0,$.cS,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.M+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a8("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.vL,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.b2,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.M+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a8("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.F,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.bM)}}
S.n5.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a3,$.a_,$.az],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.P,$.ab,$.a3,$.di],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jm,$.W,$.P,$.aA,$.a3,$.di],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.f2,$.k)
t.i(0,$.f4,$.m)
t.i(0,$.cf,$.k)
t.i(0,$.em,$.m)
t.i(0,$.d0,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
t.i(0,new R.a8("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aX
t.i(0,new R.a8("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aX
t.i(0,new R.a8("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.M+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.n6.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Maiden's Breath",H.a([$.b6,$.P,$.aL],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.P,$.di,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aL,$.aM,$.D,$.P,$.a_,$.fe,$.w_],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.N,$.P,$.a7,$.aK],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dh,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.dw,$.m)
t.i(0,$.cw,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a8("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.M+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
D.nc.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("memes",H.a([$.aW,$.tE,$.w6,$.tH],[G.V]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.iz,$.k)
r=$.n
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.R("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
V.nf.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.W,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aM,$.hn,$.aF,$.as,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.m)
q.i(0,$.ei,$.L)
q.i(0,$.cC,$.L)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fo(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ha,$.L)
s.i(0,$.c9,$.m)
s.i(0,$.cC,$.L)
s.i(0,$.c8,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iA,$.k)
t.i(0,$.bf,$.m)
t.i(0,$.f5,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cC,$.k)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ae+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
E.nh.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Feather Pen",H.a([$.D,$.P,$.as,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.wk,$.P,$.hn,$.ab,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.N,$.P,$.as,$.aK],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dh,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.dw,$.m)
t.i(0,$.cw,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ae
t.i(0,new R.a8("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
F.ni.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Piano",H.a([$.ab,$.W,$.a7,$.as],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aT,$.a2],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a7],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.N,$.a7],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aO,$.a7,$.a2,$.aT,$.ay],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aO,$.a7,$.a2,$.ay],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a7],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ax)
q.i(0,$.tq,$.k)
q.i(0,$.el,$.k)
q.i(0,$.dw,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.lG,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aX
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ae
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aX
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ae+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.M+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Fg
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.tt,$.ax)
s.i(0,$.dv,$.m)
s.i(0,$.cS,$.m)
s.i(0,$.dw,$.k)
s.i(0,$.lG,$.ax)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aX
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ae+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.hb,$.ax)
t.i(0,$.bP,$.m)
t.i(0,$.dM,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aX+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aS)}}
Y.nv.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q=this,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cu(A.hx("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.cu(Q.of(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.b7(p)
o.eH(p,P.wB(["",$.$get$vC()],P.C,S.hA))
o.eG(p,!1)
q.b=p}J.vp(p,b)
r=J.vp(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseD:function(){return[S.fm]},
$ascb:function(){return[S.fm,P.C]}}
V.nD.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Shorts",H.a([$.Q,$.P,$.fc,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aO,$.P,$.ay],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.aD,$.P,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.lJ,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.lL,$.m)
t.i(0,$.dh,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.ek,$.m)
t.i(0,$.tu,$.m)
t.i(0,$.it,$.m)
t.i(0,$.lH,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.M
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ae
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a8("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aX+" buffs. With a deafening "+$.M+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
G.nQ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Superhero Action Figure",H.a([$.aO,$.ay,$.aw],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aO,$.ay],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aO,$.bX],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aO,$.b9,$.bl,$.ch],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aO,$.ay],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.N,$.ay],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b6,$.ay,$.Q,$.aA],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b6,$.b1,$.ay,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aw,$.D,$.ay,$.ep,$.aJ,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.N,$.ay],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.N,$.ay],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.bP,$.k)
q.i(0,$.cD,$.ax)
q.i(0,$.d2,$.ax)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aX+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.M+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Fh
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ej,$.m)
s.i(0,$.dv,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.dL,$.k)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aX
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dK,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.dL,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aX+" Cinema. A new movie, The Lonely "
o=$.ae
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.M+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aS)}}
N.nX.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fc],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tL,$.P,$.fc],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bo,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cA,$.m)
t.i(0,$.c8,$.m)
t.i(0,$.dM,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a8("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ae+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.b.prototype={}
U.X.prototype={}
R.nY.prototype={
D:function(a){return H.A(new H.dW(H.kk(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a1.prototype={}
R.R.prototype={}
R.a8.prototype={}
R.bA.prototype={}
E.nZ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.ep,$.aZ,$.H,$.aJ,$.b4,$.aw,$.bm,$.aN],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aM,$.D,$.aT,$.bn,$.c4,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aD,$.bn,$.as,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.H,$.b4,$.aE,$.bo,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.k)
q.i(0,$.cR,$.k)
q.i(0,$.dv,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.c2,$.m)
q.i(0,$.cf,$.m)
q.i(0,$.c9,$.L)
q.i(0,$.d2,$.m)
q.i(0,$.ej,$.k)
q.i(0,$.iy,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.lK,$.k)
q.i(0,$.hb,$.m)
q.i(0,$.en,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.k)
s.i(0,$.c2,$.m)
s.i(0,$.c9,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.ix,$.L)
s.i(0,$.cR,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d2,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.c9,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.av)}}
Y.dP.prototype={}
Y.af.prototype={}
Y.d_.prototype={}
Y.c3.prototype={
gK:function(a){return this.c}}
Y.S.prototype={}
Y.ie.prototype={}
Y.bD.prototype={}
Y.cW.prototype={}
Y.kP.prototype={}
Y.bw.prototype={}
Y.jF.prototype={}
Y.iD.prototype={}
Y.jH.prototype={}
N.o4.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fc],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tF,$.P,$.fc,$.tC],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aO,$.a2,$.P,$.a0,$.az],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c9,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.dL,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a8("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.o5.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Red Rose",H.a([$.aP,$.aL],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aP,$.N],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aP,$.aD],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aP,$.aE],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aP,$.bo,$.D,$.b1],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aK,$.N,$.aP],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.k)
q.i(0,$.hg,$.m)
q.i(0,$.f1,$.m)
q.i(0,$.hf,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.iw,$.L)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ae+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dK,$.k)
s.i(0,$.hf,$.k)
s.i(0,$.cx,$.m)
s.i(0,$.el,$.L)
s.i(0,$.iw,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.f1,$.m)
t.i(0,$.lL,$.k)
t.i(0,$.hf,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.el,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Fd
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.n
r="The "+n+"  and the "
o=$.ey
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.iD(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o=$.n
n="The "+o+"  and the "
r=$.ey
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jF(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r=$.n
o="The "+r+"  and the "
n=$.ey
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jH(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p.i(0,new X.G(s,t,null),$.aS)}}
V.o6.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Arrow",H.a([$.aZ,$.W,$.tC],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.W,$.ab,$.fd],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aw,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.H,$.tE,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.b2,$.m)
t.i(0,$.d1,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.c8,$.L)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.hO.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bf,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c2,$.m)
q.i(0,$.e2,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a8("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.ek,$.L)
s.i(0,$.em,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.cf,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a8("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a8("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.ey+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.M+"ing in amazement. The factory is saved! ")],H.a([],m),R.ex(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.bM)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bf,$.L)
t.i(0,$.ca,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uD(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.bM)},
D:function(a){return this.r},
a1:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.is("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ib]),H.a([],[M.h9]))
this.G()
this.H()
t=this.Q
if($.$get$o8().V(0,t))H.bb("Duplicate class id for "+this.D(0)+": "+t+" is already registered for "+J.cJ($.$get$o8().n(0,t))+".")
$.$get$o8().i(0,t,this)},
gK:function(a){return this.r}}
E.o9.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.b8,$.a0,$.a3,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.N,$.P,$.aK,$.a0],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.e5,$.a0],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.hd,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.f5,$.k)
t.i(0,$.b2,$.L)
t.i(0,$.cC,$.k)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a8("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.M+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.oa.prototype={}
K.ob.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Uno Reverse Card",H.a([$.mp,$.H,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e5,$.b8,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.k)
q.i(0,$.cR,$.k)
q.i(0,$.dv,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.c2,$.m)
q.i(0,$.cf,$.m)
q.i(0,$.c9,$.L)
q.i(0,$.d2,$.m)
q.i(0,$.ej,$.k)
q.i(0,$.iy,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.lK,$.k)
q.i(0,$.hb,$.m)
q.i(0,$.en,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.k)
s.i(0,$.c2,$.m)
s.i(0,$.c9,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.ix,$.L)
s.i(0,$.cR,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d2,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.c9,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.av)}}
Y.oc.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Walking Stick",H.a([$.W,$.P,$.di],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.w8,$.a0,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.N,$.P,$.a0],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.P,$.a0,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dh,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.bP,$.L)
t.i(0,$.b2,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.b]
t.i(0,new R.a8("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.od.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Scroll",H.a([$.N,$.P,$.a0],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b3,$.P,$.az,$.a0],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.N,$.P,$.aK,$.a0,$.az,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.lG,$.k)
t.i(0,$.bf,$.k)
t.i(0,$.cC,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a8("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
S.og.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cueball",H.a([$.eo,$.jp,$.P,$.ab,$.aA,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.eo,$.w5,$.P,$.b_],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b3,$.P,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.w1,$.P,$.b8],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.vM,$.k)
t.i(0,$.hc,$.k)
t.i(0,$.to,$.k)
t.i(0,$.cD,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a8("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a8("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ae
t.i(0,new R.a8("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.c5.prototype={}
Y.on.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aK,$.P,$.N,$.bn,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aL,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.bf,$.m)
t.i(0,$.dh,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.ca,$.k)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a8("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.oo.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Fiduspawn Plush",H.a([$.ch,$.Q,$.b8],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ch,$.Q,$.b8],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tJ,$.aO],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.aA,$.bg,$.ba,$.bm,$.tS],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b8,$.ch],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aK,$.N],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aK,$.N],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b8,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aK,$.N,$.a0],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.c8,$.k)
q.i(0,$.cC,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aX+" or "+$.ae+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.M+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d1,$.L)
s.i(0,$.b2,$.k)
s.i(0,$.c8,$.k)
s.i(0,$.tm,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.tt,$.k)
s.i(0,$.cC,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.M
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aX
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cS,$.L)
t.i(0,$.dK,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.dL,$.k)
t.i(0,$.ha,$.k)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.M+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aS)}}
M.bB.prototype={}
N.or.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aM,$.aF,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bY,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.N,$.H,$.ms,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.M+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.n
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
p=$.n
t=t+p+" that they must negotiate with "
o=$.z
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.n
p="The "+o+" meets with "
t=$.z
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cD,$.L)
t.i(0,$.tp,$.k)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.Gk)}}
U.au.prototype={
gK:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.Y]}}
K.cF.prototype={
gK:function(a){return this.a}}
M.ow.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dg(null,0)
q.a=J.e_(a7,0)
for(p=0,o="";p<6;++p)o+=H.hK(q.a8(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a8(8)
l=9+m*6
o=8*m
k=q.a8(o)
j=q.a8(o)
i=q.a8(o)
h=q.a8(o)
g=q.a8(o)
f=q.a8(o)
o=P.E
e=P.C
d=P.bZ(o,e)
c=new O.cU(k,j,null,null,null,null,null,null,d,P.bZ(e,o))
c.x=new Uint8Array(H.cz(k*j))
b=q.a8(8)
for(o=[o],p=0;p<b;++p){a=q.a8(8)
a0=q.a8(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a8(8)
if(a2>=e){r=H.x(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oW(a1,0,null))}a4=q.a8(8)
a5=$.$get$wX().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i1(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hO()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[O.cU]},
$ascb:function(){return[O.cU,P.bi]}}
A.ng.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.W,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Janus Bust",H.a([$.aM,$.hn,$.aF,$.as,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.os.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aM,$.aF,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bY,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Green Sun Poster",H.a([$.N,$.H,$.ms,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.nR.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.ep,$.aZ,$.H,$.aJ,$.b4,$.aw,$.bm,$.aN],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aM,$.D,$.aT,$.bn,$.c4,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aD,$.bn,$.as,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nightmare Fuel",H.a([$.W,$.H,$.b4,$.aE,$.bo,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.op.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Doll",H.a([$.jp,$.aL,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mw,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aP],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.pk.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.W,$.as,$.bd,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tP,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aM,$.bg,$.H,$.ba,$.b4,$.aN],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.o0.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bE],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aO,$.H,$.b_,$.a2,$.bE],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bE,$.a_,$.mr],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tN,$.H,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tV,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b6,$.H,$.b_,$.bE],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.m_.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Infinity Gauntlet",H.a([$.H,$.D,$.mo],[G.V]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c8,$.m)
t.i(0,$.bP,$.L)
t.i(0,$.cR,$.L)
r=$.n
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.z+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.R("Collect The Stones",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(s,t,null),$.av)}}
R.p_.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aK,$.P,$.N,$.bn,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aL,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c8,$.k)
t.i(0,$.b2,$.k)
t.i(0,$.dh,$.m)
t.i(0,$.f5,$.m)
t.i(0,$.tl,$.m)
t.i(0,$.e2,$.m)
t.i(0,$.it,$.m)
t.i(0,$.ts,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a8("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.M+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uF(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a8("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.M+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bA("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a8("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aX+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.p1.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lightning",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bl,$.wf,$.fd],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aw,$.aT],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aT,$.H,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.dJ,$.L)
t.i(0,$.bP,$.k)
t.i(0,$.iu,$.m)
t.i(0,$.cR,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.M+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
D.p3.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Robot",H.a([$.a2,$.D,$.aA,$.a0],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a2,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a2,$.N],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a2,$.N,$.aN,$.aK],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aO,$.a2,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.wb,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.u_,$.D,$.ab],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a2,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iA,$.m)
q.i(0,$.f2,$.k)
q.i(0,$.f3,$.k)
q.i(0,$.cf,$.L)
p=$.n
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aX
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ae
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Fl
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.n
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.M
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ae+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.ek,$.L)
s.i(0,$.em,$.m)
s.i(0,$.cS,$.k)
s.i(0,$.cf,$.L)
o=$.n
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.n
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.M
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ae
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e8(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iA,$.L)
t.i(0,$.f2,$.k)
t.i(0,$.f3,$.k)
t.i(0,$.cf,$.L)
r=$.n
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aX
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aS)}}
V.p5.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lighter",H.a([$.D,$.aE],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.N,$.bl],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.N,$.bl,$.bY],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aN,$.bY,$.aW,$.bm],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.N,$.wg],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bd,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bd,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fc,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bQ,$.bd],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tT,$.b1,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tX,$.b1,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.tQ,$.b1,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mt,$.aJ,$.D,$.bo,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.N,$.bn,$.aK],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c4,$.D,$.aT,$.bn],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.aE],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.dK,$.k)
q.i(0,$.e3,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.lJ,$.k)
q.i(0,$.dL,$.m)
p=$.n
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dK,$.k)
s.i(0,$.cx,$.k)
s.i(0,$.dL,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ae+" underling. Tremble at the fearsome "+$.aX+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.bf,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c2,$.m)
q.i(0,$.e2,$.L)
q.i(0,$.cR,$.L)
n=$.n
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.cR,$.L)
t.i(0,$.ej,$.k)
t.i(0,$.iy,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.en,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.M
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aX+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.aS)}}
X.G.prototype={
D:function(a){return"Theme: "+H.A(this.a)}}
U.pe.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lockpick",H.a([$.D,$.P,$.az,$.aZ,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.az],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.P,$.aZ,$.aJ,$.tI],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c9,$.k)
t.i(0,$.dv,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.cS,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.M+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a8("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aX+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.M+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a8("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.ae
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.M
l=n+l+"worth, the disaffected Heir to the "+$.aX+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a8("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.pf.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.W,$.as,$.bd,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tP,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aM,$.bg,$.H,$.ba,$.b4,$.aN],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.vO,$.ax)
q.i(0,$.cf,$.m)
q.i(0,$.cS,$.m)
q.i(0,$.em,$.k)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a8("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.ew(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.ae
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.hb,$.k)
s.i(0,$.e3,$.L)
s.i(0,$.cf,$.k)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ca,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.k)
t.i(0,$.dh,$.k)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ae
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hL(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ae
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ew(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.z+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aX
t.i(0,new R.a8("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ew(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.M+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.av)}}
G.V.prototype={
D:function(a){var t=this.b
if(t.length!==0)return C.b.gae(t)
return"NULL TRAIT"},
gef:function(){return this.a},
gdY:function(){return this.b},
gbz:function(){return this.c}}
G.aY.prototype={}
G.at.prototype={}
G.bI.prototype={}
G.e.prototype={
ghJ:function(){return this.e.length},
gbz:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q].c
return r},
aB:function(a,b){return C.a.bA(b.ghJ()-this.e.length)},
eq:function(a){return C.b.hb(this.e,a.gfY(a))},
$isbG:1,
$asbG:function(){return[G.e]},
gK:function(a){return this.d},
geK:function(){return this.e}}
G.mz.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Q.pF.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cardboard Box",H.a([$.N,$.H,$.az],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.H,$.az],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bo,$.H,$.az,$.mt],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.ba,$.H,$.az,$.b4,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aO,$.H,$.az,$.as],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.H,$.a_,$.ms,$.az,$.b3],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.lI,$.k)
q.i(0,$.he,$.k)
q.i(0,$.hc,$.k)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.n
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a8("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.G(s,q,null),$.av)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d1,$.m)
s.i(0,$.lI,$.m)
s.i(0,$.he,$.m)
s.i(0,$.c9,$.k)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ae
s.i(0,new R.a8("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fo(),!1,!1,new Y.c3("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.M+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(q,s,null),$.av)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.lI,$.k)
t.i(0,$.he,$.k)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(s,t,null),$.av)}}
E.pG.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Yardstick",H.a([$.di,$.P,$.jo,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aK,$.P,$.hq,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.e5,$.mu,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tY,$.P,$.mn],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.cD,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.du,$.k)
t.i(0,$.dh,$.k)
t.i(0,$.ei,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.he,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uF(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cj+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wS(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wT(),!1,!1,new Y.c3("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.av)}}
M.pK.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cauldron",H.a([$.wj,$.P,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jm,$.di,$.P,$.W,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.mw,$.P,$.a3,$.az,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a6,P.T])
t.i(0,$.c2,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.d0,$.m)
t.i(0,$.cS,$.m)
t.i(0,$.cw,$.m)
t.i(0,$.tp,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.b]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aX
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a8("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.u+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aX
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a8("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aX
t.i(0,new R.a8("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ae+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.M+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.pL.prototype={
R:function(a5,a6){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e0(a6,$.$get$xm())
if(0>=p.length){r=H.x(p,0)
t=1
break}if(J.yx(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.x(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.A(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.bZ(o,B.eI)
q.a=null
l=P.bZ(o,o)
for(k=P.T,j=B.cX,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cI()
""+i
H.A(g)
f.toString
f=J.e0(g,$.$get$xk())
if(0>=f.length){r=H.x(f,0)
t=1
break $async$outer}g=f[0]
f=J.be(g)
if(f.gY(g)===!0){$.$get$cI().toString
continue}if(f.ah(g,$.$get$xl())){$.$get$cI().toString
continue}if(C.c.ah(g,"@")){e=C.c.ai(g,1)
$.$get$cI().toString
n.push(e)}else if(C.c.ah(g,"?")){f=C.c.ai(g,1)
f=$.$get$hR().aQ(0,f)
f=H.dj(f,B.i8(),H.aH(f,"o",0),null)
d=P.d4(f,!0,H.aH(f,"o",0))
if(d.length<2)$.$get$cI().b2(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cI()
H.A(c)
H.A(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xn()
a=f.ck(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.x(f,1)
t=1
break $async$outer}a0=J.c1(f[1])
a1=C.c.ai(g,a0)
if(a1.length===0)continue
f=J.aG(a0)
if(f.S(a0,0)){a1=C.c.er(a1)
$.$get$cI().toString
f=P.bZ(o,o)
a2=new B.eI(P.bZ(o,k),f,a1,!1,null,null)
a2.ca(null,null,j)
q.a=a2
f.bo(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.xo))if(C.c.ah(a1,"?")){a1=C.c.ai(a1,1)
f=$.$get$hR().aQ(0,a1)
f=H.dj(f,B.i8(),H.aH(f,"o",0),null)
d=P.d4(f,!0,H.aH(f,"o",0))
f=$.$get$cI()
f.toString
if(d.length<2)f.b2(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ko(d[0],$.$get$ft(),"")
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}b=J.ko(d[1],$.$get$ft(),"")
f=$.$get$cI()
H.A(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.ah(a1,"@")){e=C.c.ai(a1,1)
$.$get$cI().toString
f=$.$get$hR().aQ(0,a1)
f=H.dj(f,B.i8(),H.aH(f,"o",0),null)
d=P.d4(f,!0,H.aH(f,"o",0))
a3=d.length>1?H.wP(d[1],new U.pM(q,d)):1
q.a.c.i(0,C.c.cV(e,$.$get$ft(),""),a3)}else{$.$get$cI().toString
f=$.$get$hR().aQ(0,g)
f=H.dj(f,B.i8(),H.aH(f,"o",0),null)
d=P.d4(f,!0,H.aH(f,"o",0))
a3=d.length>1?H.wP(d[1],new U.pN(q,d)):1
if(0>=d.length){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bj(J.ko(d[0],$.$get$ft(),""))
h=new B.cX(null)
a4=P.bZ(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.t_(a3)),[H.aH(f,"cy",0)]))}else if(f.S(a0,$.xo*2)){$.$get$cI().toString
f=$.$get$hR().aQ(0,g)
f=H.dj(f,B.i8(),H.aH(f,"o",0),null)
d=P.d4(f,!0,H.aH(f,"o",0))
f=d.length
if(f!==2)$.$get$cI().b2(C.h,"Invalid variant for "+H.A(h.bk(0))+" in "+H.A(q.a.e))
else{if(0>=f){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bj(J.ko(d[0],$.$get$ft(),""))
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}a4=C.c.cV(U.Gn(d[1]),$.$get$ft(),"")
h.a.i(0,f,a4)}}}}}r=new B.hX(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseD:function(){return[B.hX]},
$ascb:function(){return[B.hX,P.C]}}
U.pM.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid include weight '"+H.A(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b2(C.i,r+H.A(s[0])+"' in list '"+H.A(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.pN.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid weight '"+H.A(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b2(C.i,r+H.A(s[0])+"' in list '"+H.A(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.pP.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Make a World Book",H.a([$.N,$.as,$.aK],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b8,$.Q,$.mx],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aK,$.N,$.a0],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aK,$.N,$.a0],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aK,$.N],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.a0,$.mx,$.as],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aK,$.N,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aK,$.N],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a6,P.T]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.cC,$.k)
q.i(0,$.bf,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.hd,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cx,$.m)
s.i(0,$.bf,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.M+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dK,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.dL,$.m)
t.i(0,$.du,$.k)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aS)}}
B.pU.prototype={
aS:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$xp()
p=J.vi(b)
q.toString
r=q.h2(T.tB(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdr:function(){return[T.fK]},
$ascb:function(){return[T.fK,P.bi]}}
A.fS.prototype={}
B.ds.prototype={
cC:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.P+=H.hK(this.b)
this.b=0}},
aj:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aK()
this.cC((a&s)>>>0>0)}},
fQ:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aw(1,t-s)
if(typeof a!=="number")return a.aK()
this.cC((a&r)>>>0>0)}},
bS:function(a){var t,s
a=J.ec(a,1)
t=C.d.d8(Math.log(H.kh(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cC(!1)
this.fQ(a,t+1)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.P
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a9(r)
q+=r
p=r}else p=0
r=H.cz(q)
o=new Uint8Array(r)
if(t){n=H.cN(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.x(o,m)
o[m]=l}}t=s.P
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a5(k,m)
if(s<0||s>=r)return H.x(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.x(o,t)
o[t]=s}return o.buffer}}
B.dg.prototype={
cr:function(a){var t,s,r,q
t=C.f.al(a/8)
s=C.a.bG(a,8)
r=this.a.getUint8(t)
q=C.a.aw(1,s)
if(typeof r!=="number")return r.aK()
return(r&q)>>>0>0},
a8:function(a){var t,s,r
if(a>32)throw H.l(P.dD(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cr(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
hN:function(a){var t,s,r,q
if(a>32)throw H.l(P.dD(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cr(this.b);++this.b
if(q)s=(s|C.a.aw(1,t-r))>>>0}return s},
c1:function(){var t,s,r
for(t=0;!0;){s=this.cr(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hN(t+1)-1}}
A.dG.prototype={
D:function(a){return"rgb("+H.A(this.b)+", "+H.A(this.c)+", "+H.A(this.d)+", "+H.A(this.a)+")"},
hX:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
q=this.a
if(typeof q!=="number")return H.a9(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dG){t=this.b
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
ga6:function(a){return this.hX(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.aG(b)
if(!!t.$isdG){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.a9(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.a9(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.a9(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.a9(m)
return A.fV(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.t8(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.fV(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.A(t.gab(b))+" "+H.A(b)+"] to a Colour. Only Colour, double and int are valid.")},
au:function(a,b){var t,s,r,q,p,o,n,m
t=J.aG(b)
if(!!t.$isdG){t=this.b
if(typeof t!=="number")return t.am()
s=b.b
if(typeof s!=="number")return s.am()
r=this.c
if(typeof r!=="number")return r.am()
q=b.c
if(typeof q!=="number")return q.am()
p=this.d
if(typeof p!=="number")return p.am()
o=b.d
if(typeof o!=="number")return o.am()
n=this.a
if(typeof n!=="number")return n.am()
m=b.a
if(typeof m!=="number")return m.am()
return A.t8(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.t8(t/255*b,s/255*b,r/255*b,q/255)}throw H.l("Cannot multiply a Colour by ["+H.A(t.gab(b))+" "+H.A(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.A(b))},
i:function(a,b,c){var t,s
t=J.dz(b)
if(t.a4(b,0)||t.aG(b,3))throw H.l("Colour index out of range: "+H.A(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(c,0,255)
else if(t.S(b,0)){this.b=C.a.ac(J.kn(J.rU(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(J.kn(J.rU(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.ki(c)
if(t.S(b,2)){this.d=C.a.ac(J.kn(s.au(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(J.kn(s.au(c,255)),0,255)}},
eQ:function(a,b,c,d){this.b=C.d.ac(C.d.ac(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ac(C.d.ac(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ac(C.d.ac(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ac(J.rV(d,0,255),0,255)}}
A.rs.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.n_.prototype={
$1:function(a){return this.a.ej(a)},
$S:function(){return{func:1,args:[,]}}}
A.mY.prototype={
$1:function(a){this.a.R(0,a).b4(this.b.ghI())},
$S:function(){return{func:1,args:[,]}}}
A.mZ.prototype={
$1:function(a){this.a.fX(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.n0.prototype={
$1:function(a){return this.a.aC(0,this.b)},
$S:function(){return{func:1,args:[W.U]}}}
F.hy.prototype={
D:function(a){return this.b}}
F.fh.prototype={
b2:function(a,b){F.F9(a).$1("("+this.c+")["+H.A(C.b.gbc(a.b.split(".")))+"]: "+H.A(b))},
cI:function(a,b){this.b2(C.h,b)},
bX:function(a){},
gK:function(a){return this.c}}
F.uc.prototype={}
O.rO.prototype={
$1:function(a){return H.A(a.aV(1))+" = "+H.A(a.aV(2))+C.c.au("../",this.a)},
$S:function(){return{func:1,args:[P.d5]}}}
O.rP.prototype={
$0:function(){var t=document
J.vn(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.eQ(t.querySelector("#voidButton"),"$iseX")
t.toString
W.eb(t,"click",new O.rN(),!1,W.uo)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.eR("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rN.prototype={
$1:function(a){return O.HL()},
$S:function(){return{func:1,args:[W.U]}}}
R.hh.prototype={}
R.uv.prototype={}
R.uu.prototype={}
A.nE.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$ut()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$ut()}throw H.l(P.dD(b,"'name' should be a String name or int id only",null))},
gT:function(a){var t=this.a
t=t.gc5(t)
return new H.jw(null,J.cQ(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.ag(0,b)
s=this.fz()
if(typeof s!=="number")return s.av()
if(s>=256)throw H.l(P.dD(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ag:function(a,b){var t,s,r
t=this.a
if(!t.V(0,b))return
s=this.c
r=s.n(0,b)
t.ag(0,b)
this.b.ag(0,r)
s.ag(0,b)
this.d.ag(0,r)},
fz:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.V(0,s))return s;++s}}}
A.jE.prototype={
$aso:function(){return[A.dG]},
$iso:1}
Q.jG.prototype={}
A.hM.prototype={
by:function(a){if(a===0)return 0
return this.fA(a)},
hz:function(){return this.by(4294967295)},
fA:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c0()
this.b=C.d.bA(s*4294967295)
return C.d.al(s*a)}else{s=t.by(a)
this.b=s
return s}},
c8:function(a){var t=a==null
this.a=t?C.K:P.GB(a)
if(!t)this.b=J.ec(a,1)},
hG:function(a,b){var t=J.be(a)
if(t.gY(a))return
if(!!t.$iscy)return t.at(a,this.a.c0())
return t.U(a,this.by(t.gm(a)))},
ei:function(a){return this.hG(a,!0)}}
Y.dO.prototype={
cA:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.aC,null,t)
this.c.push(new P.dY(s,t))
return s},
ej:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].aC(0,this.b)
C.b.sm(t,0)}}
V.ll.prototype={
$4:function(a,b,c,d){return V.zx(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bi,P.bi,O.cU]}}}
V.lk.prototype={
$4:function(a,b,c,d){return V.zw(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.E,P.E,O.cU]}}}
V.lj.prototype={
$4:function(a,b,c,d){return V.zt(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bi,P.bi,O.cU]}}}
V.li.prototype={
$4:function(a,b,c,d){return V.zs(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.E,P.E,O.cU]}}}
O.cU.prototype={
hO:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.x(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
i1:function(a,b,c,d){var t,s,r,q,p
t=J.b7(d)
s=0
while(!0){r=t.geb(d)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
q=(C.a.d8(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.x(r,q)
r[q]=p;++s}}}
D.oz.prototype={
$1:function(a){return a.ghH()},
$S:function(){return{func:1,args:[D.cG]}}}
D.cG.prototype={
D:function(a){return this.a},
gK:function(a){return this.a},
ghH:function(){return this.d}}
D.jY.prototype={}
D.o2.prototype={}
B.p6.prototype={
hF:function(a,b){var t
if(!this.d)this.hM()
t=this.ds(a)
if(t==null){$.$get$fu().bX("Root list '"+a+"' not found")
return"["+a+"]"}return this.dH(J.yn(t,b),P.bZ(P.C,B.cX))},
hE:function(a){return this.hF(a,null)},
bh:function(a){var t=0,s=P.bq(),r,q=this,p,o,n,m
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q.a
if(p.ad(0,a)){p=$.$get$fu()
H.A(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.cu(A.e6("wordlists/"+H.A(a)+".words",!1,!1,null),$async$bh)
case 3:o=c
q.b.bo(0,o.ghv())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.cu(q.bh(p[m]),$async$bh)
case 7:case 5:p.length===n||(0,H.bV)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
hM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fu().bX("Processing word lists")
this.d=!0
t=this.c
t.ba(0)
for(s=this.b,r=s.gaD(s),r=r.gT(r);r.J();){q=r.gO()
p=B.Go(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaD(o),n=n.gT(n),m=[H.aH(p,"b5",0)];n.J();){l=n.gO()
for(k=new H.dN(p,p.gm(p),0,null,m);k.J();){j=k.d
if(!j.gbQ().V(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaD(t),s=s.gT(s);s.J();){p=t.n(0,s.gO())
p.hL(t)
for(r=new H.dN(p,p.gm(p),0,null,[H.aH(p,"b5",0)]),o=p.d;r.J();){h=r.d
for(n=o.gaD(o),n=n.gT(n);n.J();){l=n.gO()
if(!h.gbQ().V(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbQ(),n=n.gaD(n),n=n.gT(n);n.J();){g=n.gO()
m=h.a
m.i(0,g,J.rZ(m.n(0,g),$.$get$x1(),new B.p8(h)))}}}},
ds:function(a){var t,s
t=this.c
if(!t.V(0,a)){$.$get$fu().bX("List '"+H.A(a)+"' not found")
return}s=t.n(0,a)
return this.e.ei(s)},
dH:function(a,b){return J.rZ(a,$.$get$x0(),new B.p7(this,b))}}
B.p8.prototype={
$1:function(a){var t,s
t=a.aV(1)
s=this.a
if(!s.a.V(0,t))return"["+H.A(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d5]}}}
B.p7.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aV(1)
s=$.$get$x2().aQ(0,t)
s=H.dj(s,B.i8(),H.aH(s,"o",0),null)
r=P.d4(s,!0,H.aH(s,"o",0))
if(0>=r.length)return H.x(r,0)
q=J.e0(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.x(q,0)
n=o.ds(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.e0(r[l],"@")
if(0>=q.length)return H.x(q,0)
if(J.bc(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.V(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.x(r,0)
return"["+H.A(r[0])+"]"}s=J.b7(m)
i=s.at(m,p)
if(i==null){$.$get$fu().bX("Missing variant '"+H.A(p)+"' for word '"+H.A(m)+"', falling back to base")
i=s.bk(m)}return o.dH(i,this.b)},
$S:function(){return{func:1,args:[P.d5]}}}
B.cX.prototype={
at:function(a,b){if(b==null)b="MAIN"
if(this.a.V(0,b))return this.a.n(0,b)
return},
bk:function(a){return this.at(a,null)},
D:function(a){return"[Word: "+H.A(this.bk(0))+"]"},
gbQ:function(){return this.a}}
B.eI.prototype={
D:function(a){return"WordList '"+H.A(this.e)+"': "+this.eN(0)},
ek:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a5(null,null,null,B.eI)
b.h(0,this)
for(t=this.c,s=t.gaD(t),s=s.gT(s),r=this.e;s.J();){q=s.gO()
if(a.V(0,q)){p=a.n(0,q)
if(b.ad(0,p)){$.$get$fu().b2(C.i,"Include loop detected in list '"+H.A(r)+"', already visited '"+H.A(p.e)+"', ignoring")
continue}p.ek(a,b)}}for(s=t.gaD(t),s=s.gT(s),r=[H.aH(this,"cy",0)];s.J();){q=s.gO()
if(!a.V(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bV)(o),++m){l=o[m]
k=J.b7(l)
j=k.gX(l)
k=J.rU(k.gb7(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.t_(k)),r))}}},
hL:function(a){return this.ek(a,null)},
$isq:1,
$asq:function(){return[B.cX]},
$asdX:function(){return[B.cX]},
$ashV:function(){return[B.cX]},
$ascy:function(){return[B.cX]},
$aso:function(){return[B.cX]},
$asv:function(){return[B.cX]},
gcL:function(){return this.c},
gh3:function(){return this.d},
gK:function(a){return this.e}}
B.hX.prototype={
D:function(a){return"[WordListFile: "+this.b.D(0)+" ]"},
gcL:function(){return this.a},
ghv:function(){return this.b}}
S.fm.prototype={}
S.uW.prototype={}
S.uX.prototype={}
S.uY.prototype={}
S.th.prototype={}
S.tk.prototype={}
S.t7.prototype={}
S.uG.prototype={}
S.v_.prototype={}
S.v0.prototype={}
S.kM.prototype={}
S.uy.prototype={}
S.us.prototype={}
S.mR.prototype={}
S.tc.prototype={}
S.t2.prototype={}
S.l4.prototype={}
S.ud.prototype={}
S.l5.prototype={}
S.nG.prototype={}
S.uN.prototype={}
S.uK.prototype={}
S.uO.prototype={}
S.t1.prototype={}
S.m0.prototype={}
S.kK.prototype={}
S.t6.prototype={}
S.t5.prototype={}
S.uz.prototype={}
S.uP.prototype={}
S.uA.prototype={}
S.tj.prototype={}
S.ti.prototype={}
S.uM.prototype={}
S.uL.prototype={}
S.pd.prototype={}
S.uR.prototype={}
S.t9.prototype={}
S.ta.prototype={}
S.uZ.prototype={}
S.hA.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.ul.prototype={}
S.um.prototype={}
S.uH.prototype={}
S.uI.prototype={}
S.uJ.prototype={}
S.ui.prototype={}
S.up.prototype={}
S.uq.prototype={}
S.ty.prototype={}
S.tz.prototype={}
S.tA.prototype={}
S.ur.prototype={}
S.un.prototype={}
S.t3.prototype={}
S.uT.prototype={}
S.uU.prototype={}
S.uS.prototype={}
Z.u7.prototype={}
Z.u3.prototype={}
Z.u4.prototype={}
Q.cy.prototype={
at:function(a,b){var t,s,r,q,p,o,n
t=this.d_()
s=J.rV(b,0,1)*t
for(r=J.cQ(this.gbi()),q=0;r.J();){p=r.gO()
o=J.b7(p)
n=o.gb7(p)
if(typeof n!=="number")return H.a9(n)
q+=n
if(s<=q)return o.gX(p)}return},
d_:function(){var t,s,r
for(t=J.cQ(this.gbi()),s=0;t.J();){r=J.yl(t.gO())
if(typeof r!=="number")return H.a9(r)
s+=r}return s},
k:function(a,b){return b},
D:function(a){return J.cJ(this.gbi())},
ay:function(a,b){return Q.v2(this,b,H.aH(this,"cy",0),null)},
a3:function(a,b){return Q.v1(this,!1,!0,null,H.aH(this,"cy",0))},
aq:function(a){return this.a3(a,!0)},
$iso:1,
$aso:null}
Q.dX.prototype={
at:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.d_()
s=J.rV(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bV)(r),++o){n=r[o]
m=J.b7(n)
l=m.gb7(n)
if(typeof l!=="number")return H.a9(l)
p+=l
if(s<=p)return m.gX(n)}return},
gbi:function(){return this.b},
bR:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.t_(c)),[H.aH(this,"cy",0)]))},
h:function(a,b){return this.bR(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return J.vl(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.x(t,b)
t[b]=new Q.h(c,s,[H.aH(this,"cy",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
D:function(a){return P.jq(this.b,"[","]")},
ay:function(a,b){return Q.v2(this,b,H.aH(this,"dX",0),null)},
a3:function(a,b){return Q.v1(this,!1,!0,null,H.aH(this,"dX",0))},
aq:function(a){return this.a3(a,!0)},
ca:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hV.prototype={$ascy:null,$aso:null,$asq:null,$asv:null,$isq:1,$isv:1,$iso:1}
Q.h.prototype={
D:function(a){return"("+H.A(this.a)+" @ "+H.A(this.b)+")"},
gX:function(a){return this.a},
gb7:function(a){return this.b}}
Q.eK.prototype={
gbi:function(){return this.b},
gT:function(a){var t=new Q.pI(null,[H.aH(this,"eK",0)])
t.a=J.cQ(this.b)
return t},
gm:function(a){return J.c1(this.b)},
D:function(a){return J.cJ(this.b)},
ay:function(a,b){return Q.v2(this,b,H.aH(this,"eK",0),null)},
a3:function(a,b){return Q.v1(this,!1,!0,null,H.aH(this,"eK",0))},
aq:function(a){return this.a3(a,!0)}}
Q.hU.prototype={$ascy:null,$aso:null,$iso:1}
Q.pI.prototype={
gO:function(){return J.vl(this.a.gO())},
J:function(){return this.a.J()}}
Q.jV.prototype={
$aseK:function(a,b){return[b]},
$ashU:function(a,b){return[b]},
$ascy:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pJ.prototype={
$1:function(a){var t=J.b7(a)
return new Q.h(this.c.$1(t.gX(a)),t.gb7(a),[this.b])},
$S:function(){return H.eP(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jV")}}
J.j.prototype.eL=J.j.prototype.D
J.ht.prototype.eM=J.ht.prototype.D
P.dm.prototype.eO=P.dm.prototype.bI
P.dm.prototype.eP=P.dm.prototype.bH
P.b5.prototype.d7=P.b5.prototype.a9
Q.dX.prototype.eN=Q.dX.prototype.D;(function installTearOffs(){installTearOff(H.fz.prototype,"ght",0,0,0,null,["$0"],["bZ"],1)
installTearOff(H.dy.prototype,"gey",0,0,0,null,["$1"],["az"],11)
installTearOff(H.eL.prototype,"gh6",0,0,0,null,["$1"],["aZ"],11)
installTearOff(H,"xF",1,0,0,null,["$1"],["H1"],8)
installTearOff(P,"H4",1,0,0,null,["$1"],["Gs"],6)
installTearOff(P,"H5",1,0,0,null,["$1"],["Gt"],6)
installTearOff(P,"H6",1,0,0,null,["$1"],["Gu"],6)
installTearOff(P,"xR",1,0,0,null,["$0"],["H0"],1)
installTearOff(P.k1.prototype,"gdW",0,0,0,null,["$2","$1"],["cF","bq"],12)
installTearOff(P.bj.prototype,"gbd",0,0,0,null,["$2","$1"],["ao","f8"],12)
var t
installTearOff(t=P.dm.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t=P.i_.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t,"gfk",0,0,0,null,["$1"],["fl"],function(){return H.eP(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i_")})
installTearOff(t,"gfo",0,0,0,null,["$2"],["fp"],14)
installTearOff(t,"gfm",0,0,0,null,["$0"],["fn"],1)
installTearOff(P.k7.prototype,"gfY",0,1,0,null,["$1"],["ad"],29)
installTearOff(P,"Hf",1,0,0,null,["$2"],["zb"],30)
installTearOff(P,"Hg",1,0,0,null,["$1"],["fG"],4)
installTearOff(t=W.id.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(t,"gho",0,0,0,null,["$1"],["e8"],4)
installTearOff(t,"ghZ",0,0,0,null,["$1"],["i_"],4)
installTearOff(W.f_.prototype,"gX",0,1,0,null,["$1"],["L"],5)
installTearOff(W.ih.prototype,"gX",0,1,0,null,["$1"],["L"],32)
installTearOff(W.im.prototype,"gX",0,1,0,null,["$1"],["L"],5)
installTearOff(W.io.prototype,"gX",0,1,0,null,["$1"],["L"],8)
installTearOff(W.ip.prototype,"gX",0,1,0,null,["$1"],["L"],5)
installTearOff(W.f7.prototype,"gX",0,1,0,null,["$1"],["L"],13)
installTearOff(W.iE.prototype,"gX",0,1,0,null,["$1"],["L"],9)
installTearOff(W.f9.prototype,"gX",0,1,0,null,["$1"],["L"],7)
installTearOff(W.iG.prototype,"gX",0,1,0,null,["$1"],["L"],7)
installTearOff(W.jx.prototype,"gX",0,1,0,null,["$1"],["L"],5)
installTearOff(W.jy.prototype,"gX",0,1,0,null,["$1"],["L"],10)
installTearOff(W.ci.prototype,"gX",0,1,0,null,["$1"],["L"],10)
installTearOff(W.jI.prototype,"gX",0,1,0,null,["$1"],["L"],15)
installTearOff(W.jL.prototype,"gX",0,1,0,null,["$1"],["L"],9)
installTearOff(W.jN.prototype,"gX",0,1,0,null,["$1"],["L"],16)
installTearOff(W.jO.prototype,"gX",0,1,0,null,["$1"],["L"],17)
installTearOff(W.ck.prototype,"gX",0,1,0,null,["$1"],["L"],18)
installTearOff(W.jS.prototype,"gX",0,1,0,null,["$1"],["L"],19)
installTearOff(W.jT.prototype,"gX",0,1,0,null,["$1"],["L"],20)
installTearOff(W.jU.prototype,"gX",0,1,0,null,["$1"],["L"],21)
installTearOff(W.hY.prototype,"gX",0,1,0,null,["$1"],["L"],22)
installTearOff(W.k2.prototype,"gX",0,1,0,null,["$1"],["L"],33)
installTearOff(W.k6.prototype,"gX",0,1,0,null,["$1"],["L"],24)
installTearOff(W.i2.prototype,"gX",0,1,0,null,["$1"],["L"],25)
installTearOff(W.ka.prototype,"gX",0,1,0,null,["$1"],["L"],26)
installTearOff(W.kc.prototype,"gX",0,1,0,null,["$1"],["L"],27)
installTearOff(P.jP.prototype,"gX",0,1,0,null,["$1"],["L"],28)
installTearOff(V,"vt",1,0,0,null,["$0"],["Hx"],1)
installTearOff(R,"ex",1,0,0,null,["$1"],["FK"],0)
installTearOff(R,"wS",1,0,0,null,["$1"],["Fy"],0)
installTearOff(R,"uF",1,0,0,null,["$1"],["FJ"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["FI"],0)
installTearOff(R,"uE",1,0,0,null,["$1"],["FH"],0)
installTearOff(R,"wU",1,0,0,null,["$1"],["FF"],0)
installTearOff(R,"hL",1,0,0,null,["$1"],["FE"],0)
installTearOff(R,"ew",1,0,0,null,["$1"],["FB"],0)
installTearOff(R,"e8",1,0,0,null,["$1"],["FD"],0)
installTearOff(R,"fo",1,0,0,null,["$1"],["FG"],0)
installTearOff(R,"uD",1,0,0,null,["$1"],["FC"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["Fz"],0)
installTearOff(R,"wT",1,0,0,null,["$1"],["FA"],0)
installTearOff(F.fh.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(O,"Hz",1,0,0,null,["$1"],["HB"],31)
installTearOff(Y.dO.prototype,"ghI",0,0,0,null,["$1"],["ej"],function(){return H.eP(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dO")})
installTearOff(V,"HF",1,0,0,null,["$4"],["zv"],3)
installTearOff(V,"HE",1,0,0,null,["$4"],["zu"],2)
installTearOff(B,"i8",1,0,0,null,["$1"],["GW"],23)
installTearOff(T,"Ha",1,0,0,null,["$4"],["zl"],3)
installTearOff(T,"H9",1,0,0,null,["$4"],["zk"],2)
installTearOff(T,"H8",1,0,0,null,["$4"],["zj"],3)
installTearOff(T,"H7",1,0,0,null,["$4"],["zi"],2)
installTearOff(F,"Ho",1,0,0,null,["$4"],["zr"],3)
installTearOff(F,"Hn",1,0,0,null,["$4"],["zq"],2)
installTearOff(F,"Hm",1,0,0,null,["$4"],["zp"],3)
installTearOff(F,"Hl",1,0,0,null,["$4"],["zo"],2)
installTearOff(F,"Hk",1,0,0,null,["$4"],["zn"],3)
installTearOff(F,"Hj",1,0,0,null,["$4"],["zm"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.u9,t)
inherit(J.j,t)
inherit(J.i9,t)
inherit(P.hJ,t)
inherit(P.o,t)
inherit(H.dN,t)
inherit(P.js,t)
inherit(H.iC,t)
inherit(H.pr,t)
inherit(H.eY,t)
inherit(H.qI,t)
inherit(H.fz,t)
inherit(H.qe,t)
inherit(H.eN,t)
inherit(H.qH,t)
inherit(H.q1,t)
inherit(H.fp,t)
inherit(H.ph,t)
inherit(H.dE,t)
inherit(H.dy,t)
inherit(H.eL,t)
inherit(H.kT,t)
inherit(H.o1,t)
inherit(H.po,t)
inherit(P.eh,t)
inherit(H.h8,t)
inherit(H.kb,t)
inherit(H.dW,t)
inherit(H.t,t)
inherit(H.mS,t)
inherit(H.mU,t)
inherit(H.hs,t)
inherit(H.k9,t)
inherit(H.k_,t)
inherit(H.jR,t)
inherit(H.r0,t)
inherit(P.cE,t)
inherit(P.eZ,t)
inherit(P.k1,t)
inherit(P.k5,t)
inherit(P.bj,t)
inherit(P.k0,t)
inherit(P.dl,t)
inherit(P.oB,t)
inherit(P.dm,t)
inherit(P.k3,t)
inherit(P.q9,t)
inherit(P.qL,t)
inherit(P.qZ,t)
inherit(P.eT,t)
inherit(P.rd,t)
inherit(P.qy,t)
inherit(P.qA,t)
inherit(P.oj,t)
inherit(P.qF,t)
inherit(P.dx,t)
inherit(P.ff,t)
inherit(P.b5,t)
inherit(P.r5,t)
inherit(P.n8,t)
inherit(P.qG,t)
inherit(P.fU,t)
inherit(P.fW,t)
inherit(P.r7,t)
inherit(P.dd,t)
inherit(P.bG,t)
inherit(P.dH,t)
inherit(P.dq,t)
inherit(P.dI,t)
inherit(P.nA,t)
inherit(P.jQ,t)
inherit(P.qj,t)
inherit(P.bK,t)
inherit(P.lo,t)
inherit(P.q,t)
inherit(P.bp,t)
inherit(P.d6,t)
inherit(P.d5,t)
inherit(P.dQ,t)
inherit(P.C,t)
inherit(P.cd,t)
inherit(P.eH,t)
inherit(P.ke,t)
inherit(P.ps,t)
inherit(P.qX,t)
inherit(W.id,t)
inherit(W.jD,t)
inherit(W.ig,t)
inherit(P.kX,t)
inherit(W.bx,t)
inherit(W.lS,t)
inherit(W.r4,t)
inherit(P.r1,t)
inherit(P.pV,t)
inherit(P.qE,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.bi,t)
inherit(P.dc,t)
inherit(T.fL,t)
inherit(T.df,t)
inherit(T.hl,t)
inherit(T.nC,t)
inherit(T.pR,t)
inherit(T.pS,t)
inherit(T.pT,t)
inherit(T.pQ,t)
inherit(T.mb,t)
inherit(T.iH,t)
inherit(B.hm,t)
inherit(N.a6,t)
inherit(L.fM,t)
inherit(A.jE,t)
inherit(O.cb,t)
inherit(T.hO,t)
inherit(M.fT,t)
inherit(X.is,t)
inherit(X.ib,t)
inherit(M.h9,t)
inherit(Z.ir,t)
inherit(E.ny,t)
inherit(E.J,t)
inherit(A.Y,t)
inherit(U.b,t)
inherit(Y.dP,t)
inherit(K.cF,t)
inherit(X.G,t)
inherit(G.V,t)
inherit(A.fS,t)
inherit(B.ds,t)
inherit(B.dg,t)
inherit(A.dG,t)
inherit(F.hy,t)
inherit(F.fh,t)
inherit(Q.jG,t)
inherit(A.hM,t)
inherit(Y.dO,t)
inherit(O.cU,t)
inherit(D.cG,t)
inherit(B.p6,t)
inherit(B.cX,t)
inherit(Q.cy,t)
inherit(B.hX,t)
inherit(Q.h,t)
t=J.j
inherit(J.mD,t)
inherit(J.mE,t)
inherit(J.ht,t)
inherit(J.eq,t)
inherit(J.fg,t)
inherit(J.er,t)
inherit(H.fj,t)
inherit(H.eu,t)
inherit(W.aV,t)
inherit(W.cK,t)
inherit(W.eW,t)
inherit(W.kO,t)
inherit(W.fX,t)
inherit(W.kW,t)
inherit(W.bJ,t)
inherit(W.iI,t)
inherit(W.l7,t)
inherit(W.f0,t)
inherit(W.ih,t)
inherit(W.ik,t)
inherit(W.la,t)
inherit(W.il,t)
inherit(W.iJ,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(W.h1,t)
inherit(W.U,t)
inherit(W.iK,t)
inherit(W.lP,t)
inherit(W.lT,t)
inherit(W.lW,t)
inherit(W.co,t)
inherit(W.m6,t)
inherit(W.iL,t)
inherit(W.hk,t)
inherit(W.e9,t)
inherit(W.n2,t)
inherit(W.jx,t)
inherit(W.cq,t)
inherit(W.iV,t)
inherit(W.ns,t)
inherit(W.nt,t)
inherit(W.iW,t)
inherit(W.nH,t)
inherit(W.e7,t)
inherit(W.ea,t)
inherit(W.ci,t)
inherit(W.iX,t)
inherit(W.oh,t)
inherit(W.cs,t)
inherit(W.iY,t)
inherit(W.fr,t)
inherit(W.ck,t)
inherit(W.ov,t)
inherit(W.oA,t)
inherit(W.oX,t)
inherit(W.cl,t)
inherit(W.iZ,t)
inherit(W.pg,t)
inherit(W.ct,t)
inherit(W.j_,t)
inherit(W.fv,t)
inherit(W.jT,t)
inherit(W.px,t)
inherit(W.py,t)
inherit(W.fw,t)
inherit(W.jU,t)
inherit(W.q4,t)
inherit(W.j0,t)
inherit(W.j1,t)
inherit(W.iM,t)
inherit(W.iN,t)
inherit(W.iO,t)
inherit(W.iP,t)
inherit(W.rb,t)
inherit(W.rc,t)
inherit(P.mh,t)
inherit(P.nx,t)
inherit(P.d3,t)
inherit(P.iQ,t)
inherit(P.d7,t)
inherit(P.iR,t)
inherit(P.nP,t)
inherit(P.iS,t)
inherit(P.db,t)
inherit(P.iT,t)
inherit(P.pE,t)
inherit(P.fO,t)
inherit(P.kr,t)
inherit(P.o3,t)
inherit(P.ra,t)
inherit(P.iU,t)
t=J.ht
inherit(J.nN,t)
inherit(J.eG,t)
inherit(J.es,t)
inherit(F.uc,t)
inherit(R.hh,t)
inherit(R.uv,t)
inherit(R.uu,t)
inherit(S.fm,t)
inherit(S.uW,t)
inherit(S.uX,t)
inherit(S.uY,t)
inherit(S.th,t)
inherit(S.tk,t)
inherit(S.t7,t)
inherit(S.v_,t)
inherit(S.v0,t)
inherit(S.l4,t)
inherit(S.uN,t)
inherit(S.uO,t)
inherit(S.t1,t)
inherit(S.m0,t)
inherit(S.kK,t)
inherit(S.t6,t)
inherit(S.t5,t)
inherit(S.tj,t)
inherit(S.pd,t)
inherit(S.ta,t)
inherit(S.hA,t)
inherit(S.uk,t)
inherit(S.um,t)
inherit(S.uI,t)
inherit(S.uJ,t)
inherit(S.up,t)
inherit(S.uq,t)
inherit(S.tz,t)
inherit(S.tA,t)
inherit(S.ur,t)
inherit(S.un,t)
inherit(S.t3,t)
inherit(S.uT,t)
inherit(S.uU,t)
inherit(S.uS,t)
inherit(Z.u7,t)
inherit(Z.u3,t)
inherit(Z.u4,t)
inherit(J.u8,J.eq)
t=J.fg
inherit(J.ju,t)
inherit(J.jt,t)
inherit(P.jv,P.hJ)
t=P.jv
inherit(H.hS,t)
inherit(W.k4,t)
inherit(H.kQ,H.hS)
t=P.o
inherit(H.v,t)
inherit(H.hz,t)
inherit(H.hW,t)
inherit(P.hr,t)
inherit(H.r_,t)
t=H.v
inherit(H.et,t)
inherit(H.mT,t)
inherit(P.qz,t)
inherit(P.eA,t)
t=H.et
inherit(H.oY,t)
inherit(H.fi,t)
inherit(P.mW,t)
inherit(H.h0,H.hz)
t=P.js
inherit(H.jw,t)
inherit(H.jW,t)
inherit(Q.pI,t)
t=H.eY
inherit(H.rR,t)
inherit(H.rS,t)
inherit(H.qD,t)
inherit(H.qf,t)
inherit(H.ml,t)
inherit(H.mm,t)
inherit(H.qK,t)
inherit(H.pi,t)
inherit(H.pj,t)
inherit(H.rT,t)
inherit(H.rG,t)
inherit(H.rH,t)
inherit(H.rI,t)
inherit(H.rJ,t)
inherit(H.rK,t)
inherit(H.p2,t)
inherit(H.mH,t)
inherit(H.mG,t)
inherit(H.rC,t)
inherit(H.rD,t)
inherit(H.rE,t)
inherit(P.pZ,t)
inherit(P.pY,t)
inherit(P.q_,t)
inherit(P.q0,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.rp,t)
inherit(P.rr,t)
inherit(P.lZ,t)
inherit(P.lY,t)
inherit(P.qk,t)
inherit(P.qs,t)
inherit(P.qo,t)
inherit(P.qp,t)
inherit(P.qq,t)
inherit(P.qm,t)
inherit(P.qr,t)
inherit(P.ql,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qu,t)
inherit(P.qt,t)
inherit(P.oE,t)
inherit(P.oC,t)
inherit(P.oD,t)
inherit(P.oF,t)
inherit(P.oK,t)
inherit(P.oI,t)
inherit(P.oJ,t)
inherit(P.oL,t)
inherit(P.oO,t)
inherit(P.oP,t)
inherit(P.oM,t)
inherit(P.oN,t)
inherit(P.oQ,t)
inherit(P.oR,t)
inherit(P.oG,t)
inherit(P.oH,t)
inherit(P.q3,t)
inherit(P.q2,t)
inherit(P.qM,t)
inherit(P.rh,t)
inherit(P.rg,t)
inherit(P.ri,t)
inherit(P.ro,t)
inherit(P.qQ,t)
inherit(P.qR,t)
inherit(P.qS,t)
inherit(P.qB,t)
inherit(P.n9,t)
inherit(P.r9,t)
inherit(P.r8,t)
inherit(P.le,t)
inherit(P.lf,t)
inherit(P.pw,t)
inherit(P.pt,t)
inherit(P.pu,t)
inherit(P.pv,t)
inherit(P.rq,t)
inherit(P.rl,t)
inherit(P.rk,t)
inherit(P.rm,t)
inherit(P.rn,t)
inherit(W.q6,t)
inherit(W.m9,t)
inherit(W.ma,t)
inherit(W.qi,t)
inherit(P.r3,t)
inherit(P.pW,t)
inherit(P.rt,t)
inherit(P.ru,t)
inherit(P.rv,t)
inherit(P.kY,t)
inherit(P.rj,t)
inherit(P.kw,t)
inherit(P.kx,t)
inherit(V.rx,t)
inherit(V.ry,t)
inherit(O.kF,t)
inherit(A.mC,t)
inherit(A.mB,t)
inherit(G.mz,t)
inherit(U.pM,t)
inherit(U.pN,t)
inherit(A.rs,t)
inherit(A.n_,t)
inherit(A.mY,t)
inherit(A.mZ,t)
inherit(A.n0,t)
inherit(O.rO,t)
inherit(O.rP,t)
inherit(O.rN,t)
inherit(V.ll,t)
inherit(V.lk,t)
inherit(V.lj,t)
inherit(V.li,t)
inherit(D.oz,t)
inherit(B.p8,t)
inherit(B.p7,t)
inherit(Q.pJ,t)
t=H.q1
inherit(H.fA,t)
inherit(H.i4,t)
inherit(H.kU,H.kT)
t=P.eh
inherit(H.jC,t)
inherit(H.mI,t)
inherit(H.pq,t)
inherit(H.kN,t)
inherit(H.o7,t)
inherit(P.fl,t)
inherit(P.cZ,t)
inherit(P.Z,t)
inherit(P.eF,t)
inherit(P.dR,t)
inherit(P.bN,t)
inherit(P.l6,t)
t=H.p2
inherit(H.ox,t)
inherit(H.fQ,t)
t=P.hr
inherit(H.pX,t)
inherit(T.fK,t)
t=H.eu
inherit(H.nk,t)
inherit(H.jz,t)
t=H.jz
inherit(H.hF,t)
inherit(H.hG,t)
inherit(H.hH,H.hF)
inherit(H.hD,H.hH)
inherit(H.hI,H.hG)
inherit(H.hE,H.hI)
t=H.hD
inherit(H.nl,t)
inherit(H.nm,t)
t=H.hE
inherit(H.nn,t)
inherit(H.no,t)
inherit(H.np,t)
inherit(H.nq,t)
inherit(H.nr,t)
inherit(H.jA,t)
inherit(H.fk,t)
t=P.k1
inherit(P.dY,t)
inherit(P.kd,t)
t=P.k3
inherit(P.q8,t)
inherit(P.qa,t)
inherit(P.qY,P.qL)
t=P.dl
inherit(P.hZ,t)
inherit(W.qg,t)
inherit(P.i_,P.dm)
inherit(P.qJ,P.hZ)
inherit(P.qP,P.rd)
inherit(P.k8,H.t)
inherit(P.oi,P.oj)
inherit(P.qC,P.oi)
inherit(P.k7,P.qC)
inherit(P.hT,P.n8)
t=P.fU
inherit(P.kB,t)
inherit(P.lh,t)
t=P.fW
inherit(P.kC,t)
inherit(P.pB,t)
inherit(P.pA,P.lh)
t=P.dq
inherit(P.T,t)
inherit(P.E,t)
t=P.cZ
inherit(P.ez,t)
inherit(P.mi,t)
inherit(P.q7,P.ke)
t=W.aV
inherit(W.aR,t)
inherit(W.h2,t)
inherit(W.kS,t)
inherit(W.lO,t)
inherit(W.lQ,t)
inherit(W.lU,t)
inherit(W.hj,t)
inherit(W.hC,t)
inherit(W.nS,t)
inherit(W.jK,t)
inherit(W.ok,t)
inherit(W.eJ,t)
inherit(W.cr,t)
inherit(W.h3,t)
inherit(W.cP,t)
inherit(W.cH,t)
inherit(W.h4,t)
inherit(W.pC,t)
inherit(W.pH,t)
inherit(W.jX,t)
inherit(W.pO,t)
inherit(W.qW,t)
inherit(P.l8,t)
inherit(P.hN,t)
inherit(P.pm,t)
inherit(P.bC,t)
inherit(P.fP,t)
t=W.aR
inherit(W.dt,t)
inherit(W.ef,t)
inherit(W.eg,t)
inherit(W.ij,t)
inherit(W.fx,t)
inherit(W.qb,t)
t=W.dt
inherit(W.aI,t)
inherit(P.ce,t)
t=W.aI
inherit(W.eS,t)
inherit(W.ks,t)
inherit(W.hB,t)
inherit(W.kD,t)
inherit(W.kH,t)
inherit(W.eX,t)
inherit(W.h_,t)
inherit(W.lg,t)
inherit(W.lN,t)
inherit(W.iE,t)
inherit(W.me,t)
inherit(W.fb,t)
inherit(W.mj,t)
inherit(W.mL,t)
inherit(W.hv,t)
inherit(W.n7,t)
inherit(W.nd,t)
inherit(W.nw,t)
inherit(W.nB,t)
inherit(W.nF,t)
inherit(W.fq,t)
inherit(W.jL,t)
inherit(W.om,t)
inherit(W.oq,t)
inherit(W.hP,t)
inherit(W.p4,t)
inherit(W.hQ,t)
inherit(W.pl,t)
inherit(W.qx,t)
inherit(W.eV,W.hB)
inherit(W.h5,W.h2)
inherit(W.kz,W.h5)
t=W.bJ
inherit(W.kZ,t)
inherit(W.l_,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.l0,t)
inherit(W.l1,t)
inherit(W.l2,t)
inherit(W.f_,W.iI)
inherit(W.q5,W.jD)
inherit(W.j2,W.iJ)
inherit(W.im,W.j2)
t=W.U
inherit(W.lm,t)
inherit(W.ot,t)
inherit(W.ou,t)
inherit(W.cg,W.eW)
inherit(W.j3,W.iK)
inherit(W.f7,W.j3)
inherit(W.j4,W.iL)
inherit(W.f9,W.j4)
inherit(W.iG,W.f9)
inherit(W.e4,W.hj)
inherit(W.hu,W.e9)
inherit(W.ne,W.hC)
inherit(W.je,W.iV)
inherit(W.jy,W.je)
inherit(W.jf,W.iW)
inherit(W.jB,W.jf)
inherit(W.nM,W.ea)
inherit(W.jg,W.iX)
inherit(W.jI,W.jg)
inherit(W.ol,W.eJ)
inherit(W.h6,W.h3)
inherit(W.jN,W.h6)
inherit(W.jh,W.iY)
inherit(W.jO,W.jh)
inherit(W.ji,W.iZ)
inherit(W.pb,W.ji)
inherit(W.h7,W.h4)
inherit(W.pc,W.h7)
inherit(W.jj,W.j_)
inherit(W.jS,W.jj)
inherit(W.jk,W.j0)
inherit(W.hY,W.jk)
inherit(W.jl,W.j1)
inherit(W.k2,W.jl)
inherit(W.qc,W.il)
inherit(W.j5,W.iM)
inherit(W.k6,W.j5)
inherit(W.j6,W.iN)
inherit(W.i2,W.j6)
inherit(W.j7,W.iO)
inherit(W.ka,W.j7)
inherit(W.j8,W.iP)
inherit(W.kc,W.j8)
t=P.kX
inherit(W.qd,t)
inherit(P.kv,t)
inherit(W.eM,W.qg)
inherit(W.qh,P.oB)
inherit(P.r2,P.r1)
inherit(P.jZ,P.pV)
inherit(P.bU,P.qO)
t=P.ce
inherit(P.cp,t)
inherit(P.ee,t)
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
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lR,t)
inherit(P.na,t)
inherit(P.nb,t)
inherit(P.nK,t)
inherit(P.oe,t)
inherit(P.p0,t)
inherit(P.pD,t)
inherit(P.i0,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.qV,t)
t=P.cp
inherit(P.kp,t)
inherit(P.mf,t)
inherit(P.oZ,t)
inherit(P.eE,t)
inherit(P.pz,t)
inherit(P.j9,P.iQ)
inherit(P.mO,P.j9)
inherit(P.ja,P.iR)
inherit(P.nu,P.ja)
inherit(P.jb,P.iS)
inherit(P.oV,P.jb)
inherit(P.pa,P.eE)
inherit(P.jc,P.iT)
inherit(P.pn,P.jc)
t=P.bC
inherit(P.e1,t)
inherit(P.kV,t)
inherit(P.eU,P.e1)
inherit(P.jd,P.iU)
inherit(P.jP,P.jd)
t=B.hm
inherit(S.kq,t)
inherit(M.ku,t)
inherit(A.kR,t)
inherit(M.l3,t)
inherit(V.lb,t)
inherit(U.lF,t)
inherit(N.mK,t)
inherit(F.ni,t)
inherit(G.nQ,t)
inherit(Q.o5,t)
inherit(N.oo,t)
inherit(D.p3,t)
inherit(V.p5,t)
inherit(F.pP,t)
t=N.a6
inherit(T.l9,t)
inherit(R.nY,t)
t=T.l9
inherit(K.bW,t)
inherit(S.bH,t)
inherit(T.c5,t)
inherit(M.bB,t)
inherit(A.nE,A.jE)
inherit(L.aa,A.nE)
t=O.cb
inherit(O.dr,t)
inherit(O.iq,t)
inherit(O.eD,t)
t=O.dr
inherit(U.ky,t)
inherit(Y.o_,t)
inherit(V.lV,t)
inherit(Q.mg,t)
inherit(Q.nL,t)
inherit(M.ow,t)
inherit(B.pU,t)
t=U.ky
inherit(U.n4,t)
inherit(U.nz,t)
inherit(U.oS,O.iq)
t=U.oS
inherit(U.oT,t)
inherit(U.oU,t)
t=T.hO
inherit(O.kA,t)
inherit(Y.m1,t)
inherit(Y.m2,t)
inherit(B.m4,t)
inherit(X.mc,t)
inherit(Q.md,t)
inherit(S.mM,t)
inherit(Z.n3,t)
inherit(S.n5,t)
inherit(U.n6,t)
inherit(E.nh,t)
inherit(V.nD,t)
inherit(N.nX,t)
inherit(N.o4,t)
inherit(E.o9,t)
inherit(Y.oa,t)
inherit(Y.oc,t)
inherit(L.od,t)
inherit(S.og,t)
inherit(Y.on,t)
inherit(R.p_,t)
inherit(U.pe,t)
inherit(E.pG,t)
inherit(M.pK,t)
t=O.eD
inherit(Y.p9,t)
inherit(Y.kL,t)
inherit(Y.nv,t)
inherit(U.pL,t)
t=L.fM
inherit(L.kE,t)
inherit(T.kG,t)
inherit(T.kJ,t)
inherit(U.lc,t)
inherit(Z.ld,t)
inherit(T.m3,t)
inherit(V.m5,t)
inherit(X.m7,t)
inherit(Z.mJ,t)
inherit(Q.mN,t)
inherit(K.mP,t)
inherit(G.mQ,t)
inherit(D.nc,t)
inherit(V.nf,t)
inherit(E.nZ,t)
inherit(V.o6,t)
inherit(K.ob,t)
inherit(N.or,t)
inherit(A.ng,t)
inherit(A.os,t)
inherit(A.nR,t)
inherit(A.op,t)
inherit(A.pk,t)
inherit(A.o0,t)
inherit(A.m_,t)
inherit(L.p1,t)
inherit(N.pf,t)
inherit(Q.pF,t)
t=S.bH
inherit(S.ic,t)
inherit(S.m8,t)
inherit(E.iF,E.ny)
t=E.J
inherit(E.fN,t)
inherit(E.ia,t)
inherit(Q.nO,Q.mg)
inherit(U.X,U.b)
t=R.nY
inherit(R.a1,t)
inherit(R.R,t)
inherit(R.a8,t)
inherit(R.bA,R.a8)
t=Y.dP
inherit(Y.af,t)
inherit(Y.c3,t)
inherit(Y.S,t)
inherit(Y.ie,t)
inherit(Y.bD,t)
inherit(Y.cW,t)
inherit(Y.kP,t)
inherit(Y.jF,t)
inherit(Y.iD,t)
inherit(Y.jH,t)
t=Y.c3
inherit(Y.d_,t)
inherit(Y.bw,t)
inherit(U.au,A.Y)
t=G.V
inherit(G.aY,t)
inherit(G.bI,t)
inherit(G.e,t)
inherit(G.at,G.bI)
t=D.cG
inherit(D.jY,t)
inherit(D.o2,t)
t=Q.cy
inherit(Q.hV,t)
inherit(Q.hU,t)
inherit(Q.dX,Q.hV)
inherit(B.eI,Q.dX)
t=S.fm
inherit(S.uG,t)
inherit(S.kM,t)
inherit(S.mR,t)
inherit(S.ui,t)
inherit(S.ty,t)
t=S.kM
inherit(S.uy,t)
inherit(S.us,t)
t=S.mR
inherit(S.tc,t)
inherit(S.t2,t)
t=S.l4
inherit(S.ud,t)
inherit(S.l5,t)
inherit(S.nG,S.l5)
inherit(S.uK,S.nG)
t=S.kK
inherit(S.uz,t)
inherit(S.uL,t)
t=S.m0
inherit(S.uP,t)
inherit(S.uA,t)
inherit(S.ti,t)
inherit(S.uM,t)
t=S.pd
inherit(S.uR,t)
inherit(S.t9,t)
inherit(S.uZ,t)
t=S.hA
inherit(S.uj,t)
inherit(S.ul,t)
inherit(S.uH,t)
inherit(Q.eK,Q.hU)
inherit(Q.jV,Q.eK)
mixin(H.hS,H.pr)
mixin(H.hF,P.b5)
mixin(H.hH,H.iC)
mixin(H.hG,P.b5)
mixin(H.hI,H.iC)
mixin(P.hJ,P.b5)
mixin(P.hT,P.r5)
mixin(W.h2,P.b5)
mixin(W.h5,W.bx)
mixin(W.iI,W.ig)
mixin(W.jD,W.ig)
mixin(W.iJ,P.b5)
mixin(W.j2,W.bx)
mixin(W.iK,P.b5)
mixin(W.j3,W.bx)
mixin(W.iL,P.b5)
mixin(W.j4,W.bx)
mixin(W.iV,P.b5)
mixin(W.je,W.bx)
mixin(W.iW,P.b5)
mixin(W.jf,W.bx)
mixin(W.iX,P.b5)
mixin(W.jg,W.bx)
mixin(W.h3,P.b5)
mixin(W.h6,W.bx)
mixin(W.iY,P.b5)
mixin(W.jh,W.bx)
mixin(W.iZ,P.b5)
mixin(W.ji,W.bx)
mixin(W.h4,P.b5)
mixin(W.h7,W.bx)
mixin(W.j_,P.b5)
mixin(W.jj,W.bx)
mixin(W.j0,P.b5)
mixin(W.jk,W.bx)
mixin(W.j1,P.b5)
mixin(W.jl,W.bx)
mixin(W.iM,P.b5)
mixin(W.j5,W.bx)
mixin(W.iN,P.b5)
mixin(W.j6,W.bx)
mixin(W.iO,P.b5)
mixin(W.j7,W.bx)
mixin(W.iP,P.b5)
mixin(W.j8,W.bx)
mixin(P.iQ,P.b5)
mixin(P.j9,W.bx)
mixin(P.iR,P.b5)
mixin(P.ja,W.bx)
mixin(P.iS,P.b5)
mixin(P.jb,W.bx)
mixin(P.iT,P.b5)
mixin(P.jc,W.bx)
mixin(P.iU,P.b5)
mixin(P.jd,W.bx)
mixin(A.jE,P.ff)
mixin(Q.hV,P.b5)
mixin(Q.hU,P.ff)})();(function constants(){C.L=W.e4.prototype
C.M=J.j.prototype
C.b=J.eq.prototype
C.f=J.jt.prototype
C.a=J.ju.prototype
C.d=J.fg.prototype
C.c=J.er.prototype
C.T=J.es.prototype
C.p=H.fk.prototype
C.F=J.nN.prototype
C.r=J.eG.prototype
C.H=new P.kC(!1)
C.G=new P.kB(C.H)
C.j=new W.id()
C.I=new P.nA()
C.J=new P.q9()
C.K=new P.qE()
C.e=new P.qP()
C.t=new W.r4()
C.o=new P.dI(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.E])
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
C.h=new F.hy(0,"LogLevel.ERROR")
C.i=new F.hy(1,"LogLevel.WARN")
C.Z=new F.hy(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.C])
C.a_=new H.kU(0,{},C.X,[P.C,P.C])
C.a0=H.c0("bi")
C.a1=H.c0("HM")
C.q=H.c0("HN")
C.a2=H.c0("HO")
C.a3=H.c0("HP")
C.a4=H.c0("HR")
C.a5=H.c0("HS")
C.a6=H.c0("HT")
C.a7=H.c0("mF")
C.a8=H.c0("d6")
C.a9=H.c0("C")
C.aa=H.c0("HW")
C.ab=H.c0("HX")
C.ac=H.c0("HY")
C.ad=H.c0("dc")
C.ae=H.c0("dd")
C.af=H.c0("T")
C.ag=H.c0("E")
C.ah=H.c0("dq")
C.n=new P.pA(!1)})();(function staticFields(){$.wN="$cachedFunction"
$.wO="$cachedInvocation"
$.dF=0
$.fR=null
$.vu=null
$.vb=null
$.xO=null
$.y1=null
$.rw=null
$.rF=null
$.vc=null
$.fC=null
$.i5=null
$.i6=null
$.v7=!1
$.aC=C.e
$.vK=0
$.vG=null
$.vF=null
$.vE=null
$.vH=null
$.vD=null
$.yX=null
$.z_=null
$.yC=null
$.yD=null
$.yB=null
$.yG=null
$.yO=null
$.yM=null
$.z1=null
$.yS=null
$.yI=null
$.yL=null
$.yE=null
$.yK=null
$.yV=null
$.yJ=null
$.yZ=null
$.yU=null
$.yH=null
$.yA=null
$.yP=null
$.yY=null
$.yR=null
$.yW=null
$.z0=null
$.yT=null
$.yF=null
$.yN=null
$.yQ=null
$.ag="accent"
$.ai="aspect1"
$.ah="aspect2"
$.ar="shoe1"
$.aq="shoe2"
$.ak="cloak1"
$.al="cloak2"
$.aj="cloak3"
$.ap="shirt1"
$.ao="shirt2"
$.an="pants1"
$.am="pants2"
$.ax=1300
$.k=3
$.m=2
$.L=1
$.B=0.1
$.zF=1
$.zE=-1
$.ts=null
$.e2=null
$.vL=null
$.ek=null
$.f5=null
$.iv=null
$.tl=null
$.lH=null
$.tu=null
$.iw=null
$.it=null
$.vN=null
$.iB=null
$.ha=null
$.dM=null
$.vM=null
$.lG=null
$.lM=null
$.f3=null
$.zC=null
$.zz=null
$.zB=null
$.zD=null
$.hg=null
$.f1=null
$.cx=null
$.d0=null
$.em=null
$.lL=null
$.ca=null
$.c9=null
$.tn=null
$.he=null
$.ej=null
$.zA=null
$.hd=null
$.cD=null
$.e3=null
$.iA=null
$.cR=null
$.f4=null
$.c2=null
$.lJ=null
$.to=null
$.b2=null
$.cC=null
$.c8=null
$.cf=null
$.lI=null
$.bP=null
$.dw=null
$.dv=null
$.du=null
$.dK=null
$.dL=null
$.dJ=null
$.d2=null
$.hf=null
$.iz=null
$.iu=null
$.cS=null
$.cw=null
$.bf=null
$.f2=null
$.el=null
$.lK=null
$.hc=null
$.hb=null
$.tq=null
$.cB=null
$.tt=null
$.tm=null
$.vP=null
$.ei=null
$.cA=null
$.d1=null
$.dh=null
$.f6=null
$.tp=null
$.tr=null
$.vO=null
$.ix=null
$.iy=null
$.en=null
$.vQ=!1
$.tw=null
$.zG=null
$.vS=null
$.vU=null
$.zP=null
$.vT=null
$.zN=null
$.zO=null
$.tv=null
$.zK=null
$.zI=null
$.zJ=null
$.zL=null
$.zM=null
$.zZ=null
$.zS=null
$.zT=null
$.zU=null
$.zV=null
$.zW=null
$.zX=null
$.zY=null
$.A0=null
$.A1=null
$.A2=null
$.A3=null
$.A4=null
$.A5=null
$.A_=null
$.Ff="JACK"
$.Fj="PM"
$.Fg="JS"
$.Fe="HP"
$.Fo="YD"
$.Fl="SI"
$.Fm="SU"
$.Fh="ME"
$.Fk="RB"
$.Fc="GN"
$.wH="MP"
$.Fa="AR"
$.Fi="PE"
$.Fb="DP"
$.Fn="WV"
$.Fd="HB"
$.n="PLAYER1TAG"
$.ey="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.M="CONSORTSOUNDTAG"
$.aX="MCGUFFINTAG"
$.ae="TAGPHYSICALMCGUFFIN"
$.cj="TAGWEAPON"
$.FV=null
$.G7=null
$.FP=null
$.FS=null
$.FY=null
$.G2=null
$.G0=null
$.Ga=null
$.G9=null
$.G1=null
$.Gc=null
$.FX=null
$.Gb=null
$.G5=null
$.G3=null
$.G6=null
$.FR=null
$.FQ=null
$.G_=null
$.FZ=null
$.FW=null
$.G8=null
$.FT=null
$.FU=null
$.G4=null
$.xU=!1
$.Gd=!1
$.wW=null
$.Gk=13
$.av=3
$.bM=2
$.aS=1
$.mA=0
$.K=1
$.a4=3
$.I=4
$.u0=6
$.u1=7
$.ac=8
$.w=9
$.r=10
$.fd=null
$.ep=null
$.tM=null
$.tX=null
$.tT=null
$.w0=null
$.tI=null
$.tS=null
$.hp=null
$.w9=null
$.wr=null
$.w3=null
$.wa=null
$.tJ=null
$.tR=null
$.wu=null
$.ww=null
$.tF=null
$.jn=null
$.jm=null
$.aK=null
$.wl=null
$.tD=null
$.wi=null
$.fe=null
$.w2=null
$.wx=null
$.wt=null
$.wq=null
$.tQ=null
$.mt=null
$.eo=null
$.wv=null
$.mp=null
$.tK=null
$.e5=null
$.wo=null
$.di=null
$.ho=null
$.u_=null
$.wp=null
$.tZ=null
$.tU=null
$.tW=null
$.mx=null
$.hn=null
$.Au=null
$.wc=null
$.wh=null
$.wn=null
$.wm=null
$.D=null
$.w7=null
$.mq=null
$.bQ=null
$.ba=null
$.bR=null
$.W=null
$.aO=null
$.c4=null
$.N=null
$.Q=null
$.aF=null
$.b3=null
$.bX=null
$.bg=null
$.bm=null
$.ch=null
$.b6=null
$.bz=null
$.bS=null
$.a_=null
$.EP=null
$.aJ=null
$.b4=null
$.aZ=null
$.ab=null
$.cc=null
$.b1=null
$.aE=null
$.bE=null
$.b_=null
$.az=null
$.bk=null
$.bY=null
$.aN=null
$.bo=null
$.bl=null
$.a2=null
$.bL=null
$.a7=null
$.bd=null
$.bn=null
$.b0=null
$.bh=null
$.aL=null
$.b8=null
$.aM=null
$.a0=null
$.aA=null
$.aP=null
$.b9=null
$.aD=null
$.ay=null
$.a3=null
$.H=null
$.P=null
$.as=null
$.aw=null
$.aW=null
$.aT=null
$.BM=null
$.Er=null
$.F_=null
$.Bi=null
$.Eo=null
$.BN=null
$.w_=null
$.ED=null
$.CM=null
$.BI=null
$.Aq=null
$.Dm=null
$.jo=null
$.w4=null
$.DM=null
$.Bf=null
$.Cv=null
$.Bd=null
$.tG=null
$.AZ=null
$.BZ=null
$.Bm=null
$.CF=null
$.EL=null
$.BO=null
$.mr=null
$.CG=null
$.Bk=null
$.B4=null
$.tV=null
$.Aj=null
$.tC=null
$.Co=null
$.tO=null
$.D0=null
$.CV=null
$.An=null
$.B7=null
$.DW=null
$.Ap=null
$.En=null
$.Cu=null
$.Bt=null
$.DG=null
$.Eh=null
$.ms=null
$.CQ=null
$.DD=null
$.Bl=null
$.Ac=null
$.EO=null
$.Cy=null
$.B3=null
$.EC=null
$.D3=null
$.Ba=null
$.Em=null
$.BD=null
$.E3=null
$.E4=null
$.Al=null
$.CX=null
$.Bn=null
$.Bx=null
$.F3=null
$.hq=null
$.DU=null
$.Ek=null
$.mv=null
$.AT=null
$.Dd=null
$.Dh=null
$.Ai=null
$.BC=null
$.El=null
$.D2=null
$.EF=null
$.DI=null
$.Di=null
$.wg=null
$.E7=null
$.EU=null
$.Eq=null
$.Cb=null
$.Du=null
$.Cc=null
$.DX=null
$.ES=null
$.CE=null
$.Bz=null
$.BW=null
$.AK=null
$.DE=null
$.BU=null
$.C0=null
$.Bp=null
$.E6=null
$.fc=null
$.D7=null
$.we=null
$.Cd=null
$.wf=null
$.EX=null
$.AP=null
$.DS=null
$.DT=null
$.DR=null
$.DQ=null
$.Ed=null
$.C1=null
$.CY=null
$.Eg=null
$.CP=null
$.D8=null
$.w6=null
$.ER=null
$.CW=null
$.BF=null
$.BG=null
$.Dg=null
$.F2=null
$.Cs=null
$.EQ=null
$.tP=null
$.E2=null
$.CC=null
$.jp=null
$.Cm=null
$.Dw=null
$.AO=null
$.BJ=null
$.DZ=null
$.CZ=null
$.EK=null
$.wj=null
$.D6=null
$.AV=null
$.Bg=null
$.Ds=null
$.Ex=null
$.DY=null
$.mn=null
$.tY=null
$.E9=null
$.ET=null
$.Ca=null
$.Ay=null
$.AH=null
$.Ev=null
$.Da=null
$.CN=null
$.Db=null
$.Es=null
$.Cn=null
$.Am=null
$.C_=null
$.CL=null
$.Eb=null
$.BT=null
$.AN=null
$.DO=null
$.DP=null
$.EI=null
$.E0=null
$.mw=null
$.w5=null
$.Bb=null
$.w8=null
$.Ch=null
$.mu=null
$.Dy=null
$.CU=null
$.DK=null
$.tL=null
$.my=null
$.tN=null
$.Bv=null
$.BY=null
$.wk=null
$.wb=null
$.B6=null
$.Ez=null
$.B_=null
$.Dk=null
$.Ce=null
$.Ef=null
$.CO=null
$.Av=null
$.Cf=null
$.Bs=null
$.Do=null
$.Cx=null
$.CT=null
$.CD=null
$.CH=null
$.DN=null
$.DJ=null
$.Af=null
$.Ew=null
$.DB=null
$.Bj=null
$.Bo=null
$.BX=null
$.Et=null
$.BQ=null
$.Cz=null
$.AC=null
$.BK=null
$.Br=null
$.Dc=null
$.BA=null
$.DV=null
$.CB=null
$.w1=null
$.Dx=null
$.Cg=null
$.BR=null
$.Ad=null
$.Ak=null
$.D9=null
$.Dj=null
$.Cw=null
$.C8=null
$.EN=null
$.AF=null
$.BS=null
$.CA=null
$.Bh=null
$.ws=null
$.B5=null
$.E_=null
$.AD=null
$.Ey=null
$.CJ=null
$.Ax=null
$.DH=null
$.Dt=null
$.Bc=null
$.C2=null
$.AU=null
$.Eu=null
$.Ck=null
$.EJ=null
$.AW=null
$.C3=null
$.AX=null
$.Be=null
$.DA=null
$.B8=null
$.Cl=null
$.D_=null
$.AQ=null
$.Ee=null
$.EZ=null
$.E5=null
$.CR=null
$.Ec=null
$.CS=null
$.As=null
$.Ae=null
$.CK=null
$.AA=null
$.AY=null
$.At=null
$.Aw=null
$.D5=null
$.Dp=null
$.EB=null
$.Ci=null
$.EY=null
$.DF=null
$.DC=null
$.Cp=null
$.Cj=null
$.B1=null
$.C6=null
$.CI=null
$.De=null
$.E8=null
$.Ah=null
$.EV=null
$.By=null
$.Ei=null
$.Bq=null
$.Ar=null
$.AR=null
$.AJ=null
$.F1=null
$.AS=null
$.BB=null
$.B0=null
$.EH=null
$.Ea=null
$.EA=null
$.Ag=null
$.DL=null
$.Cq=null
$.Ct=null
$.EM=null
$.Ej=null
$.wd=null
$.BH=null
$.Dr=null
$.EW=null
$.BL=null
$.Cr=null
$.tH=null
$.C9=null
$.C7=null
$.E1=null
$.Dq=null
$.C4=null
$.AI=null
$.Ep=null
$.Df=null
$.EE=null
$.F0=null
$.mo=null
$.tE=null
$.AE=null
$.BE=null
$.Dz=null
$.B9=null
$.Dv=null
$.Bu=null
$.Ao=null
$.AG=null
$.D4=null
$.Bw=null
$.Dn=null
$.AM=null
$.BP=null
$.EG=null
$.Az=null
$.BV=null
$.Dl=null
$.AL=null
$.C5=null
$.D1=null
$.AB=null
$.B2=null
$.xo=4
$.f8="OWNER"
$.wD=!1
$.uh=null
$.y3=""
$.oy=null
$.Gh=null
$.eC=null
$.dT=null
$.Gg=null
$.da=null
$.dU=null
$.c6=null
$.dS=null
$.fs=null
$.eB=null
$.d9=null
$.c_=null
$.wY=!1})();(function lazyInitializers(){lazy($,"vB","$get$vB",function(){return H.xX("_$dart_dartClosure")})
lazy($,"ua","$get$ua",function(){return H.xX("_$dart_js")})
lazy($,"vY","$get$vY",function(){return H.Aa()})
lazy($,"vZ","$get$vZ",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vK
$.vK=t+1
t="expando$key$"+t}return new P.lo(null,t,[P.E])})
lazy($,"x4","$get$x4",function(){return H.dV(H.pp({
toString:function(){return"$receiver$"}}))})
lazy($,"x5","$get$x5",function(){return H.dV(H.pp({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"x6","$get$x6",function(){return H.dV(H.pp(null))})
lazy($,"x7","$get$x7",function(){return H.dV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xb","$get$xb",function(){return H.dV(H.pp(void 0))})
lazy($,"xc","$get$xc",function(){return H.dV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x9","$get$x9",function(){return H.dV(H.xa(null))})
lazy($,"x8","$get$x8",function(){return H.dV(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xe","$get$xe",function(){return H.dV(H.xa(void 0))})
lazy($,"xd","$get$xd",function(){return H.dV(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"v3","$get$v3",function(){return P.Gr()})
lazy($,"hi","$get$hi",function(){return P.Gx(null,P.d6)})
lazy($,"i7","$get$i7",function(){return[]})
lazy($,"xq","$get$xq",function(){return H.Fp([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xM","$get$xM",function(){return P.GV()})
lazy($,"vA","$get$vA",function(){return P.d8("^\\S+$",!0,!1)})
lazy($,"kt","$get$kt",function(){return P.bZ(P.E,L.fM)})
lazy($,"vw","$get$vw",function(){return P.d8("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bH])})
lazy($,"lX","$get$lX",function(){return P.bZ(P.C,Z.ir)})
lazy($,"mk","$get$mk",function(){return P.bZ(P.E,B.hm)})
lazy($,"wy","$get$wy",function(){return H.a([],[A.Y])})
lazy($,"wI","$get$wI",function(){return H.a([],[P.C])})
lazy($,"o8","$get$o8",function(){return P.bZ(P.E,T.hO)})
lazy($,"aB","$get$aB",function(){return H.a([],[U.au])})
lazy($,"wX","$get$wX",function(){return P.wB([0,new K.cF("Pixels -> Bytes",T.Ha(),T.H9()),1,new K.cF("Pixels -> Packed bits",T.H8(),T.H7()),2,new K.cF("RLE 1 byte",V.tg(1),V.tf(1)),3,new K.cF("RLE 2 bytes",V.tg(2),V.tf(2)),4,new K.cF("RLE 3 bytes",V.tg(3),V.tf(3)),5,new K.cF("RLE packed 1 byte",V.te(1),V.td(1)),6,new K.cF("RLE packed 2 bytes",V.te(2),V.td(2)),7,new K.cF("RLE packed 3 bytes",V.te(3),V.td(3)),8,new K.cF("RLE dynamic",V.HF(),V.HE()),9,new K.cF("Exponential-Golomb pixels",F.Ho(),F.Hn()),10,new K.cF("Exponential-Golomb run RLE",F.Hm(),F.Hl()),11,new K.cF("Exponential-Golomb run/data RLE",F.Hk(),F.Hj())],P.E,K.cF)})
lazy($,"c","$get$c",function(){return P.a5(null,null,null,G.V)})
lazy($,"xm","$get$xm",function(){return P.d8("[\n\r]+",!0,!1)})
lazy($,"xn","$get$xn",function(){return P.d8("( *)(.*)",!0,!1)})
lazy($,"xl","$get$xl",function(){return P.d8("^s*//",!0,!1)})
lazy($,"xk","$get$xk",function(){return P.d8("//",!0,!1)})
lazy($,"cI","$get$cI",function(){return new F.fh(!1,!1,"WordListFileFormat")})
lazy($,"xp","$get$xp",function(){return new T.pQ(null)})
lazy($,"vr","$get$vr",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cT","$get$cT",function(){return P.bZ(P.C,Y.dO)})
lazy($,"wE","$get$wE",function(){return P.d8("[\\/]",!0,!1)})
lazy($,"ug","$get$ug",function(){return P.bZ(P.C,W.fq)})
lazy($,"ut","$get$ut",function(){return A.fV(255,0,255,255)})
lazy($,"nJ","$get$nJ",function(){return new F.fh(!1,!1,"Path Utils")})
lazy($,"nI","$get$nI",function(){return P.bZ(P.eH,P.E)})
lazy($,"cO","$get$cO",function(){return H.a([],[D.cG])})
lazy($,"x2","$get$x2",function(){return P.d8("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hR","$get$hR",function(){return P.d8("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fu","$get$fu",function(){return new F.fh(!1,!1,"TextEngine")})
lazy($,"x0","$get$x0",function(){return P.d8("#(.*?)#",!0,!1)})
lazy($,"x1","$get$x1",function(){return P.d8("\\?(.*?)\\?",!0,!1)})
lazy($,"ft","$get$ft",function(){return P.d8("\\\\(?!\\\\)",!0,!1)})
lazy($,"vC","$get$vC",function(){var t={color:16711935}
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
mangledGlobalNames:{E:"int",T:"double",dq:"num",C:"String",dd:"bool",d6:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.dd,args:[[P.q,E.iF]]},{func:1,v:true},{func:1,ret:P.dc,args:[P.bi,P.E,P.E,O.cU]},{func:1,ret:P.bi,args:[P.E,P.bi,P.bi,O.cU]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.C,args:[P.E]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.aR,args:[P.E]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dt,args:[P.E]},{func:1,ret:W.cq,args:[P.E]},{func:1,args:[,]},{func:1,v:true,args:[P.ad],opt:[P.dQ]},{func:1,ret:W.cg,args:[P.E]},{func:1,v:true,args:[,P.dQ]},{func:1,ret:W.ci,args:[P.E]},{func:1,ret:W.cr,args:[P.E]},{func:1,ret:W.cs,args:[P.E]},{func:1,ret:W.fr,args:[P.E]},{func:1,ret:W.ct,args:[P.E]},{func:1,ret:W.fv,args:[P.E]},{func:1,ret:W.fw,args:[P.E]},{func:1,ret:P.bU,args:[P.E]},{func:1,ret:P.C,args:[P.d5]},{func:1,ret:W.co,args:[P.E]},{func:1,ret:W.fx,args:[P.E]},{func:1,ret:W.ck,args:[P.E]},{func:1,ret:W.cl,args:[P.E]},{func:1,ret:P.bp,args:[P.E]},{func:1,ret:P.dd,args:[P.ad]},{func:1,ret:P.E,args:[P.bG,P.bG]},{func:1,v:true,args:[P.C]},{func:1,ret:W.f0,args:[P.E]},{func:1,ret:W.bJ,args:[P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.j,AnimationEffectTiming:J.j,AnimationTimeline:J.j,AppBannerPromptResult:J.j,BarProp:J.j,Body:J.j,CacheStorage:J.j,CanvasGradient:J.j,CanvasPattern:J.j,CanvasRenderingContext2D:J.j,CHROMIUMValuebuffer:J.j,CircularGeofencingRegion:J.j,Client:J.j,CompositorProxy:J.j,ConsoleBase:J.j,Coordinates:J.j,Crypto:J.j,CryptoKey:J.j,CSS:J.j,DeprecatedStorageInfo:J.j,DeprecatedStorageQuota:J.j,DeviceAcceleration:J.j,DeviceRotationRate:J.j,DirectoryReader:J.j,DOMImplementation:J.j,Iterator:J.j,DOMMatrix:J.j,DOMMatrixReadOnly:J.j,DOMParser:J.j,DOMPoint:J.j,DOMPointReadOnly:J.j,EffectModel:J.j,Stream:J.j,GamepadButton:J.j,Geofencing:J.j,GeofencingRegion:J.j,Geolocation:J.j,Geoposition:J.j,Headers:J.j,HMDVRDevice:J.j,IdleDeadline:J.j,ImageBitmap:J.j,ImageBitmapRenderingContext:J.j,InjectedScriptHost:J.j,InputDeviceCapabilities:J.j,IntersectionObserver:J.j,IntersectionObserverEntry:J.j,KeyframeEffect:J.j,MediaDeviceInfo:J.j,MediaDevices:J.j,MediaError:J.j,MediaKeyStatusMap:J.j,MediaKeySystemAccess:J.j,MediaKeys:J.j,MediaMetadata:J.j,MediaSession:J.j,MemoryInfo:J.j,MessageChannel:J.j,Metadata:J.j,MIDIInputMap:J.j,MIDIOutputMap:J.j,MutationObserver:J.j,WebKitMutationObserver:J.j,MutationRecord:J.j,NavigatorStorageUtils:J.j,NodeFilter:J.j,NodeIterator:J.j,NonDocumentTypeChildNode:J.j,NonElementParentNode:J.j,OffscreenCanvas:J.j,PerformanceNavigation:J.j,PerformanceObserver:J.j,PerformanceObserverEntryList:J.j,PerformanceTiming:J.j,Permissions:J.j,PositionError:J.j,PositionSensorVRDevice:J.j,Presentation:J.j,PushManager:J.j,PushMessageData:J.j,PushSubscription:J.j,Range:J.j,ReadableByteStream:J.j,ReadableByteStreamReader:J.j,ReadableStreamReader:J.j,RTCCertificate:J.j,RTCIceCandidate:J.j,mozRTCIceCandidate:J.j,RTCSessionDescription:J.j,mozRTCSessionDescription:J.j,RTCStatsReport:J.j,RTCStatsResponse:J.j,Screen:J.j,ScrollState:J.j,Selection:J.j,SharedArrayBuffer:J.j,SourceInfo:J.j,StorageInfo:J.j,StorageManager:J.j,StorageQuota:J.j,StyleMedia:J.j,SyncManager:J.j,TextMetrics:J.j,TreeWalker:J.j,UnderlyingSourceBase:J.j,VRDevice:J.j,VREyeParameters:J.j,VRFieldOfView:J.j,VRPositionState:J.j,ValidityState:J.j,VideoPlaybackQuality:J.j,VideoTrack:J.j,WindowClient:J.j,WorkerConsole:J.j,XPathEvaluator:J.j,XPathExpression:J.j,XPathNSResolver:J.j,XPathResult:J.j,XMLSerializer:J.j,XSLTProcessor:J.j,Bluetooth:J.j,BluetoothAdvertisingData:J.j,BluetoothCharacteristicProperties:J.j,BluetoothRemoteGATTServer:J.j,BluetoothRemoteGATTService:J.j,BluetoothUUID:J.j,Cache:J.j,DOMFileSystemSync:J.j,DirectoryEntrySync:J.j,DirectoryReaderSync:J.j,EntrySync:J.j,FileEntrySync:J.j,FileReaderSync:J.j,FileWriterSync:J.j,HTMLAllCollection:J.j,NFC:J.j,PagePopupController:J.j,Request:J.j,Response:J.j,SubtleCrypto:J.j,USBAlternateInterface:J.j,USBConfiguration:J.j,USBDevice:J.j,USBEndpoint:J.j,USBInTransferResult:J.j,USBInterface:J.j,USBIsochronousInTransferPacket:J.j,USBIsochronousInTransferResult:J.j,USBIsochronousOutTransferPacket:J.j,USBIsochronousOutTransferResult:J.j,USBOutTransferResult:J.j,WebKitCSSMatrix:J.j,Worklet:J.j,WorkletGlobalScope:J.j,IDBCursor:J.j,IDBCursorWithValue:J.j,IDBFactory:J.j,IDBKeyRange:J.j,SVGAngle:J.j,SVGAnimatedAngle:J.j,SVGAnimatedBoolean:J.j,SVGAnimatedEnumeration:J.j,SVGAnimatedInteger:J.j,SVGAnimatedLength:J.j,SVGAnimatedLengthList:J.j,SVGAnimatedNumber:J.j,SVGAnimatedNumberList:J.j,SVGAnimatedPreserveAspectRatio:J.j,SVGAnimatedRect:J.j,SVGAnimatedString:J.j,SVGAnimatedTransformList:J.j,SVGMatrix:J.j,SVGPoint:J.j,SVGPreserveAspectRatio:J.j,SVGRect:J.j,SVGUnitTypes:J.j,AudioListener:J.j,AudioParam:J.j,PeriodicWave:J.j,ANGLEInstancedArrays:J.j,ANGLE_instanced_arrays:J.j,WebGLBuffer:J.j,CHROMIUMSubscribeUniform:J.j,WebGLCompressedTextureASTC:J.j,WebGLCompressedTextureATC:J.j,WEBGL_compressed_texture_atc:J.j,WebGLCompressedTextureETC1:J.j,WEBGL_compressed_texture_etc1:J.j,WebGLCompressedTexturePVRTC:J.j,WEBGL_compressed_texture_pvrtc:J.j,WebGLCompressedTextureS3TC:J.j,WEBGL_compressed_texture_s3tc:J.j,WebGLDebugRendererInfo:J.j,WEBGL_debug_renderer_info:J.j,WebGLDebugShaders:J.j,WEBGL_debug_shaders:J.j,WebGLDepthTexture:J.j,WEBGL_depth_texture:J.j,WebGLDrawBuffers:J.j,WEBGL_draw_buffers:J.j,EXTsRGB:J.j,EXT_sRGB:J.j,EXTBlendMinMax:J.j,EXT_blend_minmax:J.j,EXTColorBufferFloat:J.j,EXTDisjointTimerQuery:J.j,EXTFragDepth:J.j,EXT_frag_depth:J.j,EXTShaderTextureLOD:J.j,EXT_shader_texture_lod:J.j,EXTTextureFilterAnisotropic:J.j,EXT_texture_filter_anisotropic:J.j,WebGLFramebuffer:J.j,WebGLLoseContext:J.j,WebGLExtensionLoseContext:J.j,WEBGL_lose_context:J.j,OESElementIndexUint:J.j,OES_element_index_uint:J.j,OESStandardDerivatives:J.j,OES_standard_derivatives:J.j,OESTextureFloat:J.j,OES_texture_float:J.j,OESTextureFloatLinear:J.j,OES_texture_float_linear:J.j,OESTextureHalfFloat:J.j,OES_texture_half_float:J.j,OESTextureHalfFloatLinear:J.j,OES_texture_half_float_linear:J.j,OESVertexArrayObject:J.j,OES_vertex_array_object:J.j,WebGLProgram:J.j,WebGLQuery:J.j,WebGLRenderbuffer:J.j,WebGLRenderingContext:J.j,WebGLSampler:J.j,WebGLShader:J.j,WebGLShaderPrecisionFormat:J.j,WebGLSync:J.j,WebGLTexture:J.j,WebGLTimerQueryEXT:J.j,WebGLTransformFeedback:J.j,WebGLUniformLocation:J.j,WebGLVertexArrayObject:J.j,WebGLVertexArrayObjectOES:J.j,Database:J.j,SQLError:J.j,SQLResultSet:J.j,SQLTransaction:J.j,ArrayBuffer:H.fj,ArrayBufferView:H.eu,DataView:H.nk,Float32Array:H.nl,Float64Array:H.nm,Int16Array:H.nn,Int32Array:H.no,Int8Array:H.np,Uint16Array:H.nq,Uint32Array:H.nr,Uint8ClampedArray:H.jA,CanvasPixelArray:H.jA,Uint8Array:H.fk,HTMLBRElement:W.aI,HTMLCanvasElement:W.aI,HTMLContentElement:W.aI,HTMLDListElement:W.aI,HTMLDataListElement:W.aI,HTMLDetailsElement:W.aI,HTMLDialogElement:W.aI,HTMLHRElement:W.aI,HTMLHeadElement:W.aI,HTMLHeadingElement:W.aI,HTMLHtmlElement:W.aI,HTMLLIElement:W.aI,HTMLLabelElement:W.aI,HTMLLegendElement:W.aI,HTMLMenuElement:W.aI,HTMLMenuItemElement:W.aI,HTMLMeterElement:W.aI,HTMLModElement:W.aI,HTMLOListElement:W.aI,HTMLOptGroupElement:W.aI,HTMLOptionElement:W.aI,HTMLParagraphElement:W.aI,HTMLPictureElement:W.aI,HTMLPreElement:W.aI,HTMLProgressElement:W.aI,HTMLQuoteElement:W.aI,HTMLShadowElement:W.aI,HTMLStyleElement:W.aI,HTMLTableCaptionElement:W.aI,HTMLTableCellElement:W.aI,HTMLTableDataCellElement:W.aI,HTMLTableHeaderCellElement:W.aI,HTMLTableColElement:W.aI,HTMLTableElement:W.aI,HTMLTableRowElement:W.aI,HTMLTableSectionElement:W.aI,HTMLTitleElement:W.aI,HTMLUListElement:W.aI,HTMLUnknownElement:W.aI,HTMLDirectoryElement:W.aI,HTMLFontElement:W.aI,HTMLFrameElement:W.aI,HTMLMarqueeElement:W.aI,HTMLElement:W.aI,HTMLAnchorElement:W.eS,HTMLAreaElement:W.ks,HTMLAudioElement:W.eV,AudioTrack:W.cK,AudioTrackList:W.kz,HTMLBaseElement:W.kD,Blob:W.eW,HTMLBodyElement:W.kH,HTMLButtonElement:W.eX,CDATASection:W.ef,CharacterData:W.ef,Comment:W.ef,ProcessingInstruction:W.ef,Text:W.ef,Clients:W.kO,CompositorWorker:W.kS,Credential:W.fX,FederatedCredential:W.fX,PasswordCredential:W.fX,CredentialsContainer:W.kW,CSSFontFaceRule:W.kZ,CSSImportRule:W.l_,CSSKeyframeRule:W.fY,MozCSSKeyframeRule:W.fY,WebKitCSSKeyframeRule:W.fY,CSSKeyframesRule:W.fZ,MozCSSKeyframesRule:W.fZ,WebKitCSSKeyframesRule:W.fZ,CSSPageRule:W.l0,CSSCharsetRule:W.bJ,CSSGroupingRule:W.bJ,CSSMediaRule:W.bJ,CSSNamespaceRule:W.bJ,CSSSupportsRule:W.bJ,CSSRule:W.bJ,CSSStyleDeclaration:W.f_,MSStyleCSSProperties:W.f_,CSS2Properties:W.f_,CSSStyleRule:W.l1,CSSViewportRule:W.l2,DataTransfer:W.l7,DataTransferItem:W.f0,DataTransferItemList:W.ih,HTMLDivElement:W.h_,Document:W.eg,HTMLDocument:W.eg,XMLDocument:W.eg,DocumentFragment:W.ij,ShadowRoot:W.ij,DOMError:W.ik,FileError:W.ik,DOMException:W.la,DOMRectReadOnly:W.il,DOMStringList:W.im,DOMStringMap:W.io,DOMTokenList:W.ip,Element:W.dt,HTMLEmbedElement:W.lg,DirectoryEntry:W.h1,Entry:W.h1,FileEntry:W.h1,ErrorEvent:W.lm,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceLightEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.lN,File:W.cg,FileList:W.f7,FileReader:W.lO,DOMFileSystem:W.lP,FileWriter:W.lQ,FontFace:W.lT,FontFaceSet:W.lU,FormData:W.lW,HTMLFormElement:W.iE,Gamepad:W.co,History:W.m6,HTMLOptionsCollection:W.f9,HTMLCollection:W.f9,HTMLFormControlsCollection:W.iG,XMLHttpRequest:W.e4,XMLHttpRequestUpload:W.hj,XMLHttpRequestEventTarget:W.hj,HTMLIFrameElement:W.me,ImageData:W.hk,HTMLImageElement:W.fb,HTMLInputElement:W.mj,HTMLKeygenElement:W.mL,CalcLength:W.hu,LengthValue:W.hu,SimpleLength:W.hu,HTMLLinkElement:W.hv,Location:W.n2,HTMLMapElement:W.n7,HTMLVideoElement:W.hB,HTMLMediaElement:W.hB,MediaList:W.jx,HTMLMetaElement:W.nd,MIDIOutput:W.ne,MIDIInput:W.hC,MIDIPort:W.hC,MimeType:W.cq,MimeTypeArray:W.jy,Navigator:W.ns,NavigatorUserMediaError:W.nt,Node:W.aR,NodeList:W.jB,RadioNodeList:W.jB,HTMLObjectElement:W.nw,HTMLOutputElement:W.nB,HTMLParamElement:W.nF,Path2D:W.nH,PerformanceCompositeTiming:W.e7,PerformanceEntry:W.e7,PerformanceMark:W.e7,PerformanceMeasure:W.e7,PerformanceRenderTiming:W.e7,PerformanceResourceTiming:W.e7,Perspective:W.nM,Plugin:W.ci,PluginArray:W.jI,PresentationConnection:W.nS,RTCDataChannel:W.jK,DataChannel:W.jK,HTMLScriptElement:W.fq,HTMLSelectElement:W.jL,ServicePort:W.oh,SharedWorker:W.ok,SharedWorkerGlobalScope:W.ol,HTMLSlotElement:W.om,SourceBuffer:W.cr,SourceBufferList:W.jN,HTMLSourceElement:W.oq,HTMLSpanElement:W.hP,SpeechGrammar:W.cs,SpeechGrammarList:W.jO,SpeechRecognitionAlternative:W.fr,SpeechRecognitionError:W.ot,SpeechRecognitionResult:W.ck,SpeechSynthesisEvent:W.ou,SpeechSynthesisVoice:W.ov,Storage:W.oA,StylePropertyMap:W.oX,CSSStyleSheet:W.cl,StyleSheet:W.cl,KeywordValue:W.e9,NumberValue:W.e9,PositionValue:W.e9,TransformValue:W.e9,StyleValue:W.e9,HTMLTemplateElement:W.p4,HTMLTextAreaElement:W.hQ,TextTrack:W.cP,TextTrackCue:W.cH,VTTCue:W.cH,TextTrackCueList:W.pb,TextTrackList:W.pc,TimeRanges:W.pg,Touch:W.ct,TouchList:W.jS,TrackDefault:W.fv,TrackDefaultList:W.jT,HTMLTrackElement:W.pl,Matrix:W.ea,Rotation:W.ea,Skew:W.ea,Translation:W.ea,TransformComponent:W.ea,URL:W.px,URLSearchParams:W.py,VideoTrackList:W.pC,VTTRegion:W.fw,VTTRegionList:W.jU,WebSocket:W.pH,Window:W.jX,DOMWindow:W.jX,Worker:W.pO,CompositorWorkerGlobalScope:W.eJ,DedicatedWorkerGlobalScope:W.eJ,ServiceWorkerGlobalScope:W.eJ,WorkerGlobalScope:W.eJ,Attr:W.fx,ClientRect:W.q4,ClientRectList:W.hY,DOMRectList:W.hY,CSSRuleList:W.k2,DocumentType:W.qb,DOMRect:W.qc,GamepadList:W.k6,HTMLFrameSetElement:W.qx,NamedNodeMap:W.i2,MozNamedAttrMap:W.i2,ServiceWorker:W.qW,SpeechRecognitionResultList:W.ka,StyleSheetList:W.kc,WorkerLocation:W.rb,WorkerNavigator:W.rc,IDBDatabase:P.l8,IDBIndex:P.mh,IDBObjectStore:P.nx,IDBOpenDBRequest:P.hN,IDBVersionChangeRequest:P.hN,IDBRequest:P.hN,IDBTransaction:P.pm,SVGAElement:P.kp,SVGAnimateElement:P.ee,SVGAnimateMotionElement:P.ee,SVGAnimateTransformElement:P.ee,SVGAnimationElement:P.ee,SVGSetElement:P.ee,SVGFEBlendElement:P.lp,SVGFEColorMatrixElement:P.lq,SVGFEComponentTransferElement:P.lr,SVGFECompositeElement:P.ls,SVGFEConvolveMatrixElement:P.lt,SVGFEDiffuseLightingElement:P.lu,SVGFEDisplacementMapElement:P.lv,SVGFEFloodElement:P.lw,SVGFEGaussianBlurElement:P.lx,SVGFEImageElement:P.ly,SVGFEMergeElement:P.lz,SVGFEMorphologyElement:P.lA,SVGFEOffsetElement:P.lB,SVGFESpecularLightingElement:P.lC,SVGFETileElement:P.lD,SVGFETurbulenceElement:P.lE,SVGFilterElement:P.lR,SVGCircleElement:P.cp,SVGClipPathElement:P.cp,SVGDefsElement:P.cp,SVGEllipseElement:P.cp,SVGForeignObjectElement:P.cp,SVGGElement:P.cp,SVGGeometryElement:P.cp,SVGLineElement:P.cp,SVGPathElement:P.cp,SVGPolygonElement:P.cp,SVGPolylineElement:P.cp,SVGRectElement:P.cp,SVGSwitchElement:P.cp,SVGGraphicsElement:P.cp,SVGImageElement:P.mf,SVGLength:P.d3,SVGLengthList:P.mO,SVGMarkerElement:P.na,SVGMaskElement:P.nb,SVGNumber:P.d7,SVGNumberList:P.nu,SVGPatternElement:P.nK,SVGPointList:P.nP,SVGScriptElement:P.oe,SVGStringList:P.oV,SVGDescElement:P.ce,SVGDiscardElement:P.ce,SVGFEDistantLightElement:P.ce,SVGFEFuncAElement:P.ce,SVGFEFuncBElement:P.ce,SVGFEFuncGElement:P.ce,SVGFEFuncRElement:P.ce,SVGFEMergeNodeElement:P.ce,SVGFEPointLightElement:P.ce,SVGFESpotLightElement:P.ce,SVGMetadataElement:P.ce,SVGStopElement:P.ce,SVGStyleElement:P.ce,SVGTitleElement:P.ce,SVGComponentTransferFunctionElement:P.ce,SVGElement:P.ce,SVGSVGElement:P.oZ,SVGSymbolElement:P.p0,SVGTSpanElement:P.eE,SVGTextElement:P.eE,SVGTextPositioningElement:P.eE,SVGTextContentElement:P.eE,SVGTextPathElement:P.pa,SVGTransform:P.db,SVGTransformList:P.pn,SVGUseElement:P.pz,SVGViewElement:P.pD,SVGViewSpec:P.pE,SVGLinearGradientElement:P.i0,SVGRadialGradientElement:P.i0,SVGGradientElement:P.i0,SVGCursorElement:P.qT,SVGFEDropShadowElement:P.qU,SVGMPathElement:P.qV,AudioBuffer:P.fO,AudioBufferSourceNode:P.eU,AudioContext:P.fP,webkitAudioContext:P.fP,OfflineAudioContext:P.fP,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e1,MediaStreamAudioSourceNode:P.e1,OscillatorNode:P.e1,Oscillator:P.e1,AudioSourceNode:P.e1,ConvolverNode:P.kV,WebGLActiveInfo:P.kr,WebGL2RenderingContext:P.o3,WebGL2RenderingContextBase:P.ra,SQLResultSetRowList:P.jP})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,HTMLTrackElement:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jz.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
W.h2.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.y4(V.vt(),b)},[])
else (function(b){H.y4(V.vt(),b)})([])})})()
//# sourceMappingURL=BioController.dart.js.map
